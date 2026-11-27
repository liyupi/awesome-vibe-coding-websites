---
name: "B2B Sales Proposal Slide Deck"
colors:
  ivory_canvas: "#F8F7F4"
  slate_ink: "#0F172A"
  royal_cobalt: "#2563EB"
  emerald_outcome: "#10B981"
  warm_stone: "#E6E4DD"
  muted_slate: "#475569"
typography:
  display_serif_headings: { family: "Fraunces", weights: [600, 700] }
  ui_and_body_copy: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] }
  metrics_codes_and_slide_counters: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "Desktop uses a centered 16:9 stage (max 1320px wide, 48px horizontal / 40px vertical inner padding) with disciplined whitespace above a 56px bottom presentation bar. Mobile (<768px) switches to full-width scrollable slide cards with 20px padding and stacked single-column layouts."
radius: "12px for metric and tier cards, 8px for diagram nodes and buttons, 999px for status pills."
---

# B2B Sales Proposal Slide Deck — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ivory Canvas** `#F8F7F4` — Primary slide background and stage surface
- **Slate Ink** `#0F172A` — Primary headlines, body text, and dark executive contrast blocks
- **Royal Cobalt** `#2563EB` — Primary accent, active diagram paths, interactive controls, and hero visual anchor
- **Emerald Outcome** `#10B981` — ROI gains, SLA guarantees, positive deltas, and verified badges
- **Warm Stone** `#E6E4DD` — Hairline borders, card dividers, and grid tracks
- **Muted Slate** `#475569` — Secondary captions, axis labels, and metadata

## Typography
- **Display serif headings** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **UI and body copy** — Plus Jakarta Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **Metrics, codes, and slide counters** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Desktop uses a centered 16:9 stage (max 1320px wide, 48px horizontal / 40px vertical inner padding) with disciplined whitespace above a 56px bottom presentation bar. Mobile (<768px) switches to full-width scrollable slide cards with 20px padding and stacked single-column layouts.
- Radius: 12px for metric and tier cards, 8px for diagram nodes and buttons, 999px for status pills.

## Motion
- Crisp horizontal slide cross-translate (220ms cubic-bezier(0.22, 1, 0.36, 1)) between slides, disabled under prefers-reduced-motion.
- Animated SVG data-flow pulse along active connectors when inspecting architecture nodes.
- Smooth number transitions on ROI calculator readouts as sliders move.
- All slide content renders visible by default without scroll-clip traps.

## Imagery
100% code-drawn vector visuals: architectural pipeline diagrams, SVG bar and payoff charts, geometric cover artwork with live deal summary panel, and crisp Lucide iconography. No photographs or external images.

## Tone
Confident, analytical, concise, boardroom-ready; concrete operational metrics without hype or vague buzzwords.

---
— Prompt by VibeFather · https://vibefather.ai/t/b2b-sales-proposal-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
