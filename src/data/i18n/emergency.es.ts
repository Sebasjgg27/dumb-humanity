import type {
  CommunicationMethod,
  EmergencyKit,
  EvacuationPlan,
  FirstAidTopic,
  FoodForaging,
  ShelterType,
  SignalMethod,
  WaterPurificationMethod,
} from '../emergency';

const EMERGENCY_KITS: EmergencyKit[] = [
  {
    name: 'Kit de supervivencia universal',
    scenario: 'Cualquier entorno',
    essentials: [
      'Cuchillo de hoja fija (mango completo)',
      'Barra de ferrocerio o cerillas impermeables',
      'Cordón paracaídas (mínimo 10 m)',
      'Pastillas potabilizadoras o pajilla filtrante',
      'Manta de emergencia térmica',
      'Silbato',
      'Botiquín pequeño',
      'Brújula',
      'Barras alimenticias de alta caloría (ración de 3 días)',
      'Linterna frontal con pilas de repuesto',
    ],
    niceToHave: [
      'Lupa (encender fuego + primeros auxilios)',
      'Kit de pesca (anzuelos, sedal, plomos)',
      'Espejo de señales',
      'Cinta americana (enróllala alrededor de la botella)',
      'Aguja de coser',
      'Bloc de notas y lápiz impermeables',
    ],
  },
  {
    name: 'Kit de isla',
    scenario: 'Varado en una isla',
    essentials: [
      'Cuchillo o concha afilada para cortar',
      'Recipiente para recoger agua de lluvia',
      'Materiales para destilador solar (lámina de plástico)',
      'Cordel para trampas de peces y refugio',
      'Espejo de señales o superficie reflectante',
      'Protección solar (gorra, ropa cubierta)',
    ],
    niceToHave: [
      'Anzuelos y sedal',
      'Encendedor impermeable',
      'Lupa para señales',
      'Lona o lámina de plástico grande',
    ],
  },
  {
    name: 'Kit de desierto',
    scenario: 'Entorno desértico y árido',
    essentials: [
      'Recipientes de agua adicionales (mínimo 3 L de capacidad)',
      'Refugio de sombra (manta térmica o lona)',
      'Pastillas de sal para retener líquidos',
      'Silbato',
      'Espejo de señales',
      'Protector solar y bálsamo labial',
    ],
    niceToHave: [
      'Kit de destilador solar',
      'Cuerda de nylon para construir la sombra',
      'Tela oscura para el muro reflectante del fuego',
      'Polvo de electrolitos',
    ],
  },
  {
    name: 'Kit ártico',
    scenario: 'Naturaleza helada',
    essentials: [
      'Saco de dormir aislante certificado para -30 °C o menos',
      'Kit de encendido (barra de ferrocerio, yesca)',
      'Capas base extra y calcetas de lana',
      'Cuchillo',
      'Comida de alta caloría (frutos secos, chocolate, pemmican)',
      'Recipiente de agua aislante (evita que se congele)',
    ],
    niceToHave: [
      'Gafas de nieve o protección ocular improvisada',
      'Cocina portátil con combustible',
      'Spray para osos o generador de ruido',
      'Saco bivouac de emergencia',
    ],
  },
  {
    name: 'Kit de selva',
    scenario: 'Bosque tropical denso',
    essentials: [
      'Machete o cuchillo grande',
      'Mosquitero y repelente',
      'Pastillas potabilizadoras o olla para hervir',
      'Bolsa impermeable para electrónicos y yesca',
      'Silbato',
      'Botiquín con crema antifúngica',
    ],
    niceToHave: [
      'Sedal y anzuelos',
      'Cordón paracaídas (20 m)',
      'Manta de emergencia térmica',
      'Capa de lluvia ligera',
    ],
  },
  {
    name: 'Kit de montaña',
    scenario: 'Alta montaña alpina',
    essentials: [
      'Chaqueta aislante y capas de ropa',
      'Bivouac de emergencia o saco de dormir',
      'Linterna frontal',
      'Cuchillo',
      'Medicamento para el mal de altura (acetazolamida)',
      'Potabilización de agua',
    ],
    niceToHave: [
      'Baliza de avalancha (en terreno de avalanchas)',
      'Pioletines o dispositivos de tracción',
      'Cuerda (10 m)',
      'Termo para bebidas calientes',
    ],
  },
  {
    name: 'Kit de océano / mar',
    scenario: 'A la deriva en el mar o zona costera',
    essentials: [
      'Artefacto de flotación o chaleco salvavidas hinchable',
      'Kit de destilador solar (bolsas y recipientes de plástico)',
      'Silbato',
      'Espejo de señales',
      'Linterna impermeable',
      'Anzuelos y sedal',
    ],
    niceToHave: [
      'Baliza de emergencia (PLB o EPIRB)',
      'Pastillas para el mareo',
      'Cuchillo impermeable',
      'Lona para dar sombra en la balsa',
    ],
  },
  {
    name: 'Kit de ruinas urbanas',
    scenario: 'Entorno urbano postcolapso',
    essentials: [
      'Mascarilla de polvo o tela para humo/escombros',
      'Linterna con pilas de repuesto',
      'Multiherramienta o cuchillo',
      'Potabilización de agua',
      'Botiquín',
      'Guantes para manipular escombros',
    ],
    niceToHave: [
      'Radio portátil',
      'Billetes de pequeña denominación',
      'Palancas o pie de palanca',
      'Bolsa impermeable para documentos',
    ],
  },
];

