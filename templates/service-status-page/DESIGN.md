---
name: "Service Status Page"
colors:
  canvas: "#F3F6F2"
  surface: "#FFFFFF"
  ink: "#13241D"
  muted: "#63736B"
  line: "#D8E1DA"
  operational: "#16865A"
  operational_soft: "#E3F4E9"
  degraded: "#C48618"
  outage: "#D6574B"
  panel: "#10291F"
  panel_text: "#F2FAF5"
  panel_muted: "#A8BDB1"
  panel_bar: "#48D28D"
typography:
  display_and_section_headings: { family: "Manrope Variable", weights: [500, 600, 700] }
  body_navigation_controls_and_operational_copy: { family: "Inter Variable", weights: [400, 500, 600] }
  uptime_values_timestamps_chart_labels_and_compact_metadata: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8 px base rhythm. The content container is max-width 1180 px with 32 px desktop gutters and 20 px mobile gutters. Header height is 72 px. Hero padding is 72 px top and 80 px bottom on desktop, 40 px top and 56 px bottom on mobile. Major sections use 88 px desktop and 60 px mobile vertical padding. Cards use 28 px desktop and 20 px mobile padding; component rows use 22 px vertical spacing. Keep body copy measure below 64 characters."
radius: "Use 20 px for the aggregate chart and subscribe panel, 14 px for component and incident cards, 10 px for inputs and buttons, 3 px for uptime bars, and fully rounded status pills. Borders remain 1 px; use shadows sparingly with 0 18 px 50 px rgba(19,36,29,0.10) only on the hero chart and visible tooltip."
---

# Service Status Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F6F2` — Page background with a faint 32 px CSS grid at 3 percent ink opacity.
- **Surface** `#FFFFFF` — Component table, incident cards, form fields, and tooltip surfaces.
- **Ink** `#13241D` — Primary headings, body emphasis, and dark text.
- **Muted** `#63736B` — Secondary copy, timestamps, labels, and chart axis text.
- **Line** `#D8E1DA` — Hairline borders, row separators, and inactive tracks.
- **Operational** `#16865A` — Healthy status text, icons, and light-surface uptime bars.
- **Operational Soft** `#E3F4E9` — Overall-state badge and healthy pill backgrounds.
- **Degraded** `#C48618` — Degraded-performance bars and amber status indicators.
- **Outage** `#D6574B` — Outage bars and error indicators; always pair with text or an icon.
- **Panel** `#10291F` — Hero aggregate chart and subscribe panel background.
- **Panel Text** `#F2FAF5` — Primary text on dark panels.
- **Panel Muted** `#A8BDB1` — Secondary text and labels on dark panels.
- **Panel Bar** `#48D28D` — Healthy bars on the dark aggregate chart.

## Typography
- **Display and section headings** — Manrope Variable (OFL), weights 500/600/700. Self-host the font files.
- **Body, navigation, controls, and operational copy** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.
- **Uptime values, timestamps, chart labels, and compact metadata** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8 px base rhythm. The content container is max-width 1180 px with 32 px desktop gutters and 20 px mobile gutters. Header height is 72 px. Hero padding is 72 px top and 80 px bottom on desktop, 40 px top and 56 px bottom on mobile. Major sections use 88 px desktop and 60 px mobile vertical padding. Cards use 28 px desktop and 20 px mobile padding; component rows use 22 px vertical spacing. Keep body copy measure below 64 characters.
- Radius: Use 20 px for the aggregate chart and subscribe panel, 14 px for component and incident cards, 10 px for inputs and buttons, 3 px for uptime bars, and fully rounded status pills. Borders remain 1 px; use shadows sparingly with 0 18 px 50 px rgba(19,36,29,0.10) only on the hero chart and visible tooltip.

## Motion
- On initial load, fade and translate the hero copy and chart upward by 12 px over 420 ms with an 80 ms stagger; never hide the core status while waiting for animation.
- Grow healthy chart bars from 65 percent to full height over 320 ms with small grouped delays capped at 360 ms; degraded and outage bars appear without bouncing.
- Expand and collapse incident updates with a 180 ms opacity and grid-row transition while rotating the chevron 180 degrees; preserve keyboard focus and aria-expanded.
- Reveal chart inspection tooltips with a 120 ms fade and 4 px upward movement, clipped or flipped so they never cause horizontal overflow.
- Use a 160 ms color transition on buttons, navigation anchors, filter states, and form focus rings; smooth-scroll anchor navigation only when reduced motion is not requested.
- Under prefers-reduced-motion, remove entrance transforms, bar stagger, smooth scrolling, and accordion animation while leaving every state immediately visible and usable.

## Imagery
Use no photographs, generated bitmaps, people, or decorative stock illustrations. The first-screen visual anchor is a rich, code-built 90-day aggregate health panel with 90 individual bars, precise metrics, a legend, grid lines, and inspection tooltips. Build the small original [BRAND] glyph from three simple CSS status bars, and use currentColor Lucide icons everywhere else.

## Tone
Calm, precise, accountable, and quietly confident. Use plain operational language, useful timestamps, and direct explanations; never turn the page into a sales pitch or manufacture urgency.

---
— Prompt by VibeFather · https://vibefather.ai/t/service-status-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
