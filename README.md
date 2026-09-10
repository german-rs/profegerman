# profegerman.cl

Sitio web de **Profe Germán** — clases de computación, celular y
alfabetización digital para adultos, personas mayores y quien quiera
sentirse cómodo con la tecnología, sin apuro y sin jerga.

## Estado actual

Proyecto en fase de definición de arquitectura y contenido. Todavía
no hay componentes ni páginas de producto construidas — el código
base es el starter kit de Astro sin modificar. Lo que sí existe es la
documentación completa de marca, estilo y arquitectura (ver abajo),
pensada para que cualquier persona o LLM que entre al repo tenga
contexto completo sin tener que preguntar de nuevo.

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

## Proyecto hermano

Este repo es deliberadamente independiente de
[germanriveros.cl](https://github.com/german-rs/portafolio) — mismo
autor, dominio, stack visual y público distintos. Ver la tabla
comparativa en `AGENTS.md` para el detalle. Germán también da clases
vía [Superprof](https://www.superprof.cl) en paralelo, sin reemplazo.

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

## Licencia

Proyecto personal y comercial de Germán Riveros. No es un template de
uso libre.