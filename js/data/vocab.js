/* Inglés Paso a Paso · vocabulario por temas del B1 Preliminary. Formato: "inglés=español|..." */
// Cada tema: [id, nombre, palabras]. Palabras: "inglés=español", separadas por | o saltos de línea.
export const TOPICS_RAW = [
 ["family", "Familia y personas", `
   mother=madre | father=padre | parents=padres | brother=hermano | sister=hermana | son=hijo
   daughter=hija | grandparents=abuelos | uncle=tío | aunt=tía | cousin=primo, prima | husband=marido
   wife=esposa | twins=gemelos | boyfriend=novio | neighbour=vecino | grandmother=abuela | grandfather=abuelo
   grandson=nieto | granddaughter=nieta | grandchildren=nietos | stepmother=madrastra | stepfather=padrastro | stepbrother=hermanastro
   stepsister=hermanastra | half-brother=medio hermano | half-sister=media hermana | nephew=sobrino | niece=sobrina | mother-in-law=suegra
   father-in-law=suegro | brother-in-law=cuñado | sister-in-law=cuñada | son-in-law=yerno | daughter-in-law=nuera | relatives=familiares, parientes
   only child=hijo único | baby=bebé | child=niño, niña | children=niños, hijos | teenager=adolescente | adult=adulto
   elderly=mayor (persona) | girlfriend=novia | partner=pareja | fiancé=prometido | bride=novia (en la boda) | groom=novio (en la boda)
   wedding=boda | get married=casarse | be married=estar casado | single=soltero | divorced=divorciado | separated=separado
   widow=viuda | widower=viudo | get divorced=divorciarse | marriage=matrimonio | anniversary=aniversario | birthday=cumpleaños
   be born=nacer | grow up=crecer | bring up=criar | look after=cuidar de | take after=parecerse a (un familiar) | get on well with=llevarse bien con
   fall out with=enfadarse con | look like=parecerse a (físicamente) | surname=apellido | first name=nombre de pila | nickname=apodo | family tree=árbol genealógico
   generation=generación | ancestor=antepasado | household=hogar (las personas) | guest=invitado | host=anfitrión | friend=amigo
   best friend=mejor amigo | close friend=amigo íntimo | classmate=compañero de clase | flatmate=compañero de piso | roommate=compañero de habitación | acquaintance=conocido
   stranger=desconocido | colleague=compañero de trabajo | godmother=madrina | godfather=padrino | mum=mamá | dad=papá
   grandma=abuelita | grandpa=abuelito | relationship=relación | friendship=amistad | childhood=infancia | adulthood=edad adulta
   old age=vejez | pet=mascota | celebrate=celebrar | get together=reunirse | visit=visitar | family reunion=reunión familiar
   elder brother=hermano mayor | younger sister=hermana menor | the eldest=el mayor (de los hermanos) | the youngest=el menor (de los hermanos) | engaged=prometido (adj.) | couple=pareja (dos personas)
   adopt=adoptar | raise=criar, educar | depend on=depender de | support=apoyar | argue=discutir | apologise=pedir perdón
   forgive=perdonar | trust=confiar en | miss=echar de menos | share=compartir | respect=respetar | proud parents=padres orgullosos
   newborn=recién nacido | toddler=niño pequeño (que empieza a andar) | kid=crío, niño`],
 ["describe", "Describir a alguien", `
   tall=alto | short=bajo | slim=delgado | curly hair=pelo rizado | straight hair=pelo liso | beard=barba
   friendly=simpático | kind=amable | funny=gracioso | shy=tímido | lazy=vago | hard-working=trabajador
   clever=listo | polite=educado | rude=maleducado | generous=generoso | good-looking=guapo | beautiful=guapa, preciosa
   handsome=guapo (hombre) | pretty=bonita, mona | ugly=feo | attractive=atractivo | fat=gordo | overweight=con sobrepeso
   thin=flaco | skinny=muy delgado | well-built=fuerte, corpulento | medium height=de estatura media | young=joven | old=viejo, mayor
   middle-aged=de mediana edad | in his twenties=de veintitantos años | wavy hair=pelo ondulado | long hair=pelo largo | short hair=pelo corto | dark hair=pelo oscuro
   fair hair=pelo rubio | blond=rubio | red hair=pelo pelirrojo | bald=calvo | moustache=bigote | glasses=gafas
   freckles=pecas | wrinkles=arrugas | blue eyes=ojos azules | brown eyes=ojos marrones | pale=pálido | tanned=moreno (de sol)
   cute=mono, adorable | smart=elegante; listo | scruffy=desaliñado | well-dressed=bien vestido | cheerful=alegre | outgoing=extrovertido
   sociable=sociable | talkative=hablador | quiet=callado, tranquilo | calm=tranquilo | patient=paciente | impatient=impaciente
   honest=honrado, sincero | dishonest=deshonesto | reliable=fiable | responsible=responsable | sensible=sensato | sensitive=sensible
   confident=seguro de sí mismo | selfish=egoísta | mean=tacaño; malo | bossy=mandón | stubborn=testarudo | brave=valiente
   helpful=servicial | careful=cuidadoso | careless=descuidado | organised=organizado | messy=desordenado | creative=creativo
   ambitious=ambicioso | easy-going=tranquilo, de trato fácil | nice=agradable, majo | unfriendly=antipático | serious=serio | silly=tonto, bobo
   intelligent=inteligente | stupid=estúpido | wise=sabio | kind-hearted=bondadoso | cruel=cruel | loyal=leal
   modest=modesto | arrogant=arrogante | positive=positivo | negative=negativo | moody=de humor cambiante | romantic=romántico
   sporty=deportista | lively=animado, vivo | personality=personalidad | appearance=aspecto | character=carácter | height=altura
   weight=peso | be like=ser como (carácter) | look=parecer (por el aspecto) | describe=describir | average=normal, medio | fit=en forma
   strong=fuerte | elegant=elegante | curious=curioso | thoughtful=considerado, atento | annoying=molesto, pesado | charming=encantador`],
 ["feelings", "Sentimientos", `
   happy=feliz | sad=triste | angry=enfadado | worried=preocupado | nervous=nervioso | bored=aburrido
   excited=emocionado | tired=cansado | scared=asustado | surprised=sorprendido | proud=orgulloso | embarrassed=avergonzado
   disappointed=decepcionado | relaxed=relajado | jealous=celoso | lonely=solo (sentirse) | glad=contento | pleased=satisfecho, contento
   delighted=encantado | cheerful=alegre | upset=disgustado | unhappy=infeliz | miserable=muy triste, abatido | depressed=deprimido
   furious=furioso | annoyed=molesto | cross=enfadado | frightened=asustado | afraid=con miedo | terrified=aterrorizado
   anxious=ansioso, inquieto | stressed=estresado | calm=tranquilo | confident=seguro | shy=tímido | ashamed=avergonzado (por algo malo)
   guilty=culpable | confused=confundido | shocked=impactado | amazed=asombrado | grateful=agradecido | hopeful=esperanzado
   hopeless=desesperanzado | curious=curioso | interested=interesado | fed up=harto | exhausted=agotado | sleepy=con sueño
   homesick=con morriña | in a good mood=de buen humor | in a bad mood=de mal humor | feel like=tener ganas de | cheer up=animarse | calm down=calmarse
   get angry=enfadarse | lose your temper=perder los nervios | be in love=estar enamorado | fall in love=enamorarse | hate=odiar | love=querer, encantar
   like=gustar | can't stand=no soportar | enjoy=disfrutar | miss=echar de menos | worry about=preocuparse por | be afraid of=tener miedo de
   be fond of=tener cariño a | be keen on=ser aficionado a | feeling=sentimiento | emotion=emoción | mood=estado de ánimo | happiness=felicidad
   sadness=tristeza | anger=ira, enfado | fear=miedo | joy=alegría | stress=estrés | pride=orgullo
   jealousy=celos | surprise=sorpresa | disappointment=decepción | loneliness=soledad | embarrassment=vergüenza | excitement=emoción, entusiasmo
   boredom=aburrimiento | relief=alivio | sympathy=compasión | cry=llorar | laugh=reír | smile=sonreír
   shout=gritar | scream=chillar | sigh=suspirar | blush=ponerse rojo | tear=lágrima | hug=abrazo; abrazar
   kiss=beso; besar | comfort=consolar | relaxing=relajante | boring=aburrido (que aburre) | exciting=emocionante | surprising=sorprendente
   frightening=que da miedo | disappointing=decepcionante | embarrassing=vergonzoso | worrying=preocupante | amusing=divertido, gracioso | satisfied=satisfecho
   mad=loco; enfadado | nervous breakdown=crisis nerviosa | positive=optimista | pessimistic=pesimista | optimistic=optimista | thrilled=entusiasmado
   scared stiff=muerto de miedo | bored stiff=muerto de aburrimiento | over the moon=en una nube`],
 ["house", "Casa", `
   kitchen=cocina | bedroom=dormitorio | bathroom=baño | living room=salón | garden=jardín | stairs=escaleras
   floor=suelo, planta | wall=pared | roof=tejado | fridge=nevera | cooker=cocina (el aparato) | sofa=sofá
   shelf=estantería | washing machine=lavadora | flat=piso | rent=alquiler | dining room=comedor | hall=entrada, recibidor
   study=despacho | attic=desván | basement=sótano | garage=garaje | balcony=balcón | terrace=terraza
   lift=ascensor | ceiling=techo (por dentro) | door=puerta | window=ventana | front door=puerta de entrada | doorbell=timbre
   key=llave | lock=cerradura | gate=verja, puerta del jardín | fence=valla | chimney=chimenea (por fuera) | fireplace=chimenea (por dentro)
   carpet=moqueta, alfombra | rug=alfombra | curtains=cortinas | blinds=persianas | furniture=muebles | armchair=sillón
   table=mesa | chair=silla | desk=escritorio | bed=cama | bunk bed=litera | pillow=almohada
   sheet=sábana | duvet=edredón | blanket=manta | wardrobe=armario (de ropa) | cupboard=armario (de cocina) | chest of drawers=cómoda
   drawer=cajón | mirror=espejo | lamp=lámpara | light=luz | switch=interruptor | plug=enchufe (de un aparato)
   socket=enchufe (de la pared) | heating=calefacción | radiator=radiador | air conditioning=aire acondicionado | freezer=congelador | dishwasher=lavavajillas
   microwave=microondas | sink=fregadero, lavabo | tap=grifo | bath=bañera | shower=ducha | toilet=váter, baño
   towel rail=toallero | cushion=cojín | picture=cuadro | plant=planta | bookcase=librería (mueble) | television=televisión
   remote control=mando a distancia | house=casa | home=hogar | building=edificio | block of flats=bloque de pisos | apartment=apartamento
   detached house=casa unifamiliar | semi-detached house=casa pareada | terraced house=casa adosada | cottage=casita de campo | neighbourhood=barrio | landlord=casero
   tenant=inquilino | move house=mudarse | share a flat=compartir piso | own=ser dueño de | ground floor=planta baja | first floor=primera planta
   upstairs=arriba | downstairs=abajo | spare room=habitación de invitados | corridor=pasillo | steps=escalones | bin=cubo de basura
   vase=jarrón | clock=reloj (de pared) | shelves=estanterías | cosy=acogedor | spacious=amplio | tiny=diminuto
   modern=moderno | old-fashioned=anticuado | furnished=amueblado | comfortable=cómodo | bright=luminoso | dark=oscuro
   view=vistas | decorate=decorar | repair=reparar | paint=pintar`],
 ["routine", "Rutina diaria", `
   wake up=despertarse | get up=levantarse | have a shower=ducharse | get dressed=vestirse | have breakfast=desayunar | have lunch=comer
   have dinner=cenar | brush your teeth=lavarse los dientes | go to bed=acostarse | do the housework=hacer las tareas | do the shopping=hacer la compra | take the bus=coger el autobús
   go to work=ir a trabajar | come home=volver a casa | relax=descansar | fall asleep=dormirse | alarm clock=despertador | set the alarm=poner el despertador
   oversleep=quedarse dormido | have a bath=bañarse | wash your face=lavarse la cara | wash your hair=lavarse el pelo | comb your hair=peinarse | shave=afeitarse
   put on make-up=maquillarse | put on=ponerse (ropa) | take off=quitarse (ropa) | get undressed=desvestirse | make breakfast=preparar el desayuno | have a snack=picar algo, merendar
   make a coffee=hacerse un café | leave home=salir de casa | catch the train=coger el tren | drive to work=ir en coche al trabajo | walk to school=ir andando al colegio | get to work=llegar al trabajo
   start work=empezar a trabajar | finish work=terminar de trabajar | have a break=hacer un descanso | have a meeting=tener una reunión | check emails=mirar el correo | go to school=ir al colegio
   do homework=hacer los deberes | study=estudiar | go home=ir a casa | get home=llegar a casa | pick up=recoger (a alguien) | take the kids to school=llevar a los niños al colegio
   go to the gym=ir al gimnasio | go for a walk=ir a dar un paseo | go for a run=salir a correr | walk the dog=sacar al perro | cook=cocinar | make dinner=hacer la cena
   wash up=fregar los platos | watch TV=ver la tele | listen to music=escuchar música | read a book=leer un libro | play video games=jugar a videojuegos | chat with friends=charlar con amigos
   go out=salir | stay in=quedarse en casa | meet friends=quedar con amigos | have a nap=echarse la siesta | go to sleep=dormirse | sleep=dormir
   stay up late=acostarse tarde | get up early=madrugar | lie in=quedarse en la cama | every day=todos los días | every morning=todas las mañanas | in the evening=por la tarde, por la noche
   at night=por la noche | on weekdays=entre semana | at weekends=los fines de semana | once a week=una vez a la semana | twice a day=dos veces al día | usually=normalmente
   always=siempre | sometimes=a veces | hardly ever=casi nunca | never=nunca | often=a menudo | routine=rutina
   habit=costumbre, hábito | daily=diario | busy=ocupado | free=libre | early=temprano | late=tarde
   on time=puntual | in a hurry=con prisa | be late=llegar tarde | commute=ir y volver del trabajo | rush hour=hora punta | lunch break=pausa para comer
   day off=día libre | weekend=fin de semana | plan your day=organizar el día | feed the pet=dar de comer a la mascota | charge your phone=cargar el móvil | turn off the lights=apagar las luces
   lock the door=cerrar con llave | brush your hair=cepillarse el pelo | dry your hair=secarse el pelo | wake somebody up=despertar a alguien | get ready=prepararse, arreglarse | tidy your room=ordenar tu cuarto
   do exercise=hacer ejercicio | have a rest=descansar`],
 ["food", "Comida y bebida", `
   bread=pan | cheese=queso | meat=carne | chicken=pollo | fish=pescado | vegetables=verduras
   fruit=fruta | rice=arroz | eggs=huevos | butter=mantequilla | sugar=azúcar | salt=sal
   juice=zumo | water=agua | a bottle of=una botella de | a piece of cake=un trozo de tarta | spicy=picante | delicious=delicioso
   menu=carta | bill=cuenta (restaurante) | pasta=pasta | potatoes=patatas | chips=patatas fritas | crisps=patatas fritas de bolsa
   salad=ensalada | soup=sopa | sandwich=bocadillo, sándwich | pizza=pizza | burger=hamburguesa | steak=filete
   beef=ternera | pork=cerdo (carne) | lamb=cordero | ham=jamón | sausage=salchicha | bacon=beicon
   seafood=marisco | prawns=gambas | tuna=atún | salmon=salmón | egg=huevo | milk=leche
   cream=nata | yoghurt=yogur | ice cream=helado | cake=tarta, pastel | biscuit=galleta | chocolate=chocolate
   sweets=caramelos, chucherías | honey=miel | jam=mermelada | oil=aceite | vinegar=vinagre | pepper=pimienta; pimiento
   flour=harina | cereal=cereales | apple=manzana | orange=naranja | banana=plátano | strawberry=fresa
   grapes=uvas | lemon=limón | pear=pera | peach=melocotón | watermelon=sandía | pineapple=piña
   cherry=cereza | tomato=tomate | onion=cebolla | garlic=ajo | carrot=zanahoria | lettuce=lechuga
   cucumber=pepino | mushroom=champiñón | beans=judías, alubias | peas=guisantes | corn=maíz | nuts=frutos secos
   coffee=café | tea=té | hot chocolate=chocolate caliente | lemonade=limonada | fizzy drink=refresco con gas | mineral water=agua mineral
   wine=vino | beer=cerveza | breakfast=desayuno | lunch=comida (del mediodía) | dinner=cena | snack=tentempié
   meal=comida (cada una del día) | dish=plato (de comida) | starter=primer plato, entrante | main course=plato principal | dessert=postre | vegetarian=vegetariano
   vegan=vegano | fresh=fresco | frozen=congelado | tasty=sabroso | sweet=dulce | salty=salado
   sour=ácido, agrio | bitter=amargo | hungry=con hambre | thirsty=con sed | full=lleno (de comer) | portion=ración
   waiter=camarero | order=pedir (en un restaurante) | tip=propina | book a table=reservar mesa | takeaway=comida para llevar | a can of=una lata de
   a packet of=un paquete de | a slice of=una loncha, una rebanada de | a cup of=una taza de | a glass of=un vaso de | a kilo of=un kilo de | healthy food=comida sana
   junk food=comida basura | go on a diet=ponerse a dieta | be allergic to=ser alérgico a`],
 ["clothes", "Ropa y compras", `
   shirt=camisa | T-shirt=camiseta | trousers=pantalones | jeans=vaqueros | skirt=falda | dress=vestido
   jacket=chaqueta | coat=abrigo | shoes=zapatos | trainers=zapatillas deportivas | hat=sombrero, gorro | size=talla
   try on=probarse | price=precio | cheap=barato | expensive=caro | sale=rebajas | receipt=recibo, tique
   change=cambio (dinero) | cash=efectivo | blouse=blusa | top=top, camiseta | jumper=jersey | sweater=jersey
   cardigan=chaqueta de punto | hoodie=sudadera con capucha | sweatshirt=sudadera | shorts=pantalones cortos | tracksuit=chándal | suit=traje
   tie=corbata | belt=cinturón | socks=calcetines | tights=medias, leotardos | underwear=ropa interior | pyjamas=pijama
   swimsuit=bañador (de mujer) | swimming trunks=bañador (de hombre) | bikini=biquini | raincoat=impermeable | scarf=bufanda | gloves=guantes
   cap=gorra | boots=botas | sandals=sandalias | slippers=zapatillas de estar en casa | high heels=zapatos de tacón | uniform=uniforme
   pocket=bolsillo | sleeve=manga | collar=cuello (de la ropa) | zip=cremallera | button=botón | handbag=bolso
   backpack=mochila | umbrella=paraguas | sunglasses=gafas de sol | watch=reloj (de pulsera) | wear=llevar puesto | put on=ponerse
   take off=quitarse | get dressed=vestirse | change clothes=cambiarse de ropa | fit=quedar bien (de talla) | match=combinar con | go with=pegar con
   too big=demasiado grande | too small=demasiado pequeño | tight=ajustado | loose=suelto, ancho | baggy=holgado | fashionable=de moda
   trendy=moderno | old-fashioned=pasado de moda | casual=informal | formal=formal | smart=elegante | comfortable=cómodo
   striped=de rayas | spotted=de lunares | checked=de cuadros | plain=liso | cotton=algodón | wool=lana
   leather=cuero | silk=seda | fitting room=probador | shop assistant=dependiente | customer=cliente | pay by card=pagar con tarjeta
   pay in cash=pagar en efectivo | discount=descuento | bargain=ganga | label=etiqueta | small size=talla pequeña | medium=mediana
   large=grande | What size are you?=¿Qué talla usas? | Can I try it on?=¿Me lo puedo probar? | It doesn't fit.=No me queda bien. | How much is it?=¿Cuánto cuesta? | refund=devolución del dinero
   exchange=cambiar (un producto) | shopping bag=bolsa de la compra | window shopping=mirar escaparates | clothes shop=tienda de ropa | shoe shop=zapatería | department store=grandes almacenes
   wash=lavar | iron=planchar | dry=secar | fold=doblar | hang up=colgar (ropa) | wardrobe=armario
   new=nuevo | second-hand=de segunda mano | designer=de marca, de diseño | outfit=conjunto (de ropa) | look=estilo, look`],
 ["town", "La ciudad", `
   library=biblioteca | bookshop=librería | chemist's=farmacia | post office=oficina de correos | square=plaza | bridge=puente
   traffic lights=semáforo | pavement=acera | crossroads=cruce | museum=museo | town hall=ayuntamiento | police station=comisaría
   shopping centre=centro comercial | car park=aparcamiento | turn left=gira a la izquierda | go straight on=sigue recto | city=ciudad (grande) | town=ciudad (pequeña), pueblo grande
   village=pueblo | capital=capital | centre=centro | suburbs=afueras | street=calle | road=carretera, calle
   avenue=avenida | main street=calle principal | corner=esquina | roundabout=rotonda | zebra crossing=paso de cebra | traffic=tráfico
   traffic jam=atasco | bus stop=parada de autobús | train station=estación de tren | bus station=estación de autobuses | underground=metro | taxi rank=parada de taxis
   airport=aeropuerto | port=puerto | hospital=hospital | health centre=centro de salud | school=colegio | university=universidad
   church=iglesia | cathedral=catedral | mosque=mezquita | castle=castillo | palace=palacio | monument=monumento
   statue=estatua | fountain=fuente | park=parque | playground=parque infantil | sports centre=polideportivo | stadium=estadio
   swimming pool=piscina | cinema=cine | theatre=teatro | art gallery=galería de arte | restaurant=restaurante | café=cafetería
   bar=bar | pub=pub | hotel=hotel | bank=banco | market=mercado | supermarket=supermercado
   baker's=panadería | butcher's=carnicería | greengrocer's=frutería | newsagent's=quiosco | hairdresser's=peluquería | petrol station=gasolinera
   garage=taller mecánico | factory=fábrica | office block=edificio de oficinas | skyscraper=rascacielos | tourist information=oficina de turismo | fire station=parque de bomberos
   prison=cárcel | cemetery=cementerio | harbour=puerto (pequeño) | old town=casco antiguo | pedestrian street=calle peatonal | neighbourhood=barrio
   area=zona | turn right=gira a la derecha | take the first left=coge la primera a la izquierda | cross the road=cruza la calle | go past=pasa por delante de | opposite=enfrente de
   next to=al lado de | between=entre | near=cerca de | far from=lejos de | in front of=delante de | behind=detrás de
   at the end of=al final de | on the corner of=en la esquina de | around the corner=a la vuelta de la esquina | How do I get to...?=¿Cómo llego a...? | Excuse me, where is...?=Perdone, ¿dónde está...? | lost=perdido
   map=plano, mapa | crowded=abarrotado | busy=concurrido | noisy=ruidoso | quiet=tranquilo | lively=animado
   polluted=contaminado | historic=histórico | population=población | local=local, del barrio | resident=residente | citizen=ciudadano
   council=ayuntamiento (institución) | sign=señal, cartel | pavement café=terraza`],
 ["travel", "Viajes y transporte", `
   trip=viaje, excursión | journey=trayecto | flight=vuelo | passport=pasaporte | luggage=equipaje | ticket=billete
   return ticket=billete de ida y vuelta | platform=andén | timetable=horario | delay=retraso | departure=salida | arrival=llegada
   book=reservar | abroad=en el extranjero | sightseeing=turismo, ver monumentos | campsite=camping | miss the bus=perder el autobús | get on=subir (bus, tren)
   holiday=vacaciones | travel=viajar | tour=recorrido, gira | excursion=excursión | voyage=travesía (en barco) | traveller=viajero
   passenger=pasajero | tourist=turista | transport=transporte | public transport=transporte público | car=coche | bus=autobús
   coach=autocar | train=tren | plane=avión | ship=barco (grande) | boat=barco, barca | ferry=ferri
   bike=bici | motorbike=moto | taxi=taxi | tram=tranvía | underground=metro | station=estación
   airport=aeropuerto | terminal=terminal | gate=puerta de embarque | check in=facturar, hacer el check-in | boarding pass=tarjeta de embarque | board=embarcar
   take off=despegar | land=aterrizar | security=control de seguridad | customs=aduana | visa=visado | ID card=DNI
   single ticket=billete de ida | first class=primera clase | seat=asiento | aisle seat=asiento de pasillo | window seat=asiento de ventanilla | hand luggage=equipaje de mano
   suitcase=maleta | bag=bolsa, bolso | pack=hacer la maleta | unpack=deshacer la maleta | get off=bajar (bus, tren) | get in=subir (coche, taxi)
   get out of=bajar de (coche, taxi) | catch=coger (un transporte) | miss=perder (un transporte) | change trains=hacer transbordo | on time=a la hora | be delayed=llevar retraso
   cancelled=cancelado | destination=destino | route=ruta | distance=distancia | map=mapa | guide=guía (persona)
   guidebook=guía (libro) | driver=conductor | pilot=piloto | flight attendant=auxiliar de vuelo | travel agency=agencia de viajes | package holiday=viaje organizado
   backpacking=viajar de mochilero | hitchhike=hacer autoestop | go on holiday=irse de vacaciones | be on holiday=estar de vacaciones | stay=alojarse | set off=salir (de viaje)
   get to=llegar a | arrive in=llegar a (ciudad, país) | arrive at=llegar a (lugar concreto) | leave for=salir hacia | come back=volver | go back=regresar
   motorway=autopista | petrol=gasolina | fill up=llenar el depósito | park=aparcar | parking space=plaza de aparcamiento | speed limit=límite de velocidad
   seat belt=cinturón de seguridad | rent a car=alquilar un coche | driving licence=carné de conducir | crowded=lleno de gente | jet lag=desfase horario | foreign=extranjero (adj.)
   currency=moneda (de un país) | exchange money=cambiar dinero | explore=explorar | discover=descubrir | adventure=aventura | view=vista
   sights=lugares de interés | by train=en tren | on foot=a pie | return=volver; vuelta | overnight=de noche, durante la noche | direct flight=vuelo directo
   connection=conexión, enlace | airline=aerolínea | cruise=crucero`],
 ["weather", "El tiempo", `
   sunny=soleado | cloudy=nublado | windy=ventoso | foggy=con niebla | rain=lluvia | snow=nieve
   storm=tormenta | thunder=trueno | lightning=relámpago | hot=caluroso | warm=templado | cool=fresco
   freezing=helado | temperature=temperatura | weather forecast=previsión del tiempo | wet=mojado | dry=seco | degrees=grados
   weather=tiempo (meteorológico) | climate=clima | sun=sol | sunshine=luz del sol | cloud=nube | wind=viento
   fog=niebla | mist=neblina | ice=hielo | frost=escarcha | hail=granizo | shower=chubasco
   drizzle=llovizna | heavy rain=lluvia fuerte | rainy=lluvioso | snowy=nevado | stormy=tormentoso | icy=helado (con hielo)
   humid=húmedo | damp=húmedo (frío) | cold=frío | chilly=fresquito | mild=suave, templado | boiling=abrasador
   heat=calor | heatwave=ola de calor | drought=sequía | flood=inundación | hurricane=huracán | tornado=tornado
   rainbow=arcoíris | breeze=brisa | gale=vendaval | blizzard=ventisca | snowflake=copo de nieve | raindrop=gota de lluvia
   puddle=charco | umbrella=paraguas | raincoat=impermeable | wellies=botas de agua | sunscreen=protector solar | forecast=pronóstico
   season=estación (del año) | spring=primavera | summer=verano | autumn=otoño | winter=invierno | it's raining=está lloviendo
   it's snowing=está nevando | it's pouring=está diluviando | clear sky=cielo despejado | blue sky=cielo azul | grey=gris | bright=luminoso, despejado
   dull=gris, apagado | fine=bueno (tiempo) | lovely weather=un tiempo estupendo | awful weather=un tiempo horrible | below zero=bajo cero | minus five=cinco bajo cero
   thermometer=termómetro | Celsius=Celsius | rise=subir | fall=bajar | get warmer=hacer más calor | get colder=hacer más frío
   melt=derretirse | freeze=congelarse | blow=soplar | shine=brillar | pour=llover a cántaros | it's getting dark=está oscureciendo
   sunrise=amanecer | sunset=puesta de sol | daylight=luz del día | shade=sombra | in the shade=a la sombra | in the sun=al sol
   outdoors=al aire libre | indoors=dentro, a cubierto | get wet=mojarse | get sunburnt=quemarse con el sol | soaked=empapado | warm up=entrar en calor
   What's the weather like?=¿Qué tiempo hace? | It's going to rain.=Va a llover. | temperature drops=la temperatura baja | cool down=refrescar | unsettled=inestable | changeable=variable
   thunderstorm=tormenta eléctrica | snowman=muñeco de nieve | sunny spells=intervalos de sol | weather warning=alerta meteorológica | light rain=lluvia débil | strong wind=viento fuerte`],
 ["health", "Salud y cuerpo", `
   head=cabeza | stomach=estómago | back=espalda | arm=brazo | leg=pierna | knee=rodilla
   throat=garganta | a cold=un resfriado | a cough=tos | a temperature=fiebre | headache=dolor de cabeza | toothache=dolor de muelas
   hurt=doler, hacerse daño | medicine=medicina | appointment=cita | ill=enfermo | get better=mejorar | healthy=sano
   illness=enfermedad | disease=enfermedad (grave) | sick=enfermo | feel sick=tener náuseas | be sick=vomitar | flu=gripe
   virus=virus | infection=infección | allergy=alergia | fever=fiebre | sore throat=dolor de garganta | stomach ache=dolor de estómago
   backache=dolor de espalda | earache=dolor de oídos | pain=dolor | ache=doler; dolor | runny nose=mocos | sneeze=estornudar
   cough=toser | blow your nose=sonarse la nariz | dizzy=mareado | weak=débil | tired=cansado | injury=lesión
   injure=lesionar | break your leg=romperse la pierna | sprain=torcerse | bruise=moratón | cut=corte; cortarse | burn=quemadura; quemarse
   blood=sangre | plaster=tirita; escayola | bandage=venda | pill=pastilla | tablet=comprimido | painkiller=analgésico
   antibiotics=antibióticos | prescription=receta (médica) | chemist=farmacéutico | pharmacy=farmacia | doctor=médico | GP=médico de cabecera
   surgery=consulta (del médico) | hospital=hospital | clinic=clínica | patient=paciente | nurse=enfermero | surgeon=cirujano
   operation=operación | ambulance=ambulancia | emergency room=urgencias | check-up=revisión | examine=examinar | treatment=tratamiento
   treat=tratar | cure=curar | heal=curarse (una herida) | recover=recuperarse | get well soon=que te mejores | take medicine=tomar medicina
   see a doctor=ir al médico | make an appointment=pedir cita | What's the matter?=¿Qué te pasa? | I don't feel well.=No me encuentro bien. | It hurts.=Me duele. | unhealthy=poco saludable
   fit=en forma | get fit=ponerse en forma | keep fit=mantenerse en forma | diet=dieta | exercise=ejercicio | sleep well=dormir bien
   stress=estrés | lifestyle=estilo de vida | give up smoking=dejar de fumar | smoke=fumar | alcohol=alcohol | vitamins=vitaminas
   overweight=con sobrepeso | lose weight=adelgazar | put on weight=engordar | health insurance=seguro médico | dentist=dentista | optician=óptico
   glasses=gafas | contact lenses=lentillas | hearing=oído (sentido) | sight=vista (sentido) | blind=ciego | deaf=sordo
   disabled=discapacitado | wheelchair=silla de ruedas | crutches=muletas | pregnant=embarazada | rest=descansar; descanso | stay in bed=guardar cama
   temperature=fiebre; temperatura | thermometer=termómetro | symptom=síntoma | vaccine=vacuna | mental health=salud mental | tooth=diente
   teeth=dientes`],
 ["sport", "Deporte y tiempo libre", `
   team=equipo | match=partido | player=jugador | win=ganar | lose=perder | score=marcar, resultado
   beat=ganar a (un rival) | coach=entrenador | gym=gimnasio | go swimming=ir a nadar | go cycling=ir en bici | play chess=jugar al ajedrez
   hobby=afición | collect=coleccionar | concert=concierto | exhibition=exposición | free time=tiempo libre | join a club=apuntarse a un club
   football=fútbol | basketball=baloncesto | tennis=tenis | volleyball=voleibol | golf=golf | rugby=rugby
   swimming=natación | athletics=atletismo | cycling=ciclismo | running=correr, running | skiing=esquí | surfing=surf
   sailing=vela | climbing=escalada | horse riding=equitación | boxing=boxeo | karate=kárate | yoga=yoga
   dance=baile; bailar | skateboarding=monopatín | ice skating=patinaje sobre hielo | hiking=senderismo | fishing=pesca | camping=acampada
   play football=jugar al fútbol | go running=salir a correr | do yoga=hacer yoga | do karate=hacer kárate | go skiing=ir a esquiar | referee=árbitro
   fan=aficionado | spectator=espectador | champion=campeón | championship=campeonato | competition=competición | tournament=torneo
   race=carrera | final=final | semi-final=semifinal | goal=gol; portería | point=punto | result=resultado
   draw=empate; empatar | winner=ganador | loser=perdedor | medal=medalla | prize=premio | cup=copa
   trophy=trofeo | ball=pelota, balón | racket=raqueta | bat=bate | net=red | pitch=campo (de fútbol)
   court=pista (de tenis) | track=pista (de atletismo) | pool=piscina | stadium=estadio | kit=equipación | helmet=casco
   goalkeeper=portero | captain=capitán | train=entrenar | training=entrenamiento | practise=practicar | warm up=calentar
   compete=competir | kick=dar una patada | throw=lanzar | catch=coger, atrapar | hit=golpear | run=correr
   jump=saltar | swim=nadar | dive=bucear; tirarse de cabeza | fall=caer | first half=primera parte | second half=segunda parte
   extra time=prórroga | penalty=penalti | foul=falta | record=récord | professional=profesional | amateur=aficionado (no profesional)
   team sport=deporte de equipo | leisure=ocio | spare time=tiempo libre | pastime=pasatiempo | board game=juego de mesa | cards=cartas
   puzzle=puzle, rompecabezas | crossword=crucigrama | painting=pintura | photography=fotografía | gardening=jardinería | knitting=hacer punto
   go to the cinema=ir al cine | be good at=ser bueno en | take up=empezar (un hobby) | give up=dejar (un hobby) | keen on=aficionado a | member=socio, miembro
   club=club`],
 ["work", "Trabajo y estudios", `
   job=trabajo, empleo | work=trabajo (incontable) | boss=jefe | colleague=compañero de trabajo | salary=sueldo | earn=ganar (dinero)
   apply for=solicitar | interview=entrevista | part-time=a tiempo parcial | full-time=a jornada completa | degree=título universitario | subject=asignatura
   timetable=horario | homework=deberes | pass an exam=aprobar | fail an exam=suspender | take an exam=hacer un examen | teacher=profesor
   employee=empleado | employer=empresario, empleador | manager=gerente, jefe | staff=personal, plantilla | worker=trabajador | team=equipo
   company=empresa | business=negocio | office=oficina | factory=fábrica | shop=tienda | meeting=reunión
   project=proyecto | task=tarea | deadline=fecha límite | career=carrera profesional | profession=profesión | experience=experiencia
   skill=habilidad | qualification=titulación | CV=currículum | application=solicitud | application form=formulario de solicitud | job advert=oferta de empleo
   candidate=candidato | hire=contratar | employ=emplear | sack=despedir | fire=despedir | resign=dimitir
   retire=jubilarse | promotion=ascenso | get promoted=ascender | wage=sueldo (semanal) | pay=paga; pagar | pay rise=subida de sueldo
   contract=contrato | unemployed=en paro | unemployment=desempleo | look for a job=buscar trabajo | get a job=conseguir trabajo | lose your job=perder el trabajo
   work from home=trabajar desde casa | work overtime=hacer horas extra | shift=turno | night shift=turno de noche | holidays=vacaciones | sick leave=baja por enfermedad
   training course=curso de formación | internship=prácticas | trainee=becario | volunteer=voluntario | self-employed=autónomo | run a business=llevar un negocio
   customer=cliente | client=cliente (de servicios) | product=producto | service=servicio | sell=vender | buy=comprar
   market=mercado | sales=ventas | profit=beneficio | successful=con éxito | hard work=trabajo duro | responsible for=responsable de
   in charge of=a cargo de | work as=trabajar de | work for=trabajar para | busy=ocupado | stressful=estresante | well-paid=bien pagado
   badly paid=mal pagado | full-time job=trabajo a tiempo completo | part-time job=trabajo a tiempo parcial | summer job=trabajo de verano | working hours=horario laboral | desk=escritorio
   computer=ordenador | printer=impresora | photocopy=fotocopia | report=informe | presentation=presentación | email=correo electrónico
   phone call=llamada | appointment=cita | schedule=horario, agenda | organise=organizar | manage=dirigir, gestionar | lead=liderar
   achieve=lograr | goal=objetivo | earn a living=ganarse la vida | retirement=jubilación | pension=pensión | union=sindicato
   strike=huelga | uniform=uniforme | reference=referencia (carta) | apply=presentarse, solicitar`],
 ["tech", "Tecnología y medios", `
   laptop=portátil | screen=pantalla | keyboard=teclado | download=descargar | upload=subir | website=página web
   password=contraseña | charger=cargador | battery=batería | app=aplicación | send a message=mandar un mensaje | post=publicar
   follow=seguir | news=noticias | article=artículo | advert=anuncio | channel=canal | online=en internet
   computer=ordenador | desktop=ordenador de sobremesa | tablet=tableta | smartphone=smartphone | mobile phone=móvil | smartwatch=reloj inteligente
   headphones=auriculares | earphones=auriculares (de botón) | speaker=altavoz | microphone=micrófono | camera=cámara | webcam=cámara web
   mouse=ratón | printer=impresora | scanner=escáner | USB stick=memoria USB | hard drive=disco duro | memory=memoria
   cable=cable | plug in=enchufar | switch on=encender | switch off=apagar | turn up=subir (volumen) | turn down=bajar (volumen)
   charge=cargar | install=instalar | update=actualizar; actualización | delete=borrar | save=guardar | copy=copiar
   paste=pegar | print=imprimir | type=escribir (a máquina) | click=hacer clic | scroll=desplazarse (por la pantalla) | search=buscar
   search engine=buscador | browser=navegador | internet=internet | Wi-Fi=wifi | connection=conexión | offline=sin conexión
   log in=iniciar sesión | log out=cerrar sesión | username=nombre de usuario | account=cuenta | profile=perfil | social media=redes sociales
   share=compartir | like=dar a me gusta | comment=comentario; comentar | follower=seguidor | influencer=influencer | blog=blog
   vlog=videoblog | podcast=pódcast | video call=videollamada | chat=chatear; chat | online game=juego en línea | stream=retransmitir en directo
   subscribe=suscribirse | link=enlace | file=archivo | folder=carpeta | photo=foto | selfie=selfi
   virus=virus | hacker=hacker | data=datos | privacy=privacidad | technology=tecnología | device=dispositivo
   gadget=aparato | invention=invento | digital=digital | software=software | program=programa (informático) | robot=robot
   artificial intelligence=inteligencia artificial | screen time=tiempo de pantalla | newspaper=periódico | magazine=revista | journalist=periodista | headline=titular
   TV programme=programa de televisión | series=serie | broadcast=emitir | radio=radio | media=medios de comunicación | press=prensa
   reporter=reportero | interview=entrevista | crash=bloquearse (el ordenador) | not working=no funciona | out of battery=sin batería | keyboard shortcut=atajo de teclado
   tap=tocar (la pantalla) | swipe=deslizar (el dedo) | touch screen=pantalla táctil | notification=notificación | emoji=emoji`],
 ["nature", "Naturaleza y medio ambiente", `
   environment=medio ambiente | pollution=contaminación | recycle=reciclar | rubbish=basura | plastic=plástico | energy=energía
   save=ahorrar, salvar | waste=desperdiciar | forest=bosque | river=río | lake=lago | coast=costa
   hill=colina | field=campo (terreno) | countryside=el campo | wildlife=fauna | protect=proteger | climate change=cambio climático
   planet=planeta | earth=tierra | world=mundo | nature=naturaleza | landscape=paisaje | mountain=montaña
   valley=valle | desert=desierto | jungle=selva | island=isla | beach=playa | sea=mar
   ocean=océano | wave=ola | sand=arena | rock=roca | stone=piedra | cave=cueva
   volcano=volcán | waterfall=cascada | stream=arroyo | pond=estanque | tree=árbol | flower=flor
   grass=hierba, césped | leaf=hoja | branch=rama | wood=bosque pequeño; madera | plant=planta | seed=semilla
   soil=tierra (para plantas) | sky=cielo | star=estrella | moon=luna | sun=sol | air=aire
   natural resources=recursos naturales | water=agua | electricity=electricidad | solar energy=energía solar | wind farm=parque eólico | renewable=renovable
   fuel=combustible | oil=petróleo | gas=gas | coal=carbón | global warming=calentamiento global | greenhouse effect=efecto invernadero
   carbon footprint=huella de carbono | emissions=emisiones | pollute=contaminar | polluted=contaminado | air pollution=contaminación del aire | litter=basura (en la calle)
   bin=papelera | recycling bin=contenedor de reciclaje | glass=vidrio | paper=papel | cardboard=cartón | reuse=reutilizar
   reduce=reducir | waste water=malgastar agua | save energy=ahorrar energía | turn off=apagar | environmentally friendly=ecológico | green=verde, ecológico
   organic=ecológico (alimento) | endangered species=especie en peligro | extinct=extinguido | habitat=hábitat | national park=parque nacional | zoo=zoo
   farm=granja | crops=cultivos | grow=cultivar; crecer | cut down trees=talar árboles | deforestation=deforestación | natural disaster=desastre natural
   earthquake=terremoto | fire=incendio | flood=inundación | drought=sequía | melt=derretirse | ice cap=casquete polar
   sea level=nivel del mar | future generations=generaciones futuras | campaign=campaña | protest=protestar | volunteer=voluntario | nature reserve=reserva natural
   path=sendero | go for a hike=ir de excursión | picnic=pícnic | sunset=puesta de sol | fresh air=aire puro | wild=salvaje
   beautiful=precioso | peaceful=tranquilo | dangerous=peligroso | clean=limpio | dirty=sucio | bottle bank=contenedor de vidrio
   plastic bag=bolsa de plástico | single-use=de un solo uso`],
 ["verbs", "Verbos imprescindibles", `
   borrow=pedir prestado | lend=prestar | bring=traer | carry=llevar (en brazos) | choose=elegir | decide=decidir
   explain=explicar | forget=olvidar | remember=acordarse | remind=recordar (a alguien) | agree=estar de acuerdo | arrive=llegar
   leave=irse, dejar | spend=gastar, pasar (tiempo) | wait for=esperar a | look for=buscar | find=encontrar | hope=esperar (desear)
   ask=preguntar; pedir | answer=responder | tell=decir, contar | say=decir | speak=hablar (un idioma) | talk=hablar, charlar
   listen=escuchar | hear=oír | see=ver | watch=mirar, ver | look at=mirar | feel=sentir
   think=pensar | know=saber, conocer | understand=entender | believe=creer | mean=significar; querer decir | want=querer
   need=necesitar | like=gustar | prefer=preferir | try=intentar; probar | start=empezar | begin=comenzar
   finish=terminar | stop=parar | continue=continuar | keep=guardar; seguir | change=cambiar | become=convertirse en, llegar a ser
   get=conseguir; llegar; ponerse | give=dar | take=coger, llevar | put=poner | send=enviar | receive=recibir
   buy=comprar | sell=vender | pay=pagar | cost=costar | open=abrir | close=cerrar
   shut=cerrar | turn on=encender | turn off=apagar | go=ir | come=venir | walk=andar
   run=correr | drive=conducir | ride=montar (bici, caballo) | fly=volar | travel=viajar | stay=quedarse
   live=vivir | work=trabajar | study=estudiar | learn=aprender | teach=enseñar | read=leer
   write=escribir | draw=dibujar | play=jugar; tocar (instrumento) | sing=cantar | win=ganar (competición) | lose=perder
   meet=conocer; quedar con | visit=visitar | invite=invitar | call=llamar | help=ayudar | show=mostrar
   use=usar | make=hacer, fabricar | do=hacer | build=construir | break=romper | fix=arreglar
   clean=limpiar | wash=lavar | cook=cocinar | eat=comer | drink=beber | sleep=dormir
   wake=despertar | sit=sentarse | stand=estar de pie | lie=tumbarse; mentir | wear=llevar puesto | hold=sujetar
   throw=tirar, lanzar | pull=tirar de | push=empujar | lift=levantar | drop=dejar caer | fall=caer
   hit=golpear | move=mover; mudarse | follow=seguir | lead=guiar | happen=pasar, ocurrir | seem=parecer
   appear=aparecer | disappear=desaparecer | allow=permitir | let=dejar | refuse=negarse | offer=ofrecer
   suggest=sugerir | recommend=recomendar | promise=prometer | plan=planear | prepare=preparar | imagine=imaginar
   wonder=preguntarse | guess=adivinar | compare=comparar | describe=describir | discuss=hablar de, debatir | complain=quejarse
   thank=dar las gracias | enjoy=disfrutar | prefer to=preferir (hacer) | manage to=conseguir (hacer) | fail=suspender; fallar | succeed=tener éxito
   improve=mejorar | increase=aumentar | reduce=reducir | grow=crecer | die=morir | kill=matar
   save=ahorrar; salvar`],
 ["jobs", "Profesiones", `
   doctor=médico | nurse=enfermero | lawyer=abogado | engineer=ingeniero | farmer=granjero | firefighter=bombero
   police officer=policía | waiter=camarero | chef=cocinero (jefe) | shop assistant=dependiente | mechanic=mecánico | builder=albañil
   plumber=fontanero | hairdresser=peluquero | journalist=periodista | pilot=piloto | dentist=dentista | receptionist=recepcionista
   teacher=profesor | lecturer=profesor (universidad) | student=estudiante | scientist=científico | researcher=investigador | architect=arquitecto
   designer=diseñador | artist=artista | painter=pintor | photographer=fotógrafo | musician=músico | singer=cantante
   actor=actor | actress=actriz | writer=escritor | author=autor | editor=editor | reporter=reportero
   presenter=presentador | programmer=programador | software developer=desarrollador de software | IT technician=técnico informático | electrician=electricista | carpenter=carpintero
   painter and decorator=pintor de brocha gorda | gardener=jardinero | cleaner=limpiador | cook=cocinero | baker=panadero | butcher=carnicero
   fisherman=pescador | vet=veterinario | pharmacist=farmacéutico | surgeon=cirujano | psychologist=psicólogo | physiotherapist=fisioterapeuta
   paramedic=técnico de emergencias | soldier=soldado | security guard=vigilante de seguridad | detective=detective | judge=juez | politician=político
   accountant=contable | banker=banquero | businessman=hombre de negocios | businesswoman=mujer de negocios | manager=director, gerente | secretary=secretario
   assistant=ayudante | salesperson=vendedor | cashier=cajero | bus driver=conductor de autobús | taxi driver=taxista | lorry driver=camionero
   postman=cartero | delivery driver=repartidor | flight attendant=auxiliar de vuelo | tour guide=guía turístico | translator=traductor | interpreter=intérprete
   librarian=bibliotecario | childminder=cuidador de niños | nanny=niñera | carer=cuidador | social worker=trabajador social | beautician=esteticista
   model=modelo | athlete=atleta | footballer=futbolista | coach=entrenador | instructor=monitor | waitress=camarera
   barman=camarero (de barra) | housewife=ama de casa | unemployed=desempleado | retired=jubilado | boss=jefe | colleague=compañero
   work in a hospital=trabajar en un hospital | work outdoors=trabajar al aire libre | work with children=trabajar con niños | look after patients=cuidar a pacientes | repair cars=reparar coches | serve customers=atender a clientes
   design buildings=diseñar edificios | build houses=construir casas | grow vegetables=cultivar verduras | deliver letters=repartir cartas | What do you do?=¿A qué te dedicas? | I'm a nurse.=Soy enfermero.
   job interview=entrevista de trabajo | well-paid job=trabajo bien pagado | dream job=trabajo soñado | qualified=cualificado | experienced=con experiencia | creative job=trabajo creativo
   dangerous job=trabajo peligroso | tiring=cansado (que cansa) | rewarding=gratificante | uniform=uniforme | skills=habilidades | career=carrera profesional
   apprentice=aprendiz | scientist's lab=laboratorio | vet's=clínica veterinaria`],
 ["animals", "Animales", `
   dog=perro | cat=gato | horse=caballo | cow=vaca | sheep=oveja | pig=cerdo
   hen=gallina | rabbit=conejo | mouse=ratón | bird=pájaro | fish=pez | snake=serpiente
   bear=oso | monkey=mono | lion=león | elephant=elefante | insect=insecto | bee=abeja
   puppy=cachorro | kitten=gatito | pet=mascota | goldfish=pez de colores | hamster=hámster | parrot=loro
   tortoise=tortuga (de tierra) | turtle=tortuga (de mar) | duck=pato | goose=ganso | chicken=pollo, gallina | cockerel=gallo
   goat=cabra | donkey=burro | bull=toro | calf=ternero | lamb=cordero | deer=ciervo
   fox=zorro | wolf=lobo | squirrel=ardilla | hedgehog=erizo | rat=rata | bat=murciélago
   owl=búho | eagle=águila | pigeon=paloma | seagull=gaviota | swan=cisne | penguin=pingüino
   frog=rana | lizard=lagarto | crocodile=cocodrilo | tiger=tigre | leopard=leopardo | giraffe=jirafa
   zebra=cebra | camel=camello | kangaroo=canguro | gorilla=gorila | hippo=hipopótamo | rhino=rinoceronte
   panda=panda | polar bear=oso polar | whale=ballena | dolphin=delfín | shark=tiburón | octopus=pulpo
   crab=cangrejo | jellyfish=medusa | butterfly=mariposa | fly=mosca | mosquito=mosquito | ant=hormiga
   spider=araña | wasp=avispa | beetle=escarabajo | worm=gusano | snail=caracol | tail=cola
   wing=ala | feather=pluma | fur=pelo, pelaje | paw=pata | claw=garra | beak=pico
   horn=cuerno | shell=caparazón, concha | nest=nido | cage=jaula | zoo=zoo | farm animals=animales de granja
   wild animals=animales salvajes | bark=ladrar | miaow=maullar | bite=morder | sting=picar (abeja) | feed=dar de comer
   walk the dog=sacar al perro | vet=veterinario | lay eggs=poner huevos | hunt=cazar | hide=esconderse | endangered=en peligro de extinción
   mammal=mamífero | reptile=reptil | creature=criatura | species=especie | herd=manada (de vacas) | flock=bandada; rebaño
   pack=manada (de lobos) | tame=domesticado | fierce=feroz | harmless=inofensivo | poisonous=venenoso | furry=peludo
   cute=mono | pet food=comida para mascotas | dog lead=correa | animal rights=derechos de los animales | hunter=cazador | prey=presa`],
 ["body", "El cuerpo", `
   face=cara | eye=ojo | ear=oreja | nose=nariz | mouth=boca | tooth=diente
   hair=pelo | neck=cuello | shoulder=hombro | hand=mano | finger=dedo (de la mano) | foot=pie
   toe=dedo del pie | chest=pecho | skin=piel | heart=corazón | brain=cerebro | blood=sangre
   head=cabeza | forehead=frente | cheek=mejilla | chin=barbilla | lips=labios | tongue=lengua
   eyebrow=ceja | eyelashes=pestañas | eyelid=párpado | jaw=mandíbula | beard=barba | throat=garganta
   arm=brazo | elbow=codo | wrist=muñeca | palm=palma | thumb=pulgar | nail=uña
   fist=puño | back=espalda | waist=cintura | hip=cadera | stomach=estómago, barriga | belly=barriga
   bottom=trasero | leg=pierna | thigh=muslo | knee=rodilla | ankle=tobillo | heel=talón
   feet=pies | toes=dedos del pie | muscle=músculo | bone=hueso | joint=articulación | lungs=pulmones
   liver=hígado | kidney=riñón | nerve=nervio | vein=vena | spine=columna | skull=cráneo
   ribs=costillas | body=cuerpo | senses=sentidos | sight=vista | hearing=oído | smell=olfato
   taste=gusto | touch=tacto | breathe=respirar | breath=aliento, respiración | sweat=sudar; sudor | shake=temblar; agitar
   nod=asentir con la cabeza | shake your head=negar con la cabeza | wink=guiñar | blink=parpadear | yawn=bostezar | stretch=estirarse
   bend=doblarse, agacharse | kneel=arrodillarse | clap=aplaudir | wave=saludar con la mano | point=señalar | scratch=rascarse
   hold hands=darse la mano (ir cogidos) | shake hands=darse la mano (saludar) | left-handed=zurdo | right-handed=diestro | tall=alto | height=estatura
   weight=peso | size=talla | figure=figura | posture=postura | tattoo=tatuaje | piercing=piercing
   scar=cicatriz | mole=lunar | spot=grano | haircut=corte de pelo | ponytail=coleta | plait=trenza
   fringe=flequillo | make-up=maquillaje | shampoo=champú | soap=jabón | toothbrush=cepillo de dientes | toothpaste=pasta de dientes
   comb=peine | brush=cepillo | razor=cuchilla de afeitar`],
 ["school", "Colegio y estudios", `
   classroom=aula | whiteboard=pizarra | pencil=lápiz | rubber=goma de borrar | ruler=regla | notebook=cuaderno
   dictionary=diccionario | maths=matemáticas | history=historia | geography=geografía | science=ciencias | term=trimestre
   break=recreo | mark=nota (de un examen) | uniform=uniforme | head teacher=director (de colegio) | revise=repasar | learn by heart=aprender de memoria
   primary school=colegio de primaria | secondary school=instituto | nursery school=guardería | state school=colegio público | private school=colegio privado | boarding school=internado
   college=centro de estudios superiores | university=universidad | pupil=alumno | student=estudiante | classmate=compañero de clase | teacher=profesor
   tutor=tutor | lesson=clase (la sesión) | class=clase (el grupo) | course=curso | year=curso (año) | timetable=horario
   subject=asignatura | English=inglés | Spanish=lengua española | physics=física | chemistry=química | biology=biología
   art=dibujo, arte | music=música | PE=educación física | IT=informática | literature=literatura | economics=economía
   foreign language=idioma extranjero | exam=examen | test=prueba | homework=deberes | project=trabajo, proyecto | essay=redacción
   exercise=ejercicio | question=pregunta | answer=respuesta | mistake=error | grade=nota | marks=notas, puntos
   pass=aprobar | fail=suspender | retake=repetir (un examen) | study for=estudiar para | cheat=copiar (en un examen) | take notes=tomar apuntes
   practise=practicar | memorise=memorizar | revision=repaso | textbook=libro de texto | exercise book=cuaderno de ejercicios | pen=bolígrafo
   pencil case=estuche | sharpener=sacapuntas | scissors=tijeras | glue=pegamento | calculator=calculadora | schoolbag=mochila del colegio
   desk=pupitre | blackboard=pizarra | projector=proyector | library=biblioteca | laboratory=laboratorio | gym=gimnasio
   playground=patio | canteen=comedor | lunch break=recreo de la comida | bell=timbre | attendance=asistencia | absent=ausente
   be late for class=llegar tarde a clase | raise your hand=levantar la mano | pay attention=prestar atención | behave=portarse bien | punishment=castigo | detention=castigo (quedarse después)
   rules=normas | school trip=excursión del colegio | school year=curso escolar | holidays=vacaciones | certificate=certificado | degree=título universitario
   graduate=licenciarse | scholarship=beca | tuition=clases (particulares) | private lessons=clases particulares | online course=curso en línea | knowledge=conocimiento
   educate=educar | education=educación | learn=aprender | remember=recordar | forget=olvidar | difficult=difícil
   easy=fácil | head of year=jefe de estudios | enrol=matricularse`],
 ["money", "Dinero y banco", `
   coin=moneda | note=billete (dinero) | credit card=tarjeta de crédito | cash machine=cajero automático | bank account=cuenta bancaria | pocket money=paga
   wallet=cartera | purse=monedero | bill=factura | cost=costar | afford=permitirse (pagar) | owe=deber (dinero)
   pay back=devolver (dinero) | discount=descuento | refund=reembolso | save money=ahorrar dinero | spend money=gastar dinero | price=precio
   money=dinero | cash=efectivo | change=cambio, vuelta | euro=euro | pound=libra | cent=céntimo
   penny=penique | debit card=tarjeta de débito | PIN number=número PIN | pay=pagar | pay for=pagar algo | buy=comprar
   sell=vender | spend=gastar | waste=malgastar | save=ahorrar | savings=ahorros | earn=ganar (dinero)
   lend=prestar | borrow=pedir prestado | loan=préstamo | debt=deuda | in debt=endeudado | bank=banco
   bank manager=director de banco | cashier=cajero | withdraw=sacar (dinero) | deposit=ingresar; depósito | transfer=transferencia; transferir | balance=saldo
   statement=extracto | interest=intereses | mortgage=hipoteca | budget=presupuesto | income=ingresos | salary=sueldo
   tax=impuesto | receipt=recibo, tique | invoice=factura | charge=cobrar | fee=tarifa, cuota | fine=multa
   tip=propina | expensive=caro | cheap=barato | free=gratis | good value=buena relación calidad-precio | worth=que vale
   rich=rico | poor=pobre | wealthy=adinerado | well-off=acomodado | broke=sin blanca | can't afford=no poder permitirse
   cost a fortune=costar un dineral | half price=a mitad de precio | special offer=oferta especial | sale=rebajas | bargain=ganga | buy online=comprar por internet
   online banking=banca en línea | exchange rate=tipo de cambio | currency=moneda, divisa | foreign currency=moneda extranjera | piggy bank=hucha | banknote=billete
   coins=monedas | cheque=cheque | contactless=sin contacto | account number=número de cuenta | open an account=abrir una cuenta | ATM=cajero automático
   price tag=etiqueta del precio | How much does it cost?=¿Cuánto cuesta? | Can I pay by card?=¿Puedo pagar con tarjeta? | keep the change=quédese con el cambio | make money=ganar dinero | lose money=perder dinero
   raise money=recaudar dinero | charity=organización benéfica | donate=donar | economy=economía | financial=financiero | value=valor
   expense=gasto | pocket=bolsillo | share=parte; compartir | split the bill=pagar a medias | bet=apostar | lottery=lotería`],
 ["entertainment", "Cine, música y ocio", `
   film=película | actor=actor | director=director (de cine) | audience=público | scene=escena | ticket office=taquilla
   band=grupo (de música) | singer=cantante | song=canción | stage=escenario | show=espectáculo | comedy=comedia
   horror film=película de miedo | documentary=documental | cartoon=dibujos animados | novel=novela | character=personaje | festival=festival
   cinema=cine | movie=película | action film=película de acción | romantic comedy=comedia romántica | science fiction=ciencia ficción | thriller=thriller, película de suspense
   animated film=película de animación | musical=musical | western=wéstern | drama=drama | soap opera=telenovela | reality show=programa de telerrealidad
   quiz show=concurso | chat show=programa de entrevistas | cast=reparto | star=estrella | hero=héroe | villain=villano
   plot=argumento | ending=final | happy ending=final feliz | review=crítica | critic=crítico | subtitles=subtítulos
   dubbed=doblado | trailer=tráiler | screen=pantalla | row=fila | seat=butaca, asiento | popcorn=palomitas
   ticket=entrada | box office=taquilla | premiere=estreno | sequel=secuela | special effects=efectos especiales | soundtrack=banda sonora
   music=música | pop music=música pop | rock=rock | classical music=música clásica | jazz=jazz | album=álbum
   track=canción, pista | lyrics=letra (de canción) | musician=músico | guitar=guitarra | piano=piano | drums=batería
   violin=violín | choir=coro | orchestra=orquesta | conductor=director de orquesta | gig=concierto (pequeño) | tour=gira
   perform=actuar | performance=actuación | play=obra de teatro | comedian=humorista | act=actuar; acto | rehearsal=ensayo
   applause=aplausos | clap=aplaudir | exhibition=exposición | gallery=galería | painting=cuadro | sculpture=escultura
   artist=artista | book=libro | fiction=ficción | non-fiction=no ficción | biography=biografía | poem=poema
   poetry=poesía | author=autor | chapter=capítulo | bestseller=superventas | magazine=revista | comic=cómic
   video game=videojuego | player=jugador | level=nivel | nightclub=discoteca | party=fiesta | carnival=carnaval
   parade=desfile | fireworks=fuegos artificiales | circus=circo | theme park=parque temático | fair=feria | entertaining=entretenido
   funny=divertido | scary=de miedo | moving=conmovedor | exciting=emocionante | boring=aburrido | famous=famoso
   well-known=conocido | go out=salir | watch a film=ver una película | listen to the radio=escuchar la radio | What's on?=¿Qué ponen? | book tickets=reservar entradas
   sold out=agotado | streaming service=plataforma de streaming`],
 ["hotel", "Hotel y vacaciones", `
   reception=recepción | single room=habitación individual | double room=habitación doble | key=llave | lift=ascensor | towel=toalla
   swimming pool=piscina | suitcase=maleta | guidebook=guía (libro) | tourist=turista | souvenir=recuerdo (objeto) | map=mapa
   sunglasses=gafas de sol | suncream=crema solar | check out=dejar el hotel | full board=pensión completa | view=vista | reservation=reserva
   hotel=hotel | hostel=albergue | bed and breakfast=pensión con desayuno | guesthouse=casa de huéspedes | campsite=camping | tent=tienda de campaña
   caravan=caravana | resort=complejo turístico | apartment=apartamento | accommodation=alojamiento | room=habitación | twin room=habitación con dos camas
   family room=habitación familiar | suite=suite | en suite=con baño propio | room service=servicio de habitaciones | receptionist=recepcionista | porter=botones
   guest=huésped | manager=director | cleaner=camarera de pisos | check in=registrarse | book=reservar | booking=reserva
   confirm=confirmar | cancel=cancelar | available=disponible | vacancies=habitaciones libres | fully booked=completo | half board=media pensión
   bed and breakfast rate=alojamiento y desayuno | all-inclusive=todo incluido | price per night=precio por noche | deposit=fianza, depósito | key card=tarjeta llave | floor=planta
   stairs=escaleras | corridor=pasillo | balcony=balcón | sea view=vistas al mar | air conditioning=aire acondicionado | heating=calefacción
   safe=caja fuerte | minibar=minibar | hairdryer=secador de pelo | sheets=sábanas | pillow=almohada | blanket=manta
   soap=jabón | shampoo=champú | restaurant=restaurante | breakfast included=desayuno incluido | buffet=bufé | gym=gimnasio
   spa=spa | sauna=sauna | beach=playa | sunbed=tumbona | umbrella=sombrilla | swim=nadar
   sunbathe=tomar el sol | relax=relajarse | go sightseeing=hacer turismo | excursion=excursión | tour guide=guía turístico | postcard=postal
   camera=cámara | photos=fotos | passport=pasaporte | luggage=equipaje | backpack=mochila | lost property=objetos perdidos
   complaint=queja | complain=quejarse | wake-up call=llamada para despertar | Do you have a room?=¿Tiene una habitación? | I'd like to book a room.=Querría reservar una habitación. | What time is breakfast?=¿A qué hora es el desayuno?
   for two nights=para dos noches | noisy=ruidoso | clean=limpio | comfortable=cómodo | luxury=de lujo | budget=económico
   crowded=lleno | peaceful=tranquilo | holiday=vacaciones | summer holiday=vacaciones de verano | day trip=excursión de un día | travel insurance=seguro de viaje
   currency exchange=cambio de moneda | local food=comida local | traditional=tradicional | landmark=monumento emblemático`],
 ["cooking", "Cocinar y la cocina", `
   boil=hervir | fry=freír | bake=hornear | roast=asar | cut=cortar | chop=picar
   mix=mezclar | peel=pelar | frying pan=sartén | saucepan=cazo | oven=horno | plate=plato
   bowl=cuenco | fork=tenedor | knife=cuchillo | spoon=cuchara | glass=vaso | recipe=receta
   cook=cocinar | cooker=cocina (aparato) | stove=fogón | hob=placa (de cocina) | grill=parrilla, grill; asar a la parrilla | toaster=tostadora
   kettle=hervidor | blender=batidora | fridge=nevera | freezer=congelador | microwave=microondas | dishwasher=lavavajillas
   sink=fregadero | cupboard=armario | kitchen=cocina (habitación) | pan=cazo, sartén | pot=olla | tray=bandeja
   baking tray=bandeja de horno | lid=tapa | cup=taza | mug=taza grande | saucer=platillo | teaspoon=cucharilla
   tablespoon=cuchara sopera | chopsticks=palillos | napkin=servilleta | tablecloth=mantel | jug=jarra | bottle=botella
   jar=tarro | can opener=abrelatas | corkscrew=sacacorchos | chopping board=tabla de cortar | grater=rallador | whisk=batir; batidor
   ingredients=ingredientes | cookbook=libro de cocina | slice=cortar en lonchas; loncha | grate=rallar | stir=remover | beat=batir
   add=añadir | pour=echar, verter | melt=derretir | heat=calentar | warm up=calentar (comida) | cool=enfriar
   freeze=congelar | defrost=descongelar | steam=cocinar al vapor | toast=tostar; tostada | serve=servir | taste=probar; saber
   smell=oler | burn=quemar | wash=lavar | drain=escurrir | spread=untar | season=sazonar
   weigh=pesar | measure=medir | boiled=hervido | fried=frito | baked=al horno | grilled=a la plancha
   raw=crudo | cooked=cocinado | rare=poco hecho | well done=muy hecho | homemade=casero | fresh=fresco
   ripe=maduro | tasty=sabroso | tasteless=soso | crunchy=crujiente | creamy=cremoso | hot=caliente; picante
   cold=frío | sauce=salsa | dressing=aliño | herbs=hierbas | spices=especias | olive oil=aceite de oliva
   dough=masa | stew=guiso | omelette=tortilla francesa | Spanish omelette=tortilla de patatas | rice dish=arroz (plato) | lay the table=poner la mesa
   clear the table=quitar la mesa | wash up=fregar | do the dishes=fregar los platos | leftovers=sobras | meal=comida | recipe book=recetario
   chef=chef | kitchen roll=papel de cocina | apron=delantal | oven glove=manopla de cocina | cut into pieces=cortar en trozos | bring to the boil=llevar a ebullición
   for ten minutes=durante diez minutos`],
 ["adjectives", "Adjetivos opuestos", `
   big=grande | small=pequeño | long=largo | heavy=pesado | light=ligero | easy=fácil
   difficult=difícil | early=temprano | late=tarde | empty=vacío | full=lleno | loud=ruidoso
   quiet=tranquilo, silencioso | safe=seguro | dangerous=peligroso | clean=limpio | dirty=sucio | strong=fuerte
   weak=débil | rich=rico | poor=pobre | large=grande | huge=enorme | tiny=diminuto
   short=corto; bajo | tall=alto | wide=ancho | narrow=estrecho | deep=profundo | shallow=poco profundo
   thick=grueso | thin=delgado, fino | high=alto (montaña, precio) | low=bajo | fast=rápido | slow=lento
   quick=rápido (en poco tiempo) | hot=caliente | cold=frío | warm=templado | cool=fresco | wet=mojado
   dry=seco | hard=duro; difícil | soft=blando, suave | smooth=liso | rough=áspero | sharp=afilado
   blunt=desafilado | old=viejo | new=nuevo | young=joven | modern=moderno | ancient=antiguo
   fresh=fresco | stale=rancio, duro (pan) | good=bueno | bad=malo | better=mejor | worse=peor
   right=correcto | wrong=equivocado | true=verdadero | false=falso | possible=posible | impossible=imposible
   cheap=barato | expensive=caro | beautiful=bonito | ugly=feo | happy=feliz | sad=triste
   interesting=interesante | boring=aburrido | important=importante | unimportant=sin importancia | necessary=necesario | useful=útil
   useless=inútil | same=igual, mismo | different=diferente | similar=parecido | common=común | rare=raro, poco común
   usual=habitual | unusual=poco habitual | normal=normal | strange=extraño | famous=famoso | unknown=desconocido
   busy=ocupado | free=libre | open=abierto | closed=cerrado | near=cerca | far=lejos
   correct=correcto | incorrect=incorrecto | polite=educado | rude=maleducado | tidy=ordenado | untidy=desordenado
   comfortable=cómodo | uncomfortable=incómodo | crowded=abarrotado | bright=luminoso | dark=oscuro | healthy=sano
   unhealthy=poco sano | noisy=ruidoso | silent=silencioso | simple=sencillo | complicated=complicado | clear=claro
   confusing=confuso | public=público | private=privado | real=real | fake=falso (imitación) | perfect=perfecto
   terrible=terrible | excellent=excelente | awful=horrible | fantastic=fantástico | wonderful=maravilloso | amazing=increíble
   brilliant=genial | horrible=horrible | lovely=encantador | nice=bonito, agradable | great=estupendo | fine=bien
   okay=vale, regular | wild=salvaje | tame=manso | alive=vivo | dead=muerto | awake=despierto
   asleep=dormido | whole=entero | broken=roto | fixed=arreglado`],
 ["communication", "Teléfono y comunicación", `
   phone number=número de teléfono | message=mensaje | text=mandar un mensaje (SMS) | voicemail=buzón de voz | hang up=colgar | answer the phone=coger el teléfono
   busy=ocupado (la línea) | signal=cobertura | email address=dirección de correo | attachment=archivo adjunto | reply=responder | letter=carta
   stamp=sello | envelope=sobre | postcard=postal | address=dirección (de casa) | phone=teléfono | mobile=móvil
   landline=teléfono fijo | call=llamar; llamada | ring=llamar por teléfono | phone back=devolver la llamada | call back=volver a llamar | hold on=esperar (al teléfono)
   hang on=espera un momento | put through=pasar con (al teléfono) | leave a message=dejar un mensaje | take a message=tomar nota de un recado | missed call=llamada perdida | ringtone=tono de llamada
   engaged=comunicando | no signal=sin cobertura | top up=recargar (saldo) | contract=contrato | text message=mensaje de texto | send=enviar
   receive=recibir | forward=reenviar | delete=borrar | reply all=responder a todos | inbox=bandeja de entrada | spam=correo basura
   subject line=asunto | Dear...=Querido..., Estimado... | Best wishes=Un saludo | Love=Un abrazo, besos (al final) | Yours sincerely=Atentamente | post=correo postal; enviar por correo
   postbox=buzón (de correos) | letterbox=buzón (de casa) | parcel=paquete | package=paquete | postcode=código postal | deliver=entregar
   delivery=entrega, envío | courier=mensajero | by post=por correo | write back=contestar (por escrito) | get in touch=ponerse en contacto | keep in touch=mantener el contacto
   contact=contactar; contacto | conversation=conversación | chat=charla; charlar | discussion=debate, conversación | talk=hablar; charla | speak up=hablar más alto
   explain=explicar | mention=mencionar | announce=anunciar | inform=informar | warn=advertir | advise=aconsejar
   request=pedir; petición | invite=invitar | invitation=invitación | accept=aceptar | decline=rechazar | agree=estar de acuerdo
   disagree=no estar de acuerdo | argue=discutir | apologise=disculparse | thank=agradecer | greet=saludar | introduce=presentar
   interrupt=interrumpir | repeat=repetir | spell=deletrear | pronounce=pronunciar | translate=traducir | language=idioma
   accent=acento | message app=aplicación de mensajería | voice message=mensaje de voz | video call=videollamada | group chat=chat de grupo | social network=red social
   online=en línea | notice=aviso, anuncio | sign=cartel | poster=póster | leaflet=folleto | note=nota
   card=tarjeta | greeting card=tarjeta de felicitación | form=formulario | fill in=rellenar | signature=firma | Can I speak to...?=¿Puedo hablar con...?
   Who's calling?=¿De parte de quién? | Sorry, wrong number.=Perdón, me he equivocado. | I'll call you back.=Te vuelvo a llamar. | Speak soon!=¡Hablamos pronto! | Write soon!=¡Escríbeme pronto! | body language=lenguaje corporal
   gesture=gesto | whisper=susurrar | shout=gritar | communicate=comunicarse | news=noticias | gossip=cotilleo`],
 ["countries", "Países y nacionalidades", `
   Spain=España | Spanish=español | England=Inglaterra | English=inglés | the UK=el Reino Unido | British=británico
   France=Francia | French=francés | Germany=Alemania | German=alemán | Italy=Italia | Italian=italiano
   Portuguese=portugués | the USA=Estados Unidos | American=estadounidense | Chinese=chino | Japan=Japón | Japanese=japonés
   Greece=Grecia | Greek=griego | Ireland=Irlanda | Irish=irlandés | Scotland=Escocia | Scottish=escocés
   Wales=Gales | Welsh=galés | Portugal=Portugal | the Netherlands=Países Bajos | Dutch=neerlandés | Belgium=Bélgica
   Belgian=belga | Switzerland=Suiza | Swiss=suizo | Austria=Austria | Austrian=austriaco | Sweden=Suecia
   Swedish=sueco | Norway=Noruega | Norwegian=noruego | Denmark=Dinamarca | Danish=danés | Finland=Finlandia
   Finnish=finlandés | Poland=Polonia | Polish=polaco | Russia=Rusia | Russian=ruso | Ukraine=Ucrania
   Ukrainian=ucraniano | Turkey=Turquía | Turkish=turco | Morocco=Marruecos | Moroccan=marroquí | Egypt=Egipto
   Egyptian=egipcio | South Africa=Sudáfrica | South African=sudafricano | Nigeria=Nigeria | Nigerian=nigeriano | China=China
   India=India | Indian=indio | Pakistan=Pakistán | Korea=Corea | Korean=coreano | Thailand=Tailandia
   Thai=tailandés | Vietnam=Vietnam | Vietnamese=vietnamita | Australia=Australia | Australian=australiano | New Zealand=Nueva Zelanda
   Canada=Canadá | Canadian=canadiense | Mexico=México | Mexican=mexicano | Brazil=Brasil | Brazilian=brasileño
   Argentina=Argentina | Argentinian=argentino | Colombia=Colombia | Colombian=colombiano | Peru=Perú | Peruvian=peruano
   Chile=Chile | Chilean=chileno | Cuba=Cuba | Cuban=cubano | Venezuela=Venezuela | Venezuelan=venezolano
   Arabic=árabe (idioma) | Europe=Europa | European=europeo | Africa=África | African=africano | Asia=Asia
   Asian=asiático | America=América | South America=Sudamérica | North America=Norteamérica | Latin America=Latinoamérica | country=país
   nationality=nacionalidad | language=idioma | capital city=capital | border=frontera | flag=bandera | abroad=en el extranjero
   foreigner=extranjero (persona) | native speaker=hablante nativo | mother tongue=lengua materna | bilingual=bilingüe | Where are you from?=¿De dónde eres? | I'm from Spain.=Soy de España.
   the Mediterranean=el Mediterráneo | the Atlantic=el Atlántico | the Pacific=el Pacífico | continent=continente | the European Union=la Unión Europea | the Netherlands' capital=la capital de los Países Bajos
   London=Londres | Paris=París | Rome=Roma | Lisbon=Lisboa | Athens=Atenas | Moscow=Moscú
   Brussels=Bruselas | Vienna=Viena`],
 ["emergencies", "Emergencias y problemas", `
   accident=accidente | ambulance=ambulancia | fire=incendio | help!=¡socorro! | thief=ladrón | burglar=ladrón (de casas)
   injured=herido | lost=perdido | emergency=emergencia | broken=roto | witness=testigo | crash=choque
   first aid=primeros auxilios | rescue=rescatar | dangerous=peligroso | fall over=caerse | bleed=sangrar | emergency services=servicios de emergencia
   call 112=llamar al 112 | police=policía | police car=coche patrulla | fire engine=camión de bomberos | firefighter=bombero | paramedic=técnico sanitario
   doctor=médico | hospital=hospital | first aid kit=botiquín | injury=herida, lesión | wound=herida | hurt=hacerse daño; herido
   cut=corte | burn=quemadura | bruise=moratón | broken arm=brazo roto | unconscious=inconsciente | breathe=respirar
   heart attack=infarto | faint=desmayarse | bleeding=sangrando | danger=peligro | risk=riesgo | warning=aviso, advertencia
   alarm=alarma | smoke=humo | flames=llamas | fire alarm=alarma de incendios | fire extinguisher=extintor | emergency exit=salida de emergencia
   escape=escapar | evacuate=evacuar | be careful!=¡ten cuidado! | watch out!=¡cuidado! | look out!=¡ojo! | stop!=¡para!
   car accident=accidente de coche | crash into=chocar contra | hit=atropellar; golpear | slip=resbalar | trip over=tropezar con | drown=ahogarse
   be stuck=estar atrapado | trapped=atrapado | missing=desaparecido | lost property=objetos perdidos | lose your wallet=perder la cartera | steal=robar (algo)
   rob=robar (a alguien, un sitio) | robbery=robo | burglary=robo en una casa | pickpocket=carterista | stolen=robado | report=denunciar
   police station=comisaría | crime=delito | victim=víctima | attack=atacar; ataque | break down=averiarse | breakdown=avería
   flat tyre=rueda pinchada | tow=remolcar | run out of petrol=quedarse sin gasolina | power cut=apagón | flood=inundación | storm=tormenta
   earthquake=terremoto | lightning strike=caída de un rayo | safe=a salvo | safety=seguridad | survive=sobrevivir | survivor=superviviente
   rescue team=equipo de rescate | help someone=ayudar a alguien | shout for help=pedir ayuda a gritos | panic=entrar en pánico | keep calm=mantener la calma | serious=grave
   minor=leve | urgent=urgente | immediately=inmediatamente | quickly=rápidamente | insurance=seguro | insurance claim=parte del seguro
   emergency number=número de emergencias | What happened?=¿Qué ha pasado? | Is anyone hurt?=¿Hay algún herido? | Call an ambulance!=¡Llama a una ambulancia! | I've lost my passport.=He perdido el pasaporte. | Can you help me?=¿Me puede ayudar?
   stretcher=camilla | oxygen=oxígeno | bandage=venda | plaster=tirita | poison=veneno | allergic reaction=reacción alérgica
   bite=mordedura; morder | sting=picadura; picar | accident report=informe del accidente | damage=daños; dañar`],
 ["timewords", "Palabras de tiempo", `
   yesterday=ayer | tomorrow=mañana (día) | the day after tomorrow=pasado mañana | the day before yesterday=anteayer | weekend=fin de semana | fortnight=quincena
   century=siglo | decade=década | midnight=medianoche | midday=mediodía | soon=pronto | later=más tarde
   often=a menudo | sometimes=a veces | rarely=casi nunca | always=siempre | never=nunca | ago=hace (tiempo)
   today=hoy | tonight=esta noche | this morning=esta mañana | this afternoon=esta tarde | this evening=esta tarde-noche | last night=anoche
   last week=la semana pasada | last month=el mes pasado | last year=el año pasado | next week=la semana que viene | next month=el mes que viene | next year=el año que viene
   now=ahora | right now=ahora mismo | at the moment=en este momento | nowadays=hoy en día | these days=estos días | then=entonces
   before=antes | after=después | afterwards=después, luego | later on=más tarde | at first=al principio | in the end=al final
   at last=por fin | finally=finalmente | recently=recientemente | lately=últimamente | already=ya | yet=todavía (en negativas); ya (en preguntas)
   still=todavía | just=acabar de; justo | ever=alguna vez | for ages=desde hace mucho | since=desde | for=durante, desde hace
   during=durante | while=mientras | until=hasta | by=para (antes de) | on time=a la hora | in time=a tiempo
   early=temprano | late=tarde | immediately=inmediatamente | suddenly=de repente | meanwhile=mientras tanto | once=una vez
   twice=dos veces | three times=tres veces | usually=normalmente | normally=normalmente | occasionally=de vez en cuando | from time to time=de vez en cuando
   every day=cada día | daily=diariamente | weekly=semanalmente | monthly=mensualmente | yearly=anualmente | second=segundo
   minute=minuto | hour=hora | day=día | week=semana | month=mes | year=año
   morning=mañana | afternoon=tarde | evening=tarde-noche | night=noche | dawn=amanecer | dusk=anochecer
   Monday=lunes | Tuesday=martes | Wednesday=miércoles | Thursday=jueves | Friday=viernes | Saturday=sábado
   Sunday=domingo | January=enero | February=febrero | March=marzo | April=abril | May=mayo
   June=junio | July=julio | August=agosto | September=septiembre | October=octubre | November=noviembre
   December=diciembre | calendar=calendario | date=fecha | diary=agenda | deadline=fecha límite | past=pasado
   present=presente | future=futuro | in the past=en el pasado | in the future=en el futuro | a long time ago=hace mucho tiempo | half an hour=media hora
   quarter past=y cuarto | quarter to=menos cuarto | o'clock=en punto | a.m.=de la mañana | p.m.=de la tarde | millennium=milenio
   period=periodo | age=época; edad | moment=momento | the other day=el otro día | in a minute=en un minuto | at the same time=al mismo tiempo`],
 ["shopping", "De compras", `
   supermarket=supermercado | queue=cola | trolley=carro | basket=cesta | checkout=caja | customer=cliente
   cashier=cajero | bargain=ganga | brand=marca | open=abierto | closed=cerrado | changing room=probador
   go shopping=ir de compras | second-hand=de segunda mano | deliver=entregar | order=pedir, encargar | online shopping=compras por internet | return=devolver (un producto)
   shop=tienda; comprar | store=tienda | shopkeeper=tendero | shop window=escaparate | department=sección | aisle=pasillo (de supermercado)
   shelf=estante | price label=etiqueta de precio | product=producto | goods=productos, mercancías | item=artículo | stock=existencias
   out of stock=agotado | in stock=disponible | opening hours=horario de apertura | closing time=hora de cierre | buy=comprar | pay=pagar
   pay at the till=pagar en caja | till=caja (registradora) | self-checkout=caja de autoservicio | bag=bolsa | carrier bag=bolsa de la compra | shopping list=lista de la compra
   groceries=comestibles | go to the shops=ir a las tiendas | do some shopping=hacer unas compras | shop around=comparar precios | browse=mirar sin comprar | choose=elegir
   try on=probarse | fit=quedar bien | exchange=cambiar | refund=reembolso | receipt=tique | guarantee=garantía
   faulty=defectuoso | complain=reclamar | manager=encargado | offer=oferta | buy one get one free=dos por uno | reduced=rebajado
   price tag=etiqueta | value for money=calidad-precio | expensive=caro | cheap=barato | affordable=asequible | quality=calidad
   loyalty card=tarjeta de cliente | voucher=vale | gift card=tarjeta regalo | wrap=envolver | gift=regalo | present=regalo
   delivery=entrega | free delivery=envío gratuito | home delivery=entrega a domicilio | parcel=paquete | online shop=tienda online | website=página web
   basket (online)=cesta (online) | add to basket=añadir a la cesta | pay online=pagar en línea | track your order=seguir tu pedido | click and collect=comprar online y recoger | mall=centro comercial
   market stall=puesto de mercado | corner shop=tienda de barrio | bakery=panadería | fishmonger's=pescadería | bookshop=librería | toy shop=juguetería
   jeweller's=joyería | chemist's=farmacia | stationer's=papelería | florist's=floristería | electronics shop=tienda de electrónica | sports shop=tienda de deportes
   furniture shop=tienda de muebles | DIY store=tienda de bricolaje | I'm just looking.=Solo estoy mirando. | Can I help you?=¿Le puedo ayudar? | Do you have this in blue?=¿Lo tiene en azul? | I'll take it.=Me lo llevo.
   Where can I pay?=¿Dónde puedo pagar? | Can I have a bag?=¿Me da una bolsa? | spend=gastar | waste money=malgastar dinero | shopaholic=adicto a las compras | consumer=consumidor
   advertisement=anuncio | brand-new=nuevo a estrenar | sell out=agotarse | weigh=pesar | a dozen=una docena | half a kilo=medio kilo
   a bunch of=un ramo de; un racimo de | a box of=una caja de | a bar of=una tableta de`],
 ["chores", "Tareas de casa", `
   do the washing=poner la lavadora | do the ironing=planchar | do the washing-up=fregar los platos | make the bed=hacer la cama | hoover=pasar la aspiradora | tidy up=ordenar
   dust=quitar el polvo | take out the rubbish=sacar la basura | feed the cat=dar de comer al gato | water the plants=regar las plantas | cook dinner=hacer la cena | lay the table=poner la mesa
   clean the windows=limpiar las ventanas | sweep=barrer | mop the floor=fregar el suelo | housework=tareas de casa | household chores=tareas domésticas | clean the house=limpiar la casa
   clean the bathroom=limpiar el baño | clean the kitchen=limpiar la cocina | tidy your room=ordenar tu habitación | put away=guardar (en su sitio) | put things back=volver a poner las cosas en su sitio | make the beds=hacer las camas
   change the sheets=cambiar las sábanas | do the laundry=hacer la colada | hang out the washing=tender la ropa | bring in the washing=recoger la ropa | fold the clothes=doblar la ropa | load the dishwasher=poner el lavavajillas
   empty the dishwasher=vaciar el lavavajillas | dry the dishes=secar los platos | wipe the table=pasar un trapo a la mesa | clear the table=quitar la mesa | sweep the floor=barrer el suelo | vacuum=pasar la aspiradora
   vacuum cleaner=aspiradora | broom=escoba | mop=fregona; fregar el suelo | bucket=cubo | dustpan=recogedor | cloth=trapo
   duster=plumero, trapo del polvo | sponge=esponja | washing-up liquid=lavavajillas (líquido) | detergent=detergente | bleach=lejía | rubbish=basura
   recycling=reciclaje | separate the rubbish=separar la basura | empty the bin=vaciar la papelera | clean the oven=limpiar el horno | defrost the fridge=descongelar la nevera | polish=sacar brillo
   scrub=frotar | wash the car=lavar el coche | mow the lawn=cortar el césped | do the gardening=hacer jardinería | weed the garden=quitar las malas hierbas | rake the leaves=rastrillar las hojas
   walk the dog=pasear al perro | clean the cage=limpiar la jaula | do the shopping=hacer la compra | go to the supermarket=ir al supermercado | unpack the shopping=colocar la compra | prepare meals=preparar las comidas
   make lunch=hacer la comida | look after the baby=cuidar al bebé | babysit=hacer de canguro | fix things=arreglar cosas | change a light bulb=cambiar una bombilla | paint the walls=pintar las paredes
   hang a picture=colgar un cuadro | share the housework=repartir las tareas | take turns=turnarse | it's your turn=te toca | a mess=un desorden | messy=desordenado
   tidy=ordenado | dirty=sucio | clean=limpio | dusty=polvoriento | spotless=impecable | stain=mancha
   smell=olor; oler | get rid of=deshacerse de | throw away=tirar (a la basura) | pick up=recoger (del suelo) | sort out=ordenar, organizar | clean up=limpiar (después de algo)
   wash=lavar | rinse=aclarar | soak=poner en remojo | iron=plancha; planchar | ironing board=tabla de planchar | washing line=tendedero
   peg=pinza | laundry basket=cesto de la ropa sucia | cleaning products=productos de limpieza | rubber gloves=guantes de goma | chore=tarea | help out=echar una mano
   hate doing housework=odiar hacer las tareas | do the cleaning=hacer la limpieza | spring cleaning=limpieza general | feed the fish=dar de comer a los peces | air the room=ventilar la habitación | open the windows=abrir las ventanas`],
 ["crime", "Crimen y ley", `
   crime=delito, crimen | criminal=delincuente | law=ley | legal=legal | illegal=ilegal | break the law=infringir la ley
   commit a crime=cometer un delito | thief=ladrón | theft=robo | steal=robar (algo) | rob=atracar, robar (a alguien) | robber=atracador
   robbery=atraco | burglar=ladrón (de casas) | burglary=robo en casa | break into=entrar a robar | shoplifter=ladrón de tiendas | shoplifting=hurto en tiendas
   pickpocket=carterista | mugger=atracador (en la calle) | mugging=atraco callejero | vandal=vándalo | vandalism=vandalismo | graffiti=pintadas
   fraud=fraude | smuggling=contrabando | murder=asesinato | murderer=asesino | kill=matar | kidnap=secuestrar
   hijack=secuestrar (un avión) | attack=atacar | fight=pelea; pelear | weapon=arma | gun=pistola | knife=cuchillo, navaja
   drugs=drogas | violence=violencia | violent=violento | victim=víctima | witness=testigo | suspect=sospechoso
   evidence=pruebas | clue=pista | fingerprints=huellas dactilares | investigate=investigar | investigation=investigación | detective=detective
   police officer=agente de policía | arrest=detener; detención | catch=atrapar | chase=perseguir | escape=escapar | handcuffs=esposas
   police station=comisaría | interview=interrogar | confess=confesar | admit=admitir | deny=negar | blame=culpar
   accuse=acusar | guilty=culpable | innocent=inocente | court=tribunal, juzgado | trial=juicio | judge=juez
   jury=jurado | lawyer=abogado | prove=demostrar | sentence=condena; condenar | prison=prisión | jail=cárcel
   prisoner=preso | fine=multa; multar | punishment=castigo | punish=castigar | community service=servicios a la comunidad | release=poner en libertad
   security camera=cámara de seguridad | alarm=alarma | lock=cerrar con llave | safe=caja fuerte | report a crime=denunciar un delito | stolen goods=objetos robados
   cybercrime=ciberdelito | hacker=pirata informático | identity theft=robo de identidad | scam=estafa | con=timar | bribe=soborno; sobornar
   corruption=corrupción | gang=banda | threaten=amenazar | threat=amenaza | rule=norma | forbidden=prohibido
   allowed=permitido | ban=prohibir; prohibición | speeding=exceso de velocidad | parking ticket=multa de aparcamiento | crime rate=índice de criminalidad | patrol=patrullar
   bodyguard=guardaespaldas | crime novel=novela policiaca | mystery=misterio | solve=resolver | case=caso`],
 ["society", "Sociedad y política", `
   society=sociedad | social=social | government=gobierno | politics=política (actividad) | policy=política (medida) | politician=político
   political party=partido político | election=elecciones | vote=votar; voto | voter=votante | elect=elegir (en votación) | campaign=campaña
   president=presidente | prime minister=primer ministro | minister=ministro | mayor=alcalde | king=rey | queen=reina
   parliament=parlamento | democracy=democracia | republic=república | monarchy=monarquía | citizen=ciudadano | rights=derechos
   human rights=derechos humanos | freedom=libertad | equality=igualdad | inequality=desigualdad | justice=justicia | law=ley
   tax=impuesto | public services=servicios públicos | healthcare=sanidad | education system=sistema educativo | unemployment=paro | poverty=pobreza
   homeless=sin techo | charity=ONG, organización benéfica | volunteer=voluntario | donation=donativo | refugee=refugiado | immigrant=inmigrante
   immigration=inmigración | emigrate=emigrar | population=población | community=comunidad | neighbour=vecino | local=local
   national=nacional | international=internacional | global=mundial | culture=cultura | tradition=tradición | religion=religión
   generation=generación | young people=los jóvenes | elderly people=las personas mayores | gender=género | discrimination=discriminación | racism=racismo
   tolerance=tolerancia | respect=respeto | protest=protesta; protestar | demonstration=manifestación | strike=huelga | petition=petición
   debate=debate | opinion=opinión | in favour of=a favor de | against=en contra de | support=apoyar | oppose=oponerse a
   agree with=estar de acuerdo con | issue=tema, problema | problem=problema | solution=solución | crisis=crisis | war=guerra
   peace=paz | army=ejército | conflict=conflicto | security=seguridad | economy=economía | economic=económico
   price rise=subida de precios | cost of living=coste de la vida | housing=vivienda | public transport=transporte público | environment=medio ambiente | news=noticias
   media=medios | fake news=noticias falsas | social media=redes sociales | influence=influir; influencia | power=poder | leader=líder
   organisation=organización | union=sindicato | member=miembro | join=unirse a | official=oficial | public=público
   private=privado | improve=mejorar | change=cambiar; cambio | develop=desarrollar | developed country=país desarrollado | developing country=país en desarrollo
   survey=encuesta | statistics=estadísticas | majority=mayoría | minority=minoría`],
 ["science", "Ciencia y espacio", `
   science=ciencia | scientist=científico | scientific=científico (adj.) | research=investigación; investigar | experiment=experimento | laboratory=laboratorio
   test=prueba; probar | result=resultado | discover=descubrir | discovery=descubrimiento | invent=inventar | inventor=inventor
   theory=teoría | prove=demostrar | fact=hecho, dato | data=datos | measure=medir | observe=observar
   microscope=microscopio | telescope=telescopio | chemistry=química | physics=física | biology=biología | chemical=sustancia química
   substance=sustancia | liquid=líquido | solid=sólido | gas=gas | metal=metal | iron=hierro
   gold=oro | silver=plata | copper=cobre | oxygen=oxígeno | hydrogen=hidrógeno | carbon=carbono
   atom=átomo | cell=célula | DNA=ADN | gene=gen | evolution=evolución | bacteria=bacterias
   germ=germen | medicine=medicina | vaccine=vacuna | energy=energía | electricity=electricidad | power=potencia; energía
   light=luz | heat=calor | sound=sonido | speed=velocidad | weight=peso | gravity=gravedad
   force=fuerza | machine=máquina | engine=motor | space=espacio | universe=universo | galaxy=galaxia
   solar system=sistema solar | planet=planeta | Earth=la Tierra | Mars=Marte | Venus=Venus | Jupiter=Júpiter
   Saturn=Saturno | the Moon=la Luna | the Sun=el Sol | star=estrella | comet=cometa | asteroid=asteroide
   meteor=meteorito | orbit=órbita | astronaut=astronauta | rocket=cohete | spaceship=nave espacial | satellite=satélite
   space station=estación espacial | launch=lanzar; lanzamiento | land on the Moon=alunizar | alien=extraterrestre | atmosphere=atmósfera | climate=clima
   temperature=temperatura | degree=grado | percent=por ciento | calculate=calcular | equation=ecuación | formula=fórmula
   number=número | technology=tecnología | engineering=ingeniería | engineer=ingeniero | robotics=robótica | computer science=informática
   artificial intelligence=inteligencia artificial | virtual reality=realidad virtual | progress=progreso | development=desarrollo | future=futuro | explore=explorar
   exploration=exploración | mission=misión | achievement=logro | breakthrough=avance | natural=natural | artificial=artificial
   scientific method=método científico | hypothesis=hipótesis | sample=muestra | analyse=analizar | conclusion=conclusión`],
 ["geography", "Geografía y el mundo", `
   geography=geografía | map=mapa | atlas=atlas | globe=globo terráqueo | world=mundo | continent=continente
   country=país | region=región | area=zona | state=estado | province=provincia | capital=capital
   city=ciudad | village=pueblo | north=norte | south=sur | east=este | west=oeste
   northern=del norte | southern=del sur | eastern=del este | western=del oeste | north-east=noreste | south-west=suroeste
   in the north of=en el norte de | coast=costa | coastline=litoral | bay=bahía | gulf=golfo | cape=cabo
   peninsula=península | island=isla | archipelago=archipiélago | ocean=océano | sea=mar | lake=lago
   river=río | source=nacimiento (de un río) | mouth=desembocadura | canal=canal | mountain range=cordillera | peak=cima, pico
   hill=colina | plain=llanura | plateau=meseta | valley=valle | cliff=acantilado | glacier=glaciar
   volcano=volcán | desert=desierto | rainforest=selva tropical | forest=bosque | countryside=campo | landscape=paisaje
   climate=clima | tropical=tropical | temperate=templado | equator=ecuador | pole=polo | North Pole=Polo Norte
   South Pole=Polo Sur | hemisphere=hemisferio | latitude=latitud | longitude=longitud | border=frontera | neighbouring=vecino (país)
   population=población | inhabitant=habitante | densely populated=muy poblado | urban=urbano | rural=rural | resources=recursos
   agriculture=agricultura | industry=industria | tourism=turismo | located=situado | situated=situado | surrounded by=rodeado de
   stretch=extenderse | flow=fluir, correr (un río) | cross=cruzar | height=altura | metres above sea level=metros sobre el nivel del mar | deep=profundo
   wide=ancho | long=largo | the highest mountain=la montaña más alta | the longest river=el río más largo | the Alps=los Alpes | the Pyrenees=los Pirineos
   the Andes=los Andes | the Himalayas=el Himalaya | the Amazon=el Amazonas | the Nile=el Nilo | the Sahara=el Sáhara | the Thames=el Támesis
   the Canary Islands=las Islas Canarias | the Balearic Islands=las Islas Baleares | Antarctica=la Antártida | the Arctic=el Ártico | the Caribbean=el Caribe | the Middle East=Oriente Medio
   time zone=zona horaria | compass=brújula | direction=dirección | landmark=punto de referencia | natural wonder=maravilla natural | earthquake zone=zona sísmica
   island country=país insular`],
 ["celebrations", "Fiestas y celebraciones", `
   celebration=celebración | celebrate=celebrar | party=fiesta | have a party=hacer una fiesta | throw a party=dar una fiesta | birthday party=fiesta de cumpleaños
   surprise party=fiesta sorpresa | fancy dress party=fiesta de disfraces | costume=disfraz | guest=invitado | host=anfitrión | invite=invitar
   invitation=invitación | present=regalo | gift=regalo | wrap a present=envolver un regalo | wrapping paper=papel de regalo | card=tarjeta
   candles=velas | blow out the candles=soplar las velas | make a wish=pedir un deseo | birthday cake=tarta de cumpleaños | balloons=globos | decorations=adornos
   decorate=decorar | music=música | dance=bailar | toast=brindis; brindar | cheers!=¡salud! | Happy birthday!=¡Feliz cumpleaños!
   Congratulations!=¡Enhorabuena! | Merry Christmas!=¡Feliz Navidad! | Happy New Year!=¡Feliz Año Nuevo! | Christmas=Navidad | Christmas Eve=Nochebuena | Christmas Day=día de Navidad
   Christmas tree=árbol de Navidad | Father Christmas=Papá Noel | New Year's Eve=Nochevieja | New Year's Day=Año Nuevo | Easter=Semana Santa, Pascua | Easter egg=huevo de Pascua
   Halloween=Halloween | trick or treat=truco o trato | Valentine's Day=San Valentín | Mother's Day=Día de la Madre | Father's Day=Día del Padre | Three Kings' Day=día de Reyes
   bank holiday=día festivo | public holiday=fiesta nacional | festival=festival | local festival=fiestas del pueblo | carnival=carnaval | parade=desfile
   procession=procesión | fireworks=fuegos artificiales | bonfire=hoguera | traditional=tradicional | custom=costumbre | tradition=tradición
   wedding=boda | wedding dress=vestido de novia | ring=anillo | bride=novia | groom=novio | best man=padrino de boda
   bridesmaid=dama de honor | honeymoon=luna de miel | reception=banquete | engagement=compromiso | anniversary=aniversario | graduation=graduación
   retirement party=fiesta de jubilación | leaving party=fiesta de despedida | welcome party=fiesta de bienvenida | christening=bautizo | funeral=funeral | ceremony=ceremonia
   special occasion=ocasión especial | meal=comida | feast=banquete, festín | dinner party=cena con invitados | barbecue=barbacoa | picnic=pícnic
   get-together=reunión | gathering=encuentro | organise=organizar | plan=planear | prepare=preparar | look forward to=tener ganas de
   enjoy yourself=pasarlo bien | have a great time=pasarlo en grande | dress up=disfrazarse; arreglarse | wear your best clothes=ponerse sus mejores galas | DJ=pinchadiscos | band=grupo musical
   disco=discoteca | playlist=lista de canciones | snacks=aperitivos | drinks=bebidas | champagne=champán | lemonade=limonada
   turkey=pavo | nougat=turrón | grapes=uvas | midnight=medianoche | countdown=cuenta atrás | festive=festivo
   exciting=emocionante | crowded=lleno de gente | noisy=ruidoso | Thank you for inviting me.=Gracias por invitarme. | Would you like to come?=¿Te gustaría venir? | What should I bring?=¿Qué llevo?`],
 ["driving", "El coche y la carretera", `
   car=coche | drive=conducir | driver=conductor | driving test=examen de conducir | driving lesson=clase de conducir | learner driver=conductor en prácticas
   licence=carné | steering wheel=volante | brakes=frenos | brake=frenar | accelerator=acelerador | speed up=acelerar
   slow down=reducir la velocidad | gear=marcha | engine=motor | tyre=neumático | wheel=rueda | boot=maletero
   bonnet=capó | windscreen=parabrisas | windscreen wipers=limpiaparabrisas | mirror=retrovisor | headlights=faros | indicator=intermitente
   horn=claxon | seat belt=cinturón de seguridad | fasten your seat belt=abrocharse el cinturón | number plate=matrícula | petrol station=gasolinera | diesel=gasóleo
   electric car=coche eléctrico | charging point=punto de carga | oil=aceite | garage=taller | mechanic=mecánico | repair=reparar
   service=revisión (del coche) | road=carretera | motorway=autopista | main road=carretera principal | lane=carril | traffic=tráfico
   traffic jam=atasco | rush hour=hora punta | traffic lights=semáforo | road sign=señal de tráfico | speed limit=límite de velocidad | speed camera=radar
   roadworks=obras | diversion=desvío | junction=cruce | roundabout=rotonda | crossing=paso de peatones | bridge=puente
   tunnel=túnel | toll=peaje | exit=salida | turn=girar | overtake=adelantar | reverse=dar marcha atrás
   park=aparcar | parking=aparcamiento | car park=aparcamiento | parking meter=parquímetro | no parking=prohibido aparcar | one-way street=calle de sentido único
   give way=ceder el paso | stop sign=señal de stop | pedestrian=peatón | cyclist=ciclista | passenger=pasajero | lorry=camión
   van=furgoneta | motorbike=moto | scooter=patinete; ciclomotor | bike lane=carril bici | helmet=casco | accident=accidente
   crash=choque | break down=averiarse | flat tyre=rueda pinchada | spare tyre=rueda de repuesto | tow truck=grúa | insurance=seguro
   fine=multa | police=policía | drink-driving=conducir bebido | fast=rápido | slowly=despacio | carefully=con cuidado
   dangerous driving=conducción temeraria | journey=trayecto | route=ruta | sat nav=GPS | direction=dirección | turn left=girar a la izquierda
   turn right=girar a la derecha | go straight ahead=seguir recto | get lost=perderse | give someone a lift=llevar a alguien en coche | car sharing=compartir coche | hire car=coche de alquiler
   road trip=viaje por carretera | petrol=gasolina | fill up the tank=llenar el depósito`],
 ["music", "Música e instrumentos", `
   music=música | musician=músico | song=canción | singer=cantante | sing=cantar | songwriter=compositor de canciones
   composer=compositor | compose=componer | lyrics=letra | tune=melodía | melody=melodía | rhythm=ritmo
   beat=ritmo, compás | note=nota | chord=acorde | voice=voz | instrument=instrumento | play the guitar=tocar la guitarra
   electric guitar=guitarra eléctrica | bass guitar=bajo | piano=piano | keyboard=teclado | drums=batería | drummer=batería (persona)
   guitarist=guitarrista | pianist=pianista | violin=violín | cello=violonchelo | flute=flauta | trumpet=trompeta
   saxophone=saxofón | clarinet=clarinete | harp=arpa | accordion=acordeón | harmonica=armónica | tambourine=pandereta
   band=grupo | group=grupo | orchestra=orquesta | choir=coro | solo=solo | duet=dúo
   lead singer=cantante principal | backing vocals=coros | DJ=pinchadiscos | fan=fan | audience=público | concert=concierto
   live music=música en directo | gig=bolo, concierto | tour=gira | festival=festival | stage=escenario | microphone=micrófono
   speaker=altavoz | headphones=auriculares | album=álbum | single=sencillo | record=disco; grabar | recording studio=estudio de grabación
   hit=éxito | charts=listas de éxitos | number one=número uno | playlist=lista de reproducción | stream=escuchar en streaming | download=descargar
   vinyl=vinilo | CD=CD | genre=género | pop=pop | rock=rock | hip hop=hip hop
   rap=rap | reggae=reggae | blues=blues | jazz=jazz | classical=clásica | opera=ópera
   folk music=música folk | flamenco=flamenco | heavy metal=heavy metal | electronic music=música electrónica | catchy=pegadizo | loud=alto, fuerte
   quiet=bajo, suave | out of tune=desafinado | in tune=afinado | practise=practicar | rehearse=ensayar | rehearsal=ensayo
   perform=actuar | performance=actuación | play live=tocar en directo | clap=aplaudir | encore=bis | ticket=entrada
   sold out=agotado | talented=con talento | famous=famoso | music lesson=clase de música | music school=conservatorio | read music=leer partituras
   sheet music=partitura | learn an instrument=aprender a tocar un instrumento | turn up the music=subir la música | turn down the music=bajar la música | karaoke=karaoke | dance floor=pista de baile
   whistle=silbar`],
 ["art", "Arte y manualidades", `
   art=arte | artist=artista | painter=pintor | sculptor=escultor | work of art=obra de arte | masterpiece=obra maestra
   painting=cuadro; pintura | portrait=retrato | self-portrait=autorretrato | landscape=paisaje | still life=bodegón | drawing=dibujo
   sketch=boceto | sculpture=escultura | statue=estatua | photograph=fotografía | photographer=fotógrafo | exhibition=exposición
   gallery=galería | museum=museo | art gallery=galería de arte | collection=colección | paint=pintar; pintura | draw=dibujar
   sketch something=hacer un boceto de algo | colour in=colorear | design=diseñar; diseño | create=crear | creative=creativo | creativity=creatividad
   imagination=imaginación | inspiration=inspiración | inspire=inspirar | style=estilo | modern art=arte moderno | abstract=abstracto
   realistic=realista | classical=clásico | brush=pincel | paintbrush=pincel | canvas=lienzo | easel=caballete
   palette=paleta | oil paint=óleo | watercolour=acuarela | crayon=cera de colores | felt-tip pen=rotulador | pencil=lápiz
   charcoal=carboncillo | paper=papel | card=cartulina | scissors=tijeras | glue=pegamento | tape=cinta adhesiva
   clay=arcilla | pottery=cerámica | craft=manualidad | crafts=manualidades | handmade=hecho a mano | make=hacer
   cut out=recortar | stick=pegar | fold=doblar | origami=papiroflexia | knit=hacer punto | sew=coser
   needle=aguja | thread=hilo | embroidery=bordado | jewellery making=hacer bisutería | beads=cuentas | frame=marco
   hang=colgar | background=fondo | foreground=primer plano | shade=sombra; sombrear | light and shadow=luz y sombra | shape=forma
   line=línea | pattern=diseño, estampado | colourful=colorido | bright colours=colores vivos | pale colours=colores pálidos | mix colours=mezclar colores
   admire=admirar | beautiful=bonito | strange=extraño | original=original | copy=copia; copiar | valuable=valioso
   priceless=de valor incalculable | famous painting=cuadro famoso | street art=arte urbano | mural=mural | graphic design=diseño gráfico | illustration=ilustración
   illustrator=ilustrador | cartoon=dibujo animado; viñeta | comic strip=tira cómica | animation=animación | photography=fotografía | take photos=hacer fotos
   art class=clase de dibujo | art school=escuela de arte | sculpt=esculpir | carve=tallar | wood=madera | stone=piedra
   marble=mármol | bronze=bronce`],
 ["tools", "Objetos y herramientas", `
   tool=herramienta | toolbox=caja de herramientas | hammer=martillo | nail=clavo | screw=tornillo | screwdriver=destornillador
   spanner=llave inglesa | pliers=alicates | saw=sierra | drill=taladro | ladder=escalera de mano | tape measure=cinta métrica
   glue=pegamento | rope=cuerda | string=cordel | chain=cadena | wire=alambre, cable | battery=pila
   torch=linterna | light bulb=bombilla | candle=vela | matches=cerillas | lighter=mechero | scissors=tijeras
   knife=cuchillo | penknife=navaja | needle=aguja | pin=alfiler | safety pin=imperdible | button=botón
   zip=cremallera | key=llave | keyring=llavero | lock=candado; cerradura | padlock=candado | box=caja
   bag=bolsa | container=recipiente | bottle=botella | jar=tarro | tin=lata | can=lata
   plastic bag=bolsa de plástico | envelope=sobre | paper clip=clip | stapler=grapadora | rubber band=goma elástica | sellotape=celo
   notebook=libreta | pen=bolígrafo | marker=rotulador | ruler=regla | calculator=calculadora | alarm clock=despertador
   clock=reloj | watch=reloj de pulsera | mirror=espejo | comb=peine | hairbrush=cepillo de pelo | towel=toalla
   sponge=esponja | bucket=cubo | brush=cepillo | tray=bandeja | basket=cesta | umbrella=paraguas
   wallet=cartera | purse=monedero | handbag=bolso | suitcase=maleta | backpack=mochila | tent=tienda de campaña
   sleeping bag=saco de dormir | map=mapa | compass=brújula | binoculars=prismáticos | camera=cámara | charger=cargador
   plug=enchufe | extension lead=alargador | remote control=mando | headphones=auriculares | glasses=gafas | sunglasses=gafas de sol
   lens=lente | ticket=billete | card=tarjeta | coin=moneda | toy=juguete | doll=muñeca
   teddy bear=osito de peluche | ball=pelota | kite=cometa | board game=juego de mesa | dice=dados | blanket=manta
   pillow=almohada | vase=jarrón | frame=marco | hook=gancho | shelf=estante | ladder rung=peldaño
   fix=arreglar | repair=reparar | build=construir | measure=medir | cut=cortar | tie=atar
   untie=desatar | fasten=abrochar; sujetar | attach=sujetar, adjuntar | plug in=enchufar | unplug=desenchufar | it's made of=está hecho de
   it's used for=se usa para | handle=asa, mango | lid=tapa | blade=hoja (de un cuchillo)`],
 ["measures", "Formas, medidas y cantidades", `
   shape=forma | circle=círculo | round=redondo | square=cuadrado | rectangle=rectángulo | rectangular=rectangular
   triangle=triángulo | triangular=triangular | oval=ovalado | star=estrella | heart=corazón | line=línea
   straight=recto | curved=curvo | point=punto | corner=esquina | edge=borde | side=lado
   centre=centro | middle=medio | top=parte de arriba | bottom=parte de abajo | front=parte delantera | back=parte trasera
   size=tamaño | length=longitud | width=anchura | height=altura | depth=profundidad | weight=peso
   area=superficie | distance=distancia | volume=volumen | speed=velocidad | temperature=temperatura | long=largo
   wide=ancho | high=alto | deep=profundo | heavy=pesado | light=ligero | measure=medir
   weigh=pesar | metre=metro | centimetre=centímetro | millimetre=milímetro | kilometre=kilómetro | mile=milla
   gram=gramo | kilo=kilo | tonne=tonelada | litre=litro | millilitre=mililitro | half=mitad
   quarter=cuarto | third=tercio | double=doble | triple=triple | percent=por ciento | amount=cantidad
   number=número | total=total | plenty of=mucho, de sobra | a lot of=mucho, muchos | lots of=un montón de | many=muchos
   much=mucho | a few=unos pocos | a little=un poco | few=pocos | little=poco | some=algo de, algunos
   any=algún, nada de | enough=suficiente | too much=demasiado | too many=demasiados | not enough=no suficiente | none=ninguno
   all=todos | both=ambos | each=cada | every=cada, todos | whole=entero | several=varios
   most=la mayoría | a pair of=un par de | a couple of=un par de | a dozen=una docena | hundreds of=cientos de | thousands of=miles de
   millions of=millones de | piece=trozo, pieza | part=parte | bit=trocito | slice=rebanada | spoonful=cucharada
   handful=puñado | cupful=taza (medida) | add=sumar | subtract=restar | multiply=multiplicar | divide=dividir
   plus=más | minus=menos | equals=es igual a | calculate=calcular | count=contar | increase=aumento; aumentar
   decrease=disminución; disminuir | maximum=máximo | minimum=mínimo | average=media, promedio | approximately=aproximadamente | exactly=exactamente
   about=alrededor de | almost=casi | nearly=casi | over=más de | under=menos de | How big is it?=¿Cómo de grande es?
   How much does it weigh?=¿Cuánto pesa? | How long is it?=¿Cuánto mide de largo? | How far is it?=¿A qué distancia está? | it measures=mide`],
 ["phrases", "Frases útiles para conversar", `
   How are you?=¿Qué tal estás? | I'm fine, thanks.=Bien, gracias. | Nice to meet you.=Encantado de conocerte. | See you later!=¡Hasta luego! | See you soon!=¡Hasta pronto! | Have a nice day!=¡Que tengas un buen día!
   Good luck!=¡Buena suerte! | Well done!=¡Bien hecho! | Never mind.=No importa. | No problem.=No hay problema. | You're welcome.=De nada. | Excuse me.=Perdone. / Disculpe.
   Sorry?=¿Perdón? (no he oído) | Pardon?=¿Cómo dice? | Could you repeat that, please?=¿Podría repetirlo, por favor? | Could you speak more slowly?=¿Podría hablar más despacio? | What does ... mean?=¿Qué significa...? | How do you say ... in English?=¿Cómo se dice... en inglés?
   How do you spell it?=¿Cómo se escribe? | I don't understand.=No entiendo. | I'm not sure.=No estoy seguro. | I think so.=Creo que sí. | I don't think so.=Creo que no. | I agree.=Estoy de acuerdo.
   I don't agree.=No estoy de acuerdo. | That's true.=Es verdad. | You're right.=Tienes razón. | That's a good idea.=Es una buena idea. | In my opinion...=En mi opinión... | I think that...=Creo que...
   Personally, I...=Personalmente, yo... | As far as I know...=Que yo sepa... | On the one hand...=Por un lado... | On the other hand...=Por otro lado... | For example...=Por ejemplo... | What about you?=¿Y tú?
   What do you think?=¿Qué opinas? | Why don't we...?=¿Por qué no...? | Let's...=Vamos a... | How about...?=¿Qué te parece si...? | Shall we...?=¿Hacemos...? | Would you like to...?=¿Te gustaría...?
   I'd love to.=Me encantaría. | I'm afraid I can't.=Me temo que no puedo. | Maybe another time.=Quizá otro día. | It depends.=Depende. | It doesn't matter.=Da igual. | I don't mind.=Me da igual.
   Of course!=¡Claro! | Sure!=¡Claro! | Really?=¿De verdad? | That's amazing!=¡Es increíble! | What a pity!=¡Qué pena! | How awful!=¡Qué horror!
   Lucky you!=¡Qué suerte! | Hang on a minute.=Espera un momento. | Let me think.=Déjame pensar. | Well...=Pues... | Actually...=En realidad... | Anyway...=En fin...
   By the way...=Por cierto... | To be honest...=Para ser sincero... | I mean...=Quiero decir... | You know...=Ya sabes... | It's on the tip of my tongue.=Lo tengo en la punta de la lengua. | What's the word...?=¿Cómo se dice...?
   It's a kind of...=Es una especie de... | It's something you use to...=Es algo que se usa para... | Can I ask you something?=¿Te puedo preguntar algo? | Could you help me, please?=¿Me podrías ayudar, por favor? | Can I have...?=¿Me pones...? / ¿Me da...? | I'd like...=Quería...
   How much is it?=¿Cuánto es? | Where is the toilet?=¿Dónde está el baño? | What time is it?=¿Qué hora es? | What's the matter?=¿Qué pasa? | Are you OK?=¿Estás bien? | Take care!=¡Cuídate!
   Enjoy your meal!=¡Que aproveches! | Help yourself.=Sírvete. | After you.=Después de ti. | Bless you!=¡Jesús! (al estornudar) | Get well soon!=¡Que te mejores! | Have fun!=¡Pásalo bien!
   Me too.=Yo también. | Me neither.=Yo tampoco. | So do I.=Yo también. | Neither do I.=Yo tampoco. | It's up to you.=Tú decides. | Fair enough.=Me parece bien.
   No way!=¡Ni hablar! | Just a moment.=Un momento. | I'm sorry to hear that.=Siento oír eso. | That sounds great!=¡Suena genial! | Thanks a lot.=Muchas gracias. | Thanks anyway.=Gracias de todas formas.
   Not at all.=De nada. / En absoluto. | To sum up...=Para resumir... | First of all...=En primer lugar... | In conclusion...=En conclusión... | Let me explain.=Déjame que te explique. | Good idea!=¡Buena idea!`],
 ["collocations", "Expresiones con make, do, have y get", `
   make a mistake=cometer un error | make a decision=tomar una decisión | make a phone call=hacer una llamada | make a plan=hacer un plan | make friends=hacer amigos | make money=ganar dinero
   make a noise=hacer ruido | make an effort=hacer un esfuerzo | make progress=progresar | make a cake=hacer una tarta | make the bed=hacer la cama | make a list=hacer una lista
   make an appointment=pedir cita | make a promise=hacer una promesa | make a complaint=poner una reclamación | make a suggestion=hacer una sugerencia | make sure=asegurarse | make up your mind=decidirse
   make fun of=burlarse de | make a speech=dar un discurso | make a difference=marcar la diferencia | make a mess=desordenarlo todo | do homework=hacer los deberes | do the housework=hacer las tareas
   do the washing-up=fregar los platos | do the shopping=hacer la compra | do exercise=hacer ejercicio | do sport=hacer deporte | do your best=hacer lo posible | do a favour=hacer un favor
   do business=hacer negocios | do a course=hacer un curso | do an exam=hacer un examen | do research=investigar | do well=salir bien, irle bien | do badly=salir mal
   do nothing=no hacer nada | do the cooking=cocinar | do the cleaning=hacer la limpieza | do your hair=peinarse | do your make-up=maquillarse | do damage=causar daños
   have breakfast=desayunar | have lunch=comer | have dinner=cenar | have a drink=tomar algo | have a shower=ducharse | have a bath=bañarse
   have a rest=descansar | have a break=hacer una pausa | have a party=hacer una fiesta | have a good time=pasarlo bien | have fun=divertirse | have a look=echar un vistazo
   have a go=intentarlo | have a chat=charlar | have an argument=discutir | have a problem=tener un problema | have a headache=tener dolor de cabeza | have a cold=estar resfriado
   have a baby=tener un bebé | have a dream=tener un sueño | have an idea=tener una idea | have time=tener tiempo | have a word with=hablar un momento con | have a haircut=cortarse el pelo
   get up=levantarse | get dressed=vestirse | get ready=prepararse | get home=llegar a casa | get to work=llegar al trabajo | get a job=conseguir trabajo
   get married=casarse | get divorced=divorciarse | get tired=cansarse | get angry=enfadarse | get bored=aburrirse | get lost=perderse
   get better=mejorar | get worse=empeorar | get wet=mojarse | get old=envejecer | get a present=recibir un regalo | get an email=recibir un correo
   get on well with=llevarse bien con | get the bus=coger el autobús | get on=subirse | get off=bajarse | get back=volver | get rid of=deshacerse de
   get in touch=ponerse en contacto | get the joke=pillar el chiste | take a photo=hacer una foto | take a seat=sentarse | take a taxi=coger un taxi | take an exam=presentarse a un examen
   take part in=participar en | take care of=cuidar de | take your time=tomarse su tiempo | take a decision=tomar una decisión | pay attention=prestar atención | pay a visit=hacer una visita
   keep calm=mantener la calma | keep a secret=guardar un secreto | break the rules=romper las reglas | catch a cold=resfriarse | save time=ahorrar tiempo | waste time=perder el tiempo
   tell the truth=decir la verdad | tell a lie=mentir | tell a joke=contar un chiste | go for a walk=ir a dar un paseo | go on holiday=irse de vacaciones | go shopping=ir de compras`]
];

