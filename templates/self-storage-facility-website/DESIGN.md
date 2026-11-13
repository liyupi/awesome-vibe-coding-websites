---
name: "Self Storage Facility Website"
colors:
  royal_blue: "#2445FF"
  blue_deep: "#1A35CC"
  sunflower: "#FFC83D"
  sunflower_tint: "#FFF3D4"
  cloud: "#F5F7FB"
  white: "#FFFFFF"
  ink: "#161B2C"
  steel: "#5A6377"
  hairline: "#E2E6EF"
typography:
  display_and_body_everything: { family: "Sora", weights: [400, 600, 700, 800] }
spacing: "Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced royal-blue eyebrow over a Sora 800 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps."
radius: "Friendly warehouse: 14px cards, 10px chips and inputs, pill CTAs; photos 14px."
---

# Self Storage Facility Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Royal blue** `#2445FF` — Brand: header, links, unit outlines, map fills
- **Blue deep** `#1A35CC` — Footer ground and dark panels
- **Sunflower** `#FFC83D` — CTAs, badges, highlights, item rectangles in the size guide
- **Sunflower tint** `#FFF3D4` — Chips, notes, selected states
- **Cloud** `#F5F7FB` — Light section ground
- **White** `#FFFFFF` — Cards and panels
- **Ink** `#161B2C` — Headings and body on light
- **Steel** `#5A6377` — Secondary text
- **Hairline** `#E2E6EF` — Hairline rules and card borders

## Typography
- **Display and body: everything** — Sora (OFL), weights 400/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced royal-blue eyebrow over a Sora 800 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Friendly warehouse: 14px cards, 10px chips and inputs, pill CTAs; photos 14px.

## Motion
- Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- The size guide's items draw in staggered 120ms after the outline, the badge and verdict last; grid cards stagger 40ms.
- The reservation stepper slides between steps 220ms; the held-code pops 1.1× on success.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Bright, clean facility photography from one shoot: a well-lit indoor corridor of roll-up doors, a small unit with neatly stacked boxes, an open drive-up unit with furniture, a supplies stack, the entrance at dusk, and facility rows from outside — no people, no readable unit numbers or signage, no vehicles with plates.

## Tone
Cheerful front-counter English — plain, helpful, mildly funny about the chaos of moving. Numbers visible, no fine-print tricks.

---
— Prompt by VibeFather · https://vibefather.ai/t/self-storage-facility-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
