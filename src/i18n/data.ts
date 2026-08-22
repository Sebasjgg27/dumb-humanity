import type { Locale } from './locales';
import { t } from './index';
import { LEVELS, CATEGORIES, SAFETY_META } from '../data/levels';
import { STAGES } from '../data/stages';
import { SECTIONS } from '../data/sections';
import { SIDEBAR } from '../data/sidebar';

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
