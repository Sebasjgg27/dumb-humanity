export interface EmergencyKit {
  name: string;
  scenario: string;
  essentials: string[];
  niceToHave: string[];
}

export interface FirstAidTopic {
  id: string;
  title: string;
  description: string;
  steps: string[];
  warnings: string[];
}

export interface SignalMethod {
  id: string;
  name: string;
  description: string;
  visibility: string;
  whenToUse: string;
}

export interface WaterPurificationMethod {
  id: string;
  name: string;
  description: string;
  steps: string[];
  bestFor: string;
  effectiveness: string;
}

export interface ShelterType {
  id: string;
  name: string;
  environment: string;
  materials: string[];
  steps: string[];
  windRating: string;
  warmthRating: string;
}

export interface FoodForaging {
  id: string;
  name: string;
  region: string;
  season: string;
  identification: string[];
  preparation: string[];
  warnings: string[];
}

export interface EvacuationPlan {
  id: string;
  name: string;
  scenario: string;
  route: string[];
  checklist: string[];
  timeEstimate: string;
}

export interface CommunicationMethod {
  id: string;
  name: string;
  range: string;
  powerSource: string;
  setup: string;
  useCase: string;
}

export const EMERGENCY_KITS: EmergencyKit[] = [
  {
    name: 'Universal Survival Kit',
    scenario: 'Any environment',
    essentials: [
      'Fixed-blade knife (full tang)',
      'Ferro rod or waterproof matches',
      'Paracord (10m minimum)',
      'Water purification tablets or filter straw',
      'Emergency space blanket',
      'Whistle',
      'Small first aid kit',
      'Compass',
      'High-calorie food bars (3 day supply)',
      'Headlamp with extra batteries',
    ],
    niceToHave: [
      'Magnifying lens (fire starting + first aid)',
      'Fishing kit (hooks, line, sinkers)',
      'Signal mirror',
      'Duct tape (wrap around water bottle)',
      'Sewing needle',
      'Waterproof notepad and pencil',
    ],
  },
  {
    name: 'Island Kit',
    scenario: 'Stranded on an island',
    essentials: [
      'Knife or sharp shell for cutting',
      'Container for collecting rainwater',
      'Solar still materials (plastic sheet)',
      'Cordage for fish traps and shelter',
      'Signal mirror or reflective surface',
      'Sun protection (hat, cover-up)',
    ],
    niceToHave: [
      'Fishing hooks and line',
      'Waterproof fire starter',
      'Magnifying glass for signal',
      'Tarp or large plastic sheet',
    ],
  },
  {
    name: 'Desert Kit',
    scenario: 'Arid desert environment',
    essentials: [
      'Extra water containers (minimum 3L capacity)',
      'Shade shelter (space blanket or tarp)',
      'Salt tablets to retain water',
      'Whistle',
      'Signal mirror',
      'Sunscreen and lip balm',
    ],
    niceToHave: [
      'Solar still kit',
      'Nylon rope for shade construction',
      'Dark cloth for fire reflector wall',
      'Electrolyte powder',
    ],
  },
  {
    name: 'Arctic Kit',
    scenario: 'Frozen wilderness',
    essentials: [
      'Insulated sleeping bag rated to -30C or below',
      'Fire starting kit (ferro rod, tinder)',
      'Extra base layers and wool socks',
      'Knife',
      'High-calorie food (nuts, chocolate, pemmican)',
      'Insulated water container (prevents freezing)',
    ],
    niceToHave: [
      'Snow goggles or improvised eye protection',
      'Portable stove with fuel',
      'Bear spray or noisemaker',
      'Emergency bivy sack',
    ],
  },
  {
    name: 'Jungle Kit',
    scenario: 'Dense tropical forest',
    essentials: [
      'Machete or large knife',
      'Mosquito net and repellent',
      'Water purification tablets or boil pot',
      'Waterproof bag for electronics and tinder',
      'Whistle',
      'First aid kit with antifungal cream',
    ],
    niceToHave: [
      'Fishing line and hooks',
      'Paracord (20m)',
      'Space blanket',
      'Lightweight rain poncho',
    ],
  },
  {
    name: 'Mountain Kit',
    scenario: 'High altitude alpine',
    essentials: [
      'Insulated jacket and layers',
      'Emergency bivy or sleeping bag',
      'Headlamp',
      'Knife',
      'Altitude sickness medication (Diamox)',
      'Water purification',
    ],
    niceToHave: [
      'Avalanche beacon (in avalanche terrain)',
      'Crampons or traction devices',
      'Rope (10m)',
      'Hot drink thermos',
    ],
  },
  {
    name: 'Ocean / Sea Kit',
    scenario: 'Adrift at sea or coastal',
    essentials: [
      'Flotation device or inflatable life vest',
      'Solar still kit (plastic bags, containers)',
      'Whistle',
      'Signal mirror',
      'Waterproof flashlight',
      'Fishing hooks and line',
    ],
    niceToHave: [
      'Emergency beacon (PLB or EPIRB)',
      'Sea sickness tablets',
      'Waterproof knife',
      'Tarp for sun shade on raft',
    ],
  },
  {
    name: 'Urban Ruins Kit',
    scenario: 'Post-collapse city environment',
    essentials: [
      'Dust mask or cloth for smoke/debris',
      'Flashlight with extra batteries',
      'Multi-tool or knife',
      'Water purification',
      'First aid kit',
      'Gloves for handling debris',
    ],
    niceToHave: [
      'Portable radio',
      'Cash in small bills',
      'Crowbar or pry bar',
      'Waterproof bag for documents',
    ],
  },
];

