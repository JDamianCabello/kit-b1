/* Kit B1 · más simulacros (con Reading Part 2 y Listening Part 3), tareas de Writing y práctica de Speaking.
   Todo el contenido es original, en el formato del B1 Preliminary. */

const CHECKS_EMAIL = ["He usado las 4 notas.","Empiezo y termino el email de forma adecuada.","Tiene entre 90 y 120 palabras.","He usado conectores (because, so, but, although...).","He revisado verbos: -s con he/she, pasados y futuros."];
const CHECKS_STORY = ["Empieza exactamente con la frase dada.","Tiene principio, problema o sorpresa y final.","Tiene entre 90 y 120 palabras.","Usa past simple y past continuous.","Usa conectores de secuencia (First, Then, Suddenly, In the end)."];
const CHECKS_ARTICLE = ["Tiene título.","Contesta a todas las preguntas del anuncio.","Tiene entre 90 y 120 palabras.","Da mi opinión con razones y ejemplos (In my opinion, because, for example).","Termina con una conclusión."];

EXAMS.push(
 { id:"sim3", title:"Simulacro 3", sub:"Con Reading Part 2 y Listening Part 3. Unos 40 minutos.",
   parts:[
    { type:"choice", title:"Reading · Part 1", intro:"Lee cada texto y elige la opción que dice lo mismo.",
      items:[
       { text:`<p class="notice"><b>CAFÉ</b><br>Free Wi-Fi for customers. Ask at the counter for the password. Maximum 1 hour at busy times.</p>`,
         opts:["Only customers can use the Wi-Fi.","The Wi-Fi password is on the wall.","You can't use the Wi-Fi at busy times."], a:0,
         why:"«Free Wi-Fi for customers». En horas punta se puede usar, pero como máximo una hora." },
       { text:`<p class="notice">Mum, the dentist called. My appointment on Tuesday is now at 4.30, not 3.30. Can you still take me? Olivia</p>`,
         opts:["Olivia's appointment is on a different day.","Olivia wants to know if her mum can take her at the new time.","The dentist can't see Olivia on Tuesday."], a:1,
         why:"El día es el mismo; cambia la hora. «Can you still take me?»" },
       { text:`<p class="notice"><b>GYM</b><br>Please clean the machines after use. Towels available at reception.</p>`,
         opts:["Members must bring their own towels.","You should clean the equipment when you finish.","Reception staff clean the machines."], a:1,
         why:"«clean the machines after use» = límpialas cuando termines. Las toallas las dan en recepción." }
      ]},
    { type:"match", title:"Reading · Part 2", intro:"Lee lo que busca cada persona y elige el texto que mejor le encaja. Sobran dos textos.",
      people:[
       "<b>Carla</b> wants to learn to cook Asian food. She works from Monday to Friday, so she can only go to classes at the weekend.",
       "<b>Ben</b> is looking for an after-school sports activity for his 10-year-old son, who loves being in the water.",
       "<b>Marta</b> wants to practise speaking English. She'd like to meet new people and doesn't want to spend much money."
      ],
      texts:[
       "<b>Wave Kids Club</b>: swimming and water polo for children aged 8 to 12. Monday to Thursday, 5 to 6 pm.",
       "<b>Spice Kitchen</b>: learn to make Thai and Japanese dishes. Evening classes on Tuesdays and Thursdays.",
       "<b>Language Café</b>: free English conversation evenings every Friday. Come and chat with people from all over the world.",
       "<b>Wok &amp; Roll</b>: Chinese and Vietnamese cooking workshops every Saturday morning.",
       "<b>Speak Up Academy</b>: private English lessons with a native teacher. £40 an hour."
      ],
      answers:[3,0,2],
      why:["Wok & Roll: cocina asiática y los sábados. Spice Kitchen es entre semana.","Wave Kids Club: deporte en el agua, para su edad y por la tarde.","Language Café: gratis y conoces gente. Speak Up es caro y a solas con el profesor."] },
    { type:"gapped", title:"Reading · Part 4", intro:"Elige la frase que va en cada hueco. Sobra una.",
      text:`<p>Last summer, my friend Leo and I cycled from London to Paris. (1) We trained for three months before the trip, riding 50 kilometres every weekend.</p>
       <p>The first day was the hardest. It rained all day and Leo had a flat tyre. (2) Luckily, a farmer stopped and helped us fix it.</p>
       <p>We arrived in Paris after four days. (3) We were tired, but we were really proud of ourselves.</p>`,
      sentences:["It was something we had wanted to do for years.","We didn't have the right tools to repair it.","We celebrated with a big dinner near the Eiffel Tower.","Paris is the most visited city in the world."],
      answers:[0,1,2],
      why:["Explica por qué hicieron el viaje antes de hablar del entrenamiento.","«it» = the flat tyre. Por eso necesitaron ayuda.","Qué hicieron al llegar. La D no tiene relación con su historia."] },
    { type:"cloze", title:"Reading · Part 5", intro:"Elige la palabra correcta para cada hueco.",
      text:`<p>Dear Sam,</p><p>I'm sorry I couldn't (1) to your party. I had to (2) care of my little brother because my parents were away. I hope you (3) a great time! Can we (4) next week? I'd love to hear all about it.</p><p>Love, Alex</p>`,
      items:[
       { opts:["come","reach","arrive","visit"], a:0, why:"<b>come to</b> a party." },
       { opts:["take","make","have","give"], a:0, why:"<b>take care of</b> = cuidar de." },
       { opts:["had","made","did","passed"], a:0, why:"<b>have</b> a great time." },
       { opts:["meet","know","find","join"], a:0, why:"<b>meet</b> = quedar, vernos." }
      ]},
    { type:"open", title:"Reading · Part 6", intro:"Escribe UNA palabra en cada hueco.",
      text:`<p>My name is Pedro and I live (1) a small town near Valencia. I (2) been learning English for six months. I study (3) evening after work. My favourite part of the course is speaking, (4) I find grammar quite difficult.</p>`,
      answers:[["in"],["have","'ve"],["every"],["but","although","though"]],
      why:["<b>in</b> + ciudad o pueblo.","Present perfect continuous: I <b>have</b> been learning.","<b>every</b> evening = todas las tardes.","Contraste: <b>but</b> (o although)."] },
    { type:"listen", title:"Listening · Part 1", intro:"Pulsa «Escuchar» y elige la respuesta. Puedes oír cada audio dos veces.",
      items:[
       { q:"What did the woman lose?", lines:[["W","I can't find my phone anywhere!"],["M","Is it in your bag?"],["W","No. I've got my keys and my wallet, but not my phone."],["M","Let me call it... Oh, listen, it's ringing under the sofa."]],
         opts:["Her keys","Her wallet","Her phone"], a:2, why:"Tiene las llaves y la cartera: «but not my phone»." },
       { q:"What will they do on Saturday?", lines:[["M","Shall we go to the beach on Saturday?"],["W","The forecast says it'll rain. How about the cinema?"],["M","We went last week. Let's visit the new museum instead."],["W","OK, good idea."]],
         opts:["Go to the beach","Go to the cinema","Visit a museum"], a:2, why:"Descartan la playa (lluvia) y el cine (ya fueron): «Let's visit the new museum»." }
      ]},
    { type:"notes", title:"Listening · Part 3", intro:"Vas a oír a una profesora hablando de un curso. Completa las notas con una palabra, un número o una fecha. Puedes escucharlo dos veces.",
      lines:["Hello everyone, and welcome to the summer art course.","Classes start on Monday the fourteenth of July, and finish on Friday the first of August.","They're from ten o'clock until half past twelve every morning.","The course costs one hundred and twenty pounds, and that includes all the paint and paper.","Please bring an old shirt to protect your clothes.","Your teacher is called Anna Green. That's G, R, E, E, N."],
      text:`<p><b>Summer art course</b></p><p>Starts: Monday (1) July</p><p>Classes finish at: (2)</p><p>Price: £(3)</p><p>Bring: an old (4)</p><p>Teacher's surname: (5)</p>`,
      answers:[["14th","14","fourteenth","the 14th"],["12.30","12:30","half past twelve","1230"],["120","one hundred and twenty"],["shirt"],["Green"]],
      why:["«Monday the fourteenth of July».","«until half past twelve» = 12:30.","«one hundred and twenty pounds».","«bring an old shirt».","Lo deletrea: G-R-E-E-N."] },
    { type:"write", title:"Writing · Part 1", intro:"Escribe unas 100 palabras. Después repasa la lista y compara con la respuesta modelo.",
      task:`<p>Read this email from your English friend Kim and the notes you have made.</p>
       <div class="notice"><p>Hi!</p><p>I've decided to start learning Spanish! <span class="note-tag">Great!</span></p><p>Have you got any tips for me? <span class="note-tag">Give advice</span></p><p>Which is better for learning, books or apps? <span class="note-tag">Say which and why</span></p><p>Could you help me practise sometimes? <span class="note-tag">Yes, suggest when</span></p><p>Kim</p></div>
       <p><b>Write your email to Kim using all the notes.</b></p>`,
      checks:CHECKS_EMAIL,
      model:`<p>Hi Kim,</p><p>That's fantastic news! Spanish is a beautiful language and I'm sure you'll love it.</p><p>My best tip is to practise a little every day, even for ten minutes. You should also watch Spanish films with subtitles.</p><p>I think apps are better than books because they're fun and you can use them anywhere, for example on the bus. But a good grammar book is useful too.</p><p>Of course I can help you! Why don't we have a video call every Sunday evening? We can speak Spanish for half an hour and English for half an hour.</p><p>Write soon,<br>Dani</p>` }
   ]},

 { id:"sim4", title:"Simulacro 4", sub:"Reading Parts 1, 2, 3 y 6, Listening y un artículo. Unos 40 minutos.",
   parts:[
    { type:"choice", title:"Reading · Part 1", intro:"Lee cada texto y elige la opción que dice lo mismo.",
      items:[
       { text:`<p class="notice"><b>LIBRARY</b><br>Silent study area upstairs. Group work on the ground floor only.</p>`,
         opts:["You can talk with other students downstairs.","The ground floor is closed.","Upstairs is for group work."], a:0,
         why:"El trabajo en grupo (hablar) solo en la planta baja. Arriba, silencio." },
       { text:`<p class="notice">Hi team, tomorrow's meeting will be in Room 5 instead of Room 3 because the painters are working. Same time. – Jo</p>`,
         opts:["The meeting time has changed.","The meeting is in a different room.","The meeting is cancelled."], a:1,
         why:"«in Room 5 instead of Room 3 ... Same time»." },
       { text:`<p class="notice">Keep in the fridge after opening. Use within 3 days.</p>`,
         opts:["Store it in the fridge before you open it.","Once it's open, finish it in 3 days.","It lasts 3 days in the cupboard."], a:1,
         why:"«after opening ... use within 3 days» = una vez abierto, consúmelo en 3 días." }
      ]},
    { type:"match", title:"Reading · Part 2", intro:"Lee lo que busca cada persona y elige el alojamiento que mejor le encaja. Sobran dos.",
      people:[
       "<b>Lucía</b> wants a quiet holiday in nature where she can go walking. She doesn't like big hotels.",
       "<b>Tom</b> and his friends want to stay by the beach and go out at night.",
       "<b>The Browns</b> have two young children and want a hotel with activities for kids."
      ],
      texts:[
       "<b>Mountain Lodge</b>: small wooden cabins in the forest, with great walking paths. No TV and no noise.",
       "<b>Sunset Resort</b>: a huge hotel with 500 rooms next to the lake, with a golf course and a spa.",
       "<b>Party Bay Hostel</b>: right on the beach, with bars and clubs five minutes away.",
       "<b>Family Fun Hotel</b>: kids' club, mini-golf and a children's pool, all included in the price.",
       "<b>City Break Hotel</b>: in the centre of Madrid, close to museums and shops."
      ],
      answers:[0,2,3],
      why:["Mountain Lodge: naturaleza, caminos y pequeño. Sunset Resort es enorme.","Party Bay: playa y vida nocturna.","Family Fun Hotel: actividades para niños."] },
    { type:"text-choice", title:"Reading · Part 3", intro:"Lee el texto y contesta las preguntas.",
      text:`<h4>My first job</h4>
       <p>When I was sixteen, I got a summer job in an ice-cream shop by the sea. I thought it would be easy and fun. After all, who doesn't like ice cream? But it was much harder than I expected.</p>
       <p>The shop was always busy, especially in the afternoons, and there was a long queue of hot, impatient customers. I had to work fast and remember dozens of flavours. My arm hurt from serving the hard ice cream, and at the end of each day I was exhausted.</p>
       <p>But the job taught me a lot. I learned to stay calm when people were rude, and I discovered that I was good at working in a team. I also saved enough money to buy my first laptop. Looking back, it was one of the best summers of my life.</p>`,
      items:[
       { q:"What did the writer expect the job to be like?", opts:["Enjoyable and easy.","Very tiring.","Badly paid."], a:0, why:"«I thought it would be easy and fun»." },
       { q:"What was difficult about the job?", opts:["The shop was often empty.","There were a lot of flavours to remember.","The manager was rude."], a:1, why:"«remember dozens of flavours». Los maleducados eran algunos clientes, no el jefe." },
       { q:"How does the writer feel about the job now?", opts:["She regrets doing it.","She's glad she did it.","She wants to do it again next summer."], a:1, why:"«it was one of the best summers of my life»." }
      ]},
    { type:"open", title:"Reading · Part 6", intro:"Escribe UNA palabra en cada hueco.",
      text:`<p>Last year I went (1) holiday to Scotland. It was (2) most beautiful place I have ever seen. We stayed in a small hotel (3) was next to a lake. Every day we went walking, even (4) it was raining.</p>`,
      answers:[["on"],["the"],["which","that"],["when","if","though"]],
      why:["go <b>on</b> holiday.","Superlativo: <b>the</b> most beautiful.","Relativo para cosas: <b>which</b> / <b>that</b>.","even <b>when</b> / even <b>if</b> / even <b>though</b>."] },
    { type:"listen", title:"Listening · Part 1", intro:"Pulsa «Escuchar» y elige la respuesta. Puedes oír cada audio dos veces.",
      items:[
       { q:"Which train will the man take?", lines:[["M","Excuse me, when's the next train to Oxford?"],["W","There's one at ten fifteen, but it's always very full. The next one is at ten forty-five."],["M","I'll take the ten forty-five, then."]],
         opts:["10:15","10:45","11:15"], a:1, why:"«I'll take the ten forty-five»." },
       { q:"What does the woman want to drink?", lines:[["M","What can I get you? A coffee?"],["W","No, thanks. I've had too much coffee today."],["M","Tea? Orange juice?"],["W","Just a glass of water, please."]],
         opts:["Coffee","Orange juice","Water"], a:2, why:"«Just a glass of water, please»." },
       { q:"How is the boy going to get to school?", lines:[["W","Are you cycling to school today?"],["M","My bike's broken, and Dad can't drive me because he's working early."],["W","Then you'll have to walk."],["M","OK, I'll leave now."]],
         opts:["By bike","By car","On foot"], a:2, why:"La bici está rota y su padre no puede llevarle: va andando." }
      ]},
    { type:"notes", title:"Listening · Part 3", intro:"Vas a oír información sobre un parque. Completa las notas. Puedes escucharlo dos veces.",
      lines:["Welcome to Greenfield Park.","The park opens at eight in the morning and closes at sunset.","The café is next to the lake, and it serves hot food until three o'clock.","If you want to hire a bike, it costs five pounds an hour.","Dogs are welcome, but they must stay on a lead near the playground."],
      text:`<p><b>Greenfield Park</b></p><p>Opens at: (1) am</p><p>The café is next to the: (2)</p><p>Hot food until: (3) o'clock</p><p>Bike hire: £(4) an hour</p><p>Near the playground, dogs must stay on a: (5)</p>`,
      answers:[["8","eight"],["lake"],["3","three"],["5","five"],["lead"]],
      why:["«opens at eight».","«next to the lake».","«hot food until three o'clock».","«five pounds an hour».","«on a lead» = con correa."] },
    { type:"write", title:"Writing · Part 2 (artículo)", intro:"Escribe unas 100 palabras.",
      task:`<div class="notice"><p><b>Articles wanted!</b></p><p>What's your favourite way to relax? What do you do, and why do you enjoy it?</p><p>Write an article answering these questions. The best articles will appear in our magazine.</p></div>`,
      checks:CHECKS_ARTICLE,
      model:`<p><b>Time to relax</b></p><p>Do you ever feel stressed after a long week? I do, and my favourite way to relax is cooking.</p><p>On Sunday afternoons I put on some music, open a recipe book and cook something new. Last week, for example, I made a Thai curry for the first time.</p><p>I enjoy it because I forget about work and concentrate on the food. It's also creative, and at the end I can share a delicious meal with my family.</p><p>In my opinion, everyone should find a hobby that helps them relax. Why don't you try cooking?</p>` }
   ]}
);

