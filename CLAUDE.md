# Claude Code — Meaning-First Literacy™ Teacher-Lab

## Overview

Teacher certification app for Lokahi Connect's Meaning-First Literacy™ program. Teachers complete six sequential modules covering Structured Word Inquiry to earn certification.

## Stack

- React 19 + TypeScript 5.7 + Vite 6
- react-router-dom 7 with HashRouter (for GitHub Pages compatibility)
- Deployed to GitHub Pages at: https://lokahi-connect.github.io/Meaning-First-Teacher-Lab/

## Design System

### Fonts (Google Fonts) — aligned with meaning-first.org

| Token | Family |
|-------|--------|
| `--font-sans` | DM Sans |
| `--font-serif` | Playfair Display |
| `--font-mono` | IBM Plex Mono |

### Color Palette — aligned with meaning-first.org

| Token | Hex | Usage |
|-------|-----|-------|
| `--ocean` | #0D5A8A | Nav background, primary blue |
| `--sky` | #1A8FC1 | Gradient accents |
| `--seafoam` | #2EC4A0 | CTA buttons, active links, badges |
| `--sand` | #F5EFE0 | Alternate section backgrounds |
| `--dusk` | #E8753A | Warm accent |
| `--cream` | #FDFAF4 | Page background |
| `--coral` | #c0392b | Error/warning states |
| `--border` | #e0dbd2 | Card borders, locked badges |
| `--ink` | #1A1A2E | Body text |
| `--muted` | #6B7280 | Secondary text |
| `--white` | #FFFFFF | Card backgrounds |

## Project Structure

```
src/
  main.tsx              # Entry point, HashRouter setup
  App.tsx               # Route definitions
  index.css             # Global styles and CSS custom properties
  modules.ts            # Imports all 6 JSON files; exports typed modules array
  vite-env.d.ts         # Vite type references
  components/
    Nav.tsx/.css         # Fixed navigation bar
    Footer.tsx/.css      # Site footer
    FeedbackButton.tsx   # Fixed bottom-right mailto button (page-aware subject)
  pages/
    Dashboard.tsx        # / — Certification pathway with module cards
    Registration.tsx     # /register — Registration placeholder
    Modules.tsx          # /modules — All modules listing
    ModuleView.tsx       # /modules/:id — Module detail with expandable lesson sections
  data/
    tt_module_1_paradigm_shift.json          # Module metadata (source: Meaning-First-Literacy repo)
    tt_module_2_units_of_writing_system.json
    tt_module_3_four_questions.json
    tt_module_4_grapheme_choice.json
    tt_module_5_word_sums_matrices.json
    tt_module_6_guided_questions.json
  lessons/
    index.ts             # Lookup: moduleNumber → sectionNumber → markdown string
    module1.ts           # Full lesson prose for all 7 sections of Module 1
    module2.ts           # Full lesson prose for all 7 sections of Module 2
    module3.ts           # Full lesson prose for all 7 sections of Module 3
    module4.ts           # Full lesson prose for all 7 sections of Module 4
    module5.ts           # Full lesson prose for all 8 sections of Module 5
    module6.ts           # Full lesson prose for all 7 sections of Module 6
  types/
    module.ts            # TypeScript interfaces: Module, ModuleSection, ModuleAssessment
```

## Data Architecture

**Module metadata** (`src/data/*.json`) is copied from the Meaning-First-Literacy data repository (`data/teacher-training/*.json`). Schema lives at `schema/teacher_training_module.schema.json` in that repo. When metadata changes upstream, copy the JSON files here.

**Lesson prose** (`src/lessons/module*.ts`) lives in this repo and is independent of the metadata JSON. Each file exports a `Record<number, string>` keyed by section number; values are markdown strings rendered by `react-markdown` + `remark-gfm`.

**Rendering**: `ModuleView.tsx` renders sections as `<details>/<summary>` elements. Sections with lesson content are expandable; sections without fall back to the outline view.

## Dependencies added beyond Vite scaffold

- `react-markdown` — renders markdown lesson prose
- `remark-gfm` — adds table support to react-markdown

## Bundle splitting (vite.config.ts)

Manual chunks keep the app shell fast:
- `vendor` — react, react-dom, react-router-dom
- `markdown` — react-markdown, remark-gfm
- `lessons` — all six lesson prose files (~200 KB uncompressed)

## Deployment

### How it works
1. Push to `main` triggers `.github/workflows/deploy.yml`
2. Workflow: checkout → configure-pages → setup Node → `npm ci` → `npm run build` → upload `dist/` → deploy

### Critical rule
`actions/configure-pages` **must run before** `npm run build` in the workflow.

### GitHub Pages settings (one-time)
Settings → Pages → Source → **GitHub Actions** (not "Deploy from a branch")

### Manual re-deploy
Actions tab → Deploy to GitHub Pages → Run workflow

## Development

```bash
npm install    # Install dependencies
npm run dev    # Start dev server
npm run build  # Production build
npm run preview # Preview production build
```

## Vite Config

- `base: "/Meaning-First-Teacher-Lab/"` — required for GitHub Pages subdirectory deployment
