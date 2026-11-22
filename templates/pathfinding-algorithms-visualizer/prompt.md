# Pathfinding Algorithms Visualizer

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an interactive pathfinding algorithms visualizer titled [BRAND] ([SUBTITLE]) on warm off-white paper (#FAFAF7) with crisp ink (#1F2430), frontier teal (#2BB3A3), visited lavender (#B9A7FF), and glowing route orange (#FF7A1A). Frame 1 opens directly onto a live pre-solved A* path across a clean interactive grid with an obvious mud/water/wall obstacle layout so visitors immediately see the frontier, visited heatmap, and glowing orange route. Provide four hash-routed views synced to window.location.hash: (1) #/sandbox — Interactive Square Grid + Hex Grid toggle, brush tools (Wall, Mud cost 3, Water cost 6, Erase), draggable Start & Goal pins, algorithm selector (BFS, Dijkstra, Greedy Best-First, A*), Side-by-Side Comparison mode running two algorithms in lockstep on the exact same map, Play/Pause/Step/Reset/Speed controls, live Nodes Explored & Path Cost counters, and an Algorithm Explainer with live line-highlighted pseudocode; (2) #/heuristics — Interactive side-by-side comparison of Manhattan, Euclidean, and Chebyshev distance heuristics with selectable weight multipliers; (3) #/maze — Recursive Backtracker, Prim's, and Random Weighted Terrain Maze Generators feeding directly into the live solver; (4) #/city — Weighted A* vs Dijkstra routing on a procedural code-drawn SVG road map of fictional city [CITY_NAME] with clickable street intersections, live congestion toggles, and turn-by-turn edge distance totals.

- Audience: Computer science students, game developers, algorithm educators, and curious builders.
- Goal: Make graph search algorithms visually unforgettable by letting learners paint weighted terrain, drag pins, step line-by-line through live pseudocode, and compare algorithms side by side.
- Tone: Lucid, tactile academic notebook—clean drafting clarity with crisp mathematical precision.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/plus-jakarta-sans (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Sync the 4 top-level views (#/sandbox, #/heuristics, #/maze, #/city) bidirectionally with window.location.hash on mount and hashchange.
  - Implement deterministic step-recording engines for BFS, Dijkstra, Greedy Best-First, and A* supporting both 4-neighbor Square Grids and 6-neighbor Offset Hex Grids in src/engine/pathfinding.ts.

## Variables
- [BRAND] — Lab Name (default: "GraphCraft Lab"). Interactive pathfinding visualizer title
- [SUBTITLE] — Subtitle (default: "How Maps & Games Find the Shortest Route"). Short header subtitle
- [CITY_NAME] — Fictional City Map Name (default: "Northbridge"). Name of the code-drawn city road network in the City Map tab
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/pathfinding-algorithms-visualizer in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Drafting Paper `#FAFAF7` — Primary background surface
- Ink Slate `#1F2430` — Primary typography, borders, and wall cells
- Frontier Teal `#2BB3A3` — Active open-set frontier nodes
- Visited Lavender `#B9A7FF` — Closed-set explored heatmap nodes
- Route Orange `#FF7A1A` — Final shortest path glow and primary action accent

### Typography
- Display Title & Section Headings: Plus Jakarta Sans (OFL), weights 600/700
- Explanatory Prose & Controls: Inter (OFL), weights 400/500/600
- Pseudocode, Coordinates & Counters: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Crisp top workbench navigation + compact toolbar + responsive 12-col workspace pairing the interactive grid/hex canvas beside live metrics and line-highlighted pseudocode.
- Radius: 12px crisp drafting cards with 1px ink/12 hairlines; tactile pill buttons for brushes and algorithm selectors.
- Motion: Smooth step-by-step expansion wave showing frontier teal cells turning into visited lavender and tracing the glowing orange shortest path.
- Motion: Instant recomputation when dragging Start/Goal pins or painting walls, mud, and water.
- Motion: Live line highlighting inside the pseudocode block synced to the current algorithm step.
- Imagery: 100% procedural SVG & Canvas interactive grids, hexagonal tiles, generated mazes, and code-drawn city road network.

## Pages & Sections
### [BRAND] · Grid & Hex Sandbox (`#/sandbox`)
1. **Interactive Grid / Hex Visualizer & Side-by-Side Comparison** — Paint Walls, Mud (cost 3), Water (cost 6), or Clear; drag Start and Goal pins; switch between Square Grid and Hex Grid; run BFS, Dijkstra, Greedy Best-First, or A* individually or in Side-by-Side Comparison mode; scrub Step / Play / Pause / Speed; monitor live Nodes Explored, Frontier Size, and Path Cost counters.
   Layout: Full workbench width with toolbar on top, interactive grid/hex stage on left (or twin split grids in Compare mode), and live Algorithm Explainer + line-highlighted pseudocode card on right.
   Motion: Animated frontier expansion and instant pin-drag route updates.

### [BRAND] · Heuristics Compared (`#/heuristics`)
1. **Manhattan vs Euclidean vs Chebyshev Distance Explorer** — Side-by-side comparison of heuristic metrics and heuristic weight (1.0× admissible vs 2.0× weighted greedy) on an obstacle field, showing exact formula readouts, explored-node reductions, and path optimality tradeoffs.
   Layout: Three synchronized mini-grid visualizers with shared obstacle preset and heuristic weight slider.
   Motion: Synchronized step playback across all three heuristics.

### [BRAND] · Maze Generator (`#/maze`)
1. **Procedural Maze & Terrain Generator** — Generate Recursive Backtracker labyrinths, Prim's branching corridors, or Weighted River & Marsh landscapes with one click, watch maze carving step-by-step or instant, and immediately race A* vs BFS through the generated maze.
   Layout: Control strip + large interactive generated maze canvas with live solver stats.
   Motion: Animated maze solving wave.

### [BRAND] · City Road Map Routing (`#/city`)
1. **Code-Drawn City Road Network of [CITY_NAME]** — Interactive SVG street network for fictional city [CITY_NAME] featuring river bridges, avenues, and intersections. Click any intersection to set Start or Destination, toggle bridge traffic congestion (3× travel weight), and watch A* vs Dijkstra compute the fastest route with live travel time and explored intersection markers.
   Layout: Split map canvas + intersection/route inspector panel.
   Motion: Animated intersection exploration and highlighted orange street route.

## Assets
- font: Install @fontsource/plus-jakarta-sans, @fontsource/inter, and @fontsource/jetbrains-mono via npm.

## Don'ts
- Never open on a blank empty grid — frame 1 must show a pre-solved weighted obstacle map with teal frontier, lavender visited nodes, and a clear orange route.
- Never reference real-world websites, authors, or copyrighted map tiles.
- Never display calendar dates or 4-digit years on the frontend.

---
— Prompt by VibeFather · https://vibefather.ai/t/pathfinding-algorithms-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
