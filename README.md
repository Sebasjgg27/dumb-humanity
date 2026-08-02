# Rebirth Manual

A practical, offline-first knowledge base for restarting human civilization — from
survival to industry. Inspired by *Dr. Stone*, grounded in real knowledge-recovery
science (InfoPreserver's Rebuild Ladder, Lewis Dartnell's *The Knowledge*, Open Source
Ecology's GVCS).

## Live site

Deployed to GitHub Pages. After the first push, the site builds automatically at:

```
https://sebasjgg27.github.io/dumb-humanity/
```

## Stack

- **Astro 5** — static site generator
- **MDX** — content collections (guides as content)
- **Tailwind CSS v4** — styling
- **GitHub Actions** — deploy to GitHub Pages

## The ladder (A0–A5)

| Level | Name                 | Question                       |
| ----- | -------------------- | ------------------------------ |
| A0    | Survival Baseline    | Can humans stay alive?         |
| A1    | Stabilized Community | Can people live here sustainably? |
| A2    | Industrial Seed      | Can we bootstrap industry?     |
| A3    | Infrastructure Recovery | Can systems scale beyond one town? |
| A4    | Advanced Industry & Science | Precision, optimization, research |
| A5    | Frontier & Leapfrogs | High-dependency systems for future societies |

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # static build to ./dist
npm run check     # type + content check
```

## Content

Each technology is an MDX file in `src/content/tech/` with a typed frontmatter schema
(level, category, prerequisites, unlocks, materials, salvage, safety, Dr. Stone ref).
The schema lives in `src/content.config.ts`.

## Deploy

Push to `main` and the Actions workflow builds and deploys to Pages. (The repo must
have **Settings → Pages → Build and deployment: GitHub Actions** selected.)
