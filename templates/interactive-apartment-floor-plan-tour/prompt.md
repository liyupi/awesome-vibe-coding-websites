# Interactive Apartment Floor Plan Tour

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original, polished, immediately explorable single-page apartment presentation for [BRAND], [UNIT]. A dimensioned 2D drawing smoothly becomes a furnished Three.js apartment. The scene is the hero, not an illustration beneath a long sales headline. Use a new, code-built sample apartment; this is an architectural concept study, not a real property advertisement.

- Audience: Interior designers, residence teams, and visitors who want to understand the relationship between rooms before requesting a viewing.
- Goal: Let visitors examine the plan, fly into any room, play a guided tour, compare light and two material palettes, download the floor plan and save a local viewing request.
- Tone: Precise, calm and welcoming US English. Editorial architecture language, concrete room details and honest demo states. Rewrite every residence-specific sentence for changed variables; keep all copy, room records, materials and unit facts together in src/content.ts.

## Stack
- Framework: Vite + TypeScript + Three.js
- Styling: Vanilla CSS
- Libraries: three (MIT), @fontsource/dm-sans (OFL-1.1), @fontsource/cormorant-garamond (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Install Vite, TypeScript, three, @types/three and both Fontsource packages in the project. Import OrbitControls from the installed three/addons path. Bundle every dependency; use no remote scripts, fonts or import maps.
  - Configure Vite base: ./, build.outDir: dist, minification on and source maps off. Create npm run build with vite build and a local development script.
  - Keep room rectangles, wall segments, furniture placement, room descriptions, material swatches and download labels in src/content.ts. Derive both plan and 3D geometry from those records so room selection, dimensions and the downloadable plan cannot disagree.
  - Use Three.js directly, HTML controls and an inline SVG dimension layer. Build all surfaces and furnishings from original procedural geometry; create subtle wood grain and stone variation with a locally generated canvas texture or material shading. No image generation, stock photographs, externally loaded 3D models or remote textures.
  - Use a single renderer with antialiasing, warm color management, soft shadow maps, ambient and directional light, resize handling and device pixel ratio capped at 1.75 desktop / 1.5 mobile. Pause rendering when hidden. Target smooth touch interaction and a total production dist smaller than 20 MB.
  - Use an orthographic camera for both plan and perspective-like isometric views, changing position, target and zoom together. Maintain a stable floor footprint and animate the camera plus wall/furniture heights for the plan-to-room transition.
  - Give the canvas a useful accessible description and provide equivalent HTML room-selection buttons. If WebGL is unavailable, show the readable inline SVG plan and keep facts, palette descriptions, download and viewing form usable without throwing console errors.
  - Provide a local downloadable SVG floor plan generated from the same geometry, with a real download filename derived from [BRAND] and [UNIT]. Include ASSETS.md documenting original geometry, shaders and line icons, the fonts, Three.js and their licenses.

## Variables
- [BRAND] — Residence name (default: "Alder House"). Invented project identity; update wordmark, download filename and form copy.
- [UNIT] — Unit name (default: "Apartment 4B"). A short unit or suite label.
- [SETTING] — Location story (default: "A quiet upper-floor home above the fictional Alder Lane gardens"). A fictional setting, not a real address.
- [MATERIAL_STORY] — Interior materials (default: "Warm oak, chalk plaster, olive wool, cream linen and honed limestone"). Adapt both scene palettes, labels and descriptions while keeping the floor plan.
- [PALETTE_NAMES] — Two material palette names (default: "Warm Oak | Soft Clay"). Exactly two short names separated by |. The first is the default.
- [CONTACT_NAME] — Viewing host (default: "Mara Ellis"). Invented host name used in the viewing dialog.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/interactive-apartment-floor-plan-tour in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/interactive-apartment-floor-plan-tour?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
Inspired by Plan to Place — Apartment 01 by @xucidal — https://madewithdots.com/projects/threads-Dd6YgK-iDaQ
— Prompt by VibeFather · https://vibefather.ai/t/interactive-apartment-floor-plan-tour · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
