export interface SidebarGroup {
  id: string;
  label: string;
  icon: 'survival' | 'science' | 'engineering' | 'community' | 'emergency' | 'scenarios' | 'disasters';
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
  {
    id: 'emergency',
    label: 'Emergency',
    icon: 'emergency',
    subsections: [
      { id: 'em-kits', label: 'Survival Kits', slugs: [] },
      { id: 'em-firstaid', label: 'First Aid', slugs: ['first_aid', 'medicine_herbal'] },
      { id: 'em-signals', label: 'Signals', slugs: ['signaling', 'signaling_optical'] },
      { id: 'em-water', label: 'Water Purification', slugs: [] },
      { id: 'em-shelter', label: 'Emergency Shelter', slugs: [] },
      { id: 'em-food', label: 'Food & Foraging', slugs: [] },
      { id: 'em-evac', label: 'Evacuation', slugs: [] },
      { id: 'em-comms', label: 'Communication', slugs: [] },
    ],
  },
  {
    id: 'scenarios',
    label: 'Survival Scenes',
    icon: 'scenarios',
    subsections: [
      { id: 'sc-island', label: 'Island', slugs: [] },
      { id: 'sc-desert', label: 'Desert', slugs: [] },
      { id: 'sc-arctic', label: 'Arctic', slugs: [] },
      { id: 'sc-jungle', label: 'Jungle', slugs: [] },
      { id: 'sc-mountain', label: 'Mountain', slugs: [] },
      { id: 'sc-ocean', label: 'Ocean', slugs: [] },
      { id: 'sc-urban', label: 'Urban Ruins', slugs: [] },
    ],
  },
  {
    id: 'disasters',
    label: 'Disasters',
    icon: 'disasters',
    subsections: [
      { id: 'd-earthquake', label: 'Earthquake', slugs: [] },
      { id: 'd-tsunami', label: 'Tsunami', slugs: [] },
      { id: 'd-hurricane', label: 'Hurricane', slugs: [] },
      { id: 'd-tornado', label: 'Tornado', slugs: [] },
      { id: 'd-flood', label: 'Flood', slugs: [] },
      { id: 'd-volcano', label: 'Volcanic Eruption', slugs: [] },
      { id: 'd-blizzard', label: 'Blizzard', slugs: [] },
      { id: 'd-nuclear', label: 'Nuclear Event', slugs: [] },
      { id: 'd-industrial', label: 'Industrial Accident', slugs: [] },
      { id: 'd-pandemic', label: 'Pandemic', slugs: [] },
    ],
  },
];
