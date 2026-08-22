# Contributing to Dumb Humanity

Thanks for wanting to help rebuild civilization. Here's how.

## Quick Start

```bash
npm install
npm run dev       # localhost:4321
npm run build     # static build to ./dist
npm run check     # type + content validation
```

## Project Structure

```
src/
├── content/tech/          # MDX articles (the knowledge base)
├── data/
│   ├── sidebar.ts         # Sidebar section structure
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
```

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
people: 2
safety: LOW                  # LOW, MODERATE, HIGH, EXTREME
salvage: ['bricks from ruins']
dr_stone_ref: "Episode 12"
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
2. Keep disaster and section names in English (they're proper nouns)
3. The `en.json` file is the source of truth

## Design Principles

- **Offline-first** — everything is static HTML, no JS required for content
- **Print-ready** — every page should look good on paper
- **6 languages** — all content is translatable
- **No external dependencies** — no CDN, no analytics, no tracking

## Deploy

Push to `main` → GitHub Actions auto-deploys to GitHub Pages.

Or manually:
```bash
npm run build
# Deploy ./dist to your hosting
```

## Questions?

Open an issue. We don't bite. (We're too busy rebuilding civilization.)
