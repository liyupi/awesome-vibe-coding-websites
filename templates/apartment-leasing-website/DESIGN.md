---
name: "Apartment Leasing Website"
colors:
  chalk: "#F4F1EA"
  ink: "#24251F"
  oxblood: "#713F35"
  sage: "#A8B09B"
  linen: "#E7E1D6"
  stone_line: "#CFC8BA"
typography:
  display: { family: "DM Serif Display", weights: [400] }
  body_and_interface: { family: "Inter Variable", weights: [400, 500, 600] }
spacing: "Use an 8px base grid, a 1360px maximum content width, 40px desktop gutters, and 20px mobile gutters. Sections have 112px vertical padding on desktop and 72px on mobile. Use 12-column desktop grids with 24px gaps, 16px form-field gaps, and 64–80px between major headings and content."
radius: "Use 4px corners on photographs, cards, tables, and form panels; 2px on inputs; and fully rounded pill shapes only for compact filters, status chips, and primary buttons. Avoid nested rounded cards and soft bubble containers."
---

# Apartment Leasing Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Chalk** `#F4F1EA` — Primary page background and light text on dark photographs
- **Ink** `#24251F` — Headlines, body copy, footer background, and primary controls
- **Oxblood** `#713F35` — Calls to action, active filter states, links, and small editorial accents
- **Sage** `#A8B09B` — Availability indicators, map fills, and quiet decorative panels
- **Linen** `#E7E1D6` — Alternating section backgrounds and selected card surfaces
- **Stone Line** `#CFC8BA` — Borders, table rules, input outlines, and floor-plan strokes

## Typography
- **Display** — DM Serif Display (OFL), weights 400. Self-host the font files.
- **Body and interface** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid, a 1360px maximum content width, 40px desktop gutters, and 20px mobile gutters. Sections have 112px vertical padding on desktop and 72px on mobile. Use 12-column desktop grids with 24px gaps, 16px form-field gaps, and 64–80px between major headings and content.
- Radius: Use 4px corners on photographs, cards, tables, and form panels; 2px on inputs; and fully rounded pill shapes only for compact filters, status chips, and primary buttons. Avoid nested rounded cards and soft bubble containers.

## Motion
- On first load, fade the hero copy upward by 18px over 600ms while the hero photograph settles from scale 1.035 to 1 over 900ms; stagger the eyebrow, heading, paragraph, and actions by 70ms.
- Reveal section headings and image grids with a 20px rise and opacity transition over 500ms when they enter the viewport, once only, with no scroll hijacking.
- Animate floor-plan result changes and accordion expansion with 180–240ms opacity and height transitions; keep inventory updates immediate and readable.
- Give buttons, links, table-row actions, and gallery tiles a 160ms color, underline, or image-scale response on hover and visible keyboard focus.
- Disable nonessential transforms, smooth scrolling, and staggered reveals under prefers-reduced-motion; never animate availability numbers or form errors in a way that delays reading.

## Imagery
Use the six supplied generated images as one coherent warm architectural shoot: a large exterior hero, two apartment interiors, two amenity scenes, and one neighborhood street. Crop with object-fit: cover without distorting straight verticals. Add original code-drawn SVG floor plans and a schematic street map; these are informational diagrams, not decorative substitutes for photography. Do not add recognizable people, branded products, property logos, or landmarks.

## Tone
Warm, assured, precise, and residential rather than corporate. Use specific details and calm calls to action; avoid pressure tactics, superlatives, and vague luxury claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/apartment-leasing-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
