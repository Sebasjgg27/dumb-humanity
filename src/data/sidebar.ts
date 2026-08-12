export interface SidebarGroup {
  id: string;
  label: string;
  icon: 'survival' | 'science' | 'engineering' | 'community';
  subsections: { id: string; label: string; slugs: string[] }[];
}

export const SIDEBAR: SidebarGroup[] = [
  {
    id: 'survival',
    label: 'Survival',
    icon: 'survival',
    subsections: [
      { id: 's-water', label: 'Water', slugs: ['water'] },
      { id: 's-shelter', label: 'Shelter', slugs: ['shelter', 'permanent_shelter'] },
      { id: 's-fire', label: 'Fire', slugs: ['fire', 'cooking', 'charcoal', 'bellows'] },
      { id: 's-food', label: 'Food', slugs: ['hunting_trapping', 'agriculture', 'food_preservation', 'salt', 'animal_domestication'] },
      { id: 's-med', label: 'Medicine', slugs: ['first_aid', 'medicine_herbal', 'soap', 'sanitation'] },
      { id: 's-tools', label: 'Tools & Materials', slugs: ['tool_stone', 'cordage', 'pottery', 'textiles_weaving'] },
    ],
  },
  {
    id: 'science',
    label: 'Science',
    icon: 'science',
    subsections: [
      { id: 'c-chem', label: 'Chemistry', slugs: ['sulfuric_acid', 'nitric_acid', 'saltpeter', 'gunpowder', 'distillation', 'glassblowing', 'lenses'] },
      { id: 'c-measure', label: 'Measurement', slugs: ['metrology', 'clockwork'] },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    icon: 'engineering',
    subsections: [
      { id: 'e-met', label: 'Metallurgy', slugs: ['iron_smelting', 'steel_making', 'copper_extraction', 'bronze_working', 'wire_drawing', 'mining'] },
      { id: 'e-mach', label: 'Machines', slugs: ['lathe', 'water_wheel', 'steam_engine', 'railway'] },
      { id: 'e-power', label: 'Power', slugs: ['magnets', 'electricity_generator', 'batteries'] },
      { id: 'e-comms', label: 'Communication', slugs: ['paper', 'printing', 'signaling'] },
    ],
  },
  {
    id: 'community',
    label: 'Community',
    icon: 'community',
    subsections: [{ id: 'g-gov', label: 'Governance', slugs: ['community_governance'] }],
  },
];
