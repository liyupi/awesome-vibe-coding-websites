---
name: "Night Market Food Festival"
colors:
  indigo_night: "#131233"
  raised_indigo: "#1B1A42"
  lantern_amber: "#FFB25E"
  neon_pink: "#FF5FA2"
  warm_cream: "#FFF4E2"
  soft_lilac: "#AFA9D8"
  hairline_indigo: "#2E2C5E"
typography:
  display_headline_section_titles_tier_names: { family: "Bricolage Grotesque Variable", weights: [700, 800] }
  body_paragraphs_chips_schedule_forms: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] }
spacing: "8px base grid. Shell max-width 1120px with 32px desktop and 20px mobile side padding. Header 72px. Sections 96px vertical padding on desktop, 64px on mobile. Map chips wrap at 12px gaps; schedule rows 16px vertical padding; prose max 62 characters per line."
radius: "16px on cards, panels, photos and the map plate; 999px pills for chips, buttons and badges; 12px on inputs and the info card's inner elements."
---

# Night Market Food Festival — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Indigo night** `#131233` — Page ground
- **Raised indigo** `#1B1A42` — Cards, panels, the map plate, form fields
- **Lantern amber** `#FFB25E` — Working accent: CTAs, active chips, glowing pins, accent words
- **Neon pink** `#FF5FA2` — Highlight accent: badges, links, one glow word, stage markers
- **Warm cream** `#FFF4E2` — Primary text on indigo
- **Soft lilac** `#AFA9D8` — Secondary text, metadata, inactive chips
- **Hairline indigo** `#2E2C5E` — Dividers, card borders, lane lines

## Typography
- **Display: headline, section titles, tier names** — Bricolage Grotesque Variable (OFL), weights 700/800. Self-host the font files.
- **Body: paragraphs, chips, schedule, forms** — Plus Jakarta Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Shell max-width 1120px with 32px desktop and 20px mobile side padding. Header 72px. Sections 96px vertical padding on desktop, 64px on mobile. Map chips wrap at 12px gaps; schedule rows 16px vertical padding; prose max 62 characters per line.
- Radius: 16px on cards, panels, photos and the map plate; 999px pills for chips, buttons and badges; 12px on inputs and the info card's inner elements.

## Motion
- Cuisine filter changes crossfade pin states over 240ms: matches gain an amber glow ring and scale 1.05 once, non-matches fade to 25% opacity; stages and lanes never move.
- The vendor info card slides in beside the map over 240ms on desktop and rises as a bottom sheet over 280ms on mobile; it closes with an X.
- Schedule rows reveal in a 60ms stagger; hovering a row slides a 2px amber underline under the time block.
- The hero scrims and headline rise 16px in an 80ms stagger on load; photos settle from scale 1.03 over 600ms.
- Sections reveal once on scroll with a 14px rise and a 420ms fade, staggered 60ms.
- Under prefers-reduced-motion every animation becomes an instant state change; pin filters and the info card stay fully functional.

## Imagery
Six photographs from one market shoot after dusk: deep indigo sky, strings of warm amber paper lanterns, out-of-focus neon glows, steam drifting through lantern light, 35mm lens, gentle film grain, one consistent dusk grade with rich shadows and warm highlights. People appear only as distant backs or silhouettes — no identifiable faces — and no shot contains readable signage, text, or logos.

## Tone
Warm night-out energy — a friend waving you down a lantern-lit lane. Short lines, honest demo notes in plain sight, glow used like lantern light, not like a nightclub.

---
— Prompt by VibeFather · https://vibefather.ai/t/night-market-food-festival · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
