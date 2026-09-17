# Registro comercial — nextlevel.

## Uso y privacidad

Registrar una fila por oportunidad comercial. Usar un identificador correlativo (`LED-001`, `LED-002`, etc.) y conservar nombres, teléfonos, correos y mensajes únicamente en el canal original o en un CRM con acceso privado. Este repositorio no debe almacenar datos personales de prospectos.

Estados permitidos:

- `nuevo`: contacto recibido, todavía sin calificar;
- `calificado`: necesidad, encaje, plazo y presupuesto permiten avanzar;
- `no calificado`: no existe encaje comercial actual;
- `propuesta`: propuesta enviada;
- `ganado`: proyecto confirmado;
- `perdido`: oportunidad cerrada sin venta;
- `seguimiento`: requiere una acción futura concreta.

## Oportunidades

| ID | Fecha | Canal | Origen o pieza | Servicio | Tipo de negocio | Necesidad | Plazo | Presupuesto estimado | Estado | Fecha de propuesta | Valor propuesto (USD) | Resultado | Motivo de pérdida | Próxima acción | Fecha próxima acción |
|---|---|---|---|---|---|---|---|---:|---|---|---:|---|---|---|---|
| LED-001 | 2026-09-13 | Otro (formulario Meta) | Pauta semana-06 — carrusel perspectiva cliente | Web | — | — | — | — | perdido | — | — | — | Sin interés (respuesta negativa) | — | — |
| LED-002 | 2026-09-13 | Otro (formulario Meta) | Pauta semana-06 — carrusel perspectiva cliente | Web | Estudio de movimiento | Por definir | Por definir | — | seguimiento | — | — | — | — | Esperar respuesta al mensaje de WhatsApp | 2026-09-16 |
| LED-003 | 2026-09-12 | Otro (formulario Meta) | Pauta semana-06 — carrusel perspectiva cliente | Web | Por definir | Por definir | Por definir | — | seguimiento | — | — | — | — | Esperar respuesta al mensaje de WhatsApp | 2026-09-16 |

## Rendimiento de pauta — Meta Ads

### Campaña: lead form semana 06 (desde 11/09/2026)

| Fecha | Impresiones | Alcance | Clicks | Link clicks | CPC (ARS) | CPM (ARS) | CTR | Gasto (ARS) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-09-14 | 99 | 87 | 1 | 1 | 777,67 | 7.855,25 | 1,01% | 777,67 |
| 2026-09-15 | 906 | 763 | 10 | 9 | 275,71 | 3.043,15 | 1,10% | 2.757,09 |
| 2026-09-16 | 190 | 168 | 6 | 5 | 103,67 | 3.273,89 | 3,16% | 622,04 |
| **Total** | **1.195** | **—** | **17** | **15** | **—** | **—** | **—** | **4.156,80** |

Acciones adicionales: 5 reacciones (1 unlike), 1 post save, 21 post engagements totales.

Leads generados por la pauta: LED-001, LED-002, LED-003 (3 contactos, 15 link clicks → 20% de conversión click-a-lead).

---

## Línea de base comercial — 2026-05-08 a 2026-08-05

| Etapa | Resultado | Tasa derivada |
|---|---:|---:|
| Viewers de contenido | 1.825 | — |
| Visitas al perfil | 198 | 10,85% de viewers |
| Toques en enlace externo | 7 | 3,54% de visitas al perfil |
| DM comerciales | 0 | 0% de visitas al perfil |
| Conversaciones comerciales por WhatsApp | 0 | 0% de visitas al perfil |
| Consultas calificadas | 0 | sin datos de calificación |
| Propuestas enviadas | 0 | sin datos de propuesta |
| Ventas | 0 | sin datos de cierre |
| Valor vendido | USD 0 | 0% de ocupación sobre 3 proyectos |

La cuenta generó exposición, visitas al perfil y siete toques en el enlace, pero ninguna conversación comercial documentada. Las tasas sirven como línea de base interna y no demuestran causalidad entre una publicación y una acción posterior.

Fuentes de la línea de base: export de Meta `May-08-2026_Aug-05-2026_879326681625552.csv`, capturas de Account Insights aportadas el 2026-08-06 y confirmación del responsable de marca sobre DM, WhatsApp, consultas, propuestas y ventas. El CSV se conserva fuera del repositorio y no se convierte en un claim publicable.

## Resumen mensual

| Mes | Contactos | Calificados | Propuestas | Ventas | Valor vendido (USD) | Ticket promedio (USD) | Ocupación sobre 3 | Días promedio al cierre |
|---|---:|---:|---:|---:|---:|---:|---:|---:|

## Definiciones y fórmulas

- **Contacto:** conversación nueva vinculada con un posible proyecto.
- **Contacto calificado:** oportunidad con necesidad compatible, interlocutor real y condiciones suficientes para decidir si se cotiza. Presupuesto y plazo pueden quedar pendientes si se acuerda una próxima acción concreta.
- **Propuesta:** presupuesto formal enviado con alcance, plazo y precio.
- **Venta:** proyecto confirmado según la condición de pago que se defina.
- **Ticket promedio:** `valor vendido ÷ ventas`.
- **Tasa de calificación:** `calificados ÷ contactos`.
- **Tasa de propuesta:** `propuestas ÷ calificados`.
- **Tasa de cierre:** `ventas ÷ propuestas`.
- **Ocupación:** `ventas del mes ÷ 3`.
- **Contactos necesarios para tres ventas:** `3 ÷ tasa de cierre entre contactos calificados`. Sólo calcular cuando exista una muestra real suficiente; no fijar una tasa por intuición.

Cuando el denominador sea cero, registrar `sin datos` en lugar de mostrar un porcentaje.

## Atribución

Canales permitidos: `Instagram DM`, `WhatsApp`, `Formulario web`, `Referido`, `Otro`.

En `Origen o pieza`, registrar el nombre de la publicación, campaña o enlace cuando pueda identificarse. Para visitas desde la bio, usar el UTM definido en [COMMERCIAL_OPERATIONS.md](COMMERCIAL_OPERATIONS.md#enlace-medible-desde-la-bio). No atribuir una venta a una pieza si el prospecto no lo confirma o el recorrido no puede verificarse.

## Revisión

- Actualizar cada oportunidad después de una conversación, propuesta o decisión.
- Revisar seguimientos al menos una vez por semana.
- Cerrar oportunidades perdidas con un motivo concreto cuando se conozca.
- Completar el resumen al cierre de cada mes.
- Comparar contenido con contactos y ventas; alcance, vistas e interacciones por sí solos no son resultados comerciales.

Fuentes: [CONTENT_STRATEGY.md](CONTENT_STRATEGY.md), [COMMERCIAL_OPERATIONS.md](COMMERCIAL_OPERATIONS.md), [CLAIMS_POLICY.md](CLAIMS_POLICY.md).
