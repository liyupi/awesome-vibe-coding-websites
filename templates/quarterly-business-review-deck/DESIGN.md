---
name: "Quarterly Business Review Deck"
colors:
  studio_white: "#FFFFFF"
  graphite_ink: "#111827"
  indigo_signal: "#4F46E5"
  warm_amber: "#F59E0B"
  soft_mist: "#F3F4F6"
  emerald_on_track: "#059669"
  rose_alert: "#E11D48"
typography:
  display_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  body_and_tables: { family: "Inter", weights: [400, 500, 600, 700] }
  financial_figures_and_slide_indices: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "Desktop presents a crisp 16:9 studio canvas (max 1320px, 44px padding) framed on a subtle cool-gray surround (#EEF0F4) with a 56px bottom presentation control bar. Mobile (<768px) adapts cleanly into single-column cards with >=44px controls and zero horizontal overflow."
radius: "10px for data panels, 6px for department tabs and buttons, 999px for traffic-light status badges."
---

# Quarterly Business Review Deck — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Studio White** `#FFFFFF` — Primary slide background
- **Graphite Ink** `#111827` — Headlines, primary numbers, and executive contrast panels
- **Indigo Signal** `#4F46E5` — Primary accent, ARR bars, active filters, and hero visual header
- **Warm Amber** `#F59E0B` — Attention metrics, at-risk OKRs, and amber highlights
- **Soft Mist** `#F3F4F6` — Subtle card surfaces and chart grid bands
- **Emerald On-Track** `#059669` — Positive deltas and on-track traffic lights
- **Rose Alert** `#E11D48` — Churn, contraction bars, and high-severity risks

## Typography
- **Display headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Body and tables** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Financial figures and slide indices** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Desktop presents a crisp 16:9 studio canvas (max 1320px, 44px padding) framed on a subtle cool-gray surround (#EEF0F4) with a 56px bottom presentation control bar. Mobile (<768px) adapts cleanly into single-column cards with >=44px controls and zero horizontal overflow.
- Radius: 10px for data panels, 6px for department tabs and buttons, 999px for traffic-light status badges.

## Motion
- Smooth directional slide transition (200ms ease-out) with prefers-reduced-motion fallback.
- Smooth count-up polish on the 4 headline KPI scoreboard metrics when Slide 02 becomes active.
- Hover tooltips and active bar highlighting on SVG waterfall, retention, and burn charts.
- All content visible by default with no hidden scroll-clip states.

## Imagery
Pure code-drawn Swiss data visuals: SVG ARR waterfall bridge, cohort sparklines, burn/runway dual-axis chart, traffic-light OKR meters, and Lucide icons. Zero external photos.

## Tone
Crisp, candid, quantitative, executive; plain numbers paired with direct takeaways.

---
— Prompt by VibeFather · https://vibefather.ai/t/quarterly-business-review-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
