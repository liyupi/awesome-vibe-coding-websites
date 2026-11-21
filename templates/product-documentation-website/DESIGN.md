---
name: "Product Documentation Website"
colors:
  paper_white: "#FFFFFF"
  soft_rail: "#F6F7FB"
  graphite_ink: "#1C1E26"
  deep_obsidian: "#12141B"
  ultraviolet_accent: "#6C4CFF"
  lime_highlight: "#C3F53C"
  amber_caution: "#F59E0B"
  crimson_alert: "#E5484D"
typography:
  headings_display: { family: "Plus Jakarta Sans", weights: [600, 700, 800] }
  body_prose_ui: { family: "Inter", weights: [400, 500, 600] }
  code_endpoints_tables: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Crisp editorial reading grid: 60px sticky top bar, 260px left sidebar, 760px optimal-measure central reading column, 220px right 'On this page' TOC on desktop (1440px); 24px–32px section gaps."
radius: "6px for badges, buttons, and search inputs; 10px for dark graphite code frames, callouts, and interactive Try It panels."
---

# Product Documentation Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper White** `#FFFFFF` — Primary light-mode reading canvas and header surface
- **Soft Rail** `#F6F7FB` — Sidebar surface, table headers, and callout fills in light mode
- **Graphite Ink** `#1C1E26` — Primary text in light mode and dark code-block / dark-mode base surface
- **Deep Obsidian** `#12141B` — Dark-mode page background with #1C1E26 cards and #F2F4F8 foreground text
- **Ultraviolet Accent** `#6C4CFF` — Active sidebar item, TOC scroll indicator, primary buttons, and interactive links (lightened to #9B85FF in dark mode for AA contrast)
- **Lime Highlight** `#C3F53C` — Code syntax highlights, HTTP 200 status badge inside dark graphite code frames, and active code-tab underline
- **Amber Caution** `#F59E0B` — Warning callouts and v2 deprecation notice pills
- **Crimson Alert** `#E5484D` — Danger callouts and error status codes

## Typography
- **Headings & Display** — Plus Jakarta Sans (OFL), weights 600/700/800. Self-host the font files.
- **Body Prose & UI** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Code, Endpoints & Tables** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Crisp editorial reading grid: 60px sticky top bar, 260px left sidebar, 760px optimal-measure central reading column, 220px right 'On this page' TOC on desktop (1440px); 24px–32px section gaps.
- Radius: 6px for badges, buttons, and search inputs; 10px for dark graphite code frames, callouts, and interactive Try It panels.

## Motion
- Smooth 150ms active-indicator glide on sidebar links, synced code tabs, and right-hand TOC highlight.
- Crisp 160ms expand/collapse on sidebar groups and Cmd+K search modal fade.
- Respect prefers-reduced-motion across all transitions and smooth-scroll jumps.

## Imagery
Pure code-drawn technical graphics: geometric ultraviolet/lime SVG logo mark for [BRAND], inline SVG request-pipeline architecture diagram on the Quickstart page, crisp Lucide icons for callouts and controls, and high-contrast dark graphite code frames with lime highlights. No external photos.

## Tone
Clear, direct, engineering-first technical writing with concrete payloads, crisp parameter definitions, and zero marketing filler.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-documentation-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
