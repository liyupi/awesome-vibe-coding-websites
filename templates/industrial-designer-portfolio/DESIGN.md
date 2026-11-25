---
name: "Industrial Designer Portfolio"
colors:
  concrete: "#E7E5E0"
  white: "#F7F6F3"
  graphite: "#2B2D31"
  graphitesoft: "#3A3D43"
  muted: "#55585F"
  orange: "#FF6B1A"
typography:
  display_headlines_and_wordmark: { family: "Big Shoulders Variable", weights: [600, 800] }
  body_ui: { family: "Spline Sans Variable", weights: [400, 500] }
  mono_dimensions_spec_labels_step_numbers: { family: "Spline Sans Mono", weights: [400, 500] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-6; 8px rhythm."
radius: "Cards and images have 2px corners; swatches are 4px; buttons are square with 2px corners."
---

# Industrial Designer Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **concrete** `#E7E5E0` — Page ground
- **white** `#F7F6F3` — Cards and spec tables
- **graphite** `#2B2D31` — Text, hero panel, process band, primary buttons
- **graphiteSoft** `#3A3D43` — Cards on graphite
- **muted** `#55585F` — Secondary text on concrete and white (AA)
- **orange** `#FF6B1A` — The single accent: dimension lines, step numbers, highlights, buttons with graphite text; as text only on graphite

## Typography
- **Display / headlines and wordmark** — Big Shoulders Variable (OFL), weights 600/800. Self-host the font files.
- **Body / UI** — Spline Sans Variable (OFL), weights 400/500. Self-host the font files.
- **Mono / dimensions, spec labels, step numbers** — Spline Sans Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-6; 8px rhythm.
- Radius: Cards and images have 2px corners; swatches are 4px; buttons are square with 2px corners.

## Motion
- Scroll reveals: sections fade up 20px over 400ms, once (Motion whileInView); content is visible by default.
- Turntable: the model turns once every 8 seconds until the visitor drags it; dragging rotates it, the scroll wheel or pinch zooms between limits; material changes cross-fade 250ms.
- Hover on a product card: the render scales to 1.03 inside its frame and the 'View project' link gains an orange underline (200ms).
- prefers-reduced-motion: no auto-rotation, no reveals, no hover scale; the turntable still responds to dragging.

## Imagery
Photoreal product renders from one studio shoot: a seamless light warm-grey backdrop, one soft large top light, gentle contact shadows, an 85 mm lens look, no logos or labels. Four single-object renders, one group shot and one photograph of a foam model on a workbench. Sketches and dimension lines are drawn in code (SVG).

## Tone
Precise and calm, like a well-written specification: measurements, materials and reasons, no design clichés.

---
— Prompt by VibeFather · https://vibefather.ai/t/industrial-designer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
