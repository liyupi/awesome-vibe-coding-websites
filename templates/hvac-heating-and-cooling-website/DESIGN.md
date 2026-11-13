---
name: "HVAC Heating and Cooling Website"
colors:
  deep_navy: "#0B1F3A"
  navy_deep: "#081729"
  ember_red: "#FF4D2E"
  ember_tint: "#FFE7E2"
  ice_cyan: "#3DD6F5"
  ice_tint: "#E2F6FC"
  warm_white: "#F6F8FA"
  white: "#FFFFFF"
  ink: "#10233F"
  steel: "#54627A"
  hairline: "#DCE4EC"
typography:
  display_headlines_section_titles_stats_nav: { family: "Barlow Condensed", weights: [500, 600, 700] }
  body_paragraphs_controls_table_cells: { family: "Barlow", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 96px desktop / 64px mobile; section headers use a 14px letter-spaced eyebrow (ember or cyan per section temperature) over a Barlow Condensed 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px grid gaps."
radius: "Hard-edged identity: 2px cards and chips, 0 buttons; photos and the dial panel 6px."
---

# HVAC Heating and Cooling Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep navy** `#0B1F3A` — Hero ground, dark bands, header, footer
- **Navy deep** `#081729` — Footer and emergency banner ground
- **Ember red** `#FF4D2E` — Heating sections, urgency, primary CTAs, dial left arc
- **Ember tint** `#FFE7E2` — Heating chips and highlights on light
- **Ice cyan** `#3DD6F5` — Cooling sections, data, links, dial right arc
- **Ice tint** `#E2F6FC` — Info panels, cooling chips
- **Warm white** `#F6F8FA` — Light section band ground
- **White** `#FFFFFF` — Cards and panels
- **Ink** `#10233F` — Headings and body on light
- **Steel** `#54627A` — Secondary text on light; #9FB0C6 on dark
- **Hairline** `#DCE4EC` — Hairline rules and card borders

## Typography
- **Display: headlines, section titles, stats, nav** — Barlow Condensed (OFL), weights 500/600/700. Self-host the font files.
- **Body: paragraphs, controls, table cells** — Barlow (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 96px desktop / 64px mobile; section headers use a 14px letter-spaced eyebrow (ember or cyan per section temperature) over a Barlow Condensed 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px grid gaps.
- Radius: Hard-edged identity: 2px cards and chips, 0 buttons; photos and the dial panel 6px.

## Motion
- Fade-rise reveals (16px, 500ms, 60–90ms stagger) on section entry via useInView, once.
- The hero dial needle idles drifting ±4° on a 4s loop; the sizing result dial tweens to its tons position over 600ms; stat numbers count up over 900ms.
- Plan-tier cards highlight with a 200ms lift; emergency banner pulse is a subtle background shift on a 3s loop, and only on the banner.
- Everything disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Trade photography from one shoot: navy-dusk exteriors with condenser units and warm window light, clean daylight utility rooms and ductwork, and three studio-lit technician portraits (fictional people, varied, no logos on uniforms). Equipment is generic with no readable model numbers, brand marks or text anywhere.

## Tone
Plain-spoken trades confidence — numbers, promises and explanations in short sentences. Reads like a technician who likes teaching, never like a sales script.

---
— Prompt by VibeFather · https://vibefather.ai/t/hvac-heating-and-cooling-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
