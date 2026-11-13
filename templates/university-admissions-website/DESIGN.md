---
name: "University Admissions Website"
colors:
  collegiate_blue: "#1E3A5C"
  ink_navy: "#14273E"
  warm_stone: "#F5F0E5"
  deep_stone: "#E7DECC"
  parchment: "#FDFBF5"
  brass: "#B08A4F"
  slate_blue: "#4A5871"
typography:
  display_headlines_wordmark_program_names_net_cost_figure: { family: "Fraunces", weights: [600, 700] }
  body_paragraphs_filters_meta_forms: { family: "Source Sans 3", weights: [400, 600, 700] }
spacing: "8px base grid. Content shell max-width 1200px with 32px desktop and 20px mobile side padding. Header 84px. Desktop sections 104px vertical padding, mobile 64px. Program grid gap 20px. Prose max 64 characters per line."
radius: "Editorial and nearly square: 2px on cards, inputs, and photos; 999px full pills only for filter chips and level tags. Photos sit on a 1px deep-stone border with an 8px brass top rule on hover or featured cards."
---

# University Admissions Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Collegiate blue** `#1E3A5C` — Primary: buttons, hero scrim, footer band
- **Ink navy** `#14273E` — Headings and body text
- **Warm stone** `#F5F0E5` — Page ground and section bands
- **Deep stone** `#E7DECC` — Rails, chips, and hairline borders
- **Parchment** `#FDFBF5` — Cards and panels on stone
- **Brass** `#B08A4F` — Accent: rules, active filters, timeline nodes, slider thumbs
- **Slate blue** `#4A5871` — Secondary text and meta rows

## Typography
- **Display: headlines, wordmark, program names, net-cost figure** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, filters, meta, forms** — Source Sans 3 (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Content shell max-width 1200px with 32px desktop and 20px mobile side padding. Header 84px. Desktop sections 104px vertical padding, mobile 64px. Program grid gap 20px. Prose max 64 characters per line.
- Radius: Editorial and nearly square: 2px on cards, inputs, and photos; 999px full pills only for filter chips and level tags. Photos sit on a 1px deep-stone border with an 8px brass top rule on hover or featured cards.

## Motion
- Hero: the quad photograph settles from scale 1.06 to 1 over 900ms under a navy scrim that fades from 55% to its resting gradient; headline lines rise 18px with a 90ms stagger.
- Program finder: filtered cards exit and enter with 200ms fade-and-slide via AnimatePresence; the results count crossfades 160ms; the Bookmark toggle pops to 1.12 and fills brass over 180ms.
- Estimator: the net-cost number tweens over 320ms while the stacked cost bar re-partitions with 320ms width transitions; slider thumbs carry a 2px brass focus ring.
- Sections reveal once on scroll: 16px rise with a 480ms ease-out fade, sibling cards staggered 60ms.
- With prefers-reduced-motion: reduce, every transition above becomes a 100ms opacity change. No parallax, no scroll-jacking, no custom cursor, no autoplay media.

## Imagery
One photographic set, one golden-hour shoot: campus stone architecture, a riverwalk, studios, and green quads in a single warm grade — honeyed highlights, long shadows, soft haze, deep blue shadows, 35mm lens. Students appear only distant and from behind; no identifiable faces, no readable signage, no real landmarks. The wordmark, filter UI, timeline, and estimator are code-drawn; no crest, seal, or emblem is ever drawn.

## Tone
Warm, assured, and specific — the voice of a place that knows its worth without boasting. Editorial headlines, plain supporting sentences, believable invented numbers. Never pompous, never a sales pitch, never a real institution.

---
— Prompt by VibeFather · https://vibefather.ai/t/university-admissions-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
