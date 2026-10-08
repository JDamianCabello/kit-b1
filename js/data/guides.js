/* Inglés Paso a Paso · guías: datos del índice. El contenido de cada guía está en guias/<id>.html */

// Datos de cada guía para el índice y los planes; practice = [tipo, id, texto del botón]
export const GUIDES = [
 {id:"ps-pc",short:"Presente simple vs continuo",title:"Present simple <em>vs</em> Present continuous",sub:"Mismo tiempo, momentos distintos: lo de siempre frente a lo de ahora.",sticky:"I know the answer.<br><s>I'm knowing the answer.</s>",practice:["tn","conj","Practicar tiempos verbales"]},
 {id:"past-pp",short:"Past simple vs Present perfect",title:"Past simple <em>vs</em> Present perfect",sub:"¿Dices cuándo pasó? Past simple. ¿No importa cuándo o sigue ahora? Present perfect.",sticky:"<s>I have seen him yesterday.</s><br>I saw him yesterday.",practice:["gu","irr","Repasar verbos irregulares"]},
 {id:"past-cont",short:"Past simple vs Past continuous",title:"Past simple <em>vs</em> Past continuous",sub:"La acción corta interrumpe a la acción larga. Clave para contar historias en el Writing.",sticky:"I <b>was having</b> a shower <b>when</b> the phone <b>rang</b>.",practice:["pc","","Práctica rápida"]},
 {id:"future",short:"Will, going to y presente continuo",title:"El futuro: <em>will · going to · present continuous</em>",sub:"Tres formas de hablar del futuro según lo decidido que esté.",sticky:"Oferta rápida:<br>I<b>'ll</b> help you!<br><s>I help you!</s>",practice:["tn","conj","Practicar tiempos verbales"]},
 {id:"time",short:"In, on, at, for, since, ago",title:"Expresiones de tiempo",sub:"Las preposiciones de tiempo y las palabras for, since, ago, during y while.",sticky:"<s>in next Friday</s><br>next Friday",practice:["tn","time","Practicar expresiones de tiempo"]},
 {id:"linkers",short:"Conectores",title:"Conectores para el Writing",sub:"Unen frases en emails e historias. Aquí es donde más puntos se pierden.",sticky:"<s>because of I like it</s><br>because I like it",practice:null},
 {id:"particles",short:"Phrasal verbs por partícula",title:"Phrasal verbs por partícula",sub:"La partícula suele dar una pista del significado. Aprende los verbos en grupos.",sticky:"Aprende la frase entera,<br>no solo el verbo.",practice:["pv","test","Practicar phrasal verbs"]},
 {id:"irr",short:"Verbos irregulares",title:"Verbos irregulares",sub:"Los 62 más frecuentes del B1. Infinitivo, past simple y participio.",sticky:"Dilos en voz alta:<br>go – went – gone",practice:["iv","","Ponerme a prueba"]},
 {id:"be",short:"To be",title:"To be: <em>am · is · are</em>",sub:"Ser y estar en un solo verbo. Es lo primero que hay que dominar.",sticky:"<s>I have 20 years.</s><br>I<b>'m</b> 20 years old.",practice:["gr","be","Practicar to be"]},
 {id:"pronouns",short:"Pronombres y posesivos",title:"Pronombres y posesivos",sub:"Yo, me, mi, mío: cuatro palabras distintas en inglés.",sticky:"This is <b>my</b> book.<br>It's <b>mine</b>.",practice:["gr","pronouns","Practicar pronombres"]},
 {id:"articles",short:"a / an / the y plurales",title:"a / an / the, plurales y this / that",sub:"Cuándo poner artículo y cuándo no. Los hispanohablantes ponen «the» de más.",sticky:"<s>The dogs are nice.</s><br><b>Dogs</b> are nice.<br>(en general)",practice:["gr","articles","Practicar artículos"]},
 {id:"numbers",short:"Números, hora y fechas",title:"Números, hora y fechas",sub:"Salen muchísimo en el Listening: precios, horas, fechas y teléfonos.",sticky:"13 thir<b>TEEN</b><br>30 <b>THIR</b>ty",practice:["gr","numbers","Practicar números y horas"]},
 {id:"questions",short:"Hacer preguntas",title:"Cómo hacer preguntas",sub:"En inglés casi siempre hace falta un auxiliar delante del sujeto.",sticky:"<s>Where you live?</s><br>Where <b>do</b> you live?",practice:["gr","questions","Practicar preguntas"]},
 {id:"there",short:"There is / are y lugar",title:"There is / there are y preposiciones de lugar",sub:"«Hay» en inglés, y cómo decir dónde está cada cosa.",sticky:"<s>There is two cats.</s><br>There <b>are</b> two cats.",practice:["gr","there","Practicar there is y lugar"]},
 {id:"countable",short:"Some, any, much, many",title:"Contables e incontables",sub:"Some, any, much, many, a few, a little: la clave es si se puede contar.",sticky:"<s>an advice</s><br>some advice",practice:["gr","countable","Practicar contables"]},
 {id:"can",short:"Can y gustos",title:"Can, can't y cómo hablar de gustos",sub:"Habilidades, permiso y lo que te gusta hacer.",sticky:"<s>I can to swim.</s><br>I can swim.",practice:["gr","can","Practicar can y gustos"]},
 {id:"past-basic",short:"Past simple desde cero",title:"Past simple desde cero",sub:"Was / were, verbos regulares con -ed y cómo hacer negativas y preguntas.",sticky:"<s>I didn't went.</s><br>I didn't <b>go</b>.",practice:["gr","past-basic","Practicar past simple"]},
 {id:"used-to",short:"Used to",title:"Used to",sub:"Hábitos y situaciones del pasado que ya no son así.",sticky:"I <b>used to</b> have long hair.<br>(ahora no)",practice:["gr","used-to","Practicar used to"]},
 {id:"comparatives",short:"Comparativos y superlativos",title:"Comparativos y superlativos",sub:"Más que, el más: depende de lo largo que sea el adjetivo.",sticky:"<s>more bigger</s><br>bigger",practice:["comp-sent","","Practicar comparativos y superlativos"]},
 {id:"modals",short:"Modales",title:"Modales: must, have to, should, might",sub:"Obligación, consejo y posibilidad. Siempre + verbo sin «to» (salvo have to).",sticky:"<s>She musts to go.</s><br>She <b>must go</b>.",practice:["gr","modals","Practicar modales"]},
 {id:"gerund",short:"-ing o to + verbo",title:"¿-ing o to + verbo?",sub:"Depende del verbo que va delante. Apréndelos en grupos.",sticky:"<s>I went for buy bread.</s><br>I went <b>to buy</b> bread.",practice:["gr","gerund","Practicar -ing o to"]},
 {id:"passive",short:"La pasiva",title:"La pasiva",sub:"Cuando importa la acción y no quién la hace. Sale mucho en los textos del Reading.",sticky:"Paper <b>is made</b><br>from wood.",practice:["gr","passive","Practicar la pasiva"]},
 {id:"relatives",short:"Who, which, where",title:"Relativos: who, which, that, where, whose",sub:"Para unir frases y dar más información sin repetir. Muy útiles en el Writing.",sticky:"The man <b>who</b> lives<br>next door is a chef.",practice:["gr","relatives","Practicar relativos"]},
 {id:"conditionals",short:"Condicionales",title:"Condicionales: 0, 1 y 2",sub:"Si pasa X, entonces Y. Cada tipo tiene sus tiempos fijos.",sticky:"<s>If it will rain...</s><br>If it <b>rains</b>, ...",practice:["gr","conditionals","Practicar condicionales"]},
 {id:"reported",short:"Estilo indirecto",title:"Estilo indirecto (reported speech)",sub:"Contar lo que otra persona dijo. El verbo da un paso atrás en el tiempo.",sticky:"«I'm tired.»<br>→ He said he <b>was</b> tired.",practice:["gr","reported","Practicar estilo indirecto"]},
 {id:"too-enough",short:"Too, enough, so, such",title:"Too, enough, so y such",sub:"Demasiado, suficiente y tan: cuatro palabras que se confunden mucho.",sticky:"<s>It's too much cold.</s><br>It's <b>too</b> cold.",practice:["gr","too-enough","Practicar too y enough"]},
 {id:"exam",short:"El examen B1",title:"El examen B1 Preliminary",sub:"Cuatro partes, cada una vale un 25 %. Conocer el formato ya te da puntos.",sticky:"Aprobado:<br><b>140</b> en la escala<br>Cambridge",practice:["sim1","","Hacer un simulacro"]},
 {id:"writing",short:"Writing: plantillas",title:"Writing: email, artículo e historia",sub:"Estructuras y frases listas para usar en el examen.",sticky:"Tacha cada nota<br>cuando la uses.",practice:["w-party","","Practicar un email"]},
 {id:"speaking",short:"Speaking: frases",title:"Speaking: frases útiles",sub:"Frases para cada parte y para salir del paso cuando no sabes una palabra.",sticky:"No te quedes<br>callado: <b>parafrasea</b>.",practice:["sp-1","","Practicar Speaking con cronómetro"]},
 {id:"traps",short:"Errores típicos",title:"Errores típicos de hispanohablantes",sub:"Los fallos que más se repiten cuando pensamos en español. Repásalos antes de cada Writing.",sticky:"Léelos en voz alta<br>en su forma <b>correcta</b>.",practice:["gu","linkers","Ver la guía de conectores"]},
 {id:"prepositions",short:"Preposiciones clave",title:"Preposiciones: <em>of, from, for, on, in, to, at, with, about, between</em>",sub:"Para elegir bien, piensa en el significado. Cada preposición tiene una pregunta que te ayuda.",sticky:"<s>I'm good in maths.</s><br>I'm good <b>at</b> maths.",practice:["prep-exam","","Hacer el examen de preposiciones"]},
 {id:"clothes",short:"Ropa, joyas, colores y materiales",title:"Ropa, joyas, colores y materiales",sub:"Las palabras agrupadas en las cuatro categorías de la ficha. Algunas van en más de una: gold y silver son material y también color.",sticky:"a <b>gold</b> ring<br>= material<br>a <b>gold</b> dress<br>= color",practice:["ropa-cat","","Clasificar palabras (como la ficha)"]}
];

