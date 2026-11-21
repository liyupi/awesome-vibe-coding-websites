---
name: "Code Hosting Platform App"
colors:
  midnight_ink: "#0D1321"
  deep_slate: "#141C2F"
  border_slate: "#25324D"
  crisp_mist: "#E6EDF7"
  muted_steel: "#8FA2C2"
  mint_signal: "#3DDC97"
  coral_alert: "#FF6B6B"
  amber_highlight: "#FFB547"
  light_canvas: "#F4F7FB"
typography:
  display_headings: { family: "Space Grotesk", weights: [600, 700] }
  body_ui_controls: { family: "Inter", weights: [400, 500, 600] }
  code_diffs_hashes: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Compact developer-tool density: 56px sticky top bar, 1280px max-width workspace container, 16px–20px panel gutters, 8px–12px control rhythm, generous 20px code reading padding."
radius: "6px for buttons, inputs, badges, and file rows; 10px for panels, code frames, and modal sheets; 999px for status pills and avatar rings."
---

# Code Hosting Platform App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Midnight Ink** `#0D1321` — Primary dark-mode page canvas
- **Deep Slate** `#141C2F` — Cards, panels, top navigation bar, and code frame background
- **Border Slate** `#25324D` — 1px crisp structural hairlines and diff table dividers
- **Crisp Mist** `#E6EDF7` — Primary dark-mode foreground text
- **Muted Steel** `#8FA2C2` — Secondary labels, commit hashes, line numbers, and metadata
- **Mint Signal** `#3DDC97` — Diff additions, open issue/PR states, active indicators, and heatmap highs (darkened to #0E8A58 in light mode for AA contrast)
- **Coral Alert** `#FF6B6B` — Diff deletions, closed/rejected badges, and destructive actions (darkened to #D63B3B in light mode)
- **Amber Highlight** `#FFB547` — Starred state, pinned badges, review warnings, and release tags (darkened to #B8730B in light mode)
- **Light Canvas** `#F4F7FB` — Light-mode page background with #FFFFFF elevated surfaces and #0D1321 foreground text

## Typography
- **Display & Headings** — Space Grotesk (OFL), weights 600/700. Self-host the font files.
- **Body & UI Controls** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Code, Diffs & Hashes** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Compact developer-tool density: 56px sticky top bar, 1280px max-width workspace container, 16px–20px panel gutters, 8px–12px control rhythm, generous 20px code reading padding.
- Radius: 6px for buttons, inputs, badges, and file rows; 10px for panels, code frames, and modal sheets; 999px for status pills and avatar rings.

## Motion
- Subtle 140ms hover transitions on file rows, tabs, and reaction chips.
- Smooth 180ms slide-in drawer for the mobile file tree and command palette overlay with backdrop fade.
- Respect prefers-reduced-motion by disabling drawer/modal slide transitions and chart bar entrance transitions.

## Imagery
Pure code-drawn technical visuals: bespoke geometric SVG platform mark for [BRAND], geometric SVG avatar emblems for fictional contributors, crisp Lucide icons, custom SVG 52-week contribution heatmap, SVG commit branch-rail graph, and SVG code-frequency area/bar charts. No external photos or emoji icons.

## Tone
Crisp, technical, uncluttered, and authentic to real systems engineering teams—concrete commit messages, realistic multi-language source files, and zero marketing fluff.

---
— Prompt by VibeFather · https://vibefather.ai/t/code-hosting-platform-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