const FIRST_AID_TOPICS: FirstAidTopic[] = [
  {
    id: 'wound-care',
    title: 'Cuidado de heridas y hemorragias',
    description: 'Cómo detener una hemorragia y prevenir infecciones en cualquier entorno.',
    steps: [
      'Aplica presión directa con la tela más limpia que tengas',
      'Eleva la zona herida por encima del corazón si es posible',
      'Rellena las heridas profundas firmemente con tela limpia',
      'Fija la venda de forma firme pero sin cortar la circulación',
      'Limpia la herida con agua hervida y enfriada cuando pare el sangrado',
      'Cambia el vendaje a diario o cuando se moje o se ensucie',
    ],
    warnings: [
      'No retires objetos incrustados en la herida — estabiliza alrededor',
      'Vigila signos de infección: enrojecimiento, hinchazón, calor, pus, líneas rojas',
      'El torniquet es solo último recurso — anota la hora en el paciente',
    ],
  },
  {
    id: 'broken-bones',
    title: 'Fracturas e inmovilización',
    description: 'Cómo inmovilizar un hueso roto con materiales improvisados.',
    steps: [
      'No intentes recolocar el hueso — férula en la posición en que se encuentre',
      'Busca material rígido: palos, periódicos enrollados, cartón, varas de tienda',
      'Acolchona la férula con tela para mayor comodidad',
      'Ata la férula por encima y por debajo del punto de fractura',
      'Comprueba la circulación por debajo de la férula (pulso, sensación, color)',
      'Inmoviliza la articulación por encima Y por debajo de la fractura',
    ],
    warnings: [
      'Una fractura expuesta (hueso a través de la piel) requiere cuidado de la herida PRIMERO',
      'Revisa el pulso distal cada 30 minutos — aprieta la férula si se pierde circulación',
      'La férula debe ser lo bastante ajustada para impedir el movimiento sin cortar el flujo sanguíneo',
    ],
  },
  {
    id: 'hypothermia',
    title: 'Tratamiento de la hipotermia',
    description: 'Reconocer y tratar la peligrosa pérdida de temperatura corporal.',
    steps: [
      'Retira la ropa mojada de inmediato — sustitúyela por capas secas',
      'Calienta primero el núcleo: pecho, cuello, cabeza, ingle (NO extremidades)',
      'Usa contacto piel con piel en un saco de dormir como último recurso',
      'Ofrece bebidas dulces y templadas (no calientes) si está consciente — sin alcohol',
      'Trata a la persona con suavidad — los movimientos bruscos pueden causar parada cardíaca',
      'Vigila la respiración — una respiración superficial puede detenerse sin aviso',
    ],
    warnings: [
      'NO frotes ni masajes las extremidades — la sangre fría corre al núcleo',
      'NO des comida a alguien con hipotermia grave',
      'Enfriamiento posterior: la temperatura central sigue cayendo cuando empieza el calentamiento',
      'La hipotermia grave es irreversible — la prevención lo es todo',
    ],
  },
  {
    id: 'snakebite',
    title: 'Atención de mordeduras de serpiente',
    description: 'Qué hacer (y qué no) cuando te muerde una serpiente venenosa.',
    steps: [
      'Aléjate de la serpiente para evitar una segunda mordedura',
      'Mantén la mordedura por debajo del nivel del corazón — inmoviliza la extremidad',
      'Quítate anillos, relojes y ropa ajustada cerca de la mordedura (habrá hinchazón)',
      'Marca el borde de la hinchazón y anota la hora',
      'Llega a asistencia médica lo antes posible — es crítico en el tiempo',
      'Describe la serpiente si es posible para elegir el antídoto',
    ],
    warnings: [
      'NO cortes la herida ni intentes succionar el veneno',
      'NO apliques un torniquet — concentra el veneno y causa muerte del tejido',
      'NO apliques hielo — empeora el daño del tejido',
      'NO des aspirina ni ibuprofeno — adelgazan la sangre',
    ],
  },
  {
    id: 'burns',
    title: 'Tratamiento de quemaduras',
    description: 'Tratar quemaduras térmicas, químicas y solares en el campo.',
    steps: [
      'Enfría la quemadura bajo agua limpia corriente durante 10-20 minutos',
      'Retira joyas y ropa ajustada de la zona quemada',
      'Cubre de forma holgada con un apósito limpio y no adherente',
      'Administra analgesia si hay disponible (ibuprofeno o paracetamol)',
      'Mantén al paciente hidratado — las quemaduras causan gran pérdida de líquidos',
      'Cambia los apósitos a diario, vigilando infecciones',
    ],
    warnings: [
      'NO uses hielo, mantequilla ni pasta dental en las quemaduras',
      'NO revientes las ampollas — son un vendaje natural estéril',
      'Quemaduras químicas: enjuaga con agua más de 20 minutos y retira la ropa contaminada',
      'Quemaduras eléctricas: la herida de entrada puede ser pequeña pero el daño interno puede ser grave',
    ],
  },
];

