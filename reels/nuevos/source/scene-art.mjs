const landingArt = [
  '<div class="choice"><b>LANDING</b><i>O</i><b>SITIO</b></div>',
  '<div class="target"><b>MENSAJE</b><i>→</i><b>ACCIÓN</b><em></em></div>',
  '<div class="sitemap"><b>INICIO</b><i></i><span>SERVICIOS</span><span>CASOS</span><span>CONTACTO</span></div>',
  '<div class="question"><small>LA PREGUNTA ES</small><b>¿QUÉ NECESITA<br>HACER?</b><i>→</i></div>',
  '<div class="fit"><b>OBJETIVO</b><i>→</i><b>ESTRUCTURA</b><em>ENCAJE CORRECTO</em></div>',
  '<div class="landing-mark"><i>1</i><span>OBJETIVO</span><b>→</b><i>1</i><span>FORMATO</span></div>'
];

const editorialArt = [
  '<div class="word-stack"><b>MENSAJE</b><b>FORMA</b><i>01</i></div>',
  '<div class="outline"><span>01 / IDEA CENTRAL</span><span>02 / PRUEBA</span><span>03 / PRÓXIMO PASO</span></div>',
  '<div class="questions"><b>¿QUÉ HACÉS?</b><b>¿PARA QUIÉN?</b><b>¿POR QUÉ VOS?</b></div>',
  '<div class="wire-copy"><i></i><span>TÍTULO REAL</span><i></i><span>TEXTO ÚTIL</span><i></i><span>ACCIÓN</span></div>',
  '<div class="redaction"><del>LOREM IPSUM DOLOR</del><b>PALABRAS<br>CON TRABAJO.</b></div>',
  '<div class="together"><b>CONTENIDO</b><i>+</i><b>DISEÑO</b><em>UNA SOLA DECISIÓN</em></div>'
];

const conversationArt = [
  '<div class="inbox"><i></i><b>NUEVO MENSAJE</b><span>Hola, tengo un proyecto…</span><em>AHORA</em></div>',
  '<div class="chat"><p>¿Qué necesitás resolver?</p><p>Te contamos el contexto.</p><p>Lo pensamos juntos.</p></div>',
  '<div class="scope"><b>ALCANCE <i>✓</i></b><b>PRIORIDADES <i>✓</i></b><b>TIEMPOS <i>✓</i></b><b>ENTREGABLES <i>✓</i></b></div>',
  '<div class="proposal"><small>PROPUESTA / 01</small><b>OBJETIVO</b><i></i><b>ALCANCE</b><i></i><b>ETAPAS</b><em>CLARO DESDE EL INICIO</em></div>',
  '<div class="direct"><b>VOS</b><i>────────→</i><b>NOSOTROS</b><em>CONTACTO DIRECTO</em></div>',
  '<div class="conversation-mark"><span>01</span><i>→</i><span>CHARLAMOS</span></div>'
];

const ownershipArt = [
  '<div class="seal"><i></i><b>PROPIEDAD<br>DIGITAL</b><span>TU MARCA / TU WEB</span></div>',
  '<div class="credentials"><span>DOMINIO <b>TUYO</b></span><span>ACCESOS <b>TUYOS</b></span><span>CONTENIDO <b>TUYO</b></span></div>',
  '<div class="log"><small>REGISTRO DE DECISIONES</small><b>01 · QUÉ</b><b>02 · POR QUÉ</b><b>03 · CÓMO SEGUIMOS</b></div>',
  '<div class="chains"><span>PLATAFORMA</span><i>×</i><span>DEPENDENCIA</span><i>×</i><span>BLOQUEO</span><b>CORTAR LO QUE SOBRA</b></div>',
  '<div class="axis"><i></i><span>HOY</span><b>CRECER</b><b>CAMBIAR</b><b>CONTINUAR</b></div>',
  '<div class="code-card"><small>NEXTLEVEL / BUILD</small><b>{ DISEÑO_HONESTO }</b><b>{ CÓDIGO_PROLIJO }</b><i>READY TO GROW</i></div>'
];

