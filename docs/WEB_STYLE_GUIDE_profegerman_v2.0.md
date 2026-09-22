# Guía de Estilo Web — profegerman.cl v2.0

> Actualización de v1.0 a v2.0: paleta migrada de esquema cálido terracota a esquema oscuro inspirado en GitHub (dark-first). Se mantiene Atkinson Hyperlegible, la directriz AA/AAA y el token de accesibilidad LSCh. Stack sin cambios: Astro 7 + Tailwind CSS v4.

---

## Stack

Astro 7 + Tailwind CSS v4. Sin vanilla CSS/BEM ni Three.js (decisión deliberada, ver AGENTS.md).

---

## Paleta de color

### Filosofía

Dark-first: el sitio arranca en modo oscuro como GitHub. El modo claro existe pero no es el primario. La paleta usa los mismos roles semánticos que GitHub Primer para coherencia con el público técnico al que también puede ir dirigido.

---

### Fondos (superficies)

| Token Tailwind propuesto | Hex | Uso |
|---|---|---|
| `canvas-black` | `#010409` | Hero sections, máximo contraste |
| `canvas-primary` | `#0d1117` | Fondo de página — dark mode |
| `canvas-secondary` | `#161b22` | Cards, paneles, sidebars |
| `canvas-overlay` | `#1c2128` | Overlays, dropdowns |
| `canvas-subtle` | `#21262d` | Hover states, code blocks |

**Light mode:**

| Token | Hex | Uso |
|---|---|---|
| `canvas-light` | `#f6f8fa` | Fondo página — light mode |
| `canvas-white` | `#ffffff` | Cards / paneles light |

---

### Neutros / texto

| Token | Hex | Uso |
|---|---|---|
| `fg-default` | `#e6edf3` | Headings y texto destacado (dark) |
| `fg-body` | `#c9d1d9` | Texto de cuerpo principal (dark) |
| `fg-secondary` | `#b1bac4` | Texto de soporte |
| `fg-muted` | `#8b949e` | Metadatos, captions, hints |
| `fg-subtle` | `#6e7681` | Texto muy secundario, placeholders |
| `border-default` | `#30363d` | Bordes por defecto (dark) |
| `border-light` | `#d0d7de` | Bordes (light mode) |
| `fg-light-primary` | `#24292f` | Texto cuerpo (light mode) |

---

### Azul — Acento principal / CTA

Reemplaza al terracota `#D96C4B` como color de acción primaria. El azul GitHub tiene connotaciones de confianza, tecnología y profesionalismo, alineado al posicionamiento docente-técnico.

| Token | Hex | Uso |
|---|---|---|
| `accent-emphasis` | `#1158c7` | Botones primarios (rest state) |
| `accent-default` | `#2f81f7` | Links interactivos, hover fills |
| `accent-subtle` | `#58a6ff` | Texto link, badges, íconos accent |
| `accent-muted` | `#cae8ff` | Backgrounds sutiles accent (dark) |
| `accent-tint` | `#ddf4ff` | Tints muy suaves |

**CTA principal recomendado:** `bg #1158c7` + texto `#ffffff` — contraste ~7:1 ✓ AAA

---

### Púrpura — Secciones especiales / destacado pedagógico

Usar con moderación para secciones de alto impacto (hero de metodología, sección "¿Por qué Profe Germán?").

| Token | Hex | Uso |
|---|---|---|
| `premium-emphasis` | `#6e40c9` | Hero secciones especiales |
| `premium-default` | `#8957e5` | Fills destacados |
| `premium-subtle` | `#a371f7` | Texto / íconos en secciones premium |
| `premium-muted` | `#d2a8ff` | Labels en fondos oscuros |
| `premium-tint` | `#f0e6ff` | Tint fondos secciones especiales |

**Gradiente de marca:** `linear-gradient(135deg, #6e40c9, #2f81f7)` — usar en hero o banners de sección destacada, nunca en texto.

---

### Verde — Éxito / confirmación (reemplaza `#6B9E78`)

| Token | Hex | Uso |
|---|---|---|
| `success-emphasis` | `#238636` | Botón "Clase agendada", estados OK |
| `success-default` | `#3fb950` | Texto success / hover |
| `success-subtle` | `#56d364` | Indicadores activos (dot) |
| `success-muted` | `#aff5b4` | Texto success sobre fondo oscuro |
| `success-tint` | `#e6ffec` | Fondo tint success (light mode) |

---

### Accesibilidad / LSCh — sin cambios semánticos

