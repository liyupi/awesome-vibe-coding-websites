---
name: "Single Property Listing Page"
colors:
  chalk: "#F4F1EA"
  paper: "#FFFEFA"
  ink: "#1C2420"
  moss: "#354A3D"
  limestone: "#D8D1C4"
  clay: "#A65338"
typography:
  display_headlines_property_name_and_large_price: { family: "Cormorant Garamond", weights: [400, 500, 600] }
  body_navigation_forms_facts_and_controls: { family: "Manrope Variable", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid, a 12-column content grid capped at 1320px, 64px desktop gutters and 20px mobile gutters. Major sections have 112px vertical padding on desktop and 72px on mobile. Keep reading measures near 62 characters and fact labels compact."
radius: "Use crisp 2px corners on buttons, inputs, and image frames; 999px only for the gallery counter and small status pills. Avoid a page of rounded cards and heavy shadows."
---

# Single Property Listing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Chalk** `#F4F1EA` — Primary page background and calm negative space
- **Paper** `#FFFEFA` — Form, room-detail, and calculator surfaces
- **Ink** `#1C2420` — Primary text and dark footer background
- **Moss** `#354A3D` — Primary buttons, selected hotspots, and key accents
- **Limestone** `#D8D1C4` — Hairline borders, floor-plan walls, and inactive tracks
- **Clay** `#A65338` — Small status accents and error states, never large fills

## Typography
- **Display headlines, property name, and large price** — Cormorant Garamond (OFL), weights 400/500/600. Self-host the font files.
- **Body, navigation, forms, facts, and controls** — Manrope Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid, a 12-column content grid capped at 1320px, 64px desktop gutters and 20px mobile gutters. Major sections have 112px vertical padding on desktop and 72px on mobile. Keep reading measures near 62 characters and fact labels compact.
- Radius: Use crisp 2px corners on buttons, inputs, and image frames; 999px only for the gallery counter and small status pills. Avoid a page of rounded cards and heavy shadows.

## Motion
- Crossfade hero photographs over 700ms with a subtle 1.02-to-1 scale settle; advance every 6 seconds, pause on hover or focus, and stop autoplay when prefers-reduced-motion is set.
- Reveal major section headings and media once with Motion whileInView, 24px upward travel, 600ms duration, and 80ms stagger; content remains visible without animation and reduced motion removes transforms.
- Animate floor-plan selection and room details with a 180ms fill and opacity change; never delay the actual selected state while waiting for animation.
- Give buttons, gallery controls, accordion rows, and navigation links 160ms color or underline feedback with no springy movement or scroll-jacking.

## Imagery
Use the six generated, locally stored images as one coherent editorial shoot of the same invented contemporary pale-brick courtyard property: warm afternoon daylight, white oak, limestone, olive planting, restrained natural color, and realistic architectural proportions. Five property photographs anchor the hero, gallery, and room details; one fictional agent portrait appears only in the contact section. The hero never uses the portrait. Draw the floor plan, neighborhood map, icons, and chart in code.

## Tone
Quietly luxurious, precise, warm, and trustworthy. Use concrete property details and plain explanations rather than sales pressure, superlatives, or generic lifestyle claims. All site copy, labels, sample data, and alt text are US English.

---
— Prompt by VibeFather · https://vibefather.ai/t/single-property-listing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
