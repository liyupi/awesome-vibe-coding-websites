---
name: "Brand Guidelines Website"
colors:
  ink: "#0D1B3D"
  signal: "#FFE14D"
  harbor: "#1F4E8C"
  white: "#FFFFFF"
  mist: "#F4F6FA"
  cloud: "#DDE3EE"
  steel: "#5B6478"
typography:
  display_wordmark_page_titles_specimens: { family: "Unbounded Variable", weights: [500, 700] }
  body_ui: { family: "Outfit Variable", weights: [400, 500, 600] }
  mono_values_sizes_code: { family: "Space Mono", weights: [400] }
spacing: "Sidebar 264px; content max-w-[960px] with px-10; section blocks py-16 with 1px dividers; cards 14px radius with a 1px border; 8px rhythm."
radius: "Cards 14px; buttons 8px; swatches 10px; the mark has 6px corners on its square."
---

# Brand Guidelines Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **ink** `#0D1B3D` — Deep blue: text and sidebars in light mode, page ground in dark mode, the brand's primary colour
- **signal** `#FFE14D` — Electric yellow: highlights, focus rings, the active nav item, the mark; always with ink text
- **harbor** `#1F4E8C` — A mid blue for links and secondary elements in light mode
- **white** `#FFFFFF` — Page ground and cards in light mode
- **mist** `#F4F6FA` — Subtle panels and code blocks
- **cloud** `#DDE3EE` — Borders and dividers
- **steel** `#5B6478` — Secondary text in light mode

## Typography
- **Display / wordmark, page titles, specimens** — Unbounded Variable (OFL), weights 500/700. Self-host the font files.
- **Body / UI** — Outfit Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono / values, sizes, code** — Space Mono (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: Sidebar 264px; content max-w-[960px] with px-10; section blocks py-16 with 1px dividers; cards 14px radius with a 1px border; 8px rhythm.
- Radius: Cards 14px; buttons 8px; swatches 10px; the mark has 6px corners on its square.

## Motion
- Search results and copy feedback fade in 150ms; a copied value shows a 'Copied' chip for 1.5 seconds.
- Motion demos: pressing Play moves a square along a 240px track with the chosen easing and duration; the curve's dot travels the plotted path at the same time.
- Stagger demo: six tiles rise 16px and fade in with a 40ms stagger.
- Theme switch cross-fades colours 200ms; a flashed subsection gets a signal-yellow outline that fades out over 1.2 seconds.
- prefers-reduced-motion: demos jump to their end state when played, the theme and flashes switch instantly, and the page itself animates nothing.

## Imagery
Nothing photographic. The logo, icons, illustration examples, duotone scenes, component previews and template miniatures are all drawn in code with SVG, CSS and HTML. Deep blue, electric yellow, a mid blue and neutrals on strict grids.

## Tone
Precise and helpful, like good documentation: short rules, concrete examples, no branding mysticism.

---
— Prompt by VibeFather · https://vibefather.ai/t/brand-guidelines-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
