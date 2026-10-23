# Guía de estilo profegerman.cl: imágenes del blog (v1.2)

Addendum a la guía de estilo web. Define cómo se crean, componen y publican las portadas del blog. Las categorías, el frontmatter y la regla de asignación viven en `BLOG_profegerman_v1.0.md`; este documento solo cubre la imagen. Donde esta guía contradiga a la v1.1, prevalece esta.

## Cambios respecto a v1.1

- **Color por categoría:** el fondo de cada portada depende de la categoría del post, ya no es crema fijo.
- **Regla de color:** reemplaza "máximo 2 colores además del fondo" por "una familia de color por imagen, más tinta y crema" (sección 4).
- **Lentes:** dejan de descartarse como marcador de edad. Son un accesorio común y los personajes pueden usarlos (el padre los lleva y se mantiene así).
- **Bastón:** se mantiene la regla de no usar bastón.
- **Profe:** puede aparecer ilustrado en cualquier categoría.
- **Flujo de trabajo:** ChatGPT genera solo la escena con fondo transparente; el fondo y la mancha se componen en GIMP con hex exactos (sección 8).
- **Nombres de campos:** se usa `category` (no `categoria`) para coincidir con el schema de la colección `blog`, que ya usa nombres en inglés (`title`, `pubDate`, `tags`, `level`).
- **Implementación:** con Tailwind v4 y los tokens existentes, sin CSS vanilla, como exige la guía de estilo.

---

## 1. Propósito

La portada del blog cumple tres funciones:

1. Imagen de la card en `/blog/` y en el home.
2. Imagen principal del post (`cover` en el frontmatter).
3. Imagen Open Graph para redes sociales.

Debe explicar el tema de un vistazo, ser coherente con el resto del sitio y no repetir la composición de los posts vecinos.

## 2. Formato técnico

| Aspecto | Regla |
|---|---|
| Master | 1200×630 px (1.91:1) |
| Formato de salida | `.webp` |
| Zona segura | El foco queda dentro del 70 % central (las cards y las redes recortan los bordes) |
| Fondo | Tinte de la categoría (sección 4), liso, sin textura ni degradados |
| Nombre del archivo | `blog-[slug-del-post].webp` |
| Texto alternativo | Campo `coverAlt` (obligatorio si hay `cover`): una frase que describa la escena y lo que enseña el post; nunca empezar con "ilustración de…" |

## 3. Estilo visual

- **Línea:** tinta negra de trazo uniforme, sin hachurado ni sombreado.
- **Relleno:** plano. Los personajes llevan relleno crema neutro `#FDF8F3`, igual para todos.
- **Texto dentro de la imagen:** ninguno, salvo el número o la palabra grande de las portadas tipográficas.
- **Mancha de fondo:** una sola por imagen, detrás del foco, en tono sobre tono (sección 4). Puede ser círculo, arco, semicírculo o mancha orgánica, y no tiene que estar siempre centrada ni del mismo tamaño.

## 4. Color por categoría

Cada post pertenece a **una** categoría (ver `BLOG_profegerman_v1.0.md`) y la categoría define el color de toda la portada.

| Categoría (`category`) | Color base | Fondo (30 %) | Mancha (55 %) | Usar en |
|---|---|---|---|---|
| `accesibilidad` (Accesibilidad) | Teal `#67C6C0` | `#D0E9E4` | `#ABDDD7` | Lengua de Señas, inclusión, ayudas para ver, oír o leer |
| `seguridad` (Seguridad) | Azul `#7E98CE` | `#D7DBE8` | `#B7C3DF` | Estafas, contraseñas, privacidad |
| `glosario` (Glosario) | Verde `#6B9E78` | `#D1DDCE` | `#ADC7AF` | Posts que explican un término |
| `paso-a-paso` (Paso a paso) | Terracota `#D96C4B` | `#F2CEC1` | `#E9AB97` | Instrucciones prácticas (categoría por defecto) |

Los porcentajes son la mezcla del color base con el crema `#FDF8F3`. El fondo al 30 % equivale a `bg-accessibility/30`, `bg-profe/30`, `bg-success/30` y `bg-primary/30` de Tailwind sobre la página crema, así la portada y la etiqueta del sitio coinciden.

**Reglas**

