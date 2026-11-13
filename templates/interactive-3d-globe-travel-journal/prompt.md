# Interactive 3D Globe Travel Journal

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page travel journal for an invented writer, built around a dotted three.js globe: as the reader scrolls through six journal entries, the globe turns to each city, an amber route arcs in from the previous stop and the pin lights; pins open photo story cards; a day/night terminator drifts across the globe; phones and reduced-motion readers get a flat animated SVG map with the same arcs.

- Audience: Readers who follow slow, overland travel writing and might subscribe to the writer's monthly letter; also editors and collaborators checking the writer's work.
- Goal: Make the trip feel like one continuous journey the reader travels by scrolling, then turn that attention into monthly-letter signups.
- Tone: Quiet, observant and warm; specific names, numbers and small human moments; never gushing travel-brochure language.

## Stack
- Framework: Vite 5 + vanilla TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: three (r16x, WebGL globe, instanced dots, shaders) (MIT), gsap + gsap/ScrollTrigger (GSAP Standard License (free, commercial use allowed)), lenis (smooth scroll) (MIT), world-atlas (land-110m.json, Natural Earth public-domain data) (ISC), topojson-client (ISC), d3-geo (geoContains, used only by the build-time dot script) (ISC), lucide (vanilla icons) (ISC), @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/manrope (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1), tailwindcss, postcss, autoprefixer (MIT), vite (MIT), typescript (Apache-2.0)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the vanilla-ts template. One HTML entry at the project root: index.html loading src/main.ts. No framework.
  - vite.config.ts: base './', build { outDir 'dist', sourcemap false, assetsInlineLimit 0, chunkSizeWarningLimit 900 }. Do not copy src/ into dist/.
  - package.json scripts: "dots": "node scripts/build-dots.mjs", "predev": "npm run dots", "prebuild": "npm run dots", "dev": "vite", "build": "tsc --noEmit && vite build". world-atlas, topojson-client and d3-geo are devDependencies used only by the script; three, gsap, lenis and lucide are dependencies.
  - scripts/build-dots.mjs (Node ESM, deterministic): read node_modules/world-atlas/land-110m.json, convert with topojson-client feature(topo, topo.objects.land). (1) land-sphere.json: a Fibonacci sphere of N = 24000 points (golden angle 2.399963 rad; lat = asin(1 - 2(i + 0.5)/N), lon = wrapped i * golden angle in degrees), keep points where d3-geo geoContains(land, [lon, lat]) is true, write a flat number array [lat, lon, lat, lon, ...] rounded to 2 decimals (about 7,000 dots). (2) land-grid.json: a regular grid every 1.8 degrees of longitude and latitude from lat -56 to 82, keep land points, same flat format, for the flat map. (3) city-lights.json: every 9th entry of land-sphere between lat -45 and 65, used for night lights. Write the three files to src/data/ and commit them so a build without the script still works.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.ts']. In tailwind.config.ts extend colors with every color under Design (kebab-case keys: ink, navy, panel, hairline, chalk, muted, amber, amber-soft, atmosphere, night) and fontFamily display ['Fraunces Variable', 'Georgia', 'serif'], sans ['Manrope Variable', 'system-ui', 'sans-serif'], mono ['IBM Plex Mono', 'ui-monospace', 'monospace']. maxWidth { page: '1360px' }.
  - src/fonts.ts imports '@fontsource-variable/fraunces', '@fontsource-variable/fraunces/wght-italic.css', '@fontsource-variable/manrope', '@fontsource/ibm-plex-mono/400.css' and '@fontsource/ibm-plex-mono/500.css'; main.ts imports src/fonts.ts and src/style.css first.
  - File layout: src/content.ts (brand, writer, hero, every stop, legs, stats labels, about, signup and footer copy, typed; the only place copy and coordinates live), src/lib/geo.ts (latLonToVec3, slerp great-circle points, haversineKm with R = 6371, routeStats), src/lib/motion.ts (prefersReducedMotion, canUseWebGL, useGlobe()), src/globe/globe.ts (createGlobe(container, stops, legs) returning { goTo, setArcProgress, setLegFilter, highlight, dispose }), src/globe/shaders.ts (ocean, dots, atmosphere, arc GLSL strings), src/flatmap/flatmap.ts (createFlatMap(container, stops, legs) with the same API), src/ui/journal.ts (ScrollTriggers that drive whichever map is mounted), src/ui/storyCard.ts, src/ui/legend.ts, src/ui/stats.ts, src/ui/signup.ts, src/ui/header.ts.
  - Mode choice in main.ts: useGlobe = matchMedia('(min-width: 768px)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches && canUseWebGL(). Only then dynamic-import('./globe/globe') so three.js is never downloaded on phones or for reduced motion; otherwise mount the flat map. Listen to both media queries' change events: dispose the mounted map (renderer.dispose, geometries, materials, ScrollTriggers) and mount the other one.
  - Lenis only when motion is allowed: new Lenis({ lerp: 0.09 }); lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0). Pause Lenis while the story card is open.
  - Coordinate convention used everywhere: latLonToVec3(lat, lon, r) = (r cos(lat) sin(lon), r sin(lat), r cos(lat) cos(lon)) in radians, so lat 0 / lon 0 faces the camera on +Z. To face a stop, tween globeGroup.rotation.y to -lon and rotation.x to clamp(lat, -35deg, 35deg) (default XYZ order), unwrapping rotation.y to the shortest path.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - index.html: lang en, <meta name='theme-color' content='#0A1220'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — a travel journal by [WRITER]</title>. public/favicon.svg as described under Assets.
  - Write ASSETS.md at the project root as described under Assets. dist/ holds index.html, hashed JS/CSS (three.js in its own lazy chunk), woff2 fonts, favicon.svg and the seven images; keep it under 8 MB.

## Variables
- [BRAND] — Journal name (default: "Slow Meridian"). Invented name of the journal or newsletter. Used in the wordmark, title, footer and signup copy. Never a real publication.
- [WRITER] — Writer's name (default: "Noor Halvorsen"). Invented full name of the writer. Used in the hero kicker, the about section, the portrait alt text and the signup line. Never a real person.
- [JOURNEY] — The journey (default: "eleven months overland from Lisbon to Hanoi"). One lowercase phrase: duration, mode and start/end. Drives the hero headline and decides the six stops, their real coordinates and the three legs.
- [FOCUS] — What the writing is about (default: "night trains, market kitchens and the people who keep them running"). One lowercase phrase naming the subjects of the journal. Drives the hero promise, the entry angles and the about bio.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/interactive-3d-globe-travel-journal in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/interactive-3d-globe-travel-journal?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/interactive-3d-globe-travel-journal · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
