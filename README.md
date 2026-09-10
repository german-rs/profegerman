# profegerman.cl

Sitio web de **Profe Germán** — clases de computación, celular y
alfabetización digital para adultos, personas mayores y quien quiera
sentirse cómodo con la tecnología, sin apuro y sin jerga.

## Estado actual

La Home está construida y compila sin errores. La estructura de
componentes ya sigue la organización definida en `docs/ARCHITECTURE.md`
(`layout/`, `sections/`, `ui/`). Lo que existe hoy:

- **Layout base** — `Layout.astro` con skip link, `Header`, `<main>`,
  `Footer`. Tema de marca aplicado (`WEB_STYLE_GUIDE_profegerman_v1.0.md`):
  paleta, tipografía Atkinson Hyperlegible, `prefers-reduced-motion`.
- **Home (`/`) completa**: Hero → Pilares de mensaje → Grid de cursos
  (Alfabetización / Autonomía digital) → Franja de accesibilidad/LSCh →
  CTA final de WhatsApp.
- **WhatsApp centralizado** en `src/lib/whatsapp.ts` — un solo lugar
  para el número y el mensaje precargado; todos los botones lo usan
  vía `components/ui/WhatsAppCTA.astro`.

Lo que **no** está construido todavía (ver "Pendientes" abajo):
páginas de curso, páginas satélite SEO, blog, content collections,
testimonios reales, y el Header/Footer completos según v1.1 de
`ARCHITECTURE.md`.

## Documentación del proyecto

Antes de tocar código, leer en este orden:

1. [`AGENTS.md`](./AGENTS.md) — contexto general del proyecto, público
   objetivo, decisiones técnicas ya tomadas y cómo se trabaja acá.
   **Punto de partida obligatorio para cualquier LLM.**
2. [`docs/BRAND_ES.md`](./docs/BRAND_ES.md) — identidad de marca,
   posicionamiento, tono de voz, anti-patrones.
3. [`docs/WEB_STYLE_GUIDE_profegerman_v1.0.md`](./docs/WEB_STYLE_GUIDE_profegerman_v1.0.md) —
   paleta, tipografía, componentes, checklist de accesibilidad.
4. [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — mapa del sitio,
   estructura de carpetas, content collections.

## Stack

- **[Astro 7](https://astro.build)** — framework principal, sitio
  estático.
- **Tailwind CSS v4** — sin vanilla CSS/BEM (decisión deliberada, ver
  `AGENTS.md`).
- **Sin Three.js ni animaciones 3D** — prioridad en velocidad para
  equipos y conexiones más antiguas.
- Interactividad liviana con **Alpine.js** si hace falta, evaluado
  antes que frameworks pesados como React o Vue.

## Estructura del proyecto (`src/`)

```
src/
├── components/
│ ├── layout/
│ │ ├── Header.astro
│ │ └── Footer.astro
│ ├── sections/
│ │ ├── Hero.astro
│ │ ├── PilaresMensaje.astro
│ │ ├── CursosGrid.astro
│ │ └── AccesibilidadBanner.astro
│ └── ui/
│ ├── CourseCard.astro
│ └── WhatsAppCTA.astro
├── layouts/
│ └── Layout.astro
├── lib/
│ └── whatsapp.ts # número + builder del link wa.me, centralizado
├── pages/
│ └── index.astro
└── styles/
└── global.css

```

`CursosGrid.astro` usa datos estáticos por ahora (no hay content
collections todavía). Los props de `CourseCard.astro` ya calzan con
el schema de la collection `cursos` documentado en
`docs/ARCHITECTURE.md`, para que migrar sea un cambio acotado.

## Pendientes / Hoja de ruta

En orden sugerido, pero no bloqueante — Germán decide el orden real:

1. **Páginas núcleo faltantes** — `/alfabetizacion-digital/`,
   `/autonomia-digital/`, `/accesibilidad/`, `/sobre-mi/`, `/blog/`.
   Mientras no existan, los links del Grid de cursos y de la franja
   de accesibilidad en la Home apuntan a rutas que dan 404.
2. **Header/Footer completos** — hoy son una versión reducida. Falta
   el nav de 6 links + CTA y el footer con CTA de WhatsApp y enlace a
   `/clases-inteligencia-artificial/` que define `ARCHITECTURE.md`
   v1.1. Depende del punto 2 (no tiene sentido linkear a páginas que
   no existen).
3. **Content collections** (`src/content.config.ts`) — `cursos`,
   `testimonios`, `blog`, con el schema ya definido en
   `docs/ARCHITECTURE.md`.
4. **Testimonios reales** — pendiente selección y consentimiento
   (ver `ARCHITECTURE.md`). La sección `TestimoniosSection` se agrega
   a la Home recién cuando exista contenido real; no se fabricó
   contenido de ejemplo a propósito.
5. **Primeros posts de blog** — una vez que haya al menos un artículo,
   se activa `BlogPreview` en la Home.
6. **Páginas satélite SEO** — construir en el orden ya definido en
   `docs/ARCHITECTURE.md` (Ahora → Pronto → Eventual), no todas de una.
7. **Fase 2** (no construir aún) — herramientas digitales para el
   trabajo y para emprendedores. Ver roadmap en `ARCHITECTURE.md`.

## Desarrollo local

```bash
npm install
npm run dev       # localhost:4321
npm run build     # build de producción a ./dist/
npm run preview   # previsualizar el build antes de desplegar
```

Correr `npm run build` localmente antes de cada push — el CI de
GitHub Actions corre en Linux (case-sensitive).

## Despliegue

GitHub Actions (`withastro/action`) → GitHub Pages → dominio propio
`profegerman.cl` vía Cloudflare (DNS/CDN, no Cloudflare Pages).

## Proyecto hermano

Este repo es deliberadamente independiente de
[germanriveros.cl](https://github.com/german-rs/portafolio) — mismo
autor, dominio, stack visual y público distintos. Ver la tabla
comparativa en `AGENTS.md` para el detalle. Germán también da clases
vía [Superprof](https://www.superprof.cl) en paralelo, sin reemplazo.

## Licencia

Proyecto personal y comercial de Germán Riveros. No es un template de
uso libre.