export const FIRST_AID_TOPICS: FirstAidTopic[] = [
  {
    id: 'wound-care',
    title: 'Wound Care & Bleeding',
    description: 'How to stop bleeding and prevent infection in any environment.',
    steps: [
      'Apply direct pressure with the cleanest cloth available',
      'Elevate the injured area above the heart if possible',
      'Pack deep wounds tightly with clean cloth',
      'Secure bandage firmly but not so tight it cuts circulation',
      'Clean wound with boiled and cooled water when bleeding stops',
      'Change dressing daily or whenever it becomes wet/dirty',
    ],
    warnings: [
      'Do not remove objects embedded in a wound — stabilize around them',
      'Watch for signs of infection: redness, swelling, warmth, pus, red streaks',
      'Tourniquet is last resort only — mark the time on the patient',
    ],
  },
  {
    id: 'broken-bones',
    title: 'Fractures & Splinting',
    description: 'How to immobilize a broken bone with improvised materials.',
    steps: [
      'Do not try to reset the bone — splint in the position found',
      'Find rigid material: sticks, rolled newspapers, cardboard, tent poles',
      'Pad the splint with cloth for comfort',
      'Tie splint above and below the fracture point',
      'Check circulation below the splint (pulse, feeling, color)',
      'Immobilize the joint above AND below the fracture',
    ],
    warnings: [
      'A compound fracture (bone through skin) needs wound care FIRST',
      'Check distal pulse every 30 minutes — tighten splint if circulation is lost',
      'Splint should be tight enough to prevent movement but not cut off blood flow',
    ],
  },
  {
    id: 'hypothermia',
    title: 'Hypothermia Treatment',
    description: 'Recognizing and treating dangerous body temperature loss.',
    steps: [
      'Remove wet clothing immediately — replace with dry layers',
      'Warm the core first: chest, neck, head, groin (NOT extremities)',
      'Use skin-to-skin contact in a sleeping bag as last resort',
      'Give warm (not hot) sweet drinks if conscious — no alcohol',
      'Handle the person gently — rough movement can cause cardiac arrest',
      'Monitor breathing — shallow breathing may stop without warning',
    ],
    warnings: [
      'Do NOT rub or massage extremities — causes cold blood to rush to the core',
      'Do NOT give food to someone with severe hypothermia',
      'Afterdrop: core temp continues falling after rewarming begins',
      'Severe hypothermia is irreversible — prevention is everything',
    ],
  },
  {
    id: 'snakebite',
    title: 'Snakebite Response',
    description: 'What to do (and not do) when bitten by a venomous snake.',
    steps: [
      'Move away from the snake to prevent a second bite',
      'Keep the bite below heart level — immobilize the limb',
      'Remove rings, watches, and tight clothing near the bite (swelling)',
      'Mark the edge of swelling and write the time',
      'Get to medical help as fast as possible — this is time-critical',
      'Note the snake description if possible for antivenom selection',
    ],
    warnings: [
      'Do NOT cut the wound or try to suck out venom',
      'Do NOT apply a tourniquet — this concentrates venom and causes tissue death',
      'Do NOT apply ice — this worsens tissue damage',
      'Do NOT give aspirin or ibuprofen — they thin the blood',
    ],
  },
  {
    id: 'burns',
    title: 'Burn Treatment',
    description: 'Treating thermal, chemical, and sunburns in the field.',
    steps: [
      'Cool the burn under clean running water for 10-20 minutes',
      'Remove jewelry and tight clothing from the burned area',
      'Cover loosely with a clean, non-stick dressing',
      'Give pain relief if available (ibuprofen or paracetamol)',
      'Keep the patient hydrated — burns cause significant fluid loss',
      'Change dressings daily, watching for infection',
    ],
    warnings: [
      'Do NOT use ice, butter, or toothpaste on burns',
      'Do NOT pop blisters — they are a natural sterile dressing',
      'Chemical burns: flush with water for 20+ minutes, remove contaminated clothing',
      'Electrical burns: entry wound may be small but internal damage can be severe',
    ],
  },
];

