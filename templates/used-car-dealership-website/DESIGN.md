---
name: "Used Car Dealership Website"
colors:
  graphite: "#16181D"
  graphite_deep: "#101216"
  signal_yellow: "#FFD400"
  yellow_tint: "#FFF8DB"
  white: "#FFFFFF"
  cool_grey: "#F4F5F7"
  ink: "#17191E"
  steel: "#5A6069"
  hairline: "#E2E4E8"
typography:
  display_headlines_prices_monthly_payment_stats: { family: "Space Grotesk", weights: [500, 700] }
  body_paragraphs_filters_spec_tables_tabular_numbers: { family: "Inter", weights: [400, 500, 600, 700] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced steel eyebrow over a Space Grotesk 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px grid gaps; the inventory grid uses 20px gaps."
radius: "Crisp showroom edges: 8px on cards and photos, 6px on chips, pill CTAs; nothing rounder than 8px."
---

# Used Car Dealership Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Graphite** `#16181D` — Page ground, header, footer, tray
- **Graphite deep** `#101216` — Footer ground and dark panels
- **Signal yellow** `#FFD400` — The only loud color: prices, active filters, CTAs, compare highlights
- **Yellow tint** `#FFF8DB` — Selected chips and highlight notes on white
- **White** `#FFFFFF` — Cards and panels
- **Cool grey** `#F4F5F7` — Light section band and page body
- **Ink** `#17191E` — Headings and body on light
- **Steel** `#5A6069` — Secondary text on light; #9BA1AB on dark
- **Hairline** `#E2E4E8` — Hairline rules and card borders

## Typography
- **Display: headlines, prices, monthly payment, stats** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Body: paragraphs, filters, spec tables (tabular numbers)** — Inter (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced steel eyebrow over a Space Grotesk 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px grid gaps; the inventory grid uses 20px gaps.
- Radius: Crisp showroom edges: 8px on cards and photos, 6px on chips, pill CTAs; nothing rounder than 8px.

## Motion
- Route changes crossfade 180ms with a 12px rise via AnimatePresence; scroll resets to top per view.
- Inventory cards rise 12px staggered 40ms; filter changes re-grid with a 160ms fade.
- The compare tray slides up 240ms; heart and compare toggles pop 1.15× over 150ms; the calculator's monthly payment tweens 180ms on change.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Bright showroom photography from one shoot: generic, badge-free modern cars (sedan, SUV, hatch, pickup) shot at three-quarter angles on a light polished-concrete floor with soft overhead light, plus one clean interior dash — no logos, no license plates, no readable text, no people.

## Tone
Calm, specific, zero pressure — spec-sheet English with tabular numbers. Never a countdown, never ALL-CAPS urgency, never 'deal of the day'.

---
— Prompt by VibeFather · https://vibefather.ai/t/used-car-dealership-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
