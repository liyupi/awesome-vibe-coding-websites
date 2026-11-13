---
name: "Craft Brewery Taproom Website"
colors:
  hop_green: "#5B8C2A"
  hop_deep: "#3F6520"
  amber_ale: "#E09A2D"
  amber_tint: "#F7E9CE"
  stout_brown: "#2A1A12"
  cream_paper: "#F6F1E4"
  white: "#FFFFFF"
  ink: "#241811"
  steel: "#6B5F52"
  hairline: "#E4DBC8"
typography:
  display_headlines_beer_names_prices: { family: "Bitter", weights: [600, 700] }
  body_paragraphs_controls_list_meta: { family: "Karla", weights: [400, 500, 700] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers sit under a two-color hop-vine rule (green over amber, slight offset) with a 13px letter-spaced hop-green eyebrow and a Bitter 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps."
radius: "Label-friendly: 8px cards, 6px chips, pill CTAs; photos 8px with a 2px stout-brown border like a printed frame."
---

# Craft Brewery Taproom Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Hop green** `#5B8C2A` — Brand: eyebrows, active chips, hop art, links
- **Hop deep** `#3F6520` — Dark green panels and footer ground
- **Amber ale** `#E09A2D` — Warm accent: prices, highlights, flight summary
- **Amber tint** `#F7E9CE` — Chips and highlight panels
- **Stout brown** `#2A1A12` — Dark bands, headings, footer text
- **Cream paper** `#F6F1E4` — Page ground with a subtle paper-grain CSS texture
- **White** `#FFFFFF` — Cards on cream
- **Ink** `#241811` — Body text
- **Steel** `#6B5F52` — Secondary text
- **Hairline** `#E4DBC8` — Hairline rules and card borders

## Typography
- **Display: headlines, beer names, prices** — Bitter (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, list meta** — Karla (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers sit under a two-color hop-vine rule (green over amber, slight offset) with a 13px letter-spaced hop-green eyebrow and a Bitter 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps.
- Radius: Label-friendly: 8px cards, 6px chips, pill CTAs; photos 8px with a 2px stout-brown border like a printed frame.

## Motion
- Fade-rise reveals (12px, 500ms, 60ms stagger) via useInView, once.
- The flight tasters fill bottom-up 500ms each, staggered 150ms in selection order; a rejected fifth selection shakes the paddle 8px twice.
- Tap rows stagger 40ms on filter change; the age gate fades out 250ms when cleared.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Warm amber-lit craft-brewery photography from one shoot: a taproom with string lights and communal tables, a wall of plain-handled taps, stainless fermentation tanks, a wooden flight of four on the bar, a tulip pour mid-stream, and a strung-lit patio at dusk — no people, no readable tap-handle labels or signage.

## Tone
Brewery-voice English: dry, warm, a little proud of the process. Tasting notes read like the brewer wrote them between kettle turns.

---
— Prompt by VibeFather · https://vibefather.ai/t/craft-brewery-taproom-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