const SIGNAL_METHODS: SignalMethod[] = [
  {
    id: 'mirror',
    name: 'Espejo / señal reflectante',
    description:
      'Usa cualquier superficie reflectante para lanzar destellos de luz solar hacia los rescatistas. Un espejo de señales se ve a más de 16 km con condiciones claras.',
    visibility: 'Más de 16 km a plena luz del día',
    whenToUse: 'De día, cielo despejado, para localizar aviones o barcos lejanos',
  },
  {
    id: 'fire',
    name: 'Señal de fuego',
    description:
      'Tres fuegos en triángulo es la señal de socorro universal. Mantén un fuego para calor/cocinar y usa los otros dos para señalar.',
    visibility: '8-16 km según el terreno',
    whenToUse: 'De noche, cielo encapotado, cualquier momento en que necesites que te encuentren',
  },
  {
    id: 'smoke',
    name: 'Señal de humo',
    description:
      'Añade hojas verdes, madera húmeda o caucho al fuego para producir humo blanco espeso de día. El humo oscuro de aceite o caucho se ve sobre fondos claros.',
    visibility: '8-24 km con aire en calma',
    whenToUse:
      'De día con cielo despejado — humo blanco sobre fondos oscuros, humo oscuro sobre fondos claros',
  },
  {
    id: 'whistle',
    name: 'Señal de silbato',
    description:
      'Tres toques cortos repetidos es la señal de socorro universal. El sonido se oí más lejos que la voz y exige menos energía.',
    visibility: '800 m en calma, menos con viento',
    whenToUse: 'Rescate a corta distancia, de noche cuando las señales visuales no sirven, cuando oyes a los rescatistas',
  },
  {
    id: 'ground',
    name: 'Señal tierra-aire',
    description:
      'Símbolos grandes en el suelo visibles desde aviones. Usa piedras, troncos o patrones pisados. V = necesito asistencia. X = necesito ayuda médica. I = me muevo en esta dirección.',
    visibility: 'Visible desde aeronaves a baja altura',
    whenToUse: 'Esperas de búsqueda aérea, terreno abierto con materiales de contraste disponibles',
  },
  {
    id: 'bright',
    name: 'Señal con material brillante',
    description:
      'Cuelga ropa de colores vivos, lonas o papel de aluminio en un punto alto. El movimiento capta la atención mejor que los objetos estáticos.',
    visibility: '1,6-3,2 km según el terreno',
    whenToUse: 'Cualquier momento — señal pasiva que funciona mientras haces otras tareas de supervivencia',
  },
  {
    id: 'sound',
    name: 'Señal sonora / de golpes',
    description:
      'Golpear objetos metálicos entre sí o contra las piedras crea un sonido que ecoa en valles y entornos urbanos. Tres golpes rápidos significan socorro.',
    visibility: '400 m en zona abierta, eco más lejos en cañones o ciudades',
    whenToUse: 'Noche, niebla densa, ruinas urbanas, cuando oyes a los buscadores cerca',
  },
];

