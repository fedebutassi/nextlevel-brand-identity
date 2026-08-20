import { campaignCarousels } from './campaigns/index.mjs';

const baseCarousels = [
  {
    slug: 'carrusel-seo-sin-tecnicismos',
    label: 'SEO SIN TECNICISMOS',
    slides: [
      { title: ['SEO sin', 'tecnicismos.'], note: 'Cinco bases para que tu web se pueda encontrar y entender.', accent: 1 },
      { title: ['01. Un tema claro', 'por página.'], note: 'Cada página necesita responder una intención concreta.', accent: 1 },
      { title: ['02. Títulos que', 'dicen algo.'], note: '“Servicios” informa menos que un título escrito para tu cliente.', accent: 1 },
      { title: ['03. Contenido', 'útil y propio.'], note: 'Respondé las preguntas reales que aparecen antes de una consulta.', accent: 0 },
      { title: ['04. Una estructura', 'fácil de recorrer.'], note: 'Menú, enlaces y secciones tienen que ayudar a encontrar información.', accent: 1 },
      { title: ['05. Una web', 'que funciona bien.'], note: 'Carga, lectura móvil y estabilidad también forman parte de la experiencia.', accent: 1 },
      { title: ['Primero, claridad.', 'Después, visibilidad.'], note: 'Diseñamos sitios pensados para personas y buscadores. · @nextlvl.ok', accent: 1, cta: true }
    ]
  },
  {
    slug: 'carrusel-mantenimiento-web',
    label: 'MANTENIMIENTO WEB',
    slides: [
      { title: ['Tu web está online.', '¿Y ahora qué?'], note: 'Publicar es el comienzo. Mantenerla útil requiere atención.', accent: 1 },
      { title: ['Actualizá lo que', 'ya cambió.'], note: 'Servicios, precios, equipo, horarios y formas de contacto.', accent: 1 },
      { title: ['Revisá formularios', 'y enlaces.'], note: 'Un contacto que no llega puede pasar desapercibido durante semanas.', accent: 0 },
      { title: ['Cuidá las', 'actualizaciones.'], note: 'Dependencias, integraciones y servicios externos también evolucionan.', accent: 1 },
      { title: ['Mirá cómo la', 'usan de verdad.'], note: 'Las dudas y consultas frecuentes muestran qué contenido mejorar.', accent: 1 },
      { title: ['No acumules', 'parches.'], note: 'Revisar con criterio evita que cada cambio vuelva más frágil el sistema.', accent: 1 },
      { title: ['Una web cuidada', 'sigue siendo útil.'], note: 'Construimos productos digitales que duran. · nextlvl.com.ar', accent: 0, cta: true }
    ]
  },
  {
    slug: 'carrusel-landing-o-sitio-web',
    label: 'LANDING O SITIO WEB',
    slides: [
      { title: ['¿Landing page', 'o sitio web?'], note: 'La respuesta depende del recorrido que necesitás construir.', accent: 0 },
      { title: ['Una landing tiene', 'un objetivo central.'], note: 'Presenta una propuesta y guía hacia una acción concreta.', accent: 1 },
      { title: ['Funciona bien para', 'una campaña.'], note: 'Un lanzamiento, un servicio puntual o una captación específica.', accent: 1 },
      { title: ['Un sitio organiza', 'más información.'], note: 'Servicios, casos, empresa, preguntas y contacto tienen su espacio.', accent: 0 },
      { title: ['Funciona mejor para', 'una presencia estable.'], note: 'El cliente puede explorar, comparar y volver cuando lo necesite.', accent: 1 },
      { title: ['No elijas por', 'cantidad de páginas.'], note: 'Elegí según el objetivo, el contenido y la decisión del cliente.', accent: 1 },
      { title: ['Primero el problema.', 'Después la herramienta.'], note: 'Contanos qué necesitás en @nextlvl.ok', accent: 0, cta: true }
    ]
  },
  {
    slug: 'carrusel-seis-decisiones-web',
    label: 'UNA WEB A MEDIDA',
    caption: `Una web no es una suma de pantallas.

Es un sistema de decisiones: objetivo, mensaje, identidad, recorrido, código y mejora continua.

Cuando todo está conectado, la web deja de ser una vidriera y se convierte en una herramienta de trabajo.

Desarrollo web a medida.

Contanos qué necesitás en @nextlvl.ok.

#DesarrolloWeb #DiseñoWeb #Pymes`,
    slides: [
      { title: ['6 decisiones.', 'Una web que trabaja.'], note: 'No alcanza con que se vea bien. Todo tiene que estar conectado.', accent: 1 },
      { title: ['01. Primero,', 'el objetivo.'], note: 'Vender, recibir consultas o simplificar un proceso. Sin una prioridad, la web queda librada al gusto.', accent: 1 },
      { title: ['02. Después,', 'el mensaje.'], note: 'Qué hacés, para quién y por qué elegirte. Antes de pensar en colores.', accent: 1 },
      { title: ['03. Una identidad', 'que se siente tuya.'], note: 'Tipografía, ritmo y jerarquía para que tu marca no parezca salida de una plantilla.', accent: 1 },
      { title: ['04. Cada pantalla', 'tiene un propósito.'], note: 'Entender, confiar, comparar o actuar. El recorrido se diseña alrededor de decisiones reales.', accent: 1 },
      { title: ['05. Código', 'que no te frena.'], note: 'Carga rápida, integraciones necesarias y una base prolija para seguir creciendo.', accent: 1 },
      { title: ['06. Encontrar.', 'Medir. Mejorar.'], note: 'SEO, rendimiento y datos para decidir qué ajustar después del lanzamiento.', accent: 1 },
      { title: ['Todo conectado.', 'Hecho a medida.'], note: 'Desarrollo web a medida. Contanos qué necesitás en @nextlvl.ok', accent: 1, cta: true }
    ]
  },
  {
    slug: 'carrusel-seis-decisiones-web-v2',
    label: 'UNA WEB A MEDIDA',
    variant: 'connected-decisions',
    decisions: ['OBJETIVO', 'MENSAJE', 'IDENTIDAD', 'RECORRIDO', 'CÓDIGO', 'MEJORA'],
    caption: `Una web no empieza eligiendo colores.

Empieza definiendo qué tiene que lograr, qué necesita entender el cliente y cuál es el próximo paso.

Después, cada decisión —mensaje, identidad, recorrido, código y mejora— tiene que trabajar en la misma dirección.

¿Estás por crear o rediseñar tu web?

Escribinos WEB por DM.

#DesarrolloWeb #DiseñoWeb #Pymes`,
    slides: [
      {
        type: 'cover',
        title: ['Tu web no empieza', 'por el diseño.'],
        note: 'Empieza por seis decisiones conectadas.',
        accent: 1
      },
      {
        type: 'comparison',
        step: 0,
        kicker: 'DECISIÓN 01 · OBJETIVO',
        title: ['Primero:', 'qué tiene que lograr.'],
        note: 'Una prioridad clara ordena todo lo que viene después.',
        accent: 1,
        left: { label: 'SIN ESTO', lines: ['“Quiero mostrar', 'todo.”'] },
        right: { label: 'CON ESTO', lines: ['“Quiero recibir', 'consultas.”'] }
      },
      {
        type: 'rewrite',
        step: 1,
        kicker: 'DECISIÓN 02 · MENSAJE',
        title: ['Después:', 'decirlo claro.'],
        note: 'Si el cliente tiene que interpretar demasiado, el diseño no puede salvarlo.',
        accent: 1,
        before: '“Bienvenidos a nuestra empresa.”',
        after: '“Diseñamos sitios web a medida.”'
      },
      {
        type: 'identity',
        step: 2,
        kicker: 'DECISIÓN 03 · IDENTIDAD',
        title: ['Que se vea bien', 'no alcanza.'],
        note: 'La marca aparece en cómo se ordena, se lee y se siente cada pantalla.',
        accent: 1,
        items: ['TIPOGRAFÍA', 'RITMO', 'JERARQUÍA']
      },
      {
        type: 'journey',
        step: 3,
        kicker: 'DECISIÓN 04 · RECORRIDO',
        title: ['Cada pantalla', 'tiene un trabajo.'],
        note: 'El recorrido acompaña la decisión del cliente, no la complica.',
        accent: 1,
        items: ['ENTENDER', 'CONFIAR', 'COMPARAR', 'ACTUAR']
      },
      {
        type: 'foundation',
        step: 4,
        kicker: 'DECISIÓN 05 · CÓDIGO',
        title: ['Lo que no se ve', 'también importa.'],
        note: 'Una base prolija evita que cada cambio se convierta en un parche.',
        accent: 1,
        items: [
          { label: 'CARGA', value: 'Rápida.' },
          { label: 'PANTALLAS', value: 'Todas.' },
          { label: 'BASE', value: 'Preparada.' }
        ]
      },
      {
        type: 'case',
        step: 5,
        kicker: 'DECISIÓN 06 · MEJORA',
        title: ['Publicar no', 'es terminar.'],
        note: 'Medir, escuchar y ajustar mantiene la web alineada con el negocio.',
        accent: 1,
        caseLabel: 'CASO REAL · AYRES',
        caseItems: ['Catálogo accesible', 'Contacto directo', 'Base para crecer']
      },
      {
        type: 'cta',
        title: ['Todo conectado.', 'Hecho a medida.'],
        note: '¿Estás por crear o rediseñar tu web?',
        accent: 1,
        ctaLabel: 'ESCRIBINOS “WEB” →',
        cta: true
      }
    ]
  }
];

export const carousels = [...baseCarousels, ...campaignCarousels];
