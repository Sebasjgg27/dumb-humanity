import type { Scenario } from '../scenarios';

export default [
  {
    id: 'island',
    title: 'Náufrago en una isla',
    environment: 'Costa tropical',
    dangerLevel: 3,
    priorityActions: [
      'Mantén la calma y evalúa tu situación desde un punto alto',
      'Encuentra o construye un refugio por encima de la línea de marea alta antes del anochecer',
      'Pide rescate: crea grandes señales aire-tierra (SOS, V) con rocas o materiales de contraste',
      'Busca agua dulce: busca arroyos, recoge agua de lluvia o construye un destilador solar',
      'NO bebas agua salada — acelera la deshidratación',
    ],
    dangers: [
      'Deshidratación por falta de agua dulce',
      'Exposición al sol y golpe de calor',
      'Corrientes de retorno (rip currents) y corrientes oceánicas fuertes',
      'Infecciones en cortes expuestos al agua salada',
      'Hipotermia por la noche incluso en climas tropicales',
    ],
    shelter:
      'Construye una plataforma elevada por encima de la línea de marea alta con madera a la deriva y hojas de palmera. Refugio inclinado (lean-to) orientado a contraviento. Usa hojas grandes como impermeabilización. No duermas sobre la arena desnuda — retiene el frío por la noche.',
    water:
      'Recoge agua de lluvia con hojas grandes o recipientes ahuecados. Construye un destilador solar: cava un hoyo, coloca un recipiente en el centro, cúbrelo con plástico y pon una piedra pequeña sobre el recipiente para que la condensación gotee dentro. Los arroyos costeros cerca de vegetación pueden tener agua dulce.',
    fire:
      'La madera a la deriva arde bien una vez seca. Usa un taladro de arco con bambú o madera blanda a la deriva. Las fibras del coco son un excelente cebo. Recoge material seco por encima de la zona de salpicaduras. Mantén el fuego una vez encendido — el humo es una señal.',
    food:
      'Coco (agua y carne), cangrejos de orilla, mariscos, peces con lanza o anzuelo improvisado. Las algas son comestibles. Evita bayas o plantas desconocidas.',
    signals: [
      'Gran SOS o V (necesito ayuda) en la playa con rocas oscuras sobre arena clara',
      'Tres de cualquier cosa es una señal de emergencia (3 fuegos, 3 silbatos, 3 destellos)',
      'Espejo o superficie reflectante para señalar aeronaves o barcos que pasan',
      'Ropa o materiales brillantes colocados en un punto alto',
      'Mantén una señal de humo durante el día y fuego por la noche',
    ],
    commonMistakes: [
      'Beber agua salada — causa deshidratación más rápida',
      'Alejarte de la costa — dificulta que te encuentren',
      'Nadar hacia un barco lejano',
      'Comer mariscos desconocidos sin prueba de seguridad',
      'Esconderte del sol en lugar de señalar activamente',
    ],
    linkedTech: ['water', 'fire', 'shelter', 'cordage', 'hunting_trapping', 'first_aid', 'signaling'],
  },
  {
    id: 'desert',
    title: 'Perdido en el desierto',
    environment: 'Arena y roca áridas',
    dangerLevel: 4,
    priorityActions: [
      'Quédate quieto durante el día — viaja solo al amanecer, al anochecer o de noche',
      'Busca sombra de inmediato o créala con ropa o escombros',
      'Raciona el agua: sorbos pequeños durante el día, cantidades mayores por la noche',
      'Pide rescate: usa destellos de espejo, tela brillante o señales en el suelo',
      'Ahorra energía — cubre toda la piel y muévete lo menos posible',
    ],
    dangers: [
      'Deshidratación — puede ser mortal en 2-3 días',
      'Hipertermia — la temperatura corporal sube rápido sin sombra',
      'Hipotermia por la noche — las temperaturas del desierto pueden bajar más de 30 grados tras la puesta de sol',
      'Tormentas de arena que reducen la visibilidad y la respiración',
      'Animales venenosos escondidos en los puntos de sombra',
    ],
    shelter:
      'De día: excava en la arena o usa salientes rocosos para darte sombra. Construye una sombra elevada del suelo con palos y tela. De noche: aíslate del frío del suelo con capas de arbusto. Orienta la abertura del refugio a contraviento.',
    water:
      'Busca cauces secos (uadis) y excava — el agua puede estar justo bajo la superficie. Busca vegetación verde — las raíces indican agua. Construye un destilador solar en un lugar soleado. Algunos cactus contienen líquido bebible pero la mayoría son tóxicos: usa solo el cactus de barril si lo identificas correctamente.',
    fire:
      'Usa arbustos secos, cactus muertos o estiércol. La madera del desierto arde intensa y rápido. Un fuego por la noche da calor y sirve de señal. Usa un muro reflector de fuego para dirigir el calor hacia el refugio.',
    food:
      'La comida es menos crítica que el agua — el cuerpo sobrevive semanas sin comer. Si hay: insectos, lagartijas, pequeños animales del desierto. Muchas plantas del desierto son tóxicas. No comas nada si no estás seguro de la identificación.',
    signals: [
      'El destello de un espejo se ve a kilómetros en el aire limpio del desierto',
      'Tres fuegos en triángulo',
      'Señales en el suelo: gran X o SOS en arena abierta',
      'Ropa brillante drapada sobre arbustos o rocas',
      'Material reflectante en terreno alto para las aeronaves',
    ],
    commonMistakes: [
      'Viajar con el calor del mediodía',
      'Exhaustarte buscando agua en lugar de quedarte quieto',
      'Beber jugo de cactus sin identificación correcta',
      'Abandonar tu vehículo (es más fácil de localizar que una persona)',
      'Caminar bajo el calor — atrincherate y espera el rescate',
    ],
    linkedTech: ['water', 'fire', 'shelter', 'signaling', 'first_aid', 'clothing'],
  },
  {
    id: 'arctic',
    title: 'Supervivencia en el Ártico',
    environment: 'Naturaleza helada',
    dangerLevel: 5,
    priorityActions: [
      'Mantente seco — la humedad mata más rápido que el frío (elimina 25 veces más calor que el aire seco)',
      'Construye un refugio cortavientos de inmediato — la sensación térmica es el asesino principal',
      'Enciende un fuego con cualquier combustible disponible — ramas muertas, musgo, aceite de foca',
      'No sudes — abre las capas antes del esfuerzo y ciérralas antes de parar',
      'Conserve calorías: muévete lenta y deliberadamente',
    ],
    dangers: [
      'Hipotermia — la temperatura corporal central baja de 35 °C',
      'Congelación — las extremidades se congelan en minutos con sensación térmica extrema',
      'Riesgo de avalancha en terreno montañoso',
      'Ventisca blanca (whiteout) que causa desorientación',
      'Fuentes de agua congeladas — no se puede beber hielo sin derretirlo antes',
    ],
    shelter:
      'Zanja de nieve: cava una zanja de 1 m de ancho, 2 m de largo y 1,5 m de profundidad. Pon ramas en el fondo como aislante. Cúbrelo con ramas y bloques de nieve. El calor corporal calentará el espacio por encima de la congelación. Refugio de nieve tipo iglú si la nieve es lo bastante compacta. Aíslate siempre del suelo.',
    water:
      'Derrite nieve o hielo — NUNCA comas nieve directamente (baja la temperatura central). Usa un recipiente de metal sobre el fuego. Las rocas de color oscuro absorben calor solar y pueden derretir nieve. Evita el hielo amarillo o azulado (el hielo marino viejo tiene menos sal y es más seguro). Recoge el agua derretida de rocas calentadas por el fuego.',
    fire:
      'Empieza con corteza de abedul, musgo seco o bolitas de algodón con vaselina. Usa un acero de fuego o una lupa. En condiciones húmedas, parte ramas muertas para encontrar madera seca en su interior. El aceite de foca o la grasa renderizada son excelentes iniciadores. Guarda combustible para la noche.',
    food:
      'Insectos bajo la corteza, trampas para fauna menor junto a las huellas, peces por agujeros en el hielo. El liquen es comestible tras hervirlo. El té de agujas de pino aporta vitamina C. En frío extremo el cuerpo quema más de 5000 calorías al día — comer es supervivencia, no un lujo.',
    signals: [
      'Tela naranja o roja brillante contra la nieve blanca',
      'Tres fuegos en triángulo',
      'Destello de espejo contra la nieve — extremadamente visible',
      'SOS estampado en nieve nueva visto desde arriba',
      'Montón de material de contraste (rocas oscuras, ramas) sobre nieve abierta',
    ],
    commonMistakes: [
      'Comer nieve directamente — baja la temperatura corporal central',
      'Exceso de esfuerzo que causa sudor — la ropa mojada mata en el frío',
      'Viajar de noche sin iluminación adecuada',
      'Ignorar los signos iniciales de congelación (entumecimiento, piel blanca cerosa)',
      'Dormir directamente sobre nieve o hielo sin aislamiento',
    ],
    linkedTech: ['fire', 'shelter', 'clothing', 'hunting_trapping', 'cordage', 'first_aid', 'signaling'],
  },
  {
    id: 'jungle',
    title: 'Perdido en la selva',
    environment: 'Bosque tropical denso',
    dangerLevel: 4,
    priorityActions: [
      'Quédate en el sendero o cerca de una fuente de agua — es más fácil que te encuentren',
      'Construye un refugio elevado del suelo antes del anochecer — el suelo está lleno de insectos y depredadores',
      'Purifica TODA el agua antes de beberla — el agua de selva transporta parásitos y bacterías',
      'Mantente visible: crea zonas despejadas y ten listo un fuego de señalización',
      'Muévete despacio y revisa todo — hay serpientes, arañas e insectos venenosos por todas partes',
    ],
    dangers: [
      'Enfermedades transmitidas por insectos (malaria, dengue) — la primera causa de muerte en la selva tropical',
      'Serpientes y arañas venenosas escondidas en la vegetación y en el suelo',
      'Inundaciones repentinas en zonas bajas y cauces de ríos',
      'Infecciones fúngicas por la humedad constante',
      'Desorientación — el dosel denso bloquea el sol y los puntos de referencia',
    ],
    shelter:
      'Plataforma elevada entre dos árboles con palos atados, a al menos 1 metro del suelo. Techo de teja con capas gruesas de hojas grandes. Cierra todos los lados para evitar insectos. NUNCA duermas en el suelo — hormigas, serpientes y escorpiones están en todas partes.',
    water:
      'Los arroyos de agua corriente son los más seguros — pero igual purifícalos hirviendo al menos 1 minuto. Recoge agua de lluvia con hojas grandes formando embudos. Agua de liana: corta una liana gruesa primero arriba y luego abajo — bebe el agua que gotea. Evita las lianas de látex lechoso o de sabor amargo.',
    fire:
      'Extremadamente difícil en selva húmeda. Recoge cebo seco del interior de troncos huecos y bajo el dosel denso. El bambú partido contiene material seco interior. Usa corteza similar al abedul de los árboles tropicales. El fuego es esencial para purificar agua, ahuyentar insectos y señalar.',
    food:
      'Corazones de palmera (corta la punta tierna de las palmeras jóvenes), brotes de bambú (deben cocinarse), insectos (hormigas, larvas, termitas son ricos en proteínas), nueces de Brasil si hay disponibles. Evita ranas e insectos de colores vivos — casi siempre son tóxicos.',
    signals: [
      'Despeja una zona visible cerca de un río o con cielo abierto',
      'Mantén una señal de humo con hojas verdes sobre el fuego para humo blanco',
      'Tela brillante en ramas altas visible desde el aire',
      'Tres fuegos en triángulo',
      'Salvas de silbato — el sonido viaja lejos entre la vegetación densa',
    ],
    commonMistakes: [
      'Beber agua de selva sin purificar — los parásitos están en todas partes',
      'Dormir en el suelo',
      'Abrirte paso por vegetación densa sin comprobar si hay serpientes',
      'Ignorar cortes y raspones — la infección aparece en horas con la humedad',
      'Intentar salir caminando en una dirección aleatoria',
    ],
    linkedTech: ['water', 'fire', 'shelter', 'cordage', 'medicine_herbal', 'first_aid', 'signaling'],
  },
  {
    id: 'mountain',
    title: 'Emergencia en la montaña',
    environment: 'Alta montaña / alpino',
    dangerLevel: 4,
    priorityActions: [
      'Desciende por debajo de la línea de bosque si es posible — el mal de altura por encima de 2500 m es mortal',
      'Busca refugio del viento y las precipitaciones — la exposición mata más rápido en altura',
      'Enciende un fuego si estás bajo la línea de bosque — por encima usa combustible de hornillo o plantas alpinas muertas',
      'Mantente hidratado — la deshidratación acelera el mal de altura',
      'NO continúes ascendiendo si tienes dolor de cabeza, náuseas o confusión',
    ],
    dangers: [
      'Mal de altura (AMS) — dolor de cabeza, náuseas, confusión; puede progresar hasta la muerte',
      'Hipotermia — las temperaturas bajan 6 °C por cada 1000 m de altitud',
      'Caídas en terreno empinado o helado',
      'Rayos — el punto más alto de la zona atrae los impactos',
      'Caída de rocas y avalanchas',
    ],
    shelter:
      'Bajo la línea de bosque: zanja de nieve o lean-to contra una pared rocosa con cortavientos. Por encima de la línea de bosque: construye un refugio cortavientos con rocas y ramas apiladas. Usa un bivak de emergencia o manta térmica para retener el calor corporal. Aíslate del suelo con ramas, ramas de pino o nieve.',
    water:
      'Derrite nieve con el calor corporal en una botella de agua dentro de la ropa, o dórtela sobre un fuego pequeño. Los arroyos de agua corriente a menor altitud suelen ser seguros, pero igual debes purificarlos. La deshidratación en altura es extremadamente peligrosa — bebe al menos 4 litros al día.',
    fire:
      'Bajo la línea de bosque: madera caída, corteza de abedul, madera impregnada de resina de pino. Por encima: muy difícil — usa combustible de hornillo o recoge hierba y musgo alpino seco. Enciende el fuego en un lugar protegido. Las rocas alrededor del fuego conservan el calor durante horas.',
    food:
      'Té de agujas de pino (vitamina C), insectos bajo las rocas, fauna menor cerca del límite del bosque. Los liquenes son comestibles tras hervirlos. El cuerpo quema más calorías en altura por el frío y el esfuerzo. Prioriza mantenerte caliente por encima de encontrar comida.',
    signals: [
      'Destello de espejo visible a kilómetros en el aire limpio de montaña',
      'Ropa brillante en crestas o laderas abiertas',
      'Tres fuegos en triángulo',
      'Salvas de silbato — el sonido ecoa en los valles',
      'Estampa SOS en nieve desde una posición elevada',
    ],
    commonMistakes: [
      'Seguir ascendiendo con síntomas de mal de altura',
      'Descender de noche o con tormenta',
      'Quitarse ropa para no sudar y luego pararse — el enfriamiento rápido mata',
      'Beber de arroyos sin purificar a menor altitud',
      'Ignorar las señales iniciales de congelación en dedos, nariz y orejas',
    ],
    linkedTech: ['water', 'fire', 'shelter', 'clothing', 'cordage', 'first_aid', 'signaling'],
  },
  {
    id: 'ocean',
    title: 'A la deriva en el mar',
    environment: 'Océano abierto',
    dangerLevel: 5,
    priorityActions: [
      'Quédate con el barco o el dispositivo de flotación — NO nades',
      'Señala de inmediato: silbato, destello de espejo, ropa brillante en el mástil o en la cabeza',
      'Raciona comida y agua — el cuerpo necesita mínimo 1 litro de agua al día',
      'Protégete del sol y la rociada — la hipotermia por viento y humedad es una amenaza constante',
      'Pesca comida con anzuelos improvisados de imperdibles, alambre o espinas',
    ],
    dangers: [
      'Deshidratación — el agua salada no es bebible y acelera la muerte',
      'Hipotermia por viento, rociada e inmersión',
      'Quemaduras solares y golpe de calor durante el día',
      'Tiburones atraídos por el movimiento, la sangre y las salpicaduras',
      'Colapso psicológico por el aislamiento y la monotonía',
    ],
    shelter:
      'Si estás en una balsa: mantente bajo y en el centro para evitar volcar. Usa la vela o una lona como sombra. Si estás en agua abierta: aférrate a cualquier objeto flotante. Mantente lo más seco posible — la ropa mojada con viento causa pérdida rápida de calor. Una lona sobre un armazón de madera a la deriva crea un refugio básico en una playa.',
    water:
      'Destilador solar con bolsa de plástico o recipiente: el agua de evapora al sol, se condensa en el plástico y gotea al recipiente recolector. Recoge agua de lluvia con cualquier recipiente abierto o tela. La orina es bebible solo en extrema desesperación y debe ser el último recurso. RACIONA: da sorbos, no tragues.',
    fire:
      'Casi imposible en una balsa. Si estás en una playa: madera a la deriva con secciones secas, algas secas, vainas de semillas parecidas a plumas. Usa la técnica del taladro de arco. El fuego en agua abierta sirve principalmente de señal — mantén uno encendido siempre en tierra.',
    food:
      'Pesca con anzuelos improvisados de imperdobles doblados, alambre o hueso tallado. Captura peces voladores que caen a la balsa. Come algas (las marrones y verdes son comestibles, las rojas no). Las aves marinas indican tierra cercana. Las tortugas y aves marinas pueden indicar proximidad de una isla.',
    signals: [
      'Silbato: 3 salvas repetidas es emergencia universal',
      'Destello de espejo hacia aeronaves — visible a más de 16 km en agua abierta',
      'Tela brillante en el punto más alto de la balsa o del barco',
      'Tres fuegos en la playa en triángulo',
      'Salpica rítmicamente — contrasta con el patrón aleatorio de las olas',
    ],
    commonMistakes: [
      'Beber agua salada — garantiza la muerte más rápido que la deshidratación sola',
      'Nadar hacia un barco o una luz lejana',
      'Comer hígado de pescado en grandes cantidades (concentración tóxica de vitamina A)',
      'Descuidar la balsa — asegurar y mantener la flotabilidad es la prioridad número 1',
      'Rendirse antes del rescate — barcos y aeronaves buscan zonas amplias durante días',
    ],
    linkedTech: ['water', 'fire', 'hunting_trapping', 'cordage', 'first_aid', 'signaling'],
  },
  {
    id: 'urban-ruins',
    title: 'Supervivencia en ruinas urbanas',
    environment: 'Ciudad tras el colapso',
    dangerLevel: 4,
    priorityActions: [
      'Sal de las calles — las estructuras inestables colapsan sin aviso',
      'Busca un edificio sólido por encima de la planta baja (la planta baja es la más vulnerable a colapso e inundación)',
      'Asegura agua limpia: los sistemas municipales pueden estar contaminados, busca fuentes protegidas',
      'Evita las vías principales: escombros, viaductos colapsados y cuellos de botella peligrosos',
      'Recupera materiales útiles: herramientas, recipientes, cuerda, tela, combustible',
    ],
    dangers: [
      'Colapso estructural — los edificios debilitados caen sin aviso',
      'Agua contaminada por tuberías reventadas y mezcla con alcantarillado',
      'Propagación de incendios por edificios conectados y fugas de gas',
      'Suelo inestable, socavones y huecos ocultos de sótanos',
      'Amenazas humanas en entornos con recursos escasos',
    ],
    shelter:
      'Las estructuras de hormigón armado son las más seguras. Pisos por encima de la planta baja. Evita edificios con grietas visibles en muros de carga. Barrica las entradas. Usa muebles como refuerzo. Los sótanos protegen de arriba pero implican riesgo de inundación y colapso.',
    water:
      'Los depósitos de agua caliente (cierra primero gas/electricidad) contienen agua limpia. Las cisternas de inodoro (no las tazas) si no están tratadas químicamente. Agua de lluvia recogida de techos limpios. Hierve toda el agua al menos 1 minuto. Pastillas purificadoras de farmacias o tiendas de deporte.',
    fire:
      'Usa muebles de oficina, paletas de madera y libros como combustible. Evita fuegos cerca de tuberías de gas o almacenes químicos. Usa un recipiente metálico cerrado o un hornillo. Los fuegos en edificios se propagan rápido por estructuras conectadas. Mantén el fuego de un tamaño manejable.',
    food:
      'Conservas (comprueba si están abombadas — deséchalas si lo están), máquinas expendedoras, comedores de oficina, restaurantes, tiendas de alimentación. Prioriza alimentos densos en calorías. Arroz, pasta y productos secos de los hogares. Raciona con cuidado — el forrajeo urbano se vuelve más difícil con el tiempo.',
    signals: [
      'Tela o pintura brillante en cubiertas para aeronaves',
      'Destello de espejo desde pisos altos hacia zonas abiertas',
      'Las señales sonoras recorren los cañones urbanos — silbato o golpes de metal',
      'Marca tu ubicación con señales grandes y visibles',
      'Señales nocturnas con fuego en zonas abiertas controladas',
    ],
    commonMistakes: [
      'Entrar en edificios claramente dañados — los réplicas causan colapsos tardíos',
      'Usar ascensores — se convierten en trampas mortales',
      'Ignorar fugas de gas — una chispa provoca una explosión catastrófica',
      'Recoger agua de charcos o ríos urbanos contaminados',
      'Viajar solo por ruinas desconocidas de noche',
    ],
    linkedTech: ['water', 'fire', 'shelter', 'first_aid', 'signaling', 'saltpeter'],
  },
] as Scenario[];
