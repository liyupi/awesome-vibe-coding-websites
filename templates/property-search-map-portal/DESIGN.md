---
name: "Property Search Map Portal"
colors:
  white: "#FFFFFF"
  teal: "#0F4C5C"
  tealsoft: "#E3EEF0"
  coral: "#FF6F59"
  sand: "#F4E9D8"
  ink: "#14252B"
  muted: "#5A6B70"
  line: "#E3E8E6"
  park: "#DCE8D4"
  water: "#BFDCE2"
typography:
  display_headings_prices_and_the_wordmark: { family: "Source Serif 4 Variable", weights: [600, 700] }
  body_ui: { family: "Public Sans Variable", weights: [400, 500, 600] }
  mono_measurements_counts_monthly_estimates: { family: "DM Mono", weights: [400, 500] }
spacing: "List cards p-4 with a 12px radius; section padding py-16; container max-w-[1160px] px-6 on the listing page; 8px rhythm."
radius: "Cards and photos 12px; buttons 8px; chips rounded-full; inputs 8px."
---

# Property Search Map Portal — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **white** `#FFFFFF` — Page ground and cards
- **teal** `#0F4C5C` — Deep teal: header, prices, primary buttons with white text
- **tealSoft** `#E3EEF0` — Soft panels and chips
- **coral** `#FF6F59` — Coral: map pins and clusters, active filter, highlights; fills carry teal text
- **sand** `#F4E9D8` — Map ground and secondary panels
- **ink** `#14252B` — Text
- **muted** `#5A6B70` — Secondary text
- **line** `#E3E8E6` — Borders and dividers
- **park** `#DCE8D4` — Parks on the map
- **water** `#BFDCE2` — River on the map

## Typography
- **Display / headings, prices and the wordmark** — Source Serif 4 Variable (OFL), weights 600/700. Self-host the font files.
- **Body / UI** — Public Sans Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono / measurements, counts, monthly estimates** — DM Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: List cards p-4 with a 12px radius; section padding py-16; container max-w-[1160px] px-6 on the listing page; 8px rhythm.
- Radius: Cards and photos 12px; buttons 8px; chips rounded-full; inputs 8px.

## Motion
- Map: zoom animates 250ms; a hovered or selected pin scales to 1.15 and lifts; a cluster click zooms in on it.
- List: cards fade in 200ms when the filter results change; the scroll position of the list resets to the top.
- Gallery: the main photo cross-fades 250ms.
- Mortgage: numbers update instantly as sliders move; the total changes colour for 300ms.
- Scroll reveals on the listing page: sections fade up 16px over 350ms, once; content is visible by default.
- prefers-reduced-motion: zoom, fades and reveals are instant; pins still respond to hover.

## Imagery
Bright, airy real-estate photographs from one shoot: wide-angle interiors and exteriors in natural light, warm wood, white walls, linen and plants, no people, no house numbers, no signs, no text. Each listing uses four of the six photographs in its gallery with its own cover.

## Tone
Calm and factual, like a good agent's email: prices, measurements and minutes, no real-estate exclamations.

---
— Prompt by VibeFather · https://vibefather.ai/t/property-search-map-portal · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
