# Arquitectura de Sitio — profegerman.cl v1.1

Complementa a `AGENTS.md`, `BRAND_ES.md` y `WEB_STYLE_GUIDE_profegerman_v1.0.md`.
Define páginas, componentes y estructura de contenido para el lanzamiento
(Fase 1) y deja documentado el roadmap de Fase 2. No reabrir el alcance
de Fase 1 sin que Germán lo pida explícitamente (ver `AGENTS.md`).

**v1.1 — cambios sobre v1.0:**
- Se elimina la ruta dinámica `/cursos/[slug]/`. Cada curso vive en una
  URL plana propia que fusiona página pilar (SEO) y página de venta en
  una sola (decisión de Germán — evita contenido duplicado y URLs casi
  idénticas compitiendo por el mismo keyword).
- Se agregan las páginas SEO satélite acordadas (búsquedas de cola
  larga con alta intención), organizadas por fase de construcción.
- "IA para principiantes" sale del nav principal — pasa a ser gancho
  de marketing descubierto vía blog/redes, no un curso más (corrige
  inconsistencia de v1.0 respecto a `AGENTS.md`).
- Se agrega el blog como canal de contenido informativo.
- Se documenta el roadmap de Fase 2 (aún no se construye).

## Decisión de URLs: páginas fusionadas (pilar + venta)

Cada curso base tiene **una sola página**, en la raíz del sitio, sin
prefijo `/cursos/`:

- `/alfabetizacion-digital/` — hace de página pilar (SEO, término
  genérico de mayor volumen) y de página de venta del curso a la vez.
- `/autonomia-digital/` — mismo criterio.

Razón: con solo 2-3 cursos base, una ruta dinámica por slug es
sobre-ingeniería, y tener pilar y venta separados (`/alfabetizacion-digital/`
vs `/cursos/alfabetizacion-digital/`) generaba dos URLs casi idénticas
compitiendo por el mismo keyword. Una sola página por tema es más simple
de mantener para un solo redactor de contenido.

## Mapa del sitio — Fase 1 (lanzamiento)

**Núcleo (en el nav principal):**

| Ruta | Página | Rol |
|---|---|---|
| `/` | Home | Landing principal — hub que conecta todo |
| `/alfabetizacion-digital/` | Curso 1 | Pilar SEO + venta fusionados |
| `/autonomia-digital/` | Curso 2 | Pilar SEO + venta fusionados |
| `/blog/` | Blog (índice) | Contenido informativo, captación de cola larga |
| `/accesibilidad/` | Accesibilidad y LSCh | Diferenciador de marca, terreno SEO propio |
| `/sobre-mi/` | Sobre mí | Credencial técnica + enlace cruzado a germanriveros.cl |

**Satélite (fuera del nav, descubiertas por búsqueda o enlace interno):**

| Ruta | Objetivo de búsqueda | Público | Fase de construcción |
|---|---|---|---|
| `/clases-computacion-adulto-mayor/` | "clases de computación para adultos mayores" | Persona mayor | Ahora — segmento ya validado en Superprof |
| `/clases-computacion-adultos/` | "clases de computación para adultos" | Adulto sin experiencia | Ahora |
| `/clases-computacion-santiago/` | "profesor de computación en Santiago" | Todos (intención local) | Ahora — alinear con Google Business Profile |
| `/clases-celular-adultos/` | "aprender a usar celular" | Adulto / usuario de celular | Pronto |
| `/alfabetizacion-digital-empleo/` | "aprender computación para buscar trabajo" | Busca trabajo (público 3) | Pronto — página puede existir antes de que el curso de Fase 2 esté listo, apuntando a clases 1 a 1 mientras tanto |
| `/clases-inteligencia-artificial/` | "IA para principiantes", "ChatGPT para principiantes" | Gancho de marketing, todos | Eventual — fuera del nav, se enlaza desde blog y redes |

No construir todas de una — seguir el orden de la columna "fase de
construcción". Cada satélite es contenido único (nunca copiar el pilar),
y cierra con un CTA hacia el curso correspondiente.

## Roadmap Fase 2 (no construir aún, documentado para no perderlo)

| Ruta tentativa | Curso | Público |
|---|---|---|
| `/alfabetizacion-digital-empleo/` (ya existe como satélite, se convierte en página de curso completa) | Herramientas digitales para el trabajo | Persona que busca trabajo (público 3) |
| `/alfabetizacion-digital-emprendedores/` (tentativa, validar keyword antes de construir) | Herramientas digitales para emprendedores | Dueño de pyme/emprendedor — **pendiente**: formalizar como público objetivo en `BRAND_ES.md`/`AGENTS.md` cuando se acerque esta fase |

## Navegación

**Header (nav plana, sin dropdowns):**
Inicio · Alfabetización digital · Autonomía digital · Blog · Accesibilidad · Sobre mí · [CTA WhatsApp]

6 links + CTA — mismo conteo que v1.0, IA para principiantes salió y
Blog entró en su lugar. Si en mobile sigue siendo demasiado, evaluar
menú hamburguesa antes que recortar links (decisión de diseño real,
no bloquea esta arquitectura).

**Footer (en todas las páginas, núcleo y satélite):**
Enlace cruzado obligatorio a germanriveros.cl · CTA WhatsApp · redes
(si existen) · nombre legal completo · aviso de accesibilidad · enlace
a `/clases-inteligencia-artificial/` (para que tenga descubribilidad
sin estar en el header).

## Estructura de carpetas (`src/`)

