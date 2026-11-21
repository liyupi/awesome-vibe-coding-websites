# Voxel Sandbox Building Game

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original Three.js pastel-candy voxel sandbox game called [BRAND] centered around [VILLAGE_NAME] (default terrain seed [WORLD_SEED]). Features chunked face-culled terrain with vertex ambient occlusion, hills, a turquoise lake, blossom trees, a hillside cave, and a pre-built lakeside village visible immediately on frame 1 at sunset; first-person walk/jump/fly controls; 12-material hotbar including translucent glass, night-illuminating glow lanterns, and locally spreading water; a Day/Sunset/Night cycle; Copy/Paste region build mode; localStorage world Save/Load with seed regeneration; desktop pointer lock; and mobile touch controls.

- Audience: Creative developers, 3D web enthusiasts, and casual sandbox builders exploring playful procedural worlds in the browser.
- Goal: Open immediately on an inviting, brightly lit sunset pastel village beside a shimmering lake while offering crisp 60fps block editing, region copy-paste, and dynamic night lantern lighting.
- Tone: Playful, tactile, architectural miniature warmth—soft clay colors, crisp monospace toolbars, and effortless creative flow.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: three (MIT), @types/three (MIT), lucide-react (ISC), @fontsource/fredoka (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fredoka (500, 600, 700) and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Initialize THREE.WebGLRenderer with antialias: true, preserveDrawingBuffer: true, and adaptive pixelRatio (capped at 1.5 on mobile, 2 on desktop).
  - Implement chunked face-culled meshing with per-vertex ambient occlusion in src/voxel/voxelEngine.ts (separate opaque, translucent glass/water, and emissive lantern buffers for crisp rendering and low draw calls).
  - Seed the terrain generator deterministically from [WORLD_SEED] and carve a lakeside basin, hills, cave opening, blossom trees, footbridge, and pastel lantern-lit cottages for [VILLAGE_NAME].

## Variables
- [BRAND] — Sandbox World Title (default: "Sugarblock Basin"). Fictional voxel sandbox name
- [VILLAGE_NAME] — Lakeside Village Name (default: "Peachtide Village"). Name of the seeded sunset village
- [WORLD_SEED] — Default Numeric Seed (default: "4821"). Seed integer for deterministic terrain generation
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/voxel-sandbox-building-game in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Mint Turf `#86E3CE` — Rolling pastel grass blocks
- Peach Sand `#FFD3B6` — Lakeside beach blocks and warm sunset sky glow
- Coral Tile `#FF8B94` — Cottage pitched roofs and primary active hotbar outline
- Buttercream Plaster `#FFF3C4` — Cottage walls and bright pastel paths
- Lavender Stone `#C9B6F2` — Cliffs, cave arches, and terraced stonework
- Glow Lantern `#FFE066` — Emissive blocks paired with dynamic Three.js PointLights that illuminate night scenes
- Lagoon Water `#6ED3FF` — Translucent water blocks that spread locally into adjacent lower air cells
- Plum HUD `#1F1A2E` — Translucent dark-plum HUD pills (rgba(31,26,46,0.82)) with crisp white and peach accents

### Typography
- Title & Tool Labels: Fredoka (OFL), weights 500/600/700
- Coordinates, Seed & Shortcuts: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Full-bleed 100vw × 100dvh 3D canvas with sleek top bar, bottom 12-slot candy material hotbar, and optional collapsible World / Region Build popover.
- Radius: 10px for HUD pills, hotbar material chips, and World Seed drawer.
- Motion: Smooth first-person walk/jump gravity and free-fly movement with crisp block placement/break feedback.
- Motion: Dynamic sunset/day/night sky dome and directional lighting transitions where glow lanterns brighten at night.
- Motion: Respect prefers-reduced-motion by disabling subtle idle camera bob.
- Imagery: 100% procedural Three.js pastel voxel geometry with face-culled chunks, vertex-baked corner ambient occlusion, soft warm sunset fog, translucent water & sky-glass materials, and glowing cottage lanterns—zero external textures.

## Pages & Sections
### [BRAND] · [VILLAGE_NAME] Voxel Sandbox (`#/world`)
1. **Full-Viewport Sunset Lakeside Village Canvas** — Immediate sunlit 3D first frame positioned on a scenic terrace overlooking [VILLAGE_NAME] beside a clear pastel lake at sunset: 4 handcrafted pastel cottages with coral roofs and glowing lantern windows, a wooden footbridge across the lake, pink blossom trees, rolling mint hills, and a carved lavender-stone cave entrance. Clicking the canvas engages desktop pointer lock (`ESC` releases) with a center crosshair and crisp wireframe block target highlight; left-click breaks and right-click places the selected hotbar block.
   Layout: Full-viewport fixed canvas (`100vw × 100dvh`) with non-blocking corner HUD widgets.
2. **Top Bar: Brand, Fly/Walk Mode, Lighting Cycle, Region Build & World Save/Load** — Top-left pill showing [BRAND] · [VILLAGE_NAME] and live player XYZ coordinates. Top-right controls: Walk/Fly toggle (`F`), Day/Sunset/Night cycle button (demonstrating glowing lantern blocks lighting up the dark village at Night), Region Copy/Paste popover (`Mark A`, `Mark B`, `Copy Selection`, `Paste Ahead` with voxel count feedback), and World Save/Load popover (editable numeric Seed field defaulting to [WORLD_SEED], `Generate Seed`, `Save World` to localStorage, `Load Saved`, `Reset Village`).
   Layout: Flex-wrapped translucent dark-plum top HUD bar with zero horizontal overflow at 390px mobile.
3. **Bottom 12-Material Candy Hotbar & Mobile Touch Controls** — Bottom-center sleek 12-slot material hotbar (1–9, 0, -, = keys or click/tap) with distinct pastel color swatches and material tooltips: Mint Turf, Peach Sand, Coral Tile, Cream Plaster, Lavender Stone, Berry Brick, Timber, Blossom Leaves, Sky Glass, Glow Lantern, Water (spreads locally to adjacent lower tiles), and Cloud Puff. On mobile (`<768px`), displays clean on-screen movement buttons (Forward/Back/Turn + Up/Jump + Break/Place) positioned cleanly above the scrollable hotbar, plus optional [CREDIT] link in the bottom-right corner.
   Layout: Centered bottom hotbar (`max-w-[96vw] overflow-x-auto`) with zero overlapping controls on mobile.

## Assets
- icon: Install lucide-react (ISC) for HUD toggles (sun/moon, feather fly mode, copy/paste region, save/load, pickaxe/cube).
- font: Install @fontsource/fredoka and @fontsource/jetbrains-mono (OFL) and import directly in src/main.tsx.
- image: All voxel chunks, ambient occlusion shading, lakeside village, trees, sky dome, and translucent water/glass are generated procedurally in Three.js.

## Don'ts
- No textures, blocky characters, mobs, UI slots, or branding resembling Minecraft or any existing voxel franchise.
- No dark loading screen or blocking modal hiding the sunset lakeside village on frame 1.
- No external 3D models, texture files, or CDN scripts/fonts.
- No unculled per-voxel Mesh creation; use chunked face-culled BufferGeometry so laptops and headless browsers render smoothly.
- No calendar dates anywhere on the interface.
- No source maps in production build (build.sourcemap: false) and keep dist/ under 20 MB.
- No horizontal page overflow or console errors at 1440x900 desktop or 390x844 mobile.

---
— Prompt by VibeFather · https://vibefather.ai/t/voxel-sandbox-building-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
