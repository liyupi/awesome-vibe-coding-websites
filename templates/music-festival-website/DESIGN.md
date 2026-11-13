---
name: "Music Festival Website"
colors:
  ink: "#12072B"
  raised: "#1F0F45"
  line: "#3B2470"
  flare: "#FF2D55"
  tangerine: "#FF6A13"
  sun: "#FFC800"
  volt: "#19F5C1"
  paper: "#FFF6E5"
  haze: "#C9BEE8"
  lake: "#2438C9"
  sunset_gradient: "linear-gradient(100deg, #FFC800 0%, #FF6A13 45%, #FF2D55 100%)"
typography:
  display_hero_headline_act_names_section_headings_prices_map_labels_uppercase_line_height_0_92_letter_spacing_0_005em: { family: "Anton", weights: [400] }
  text_body_buttons_table_cells_16px_base_line_height_1_55: { family: "Instrument Sans Variable", weights: [400, 500, 600, 700] }
  mono_times_stages_dates_small_uppercase_labels_at_12_to_13px_with_0_06em_tracking: { family: "DM Mono", weights: [400, 500] }
spacing: "8px base. Gutter 32px desktop, 16px mobile. Section padding 96px desktop, 64px mobile. Content runs nearly full width up to a 1600px cap, because this is a poster and not a centered column. Dense information gets 8 to 12px row gaps."
radius: "0 on every block, photo, panel and table. 9999px only on buttons, tabs and legend chips."
---

# Music Festival Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#12072B` — Page background, deep violet ink, and text on gradient, Sun and Volt surfaces
- **Raised** `#1F0F45` — Panels, table rows, map ground
- **Line** `#3B2470` — 1px borders, map contours, inactive tracks
- **Flare** `#FF2D55` — Hot end of the sunset gradient, stage zones on the map, Friday tint
- **Tangerine** `#FF6A13` — Middle of the sunset gradient, food zones, schedule accents, Saturday tint
- **Sun** `#FFC800` — Bright end of the gradient, full-bleed schedule section, second-tier act names, camping zones
- **Volt** `#19F5C1` — The one electric accent: play button, active filters, selected states, focus rings, water zones, Sunday tint
- **Paper** `#FFF6E5` — Primary text on ink, first-aid zones
- **Haze** `#C9BEE8` — Secondary text and metadata on ink
- **Lake** `#2438C9` — The lake on the map only
- **Sunset gradient** `linear-gradient(100deg, #FFC800 0%, #FF6A13 45%, #FF2D55 100%)` — Hero headline fill, marquee band, primary ticket button, headliner names, closing band. Text on it is always Ink

## Typography
- **Display: hero headline, act names, section headings, prices, map labels. Uppercase, line-height 0.92, letter-spacing 0.005em** — Anton (OFL), weights 400. Self-host the font files.
- **Text: body, buttons, table cells. 16px base, line-height 1.55** — Instrument Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Mono: times, stages, dates, small uppercase labels at 12 to 13px with 0.06em tracking** — DM Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Gutter 32px desktop, 16px mobile. Section padding 96px desktop, 64px mobile. Content runs nearly full width up to a 1600px cap, because this is a poster and not a centered column. Dense information gets 8 to 12px row gaps.
- Radius: 0 on every block, photo, panel and table. 9999px only on buttons, tabs and legend chips.

## Motion
- Page wipe on load: a full-viewport sunset gradient panel shrinks with scaleY from 1 to 0, transform origin top, over 0.7s with power4.inOut, then is removed. It never blocks pointer events.
- Scroll reveals with GSAP ScrollTrigger: elements with data-reveal animate from y 28 and opacity 0.2 to their final state over 0.6s with power3.out, once, staggered 0.05s. Content must never start fully invisible, so still captures stay legible.
- Marquee: CSS translateX from 0 to -50% on a duplicated track, 28s linear infinite, paused on hover.
- Line-up filter: GSAP Flip, 0.6s power3.inOut, stagger 0.012s. Leaving names fade and scale to 0.8; entering names fade in from 0.8.
- Map: paths draw in with stroke-dashoffset over 1.2s on load, zones pop with back.out(1.6), stagger 0.04s.
- Prices in the ticket summary count to the new value over 0.35s using a GSAP tween on a number.
- prefers-reduced-motion: no page wipe, no reveals, marquee static, Flip replaced by an instant swap, map appears complete, and the hero idle state renders one still frame. When the visitor presses play the bars still follow the audio, but the disc pulse and embers stay off.

## Imagery
One shoot: warm 35mm documentary film photographs at golden hour under a saturated orange and magenta sky, with light haze and fine grain. Wide scenes show no identifiable faces. Performers are backlit, with faces in shadow. Act photos are shown as duotones: CSS grayscale(1) contrast(1.15) with a day-colored layer in mix-blend-mode multiply (Friday Flare, Saturday Tangerine, Sunday Volt) and a per-act object-position cycling 20%, 50%, 80%, so three photos read as many. Icons come from Lucide. The map is drawn entirely in code.

## Tone
Loud, warm, specific and a little funny, like a poster written by people who run the event. Short sentences and real logistics. Never corporate.

---
— Prompt by VibeFather · https://vibefather.ai/t/music-festival-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
