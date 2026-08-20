# Semana 01 — servicios web

Campaña experimental para convertir interés en conversaciones comerciales sobre landing pages y sitios institucionales.

## Brief estratégico

- Objetivo de negocio: generar contactos calificados para proyectos web.
- Objetivo de comunicación: explicar qué puede contratarse y reducir la incertidumbre antes del primer mensaje.
- Audiencia: propietarios de negocios que buscan crear o mejorar su presencia web.
- Funnel: consideración y conversión.
- CTA comercial único: `Escribinos WEB por DM →`.
- Restricción: no prometer ventas, tráfico, posiciones ni resultados no verificados.

## Calendario

| Fecha | Pieza | Función | CTA |
|---|---|---|---|
| Lunes 10/08/2026 | Stories de diagnóstico | Conocer si la audiencia ya tiene una web propia | Encuesta `Sí / Todavía no` |
| Martes 11/08/2026 | Carrusel `¿Qué incluye una landing?` | Explicar el alcance inicial del servicio | DM con `WEB` |
| Jueves 13/08/2026 | Reel `Nos escribiste. ¿Qué sigue?` | Reducir incertidumbre sobre el primer contacto | DM con `WEB` |
| Viernes 14/08/2026 · 17:00 | Stories de conversión | Facilitar el inicio de una conversación | DM con `WEB` |

## Piezas

### Stories de diagnóstico

- Editables: `stories-diagnostico/source/`.
- Exports: `stories-diagnostico/exports/`.
- En la primera story, agregar en Instagram una encuesta real con las opciones `Sí` y `Todavía no` en el espacio reservado debajo de `RESPONDÉ ACÁ ↓`.
- No agregar enlace, WhatsApp ni pedido de DM: la encuesta es la única acción.

### Carrusel

- Editables: `carrusel-que-incluye-una-landing/source/`.
- Exports: `carrusel-que-incluye-una-landing/exports/`.

#### Caption

Una landing no es solamente una página corta.

Es una estructura enfocada en presentar una empresa, un servicio o una propuesta y facilitar un próximo paso.

El proyecto incluye diseño y desarrollo responsive, organización del contenido, formulario de contacto y configuración para publicar según el alcance acordado.

Si estás evaluando crear una para tu negocio, escribinos `WEB` por DM.

`#DesarrolloWeb #LandingPage #DiseñoWeb #Pymes`

### Reel

- Fuente: `reel-despues-del-primer-mensaje-web/source/`.
- Export: `reel-despues-del-primer-mensaje-web/exports/reel-despues-del-primer-mensaje-web.mp4`.
- El renderer reutiliza el sistema cinemático de conversación existente sin modificar ni sobrescribir el reel histórico.

#### Caption

El primer mensaje no te compromete a tener todas las respuestas.

Charlamos sobre tu negocio, qué necesitás presentar y cuál debería ser el próximo paso de la web. Después ordenamos alcance, tiempos y entregables en una propuesta clara.

Sin intermediarios y sin vueltas.

Escribinos `WEB` por DM.

`#DesarrolloWeb #DiseñoWebAMedida #SitioWeb #Pymes`

### Stories de conversión

- Editables: `stories-conversion/source/`.
- Exports: `stories-conversion/exports/`.
- No agregar encuesta, enlace ni WhatsApp. El DM con `WEB` es la única acción.

## Producción

- Carrusel: 1080×1350 px.
- Stories y reel: 1080×1920 px.
- Tipografías: archivos oficiales de `fonts/`.
- Logos: `assets/logo.svg` y `assets/logo-dark.svg` según el fondo.
- Colores: Paper `#F1E8D8`, Ink `#1A1410`, Terracotta `#D24322` y Sand `#9D8B75`.
- Renderer estático: `source/render-static.mjs`.

## Medición

Registrar por pieza: vistas, alcance, interacciones, visitas al perfil y DM comerciales. Excluir mensajes y clics de prueba. Revisar el funnel operativo el viernes 14/08/2026 y el rendimiento acumulado el lunes 17/08/2026.

Los cortes y resultados de esta campaña se documentan en [`MEDICION.md`](MEDICION.md).
