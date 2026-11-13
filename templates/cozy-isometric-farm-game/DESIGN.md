---
name: "Cozy Isometric Farm Game"
colors:
  parchment: "#F6EFD8"
  cream: "#FFF9EA"
  forest_ink: "#304032"
  pine: "#2F5D50"
  moss: "#6E9B61"
  new_leaf: "#A8C686"
  earth: "#9A6248"
  furrow: "#6F4336"
  brook: "#78B7C2"
  sunbeam: "#F3C969"
  apricot: "#D9825B"
  blue_hour: "#27344B"
typography:
  display_brand_farm_name_day_heading_and_dialog_titles_700_weight_tight_0_02em_tracking: { family: "Fraunces", weights: [600, 700] }
  interface_buttons_resources_crop_names_prices_instructions_and_notifications_400_800_weights: { family: "Nunito Sans", weights: [400, 600, 700, 800] }
spacing: "Use a 4px base unit. Page gutters are 24px desktop and 12px mobile; panel padding is 18px desktop and 14px mobile; grid gaps are 16px; control gaps are 8px. Keep all touch targets at least 44×44px and the main tool buttons at least 52px tall."
radius: "Large panels 24px, resource pills 999px, buttons and seed cards 14px, dialogs 28px, and SVG scenery joins rounded. Use 2px Forest Ink outlines at 18–28% opacity rather than heavy black strokes; shadows are soft olive-brown, never neon."
---

# Cozy Isometric Farm Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Parchment** `#F6EFD8` — Page background and quiet outer negative space
- **Cream** `#FFF9EA` — Panels, dialogs, and primary text on dark green
- **Forest Ink** `#304032` — Primary text, outlines, and dark icon strokes
- **Pine** `#2F5D50` — Header accents, primary buttons, and selected tools
- **Moss** `#6E9B61` — Grass tiles, healthy foliage, and success states
- **New Leaf** `#A8C686` — Grass highlights and young crop leaves
- **Earth** `#9A6248` — Untilled soil edges, fences, and wooden panels
- **Furrow** `#6F4336` — Dry tilled soil and deep contact shadows
- **Brook** `#78B7C2` — Water tool, droplets, river, and watered-soil glints
- **Sunbeam** `#F3C969` — Sun, currency, ripe-crop sparkles, and harvest bursts
- **Apricot** `#D9825B` — Warm accents, dusk wash, and selected secondary details
- **Blue Hour** `#27344B` — Night overlay and darkened scenery during the day transition

## Typography
- **Display: brand, farm name, day heading, and dialog titles; 700 weight, tight -0.02em tracking** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **Interface: buttons, resources, crop names, prices, instructions, and notifications; 400–800 weights** — Nunito Sans (OFL), weights 400/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Page gutters are 24px desktop and 12px mobile; panel padding is 18px desktop and 14px mobile; grid gaps are 16px; control gaps are 8px. Keep all touch targets at least 44×44px and the main tool buttons at least 52px tall.
- Radius: Large panels 24px, resource pills 999px, buttons and seed cards 14px, dialogs 28px, and SVG scenery joins rounded. Use 2px Forest Ink outlines at 18–28% opacity rather than heavy black strokes; shadows are soft olive-brown, never neon.

## Motion
- Hovering or keyboard-focusing a legal tile raises its crop and highlight by 3px over 120ms; the focused diamond receives a 3px Cream and Pine double outline. Illegal actions use one restrained 180ms horizontal nudge and a text reason.
- Planting scales the seed mound from 0.7 to 1 with a 220ms ease-out. Watering drops three SVG droplets for 450ms and darkens the soil immediately. Harvesting lifts the crop 16px, fades it over 300ms, and releases six small leaf-and-coin shapes for 600ms.
- Buying a seed pulses the relevant inventory count for 240ms and briefly displays a '-4 sun coins' style delta using the actual price and CURRENCY value. Currency and inventory totals update without animated counting delays.
- End day runs a single 1400ms sequence: 0–550ms Apricot dusk wash, 550–900ms Blue Hour night wash with three small stars, then 900–1400ms return to morning. Advance the reducer once at the night midpoint and announce the new day after the transition.
- Two small clouds drift no more than 24px over 18 seconds and ready crops gently bob by 2px on a staggered 2.8-second loop. Disable clouds, bobbing, particles, nudges, and the long day transition under prefers-reduced-motion; retain immediate state and color changes.

## Imagery
Create every visual from original inline SVG and CSS: rounded diamond soil tiles, simple geometric crops at four growth stages, two generic round-canopy trees, a short fence, rounded hills, two clouds, a narrow river ribbon, tiny stones, and grass marks. Use a fixed 2:1 isometric projection, layered SVG shading, sparse hand-drawn-looking dashes, and no downloaded sprites, raster textures, people, animals, mascots, logos, or recognizable game assets. Adapt crop colors and distant decorative scenery to CROPS and SETTING while retaining the palette roles, composition, and exact field geometry.

## Tone
Warm, patient, lightly whimsical, and tactile. Use concise friendly instructions and satisfying visual feedback, never competitive pressure, real-money language, or childish mascot copy.

---
— Prompt by VibeFather · https://vibefather.ai/t/cozy-isometric-farm-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