export const SIGNAL_METHODS: SignalMethod[] = [
  {
    id: 'mirror',
    name: 'Mirror / Reflective Signal',
    description: 'Use any reflective surface to flash sunlight toward rescuers. A signal mirror can be seen for 10+ miles in clear conditions.',
    visibility: '10+ miles in daylight',
    whenToUse: 'Daytime, clear sky, spotting aircraft or distant ships',
  },
  {
    id: 'fire',
    name: 'Fire Signal',
    description: 'Three fires in a triangle pattern is the universal distress signal. Maintain one fire for warmth/cooking and use the other two for signaling.',
    visibility: '5-10 miles depending on terrain',
    whenToUse: 'Night time, overcast skies, any time you need to be found',
  },
  {
    id: 'smoke',
    name: 'Smoke Signal',
    description: 'Add green leaves, wet wood, or rubber to a fire for thick white smoke during the day. Dark smoke from oil or rubber is visible against light backgrounds.',
    visibility: '5-15 miles in calm air',
    whenToUse: 'Daytime with clear sky — white smoke on dark backgrounds, dark smoke on light backgrounds',
  },
  {
    id: 'whistle',
    name: 'Whistle Signal',
    description: 'Three short blasts repeated is the universal distress signal. Sound carries farther than voice and requires less energy.',
    visibility: '1/2 mile in still air, less in wind',
    whenToUse: 'Close-range rescue, nighttime when visual signals are useless, when you hear rescuers',
  },
  {
    id: 'ground',
    name: 'Ground-to-Air Signal',
    description: 'Large symbols on the ground visible from aircraft. Use rocks, logs, or stomped patterns. V = need assistance. X = need medical help. I = moving this direction.',
    visibility: 'Visible from low-flying aircraft',
    whenToUse: 'Expecting aerial search, open terrain with contrasting materials available',
  },
  {
    id: 'bright',
    name: 'Bright Material Signal',
    description: 'Hang bright-colored clothing, tarps, or foil on a high point. Movement catches attention better than static objects.',
    visibility: '1-2 miles depending on terrain',
    whenToUse: 'Any time — passive signal that works while you do other survival tasks',
  },
  {
    id: 'sound',
    name: 'Sound / Banging Signal',
    description: 'Banging metal objects together or against rocks creates sound that echoes in valleys and urban environments. Three rapid bangs is distress.',
    visibility: '1/4 mile in open, echoes further in canyons or cities',
    whenToUse: 'Night, dense fog, urban ruins, when you hear searchers nearby',
  },
];

