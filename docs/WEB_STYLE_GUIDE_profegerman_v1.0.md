# Guía de Estilo Web — profegerman.cl v1.1

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
| Profe (azul suave, mismo tono que germanriveros.cl) | `#7E98CE` | Reservado a las ilustraciones del profe (círculos de fondo). Usar siempre con opacidad (`bg-profe/30`), nunca pleno. No usar para texto ni bordes: no cumple contraste sobre `#FDF8F3` |

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
- Las ilustraciones (ver "Sistema de ilustración") nunca sustituyen la
  fotografía real de Germán ni de alumnos reales.

## Iconografía
- Todo ícono va acompañado de etiqueta de texto — nunca solo.
- Estilo de línea simple, sin relleno saturado.

## Sistema de ilustración

Dos elementos separados que se combinan entre sí: **formas orgánicas** (decorativas, sin figuras) e **ilustración de línea** (figurativa/conceptual). Ninguno de los dos reemplaza la regla de fotografía real para Germán — esta sección aplica a contenido de blog, tarjetas de conceptos, y acentos decorativos del sitio, nunca a la representación de alumnos reales.

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
  duración, íconos con etiqueta. Puede incluir un personaje de tinta de
  medio cuerpo (ver "Sistema de ilustración").
- **TestimonialCard**: nombre, foto real (con consentimiento), cita
  breve, logro concreto.

## Checklist antes de publicar cualquier página
- [ ] Contraste verificado (no asumido)
- [ ] Navegable 100% por teclado
- [ ] Testeado con lector de pantalla
- [ ] Sin animación forzada si `prefers-reduced-motion` está activo
- [ ] Todo tamaño de texto en rem/em
- [ ] Las ilustraciones cumplen el checklist de "Sistema de ilustración"

## Sistema de ilustración

Tres elementos separados que se combinan entre sí: **formas orgánicas**
(decorativas, sin figuras), **ilustración de línea** (figurativa/conceptual)
y **personajes de tinta** (escenas con la familia de personajes del sitio).
Ninguno de los tres reemplaza la regla de fotografía real para Germán — esta
sección aplica a hero, contenido de blog, tarjetas de conceptos y acentos
decorativos del sitio, nunca a la representación de Germán mismo o de
alumnos reales.

### Cuándo usar cada elemento

| Elemento | Uso | No usar para |
|---|---|---|
| Formas orgánicas | Fondos de Hero, separadores entre secciones, acentos detrás de tarjetas | Representar personas o escenas |
| Ilustración de línea | Portadas e imágenes inline de blog, íconos de conceptos en tarjetas de curso | Reemplazar fotos reales de Germán o alumnos |
| Personajes de tinta | Hero, tarjetas de concepto y nivel, cabeceras de blog, bloques explicativos | Representar a Germán, alumnos reales o testimonios; mostrar miedo o frustración en textos sobre errores o estafas |

### Formas orgánicas — especificación

- Curvas suaves tipo "blob" (mancha orgánica), nunca formas geométricas de
  ángulos duros (evitar rectángulos, triángulos, estrellas).
- Una sola forma por composición, o máximo dos superpuestas con
  transparencia.
- Color plano, sin gradiente, sin sombra proyectada.
- Opacidad reducida (aprox. 15–30%) cuando la forma va detrás de texto, para
  no afectar el contraste.
- Tamaño: suficientemente grande para leerse como fondo ambiental, nunca
  como protagonista que compite con el contenido.

### Ilustración de línea — especificación

- Trazo continuo, grosor uniforme (sin variación caligráfica, sin efecto
  pincel/tiza, sin textura).
- Terminaciones redondeadas, curvas suaves — coherente con el estilo
  orgánico ya definido para íconos.
- Cero sombreado interno, cero hachurado, cero degradado.
- Nivel de detalle mínimo: la forma se sugiere con el menor número de
  líneas posible (referencia: un trazo de flor definido solo por los
  pétalos y el tallo, sin venas ni textura).
- Espacio negativo generoso alrededor de la figura — la ilustración nunca
  llena todo el encuadre.
- Sin fondo escénico detallado (sin habitaciones, muebles, paisajes) — si
  se necesita ambientación, se resuelve con una mancha orgánica de color
  detrás, no con una escena dibujada.
- Cero fotorrealismo, cero mezcla con render 3D, cero estilo "mascota
  corporativa" (Corporate Memphis / unDraw genérico).

### Reglas para figuras humanas (ilustración de línea)

Estas reglas aplican a la ilustración de línea. Los personajes de tinta
siguen su propia especificación (siguiente subsección), que mantiene las
mismas reglas de dignidad.

