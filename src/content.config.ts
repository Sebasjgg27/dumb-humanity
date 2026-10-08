import { defineCollection, reference, z } from 'astro:content';

const tech = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      // Identity
      title: z.string(),
      // The stage (A-level) this technology belongs to
      level: z.enum(['A0', 'A1', 'A2', 'A3', 'A4', 'A5']),
      // Classification
      category: z.enum([
        'Survival',
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
      ]),
      // Dependencies: technologies that must exist first
      prerequisites: z.array(reference('tech')).default([]),
      // What this technology enables
      unlocks: z.array(reference('tech')).default([]),
      // Raw materials needed
      materials: z.array(z.string()).default([]),
      // Energy source required
      energy: z.string().default('muscle'),
      // Time estimate to build from zero
      time_estimate: z.string().default('unknown'),
      // People required to produce it
      people: z.number().default(1),
      // Safety level for handling instructions
      safety: z.enum(['LOW', 'MODERATE', 'HIGH', 'EXTREME']).default('LOW'),
      // What to scavenge from modern ruins instead of building from scratch
      salvage: z.array(z.string()).default([]),
      // Dr. Stone reference
      dr_stone_ref: z.string().optional(),
      // Open Source Ecology machine reference
      gvcs_machines: z.array(z.string()).default([]),
      // Notion of whether the node is considered critical
      critical: z.boolean().default(false),
      // Sort weight within a level
      order: z.number().default(99),
    }),
});

// Translated article bodies + display strings, one folder per locale:
// src/content/tech_i18n/<locale>/<slug>.mdx
// Any field left out falls back to the English `tech` entry.
const tech_i18n = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      materials: z.array(z.string()).optional(),
      energy: z.string().optional(),
      time_estimate: z.string().optional(),
      salvage: z.array(z.string()).optional(),
    }),
});

export const collections = { tech, tech_i18n };
