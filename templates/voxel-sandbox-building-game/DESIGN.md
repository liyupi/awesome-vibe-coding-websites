---
name: "Voxel Sandbox Building Game"
colors:
  mint_turf: "#86E3CE"
  peach_sand: "#FFD3B6"
  coral_tile: "#FF8B94"
  buttercream_plaster: "#FFF3C4"
  lavender_stone: "#C9B6F2"
  glow_lantern: "#FFE066"
  lagoon_water: "#6ED3FF"
  plum_hud: "#1F1A2E"
typography:
  title_tool_labels: { family: "Fredoka", weights: [500, 600, 700] }
  coordinates_seed_shortcuts: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Full-bleed 100vw × 100dvh 3D canvas with sleek top bar, bottom 12-slot candy material hotbar, and optional collapsible World / Region Build popover."
radius: "10px for HUD pills, hotbar material chips, and World Seed drawer."
---

# Voxel Sandbox Building Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Mint Turf** `#86E3CE` — Rolling pastel grass blocks
- **Peach Sand** `#FFD3B6` — Lakeside beach blocks and warm sunset sky glow
- **Coral Tile** `#FF8B94` — Cottage pitched roofs and primary active hotbar outline
- **Buttercream Plaster** `#FFF3C4` — Cottage walls and bright pastel paths
- **Lavender Stone** `#C9B6F2` — Cliffs, cave arches, and terraced stonework
- **Glow Lantern** `#FFE066` — Emissive blocks paired with dynamic Three.js PointLights that illuminate night scenes
- **Lagoon Water** `#6ED3FF` — Translucent water blocks that spread locally into adjacent lower air cells
- **Plum HUD** `#1F1A2E` — Translucent dark-plum HUD pills (rgba(31,26,46,0.82)) with crisp white and peach accents

## Typography
- **Title & Tool Labels** — Fredoka (OFL), weights 500/600/700. Self-host the font files.
- **Coordinates, Seed & Shortcuts** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Full-bleed 100vw × 100dvh 3D canvas with sleek top bar, bottom 12-slot candy material hotbar, and optional collapsible World / Region Build popover.
- Radius: 10px for HUD pills, hotbar material chips, and World Seed drawer.

## Motion
- Smooth first-person walk/jump gravity and free-fly movement with crisp block placement/break feedback.
- Dynamic sunset/day/night sky dome and directional lighting transitions where glow lanterns brighten at night.
- Respect prefers-reduced-motion by disabling subtle idle camera bob.

## Imagery
100% procedural Three.js pastel voxel geometry with face-culled chunks, vertex-baked corner ambient occlusion, soft warm sunset fog, translucent water & sky-glass materials, and glowing cottage lanterns—zero external textures.

## Tone
Playful, tactile, architectural miniature warmth—soft clay colors, crisp monospace toolbars, and effortless creative flow.

---
— Prompt by VibeFather · https://vibefather.ai/t/voxel-sandbox-building-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
