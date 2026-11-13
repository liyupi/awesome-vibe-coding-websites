---
name: "Roofing Company Website"
colors:
  slate_charcoal: "#2B2F36"
  charcoal_deep: "#22262C"
  safety_orange: "#FF6A13"
  orange_tint: "#FFE9DC"
  sky_blue: "#8EC5FF"
  sky_tint: "#E7F0FC"
  warm_white: "#F7F5F1"
  white: "#FFFFFF"
  ink: "#1B1F25"
  steel: "#59626D"
  hairline: "#DCE0E5"
typography:
  display_headlines_section_titles_big_numbers_nav: { family: "Oswald", weights: [500, 600, 700] }
  body_paragraphs_controls_table_cells_meta: { family: "Inter", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 96px on desktop, 64px on mobile; section headers use a 14px letter-spaced orange eyebrow above an Oswald 600 title at clamp(30px, 3.4vw, 46px); cards carry 28px internal padding and 24px gaps in grids."
radius: "Hard-edged: 2px on cards and chips, 0 on buttons and tables — square corners are the identity; only photos get 6px."
---

# Roofing Company Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Slate charcoal** `#2B2F36` — Hero ground, dark bands, header text-on-light, footer
- **Charcoal deep** `#22262C` — Footer and deepest panels on dark
- **Safety orange** `#FF6A13` — Primary signal: CTAs, active pitch card, slider handle, key numbers
- **Orange tint** `#FFE9DC` — Light accent chips and estimator highlights on white
- **Sky blue** `#8EC5FF` — Data accent: map dots, radius ring, links, secondary highlights
- **Sky tint** `#E7F0FC` — Info panels (financing note, estimator footnote)
- **Warm white** `#F7F5F1` — Light section band ground
- **White** `#FFFFFF` — Cards and content panels
- **Ink** `#1B1F25` — Headings and body on light
- **Steel** `#59626D` — Secondary text on light; use #A9B2BD on dark
- **Hairline** `#DCE0E5` — Hairline rules and card borders

## Typography
- **Display: headlines, section titles, big numbers, nav** — Oswald (OFL), weights 500/600/700. Self-host the font files.
- **Body: paragraphs, controls, table cells, meta** — Inter (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 96px on desktop, 64px on mobile; section headers use a 14px letter-spaced orange eyebrow above an Oswald 600 title at clamp(30px, 3.4vw, 46px); cards carry 28px internal padding and 24px gaps in grids.
- Radius: Hard-edged: 2px on cards and chips, 0 on buttons and tables — square corners are the identity; only photos get 6px.

## Motion
- Fade-rise reveals: sections and cards enter with a 16px rise and 500ms ease, children staggered 60–90ms, driven by useInView once.
- Stat numbers count up over 900ms when the proof bar enters view; the estimator price tweens over 150ms on change.
- Before/after handle follows the pointer directly while dragging and settles with a 200ms spring on release; checklist checks pop 1.15× over 150ms.
- Every animation is disabled instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Golden-hour architectural photography from one shoot: finished roofs, roofline details and material textures, raking warm light, deep shadows, no crews, no tools, no vehicles, no readable text or signage anywhere. Charcoal shingles and warm terracotta tones echo the palette.

## Tone
Confident, plainspoken trades talk — short sentences, exact numbers, no chest-thumping. Writes like the owner [FOUNDER] explaining the job across a kitchen table, never like an ad agency.

---
— Prompt by VibeFather · https://vibefather.ai/t/roofing-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
