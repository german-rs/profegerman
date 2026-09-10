# Arquitectura de Sitio — profegerman.cl v1.0

Complementa a `AGENTS.md`, `BRAND_ES.md` y `WEB_STYLE_GUIDE_profegerman_v1.0.md`.
Define páginas, componentes y estructura de contenido para el lanzamiento
(Fase 1). No reabrir el alcance de Fase 1 sin que Germán lo pida
explícitamente (ver `AGENTS.md`).

## Mapa del sitio (Fase 1)

| Ruta | Página | Rol |
|---|---|---|
| `/` | Home | Landing principal — hub que conecta todo |
| `/cursos/alfabetizacion-digital/` | Curso 1 | Página de venta del curso base |
| `/cursos/autonomia-digital/` | Curso 2 | Página de venta del curso base |
| `/cursos/ia-para-principiantes/` | Curso 3 | Gancho de marketing / puerta de entrada |
| `/accesibilidad/` | Accesibilidad y LSCh | Diferenciador de marca, terreno SEO propio |
| `/sobre-mi/` | Sobre mí | Credencial técnica + enlace cruzado a germanriveros.cl |

6 páginas totales. No agregar `/cursos/` como índice separado — los cursos
se descubren desde el bloque de cursos en Home; cada `CourseCard` enlaza
directo a su página.

## Navegación

**Header (nav plana, sin dropdowns — evita fricción cognitiva/motora):**
Inicio · Alfabetización digital · Autonomía digital · IA para principiantes · Accesibilidad · Sobre mí · [CTA WhatsApp]

Si en mobile 6 links + CTA es demasiado, colapsar cursos bajo un solo
link "Cursos" que ancla a la sección de cursos en Home (`/#cursos`) —
decisión a validar en diseño real, no bloquea esta arquitectura.

**Footer (en las 6 páginas):**
Enlace cruzado obligatorio a germanriveros.cl · CTA WhatsApp · redes
(si existen) · nombre legal completo · aviso de accesibilidad.

## Estructura de carpetas (`src/`)

```
src/
├── assets/
│   ├── fotos/              # fotografía real de Germán enseñando
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppCTA.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── PilaresMensaje.astro
│   │   ├── CursosGrid.astro
│   │   ├── TestimoniosSection.astro
│   │   └── AccesibilidadBanner.astro
│   └── ui/
│       ├── CourseCard.astro
│       ├── TestimonialCard.astro
│       └── FAQAccordion.astro
├── content/
│   ├── cursos/
│   │   ├── alfabetizacion-digital.md
│   │   ├── autonomia-digital.md
│   │   └── ia-para-principiantes.md
│   └── testimonios/
│       └── (un .md por testimonio)
├── content.config.ts
├── layouts/
│   └── Layout.astro
└── pages/
    ├── index.astro
    ├── accesibilidad.astro
    ├── sobre-mi.astro
    └── cursos/
        └── [slug].astro     # ruta dinámica generada desde la collection
```

## Content Collections (Content Layer API, Astro 7)

```ts
// src/content.config.ts
import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
  schema: z.object({
    title: z.string(),
    nivel: z.enum(['alfabetizacion', 'autonomia', 'ia']),
    fase: z.number().default(1), // nunca 2 en el lanzamiento
    duracion: z.string(),
    resumen: z.string(),      // para el CourseCard
    temas: z.array(z.string()),
    ordenHome: z.number(),
  }),
});

const testimonios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonios' }),
  schema: ({ image }) => z.object({
    nombre: z.string(),
    foto: image(),
    cita: z.string(),
    logro: z.string(),
    curso: reference('cursos').optional(), // para filtrar por página de curso
  }),
});

export const collections = { cursos, testimonios };
```

`fase: 1` en el schema deja la puerta abierta a Fase 2 (herramientas para
el trabajo / emprendedores) sin refactorizar el schema — simplemente se
agregan cursos con `fase: 2` y se filtran en las queries hasta que
Germán decida lanzarlos.

## Plan de contenido por página

### Home (`/`)
1. Header
2. Hero — posicionamiento + tagline + CTA WhatsApp
3. PilaresMensaje — los 3 pilares (paciencia, autonomía, accesibilidad)
4. CursosGrid — 3 `CourseCard`, cada uno enlaza a su página propia
5. AccesibilidadBanner — franja LSCh/WCAG, enlaza a `/accesibilidad`
6. TestimoniosSection — 2–3 testimonios destacados
7. CTA WhatsApp final
8. Footer

### `/cursos/[slug]/` (una instancia por curso)
1. Header
2. Mini-hero del curso — título, nivel, duración
3. Descripción completa — "para quién es este curso"
4. Temas cubiertos (lista, con íconos + etiqueta)
5. Testimonios filtrados por `curso` (si existen)
6. CTA WhatsApp específico del curso ("Quiero aprender esto")
7. Footer

### `/accesibilidad/`
1. Header
2. Hero de la página — el compromiso real, no un checkbox
3. Qué significa en la práctica (LSCh en clase, WCAG en el sitio)
4. Testimonio relacionado (si existe)
5. CTA WhatsApp
6. Footer

### `/sobre-mi/`
1. Header
2. Foto real + historia breve
3. Rigor técnico como garantía silenciosa — mención breve, no el mensaje
   principal (ver `BRAND_ES.md`)
4. Nombre legal completo (única página + footer donde aparece)
5. Enlace cruzado a germanriveros.cl
6. CTA WhatsApp
7. Footer

## Pendiente de definir (no bloquea empezar a construir)
- Copy final de cada curso (resumen + descripción completa + temas)
- Selección y consentimiento de testimonios/fotos reales
- Si el menú mobile colapsa cursos bajo un solo link o los mantiene planos