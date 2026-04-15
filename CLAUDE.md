# CLAUDE.md — Personal-Blog (Claude Code Guide)

## Objective
When a user provides a style direction, design references, or example websites, update this React app’s UI/UX to match that style **without losing existing content, links, sections, or functionality**.

This project is a personal AI portfolio/blog and must always continue to display the current information unless the user explicitly asks to change content.

---

## Project Context

### Stack
- Vite + React (ESM)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Static deployment target: GitHub Pages (`base: /Personal-Blog/`)

### Entry points
- `src/main.jsx`
- `src/App.jsx`
- `src/pages/HomePage.jsx`

### Core content source (single source of truth)
- `src/data/content.js`

### Major UI components
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Marquee.jsx`
- `src/components/AboutSection.jsx`
- `src/components/SectionGroup.jsx`
- `src/components/CategoryRow.jsx`
- `src/components/ArticleCard.jsx`
- `src/components/Footer.jsx`
- UI primitives in `src/components/ui/*`

### Styling foundation
- `src/index.css` contains theme tokens/utilities/components and global layout conventions.

---

## Non-Negotiable Rules

1. **Preserve information**
   - Keep all existing sections and entries visible unless user explicitly requests removal.
   - Do not drop project/article items, social links, resume link, or About copy by accident.
   - Avoid shortening text content without permission.

2. **Preserve data architecture**
   - Keep `src/data/content.js` as the canonical content store.
   - Prefer restyling components over hardcoding content into JSX.
   - Keep object shapes stable unless migration is intentionally requested.

3. **Preserve behavior**
   - Navbar anchor navigation must continue to work.
   - External links must remain valid and open safely (`target`, `rel` as appropriate).
   - Visitor counter in footer (`useVisitorCount`) must remain functional unless user asks to remove/replace.
   - Resume file access (`/resume.pdf`) must continue to work.

4. **Do not rewrite into a single static HTML file**
   - This codebase is a React app. Keep it component-based.

5. **No unrequested feature creep**
   - Implement requested style/system changes only.
   - Do not add random new sections, fake metrics, fake testimonials, or placeholder portfolio items.

---

## Style-Driven Redesign Workflow

When user supplies style notes or reference websites/images:

1. **Extract style system**
   - Identify typography, spacing scale, border radius, shadows, grid rhythm, color system, motion style, button/input patterns, and section composition.

2. **Map style to current structure**
   - Keep existing IA/content hierarchy:
     - Navbar
     - Hero
     - Marquee/highlight strip
     - About
     - Deep Learning section group
     - AI Agent Systems section group
     - Footer/contact
   - Re-theme components while retaining semantic structure and data bindings.

3. **Implement incrementally**
   - Prefer editing shared primitives and `index.css` tokens/utilities first.
   - Then update section components.
   - Keep responsive behavior strong at mobile, tablet, desktop breakpoints.

4. **Visual Verification Loop (required)**
   - After each implementation pass, capture updated screenshots of:
     - full page (desktop + mobile width)
     - key sections (Navbar, Hero, About, section cards, Footer)
   - Compare screenshots against the provided references and list concrete mismatches in:
     - spacing/padding/margins (px-level)
     - typography (font size, weight, line-height, letter spacing)
     - color/contrast (hex-level where possible)
     - borders/radius/shadows
     - layout alignment and responsive behavior
   - Fix all identified mismatches before proceeding.
   - Re-capture screenshots and compare again.
   - Perform **at least 2 full compare/fix rounds**; continue until no major visual differences remain or user says stop.
   - Do not claim completion after a single pass.

5. **Functional + regression validation (required)**
   - Run:
     - `npm run build`
   - Fix build errors before finishing.
   - Check for regressions:
     - missing sections/content
     - broken links/anchors
     - unreadable contrast
     - overflow or mobile layout breaks
     - broken visitor counter and resume link

6. **Report clearly**
   - Summarize style updates made.
   - Include what mismatches were found and corrected in each verification round.
   - Explicitly confirm what content/functionality was preserved.
---

## Content Preservation Checklist (run mentally before finalizing)

- [ ] `navigationLinks` still rendered
- [ ] `heroActions` still rendered
- [ ] `marqueeItems` still rendered
- [ ] `introStats` still rendered
- [ ] `deepLearningSections` items still rendered
- [ ] `agentSections` items still rendered
- [ ] `socialLinks` still rendered
- [ ] About narrative text still present
- [ ] Footer visitor count still displayed
- [ ] Resume link still available

---

## Code Quality Expectations

- Prefer clear, composable JSX over duplication.
- Keep accessibility reasonable:
  - semantic headings and sections
  - meaningful alt text
  - keyboard reachable links/buttons
- Keep class names maintainable; avoid chaotic one-off utility sprawl when a shared class/token is better.
- Do not introduce new dependencies unless genuinely necessary and user-aligned.

---

## If User Asks for “Make it like <site>”
Translate visual language, not literal copy:
- Recreate design patterns (layout rhythm, typography contrast, card styles, visual hierarchy)
- Keep this project’s own content, identity, and links intact
- Never scrape or copy proprietary text/assets verbatim

---

## Definition of Done
A redesign task is complete only when:
1. Requested style direction is visibly applied across the app,
2. Existing information remains intact and discoverable,
3. Build succeeds (`npm run build`),
4. No major responsive regressions are introduced.

---

## Notes for Future Edits
If a redesign requires structural schema changes in `content.js`, perform a safe migration:
- update data shape
- update all consumers
- verify every item still renders
- mention migration in final summary