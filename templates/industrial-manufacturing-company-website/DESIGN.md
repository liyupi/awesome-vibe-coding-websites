---
name: "Industrial Manufacturing Company Website"
colors:
  machined_steel: "#3A4048"
  steel_deep: "#2C3138"
  electric_blue: "#1F6FFF"
  blue_tint: "#E9F1FE"
  hazard_yellow: "#FFC400"
  light_steel: "#F3F4F6"
  white: "#FFFFFF"
  ink: "#1B1F24"
  steel_text: "#566069"
  hairline: "#DFE3E8"
typography:
  display_and_body_headlines_paragraphs_controls: { family: "Archivo", weights: [500, 600, 700] }
  spec_numerals_tolerances_table_figures_prices: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers sit under a 4px hazard diagonal-stripe rule with a 13px letter-spaced steel eyebrow and an Archivo 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps; tables 12px cell padding."
radius: "Machined edges: 2px on cards, chips and tables, 0 on buttons — square is the identity; photos 4px."
---

# Industrial Manufacturing Company Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Machined steel** `#3A4048` — Hero ground, dark bands, header
- **Steel deep** `#2C3138` — Footer ground and darkest panels
- **Electric blue** `#1F6FFF` — CTAs, links, active states, data highlights
- **Blue tint** `#E9F1FE` — Selected chips and info panels
- **Hazard yellow** `#FFC400` — Thin diagonal-stripe section rules and key tags only — never large fills
- **Light steel** `#F3F4F6` — Light section ground
- **White** `#FFFFFF` — Cards and panels
- **Ink** `#1B1F24` — Headings and body on light
- **Steel text** `#566069` — Secondary text on light; #A6AFB8 on dark
- **Hairline** `#DFE3E8` — Hairline rules, table borders, blueprint grid

## Typography
- **Display and body: headlines, paragraphs, controls** — Archivo (OFL), weights 500/600/700. Self-host the font files.
- **Spec numerals: tolerances, table figures, prices** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers sit under a 4px hazard diagonal-stripe rule with a 13px letter-spaced steel eyebrow and an Archivo 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps; tables 12px cell padding.
- Radius: Machined edges: 2px on cards, chips and tables, 0 on buttons — square is the identity; photos 4px.

## Motion
- Fade-rise reveals (12px, 450ms, 50ms stagger) via useInView, once — brisk, not bouncy.
- Estimator outputs tween 180ms; the equipment table rows fade in 40ms apart.
- The upload chip pop-in is a 150ms scale from 0.96; hazard stripes are static.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Cool industrial photography from one shoot: a clean CNC shop floor with machines in grey and blue accent light, macro shots of machined parts (aluminum manifold, titanium joint, stainless guide) on matte steel surfaces, a generic 5-axis machining center and a CMM inspection scene — no people, no faces, no readable nameplates or brand marks anywhere.

## Tone
Shop-talk English: short declarative sentences, numbers everywhere, zero marketing fluff. Reads like a seasoned estimator wrote it between jobs.

---
— Prompt by VibeFather · https://vibefather.ai/t/industrial-manufacturing-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