// Temas agrupados para los menús
export const TOPIC_GROUPS = [
 {title:"Personas", ids:["family","describe","feelings","body","jobs","countries"]},
 {title:"Casa y vida diaria", ids:["house","routine","chores","food","cooking","timewords","tools"]},
 {title:"Ciudad, viajes y compras", ids:["town","travel","driving","hotel","clothes","shopping","money"]},
 {title:"Estudios, trabajo y tecnología", ids:["work","school","tech","communication","science"]},
 {title:"Salud, naturaleza y problemas", ids:["health","weather","nature","animals","emergencies","geography"]},
 {title:"Ocio y cultura", ids:["sport","entertainment","music","art","celebrations"]},
 {title:"Sociedad", ids:["society","crime"]},
 {title:"Palabras y frases útiles", ids:["verbs","adjectives","collocations","phrases","measures"]}
];
export const TOPICS = TOPICS_RAW.map(([id, name, s]) => ({ id, name, words: s.split(/\s*[|\n]\s*/).filter(Boolean).map(p => p.split("=").map(x => x.trim())) }));

// Tarjetas de preposiciones. Formato: "inglés=español|..."
export const PREP_CARDS_RAW = [
 ["prep-dep","Verbo o adjetivo + preposición","afraid of=tener miedo de|proud of=orgulloso de|tired of=harto de|good at=bueno en|interested in=interesado en|famous for=famoso por|different from=diferente de|married to=casado con|depend on=depender de|listen to=escuchar a|wait for=esperar a|look at=mirar|look for=buscar|look after=cuidar|agree with=estar de acuerdo con|worry about=preocuparse por|talk about=hablar de|belong to=pertenecer a|angry with=enfadado con|keen on=aficionado a|responsible for=responsable de|pay for=pagar (algo)|apologise for=pedir perdón por|laugh at=reírse de|arrive in=llegar a (ciudad, país)|arrive at=llegar a (un lugar concreto)|think about=pensar en|look forward to=tener ganas de"],
 ["prep-iot","In, on, at: expresiones","at night=por la noche|in the morning=por la mañana|on Monday=el lunes|at the weekend=el fin de semana|in July=en julio|on 5th May=el 5 de mayo|at 8 o'clock=a las 8|at Christmas=en Navidad|on Christmas Day=el día de Navidad|in summer=en verano|at home=en casa|at work=en el trabajo|in bed=en la cama|on the bus=en el autobús|in the car=en el coche|on the wall=en la pared|in the photo=en la foto|on TV=en la tele|on the first floor=en el primer piso|at the station=en la estación|in the kitchen=en la cocina|on holiday=de vacaciones|at the moment=en este momento|on time=puntual|in time=a tiempo (con margen)|at the end of=al final de"]
];
export const PREP_CARDS = PREP_CARDS_RAW.map(([id, name, s]) => ({ id, name, words: s.split("|").map(p => p.split("=")) }));

