import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(process.argv[2] ?? '.');
const LOCALES = ['en', 'es', 'fr', 'zh', 'ar', 'pt'];
const DOMAINS = ['scenarios', 'disasters', 'emergency'];
const strict = process.argv.includes('--strict');
let failures = 0;

function fail(msg) {
  console.error(`  ✗ ${msg}`);
  failures++;
}

// --- 1. Dictionary key parity ---
const flatten = (obj, prefix = '', out = new Set()) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) flatten(v, key, out);
    else out.add(key);
  }
  return out;
};

const dicts = Object.fromEntries(
  LOCALES.map((l) => [l, JSON.parse(readFileSync(join(root, `src/i18n/dictionaries/${l}.json`), 'utf8'))])
);
const baseKeys = flatten(dicts.en);
console.log(`check-i18n: dictionaries (${baseKeys.size} keys in en)`);
for (const l of LOCALES.slice(1)) {
  const keys = flatten(dicts[l]);
  const missing = [...baseKeys].filter((k) => !keys.has(k));
  const extra = [...keys].filter((k) => !baseKeys.has(k));
  if (missing.length) fail(`${l}.json missing ${missing.length} keys: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '…' : ''}`);
  if (extra.length) fail(`${l}.json has ${extra.length} keys not in en: ${extra.slice(0, 5).join(', ')}${extra.length > 5 ? '…' : ''}`);
  if (!missing.length && !extra.length) console.log(`  ✓ ${l}.json parity`);
}

// --- 2. Article translation coverage ---
const techDir = join(root, 'src/content/tech');
const slugs = readdirSync(techDir).filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''));
const i18nDir = join(root, 'src/content/tech_i18n');
console.log(`check-i18n: articles (${slugs.length} base)`);

for (const l of LOCALES) {
  if (l === 'en') continue;
  const dir = join(i18nDir, l);
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.mdx')) : [];
  const translated = files.map((f) => f.replace(/\.mdx$/, ''));
  const orphans = translated.filter((s) => !slugs.includes(s));
  if (orphans.length) fail(`${l}: translation files with no matching article: ${orphans.join(', ')}`);
  const pct = Math.round((translated.length / slugs.length) * 100);
  console.log(`  ${l}: ${translated.length}/${slugs.length} (${pct}%)${orphans.length ? ' — has orphans' : ''}`);
  if (strict && translated.length < slugs.length) fail(`${l}: strict mode requires ${slugs.length}/${slugs.length}`);
}

// --- 3. Localized data modules ---
console.log('check-i18n: data modules');
for (const l of LOCALES.slice(1)) {
  for (const domain of DOMAINS) {
    const p = join(root, `src/data/i18n/${domain}.${l}.ts`);
    if (!existsSync(p)) continue;
    const src = readFileSync(p, 'utf8');
    if (!/export default/.test(src)) {
      fail(`${domain}.${l}.ts has no default export`);
      continue;
    }
    if (domain === 'emergency') {
      const baseSrc = readFileSync(join(root, 'src/data/emergency.ts'), 'utf8');
      const required = [...baseSrc.matchAll(/export const ([A-Z_0-9]+)/g)].map((m) => m[1]);
      const provided = new Set([...src.matchAll(/([A-Z_0-9]+)\s*:/g)].map((m) => m[1]));
      const missing = required.filter((n) => !provided.has(n));
      if (missing.length) fail(`${domain}.${l}.ts does not provide: ${missing.join(', ')}`);
      else console.log(`  ✓ ${domain}.${l}.ts complete`);
    } else {
      const baseSrc = readFileSync(join(root, `src/data/${domain}.ts`), 'utf8');
      const baseCount = [...baseSrc.matchAll(/^\s+id: '/gm)].length;
      const count = [...src.matchAll(/^\s+id: '/gm)].length;
      if (count !== baseCount) fail(`${domain}.${l}.ts has ${count} entries, base has ${baseCount}`);
      else console.log(`  ✓ ${domain}.${l}.ts complete (${count} entries)`);
    }
  }
}

if (failures) {
  console.error(`check-i18n: ${failures} problem(s)`);
  process.exit(1);
}
console.log('check-i18n: OK');
