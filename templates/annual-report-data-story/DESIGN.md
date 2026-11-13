---
name: "Annual Report Data Story"
colors:
  paper: "#F4EFE6"
  paper_deep: "#EAE3D6"
  ink: "#14171F"
  slate: "#5A5E66"
  stone: "#A9A294"
  hairline: "#D3CBBC"
  cobalt: "#1A3FE0"
typography:
  display_big_numerals_headlines_chart_values_at_28px_and_above: { family: "Bodoni Moda Variable", weights: [500] }
  long_read_letter_lede_takeaway_sentences_pull_quote_in_italic: { family: "Newsreader Variable", weights: [400, 500] }
  interface_rail_labels_axis_text_tables_and_buttons_always_with_tabular_nums: { family: "IBM Plex Sans", weights: [400, 500, 600] }
spacing: "Chapters after the cover sit in a main column with 200px left margin at 1024px and up, and 48px inner padding. Below 1024px the margin is 0 and padding is 16px. Chapter vertical padding is 144px on desktop and 88px on mobile. Rules are 1px Hairline."
radius: "Sharp everywhere: 0px on images, charts, bars and panels. Only buttons use 2px."
---

# Annual Report Data Story — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4EFE6` — Page background and the text color on photos and on Cobalt
- **Paper Deep** `#EAE3D6` — Alternating number panels and the donut chapter background
- **Ink** `#14171F` — Body text, numerals, primary chart series and bars
- **Slate** `#5A5E66` — Secondary text, axis labels and the third donut segment
- **Stone** `#A9A294` — Ghost line, prior-year bars, the fourth donut segment and land dots on the map
- **Hairline** `#D3CBBC` — 1px rules, chart gridlines and the rail track
- **Cobalt** `#1A3FE0` — The single accent: active line, highlighted bar and segment, markers, buttons and the closing chapter

## Typography
- **Display: big numerals, headlines, chart values at 28px and above** — Bodoni Moda Variable (OFL), weights 500. Self-host the font files.
- **Long read: letter, lede, takeaway sentences, pull quote in italic** — Newsreader Variable (OFL), weights 400/500. Self-host the font files.
- **Interface: rail, labels, axis text, tables and buttons, always with tabular-nums** — IBM Plex Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Chapters after the cover sit in a main column with 200px left margin at 1024px and up, and 48px inner padding. Below 1024px the margin is 0 and padding is 16px. Chapter vertical padding is 144px on desktop and 88px on mobile. Rules are 1px Hairline.
- Radius: Sharp everywhere: 0px on images, charts, bars and panels. Only buttons use 2px.

## Motion
- Default ease power3.out, durations 0.5 to 1.2s. Text enters with a 24px rise and a fade. Nothing bounces. Every trigger plays once, except the line chart steps, the parallax and the rail, which follow the scroll in both directions.
- Count-up: 1.6s power2.out from 0 to the final value when the panel's top reaches 65% of the viewport. Each number is stacked in one grid cell over an invisible copy of its final text, so its width never changes while it counts.
- Reduced motion: every number shows its final value, the line is fully drawn with the last year highlighted, bars and donut are complete, map dots and markers are visible with no pulse, no parallax, no smooth scrolling. Stepping past notes in the line chapter still moves the highlight, with no transition. The rail still updates.

## Imagery
Three documentary-style photographs from one shoot at blue hour, plus one matching portrait: deep blue shadows, warm sodium light and fine film grain. They sit square-cornered with no filters added. All charts, the map, the signature and icons are drawn in code as inline SVG.

## Tone
Plainspoken, exact and a little dry, like a good business editor. Short sentences, real units, no corporate filler. It never reads as a regulated filing.

---
— Prompt by VibeFather · https://vibefather.ai/t/annual-report-data-story · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