// Tareas de Writing sueltas: cada una se abre como un mini examen con una sola parte
const WRITING_TASKS = [
 { id:"w-party", title:"Email: una fiesta de cumpleaños", sub:"Writing Part 1 · email a un amigo",
   task:`<div class="notice"><p>Hi!</p><p>I'm having a party for my birthday next Saturday! <span class="note-tag">Great!</span></p><p>Can you come? <span class="note-tag">Say yes</span></p><p>What kind of food do you like? <span class="note-tag">Tell Sam</span></p><p>Could you help me with the music? <span class="note-tag">Suggest...</span></p><p>Sam</p></div>`,
   checks:CHECKS_EMAIL,
   model:`<p>Hi Sam,</p><p>Thanks for the invitation! I love parties and I'm really happy for you.</p><p>Of course I can come. I'm free all Saturday, so I can arrive early if you need help.</p><p>I like almost everything, but my favourite party food is pizza and chocolate cake. I'm not a big fan of spicy food.</p><p>I'd love to help with the music. Why don't we make a playlist together? We could meet on Thursday after class and choose the songs.</p><p>See you soon,<br>Dani</p>` },
 { id:"w-course", title:"Email: tu curso de inglés", sub:"Writing Part 1 · email a un amigo",
   task:`<div class="notice"><p>Hi!</p><p>How's your English course going? <span class="note-tag">Tell Sam</span></p><p>What do you do in class? <span class="note-tag">Explain</span></p><p>Is it difficult? <span class="note-tag">Say why</span></p><p>Do you think I should do the course too? <span class="note-tag">Advise</span></p><p>Sam</p></div>`,
   checks:CHECKS_EMAIL,
   model:`<p>Hi Sam,</p><p>My course is going really well, thanks! I've learned a lot in only a few weeks.</p><p>In class we do grammar exercises, listen to conversations and practise speaking in pairs. Yesterday we talked about our holidays.</p><p>It's quite difficult because it's an intensive course, so we study every day. Phrasal verbs are the hardest part for me.</p><p>I think you should do it too! The teacher is great and it's not expensive. You could start next month.</p><p>Write soon,<br>Dani</p>` },
 { id:"w-phone", title:"Historia: la llamada", sub:"Writing Part 2 · historia de unas 100 palabras",
   task:`<div class="notice"><p>Your story must begin with this sentence:</p><p><b>It was late at night when the phone rang.</b></p></div>`,
   checks:CHECKS_STORY,
   model:`<p>It was late at night when the phone rang. I was sleeping, so at first I didn't hear it. Then I looked at the screen: it was my brother, who lives in Australia.</p><p>I felt worried because he never calls so late. "Is everything OK?" I asked. He laughed and said, "Everything's perfect. I'm getting married!"</p><p>I was so surprised that I couldn't speak. He wanted me to be at the wedding next summer.</p><p>After the call, I couldn't sleep again, but this time it was because I was so happy.</p>` },
 { id:"w-box", title:"Historia: la caja", sub:"Writing Part 2 · historia de unas 100 palabras",
   task:`<div class="notice"><p>Your story must begin with this sentence:</p><p><b>Anna opened the box and smiled.</b></p></div>`,
   checks:CHECKS_STORY,
   model:`<p>Anna opened the box and smiled. Inside, there was an old camera and a letter from her grandfather.</p><p>When she was a child, they used to take photos together every weekend in the park. He had taught her everything about photography.</p><p>In the letter he wrote: "Keep taking photos. You have a special eye." Anna felt a bit sad, but also very proud.</p><p>The next morning, she took the camera to the park and started taking pictures again. A year later, she won her first photography competition.</p>` },
 { id:"w-town", title:"Artículo: tu ciudad", sub:"Writing Part 2 · artículo de unas 100 palabras",
   task:`<div class="notice"><p><b>Articles wanted!</b></p><p>What's the best thing about your town? Is there anything you would like to change?</p><p>Write an article answering these questions.</p></div>`,
   checks:CHECKS_ARTICLE,
   model:`<p><b>My town: small but special</b></p><p>Have you ever visited a town by the sea? I live in one, and I think it's a great place.</p><p>The best thing about my town is the beach. In summer, people swim and play volleyball, and in winter it's perfect for long walks.</p><p>However, there are some things I would like to change. There aren't many buses, so it's difficult to travel without a car. I'd also like more places for young people, like a cinema.</p><p>To sum up, I love my town, but it could be even better.</p>` },
 { id:"w-sport", title:"Artículo: deportes", sub:"Writing Part 2 · artículo de unas 100 palabras",
   task:`<div class="notice"><p><b>Articles wanted!</b></p><p>Do you prefer team sports or individual sports? Why?</p><p>Write an article answering these questions.</p></div>`,
   checks:CHECKS_ARTICLE,
   model:`<p><b>Together is better</b></p><p>Some people love running alone, but I prefer team sports. Why?</p><p>First, they're more fun. When I play basketball with my friends, we laugh a lot, even when we lose.</p><p>Second, you learn important things, like how to work with other people and how to help each other.</p><p>Of course, individual sports have some advantages. For example, you can do them whenever you want.</p><p>In my opinion, though, nothing is better than celebrating a win with your team.</p>` }
];

