---
name: "Moving Company Quote Page"
colors:
  canvas: "#F3F0E7"
  paper: "#FFFDF8"
  spruce: "#193C35"
  muted_pine: "#63736C"
  sage_wash: "#DDE6D8"
  apricot: "#E88962"
  hairline: "#D4D8CD"
typography:
  display_and_editorial_headings: { family: "Fraunces Variable", weights: [500, 600, 700] }
  body_navigation_forms_and_numbers: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
spacing: "Use a centered 1280px maximum container with 32px desktop gutters and 20px mobile gutters. Build on an 8px base grid. Desktop sections have 104px vertical padding, mobile sections 68px. Hero uses 56px top and 72px bottom padding. Cards use 24–32px padding, form rows 16px gaps, and inventory item rows 12px vertical gaps."
radius: "Use 28px corners for major photography, 20px for the quote studio and booking panel, 14px for cards and inputs, and fully rounded pills only for compact tags and step labels. All bordered surfaces use a 1px Hairline outline rather than heavy shadows."
---

# Moving Company Quote Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F0E7` — Warm ivory page background and alternating section field.
- **Paper** `#FFFDF8` — Cards, form controls, quote ledger, and header surface.
- **Spruce** `#193C35` — Primary text, dark buttons, footer, and strong icon strokes.
- **Muted Pine** `#63736C` — Secondary copy and helper text; never use for tiny low-contrast labels.
- **Sage Wash** `#DDE6D8` — Selected move-size cards, room tabs, progress accents, and soft badges.
- **Apricot** `#E88962` — Small editorial accents, active step markers, and estimate highlights; pair with spruce text.
- **Hairline** `#D4D8CD` — One-pixel borders, table rules, input outlines, and separators.

## Typography
- **Display and editorial headings** — Fraunces Variable (OFL), weights 500/600/700. Self-host the font files.
- **Body, navigation, forms, and numbers** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a centered 1280px maximum container with 32px desktop gutters and 20px mobile gutters. Build on an 8px base grid. Desktop sections have 104px vertical padding, mobile sections 68px. Hero uses 56px top and 72px bottom padding. Cards use 24–32px padding, form rows 16px gaps, and inventory item rows 12px vertical gaps.
- Radius: Use 28px corners for major photography, 20px for the quote studio and booking panel, 14px for cards and inputs, and fully rounded pills only for compact tags and step labels. All bordered surfaces use a 1px Hairline outline rather than heavy shadows.

## Motion
- Reveal major sections once with Motion whileInView: opacity 0 to 1 and y 18 to 0 over 500ms, stagger direct children by 70ms, viewport amount 0.18.
- Animate quote-range digits and the truck, crew, and hour values with a 280ms crossfade/slide whenever state changes; keep the layout width stable and never animate every keystroke excessively.
- Use 180–220ms transitions for room tabs, quantity steppers, accordion height, mobile navigation, hover arrows, and the expanded mobile estimate bar.
- The hero photograph may scale from 1.025 to 1 on entry over 700ms; do not add continuous parallax or autoplay carousels.
- When prefers-reduced-motion is enabled, remove transforms and number tweens, show final values immediately, and keep all controls fully usable.

## Imagery
Use four coordinated photorealistic editorial images generated specifically for this template. The shared look is warm natural window light, restrained ivory/sage/apricot colors, realistic moving materials, subtle film grain, and a 35mm documentary-lifestyle feel. Show functioning spaces and careful work rather than posed advertising. No text, logos, watermarks, branded uniforms, recognizable truck models, visible faces, or recognizable people. Crop the hero to a large 4:3 scene, use the packing photograph in a split service section, the unmarked truck in a wide service-area band, and the settled room beside the booking panel. Download all four locally and list them in ASSETS.md with the supplied generated-asset credit.

## Tone
Calm, capable, warm, and precise. Sound like an experienced move coordinator rather than a sales page. Use plain US English, specific inclusions, realistic sample details, and no pressure tactics.

---
— Prompt by VibeFather · https://vibefather.ai/t/moving-company-quote-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
