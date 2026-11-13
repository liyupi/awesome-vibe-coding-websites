---
name: "Property Management Company Website"
colors:
  warm_brick: "#B5462F"
  brick_tint: "#F8E7E1"
  ink_navy: "#1D2A44"
  navy_deep: "#14203A"
  sand: "#EFE6D8"
  white: "#FFFFFF"
  steel: "#5A6478"
  hairline: "#E5DFD2"
typography:
  display_headlines_prices_net_monthly: { family: "Source Serif 4", weights: [600, 700] }
  body_paragraphs_controls_table_cells: { family: "Inter", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced eyebrow (brick on owner sections, navy on tenant sections) over a Source Serif 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps."
radius: "Residential warmth: 10px cards, 8px chips and inputs, pill CTAs; photos 10px."
---

# Property Management Company Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm brick** `#B5462F` — Owner-side accent: CTAs, prices, map star
- **Brick tint** `#F8E7E1` — Owner-side chips and highlight panels
- **Ink navy** `#1D2A44` — Headings, tenant-side accents, dark bands
- **Navy deep** `#14203A` — Footer ground and dark panels
- **Sand** `#EFE6D8` — Page ground and light bands
- **White** `#FFFFFF` — Cards and panels
- **Steel** `#5A6478` — Secondary text; #A7B0C4 on dark
- **Hairline** `#E5DFD2` — Hairline rules and card borders

## Typography
- **Display: headlines, prices, net monthly** — Source Serif 4 (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, table cells** — Inter (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced eyebrow (brick on owner sections, navy on tenant sections) over a Source Serif 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Residential warmth: 10px cards, 8px chips and inputs, pill CTAs; photos 10px.

## Motion
- Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Estimator outputs tween 200ms on change; the fee table rows fade in 50ms apart; map dots pop once, staggered 60ms.
- Request-list rows slide in 160ms when added; the status step fill transitions 200ms.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Warm residential photography from one shoot: a welcoming covered porch of a managed duplex in golden light, two home exteriors (craftsman, brick townhouse), a bright staged living room, a tidy leasing-office desk with a key cabinet, and a neat maintenance kit — no people, no readable signage, no brand marks.

## Tone
Straightforward broker English — warm but numerate. Fees explained like an adult conversation; tenant copy plain and quick.

---
— Prompt by VibeFather · https://vibefather.ai/t/property-management-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