- **Tono sobre tono:** fondo al 30 %, mancha al 55 %. Toda la imagen vive en una sola familia de color, más la tinta negra y el crema de los personajes.
- **Elemento firma** (globo, escudo, maceta, ícono): color base al 100 %.
- **Teal exclusivo:** solo para accesibilidad y LSCh.
- **Azul:** en el blog significa seguridad. En Sobre mí se mantiene `--color-profe`; ambos usan el mismo hex.
- **Verde:** comparte hex con "Confirmación" (estados de éxito). En el blog se usa solo en la portada y la etiqueta de Glosario, nunca para estados.
- **Crema como fondo:** solo en la excepción de posts neutros (novedades, anuncios). No es el color por defecto.
- **Línea y texto:** `#2E2A27` o negro de tinta.
- **El color no es la única señal:** cada card muestra la categoría en texto (etiqueta).

## 5. Composición

1. **Un solo foco** por imagen.
2. **Al menos 30 % de espacio libre** alrededor del foco.
3. **Un elemento firma** como máximo: un ícono flotante en color o el patrón de lunares.
4. **Sin escenas recargadas:** como mucho 3 objetos secundarios.
5. **Mancha:** su diámetro ronda el 70–80 % del alto de la imagen. Varía forma y posición entre posts, sin salirse de la zona segura.

## 6. Tipos de portada

| Tipo | Descripción | Úsalo en |
|---|---|---|
| **A. Personaje** | 1 o 2 personajes haciendo algo concreto | Consejos cotidianos y experiencias |
| **B. Objeto** | Celular, teclado, cargador o ícono grande en tinta sobre la mancha | Paso a paso |
| **C. Metáfora** | Candado, escudo, anzuelo, lupa, llave | Seguridad y privacidad |
| **D. Entorno** | Mesa, ventana, plaza o paisaje sencillo | Temas generales o de bienestar digital |
| **E. Tipográfica** | Número o palabra grande en el color base con tinta | Posts de lista ("5 estafas…") y glosario |

**Rotación**

- Ningún tipo se repite en dos posts consecutivos.
- Los tipos con personajes (A) no superan la mitad de los posts publicados.
- Los paisajes (D) se reservan para temas generales, no como relleno.
- Como el color lo define la categoría, la variedad entre posts de una misma categoría debe venir del tipo de portada, los personajes y la forma de la mancha.

## 7. Personajes

- **Máximo 2 personajes por escena.** Elenco: madre, padre, hermana, hermano y profe. Un personaje que aparece dentro de una pantalla o ventana (videollamada) cuenta como elemento, no como personaje de la escena.
- **Hermana:** solo aparece en posts de accesibilidad (LSCh).
- **Poses:** no repetir la pose de un personaje en dos portadas seguidas. Evitar la combinación "celular en una mano y la otra en la cadera" en más de una portada.
- **Dignidad:** postura erguida, expresión segura y alegre, coherente con `BRAND_ES.md` ("mostrar logro y dignidad, nunca confusión"). En posts de estafas o errores, la protagonista es la herramienta (escudo, lupa), nunca una persona engañada o confundida.
- **Edad y accesorios:** sin bastón. Los lentes son libres.
- **Generación:** los personajes se generan completos. Si se necesita un recorte, se genera la figura entera y se recorta después, porque el modelo falla con medio cuerpo.

## 8. Flujo de trabajo

**Principio:** ChatGPT no garantiza hex exactos, por eso solo genera la escena. Fondo, mancha y colores finales se aplican a mano con los valores de la sección 4.

1. **ChatGPT:** generar la escena con fondo transparente (PNG), usando el prompt de la sección 9.
2. **Revisar el PNG:** hacer zoom a los bordes y verificar que no queden halos crema o restos de fondo.
3. **GIMP, lienzo:** crear una imagen de 1200×630 px.
4. **GIMP, fondo:** rellenar la capa base con el hex del fondo de la categoría.
5. **GIMP, mancha:** nueva capa, selección elíptica (o la forma elegida) y relleno con el hex de la mancha. Dejarla dentro de la zona segura.
6. **GIMP, escena:** importar el PNG como capa sobre la mancha y centrar el foco en el 70 % central.
7. **GIMP, color del elemento firma:** si la escena trae un ícono de color, corregirlo al hex base de la categoría (selección por color y relleno).
8. **Exportar** como `.webp` con el nombre `blog-[slug-del-post].webp`.

**Recomendación:** guardar un archivo plantilla `.xcf` con una capa de fondo y una de mancha por cada categoría, para solo activar una y soltar la escena encima.

## 9. Prompt base para ChatGPT

El prompt tiene un bloque fijo (estilo) y un bloque variable (escena). **No incluye color de fondo ni de mancha**, porque eso se aplica después en GIMP.

