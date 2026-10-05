/* Kit B1 · guías visuales (parte 2: gramática desde cero hasta B1 y guías del examen) */

// Adverbios de frecuencia dentro de la guía de presente
GUIDES.find(g => g.id === "ps-pc").extra += `<section class="gsec"><h3>Adverbios de frecuencia: dónde van</h3>
  <div class="gcols"><div class="gcell a"><p class="cname">Antes del verbo</p><p class="hl">I <b>usually</b> get up at 7.</p><p class="xmp">always · usually · often · sometimes · rarely · never</p></div>
  <div class="gcell b"><p class="cname">Después de be</p><p class="hl">She <b>is always</b> late.</p><p class="xmp">Con am / is / are el adverbio va detrás.</p></div></div></section>`;

GUIDES.push(
 { id:"be", short:"To be", title:"To be: <em>am · is · are</em>",
   sub:"Ser y estar en un solo verbo. Es lo primero que hay que dominar.",
   sticky:"<s>I have 20 years.</s><br>I<b>'m</b> 20 years old.",
   cols:["Afirmativa","Negativa","Pregunta"],
   rows:[
    ["Forma",[["I <b>am</b> → I'm","you / we / they <b>are</b> → you're","he / she / it <b>is</b> → she's"],["I<b>'m not</b>","you <b>aren't</b>","she <b>isn't</b>"],["<b>Am</b> I...?","<b>Are</b> you...?","<b>Is</b> she...?"]]],
    ["Ejemplos",[["I'm from Spain.","She's a teacher.","We're tired."],["I'm not hungry.","They aren't at home.","It isn't cold today."],["Are you OK?","Is he your brother?","Yes, he is. / No, he isn't."]]]
   ],
   extra:`<section class="gsec"><h3>En español decimos «tener», en inglés es «be»</h3>
    ${table(["Español","Inglés"],[
      ["tener 20 años","<b>be</b> 20 (years old)"],["tener hambre / sed","<b>be</b> hungry / thirsty"],["tener frío / calor","<b>be</b> cold / hot"],
      ["tener miedo","<b>be</b> afraid / scared"],["tener razón","<b>be</b> right"],["tener sueño","<b>be</b> sleepy / tired"]])}</section>
    <section class="gsec"><h3>Pronombres sujeto</h3><div class="gcols"><div class="gcell a">${chips(["I – yo","you – tú, vosotros","he – él","she – ella","it – ello (cosas, animales)","we – nosotros","they – ellos, ellas"])}<p class="xmp">En inglés el sujeto siempre se dice: <b>It</b> is raining (no «Is raining»).</p></div></div></section>`,
   practice:["gr","be","Practicar to be"] },

 { id:"pronouns", short:"Pronombres y posesivos", title:"Pronombres y posesivos",
   sub:"Yo, me, mi, mío: cuatro palabras distintas en inglés.",
   sticky:"This is <b>my</b> book.<br>It's <b>mine</b>.",
   cols:null, rows:[],
   extra:`<section class="gsec"><h3>La tabla completa</h3>
    ${table(["Sujeto","Objeto","Adjetivo posesivo","Pronombre posesivo"],[
      ["I","me","my","mine"],["you","you","your","yours"],["he","him","his","his"],["she","her","her","hers"],
      ["it","it","its","–"],["we","us","our","ours"],["they","them","their","theirs"]])}</section>
    <section class="gsec"><h3>Cómo se usan</h3><div class="gcols">
     <div class="gcell a"><p class="cname">Objeto</p><p>Detrás del verbo o preposición</p><p class="hl">Call <b>me</b>. I love <b>her</b>. Come with <b>us</b>.</p></div>
     <div class="gcell b"><p class="cname">Adjetivo posesivo</p><p>Delante de un sustantivo</p><p class="hl"><b>my</b> car, <b>their</b> house</p></div>
     <div class="gcell c"><p class="cname">Pronombre posesivo</p><p>Solo, sin sustantivo</p><p class="hl">The car is <b>mine</b>.</p></div></div></section>
    <section class="gsec"><h3>El genitivo 's</h3><div class="gcols"><div class="gcell a"><ul>
     <li><b>Ana's</b> car = el coche de Ana</li><li>my <b>parents'</b> house = la casa de mis padres (plural: solo apóstrofo)</li><li>the <b>children's</b> toys (plural irregular: 's)</li></ul>
     <p class="xmp">Ojo: <b>its</b> = su (de una cosa). <b>it's</b> = it is.</p></div></div></section>`,
   practice:["gr","pronouns","Practicar pronombres"] },

 { id:"articles", short:"a / an / the y plurales", title:"a / an / the, plurales y this / that",
   sub:"Cuándo poner artículo y cuándo no. Los hispanohablantes ponen «the» de más.",
   sticky:"<s>The dogs are nice.</s><br><b>Dogs</b> are nice.<br>(en general)",
   cols:["a / an","the","sin artículo"],
   rows:[
    ["Cuándo se usa",[["Una cosa cualquiera, la primera vez que se menciona","Profesiones: She's <b>a</b> doctor.","<b>an</b> delante de sonido vocal: an apple, an hour"],["Algo concreto o ya mencionado","Cosas únicas: the sun, the sea","Instrumentos: play <b>the</b> guitar"],["Plurales e incontables en general: I like dogs.","Deportes, comidas, idiomas: I play football. I speak English.","go to work / school / bed, at home"]]],
    ["Ejemplos",[["I've got a cat.","He's an engineer."],["The cat is black.","Close the door, please."],["Cats are independent.","I have breakfast at 8."]]]
   ],
   extra:`<section class="gsec"><h3>Plurales</h3>
    ${table(["Regla","Ejemplo"],[
      ["La mayoría: + s","cat → <b>cats</b>"],["-s, -ch, -sh, -x, -o: + es","box → <b>boxes</b> · watch → <b>watches</b> · potato → <b>potatoes</b>"],
      ["consonante + y: -ies","city → <b>cities</b> (pero day → days)"],["-f / -fe: -ves","knife → <b>knives</b> · wife → <b>wives</b>"],
      ["Irregulares","man → <b>men</b> · woman → <b>women</b> · child → <b>children</b> · person → <b>people</b> · foot → <b>feet</b> · tooth → <b>teeth</b> · mouse → <b>mice</b>"]])}</section>
    <section class="gsec"><h3>This, that, these, those</h3><div class="gcols">
     <div class="gcell a"><p class="cname">Cerca</p><p class="hl"><b>this</b> book · <b>these</b> books</p></div>
     <div class="gcell b"><p class="cname">Lejos</p><p class="hl"><b>that</b> car · <b>those</b> cars</p></div></div></section>`,
   practice:["gr","articles","Practicar artículos"] },

 { id:"numbers", short:"Números, hora y fechas", title:"Números, hora y fechas",
   sub:"Salen muchísimo en el Listening: precios, horas, fechas y teléfonos.",
   sticky:"13 thir<b>TEEN</b><br>30 <b>THIR</b>ty",
   cols:null, rows:[],
   extra:`<section class="gsec"><h3>Números</h3>
    ${table(["Número","Se dice"],[
      ["13 / 30","thir<b>teen</b> (acento al final) / <b>thir</b>ty (acento al principio)"],["21","twenty-one"],["100","a hundred / one hundred"],
      ["250","two hundred <b>and</b> fifty"],["1,500","one thousand five hundred (en inglés la coma separa miles)"],["2.5","two <b>point</b> five"],
      ["2025 (año)","twenty twenty-five"],["£4.50","four pounds fifty"],["0 en teléfonos","«oh»: 6 0 7 → six oh seven"]])}</section>
    <section class="gsec"><h3>Ordinales (para fechas)</h3><div class="gcols"><div class="gcell a">${chips(["1st first","2nd second","3rd third","4th fourth","5th fifth","8th eighth","9th ninth","12th twelfth","20th twentieth","21st twenty-first","31st thirty-first"])}</div></div></section>
    <section class="gsec"><h3>La hora</h3>
    ${table(["Hora","Se dice"],[
      ["7:00","seven o'clock"],["7:10","ten <b>past</b> seven"],["7:15","(a) quarter <b>past</b> seven"],["7:30","half <b>past</b> seven"],
      ["7:45","(a) quarter <b>to</b> eight"],["7:50","ten <b>to</b> eight"],["Digital","seven fifteen, seven forty-five"],["¿Qué hora es?","What time is it? · It's...  ·  ¿A qué hora? What time...? / At..."]])}</section>
    <section class="gsec"><h3>Fechas, días y meses</h3><div class="gcols">
     <div class="gcell a"><p class="cname">Escribir y decir</p><p>Se escribe: <b>5th May</b> o 5 May</p><p>Se dice: <b>the fifth of May</b></p><p class="xmp">Días y meses siempre con mayúscula.</p></div>
     <div class="gcell b"><p class="cname">Días</p>${chips(["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"])}</div>
     <div class="gcell c"><p class="cname">Meses</p>${chips(["January","February","March","April","May","June","July","August","September","October","November","December"])}</div></div></section>`,
   practice:["gr","numbers","Practicar números y horas"] },

 { id:"questions", short:"Hacer preguntas", title:"Cómo hacer preguntas",
   sub:"En inglés casi siempre hace falta un auxiliar delante del sujeto.",
   sticky:"<s>Where you live?</s><br>Where <b>do</b> you live?",
   cols:["Con be","Con do / does / did","Con otro auxiliar"],
   rows:[
    ["Forma",[`<p class="form">Be + sujeto + ...?</p>`,`<p class="form">Do / Does / Did + sujeto + verbo?</p>`,`<p class="form">can / will / have + sujeto + verbo?</p>`]],
    ["Ejemplos",[["Are you tired?","Where is the station?","Was it expensive?"],["Do you like pizza?","Where does she work?","What did you do yesterday?"],["Can you swim?","Will it rain tomorrow?","Have you finished?"]]]
   ],
   extra:`<section class="gsec"><h3>Palabras interrogativas</h3>
    ${table(["Inglés","Español","Ejemplo"],[
      ["What","qué","What's your name?"],["Where","dónde","Where do you live?"],["When","cuándo","When is your birthday?"],
      ["Who","quién","Who is that man?"],["Why","por qué","Why are you sad? – <b>Because</b>..."],["How","cómo","How are you?"],
      ["How old","cuántos años","How old are you?"],["How much","cuánto (precio, incontables)","How much is it?"],["How many","cuántos (contables)","How many brothers have you got?"],
      ["How often","con qué frecuencia","How often do you go to the gym?"],["How long","cuánto tiempo","How long does it take?"],["Which","cuál (entre opciones)","Which do you prefer, tea or coffee?"],
      ["Whose","de quién","Whose bag is this?"],["What time","a qué hora","What time does the film start?"]])}</section>
    <section class="gsec"><h3>Respuestas cortas</h3><div class="gcols"><div class="gcell a"><p class="hl">Do you like it? – Yes, I <b>do</b>. / No, I <b>don't</b>.</p><p class="hl">Is she Spanish? – Yes, she <b>is</b>. / No, she <b>isn't</b>.</p><p class="xmp">Queda raro contestar solo «Yes» o «No».</p></div></div></section>`,
   practice:["gr","questions","Practicar preguntas"] },

 { id:"there", short:"There is / are y lugar", title:"There is / there are y preposiciones de lugar",
   sub:"«Hay» en inglés, y cómo decir dónde está cada cosa.",
   sticky:"<s>There is two cats.</s><br>There <b>are</b> two cats.",
   cols:["There is (singular / incontable)","There are (plural)"],
   rows:[
    ["Forma",[["There<b>'s</b> a bank near here.","There <b>isn't</b> any milk.","<b>Is there</b> a bus stop?"],["There <b>are</b> two bedrooms.","There <b>aren't</b> any shops.","<b>Are there</b> any chairs?"]]],
    ["En pasado",[["There <b>was</b> a problem."],["There <b>were</b> a lot of people."]]]
   ],
   extra:`<section class="gsec"><h3>Preposiciones de lugar</h3>
    ${table(["Preposición","Significado","Ejemplo"],[
      ["in","dentro de","The keys are <b>in</b> my bag."],["on","encima de (tocando)","The book is <b>on</b> the table."],["under","debajo de","The cat is <b>under</b> the bed."],
      ["next to","al lado de","The bank is <b>next to</b> the café."],["between","entre (dos)","It's <b>between</b> the bank and the school."],["opposite","enfrente de","The park is <b>opposite</b> my house."],
      ["in front of","delante de","There's a car <b>in front of</b> the door."],["behind","detrás de","The garden is <b>behind</b> the house."],["near","cerca de","I live <b>near</b> the beach."],
      ["above","encima (sin tocar)","There's a lamp <b>above</b> the table."]])}</section>
    <section class="gsec"><h3>At, in, on con lugares</h3><div class="gcols">
     <div class="gcell a"><p class="cname">at</p><p>un punto: at home, at work, at school, at the station</p></div>
     <div class="gcell b"><p class="cname">in</p><p>dentro, ciudades, países: in the kitchen, in Madrid, in Spain</p></div>
     <div class="gcell c"><p class="cname">on</p><p>superficies, calles, transporte: on the wall, on Oxford Street, on the bus</p></div></div></section>`,
   practice:["gr","there","Practicar there is y lugar"] },

 { id:"countable", short:"Some, any, much, many", title:"Contables e incontables",
   sub:"Some, any, much, many, a few, a little: la clave es si se puede contar.",
   sticky:"<s>an advice</s><br>some advice",
   cols:["Contables","Incontables"],
   rows:[
    ["Qué son",[["Se pueden contar y tienen plural","an apple, two apples","a chair, three chairs"],["No se cuentan, no tienen plural","water, money, time, bread","information, advice, furniture, music"]]],
    ["Cantidad",[["<b>many</b>: How many apples?","<b>a few</b>: a few friends (unos pocos)"],["<b>much</b>: How much money?","<b>a little</b>: a little sugar (un poco)"]]],
    ["Con los dos",[chips(["some (afirmativas y ofrecimientos)","any (negativas y preguntas)","a lot of","no"]),chips(["some water","any money?","a lot of time","no milk"])]]
   ],
   extra:`<section class="gsec"><h3>Some y any</h3><div class="gcols"><div class="gcell a"><ul>
     <li>There are <b>some</b> eggs in the fridge.</li><li>There isn't <b>any</b> bread.</li><li>Have you got <b>any</b> brothers?</li><li>Would you like <b>some</b> coffee? (ofrecimiento: some)</li></ul></div></div></section>`,
   practice:["gr","countable","Practicar contables"] },

 { id:"can", short:"Can y gustos", title:"Can, can't y cómo hablar de gustos",
   sub:"Habilidades, permiso y lo que te gusta hacer.",
   sticky:"<s>I can to swim.</s><br>I can swim.",
   cols:["can / can't","like + -ing","would like"],
   rows:[
    ["Uso",[["Habilidad: I can swim.","Permiso: Can I go out?","Pedir algo: Can you help me?"],["Gustos en general","like, love, enjoy, hate, don't mind + -ing"],["Querer algo (educado)","I'd like = I would like"]]],
    ["Forma",[`<p class="form">can + verbo (sin to)</p><p>She <b>can</b> drive. He <b>can't</b> cook.</p><p>Pasado: <b>could</b> / couldn't</p>`,`<p class="form">verbo + -ing</p><p>I <b>like cooking</b>.</p><p>She <b>doesn't like getting up</b> early.</p>`,`<p class="form">would like + sustantivo / to + verbo</p><p>I<b>'d like a</b> coffee.</p><p>I<b>'d like to</b> travel.</p>`]]
   ],
   extra:"",
   practice:["gr","can","Practicar can y gustos"] },

 { id:"past-basic", short:"Past simple desde cero", title:"Past simple desde cero",
   sub:"Was / were, verbos regulares con -ed y cómo hacer negativas y preguntas.",
   sticky:"<s>I didn't went.</s><br>I didn't <b>go</b>.",
   cols:["was / were","Verbos regulares","Negativas y preguntas"],
   rows:[
    ["Forma",[["I / he / she / it <b>was</b>","you / we / they <b>were</b>","wasn't · weren't"],["verbo + <b>-ed</b>: work → worked","-e: live → lived","consonante + y: study → studied","CVC: stop → stopped"],["<b>didn't</b> + verbo base","<b>Did</b> + sujeto + verbo?","Yes, I did. / No, I didn't."]]],
    ["Ejemplos",[["I was at home yesterday.","They were very happy."],["We watched a film.","She studied all night."],["I didn't see him.","Did you like it?"]]]
   ],
   extra:`<section class="gsec"><h3>Cómo se pronuncia -ed</h3>
    ${table(["Sonido","Cuándo","Ejemplos"],[
      ["/t/","tras p, k, f, s, sh, ch","work<b>ed</b>, watch<b>ed</b>, stopp<b>ed</b>"],["/d/","tras sonidos sonoros (la mayoría)","play<b>ed</b>, liv<b>ed</b>, clean<b>ed</b>"],
      ["/ɪd/ (sílaba extra)","solo tras t o d","want<b>ed</b>, need<b>ed</b>, decid<b>ed</b>"]])}
    <p class="xmp">Los irregulares (go → went) están en la guía «Verbos irregulares».</p></section>`,
   practice:["gr","past-basic","Practicar past simple"] },

 { id:"used-to", short:"Used to", title:"Used to",
   sub:"Hábitos y situaciones del pasado que ya no son así.",
   sticky:"I <b>used to</b> have long hair.<br>(ahora no)",
   cols:["Afirmativa","Negativa","Pregunta"],
   rows:[
    ["Forma",[`<p class="form">used to + verbo</p>`,`<p class="form">didn't use to + verbo</p>`,`<p class="form">Did you use to + verbo?</p>`]],
    ["Ejemplos",[["I used to play football.","We used to live in Seville."],["I didn't use to like fish.","She didn't use to wear glasses."],["Did you use to have a pet?"]]]
   ],
   extra:`<p class="xmp">En negativa y pregunta se escribe <b>use to</b> (sin d), igual que «didn't go».</p>`,
   practice:["gr","used-to","Practicar used to"] },

 { id:"comparatives", short:"Comparativos y superlativos", title:"Comparativos y superlativos",
   sub:"Más que, el más: depende de lo largo que sea el adjetivo.",
   sticky:"<s>more bigger</s><br>bigger",
   cols:["Cortos (1 sílaba)","Largos (2+ sílabas)","Irregulares"],
   rows:[
    ["Comparativo",[["+ <b>-er than</b>: tall → taller than","CVC: big → bigger","-y: easy → easier, happy → happier"],["<b>more</b> ... than","more expensive than","more interesting than"],["good → <b>better</b>","bad → <b>worse</b>","far → <b>further</b>"]]],
    ["Superlativo",[["<b>the -est</b>: the tallest","the biggest","the easiest"],["<b>the most</b> ...","the most expensive","the most interesting"],["the <b>best</b>","the <b>worst</b>","the <b>furthest</b>"]]],
    ["Ejemplos",[["My brother is taller than me."],["This phone is more expensive than that one."],["It's the best film I've ever seen."]]]
   ],
   extra:`<section class="gsec"><h3>as ... as (igual de)</h3><div class="gcols"><div class="gcell a"><p class="hl">She's <b>as tall as</b> me.</p><p class="hl">It's <b>not as cold as</b> yesterday.</p></div></div></section>`,
   practice:["comp-sent","","Practicar comparativos y superlativos"] },

 { id:"modals", short:"Modales", title:"Modales: must, have to, should, might",
   sub:"Obligación, consejo y posibilidad. Siempre + verbo sin «to» (salvo have to).",
   sticky:"<s>She musts to go.</s><br>She <b>must go</b>.",
   cols:["Obligación","Consejo","Posibilidad"],
   rows:[
    ["Palabras",[["<b>must</b> (lo digo yo, normas)","<b>have to</b> (obligación externa)"],["<b>should</b> / shouldn't"],["<b>might</b> / may (quizás)","<b>could</b>"]]],
    ["Ejemplos",[["You must wear a seatbelt.","I have to work on Saturdays."],["You should see a doctor.","You shouldn't eat so much sugar."],["It might rain later.","She may be at home."]]]
   ],
   extra:`<section class="gsec"><h3>La trampa: mustn't vs don't have to</h3><div class="gcols">
     <div class="gcell c"><p class="cname">mustn't</p><p>está prohibido</p><p class="hl">You mustn't smoke here.</p></div>
     <div class="gcell a"><p class="cname">don't have to</p><p>no es necesario</p><p class="hl">You don't have to come, it's optional.</p></div></div></section>
    <section class="gsec"><h3>Reglas de los modales</h3><div class="gcols"><div class="gcell b"><ul><li>Sin -s: she <b>can</b>, he <b>should</b></li><li>Sin to detrás: must <b>go</b></li><li>Pregunta sin do: <b>Should</b> I call her?</li><li>Have to sí usa do: <b>Do</b> you have to work?</li></ul></div></div></section>`,
   practice:["gr","modals","Practicar modales"] },

 { id:"gerund", short:"-ing o to + verbo", title:"¿-ing o to + verbo?",
   sub:"Depende del verbo que va delante. Apréndelos en grupos.",
   sticky:"<s>I went for buy bread.</s><br>I went <b>to buy</b> bread.",
   cols:["verbo + -ing","verbo + to + verbo","preposición + -ing"],
   rows:[
    ["Verbos",[chips(["enjoy","finish","mind","avoid","suggest","stop","practise","like","love","hate"]),chips(["want","need","decide","hope","plan","learn","would like","agree","promise","forget"]),chips(["interested in","good at","tired of","look forward to","before","after","without"])]],
    ["Ejemplos",[["I enjoy reading.","Have you finished eating?"],["I want to learn English.","We decided to stay."],["I'm good at drawing.","After having lunch, we left."]]]
   ],
   extra:`<section class="gsec"><h3>Dos usos más</h3><div class="gcols">
     <div class="gcell a"><p class="cname">-ing como sujeto</p><p class="hl"><b>Swimming</b> is good for you.</p></div>
     <div class="gcell b"><p class="cname">to = para (finalidad)</p><p class="hl">I went to the shop <b>to buy</b> milk.</p></div></div></section>`,
   practice:["gr","gerund","Practicar -ing o to"] },

 { id:"passive", short:"La pasiva", title:"La pasiva",
   sub:"Cuando importa la acción y no quién la hace. Sale mucho en los textos del Reading.",
   sticky:"Paper <b>is made</b><br>from wood.",
   cols:["Presente","Pasado"],
   rows:[
    ["Forma",[`<p class="form">am / is / are + participio</p>`,`<p class="form">was / were + participio</p>`]],
    ["Ejemplos",[["English is spoken all over the world.","These phones are made in China."],["The Eiffel Tower was built in 1889.","The letters were sent yesterday."]]]
   ],
   extra:`<section class="gsec"><h3>Activa → pasiva</h3><div class="gcols"><div class="gcell a"><p>Shakespeare <b>wrote</b> Hamlet.</p><p>→ Hamlet <b>was written by</b> Shakespeare.</p><p class="xmp"><b>by</b> = por (quién lo hizo). Solo se pone si importa.</p></div></div></section>`,
   practice:["gr","passive","Practicar la pasiva"] },

 { id:"relatives", short:"Who, which, where", title:"Relativos: who, which, that, where, whose",
   sub:"Para unir frases y dar más información sin repetir. Muy útiles en el Writing.",
   sticky:"The man <b>who</b> lives<br>next door is a chef.",
   cols:["who","which","where"],
   rows:[
    ["Se usa con",[["personas"],["cosas y animales"],["lugares"]]],
    ["Ejemplos",[["She's the girl who won the prize."],["This is the book which I told you about."],["That's the café where we met."]]]
   ],
   extra:`<section class="gsec"><h3>That y whose</h3><div class="gcols">
     <div class="gcell a"><p class="cname">that</p><p>personas o cosas (sustituye a who / which)</p><p class="hl">The film that we saw was great.</p></div>
     <div class="gcell b"><p class="cname">whose</p><p>cuyo, de quien</p><p class="hl">That's the man whose car was stolen.</p></div></div></section>`,
   practice:["gr","relatives","Practicar relativos"] },

 { id:"conditionals", short:"Condicionales", title:"Condicionales: 0, 1 y 2",
   sub:"Si pasa X, entonces Y. Cada tipo tiene sus tiempos fijos.",
   sticky:"<s>If it will rain...</s><br>If it <b>rains</b>, ...",
   cols:["Zero","First","Second"],
   rows:[
    ["Uso",[["Verdades siempre ciertas"],["Algo posible en el futuro"],["Algo imaginario o poco probable"]]],
    ["Forma",[`<p class="form">If + presente, presente</p>`,`<p class="form">If + presente, will + verbo</p>`,`<p class="form">If + pasado, would + verbo</p>`]],
    ["Ejemplos",[["If you heat ice, it melts."],["If it rains, we'll stay at home."],["If I had more money, I would travel more."]]]
   ],
   extra:`<section class="gsec"><h3>Detalles</h3><div class="gcols"><div class="gcell a"><ul><li><b>unless</b> = if not: I won't go unless you come.</li><li>Segundo condicional: <b>If I were you</b>, I'd... (para dar consejos)</li><li>Nunca will ni would detrás de if.</li></ul></div></div></section>`,
   practice:["gr","conditionals","Practicar condicionales"] },

 { id:"reported", short:"Estilo indirecto", title:"Estilo indirecto (reported speech)",
   sub:"Contar lo que otra persona dijo. El verbo da un paso atrás en el tiempo.",
   sticky:"«I'm tired.»<br>→ He said he <b>was</b> tired.",
   cols:null, rows:[],
   extra:`<section class="gsec"><h3>El verbo retrocede</h3>
    ${table(["Lo que dijo","Cómo se cuenta"],[
      ["«I <b>am</b> tired.»","She said she <b>was</b> tired."],["«I <b>like</b> it.»","He said he <b>liked</b> it."],
      ["«I<b>'m working</b>.»","She said she <b>was working</b>."],["«I <b>will</b> call you.»","He said he <b>would</b> call me."],
      ["«I <b>can</b> help.»","She said she <b>could</b> help."],["«I <b>saw</b> it.»","He said he <b>had seen</b> it."]])}</section>
    <section class="gsec"><h3>Say y tell, preguntas y cambios de tiempo</h3><div class="gcols">
     <div class="gcell a"><p class="cname">say / tell</p><p>He <b>said</b> (that)...</p><p>He <b>told me</b> (that)...</p></div>
     <div class="gcell b"><p class="cname">Preguntas</p><p>She <b>asked</b> me where I <b>lived</b>.</p><p>He asked <b>if</b> I was OK.</p></div>
     <div class="gcell c"><p class="cname">Palabras que cambian</p><p>today → that day<br>tomorrow → the next day<br>here → there</p></div></div></section>`,
   practice:["gr","reported","Practicar estilo indirecto"] },

 { id:"too-enough", short:"Too, enough, so, such", title:"Too, enough, so y such",
   sub:"Demasiado, suficiente y tan: cuatro palabras que se confunden mucho.",
   sticky:"<s>It's too much cold.</s><br>It's <b>too</b> cold.",
   cols:["too","enough","so / such"],
   rows:[
    ["Forma",[["<b>too</b> + adjetivo","too much + incontable","too many + plural"],["adjetivo + <b>enough</b>","<b>enough</b> + sustantivo"],["<b>so</b> + adjetivo","<b>such a</b> + adjetivo + sustantivo"]]],
    ["Ejemplos",[["It's too expensive.","I drank too much coffee."],["She isn't old enough to drive.","We haven't got enough time."],["The film was so good!","It was such a good film!"]]]
   ],
   extra:"",
   practice:["gr","too-enough","Practicar too y enough"] },

 { id:"exam", short:"El examen B1", title:"El examen B1 Preliminary",
   sub:"Cuatro partes, cada una vale un 25 %. Conocer el formato ya te da puntos.",
   sticky:"Aprobado:<br><b>140</b> en la escala<br>Cambridge",
   cols:null, rows:[],
   extra:`<section class="gsec"><h3>Las cuatro partes</h3>
    ${table(["Parte","Duración","Qué hay"],[
      ["Reading","45 min","6 partes, 32 preguntas"],["Writing","45 min","2 tareas de unas 100 palabras"],
      ["Listening","unos 30 min","4 partes, 25 preguntas. Cada audio se oye dos veces"],["Speaking","12–17 min","4 partes, en pareja con otro candidato"]])}
    <p class="xmp">Con 140–159 en la Cambridge English Scale apruebas el B1. Con 160–170 obtienes el B1 con grado A y certificado de B2.</p></section>
    <section class="gsec"><h3>Reading</h3>
    ${table(["Parte","Tarea","Truco"],[
      ["1","5 textos cortos (avisos, mensajes) con 3 opciones","Piensa quién escribe el aviso y para qué."],
      ["2","Emparejar 5 personas con 8 textos","Subraya lo que necesita cada persona. Hay 3 textos que sobran."],
      ["3","Texto largo con 5 preguntas de opción múltiple","Las preguntas siguen el orden del texto."],
      ["4","Texto con 5 huecos y 8 frases (como el de fútbol)","Busca pronombres (they, this, it) y conectores que enlacen."],
      ["5","6 huecos de vocabulario con 4 opciones","Collocations y phrasal verbs: make/do, look for/after..."],
      ["6","6 huecos, escribes una palabra","Gramática: artículos, preposiciones, auxiliares, pronombres."]])}</section>
    <section class="gsec"><h3>Writing</h3>
    ${table(["Parte","Tarea","Truco"],[
      ["1 (obligatoria)","Email de unas 100 palabras respondiendo a 4 notas","Usa las 4 notas. Saluda y despídete bien."],
      ["2 (eliges una)","Artículo o historia de unas 100 palabras","La historia debe empezar con la frase que te dan."]])}</section>
    <section class="gsec"><h3>Listening</h3>
    ${table(["Parte","Tarea","Truco"],[
      ["1","7 audios cortos, eliges entre 3 imágenes","Suelen mencionar las 3 imágenes. Escucha cuál es la definitiva."],
      ["2","6 conversaciones cortas, opción múltiple","Lee las preguntas antes. Busca opiniones y sentimientos."],
      ["3","Completar 6 huecos de unas notas","Palabras, números, fechas. Te pueden deletrear nombres: repasa el alfabeto."],
      ["4","Entrevista larga, 6 preguntas","Las preguntas siguen el orden de la entrevista."]])}</section>
    <section class="gsec"><h3>Speaking</h3>
    ${table(["Parte","Tarea","Truco"],[
      ["1","Preguntas personales (2–3 min)","Contesta con 2 frases, no solo «yes»."],
      ["2","Describir una foto durante 1 minuto","Habla sin parar: dónde, quién, qué hacen, qué llevan."],
      ["3","Decidir algo con tu compañero a partir de dibujos","Pregúntale su opinión. Cuenta la interacción."],
      ["4","Conversación sobre el tema de la parte 3","Da tu opinión y un ejemplo personal."]])}</section>`,
   practice:["sim1","","Hacer un simulacro"] },

 { id:"writing", short:"Writing: plantillas", title:"Writing: email, artículo e historia",
   sub:"Estructuras y frases listas para usar en el examen.",
   sticky:"Tacha cada nota<br>cuando la uses.",
   cols:["Email","Artículo","Historia"],
   rows:[
    ["Estructura",[["Saludo: Hi Jo, / Dear Sam,","1 frase reaccionando a su email","Un párrafo por cada nota","Despedida"],["Título","Pregunta al lector para empezar","2 párrafos con tu opinión y ejemplos","Conclusión"],["Empieza con la frase dada","Qué pasó (past simple)","Problema o sorpresa","Final: cómo te sentiste"]]],
    ["Frases útiles",[["Thanks for your email!","It's great that...","I'd prefer... because...","Why don't we...?","How about...?","See you soon, / Write soon,"],["Have you ever...?","In my opinion,...","I think... because...","For example,...","To sum up,..."],["It was a sunny morning when...","Suddenly,...","At first,... Then,...","In the end,...","I'll never forget that day."]]]
   ],
   extra:`<section class="gsec"><h3>Antes de entregar</h3><div class="gcols"><div class="gcell a"><ul>
     <li>¿He contestado las 4 notas (o todo lo que pide)?</li><li>¿Tiene unas 100 palabras?</li><li>¿He usado conectores? (because, but, so, although, however)</li>
     <li>¿He variado los tiempos verbales? (pasado, presente perfecto, futuro)</li><li>¿He revisado -s en he/she, pasados irregulares y mayúsculas?</li></ul></div></div></section>`,
   practice:["w-party","","Practicar un email"] },

 { id:"speaking", short:"Speaking: frases", title:"Speaking: frases útiles",
   sub:"Frases para cada parte y para salir del paso cuando no sabes una palabra.",
   sticky:"No te quedes<br>callado: <b>parafrasea</b>.",
   cols:["Describir una foto","Hablar en pareja","Opinar"],
   rows:[
    ["Frases",[["In this picture I can see...","On the left / right,...","In the background,...","It looks like...","I think they're..."],["What do you think about...?","I agree. / I'm not sure.","That's a good idea, but...","Shall we choose...?","Why don't we...?"],["In my opinion,...","I prefer... because...","For example,...","When I was younger,...","It depends on..."]]]
   ],
   extra:`<section class="gsec"><h3>Cuando no sabes una palabra</h3><div class="gcols">
     <div class="gcell a"><ul><li>I don't know the word, but it's a thing you use to...</li><li>It's a kind of...</li><li>It's similar to...</li></ul></div>
     <div class="gcell b"><ul><li>Could you repeat that, please?</li><li>Sorry, what does ... mean?</li><li>Let me think...</li></ul></div></div></section>`,
   practice:["sp-1","","Practicar Speaking con cronómetro"] }
);

