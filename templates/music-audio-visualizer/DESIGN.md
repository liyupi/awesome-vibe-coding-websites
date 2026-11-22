---
name: "Music Audio Visualizer"
colors:
  midnight_stage: "#0B0820"
  electric_magenta: "#FF2E88"
  laser_cyan: "#29E3FF"
  frost_glass: "#161233"
  pure_chalk: "#F8FAFC"
typography:
  brand_wordmark_scene_titles: { family: "Space Grotesk", weights: [600, 700] }
  controls_shortcut_descriptions: { family: "Inter", weights: [400, 500, 600] }
  bpm_frequency_gains_key_caps: { family: "JetBrains Mono", weights: [500, 600] }
spacing: "Full-bleed 100dvh Three.js stage with compact translucent top telemetry/utility bar, centered lower Play pill before sound starts, collapsible Frequency Band Mixer card, and crisp 5-scene bottom dock fitting 1440×900 and 390×844 with zero overflow."
radius: "14px frosted midnight HUD cards; full-pill scene switcher and Play CTA."
---

# Music Audio Visualizer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight Stage** `#0B0820` — Deep violet-midnight 3D stage background
- **Electric Magenta** `#FF2E88` — Primary neon rings, bass flash, and Play CTA
- **Laser Cyan** `#29E3FF` — Secondary wireframe, mid/high frequency shimmer, and active indicators
- **Frost Glass** `#161233` — Translucent stage HUD pills and mixer drawer
- **Pure Chalk** `#F8FAFC` — Crisp high-contrast typography and shortcut badges

## Typography
- **Brand Wordmark & Scene Titles** — Space Grotesk (OFL), weights 600/700. Self-host the font files.
- **Controls & Shortcut Descriptions** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **BPM, Frequency Gains & Key Caps** — JetBrains Mono (OFL), weights 500/600. Self-host the font files.

## Spacing & shape
- Spacing: Full-bleed 100dvh Three.js stage with compact translucent top telemetry/utility bar, centered lower Play pill before sound starts, collapsible Frequency Band Mixer card, and crisp 5-scene bottom dock fitting 1440×900 and 390×844 with zero overflow.
- Radius: 14px frosted midnight HUD cards; full-pill scene switcher and Play CTA.

## Motion
- Lush glowing Neon Tunnel rendered synchronously on frame one before audio plays.
- Real-time 60fps geometry deformation, tunnel thrust, galaxy radial expansion, and liquid-chrome displacement driven by live Bass/Mid/High FFT bands.
- Automatic scene switching on rhythmic energy drops when Auto-Drop is enabled.
- Respect prefers-reduced-motion by softening camera sway and pulse amplitude while keeping audio meters and scene switching active.

## Imagery
100% procedural Three.js neon 3D geometry, glowing particles, and metallic shaders—zero external media files.

## Tone
Electric midnight stage-visual precision—minimal translucent HUD chrome letting neon 3D geometry command the entire viewport.

---
— Prompt by VibeFather · https://vibefather.ai/t/music-audio-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
