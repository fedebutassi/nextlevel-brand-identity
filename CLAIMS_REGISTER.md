# Registro de claims — nextlevel.

## Uso

Este registro implementa [CLAIMS_POLICY.md](CLAIMS_POLICY.md). Antes de publicar una cifra, comparación, promesa de resultado o resultado de un caso, registrar el texto exacto y verificar su fuente original, contexto y autorización. Sólo un claim con estado `aprobado` puede usarse, respetando literalmente su alcance.

Estados:

- `aprobado`: evidencia, contexto y autorización suficientes y vigentes.
- `pendiente`: falta verificación, metadata, contexto o autorización; no publicar.
- `rechazado`: la evidencia no sostiene el claim o su formulación induce a error; no publicar.
- `vencido`: la evidencia o autorización requiere una nueva revisión; retirar hasta reaprobar.

## Registro inicial

### CLM-001

| Campo | Valor |
|---|---|
| Identificador | `CLM-001` |
| Texto exacto del claim | “Estudio de software independiente. Diseño y desarrollo web a medida desde Córdoba, Argentina.” |
| Tipo | Institucional cualitativo |
| Fuente original | [CONTENT.md — Footer](CONTENT.md#footer-dark-background); corroboración en [BRAND_OVERVIEW.md](BRAND_OVERVIEW.md) |
| Autor u organización | nextlevel. |
| Fecha de publicación | No documentada en el repositorio |
| Alcance y contexto | Descripción institucional de la marca, su actividad y ubicación; no expresa superioridad ni resultado. |
| Fecha de verificación | 2026-08-06 |
| Autorización | No documentada; requiere confirmación del responsable de marca. |
| Estado | `pendiente` |
| Piezas donde fue utilizado | [CONTENT.md — Footer](CONTENT.md#footer-dark-background) |
| Observaciones | Verificar nuevamente si cambia la oferta, estructura o ubicación de la marca. |

### CLM-002

| Campo | Valor |
|---|---|
| Identificador | `CLM-002` |
| Texto exacto del claim | “Trabajamos directo con cada cliente: sin intermediarios, sin equipos enormes.” |
| Tipo | Operativo cualitativo |
| Fuente original | [CONTENT.md — Sobre nosotros](CONTENT.md#about-section--sobre-nosotros); corroboración en [VOICE_AND_TONE.md](VOICE_AND_TONE.md) |
| Autor u organización | nextlevel. |
| Fecha de publicación | No documentada en el repositorio |
| Alcance y contexto | Describe el modelo de relación del estudio; no implica rapidez, ahorro ni resultado garantizado. |
| Fecha de verificación | 2026-08-06 |
| Autorización | No documentada; requiere confirmación del responsable de marca. |
| Estado | `pendiente` |
| Piezas donde fue utilizado | [CONTENT.md — Sobre nosotros](CONTENT.md#about-section--sobre-nosotros) |
| Observaciones | Revalidar si cambia el modelo operativo. No extender a resultados no documentados. |

Las dos entradas iniciales son verificables contra la documentación interna, pero permanecen `pendiente` hasta registrar fecha de publicación y autorización. La verificación documental no equivale a aprobación editorial.

No existen claims cuantitativos aprobados en este registro. Las cifras presentes en copy histórico o documentación no quedan aprobadas por aparecer allí: requieren fuente original, contexto, fecha de verificación y autorización.

## Proceso operativo

### Agregar

1. Crear un identificador correlativo y copiar el claim exacto, sin parafrasearlo.
2. Enlazar la fuente primaria y registrar autor, fecha, alcance y contexto.
3. Registrar autorización cuando intervengan datos propios, clientes, casos o resultados.
4. Marcar `pendiente` hasta completar una revisión explícita.

### Revisar

1. Confirmar que la fuente sigue accesible y dice lo que el claim afirma.
2. Revisar población, mercado, período, condiciones y límites de aplicación.
3. Confirmar autorización y anotar fecha de verificación.
4. Cambiar a `aprobado`, `rechazado` o `vencido`; registrar en qué piezas se usó.

### Retirar

1. Cambiar a `vencido` si requiere actualización o a `rechazado` si dejó de ser sostenible.
2. Localizar las piezas listadas y detener nuevas publicaciones.
3. Corregir la fuente canónica y regenerar exports sólo con autorización.

## Alternativas cualitativas

Si falta evidencia, eliminar precisión falsa y describir el funcionamiento verificable:

- reemplazar un porcentaje o benchmark por la condición funcional que importa;
- reemplazar una garantía de ventas, conversión, SEO o velocidad por el mecanismo o criterio aplicado;
- reemplazar una comparación de superioridad por los factores que permiten evaluar opciones;
- presentar una posibilidad como posibilidad, no como resultado asegurado.

Usar las formulaciones seguras de [CLAIMS_POLICY.md](CLAIMS_POLICY.md#alternativas-seguras) como referencia, no como prueba de un resultado.
