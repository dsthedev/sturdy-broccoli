# NaturPro Landing Page Experiment

This repository is a **technical experiment in building a deployable, data-driven landing page** with a minimal frontend stack. The goal is to validate a pattern where page structure and display content are driven by JSON configuration while the UI is rendered by reusable React section components.

## Project Purpose

This project is intentionally narrow in scope:

- Prove a lightweight architecture for quickly shipping static landing pages
- Keep runtime simple (no backend, no CMS dependency)
- Separate data/content from rendering logic
- Keep output deployable to any static host with a standard build artifact

## Tech Stack

- `React 19` + `TypeScript`
- `Vite` for dev server + production bundling
- `Tailwind CSS v4` tokens and utility styling
- `shadcn` style UI primitives for composable interface blocks
- `Lucide React` icons

## Architecture Overview

### 1) Data-Driven Section Rendering

The page is rendered from `src/data/alphacontent.json`.

- `layout[]` defines section order and section component mapping
- `content` stores shared structured data (services, offers, emergency items, trust items)
- `brand` stores reusable identity/contact fields used across multiple sections

`src/App.tsx` acts as a section router:

- Reads layout entries
- Resolves `dataKey` to content slices
- Passes typed props into each section component

This creates a clean split between:

- **What is shown** (JSON)
- **How it is shown** (React section components)

### 2) Component Structure

- `src/components/*` contains page sections (`Hero`, `TrustBar`, `ServiceGrid`, etc.)
- `src/components/ui/*` contains reusable UI primitives (`button`, `card`, `separator`, etc.)
- `src/types/content.ts` defines the content contracts used by both JSON and section components

### 3) Background + Motion Layer

The app wrapper in `src/App.tsx` handles:

- Full-width repeating background image
- Lightweight parallax offset based on scroll position
- Optional soft readability overlay via translucent + blur layer

## Development Workflow

Install dependencies:

```bash
pnpm install
```

Run local dev server:

```bash
pnpm dev
```

Type-check only:

```bash
pnpm typecheck
```

Production build:

```bash
pnpm build
```

Preview built output:

```bash
pnpm preview
```

## Deployment Model

This project is a static SPA build and can be deployed to any static hosting platform that serves the `dist/` folder, including:

- Vercel
- Netlify
- GitHub Pages
- Azure Static Web Apps
- S3/CloudFront-style static hosting

Recommended CI/CD baseline:

1. Install (`pnpm install --frozen-lockfile`)
2. Validate (`pnpm typecheck`)
3. Build (`pnpm build`)
4. Publish `dist/`

## Why This Pattern

This experiment is useful when you need to spin up and iterate on landing pages quickly while preserving engineering control over:

- Type safety
- composable UI primitives
- reproducible build + deploy pipeline
- low operational complexity (no backend runtime)