GUIDES.push({ id:"traps", short:"Errores típicos", title:"Errores típicos de hispanohablantes",
  sub:"Los fallos que más se repiten cuando pensamos en español. Repásalos antes de cada Writing.",
  sticky:"Léelos en voz alta<br>en su forma <b>correcta</b>.",
  cols:null, rows:[],
  extra:`<section class="gsec">${table(["Incorrecto","Correcto","Por qué"],[
    ['<span class="wrong">I have 20 years.</span>','<span class="right">I\'m 20 (years old).</span>',"La edad va con be."],
    ['<span class="wrong">She don\'t like it.</span>','<span class="right">She doesn\'t like it.</span>',"He / she / it → does."],
    ['<span class="wrong">Is raining.</span>','<span class="right">It\'s raining.</span>',"El sujeto siempre aparece."],
    ['<span class="wrong">I live here since 2019.</span>','<span class="right">I\'ve lived here since 2019.</span>',"Sigue ahora: present perfect."],
    ['<span class="wrong">I have seen him yesterday.</span>','<span class="right">I saw him yesterday.</span>',"Fecha terminada: past simple."],
    ['<span class="wrong">in next Friday</span>','<span class="right">next Friday</span>',"Sin preposición con next / last / this."],
    ['<span class="wrong">at 6 of the afternoon</span>','<span class="right">at 6 in the afternoon / at 6 pm</span>',"in the afternoon."],
    ['<span class="wrong">ago two years</span>','<span class="right">two years ago</span>',"ago va detrás."],
    ['<span class="wrong">since two weeks</span>','<span class="right">for two weeks</span>',"for + duración."],
    ['<span class="wrong">because of I like it</span>','<span class="right">because I like it</span>',"because of + sustantivo."],
    ['<span class="wrong">Although it was cold, but we went out.</span>','<span class="right">Although it was cold, we went out.</span>',"although y but no van juntos."],
    ['<span class="wrong">I went for buy bread.</span>','<span class="right">I went to buy bread.</span>',"Finalidad: to + verbo."],
    ['<span class="wrong">The life is beautiful.</span>','<span class="right">Life is beautiful.</span>',"En general, sin the."],
    ['<span class="wrong">people is</span>','<span class="right">people are</span>',"people es plural."],
    ['<span class="wrong">an information / advices</span>','<span class="right">some information / some advice</span>',"Incontables."],
    ['<span class="wrong">more bigger</span>','<span class="right">bigger</span>',"No se mezclan more y -er."],
    ['<span class="wrong">I am agree.</span>','<span class="right">I agree.</span>',"agree es un verbo."],
    ['<span class="wrong">Where you live?</span>','<span class="right">Where do you live?</span>',"Las preguntas llevan auxiliar."]])}</section>`,
  practice:["gu","linkers","Ver la guía de conectores"] });

