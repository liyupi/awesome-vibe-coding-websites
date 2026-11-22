---
name: "Pathfinding Algorithms Visualizer"
colors:
  drafting_paper: "#FAFAF7"
  ink_slate: "#1F2430"
  frontier_teal: "#2BB3A3"
  visited_lavender: "#B9A7FF"
  route_orange: "#FF7A1A"
typography:
  display_title_section_headings: { family: "Plus Jakarta Sans", weights: [600, 700] }
  explanatory_prose_controls: { family: "Inter", weights: [400, 500, 600] }
  pseudocode_coordinates_counters: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Crisp top workbench navigation + compact toolbar + responsive 12-col workspace pairing the interactive grid/hex canvas beside live metrics and line-highlighted pseudocode."
radius: "12px crisp drafting cards with 1px ink/12 hairlines; tactile pill buttons for brushes and algorithm selectors."
---

# Pathfinding Algorithms Visualizer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Drafting Paper** `#FAFAF7` — Primary background surface
- **Ink Slate** `#1F2430` — Primary typography, borders, and wall cells
- **Frontier Teal** `#2BB3A3` — Active open-set frontier nodes
- **Visited Lavender** `#B9A7FF` — Closed-set explored heatmap nodes
- **Route Orange** `#FF7A1A` — Final shortest path glow and primary action accent

## Typography
- **Display Title & Section Headings** — Plus Jakarta Sans (OFL), weights 600/700. Self-host the font files.
- **Explanatory Prose & Controls** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Pseudocode, Coordinates & Counters** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Crisp top workbench navigation + compact toolbar + responsive 12-col workspace pairing the interactive grid/hex canvas beside live metrics and line-highlighted pseudocode.
- Radius: 12px crisp drafting cards with 1px ink/12 hairlines; tactile pill buttons for brushes and algorithm selectors.

## Motion
- Smooth step-by-step expansion wave showing frontier teal cells turning into visited lavender and tracing the glowing orange shortest path.
- Instant recomputation when dragging Start/Goal pins or painting walls, mud, and water.
- Live line highlighting inside the pseudocode block synced to the current algorithm step.

## Imagery
100% procedural SVG & Canvas interactive grids, hexagonal tiles, generated mazes, and code-drawn city road network.

## Tone
Lucid, tactile academic notebook—clean drafting clarity with crisp mathematical precision.

---
— Prompt by VibeFather · https://vibefather.ai/t/pathfinding-algorithms-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
