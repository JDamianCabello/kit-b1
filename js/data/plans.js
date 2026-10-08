/* Planes de estudio: cada uno con su duración, su ritmo y sus tareas por semana.
   Tareas: ["g", guía] ["q", test] ["c", tarjetas] ["x", simulacro o texto] ["w", Writing] ["s", Speaking] ["r", recurso] ["t", tarea libre]
   Lo hecho se comparte entre planes: si lees una guía o haces un test, cuenta en todos los planes que lo tengan. */
import { PLAN } from "./plan.js";

export const PLAN_GROUPS = [
  ["nivel", "Por nivel", "Aprende paso a paso lo de cada nivel, sin pensar todavía en el examen."],
  ["objetivo", "Por objetivo", "Para una meta concreta: aprobar el B1, soltarte a hablar, ampliar vocabulario o repasar gramática."],
  ["ritmo", "Por ritmo", "Si tienes poco tiempo al día y quieres llegar lejos sin agobios."]
];

const A1 = [
  { title:"Preséntate", goal:"Decir quién eres, de dónde eres y hablar de tu familia.",
    tasks:[["g","be"],["q","gr-be"],["g","pronouns"],["q","gr-pronouns"],["c","tp-family"],["c","tp-countries"],
           ["t","Escribe 5 frases sobre ti: nombre, edad, de dónde eres, trabajo y familia."],["r","bbc-yt"]] },
  { title:"Personas y cosas", goal:"Usar a, an y the, los números, la hora y las fechas, y describir a alguien.",
    tasks:[["g","articles"],["q","gr-articles"],["g","numbers"],["q","gr-numbers"],["c","tp-describe"],["c","tp-jobs"],["c","tp-body"],
           ["t","Hoy, cada vez que mires el reloj, di la hora en inglés en voz alta."]] },
  { title:"Hacer preguntas", goal:"Preguntar y contestar sobre la rutina y el tiempo libre.",
    tasks:[["g","questions"],["q","gr-questions"],["c","tp-routine"],["c","tp-timewords"],["q","mini-all"],
           ["t","Escribe 8 preguntas para conocer a alguien: Where…?, What…?, How often…?"]] },
  { title:"Tu casa y tu ciudad", goal:"Decir qué hay y dónde está: there is / there are y las preposiciones de lugar.",
    tasks:[["g","there"],["q","gr-there"],["g","prepositions"],["c","prep-10"],["c","tp-house"],["c","tp-town"],["r","bc-a2"]] },
  { title:"Comida, compras y ropa", goal:"Contables e incontables: some, any, much y many.",
    tasks:[["g","countable"],["q","gr-countable"],["c","tp-food"],["c","tp-shopping"],["c","tp-clothes"],["c","ropa"],["q","ropa-opt"],
           ["t","Escribe tu lista de la compra en inglés con some, any, a few y a lot of."]] },
  { title:"Lo que sabes hacer", goal:"Can y can't, gustos y aficiones. Repaso del nivel A1.",
    tasks:[["g","can"],["q","gr-can"],["c","tp-sport"],["c","tp-animals"],["q","mini-vo"],["q","quick10"],
           ["t","Grábate 1 minuto presentándote: familia, trabajo, gustos y lo que sabes hacer."]] }
];