// Práctica de Speaking: preguntas, fotos descritas, tareas en pareja y debate
const SPEAKING = [
 { id:"sp-1", title:"Speaking Part 1: preguntas personales", sub:"20 preguntas · 20 segundos por respuesta", secs:20,
   tip:"Contesta con 2 frases: la respuesta y un detalle o razón.",
   phrases:["I live in...","I'm a... / I work as...","In my free time I...","I really enjoy... because...","Last weekend I...","Next weekend I'm going to..."],
   items:["What's your name?","Where do you live?","Who do you live with?","Do you work or are you a student?","What do you like doing in your free time?","Tell us about your family.","What did you do last weekend?","What are you going to do next weekend?","Do you like cooking? Why or why not?","What's your favourite food?","How do you usually travel to work or school?","Tell us about your best friend.","What kind of music do you like?","Where did you go on your last holiday?","Do you prefer the city or the countryside? Why?","How often do you use the internet?","What's the weather like in your town?","Tell us about a film you enjoyed.","Why are you learning English?","What would you like to do in the future?"].map(q => ({q})) },
 { id:"sp-2", title:"Speaking Part 2: describe una foto", sub:"8 escenas · 1 minuto sin parar", secs:60,
   tip:"Imagina la foto y descríbela: dónde es, quién aparece, qué hacen, qué llevan y cómo se sienten. Si no sabes una palabra, explícala con otras.",
   phrases:["In this picture I can see...","On the left / On the right...","In the background...","It looks like...","I think they're...","They're probably feeling..."],
   items:[
    {q:"Una familia cocinando junta en la cocina.", words:["kitchen","cooking","chopping vegetables","apron","smiling"]},
    {q:"Dos amigos haciendo senderismo en la montaña.", words:["hiking","backpack","path","sunny","view"]},
    {q:"Estudiantes trabajando en grupo en una clase.", words:["classroom","laptop","discussing","teacher","notes"]},
    {q:"Gente comprando en un mercado al aire libre.", words:["market","stall","fruit","buying","busy"]},
    {q:"Un chico jugando al fútbol bajo la lluvia.", words:["rain","wet","kicking the ball","team","muddy"]},
    {q:"Una mujer trabajando con el portátil en una cafetería.", words:["café","laptop","coffee","typing","busy"]},
    {q:"Una familia pasando el día en la playa.", words:["beach","sand","swimming","umbrella","sunny"]},
    {q:"Personas esperando en el andén de una estación de tren.", words:["platform","waiting","suitcase","crowded","train"]}
   ] },
 { id:"sp-3", title:"Speaking Part 3: decidir en pareja", sub:"4 situaciones · 2 minutos", secs:120,
   tip:"Habla de todas las opciones, pregunta a tu compañero y llegad a una decisión. Si practicas solo, di tú las dos partes.",
   phrases:["What do you think about...?","I think ... is a good idea because...","I'm not sure about...","That's true, but...","Shall we choose...?","So, we agree that..."],
   items:[
    {q:"A friend is leaving your town. Talk together about these presents and decide which would be best.", words:["a book","a photo album","a watch","concert tickets","a plant"]},
    {q:"Your school wants students to do more exercise. Talk about these ideas and decide which is the best.", words:["a football club","a dance class","cycling to school","a swimming pool","a walking club"]},
    {q:"A family is going on holiday. Talk about what they should take and decide on the two most important things.", words:["a map","sun cream","a camera","board games","a first aid kit"]},
    {q:"Your town wants more tourists. Talk about these ideas and decide which would be the most popular.", words:["a music festival","a new museum","cheaper hotels","more parks","better buses"]}
   ] },
 { id:"sp-4", title:"Speaking Part 4: da tu opinión", sub:"12 preguntas · 45 segundos", secs:45,
   tip:"Da tu opinión, una razón y un ejemplo de tu vida.",
   phrases:["In my opinion...","I think / I don't think...","For example...","When I was younger...","It depends on...","On the other hand..."],
   items:["Do you think young people spend too much time online?","Is it better to live in a city or in a village?","What's the best way to learn a language?","Should people cook at home more often?","Do you prefer holidays at the beach or in the mountains?","How can we protect the environment?","Are presents important? Why?","Is it important to do sport? Why?","What do you like doing with your friends?","Would you like to live in another country?","What job would you like to do in the future?","Is technology making our lives better?"].map(q => ({q})) }
];
