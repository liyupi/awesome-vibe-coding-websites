---
name: "Flash Sale Landing Page"
colors:
  plum: "#3A0CA3"
  plumdeep: "#24046B"
  red: "#F72585"
  gold: "#FFC300"
  white: "#FFFFFF"
  lilac: "#C9B8FF"
  rust: "#C2410C"
typography:
  display_headlines_prices_countdown: { family: "Anton", weights: [400] }
  body_ui: { family: "DM Sans Variable", weights: [400, 500, 700] }
  mono_small_print_tier_maths_coupon_code: { family: "DM Mono", weights: [400, 500] }
spacing: "Page max-w-[1240px] px-6; section padding py-20; cards p-4 with an 8px radius; 8px rhythm."
radius: "Cards and tiles 8px; buttons square; the sticker is a circle."
---

# Flash Sale Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **plum** `#3A0CA3` — Deep plum: page ground
- **plumDeep** `#24046B` — Panels, cards, the countdown box
- **red** `#F72585` — Hot red: sticker, sale tags, sale prices, stock bars; fills carry white bold text of 18px or larger
- **gold** `#FFC300` — Gold: primary buttons with plum text, countdown digits, tier headings
- **white** `#FFFFFF` — Headlines and body text
- **lilac** `#C9B8FF` — Secondary text and rules on plum (keeps AA contrast)
- **rust** `#C2410C` — Small accent for the struck-through old price with white text

## Typography
- **Display / headlines, prices, countdown** — Anton (OFL), weights 400. Self-host the font files.
- **Body / UI** — DM Sans Variable (OFL), weights 400/500/700. Self-host the font files.
- **Mono / small print, tier maths, coupon code** — DM Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Page max-w-[1240px] px-6; section padding py-20; cards p-4 with an 8px radius; 8px rhythm.
- Radius: Cards and tiles 8px; buttons square; the sticker is a circle.

## Motion
- Countdown digits flip with a 200ms cross-fade every second.
- Headline words rise 24px and fade in, staggered 80ms, on load; the sticker rotates from −12 to −6 degrees.
- Stock bars animate to their width 500ms when scrolled into view; deal cards fade up staggered 60ms; content is visible by default.
- The coupon flips over 400ms on reveal; the basket drawer slides in 250ms.
- prefers-reduced-motion: the countdown updates without animation and everything else appears instantly.

## Imagery
Homeware photographs from one shoot: warm wood, rust linen, amber glass, stoneware and brass in low window light with plum, red and gold tones. Three product sheets are 3 × 3 grids on a warm light-grey ground, each cell one product. No packaging text, no labels, no logos.

## Tone
Loud but honest: big numbers, short lines, plain terms, and small print that says what is sample content.

---
— Prompt by VibeFather · https://vibefather.ai/t/flash-sale-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
