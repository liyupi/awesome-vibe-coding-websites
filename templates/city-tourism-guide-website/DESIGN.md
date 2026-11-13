---
name: "City Tourism Guide Website"
colors:
  paper: "#F8F1E0"
  cream: "#FFFDF4"
  ink: "#2E2B25"
  coral: "#F0654A"
  teal: "#177E76"
  sunflower: "#F4B942"
typography:
  display_headlines: { family: "Fraunces Variable", weights: [600, 900] }
  body_ui_text: { family: "Karla", weights: [400, 500, 700] }
spacing: "Magazine rhythm: 96px section padding on desktop and 64px on mobile, one 1200px container, 32px grid gaps, a 72px sticky header; the hero fills 92vh."
radius: "Sharp editorial: 0px on color blocks and photos, 4px on chips and inputs, 999px only on pill buttons and count badges."
---

# City Tourism Guide Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F8F1E0` — Warm paper page ground and quiet sections.
- **Cream** `#FFFDF4` — Card surfaces, chips and stop rows on paper.
- **Ink** `#2E2B25` — Headlines, body text, the Relax block and the footer ground.
- **Coral** `#F0654A` — Eat block, primary CTA, events marquee band, count badge.
- **Teal** `#177E76` — See block, links, itinerary number circles, map dots.
- **Sunflower** `#F4B942` — Do block, highlight badges, sun glyph, scroll cue.

## Typography
- **Display / headlines** — Fraunces Variable (OFL), weights 600/900. Self-host the font files.
- **Body / UI text** — Karla (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: Magazine rhythm: 96px section padding on desktop and 64px on mobile, one 1200px container, 32px grid gaps, a 72px sticky header; the hero fills 92vh.
- Radius: Sharp editorial: 0px on color blocks and photos, 4px on chips and inputs, 999px only on pill buttons and count badges.

## Motion
- Scroll reveals: sections and cards fade up 24px over 0.5s with Motion whileInView, staggered 60-80ms per card.
- Events marquee slides left on a 38s linear loop, pauses on hover and focus, and renders static under prefers-reduced-motion.
- Planner feedback: the Plus button flips to Check with a 150ms scale pop and fires a small toast reading Saved to your shortlist; the count badge pops on each change.
- Card hover: block photos scale 1.04 and color-block headers shift 4px up; everything calms under prefers-reduced-motion.

## Imagery
Six sunny street photographs in one warm golden grade — street, market, lighthouse, harbor, cove, plaza — with no readable signage, no logos, and people only distant or from behind. Everything else is drawn: a hand-inked SVG city map, sun glyph, compass and favicon in the same palette.

## Tone
Sunny magazine voice: specific, opinionated, warm. Concrete stops with honest one-liners, no tourism-board clichés. Rewrite every stop, neighborhood and event to fit the supplied variables.

---
— Prompt by VibeFather · https://vibefather.ai/t/city-tourism-guide-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
