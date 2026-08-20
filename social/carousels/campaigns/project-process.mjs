export const carousel = {
  slug: 'carrusel-proceso-proyecto-web',
  label: 'UN PROCESO CLARO',
  variant: 'distinct-campaign',
  artDirection: 'roadmap',
  decisions: ['ESCUCHAR', 'ORDENAR', 'DISEÑAR', 'DESARROLLAR', 'PUBLICAR', 'ACOMPAÑAR'],
  caption: `Una web a medida no aparece de una sola vez.

Primero escuchamos. Después ordenamos, diseñamos, desarrollamos y revisamos. Publicar es una etapa más, no el final de la relación.

Un proceso visible permite tomar decisiones compartidas y avanzar sin sorpresas.

¿Tenés una idea para desarrollar?

Escribinos PROYECTO por DM.

#DesarrolloWeb #ProcesoDeDiseño #Pymes`,
  slides: [
    { type: 'cover', title: ['De una idea', 'a una web publicada.'], note: 'Seis etapas. Un proceso claro.', accent: 1, titleSize: 100 },
    {
      type: 'comparison', step: 0, kicker: 'ETAPA 01 · ESCUCHAR', title: ['Primero,', 'entender el negocio.'], note: 'Las decisiones empiezan en una conversación real.', accent: 1,
      left: { label: 'SUPONER', lines: ['“Necesitás', 'esto.”'] }, right: { label: 'ESCUCHAR', lines: ['“Contanos', 'qué pasa.”'] }
    },
    {
      type: 'rewrite', step: 1, kicker: 'ETAPA 02 · ORDENAR', title: ['La idea se', 'convierte en alcance.'], note: 'Objetivos, contenido y funciones dejan de estar mezclados.', accent: 1, titleSize: 96,
      before: '“Quiero una web completa.”', after: '“Necesito mostrar servicios y recibir consultas.”'
    },
    {
      type: 'identity', step: 2, kicker: 'ETAPA 03 · DISEÑAR', title: ['Cada pantalla', 'toma una decisión.'], note: 'Contenido, jerarquía e identidad trabajan juntos.', accent: 1,
      items: ['CONTENIDO', 'JERARQUÍA', 'IDENTIDAD']
    },
    {
      type: 'journey', step: 3, kicker: 'ETAPA 04 · DESARROLLAR', title: ['Construimos', 'y revisamos.'], note: 'El avance se ve y las decisiones se comparten.', accent: 1,
      items: ['ESTRUCTURA', 'PANTALLAS', 'FUNCIONES', 'REVISIONES']
    },
    {
      type: 'foundation', step: 4, kicker: 'ETAPA 05 · PUBLICAR', title: ['Antes de salir,', 'todo se prueba.'], note: 'La publicación necesita más que apretar un botón.', accent: 1,
      items: [{ label: 'DOMINIO', value: 'Conectado.' }, { label: 'FORMULARIOS', value: 'Probados.' }, { label: 'MÓVIL', value: 'Revisado.' }]
    },
    {
      type: 'case', step: 5, kicker: 'ETAPA 06 · ACOMPAÑAR', title: ['Después,', 'seguimos cerca.'], note: 'La entrega no termina cuando la web sale online.', accent: 1,
      caseLabel: 'CASO REAL · BUTASSI HNOS.', caseItems: ['Herramienta propia', 'Revisiones visibles', 'Soporte posterior'], caseAsset: '../../../reels/assets/mockups/butassi-radar.svg'
    },
    { type: 'cta', title: ['Un proceso claro.', 'Sin sorpresas.'], note: '¿Tenés una idea para desarrollar?', accent: 1, ctaLabel: 'ESCRIBINOS “PROYECTO” →', cta: true }
  ]
};
