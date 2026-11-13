---
name: "3D Wooden Fish Tapping Toy"
colors:
  room: "#151915"
  panel: "#20251F"
  ivory: "#EEE8D8"
  muted: "#B2B8A6"
  amber: "#D8AD64"
  walnut: "#8D542F"
typography:
  display_invitation_and_brand: { family: "Instrument Serif", weights: [400] }
  body_controls_and_counters: { family: "DM Sans", weights: [400, 500, 600] }
spacing: "Desktop composition fits 1440×900 with 40px outer inset, 64px top identity rail, 112px bottom utility area, and the instrument centered in the remaining stage. Use an 8px spacing unit. A 270px left caption rail and 160px right metric rail flank the roughly 760px-wide scene; keep the 3D object unobstructed. At 390×844 use 20px side insets, a 54px top rail, a compact 34px two-line invitation, 330px-high scene, a two-column metric row, a 52px strike button, and a wrapping two-row settings dock. Allow ordinary vertical scrolling on short screens; never clip controls or horizontally scroll."
radius: "Use 10px control dock radius, 6px secondary controls, a 28px capsule for the primary strike button, and hairline #3D4438 dividers. Avoid a grid of floating glass cards."
---

# 3D Wooden Fish Tapping Toy — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Room** `#151915` — Deep green charcoal background and atmospheric room.
- **Panel** `#20251F` — Low-contrast control dock and inset fields.
- **Ivory** `#EEE8D8` — Primary typography and readable controls.
- **Muted** `#B2B8A6` — Secondary labels with strong contrast.
- **Amber** `#D8AD64` — Active controls, impact ripples, fine accents.
- **Walnut** `#8D542F` — Default instrument base, with procedural darker grain.

## Typography
- **Display invitation and brand** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Body, controls and counters** — DM Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Desktop composition fits 1440×900 with 40px outer inset, 64px top identity rail, 112px bottom utility area, and the instrument centered in the remaining stage. Use an 8px spacing unit. A 270px left caption rail and 160px right metric rail flank the roughly 760px-wide scene; keep the 3D object unobstructed. At 390×844 use 20px side insets, a 54px top rail, a compact 34px two-line invitation, 330px-high scene, a two-column metric row, a 52px strike button, and a wrapping two-row settings dock. Allow ordinary vertical scrolling on short screens; never clip controls or horizontally scroll.
- Radius: Use 10px control dock radius, 6px secondary controls, a 28px capsule for the primary strike button, and hairline #3D4438 dividers. Avoid a grid of floating glass cards.

## Motion
- Keep scene ready at first paint; no splash screen, loading overlay or entrance sequence that blocks play.
- Idle drift is a 0.035-unit vertical sine over 5 seconds. Strike animation: mallet swings from the upper right into the sound slit in 85ms, body dips 0.12 units and tilts 0.06 radians, and a damped spring returns it over about 500ms. A new strike restarts from the current physical state.
- Each strike emits one thin amber ground ripple expanding from radius 0.4 to 2.3 over 700ms, no more than 18 small warm particles, and one screen-space [CALM_MESSAGE] drifting upward 30px over 900ms. Pool and cap effects.
- Reduced motion disables idle movement, floating messages and particle travel; retain a small 120ms material highlight and immediate counter updates. Automatic mode still advances counts at its slow pace with restrained feedback.

## Imagery
Use only original procedural Three.js geometry, Canvas-generated grain and hand-authored SVG icons. The wooden fish must read as a crafted percussion instrument, not a plain sphere: a flattened rounded oval body about 2.5×1.7×1.8 units, two softly raised face lobes, a narrow dark carved sound slit, a small scalloped tail, subtle routed ridges around its sides, a tiny inset eye detail on each front lobe, and polished bevel-like highlights. Generate coherent longitudinal wood grain with a canvas texture or shader and subtle roughness variation. Model a separate wooden mallet with a slim handle and wrapped cream padded head. Float the instrument just above a broad stone plinth with a soft contact shadow. Create an architectural alcove with tall dim vertical fins, a warm side light, a sparse dust field and slight depth fog. Keep architecture subdued, without religious symbols, figures or copied decorations. For [ROOM_SETTING] adapt the atmospheric light and short caption; for Rainlit pavilion use a cooler side window light with abstract static rain-like vertical traces, still inside the same composition. No downloaded images or generated bitmaps.

## Tone
Quiet, tactile, humane and precise. Write all interface copy in US English. Keep all content in src/content.ts and rewrite finish descriptions and setting copy when variables change.

---
Inspired by 3D Cyber Mokugyo (Native Audio Synthesis) by @UPGPTs Team — https://upgpts.com/en/tutorials/chatgpt/gpt-6.1-sol-test-cases
— Prompt by VibeFather · https://vibefather.ai/t/3d-wooden-fish-tapping-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
