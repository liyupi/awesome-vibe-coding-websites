---
name: "EV Charging Network Website"
colors:
  graphite: "#101214"
  raised: "#17191D"
  grid_line: "#24282D"
  volt: "#3CE97E"
  volt_deep: "#17603A"
  cloud: "#E8ECEF"
  steel: "#8A939B"
  amber: "#E0A63F"
typography:
  display_and_body_headlines_bullets_form_labels_technical_grotesque: { family: "Space Grotesk", weights: [500, 700] }
  mono_station_readouts_filter_chips_stats_prices_section_labels_uppercase_tracked_0_12em: { family: "JetBrains Mono", weights: [400, 500, 700] }
spacing: "Dense and engineered: sections py-24 (96px) desktop / py-16 (64px) mobile; content max-w-6xl px-6/px-10; panels carry 24px padding with 1px gridline hairlines; the map panel is the only full-height element."
radius: "Small and technical: 4px on chips, inputs and buttons, 8px on panels and the phone mockup; no pills, no large rounding."
---

# EV Charging Network Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Graphite** `#101214` — Page ground everywhere — dark blue-graphite, never pure #000.
- **Raised** `#17191D` — Map panel ground, phone mockup, form panels, the river in the map.
- **Grid line** `#24282D` — Street lines, hairlines, borders, the background grid texture, ring track.
- **Volt** `#3CE97E` — The one electric green: available stations, pulse rings, CTAs, active filter chips, the battery ring, price accents.
- **Volt deep** `#17603A` — Pressed and filled states on volt: chip fills, day-rate bar block, hover borders.
- **Cloud** `#E8ECEF` — Primary text — cool off-white for headlines and body.
- **Steel** `#8A939B` — Secondary text, meta rows, offline stations, mono captions.
- **Amber** `#E0A63F` — Strictly functional: busy stations and the night-rate block — never decorative.

## Typography
- **Display and body — headlines, bullets, form labels (technical grotesque)** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Mono — station readouts, filter chips, stats, prices, section labels (uppercase, tracked 0.12em)** — JetBrains Mono (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: Dense and engineered: sections py-24 (96px) desktop / py-16 (64px) mobile; content max-w-6xl px-6/px-10; panels carry 24px padding with 1px gridline hairlines; the map panel is the only full-height element.
- Radius: Small and technical: 4px on chips, inputs and buttons, 8px on panels and the phone mockup; no pills, no large rounding.

## Motion
- Map pulse: each available station's ring expands r 5→16 with opacity 0.6→0 over 2.4s, staggered by index×170ms — the city feels powered, not busy.
- Filter re-light: changing any filter chip transitions matching dots to full volt with pulses and non-matching dots to 15% opacity with pulses stopped (300ms); counts in the legend update.
- Dot hover: the station scales to 1.3 (150ms) and its mono tooltip card fades in above; leaving fades it out (120ms).
- Battery ring: animates stroke-dasharray 0→68% over 1.8s ease-out, once, when the app section enters; the kWh counter ticks up alongside it.
- Reveals: sections and cards fade up (y 18→0, 500ms ease-out) with 70ms stagger via Motion whileInView, once.
- Filter and form chips toggle to volt ground with graphite text (200ms); host-form steppers tick with a small y-bounce.
- prefers-reduced-motion: all pulses and the ring animation off (ring renders at 68% instantly), reveals become plain 200ms opacity fades, tooltips appear without motion.

## Imagery
Zero photography — everything is drawn in code on the graphite ground: the stylized city map (thin street grid, river, pulsing station constellation) is the hero anchor; the app preview is a CSS phone mockup; the rate bar and battery ring are SVG. Hairline grid textures back the panels. The only imagery is the network itself, lit in one electric green.

## Tone
Technical, calm, exact — short lines, real numbers, mono labels; the confidence of infrastructure, not the hype of startups.

---
— Prompt by VibeFather · https://vibefather.ai/t/ev-charging-network-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
