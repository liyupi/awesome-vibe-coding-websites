---
name: "Product Roadmap Presentation Deck"
colors:
  deep_graphite: "#0F1117"
  card_surface: "#171B26"
  crisp_white: "#F8FAFC"
  electric_blue: "#3B82F6"
  signal_lime: "#A3E635"
  slate_muted: "#94A3B8"
typography:
  display_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  ui_and_body: { family: "Inter", weights: [400, 500, 600, 700] }
  tracks_milestones_and_slide_counters: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Desktop presents a centered 16:9 dark stage (max 1320px, 44px padding) above a 56px bottom presentation bar. Mobile (<768px) adapts into single-column cards with >=44px controls and zero horizontal overflow."
radius: "12px for UI mockups and roadmap cards, 8px for filter buttons, 999px for track badges."
---

# Product Roadmap Presentation Deck — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep Graphite** `#0F1117` — Primary dark presentation canvas
- **Card Surface** `#171B26` — Elevated roadmap cards, UI mockups, and chart panels
- **Crisp White** `#F8FAFC` — Primary display headlines and body text
- **Electric Blue** `#3B82F6` — Engineering track, primary interactive filters, and hero visual highlight
- **Signal Lime** `#A3E635` — Shipped velocity, beta lift deltas, active milestones, and high-contrast accent pills (paired with #0F1117 dark text)
- **Slate Muted** `#94A3B8` — Secondary labels, descriptions, and grid axes

## Typography
- **Display headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **UI and body** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Tracks, milestones, and slide counters** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Desktop presents a centered 16:9 dark stage (max 1320px, 44px padding) above a 56px bottom presentation bar. Mobile (<768px) adapts into single-column cards with >=44px controls and zero horizontal overflow.
- Radius: 12px for UI mockups and roadmap cards, 8px for filter buttons, 999px for track badges.

## Motion
- Smooth 200ms directional slide transitions respecting prefers-reduced-motion.
- Live interactive filter transitions on the Now / Next / Later roadmap board.
- Interactive toggles inside the 3 code-rendered UI feature mockups.
- All content visible immediately without scroll-clip reveal traps.

## Imagery
100% code-rendered product UI mockups, SVG feedback charts, dependency Gantt diagrams, beta retention curves, and Lucide icons. Zero external photos.

## Tone
Clear, opinionated, user-evidence-driven, and product-craft focused.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-roadmap-presentation-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