export const WATER_PURIFICATION_METHODS: WaterPurificationMethod[] = [
  {
    id: 'boiling',
    name: 'Boiling',
    description: 'The most reliable method. Rolling boil for 1 minute kills all pathogens. Above 2000m altitude, boil for 3 minutes.',
    steps: [
      'Collect water from the cleanest source available',
      'Filter through cloth or coffee filter to remove sediment',
      'Bring to a rolling boil in a covered container',
      'Maintain rolling boil for 1 minute (3 minutes above 2000m)',
      'Let cool naturally — do not add ice',
      'Store in clean, covered containers',
    ],
    bestFor: 'Any water source with sediment removed',
    effectiveness: '99.9% pathogen removal',
  },
  {
    id: 'solar-still',
    name: 'Solar Still',
    description: 'Uses sun evaporation to distill water from soil, plants, or contaminated water. Slow but requires no fuel.',
    steps: [
      'Dig a hole 30cm wide, 30cm deep in sunny ground',
      'Place a container in the center of the hole',
      'Cover the hole with a clear plastic sheet',
      'Seal edges with soil or rocks',
      'Place a small stone in the center of the plastic above the container',
      'Condensation drips into the container — collect every 4-6 hours',
    ],
    bestFor: 'Desert environments, contaminated water, emergency situations',
    effectiveness: '500ml-1L per day depending on conditions',
  },
  {
    id: 'chemical',
    name: 'Chemical Treatment',
    description: 'Iodine or chlorine tablets kill most pathogens. Not effective against all parasites. Works in 30-60 minutes.',
    steps: [
      'Filter water through cloth to remove sediment',
      'Follow tablet dosage instructions exactly',
      'Stir and let stand for 30-60 minutes',
      'If water tastes of iodine, add vitamin C powder or drink',
      'Do not use more tablets than recommended',
      'Store treated water in clean containers',
    ],
    bestFor: 'When boiling is not possible, portable water treatment',
    effectiveness: '99% bacteria and viruses, less effective against Giardia',
  },
  {
    id: 'cloth-filter',
    name: 'Cloth Filtration',
    description: 'Removes sediment and some bacteria. Does NOT make water safe to drink alone — always combine with boiling or chemical treatment.',
    steps: [
      'Fold a clean cotton cloth 4-8 times',
      'Secure over a container with cord or rubber band',
      'Pour water slowly through the cloth',
      'Replace cloth as it clogs',
      'Always follow with boiling or chemical treatment',
    ],
    bestFor: 'Pre-filtering very dirty water before other treatment',
    effectiveness: 'Removes sediment and some bacteria — NOT a standalone method',
  },
  {
    id: 'sand-charcoal',
    name: 'Sand & Charcoal Filter',
    description: 'A homemade filter using layers of sand, charcoal, and gravel. Removes sediment and improves taste. Must still be boiled or chemically treated.',
    steps: [
      'Cut the bottom off a plastic bottle or use a hollow log',
      'Layer from bottom up: cloth, gravel, sand, charcoal, sand, gravel',
      'Pour water in the top slowly',
      'Collect filtered water from the bottom',
      'Re-layer materials when flow slows',
      'Always boil or chemically treat the filtered water',
    ],
    bestFor: 'Continuous filtration when boiling fuel is limited',
    effectiveness: 'Removes sediment, improves taste — still needs disinfection',
  },
];

export const SHELTER_TYPES: ShelterType[] = [
  {
    id: 'debris-hut',
    name: 'Debris Hut',
    environment: 'Forest / Woodland',
    materials: ['Long ridgepole (3-4m)', 'Branches and sticks', 'Leaves, moss, or pine needles', 'Paracord or natural cordage'],
    steps: [
      'Prop a ridgepole against a tree stump or rock at 45° angle',
      'Lean branches along both sides to form a ribs skeleton',
      'Weave smaller sticks horizontally through the ribs',
      'Pile leaves, moss, or debris 30cm+ thick over the entire frame',
      'Stuff the inside with dry leaves for insulation',
      'Create a door plug from bundled sticks and debris',
    ],
    windRating: 'Good — low profile sheds wind',
    warmthRating: 'Excellent — body heat warms the small interior',
  },
  {
    id: 'tarp-lean-to',
    name: 'Tarp Lean-To',
    environment: 'Any with tarp or plastic sheet',
    materials: ['Tarp or plastic sheet (2x3m minimum)', 'Rope or cordage', 'Two trees or poles', 'Rocks or logs for ground anchors'],
    steps: [
      'Tie a ridgeline between two trees at waist height',
      'Drape tarp over the ridgeline at a 45° angle',
      'Anchor the lower edge with rocks, logs, or stakes',
      'Orient the open side away from prevailing wind',
      'Build a fire in front to reflect heat into the shelter',
    ],
    windRating: 'Moderate — needs to face away from wind',
    warmthRating: 'Good — fire reflector wall improves warmth',
  },
  {
    id: 'snow-shelter',
    name: 'Snow Quinzhee',
    environment: 'Arctic / Snow',
    materials: ['Packed snow', 'Sticks (for wall thickness guides)', 'Shovel or flat board'],
    steps: [
      'Pile snow into a mound 2m wide, 1.5m tall',
      'Let snow sinter (bond) for 2+ hours',
      'Insert sticks 30cm long evenly across the surface',
      'Hollow out the interior until you reach the stick tips',
      'Create a small ventilation hole in the roof',
      'Make the entrance lower than the sleeping platform',
    ],
    windRating: 'Excellent — enclosed structure blocks all wind',
    warmthRating: 'Excellent — snow insulates to near 0°C even when outside is -30°C',
  },
  {
    id: 'palm-frond',
    name: 'Palm Frond Shelter',
    environment: 'Tropical / Jungle',
    materials: ['Large palm fronds', 'Bamboo or straight sticks', 'Vine or natural cordage', 'Large leaves for flooring'],
    steps: [
      'Build an A-frame with two bamboo poles tied at the top',
      'Lay palm fronds horizontally from ridge to ground on both sides',
      'Overlap fronds like shingles — bottom layer first, then top',
      'Weave additional fronds to seal gaps',
      'Create a raised floor platform from bamboo and leaves',
      'Keep entrance small to reduce rain and insect entry',
    ],
    windRating: 'Good — A-frame sheds wind and rain',
    warmthRating: 'Moderate — designed for hot, wet climates',
  },
  {
    id: 'rock-wall',
    name: 'Rock Wind Wall',
    environment: 'Mountain / Exposed terrain',
    materials: ['Flat rocks', 'Mud or clay for mortar', 'Branches for framework', 'Grass or moss for chinking'],
    steps: [
      'Find a natural windbreak — rock outcrop, cliff face, or depression',
      'Build a curved wall 1-1.5m high facing away from the wind',
      'Stack rocks dry first, then fill gaps with mud and grass',
      'Lean branches against the wall for a roof framework',
      'Cover roof with debris, leaves, or tarp if available',
      'Create a fire inside the curve for heat reflection',
    ],
    windRating: 'Excellent — solid rock blocks wind completely',
    warmthRating: 'Good — fire reflects off rock wall',
  },
];

