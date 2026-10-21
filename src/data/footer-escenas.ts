export interface Pieza {
  src: string;
  width: number;
  height: number;
  clases: string; // posición y ancho (Tailwind)
}

export interface Escena {
  sol: string; // posición y ancho del círculo
  grupo: Pieza;
  extra?: Pieza; // personaje sentado delante de la ola (opcional)
}

// La escena actual del inicio, tal cual está hoy en Footer.astro
const inicio: Escena = {
  sol: "bottom-[16%] left-[-1%] w-[72%] sm:bottom-[32%] sm:left-[16%] sm:w-[40%] lg:bottom-[24%] lg:left-[21%] lg:w-[34%]",
  grupo: {
    src: "/illustrations/despedida-grupo.webp",
    width: 1208,
    height: 1280,
    clases: "left-[2%] w-[66%] sm:left-[10%] sm:w-[52%] lg:left-[16%] lg:w-[44%]",
  },
  extra: {
    src: "/illustrations/despedida-hermano.webp",
    width: 1024,
    height: 1536,
    clases:
      "bottom-[-20%] right-10 w-[38%] sm:bottom-[-30%] sm:right-[10%] sm:w-[35%] md:bottom-[-30%] lg:bottom-[-30%] lg:right-[17%] lg:w-[25%]",
  },
};

// Para cada escena nueva: copia las clases de "inicio" y ajústalas a ojo.
export const escenas: Record<string, Escena> = {
  "/": inicio,
  "/alfabetizacion-digital": {
    ...inicio,
    grupo: { ...inicio.grupo, src: "/illustrations/despedida-alfabetizacion.webp" },
    extra: undefined,
  },
  "/autonomia-digital": {
    ...inicio,
    grupo: { ...inicio.grupo, src: "/illustrations/despedida-autonomia.webp" },
    extra: undefined,
  },
  "/sobre-mi": {
    ...inicio,
    grupo: { ...inicio.grupo, src: "/illustrations/despedida-sobre-mi.webp" },
    extra: undefined,
  },
  "/accesibilidad": {
    ...inicio,
    grupo: { ...inicio.grupo, src: "/illustrations/despedida-accesibilidad.webp" },
    extra: undefined,
  },
};

export function escenaPara(pathname: string): Escena {
  const ruta = pathname.replace(/\/+$/, "") || "/";
  if (ruta === "/blog" || ruta.startsWith("/blog/")) return inicio;
  return escenas[ruta] ?? inicio;
}