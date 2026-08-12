export interface Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  slugs: string[];
  priority: number;
}

export const SECTIONS: Section[] = [
  {
    id: 'survival',
    title: 'Survival',
    subtitle: 'Priority 1 — keep people alive',
    description:
      'Water, fire, shelter, food, hygiene, and first aid. The absolute floor of the ladder. Nothing else matters until a group can stay alive.',
    categories: ['Survival', 'Food & Water', 'Shelter'],
    slugs: ['tool_stone', 'cordage'],
    priority: 1,
  },
  {
    id: 'settlement',
    title: 'Settlement',
    subtitle: 'Priority 2 — live here permanently',
    description:
      'Permanent shelter, sanitation, and the social structures that let a village persist across seasons and generations.',
    categories: ['Community'],
    slugs: ['permanent_shelter', 'soap', 'sanitation', 'salt'],
    priority: 2,
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    subtitle: 'Priority 2 — feed people reliably',
    description:
      'Farming, seed saving, food preservation, and animal husbandry. The surplus that frees people to become specialists.',
    categories: ['Food & Water'],
    slugs: ['animal_domestication'],
    priority: 2,
  },
  {
    id: 'medicine',
    title: 'Medicine',
    subtitle: 'Priority 1 — infection kills more than injury',
    description:
      'Wound care, hygiene, herbal knowledge, and the honest limits of low-tech medicine before real chemistry exists.',
    categories: [],
    slugs: ['first_aid', 'medicine_herbal', 'soap', 'sanitation'],
    priority: 1,
  },
  {
    id: 'science',
    title: 'Science',
    subtitle: 'Priority 4 — the method behind the rebuild',
    description:
      'The scientific method made physical: measurement, chemistry, and the reproducible experiments that unlock every later stage.',
    categories: ['Chemistry', 'Metrology', 'Computing', 'Electronics'],
    slugs: ['distillation', 'lenses', 'glassblowing', 'clockwork'],
    priority: 4,
  },
  {
    id: 'engineering',
    title: 'Engineering',
    subtitle: 'Priority 3 — machines and power',
    description:
      'Mechanics, materials, metallurgy, and the machines — the lathe, water wheel, and steam engine — that multiply human muscle.',
    categories: ['Machine Tools', 'Power', 'Transport', 'Communications', 'Metallurgy'],
    slugs: ['metrology', 'lathe', 'water_wheel', 'steam_engine', 'railway'],
    priority: 3,
  },
  {
    id: 'industry',
    title: 'Industry',
    subtitle: 'Priority 5 — scale beyond one town',
    description:
      'Manufacturing, chemicals, transport, and communication at regional scale. Where the seed of A2 becomes the fabric of a civilization.',
    categories: [],
    slugs: ['sulfuric_acid', 'nitric_acid', 'saltpeter', 'gunpowder', 'printing', 'paper', 'mining', 'railway', 'copper_extraction', 'wire_drawing'],
    priority: 5,
  },
];