const WATER_PURIFICATION_METHODS: WaterPurificationMethod[] = [
  {
    id: 'boiling',
    name: 'Hervido',
    description:
      'El método más fiable. Un hervor fuerte de 1 minuto mata todos los patógenos. Por encima de 2000 m de altitud, hierve 3 minutos.',
    steps: [
      'Recoge agua de la fuente más limpia disponible',
      'Filtra a través de tela o filtro de café para retirar sedimentos',
      'Lleva a hervor fuerte en un recipiente tapado',
      'Mantén el hervor fuerte 1 minuto (3 minutos por encima de 2000 m)',
      'Deja enfriar naturalmente — no añadas hielo',
      'Almacena en recipientes limpios y tapados',
    ],
    bestFor: 'Cualquier fuente de agua con los sedimentos retirados',
    effectiveness: 'Eliminación del 99,9 % de patógenos',
  },
  {
    id: 'solar-still',
    name: 'Destilador solar',
    description:
      'Aprovecha la evaporación solar para destilar agua del suelo, las plantas o el agua contaminada. Lento pero no requiere combustible.',
    steps: [
      'Cava un hoyo de 30 cm de ancho y 30 cm de profundidad en terreno soleado',
      'Coloca un recipiente en el centro del hoyo',
      'Cubre el hoyo con una lámina de plástico transparente',
      'Sella los bordes con tierra o piedras',
      'Coloca una piedra pequeña en el centro del plástico, sobre el recipiente',
      'El condensado gotea al recipiente — recógelo cada 4-6 horas',
    ],
    bestFor: 'Entornos desérticos, agua contaminada, situaciones de emergencia',
    effectiveness: '500 ml-1 L al día según las condiciones',
  },
  {
    id: 'chemical',
    name: 'Tratamiento químico',
    description:
      'Las pastillas de yodo o cloro matan la mayoría de los patógenos. No son eficaces contra todos los parásitos. Actúa en 30-60 minutos.',
    steps: [
      'Filtra el agua con tela para retirar sedimentos',
      'Sigue exactamente las instrucciones de dosificación de las pastillas',
      'Remueve y deja reposar 30-60 minutos',
      'Si el agua sabe a yodo, añade polvo de vitamina C o bebe igual',
      'No uses más pastillas de las recomendadas',
      'Almacena el agua tratada en recipientes limpios',
    ],
    bestFor: 'Cuando no es posible hervir, tratamiento portátil de agua',
    effectiveness: '99 % de bacterias y virus, menos eficaz contra Giardia',
  },
  {
    id: 'cloth-filter',
    name: 'Filtrado con tela',
    description:
      'Retira sedimentos y algunas bacterias. NO hace que el agua sea potable por sí solo — combínalo siempre con hervido o tratamiento químico.',
    steps: [
      'Dobla una tela de algodón limpia 4-8 veces',
      'Fíjala sobre un recipiente con cuerda o goma elástica',
      'Vierte el agua despacio a través de la tela',
      'Cambia la tela cuando se obstruya',
      'Síguelo siempre con hervido o tratamiento químico',
    ],
    bestFor: 'Prefiltrado de agua muy sucia antes de otro tratamiento',
    effectiveness: 'Retira sedimentos y algunas bacterias — NO es un método independiente',
  },
  {
    id: 'sand-charcoal',
    name: 'Filtro de arena y carbón',
    description:
      'Un filtro casero con capas de arena, carbón y grava. Retira sedimentos y mejora el sabor. Aun así debe hervirse o tratarse químicamente.',
    steps: [
      'Corta el fondo de una botella de plástico o usa un tronco hueco',
      'Capas de abajo arriba: tela, grava, arena, carbón, arena, grava',
      'Vierte el agua por arriba despacio',
      'Recoge el agua filtrada por el abajo',
      'Vuelve a poner las capas cuando el flujo disminuya',
      'Hierve o trata químicamente siempre el agua filtrada',
    ],
    bestFor: 'Filtrado continuo cuando el combustible para hervir es escaso',
    effectiveness: 'Retira sedimentos y mejora el sabor — aún necesita desinfección',
  },
];

