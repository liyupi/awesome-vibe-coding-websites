---
name: "Independent Pharmacy Website"
colors:
  pharmacy_green: "#14A06F"
  green_deep: "#0D7A54"
  tangerine: "#FF8A3D"
  tangerine_tint: "#FFEFE4"
  green_tint: "#E6F6EF"
  white: "#FFFFFF"
  ink: "#1F2A26"
  steel: "#5A6A63"
  hairline: "#E3EBE7"
typography:
  display_and_body_everything: { family: "Rubik", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced green eyebrow over a Rubik 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps."
radius: "Counter-friendly: 14px cards, 10px chips and inputs, pill CTAs; photos 14px."
---

# Independent Pharmacy Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Pharmacy green** `#14A06F` — Primary: header accents, links, success states, zone map
- **Green deep** `#0D7A54` — Dark bands and footer ground
- **Tangerine** `#FF8A3D` — CTAs, highlights, out-of-area notes
- **Tangerine tint** `#FFEFE4` — Chips and highlight panels
- **Green tint** `#E6F6EF` — Info panels and success chips
- **White** `#FFFFFF` — Page ground and cards
- **Ink** `#1F2A26` — Headings and body
- **Steel** `#5A6A63` — Secondary text
- **Hairline** `#E3EBE7` — Hairline rules and card borders

## Typography
- **Display and body: everything** — Rubik (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced green eyebrow over a Rubik 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Counter-friendly: 14px cards, 10px chips and inputs, pill CTAs; photos 14px.

## Motion
- Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Refill success and delivery-check results pop 1.05×; the zone blob on the map draws its outline 400ms on section entry.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Bright pharmacy photography from one shoot: a modern counter in white and green, clean white shelves with plain-label bottles and boxes, two pharmacist portraits in white coats (fictional, varied), and a small green delivery van — no readable product labels, no brand marks, no people beyond the portraits.

## Tone
Counter-friendliness in writing — brisk, warm, a little small-talk. Questions about medicines always route to the pharmacist, never to web copy.

---
— Prompt by VibeFather · https://vibefather.ai/t/independent-pharmacy-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
