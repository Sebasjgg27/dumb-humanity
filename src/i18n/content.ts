import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './locales';
import { techSlug } from '../data/levels';

export interface LocalTech {
  slug: string;
  entry: CollectionEntry<'tech'>;
  translated: CollectionEntry<'tech_i18n'> | null;
  title: string;
  summary: string;
  body: string;
  materials: string[];
  salvage: string[];
  time_estimate: string;
  energy: string;
}

function buildLocalTech(
  tech: CollectionEntry<'tech'>[],
  localized: CollectionEntry<'tech_i18n'>[],
  summaryLength: number
): LocalTech[] {
  const bySlug = new Map(localized.map((e) => [techSlug(e.id), e]));
  return tech.map((entry) => {
    const slug = techSlug(entry.id);
    const translated = bySlug.get(slug) ?? null;
    const body = translated?.body ?? entry.body;
    const data = translated?.data;
    return {
      slug,
      entry,
      translated,
      title: data?.title ?? entry.data.title,
      body,
      summary: body.slice(0, summaryLength).replace(/#/g, '').replace(/\s+/g, ' ').trim(),
      materials: data?.materials ?? entry.data.materials,
      salvage: data?.salvage ?? entry.data.salvage,
      time_estimate: data?.time_estimate ?? entry.data.time_estimate,
      energy: data?.energy ?? entry.data.energy,
    };
  });
}

export async function getLocalTech(locale: Locale, summaryLength = 130): Promise<LocalTech[]> {
  const tech = await getCollection('tech');
  const localized =
    locale === 'en' ? [] : await getCollection('tech_i18n', (e) => e.id.startsWith(`${locale}/`));
  return buildLocalTech(tech, localized, summaryLength);
}

export async function getLocalTechBySlug(
  locale: Locale,
  slug: string
): Promise<LocalTech | undefined> {
  return (await getLocalTech(locale)).find((t) => t.slug === slug);
}

export async function getTechTitles(locale: Locale): Promise<Record<string, string>> {
  const local = await getLocalTech(locale);
  return Object.fromEntries(local.map((t) => [t.slug, t.title]));
}