```
src/
├── assets/
│ ├── fotos/ # fotografía real de Germán enseñando
│ └── icons/
├── components/
│ ├── layout/
│ │ ├── Header.astro
│ │ ├── Footer.astro
│ │ └── WhatsAppCTA.astro
│ ├── sections/
│ │ ├── Hero.astro
│ │ ├── PilaresMensaje.astro
│ │ ├── CursosGrid.astro
│ │ ├── TestimoniosSection.astro
│ │ ├── AccesibilidadBanner.astro
│ │ └── BlogPreview.astro # últimos 3 posts en Home
│ └── ui/
│ ├── CourseCard.astro
│ ├── TestimonialCard.astro
│ ├── BlogPostCard.astro
│ └── FAQAccordion.astro
├── content/
│ ├── cursos/ # metadata para CourseCard (no genera páginas)
│ │ ├── alfabetizacion-digital.md
│ │ └── autonomia-digital.md
│ ├── testimonios/
│ │ └── (un .md por testimonio)
│ └── blog/
│ └── (un .md por artículo)
├── content.config.ts
├── layouts/
│ ├── Layout.astro
│ ├── LandingSEO.astro # plantilla compartida para páginas satélite
│ └── BlogPost.astro # plantilla para artículos de blog
└── pages/
├── index.astro
├── alfabetizacion-digital.astro
├── autonomia-digital.astro
├── clases-inteligencia-artificial.astro
├── accesibilidad.astro
├── sobre-mi.astro
├── clases-computacion-adultos.astro
├── clases-computacion-adulto-mayor.astro
├── clases-celular-adultos.astro
├── clases-computacion-santiago.astro
├── alfabetizacion-digital-empleo.astro
└── blog/
├── index.astro
└── [slug].astro
```

Nota técnica: las páginas satélite viven **directas en `src/pages/`**
(no en una subcarpeta) porque en Astro la carpeta de `pages/` refleja
la URL uno a uno — una subcarpeta `seo/` generaría `/seo/algo/` y
rompería el requisito de URLs planas. Lo que sí se comparte entre ellas
es `LandingSEO.astro`, para no repetir el mismo layout de "hero +
testimonio + CTA" seis veces.

## Content Collections (Content Layer API, Astro 7)

```ts
// src/content.config.ts
import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
  schema: z.object({
    title: z.string(),
    nivel: z.enum(['alfabetizacion', 'autonomia']),
    fase: z.number().default(1),
    duracion: z.string(),
    resumen: z.string(),      // para el CourseCard
    temas: z.array(z.string()),
    ordenHome: z.number(),
  }),
});
// Nota: esta colección alimenta el CourseCard en Home. El contenido
// completo de cada página de curso se escribe directo en su .astro
// (alfabetizacion-digital.astro / autonomia-digital.astro), no se
// genera desde esta colección — son solo 2 páginas, no justifica
// una ruta dinámica.

const testimonios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonios' }),
  schema: ({ image }) => z.object({
    nombre: z.string(),
    foto: image(),
    cita: z.string(),
    logro: z.string(),
    curso: reference('cursos').optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),           // meta description, 150-160 caracteres
    pubDate: z.date(),
    categoria: z.enum([
      'alfabetizacion', 'autonomia', 'ia',
      'empleo', 'emprendimiento', 'accesibilidad',
    ]),
    cursoRelacionado: reference('cursos').optional(), // define el CTA de cierre
    imagenDestacada: image(),
    imagenAlt: z.string(),
    palabraClaveObjetivo: z.string(),  // uso interno, no se muestra en la página
    draft: z.boolean().default(false),
  }),
});

export const collections = { cursos, testimonios, blog };
```

## Plan de contenido por página

### Home (`/`)
1. Header
2. Hero — posicionamiento + tagline + CTA WhatsApp
3. PilaresMensaje — los 3 pilares (paciencia, autonomía, accesibilidad)
4. CursosGrid — 2 `CourseCard` (alfabetización, autonomía)
5. AccesibilidadBanner — franja LSCh/WCAG, enlaza a `/accesibilidad`
6. TestimoniosSection — 2–3 testimonios destacados
7. BlogPreview — últimos 3 posts
8. CTA WhatsApp final
9. Footer

### `/alfabetizacion-digital/` y `/autonomia-digital/`
1. Header
2. Hero orientado al keyword pilar (ej. "alfabetización digital")
3. Para quién es este curso
4. Temas cubiertos (lista, íconos + etiqueta)
5. Testimonios filtrados por curso
6. CTA WhatsApp específico ("Quiero aprender esto")
7. Footer

### Páginas satélite (patrón repetido vía `LandingSEO.astro`)
1. Header
2. Hero orientado al keyword exacto de esa página (no genérico)
3. Contenido único — 2-3 párrafos que resuelven la intención específica
4. Testimonio relacionado (si existe)
5. CTA hacia el curso correspondiente
6. Footer

### `/blog/` (índice) y `/blog/[slug]/` (artículo)
Índice: grid de `BlogPostCard`, filtrable por categoría.
Artículo: título, fecha, contenido, CTA de cierre hacia `cursoRelacionado`
si existe, enlaces internos hacia el pilar de su categoría.

### `/accesibilidad/` y `/sobre-mi/`
Sin cambios respecto a v1.0.

## Pendiente de definir (no bloquea empezar a construir)
- Copy final de cada curso y de cada página satélite
- Selección y consentimiento de testimonios/fotos reales
- Validar keyword real para `/alfabetizacion-digital-emprendedores/`
  antes de construirla
- Cadencia de publicación del blog (sugerido: liviano, 1 post cada
  2 semanas — a decidir según disponibilidad real de Germán)
- Formalizar "dueño de pyme/emprendedor" como público objetivo en
  `BRAND_ES.md` cuando se acerque Fase 2