| Token | Hex | Uso |
|---|---|---|
| `a11y-lsch` | `#67C6C0` | **Reservado exclusivamente** a elementos de accesibilidad y Lengua de Señas Chilena — mismo valor que en germanriveros.cl. No usar para decoración. |

Este token NO cambia. Es la identidad compartida entre los dos sitios de Germán.

---

### Warning / Danger (roles semánticos)

| Token | Hex | Uso |
|---|---|---|
| `warning-default` | `#e3b341` | Iconos warning, alertas no críticas |
| `warning-muted` | `#fce198` | Texto warning on dark |
| `danger-default` | `#f85149` | Errores, estados críticos |
| `danger-muted` | `#ff7b72` | Texto error on dark bg |

---

## Configuración en Tailwind CSS v4

```css
/* En tu archivo CSS principal (ej. src/styles/global.css) */

@layer base {
  :root {
    /* Fondos */
    --color-canvas-black: #010409;
    --color-canvas-primary: #0d1117;
    --color-canvas-secondary: #161b22;
    --color-canvas-overlay: #1c2128;
    --color-canvas-subtle: #21262d;
    --color-canvas-light: #f6f8fa;

    /* Neutros */
    --color-fg-default: #e6edf3;
    --color-fg-body: #c9d1d9;
    --color-fg-secondary: #b1bac4;
    --color-fg-muted: #8b949e;
    --color-fg-subtle: #6e7681;
    --color-border-default: #30363d;
    --color-border-light: #d0d7de;

    /* Azul — acento */
    --color-accent-emphasis: #1158c7;
    --color-accent-default: #2f81f7;
    --color-accent-subtle: #58a6ff;
    --color-accent-muted: #cae8ff;

    /* Púrpura — premium/especial */
    --color-premium-emphasis: #6e40c9;
    --color-premium-default: #8957e5;
    --color-premium-subtle: #a371f7;
    --color-premium-muted: #d2a8ff;

    /* Verde — éxito */
    --color-success-emphasis: #238636;
    --color-success-default: #3fb950;
    --color-success-subtle: #56d364;
    --color-success-muted: #aff5b4;

    /* Accesibilidad LSCh — inmutable */
    --color-a11y-lsch: #67C6C0;

    /* Warning / Danger */
    --color-warning-default: #e3b341;
    --color-danger-default: #f85149;
  }
}
```

En `tailwind.config` (si usas config explícita):

```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        canvas: {
          black:     'var(--color-canvas-black)',
          primary:   'var(--color-canvas-primary)',
          secondary: 'var(--color-canvas-secondary)',
          overlay:   'var(--color-canvas-overlay)',
          subtle:    'var(--color-canvas-subtle)',
          light:     'var(--color-canvas-light)',
        },
        fg: {
          default:   'var(--color-fg-default)',
          body:      'var(--color-fg-body)',
          secondary: 'var(--color-fg-secondary)',
          muted:     'var(--color-fg-muted)',
          subtle:    'var(--color-fg-subtle)',
        },
        border: {
          default: 'var(--color-border-default)',
          light:   'var(--color-border-light)',
        },
        accent: {
          emphasis: 'var(--color-accent-emphasis)',
          default:  'var(--color-accent-default)',
          subtle:   'var(--color-accent-subtle)',
          muted:    'var(--color-accent-muted)',
        },
        premium: {
          emphasis: 'var(--color-premium-emphasis)',
          default:  'var(--color-premium-default)',
          subtle:   'var(--color-premium-subtle)',
          muted:    'var(--color-premium-muted)',
        },
        success: {
          emphasis: 'var(--color-success-emphasis)',
          default:  'var(--color-success-default)',
          subtle:   'var(--color-success-subtle)',
          muted:    'var(--color-success-muted)',
        },
        lsch: 'var(--color-a11y-lsch)',
        warning: { default: 'var(--color-warning-default)' },
        danger:  { default: 'var(--color-danger-default)' },
      },
    },
  },
}
```

---

## Tipografía

Sin cambios respecto a v1.0 — estas decisiones son correctas e independientes de la paleta:

- **Fuente principal: Atkinson Hyperlegible** (Braille Institute) — coherente con accesibilidad. Alternativa: Lexend.
- Tamaño base mínimo: **18px / 1.125rem** — deliberado para el público adulto.
- Interlineado mínimo: 1.6 en párrafos.
- Unidades: siempre `rem`/`em`, nunca `px` fijo (WCAG 1.4.4).
- Jerarquía con pocos niveles; usar peso antes que tamaño.

**Colores de texto recomendados:**