const SHELTER_TYPES: ShelterType[] = [
  {
    id: 'debris-hut',
    name: 'Refugio de escombros',
    environment: 'Bosque / arbolado',
    materials: [
      'Horstera larga (3-4 m)',
      'Ramas y palos',
      'Hojas, musgo o acículas de pino',
      'Cordón paracaídas o cuerda natural',
    ],
    steps: [
      'Apoya una horstera contra un tocón o una roca en ángulo de 45°',
      'Apoya ramas a ambos lados para formar el esqueleto de costillas',
      'Teje palos más pequeños horizontalmente entre las costillas',
      'Acumula hojas, musgo o escombros con 30 cm o más de grosor sobre todo el armazón',
      'Rellena el interior con hojas secas como aislante',
      'Crea un tapón de puerta con palos y escombros atados',
    ],
    windRating: 'Buena — el perfil bajo despacha el viento',
    warmthRating: 'Excelente — el calor corporal calienta el pequeño interior',
  },
  {
    id: 'tarp-lean-to',
    name: 'Abrigo de lona',
    environment: 'Cualquier entorno con lona o lámina de plástico',
    materials: [
      'Lona o lámina de plástico (mínimo 2x3 m)',
      'Cuerda o cordel',
      'Dos árboles o postes',
      'Piedras o troncos como anclajes de suelo',
    ],
    steps: [
      'Ata una línea de cresta entre dos árboles a la altura de la cintura',
      'Cuelga la lona sobre la línea de cresta en ángulo de 45°',
      'Ancla el borde inferior con piedras, troncos o estacas',
      'Orienta el lado abierto en contra del viento dominante',
      'Haz un fuego delante para reflejar el calor hacia el refugio',
    ],
    windRating: 'Moderada — debe quedar a sotavento',
    warmthRating: 'Buena — el muro reflectante del fuego mejora el calor',
  },
  {
    id: 'snow-shelter',
    name: 'Quinzhee de nieve',
    environment: 'Ártico / nieve',
    materials: ['Nieve compactada', 'Palos (guías de grosor de pared)', 'Pala o tabla plana'],
    steps: [
      'Amontona la nieve en un montículo de 2 m de ancho y 1,5 m de alto',
      'Deja que la nieve se sinterice (se una) durante 2 horas o más',
      'Inserta palos de 30 cm de largo de forma uniforme por la superficie',
      'Vacía el interior hasta alcanzar las puntas de los palos',
      'Crea un pequeño agujero de ventilación en la cubierta',
      'Haz la entrada más baja que la plataforma para dormir',
    ],
    windRating: 'Excelente — la estructura cerrada bloquea todo el viento',
    warmthRating:
      'Excelente — la nieve aísla hasta cerca de 0 °C aunque fuera haga -30 °C',
  },
  {
    id: 'palm-frond',
    name: 'Refugio de hojas de palmera',
    environment: 'Trópicos / selva',
    materials: [
      'Hojas grandes de palmera',
      'Bambú o palos rectos',
      'Enredadera o cuerda natural',
      'Hojas grandes para el suelo',
    ],
    steps: [
      'Construye una estructura en A con dos cañas de bambú atadas por arriba',
      'Coloca las hojas de palmera horizontalmente de la cresta al suelo a ambos lados',
      'Solapa las hojas como tejas — primero la capa inferior, luego la superior',
      'Teje hojas adicionales para sellar los huecos',
      'Crea una plataforma elevada con bambú y hojas',
      'Mantén la entrada pequeña para reducir la entrada de lluvia e insectos',
    ],
    windRating: 'Buena — la estructura en A despacha viento y lluvia',
    warmthRating: 'Moderada — diseñada para climas cálidos y húmedos',
  },
  {
    id: 'rock-wall',
    name: 'Muro de roca cortavientos',
    environment: 'Montaña / terreno expuesto',
    materials: [
      'Rochas planas',
      'Barro o arcilla como mortero',
      'Ramas para el armazón',
      'Hierba o musgo para sellar huecos',
    ],
    steps: [
      'Busca un cortavientos natural — afloramiento rocoso, pared de acantilado o depresión',
      'Levanta un muro curvo de 1-1,5 m de alto mirando en contra del viento',
      'Apila primero las rocas en seco y luego rellena los huecos con barro y hierba',
      'Apoya ramas contra el muro como armazón de la cubierta',
      'Cubre la cubierta con escombros, hojas o lona si hay',
      'Haz fuego dentro de la curva para reflejar el calor',
    ],
    windRating: 'Excelente — la roca maciza bloquea por completo el viento',
    warmthRating: 'Buena — el fuego se refleja en el muro de roca',
  },
];

