export const carousel = {
  slug: 'carrusel-fricciones-consultas',
  label: 'CONSULTAS SIN FRICCIÓN',
  variant: 'distinct-campaign',
  artDirection: 'diagnostic',
  decisions: ['MENSAJE', 'CONTACTO', 'FORMULARIO', 'MÓVIL', 'CONFIANZA', 'SEGUIMIENTO'],
  caption: `Tu web puede recibir visitas y, aun así, dificultar el contacto.

Un mensaje ambiguo, un botón escondido o un formulario demasiado largo suman fricción justo antes de la consulta.

Revisar el recorrido no siempre significa agregar. Muchas veces significa ordenar, reducir y priorizar.

¿Querés revisar tu web?

Escribinos WEB por DM.

#DesarrolloWeb #DiseñoWeb #Pymes`,
  slides: [
    { type: 'cover', title: ['Tu web puede estar', 'frenando consultas.'], note: 'Seis fricciones que conviene revisar.', accent: 1, titleSize: 100 },
    {
      type: 'comparison', step: 0, kicker: 'FRICCIÓN 01 · MENSAJE', title: ['Si no se entiende,', 'no avanza.'], note: 'El cliente necesita reconocer rápido qué resolvés.', accent: 1,
      left: { label: 'AMBIGUO', lines: ['“Hacemos', 'de todo.”'] }, right: { label: 'CLARO', lines: ['“Esto', 'resolvemos.”'] }
    },
    {
      type: 'rewrite', step: 1, kicker: 'FRICCIÓN 02 · CONTACTO', title: ['El contacto', 'no se esconde.'], note: 'Cada paso extra aumenta la posibilidad de abandonar.', accent: 1,
      before: '“Buscá el formulario en el menú.”', after: '“Escribinos desde acá.”'
    },
    {
      type: 'identity', step: 2, kicker: 'FRICCIÓN 03 · FORMULARIO', title: ['Pedir menos', 'ayuda a empezar.'], note: 'La primera conversación debería ser simple.', accent: 1,
      items: ['NOMBRE', 'CONTACTO', 'NECESIDAD']
    },
    {
      type: 'journey', step: 3, kicker: 'FRICCIÓN 04 · MÓVIL', title: ['En celular', 'también tiene que fluir.'], note: 'Leer, tocar y escribir no deberían exigir esfuerzo.', accent: 1, titleSize: 94,
      items: ['LEER', 'TOCAR', 'ESCRIBIR', 'ENVIAR']
    },
    {
      type: 'foundation', step: 4, kicker: 'FRICCIÓN 05 · CONFIANZA', title: ['La confianza', 'se construye antes.'], note: 'Proceso, trabajos y respuestas reducen incertidumbre.', accent: 1,
      items: [{ label: 'PROCESO', value: 'Visible.' }, { label: 'TRABAJOS', value: 'Reales.' }, { label: 'DUDAS', value: 'Resueltas.' }]
    },
    {
      type: 'case', step: 5, kicker: 'FRICCIÓN 06 · SEGUIMIENTO', title: ['Una consulta', 'tiene que llegar.'], note: 'Diseñamos y probamos el recorrido completo.', accent: 1,
      caseLabel: 'CASO REAL · BUTASSI HNOS.', caseItems: ['CTA visible', 'Formulario simple', 'Contacto directo'], caseAsset: '../../../reels/assets/mockups/butassi-contacto.svg'
    },
    { type: 'cta', title: ['Menos fricción.', 'Un paso claro.'], note: '¿Querés revisar tu web?', accent: 1, ctaLabel: 'ESCRIBINOS “WEB” →', cta: true, titleSize: 100 }
  ]
};
