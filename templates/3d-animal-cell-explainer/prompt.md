# 3D Animal Cell Explainer

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an interactive biology explainer for [BRAND] titled '[TITLE]' ([COURSE_TAG]) centered on a cutaway 3D animal cell built completely in Three.js code with no external 3D model files. Styled like a risograph classroom specimen print on warm cream paper (#FAF4E8) with confident deep-ink outlines (#1E1B3A) and grainy coral (#FF7B6B), mint (#6FD3B8), and butter (#FFD66B) fills, the hero opens immediately on the full cutaway cell. Readers can drag to orbit, click an organelle index or scroll through 10 organelles (Nucleus with pores & chromatin, Rough ER, Smooth ER, Golgi Stack shipping vesicles, Mitochondria with cristae, Lysosomes, Ribosomes, Centrioles, Cytoskeleton filaments, and Plasma Membrane with channel proteins). Each stop displays a plain-language caption, a proportional 'How big is it?' scale bar, and a live micro-animation inside the 3D scene. Includes a 'Follow a Protein' animated pathway mode from nuclear DNA to membrane secretion, a 3D labels toggle, an explicit 'Simplified educational model' accuracy note, and an interactive 5-question quiz at the end.

- Audience: Biology students, science educators, curious readers, and interactive journalism fans exploring cellular anatomy.
- Goal: Make cellular biology immediately intuitive and joyful by pairing a bright, tactile 3D cutaway model on frame one with plain-English storytelling and live organelle motion.
- Tone: Warm, curious, classroom-clear, and scientifically honest—simplified for intuition and clearly labeled as such.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/fraunces (OFL-1.1), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500) in src/main.tsx.
  - Build the complete cutaway 3D animal cell procedurally in src/three/CellScene.tsx using Three.js (preserveDrawingBuffer: true, warm paper #FAF4E8 clear color, BackSide ink outline shells and cel-shaded/risograph-grain CanvasTexture materials, synchronous first-frame render) containing all 10 distinct organelles with smooth pointer orbit, camera fly-to target presets, live micro-animations (budding Golgi vesicles, pulsing mitochondrial ATP sparks, protein folding beads, membrane channel gating), and a glowing 'Follow a Protein' animated cargo trail.
  - Project 3D organelle coordinates cleanly to screen-space label callouts when the Labels toggle is active.
  - Keep all copy, organelle captions, scale metrics, protein journey steps, and quiz questions in src/content.ts.

## Variables
- [BRAND] — Publisher Name (default: "Cellfolio Press"). Fictional educational studio or imprint name
- [TITLE] — Explainer Headline (default: "Inside the Animal Cell"). Primary hero title of the 3D biology explainer
- [SUBTITLE] — Hero Deck (default: "A cutaway risograph specimen you can orbit, zoom, and animate in real time."). Short introductory sentence beneath the title
- [COURSE_TAG] — Atlas Code (default: "BIO-101 · Cutaway Specimen Atlas"). Small mono catalog label in the header
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/3d-animal-cell-explainer in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm Paper `#FAF4E8` — Primary risograph paper background and 3D stage canvas
- Deep Ink `#1E1B3A` — Primary typography, crisp 3D cell ink outlines, and card borders
- Riso Coral `#FF7B6B` — Nucleus, mitochondria accents, active pills, and protein pathway trail
- Riso Mint `#6FD3B8` — Plasma membrane cutaway shell, Golgi highlights, and correct quiz states
- Riso Butter `#FFD66B` — ATP energy sparks, lysosomes, scale bar callouts, and interactive tags
- Cream Card `#FFFDF7` — Clean elevated reading cards and organelle inspection deck

### Typography
- Editorial Display & Organelle Headings: Fraunces (OFL), weights 600/700
- Plain-Language Captions & UI: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Micrometer Scale Bars & Atlas Codes: JetBrains Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Sticky 60px paper-and-ink header, 1280px max-width split workspace where the sticky 3D cutaway cell sits beside the scrollable organelle field guide on desktop and stacks cleanly at top on 390px mobile.
- Radius: 14px for risograph specimen cards with 2px crisp ink border and offset hard ink shadow; full-pill buttons for organelle chips and mode toggles.
- Motion: Smooth camera fly-in damping when clicking any of the 10 organelles in the index or scrolling past its field note card.
- Motion: Continuous organelle micro-animations: vesicles budding off the Golgi trans face, golden ATP energy sparks orbiting mitochondria cristae, ribosomes beading nascent peptide chains on rough ER, and channel proteins pulsing along the membrane.
- Motion: Follow-a-Protein guided mode smoothly animates a luminous coral-gold protein cargo bead along a 3D spline from nuclear chromatin → rough ER → transport vesicle → Golgi stack → secretory vesicle → plasma membrane exit.
- Motion: Under prefers-reduced-motion, freeze ambient organelle motion and snap camera focus cleanly without sweeping inertia.
- Imagery: 100% procedural Three.js cutaway 3D animal cell with risograph-grain CanvasTexture fills and crisp deep-ink outlines—zero external 3D models or bitmaps.

## Pages & Sections
### [TITLE] · [BRAND] 3D Biology Explainer (`#/cell`)
1. **Header & Interactive Cutaway 3D Animal Cell Hero** — Paper-and-ink top bar with [BRAND] mark, [COURSE_TAG], quick jumps (3D Atlas, Organelle Guide, Protein Path, Quiz), plus live stage toggles ('Labels On/Off', 'Follow a Protein', 'Reset View'). Hero introduces [TITLE] and [SUBTITLE] alongside the bright, immediately interactive cutaway 3D animal cell model rendered on warm #FAF4E8 paper with deep #1E1B3A ink outlines, showing the sliced spherical membrane, lavender-coral nucleus with nuclear pores and chromatin loops, folded rough & smooth ER ribbons, stacked mint Golgi cisternae, coral-butter mitochondria with folded cristae, yellow lysosomes, dotted ribosomes, twin centriole barrels, cytoskeleton filaments, and membrane channel proteins. Includes a clear 'Simplified educational model — proportions are enlarged for clarity' note.
   Layout: Desktop: sticky 58% 3D viewport on left + 42% scrollable Organelle Index & Field Guide on right inside 1280px frame. Mobile (390px): 360px interactive 3D cell stage at top followed by horizontal organelle pill strip and field cards.
   Motion: Drag anywhere on the 3D stage to orbit; select any organelle to fly the camera in smoothly.
2. **10-Organelle Field Guide & Proportional Scale Bar** — Ten interactive organelle cards (01 Whole Cell Overview, 02 Nucleus & Nuclear Pores, 03 Rough Endoplasmic Reticulum, 04 Smooth Endoplasmic Reticulum, 05 Golgi Apparatus, 06 Mitochondria & Cristae, 07 Lysosomes, 08 Ribosomes, 09 Centrioles, 10 Cytoskeleton & Plasma Membrane Channels). Each card includes a plain-language caption, what micro-animation to watch in the 3D scene, and a visual 'How big is it?' logarithmic scale bar comparing the organelle in micrometers/nanometers against a 20 µm whole animal cell.
   Layout: Scrollable right-hand editorial stack with active highlight synchronized to the 3D camera; single-column cards on mobile.
   Motion: Clicking a card or scrolling into it flies the 3D camera directly to that organelle and highlights its callout.
3. **Follow-a-Protein Interactive Pathway Banner** — Dedicated interactive 5-step story panel ('Follow a Protein from DNA to Secretion'): 1. DNA Transcription in Nucleus → 2. Ribosome Folding on Rough ER → 3. COPII Vesicle Shuttle → 4. Golgi Sugar Tagging & Sorting → 5. Exocytosis at Plasma Membrane. Clicking 'Play Pathway' or stepping 1–5 animates the glowing protein particle directly through the 3D cell along the real biological route.
   Layout: Clean horizontal 5-step stepper strip with Play/Pause toggle and active caption bar.
   Motion: Glowing coral-butter cargo orb travels along the 3D spline with camera tracking.
4. **Quick Check Biology Quiz & Footer** — Interactive 5-question multiple-choice comprehension check (e.g., ATP production cristae, vesicle packaging in Golgi, rough vs smooth ER, nuclear pores, membrane channels) with instant plain-language explanations, live score tally, and Reset Quiz button. Subtle risograph footer with the simplified-model disclaimer and optional [CREDIT] link.
   Layout: Centered 2-column quiz card grid inside 1280px container; single column on mobile.
   Motion: Crisp tactile ink-shadow press feedback on answer selection.

## Assets
- icon: Install lucide-react (ISC) for 3D view controls, label toggles, protein playback, and quiz feedback.
- font: Install @fontsource/fraunces, @fontsource/plus-jakarta-sans, and @fontsource/jetbrains-mono (OFL-1.1) and import directly in src/main.tsx.
- image: Generate the entire cutaway 3D animal cell, risograph paper grain textures, and all 10 organelles procedurally in Three.js inside src/three/CellScene.tsx; zero external 3D models or photos.

## Don'ts
- No code, shaders, layouts, or copy copied from Kevin Ngo's viral 3D cell site or any textbook publisher.
- No external .glb/.gltf model files, CDN scripts/fonts, or backend APIs.
- No calendar dates or four-digit years anywhere on the rendered UI.
- No dark/empty first frame—render the full bright risograph cutaway cell synchronously on frame one with preserveDrawingBuffer: true.
- No clip-path hiding sections before scroll.
- No source maps in production build (build.sourcemap: false) and keep dist/ under 20 MB.
- No console errors or horizontal overflow at 1440x900 desktop or 390x844 mobile.

---
Inspired by Interactive 3D Animal Cell Risograph Model by @kevin_t_ngo — https://autoshowcaser.com/
— Prompt by VibeFather · https://vibefather.ai/t/3d-animal-cell-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
