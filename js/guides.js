/* Kit B1 · guías visuales (parte 1: tiempos verbales, conectores, phrasal verbs, irregulares) */
const chips = a => `<div class="chips">${a.map(x=>`<span>${x}</span>`).join("")}</div>`;
const table = (head, rows) => `<div class="gtable"><table><thead><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

const GUIDES = [
 { id:"ps-pc", short:"Presente simple vs continuo", title:"Present simple <em>vs</em> Present continuous",
   sub:"Mismo tiempo, momentos distintos: lo de siempre frente a lo de ahora.",
   sticky:"I know the answer.<br><s>I'm knowing the answer.</s>",
   cols:["Present simple","Present continuous"],
   rows:[
    ["Cuándo se usa",[["Rutinas y hábitos","Hechos generales","Cosas siempre verdad","Situaciones permanentes","Horarios (trenes, clases)"],["Lo que pasa ahora mismo","Situaciones temporales","Cosas que están cambiando","Planes de futuro ya organizados"]]],
    ["Forma",[`<p class="form">Sujeto + verbo (+ -s/-es con he/she/it)</p><p>✗ don't / doesn't + verbo</p><p>? Do / Does + sujeto + verbo?</p>`,`<p class="form">Sujeto + am/is/are + verbo-ing</p><p>✗ am not / isn't / aren't + -ing</p><p>? Am / Is / Are + sujeto + -ing?</p>`]],
    ["Ejemplos",[["I <b>go</b> to school every day.","She usually <b>gets up</b> at 7 a.m.","Water <b>boils</b> at 100°C.","He <b>lives</b> in Madrid."],["I<b>'m studying</b> now.","She<b>'s getting</b> ready.","It<b>'s raining</b> at the moment.","He<b>'s living</b> in Madrid for a year."]]],
    ["Expresiones de tiempo",[chips(["always","usually","often","sometimes","rarely","never","every day","on Mondays","in the morning","at the weekend"]),chips(["now","right now","at the moment","today","this week","these days","currently","tonight"])]]
   ],
   extra:`<section class="gsec"><h3>Ortografía: -s y -ing</h3>
    ${table(["Regla","Ejemplo","Forma"],[
      ["La mayoría: + -s / + -ing","play","plays · <b>playing</b>"],
      ["Acaban en -o, -ch, -sh, -ss, -x: + -es","watch · go","<b>watches</b> · <b>goes</b>"],
      ["Consonante + y: -ies","study","<b>studies</b> · studying"],
      ["Acaban en -e: quita la e","write","<b>writing</b>"],
      ["Consonante-vocal-consonante: dobla","run · swim","<b>running</b> · <b>swimming</b>"],
      ["Acaban en -ie: -ying","die · lie","<b>dying</b> · <b>lying</b>"],
      ["Acaban en -l (inglés británico): dobla","travel","<b>travelling</b>"]])}</section>
    <section class="gsec"><h3>Verbos de estado (casi nunca en -ing)</h3>
    <div class="gcols"><div class="gcell a">${chips(["know","understand","believe","remember","forget","think (opinar)","mean"])}<p class="xmp">Mente</p></div>
    <div class="gcell b">${chips(["like","love","hate","prefer","want","need"])}<p class="xmp">Gustos y deseos</p></div>
    <div class="gcell c">${chips(["have (poseer)","belong","own","seem","cost","be"])}<p class="xmp">Posesión y estado</p></div></div></section>`,
   practice:["tn","conj","Practicar tiempos verbales"] },

 { id:"past-pp", short:"Past simple vs Present perfect", title:"Past simple <em>vs</em> Present perfect",
   sub:"¿Dices cuándo pasó? Past simple. ¿No importa cuándo o sigue ahora? Present perfect.",
   sticky:"<s>I have seen him yesterday.</s><br>I saw him yesterday.",
   cols:["Past simple","Present perfect"],
   rows:[
    ["Cuándo se usa",[["Acción terminada en un momento concreto","Dices (o se sabe) cuándo pasó","Contar una historia paso a paso","Cosas que ya no son así"],["Experiencias en la vida, sin decir cuándo","Algo que empezó y sigue ahora","Pasado con resultado ahora","Noticias recientes"]]],
    ["Forma",[`<p class="form">Sujeto + verbo-ed / irregular</p><p>✗ didn't + verbo</p><p>? Did + sujeto + verbo?</p>`,`<p class="form">Sujeto + have/has + participio</p><p>✗ haven't / hasn't + participio</p><p>? Have / Has + sujeto + participio?</p>`]],
    ["Ejemplos",[["I <b>visited</b> London in 2022.","She <b>lost</b> her keys yesterday.","We <b>lived</b> in Paris for two years. (ya no)","<b>Did</b> you <b>see</b> the match last night?"],["I<b>'ve visited</b> London twice.","She<b>'s lost</b> her keys. (sigue sin ellas)","We<b>'ve lived</b> here for two years. (y seguimos)","<b>Have</b> you ever <b>seen</b> a whale?"]]],
    ["Expresiones de tiempo",[chips(["yesterday","last week","last year","in 2020","two days ago","when I was ten","then"]),chips(["ever","never","already","yet","just","since","for","so far","recently","this week (no ha acabado)"])]]
   ],
   extra:`<section class="gsec"><h3>Ever, never, already, yet, just: dónde van</h3>
    ${table(["Palabra","Posición","Ejemplo"],[
      ["ever","preguntas, antes del participio","Have you <b>ever</b> been to Italy?"],
      ["never","antes del participio","I've <b>never</b> tried sushi."],
      ["already","antes del participio","I've <b>already</b> finished."],
      ["yet","al final, en negativas y preguntas","I haven't finished <b>yet</b>. Have you finished <b>yet</b>?"],
      ["just","antes del participio","She's <b>just</b> arrived."]])}</section>`,
   practice:["gu","irr","Repasar verbos irregulares"] },

 { id:"past-cont", short:"Past simple vs Past continuous", title:"Past simple <em>vs</em> Past continuous",
   sub:"La acción corta interrumpe a la acción larga. Clave para contar historias en el Writing.",
   sticky:"I <b>was having</b> a shower <b>when</b> the phone <b>rang</b>.",
   cols:["Past simple","Past continuous"],
   rows:[
    ["Cuándo se usa",[["Acción corta y terminada","Acciones una detrás de otra","La acción que interrumpe"],["Acción larga en progreso","El escenario de una historia","Dos acciones a la vez (while)"]]],
    ["Forma",[`<p class="form">Sujeto + verbo-ed / irregular</p><p>I worked · I went · I didn't go</p>`,`<p class="form">Sujeto + was/were + verbo-ing</p><p>I/he/she/it <b>was</b> · you/we/they <b>were</b></p>`]],
    ["Ejemplos",[["I <b>got up</b>, <b>had</b> breakfast and <b>left</b>.","The phone <b>rang</b>.","Suddenly, the lights <b>went</b> out."],["At 8 pm we <b>were watching</b> TV.","The sun <b>was shining</b> and birds <b>were singing</b>.","While I <b>was cooking</b>, he <b>was studying</b>."]]],
    ["Expresiones de tiempo",[chips(["yesterday","last week","last month","in 2010","two days ago","when + past simple","when I was a child"]),chips(["at 6 p.m. yesterday","while","as","when (para la acción larga)","all morning"])]]
   ],
   extra:`<section class="gsec"><h3>Juntos en la misma frase</h3>
    <div class="timeline" role="img" aria-label="La acción larga I was watching TV se interrumpe por la acción corta the phone rang">
      <div class="tl-axis"><span>pasado</span><span>ahora</span></div>
      <div class="tl-long">I was watching TV</div>
      <div class="tl-hit"><span class="tl-dot"></span><span class="tl-lbl">the phone rang</span></div>
    </div>
    <div class="gcols">
      <div class="gcell b"><p class="cname">Past continuous</p><p>La acción larga, ya en marcha</p><p class="hl">I was watching TV...</p></div>
      <div class="gcell a"><p class="cname">Past simple</p><p>La acción corta que la interrumpe</p><p class="hl">...when the phone rang.</p></div>
    </div></section>
    <section class="gsec"><h3>Diferencias clave</h3>
    ${table(["Past simple","Past continuous"],[
      ["Acciones terminadas","Acciones en progreso"],
      ["Acciones cortas","Acciones largas"],
      ["Una secuencia de hechos","Información de fondo, el escenario"],
      ["Hechos del pasado","Una hora concreta del pasado"],
      ["Interrumpe una acción","Es interrumpida por una acción corta"]])}</section>`,
   practice:["pc","","Práctica rápida"] },

 { id:"future", short:"Will, going to y presente continuo", title:"El futuro: <em>will · going to · present continuous</em>",
   sub:"Tres formas de hablar del futuro según lo decidido que esté.",
   sticky:"Oferta rápida:<br>I<b>'ll</b> help you!<br><s>I help you!</s>",
   cols:["will","going to","present continuous"],
   rows:[
    ["Cuándo se usa",[["Decisión en el momento","Predicción u opinión","Ofrecimientos y promesas"],["Plan o intención ya decidida","Predicción con pruebas (lo estás viendo)"],["Cita o plan organizado, con día, hora o lugar"]]],
    ["Forma",[`<p class="form">will + verbo</p><p>✗ won't + verbo</p>`,`<p class="form">am/is/are going to + verbo</p><p>✗ isn't going to + verbo</p>`,`<p class="form">am/is/are + verbo-ing</p><p>+ día u hora</p>`]],
    ["Ejemplos",[["The phone's ringing. I<b>'ll get</b> it.","I think Spain <b>will win</b>.","I <b>won't tell</b> anyone, I promise."],["I<b>'m going to study</b> medicine.","Look at those clouds! It<b>'s going to rain</b>."],["I<b>'m meeting</b> Ana at 6 tomorrow.","We<b>'re flying</b> to Rome on Friday."]]],
    ["Pistas",[chips(["I think","probably","I'm sure","maybe","OK, I'll..."]),chips(["Look!","I've decided","my plan is"]),chips(["tomorrow at 6","on Friday","tonight","this weekend"])]]
   ],
   extra:`<section class="gsec"><h3>Primer condicional (muy frecuente en el B1)</h3>
    <div class="gcols"><div class="gcell a"><p class="form">If + present simple, will + verbo</p><p class="hl">If it rains, we'll stay at home.</p><p class="xmp">Nunca «If it will rain».</p></div></div></section>`,
   practice:["tn","conj","Practicar tiempos verbales"] },

 { id:"time", short:"In, on, at, for, since, ago", title:"Expresiones de tiempo",
   sub:"Las preposiciones de tiempo y las palabras for, since, ago, during y while.",
   sticky:"<s>in next Friday</s><br>next Friday",
   cols:["in","on","at"],
   rows:[
    ["Se usa con",[["meses","años","estaciones","partes del día","siglos"],["días","fechas","días + parte del día","días especiales"],["horas","night","the weekend (UK)","Christmas, Easter"]]],
    ["Ejemplos",[chips(["in July","in 2024","in summer","in the morning","in the afternoon"]),chips(["on Monday","on 5th May","on Friday morning","on my birthday","on Christmas Day"]),chips(["at 9 o'clock","at night","at midnight","at the weekend","at Christmas"])]]
   ],
   extra:`<section class="gsec"><h3>Sin preposición</h3>
    <div class="gcols"><div class="gcell c"><p>Delante de <b>next, last, this, every, tomorrow, yesterday</b> no va in / on / at.</p><p class="hl">See you next Friday. I saw him last week.</p></div></div></section>
    <section class="gsec"><h3>For, since, ago, during, while</h3>
    ${table(["Palabra","Significado","Ejemplo"],[
      ["for","durante (una cantidad de tiempo)","I've lived here <b>for</b> ten years."],
      ["since","desde (un momento)","I've lived here <b>since</b> 2015."],
      ["ago","hace (va detrás)","I moved here ten years <b>ago</b>."],
      ["during","durante + sustantivo","I fell asleep <b>during</b> the film."],
      ["while","mientras + sujeto y verbo","I fell asleep <b>while</b> I was watching the film."],
      ["by","como muy tarde","Send it <b>by</b> Friday."],
      ["until","hasta","I worked <b>until</b> 6 pm."]])}</section>`,
   practice:["tn","time","Practicar expresiones de tiempo"] },

 { id:"linkers", short:"Conectores", title:"Conectores para el Writing",
   sub:"Unen frases en emails e historias. Aquí es donde más puntos se pierden.",
   sticky:"<s>because of I like it</s><br>because I like it",
   cols:["Añadir","Contrastar","Causa y resultado"],
   rows:[
    ["Palabras",[chips(["and","also","too","as well","what's more"]),chips(["but","although","however","even though","despite"]),chips(["because","because of","as","so","that's why"])]],
    ["Cómo se usan",[["<b>also</b> antes del verbo: I also like it.","<b>too / as well</b> al final: I like it too."],["<b>although</b> + frase, sin «but» después","<b>however</b> empieza frase nueva, con coma","<b>despite</b> + sustantivo o -ing"],["<b>because</b> + frase (sujeto y verbo)","<b>because of</b> + sustantivo","<b>so</b> = resultado, por eso"]]],
    ["Ejemplos",[["We went to the beach <b>and</b> we <b>also</b> visited the castle."],["<b>Although</b> it was cold, we went out.","It was cold. <b>However</b>, we went out.","<b>Despite</b> the rain, we went out."],["I stayed in <b>because</b> it was raining.","I stayed in <b>because of</b> the rain.","It was raining, <b>so</b> I stayed in."]]]
   ],
   extra:`<section class="gsec"><h3>Ordenar una historia</h3>
    <div class="gcols"><div class="gcell a">${chips(["First,","Then,","After that,","Next,","Finally,","In the end,"])}<p class="xmp">Secuencia</p></div>
    <div class="gcell b">${chips(["When","While","As soon as","Before","After"])}<p class="xmp">Tiempo</p></div></div></section>`,
   practice:null },

 { id:"particles", short:"Phrasal verbs por partícula", title:"Phrasal verbs por partícula",
   sub:"La partícula suele dar una pista del significado. Aprende los verbos en grupos.",
   sticky:"Aprende la frase entera,<br>no solo el verbo.",
   cols:["up","out","off"],
   rows:[
    ["Idea",[["hacia arriba","completar, del todo","aparecer o empezar"],["hacia fuera","descubrir","acabarse algo"],["salir, alejarse","desconectar","cancelar o aplazar"]]],
    ["Ejemplos",[["<b>get up</b> – levantarse","<b>give up</b> – dejar","<b>turn up</b> – aparecer","<b>take up</b> – empezar un hobby","<b>grow up</b> – crecer"],["<b>find out</b> – averiguar","<b>go out</b> – salir","<b>run out of</b> – quedarse sin","<b>work out</b> – hacer ejercicio","<b>hang out</b> – pasar el rato"],["<b>set off</b> – salir de viaje","<b>take off</b> – despegar","<b>turn off</b> – apagar","<b>put off</b> – aplazar","<b>show off</b> – presumir"]]]
   ],
   extra:`<section class="gsec"><h3>Más partículas</h3>
    <div class="gcols">
     <div class="gcell a"><p class="cname">on</p><p>continuar, encender, ponerse</p><ul><li><b>carry on</b> – seguir</li><li><b>go on</b> – continuar, pasar</li><li><b>put on</b> – ponerse</li><li><b>get on</b> – llevarse bien</li></ul></div>
     <div class="gcell b"><p class="cname">down</p><p>bajar, reducir, dejar de funcionar</p><ul><li><b>turn down</b> – bajar, rechazar</li><li><b>break down</b> – averiarse</li><li><b>slow down</b> – ir más despacio</li><li><b>calm down</b> – calmarse</li></ul></div>
     <div class="gcell c"><p class="cname">back</p><p>volver, devolver</p><ul><li><b>come back</b> – volver</li><li><b>give back</b> – devolver</li><li><b>call back</b> – devolver la llamada</li><li><b>get back</b> – regresar</li></ul></div>
    </div></section>`,
   practice:["pv","test","Practicar phrasal verbs"] },

 { id:"irr", short:"Verbos irregulares", title:"Verbos irregulares",
   sub:"Los 62 más frecuentes del B1. Infinitivo, past simple y participio.",
   sticky:"Dilos en voz alta:<br>go – went – gone",
   cols:null, rows:[], extra:"IRREGULARS", practice:["iv","","Ponerme a prueba"] }
];
