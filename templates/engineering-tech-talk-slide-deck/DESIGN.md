---
name: "Engineering Tech Talk Slide Deck"
colors:
  obsidian_stage: "#0B1016"
  terminal_surface: "#121A24"
  terminal_mint: "#34D399"
  electric_cyan: "#38BDF8"
  muted_slate: "#94A3B8"
  crisp_frost: "#F1F5F9"
  diff_rose: "#FB7185"
typography:
  display_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  body_copy: { family: "Inter", weights: [400, 500, 600] }
  code_diffs_telemetry_and_shortcuts: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Desktop uses a centered 16:9 dark stage (max 1320px, 44px padding) with subtle 1px #1E293B borders and a 56px bottom status bar. Mobile (<768px) stacks panels vertically with horizontally scrollable code blocks only inside their own bordered container (zero page horizontal overflow)."
radius: "10px for code windows and telemetry panels, 6px for node boxes and toggles, 999px for keyboard shortcut pills."
---

# Engineering Tech Talk Slide Deck — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Obsidian Stage** `#0B1016` — Primary dark presentation canvas
- **Terminal Surface** `#121A24` — Elevated code blocks, diagram panels, and cards
- **Terminal Mint** `#34D399` — Added code lines, throughput wins, healthy nodes, and active packet flow
- **Electric Cyan** `#38BDF8` — Primary technical highlights, callout badges, and active diagram stage
- **Muted Slate** `#94A3B8` — Secondary metadata, comments, and axis labels
- **Crisp Frost** `#F1F5F9` — High-contrast headlines and primary code text
- **Diff Rose** `#FB7185` — Removed code lines, bottlenecks, and latency spikes

## Typography
- **Display headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Body copy** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Code diffs, telemetry, and shortcuts** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Desktop uses a centered 16:9 dark stage (max 1320px, 44px padding) with subtle 1px #1E293B borders and a 56px bottom status bar. Mobile (<768px) stacks panels vertically with horizontally scrollable code blocks only inside their own bordered container (zero page horizontal overflow).
- Radius: 10px for code windows and telemetry panels, 6px for node boxes and toggles, 999px for keyboard shortcut pills.

## Motion
- Fast 180ms slide transitions with subtle horizontal translate; disabled under prefers-reduced-motion.
- Animated SVG packet dots flowing along the highlighted pipeline path on Slide 04.
- Interactive hover/click transitions on code diff line callouts and benchmark payload toggles.
- All content visible by default; no clip-path reveal traps.

## Imagery
Pure code-drawn technical graphics: subtle dot-grid dark canvas, interactive SVG distributed pipeline topology, p99 latency & throughput SVG charts, terminal code windows, and a deterministic geometric SVG QR pattern on the Q&A slide.

## Tone
Direct, technically rigorous, candid, zero-fluff engineering voice.

---
— Prompt by VibeFather · https://vibefather.ai/t/engineering-tech-talk-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
