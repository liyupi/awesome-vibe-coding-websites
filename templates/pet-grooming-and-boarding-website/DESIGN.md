---
name: "Pet Grooming and Boarding Website"
colors:
  bubblegum: "#FF7EB6"
  bubblegum_tint: "#FFEDF5"
  sky: "#5EC2FF"
  sky_tint: "#EAF6FF"
  sunshine: "#FFD84D"
  sunshine_tint: "#FFF7D9"
  white: "#FFFFFF"
  cloud: "#F7F9FB"
  ink: "#2B2733"
  steel: "#6A6575"
  hairline: "#EAE6EF"
typography:
  display_headlines_prices_totals: { family: "Baloo 2", weights: [600, 700] }
  body_paragraphs_controls_schedule: { family: "Nunito", weights: [400, 600, 700, 800] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced bubblegum (or sky on boarding sections) eyebrow over a Baloo 2 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps."
radius: "Maximum friendliness that stays adult: 18px cards, 12px chips and inputs, pill CTAs; photos 18px."
---

# Pet Grooming and Boarding Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Bubblegum** `#FF7EB6` — Primary accent: CTAs, grooming sections, logomark
- **Bubblegum tint** `#FFEDF5` — Chips and highlight panels
- **Sky** `#5EC2FF` — Boarding sections, info accents, links
- **Sky tint** `#EAF6FF` — Info panels and schedule strip
- **Sunshine** `#FFD84D` — Highlights, tags, schedule sun, price totals
- **Sunshine tint** `#FFF7D9` — Note panels
- **White** `#FFFFFF` — Page ground and cards
- **Cloud** `#F7F9FB` — Alternate light band
- **Ink** `#2B2733` — Headings and body
- **Steel** `#6A6575` — Secondary text
- **Hairline** `#EAE6EF` — Hairline rules and card borders

## Typography
- **Display: headlines, prices, totals** — Baloo 2 (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, schedule** — Nunito (OFL), weights 400/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced bubblegum (or sky on boarding sections) eyebrow over a Baloo 2 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Maximum friendliness that stays adult: 18px cards, 12px chips and inputs, pill CTAs; photos 18px.

## Motion
- Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Price-picker and stay-calculator outputs tween 200ms; the schedule strip's sun icon moves 8° on section entry.
- Profile and booking chips pop 1.05× when attached; success checks pop 1.15×.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Bright salon photography from one shoot: freshly groomed dogs and cats (anatomically correct, fluffy and healthy) on white salon tables and in sunlit suites, a tidy bathing station with bubbles, and the salon's window front — no people's faces, no brand marks, no distressed animals, every animal looking calm and well cared for.

## Tone
Warm groomer-chat: affectionate about animals, crisp about logistics, lightly funny about cat opinions. Never saccharine, never clinical.

---
— Prompt by VibeFather · https://vibefather.ai/t/pet-grooming-and-boarding-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