export const FOOD_FORAGING: FoodForaging[] = [
  {
    id: 'dandelion',
    name: 'Dandelion',
    region: 'Worldwide (temperate)',
    season: 'Spring through Fall',
    identification: [
      'Bright yellow flower heads on hollow stems',
      'Jagged, tooth-shaped leaves forming a rosette at ground level',
      'White milky sap when stem is broken',
      'Fluffy white seed heads (puffballs) after flowering',
    ],
    preparation: [
      'Leaves: wash and eat raw when young and tender',
      'Leaves: boil in two changes of water to reduce bitterness',
      'Roots: roast in fire until dark brown, grind for coffee substitute',
      'Flowers: eat raw or battered and fried',
    ],
    warnings: [
      'Only eat from areas not treated with pesticides or herbicides',
      'Avoid plants near roads — they absorb heavy metals',
      'Older leaves become very bitter — pick young ones',
    ],
  },
  {
    id: 'cattail',
    name: 'Cattail',
    region: 'Worldwide (wetlands)',
    season: 'Spring through Fall',
    identification: [
      'Tall reed-like plants (1-3m) near water',
      'Brown cylindrical flower spike (looks like a hot dog on a stick)',
      'Long, flat, blade-like leaves',
      'Rhizomes underground — thick, starchy roots',
    ],
    preparation: [
      'Young shoots: peel and eat raw or cooked (like bamboo shoots)',
      'Flower spike: roast over fire, pollen can be used as flour',
      'Rhizomes: dig up, peel, and boil or roast — starchy and filling',
      'Roots: pound in water to extract starch for cooking',
    ],
    warnings: [
      'Only harvest from clean water sources',
      'Confusing with iris species — iris has flat leaves, cattail has V-shaped cross-section',
      'Pollen can cause allergic reactions in some people',
    ],
  },
  {
    id: 'pine',
    name: 'Pine Tree',
    region: 'Worldwide (northern hemisphere)',
    season: 'Year-round',
    identification: [
      'Evergreen with needles in clusters of 2-5',
      'Cones with woody scales',
      'Strong aromatic resin smell',
      'Scaly or plated bark depending on species',
    ],
    preparation: [
      'Inner bark: peel and eat raw, or dry and grind into flour',
      'Needles: steep in hot water for vitamin C tea (do not boil)',
      'Pine nuts: extract from cones, eat raw or roasted',
      'Resin: use as antiseptic for wounds or waterproofing agent',
    ],
    warnings: [
      'Avoid Yew, Ponderosa Pine, and Norfolk Island Pine — toxic',
      'Do not boil needle tea — destroys vitamin C',
      'Inner bark should be stripped from branches, never girdle the trunk',
    ],
  },
  {
    id: 'clover',
    name: 'Clover',
    region: 'Worldwide (temperate)',
    season: 'Spring through Fall',
    identification: [
      'Three-lobed leaves (sometimes with white V-marking)',
      'Small round flower heads — white, pink, or red',
      'Creeping stems that root at nodes',
      'Common in fields, lawns, and disturbed ground',
    ],
    preparation: [
      'Flowers: eat raw, sweet flavor',
      'Leaves: eat raw in salads or cooked like spinach',
      'Dried flowers and leaves: steep for tea',
      'Seeds: collect and grind into flour — high protein',
    ],
    warnings: [
      'Some people develop digestive issues from raw clover — start small',
      'Red clover may have mild blood-thinning properties',
      'Only eat from areas free of chemicals',
    ],
  },
  {
    id: 'acorn',
    name: 'Acorn',
    region: 'Worldwide (oak tree regions)',
    season: 'Fall',
    identification: [
      'Distinctive cup-shaped cap holding the nut',
      'Oval nut with pointed tip',
      'Found under oak trees in autumn',
      'Tannic acid makes raw acorns bitter and mildly toxic',
    ],
    preparation: [
      'Crack shells and remove nuts',
      'Leach tannins by soaking in repeated changes of water (3-7 days)',
      'Alternatively, boil in multiple changes of water until water stays clear',
      'Dry leached acorns and grind into flour',
      'Flour can be used for bread, porridge, or thickening soups',
    ],
    warnings: [
      'Never eat raw acorns — tannins cause kidney damage and stomach upset',
      'Water should be changed until it no longer tastes bitter',
      'Some people are allergic to oak pollen — test small amounts first',
    ],
  },
];

