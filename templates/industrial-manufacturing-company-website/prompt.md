# Industrial Manufacturing Company Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the precision machining and fabrication shop founded by [FOUNDER] in [CITY], running [EXPERIENCE] of contract work. The page presents capabilities with real tolerances and materials, an equipment table, industries served, inspection-led quality, case studies with part photos, an RFQ form with a simulated file-upload chip and quantity tiers, a lead-time and price-band estimator with visible rules, and a careers block. Machined steel grey with electric blue and hazard yellow accents; crisp photos of parts, machines and a clean floor with no faces. All machines, parts, clients and prices are invented sample data.

- Audience: Primary: design engineers, procurement buyers and shop managers sourcing machined or fabricated parts — people who skim for tolerances, materials and capacity before they ever call. Secondary: fabricators, molders and any by-the-drawing B2B shop.
- Goal: Move a visitor from 'can they hold my tolerance' to a submitted RFQ: prove capability with numbers in one screen, answer the when-and-roughly-how-much question with the estimator, then make the RFQ form the shortest path on the page.
- Tone: Shop-talk English: short declarative sentences, numbers everywhere, zero marketing fluff. Reads like a seasoned estimator wrote it between jobs.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/archivo (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Archivo' and fontFamily.mono 'IBM Plex Mono'; all specs, tolerances, prices and table numerals render in IBM Plex Mono.
  - Self-host Archivo weights 500, 600, 700 and IBM Plex Mono weights 400, 500 through @fontsource/archivo and @fontsource/ibm-plex-mono, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals and estimator tweens; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, capability cards (process, tolerance, finish, materials), equipment rows (machine, travel, spindle/tolerance, note), industries, quality items, case studies, estimator config (base days per process, quantity tiers in days, finish add-days, material price multipliers and base unit prices), careers, RFQ options. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Lead-time estimator math, exactly: working days = process base (CNC milling 3, CNC turning 2, fabrication 4, finishing only 1) + quantity tier days (1 pc → 0, 10 → 2, 50 → 5, 250 → 9, 1,000 → 14) + finish add (as-machined 0, bead blast 2, passivate 3, anodize 4); planning unit price band = base unit price by quantity (1 → $185, 10 → $52, 50 → $31, 250 → $19.50, 1,000 → $14) × material multiplier (ABS 0.8, Aluminum 6061 1.0, Stainless 304 1.35, Titanium Gr5 1.9), shown as a ±15% band rounded to whole dollars; output lists every rule used ('CNC milling base 3 days', 'Qty 250 tier +9 days', 'Anodize +4 days') plus the disclaimer 'Planning estimates — the RFQ returns a firm quote with drawings.' Persist inputs to localStorage under [BRAND_SLUG]-estimate.
  - Draw a subtle blueprint grid (1px hairline grid at 24px, ~3% opacity) as a CSS background on the dark hero and estimator bands only; hazard yellow appears only as 4px diagonal-stripe top rules on section headers and the 'MOST QUOTED' tag, never as fills for large areas.
  - The RFQ file-upload is honestly simulated: a dashed drop-chip with Upload icon that, when clicked, attaches a fixed sample chip 'bracket-rev3.step · 2.4 MB' with an X to remove, and a 12px note 'Demo attachment — nothing uploads.' Never use a real file input that sends data or FormData anywhere.
  - Use only these lucide-react icons: Phone, Upload, FileText, Ruler, Layers, Cog, ScanLine, Wrench, Factory, ClipboardCheck, CheckCircle2, ShieldCheck, ChevronRight, ArrowRight, Menu, X, Clock, Users, MapPin, Gauge, Package.
  - Persist the estimator inputs and the RFQ submission to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the steel square with an electric-blue crosshair mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Shop name (default: "Halvorsen Precision"). Invented shop name; a crosshair logomark is derived from it in code.
- [CITY] — City (default: "Halbrook"). Where the shop floor is; appears in hero, footer and careers copy.
- [FOUNDER] — Owner (default: "Ingrid Halvorsen"). Invented owner, named in hero and quality copy.
- [PHONE] — Phone (default: "(555) 771-3460"). Quote desk line; links as tel: with digits only.
- [EXPERIENCE] — Experience (default: "26 years"). Plain phrase like '26 years'; used in hero and stats.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/industrial-manufacturing-company-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/industrial-manufacturing-company-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/industrial-manufacturing-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