const automationArt = [
  '<div class="task-loop"><b>COPIAR</b><i>→</i><b>PEGAR</b><i>→</i><b>REPETIR</b><em>× 37</em></div>',
  '<div class="intakes"><span>PEDIDO <i>01</i></span><span>RESERVA <i>02</i></span><span>CONSULTA <i>03</i></span><b>UNA ENTRADA</b></div>',
  '<div class="workflow"><span>CLIENTE</span><i></i><span>PLATAFORMA</span><i></i><span>EQUIPO</span><em></em></div>',
  '<div class="data-form"><small>DATOS NECESARIOS</small><label>NOMBRE <i>✓</i></label><label>SERVICIO <i>✓</i></label><label>FECHA <i>✓</i></label><b>ENVIAR →</b></div>',
  '<div class="before-after"><section><small>ANTES</small><b>7 PASOS</b><i></i><i></i><i></i><i></i></section><section><small>DESPUÉS</small><b>3 PASOS</b><i></i><i></i></section></div>',
  '<div class="product-node"><i></i><i></i><i></i><b>PRODUCTO<br>WEB</b><span>HECHO PARA TU PROCESO</span></div>'
];

const comparisonArt = [
  '<div class="quote-duel"><section><small>PROPUESTA A</small><b>$</b><i>5 ÍTEMS</i></section><em>VS</em><section><small>PROPUESTA B</small><b>$$</b><i>12 ÍTEMS</i></section></div>',
  '<div class="scope-layers"><span>PÁGINAS</span><span>FUNCIONES</span><span>ENTREGABLES</span><b>ALCANCE</b></div>',
  '<div class="routes"><section><small>A</small><i></i><i></i><i></i></section><section><small>B</small><i></i><i></i><i></i><i></i><i></i></section><b>NO ES EL MISMO CAMINO</b></div>',
  '<div class="aftercare"><span>PUBLICACIÓN</span><span>SOPORTE</span><span>CAMBIOS</span><i>¿INCLUIDO?</i></div>',
  '<div class="balance"><section><b>PRECIO</b></section><i></i><section><b>TRABAJO</b><small>ALCANCE · PROCESO · SOPORTE</small></section></div>',
  '<div class="clear-quote"><small>PROPUESTA NEXTLEVEL / 01</small><span>ALCANCE <b>✓</b></span><span>PROCESO <b>✓</b></span><span>SOPORTE <b>✓</b></span><i>SIN SORPRESAS</i></div>'
];

const filterArt = [
  '<div class="signal-filter"><span>CONSULTA</span><span>CONSULTA</span><span>CONSULTA</span><i></i><b>CONTEXTO</b></div>',
  '<div class="audience-lens"><i></i><span>NEGOCIO</span><span>NECESIDAD</span><b>PARA VOS</b></div>',
  '<div class="problem-match"><section>PROBLEMA</section><i>→</i><section>LO QUE RESOLVEMOS</section><b>ENCAJE</b></div>',
  '<div class="method-cards"><span>01 / CHARLAR</span><span>02 / ORDENAR</span><span>03 / CONSTRUIR</span><i></i></div>',
  '<div class="context-message"><small>NUEVA CONSULTA</small><b>“YA VI CÓMO<br>TRABAJAN.”</b><span>LISTA PARA CONVERSAR →</span></div>',
  '<div class="quiet-signal"><i></i><b>SEÑAL CLARA</b><span>RUIDO AFUERA</span><em>MEJOR CONVERSACIÓN</em></div>'
];

const identityArt = [
  '<div class="clone-cards"><section><small>MARCA A</small><b>COPIA</b></section><section><small>MARCA B</small><b>COPIA</b></section><section><small>MARCA C</small><b>COPIA</b></section><i>⌘ C</i></div>',
  '<div class="business-print"><i></i><b>TU NEGOCIO</b><span>OBJETIVOS PROPIOS</span><span>PROCESO PROPIO</span><span>CRITERIO PROPIO</span></div>',
  '<div class="audience-vectors"><span>PÚBLICO A</span><i>↗</i><span>PÚBLICO B</span><i>↘</i><b>RECORRIDOS DISTINTOS</b></div>',
  '<div class="brand-dna"><span>MENSAJE</span><i>+</i><span>ESTRUCTURA</span><i>+</i><span>DISEÑO</span><b>ADN DE MARCA</b></div>',
  '<div class="reference-replica"><section>REFERENCIA <b>✓</b></section><section>RÉPLICA <b>×</b></section><i>CRITERIO ANTES QUE CALCO</i></div>',
  '<div class="unique-mark"><i></i><i></i><i></i><b>UNA MARCA.<br>UNA DIRECCIÓN.</b><span>NEXTLEVEL / A MEDIDA</span></div>'
];