const FOOD_FORAGING: FoodForaging[] = [
  {
    id: 'dandelion',
    name: 'Diente de león',
    region: 'Todo el mundo (zonas templadas)',
    season: 'De primavera a otoño',
    identification: [
      'Capítulos florales amarillos vivos en tallos huecos',
      'Hojas dentadas en forma de diente que forman una roseta en el suelo',
      'Savia blanca lechosa al romper el tallo',
      'Cabezas de semillas blancas y esponjosas (puffballs) tras la floración',
    ],
    preparation: [
      'Hojas: lava y come crudas cuando son jóvenes y tiernas',
      'Hojas: hiérvelas en dos aguas para reducir el amargor',
      'Raíces: ásalas en el fuego hasta que queden marrones oscuras y tritúralas como sustituto del café',
      'Flores: cómelas crudas o rebozadas y fritas',
    ],
    warnings: [
      'Come solo de zonas que no hayan recibido pesticidas ni herbicidas',
      'Evita las plantas cerca de carreteras — absorben metales pesados',
      'Las hojas viejas son muy amargas — recoge las jóvenes',
    ],
  },
  {
    id: 'cattail',
    name: 'Espadaña (juncia)',
    region: 'Todo el mundo (humedales)',
    season: 'De primavera a otoño',
    identification: [
      'Plantas altas parecidas a los juncos (1-3 m) junto al agua',
      'Espiga floral marrón cilíndrica (parece un perrito caliente en un palo)',
      'Hojas largas, planas y en forma de hoja de cuchillo',
      'Rizomas subterráneos — raíces gruesas y almidonadas',
    ],
    preparation: [
      'Brotes jóvenes: pela y come crudos o cocidos (como los brotes de bambú)',
      'Espiga floral: ásala sobre el fuego; el polen puede usarse como harina',
      'Rizomas: excávalos, pélanos y hiérvellos o ásalos — almidonados y saciantes',
      'Raíces: muélelas en agua para extraer almidón para cocinar',
    ],
    warnings: [
      'Recolecta solo de fuentes de agua limpias',
      'No la confundas con lirios — el lirio tiene hojas planas, la espadaña tiene sección transversal en V',
      'El polen puede causar reacciones alérgicas en algunas personas',
    ],
  },
  {
    id: 'pine',
    name: 'Pino',
    region: 'Todo el mundo (hemisferio norte)',
    season: 'Todo el año',
    identification: [
      'Siempreverde con acículas en grupos de 2-5',
      'Piñas con escamas leñosas',
      'Fuerte olor aromático de resina',
      'Corteza escamosa o en placas según la especie',
    ],
    preparation: [
      'Corteza interior: pela y come cruda, o sécala y tritúrala en harina',
      'Acículas: infusiona en agua caliente para té de vitamina C (no hiervas)',
      'Piñones: extráelos de las piñas, cómelos crudos o tostados',
      'Resina: úsala como antiséptico para heridas o como impermeabilizante',
    ],
    warnings: [
      'Evita el tejo, el pino ponderosa y el pino de Norfolk — son tóxicos',
      'No hiervas el té de acículas — destruye la vitamina C',
      'La corteza interior debe arrancarse de las ramas, nunca anilles el tronco',
    ],
  },
  {
    id: 'clover',
    name: 'Trébol',
    region: 'Todo el mundo (zonas templadas)',
    season: 'De primavera a otoño',
    identification: [
      'Hojas de tres lóbulos (a veces con marca blanca en V)',
      'Capítulos florales pequeños y redondos — blancos, rosados o rojos',
      'Tallos rastreros que enraízan en los nudos',
      'Frecuente en campos, céspedes y terrenos removidos',
    ],
    preparation: [
      'Flores: cómelas crudas, sabor dulce',
      'Hojas: cómelas crudas en ensaladas o cocidas como las espinacas',
      'Flores y hojas secas: infúndelas para té',
      'Semillas: recógelas y tritúralas en harina — alto contenido en proteína',
    ],
    warnings: [
      'Algunas personas digieren mal el trébol crudo — empieza con poco',
      'El trébol rojo puede tener leves propiedades anticoagulantes',
      'Come solo de zonas libres de productos químicos',
    ],
  },
  {
    id: 'acorn',
    name: 'Bellota',
    region: 'Todo el mundo (zonas con robles)',
    season: 'Otoño',
    identification: [
      'Cúpula característica que sujeta la nuez',
      'Nuez ovalada con punta afilada',
      'Se encuentra bajo los robles en otoño',
      'El ácido tánico hace las bellotas crudas amargas y levemente tóxicas',
    ],
    preparation: [
      'Parte las cáscaras y extrae los frutos',
      'Elimina los taninos remojando en varias aguas (3-7 días)',
      'Alternativamente, hiérvelas en varias aguas hasta que el agua quede clara',
      'Seca las bellotas lixiviadas y tritúralas en harina',
      'La harina sirve para pan, gachas o espesar sopas',
    ],
    warnings: [
      'Nunca comas bellotas crudas — los taninos dañan los riñones y provocan malestar estomacal',
      'Cambia el agua hasta que ya no sepa amarga',
      'Algunas personas son alérgicas al polen de roble — prueba pequeñas cantidades primero',
    ],
  },
];

