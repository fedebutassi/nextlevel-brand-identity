export const carousel = {
  slug: 'carrusel-antes-de-pedir-presupuesto',
  label: 'ANTES DEL PRESUPUESTO',
  variant: 'distinct-campaign',
  artDirection: 'checklist',
  decisions: ['OBJETIVO', 'PÚBLICO', 'CONTENIDO', 'FUNCIONES', 'REFERENCIAS', 'PRIORIDAD'],
  caption: `No necesitás llegar con todo resuelto para pedir presupuesto para una web.

Pero algunas definiciones ayudan a entender mejor el proyecto: objetivo, público, contenido, funciones, referencias y prioridad.

El resto se puede ordenar durante la conversación inicial.

¿Tenés una idea para desarrollar?

Escribinos PROYECTO por DM.

#DesarrolloWeb #PresupuestoWeb #Pymes`,
  slides: [
    { type: 'cover', title: ['Antes de pedir', 'presupuesto para una web.'], note: 'Definí estas seis cosas.', accent: 1, titleSize: 92 },
    {
      type: 'comparison', step: 0, kicker: 'DEFINICIÓN 01 · OBJETIVO', title: ['¿Qué tiene', 'que lograr?'], note: 'El objetivo permite priorizar alcance y decisiones.', accent: 1,
      left: { label: 'AMPLIO', lines: ['“Quiero', 'una web.”'] }, right: { label: 'PRECISO', lines: ['“Quiero recibir', 'pedidos.”'] }
    },
    {
      type: 'rewrite', step: 1, kicker: 'DEFINICIÓN 02 · PÚBLICO', title: ['¿Para quién', 'la construimos?'], note: 'El diseño cambia cuando cambia la persona que la usa.', accent: 1,
      before: '“Para todo el mundo.”', after: '“Para clientes mayoristas de Córdoba.”'
    },
    {
      type: 'identity', step: 2, kicker: 'DEFINICIÓN 03 · CONTENIDO', title: ['¿Qué tiene', 'que contar?'], note: 'El contenido define la estructura antes que las pantallas.', accent: 1,
      items: ['SERVICIOS', 'CASOS', 'PREGUNTAS']
    },
    {
      type: 'journey', step: 3, kicker: 'DEFINICIÓN 04 · FUNCIONES', title: ['¿Qué tiene', 'que poder hacer?'], note: 'Informar no es lo mismo que vender o gestionar.', accent: 1,
      items: ['CONSULTAR', 'RESERVAR', 'COMPRAR', 'GESTIONAR']
    },
    {
      type: 'foundation', step: 4, kicker: 'DEFINICIÓN 05 · REFERENCIAS', title: ['Mostrá lo que', 'te representa.'], note: 'Una referencia sirve más cuando explicás por qué.', accent: 1,
      items: [{ label: 'ME GUSTA', value: 'Qué.' }, { label: 'NO ME GUSTA', value: 'Por qué.' }, { label: 'MI MARCA', value: 'Cómo.' }]
    },
    {
      type: 'case', step: 5, kicker: 'DEFINICIÓN 06 · PRIORIDAD', title: ['Primero,', 'lo importante.'], note: 'Una prioridad clara ayuda a construir un alcance real.', accent: 1,
      caseLabel: 'CASO REAL · BUTASSI HNOS.', caseItems: ['Problema concreto', 'Función propia', 'Alcance claro'], caseAsset: '../../../reels/assets/mockups/butassi-radar.svg'
    },
    { type: 'cta', title: ['Una idea clara.', 'Un alcance real.'], note: 'Nosotros te ayudamos a ordenar el resto.', accent: 1, ctaLabel: 'ESCRIBINOS “PROYECTO” →', cta: true, titleSize: 100 }
  ]
};
