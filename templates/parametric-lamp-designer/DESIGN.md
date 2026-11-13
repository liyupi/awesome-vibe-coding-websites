---
name: "Parametric Lamp Designer"
colors:
  canvas: "#111714"
  panel: "#18211C"
  raised: "#222D26"
  border: "#354238"
  text: "#F1F4EE"
  muted: "#9DABA1"
  glow: "#FFB080"
  sage: "#B9D5BE"
  sheet: "#EEF2ED"
typography:
  interface_brand_and_specification_headings: { family: "Space Grotesk", weights: [400, 500, 600, 700] }
  slider_values_dimensions_status_labels_and_specification_data: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base unit with 8px control gaps, 16px card padding, 20px rail section gaps, and 24px major separations. Desktop header is 68px high, left control rail is 320px wide, and the viewport consumes all remaining width. Keep the complete primary workspace visible at 1440×900 without page scrolling."
radius: "Use 16px for the viewport and preset cards, 10px for buttons and parameter groups, 6px for small value chips, and fully rounded tracks and toggles. Avoid excessive pill-shaped containers."
---

# Parametric Lamp Designer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#111714` — Full-page and WebGL background
- **Panel** `#18211C` — Control rail and header surfaces
- **Raised** `#222D26` — Preset cards, input tracks, and floating viewport tools
- **Border** `#354238` — One-pixel dividers and control outlines
- **Text** `#F1F4EE` — Primary labels and numeric values
- **Muted** `#9DABA1` — Secondary copy and measurement units
- **Glow** `#FFB080` — Warm lamp light, active slider fill, and primary export action
- **Sage** `#B9D5BE` — Focus rings, active preset accents, and success feedback
- **Sheet** `#EEF2ED` — Pale sage background of the exported PNG specification sheet

## Typography
- **Interface, brand, and specification headings** — Space Grotesk (OFL), weights 400/500/600/700. Self-host the font files.
- **Slider values, dimensions, status labels, and specification data** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit with 8px control gaps, 16px card padding, 20px rail section gaps, and 24px major separations. Desktop header is 68px high, left control rail is 320px wide, and the viewport consumes all remaining width. Keep the complete primary workspace visible at 1440×900 without page scrolling.
- Radius: Use 16px for the viewport and preset cards, 10px for buttons and parameter groups, 6px for small value chips, and fully rounded tracks and toggles. Avoid excessive pill-shaped containers.

## Motion
- Rebuild changed lamp geometry on the next animation frame after each slider input; values and active states update immediately with no Apply button.
- Use OrbitControls with damping factor 0.07 when motion is allowed, no auto-rotation, no idle camera movement, and no decorative page transitions.
- Preset selection changes geometry in one frame and crossfades the active-card border and warm glow over 160ms; camera movement is limited to explicit Front, Top, and Reset view actions.
- Slider thumbs and buttons use 120ms hover and focus transitions. Under prefers-reduced-motion, remove damping and all nonessential transitions while preserving instant functional updates.

## Imagery
The hero and only major visual is a rich, code-generated WebGL studio scene: an original open-lattice lamp with crossing ribs, horizontal contour rings, a low circular plinth, a translucent inner diffuser, warm light on a matte floor, and a faint technical grid. No photographs, stock renders, downloaded models, HDRIs, logos, people, or image placeholders are used. On mobile the live viewport remains the first large visual and is never replaced by a static screenshot.

## Tone
A quiet, precise design workshop: deep botanical greens, warm peach illumination, crisp measurements, restrained motion, and succinct functional copy. The lamp is sculptural and contemporary, with no architectural, cultural, or brand-specific motifs.

---
Inspired by Parametric Lamp Designer — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/parametric-lamp-designer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
