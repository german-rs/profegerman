import type { APIRoute } from "astro";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const W = 1200;
const H = 630;

const C = {
  bg: "#fdf8f3",
  primary: "#d96c4b",
  text: "#2e2a27",
  textSoft: "#4a4541", // texto secundario en color sólido (sin opacity)
};

const ART_PATH = join(process.cwd(), "public/illustrations/og-escena.png");

const fontFile = (weight: 400 | 700) =>
  join(
    process.cwd(),
    `node_modules/@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-${weight}-normal.woff`,
  );

// Helper mínimo para armar el árbol que espera Satori (sin React)
const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
});

export const GET: APIRoute = async () => {
  // Satori (ESM) puede fallar con "__dirname is not defined" en Node:
  // se define antes de importarlo de forma dinámica.
  (globalThis as any).__dirname ??= process.cwd();
  const { default: satori } = await import("satori");

  const [regular, bold] = await Promise.all([
    readFile(fontFile(400)),
    readFile(fontFile(700)),
  ]);

  // Validación: la ilustración debe ser vertical (≈857×983). Si es horizontal,
  // probablemente se copió por error la tarjeta completa (og-preview.png).
  const meta = await sharp(ART_PATH).metadata();
  if (!meta.width || !meta.height || meta.width >= meta.height) {
    throw new Error(
      `public/illustrations/og-escena.png mide ${meta.width}x${meta.height}. ` +
        "Debe ser la ilustración vertical de los personajes (≈857x983), " +
        "no la tarjeta completa (og-preview.png).",
    );
  }

  const { data, info } = await sharp(ART_PATH)
    .resize({ height: 540 })
    .png()
    .toBuffer({ resolveWithObject: true });

  const artSrc = `data:image/png;base64,${data.toString("base64")}`;

  const tree = h(
    "div",
    {
      width: W,
      height: H,
      display: "flex",
      position: "relative",
      backgroundColor: C.bg,
      fontFamily: "Atkinson",
    },
    [
      // Círculo terracota, asoma por el borde derecho e inferior
      h("div", {
        position: "absolute",
        right: -70,
        bottom: -120,
        width: 560,
        height: 560,
        borderRadius: 9999,
        backgroundColor: C.primary,
      }),
      // Personajes
      {
        type: "img",
        props: {
          src: artSrc,
          width: info.width,
          height: info.height,
          style: { position: "absolute", right: 70, bottom: 0 },
        },
      },
      // Texto
      h(
        "div",
        {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: 590,
          paddingLeft: 72,
          paddingBottom: 50,
        },
        [
          h(
            "div",
            { fontSize: 26, fontWeight: 700, color: C.primary, marginBottom: 18 },
            "Clases particulares a domicilio",
          ),
          h(
            "div",
            { fontSize: 58, fontWeight: 700, color: C.text, lineHeight: 1.12 },
            "Computación desde cero para adultos",
          ),
          h(
            "div",
            { display: "flex", flexDirection: "column", marginTop: 24 },
            [
              h("div", { fontSize: 28, color: C.textSoft }, "Primera clase gratis"),
              h("div", { fontSize: 28, color: C.textSoft }, "Toda la Región Metropolitana"),
            ],
          ),
        ],
      ),
      h(
        "div",
        {
          position: "absolute",
          left: 72,
          bottom: 44,
          fontSize: 28,
          fontWeight: 700,
          color: C.primary,
        },
        "profegerman.cl",
      ),
    ],
  );

  const svg = await satori(tree as any, {
    width: W,
    height: H,
    fonts: [
      { name: "Atkinson", data: regular, weight: 400, style: "normal" },
      { name: "Atkinson", data: bold, weight: 700, style: "normal" },
    ],
  });

  // Se renderiza al doble y se reduce: bordes de letras más parejos.
  // PNG con paleta: pesa poco (WhatsApp ignora imágenes pesadas) y no
  // introduce artefactos como el JPEG.
  const big = new Resvg(svg, { fitTo: { mode: "width", value: W * 2 } }).render().asPng();
  const png = await sharp(big)
    .resize(W, H, { kernel: "lanczos3" })
    .png({ palette: true, quality: 95, effort: 10, compressionLevel: 9 })
    .toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};