const A2 = [
  { title:"Ahora y siempre", goal:"Presente simple y continuo: lo habitual frente a lo que pasa ahora.",
    tasks:[["g","ps-pc"],["q","gr-ps-pc"],["q","tc"],["c","t-struct"],["c","tp-routine"],["c","tp-chores"],["x","hist-1"],["r","bc-a2"]] },
  { title:"El pasado", goal:"Past simple con verbos regulares e irregulares, negativas y preguntas.",
    tasks:[["g","past-basic"],["q","gr-past-basic"],["g","irr"],["c","iv"],["q","iv"],["c","tp-travel"]] },
  { title:"Contar historias", goal:"Past continuous para contar qué estaba pasando cuando ocurrió algo.",
    tasks:[["g","past-cont"],["q","pc"],["c","t-which"],["c","tp-weather"],["c","tp-feelings"],["x","lect-1"],
           ["t","Escribe 80 palabras sobre un viaje que recuerdes."]] },
  { title:"El futuro", goal:"Will, going to y presente continuo para planes y predicciones.",
    tasks:[["g","future"],["q","gr-future"],["c","tp-work"],["c","tp-school"],["x","hist-2"],
           ["t","Escribe 6 frases sobre tus planes del fin de semana con going to."]] },
  { title:"Expresiones de tiempo", goal:"In, on, at, for, since y ago sin dudar.",
    tasks:[["g","time"],["q","gr-time"],["q","te"],["c","pc-prep-iot"],["q","prep-iot"],["c","tp-hotel"]] },
  { title:"Comparar", goal:"Comparativos y superlativos: bigger, more interesting, the best.",
    tasks:[["g","comparatives"],["c","comp-form"],["q","comp-sent"],["q","gr-comparatives"],["q","comp-table"],["c","tp-adjectives"]] },
  { title:"Phrasal verbs y ocio", goal:"Los phrasal verbs más usados y el vocabulario del tiempo libre.",
    tasks:[["g","particles"],["c","pv"],["q","pv"],["c","tp-entertainment"],["c","tp-money"],["x","lect-2"]] },
  { title:"Repaso del A2", goal:"Repasa tus fallos y comprueba lo que ya sabes.",
    tasks:[["q","mix"],["q","quick10"],["q","sprint"],["x","lect-3"],["t","Repasa la pestaña Fallos hasta dejarla vacía."],["r","bbc-6min"]] }
];

const B1 = [
  { title:"Present perfect", goal:"Experiencias y cosas que siguen hasta ahora: ever, never, already, yet.",
    tasks:[["g","past-pp"],["q","tn"],["c","tp-health"],["c","tp-tech"],["r","bc-b1"],
           ["t","Escribe 6 frases sobre experiencias con ever, never, already y yet."]] },
  { title:"Modales", goal:"Obligación, consejo y posibilidad: must, have to, should, might.",
    tasks:[["g","modals"],["q","gr-modals"],["c","tp-emergencies"],["c","tp-communication"],["q","vo-confusiones"]] },
  { title:"Used to y -ing o to", goal:"Hábitos del pasado y qué forma va detrás de cada verbo.",
    tasks:[["g","used-to"],["q","gr-used-to"],["g","gerund"],["q","gr-gerund"],["c","tp-verbs"]] },
  { title:"La pasiva", goal:"Cuando importa la acción y no quién la hace.",
    tasks:[["g","passive"],["q","gr-passive"],["c","tp-science"],["c","tp-nature"],["x","lect-3"]] },
  { title:"Relativos", goal:"Who, which, that, where y whose para unir frases.",
    tasks:[["g","relatives"],["q","gr-relatives"],["c","tp-society"],["c","tp-geography"],
           ["t","Describe a 5 personas de tu vida con who, which y where."]] },
  { title:"Condicionales", goal:"Condicionales 0, 1 y 2: si pasa esto, entonces…",
    tasks:[["g","conditionals"],["q","gr-conditionals"],["c","tp-crime"],["c","tp-driving"],["x","lect-4"]] },
  { title:"Estilo indirecto", goal:"Contar lo que otra persona dijo.",
    tasks:[["g","reported"],["q","gr-reported"],["c","tp-celebrations"],["c","tp-music"],["q","vo-falsos-amigos"]] },
  { title:"Too, enough, so y such", goal:"Demasiado, suficiente y tan, y las combinaciones de palabras más naturales.",
    tasks:[["g","too-enough"],["q","gr-too-enough"],["c","tp-art"],["c","tp-collocations"],["q","vo-collocations"]] },
  { title:"Escribir mejor", goal:"Conectores y los errores típicos de los hispanohablantes.",
    tasks:[["g","linkers"],["g","traps"],["w","w-town"],["w","w-box"],["r","wi"]] },
  { title:"Phrasal verbs y repaso del B1", goal:"Más phrasal verbs y un repaso de todo el nivel.",
    tasks:[["c","pv2"],["q","pv2"],["c","pv-sent"],["q","pv-sent"],["q","prep-final"],["q","mix"]] }
];

