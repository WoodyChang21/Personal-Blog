# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
```

No test runner is configured (Playwright/Puppeteer are installed as devDependencies but no test scripts exist).

## Architecture

**Stack:** Vite 5 + React 18, Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config.js` — config lives in `src/index.css`). Deployed to GitHub Pages with `base: '/Personal-Blog/'` in `vite.config.js`.

**Data flow:** All site content lives in `src/data/content.js` — this is the single source of truth for nav links, hero CTAs, marquee items, stats, projects, articles, and social links. Components consume this data directly; there is no state management library.

**Page structure:** `src/App.jsx` → `src/pages/HomePage.jsx` renders all sections in order: `Navbar` → `Hero` → `Marquee` → `AboutSection` → `SectionGroup` (Deep Learning, light theme) → `SectionGroup` (AI Agents, dark theme) → `Footer`.

**Section expand/collapse:** `SectionGroup` manages open/closed state for `CategoryRow` children, which each contain an array of `ArticleCard` components. Cards support both `dark` and `light` themes via a prop.

**Custom hooks:**
- `src/hooks/useInView.js` — one-shot `IntersectionObserver` (threshold 0.1, rootMargin `-40px` bottom) used for scroll-reveal; returns `[ref, inView]`.
- `src/hooks/useVisitorCount.js` — fetches from `countapi.maayanlab.cloud`, throttled to once/day via `localStorage`.

**Animations:** Defined in `src/index.css` under `@layer components` and `@keyframes`. Reveal classes (`.reveal`, `.reveal-left`) toggle `.in-view` via `useInView`. The marquee uses a `marquee-scroll` keyframe. All non-essential animations are suppressed under `@media (prefers-reduced-motion: reduce)`.

**Fonts:** Loaded via Google Fonts in `index.html` — Anton (`--font-logo`), Playfair Display 900 (`--font-display`), Space Mono 400/700 (`--font-sans`, `--font-mono`). These CSS custom properties are referenced throughout `index.css`.

## Motion & Animation Guidelines

- Prefer CSS-first (Tailwind utilities + `src/index.css` keyframes) over JS animation libraries.
- Use GPU-friendly properties: `transform`, `opacity`. Avoid animating `width`/`height`/`top`/`left` on large regions.
- Use `useInView` hook (already exists) for scroll-triggered reveals — do not add heavy scroll listeners.
- Do **not** add `framer-motion`, `react-spring`, or similar unless the user explicitly approves a new dependency.
- All new animations must have a `prefers-reduced-motion` fallback in `src/index.css`.
- The `Marquee` component uses inline `animation` style — keep it readable and non-seizure-inducing.

## Content Integrity

- Never remove items from `src/data/content.js` or drop sections in `HomePage.jsx` unless the user explicitly requests it.
- Anchors `#about`, `#projects`, `#agents`, `#contact`, the resume link, and visitor counter behavior must be preserved across changes.
