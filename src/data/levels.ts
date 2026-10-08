export type Level = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5';

export interface LevelInfo {
  id: Level;
  name: string;
  timeframe: string;
  question: string;
  description: string;
  color: string;
  dr_stone: string;
}

export const LEVELS: LevelInfo[] = [
  {
    id: 'A0',
    name: 'Survival Baseline',
    timeframe: 'Days – Weeks',
    question: 'Can humans stay alive?',
    description:
      'Water, fire, shelter, first aid, and the first hand-made tools. The absolute floor for keeping a group alive.',
    color: '#a94256',
    dr_stone: 'Senku\u2019s first three months: stone tools, rope, bow drill, fire.',
  },
  {
    id: 'A1',
    name: 'Stabilized Community',
    timeframe: 'Months – Years',
    question: 'Can people live here sustainably?',
    description:
      'Agriculture, food preservation, permanent shelter, sanitation, soap, and the social structures that let a village persist across seasons and generations.',
    color: '#ad5b22',
    dr_stone: 'Ishigami Village: farming, pottery, weaving, a settled way of life.',
  },
  {
    id: 'A2',
    name: 'Industrial Seed',
    timeframe: 'Years – Decades',
    question: 'Can we bootstrap industry?',
    description:
      'The non-linear acceleration point. Charcoal, iron, chemicals, the lathe, steam, and electricity unlock everything after them. The hardest and most valuable stage.',
    color: '#94771c',
    dr_stone: 'The Kingdom of Science: blast furnace, sulfuric acid, generators, radio.',
  },
  {
    id: 'A3',
    name: 'Infrastructure Recovery',
    timeframe: 'Decades',
    question: 'Can systems scale beyond one town?',
    description:
      'Regional waterworks, electrical grids, rail networks, cold chains, and public health systems that bind many communities together.',
    color: '#457a54',
    dr_stone: 'The Perseus, GPS, hydroelectric dams, paved roads.',
  },
  {
    id: 'A4',
    name: 'Advanced Industry & Science',
    timeframe: 'Generations',
    question: 'Precision, optimization, research',
    description:
      'Transistor electronics, integrated circuits, modern chemistry and pharmaceuticals, and the return of scientific research as an institution.',
    color: '#2b4a7a',
    dr_stone: 'The silicon road, vacuum tubes, the parametron computer.',
  },
  {
    id: 'A5',
    name: 'Frontier & Leapfrogs',
    timeframe: 'Long Horizon',
    question: 'High-dependency systems for future societies',
    description:
      'Aerospace, satellites, and advanced biotechnology. Only worth building after the ladder below is solid. Also: ways to leapfrog the whole ladder.',
    color: '#66559b',
    dr_stone: 'The moon mission, contact with Why-Man.',
  },
];

export const LEVEL_BY_ID = Object.fromEntries(LEVELS.map((l) => [l.id, l])) as Record<Level, LevelInfo>;

export function techSlug(id: string): string {
  return id.replace(/\.mdx?$/, '');
}

export const CATEGORIES = [  'Survival',
  'Shelter',
  'Food & Water',
  'Community',
  'Power',
  'Metallurgy',
  'Chemistry',
  'Machine Tools',
  'Communications',
  'Transport',
  'Metrology',
  'Infrastructure',
  'Electronics',
  'Computing',
  'Frontier',
] as const;

export const SAFETY_META: Record<string, { label: string; color: string }> = {
  LOW: { label: 'Low risk', color: '#3e7250' },
  MODERATE: { label: 'Moderate risk', color: '#94771c' },
  HIGH: { label: 'High risk', color: '#ad5b22' },
  EXTREME: { label: 'Extreme risk', color: '#9c3b2c' },
};