// Preposiciones: 10 tarjetas con uso, truco y ejemplos
const PREPS = [
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
GUIDES.push({ id:"prepositions", short:"Preposiciones clave", title:"Preposiciones: <em>of, from, for, on, in, to, at, with, about, between</em>",
  sub:"Para elegir bien, piensa en el significado. Cada preposición tiene una pregunta que te ayuda.",
  sticky:"<s>I'm good in maths.</s><br>I'm good <b>at</b> maths.",
  cols:null, rows:[],
  extra:`<section class="gsec"><h3>Las diez, una a una</h3><div class="gcols">${PREPS.map((p,i)=>`<div class="gcell ${["a","b","c"][i%3]}">
     <p class="cname">${p[0]}</p><p><b>${p[1]}</b></p><p class="hl">${p[2]}</p>
     <ul>${p[3].map(x=>`<li class="say" data-say="${x}">${x}</li>`).join("")}</ul></div>`).join("")}</div></section>
   <section class="gsec"><h3>Las parejas que más se confunden</h3>
   ${table(["Pareja","Diferencia","Ejemplo"],[
     ["made <b>of</b> / made <b>from</b>","of: el material se ve · from: el material se transforma","a ring made of gold · bread made from flour"],
     ["<b>to</b> / <b>at</b>","to: movimiento hacia un sitio · at: estar en un punto","I go to work. I'm at work."],
     ["<b>in</b> / <b>on</b> / <b>at</b> (tiempo)","in: meses y años · on: días y fechas · at: horas","in May · on Monday · at 9"],
     ["<b>in</b> / <b>on</b> (lugar)","in: dentro · on: encima de una superficie","in the bag · on the bag"],
     ["<b>for</b> / <b>since</b>","for: duración · since: desde un momento","for two years · since 2024"],
     ["<b>from</b>…<b>to</b> / <b>between</b>…<b>and</b>","las dos marcan límites; no se mezclan","from 2 to 4 · between 2 and 4"],
     ["<b>about</b> / <b>on</b> (tema)","about: conversación normal · on: libros, clases, charlas","talk about football · a book on history"]])}</section>
   <section class="gsec"><h3>Verbos y adjetivos con su preposición</h3><div class="gcols">
     <div class="gcell a"><p class="cname">verbo + preposición</p>${chips(["listen to","wait for","look at","agree with","worry about","talk about","belong to","depend on","arrive at / in"])}</div>
     <div class="gcell b"><p class="cname">adjetivo + preposición</p>${chips(["good at","interested in","afraid of","proud of","tired of","different from","famous for","angry with","worried about"])}</div></div></section>`,
  practice:["prep-exam","","Hacer el examen de preposiciones"] });

// Vocabulario de ropa, joyas, colores y materiales, agrupado como en la ficha de clase
GUIDES.push({ id:"clothes", short:"Ropa, joyas, colores y materiales", title:"Ropa, joyas, colores y materiales",
  sub:"Las palabras agrupadas en las cuatro categorías de la ficha. Algunas van en más de una: gold y silver son material y también color.",
  sticky:"a <b>gold</b> ring<br>= material<br>a <b>gold</b> dress<br>= color",
  cols:null, rows:[],
  extra:`<section class="gsec"><h3>Las cuatro categorías</h3><div class="gcols">${Object.entries(CLOTHES_CATS).map(([k, name], i) => `<div class="gcell ${["a","b","c","a"][i]}">
     <p class="cname">${name} · ${CLOTHES_CATS_ES[k]}</p>
     <ul>${CLOTHES.filter(w => w[2].includes(k)).map(w => `<li class="say" data-say="${w[0]}"><b>${w[0]}</b> – ${w[1]}${w[2].length > 1 ? " ★" : ""}</li>`).join("")}</ul></div>`).join("")}</div>
     <p class="xmp">★ = va en más de una categoría.</p></section>
   <section class="gsec"><h3>Cómo se usan</h3><div class="gcols">
     <div class="gcell a"><p class="cname">Orden de los adjetivos</p><p>color + material + prenda</p><p class="hl">a black leather jacket</p><p class="hl">a white cotton T-shirt</p></div>
     <div class="gcell b"><p class="cname">Siempre en plural</p><p>jeans, trousers, shorts, pyjamas, tights, glasses</p><p class="hl">My jeans <b>are</b> new. <br>a pair of trousers</p></div>
     <div class="gcell c"><p class="cname">Verbos útiles</p><p class="hl">wear = llevar puesto<br>put on = ponerse<br>take off = quitarse<br>try on = probarse<br>It suits you = te queda bien</p></div></div></section>`,
  practice:["ropa-cat","","Clasificar palabras (como la ficha)"] });

// Índice de guías agrupadas por etapa del curso
const GUIDE_SECTIONS = [
  {title:"Empieza aquí (A1)", ids:["be","pronouns","articles","numbers","questions","there","prepositions","countable","can"]},
  {title:"Tiempos verbales (A2)", ids:["ps-pc","past-basic","irr","past-cont","future","time"]},
  {title:"Hacia el B1", ids:["past-pp","used-to","comparatives","modals","gerund","passive","relatives","conditionals","reported","too-enough"]},
  {title:"Errores, vocabulario y conectores", ids:["traps","clothes","particles","linkers"]},
  {title:"El examen", ids:["exam","writing","speaking"]}
];