Esta sección existe porque el riesgo específico de esta marca es caer en el
cliché de "adulto mayor confundido" — solo que dibujado en vez de
fotografiado. Si una ilustración incluye una figura humana:

- Se permite solo como gesto corporal simplificado (postura completa o
  parcial), nunca como retrato de rostro detallado.
- Sin rasgos faciales definidos (ojos, boca, cejas) — el rostro se sugiere
  como una forma simple o se omite directamente.
- Postura siempre serena, neutra o de logro. Nunca encorvada, nunca con
  símbolos de confusión o frustración (signos de interrogación, gotas de
  sudor, etc.).
- Edad ambigua por defecto. Si el artículo requiere especificar edad (ej.
  "un nieto enseñando a su abuela"), se sugiere por postura o silueta
  general, nunca por estereotipos visuales (bastón, espalda muy encorvada,
  lentes de fondo de botella).
- Si aparece un dispositivo (celular, computador) junto a la figura, la
  pantalla queda en blanco, en color sólido, o sugerida con 2–3 líneas
  simples — nunca con interfaz falsa detallada ni código genérico tipo
  stock.

### Personajes de tinta — especificación

Familia fija de cuatro personajes ficticios: madre, padre, hermana y
hermano. Acompañan al público; no representan a alumnos reales ni a Germán.

**Técnica**

- Línea negra `#2E2A27` de acabado editorial hecho a mano: trazo seguro,
  levemente irregular, grosor moderado (distinto de la ilustración de
  línea, que es de grosor uniforme).
- Rellenos sólidos negros en prendas y crema opaco `#FDF8F3` en el resto.
  Nunca transparentes: la mancha de color no debe verse a través de la ropa.
- Textura permitida y mínima: punteado en telas y hachurado corto en
  prendas de punto. Sin sombreado de volumen, sin degradados, sin sombra en
  el suelo.
- Rostros simples: ojos de punto o línea, nariz y boca mínimas, sonrisa
  sutil; las arrugas se sugieren con uno o dos trazos como máximo.
- Mismos vetos que la ilustración de línea: cero fotorrealismo, cero render
  3D, cero estilo "mascota corporativa".

**Dignidad (obligatorio)**

- Postura erguida, serena o de logro. Nunca encorvada, nunca perdida,
  nunca con símbolos de confusión o frustración.
- Quien aprende es el protagonista de la escena: mira el dispositivo o lo
  sostiene. Quien acompaña señala o mira, sin tomar el dispositivo.
- Si el tema es un riesgo (estafas, seguridad), el personaje se ve atento y
  en control, nunca asustado.
- Edad: los cuatro personajes tienen edad fija por diseño (60s, 70–80,
  40s y 20s). En personajes nuevos para blog se mantiene la regla de edad
  ambigua.
- El padre conserva lentes y bastón por ser parte de su diseño aprobado. No
  se agregan estos marcadores a otros personajes ni se vuelven el centro de
  la escena.
- Dispositivos: misma regla de pantalla en blanco, color sólido o 2–3
  líneas simples.

**Composición**

- Los personajes miran hacia el contenido principal (título, texto o CTA).
  Se permite espejar la imagen.
- Un grupo es un solo archivo. Los grupos comparten altura y línea base: la
  escala se ajusta por altura, no por ancho.
- Cuerpo completo en hero; medio cuerpo en tarjetas.
- Sin escenario detallado (sin habitaciones ni muebles): el ambiente lo da
  la mancha de color.
- Si se anima la entrada, aplica el bloque obligatorio de
  `prefers-reduced-motion` de la sección Movimiento.

**Mancha de escena**

- Círculo detrás del personaje o grupo (excepción a la regla de blob de
  las formas orgánicas). Una por grupo, máximo dos por composición.
- Terracota `#D96C4B`, plena o entre 25 % y 35 % de opacidad. Si queda
  detrás de texto, máximo 30 %.
- Verde `#6B9E78` al mismo nivel de opacidad, solo si la escena representa
  un logro (por ejemplo, el nivel de autonomía).
- Teal `#67C6C0` solo si el tema es accesibilidad/LSCh.
- Puede cortarse por el borde de la pantalla.

### Paleta permitida

