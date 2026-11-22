---
name: "Developer Utilities Toolbox"
colors:
  paper_white: "#FBFBF9"
  sheet_white: "#FFFFFF"
  ink_black: "#15171A"
  slate_muted: "#59606B"
  electric_lime: "#A3E635"
  deep_moss: "#3F6212"
  obsidian_dark: "#101215"
  graphite_panel: "#171B20"
typography:
  display_tool_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  ui_body_labels: { family: "Inter", weights: [400, 500, 600] }
  code_payloads_tabular_metrics: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Compact engineering grid: 264px fixed desktop sidebar with 24px–32px main workspace padding, 16px panel gutters, and 12px inner toolbar rhythm."
radius: "Crisp 8px containers, 6px inputs and buttons, 999px status pills."
---

# Developer Utilities Toolbox — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper White** `#FBFBF9` — Light mode primary canvas background
- **Sheet White** `#FFFFFF` — Elevated workbench panels and cards in light mode
- **Ink Black** `#15171A` — Primary text, active pills, and crisp structural borders
- **Slate Muted** `#59606B` — Secondary labels, descriptions, and line numbers (WCAG AA)
- **Electric Lime** `#A3E635` — Active route indicator, primary action highlights, and local-safe pulse
- **Deep Moss** `#3F6212` — High-contrast accent text on light lime surfaces
- **Obsidian Dark** `#101215` — Dark mode primary canvas background
- **Graphite Panel** `#171B20` — Dark mode elevated cards and editor wells

## Typography
- **Display & Tool Headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **UI Body & Labels** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Code, Payloads & Tabular Metrics** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Compact engineering grid: 264px fixed desktop sidebar with 24px–32px main workspace padding, 16px panel gutters, and 12px inner toolbar rhythm.
- Radius: Crisp 8px containers, 6px inputs and buttons, 999px status pills.

## Motion
- 140ms ease-out hover highlights and active lime rail slide on sidebar items
- 160ms scale-and-fade entrance on the Cmd+K command palette modal
- Brief 1.2s lime checkmark confirmation state on Copy buttons
- Respect prefers-reduced-motion by disabling transforms and transitions

## Imagery
Pure code-drawn technical UI: crisp Lucide icons, precision SVG contrast gauges, sample inline geometric SVG for Image-to-Data-URI, and subtle dot-grid paper texture on empty/overview headers.

## Tone
Technical stationery: crisp hairline borders, generous breathing room, exact tabular monospace readouts, punchy lime highlights, and zero marketing fluff.

---
— Prompt by VibeFather · https://vibefather.ai/t/developer-utilities-toolbox · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
