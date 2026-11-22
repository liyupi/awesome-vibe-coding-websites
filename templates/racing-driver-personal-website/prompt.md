# Racing Driver Personal Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an award-caliber interactive personal brand website for fictional young racing driver [DRIVER_NAME] ([CAR_NUMBER], driving for [TEAM_NAME] in [SERIES_NAME]). Anchor the hero with a draggable sculpted Three.js 3D racing helmet built entirely in code (no model files) that smoothly morphs across three distinct season liveries (Season I Cobalt Velocity, Season II Safety Flare, Season III Midnight Carbon) as the visitor scrolls or clicks livery chips. Follow with a Season Dashboard (interactive code-drawn globe circuit calendar across 8 fictional tracks, round results table, and SVG points chart), an 'On Track' scroll-scrubbed and slider-scrubbed lap replay on a code-drawn circuit with live Speed, Gear, RPM, and G-Force readouts, magnetic behind-the-scenes paddock cards, a strip of fictional partners, a Replica Helmet & Merch store with a working local cart drawer, and a localStorage Fan Club digital pass generator. Use Graphite (#121417), Electric Cobalt (#2F6BFF), Safety Orange (#FF6A1A), and Chalk (#F2F2EF) with condensed sporty display typography—zero neon yellow, zero real motorsport brands, and zero 4-digit years.

- Audience: Motorsport fans, prospective sponsors, and interactive-design enthusiasts.
- Goal: Deliver immediate 3D tactile presence in the hero followed by kinetic race telemetry and rich interactive sections that feel effortless on desktop and 390px mobile.
- Tone: Kinetic, precision-engineered, confident motorsport editorial.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/barlow-condensed (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/barlow-condensed (600, 700, 800), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (500, 600, 700) in src/main.tsx.
  - Build the draggable procedural Three.js 3D full-face racing helmet in src/components/HelmetHero3D.tsx with dynamic CanvasTexture livery decals ([CAR_NUMBER] + racing stripes), sculpted chin spoiler, tinted reflective wrap-around visor, studio rim lighting, smooth color/livery morphing across 3 seasons, and preserveDrawingBuffer: true.
  - Store all fictional driver profile stats, 8 circuits, results, points, lap telemetry path, BTS stories, fictional partners, and store SKUs in src/data/driverData.ts (zero real teams, sponsors, or calendar dates).
  - Implement the interactive code-drawn globe circuit calendar, scroll-scrubbed circuit lap replay with live telemetry, local demo store cart drawer, and localStorage Fan Club pass card.

## Variables
- [DRIVER_NAME] — Driver Name (default: "Kaelen Vance"). Fictional racing driver full name
- [CAR_NUMBER] — Racing Number (default: "#47"). Driver race number printed on helmet and merch
- [TEAM_NAME] — Fictional Team Name (default: "Voltara Motorsport"). Fictional racing team name
- [SERIES_NAME] — Fictional Series Name (default: "Apex World Touring"). Fictional championship name
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/racing-driver-personal-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/racing-driver-personal-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/racing-driver-personal-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
