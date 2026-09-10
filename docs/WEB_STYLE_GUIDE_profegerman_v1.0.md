# Guía de Estilo Web — profegerman.cl v1.0

## Stack
Astro 7 + Tailwind CSS v4. Explícitamente sin vanilla CSS/BEM ni Three.js
(decisión deliberada, ver AGENTS.md).

## Paleta de color
| Nombre | Hex | Uso |
|---|---|---|
| Primario cálido (terracota) | `#D96C4B` | CTAs, acentos principales |
| Fondo cálido | `#FDF8F3` | Fondo general — evitar blanco puro/clínico |
| Texto principal | `#2E2A27` | Texto de cuerpo |
| Accesibilidad (compartido con germanriveros.cl) | `#67C6C0` | Reservado exclusivamente a elementos de accesibilidad/LSCh — mismo significado semántico en ambos sitios |
| Confirmación | `#6B9E78` | Estados de éxito (ej. "clase agendada") |

Estos valores son punto de partida. **Verificar contraste real con
axe/WAVE antes de publicar** — meta AA en todo el sitio, AAA en texto
de cuerpo dado el público. No asumir cumplimiento.

## Tipografía
- **Fuente principal: Atkinson Hyperlegible** — diseñada por el Braille
  Institute específicamente para legibilidad y baja visión. Coherente
  con el posicionamiento de accesibilidad de la marca. Alternativa más
  "moderna": Lexend.
- Tamaño base mínimo: **18px / 1.125rem** (por encima del estándar web
  de 16px), deliberado para el público.
- Interlineado mínimo: 1.6 en párrafos.
- Unidades: siempre `rem`/`em`, nunca `px` fijo (WCAG 1.4.4).
- Jerarquía visual con pocos niveles; usar peso antes que tamaño para
  no fragmentar la lectura.

## Espaciado y layout
- Espaciado generoso; evitar densidad visual.
- Tap targets mínimo 44×44px.
- Ancho de línea de texto: 60–75 caracteres máximo.

## Imágenes
- Fotografía real de Germán enseñando — no stock genérico.
- Vía `astro:assets`, siempre con `alt` descriptivo.
- Mostrar logro y dignidad, nunca confusión.

## Iconografía
- Todo ícono va acompañado de etiqueta de texto — nunca solo.
- Estilo de línea simple, sin relleno saturado.

## Movimiento
- Transiciones sutiles, nunca decorativas por sí solas.
- Bloque obligatorio de `prefers-reduced-motion` en cualquier animación
  o View Transition.

## Componentes de contenido
- **CourseCard**: nombre del curso, nivel (alfabetización/autonomía),
  duración, íconos con etiqueta.
- **TestimonialCard**: nombre, foto real (con consentimiento), cita
  breve, logro concreto.

## Checklist antes de publicar cualquier página
- [ ] Contraste verificado (no asumido)
- [ ] Navegable 100% por teclado
- [ ] Testeado con lector de pantalla
- [ ] Sin animación forzada si `prefers-reduced-motion` está activo
- [ ] Todo tamaño de texto en rem/em