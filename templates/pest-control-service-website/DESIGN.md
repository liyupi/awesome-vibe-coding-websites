---
name: "Pest Control Service Website"
colors:
  fresh_green: "#1BA35A"
  green_deep: "#0F7A42"
  deep_ink: "#11242B"
  ink_deeper: "#0C1B21"
  amber: "#FFB020"
  amber_tint: "#FFF3D9"
  green_tint: "#E7F6EE"
  cloud: "#F6F8F9"
  white: "#FFFFFF"
  steel: "#56656D"
  hairline: "#E0E5E8"
typography:
  display_and_body_everything: { family: "Nunito Sans", weights: [400, 600, 700, 800] }
spacing: "Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced green eyebrow over an 800-weight title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps."
radius: "Friendly and calm: 14px cards, 10px chips and inputs, pill CTAs; photos 14px."
---

# Pest Control Service Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Fresh green** `#1BA35A` — Brand: header accents, CTAs, icons, links
- **Green deep** `#0F7A42` — Dark band ground, icon circles
- **Deep ink** `#11242B` — Hero ground, headings, footer ground
- **Ink deeper** `#0C1B21` — Footer deepest panels
- **Amber** `#FFB020` — Warnings, peak-season rules, quiz result chip
- **Amber tint** `#FFF3D9` — Warning panels and result chips
- **Green tint** `#E7F6EE` — Info panels and icon circles
- **Cloud** `#F6F8F9` — Light section ground
- **White** `#FFFFFF` — Cards and panels
- **Steel** `#56656D` — Secondary text; #A3B4BC on dark
- **Hairline** `#E0E5E8` — Hairline rules and card borders

## Typography
- **Display and body: everything** — Nunito Sans (OFL), weights 400/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced green eyebrow over an 800-weight title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Friendly and calm: 14px cards, 10px chips and inputs, pill CTAs; photos 14px.

## Motion
- Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Quiz steps slide horizontally 240ms via AnimatePresence; answer cards pop 1.04× on select; the verdict card expands with a 250ms height ease.
- Calendar cells stagger 40ms; stats count up 800ms.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Clean morning-light home photography from one shoot: a tidy suburban home exterior with a green lawn, a bright kitchen corner, a tidy bedroom, a neatly organized technician's kit laid out (gloves, sprayer, tamper stations — no logos), and a foundation perimeter with fresh mulch. No people, no pests, no gross imagery, no readable text.

## Tone
Calm, knowledgeable, slightly warm-funny — an entomologist neighbor who likes bugs and hates infestations. Explains what things are before selling what to do.

---
— Prompt by VibeFather · https://vibefather.ai/t/pest-control-service-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
