---
name: "Space Dogfight Arcade Game"
colors:
  void: "#07080C"
  paper: "#E7ECF2"
  dim: "#9AA3AE"
  amber: "#E8A23A"
  ice: "#8FCBE3"
  bolt: "#E7F1F8"
  drone_bolt: "#B7C0CA"
  rock: "#C3CBD4"
  rock_deep: "#646C78"
  rock_mid: "#8E98A4"
  ink: "#141820"
  glass: "rgba(10, 12, 16, 0.72)"
  line: "rgba(213, 220, 228, 0.32)"
  nozzle: "#2C3138"
typography:
  squadron_name_and_primary_buttons: { family: "Oxanium", weights: [500, 600] }
  body_legend_and_secondary_buttons: { family: "Source Sans 3", weights: [400, 600] }
  wave_shield_call_sign_and_radar_labels: { family: "IBM Plex Mono", weights: [400] }
spacing: "4 px base. Desktop title card padding 28 px and HUD inset 24 px. Mobile card padding 20 px, HUD inset 16 px, and safe-area padding on the touch row. Buttons are at least 44 px tall. Touch buttons are 64 px. The stick is 116 px. The page itself does not scroll; only the mobile title card scrolls inside itself."
radius: "Title and retry cards 16 px. Primary and touch buttons 12 px. The radar is a circle. The shield track is 2 px. World meshes stay faceted. The lock reticle is a circle, not a bracket."
---

# Space Dogfight Arcade Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#07080C` — Page background, renderer clear, and linear fog
- **Paper** `#E7ECF2` — Primary text and fighter hull
- **Dim** `#9AA3AE` — Secondary text, canards, spine fin, and idle radar dots
- **Amber** `#E8A23A` — Lock ring, missile, boost cue, canopy, primary button, low-shield fill
- **Ice** `#8FCBE3` — Shield fill, ready ring, and the radar player mark
- **Bolt** `#E7F1F8` — Player energy bolts and ice burst squares
- **Drone bolt** `#B7C0CA` — Drone bolts only. Cool gray, never red or green
- **Rock** `#C3CBD4` — Lit asteroid material
- **Rock deep** `#646C78` — Darkest asteroid material
- **Rock mid** `#8E98A4` — Middle asteroid material
- **Ink** `#141820` — Text on the amber button
- **Glass** `rgba(10, 12, 16, 0.72)` — Title card, retry card, radar, and touch controls
- **Line** `rgba(213, 220, 228, 0.32)` — Hairline borders on glass panels
- **Nozzle** `#2C3138` — Engine nozzles

## Typography
- **Squadron name and primary buttons** — Oxanium (OFL), weights 500/600. Self-host the font files.
- **Body, legend, and secondary buttons** — Source Sans 3 (OFL), weights 400/600. Self-host the font files.
- **Wave, shield, call sign, and radar labels** — IBM Plex Mono (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: 4 px base. Desktop title card padding 28 px and HUD inset 24 px. Mobile card padding 20 px, HUD inset 16 px, and safe-area padding on the touch row. Buttons are at least 44 px tall. Touch buttons are 64 px. The stick is 116 px. The page itself does not scroll; only the mobile title card scrolls inside itself.
- Radius: Title and retry cards 16 px. Primary and touch buttons 12 px. The radar is a circle. The shield track is 2 px. World meshes stay faceted. The lock reticle is a circle, not a bracket.

## Motion
- Variable dt capped at 0.033 seconds. Render once per frame after at most one simulation step.
- Chase camera smoothing is 1 - exp(-5.5 * dt). Snap the camera on the title pose, on the frame play starts, and on Fly again.
- A damaging hit shakes the camera for 0.16 seconds at amplitude 0.14. The title fighter yaws at 0.08 rad/s. The lock ring may pulse 5 percent. The shield fill may pulse while below 25.
- Boost pulls the camera back 1.6 units and shows eight short speed lines. Missile and bolt motion is the game and always stays.
- With prefers-reduced-motion, cut shake, title yaw, camera pull, speed lines, missile trail, lock pulse, shield pulse, and particle tumble. Use the small particle budget and multiply burst life by 0.35. Snap overlays. Keep steering, firing, lock, waves, and the retry card.

## Imagery
Draw the fighter, drones, asteroids, stars, bolts, missile, bursts, boundary cage, and favicon in code. No photographs, no generated stills, no HDRI, no downloaded spacecraft, and no people. The first-screen anchor is the lit chase view of the fighter among asteroids, with the glass card beside it on desktop and below it on a phone. Hits are tumbling ice and amber squares. There is no fire, smoke, pilot, or blood.

## Tone
Calm, short, and operational, like a dispatcher. US English. No movie-trailer voice and no slogans from existing games.

---
— Prompt by VibeFather · https://vibefather.ai/t/space-dogfight-arcade-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