// Preposiciones: 10 tarjetas con uso, truco y ejemplos (también las usa el mazo «Las 10 preposiciones»)
export const PREPS = [
 ["of","Pertenencia, parte de un todo, material","¿De quién o de qué es?",["a friend of my sister","a cup of tea","a table made of wood"]],
 ["from","Origen, separación, material transformado","¿De dónde viene?",["I'm from Spain.","an email from Ana","made from grapes"]],
 ["for","Finalidad, duración, para quién","¿Para qué o para quién?",["This is for you.","for two hours","go out for dinner"]],
 ["on","Superficie, días y fechas, tema","¿Encima? ¿Qué día?",["on the table","on Monday","on 5th May"]],
 ["in","Dentro, meses y años, idiomas","¿Dentro? ¿Periodo largo?",["in the box","in January · in 2026","in English"]],
 ["to","Dirección, quién recibe, minutos antes de la hora","¿Hacia dónde?",["I go to school.","Give it to me.","It's five to nine."]],
 ["at","Punto concreto, hora exacta, actividades","¿Un punto exacto?",["at the station","at 8 o'clock","at work · at home"]],
 ["with","Compañía, herramienta, característica","¿Juntos? ¿Usando qué?",["with my friends","write with a pen","a girl with blue eyes"]],
 ["about","Tema, aproximadamente, opiniones","¿De qué trata? ¿Más o menos?",["Tell me about your day.","about 50 people","How do you feel about it?"]],
 ["between","Entre dos, dos límites, repartido entre dos","¿Hay dos lados?",["between you and me","between 2 and 4 pm","Share it between you."]]
];

// Índice de guías agrupadas por etapa del curso
export const GUIDE_SECTIONS = [
  {title:"Empieza aquí (A1)",ids:["be","pronouns","articles","numbers","questions","there","prepositions","countable","can"]},
  {title:"Tiempos verbales (A2)",ids:["ps-pc","past-basic","irr","past-cont","future","time"]},
  {title:"Hacia el B1",ids:["past-pp","used-to","comparatives","modals","gerund","passive","relatives","conditionals","reported","too-enough"]},
  {title:"Errores, vocabulario y conectores",ids:["traps","clothes","particles","linkers"]},
  {title:"El examen",ids:["exam","writing","speaking"]}
];
