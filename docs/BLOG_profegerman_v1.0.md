# Blog de profegerman.cl: guía editorial y categorías (v1.0)

Complementa a `AGENTS.md`, `BRAND_ES.md`, `WEB_STYLE_GUIDE_profegerman`, `ARCHITECTURE.md` y `WEB_STYLE_GUIDE_imagenes_blog_v1.2.md`. Es la fuente única de verdad sobre categorías, campos del frontmatter y estructura de los posts.

---

## 1. Propósito y alcance

- **Para qué existe:** resolver dudas concretas de celular y computador para el público de Fase 1 (adultos que nunca aprendieron informática y personas mayores), mostrar cómo enseña Profe Germán y atraer tráfico orgánico hacia las clases.
- **Hacia dónde conduce:** cada post termina con un botón al curso que corresponda (campo `level`).
- **Alcance:** solo temas de Fase 1. Los temas de Fase 2 (herramientas para el trabajo y para emprendedores) no entran al blog por ahora.
- **Rutas:** `/blog/`, `/blog/[slug]/` y, como mejora planificada, `/blog/categoria/[category]/`.

## 2. Voz de los posts

Rige todo lo de `BRAND_ES.md`. En el blog significa:

- Tú informal, cercano, sin condescendencia.
- **Nunca "es fácil" ni "es simple"**, tampoco en títulos. Usar "paso a paso", "a tu ritmo".
- Cero jerga sin traducir en la misma frase. Esto incluye los nombres de las categorías: por eso se usa "Paso a paso" y no "Tutoriales".
- Frases cortas, una idea a la vez.
- Framing positivo y activo. En seguridad se enseña a reconocer y a actuar, sin asustar ni mostrar a nadie como ingenuo.
- Títulos de máximo 70 caracteres y descripciones de máximo 160 (límites del schema).

## 3. Categorías

Cada post pertenece a **una sola** categoría. La categoría define el color de la portada y de la etiqueta.

| Slug (`category`) | Nombre visible | Qué incluye | Color base | Etiqueta (equivale a) |
|---|---|---|---|---|
| `accesibilidad` | Accesibilidad | Inclusión, Lengua de Señas Chilena, ayudas para ver, oír o leer mejor | Teal `#67C6C0` | `bg-accessibility/30` |
| `seguridad` | Seguridad | Estafas, privacidad, contraseñas, cuidado de datos | Azul `#7E98CE` | `bg-profe/30` |
| `glosario` | Glosario | Posts cuyo objetivo es explicar una palabra o un concepto | Verde `#6B9E78` | `bg-success/30` |
| `paso-a-paso` | Paso a paso | Instrucciones prácticas para hacer algo concreto (categoría por defecto) | Terracota `#D96C4B` | `bg-primary/30` |

**Notas de uso**

- **Teal:** reservado a accesibilidad y LSCh, igual que en toda la guía de estilo.
- **Verde:** comparte hex con "Confirmación" (estados de éxito). En el blog se usa solo en la portada y la etiqueta de Glosario, nunca para estados.
- **Azul:** en el blog significa seguridad. En Sobre mí se mantiene como `--color-profe`; es el mismo hex.
- **Hermana:** es el personaje reservado a LSCh, así que solo aparece en posts de accesibilidad.

## 4. Cómo asignar la categoría

Como la categoría define el color, la asignación sigue una regla fija. Gana la **más específica**, en este orden:

1. ¿El tema principal es ayudar a ver, oír, leer o comunicarse mejor (LSCh, subtítulos, letra grande, dictado)? → **Accesibilidad**.
2. ¿El tema principal es protegerse de un riesgo (estafas, claves, privacidad)? → **Seguridad**.
3. ¿El objetivo principal es explicar qué significa una palabra o un concepto? → **Glosario**.
4. Si no, → **Paso a paso**.

**Casos límite**

| Post | Categoría | Por qué |
|---|---|---|
| Cómo crear una contraseña segura | Seguridad | Aunque tenga pasos, el tema es protegerse |
| Cómo activar los subtítulos en una videollamada | Accesibilidad | Gana la más específica |
| Qué es un enlace falso | Seguridad | Explica un término, pero desde el riesgo |
| Qué es el WiFi | Glosario | Solo explica un concepto |
| Cómo enviar fotos por WhatsApp | Paso a paso | Acción práctica sin otro tema dominante |

Una categoría publicada solo se cambia si hay un error de clasificación, porque cambia el color de la portada y la URL de categoría.

## 5. Frontmatter de un post

La colección `blog` ya define estos campos. El único campo nuevo es `category`.

| Campo | Obligatorio | Regla |
|---|---|---|
| `title` | Sí | Máx. 70 caracteres, sin "fácil" ni "simple" |
| `description` | Sí | Máx. 160 caracteres |
| `pubDate` | Sí | Fecha de publicación |
| `updatedDate` | No | Solo si se actualiza el contenido |
| `category` | Sí (nuevo) | Uno de: `accesibilidad`, `seguridad`, `glosario`, `paso-a-paso`. Sin valor por defecto, para obligar a elegir |
| `level` | No | `alfabetizacion` o `autonomia`. Define el curso al que lleva el botón final |
| `tags` | No | De 2 a 4, en minúsculas y sin tildes, reutilizando el vocabulario de la sección 6 |
| `cover` | No | Portada según la guía de imágenes (1200×630, `.webp`) |
| `coverAlt` | Sí si hay `cover` | Texto alternativo (el schema lo exige) |
| `draft` | No | `true` mientras no se publica |

