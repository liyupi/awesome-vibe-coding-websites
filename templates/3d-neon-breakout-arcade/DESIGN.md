---
name: "3D Neon Breakout Arcade"
colors:
  ink: "#07110F"
  court: "#0C1714"
  grid: "#24584F"
  horizon: "#1C6B62"
  teal: "#1EC8B8"
  sea: "#7DFFB2"
  ice: "#9AD7FF"
  lime: "#E4F27A"
  hot: "#FF4D1C"
  paper: "#E7F3EE"
  dim: "#8AA39A"
  rail: "#12312C"
typography:
  cabinet_name_on_the_start_card: { family: "Syne", weights: [700, 800] }
  body_buttons_and_hud_labels: { family: "Sora", weights: [400, 500, 600] }
  points_round_and_timers: { family: "Share Tech Mono", weights: [400] }
spacing: "4 px base. Desktop card padding 28 px, HUD inset 16 px. Mobile inset 12 px plus safe-area insets. Buttons at least 44 px tall. The start sheet on a phone stays within 46 vh and scrolls inside itself. The center of the court stays clear of chrome during play."
radius: "Start, pause, clear, fail, and controls cards 12 px with a hard 4 px offset shadow in Grid, no blur. Buttons 8 px. Spark pips are 8 px diamonds. World meshes stay sharp except the ball, the attendant head, and Scatter's small spheres."
---

# 3D Neon Breakout Arcade — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#07110F` — Page background, renderer clear, start card, sky zenith, fog
- **Court** `#0C1714` — Floor plane and readout chips
- **Grid** `#24584F` — Floor lines and card border
- **Horizon** `#1C6B62` — Sky-dome horizon
- **Teal** `#1EC8B8` — Teal bricks, rails, primary button, spark pips, focus ring
- **Sea** `#7DFFB2` — Sea bricks
- **Ice** `#9AD7FF` — Ice bricks and chipped lime bricks
- **Lime** `#E4F27A` — Two-hit bricks before the first chip, Girder pickup, far lip
- **Hot** `#FF4D1C` — Ball, ball light, center tick, Needle beam, Scatter pickup
- **Paper** `#E7F3EE` — Headings, HUD numbers, paddle body
- **Dim** `#8AA39A` — Eyebrow, labels, hours line, credit
- **Rail** `#12312C` — Side rails and back plate

## Typography
- **Cabinet name on the start card** — Syne (OFL), weights 700/800. Self-host the font files.
- **Body, buttons, and HUD labels** — Sora (OFL), weights 400/500/600. Self-host the font files.
- **Points, round, and timers** — Share Tech Mono (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: 4 px base. Desktop card padding 28 px, HUD inset 16 px. Mobile inset 12 px plus safe-area insets. Buttons at least 44 px tall. The start sheet on a phone stays within 46 vh and scrolls inside itself. The center of the court stays clear of chrome during play.
- Radius: Start, pause, clear, fail, and controls cards 12 px with a hard 4 px offset shadow in Grid, no blur. Buttons 8 px. Spark pips are 8 px diamonds. World meshes stay sharp except the ball, the attendant head, and Scatter's small spheres.

## Motion
- Fixed step of 1/60 second. Each frame runs at most three steps and drops leftover time. Render with the latest state.
- On the start card the camera eases 0.04 units on x over 8 seconds. During play the camera x eases toward 0.18 times the paddle x, clamped to 1.1, with smoothing 1 - exp(-4 dt).
- A brick break offsets the camera by at most 0.045 units for 0.1 seconds, ease out, one shake at a time. The ball trail keeps the last 10 positions spaced at least 0.12 apart.
- Shatter spawns 14 short-lived boxes. Pickups bob 0.05 units at 1.8 Hz. Overlays fade in 160 ms and do not travel.
- With prefers-reduced-motion, cut the title drift, camera follow, shake, trail, shatter, pickup bob, and overlay fade. Snap UI in place. Keep the ball, the bar, the beam, and the rounds, because that motion is the game.

## Imagery
Draw the court, sky, bricks, bar, ball, pickups, shatter, and the attendant from original Three.js geometry. No photographs, no generated stills, no HDRIs, no downloaded models, and no brand marks. The lit court is the first-screen anchor, with the start card beside it. The attendant is a featureless figure outside the right rail: a box coat in #C5D2CB, a sphere head in #E6C4A4 with no eyes or mouth, and a Teal cap. The figure is fictional and is not a portrait of any real person. No faces anywhere else.

## Tone
Dry, specific, and local, like a night attendant talking to a regular. Short US English. No military hull talk, no death slogan, and no padded scoreboard.

---
Inspired by arcade one-shot 3D breakout by @JulianGoldieSEO — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/3d-neon-breakout-arcade · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
