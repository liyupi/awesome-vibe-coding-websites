---
name: "Sci-Fi Arena Wave Survival Game"
colors:
  yard_black: "#100F0C"
  floor: "#1A1915"
  panel: "#14130F"
  crate: "#3A342C"
  crate_dark: "#2E2B26"
  steel: "#4A463E"
  sodium: "#E8A15A"
  sodium_hot: "#FFC27A"
  paper: "#F4EFE6"
  dust: "#A39C90"
  ink: "#1A120C"
  tracer: "#3EE0D2"
  shield: "#7EB6FF"
  health: "#F08A4B"
  bolt: "#E7B15A"
  track: "#241F1A"
  glass: "rgba(12,11,9,0.78)"
  hurt: "#C46B4A"
typography:
  display: { family: "Chakra Petch", weights: [600, 700] }
  body: { family: "Source Sans 3", weights: [400, 600] }
  ammo: { family: "JetBrains Mono", weights: [500] }
spacing: "The canvas fills the viewport. Overlay panels sit 20px from the edges on viewports at least 768px wide, and 14px from the edges below that, plus env(safe-area-inset-*). The title card padding is 28px 32px. Stacked HUD rows use a 6px gap. Touch sticks are 112px across with 16px outer margins, and the Fire and Reload buttons have a 10px gap."
radius: "Title, pause, and game-over cards are 10px. Text buttons are 8px. Health bars, shield bars, sticks, and the round Fire and Reload buttons are pills at 999px."
---

# Sci-Fi Arena Wave Survival Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Yard Black** `#100F0C` — Page background, renderer clear color, and fog
- **Floor** `#1A1915` — Main floor slab
- **Panel** `#14130F` — Thin inset floor plates, visual only
- **Crate** `#3A342C` — Perimeter walls and odd-numbered crates
- **Crate Dark** `#2E2B26` — Low walls, even-numbered crates, and the carbine shroud
- **Steel** `#4A463E` — Gantry and carbine receiver
- **Sodium** `#E8A15A` — Lamp light, eyebrow, primary buttons, and drone lamps
- **Sodium Hot** `#FFC27A` — Lamp emissive and primary-button hover
- **Paper** `#F4EFE6` — Title, HUD numbers, and the crosshair
- **Dust** `#A39C90` — Secondary labels, legends, and the credit line
- **Ink** `#1A120C` — Text on the sodium buttons
- **Tracer** `#3EE0D2` — The only cyan: tracers, weapon rib, reload fill, and hit-confirm crosshair
- **Shield** `#7EB6FF` — Shield bar and shield cells
- **Health** `#F08A4B` — Health bar and health cells
- **Bolt** `#E7B15A` — Enemy projectiles and the empty-magazine numeral
- **Track** `#241F1A` — Empty tracks behind the bars and the reload fill
- **Glass** `rgba(12,11,9,0.78)` — Title, pause, game-over, and HUD panels
- **Hurt** `#C46B4A` — Damage vignette only. Never a splatter decal

## Typography
- **Display** — Chakra Petch (OFL), weights 600/700. Self-host the font files.
- **Body** — Source Sans 3 (OFL), weights 400/600. Self-host the font files.
- **Ammo** — JetBrains Mono (OFL), weights 500. Self-host the font files.

## Spacing & shape
- Spacing: The canvas fills the viewport. Overlay panels sit 20px from the edges on viewports at least 768px wide, and 14px from the edges below that, plus env(safe-area-inset-*). The title card padding is 28px 32px. Stacked HUD rows use a 6px gap. Touch sticks are 112px across with 16px outer margins, and the Fire and Reload buttons have a 10px gap.
- Radius: Title, pause, and game-over cards are 10px. Text buttons are 8px. Health bars, shield bars, sticks, and the round Fire and Reload buttons are pills at 999px.

## Motion
- Before the round, the title drone yaws at 0.25 rad/s and bobs 0.12 m at 0.8 Hz. The bob amplitude is 0 when prefers-reduced-motion is set.
- While the player is moving faster than 0.4 m/s, the camera bobs 0.016 m vertically and 0.008 m laterally, with 0.004 rad of roll. A shot kicks pitch by 0.008 rad for 70 ms. A hit offsets the camera 0.012 m for 100 ms. Skip all three when prefers-reduced-motion is set.
- Floor cells spin at 0.7 rad/s on Y. Combat drones bob 0.1 m at 1.4 Hz. Both hold still when prefers-reduced-motion is set.
- A destroyed drone emits 18 sparks that travel 2.2 m and fade in 0.4 s. A viewport under 768px, or a coarse pointer, uses 8 sparks. Reduced motion uses 6 sparks that fade in place over 0.25 s and do not travel.
- The reload track fills linearly across 950 ms. A hit on a drone turns the crosshair Tracer for 80 ms. At 30 health or below, the health bar pulses from opacity 1 to 0.45 and back over 0.8 s, unless reduced motion is set, in which case the bar stays solid.
- Buttons only change background color on hover. They do not scale, bounce, or rise. Cards show and hide with no page transition.

## Imagery
No photographs, textures, or downloaded models. The first screen is the live yard: dark slabs, four warm lamp pools, crate stacks, a gantry, and one hovering drone, with the glass title card centered over that scene rather than a flat color field. The carbine, drones, bolts, cells, tracers, and sparks are three.js meshes and points. The only flat graphic is the favicon SVG.

## Tone
Dry and physical, like a notice posted at a test range. Short labels, no jokes, no exclamation marks, and no gore.

---
— Prompt by VibeFather · https://vibefather.ai/t/sci-fi-arena-wave-survival-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
