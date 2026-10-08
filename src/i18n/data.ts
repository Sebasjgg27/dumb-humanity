import type { Locale } from './locales';
import { t } from './index';
import { LEVELS, CATEGORIES, SAFETY_META } from '../data/levels';
import { STAGES } from '../data/stages';
import { SECTIONS } from '../data/sections';
import { SIDEBAR } from '../data/sidebar';
import { SCENARIOS, SCENARIO_BY_ID, type Scenario } from '../data/scenarios';
import { DISASTERS, DISASTER_BY_ID, type Disaster } from '../data/disasters';
import * as emergency from '../data/emergency';

// Per-locale content modules: src/data/i18n/<domain>.<locale>.ts with a default export.
// A missing file simply means that locale falls back to the English data.
const contentModules = import.meta.glob<Record<string, unknown>>('../data/i18n/*.ts', {
  eager: true,
});
const contentRegistry: Record<string, unknown> = {};
for (const path of Object.keys(contentModules)) {
  const match = /\/([a-z]+)\.([a-z]{2})\.ts$/.exec(path);
  if (match) contentRegistry[`${match[1]}.${match[2]}`] = contentModules[path].default;
}

function localized<T>(domain: string, locale: Locale, base: T): T {
  if (locale === 'en') return base;
  return (contentRegistry[`${domain}.${locale}`] as T) ?? base;
}

export function getScenarios(locale: Locale): Scenario[] {
  return localized('scenarios', locale, SCENARIOS);
}

export function getScenario(locale: Locale, id: string): Scenario | undefined {
  return getScenarios(locale).find((s) => s.id === id) ?? SCENARIO_BY_ID[id];
}

export function getDisasters(locale: Locale): Disaster[] {
  return localized('disasters', locale, DISASTERS);
}

export function getDisaster(locale: Locale, id: string): Disaster | undefined {
  return getDisasters(locale).find((d) => d.id === id) ?? DISASTER_BY_ID[id];
}

export function getEmergencyData(locale: Locale): typeof emergency {
  return localized('emergency', locale, emergency);
}

export function getTranslatedLevels(locale: Locale) {
  if (locale === 'en') return LEVELS;
  return LEVELS.map((l) => ({
    ...l,
    name: t(locale, `levels.${l.id}.name`),
    timeframe: t(locale, `levels.${l.id}.timeframe`),
    question: t(locale, `levels.${l.id}.question`),
    description: t(locale, `levels.${l.id}.description`),
    dr_stone: t(locale, `levels.${l.id}.drStone`),
  }));
}

export function getTranslatedStages(locale: Locale) {
  if (locale === 'en') return STAGES;
  return STAGES.map((s) => ({
    ...s,
    name: t(locale, `stages.${s.id}.name`),
    question: t(locale, `stages.${s.id}.question`),
    description: t(locale, `stages.${s.id}.description`),
  }));
}

export function getTranslatedSections(locale: Locale) {
  if (locale === 'en') return SECTIONS;
  return SECTIONS.map((s) => ({
    ...s,
    title: t(locale, `sections.${s.id}.title`),
    subtitle: t(locale, `sections.${s.id}.subtitle`),
    description: t(locale, `sections.${s.id}.description`),
  }));
}

export function getTranslatedSidebar(locale: Locale) {
  if (locale === 'en') return SIDEBAR;
  return SIDEBAR.map((g) => ({
    ...g,
    label: t(locale, `sidebar.groups.${g.id}.label`),
    subsections: g.subsections.map((sub) => ({
      ...sub,
      label: t(locale, `sidebar.groups.${g.id}.subsections.${sub.id}`),
    })),
  }));
}

export function getTranslatedCategories(locale: Locale) {
  if (locale === 'en') return CATEGORIES;
  return CATEGORIES.map((c) => t(locale, `categories.${c}`));
}

export function getTranslatedSafety(locale: Locale) {
  if (locale === 'en') return SAFETY_META;
  const result: Record<string, { label: string; color: string }> = {};
  for (const [key, val] of Object.entries(SAFETY_META)) {
    result[key] = { ...val, label: t(locale, `safety.${key}`) };
  }
  return result;
}
