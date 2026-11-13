---
name: "Family Medical Clinic Website"
colors:
  clinical_teal: "#0E7C7B"
  teal_deep: "#0A5D5C"
  soft_coral: "#FF7F66"
  coral_tint: "#FFEAE5"
  teal_tint: "#E4F2F1"
  soft_cream: "#FAF6EF"
  white: "#FFFFFF"
  warm_ink: "#2A3438"
  steel: "#5E6E71"
  hairline: "#E9E3D8"
typography:
  display_headlines_section_titles_wait_numbers: { family: "Quicksand", weights: [600, 700] }
  body_paragraphs_controls_provider_bios: { family: "Nunito", weights: [400, 600, 700, 800] }
spacing: "Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced teal eyebrow over a Quicksand 700 title at clamp(28px, 3.2vw, 44px); cards 28px padding, 24px gaps."
radius: "The friendliness lives here: 16px cards, 12px chips and inputs, fully-rounded pills; photos 16px to match."
---

# Family Medical Clinic Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Clinical teal** `#0E7C7B` — Primary: header ground, section accents, links, active chips
- **Teal deep** `#0A5D5C` — Footer ground and dark panels
- **Soft coral** `#FF7F66` — Warmth: CTAs, highlights, wait-card accents
- **Coral tint** `#FFEAE5` — Warm chips and note panels
- **Teal tint** `#E4F2F1` — Info panels and section bands
- **Soft cream** `#FAF6EF` — Page ground
- **White** `#FFFFFF` — Cards and panels
- **Warm ink** `#2A3438` — Headings and body on light
- **Steel** `#5E6E71` — Secondary text
- **Hairline** `#E9E3D8` — Hairline rules and card borders

## Typography
- **Display: headlines, section titles, wait numbers** — Quicksand (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, provider bios** — Nunito (OFL), weights 400/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced teal eyebrow over a Quicksand 700 title at clamp(28px, 3.2vw, 44px); cards 28px padding, 24px gaps.
- Radius: The friendliness lives here: 16px cards, 12px chips and inputs, fully-rounded pills; photos 16px to match.

## Motion
- Gentle fade-rise reveals (14px, 550ms, 70ms stagger) via useInView, once.
- The wait numbers count up on entry over 700ms; the checklist counter ticks with a 150ms pop.
- Filter and search changes crossfade provider cards and plan rows 180ms.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Warm clinical interiors from one shoot: a bright waiting room in cream and wood with plants, an exam room with teal accents and daylight — no patients, no close faces, no stethoscope-posing clichés. Provider portraits are studio-lit fictional people in white coats on plain warm backgrounds, varied in age and ethnicity.

## Tone
Warm front-desk English — plain, kind, unhurried, zero jargon. Never sales-y about health; the page's confidence is calm, not loud.

---
— Prompt by VibeFather · https://vibefather.ai/t/family-medical-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