const EVACUATION_PLANS: EvacuationPlan[] = [
  {
    id: 'wildfire',
    name: 'Evacuación por incendio forestal',
    scenario: 'Incendio forestal acercándose a tu zona',
    route: [
      'Vigila el avance del incendio — conoce 2 rutas de escape de tu zona',
      'Prepara la mochila de evacuación (documentos, agua, primeros auxilios, efectivo, medicamentos)',
      'Aparca los vehículos con la salida hacia fuera y carga lo esencial',
      'Cierra todas las ventanas y puertas y retira objetos inflamables alrededor de la casa',
      'Sal temprano — no esperes a ver el fuego',
      'Sigue las rutas de evacuación designadas y evita atajos por la vegetación',
    ],
    checklist: [
      'Mochila preparada junto a la puerta',
      'Vehículos con tanque lleno y listos',
      'Documentos importantes en bolsa impermeable',
      'Medicamentos y gafas',
      'Agua y comida para 3 días',
      'Cargador de móvil y batería externa',
      'Efectivo en billetes pequeños',
      'Suministros para mascotas si procede',
    ],
    timeEstimate: 'Sal entre 2 y 4 horas antes de que llegue el fuego',
  },
  {
    id: 'flood',
    name: 'Evacuación por inundación',
    scenario: 'Subida del nivel del agua, alerta de inundación repentina',
    route: [
      'Sube a un terreno más alto de inmediato — no esperes órdenes',
      'Nunca camines ni conduzcas por agua en movimiento — 15 cm te tiran al suelo',
      'Evita los puentes sobre agua rápida',
      'Si quedas atrapado en un edificio, ve al piso más alto — no vayas a una buhardilla cerrada',
      'Si el agua sube dentro, sube a la cubierta y pide ayuda con señales',
    ],
    checklist: [
      'Mochila de emergencia con recipiente impermeable',
      'Bolsa impermeable para electrónicos',
      'Medicamentos',
      'Ropa de abrigo en bolsa impermeable',
      'Linterna y pilas',
      'Silbato para señales',
    ],
    timeEstimate: 'Evacúa en cuanto te avisen — en las inundaciones repentinas cuentan los minutos',
  },
  {
    id: 'earthquake',
    name: 'Evacuación por terremoto',
    scenario: 'Terremoto fuerte — se esperan réplicas y daños estructurales',
    route: [
      'Durante el temblor: agáchate, cúbrete y agárrate — bajo muebles resistentes',
      'Cuando pare el temblor: revisa heridas y apaga incendios pequeños',
      'Evacúa el edificio si está dañado — usa las escaleras, nunca los ascensores',
      'Ve a una zona abierta lejos de edificios, líneas eléctricas y árboles',
      'Espera réplicas — prepárate para agacharte y cubrirte otra vez',
      'Si quedas atrapado: golpea tuberías o paredes, no grites — ahorra energía',
    ],
    checklist: [
      'Zapatos resistentes junto a la cama',
      'Linterna al alcance',
      'Silbato de emergencia',
      'Botiquín',
      'Mochila de emergencia cerca de la salida',
      'Conoce los puntos seguros de cada habitación',
    ],
    timeEstimate: 'Evacúa inmediatamente después del temblor si el edificio está dañado',
  },
  {
    id: 'hurricane',
    name: 'Evacuación por huracán',
    scenario: 'Huracán o tifón acercándose — zona de evacuación obligatoria',
    route: [
      'Evacúa cuando te lo ordenen — no esperes a que llegue la tormenta',
      'Sigue las rutas de evacuación designadas — espera mucho tráfico',
      'Llena los vehículos de combustible antes de salir',
      'Asegura o tabala las ventanas con contrachapado',
      'Sube los objetos importantes a la habitación interior más alta si no evacúas',
      'Corta los servicios en los interruptores generales si hay tiempo',
    ],
    checklist: [
      'Mochila con 5 días de suministros',
      'Efectivo (los cajeros pueden fallar)',
      'Tanque de combustible lleno',
      'Documentos importantes',
      'Medicamentos para 2 semanas',
      'Transportines y comida de mascotas',
      'Mapas de las rutas de evacuación',
      'Radio meteorológica a pilas',
    ],
    timeEstimate: 'Evacúa entre 24 y 48 horas antes de la llegada prevista',
  },
  {
    id: 'nuclear',
    name: 'Evacuación por evento nuclear',
    scenario: 'Explosión nuclear, incidente en reactor o alerta de caída radiactiva',
    route: [
      'Si estás dentro: quédate — el edificio protege frente a la caída radiactiva',
      'Si estás fuera: encuentra de inmediato el edificio resistente más cercano',
      'Ve al centro del edificio, lejos de ventanas y cubierta',
      'Quítate la ropa exterior y métela en una bolsa de plástico',
      'Dúchate o lávate bien la piel expuesta',
      'Presta atención a las instrucciones oficiales sobre evacuación o refugio in situ',
    ],
    checklist: [
      'Pastillas de yoduro de potasio si estás en la zona afectada',
      'Mascarillas de polvo o tela para respirar',
      'Suministro de agua sellado',
      'Conservas con abrelatas manual',
      'Lámina de plástico y cinta americana para sellar la habitación',
      'Radio a pilas',
      'Contador Geiger si hay disponible',
    ],
    timeEstimate:
      'Actúa en minutos — la exposición a la radiación baja rápido con la distancia y el blindaje',
  },
];

