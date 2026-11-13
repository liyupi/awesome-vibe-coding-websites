---
name: "Neon Snake 3D Game"
colors:
  void: "#07080A"
  floor: "#07100F"
  grid: "#1E4A42"
  hot_line: "#8CFFE0"
  sea_glass: "#2EE6A6"
  head: "#E9FFF8"
  copper: "#FF8A3D"
  cream: "#FFE6D0"
  ink: "#071410"
  mist: "#D5E8E2"
  mute: "#8AA39A"
  rail_pink: "#FF5D73"
  card: "#0C1414"
  stroke: "#234840"
  pip: "#1A3330"
  hover: "#76F6C4"
typography:
  game_name_and_start_heading: { family: "Syne", weights: [700, 800] }
  ui_buttons_hints_and_body: { family: "Outfit Variable", weights: [400, 500, 600] }
  scores_length_and_step: { family: "IBM Plex Mono", weights: [500] }
spacing: "Use a 4px base. Desktop card padding 28px, inset 36px from the left. Mobile card inset 12px plus safe-area insets. HUD chip gap 8px, top-bar padding 12px 16px. Buttons are at least 44px tall. The pad keys are 64px. The center of the play view stays clear of the pad."
radius: "Cards 20px, buttons 12px, radios 12px, HUD chips fully round, pad keys 14px. The snake and the bead are round capsules and spheres. The rail is a sharp low box."
---

# Neon Snake 3D Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#07080A` — Page background, renderer clear color, fog, and the overlay scrim base
- **Floor** `#07100F` — Grid shader background
- **Grid** `#1E4A42` — Idle grid lines
- **Hot line** `#8CFFE0` — Grid lines near the head
- **Sea glass** `#2EE6A6` — Snake body emissive, primary button, focus ring, Wrap chip border, filled speed pips
- **Head** `#E9FFF8` — Head emissive, game name, and start heading
- **Copper** `#FF8A3D` — Bead emissive, bead halo, and the food pool on the floor
- **Cream** `#FFE6D0` — Bead core diffuse color
- **Ink** `#071410` — Text on the primary button
- **Mist** `#D5E8E2` — Body copy, HUD values, and ghost-button text
- **Mute** `#8AA39A` — Eyebrow, hints, place line, and the credit link
- **Rail pink** `#FF5D73` — Walls rail emissive, Walls chip border, and the brief death tint on the head
- **Card** `#0C1414` — Frosted cards at 82% opacity
- **Stroke** `#234840` — Card borders, idle chips, and unselected radios
- **Pip** `#1A3330` — Empty speed pips
- **Hover** `#76F6C4` — Primary button hover

## Typography
- **Game name and start heading** — Syne (OFL), weights 700/800. Self-host the font files.
- **UI, buttons, hints, and body** — Outfit Variable (OFL), weights 400/500/600. Self-host the font files.
- **Scores, length, and step** — IBM Plex Mono (OFL), weights 500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base. Desktop card padding 28px, inset 36px from the left. Mobile card inset 12px plus safe-area insets. HUD chip gap 8px, top-bar padding 12px 16px. Buttons are at least 44px tall. The pad keys are 64px. The center of the play view stays clear of the pad.
- Radius: Cards 20px, buttons 12px, radios 12px, HUD chips fully round, pad keys 14px. The snake and the bead are round capsules and spheres. The rail is a sharp low box.

## Motion
- Simulation uses the frame delta capped at 0.05 seconds, with at most 3 cell crossings processed per frame. Render after the step.
- All capsules share one offset from 0 to 1 and glide together between cell centers. The play camera never yaws. Its position eases toward a southern offset with tau 0.28 seconds, or 0.62 when reduced motion is on.
- The bead swells on each quarter note at 96 beats per minute: scale 1 to 1.2 in 0.09 seconds, back to 1 by 0.32 seconds. Reduced motion holds scale 1 and halo opacity 0.32.
- Title camera drifts by a sine of 0.08 radians over about 28 seconds and stops when the run starts. Buttons darken or lighten on hover. A pressed control scales to 0.98 in 80ms unless reduced motion is on.
- Pause freezes the offset, the beat phase, and the title drift. The hidden tab pauses the same way and does not resume until Resume.

## Imagery
Draw the floor, the line, the bead, and the rail from Three.js primitives and one grid shader. No photographs, generated bitmaps, textures, HDRIs, or downloaded models. The first screen is that 3D floor beside or above a frosted card, never type on a flat field. The head has no face. No people and no portraits.

## Tone
Calm, precise, and a little playful. Short US English. Talk about the line, the floor, and the bead. No military ranks, no hype, and no cyber slang.

---
Inspired by Grok Build neon snake demo — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/neon-snake-3d-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
