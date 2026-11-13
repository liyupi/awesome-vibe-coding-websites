---
name: "UX Designer Case Study Portfolio"
colors:
  paper: "#F3F0E8"
  surface: "#FCFBF7"
  ink: "#19221E"
  moss: "#315B49"
  persimmon: "#D96849"
  muted: "#68736C"
  rule: "#C9CEC3"
typography:
  display_and_case_study_headlines: { family: "Instrument Serif", weights: [400] }
  body_navigation_controls_and_interface_mockups: { family: "Inter Variable", weights: [400, 500, 600] }
  eyebrows_figure_labels_project_numbers_and_metadata: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base scale, 24px mobile gutters, 48px desktop gutters, a 1440px maximum canvas, and a 12-column desktop grid with 24px gaps. Section padding is 88px on mobile and 144px on desktop. Keep narrative prose to 680px and case-study figure captions to 520px."
radius: "Use 2px for annotation tags, 8px for inputs and buttons, 16px for project cards, 24px for large browser mockups, and pill radii only for availability and status labels."
---

# UX Designer Case Study Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F3F0E8` — Primary page background
- **Surface** `#FCFBF7` — Cards, browser frames, and form surfaces
- **Ink** `#19221E` — Headings, body copy, and primary buttons
- **Moss** `#315B49` — Active states, links, and research annotations
- **Persimmon** `#D96849` — Sparse emphasis, outcome markers, and comparison handle
- **Muted** `#68736C` — Secondary copy and metadata
- **Rule** `#C9CEC3` — Borders, grid lines, and wireframe strokes

## Typography
- **Display and case-study headlines** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Body, navigation, controls, and interface mockups** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.
- **Eyebrows, figure labels, project numbers, and metadata** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale, 24px mobile gutters, 48px desktop gutters, a 1440px maximum canvas, and a 12-column desktop grid with 24px gaps. Section padding is 88px on mobile and 144px on desktop. Keep narrative prose to 680px and case-study figure captions to 520px.
- Radius: Use 2px for annotation tags, 8px for inputs and buttons, 16px for project cards, 24px for large browser mockups, and pill radii only for availability and status labels.

## Motion
- Reveal major headings and figures with a 24px upward translate and opacity transition over 500ms, staggered by 70ms, only when they first enter the viewport.
- Let the hero evidence board settle from a 2-degree rotation to zero while three annotation cards fade into fixed positions; keep all copy readable immediately.
- On project-card hover, move the code-drawn browser frame upward 6px, reveal the arrow icon, and shift the underlying accent rule without changing layout.
- Update the case-study reading bar from native scroll position and mark the current local-navigation anchor; no scroll hijacking or pinned narrative sections.
- Use a 160ms crossfade when switching wireframe tabs and a direct clipped reveal while dragging the comparison slider; disable nonessential transforms under prefers-reduced-motion.

## Imagery
Draw every project thumbnail, browser screen, flow, chart, annotation, and wireframe in HTML, CSS, and inline SVG using the site palette; do not use screenshots. Use one generated fictional studio portrait only on the About page. Keep interface mockups dense and credible with navigation, lists, charts, status chips, and form controls rather than empty rectangles. The hero visual anchor is a large layered evidence board, not typography alone.

## Tone
Thoughtful, precise, warm, and evidence-led. Write in first person for the designer, use concrete observations and decisions, avoid agency superlatives, and identify every project and outcome as fictional sample content.

---
— Prompt by VibeFather · https://vibefather.ai/t/ux-designer-case-study-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