| Color | Hex | Uso en ilustración |
|---|---|---|
| Trazo principal | `#2E2A27` | Línea de la ilustración (color por defecto) |
| Acento / mancha orgánica | `#D96C4B` | Forma de fondo, o trazo alternativo sobre fondo claro |
| Fondo | `#FDF8F3` | Fondo de la ilustración, sólido o transparente; relleno opaco de los personajes de tinta |
| Accesibilidad (uso restringido) | `#67C6C0` | Solo en ilustraciones cuyo tema sea accesibilidad/LSCh — mantiene la convención semántica ya definida para el resto del sitio |
| Confirmación (uso restringido) | `#6B9E78` | Solo en ilustraciones que representen un logro o cierre exitoso (ej. artículo sobre completar un trámite) |

Regla dura: **máximo 2 colores además del fondo** por ilustración (1 para
el trazo, 1 para la mancha de acento). Nunca combinar más de una paleta
cromática en una misma pieza.

### Especificaciones técnicas

- Formato de sitio: SVG para formas orgánicas decorativas y para íconos
  vectorizados a mano. PNG o WebP con fondo transparente para ilustraciones
  generadas por IA que no se vectoricen (los personajes de tinta con
  rellenos opacos).
- Portadas de blog: proporción 16:9, mínimo 1600×900px.
- Imágenes inline de blog: 4:3 o cuadrada, según el layout del artículo.
- Nombrado de archivo: descriptivo, minúsculas, guiones — ej.
  `ilustracion-seguridad-contrasenas.png` — mismo criterio ya usado para
  fotografía real.
- Integración vía `astro:assets`, con `alt` descriptivo obligatorio (misma
  regla de accesibilidad que fotografía real). En personajes de tinta el
  `alt` describe la acción de la escena, no el estilo.
- Tamaños de despliegue en `rem`, nunca en `px` fijo.

### Checklist antes de publicar una ilustración generada por IA

- [ ] Usa solo colores de la paleta de marca (tabla anterior)
- [ ] Máximo 2 colores además del fondo
- [ ] Trazo de grosor uniforme, sin sombreado ni degradado (ilustración de
      línea) o con la técnica de tinta definida (personajes de tinta)
- [ ] Si incluye figura humana: sin postura de confusión/frustración, y el
      rostro cumple la regla de su elemento (sin rasgos detallados en
      línea; rostro simple en tinta)
- [ ] Personajes de tinta: quien aprende es el protagonista; nadie toma el
      dispositivo de otro
- [ ] No representa a Germán ni a alumnos reales
- [ ] El teal de accesibilidad (`#67C6C0`) aparece solo si el tema es
      accesibilidad/LSCh
- [ ] Personajes de tinta: fondo transparente con rellenos opacos (probado
      sobre la mancha de color)
- [ ] Sin texto, marca de agua o logo generado por error
- [ ] Suficiente espacio negativo — no está saturada de detalle
- [ ] `alt` descriptivo agregado antes de publicar

### Prompt base para generación con IA

**Personajes de tinta** (adjuntar siempre las imágenes de los personajes
como referencia). Reemplazar `[SUJETO]` por quién aparece, el encuadre
(cuerpo completo o medio cuerpo) y la acción:

    Editorial hand-drawn ink illustration in the style of the attached
    reference images: black ink line art with confident, slightly imperfect
    outlines, flat solid black fills on some clothing, minimal dotted
    texture on fabric, simple faces (dot or line eyes, minimal nose and
    mouth), relaxed natural posture. Monochrome black and off-white only.
    Real transparent PNG background. Clothes and skin filled in opaque
    off-white, never transparent. No circles or background shapes, no
    floor, no furniture, no shadows, no text, no watermark.

    [SUJETO]

    Keep the characters exactly as in the attached images: same faces,
    hair, clothes, proportions and line weight. Do not redraw or restyle
    them. Posture upright, calm and capable. No confusion, frustration or
    question-mark symbols. Any screen is blank or plain solid color, with
    no fake interface.

**Ilustración de línea** (borrador derivado de la especificación; ajustar
tras las primeras pruebas):

    Minimal line illustration of [SUJETO]. One continuous stroke of uniform
    thickness, dark warm charcoal (#2E2A27), rounded line ends, soft
    curves. Suggest the shape with as few lines as possible. No shading, no
    hatching, no gradients, no texture. Generous empty space around the
    figure. Plain transparent background. No detailed scenery, no text, no
    watermark. Not photorealistic, not 3D, not a corporate mascot style.

**Correcciones frecuentes**

- Fondo con cuadros pintados: *"That is a fake transparency. Give me a
  real transparent PNG."*
- Cambia el diseño de un personaje: *"Do not redraw the characters. Use
  the attached images exactly as they are."*
- Aparece un círculo o fondo: *"Do not draw any circle or shape behind the
  characters."*