export const EVACUATION_PLANS: EvacuationPlan[] = [
  {
    id: 'wildfire',
    name: 'Wildfire Evacuation',
    scenario: 'Wildfire approaching your area',
    route: [
      'Monitor fire progress — know 2 escape routes from your area',
      'Pack evacuation bag (documents, water, first aid, cash, medications)',
      'Move vehicles facing outward, load essential supplies',
      'Close all windows and doors, remove flammable items from around house',
      'Leave early — do not wait to see the fire',
      'Follow designated evacuation routes, avoid shortcuts through vegetation',
    ],
    checklist: ['Go-bag packed and by door', 'Vehicles fueled and ready', 'Important documents in waterproof bag', 'Medications and glasses', 'Water and food for 3 days', 'Phone charger and battery pack', 'Cash in small bills', 'Pet supplies if applicable'],
    timeEstimate: 'Leave 2-4 hours before fire arrival',
  },
  {
    id: 'flood',
    name: 'Flood Evacuation',
    scenario: 'Rising water levels, flash flood warning',
    route: [
      'Move to higher ground immediately — do not wait for orders',
      'Never walk or drive through moving water — 6 inches can knock you down',
      'Avoid bridges over fast-moving water',
      'If trapped in a building, go to the highest floor — do not go to a closed attic',
      'If water is rising inside, get on the roof and signal for help',
    ],
    checklist: ['Go-bag with waterproof container', 'Waterproof bag for electronics', 'Medications', 'Change of warm clothes in waterproof bag', 'Flashlight and batteries', 'Whistle for signaling'],
    timeEstimate: 'Evacuate immediately when warned — minutes count in flash floods',
  },
  {
    id: 'earthquake',
    name: 'Earthquake Evacuation',
    scenario: 'Major earthquake — aftershocks and structural damage expected',
    route: [
      'During shaking: Drop, Cover, Hold On — under sturdy furniture',
      'After shaking stops: check for injuries, put out small fires',
      'Evacuate building if damaged — use stairs, never elevators',
      'Move to open area away from buildings, power lines, and trees',
      'Expect aftershocks — be ready to drop and cover again',
      'If trapped: tap on pipes or walls, do not shout — conserve energy',
    ],
    checklist: ['Sturdy shoes by bed', 'Flashlight within reach', 'Emergency whistle', 'First aid kit', 'Go-bag near exit', 'Know safe spots in each room'],
    timeEstimate: 'Evacuate immediately after shaking stops if building is damaged',
  },
  {
    id: 'hurricane',
    name: 'Hurricane Evacuation',
    scenario: 'Hurricane or typhoon approaching — mandatory evacuation zone',
    route: [
      'Evacuate when ordered — do not wait for the storm to arrive',
      'Follow designated evacuation routes — expect heavy traffic',
      'Fill vehicles with fuel before leaving',
      'Secure or board up windows with plywood',
      'Move important items to highest interior room if not evacuating',
      'Turn off utilities at main switches if time permits',
    ],
    checklist: ['Go-bag with 5 days of supplies', 'Cash (ATMs may be down)', 'Full fuel tank', 'Important documents', 'Medications for 2 weeks', 'Pet carriers and food', 'Maps of evacuation routes', 'Battery-powered weather radio'],
    timeEstimate: 'Evacuate 24-48 hours before expected landfall',
  },
  {
    id: 'nuclear',
    name: 'Nuclear Event Evacuation',
    scenario: 'Nuclear explosion, reactor incident, or fallout warning',
    route: [
      'If indoors: stay inside — building provides shielding from fallout',
      'If outdoors: find the nearest sturdy building immediately',
      'Move to the center of the building, away from windows and roof',
      'Remove outer clothing and seal in a plastic bag',
      'Shower or wash exposed skin thoroughly',
      'Listen for official instructions on evacuation or shelter-in-place',
    ],
    checklist: ['Potassium iodide tablets if in affected region', 'Dust masks or cloth for breathing', 'Sealed water supply', 'Canned food with manual opener', 'Plastic sheeting and duct tape for sealing room', 'Battery-powered radio', 'Geiger counter if available'],
    timeEstimate: 'Act within minutes — radiation exposure decreases rapidly with distance and shielding',
  },
];

