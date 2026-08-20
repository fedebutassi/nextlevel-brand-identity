# Guiones — Semana 03 · proceso e interacción

Brief de producción para generar las piezas de la semana 03. Este documento es autosuficiente para producción, pero las políticas canónicas conservan autoridad: [SOCIAL_CONTENT.md](../../../SOCIAL_CONTENT.md), [VOICE_AND_TONE.md](../../../VOICE_AND_TONE.md), [CLAIMS_POLICY.md](../../../CLAIMS_POLICY.md), [COMMERCIAL_OPERATIONS.md](../../../COMMERCIAL_OPERATIONS.md).

## Estrategia de la semana

- **Objetivo de negocio:** generar los primeros DM comerciales calificados.
- **Objetivo de comunicación:** reducir la fricción de la primera interacción y explicar qué recibe el cliente, para que responder deje de sentirse un compromiso.
- **Hallazgo que responde:** en semanas 01–02 el CTA por texto (`Escribinos WEB por DM`) obtuvo 0 respuestas sobre ~400 cuentas alcanzadas ([MEDICION.md semana 02](../semana-02-decision-y-contacto/MEDICION.md)).
- **Experimento de la semana:** habilitar mecánicas de interacción nativas en stories — encuesta (martes) y sticker de pregunta (jueves) — manteniendo un único CTA por pieza. Las respuestas al sticker de pregunta llegan como DM, por lo que funcionan como punto de partida de conversación con menos fricción que escribir `WEB`.
- **Pilares cubiertos:** autoridad (reel), conversión (stories y carrusel viernes), posicionamiento (carrusel miércoles).
- **Restricción de claims:** no existen claims cuantitativos aprobados ni autorizaciones de casos en [CLAIMS_REGISTER.md](../../../CLAIMS_REGISTER.md). Ninguna pieza usa cifras de resultados, comparaciones de superioridad ni clientes nombrados. El plazo "hasta tres semanas" se comunica siempre condicionado a contenido y accesos disponibles, como lo documenta [COMMERCIAL_OPERATIONS.md](../../../COMMERCIAL_OPERATIONS.md).

## Calendario para Meta Business Suite

Mismos horarios que semanas 01–02 para mantener la comparación. Instagram solamente.

| Fecha y hora (Argentina) | Pieza | Función | Acción única |
|---|---|---|---|
| Lunes 24/08/2026 · 16:00 | Reel `De la consulta a la web publicada` | Mostrar el proceso completo y su previsibilidad | DM con `WEB` |
| Martes 25/08/2026 · 10:00 | 3 stories `¿Tu negocio ya tiene web?` | Experimento: encuesta nativa | Story 1–2: encuesta · Story 3: DM con `WEB` |
| Miércoles 26/08/2026 · 16:00 | Carrusel `Lo que entregamos cuando decimos "listo para publicar"` | Explicar la entrega y la propiedad de la web | DM con `WEB` |
| Jueves 27/08/2026 · 11:00 | 3 stories `¿Qué te frena para tener tu web?` | Experimento: sticker de pregunta | Story 2: responder el sticker · Story 3: DM con `WEB` |
| Viernes 28/08/2026 · 16:00 | Carrusel `Escribir WEB no te compromete a nada` | Reducir la fricción del primer mensaje | DM con `WEB` |

## Especificaciones comunes de producción

- Formatos: reels y stories `1080×1920`; carruseles `1080×1350`.
- Tipografía: Bricolage Grotesque Condensed (Bold títulos, SemiBold subtítulos, ExtraLight secundario); JetBrains Mono sólo para numeración y metadatos. Nunca italic ni fuentes del sistema.
- Colores: fondo Paper `#F1E8D8`, texto Ink `#1A1410`, Terracota `#D24322` sólo para énfasis y CTA. Cierres de carrusel en fondo oscuro.
- Logo: usar `assets/logo.svg`; nunca reconstruirlo como texto; el punto es obligatorio.
- Márgenes seguros: 64 px feed, 72 px stories. En stories, dejar libre la zona superior e inferior de controles de Instagram y el área donde se colocará el sticker nativo (ver cada guion).
- Los stickers de encuesta y pregunta se agregan en Meta al programar; los diseños deben reservar el espacio indicado, no dibujar stickers falsos.
- Guardar fuentes editables en `source/` y exports en `exports/` dentro de la carpeta de cada pieza, siguiendo la estructura de las semanas anteriores. No sobrescribir piezas existentes.

