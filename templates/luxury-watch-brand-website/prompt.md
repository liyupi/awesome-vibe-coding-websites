# Luxury Watch Brand Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A two-page site for an invented independent watch brand: a near-black, steel-and-champagne identity; a macro dial hero; a house strip; a craft section stepping through movement parts on scroll with code-drawn diagrams; a three-line collection grid; a query-routed model page whose SVG watch live-updates with dial and strap options and a sample price; and a client-side boutique appointment form.

- Audience: Independent watch and accessory brands, micro-labels and the studios building their flagship pages.
- Goal: Move the visitor from desire to specifics: fall for the macro dial, understand the craft in four scroll steps, pick a model, configure it, and request a viewing at a boutique.
- Tone: Quiet, exact, unhurried — the confidence of a spec sheet delivered like poetry; short declarative lines, mono labels, zero exclamation.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/marcellus (OFL), @fontsource/jost (OFL), @fontsource/ibm-plex-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest luxury-watch-brand-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/marcellus, @fontsource/jost and @fontsource/ibm-plex-mono as dependencies.
  - vite.config.ts: base './', build.sourcemap false, and build.rollupOptions.input with TWO entries — index.html and model.html — so one command builds both pages.
  - tailwind.config.js: extend colors onyx #0A0A0B, graphite #151619, rhodium #2A2D33, steel #8A9096, champagne #C8A96A, champagne-light #E3CB96, porcelain #EDEDEA; fontFamily display 'Marcellus', sans 'Jost', mono 'IBM Plex Mono'; default radius 0 (2px allowed on inputs only).
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/WatchSVG.tsx: the configurator watch, drawn entirely in SVG, viewBox 0 0 400 400 — case: two circles r=170 (fill a linear steel gradient #6E7379→#3E4348) and r=156 (stroke #20242A, 3px); dial: circle r=140 filled by the active dial option; indices: twelve 4×18 rects at hour positions in champagne #C8A96A (a double baton at 12), no numerals; hands: hour rect 6×70, minute 4×100, both porcelain with a 1px onyx outline, second hand 2×110 in champagne with a 6px center cap; strap: two rounded rects (120×150, 20px radius) above and below the case, filled by the active strap option — calf options get two 1px stitch lines at 6px inset, the steel option gets the steel gradient with three brushed link lines; props: dial ('charcoal' #23252B | 'champagne' #C8A96A | 'slate' #39505F), strap ('black-calf' #1B1B1D | 'chestnut-calf' #6B4A32 | 'steel' gradient).
  - src/components/MovementDiagram.tsx: four pure-SVG diagrams — 01 mainspring (a tight Archimedean spiral path), 02 gear train (three circles with drawn gear teeth and a ratio line), 03 escapement (a lever and two pallet jewels as simple shapes), 04 balance wheel (a rim with spokes and a hairspring spiral) — each with two or three mono annotation labels connected by 1px rhodium leader lines.
  - src/lib/motion.ts: shared variants — reveal (opacity 0→1, y 24→0, 800ms cubic-bezier(0.16,1,0.3,1), 100ms stagger, whileInView once), drawLine (stroke-dashoffset 1→0, 600ms) — with useReducedMotion falling back to plain 200ms opacity fades.
  - Keep every user-facing string and data set (brand, origin, models array {id, name, tagline, basePrice, dial options with deltas, strap options with deltas, spec rows}, boutiques, cities, appointment copy) in src/content.ts; both pages read from it so values swap in one place.
  - model.html reads the id from location.search (?id=meridian) and maps it to the models array; with no id or an unknown id it shows the FIRST model, never an empty or not-found state. Links between pages are file names: ./model.html?id=meridian and ./index.html#collection. index.html: <title>[BRAND] — Mechanical Watches</title>; model.html: <title>[BRAND] — Meridian 39</title> (dynamic per model); plus one shared drawn-in-code favicon.svg (a thin champagne circle on onyx).

## Variables
- [BRAND] — Brand name (default: "Averlind"). Invented maker's name for the wordmark, page titles and every mention in the copy.
- [ORIGIN] — Workshop town (default: "Greysen"). The invented home of the atelier — hero label, house strip and footer line ('assembled in [ORIGIN]').
- [PRICE_FROM] — Entry price (default: "$4,900"). The starting sample price of the entry model — hero sub-line, collection card and configurator base.
- [WARRANTY] — Service promise (default: "8 years"). The service promise in the house facts row and the model page details strip ('[WARRANTY] service promise, inherited not voided').
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/luxury-watch-brand-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/luxury-watch-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/luxury-watch-brand-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