const COMMUNICATION_METHODS: CommunicationMethod[] = [
  {
    id: 'ham-radio',
    name: 'Radioafición',
    range: 'Local a mundial (con rebote de ondas)',
    powerSource: 'Batería de 12 V, panel solar, manivela o vehículo',
    setup:
      'Antena: dipolo o látigo vertical (5-10 m de cable). Sintoniza las frecuencias locales de emergencia (146,520 MHz VHF, 7,240 MHz HF). Usa simplex para lo local y repetidores para lo regional.',
    useCase: 'Comunicación de largo alcance, redes de emergencia, coordinación con equipos de rescate',
  },
  {
    id: 'walkie-talkie',
    name: 'Walkie-talkie (FRS/GMRS)',
    range: '1-5 km según el terreno',
    powerSource: 'Pilas AA o recargables',
    setup:
      'Pone todas las unidades en el mismo canal y código de privacidad. Usa el canal 1 para simplex de emergencia. Mantén las transmisiones cortas para ahorrar batería.',
    useCase: 'Comunicación de grupo a corta distancia, patrullas, coordinación de búsquedas',
  },
  {
    id: 'whistle-relay',
    name: 'Relay por código de silbato',
    range: '500 m - 1 km en terreno abierto',
    powerSource: 'Ninguna — funciona con energía humana',
    setup:
      'Tres toques = socorro. Dos toques = todo despejado. Un toque = acuse de recibo. Coloca puntos de relevo cada 500 m en terreno alto.',
    useCase: 'Comunicación sin electrónica, señales nocturnas, comunicación con personas con discapacidad auditiva',
  },
  {
    id: 'mirror-heliograph',
    name: 'Heliógrafo de espejo',
    range: 'Más de 10 km con condiciones claras',
    powerSource: 'Luz solar',
    setup:
      'Orienta el espejo para reflejar la luz solar hacia el objetivo. Destella 3 veces para socorro, 1 destello para acuse. Usa la técnica del agujero de puntería para mayor precisión.',
    useCase: 'Señales de largo alcance de día, rescate aéreo, rescate en montaña',
  },
  {
    id: 'fire-smoke',
    name: 'Señales de fuego y humo',
    range: '5-15 km según las condiciones',
    powerSource: 'Madera, vegetación verde, caucho (para humo oscuro)',
    setup:
      'Tres fuegos en triángulo = señal de socorro. Añade hojas verdes para humo blanco (de día). El humo oscuro de aceite o caucho se ve contra las nubes.',
    useCase: 'Señales nocturnas, días encapotados, baliza de rescate persistente',
  },
  {
    id: 'ground-signals',
    name: 'Señales tierra-aire',
    range: 'Visibles desde aeronaves a baja altura',
    powerSource: 'Ninguna — usa piedras, troncos o patrones pisados',
    setup:
      'Forma de V = necesito asistencia. X = necesito ayuda médica. I = me muevo en esta dirección. Las letras deben medir 3 m o más con colores de contraste.',
    useCase: 'Esperas de búsqueda aérea, terreno abierto, varado o herido',
  },
];

export default {
  EMERGENCY_KITS,
  FIRST_AID_TOPICS,
  SIGNAL_METHODS,
  WATER_PURIFICATION_METHODS,
  SHELTER_TYPES,
  FOOD_FORAGING,
  EVACUATION_PLANS,
  COMMUNICATION_METHODS,
};
