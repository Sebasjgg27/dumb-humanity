export interface Stage {
  id: string;
  name: string;
  index: number;
  question: string;
  description: string;
  aLevel: string;
}

export const STAGES: Stage[] = [
  {
    id: 'survival',
    name: 'Survival',
    index: 0,
    question: 'Can we stay alive?',
    description: 'Water, fire, shelter, and the first hand-made tools.',
    aLevel: 'A0',
  },
  {
    id: 'settlement',
    name: 'Settlement',
    index: 1,
    question: 'Can we live here permanently?',
    description: 'Permanent shelter, sanitation, hygiene, and community.',
    aLevel: 'A1',
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    index: 2,
    question: 'Can we feed ourselves reliably?',
    description: 'Farming, seed saving, preservation, and animal husbandry.',
    aLevel: 'A1',
  },
  {
    id: 'craftsmanship',
    name: 'Craftsmanship',
    index: 3,
    question: 'Can we make things well?',
    description: 'Pottery, textiles, glass, paper, and the precision mindset.',
    aLevel: 'A1',
  },
  {
    id: 'metallurgy',
    name: 'Metallurgy',
    index: 4,
    question: 'Can we extract and shape metal?',
    description: 'Charcoal, iron, steel, copper — the materials of everything after.',
    aLevel: 'A2',
  },
  {
    id: 'engineering',
    name: 'Engineering',
    index: 5,
    question: 'Can we build machines?',
    description: 'Measurement, the lathe, water power, and the steam engine.',
    aLevel: 'A2',
  },
  {
    id: 'electricity',
    name: 'Electricity',
    index: 6,
    question: 'Can we harness the electron?',
    description: 'Generators, batteries, and the communication tree.',
    aLevel: 'A2',
  },
  {
    id: 'industry',
    name: 'Industry',
    index: 7,
    question: 'Can systems scale beyond a town?',
    description: 'Chemistry at scale, transport, and regional infrastructure.',
    aLevel: 'A3',
  },
  {
    id: 'digital',
    name: 'Digital Technology',
    index: 8,
    question: 'Can we compute again?',
    description: 'Electronics, computing, and the return of research.',
    aLevel: 'A4',
  },
  {
    id: 'space',
    name: 'Space Age',
    index: 9,
    question: 'Can we leave the cradle?',
    description: 'Aerospace, rocketry, and high-dependency systems.',
    aLevel: 'A5',
  },
];

export const STAGE_BY_ID = Object.fromEntries(STAGES.map((s) => [s.id, s])) as Record<string, Stage>;

const STAGE_MAP: Record<string, string> = {
  // Survival
  water: 'survival',
  cordage: 'survival',
  tool_stone: 'survival',
  fire: 'survival',
  cooking: 'survival',
  shelter: 'survival',
  clothing: 'survival',
  first_aid: 'survival',
  signaling: 'survival',
  hunting_trapping: 'survival',
  medicine_herbal: 'survival',
  // Settlement
  permanent_shelter: 'settlement',
  sanitation: 'settlement',
  soap: 'settlement',
  community_governance: 'settlement',
  salt: 'settlement',
  // Agriculture
  agriculture: 'agriculture',
  food_preservation: 'agriculture',
  animal_domestication: 'agriculture',
  // Craftsmanship
  pottery: 'craftsmanship',
  textiles_weaving: 'craftsmanship',
  glassblowing: 'craftsmanship',
  lenses: 'craftsmanship',
  paper: 'craftsmanship',
  printing: 'craftsmanship',
  charcoal: 'craftsmanship',
  bellows: 'craftsmanship',
  distillation: 'craftsmanship',
  gunpowder: 'craftsmanship',
  // Metallurgy
  iron_smelting: 'metallurgy',
  copper_extraction: 'metallurgy',
  bronze_working: 'metallurgy',
  steel_making: 'metallurgy',
  wire_drawing: 'metallurgy',
  mining: 'metallurgy',
  // Engineering
  metrology: 'engineering',
  lathe: 'engineering',
  water_wheel: 'engineering',
  steam_engine: 'engineering',
  clockwork: 'engineering',
  railway: 'engineering',
  // Electricity
  electricity_generator: 'electricity',
  batteries: 'electricity',
  magnets: 'electricity',
  // Industry
  sulfuric_acid: 'industry',
  nitric_acid: 'industry',
  saltpeter: 'industry',
  coal_mining: 'metallurgy',
  compass: 'engineering',
  education: 'settlement',
  electric_light: 'electricity',
  electroplating: 'industry',
  explosives: 'industry',
  fermentation: 'agriculture',
  fertilizer: 'agriculture',
  infrastructure_roads: 'industry',
  infrastructure_scheduling: 'industry',
  infrastructure_water: 'industry',
  machine_tools: 'engineering',
  navigation: 'engineering',
  oil_refining: 'industry',
  optics_instruments: 'engineering',
  radio: 'electricity',
  science_measurement: 'engineering',
  signaling_optical: 'electricity',
  sulfur: 'industry',
  thermometers: 'engineering',
  transport: 'industry',
  vaccination: 'settlement',
  vacuum_tubes: 'digital',
};

export function stageFor(slug: string): Stage {
  const id = STAGE_MAP[slug] ?? 'survival';
  return STAGE_BY_ID[id];
}

const DIFFICULTY_BY_LEVEL: Record<string, number> = {
  A0: 1,
  A1: 2,
  A2: 3,
  A3: 4,
  A4: 5,
  A5: 5,
};

const DIFFICULTY_OVERRIDES: Record<string, number> = {
  sulfuric_acid: 4,
  nitric_acid: 4,
  steam_engine: 4,
  electricity_generator: 4,
  metrology: 4,
  lathe: 4,
  railway: 4,
  steel_making: 3,
  iron_smelting: 3,
  gunpowder: 3,
};

export function difficultyFor(slug: string, level: string): number {
  return DIFFICULTY_OVERRIDES[slug] ?? DIFFICULTY_BY_LEVEL[level] ?? 1;
}
