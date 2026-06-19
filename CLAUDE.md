# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Production build + TypeScript type-check
npm run lint         # ESLint check
npm run start        # Serve the production build
```

If port 3000 is in use: `npm run dev -- --port 3001`

Install deps (use a temp cache if the default npm cache has permission issues):

```bash
npm install --cache /tmp/npm-cache-portfolio
```

## Architecture

Single-page app — one route (`/`), no dynamic routes. All content is statically generated at build time.

**Page sections (in order):** Hero → About → Projects → Experience → Contact

**Data flow:** `src/data/` → `src/sections/` → `src/app/page.tsx`

- `src/data/projects.ts` and `src/data/experience.ts` are the only files to edit for content changes — no component edits needed.
- Skills (in `About.tsx`) and education are hardcoded directly in the component, not in a data file.
- `src/types/index.ts` defines `Project`, `Experience`, and `Skill` interfaces.
- Sections (`src/sections/`) are server components except `Contact.tsx` (`'use client'` — form state).
- `Navbar.tsx` is `'use client'` (mobile menu state). Everything else is server-rendered.
- `ThemeToggle.tsx` exists but is unused — theme is forced dark.
- `src/components/ui/` exists but is currently empty.
- `ProjectCard.tsx` renders each project — shows a gradient letter placeholder (not an image) because no real images exist yet.

**Theme:** `next-themes` wraps the app with `forcedTheme="dark"` — always dark. `Starfield.tsx` renders 280 animated twinkling stars on a fixed canvas behind all content.

**Font:** Inter (Google Fonts, latin subset), applied via `inter.className` on `<body>`.

**Contact form:** Posts directly to `https://api.web3forms.com/submit` from the client — no API route. Requires `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local`.

## Content

**Who this site is for:** Kusumajaya (Kusuma) — MIS Manager at PT. Tirta Putra Wisata (Panorama Tours), Jakarta. 17+ years in MS SQL, QlikView, Crystal Reports, SSRS, and business process automation.

**Experience (`src/data/experience.ts`)** — 3 jobs, all filled in:

1. MIS Manager · PT. Tirta Putra Wisata (Panorama Tours) · Jan 2008 – Present
2. Account Management, IT & MIS · PT. Citra Wahana Tirta Indonesia (Carlson Wagonlit Travel) · May 2000 – Dec 2007
3. Supervisor Assistant · PT. Prima Sekarkarsa (Fun City) · Nov 1997 – Jul 1999

**Projects (`src/data/projects.ts`)** — 2 real + 1 placeholder:

1. ETL Pipeline Tool (in-progress) — Python, MSSQL, SQL, pandas
2. Travel KPI Dashboard (live) — QlikView, SQL, MSSQL
3. `[Your Next Project]` — placeholder to replace

**Skills (hardcoded in `src/sections/About.tsx`):**

- Databases: MSSQL, MySQL, MS Access
- BI & Reporting: QlikView, Crystal Reports, SSRS
- Tools & Platforms: Visual Studio, Sabre GDS, Microsoft Office
- Certifications: MCP (Microsoft Certified Professional), Crystal Reports 8.5

**Education (hardcoded in `src/sections/About.tsx`):**

- Magister Manajemen Sistem Informatika (MMSI) · Universitas Bina Nusantara · Jakarta, 2002
- B.S., Economics · University of Oregon · Eugene, OR, 1997

**Email (live, not a placeholder):** `cpkusuma@gmail.com` — used in Hero and Footer social links.

## Design system — cosmic/space theme

The visual aesthetic is deep space: pure black background, silver/white text, glassmorphism cards, animated starfield. Reference image: `IMG_6971.JPG` (black hole spiral).

**Z-index layering:**

- `Starfield` canvas: `position: fixed; z-index: 0` — draws twinkling stars over the dark html background
- Content wrapper in `layout.tsx`: `position: relative; z-index: 1` — all page content sits above the canvas

**Background:**

- `html { background: #000008 }` — near-pure black base
- `body { background: transparent }` — lets the html dark bg and starfield show through

**Color palette (no `dark:` prefixes — always dark):**

- Primary text: `text-white`
- Secondary text: `text-slate-300`
- Muted text: `text-slate-400` / `text-slate-500`
- Accent lines/dividers: `bg-slate-400`
- Borders: `border-white/10`
- Cards/panels: `bg-black/50 backdrop-blur-sm border border-white/10`
- Alternating section tint: `bg-white/[0.02]` (About, Experience)
- Primary buttons: `bg-white text-black hover:bg-slate-100`
- Secondary buttons: `border-white/15 text-slate-300 hover:bg-white/5`
- Tech badges: `bg-white/5 border border-white/10 text-slate-400`
- Focus rings: `focus-visible:ring-2 focus-visible:ring-white/40`
- No blue anywhere — replaced with silver/white

**Styling conventions:**

- Two global utility classes in `globals.css`: `.section-padding` and `.container-max`. Use on every section wrapper.
- Cards use glassmorphism: `bg-black/50 backdrop-blur-sm` so the starfield subtly shows through.
- Never add `dark:` class variants — everything is always dark.

## Environment

`.env.local` (not committed):

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WEB3FORMS_KEY=<web3forms access key>
```

## Remaining placeholders

Search the codebase for these strings:

- `[your-username]` — ✓ resolved: `github.com/kokeropie` (Hero, Footer, projects.ts)
- `[your-linkedin]` — ✓ resolved: `linkedin.com/in/kusumajaya-na-59a57420` (Hero, Footer)
- `public/resume.pdf` — ✓ file exists, casing matches Hero's `href="/resume.pdf"`
- `public/projects/` — folder exists but is empty; add `etl-tool.png`, `dashboard.png`, and a third project image
- Project 3 in `projects.ts` — replace the `[Your Next Project]` placeholder
