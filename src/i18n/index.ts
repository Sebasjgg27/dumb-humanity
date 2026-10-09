import { DEFAULT_LOCALE, LOCALES, LOCALE_MAP, type Locale } from './locales';

import en from './dictionaries/en.json';
import es from './dictionaries/es.json';
import fr from './dictionaries/fr.json';
import zh from './dictionaries/zh.json';
import ar from './dictionaries/ar.json';
import pt from './dictionaries/pt.json';

const dictionaries: Record<Locale, typeof en> = { en, es, fr, zh, ar, pt };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

export function t(locale: Locale, key: string): string {
  const resolve = (loc: Locale): unknown =>
    key.split('.').reduce((obj: any, k) => obj?.[k], dictionaries[loc]);
  const val = resolve(locale);
  if (typeof val === 'string') return val;
  const fallback = resolve(DEFAULT_LOCALE);
  return typeof fallback === 'string' ? fallback : key;
}

export function href(locale: Locale, path: string): string {
  const [rawPath, search = ''] = path.split(/(?=[?#])/);
  const clean = rawPath
    .replace(/^\/dumb-humanity/, '')
    .replace(/^\/(en|es|fr|zh|ar|pt)(\/|$)/, '/')
    .replace(/^\/+/, '');
  const joined = `/dumb-humanity/${locale}/${clean}`.replace(/\/+$/, '');
  return `${joined}/${search}`;
}

export { DEFAULT_LOCALE, LOCALES, LOCALE_MAP };
export type { Locale };
