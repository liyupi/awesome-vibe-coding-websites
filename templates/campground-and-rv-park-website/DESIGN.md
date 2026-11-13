---
name: "Campground and RV Park Website"
colors:
  oat: "#F3EFE4"
  spruce: "#18372B"
  moss: "#526B4D"
  clay: "#B95F3F"
  honey: "#E2B85B"
  lichen: "#DCE3D2"
  river: "#9BBBC0"
  stone: "#C9C5B8"
typography:
  display: { family: "Fraunces Variable", weights: [500, 600, 700] }
  body_and_interface: { family: "Inter Variable", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid, a 1320px maximum content width, 40px desktop gutters, and 20px mobile gutters. Sections have 104px vertical padding on desktop and 68px on mobile. Use 12-column desktop grids with 24px gaps, 16px form-field gaps, and 56–72px between major headings and content. Keep body measure near 68 characters."
radius: "Use 18px corners on photographs and major cards, 12px on the map and reservation panels, 8px on inputs and site buttons, and fully rounded shapes only for small filter chips and status labels. Avoid nested rounded cards, large floating bubbles, and heavy shadows."
---

# Campground and RV Park Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Oat** `#F3EFE4` — Primary page background, light text on dark imagery, and quiet form surfaces
- **Spruce** `#18372B` — Headlines, body copy, primary buttons, footer, and dark section backgrounds
- **Moss** `#526B4D` — Secondary accents, available-site fills, icons, and active filter states
- **Clay** `#B95F3F` — Small editorial accents, links on light surfaces, and trail difficulty markers
- **Honey** `#E2B85B` — Selected map sites, key highlights, and focus accents with dark text
- **Lichen** `#DCE3D2` — Alternating panels, map clearings, selected cards, and soft status backgrounds
- **River** `#9BBBC0` — The illustrated creek and lake in the original park map
- **Stone** `#C9C5B8` — Borders, unavailable sites, form outlines, and subtle separators

## Typography
- **Display** — Fraunces Variable (OFL), weights 500/600/700. Self-host the font files.
- **Body and interface** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid, a 1320px maximum content width, 40px desktop gutters, and 20px mobile gutters. Sections have 104px vertical padding on desktop and 68px on mobile. Use 12-column desktop grids with 24px gaps, 16px form-field gaps, and 56–72px between major headings and content. Keep body measure near 68 characters.
- Radius: Use 18px corners on photographs and major cards, 12px on the map and reservation panels, 8px on inputs and site buttons, and fully rounded shapes only for small filter chips and status labels. Avoid nested rounded cards, large floating bubbles, and heavy shadows.

## Motion
- On first load, fade the hero copy upward by 18px over 600ms while the photograph settles from scale 1.035 to 1 over 1000ms; stagger the eyebrow, headline, paragraph, and action by 70ms.
- Reveal section headings and photographic cards with a 20px rise and opacity transition over 500ms when they enter the viewport, once only, with no scroll hijacking.
- Give map sites, filter controls, and stay-card actions a 160ms fill, border, or color response; update result counts and availability immediately without animated number ticking.
- Open the reservation drawer with a 240ms opacity and 24px horizontal transition, trap focus, close on Escape and backdrop click, and return focus to the triggering control.
- Expand accordions over 200ms with height and opacity, and use smooth anchor scrolling only when reduced motion is not requested.
- Disable nonessential transforms, staggered reveals, smooth scrolling, and drawer movement under prefers-reduced-motion; never delay form errors, site details, or availability text.

## Imagery
Use the six supplied generated images as one coherent editorial outdoor shoot: a wide park hero, one photograph for each accommodation type, a communal campfire area, and a woodland trail. They share warm late-afternoon light, tall pines, natural materials, deep green and honey tones, and an unposed sense of space. Crop with object-fit: cover and keep the hero scene spacious. Add the original SVG site map and small code-drawn trail elevation profiles as informational graphics. Do not add recognizable people, vehicle or equipment brands, readable signs, logos, or identifiable landmarks.

## Tone
Warm, grounded, practical, and quietly confident. Use concrete details about sites, hookups, trails, and routines rather than vague escape language, urgency, superlatives, or unverified hospitality claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/campground-and-rv-park-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
