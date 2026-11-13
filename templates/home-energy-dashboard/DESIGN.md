---
name: "Home Energy Dashboard"
colors:
  ink: "#0B0F14"
  panel: "#11161D"
  raised: "#161D26"
  line: "#1F2833"
  line_strong: "#2A3542"
  text: "#E6EDF3"
  muted: "#8B98A8"
  faint: "#5A6675"
  lime: "#C6FF3D"
  lime_deep: "#8FBF1F"
  amber: "#FFB547"
  lime_glow: "rgba(198,255,61,0.10)"
  amber_glow: "rgba(255,181,71,0.12)"
typography:
  display_greeting_brand_wordmark_kpi_and_gauge_numbers_card_titles_on_mobile: { family: "Space Grotesk Variable (@fontsource-variable/space-grotesk)", weights: [500, 600] }
  ui_text_nav_labels_body_buttons: { family: "Inter Variable (@fontsource-variable/inter)", weights: [400, 500, 600] }
  data_axis_labels_timestamps_wattage_readouts_tooltip_values_chips: { family: "JetBrains Mono (@fontsource/jetbrains-mono)", weights: [400, 500] }
spacing: "4px base unit. Desktop main area: padding 28px top, 32px sides, 40px bottom, max-width 1320px. 12-column grid with a 20px gap. Card padding 20px, card header to content gap 16px. Mobile (<768px): padding 16px, grid gap 12px, card padding 16px, and 88px bottom padding to clear the tab bar. All numbers use tabular figures (.num)."
radius: "Cards 16px. Buttons, inputs, icon tiles and nav items 10px. Segmented controls 12px outer, 9px inner pill. Chips and switches fully rounded. Bars 6px top corners (rooms) and 3px (hours). Tooltips 10px."
---

# Home Energy Dashboard — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0B0F14` — App background, sidebar background, text on lime
- **Panel** `#11161D` — Card surfaces, segmented-control track
- **Raised** `#161D26` — Active nav item, icon tiles, tooltips, hover rows, drawers
- **Line** `#1F2833` — 1px borders, dividers, chart gridlines, gauge track
- **Line strong** `#2A3542` — Hover borders, inactive bars, switch-off track, crosshair
- **Text** `#E6EDF3` — Primary text and numbers
- **Muted** `#8B98A8` — Secondary text, nav labels, solar line
- **Faint** `#5A6675` — Axis labels, captions, section labels, off-state icons
- **Lime** `#C6FF3D` — The single accent: active range pill, usage line, on-state switches, good deltas, focus ring, live dot
- **Lime deep** `#8FBF1F` — Start of the gauge arc gradient (to Lime)
- **Amber** `#FFB547` — Peaks, peak-tariff band, bad deltas, peak-guard warning, notification dot
- **Lime glow** `rgba(198,255,61,0.10)` — Radial glow behind charts, good-delta chip background, off-peak band at 0.14
- **Amber glow** `rgba(255,181,71,0.12)` — Bad-delta chip background, peak band at 0.16

## Typography
- **Display: greeting, brand wordmark, KPI and gauge numbers, card titles on mobile** — Space Grotesk Variable (@fontsource-variable/space-grotesk) (OFL), weights 500/600. Self-host the font files.
- **UI text: nav, labels, body, buttons** — Inter Variable (@fontsource-variable/inter) (OFL), weights 400/500/600. Self-host the font files.
- **Data: axis labels, timestamps, wattage readouts, tooltip values, chips** — JetBrains Mono (@fontsource/jetbrains-mono) (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 4px base unit. Desktop main area: padding 28px top, 32px sides, 40px bottom, max-width 1320px. 12-column grid with a 20px gap. Card padding 20px, card header to content gap 16px. Mobile (<768px): padding 16px, grid gap 12px, card padding 16px, and 88px bottom padding to clear the tab bar. All numbers use tabular figures (.num).
- Radius: Cards 16px. Buttons, inputs, icon tiles and nav items 10px. Segmented controls 12px outer, 9px inner pill. Chips and switches fully rounded. Bars 6px top corners (rooms) and 3px (hours). Tooltips 10px.

## Motion
- UI easing cubic-bezier(0.22,1,0.36,1). Data tweens use easeInOutCubic (morphs) or easeOutCubic (count-ups and grow-ins), driven by requestAnimationFrame.
- On load, cards fade up 12px over 450ms, staggered 60ms in DOM order (KPI tiles first).
- KPI values count up from the previous value to the new one over 900ms easeOutCubic. Delta chips cross-fade over 200ms.
- Usage chart: on first view the usage line draws with stroke-dashoffset from full length to 0 over 1200ms, and the area fills from opacity 0 to 1 over 600ms after a 300ms delay. On range change, both series and the y-scale max morph over 700ms, and x labels fade out over 150ms and back in over 200ms.
- Bars grow from scaleY(0) with transform-origin at the bottom over 600ms easeOutCubic, staggered 40ms, the first time the card is 30% in view. On range change their heights tween over 500ms. On mode switch the chart cross-fades over 150ms and the bars grow in again.
- The range switcher pill slides with translateX over 320ms. The switch knob slides 16px over 180ms. The gauge arc and center number tween over 600ms. Device wattage counts to its new value over 400ms, and the toggled row flashes rgba(198,255,61,0.06) for 600ms.
- The live dot (top-bar pill and tariff now-marker) loops the pulse-ring animation every 2s.
- Drawers slide in over 280ms with a 200ms overlay fade. Toasts use toast-in and auto-dismiss after 3000ms.
- prefers-reduced-motion: no draw-ins, morphs, staggers, pulses or slides. Values and positions change instantly, and the live numbers still update every 2s without tweening.

## Imagery
No photos or bitmaps. Everything visual is SVG or CSS drawn in code: charts, sparklines, gauge, tariff strip, the logo mark, and initials avatars on Raised circles. Lucide icons are used at 16–18px with a 1.75 stroke. Depth comes only from 1px borders, soft radial lime glows behind the chart cards (radial-gradient(600px circle at 30% 0%, rgba(198,255,61,0.08), transparent 60%)) and drop-shadow glows on active data points. Tooltips and drawers use the shadow 0 8px 24px rgba(0,0,0,0.4). No light theme.

## Tone
Calm, precise, quietly technical. Short labels, sentence case, numbers first. Friendly but never cute. No exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/home-energy-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
