---
name: "Light Beam Lens Puzzle Game"
colors:
  cave: "#071114"
  raised: "#0E1D22"
  basalt: "#173038"
  edge: "#2A4850"
  text: "#EAF7F3"
  muted: "#93AAA8"
  beam: "#9AFDE0"
  beam_core: "#F2FFF9"
  lens: "#82C9FF"
  completion: "#E7C983"
typography:
  game_name_level_titles_dialogs_and_interface: { family: "Space Grotesk Variable", weights: [400, 500, 600, 700] }
  move_counts_level_numbers_coordinates_and_compact_status: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base grid. Desktop header is 64px with 24px horizontal gutters. The main shell has a 1500px maximum width, height calc(100dvh - 88px), 24px side and bottom padding, a minmax(0,1fr) board column, a 340px control rail, and a 20px gap. Keep the whole game visible at 1440×900. The board canvas fills its card with at least 600px height on large screens. Use 16px rail padding, 12px control gaps, and 24px dialog padding. Below 760px, use a 56px header, one column, 12px gutters, a board height of min(100vw,420px), compact HUD blocks, and a fixed 72px bottom control bar with 96px page-bottom clearance."
radius: "Use 20px for the scene card and dialogs, 14px for HUD panels, 10px for buttons and level cells, and full pills for move and target counters. Keep tile geometry beveled but angular. Use soft mint shadows only around active optics and the primary next-level action; ordinary panels use 1px Edge borders rather than heavy shadows."
---

# Light Beam Lens Puzzle Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cave** `#071114` — Page and scene background
- **Raised** `#0E1D22` — HUD, dialogs, and control surfaces
- **Basalt** `#173038` — Board tiles and inactive piece bodies
- **Edge** `#2A4850` — Borders, grid grooves, and hover outlines
- **Text** `#EAF7F3` — Primary interface text and bright crystal highlights
- **Muted** `#93AAA8` — Secondary labels, instructions, and inactive counters
- **Beam** `#9AFDE0` — Light paths, active receiver halos, and primary action accents
- **Beam core** `#F2FFF9` — Narrow bright center of every beam segment
- **Lens** `#82C9FF` — Lens glass, orientation marks, and selected-piece accents
- **Completion** `#E7C983` — Small solved check marks and completion detail only

## Typography
- **Game name, level titles, dialogs, and interface** — Space Grotesk Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Move counts, level numbers, coordinates, and compact status** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid. Desktop header is 64px with 24px horizontal gutters. The main shell has a 1500px maximum width, height calc(100dvh - 88px), 24px side and bottom padding, a minmax(0,1fr) board column, a 340px control rail, and a 20px gap. Keep the whole game visible at 1440×900. The board canvas fills its card with at least 600px height on large screens. Use 16px rail padding, 12px control gaps, and 24px dialog padding. Below 760px, use a 56px header, one column, 12px gutters, a board height of min(100vw,420px), compact HUD blocks, and a fixed 72px bottom control bar with 96px page-bottom clearance.
- Radius: Use 20px for the scene card and dialogs, 14px for HUD panels, 10px for buttons and level cells, and full pills for move and target counters. Keep tile geometry beveled but angular. Use soft mint shadows only around active optics and the primary next-level action; ordinary panels use 1px Edge borders rather than heavy shadows.

## Motion
- Fade the complete cave and HUD in together over 480ms on first load; do not show an intro animation, camera fly-through, or blocking start button.
- Rotate a selected optical piece around the vertical axis by exactly 90 degrees over 180ms with ease-out, then redraw affected beam segments over 140ms. Game state updates immediately and never waits for the animation.
- Use a 120ms hover and keyboard-selection outline, a 160ms button press scale of 0.98, and 180ms fade-and-scale dialogs. No camera orbit or board movement is required for play.
- On completion, brighten all receivers, emit one restrained ring pulse per receiver over 900ms, and open the completion panel after 450ms. Do not loop confetti or shake the board.
- Ambient dust may drift very slowly and receiver light may breathe at low amplitude, but stop both when reduced motion is requested. Under reduced motion, rotations and beam changes are immediate and completion uses a static glow.

## Imagery
Create every visual in code with Three.js geometry, CSS, and inline SVG; there are no bitmap images, downloaded models, texture maps, HDRIs, or audio files. Build beveled square basalt tiles, angular rising and falling mirror bars, translucent flattened-sphere lenses with a clear axis line, prism splitters with a visible branch arrow, and ring-shaped receivers around faceted crystal cores. Surround the board with instanced low-poly mineral clusters and distant stalactites, using seeded placement so the scene is stable between runs. Use Cave-colored fog, hemisphere illumination, one soft directional light, and small point lights at the emitter and active receivers. Render each beam as a narrow Beam-core cylinder inside a wider transparent additive Beam cylinder at tile-center height. The board and its live optical state are the first-screen visual anchor; typography alone is never the hero. No people, mascots, logos, readable textures, brands, or reference-inspired props.

## Tone
Quiet, precise, mysterious, and reassuring. Use short original US English labels and tiny pieces of environmental copy, not a sprawling fantasy narrative. There are no characters, enemies, timers, penalties, hot springs, restoration quests, skill trees, or references to existing games or AI products.

---
Inspired by 黄玉秘藏 3D Interactive Game — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/light-beam-lens-puzzle-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
