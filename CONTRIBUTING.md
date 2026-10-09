# Contributing to Dumb Humanity

Thanks for wanting to help rebuild civilization. Here's how.

## Quick Start

```bash
npm install
npm run dev         # localhost:4321
npm run build       # static build to ./dist
npm run check       # type + content validation
npm run check:links # verify every internal link resolves
```

## Project Structure

```
src/
├── content/tech/          # MDX articles (the knowledge base)
├── data/
│   ├── sidebar.ts         # Sidebar section structure
│   ├── sections.ts        # Section hub pages (survival, settlement, ...)
│   ├── scenarios.ts       # Survival scenario data
│   ├── disasters.ts       # Disaster data
│   ├── emergency.ts       # Emergency kits, first aid, signals
│   └── levels.ts          # A0-A5 level definitions
├── i18n/
│   ├── dictionaries/      # 6 languages (en, es, fr, zh, ar, pt)
│   └── data.ts            # Translation helpers
├── components/            # Astro components
├── pages/                 # Routes (one file = one page)
└── styles/global.css      # Design tokens + global styles
scripts/
└── check-links.mjs        # Internal link auditor (runs on dist/)
```

## Link Rules

- Internal links inside MDX articles are **relative**: `[printing](../printing/)`.
  Article bodies only render at `/{locale}/tech/{slug}/`, so `../<slug>/` resolves
  correctly in all 6 languages. Never hardcode `/dumb-humanity/tech/...`.
- Everything else (components, pages) goes through `i18nHref(locale, path)`.
- `npm run check:links` fails the build if any internal link 404s.

## Adding a Technology

1. Create an MDX file in `src/content/tech/your_tech.mdx`
2. Fill in the frontmatter:

```yaml
---
title: Your Tech Name
level: A1                    # A0-A5
category: Survival           # See content.config.ts for options
prerequisites: [water]       # Tech slugs that must exist first
unlocks: [next_tech]         # What this enables
materials: ['clay', 'water']
energy: muscle               # muscle, fire, water, steam, electric
time_estimate: "2 hours"
people: 2 or more (More persons thinks better than one)
safety: LOW                  # LOW, MODERATE, HIGH, EXTREME
salvage: ['bricks from ruins']
dr_stone_ref: "Episode 12" #just as reference :)
critical: false
order: 1
---
```

3. Add the tech slug to the appropriate subsection in `src/data/sidebar.ts`

## Adding a Scenario or Disaster

1. Add the data object to `src/data/scenarios.ts` or `src/data/disasters.ts`
2. Add the page link to `PAGE_LINKS` in `src/components/Sidebar.astro`
3. Add the subsection to the sidebar group in `src/data/sidebar.ts`

## Translations

All user-facing strings live in `src/i18n/dictionaries/`. When adding keys:

1. Add the key to **all 6 files** (en, es, fr, zh, ar, pt)
2. Section titles and UI strings are translated (`sections.*`, `nav.*`, ...)
3. The `en.json` file is the source of truth
4. `t()` falls back to English, then to the raw key — a missing key never renders
   as `some.key` on screen

### Translating content

UI chrome is only half the story — the knowledge itself is translated separately:

| Content | Where it lives | Fallback |
|---|---|---|
| 70 tech articles | `src/content/tech_i18n/<locale>/<slug>.mdx` | English body + "not translated" notice |
| Scenario guides | `src/data/i18n/scenarios.<locale>.ts` (default export = full array, same ids) | English array |
| Disaster guides | `src/data/i18n/disasters.<locale>.ts` (default export = full array, same ids) | English array |
| Emergency (kits, first aid, signals, water, shelter, foraging, evacuation, comms) | `src/data/i18n/emergency.<locale>.ts` (default export = object with every key exported by `src/data/emergency.ts`) | English objects |

Rules:

- Translated article frontmatter: `title` is required; `materials`, `energy`,
  `time_estimate`, `salvage` are optional and fall back to English per field
- Keep `../<slug>/` relative links inside translated bodies (see Link Rules above)
- Keep `dr_stone_ref` episode codes untranslated
- Keep terminology consistent across a language (fire, shelter, purification…)
- `npm run check:i18n` prints per-locale coverage, dictionary parity, and fails
  on orphan files or incomplete data modules; `--strict` fails on partial coverage

## Adding a Section Hub

1. Add the section definition to `src/data/sections.ts` (title, categories, slugs, priority)
2. Create `src/pages/[locale]/yoursection.astro` — copy `settlement.astro` as the template
3. Translate `sections.<id>` in all 6 dictionaries
4. Wire it into the "next section" chain in `src/components/SectionLayout.astro`

## Design Principles

- **Offline-first** — everything is static HTML, no JS required for content
- **Print-ready** — every page should look good on paper
- **6 languages** — all content is adn must be translatable
- **No external dependencies** — no CDN, no analytics, no tracking

## Deploy

Push to `main` → `.github/workflows/deploy.yml` runs `check`, `build`, and
`check:links`, then deploys `./dist` to GitHub Pages.

The repo needs **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Manual fallback (deploys `./dist` to the `gh-pages` branch):

```bash
npm run build && npm run check:links
git worktree add /tmp/ghpages gh-pages 2>/dev/null || git worktree add /tmp/ghpages -b gh-pages
cp -R "$PWD"/dist/. /tmp/ghpages/
git -C /tmp/ghpages add -A
git -C /tmp/ghpages commit -m "Deploy"
git -C /tmp/ghpages push origin gh-pages
git worktree remove /tmp/ghpages --force
```

## Questions?

Open an issue. We don't bite. (We're too busy rebuilding civilization or searching more knowledge to dont let the humanity down, every corner could start or be a disaster.)
before opening an issue check if your problem was resolved before, so everyone dont make turns around the same question bud.