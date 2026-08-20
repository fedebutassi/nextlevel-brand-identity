# Operación del repositorio

Este repositorio es la fuente de verdad de identidad y producción de contenido de **nextlevel.** Antes de crear o modificar algo, confirmar el alcance y consultar las fuentes canónicas.

## Orden obligatorio de consulta

1. [README.md](README.md): mapa del sistema.
2. Este archivo: reglas operativas.
3. [CONTENT_STRATEGY.md](CONTENT_STRATEGY.md): razón estratégica, audiencia, funnel y pilares.
4. [BRAND_OVERVIEW.md](BRAND_OVERVIEW.md) y [CONTENT.md](CONTENT.md): marca, oferta, proceso, casos y mensajes documentados.
5. La política temática aplicable: [VOICE_AND_TONE.md](VOICE_AND_TONE.md), [SOCIAL_CONTENT.md](SOCIAL_CONTENT.md), [CLAIMS_POLICY.md](CLAIMS_POLICY.md), [CLAIMS_REGISTER.md](CLAIMS_REGISTER.md), [COLORS.md](COLORS.md), [TYPOGRAPHY.md](TYPOGRAPHY.md), [LOGO.md](LOGO.md) o [VISUAL_STYLE.md](VISUAL_STYLE.md).
6. Los inventarios y ejemplos de [social/](social/) y [reels/](reels/) sólo después de las reglas anteriores.

Ante un conflicto, prevalece la política específica, luego la documentación canónica general y por último el ejemplo histórico. La repetición en publicaciones anteriores no crea una regla.

## Skills y cadena de trabajo

Usar sólo los roles necesarios, respetando esta cadena conceptual:

`marketing-strategist → social-media-strategist → copywriter → visual-content-director`

- `marketing-strategist`: objetivo de negocio y comunicación, audiencia, posicionamiento, funnel, ángulo y acción.
- `social-media-strategist`: plataforma, pilar, formato, secuencia, retención y CTA a partir de un brief aprobado.
- `copywriter`: lenguaje final a partir de la estrategia y estructura aprobadas; aplica [VOICE_AND_TONE.md](VOICE_AND_TONE.md).
- `visual-content-director`: jerarquía, composición, ritmo y QA visual sin redefinir la identidad.

Si falta una etapa necesaria, completarla antes de avanzar. Declarar todo dato faltante; nunca inventar audiencias, métricas, resultados, testimonios, atributos ni investigación.

## Claims

Toda cifra, comparación, promesa de resultado o caso con resultados debe cumplir [CLAIMS_POLICY.md](CLAIMS_POLICY.md) y tener una entrada utilizable en [CLAIMS_REGISTER.md](CLAIMS_REGISTER.md). Un claim `pendiente`, `rechazado` o `vencido` no se publica.

## Fuentes, exports y biblioteca

- **Fuentes editables:** documentación, datos y scripts de render, HTML/CSS/JS, assets oficiales y carpetas `source/`. Los cambios se realizan aquí.
- **Exports:** PNG, MP4 y PDF obtenidos desde una fuente. No son el lugar donde corregir contenido o identidad.
- **Biblioteca de publicación:** piezas finales aprobadas, incluida la raíz de [reels/](reels/). Se conserva como historial publicable.

No sobrescribir piezas, exports ni biblioteca existentes sin autorización. Corregir primero la fuente canónica y regenerar sólo cuando el alcance lo autorice expresamente.

## Validación mínima

Antes de terminar:

- revisar estado y diff para preservar cambios ajenos y limitar el alcance;
- comprobar enlaces, rutas, assets, claims y consistencia con las políticas aplicables;
- validar sintaxis de cada fuente técnica modificada;
- probar dimensiones, legibilidad y colores cuando haya salida visual, siempre en una ubicación temporal si no se autorizó regenerar;
- confirmar que ninguna fuente, export o pieza fuera del alcance cambió.