const EXAM_WEEKS = [
  { title:"Simulacros de Reading y Writing", goal:"Conoce el formato del examen y haz tus primeros simulacros.",
    tasks:[["g","exam"],["x","sim1"],["x","sim2"],["g","writing"],["w","w-party"],["w","w-phone"],["r","cam-prep"]] },
  { title:"Listening, Speaking y último repaso", goal:"Más simulacros, Speaking completo y fallos a cero.",
    tasks:[["x","sim3"],["x","sim4"],["g","speaking"],["s","sp-exam1"],["t","Repasa la pestaña Fallos hasta dejarla vacía."],["r","yt-speaking"]] }
];

const TOPIC_WEEKS = [
  ["Personas", ["family","describe","feelings","body","jobs"], ["q","mini-vo"]],
  ["Casa y vida diaria", ["house","routine","chores","food","cooking"], ["q","tp-food"]],
  ["Ciudad y compras", ["town","shopping","clothes","money","driving"], ["q","ropa-opt"]],
  ["Viajes", ["travel","hotel","countries","geography","weather"], ["q","tp-travel"]],
  ["Trabajo y estudios", ["work","school","tech","communication","science"], ["q","vo-confusiones"]],
  ["Salud y naturaleza", ["health","emergencies","nature","animals","crime"], ["q","vo-falsos-amigos"]],
  ["Ocio y cultura", ["sport","entertainment","music","art","celebrations"], ["q","vo-make-do"]],
  ["Palabras útiles", ["verbs","adjectives","timewords","measures","tools","phrases","collocations","society"], ["q","vo-collocations"]]
];

