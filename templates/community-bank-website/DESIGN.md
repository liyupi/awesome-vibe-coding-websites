---
name: "Community Bank Website"
colors:
  deep_evergreen: "#0F3D3E"
  evergreen_deeper: "#0A2C2D"
  brass_gold: "#C9A227"
  brass_tint: "#F6EFD8"
  paper_white: "#FBFAF6"
  white: "#FFFFFF"
  ink: "#1F2B2A"
  steel: "#5A6967"
  hairline: "#E3E1D7"
typography:
  display_headlines_rates_big_numbers: { family: "Lora", weights: [600, 700] }
  body_paragraphs_controls_table_cells: { family: "Public Sans", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 96px desktop / 64px mobile; section headers use a 13px letter-spaced brass eyebrow over a Lora 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px gaps; tables get 12px vertical cell padding."
radius: "Bank restraint: 4px on cards and chips, 2px on tables; only photos round to 6px."
---

# Community Bank Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep evergreen** `#0F3D3E` — Header ground, dark bands, authority color
- **Evergreen deeper** `#0A2C2D` — Footer ground
- **Brass gold** `#C9A227` — Accents: rates, wordmark details, active chips, CTAs
- **Brass tint** `#F6EFD8` — Highlight panels and notes
- **Paper white** `#FBFAF6` — Page ground
- **White** `#FFFFFF` — Cards and panels
- **Ink** `#1F2B2A` — Headings and body on light
- **Steel** `#5A6967` — Secondary text; #A9B8B5 on dark
- **Hairline** `#E3E1D7` — Hairline rules and card borders

## Typography
- **Display: headlines, rates, big numbers** — Lora (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, table cells** — Public Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 96px desktop / 64px mobile; section headers use a 13px letter-spaced brass eyebrow over a Lora 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px gaps; tables get 12px vertical cell padding.
- Radius: Bank restraint: 4px on cards and chips, 2px on tables; only photos round to 6px.

## Motion
- Fade-rise reveals (14px, 550ms, 70ms stagger) via useInView, once.
- The calculator and ladder outputs tween 200ms on change; the amortization chart redraws with a 250ms path transition.
- Map markers pop 1.1× once on section entry, staggered 60ms; stat numbers count up over 900ms.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Warm institutional photography from one shoot: a walnut-and-evergreen bank lobby with brass details, a teller counter close-up, a small-town main street, and two studio banker portraits (fictional people, plain suits, warm light). No readable signage, no real bank marks, no customers in close-up.

## Tone
Plain, unhurried banker's English — explains numbers the way a good branch manager would across a desk. Informative, never advice; confident, never sales-y.

---
— Prompt by VibeFather · https://vibefather.ai/t/community-bank-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
