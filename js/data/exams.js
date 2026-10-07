/* Kit B1 · simulacros de examen con contenido original en formato B1 Preliminary.
   a = índice de la opción correcta. En "gapped", answers = índice de la frase para cada hueco. */
export const EXAMS = [
 { id:"sim1", title:"Simulacro 1", sub:"Reading, Listening y un email. Unos 35 minutos.",
   parts:[
    { type:"choice", title:"Reading · Part 1", intro:"Lee cada texto y elige la opción que dice lo mismo.",
      items:[
       { text:`<p class="notice"><b>SWIMMING POOL</b><br>Children under 12 must be with an adult at all times. Lifeguard on duty 9 am – 6 pm only.</p>`,
         opts:["Children under 12 can't use the pool after 6 pm.","Children under 12 need an adult with them at the pool.","Adults must swim with children."], a:1,
         why:"«must be with an adult at all times» = siempre con un adulto. El aviso no dice que no puedan usar la piscina después de las 6." },
       { text:`<p class="notice">Hi Sam, the concert tickets have arrived! I can't come to your house tonight, so I'll give you yours at college tomorrow. Jen</p>`,
         opts:["Jen wants Sam to buy the tickets.","Jen is explaining when she will give Sam a ticket.","Jen is inviting Sam to her house."], a:1,
         why:"«I'll give you yours at college tomorrow»: le dice cuándo le dará la entrada." },
       { text:`<p class="notice"><b>To: Year 2 students</b><br>Mr Price's Spanish class on Thursday is cancelled. Please complete page 34 of the workbook at home and bring it to the next class.</p>`,
         opts:["Students don't need to do any work this week.","Students must bring their homework to the next lesson.","The Thursday class will be at a different time."], a:1,
         why:"«complete page 34 ... and bring it to the next class»." }
      ]},
    { type:"text-choice", title:"Reading · Part 3", intro:"Lee el texto y contesta las preguntas.",
      text:`<h4>Learning to surf at 35</h4>
       <p>When I was a child, I was afraid of the sea. My family often went to the beach, but I always stayed on the sand with a book. Last summer, when I turned thirty-five, my friend Marta invited me to join her on a surfing course in Cornwall. At first I said no, but she kept asking, so in the end I agreed.</p>
       <p>The first day was terrible. The water was freezing and I spent more time under the waves than on top of them. I felt embarrassed because everyone else in the group seemed to learn so quickly. However, our instructor, Pete, was very patient. He told me that fear is normal and that the most important thing is to enjoy being in the water.</p>
       <p>By the end of the week, I could stand up on the board for a few seconds. It wasn't much, but I was really proud of myself. Now I go surfing whenever I can, and I've even persuaded my brother to try it.</p>`,
      items:[
       { q:"Why did Laura go on the surfing course?", opts:["She had always wanted to learn.","Her friend persuaded her.","Her family often went surfing."], a:1, why:"«she kept asking, so in the end I agreed»." },
       { q:"How did Laura feel on the first day?", opts:["Embarrassed about her progress.","Angry with the instructor.","Excited about the cold water."], a:0, why:"«I felt embarrassed because everyone else ... seemed to learn so quickly»." },
       { q:"What does Laura say about the end of the week?", opts:["She could surf better than the others.","She was pleased with what she had achieved.","She decided not to surf again."], a:1, why:"«I was really proud of myself»." }
      ]},
    { type:"gapped", title:"Reading · Part 4", intro:"Elige la frase que va en cada hueco. Sobra una.",
      text:`<p>Five years ago, the empty land behind our street was full of rubbish. Then a group of neighbours decided to turn it into a community garden. (1) They spent every weekend for three months clearing the land.</p>
       <p>Now the garden has more than thirty vegetable beds. (2) Older people teach the younger ones how to grow tomatoes and beans, and the children help with the heavy work.</p>
       <p>Every September there is a big party to celebrate the harvest. (3) The money goes to buying seeds and tools for the next year.</p>`,
      sentences:["At first, it wasn't easy.","Families of all ages look after them together.","Everyone brings food and there is a small market.","The rubbish is collected every Monday morning."],
      answers:[0,1,2],
      why:["«it wasn't easy» se explica después: pasaron tres meses limpiando.","«them» = the vegetable beds. Después habla de mayores y niños.","«The money» viene de la «small market»."] },
    { type:"cloze", title:"Reading · Part 5", intro:"Elige la palabra correcta para cada hueco.",
      text:`<p>Last year I decided to (1) a new hobby: photography. I (2) a cheap camera online and started taking pictures of my city. At first, I (3) a lot of mistakes, but I watched videos and practised every day. Now I'm (4) part in a local photography competition!</p>`,
      items:[
       { opts:["take up","take on","take off","take over"], a:0, why:"<b>take up</b> a hobby = empezar una afición." },
       { opts:["bought","paid","spent","cost"], a:0, why:"<b>buy</b> something. Pay necesitaría «for»." },
       { opts:["made","did","had","took"], a:0, why:"<b>make</b> a mistake." },
       { opts:["taking","making","doing","having"], a:0, why:"<b>take part in</b> = participar en." }
      ]},
    { type:"open", title:"Reading · Part 6", intro:"Escribe UNA palabra en cada hueco.",
      text:`<p>Dear Tom,</p><p>Thanks (1) your email. I'm writing to tell you about my new job. I started (2) Monday and I really like it. The people are very friendly and there (3) a great café next to the office. (4) you like, we can have lunch there next week.</p><p>Best wishes, Ana</p>`,
      answers:[["for"],["on","last"],["is","'s"],["If"]],
      why:["Thanks <b>for</b>...","<b>on</b> + día de la semana.","Singular: there <b>is</b> a café.","<b>If</b> you like = si quieres."] },
    { type:"listen", title:"Listening · Part 1", intro:"Pulsa «Escuchar» y elige la respuesta. Como en el examen, puedes oír cada audio dos veces. Tu móvil lee la conversación con voz sintética.",
      items:[
       { q:"What time does the film start?", lines:[["W","Shall we meet at the cinema at seven?"],["M","The film starts at half past seven, but I want to buy some popcorn first, so let's meet at a quarter past seven."],["W","OK, see you then."]],
         opts:["7:00","7:15","7:30"], a:2, why:"«The film starts at half past seven». 7:15 es cuando quedan." },
       { q:"What is the man going to buy?", lines:[["M","I'm going to the shop. Do we need any milk?"],["W","No, I bought some this morning. But we haven't got any bread."],["M","OK. And eggs?"],["W","There are six in the fridge, that's enough."]],
         opts:["Milk","Bread","Eggs"], a:1, why:"«we haven't got any bread». La leche y los huevos ya los tienen." },
       { q:"How will the woman get to the airport?", lines:[["M","Are you taking the train to the airport tomorrow?"],["W","I usually do, but there's a train strike. I thought about getting a taxi, but it's too expensive, so my brother is driving me."]],
         opts:["By train","By taxi","By car"], a:2, why:"«my brother is driving me» = en coche." }
      ]},
    { type:"write", title:"Writing · Part 1", intro:"Escribe unas 100 palabras. Cuando termines, repasa la lista y compara con la respuesta modelo.",
      task:`<p>Read this email from your English friend Alex and the notes you have made.</p>
       <div class="notice"><p>Hi!</p><p>Good news – I'm coming to your city for a weekend next month! <span class="note-tag">Great!</span></p><p>I'd love to see some interesting places. What do you recommend? <span class="note-tag">Tell Alex</span></p><p>Should I stay in a hotel, or can I stay with you? <span class="note-tag">Explain</span></p><p>Can we meet one evening? <span class="note-tag">Yes, suggest...</span></p><p>Alex</p></div>
       <p><b>Write your email to Alex using all the notes.</b></p>`,
      checks:["He usado las 4 notas.","Empiezo y termino el email de forma adecuada (Hi Alex, / See you soon).","Tiene entre 90 y 120 palabras.","He usado conectores (because, so, but, although...).","He revisado verbos: -s con he/she, pasados y futuros."],
      model:`<p>Hi Alex,</p><p>That's great news! I can't wait to see you.</p><p>You should definitely visit the old town, because the streets are beautiful, and the market on Saturday morning is really fun. If the weather is good, we can also go to the beach.</p><p>You don't need to stay in a hotel. You can stay with me – I've got a spare bedroom and my parents would love to meet you.</p><p>Of course we can meet one evening! How about Friday at 8? There's a great pizza restaurant near my house.</p><p>See you soon,<br>Dani</p>` }
   ]},

 { id:"sim2", title:"Simulacro 2", sub:"Reading, Listening y una historia. Unos 35 minutos.",
   parts:[
    { type:"choice", title:"Reading · Part 1", intro:"Lee cada texto y elige la opción que dice lo mismo.",
      items:[
       { text:`<p class="notice"><b>SUMMER SALE</b><br>Buy one T-shirt, get the second half price. Offer ends Sunday.</p>`,
         opts:["Two T-shirts cost less than usual until Sunday.","The shop closes on Sunday.","All T-shirts are half price."], a:0,
         why:"La segunda camiseta es a mitad de precio: comprando dos pagas menos. Solo hasta el domingo." },
       { text:`<p class="notice">Dad – I've taken the car to football practice. Mum will pick you up from the station at 6. Leo</p>`,
         opts:["Leo is going to collect Dad from the station.","Mum is going to drive Dad home.","Dad should go to football practice."], a:1,
         why:"«Mum will pick you up from the station»." },
       { text:`<p class="notice"><b>CITY LIBRARY</b><br>Books can be borrowed for three weeks. If you need them for longer, you can renew them online, but only once.</p>`,
         opts:["You can keep a book for six weeks at most.","You must return books online.","You can renew books as many times as you want."], a:0,
         why:"Tres semanas + una renovación de tres semanas = seis semanas como máximo." }
      ]},
    { type:"text-choice", title:"Reading · Part 3", intro:"Lee el texto y contesta las preguntas.",
      text:`<h4>A day with the elephants</h4>
       <p>Tom Barker has worked at Westfield Zoo for ten years. He looks after the elephants, and he says every day is different. "People think I just feed the animals, but that's only a small part of my job," he explains. "I also check that they're healthy, clean their home and plan activities so they don't get bored."</p>
       <p>Tom didn't plan to work with animals. He studied computer science at university and got a job in an office. "I was earning good money, but I felt I was wasting my life in front of a screen," he says. When he saw an advert for volunteers at the zoo, he decided to try it at weekends. A year later, he left his office job.</p>
       <p>The hardest part, he says, is the weather. "In winter it can be really cold at six in the morning. But when the baby elephant runs to say hello, I forget about everything else."</p>`,
      items:[
       { q:"What do people think about Tom's job?", opts:["It's only about feeding the animals.","It's very dangerous.","It's badly paid."], a:0, why:"«People think I just feed the animals»." },
       { q:"Why did Tom leave his office job?", opts:["He didn't earn enough money.","He wasn't happy with his life.","The company closed."], a:1, why:"«I felt I was wasting my life». Ganaba buen dinero." },
       { q:"What does Tom find difficult?", opts:["Working early on cold mornings.","Looking after the baby elephant.","Working at weekends."], a:0, why:"«The hardest part ... is the weather ... cold at six in the morning»." }
      ]},
    { type:"gapped", title:"Reading · Part 4", intro:"Elige la frase que va en cada hueco. Sobra una.",
      text:`<p>When Maya was fourteen, she started a cooking channel on the internet. (1) She filmed the videos in her parents' kitchen with an old phone.</p>
       <p>At first, only her friends watched. But one day, a video of her grandmother's chocolate cake was shared by a famous food magazine. (2) Suddenly, she had thousands of followers.</p>
       <p>Now Maya is nineteen and studies at a cookery school in Paris. (3) She says she wants to open a small restaurant one day.</p>`,
      sentences:["Her first recipes were very simple dishes, like pasta and salads.","In just one week, it had more than a million views.","She still posts a new video every Sunday.","Her grandmother never learned to cook."],
      answers:[0,1,2],
      why:["Habla de sus primeros vídeos y cómo los grababa.","«it» = el vídeo compartido. Después: «Suddenly, she had thousands of followers».","Presente: lo que hace ahora. La D contradice el texto (la abuela tenía una receta)."] },
    { type:"cloze", title:"Reading · Part 5", intro:"Elige la palabra correcta para cada hueco.",
      text:`<p>My cousin Pablo and I (1) on really well. We (2) a lot of time together when we were children. Last summer we (3) a trip to Scotland and (4) a great time.</p>`,
      items:[
       { opts:["get","go","have","make"], a:0, why:"<b>get on</b> (well) with = llevarse bien." },
       { opts:["spent","passed","took","made"], a:0, why:"<b>spend</b> time." },
       { opts:["went on","did","made","took on"], a:0, why:"<b>go on</b> a trip = hacer un viaje." },
       { opts:["had","made","spent","passed"], a:0, why:"<b>have</b> a great time = pasarlo genial." }
      ]},
    { type:"open", title:"Reading · Part 6", intro:"Escribe UNA palabra en cada hueco.",
      text:`<p>I've been learning the guitar (1) two years. My teacher is very patient and always helps me when I make mistakes. I practise every day, even (2) I'm tired. Next month I'm going (3) play in a concert for the first time. I'm a bit nervous, but my family (4) coming to watch me.</p>`,
      answers:[["for"],["when","if"],["to"],["is","are"]],
      why:["<b>for</b> + duración.","even <b>when</b> / even <b>if</b> = incluso cuando / aunque.","going <b>to</b> + verbo.","Present continuous para un plan: family <b>is</b> (o are) coming."] },
    { type:"listen", title:"Listening · Part 1", intro:"Pulsa «Escuchar» y elige la respuesta. Puedes oír cada audio dos veces.",
      items:[
       { q:"Where are they going to meet?", lines:[["W","Let's meet outside the museum at eleven."],["M","It's going to rain. Why don't we meet in the café opposite?"],["W","Good idea. The one next to the bank?"],["M","Yes, that's it."]],
         opts:["Outside the museum","In the café","At the bank"], a:1, why:"«Why don't we meet in the café opposite? – Good idea»." },
       { q:"How much did the woman pay for her jacket?", lines:[["M","I love your jacket! Was it expensive?"],["W","It was eighty pounds, but it was in the sale, so I only paid forty."],["M","That's a really good price."]],
         opts:["£80","£40","£18"], a:1, why:"«I only paid forty». 80 era el precio original." },
       { q:"What will the weather be like tomorrow?", lines:[["M","Is it going to be sunny for the picnic tomorrow?"],["W","The forecast says it'll be cloudy all morning, but it won't rain."],["M","Great. As long as it's dry, I'm happy."]],
         opts:["Sunny","Rainy","Cloudy"], a:2, why:"«it'll be cloudy ... but it won't rain»." }
      ]},
    { type:"write", title:"Writing · Part 2 (historia)", intro:"Escribe unas 100 palabras. Tu historia debe empezar con esta frase:",
      task:`<div class="notice"><p><b>When I opened the door, I couldn't believe my eyes.</b></p></div><p>Write your story.</p>`,
      checks:["Empieza exactamente con la frase dada.","Tiene principio, problema o sorpresa y final.","Tiene entre 90 y 120 palabras.","Usa past simple y past continuous (was doing... when...).","Usa conectores de secuencia (First, Then, Suddenly, In the end)."],
      model:`<p>When I opened the door, I couldn't believe my eyes. All my friends were standing in my living room, and they were shouting "Happy birthday!"</p><p>I was really surprised because my birthday was the next day. My sister had organised everything while I was working. There were balloons everywhere and a huge chocolate cake on the table.</p><p>At first, I felt a bit embarrassed because I was wearing my old work clothes. Then we started dancing and I forgot about it. In the end, we played games until midnight.</p><p>It was the best party I've ever had.</p>` }
   ]}
];
