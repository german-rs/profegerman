# profegerman.cl — Guía para agentes (LLMs)

## Qué es este proyecto

Sitio web profesional de Germán Riveros para su marca de **alfabetización digital / clases de computación y celular para adultos**. Es un proyecto hermano de `germanriveros.cl` pero deliberadamente separado: dominio propio, repo propio, stack propio, público propio.

No confundir los dos proyectos:

| | germanriveros.cl | profegerman.cl (este repo) |
|---|---|---|
| Rol | Portafolio técnico / carta de presentación para clientes pyme (administración web, WordPress, Magento, SEO técnico) | Marca activa de educación digital — aquí está el foco comercial actual de Germán |
| Público | Dueños de pyme evaluando competencia técnica | Adultos sin experiencia informática, personas mayores, personas buscando trabajo, personas que quieren usar mejor su celular/PC |
| Stack visual | Vanilla CSS (BEM), Three.js, estética wireframe minimalista | Tailwind CSS, sin Three.js, diseño cálido y accesible |
| Estado | Mantenimiento mínimo y regular; no se promociona activamente | Foco principal de energía y marketing de Germán |

Germán también da clases vía Superprof (se mantiene activo en paralelo, no se reemplaza) y gestiona un cliente Magento (Tharpa) de forma directa, sin relación con este sitio.

## Público objetivo

1. Adulto que nunca aprendió informática
2. Persona mayor
3. Persona que busca trabajo
4. Persona que quiere aprender a usar mejor su celular/computador

Fase 1 (lanzamiento) se enfoca en los públicos 1 y 2. No agregar rutas de contenido de fase 2 (ver abajo) al lanzamiento inicial salvo que Germán lo pida explícitamente — evitar recrear fragmentación de foco.

## Estructura de contenido

**Ruta base (fase 1, lanzamiento):**
1. Alfabetización digital — computador, celular, internet, correo, archivos
2. Autonomía digital — trámites, videollamadas, WhatsApp, seguridad
3. IA para principiantes — uso práctico de ChatGPT y similares. Tratar como gancho de marketing/puerta de entrada (alto volumen de búsqueda), no como curso extenso.

**Fase 2 (expansión, no lanzar aún):**
- Herramientas digitales para el trabajo (CV, correo, postulaciones, documentos, videollamadas)
- Herramientas digitales para emprendedores (WhatsApp Business, documentos, almacenamiento, redes sociales)

## Diferenciador de marca — no diluir esto

La accesibilidad y la Lengua de Señas Chilena (LSCh) son el diferenciador pedagógico central de esta marca, no un servicio adicional (a diferencia de cómo se posicionan en germanriveros.cl, donde son un feature técnico más). Cualquier copy debe transmitir paciencia, claridad y ausencia de juicio — nunca jerga técnica como argumento de venta.

Principios de copy (heredados del proyecto hermano, aplican igual acá):
- Todo copy en positivo y activo. Nunca framing negativo ("no hago X"), siempre framing de beneficio ("aprende a tu ritmo, sin sentirte perdido").
- El beneficio para el alumno va antes que el mecanismo del servicio.
- Copy conciso; evitar subtítulos largos.
- Registro: español de Chile, cercano/informal ("profe", tú), sin tecnicismos.

## Decisiones técnicas ya tomadas (no reabrir sin que Germán lo pida)

- **Astro** como framework (misma familia que germanriveros.cl, pero repo y configuración completamente independientes).
- **Tailwind CSS**, explícitamente en lugar de vanilla CSS/BEM. Es una decisión deliberada de diferenciación visual frente a germanriveros.cl, no una omisión — no proponer volver a CSS vanilla/BEM.
- **Sin Three.js ni animaciones 3D.** El público objetivo puede usar equipos más antiguos o conexiones más lentas; prioridad es velocidad y bajo consumo de recursos, no impacto visual técnico.
- Minimizar JS del lado del cliente. Preferir HTML nativo accesible (`<details>/<summary>` para acordeones, etc.) sobre frameworks pesados. Si se necesita interactividad ligera, evaluar Alpine.js antes que React/Vue.
- CTA principal orientado a WhatsApp (link directo `wa.me/...`) en vez de formulario de contacto tradicional — el público ya usa WhatsApp como herramienta de "autonomía digital", es el canal de menor fricción para ellos.

## Estándares heredados de germanriveros.cl (aplican igual)

- WCAG AA como piso, no como aspiración — verificar contraste y tamaños de tap target (≥44px), no asumir.
- Unidades relativas (`rem`/`em`) para tipografía, nunca `px` fijo — evita fallos de WCAG 1.4.4.
- Respetar `prefers-reduced-motion` en toda animación/transición (incluyendo View Transitions de Astro si se usan).
- CI de GitHub Actions corre en Linux (case-sensitive) — correr `npm run build` localmente antes de cada push.
- Commitear `package.json` y `package-lock.json` juntos tras cualquier `npm install`.

## Despliegue

Mismo patrón que germanriveros.cl: GitHub Actions (`withastro/action`) → GitHub Pages → dominio propio (`profegerman.cl`) vía Cloudflare (DNS/CDN, no Cloudflare Pages).

## Forma de trabajo con Germán

- Analizar el código real del repo antes de proponer cambios — nunca asumir estructura sin revisarla.
- Mostrar el contenido completo de los archivos en la conversación antes y después de cualquier cambio, no solo describir el cambio en palabras.
- Germán toma las decisiones finales de diseño y copy; el rol del agente es analizar y proponer opciones fundamentadas, no decidir por él.
- Cue "ya me conoces" = aplicar todo este contexto acumulado sin pedir que se repita ni volver a preguntar lo ya definido.

## Referencia cruzada entre proyectos

germanriveros.cl y profegerman.cl deben enlazarse mutuamente (footer o sección de contacto): germanriveros.cl como prueba de trayectoria técnica ante un alumno que dude de tus habilidades informáticas; profegerman.cl como oferta educativa activa ante un cliente pyme que en realidad busca clases. Si se toca la navegación o el footer de cualquiera de los dos sitios, considerar ese enlace cruzado como parte del alcance del cambio.