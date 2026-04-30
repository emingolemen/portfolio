---
name: Portfolio site state
description: Current state, stack, design decisions, and what's been built for emingolemen.vercel.app
type: project
---

Next.js 14 + Tailwind CSS + Framer Motion portfolio at emingolemen.vercel.app. Repo: /Users/emin/repos/portfolio.

**Stack:** Next.js 14, TypeScript, Tailwind CSS (darkMode: 'class'), Framer Motion, Playfair Display + Figtree fonts.

**Design system:** CSS variables on :root and .dark for theming (--bg, --bg-surface, --border, --text-primary, --text-secondary, --accent, --blob). ThemeProvider (client component) reads localStorage on mount; ThemeToggle button in header top-right. Inline script in layout.tsx prevents FOUC.

**Pages built:**
- `/` — Hero (serif greeting, blob placeholder for doodle, availability badge) + 5 project cards with real content
- `/about` — Bio, tools, skills, languages, education
- `/contact` — Email + LinkedIn links
- `/shots` — Empty grid structure (6 placeholder cards), ready for design shots

**Hero doodle:** User will create a hand-drawn illustration in Figma showing career (Figma frames, rectangles, screens) and personal interests (cooking, baking, brewing, fermenting). The doodle wraps a small circular photo. Currently a placeholder blob + dashed circle at 400×400px.

**Why:** User is job hunting and wants a modern, editorial portfolio. Prefers very subtle animations (fade-in only, no bouncing). Dark mode is manual toggle + system preference fallback.

**Project sections:** 5-section scroll-synced accordion sidebar (Overview, Research & Discovery, Design Process, Implementation, Results & Impact). Intersection Observer syncs the open accordion to the most-visible image. Real content filled in for all 5 projects.
