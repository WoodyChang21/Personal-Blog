# CLAUDE_DYNAMIC.md — Motion & Interactivity (Personal-Blog)

Use this guide when the goal is to evolve the site from a **static, document-like feel** into a **more dynamic experience** with **animation, micro-interactions, and responsive motion**—without removing or hiding existing content.

**Discovery:** Claude Code loads `CLAUDE.md` by default. Either merge relevant sections into `CLAUDE.md`, or reference this file in the task prompt (e.g. “Follow CLAUDE.md and CLAUDE_DYNAMIC.md”).

---

## Objective

- Add **purposeful motion**: scroll-linked reveals, hover states, staggered entrances, subtle parallax or section transitions, improved marquee/hero energy, and tasteful loading/idle polish.
- Keep the app **fast, accessible, and content-complete**: every item in `src/data/content.js` must remain visible and linked as today unless the user explicitly asks to change copy or structure.

---

## Project Context (align with CLAUDE.md)

- **Stack:** Vite + React, Tailwind CSS v4 (`@tailwindcss/vite`), GitHub Pages (`base: /Personal-Blog/` in `vite.config.js`).
- **Layout & pages:** `src/pages/HomePage.jsx`, components under `src/components/`.
- **Content:** `src/data/content.js` — single source of truth.
- **Global CSS & keyframes:** `src/index.css` (e.g. existing `marquee-scroll` animation).

---

## Technical Strategy (prefer this order)

1. **CSS-first**
   - Use Tailwind utilities + `src/index.css` (`@layer components`, `@keyframes`) for transitions, transforms, opacity, and simple stagger via `animation-delay` or nth-child patterns.
   - Prefer **GPU-friendly** properties: `transform`, `opacity`; avoid animating `width`/`height`/`top`/`left` on large regions when possible.

2. **React for stateful interaction only**
   - Use small pieces of state for: mobile menu, open/close panels, “in view” toggles, reduced-motion branch.
   - Prefer **`IntersectionObserver`** (via hook or `useEffect`) for scroll-triggered reveals instead of heavy scroll listeners on every frame.

3. **Optional libraries (only with user approval)**
   - Do **not** add `framer-motion`, `motion`, `react-spring`, etc. unless the user explicitly allows a new dependency and you document why CSS alone is insufficient.

4. **Existing motion**
   - `src/components/Marquee.jsx` already uses inline `animation: marquee-scroll ...`. When enhancing, keep marquee **readable** and **non-seizure-inducing** (no extreme flashing; respect reduced motion).

---

## Accessibility & UX (non-negotiable)

- **`prefers-reduced-motion`:** In `src/index.css` or per-component, use `@media (prefers-reduced-motion: reduce)` to **disable or greatly simplify** non-essential animations (e.g. disable infinite marquee or show static strip).
- **Focus:** Keyboard users must see clear `:focus-visible` styles; do not remove focus rings without an equivalent.
- **No motion-as-information-only:** Critical labels and CTAs must be understandable without animation.
- **Performance:** Avoid layout thrash; test on mobile; keep **CLS** stable (reserve space; avoid jump on animation start).

---

## Concrete Feature Ideas (implement incrementally)

| Area | Ideas |
|------|--------|
| **Hero** | Staggered fade/slide for headline, subcopy, buttons; subtle grid shift on hover |
| **Navbar** | Smooth underline/opacity; drawer slide + backdrop fade for mobile menu |
| **Sections** | Titles and rows animate in when scrolled into view; subtle divider motion |
| **Cards** | `ArticleCard.jsx`: hover lift/shadow; optional stagger when parent enters viewport |
| **About** | Portrait subtle scale on hover; stat panels stagger in |
| **Footer** | Social link micro-motion; avoid extra API load for “count up” unless approved |

---

## Implementation Checklist

- [ ] No removal of content from `content.js`; no dropped sections on `HomePage.jsx`.
- [ ] Animations degradable via `prefers-reduced-motion`.
- [ ] No new animation dependency unless user approved.
- [ ] `npm run build` passes after changes.
- [ ] Anchors (`#about`, `#projects`, `#agents`, `#contact`), external links, resume, visitor counter **behavior** preserved.

---

## Definition of Done

1. The site **feels more dynamic** with intentional motion.
2. **All prior information** still displays; links work.
3. **Reduced-motion** users get a calm, usable experience.
4. **Build succeeds**; no major mobile/desktop regressions.

---

## Out of Scope (unless user explicitly requests)

- Replacing the React app with a standalone static HTML demo.
- CMS/API migration without a plan.
- Autoplay video, heavy WebGL, or third-party widgets for “dynamics.”