**Bloque fijo** (se copia siempre igual):

```
Ilustración plana en tinta negra, trazo uniforme de grosor constante, sin sombreado ni hachurado. Relleno crema neutro en figuras (sin tono de piel). Fondo completamente transparente (PNG con canal alfa), sin mancha, sin círculo y sin sombra proyectada. Sin texto, sin logos. Si hay un elemento flotante (ícono, globo, escudo), dibujarlo con un color plano único. Composición espaciosa, foco único centrado, formato horizontal 1.91:1.
```

**Bloque variable** (cambia en cada post):

```
Tipo: [A/B/C/D/E]. Escena: [qué se ve, en una frase]. Personajes: [ninguno / cuál y en qué pose]. Elemento firma: [ícono o patrón, o ninguno].
```

**Nota:** cuando aparezcan personajes, adjuntar la imagen de referencia de cada uno (PNG transparente) y pedir que se mantengan idénticos.

## 10. Implementación en el sitio

Cada post declara su categoría en el frontmatter (campo `category`, ver `BLOG_profegerman_v1.0.md`):

```
category: seguridad | accesibilidad | glosario | paso-a-paso
```

**Etiqueta de categoría**

- Se implementa con Tailwind v4 y los tokens que ya existen (`primary`, `profe`, `accessibility`, `success`); no hace falta crear colores nuevos ni CSS vanilla.
- Los tintes de la etiqueta son los de `bg-<token>/30`, y el texto va en `#2E2A27`.
- La relación entre categoría, nombre visible y clases se define en un solo archivo (`src/lib/categories.ts`), con las clases escritas completas para que Tailwind las detecte.

| Categoría | Nombre visible | Clase de la etiqueta |
|---|---|---|
| `accesibilidad` | Accesibilidad | `bg-accessibility/30` |
| `seguridad` | Seguridad | `bg-profe/30` |
| `glosario` | Glosario | `bg-success/30` |
| `paso-a-paso` | Paso a paso | `bg-primary/30` |

## 11. Qué evitar

- Logos o interfaces reales de WhatsApp y otras marcas. Usar burbujas y pantallas genéricas.
- Pantallas con texto o botones inventados. Si se dibuja una interfaz, revisarla contra la real.
- Paisajes decorativos sin relación con el tema del post.
- Gestos de preocupación, angustia o confusión.
- Cambiar el grosor de línea o añadir sombras para "dar profundidad".
- Pedirle a ChatGPT un fondo o un hex concreto: se compone siempre en GIMP.
- Usar el teal fuera de accesibilidad y LSCh, o el verde como estado de éxito dentro del blog.

## 12. Checklist antes de publicar

- [ ] ¿La categoría del post está definida y el fondo usa el hex correcto de la sección 4?
- [ ] ¿El PNG de la escena no tiene halos ni restos de fondo en los bordes?
- [ ] ¿Es 1200×630 y el foco está en la zona central?
- [ ] ¿Hay un solo foco y espacio libre suficiente?
- [ ] ¿La imagen usa una sola familia de color, más tinta y crema?
- [ ] ¿El tipo de portada es distinto al del post anterior?
- [ ] ¿Los personajes no repiten pose y son 2 como máximo?
- [ ] ¿Se entiende el tema sin leer el título?
- [ ] ¿Tiene `coverAlt` y el nombre de archivo sigue la convención?
- [ ] ¿La card muestra la categoría en texto?

## 13. Registro de portadas publicadas

Completar al publicar cada post, para controlar la rotación.

| Fecha | Post | Categoría | Tipo | Personajes | Estado |
|---|---|---|---|---|---|
| 18/10/2026 | 5 estafas comunes por WhatsApp | `seguridad` (azul) | A | Profe y madre | Recomponer con fondo azul |
| 19/10/2026 | Cómo hacer una videollamada por WhatsApp | `paso-a-paso` (terracota) | A | Madre y padre (hermano en la ventana) | Recomponer con fondo terracota |
| 20/10/2026 | Cómo enviar fotos y notas de voz por WhatsApp | `paso-a-paso` (terracota) | A | Madre y hermano | Recomponer con fondo terracota |

**Lectura del registro actual:** las tres portadas son tipo A y la madre aparece en todas. Las próximas deberían alternar tipo (B, C o E) y personajes. Con el color por categoría, el home mostrará variedad en cuanto haya posts de seguridad, glosario o accesibilidad.