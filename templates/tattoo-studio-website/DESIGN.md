---
name: "Tattoo Studio Website"
colors:
  ink: "#0C0B0B"
  soot: "#161313"
  bone: "#E9E0D2"
  ash: "#A79C90"
  oxblood: "#963B40"
  umber_line: "#3A302D"
  parchment: "#D8CBB8"
typography:
  display_and_editorial_headings: { family: "Cormorant Garamond", weights: [500, 600] }
  body_navigation_forms_and_labels: { family: "Manrope", weights: [400, 500, 600, 700] }
spacing: "Use an 8 px base scale. Content max-width is 1440 px with 64 px desktop and 20 px mobile page gutters. Use a 12-column grid with 24 px gutters. Section padding is 112–136 px desktop and 64–80 px mobile. Header height is 80 px. Display headlines use clamp(64px, 8vw, 124px) at 0.88 line-height; page titles use clamp(52px, 6vw, 88px); body copy is 16–18 px at 1.65 line-height."
radius: "Mostly crisp editorial edges: 2 px on cards, images, inputs, and buttons; 999 px only for style tags and small status pills. No soft floating cards or large bubbly corners."
---

# Tattoo Studio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0C0B0B` — Primary page background and dark text on light panels
- **Soot** `#161313` — Cards, navigation background, and alternating sections
- **Bone** `#E9E0D2` — Primary headings, body text on dark, and reversed panels
- **Ash** `#A79C90` — Secondary copy, metadata, and inactive controls
- **Oxblood** `#963B40` — Primary buttons, active filters, focus rings, and small accents
- **Umber Line** `#3A302D` — Borders, dividers, input outlines, and SVG grid details
- **Parchment** `#D8CBB8` — Occasional light editorial section background with Ink text

## Typography
- **Display and editorial headings** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Body, navigation, forms, and labels** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8 px base scale. Content max-width is 1440 px with 64 px desktop and 20 px mobile page gutters. Use a 12-column grid with 24 px gutters. Section padding is 112–136 px desktop and 64–80 px mobile. Header height is 80 px. Display headlines use clamp(64px, 8vw, 124px) at 0.88 line-height; page titles use clamp(52px, 6vw, 88px); body copy is 16–18 px at 1.65 line-height.
- Radius: Mostly crisp editorial edges: 2 px on cards, images, inputs, and buttons; 999 px only for style tags and small status pills. No soft floating cards or large bubbly corners.

## Motion
- Reveal the homepage hero photograph with a bottom-to-top clip-path over 1000 ms, then fade the headline lines upward by 24 px with a 90 ms stagger.
- Reveal section headings and content rows once at 15% viewport entry using 28 px upward travel, 650 ms duration, and 80 ms child stagger; never replay on upward scrolling.
- On artist and flash cards, scale imagery to 1.035 over 450 ms, shift the arrow icon 4 px right, and draw the title underline from left to right.
- Animate flash filter changes with a 220 ms opacity and 12 px scale transition; preserve grid stability and announce result counts to screen readers.
- Use 180–240 ms fade-and-slide transitions for the mobile menu, flash dialog, accordion answers, and consultation steps; no scroll-jacking or custom cursor.
- When prefers-reduced-motion is enabled, remove parallax, clip reveals, smooth scrolling, layout animation, and large transforms; show all content immediately.

## Imagery
Use six coherent AI-generated documentary photographs: one wide studio interior for the homepage, three distinct fictional artist portraits, one workstation detail, and one aftercare scene. All use charcoal, warm bone, and oxblood tones, low-key tungsten practicals, soft side light, and subtle 35 mm film grain. Never generate words, logos, equipment brands, or recognizable real people. Flash artwork is separate original black-line SVG drawn in code from simple geometric paths on warm parchment grids: nine small motifs in three sheets, with consistent 2 px strokes, no fills except Ink, and no tracing or external tattoo images.

## Tone
Quietly confident, craft-led, direct, inclusive, and reassuring. Avoid biker clichés, aggressive language, mystical pseudo-spirituality, and exaggerated claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/tattoo-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