---

## Lunes — Reel `De la consulta a la web publicada`

**Pilar:** autoridad. **Funnel:** consideración → conversión. **Duración:** 18 s, seis escenas de 3 s. Comprensible sin audio.

| Tiempo | Título | Nota |
|---|---|---|
| 00–03 | ¿Cómo se hace tu web? | De la consulta a la publicación, sin misterio. |
| 03–06 | 1. Charlamos. | Tu negocio, tu objetivo y qué debería resolver la web. |
| 06–09 | 2. Te enviamos una propuesta. | Alcance, plazo y precio fijo. Por escrito. |
| 09–12 | 3. Diseñamos y desarrollamos. | Ves el avance en cada etapa. |
| 12–15 | 4. Revisamos juntos. | Dos rondas de revisión incluidas. |
| 15–18 | 5. Publicamos y te damos el control. | Escribinos `WEB` por DM → `@nextlvl.ok` |

### Caption

Una web no debería hacerse a ciegas.

Primero charlamos sobre tu negocio y qué necesita resolver. Después te enviamos una propuesta por escrito con alcance, plazo y precio fijo. Diseñamos, desarrollamos, revisamos juntos y publicamos.

Al final, el control y los accesos quedan en tus manos.

Si querés saber cómo sería tu proyecto, escribinos `WEB` por DM.

`#DesarrolloWeb #ProcesoDeDiseño #DiseñoWebAMedida #Pymes #Córdoba`

---

## Martes — Stories `¿Tu negocio ya tiene web?` (experimento: encuesta)

**Pilar:** conversión. **Funnel:** descubrimiento → conversión. Tres piezas verticales. La encuesta nativa de Instagram se coloca en la Story 1 al programar.

### Story 1 — encuesta

- Título: `¿Tu negocio ya tiene web?`
- Texto secundario: `Contanos en qué punto estás.`
- Reservar el tercio central-inferior para la encuesta nativa con opciones: `Sí, pero no me convence` / `Todavía no tengo`.
- Sin otro CTA en esta pieza.

### Story 2 — criterio

- Título: `Cualquiera de las dos respuestas tiene un próximo paso.`
- Texto secundario: `Si no te convence, se puede rehacer con criterio. Si no tenés, se puede empezar simple: una página clara que presente tu negocio.`
- Sin CTA ni sticker.

### Story 3 — CTA

- Título: `Contanos tu caso.`
- CTA en Terracota: `Escribinos WEB por DM`
- Texto secundario: `Te respondemos con los pasos para tu situación.`

---

## Miércoles — Carrusel `Lo que entregamos cuando decimos "listo para publicar"`

**Pilar:** posicionamiento + autoridad. **Funnel:** consideración. Ocho placas 1080×1350.

| Placa | Título | Contenido |
|---|---|---|
| 01 | “Listo para publicar” no es una frase de venta. | Es una lista concreta. Esto incluye → |
| 02 | Tu dominio, configurado. | El registro queda a tu nombre. La configuración la hacemos nosotros. |
| 03 | Diseño a medida, responsive. | Pensado desde tu marca, no desde una plantilla. Se ve bien en cualquier pantalla. |
| 04 | Formulario de contacto funcionando. | Las consultas llegan a donde vos las leés. |
| 05 | Base técnica ordenada. | SEO técnico inicial configurado. No prometemos posiciones: preparamos la base. |
| 06 | Dos rondas de revisión incluidas. | Revisamos juntos antes de publicar. Sin sorpresas en el resultado. |
| 07 | El control queda en tus manos. | Accesos, contenido y decisiones documentadas. La web es tuya. |
| 08 (cierre oscuro) | Una entrega clara se puede pedir por escrito. | Escribinos `WEB` por DM → `@nextlvl.ok` |