export const PLANS = [
  { id:"a1", group:"nivel", title:"Nivel A1: desde cero", level:"A1", pace:"45 min al día",
    desc:"Lo primero que hay que dominar: to be, preguntas, la hora, tu casa, la comida y lo que sabes hacer.",
    weeks:A1 },
  { id:"a2", group:"nivel", title:"Nivel A2", level:"A2", pace:"1 h al día",
    desc:"Los tiempos verbales que más se usan, el pasado para contar historias, el futuro y los comparativos.",
    weeks:A2 },
  { id:"b1", group:"nivel", title:"Nivel B1", level:"B1", pace:"1 h al día",
    desc:"La gramática del B1 (present perfect, pasiva, condicionales, estilo indirecto) y vocabulario más rico.",
    weeks:B1 },
  { id:"b1-intensivo", group:"objetivo", title:"Examen B1: intensivo", level:"De cero al B1", pace:"2 h al día", exam:true,
    desc:"De cero al examen B1 Preliminary en diez semanas, con simulacros, Writing y Speaking. Ritmo exigente, ideal junto a un curso intensivo.",
    legacyKeys:true, weeks:PLAN },
  { id:"examen-expres", group:"objetivo", title:"Examen B1: exprés", level:"Ya tienes nivel B1", pace:"1–2 h al día", exam:true,
    desc:"Cuatro semanas de simulacros, Writing y Speaking para llegar al examen con el formato dominado.",
    weeks:[
      { title:"Conoce el examen", goal:"Cómo es cada parte y tu primer simulacro.",
        tasks:[["g","exam"],["x","sim1"],["g","writing"],["w","w-party"],["g","speaking"],["s","sp-1"],["r","cam-prep"]] },
      { title:"Reading y Writing", goal:"Textos con huecos, emails y artículos.",
        tasks:[["x","sim2"],["x","prep-text1"],["w","w-phone"],["w","w-course"],["g","linkers"],["r","engexam"]] },
      { title:"Listening y Speaking", goal:"Escuchar con atención y hablar con soltura en las 4 partes.",
        tasks:[["x","sim3"],["s","sp-2"],["s","sp-3"],["s","sp-exam1"],["r","cam-yt"],["r","yt-speaking"]] },
      { title:"Último repaso", goal:"El último simulacro, tus fallos a cero y todo listo para el día del examen.",
        tasks:[["x","sim4"],["w","w-sport"],["s","sp-4"],["g","traps"],["q","mix"],["t","Repasa la pestaña Fallos hasta dejarla vacía."],
               ["t","El día antes: descansa, prepara el DNI y comprueba la hora y el lugar del examen."]] }
    ] },
  { id:"conversacion", group:"objetivo", title:"Conversación y Speaking", level:"A2–B1", pace:"30 min al día",
    desc:"Para soltarte a hablar: presentarte, describir fotos, dar tu opinión y hacer un simulacro de Speaking completo.",
    weeks:[
      { title:"Hablar de ti", goal:"Presentarte y hablar de tu familia y tu día a día con frases completas.",
        tasks:[["g","speaking"],["s","sp-1"],["c","tp-family"],["c","tp-describe"],["t","Grábate 1 minuto presentándote y escúchate."],["r","lucy"]] },
      { title:"Describir fotos", goal:"Decir qué ves, dónde está y qué crees que pasa.",
        tasks:[["s","sp-2"],["c","tp-house"],["c","tp-town"],["c","tp-feelings"],["t","Describe 3 fotos de tu móvil durante 1 minuto cada una."]] },
      { title:"Opinar y decidir", goal:"Dar tu opinión, estar de acuerdo o no y llegar a un acuerdo.",
        tasks:[["s","sp-3"],["c","tp-phrases"],["c","tp-entertainment"],["g","linkers"],["r","bbc-6min"]] },
      { title:"Simulacro de Speaking", goal:"Las cuatro partes seguidas, con cronómetro.",
        tasks:[["s","sp-4"],["s","sp-exam1"],["c","tp-communication"],["t","Habla 2 minutos sobre tus planes para el año que viene."],["r","yt-speaking"]] }
    ] },
  { id:"vocabulario", group:"objetivo", title:"Vocabulario", level:"A2–B1", pace:"20 min al día",
    desc:"Los 43 temas de vocabulario, unas 5.000 palabras con audio, repartidos en 8 semanas.",
    weeks:TOPIC_WEEKS.map(([title, ids, test]) => ({ title, goal:`Temas de la semana: ${ids.length} mazos de tarjetas y un test.`,
      tasks:[...ids.map(id => ["c", "tp-" + id]), test] })) },
  { id:"gramatica", group:"objetivo", title:"Repaso de gramática", level:"A1–B1", pace:"30 min al día",
    desc:"Toda la gramática del A1 al B1 en seis semanas: guía y test de cada tema.",
    weeks:[
      { title:"Lo básico", goal:"To be, pronombres, artículos y preguntas.",
        tasks:[["g","be"],["q","gr-be"],["g","pronouns"],["q","gr-pronouns"],["g","articles"],["q","gr-articles"],["g","questions"],["q","gr-questions"]] },
      { title:"Presente y cantidades", goal:"Presente simple y continuo, there is, contables y can.",
        tasks:[["g","ps-pc"],["q","gr-ps-pc"],["g","there"],["q","gr-there"],["g","countable"],["q","gr-countable"],["g","can"],["q","gr-can"]] },
      { title:"El pasado", goal:"Past simple, past continuous, present perfect y used to.",
        tasks:[["g","past-basic"],["q","gr-past-basic"],["g","past-cont"],["q","pc"],["g","past-pp"],["q","tn"],["g","used-to"],["q","gr-used-to"]] },
      { title:"Futuro y tiempo", goal:"Will, going to y las expresiones de tiempo.",
        tasks:[["g","future"],["q","gr-future"],["g","time"],["q","gr-time"],["q","te"],["c","t-conj"],["q","tc"]] },
      { title:"Preposiciones y comparativos", goal:"Las preposiciones clave y cómo comparar.",
        tasks:[["g","prepositions"],["q","prep-exam"],["q","prep-dep2"],["g","comparatives"],["q","comp-sent"],["q","gr-comparatives"]] },
      { title:"Gramática del B1", goal:"Modales, -ing o to, pasiva, relativos, condicionales, estilo indirecto y too / enough.",
        tasks:[["g","modals"],["q","gr-modals"],["g","gerund"],["q","gr-gerund"],["g","passive"],["q","gr-passive"],["g","relatives"],["q","gr-relatives"],
               ["g","conditionals"],["q","gr-conditionals"],["g","reported"],["q","gr-reported"],["g","too-enough"],["q","gr-too-enough"]] }
    ] },
  { id:"tranquilo", group:"ritmo", title:"De cero a B1 sin prisa", level:"De cero al B1", pace:"30 min al día", exam:true,
    desc:"Seis meses para llegar al B1 a tu ritmo: los niveles A1, A2 y B1 seguidos y dos semanas finales de preparación del examen.",
    weeks:[...A1, ...A2, ...B1, ...EXAM_WEEKS] }
];

export const planById = id => PLANS.find(p => p.id === id);
