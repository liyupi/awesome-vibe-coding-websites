---
name: "Solar System 3D Explainer"
colors:
  void: "#05070D"
  panel: "rgba(11,15,26,0.78)"
  hairline: "rgba(200,210,230,0.16)"
  ink: "#E8ECF4"
  muted: "#8E99AD"
  solar: "#FFB454"
typography:
  display_hero_headline_body_names_section_headings: { family: "Instrument Serif", weights: [400] }
  text_paragraphs_captions_buttons: { family: "IBM Plex Sans", weights: [400, 500] }
  data_readouts_and_instrument_labels_uppercase_11px_with_0_08em_tracking_for_labels_tabular_numbers_for_values: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "4px base. Page gutter 32px on desktop and 16px on mobile. Panels use 20 to 24px padding. The UI stays thin and sits at the edges so the scene owns the center of the screen."
radius: "8px on panels and cards, 6px on buttons, full round on the scale switch and body dots. No shadows on UI: hairline borders only."
---

# Solar System 3D Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#05070D` — Page and canvas background, a blue-black
- **Panel** `rgba(11,15,26,0.78)` — Instrument bar, side panel and caption cards, always with backdrop-filter blur(14px)
- **Hairline** `rgba(200,210,230,0.16)` — All 1px borders, rules and slider tracks
- **Ink** `#E8ECF4` — Headings and primary text
- **Muted** `#8E99AD` — Labels, secondary text, resting orbit lines
- **Solar** `#FFB454` — The single accent: primary button, active states, slider thumb, selected orbit, active tour tick. Nothing else in the UI gets a color.

## Typography
- **Display (hero headline, body names, section headings)** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Text (paragraphs, captions, buttons)** — IBM Plex Sans (OFL), weights 400/500. Self-host the font files.
- **Data readouts and instrument labels, uppercase 11px with 0.08em tracking for labels, tabular numbers for values** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 4px base. Page gutter 32px on desktop and 16px on mobile. Panels use 20 to 24px padding. The UI stays thin and sits at the edges so the scene owns the center of the screen.
- Radius: 8px on panels and cards, 6px on buttons, full round on the scale switch and body dots. No shadows on UI: hairline borders only.

## Motion
- Opening: over 2.4s (power2.out) the camera pulls back from distance 40 to 82 around the Sun while the UI fades up in the last 0.8s.
- Scale switch: a single parameter s runs 0 to 1 over 2.4s (power3.inOut). Every distance and radius is interpolated in log space, as exp(lerp(ln readable, ln true, s)), so the shrink looks even instead of snapping at the end.
- Focus flight: 1.6s (power3.inOut). The target position interpolates linearly and the camera distance in log space, so the arrival is smooth even at true scale.
- Panels: side panel slides x 24px to 0 with opacity over 0.32s (power2.out). The mobile sheet slides up over 0.36s. Tour captions crossfade with y 16px to 0 over 0.35s.
- Scene shift: the focused body is never centered under a panel. A view-offset fraction tweens over 0.9s (see the 3D scene section).
- Controls: slider thumb grows 1.15x on hover, switch knob slides over 0.2s, buttons transition border and color over 0.15s.
- prefers-reduced-motion: time starts paused, the sun surface stops animating and planets stop spinning, camera flights become instant cuts, the scale switch jumps with a 0.2s fade to Void and back, the tour snaps to the nearest stop with the same fade, and the opening pull-back is skipped.

## Imagery
No bitmap photographs or texture maps. Every surface is generated at load by shaders and every other visual is drawn in WebGL, SVG or CSS. Surfaces are illustrative and the footer says so.

## Tone
Calm, exact and a little wry, like a good science teacher. Short sentences, real numbers in US units first, no exclamation marks, no cosmic hype words such as vast, awe-inspiring or journey through the cosmos.

---
— Prompt by VibeFather · https://vibefather.ai/t/solar-system-3d-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