const tempoArt = [
  '<div class="project-clock"><i></i><span>PROYECTO EN CURSO</span><em></em></div>',
  '<div class="priority-board"><span>URGENTE</span><span>IMPORTANTE</span><span>DESPUÉS</span><i>¿QUÉ VA PRIMERO?</i></div>',
  '<div class="content-queue"><section>TEXTO <i>…</i></section><section>FOTOS <i>…</i></section><section>CASOS <i>…</i></section><b>EN ESPERA</b></div>',
  '<div class="feedback-compass"><i></i><span>ME GUSTA</span><span>FUNCIONA</span><b>OBJETIVO</b></div>',
  '<div class="moving-target"><i></i><i></i><i></i><b>OBJETIVO</b><span>CAMBIÓ DE LUGAR</span></div>',
  '<div class="steady-line"><span>BRIEF</span><i></i><span>DISEÑO</span><i></i><span>BUILD</span><i></i><span>PUBLICAR</span><em></em></div>'
];

const discoveryArt = [
  '<div class="search-entry"><i></i><span>tu negocio + servicio</span><b>BUSCAR</b><em></em></div>',
  '<div class="page-tree"><b>INICIO</b><i></i><span>SERVICIO A</span><span>SERVICIO B</span><span>CONTACTO</span><small>UNA FUNCIÓN POR PÁGINA</small></div>',
  '<div class="heading-stack"><b>H1 · QUÉ HACÉS</b><span>H2 · CÓMO AYUDÁS</span><span>H2 · QUÉ SIGUE</span><i>PALABRAS QUE ORIENTAN</i></div>',
  '<div class="answer-boxes"><span>¿QUÉ INCLUYE?<b>→ RESPUESTA</b></span><span>¿CÓMO EMPIEZO?<b>→ RESPUESTA</b></span><span>¿PARA QUIÉN ES?<b>→ RESPUESTA</b></span></div>',
  '<div class="performance-order"><span>01</span><b>CARGAR</b><span>02</span><b>ENTENDER</b><span>03</span><b>AVANZAR</b><i></i></div>',
  '<div class="human-search"><section>PERSONAS</section><i>↔</i><section>ESTRUCTURA</section><b>ENCONTRAR · ENTENDER · ACTUAR</b></div>'
];

const restraintArt = [
  '<div class="oversized-build"><section>APP</section><i>×</i><span>FUNCIONES</span><span>PANTALLAS</span><span>CUENTAS</span><b>¿HACE FALTA?</b></div>',
  '<div class="better-form"><label>NOMBRE <i>✓</i></label><label>NECESIDAD <i>✓</i></label><label>CONTACTO <i>✓</i></label><b>3 DATOS. UN SIGUIENTE PASO.</b></div>',
  '<div class="simple-panel"><small>PANEL / HOY</small><b>3</b><span>PENDIENTES IMPORTANTES</span><i></i><i></i><i></i></div>',
  '<div class="tool-bridge"><section>HERRAMIENTA A</section><i>⇄</i><section>HERRAMIENTA B</section><b>CONECTAR</b></div>',
  '<div class="subtraction"><span>12 PANTALLAS</span><i>−</i><span>8 QUE SOBRAN</span><b>= 4 ÚTILES</b></div>',
  '<div class="understand-build"><section><small>01</small><b>ENTENDER</b></section><i>→</i><section><small>02</small><b>CONSTRUIR</b></section><em>EN ESE ORDEN</em></div>'
];

const artByCinematic = {
  landing: landingArt,
  editorial: editorialArt,
  conversation: conversationArt,
  ownership: ownershipArt,
  automation: automationArt,
  comparison: comparisonArt,
  filter: filterArt,
  identity: identityArt,
  tempo: tempoArt,
  discovery: discoveryArt,
  restraint: restraintArt
};

export const renderSceneArt = (cinematic, index) => artByCinematic[cinematic][index];
