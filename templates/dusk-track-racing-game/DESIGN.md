---
name: "Dusk Track Racing Game"
colors:
  ink: "#1c1612"
  paper: "#f6f1e7"
  coral: "#c4512c"
  gold: "#e7c27a"
  sun: "#ffb067"
  horizon: "#e7a15a"
  zenith: "#1e3a5f"
  asphalt: "#3a342e"
  runoff: "#6b5344"
  grass: "#6d7a45"
  pine: "#3e5340"
  teal: "#2f6f62"
  rival_gold: "#d7a441"
  dusk_blue: "#3d4c7a"
  danger: "#d8452f"
typography:
  club_name_position_speed_and_podium_place: { family: "Big Shoulders Display", weights: [500, 700, 800] }
  body_buttons_and_hud_labels: { family: "Outfit", weights: [400, 500, 600] }
  lap_times: { family: "Share Tech Mono", weights: [400] }
spacing: "4 px base. Desktop panel padding 28 px and HUD inset 20 px. Mobile inset 14 px plus safe-area. Buttons at least 44 px, coarse-pointer controls at least 72 px. The start sheet on a phone stays within 58 vh and scrolls inside itself."
radius: "18 px on the start, pause, and podium panels. Pill buttons. The minimap and steer pad are circles. The boost track is a 999 px capsule. World meshes stay faceted, not filleted like UI."
---

# Dusk Track Racing Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#1c1612` — Panels, minimap fill, car roof, tire rubber, start-stripe dark squares
- **Paper** `#f6f1e7` — Text on ink, edge lines, start-stripe light squares, focus rings
- **Coral** `#c4512c` — Player body, primary buttons, player minimap triangle
- **Gold** `#e7c27a` — Center dashes, boost fill, minimap ribbon, drift button
- **Sun** `#ffb067` — Directional light, gate veil, ghost emissive, boost glow
- **Horizon** `#e7a15a` — Sky horizon band and fog tint
- **Zenith** `#1e3a5f` — Sky top and the page background behind the canvas
- **Asphalt** `#3a342e` — Racing surface
- **Runoff** `#6b5344` — Dirt shoulders
- **Grass** `#6d7a45` — Ground plane beyond the runoff
- **Pine** `#3e5340` — Tree cones
- **Teal** `#2f6f62` — First rival
- **Rival gold** `#d7a441` — Second rival
- **Dusk blue** `#3d4c7a` — Third rival
- **Danger** `#d8452f` — Taillights, wrong-way banner, red start lamps

## Typography
- **Club name, position, speed, and podium place** — Big Shoulders Display (OFL), weights 500/700/800. Self-host the font files.
- **Body, buttons, and HUD labels** — Outfit (OFL), weights 400/500/600. Self-host the font files.
- **Lap times** — Share Tech Mono (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: 4 px base. Desktop panel padding 28 px and HUD inset 20 px. Mobile inset 14 px plus safe-area. Buttons at least 44 px, coarse-pointer controls at least 72 px. The start sheet on a phone stays within 58 vh and scrolls inside itself.
- Radius: 18 px on the start, pause, and podium panels. Pill buttons. The minimap and steer pad are circles. The boost track is a 999 px capsule. World meshes stay faceted, not filleted like UI.

## Motion
- Chase camera eases with exponential smoothing and may roll up to 4 degrees against the steer. A boost widens FOV by 6 degrees for 1.2 seconds.
- Countdown numerals use a 160 ms scale from 0.92 to 1. Drift dust is 12 short-lived specks. The armed boost bar pulses once.
- Overlays fade over 180 ms and move no more than 8 px. Checkpoint callouts last 0.7 seconds.
- prefers-reduced-motion removes roll, FOV kick, dust, pulses, overlay travel, and countdown scale. The race, ghost, and rivals still move, because that motion is the game.

## Imagery
Draw the whole world in Three.js: sky shader, banked ribbon, closed-wheel wedge, gates, bales, tires, cones, pines, hills, a hut, and a grandstand of featureless box spectators. No photographs, generated images, HDRIs, downloaded models, or brand marks. Golden-hour light is one low warm sun and long shadows. The parked car on the ribbon is the first-screen anchor, with the start panel beside it rather than instead of it.

## Tone
Warm, plain, and specific. US English. Club-heat language, no taunts, no military wording, and no real series, manufacturers, or drivers.

---
Inspired by Grok 4.7 In The Agent OS: 20 Games, One Shot, Real Scores by @JulianGoldieSEO — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/dusk-track-racing-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