export const COMMUNICATION_METHODS: CommunicationMethod[] = [
  {
    id: 'ham-radio',
    name: 'Ham Radio',
    range: 'Local to worldwide (with skip)',
    powerSource: '12V battery, solar panel, hand crank, or vehicle',
    setup: 'Antenna: dipole or vertical whip (5-10m of wire). Tune to local emergency frequencies (146.520 MHz VHF, 7.240 MHz HF). Use Simplex for local, repeaters for regional.',
    useCase: 'Long-range communication, emergency nets, coordination with rescue teams',
  },
  {
    id: 'walkie-talkie',
    name: 'Walkie-Talkie (FRS/GMRS)',
    range: '1-5 km depending on terrain',
    powerSource: 'AA or rechargeable batteries',
    setup: 'Set all units to same channel and privacy code. Use Channel 1 for emergency simplex. Keep transmissions short to conserve battery.',
    useCase: 'Short-range group communication, patrols, search coordination',
  },
  {
    id: 'whistle-relay',
    name: 'Whistle Code Relay',
    range: '500m - 1km in open terrain',
    powerSource: 'None — human powered',
    setup: 'Three blasts = distress. Two blasts = all clear. One blast = acknowledgment. Station relay points every 500m on high ground.',
    useCase: 'No-electronics communication, nighttime signaling, hearing-impaired communication',
  },
  {
    id: 'mirror-heliograph',
    name: 'Mirror Heliograph',
    range: '10+ km in clear conditions',
    powerSource: 'Sunlight',
    setup: 'Angle mirror to reflect sunlight toward target. Flash 3 times for distress, 1 flash for acknowledgment. Use aiming hole technique for precision.',
    useCase: 'Daytime long-range signaling, aircraft rescue, mountain rescue',
  },
  {
    id: 'fire-smoke',
    name: 'Fire & Smoke Signals',
    range: '5-15 km depending on conditions',
    powerSource: 'Wood, green vegetation, rubber (for dark smoke)',
    setup: 'Three fires in triangle = distress signal. Add green leaves for white smoke (daytime). Dark smoke from oil or rubber visible against clouds.',
    useCase: 'Nighttime signaling, overcast days, persistent rescue beacon',
  },
  {
    id: 'ground-signals',
    name: 'Ground-to-Air Signals',
    range: 'Visible from low-flying aircraft',
    powerSource: 'None — uses rocks, logs, or stomped patterns',
    setup: 'V shape = need assistance. X = need medical help. I = moving in this direction. Letters should be 3m+ tall with contrasting colors.',
    useCase: 'Expecting aerial search, open terrain, stranded or injured',
  },
];