Ejemplo:

```yaml
---
title: "5 estafas comunes por WhatsApp y cómo reconocerlas"
description: "Aprende a reconocer las cinco estafas más frecuentes por WhatsApp y qué hacer en cada caso, con una guía clara y sin tecnicismos."
pubDate: 2026-10-18
category: seguridad
level: autonomia
tags: [whatsapp, estafas, celular]
cover: ../../assets/blog/blog-estafas-whatsapp.webp
coverAlt: "El profe y una señora conversan frente a un globo de chat con un escudo de verificación."
---
```

La ruta de `cover` es un ejemplo; ajustarla a donde estén las imágenes en el repo.

### Categoría, nivel y etiquetas: tres cosas distintas

| Campo | Cuántos por post | Para qué sirve |
|---|---|---|
| `category` | Uno | Color de portada y etiqueta, y filtro del blog |
| `level` | Uno (opcional) | Curso al que lleva el botón final |
| `tags` | De 2 a 4 | Búsqueda y SEO, por app o dispositivo |

## 6. Vocabulario inicial de etiquetas

`whatsapp`, `celular`, `computador`, `correo`, `internet`, `fotos`, `videollamada`, `estafas`, `contrasenas`, `lengua-de-senas`, `tramites`.

Agregar una etiqueta nueva solo cuando no haya una equivalente, para no fragmentar la búsqueda.

## 7. Estructura sugerida por categoría

| Categoría | Estructura |
|---|---|
| Paso a paso | Qué lograrás (2 frases) → qué necesitas → pasos numerados (máx. 7, una acción por paso) → "si algo no salió así" → botón al curso |
| Seguridad | Qué es la situación → cómo reconocerla → qué hacer → qué no hacer → dónde consultar (solo fuentes oficiales verificadas) → botón al curso |
| Glosario | La palabra en una frase → para qué sirve en tu vida diaria → ejemplo cotidiano → palabras relacionadas → botón al curso |
| Accesibilidad | Qué ayuda ofrece → cómo activarla → para quién es útil → enlace a `/accesibilidad/` → botón al curso |

## 8. Ideas de posts por categoría

Son ideas dentro del alcance de Fase 1, no compromisos de publicación.

- **Seguridad:** qué hacer si pierdes el celular; cómo crear una contraseña que puedas recordar; cómo reconocer un enlace falso.
- **Accesibilidad:** cómo agrandar la letra del celular; subtítulos en videollamadas; cómo usar el dictado por voz; videollamadas accesibles con Lengua de Señas.
- **Glosario:** qué es el WiFi; qué es una aplicación; qué es "la nube"; qué es una descarga.
- **Paso a paso:** cómo instalar una aplicación; cómo hacer una captura de pantalla; cómo guardar un contacto.

## 9. Etiqueta visible en el sitio

- Cada `PostCard` (en `/blog/` y en el home) muestra la categoría **en texto**, dentro de una etiqueta con el color de la categoría. El color nunca es la única señal.
- Texto de la etiqueta en `#2E2A27`. Por cálculo, el contraste sobre los cuatro tintes ronda entre 9,7:1 y 11:1 (cumple AAA), pero se verifica con axe/WAVE antes de publicar, como pide la guía de estilo.
- Los tintes de la etiqueta son los de la columna "Etiqueta" de la sección 3. Con el fondo crema de la página equivalen exactamente a los fondos de las portadas.
- Implementación con Tailwind, sin CSS vanilla: un único archivo `src/lib/categories.ts` con el slug, el nombre visible y las clases completas de cada categoría (las clases deben escribirse completas, no concatenadas, para que Tailwind las detecte).

## 10. Registro de posts publicados

| Fecha | Post | Categoría | Nivel |
|---|---|---|---|
| 18/10/2026 | 5 estafas comunes por WhatsApp y cómo reconocerlas | `seguridad` | Por definir |
| 19/10/2026 | Cómo hacer una videollamada por WhatsApp | `paso-a-paso` | Por definir |
| 20/10/2026 | Cómo enviar fotos y notas de voz por WhatsApp | `paso-a-paso` | Por definir |

## 11. Checklist antes de publicar un post

- [ ] `category` asignada según la regla de la sección 4.
- [ ] `level` definido, para que el botón final lleve al curso correcto.
- [ ] De 2 a 4 etiquetas del vocabulario.
- [ ] Título ≤ 70 caracteres y descripción ≤ 160.
- [ ] Sin "es fácil" ni "es simple" en ninguna parte.
- [ ] Portada hecha según `WEB_STYLE_GUIDE_imagenes_blog_v1.2.md` y con `coverAlt`.
- [ ] Pasos numerados con una acción cada uno (si es Paso a paso).
- [ ] Fuentes oficiales verificadas (si es Seguridad).
- [ ] Contraste de la etiqueta y de la portada verificado.

## 12. Pendientes

- Campo `category` en el schema de `content.config.ts` (siguiente paso, en código).
- Archivo `src/lib/categories.ts` y componente de etiqueta.
- Páginas `/blog/categoria/[category]/` y filtro en `/blog/`.
- Definir el `level` de los tres posts ya publicados.