---
name: "Online Code Playground"
colors:
  editor_dark: "#111318"
  panel_slate: "#181C24"
  deep_well: "#0C0E12"
  tangerine_run: "#FF7A1A"
  mint_success: "#3DDC97"
  signal_rose: "#FF5C72"
  chalk_text: "#E9EDF5"
  steel_muted: "#8B95A7"
typography:
  workspace_brand_gallery_headings: { family: "Space Grotesk", weights: [600, 700] }
  controls_labels: { family: "Inter", weights: [400, 500, 600] }
  code_editors_line_numbers_console: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Full-viewport IDE workbench: 52px top command bar, 36px pane headers, draggable 6px split divider, and collapsible 180px console drawer."
radius: "Crisp 8px editor cards, 6px toolbar buttons, 999px status and tag pills."
---

# Online Code Playground — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Editor Dark** `#111318` — Primary application shell and code pane canvas
- **Panel Slate** `#181C24` — Toolbars, tab strips, console header, and gallery cards
- **Deep Well** `#0C0E12` — Code editor gutter and live console viewport
- **Tangerine Run** `#FF7A1A` — Primary Run button, active split handle, and accent badges
- **Mint Success** `#3DDC97` — Autosave indicator, execution ok badge, and log highlights
- **Signal Rose** `#FF5C72` — Runtime console errors and warnings
- **Chalk Text** `#E9EDF5` — High-contrast primary UI and code text
- **Steel Muted** `#8B95A7` — Line numbers, secondary labels, and metadata

## Typography
- **Workspace Brand & Gallery Headings** — Space Grotesk (OFL), weights 600/700. Self-host the font files.
- **Controls & Labels** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Code Editors, Line Numbers & Console** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Full-viewport IDE workbench: 52px top command bar, 36px pane headers, draggable 6px split divider, and collapsible 180px console drawer.
- Radius: Crisp 8px editor cards, 6px toolbar buttons, 999px status and tag pills.

## Motion
- Smooth 150ms hover highlights on toolbar buttons and layout switcher pills
- Subtle mint pulse on the autosave dot when code changes are persisted to localStorage
- Instant live iframe re-render with execution duration readout in milliseconds
- Respect prefers-reduced-motion across transitions and gallery card hover states

## Imagery
Pure code-drawn IDE interface: live animated HTML/Canvas/Three.js preview inside the sandboxed iframe, plus crisp miniature live-style geometric SVG/CSS visual thumbnails for all 12 seeded gallery pens.

## Tone
Precision dark studio IDE: razor-sharp syntax colors, crisp hairline dividers, punchy tangerine run actions, and mint live-execution status telemetry.

---
— Prompt by VibeFather · https://vibefather.ai/t/online-code-playground · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