| Elemento | Dark mode | Light mode |
|---|---|---|
| `h1`, `h2` | `#e6edf3` | `#24292f` |
| Cuerpo (`p`) | `#c9d1d9` | `#57606a` |
| Secundario | `#b1bac4` | `#6e7681` |
| Muted / hint | `#8b949e` | `#6e7681` |

---

## Espaciado y layout

Sin cambios respecto a v1.0:

- Espaciado generoso; evitar densidad visual.
- Tap targets mínimo 44×44px.
- Ancho de línea de texto: 60–75 caracteres máximo.

---

## Imágenes

Sin cambios respecto a v1.0:

- Fotografía real de Germán enseñando — no stock genérico.
- Vía `astro:assets`, siempre con `alt` descriptivo.
- Mostrar logro y dignidad, nunca confusión.

---

## Iconografía

Sin cambios respecto a v1.0:

- Todo ícono va acompañado de etiqueta de texto — nunca solo.
- Estilo de línea simple, sin relleno saturado.
- En dark mode: íconos en `#8b949e` (rest) → `#e6edf3` (hover/active).

---

## Movimiento

Sin cambios respecto a v1.0:

- Transiciones sutiles, nunca decorativas por sí solas.
- Bloque obligatorio de `prefers-reduced-motion` en cualquier animación o View Transition.

---

## Componentes de contenido

### CourseCard (actualizado)

```astro
<!-- Fondo: canvas-secondary, borde: border-default -->
<!-- Nombre del curso: fg-default, nivel en badge accent-muted/accent-subtle -->
<!-- CTA: accent-emphasis con texto blanco -->
```

### TestimonialCard (actualizado)

```astro
<!-- Fondo: canvas-secondary -->
<!-- Cita: fg-body, nombre: fg-default, logro: success-subtle -->
```

---

## Uso correcto de colores por contexto

| Contexto | Color correcto | Evitar |
|---|---|---|
| CTA principal ("Agenda tu clase") | `accent-emphasis` `#1158c7` | Terracota v1.0 |
| Sección hero / banner | `canvas-black` o gradiente púrpura→azul | Blanco puro |
| Texto de cuerpo | `fg-body` `#c9d1d9` | Blanco puro (fatiga visual) |
| Links | `accent-subtle` `#58a6ff` | Azul web genérico |
| Elemento LSCh / accesibilidad | `lsch` `#67C6C0` | Cualquier otro uso |
| "Clase agendada" / éxito | `success-subtle` `#56d364` | Verde v1.0 `#6B9E78` |
| Sección metodología (énfasis) | `premium-subtle` `#a371f7` | Solo para highlights |

---

## Contraste — guía rápida

| Combinación | Ratio estimado | Nivel |
|---|---|---|
| `#ffffff` sobre `#1158c7` | ~7.0:1 | ✓ AAA |
| `#e6edf3` sobre `#0d1117` | ~14.5:1 | ✓ AAA |
| `#c9d1d9` sobre `#0d1117` | ~11.2:1 | ✓ AAA |
| `#58a6ff` sobre `#0d1117` | ~5.9:1 | ✓ AA |
| `#8b949e` sobre `#0d1117` | ~4.1:1 | ✓ AA |
| `#67C6C0` sobre `#0d1117` | ~8.3:1 | ✓ AAA |

**Verificar siempre con axe/WAVE antes de publicar — meta AA en todo, AAA en cuerpo.**

---

## Checklist antes de publicar cualquier página

- [ ] Contraste verificado (no asumido) con axe/WAVE
- [ ] Navegable 100% por teclado
- [ ] Testeado con lector de pantalla
- [ ] Sin animación forzada si `prefers-reduced-motion` está activo
- [ ] Todo tamaño de texto en rem/em
- [ ] Token `lsch` `#67C6C0` usado SOLO en elementos de accesibilidad/LSCh
- [ ] Dark mode verificado en las secciones principales

---

## Migración desde v1.0

| Token v1.0 | Reemplazo v2.0 | Notas |
|---|---|---|
| `#D96C4B` (terracota) | `#1158c7` accent-emphasis | Mismo rol semántico: CTA, acentos |
| `#FDF8F3` (fondo cálido) | `#0d1117` canvas-primary | Dark-first — light mode usa `#f6f8fa` |
| `#2E2A27` (texto principal) | `#c9d1d9` fg-body | En dark; `#24292f` en light |
| `#67C6C0` (LSCh) | `#67C6C0` lsch | **Sin cambio** — token semántico inmutable |
| `#6B9E78` (confirmación) | `#238636` success-emphasis | Mismo rol, más saturado |