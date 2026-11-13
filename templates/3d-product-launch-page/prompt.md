# 3D Product Launch Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page, dark, cinematic product launch site for [PRODUCT_NAME], a [PRODUCT_TYPE] by [BRAND]. A fixed full-viewport three.js canvas renders a lamp built procedurally from primitives. HTML sections scroll over it: hero, four feature chapters (Focus, Warm, Night, Rhythm) with copy alternating left and right, a hairline spec sheet and a preorder call to action. Scroll progress drives the lamp's base turn, arm pose, head tilt, camera dolly and light color through a fixed keyframe table. The lamp has a volumetric beam cone, a bloom halo, floating dust motes and a lit pool on the floor. Every UI accent follows the lamp's current light color.

- Audience: Visitors deciding whether to preorder [PRODUCT_NAME], mainly [AUDIENCE]. The template itself is for hardware startups, crowdfunding campaigns and product designers who want a launch page that shows the product moving.
- Goal: Show what the product does by moving it on screen: each chapter puts the lamp in a new pose and color. Then back it up with a precise spec sheet and end on a calm, low-pressure preorder reservation (static UI only).
- Tone: Quiet, confident and precise. Short declarative headlines, concrete numbers, no exclamation marks and no hype words. It should feel like a film title sequence crossed with an engineering datasheet.

## Stack
- Framework: Vite 5 + TypeScript + three.js
- Styling: Vanilla CSS
- Libraries: three (incl. three/examples/jsm: EffectComposer, RenderPass, UnrealBloomPass, OutputPass, RoomEnvironment) (MIT), gsap (core + ScrollTrigger) (GSAP Standard License (free, commercial use allowed)), lenis (MIT), @fontsource/space-grotesk (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1), typescript (dev) (Apache-2.0), vite (dev) (MIT)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with `npm create vite@latest` using the vanilla-ts template, then `npm i three gsap lenis @fontsource/space-grotesk @fontsource-variable/inter @fontsource/jetbrains-mono` and `npm i -D @types/three`.
  - vite.config.ts: `base: './'`, `build.sourcemap: false`, `build.outDir: 'dist'`, `build.assetsInlineLimit: 0`. Do not copy src/ into dist/.
  - package.json scripts: `dev: vite`, `build: tsc && vite build`, `preview: vite preview`.
  - File layout: index.html, src/main.ts (boot, Lenis, ScrollTrigger wiring), src/content.ts (ALL copy and variable values in one exported object), src/styles.css (all CSS, tokens as custom properties, all @keyframes), src/scene/stage.ts (renderer, camera, composer, lights, floor, render loop), src/scene/lamp.ts (procedural lamp), src/scene/beam.ts (beam cone shader, halo sprite, dust points, floor pool), src/scene/keyframes.ts (the keyframe table and state object), src/ui/hud.ts (live readout and --light CSS variable).
  - Render all HTML copy from src/content.ts at boot (template strings into section containers) so swapping variables only touches that file. If the variable values differ from the defaults, rewrite every headline, body line, stat and spec row in content.ts to fit the new product while keeping the same lengths and structure.
  - Import fonts once in main.ts: `@fontsource/space-grotesk/500.css`, `/600.css`, `@fontsource-variable/inter`, `@fontsource/jetbrains-mono/400.css`, `/500.css`.
  - Register GSAP plugins: `gsap.registerPlugin(ScrollTrigger)`. Drive Lenis from gsap.ticker (`gsap.ticker.add(t => lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`, `lenis.on('scroll', ScrollTrigger.update)`). Lenis options: `duration: 1.15`, easing `t => Math.min(1, 1.001 - Math.pow(2, -10*t))`.
  - Add public/favicon.svg: a 32×32 rounded square #07080B with a centered #FFB547 ring (r=8, stroke 3) and a 3px dot. `<title>` is `[PRODUCT_NAME] — [BRAND]`.
  - Write ASSETS.md at the project root stating that the site uses no third-party image, icon, model or texture files. Everything is generated in code, and fonts come from Fontsource (OFL-1.1).

## Variables
- [BRAND] — Brand name (default: "Kelvane"). Invented company name shown in the header wordmark and footer
- [PRODUCT_NAME] — Product name (default: "Sola One"). The product being launched
- [PRODUCT_TYPE] — Product type (default: "smart desk lamp"). Lowercase noun phrase used in running copy
- [PRICE] — Preorder price (default: "$249")
- [SHIP_WINDOW] — Ship window (default: "March 2027"). Month and year shown in the hero eyebrow and preorder block
- [AUDIENCE] — Audience (default: "people who work, read and wind down at the same desk"). Lowercase phrase that completes 'built for …'
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/3d-product-launch-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/3d-product-launch-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/3d-product-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
