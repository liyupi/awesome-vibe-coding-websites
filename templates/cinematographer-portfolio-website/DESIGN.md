---
name: "Cinematographer Portfolio Website"
colors:
  black: "#0B0B0C"
  blacksoft: "#151517"
  amber: "#F2A541"
  teal: "#1E5F74"
  teallight: "#5FB3C9"
  warm: "#EDE6D8"
  grey: "#8C8880"
  line: "#26262A"
typography:
  display_titles: { family: "Syne", weights: [700, 800] }
  body_ui: { family: "DM Sans Variable", weights: [400, 500] }
  mono_credits_timecode_captions: { family: "Space Mono", weights: [400] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1240px] px-6; 8px rhythm."
radius: "Corners are square: 0px on frames, cards and buttons."
---

# Cinematographer Portfolio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **black** `#0B0B0C` — Page ground and letterbox bars
- **blackSoft** `#151517` — Panels and cards
- **amber** `#F2A541` — Tungsten accent: credit lines, primary buttons, key light in diagrams
- **teal** `#1E5F74` — Teal shadow: plates, beams, large display type only
- **tealLight** `#5FB3C9` — Teal for small text and labels on black (keeps AA contrast)
- **warm** `#EDE6D8` — Body text and titles
- **grey** `#8C8880` — Muted text
- **line** `#26262A` — Hairlines

## Typography
- **Display / titles** — Syne (OFL), weights 700/800. Self-host the font files.
- **Body / UI** — DM Sans Variable (OFL), weights 400/500. Self-host the font files.
- **Mono / credits, timecode, captions** — Space Mono (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1240px] px-6; 8px rhythm.
- Radius: Corners are square: 0px on frames, cards and buttons.

## Motion
- Hero: each still holds for six seconds with a slow push-in (scale 1 to 1.06, ease-out) and cross-fades 900ms into the next; the credit line fades in 400ms after the still.
- Credits roll: hovering a row shows that project's still in a floating frame that follows the pointer; the row's title slides 8px to the right.
- Scroll reveals: sections fade up 16px over 450ms, once (Motion whileInView); content is visible by default.
- Lighting diagram: beams fade in when a light is switched on; the selected light pulses once.
- prefers-reduced-motion: the hero rests on the first still with no push-in or cycling, the floating frame does not follow the pointer, and there are no reveals.

## Imagery
Graded film stills from fictional productions: tungsten amber practicals, teal shadows, deep blacks, shallow depth of field and fine grain, composed for a widescreen frame. People appear from behind or as silhouettes. One candid working shot of the cinematographer from beside a camera, seen from behind. No title cards, logos or readable text inside images.

## Tone
Sparse and sure. Credits, formats and reasons. No film-school adjectives.

---
— Prompt by VibeFather · https://vibefather.ai/t/cinematographer-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
