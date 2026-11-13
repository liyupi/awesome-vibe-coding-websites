---
name: "Neon Hovercar City Runner"
colors:
  canyon_night: "#07060C"
  asphalt: "#121018"
  shoulder: "#0C0B10"
  tower_body: "#14121C"
  fog_violet: "#1C1428"
  amber: "#F0A202"
  iris: "#6E5BFF"
  chartreuse: "#D6F25C"
  bone: "#F6F1E8"
  muted_lilac: "#A39BB4"
  panel: "#100E18"
  line: "#2A2636"
  coral: "#FF5C3A"
typography:
  game_title_hud_numerals_meter_labels_and_results_titles: { family: "Rajdhani", weights: [500, 600, 700] }
  body_copy_buttons_pilot_notes_and_the_small_pace_caption: { family: "Outfit Variable", weights: [400, 500, 600] }
spacing: "Use a 4 px base. Desktop HUD gutters are 20 px. Mobile gutters are 10 px plus the safe-area inset. Cards use 22 px padding. Buttons are at least 48 px tall. Coarse-pointer controls are at least 68 px. Keep the chase view clear of the cards: the desktop start card occupies the left 400 px and leaves the right half of the canyon open."
radius: "Cards and the lane ribbon use 16 px. Buttons use 12 px. The surge key is a circle. Meter tracks use 999 px. World geometry stays hard-edged except the two lamp rings, which are toruses."
---

# Neon Hovercar City Runner — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canyon night** `#07060C` — Page background, renderer clear color, and favicon ground
- **Asphalt** `#121018` — Wet road surface
- **Shoulder** `#0C0B10` — Ground between the curbs and the towers
- **Tower body** `#14121C` — Canyon tower faces
- **Fog violet** `#1C1428` — Exponential fog only. Not the curb color
- **Amber** `#F0A202` — Curbs, outrigger ring lamps, surge fill, primary button, and arch posts
- **Iris** `#6E5BFF` — Window grids and the hover slit under the car. The second neon, never a curb
- **Chartreuse** `#D6F25C` — Arch crossbars and cleared-arch ticks on the ribbon
- **Bone** `#F6F1E8` — Primary text, pace numerals, and the berth pad edge
- **Muted lilac** `#A39BB4` — Secondary labels and pilot-note body text
- **Panel** `#100E18` — Start, pause, notes, and results cards
- **Line** `#2A2636` — Card borders, empty meter tracks, and ribbon border
- **Coral** `#FF5C3A` — Drone rims, low-frame segments, and hit feedback. Never a full-screen flash

## Typography
- **Game title, HUD numerals, meter labels, and results titles** — Rajdhani (OFL), weights 500/600/700. Self-host the font files.
- **Body copy, buttons, pilot notes, and the small pace caption** — Outfit Variable (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4 px base. Desktop HUD gutters are 20 px. Mobile gutters are 10 px plus the safe-area inset. Cards use 22 px padding. Buttons are at least 48 px tall. Coarse-pointer controls are at least 68 px. Keep the chase view clear of the cards: the desktop start card occupies the left 400 px and leaves the right half of the canyon open.
- Radius: Cards and the lane ribbon use 16 px. Buttons use 12 px. The surge key is a circle. Meter tracks use 999 px. World geometry stays hard-edged except the two lamp rings, which are toruses.

## Motion
- Simulate at a fixed 1/60 second step, accumulate time, and run at most three steps per frame. Cap the incoming delta at 0.05 seconds.
- The hovercar glides at 26 m/s, rises toward 46 m/s while pace is held, and adds a 1.35 second surge kick. Steering eases across the lane. The chase camera lags behind the road tangent.
- Desktop bloom is static, not pulsing. Phone tier removes bloom and tightens fog. Reduced motion also removes bloom, hover bob, streak scroll, arch pulse, crystal spin, and the hit kick.
- Cards fade in over 160 ms and move no more than 8 px. Reduced motion makes those changes instant. Button presses scale to 0.96 while held.
- A drone hit or a wall scrape flashes only the frame segments for 120 ms. Do not flash the whole viewport.

## Imagery
Build the canyon, the hovercar, the arches, the drones, the crystals, the berth, the wet-road streak, and the favicon from original Three.js geometry and canvas textures. No photographs, no generated images, no downloaded models, no HDRI files, and no sky texture. The live canyon is the first-screen anchor. People are not shown. The only text inside the 3D view is the vehicle name on the flank and three short signs.

## Tone
Night-shift, concrete, and dry. Short US English. The failure is a machine losing its frame, not an injury. No gore, no real brands, and no slogans taken from other games.

---
Inspired by neoncity one-shot hovercar game by @JulianGoldieSEO — https://agentos.guide/grok-4-7-agent-os
— Prompt by VibeFather · https://vibefather.ai/t/neon-hovercar-city-runner · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
