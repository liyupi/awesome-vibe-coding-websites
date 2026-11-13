---
name: "Private K-12 School Website"
colors:
  school_red: "#C62E2E"
  navy: "#16325C"
  navy_deep: "#0F2440"
  red_tint: "#FAE8E8"
  chalk_white: "#FBFBF8"
  white: "#FFFFFF"
  steel: "#5A6474"
  hairline: "#E5E6E1"
typography:
  display_headlines_division_names_prices: { family: "Source Serif 4", weights: [600, 700] }
  body_paragraphs_timelines_forms: { family: "Inter", weights: [400, 500, 600, 700] }
spacing: "Traditional generosity: sections separated by 96px desktop / 64px mobile; section headers use a 13px letter-spaced red eyebrow over a Source Serif 700 title at clamp(30px, 3.4vw, 46px); cards 26px padding, 22px gaps."
radius: "Institutional restraint: 6px cards, 4px chips, 2px buttons; photos 6px with a 1px navy border."
---

# Private K-12 School Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **School red** `#C62E2E` — Accent: eyebrows, CTAs, timeline nodes
- **Navy** `#16325C` — Type, dark bands, wordmark
- **Navy deep** `#0F2440` — Footer ground
- **Red tint** `#FAE8E8` — Chips and highlight panels
- **Chalk white** `#FBFBF8` — Page ground
- **White** `#FFFFFF` — Cards
- **Steel** `#5A6474` — Secondary text
- **Hairline** `#E5E6E1` — Hairline rules and card borders

## Typography
- **Display: headlines, division names, prices** — Source Serif 4 (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, timelines, forms** — Inter (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Traditional generosity: sections separated by 96px desktop / 64px mobile; section headers use a 13px letter-spaced red eyebrow over a Source Serif 700 title at clamp(30px, 3.4vw, 46px); cards 26px padding, 22px gaps.
- Radius: Institutional restraint: 6px cards, 4px chips, 2px buttons; photos 6px with a 1px navy border.

## Motion
- Fade-rise reveals (14px, 550ms, 70ms stagger) via useInView, once.
- Division tabs crossfade the timeline 200ms; the timeline's navy line draws 700ms with red nodes popping 1.1× staggered.
- Estimator outputs tween 200ms on change; news cards stagger 50ms.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Sunlit campus photography from one shoot: a brick schoolhouse with a lawn, a bright lower-school classroom with children seen from behind, a science lab with middle-schoolers at benches from behind, a warm library with students far away, an athletic field with a team in the distance, and a lit auditorium stage — no identifiable faces, no close-ups of minors, no readable signage.

## Tone
Warm institutional prose — specific, unhurried, lightly proud. The school sounds like teachers and a head who know every kid, not like a marketing committee.

---
— Prompt by VibeFather · https://vibefather.ai/t/private-k-12-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
