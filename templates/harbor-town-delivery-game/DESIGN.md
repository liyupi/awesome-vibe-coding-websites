---
name: "Harbor Town Delivery Game"
colors:
  harbor_ink: "#173647"
  deep_water: "#397F8C"
  shallow_water: "#69ADB0"
  mist: "#C7E4DF"
  sail_cloth: "#FFF8E8"
  warm_stone: "#D7C5A5"
  roof_coral: "#DF755C"
  parcel_gold: "#F5BE55"
  garden_green: "#668C68"
  timer_alert: "#C94B45"
typography:
  game_title_place_names_score_and_large_results: { family: "Fredoka Variable", weights: [600, 700] }
  hud_labels_instructions_buttons_and_body_copy: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4 px base unit. Desktop HUD outer gutters are 20 px and panel gaps 12 px; mobile gutters are 10 px and gaps 8 px. Panel padding is 14–18 px, buttons are at least 48 px high, and coarse-pointer controls are at least 64 px. Respect safe-area insets and keep the central driving view unobstructed."
radius: "Use 16 px for HUD and minimap panels, 14 px for modal cards, 12 px for buttons, and fully rounded small badges. The 3D world uses crisp faceted geometry rather than rounded UI-like forms; only the van body gets modest bevels."
---

# Harbor Town Delivery Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Harbor ink** `#173647` — Top HUD, primary text on pale panels, van tires, and dark UI controls
- **Deep water** `#397F8C` — Main sea plane and minimap water
- **Shallow water** `#69ADB0` — Low-poly water facets, harbor shallows, and pickup markers
- **Mist** `#C7E4DF` — Sky, scene fog, and pale blue UI accents
- **Sail cloth** `#FFF8E8` — HUD cards, modal surfaces, lane marks, and light text on Harbor ink
- **Warm stone** `#D7C5A5` — Island ground, curbs, and dock timbers
- **Roof coral** `#DF755C` — Selected roofs, van cargo box, and primary start button
- **Parcel gold** `#F5BE55` — Delivery-door glow, active route, score highlights, and action button
- **Garden green** `#668C68` — Trees, shrubs, grassy plots, and success accents
- **Timer alert** `#C94B45` — Final 30-second timer state and timeout messaging, always paired with text

## Typography
- **Game title, place names, score, and large results** — Fredoka Variable (OFL), weights 600/700. Self-host the font files.
- **HUD labels, instructions, buttons, and body copy** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4 px base unit. Desktop HUD outer gutters are 20 px and panel gaps 12 px; mobile gutters are 10 px and gaps 8 px. Panel padding is 14–18 px, buttons are at least 48 px high, and coarse-pointer controls are at least 64 px. Respect safe-area insets and keep the central driving view unobstructed.
- Radius: Use 16 px for HUD and minimap panels, 14 px for modal cards, 12 px for buttons, and fully rounded small badges. The 3D world uses crisp faceted geometry rather than rounded UI-like forms; only the van body gets modest bevels.

## Motion
- Run gameplay with a fixed 1/60-second simulation step and capped frame delta. Rotate wheels with actual speed, steer front wheels visually, lean the cargo body up to 4 degrees into turns, and add only a tiny suspension settle after collisions; never use camera shake.
- Damp the follow camera with frame-rate-independent exponential smoothing. Keep the van framed just below center and look 4 world units ahead so corners remain readable.
- Animate low-poly water facets, tiny foam strips, flags, and boats subtly. Pickup and destination rings breathe between 1.0 and 1.08 scale over 1.4 seconds; delivery confetti uses 18 small paper rectangles for 700 ms.
- Use 160–240 ms fades and 8 px translations for panels and toasts. During the final 30 seconds, change the timer label and color and pulse it gently once per second rather than flashing the whole screen.
- With prefers-reduced-motion, stop decorative water, flags, boats, idle pulses, camera bob, and confetti; use instant panel changes and static route markers. Essential vehicle and camera movement remains direct and restrained because it is required to play.

## Imagery
Create every visible world element from original Three.js primitives, extruded shapes, and BufferGeometry: the van, island, roads, tram rails, houses, depot, lighthouse-like harbor beacon, piers, boats, shrubs, signs, and markers. Use flat shading, visible low-poly facets, soft shadows, and a warm morning light setup. No photographs, downloaded models, HDRIs, image textures, recognizable landmarks, vehicle designs, characters, or logos. The live 3D scene itself is the visual anchor; the minimap and street signs are drawn locally on canvas.

## Tone
Cozy, coastal, playful, legible, and gently energetic. Use specific local place names and friendly delivery language, with no combat, pedestrians in danger, fail-shaming, real brands, or references to the inspiration.

---
Inspired by Harbor Town Delivery Game — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/harbor-town-delivery-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