// Ropa, joyas, colores y materiales. [inglés, español, categorías] · c = clothes and shoes, j = jewellery, k = colours, m = materials
export const CLOTHES_CATS = {c:"Clothes and shoes", j:"Jewellery", k:"Colours", m:"Materials"};
export const CLOTHES_CATS_ES = {c:"ropa y calzado", j:"joyas", k:"colores", m:"materiales"};
export const CLOTHES = [
 // Lista de clase
 ["bracelet","pulsera","j"],["button","botón","c"],["collar","cuello (de camisa)","c"],["cotton","algodón","m"],["cream","color crema","k"],
 ["dark green","verde oscuro","k"],["dress","vestido","c"],["earrings","pendientes","j"],["gloves","guantes","c"],["gold","oro, dorado","mk"],
 ["heel","tacón","c"],["jacket","chaqueta","c"],["jeans","vaqueros","c"],["jumper","jersey","c"],["leather","cuero","m"],
 ["light blue","azul claro","k"],["navy blue","azul marino","k"],["necklace","collar (joya)","j"],["pink","rosa","k"],["purple","morado","k"],
 ["ring","anillo","j"],["sandals","sandalias","c"],["shirt","camisa","c"],["silver","plata, plateado","mk"],["skirt","falda","c"],
 ["sleeve","manga","c"],["suit","traje","c"],["sweatshirt","sudadera","c"],["T-shirt","camiseta","c"],["top","top, camiseta","c"],
 ["trainers","zapatillas de deporte","c"],["wool","lana","m"],
 // Ropa y calzado
 ["coat","abrigo","c"],["raincoat","chubasquero","c"],["trousers","pantalones","c"],["shorts","pantalones cortos","c"],["tracksuit","chándal","c"],
 ["blouse","blusa","c"],["cardigan","chaqueta de punto","c"],["hoodie","sudadera con capucha","c"],["waistcoat","chaleco","c"],["tie","corbata","c"],
 ["bow tie","pajarita","c"],["scarf","bufanda","c"],["hat","sombrero","c"],["cap","gorra","c"],["belt","cinturón","c"],
 ["socks","calcetines","c"],["tights","medias","c"],["pyjamas","pijama","c"],["swimsuit","bañador (de mujer)","c"],["swimming trunks","bañador (de hombre)","c"],
 ["uniform","uniforme","c"],["boots","botas","c"],["shoes","zapatos","c"],["slippers","zapatillas de casa","c"],["high heels","zapatos de tacón","c"],
 ["flip-flops","chanclas","c"],["pocket","bolsillo","c"],["zip","cremallera","c"],["hood","capucha","c"],["shoelaces","cordones","c"],
 ["underwear","ropa interior","c"],["nightdress","camisón","c"],["vest","camiseta interior","c"],["dressing gown","bata","c"],["handbag","bolso","c"],
 ["backpack","mochila","c"],["wallet","cartera","c"],["sunglasses","gafas de sol","c"],["glasses","gafas","c"],["umbrella","paraguas","c"],
 // Joyas
 ["watch","reloj (de pulsera)","j"],["chain","cadena","j"],["pendant","colgante","j"],["brooch","broche","j"],["anklet","tobillera (joya)","j"],
 ["diamond","diamante","j"],["pearl","perla","j"],["jewellery","joyas","j"],["wedding ring","alianza","j"],["engagement ring","anillo de compromiso","j"],
 ["cufflinks","gemelos","j"],["piercing","piercing","j"],
 // Colores
 ["red","rojo","k"],["orange","naranja","k"],["yellow","amarillo","k"],["green","verde","k"],["blue","azul","k"],
 ["black","negro","k"],["white","blanco","k"],["grey","gris","k"],["brown","marrón","k"],["beige","beis","k"],
 ["turquoise","turquesa","k"],["dark blue","azul oscuro","k"],["light green","verde claro","k"],["bright red","rojo intenso","k"],["pale pink","rosa pálido","k"],
 ["lilac","lila","k"],["olive green","verde oliva","k"],["burgundy","granate","k"],["khaki","caqui","k"],["multicoloured","multicolor","k"],
 // Materiales
 ["silk","seda","m"],["denim","tela vaquera","m"],["linen","lino","m"],["nylon","nailon","m"],["polyester","poliéster","m"],
 ["plastic","plástico","m"],["rubber","goma, caucho","m"],["metal","metal","m"],["velvet","terciopelo","m"],["fur","piel (con pelo)","m"],
 ["suede","ante","m"],["lace","encaje","m"],["cashmere","cachemir","m"],["canvas","lona","m"],["platinum","platino","mk"],
 ["steel","acero","m"],["bronze","bronce","mk"],["glass","cristal, vidrio","m"],["wood","madera","m"]
].map(([en, es, c]) => [en, es, c.split("")]);
