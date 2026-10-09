import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, posix } from 'node:path';

const root = resolve(process.argv[2] ?? 'dist');
const BASE = '/dumb-humanity';

if (!existsSync(root)) {
  console.error(`check-links: ${root} does not exist. Run \`npm run build\` first.`);
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(root).filter((f) => f.endsWith('.html'));
const hrefRe = /(?:href|src)="([^"]+)"/g;
const broken = new Map();
let checked = 0;

for (const file of files) {
  const pageDir = posix.dirname('/' + relative(root, file)) + '/';
  const html = readFileSync(file, 'utf8');

  for (const [, raw] of html.matchAll(hrefRe)) {
    if (/^(https?:|mailto:|data:|#|javascript:)/.test(raw)) continue;

    let path = new URL(raw, 'http://placeholder' + pageDir).pathname;
    if (path.startsWith(BASE)) path = path.slice(BASE.length) || '/';
    if (!path.startsWith('/')) continue;
    path = posix.normalize(path);

    checked++;
    const abs = join(root, path.slice(1));
    const isFile = existsSync(abs) && statSync(abs).isFile();
    const hasIndex = existsSync(join(abs, 'index.html'));
    const ok = path.endsWith('/') ? hasIndex : isFile || hasIndex;
    if (!ok) {
      broken.set(raw, (broken.get(raw) ?? 0) + 1);
    }
  }
}

console.log(`check-links: ${checked} internal links checked across ${files.length} pages`);

if (broken.size) {
  console.error(`check-links: BROKEN (${[...broken.values()].reduce((a, b) => a + b, 0)} refs)`);
  for (const [link, count] of [...broken].sort((a, b) => b[1] - a[1])) {
    console.error(`  ${count}x  ${link}`);
  }
  process.exit(1);
}

console.log('check-links: 0 broken');
