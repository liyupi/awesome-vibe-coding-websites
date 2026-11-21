---
name: "Particle Morph 3D Landing Page"
colors:
  deep_space: "#07071A"
  obsidian_glass: "#10122D"
  aurora_teal: "#4EF2C3"
  ion_violet: "#8C5CFF"
  warm_white: "#F6F3EC"
typography:
  display_headlines_product_wordmark: { family: "Syne", weights: [700, 800] }
  body_copy_reviews_controls: { family: "Inter", weights: [400, 500, 600] }
  acoustic_telemetry_specs: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "Fixed full-viewport 3D particle canvas behind a 1240px scrolling editorial column; 64px sticky frosted header; generous 96px section rhythm with clear breathing room so each 3D particle silhouette shines unobstructed."
radius: "14px for frosted acoustic glass panels and pre-order cards; full-pill buttons and shape chapter indicators."
---

# Particle Morph 3D Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep Space** `#07071A` — Primary full-viewport cosmic background
- **Obsidian Glass** `#10122D` — Translucent editorial cards, spec tables, FAQ accordion, and pre-order drawer
- **Aurora Teal** `#4EF2C3` — Primary glowing particle color, active morph indicators, and primary CTAs
- **Ion Violet** `#8C5CFF` — Secondary particle gradient, acoustic wave highlights, and active swatches
- **Warm White** `#F6F3EC` — High-contrast display typography and crisp starlight particle cores

## Typography
- **Display Headlines & Product Wordmark** — Syne (OFL), weights 700/800. Self-host the font files.
- **Body Copy, Reviews & Controls** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Acoustic Telemetry & Specs** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Fixed full-viewport 3D particle canvas behind a 1240px scrolling editorial column; 64px sticky frosted header; generous 96px section rhythm with clear breathing room so each 3D particle silhouette shines unobstructed.
- Radius: 14px for frosted acoustic glass panels and pre-order cards; full-pill buttons and shape chapter indicators.

## Motion
- Continuous scroll-driven GLSL morphing across five 3D shapes: 01 Nebula → 02 Spatial Headset → 03 Sound Wave → 04 Listener Globe → 05 Brand Emblem.
- Smooth pointer/touch particle repulsion field pushing nearby particles radially with elastic spring return.
- Live interactive morph jump pills in a compact bottom-right chapter dock letting visitors either scroll naturally or preview any of the 5 shapes directly.
- Live Pricing colorway selector (Aurora Teal, Ion Violet, Solar Amber, Arctic Pearl) immediately recolors the 3D GPU particle cloud.
- Under prefers-reduced-motion, lock each section to its clean static target shape with zero continuous morph jitter.

## Imagery
Real-time Three.js custom GLSL GPU particle cloud sampled entirely from procedural code-built 3D geometry—no external model files or stock photos.

## Tone
Precision acoustic engineering meets atmospheric serenity—calm, sculptural, and tactile.

---
Inspired by Particle Morph 3D Product Showcase by @bruno_simon — https://threejs-journey.com/
— Prompt by VibeFather · https://vibefather.ai/t/particle-morph-3d-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
