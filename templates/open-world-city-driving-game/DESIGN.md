---
name: "Open World City Driving Game"
colors:
  night_ink: "#141821"
  paper: "#F4EFE4"
  lilac: "#6E5B8A"
  zenith: "#1B2440"
  fog_plum: "#4C4568"
  mint: "#3DDCB5"
  clay: "#C47A6A"
  window_gold: "#F2C56B"
  lamp: "#F6E2A8"
  asphalt: "#2C3140"
  sidewalk: "#6E675C"
  park: "#3E6B52"
  lane: "#E7D7A8"
  brake: "#E07A5F"
typography:
  title_card_name_and_clubhouse_sign: { family: "Fraunces Variable", weights: [600, 700] }
  hud_buttons_help_and_signs: { family: "Outfit Variable", weights: [400, 500, 600] }
  clock_lap_timer_and_speed: { family: "IBM Plex Mono", weights: [500] }
spacing: "Use a 4 px base. Desktop HUD inset 16 px, cluster gap 8 px, title card padding 28 px. Mobile inset 10 px plus safe-area insets, cluster gap 8 px. Buttons are at least 44 px; the stick and GAS are at least 72 px. The center of the frame stays clear of chrome."
radius: "Title card 20 px, HUD chips 14 px, buttons 12 px, gamepad buttons fully round. World forms stay faceted; only wheels, lamp bulbs, heads, and the fountain are round."
---

# Open World City Driving Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night ink** `#141821` — Page background, HUD chips, text on paper, dark pool-car paint
- **Paper** `#F4EFE4` — Title card, toasts, street signs, light car paint, crosswalks
- **Lilac** `#6E5B8A` — Dusk horizon, hemisphere sky at the start of the evening
- **Zenith** `#1B2440` — Sky top, renderer clear color, night fog target
- **Fog plum** `#4C4568` — Dusk fog color
- **Mint** `#3DDCB5` — Pool-car stripe, primary button, active lap gate, player scarf, minimap player
- **Clay** `#C47A6A` — Selected roofs and awnings, one pool car, brake-light neighbor
- **Window gold** `#F2C56B` — Lit windows and the active errand dot
- **Lamp** `#F6E2A8` — Street-lamp bulbs and the driven car's headlights
- **Asphalt** `#2C3140` — Road surfaces
- **Sidewalk** `#6E675C` — Ground plane and curbs
- **Park** `#3E6B52` — Pocket-park grass and a few tree crowns
- **Lane** `#E7D7A8` — Lane dashes, cargo box, bay rectangles
- **Brake** `#E07A5F` — Brake lights and the single wrong-way toast

## Typography
- **Title card name and clubhouse sign** — Fraunces Variable (OFL), weights 600/700. Self-host the font files.
- **HUD, buttons, help, and signs** — Outfit Variable (OFL), weights 400/500/600. Self-host the font files.
- **Clock, lap timer, and speed** — IBM Plex Mono (OFL), weights 500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4 px base. Desktop HUD inset 16 px, cluster gap 8 px, title card padding 28 px. Mobile inset 10 px plus safe-area insets, cluster gap 8 px. Buttons are at least 44 px; the stick and GAS are at least 72 px. The center of the frame stays clear of chrome.
- Radius: Title card 20 px, HUD chips 14 px, buttons 12 px, gamepad buttons fully round. World forms stay faceted; only wheels, lamp bulbs, heads, and the fountain are round.

## Motion
- Fixed simulation step of 1/60 second, accumulator capped at 0.05 seconds. Render with the latest state. Decorative motion uses the frame delta.
- Title camera drifts by a sine of 0.09 radians over about 20 seconds. Chase camera damps with exponential smoothing. Wheels roll from distance traveled. The driven car leans at most 3 degrees into a turn. No camera shake.
- Dusk is a single 0 to 1 mix over 150 seconds of unpaused play, applied to sky, fog, sun, windows, and lamps. It holds at 1. It does not advance on the title card, board, help, or pause.
- Gates and the objective dot pulse scale from 1 to 1.06 over 1.2 seconds. Toasts fade in 160 ms. Buttons darken on press in 80 ms.
- With prefers-reduced-motion, freeze the title drift, cloud cards, fountain bob, gate pulse, and figure sway. Snap UI in place. Keep walking, driving, traffic, and the slow dusk mix, because those are the game.

## Imagery
Draw the entire district from original Three.js primitives with MeshLambertMaterial, flatShading true, roughness not used, and no texture maps, HDRIs, or downloaded models. The first screen is the 3D district beside a paper title card, never type on a flat field. People are geometric: a sphere head with no face, a box coat, and simple legs. Vary coat colors. They are fictional and do not resemble any real person. No photographs.

## Tone
Warm, local, and playful. Short US English, concrete place names, and the manners of a neighborhood car club. The player is a welcome member borrowing club cars and dropping parcels or flowers at doors.

---
Inspired by One-prompt open-world city driving demo by @XFreeze — https://www.tweaktown.com/news/113703/forget-gta-6-ahem-grok-4-7-made-a-gta-style-game-from-one-prompt-as-musk-boasts-of-ai-developing-photo-realistic-games/index.html
— Prompt by VibeFather · https://vibefather.ai/t/open-world-city-driving-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
