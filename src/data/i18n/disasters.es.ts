import type { Disaster } from '../disasters';

export default [
  {
    id: 'earthquake',
    title: 'Terremoto',
    type: 'natural',
    dangerLevel: 5,
    priorityActions: [
      'AGÁCHATE, CÚBRETE Y AGÁRRATE — métete bajo una mesa o escritorio resistente',
      'Si estás en la calle, ve a un espacio abierto lejos de edificios, árboles y líneas eléctricas',
      'Si conduces, detente en un lugar despejado y quédate dentro del vehículo',
      'Cuando dejen de temblar, revisa heridas y administra primeros auxilios',
      'Evacua si el edificio está dañado — las réplicas pueden provocar colapsos',
    ],
    dangers: [
      'Colapso de edificios que atrapa o aplasta a las víctimas',
      'Escombros que caen — vidrios, carteles, materiales de fachada',
      'Las réplicas pueden ser casi tan fuertes como el sismo inicial',
      'Riesgo de tsunami si el terremoto es costero o submarino',
      'Tuberías de gas rotas que causan incendios y explosiones',
    ],
    shelter:
      'Si estás dentro: quédate bajo muebles resistentes hasta que pare el temblor. Si el edificio está dañado, evacua de inmediato. Evita los marcos de puertas — es un mito. Busca terreno abierto lejos de estructuras. Usa protección improvisada para la cabeza (mochila, almohada, chaqueta doblada).',
    water:
      'Cierra la llave general si las tuberías están dañadas. Recoge agua de calentadores, cisternas de inodoro (no las tazas) o del hielo que se derrita. El agua municipal puede estar contaminada — hiérvela o purifícala antes de beber.',
    fire:
      'Los incendios pequeños se pueden apagar con los materiales disponibles. Cierra el gas si hueles fuga. Evita llamas abiertas cerca de tuberías dañadas. Usa el fuego solo en zonas abiertas y ventiladas.',
    food:
      'Conservas de tiendas o casas dañadas (comprueba si están abombadas). Máquinas expendedoras. Prioriza recipientes sellados e intactos. Raciona las existencias — el rescate puede tardar días.',
    signals: [
      'Silbato desde dentro de los escombros — tres salvas repetidas',
      'Golpea tuberías o paredes para avisar a los rescatistas',
      'Tela brillante visible desde arriba si estás en pisos altos',
      'Usa la linterna del móvil si queda batería — ahorra energía',
      'Los mensajes de texto consumen menos batería que las llamadas — prueba primero el SMS',
    ],
    commonMistakes: [
      'Ponerte en el marco de una puerta — no es más seguro que en ningún otro sitio',
      'Salir corriendo durante el temblor — los escombros que caen matan',
      'Ignorar fugas de gas — una chispa provoca una explosión',
      'Usar ascensores después de un terremoto',
      'Volver a un edificio dañado por tus pertenencias',
    ],
    linkedTech: ['water', 'fire', 'shelter', 'first_aid', 'signaling'],
  },
  {
    id: 'tsunami',
    title: 'Tsunami',
    type: 'natural',
    dangerLevel: 5,
    priorityActions: [
      'Si sientes un terremoto fuerte cerca de la costa, ve a un terreno alto INMEDIATAMENTE',
      'No esperes una alerta oficial — el terremoto ES la alerta',
      'Sube al menos 30 metros sobre el nivel del mar o 2 km tierra adentro',
      'Si ves que el mar se retira de forma drástica, corre — una ola enorme está a minutos',
      'Quédate en alto hasta que las autoridades confirmen que el peligro pasó',
    ],
    dangers: [
      'Las oleadas masivas pueden alcanzar más de 30 metros de altura',
      'El agua arrastra escombros — coches, edificios y árboles se vuelven proyectiles',
      'Olas múltiples — la primera rara vez es la mayor',
      'Las corrientes fuertes persisten durante horas tras la ola inicial',
      'El agua de inundación contaminada propaga enfermedades',
    ],
    shelter:
      'Llega a un terreno alto de inmediato — el único refugio fiable es la altura. Si quedas atrapado en un edificio, sube al piso más alto. Los edificios de hormigón son los más resistentes. Nunca vayas a la playa a mirar.',
    water:
      'Después del tsunami, toda el agua subterránea está contaminada con sal, alcantarillado y químicos. Recoge agua de lluvia. Purifica cualquier fuente de agua dulce antes de beber. Los pozos costeros salarán durante semanas.',
    fire:
      'Pueden haber pequeños incendios por los escombros. Ten cuidado — las tuberías de gas pueden estar rotas. Fuego solo en zonas abiertas. El combustible puede escasear tras la inundación.',
    food:
      'Conservas en los pisos altos de los edificios. Cualquier cosa sellada y por encima del nivel de la inundación. Desecha todo alimento que haya tocado agua de inundación. Puede ser posible pescar cuando baje el agua.',
    signals: [
      'Ropa o tela brillante en la cubierta',
      'Destello de espejo desde terreno alto',
      'Salvas de silbato — el sonido se oí sobre el agua que corre',
      'Tres fuegos en terreno alto en triángulo',
      'Mantente visible para el rescate en helicóptero en terreno alto y abierto',
    ],
    commonMistakes: [
      'Ir a la playa a mirar la ola',
      'Evacuar hacia zonas bajas en lugar de terreno alto',
      'Volver a la costa demasiado pronto — llegan varias olas',
      'Caminar por el agua de inundación que retrocede — las corrientes son mortales',
      'Ignorar el terremoto como señal de alerta',
    ],
    linkedTech: ['water', 'shelter', 'signaling', 'first_aid'],
  },
  {
    id: 'hurricane',
    title: 'Huracán / Tifón',
    type: 'natural',
    dangerLevel: 4,
    priorityActions: [
      'Evacúa si te lo ordenan — no demores ni intentes resistirlo en casa',
      'Tablas las ventanas con contrachapado o pega cinta en patrón X',
      'Llena bañeras y recipientes con agua antes de que llegue la tormenta',
      'Refúgiate en una habitación interior de la planta baja si no evacúas',
      'Aléjate de las ventanas — los vidrios que vuelan son una causa principal de lesiones',
    ],
    dangers: [
      'Vientos que superan los 250 km/h en tormentas de categoría 5',
      'Marejada ciclónica — agua del mar empujada tierra adentro, a menudo la amenaza más mortal',
      'Tornados generados por las bandas del huracán',
      'Inundaciones generalizas por 200-500 mm de lluvia',
      'Cortes de electricidad prolongados durante días o semanas',
    ],
    shelter:
      'Habitación interior en la planta más baja — baño, armario o pasillo. Lejos de todas las ventanas. Los edificios de hormigón o ladrillo son los más seguros. Las casas móviles son trampas mortales — evacúa a un refugio.',
    water:
      'Llena todos los recipientes antes de la tormenta. Los calentadores de agua guardan 30-80 galones de agua limpia. No bebas agua de inundación. Después de la tormenta, hierve o purifica toda el agua — el sistema de alcantarillado quedará comprometido.',
    fire:
      'Riesgo de incendio mínimo durante la tormenta — hay demasiada humedad. Después, cuidado con los cables caídos que producen chispas. Usa generadores SOLO fuera — el monóxido de carbono mata.',
    food:
      'Conservas y alimentos no perecederos almacenados antes de la tormenta. Abre el refrigerador solo cuando sea necesario — la comida se echa a perder rápido sin electricidad. Come primero los perecederos.',
    signals: [
      'Tela brillante en el techo después de la tormenta',
      'Silbato si quedas atrapado entre escombros',
      'Destello de espejo hacia las aeronaves de búsqueda',
      'Mantente visible en zonas abiertas para el rescate en helicóptero',
      'Marca tu ubicación con señales grandes y visibles',
    ],
    commonMistakes: [
      'Abrir ventanas para igualar la presión — es un mito y causa daños',
      'Salir durante el ojo de la tormenta — viene el otro lado',
      'Conducir por agua de inundación — 30 cm de agua pueden arrastrar un coche',
      'Usar velas durante un apagón — riesgo de incendio con daños estructurales',
      'Ignorar las órdenes de evacuación para proteger propiedades',
    ],
    linkedTech: ['water', 'shelter', 'signaling', 'first_aid'],
  },
  {
    id: 'tornado',
    title: 'Tornado',
    type: 'natural',
    dangerLevel: 5,
    priorityActions: [
      'Ve inmediatamente a la habitación interior más baja — sótano o bodega de tormentas',
      'Si no hay sótano, ve a un baño o armario de la planta baja',
      'Cúbrete con un colchón, mantas gruesas o un saco de dormir',
      'Si estás en una casa móvil, SAL — incluso un tornado F1 las destruye',
      'Si te coges en el exterior, túmbate en una cuneta y cúbrete la cabeza',
    ],
    dangers: [
      'Vientos que superan los 480 km/h en tornados EF5',
      'Escombros voladores — madera, vidrio, vehículos se vuelven misiles',
      'Destrucción total de estructuras en la trayectoria directa',
      'Los tornados pueden cambiar de dirección sin aviso',
      'Los tornados envueltos en lluvia son invisibles hasta que están sobre ti',
    ],
    shelter:
      'El sótano o la bodega de tormentas es lo mejor. Si no hay, habitación interior en la planta más baja — baño, armario, pasillo. Aléjate de ventanas, puertas y muros exteriores. Coloca la mayor cantidad de paredes posibles entre tú y el tornado.',
    water:
      'Recoge agua antes de la tormenta. Después del tornado, los calentadores y los recipientes sellados son seguros. El agua de inundación está contaminada — no la bebas. Hierve o purifica toda el agua.',
    fire:
      'Las roturas de tuberías de gas pueden provocar incendios. Cierra la llave principal si es seguro. Usa el fuego con precaución después de la tormenta. Evita los cables eléctricos caídos.',
    food:
      'Conservas almacenadas y alimentos no perecederos. La refrigerada puede echarse a perder sin luz. Conservas de edificios dañados (comprueba el estado).',
    signals: [
      'Tela brillante visible desde el aire en el campo de escombros',
      'Silbato si quedas atrapado bajo los escombros',
      'Destello de espejo hacia las aeronaves de búsqueda',
      'Tres fuegos en triángulo en una zona abierta',
      'Golpear los escombros para avisar a los equipos de rescate',
    ],
    commonMistakes: [
      'Intentar escapar del tornado en coche',
      'Abrir ventanas antes del tornado — pierdes tiempo crítico',
      'Refugiarte bajo un viaducto — el viento se acelera en los espacios estrechos',
      'Quedarse en una casa móvil — no ofrecen protección alguna',
      'Mirar el tornado en lugar de buscar refugio',
    ],
    linkedTech: ['shelter', 'first_aid', 'signaling', 'water'],
  },
  {
    id: 'flood',
    title: 'Inundación',
    type: 'natural',
    dangerLevel: 4,
    priorityActions: [
      'Sube a un terreno más alto de inmediato — no esperes a que el agua te alcance',
      'Nunca camines ni conduzcas por agua en movimiento — 15 cm te tiran al suelo',
      'Abandona el vehículo si se para con el agua subiendo — flotará y se volcará',
      'Evita los puentes sobre agua rápida — pueden colapsar',
      'Corta la electricidad en el interruptor general si el agua sube dentro de casa',
    ],
    dangers: [
      'Ahogamiento — la principal causa de muerte por inundación',
      'Agua contaminada que propaga cólera, tifoidea y hepatitis',
      'Daños estructurales — los edificios se debilitan cuando se erosionan los cimientos',
      'Peligros ocultos bajo el agua — boca de registro abierta, escombros, cables caídos',
      'Enfermedades transmitidas por mosquitos en el agua estancada cuando baja la inundación',
    ],
    shelter:
      'Llega al punto más alto disponible — pisos superiores, cubierta. Si estás en la cubierta, mantente visible y pide rescate. Evita buhardillas cerradas sin acceso a la cubierta. Sube muebles y objetos de valor si hay tiempo.',
    water:
      'TODA el agua de inundación está contaminada — nunca la bebas. Recoge agua de lluvia en recipientes limpios. Los calentadores y las botellas selladas son seguros. Después de la inundación, el agua municipal puede ser insegura durante semanas — hierve o purifica siempre.',
    fire:
      'Cierra el gas y la electricidad antes de que el agua los alcance. Los sistemas eléctricos mojados provocan electrocución. Usa el fuego solo después de comprobar que las tuberías de gas están intactas y la zona está ventilada.',
    food:
      'Conservas por encima del nivel del agua. Desecha cualquier alimento que haya tocado agua de inundación. Sella la comida en recipientes impermeables antes de una inundación prevista. Recoge plantas e insectos si quedas aislado.',
    signals: [
      'Tela brillante en la cubierta o el punto más alto',
      'Destello de espejo hacia las aeronaves',
      'Salvas de silbato — el sonido se oye sobre el ruido del agua',
      'Agita los brazos o la linterna desde la cubierta para el helicóptero',
      'Tres fuegos en terreno alto en triángulo',
    ],
    commonMistakes: [
      'Conducir por carreteras inundadas — 30 cm hacen flotar un coche, 60 cm lo arrastran',
      'Caminar por agua en movimiento — corrientes y escombros ocultos',
      'Volver a casa demasiado pronto — daños estructurales y riesgo de contaminación',
      'Usar aparatos eléctricos con humedad',
      'Ignorar los avisos de hervir el agua después de la inundación',
    ],
    linkedTech: ['water', 'shelter', 'signaling', 'first_aid'],
  },
  {
    id: 'volcano',
    title: 'Erupción volcánica',
    type: 'natural',
    dangerLevel: 5,
    priorityActions: [
      'Evacúa de inmediato si te lo ordenan — no esperes a ver la erupción',
      'Muévete contra el viento y cuesta arriba — los flujos de ceniza siguen los valles y la dirección del viento',
      'Protege los pulmones: máscara N95, tela mojada o varias capas de tela',
      'Cierra todas las ventanas y puertas — sella los huecos con toallas mojadas',
      'Evita los valles fluviales — los lahares (flujos de lodo volcánico) siguen los cauces de agua',
    ],
    dangers: [
      'Flujos piroclásticos — gas y roca a más de 700 °C que se desplazan a más de 700 km/h',
      'Lahares — flujos de lodo volcánico que recorren los valles a gran velocidad',
      'Caída de ceniza — derrumba techos, contamina el agua, destruye cultivos',
      'Gases tóxicos — dióxido de azufre, monóxido de carbono, sulfuro de hidrógeno',
      'Flujos de lava — lentos pero imparables, todo lo que tocan queda destruido',
    ],
    shelter:
      'La zona de evacuación es el único refugio real. Si te coges: edificio sellado sin ventanas, piso más alto. Coloca toallas mojadas bajo las puertas y en las ventilaciones. La ceniza es muy pesada cuando se moja — despeja techos planos si es seguro.',
    water:
      'Recoge agua de lluvia ANTES de que empiece la caída de ceniza. Después de la erupción, todo el agua exterior está contaminada con ceniza y químicos. El agua de lluvia recogida durante caídas intensas también está contaminada — la ceniza vuelve el agua ácida.',
    fire:
      'Los rayos volcánicos pueden iniciar incendios. La lava incendia todo lo que toca. Usa el fuego solo si la zona está confirmada como segura frente a los flujos. Fuego de emergencia para calor o cocinar solo con aire despejado.',
    food:
      'Conservas almacenadas — sella la comida frente a la ceniza. Los invernaderos pueden proteger algunos cultivos si la caída es ligera. Los cultivos afectados por ceniza no son seguros — los químicos se filtran en los alimentos.',
    signals: [
      'Tela brillante en la cubierta — visible a través de ceniza ligera',
      'Destello de espejo desde terreno abierto hacia cielo despejado',
      'Salvas de silbato para los equipos de búsqueda con ceniza que oscurece la visibilidad',
      'Tres fuegos en terreno alto — visibles por encima de la capa de ceniza',
      'Emisión por radio si hay electricidad',
    ],
    commonMistakes: [
      'Quedarse a ver la erupción — los flujos piroclásticos son más rápidos que tú',
      'Conducir con ceniza densa — los motores se obstruyen y la visibilidad llega a cero',
      'Abrir ventanas durante la caída de ceniza — la ceniza entra y es imposible de limpiar',
      'Conducir por valles fluviales — los lahares son invisibles hasta que están sobre ti',
      'Ignorar las órdenes de evacuación porque la erupción parece pequeña',
    ],
    linkedTech: ['water', 'shelter', 'first_aid', 'signaling'],
  },
  {
    id: 'blizzard',
    title: 'Ventisca / Tormenta de nieve',
    type: 'natural',
    dangerLevel: 4,
    priorityActions: [
      'Quédate dentro — no intentes viajar durante la ventisca',
      'Ahorra calor: cierra las habitaciones sin usar y tapa las rendijas con toallas',
      'Si quedas varado en un vehículo, quédate dentro y enciende el motor 10 minutos cada hora para calor',
      'Preocúpate por los vecinos, especialmente ancianos o personas con necesidades médicas',
      'Usa calefacción alternativa con seguridad — evita llamas abiertas en interiores',
    ],
    dangers: [
      'Hipotermia — la temperatura corporal baja de 35 °C y es mortal',
      'Intoxicación por monóxido de carbono por calefacción inadecuada en interiores',
      'Acumulación de nieve que derrumba techos — especialmente los planos',
      'Cortes de luz de días en tormentas severas',
      'Condiciones de ventisca blanca que hacen imposible el viaje y desorientan',
    ],
    shelter:
      'Quédate en tu casa. Cierra las habitaciones sin usar para conservar el calor. Ponte varias capas de ropa y usa mantas. Si las tuberías pueden congelarse, deja que goteen los grifos. Pásate de noche a una habitación interior para estar más caliente.',
    water:
      'Las tuberías pueden congelarse — derrite nieve en la cocina o en un recipiente sellado. NO comas nieve directamente — baja la temperatura corporal. Ten agua embotellada accesible antes de la tormenta. El agua caliente del calentador es segura.',
    fire:
      'Usa la chimenea o la estufa de leña si hay — asegúrate de que la chimenea esté despejada. NUNCA uses un horno de gas o una parrilla exterior para calentar dentro — el monóxido de carbono mata en silencio. Los calefactores necesitan 1 metro de distancia de todo.',
    food:
      'Almacena alimentos no perecederos antes de la tormenta. Conservas, comida seca, mantequilla de cacahuete, galletas. Come primero los perecederos antes de que se echen a perder. Raciona con cuidado si la tormenta se alarga más de lo previsto.',
    signals: [
      'Tela brillante visible contra la nieve blanca',
      'Si quedas varado en la carretera, ata tela brillante a la antena',
      'El destello de espejo es extremadamente visible contra la nieve',
      'Tres fuegos en triángulo',
      'Sonido: golpear tuberías metálicas o el claxon del vehículo',
    ],
    commonMistakes: [
      'Salir sin protección completa — congelación en minutos',
      'Usar aparatos de calefacción exteriores dentro de casa — intoxicación por monóxido de carbono',
      'Conducir durante la tormenta — la mayoría de las muertes por ventisca ocurren en vehículos',
      'Ignorar los signos de hipotermia — la confusión y el sopor preceden a la muerte',
      'Dejar el motor del coche encendido con el tubo de escape tapado por la nieve',
    ],
    linkedTech: ['fire', 'shelter', 'water', 'first_aid'],
  },
  {
    id: 'nuclear',
    title: 'Evento nuclear',
    type: 'man-made',
    dangerLevel: 5,
    priorityActions: [
      'Entra INMEDIATAMENTE en el edificio resistente más cercano — cualquier edificio es mejor que estar fuera',
      'Ve al centro del edificio, lejos de ventanas y cubierta',
      'Quítate la ropa exterior y métela en una bolsa de plástico — elimina el 90% de la caída radiactiva',
      'Dúchate o lávate la piel expuesta con agua y jabón — no uses acondicionador',
      'Quédate dentro al menos 24-72 horas — la caída radiactiva decae rápido en los primeros días',
    ],
    dangers: [
      'Radiación ionizante — invisible, causa enfermedad por radiación y muerte',
      'Caída radiactiva — polvo radiactivo arrastrado por el viento que se posa en todo',
      'Pulso electromagnético — deja fuera de servicio la electrónica y la red eléctrica',
      'Contaminación a largo plazo del suelo y las fuentes de agua',
      'Radiación térmica — calor intenso que provoca quemaduras a kilómetros de distancia',
    ],
    shelter:
      'Cualquier edificio resistente ofrece protección notable. El hormigón y la tierra son lo mejor. Ve a la habitación interior más alejada. La distancia de las paredes exteriores y la cubierta es crítica — cada capa de material bloquea radiación.',
    water:
      'Sella el agua en recipientes ANTES de que llegue la caída radiactiva. El agua del grifo en tuberías y calentadores sellados es segura. La agua de lluvia tras un evento nuclear está contaminada — no la recojas. El agua embotellada de envases sellados es segura.',
    fire:
      'Riesgo de incendio por el pulso térmico a distancia. Usa el fuego con precaución — infraestructura dañada. Evita llamas abiertas cerca de estructuras dañadas. Fuegos pequeños para calor o cocinar solo en áreas ventiladas.',
    food:
      'Conservas y paquetes sellados son seguros. La comida dentro de edificios con ventanas cerradas es segura. Desecha cualquier alimento expuesto al polvo radiactivo. Lava la parte exterior de las latas antes de abrirlas.',
    signals: [
      'Tela brillante en la cubierta para las aeronaves',
      'Destello de espejo hacia las aeronaves de búsqueda — evita apuntar hacia el epicentro de la explosión',
      'Salvas de silbato si quedas atrapado entre escombros',
      'Acércate a las ventanas solo si hay equipos de rescate a la vista',
      'Tres fuegos en terreno despejado en triángulo',
    ],
    commonMistakes: [
      'Salir a mirar — la exposición a la radiación es invisible y acumulativa',
      'Usar acondicionador capilar tras la descontaminación — fija la radiación al pelo',
      'Evacuar hacia el trayecto de la caída radiactiva — sabe antes la dirección del viento',
      'Beber leche o comer productos frescos — la caída radiactiva contamina la cadena alimentaria',
      'Creer que la distancia equivale a seguridad — la caída sigue el viento, no la distancia',
    ],
    linkedTech: ['water', 'shelter', 'first_aid', 'signaling'],
  },
  {
    id: 'industrial',
    title: 'Accidente industrial',
    type: 'man-made',
    dangerLevel: 4,
    priorityActions: [
      'Evacúa contra el viento y cuesta arriba — los productos químicos se depositan en las zonas bajas',
      'Cubre nariz y boca con tela — la tela mojada filtra parte de las partículas',
      'No toques los químicos derramados con la piel desnuda — usa tela o plástico',
      'Si hay fuga de gas, cierra las llaves generales si es seguro hacerlo',
      'No vuelvas a la zona hasta que las autoridades la declaren segura',
    ],
    dangers: [
      'Nubes de gases tóxicos — cloro, amoníaco, sulfuro de hidrógeno',
      'Quemaduras químicas por derrames líquidos — ácidos y materiales cáusticos',
      'Explosiones por reacciones químicas o fallos de recipientes a presión',
      'Suelo y suministro de agua contaminados',
      'Efectos sanitarios a largo plazo por exposición química',
    ],
    shelter:
      'Muévete contra el viento al menos 1 km del lugar. Si estás dentro, sella todas las ventanas y puertas con cinta y plástico. Apaga los sistemas de climatización. Ve a una habitación interior por encima de la planta baja — los gases pesados se hunden.',
    water:
      'NO bebas de ninguna fuente de agua cerca del emplazamiento industrial. El escurrimiento químico contamina las aguas subterráneas. Recoge agua de lluvia solo contra el viento. Sella los recipientes de agua si se acerca una nube química.',
    fire:
      'Los incendios químicos requieren agentes extintores específicos — el agua puede empeorar algunos. Usa el fuego solo si está confirmado que no hay contaminación química. Evita respirar el humo de productos químicos ardiendo — es muy tóxico.',
    food:
      'Desecha cualquier alimento expuesto a la nube o al derrame químico. La comida sellada en interior probablemente sea segura si el edificio no fue penetrado. Lávate las manos y las superficies de preparación antes de cocinar.',
    signals: [
      'Tela brillante en terreno alto contra el viento',
      'Destello de espejo hacia las aeronaves desde distancia segura',
      'Salvas de silbato si quedas atrapado o herido',
      'Comunicación por radio si hay disponible',
      'Mantente visible en zonas abiertas para el rescate',
    ],
    commonMistakes: [
      'Correr con el viento a favor — te metes en la nube',
      'Usar agua en incendios químicos sin saber de qué producto se trata',
      'Volver demasiado pronto a valorar los daños',
      'Ignorar síntomas leves de exposición — pueden empeorar horas después',
      'Asumir que la lluvia lavará toda la contaminación',
    ],
    linkedTech: ['water', 'shelter', 'first_aid', 'signaling'],
  },
  {
    id: 'pandemic',
    title: 'Pandemia',
    type: 'man-made',
    dangerLevel: 4,
    priorityActions: [
      'Aíslate de inmediato — limita el contacto a tu núcleo familiar',
      'Almacena 2-4 semanas de comida, agua y medicamentos antes de que escasee',
      'Lávate las manos más de 20 segundos con frecuencia — el jabón destruye la mayoría de los virus',
      'Prepara una habitación de enfermo para los miembros contagiados',
      'Ventila los espacios interiores — abre ventanas cuando el tiempo lo permita',
    ],
    dangers: [
      'Enfermedad generalizada que desborda los sistemas sanitarios',
      'Interrupción de las cadenas de suministro — escasez de comida, medicinas y combustible',
      'Infecciones secundarias por padecimientos no atendidos',
      'Desgaste social por cuarentenas prolongadas y escasez de recursos',
      'Fallo del tratamiento de aguas por falta de químicos y operadores',
    ],
    shelter:
      'Quédate en casa. Designa un solo baño para los enfermos. Sella la habitación del resto de la casa — plástico en las puertas, ventilación separada. Limpia a diario las superficies de más contacto con lejía.',
    water:
      'El agua municipal puede fallar si los operadores de la potabilizadora se enferman. Llena bañeras y todos los recipientes YA. Los calentadores guardan 30-80 galones. Hierve el agua si se sospecha el tratamiento comprometido. Lejía: 8 gotas por galón.',
    fire:
      'Se aplican los riesgos habituales de incendio. La luz puede ser intermitente — usa el fuego con seguridad. Velas para iluminar durante los apagones con ventilación adecuada. Evita hacer fuegos en interiores sin chimenea.',
    food:
      'Almacena no perecederos pronto — la compra por pánico vacía las estanterías en días. Arroz, pasta, conservas, frijoles secos, mantequilla de cacahuete, aceite de cocina. Cultiva brotes para vitaminas frescas — tardan 3-5 días en interior.',
    signals: [
      'Coordina con los vecinos mediante notas escritas si la cuarentena es estricta',
      'Comunicación por radio si fallan la electricidad y internet',
      'Señales visuales entre casas — tela brillante para "necesito ayuda"',
      'Tablones de anuncios comunitarios a distancias seguras',
      'Árboles telefónicos para compartir información y coordinar recorridos de suministro',
    ],
    commonMistakes: [
      'Ir al hospital por síntomas leves — desborda el sistema',
      'Acaparar — comprar más de lo necesario priva a otros y agrava el pánico',
      'Ignorar la salud mental — el aislamiento causa depresión y malas decisiones',
      'Suspender medicamentos sin consejo médico',
      'Asumir que pasará en una semana — planifica 4 o más semanas de interrupción',
    ],
    linkedTech: ['water', 'shelter', 'medicine_herbal', 'first_aid', 'signaling'],
  },
] as Disaster[];
