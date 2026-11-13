# Sea Salt Brand Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Create an original tactile sea-salt storefront for [BRAND] at fictional [COAST]. The first screen is interactive water; scrolling exposes clay and clustered salt. Follow with an illustrated harvest story, three photographic salt products, a marsh visit request and a working local-only cart.

- Audience: Home cooks, small restaurant buyers and visitors who care about texture, place and a modest hand process.
- Goal: Let visitors feel the material, learn three harvest steps, choose useful salts and try a clearly labeled demo order or visit request.
- Tone: Quiet, specific, unhurried US English. Warm craft without exaggerated claims.

## Stack
- Framework: Vite + TypeScript
- Styling: Vanilla CSS
- Libraries: three (MIT), @fontsource/fraunces (OFL-1.1), @fontsource/manrope (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite with base ./ and build.sourcemap false; install all dependencies locally and add a build script.
  - Create one src/content.ts with all variables, product data, navigation, forms and image paths. Rewrite specific copy when variables change; B must not retain A brand or coast.
  - Use Three.js plus your own GLSL/CanvasTexture water scene, requestAnimationFrame and native scroll progress. No other WebGL engine. The scene must appear immediately with a visible fallback while loading.

## Variables
- [BRAND] — Producer (default: "Morrow Salt"). A fictional small salt producer; use its wordmark in the water.
- [COAST] — Fictional coast (default: "Alder Reach"). Invented location; do not imply a real producer.
- [FOUNDERS] — Harvesters (default: "Nell & Rowan"). Two fictional harvesters.
- [COLLECTION] — Three salts (default: "Tide Flake; Hearth Smoked; Marsh Herb"). Three distinct salts; rewrite flavors, cooking pairings and product names together.
- [ACCENT] — Accent color (default: "#788575"). Muted botanical or coastal hex color.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/sea-salt-brand-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/sea-salt-brand-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
Inspired by Sea-salt WebGL concept in a designer model test by @Petras Baukys — https://muz.li/blog/openai-devday-2026-for-designers/
— Prompt by VibeFather · https://vibefather.ai/t/sea-salt-brand-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
