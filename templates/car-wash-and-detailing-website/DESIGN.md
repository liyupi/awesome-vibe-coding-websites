---
name: "Car Wash and Detailing Website"
colors:
  wet_black: "#0A0A0C"
  panel_black: "#121218"
  panel_raised: "#181820"
  candy_blue: "#2D7BFF"
  blue_glow: "#6FA8FF"
  foam_white: "#F4F7FB"
  foam_tint: "#E9F1FB"
  steel: "#8A94A6"
  hairline: "#23232C"
typography:
  display_headlines_prices_times_nav: { family: "Chakra Petch", weights: [600, 700] }
  body_paragraphs_controls_menus: { family: "Inter", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced candy-blue eyebrow over a Chakra Petch 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps."
radius: "Automotive softness: 10px cards and chips, pill CTAs; photos 10px with a 1px blue top edge on frames."
---

# Car Wash and Detailing Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Wet black** `#0A0A0C` — Page ground
- **Panel black** `#121218` — Cards and panels on dark
- **Panel raised** `#181820` — Hover and selected panel states
- **Candy blue** `#2D7BFF` — Electric accent: CTAs, active chips, prices, slider handle
- **Blue glow** `#6FA8FF` — Gradient ends, speculars, links on dark
- **Foam white** `#F4F7FB` — Primary text on dark, light card accents
- **Foam tint** `#E9F1FB` — Selected chips' text and gift-card ribbon
- **Steel** `#8A94A6` — Secondary text on dark
- **Hairline** `#23232C` — Hairline rules and card borders on dark

## Typography
- **Display: headlines, prices, times, nav** — Chakra Petch (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, menus** — Inter (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced candy-blue eyebrow over a Chakra Petch 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps.
- Radius: Automotive softness: 10px cards and chips, pill CTAs; photos 10px with a 1px blue top edge on frames.

## Motion
- Fade-rise reveals (12px, 450ms, 50ms stagger) via useInView, once — quick and glossy.
- Price changes tween 180ms on size switch; break-even counts to its new value 300ms; the specular sweep crosses cards in 1200ms on hover.
- The slider handle follows the pointer directly while dragging and settles with a 200ms spring on release.
- All motion (including the sweep and bead pattern) disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Dark glossy automotive photography from one shoot: a car under white foam in a blue-lit wash bay, mirror-gloss panel reflections, a swirled-vs-corrected paint pair at the same vantage, a pristine leather interior detail and self-serve vacuum stations — generic cars only, no badges, no plates, no people.

## Tone
Confident pit-lane English — short, glossy, lightly fun about clean cars. Every claim is about process and equipment, never miracle adjectives.

---
— Prompt by VibeFather · https://vibefather.ai/t/car-wash-and-detailing-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
