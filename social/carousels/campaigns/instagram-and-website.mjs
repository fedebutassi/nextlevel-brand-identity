export const carousel = {
  slug: 'carrusel-instagram-y-web',
  label: 'REDES Y ESPACIO PROPIO',
  variant: 'distinct-campaign',
  artDirection: 'split',
  decisions: ['DESCUBRIR', 'EXPLICAR', 'ORDENAR', 'CONFIAR', 'CONTACTAR', 'MEDIR'],
  caption: `Instagram y tu web no compiten. Cumplen funciones diferentes.

Las redes ayudan a descubrir y seguir una marca. La web ordena información, profundiza la propuesta y guía hacia una acción concreta.

No se trata de elegir una u otra. Se trata de hacerlas trabajar juntas.

¿Querés construir el espacio propio de tu marca?

Escribinos WEB por DM.

#DesarrolloWeb #InstagramParaNegocios #Pymes`,
  slides: [
    { type: 'cover', title: ['Instagram no', 'reemplaza tu web.'], note: 'Cumplen funciones distintas. Juntas, trabajan mejor.', accent: 1 },
    {
      type: 'comparison', step: 0, kicker: 'FUNCIÓN 01 · DESCUBRIR', title: ['Una atrae.', 'La otra profundiza.'], note: 'Cada canal acompaña un momento diferente.', accent: 1,
      left: { label: 'INSTAGRAM', lines: ['Te', 'descubren.'] }, right: { label: 'TU WEB', lines: ['Te', 'entienden.'] }
    },
    {
      type: 'rewrite', step: 1, kicker: 'FUNCIÓN 02 · EXPLICAR', title: ['Lo importante', 'necesita espacio.'], note: 'En redes, el contenido útil puede quedar lejos.', accent: 1,
      before: '“Está en una historia destacada.”', after: '“Está ordenado en tu sitio.”'
    },
    {
      type: 'identity', step: 2, kicker: 'FUNCIÓN 03 · ORDENAR', title: ['En tu web,', 'vos definís el recorrido.'], note: 'Cada tema tiene un lugar y una función.', accent: 1, titleSize: 94,
      items: ['SERVICIOS', 'CASOS', 'CONTACTO']
    },
    {
      type: 'journey', step: 3, kicker: 'FUNCIÓN 04 · CONFIAR', title: ['El contenido', 'trabaja en equipo.'], note: 'Una publicación puede abrir un recorrido más profundo.', accent: 1,
      items: ['POST', 'PERFIL', 'WEB', 'CONSULTA']
    },
    {
      type: 'foundation', step: 4, kicker: 'FUNCIÓN 05 · CONTACTAR', title: ['El próximo paso', 'tiene que estar claro.'], note: 'La web concentra información y facilita la acción.', accent: 1, titleSize: 96,
      items: [{ label: 'CASOS', value: 'Ver.' }, { label: 'SERVICIOS', value: 'Entender.' }, { label: 'CONTACTO', value: 'Actuar.' }]
    },
    {
      type: 'case', step: 5, kicker: 'FUNCIÓN 06 · MEDIR', title: ['Lo propio', 'también se mejora.'], note: 'La web permite observar recorridos y ajustar decisiones.', accent: 1,
      caseLabel: 'CASO REAL · AYRES', caseItems: ['Catálogo propio', 'Navegación clara', 'Consulta directa'], caseAsset: '../../../reels/assets/mockups/ayres-productos.svg'
    },
    { type: 'cta', title: ['Redes y web.', 'Cada una con su trabajo.'], note: '¿Querés construir el espacio propio de tu marca?', accent: 1, ctaLabel: 'ESCRIBINOS “WEB” →', cta: true, titleSize: 94 }
  ]
};
