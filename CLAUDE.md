# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

E46 Vault is a BMW E46 330i/Ci/xi technical knowledge base built with **Astro + Starlight**. It contains ~250 MDX content pages covering maintenance, repair, modifications, and reference material.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` (also builds Pagefind search index) |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | TypeScript and content schema validation |

No linting or test commands are configured. The build itself validates content schema and sidebar slug correctness.

## Architecture

**Astro + Starlight** handles routing, sidebar, search (Pagefind), and dark mode. Content lives as MDX files in `src/content/docs/`, organized into 16 sections. The sidebar in `astro.config.mjs` uses explicit `slug` references that must exactly match file paths (relative to `src/content/docs/`, without `.mdx` extension).

### Content Schema

`src/content.config.ts` extends Starlight's `docsSchema` with optional fields: `difficulty`, `timeEstimate`, `toolsRequired`, `partNumbers`, `applicableYears`, `applicableModels`, `relatedFaultCodes`. These are validated by Zod at build time.

### Data-Driven Components

Three table components read from JSON data files at build time:

| Component | Data File |
|-----------|-----------|
| `PartNumberTable.astro` | `src/data/part-numbers.json` |
| `TorqueSpecTable.astro` | `src/data/torque-specs.json` |
| `FluidCapacityTable.astro` | `src/data/fluid-capacities.json` |

These table components include client-side vanilla JS for live filtering/search. The remaining 8 components (`PartNumber`, `TorqueSpec`, `FluidSpec`, `ToolList`, `DifficultyRating`, `TimeEstimate`, `WarningCallout`, `YearRange`) are inline display components that take props directly.

### Theming

Two CSS files registered in `astro.config.mjs` under `customCss`:
- `src/styles/custom.css` — BMW color palette (primary: `#0066b1`), Starlight token overrides (`--sl-color-accent-*`), and all component class styles
- `src/styles/e46-theme.css` — Extended tokens for hero, procedure steps, status badges

## Key Conventions

- **Sidebar slugs must match files**: Adding/renaming an MDX file requires updating the corresponding slug in `astro.config.mjs` sidebar config. A mismatch causes a build failure.
- **Part numbers**: Format with spaces: `11 12 7 588 412` (not `11127588412`)
- **Units**: Metric first, imperial in parentheses
- **Frontmatter**: Every content page needs at minimum `title`, `description`, and `sidebar.order`
- **Content sources**: Technical data should be verifiable against BMW TIS, ETK, or Bentley manual

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. Uses Node 20.