### Caption

“Llave en mano” puede significar cualquier cosa. Por eso preferimos decir qué entregamos, punto por punto.

Dominio configurado, diseño a medida responsive, formulario funcionando, base técnica ordenada, dos rondas de revisión y el control en tus manos al publicar.

Todo por escrito en la propuesta, antes de empezar.

Escribinos `WEB` por DM.

`#DesarrolloWeb #SitioWeb #DiseñoWebAMedida #Pymes`

---

## Jueves — Stories `¿Qué te frena para tener tu web?` (experimento: sticker de pregunta)

**Pilar:** conversión. **Funnel:** conversión. Tres piezas verticales. El sticker de pregunta nativo se coloca en la Story 2 al programar; sus respuestas llegan como DM.

### Story 1 — tensión

- Título: `Casi todos posponen su web por lo mismo.`
- Texto secundario: `“No tengo los textos.” “No sé cuánto sale.” “No sé por dónde empezar.”`
- Sin CTA ni sticker.

### Story 2 — sticker de pregunta

- Título: `¿Qué te frena a vos?`
- Reservar el tercio central para el sticker de pregunta nativo con placeholder: `Contanos en una frase.`
- Texto secundario debajo del área del sticker: `Leemos todas las respuestas.`
- El sticker es la única acción de esta pieza.

### Story 3 — CTA

- Título: `Ninguna de esas cosas te frena de verdad.`
- Texto secundario: `Los textos se trabajan juntos. El precio va por escrito antes de empezar. Y empezar es una conversación.`
- CTA en Terracota: `Escribinos WEB por DM`

---

## Viernes — Carrusel `Escribir WEB no te compromete a nada`

**Pilar:** conversión. **Funnel:** conversión. Seis placas 1080×1350.

| Placa | Título | Contenido |
|---|---|---|
| 01 | Escribir `WEB` no te compromete a nada. | Esto es exactamente lo que pasa después → |
| 02 | Te preguntamos por tu negocio. | Qué hacés, qué necesitás mostrar y qué debería poder hacer una persona en tu web. |
| 03 | No hace falta que tengas todo resuelto. | Sin textos listos, sin logo definitivo, sin brief. Eso se ordena en la conversación. |
| 04 | Recibís una propuesta por escrito. | Alcance, plazo y precio fijo. La decisión queda de tu lado. |
| 05 | Sin intermediarios. | Hablás directo con quien diseña y desarrolla tu web. |
| 06 (cierre oscuro) | La conversación empieza con una palabra. | Escribinos `WEB` por DM → `@nextlvl.ok` |

### Caption

El primer mensaje es la parte más fácil del proyecto.

Escribís `WEB`, te preguntamos por tu negocio y te enviamos una propuesta por escrito con alcance, plazo y precio fijo. La decisión queda de tu lado, sin compromiso y sin intermediarios.

¿Tenés una idea dando vueltas?

Escribinos `WEB` por DM.

`#DesarrolloWeb #PresupuestoWeb #DiseñoWeb #Pymes #Córdoba`

---

## Control antes de programar

- Cuenta `@nextlvl.ok`, zona horaria Argentina, Instagram solamente.
- Stickers nativos: encuesta en Story 1 del martes, pregunta en Story 2 del jueves. Verificar que no tapen texto.
- Un solo CTA visible por pieza; el CTA `WEB` no aparece en las piezas cuyo objetivo es el sticker.
- Orden de imágenes verificado; texto alternativo cargado cuando Meta lo permita.
- Sin cifras, resultados, clientes nombrados ni comparaciones: no hay claims aprobados en el registro.
- Portada del reel revisada en grilla y en 9:16.

## Medición

Registrar en `MEDICION.md` de esta campaña a las 24 horas de cada pieza y el lunes 31/08:

- respuestas de encuesta y del sticker de pregunta (métrica prioritaria del experimento);
- DM comerciales originados y su pieza de origen;
- alcance, views, interacciones y visitas al perfil por pieza;
- comparación interna con los bloques equivalentes de semanas 01–02.

Los resultados son datos internos; no se convierten en claims publicables.
