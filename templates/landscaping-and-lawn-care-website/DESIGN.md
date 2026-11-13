---
name: "Landscaping and Lawn Care Website"
colors:
  deep_fern: "#1E4D2B"
  fern_deeper: "#163822"
  fresh_lime: "#B7E36B"
  lime_tint: "#EDF6DA"
  warm_terracotta: "#C8643B"
  terracotta_tint: "#F8E7DE"
  soft_stone: "#F2F0EA"
  white: "#FFFFFF"
  ink: "#1E2B22"
  steel: "#5C6B5F"
  hairline: "#DEDCD2"
typography:
  display_headlines_section_titles_prices: { family: "Fraunces", weights: [600, 700] }
  body_paragraphs_controls_calendar_cells: { family: "Work Sans", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 96px desktop / 64px mobile; section headers use a 14px letter-spaced terracotta eyebrow over a Fraunces 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px grid gaps."
radius: "Garden warmth: 12px on cards and photos, 8px on chips, pill buttons — the softest radius in the library is wrong here; keep it consistent and organic, never brutally square."
---

# Landscaping and Lawn Care Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep fern** `#1E4D2B` — Hero scrim and ground, dark bands, headings on light
- **Fern deeper** `#163822` — Footer ground
- **Fresh lime** `#B7E36B` — Primary CTA fills, active chips, timeline markers — never small text on light
- **Lime tint** `#EDF6DA` — Spring chips and highlight panels
- **Warm terracotta** `#C8643B` — Accents, autumn calendar rules, secondary CTAs and eyebrow text
- **Terracotta tint** `#F8E7DE` — Autumn chips and note panels
- **Soft stone** `#F2F0EA` — Light section ground
- **White** `#FFFFFF` — Cards and panels
- **Ink** `#1E2B22` — Headings and body on light
- **Steel** `#5C6B5F` — Secondary text on light; #B9C9BB on dark
- **Hairline** `#DEDCD2` — Hairline rules and card borders

## Typography
- **Display: headlines, section titles, prices** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, calendar cells** — Work Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 96px desktop / 64px mobile; section headers use a 14px letter-spaced terracotta eyebrow over a Fraunces 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px grid gaps.
- Radius: Garden warmth: 12px on cards and photos, 8px on chips, pill buttons — the softest radius in the library is wrong here; keep it consistent and organic, never brutally square.

## Motion
- Fade-rise reveals (16px, 500ms, 60–90ms stagger) via useInView, once.
- The process timeline's SVG vine draws left to right over 900ms with steps 80ms apart; the builder's monthly price tweens over 200ms on change.
- Gallery photos scale 1.03 inside their frames on hover (400ms); filter changes crossfade 200ms.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Late-afternoon garden photography from one shoot: designed planting beds, stone paths, striped lawns and dusk lighting scenes, warm natural light, lush greens with terracotta accents — no crews, no faces, no equipment brand marks, no readable text anywhere.

## Tone
Warm, knowledgeable and unhurried — a horticulturalist who loves explaining why the yard does what it does. Specific plants, specific months, no corporate filler.

---
— Prompt by VibeFather · https://vibefather.ai/t/landscaping-and-lawn-care-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
