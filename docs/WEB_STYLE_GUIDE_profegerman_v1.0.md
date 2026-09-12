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

## Sistema de ilustración

Dos elementos separados que se combinan entre sí: **formas orgánicas** (decorativas, sin figuras) e **ilustración de línea** (figurativa/conceptual). Ninguno de los dos reemplaza la regla de fotografía real para Germán — esta sección aplica a contenido de blog, tarjetas de conceptos, y acentos decorativos del sitio, nunca a la representación de Germán mismo o de alumnos reales.

### Cuándo usar cada elemento

| Elemento | Uso | No usar para |
|---|---|---|
| Formas orgánicas | Fondos de Hero, separadores entre secciones, acentos detrás de tarjetas | Representar personas o escenas |
| Ilustración de línea | Portadas e imágenes inline de blog, íconos de conceptos en tarjetas de curso | Reemplazar fotos reales de Germán o alumnos |

### Formas orgánicas — especificación

- Curvas suaves tipo "blob" (mancha orgánica), nunca formas geométricas de ángulos duros (evitar rectángulos, triángulos, estrellas).
- Una sola forma por composición, o máximo dos superpuestas con transparencia.
- Color plano, sin gradiente, sin sombra proyectada.
- Opacidad reducida (aprox. 15–30%) cuando la forma va detrás de texto, para no afectar el contraste.
- Tamaño: suficientemente grande para leerse como fondo ambiental, nunca como protagonista que compite con el contenido.

### Ilustración de línea — especificación

- Trazo continuo, grosor uniforme (sin variación caligráfica, sin efecto pincel/tiza, sin textura).
- Terminaciones redondeadas, curvas suaves — coherente con el estilo orgánico ya definido para íconos.
- Cero sombreado interno, cero hachurado, cero degradado.
- Nivel de detalle mínimo: la forma se sugiere con el menor número de líneas posible (referencia: un trazo de flor definido solo por los pétalos y el tallo, sin venas ni textura).
- Espacio negativo generoso alrededor de la figura — la ilustración nunca llena todo el encuadre.
- Sin fondo escénico detallado (sin habitaciones, muebles, paisajes) — si se necesita ambientación, se resuelve con una mancha orgánica de color detrás, no con una escena dibujada.
- Cero fotorrealismo, cero mezcla con render 3D, cero estilo "mascota corporativa" (Corporate Memphis / unDraw genérico).

### Reglas para figuras humanas

Esta sección existe porque el riesgo específico de esta marca es caer en el cliché de "adulto mayor confundido" — solo que dibujado en vez de fotografiado. Si una ilustración incluye una figura humana:

- Se permite solo como gesto corporal simplificado (postura completa o parcial), nunca como retrato de rostro detallado.
- Sin rasgos faciales definidos (ojos, boca, cejas) — el rostro se sugiere como una forma simple o se omite directamente.
- Postura siempre serena, neutra o de logro. Nunca encorvada, nunca con símbolos de confusión o frustración (signos de interrogación, gotas de sudor, etc.).
- Edad ambigua por defecto. Si el artículo requiere especificar edad (ej. "un nieto enseñando a su abuela"), se sugiere por postura o silueta general, nunca por estereotipos visuales (bastón, espalda muy encorvada, lentes de fondo de botella).
- Si aparece un dispositivo (celular, computador) junto a la figura, la pantalla queda en blanco, en color sólido, o sugerida con 2–3 líneas simples — nunca con interfaz falsa detallada ni código genérico tipo stock.

### Paleta permitida

| Color | Hex | Uso en ilustración |
|---|---|---|
| Trazo principal | `#2E2A27` | Línea de la ilustración (color por defecto) |
| Acento / mancha orgánica | `#D96C4B` | Forma de fondo, o trazo alternativo sobre fondo claro |
| Fondo | `#FDF8F3` | Fondo de la ilustración, sólido o transparente |
| Accesibilidad (uso restringido) | `#67C6C0` | Solo en ilustraciones cuyo tema sea accesibilidad/LSCh — mantiene la convención semántica ya definida para el resto del sitio |
| Confirmación (uso restringido) | `#6B9E78` | Solo en ilustraciones que representen un logro o cierre exitoso (ej. artículo sobre completar un trámite) |

Regla dura: **máximo 2 colores además del fondo** por ilustración (1 para el trazo, 1 para la mancha de acento). Nunca combinar más de una paleta cromática en una misma pieza.

### Especificaciones técnicas

- Formato de sitio: SVG para formas orgánicas decorativas y para íconos vectorizados a mano. PNG con fondo transparente para ilustraciones generadas por IA que no se vectoricen.
- Portadas de blog: proporción 16:9, mínimo 1600×900px.
- Imágenes inline de blog: 4:3 o cuadrada, según el layout del artículo.
- Nombrado de archivo: descriptivo, minúsculas, guiones — ej. `ilustracion-seguridad-contrasenas.png` — mismo criterio ya usado para fotografía real.
- Integración vía `astro:assets`, con `alt` descriptivo obligatorio (misma regla de accesibilidad que fotografía real).

### Checklist antes de publicar una ilustración generada por IA

- [ ] Usa solo colores de la paleta de marca (tabla anterior)
- [ ] Máximo 2 colores además del fondo
- [ ] Trazo de grosor uniforme, sin sombreado ni degradado
- [ ] Si incluye figura humana: sin rasgos faciales detallados, sin postura de confusión/frustración
- [ ] El teal de accesibilidad (`#67C6C0`) aparece solo si el tema es accesibilidad/LSCh
- [ ] Sin texto, marca de agua o logo generado por error
- [ ] Suficiente espacio negativo — no está saturada de detalle
- [ ] `alt` descriptivo agregado antes de publicar

### Prompt base para generación con IA

Plantilla (reemplazar `[SUJETO]` por el concepto del artículo):


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