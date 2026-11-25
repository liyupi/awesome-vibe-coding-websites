# Industrial Designer Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A portfolio for a fictional industrial designer of household objects: a kettle, a desk lamp, a speaker and a chair. Project pages tell the whole process with research notes, sketches, a foam model, CMF boards (colour, material, finish) with swatches and final product renders; two of the objects have a 3D turntable viewer built in code with material toggles; awards and press are a timeline; the CV downloads in one click. Renders are generated in one clean studio style with no logos. Concrete #E7E5E0, graphite #2B2D31 and a single safety orange #FF6B1A; precise technical typography.

- Audience: Design directors at housewares brands, startups preparing a first product, and studios looking for a freelance industrial designer.
- Goal: Show that the designer can take an object from research to production, then get the CV downloaded or an enquiry sent.
- Tone: Precise and calm, like a well-written specification: measurements, materials and reasons, no design clichés.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: three (MIT), motion (MIT), lucide-react (ISC), @fontsource-variable/big-shoulders (OFL-1.1), @fontsource-variable/spline-sans (OFL-1.1), @fontsource/spline-sans-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors concrete #E7E5E0, white #F7F6F3, graphite #2B2D31, graphiteSoft #3A3D43, muted #55585F, orange #FF6B1A; fontFamily display 'Big Shoulders Variable', sans 'Spline Sans Variable', mono 'Spline Sans Mono'.
  - three.js models are built from primitives in src/three/models.ts (LatheGeometry body, TubeGeometry spout, TorusGeometry handle for the kettle; Cylinders and a ConeGeometry shade for the lamp) with MeshStandardMaterial and three lights; no model files are loaded.
  - src/components/Turntable.tsx owns one WebGLRenderer in a canvas, renders on demand and while rotating, caps devicePixelRatio at 2 and disposes everything on unmount.
  - A small hash router reads location.hash: #/ (home), #/work, #/work/<slug>; scroll to top on route change. No router library.
  - All copy, products, process steps, swatches, awards, press and CV text live in src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Designer's name (default: "Elin Vasquez")
- [CITY] — Studio city (default: "Copenhagen")
- [FEATURED_PRODUCT] — Featured object (default: "Quill kettle")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/industrial-designer-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/industrial-designer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/industrial-designer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
