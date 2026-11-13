---
name: "Commercial Print Shop Website"
colors:
  paper: "#F9F9F7"
  black: "#161616"
  cyan: "#00AEEF"
  magenta: "#EC008C"
  yellow: "#FFF200"
  cyan_tint: "#E5F6FD"
  steel: "#5B5F63"
  hairline: "#E4E4E0"
typography:
  display_headlines_prices: { family: "Archivo Black", weights: [400] }
  body_paragraphs_controls_tables: { family: "IBM Plex Sans", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers sit under a CMYK swatch rule with a 13px letter-spaced steel eyebrow and an Archivo Black title at clamp(26px, 3vw, 42px); cards 24px padding, 20px gaps."
radius: "Die-cut corners: 2px on cards and chips, 0 on buttons — registration-sharp; photos 2px with a 1px black border."
---

# Commercial Print Shop Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F9F9F7` — Page ground
- **Black** `#161616` — Text, footer ground, structure
- **Cyan** `#00AEEF` — Process accent 1: links, size chips, calculator highlights
- **Magenta** `#EC008C` — Process accent 2: CTAs, tags, registration shadows
- **Yellow** `#FFF200` — Process accent 3: fills and tags on black only — never small text on white
- **Cyan tint** `#E5F6FD` — Selected chips and panels
- **Steel** `#5B5F63` — Secondary text
- **Hairline** `#E4E4E0` — Hairline rules and card borders

## Typography
- **Display: headlines, prices** — Archivo Black (OFL), weights 400. Self-host the font files.
- **Body: paragraphs, controls, tables** — IBM Plex Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers sit under a CMYK swatch rule with a 13px letter-spaced steel eyebrow and an Archivo Black title at clamp(26px, 3vw, 42px); cards 24px padding, 20px gaps.
- Radius: Die-cut corners: 2px on cards and chips, 0 on buttons — registration-sharp; photos 2px with a 1px black border.

## Motion
- Fade-rise reveals (12px, 450ms, 50ms stagger) via useInView, once — press-brisk.
- The quote price tweens 150ms on change; factor rows highlight cyan-tint as they recalculate; the upload chip scales in from 0.96.
- Halftone fields and misregistration shadows are static; nothing pulses or slides.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Ink-and-paper photography from one shoot: a press detail with CMYK ink rollers, stacks of fresh paper, fanned printed sheets showing rich process color, die-cut sticker sheets with abstract art, and a bindery corner with saddle-stitched booklets — no people, no readable job tickets, no brand marks.

## Tone
Press-floor confidence — brisk, exact, lightly ink-stained humor. Numbers and cutoffs stated like facts because they are.

---
— Prompt by VibeFather · https://vibefather.ai/t/commercial-print-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
