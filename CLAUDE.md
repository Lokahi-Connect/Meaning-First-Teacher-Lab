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
  main.tsx          # Entry point, HashRouter setup
  App.tsx           # Route definitions
  index.css         # Global styles and CSS custom properties
  modules.ts        # Module data (6 certification modules)
  vite-env.d.ts     # Vite type references
  components/
    Nav.tsx/.css     # Fixed navigation bar (ocean blue, aligned with meaning-first.org)
    Footer.tsx/.css  # Site footer
  pages/
    Dashboard.tsx    # / — Certification dashboard with module pathway
    Registration.tsx # /register — Registration placeholder
    Modules.tsx      # /modules — All modules listing
    ModuleView.tsx   # /modules/:id — Individual module view
```

## Data Relationship

Teacher training module metadata lives in the **Meaning-First-Literacy** data repository:
- `data/teacher-training/*.json` — module content
- `schema/teacher_training_module.schema.json` — module schema
- `schema/teacher_registration.schema.json` — registration schema

This app consumes that data to render modules, registration, and the dashboard.

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
