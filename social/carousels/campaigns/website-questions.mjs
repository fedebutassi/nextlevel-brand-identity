export const carousel = {
  slug: 'carrusel-preguntas-que-responde-tu-web',
  label: 'CLARIDAD ANTES DEL CONTACTO',
  variant: 'distinct-campaign',
  artDirection: 'editorial',
  decisions: ['QUÉ', 'PARA QUIÉN', 'DIFERENCIA', 'PROCESO', 'PRUEBA', 'PRÓXIMO PASO'],
  caption: `Tu web debería responder las preguntas que aparecen antes de una consulta.

Qué hacés. Para quién. Por qué elegirte. Cómo trabajás. Qué prueba lo que decís. Y cuál es el próximo paso.

Cuando esa información está ordenada, el cliente puede entender, comparar y decidir con menos dudas.

¿Tu web responde todo esto?

Escribinos WEB por DM.

#DesarrolloWeb #ContenidoWeb #Pymes`,
  slides: [
    { type: 'cover', title: ['Tu web debería', 'responder esto.'], note: 'Antes de que el cliente tenga que escribirte.', accent: 1 },
    {
      type: 'comparison', step: 0, kicker: 'PREGUNTA 01 · QUÉ', title: ['¿Qué hacés,', 'exactamente?'], note: 'La propuesta principal no puede quedar implícita.', accent: 1,
      left: { label: 'GENÉRICO', lines: ['“Calidad y', 'compromiso.”'] }, right: { label: 'CONCRETO', lines: ['“Diseño web', 'a medida.”'] }
    },
    {
      type: 'rewrite', step: 1, kicker: 'PREGUNTA 02 · PARA QUIÉN', title: ['El cliente tiene', 'que reconocerse.'], note: 'Cuando cambia el público, también cambia el mensaje.', accent: 1, titleSize: 96,
      before: '“Para todo tipo de clientes.”', after: '“Para comercios que quieren vender online.”'
    },
    {
      type: 'identity', step: 2, kicker: 'PREGUNTA 03 · DIFERENCIA', title: ['¿Por qué', 'elegirte a vos?'], note: 'La diferencia tiene que ser concreta y demostrable.', accent: 1,
      items: ['EXPERIENCIA', 'PROCESO', 'CRITERIO']
    },
    {
      type: 'journey', step: 3, kicker: 'PREGUNTA 04 · PROCESO', title: ['Mostrá cómo', 'trabajás.'], note: 'Un proceso visible reduce dudas antes de empezar.', accent: 1,
      items: ['CONSULTA', 'PROPUESTA', 'DESARROLLO', 'LANZAMIENTO']
    },
    {
      type: 'foundation', step: 4, kicker: 'PREGUNTA 05 · PRUEBA', title: ['No alcanza', 'con decirlo.'], note: 'Los trabajos reales sostienen la promesa.', accent: 1,
      items: [{ label: 'CASOS', value: 'Concretos.' }, { label: 'TRABAJOS', value: 'Visibles.' }, { label: 'DETALLES', value: 'Reales.' }]
    },
    {
      type: 'case', step: 5, kicker: 'PREGUNTA 06 · PRÓXIMO PASO', title: ['¿Cómo', 'seguimos?'], note: 'Una acción clara evita que el recorrido termine en duda.', accent: 1,
      caseLabel: 'CASO REAL · AYRES', caseItems: ['Propuesta clara', 'Catálogo visible', 'Contacto directo'], caseAsset: '../../../reels/assets/mockups/ayres-hero.svg'
    },
    { type: 'cta', title: ['Menos dudas.', 'Un paso claro.'], note: '¿Tu web responde estas preguntas?', accent: 1, ctaLabel: 'ESCRIBINOS “WEB” →', cta: true }
  ]
};
