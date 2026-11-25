---
name: "Stock Trading Dashboard"
colors:
  near_black: "#0B0E14"
  up_green: "#16C784"
  down_red: "#EA3943"
  accent_blue: "#3B82F6"
  panel_graphite: "#111721"
  rule_steel: "#283444"
  ice_white: "#ECF2FA"
  muted_steel: "#A7B5C8"
typography:
  desk_headings_and_ui: { family: "Barlow", weights: [400, 500, 600, 700] }
  prices_and_symbols: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "A 58px masthead, 24px desktop outer margins, 12px panel gaps, 16px panel padding, 36–46px data rows. At 1440px use a ~240px watchlist, flexible central chart and ~300px order desk. On narrow screens use one column, chart first and touch-friendly controls."
radius: "4px buttons and inputs, 7px framed panels, flat surfaces and fine steel seams."
---

# Stock Trading Dashboard — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Near-black** `#0B0E14` — Terminal canvas and chart ground
- **Up green** `#16C784` — Rising candles, bids and signed gains
- **Down red** `#EA3943` — Falling candles, asks and loss marks; supplement with signs and lighter text when required for AA
- **Accent blue** `#3B82F6` — Selection rail, chart overlay and trade action with near-black text
- **Panel graphite** `#111721` — Panel fill and toolbar
- **Rule steel** `#283444` — Chart lattice and fine separators
- **Ice white** `#ECF2FA` — Primary and numerical text
- **Muted steel** `#A7B5C8` — Secondary labels

## Typography
- **Desk headings and UI** — Barlow (OFL), weights 400/500/600/700. Self-host the font files.
- **Prices and symbols** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: A 58px masthead, 24px desktop outer margins, 12px panel gaps, 16px panel padding, 36–46px data rows. At 1440px use a ~240px watchlist, flexible central chart and ~300px order desk. On narrow screens use one column, chart first and touch-friendly controls.
- Radius: 4px buttons and inputs, 7px framed panels, flat surfaces and fine steel seams.

## Motion
- Let trades arrive every two seconds from a seeded walk, briefly tinting only the changed price.
- Respect reduced motion by removing animated flashes and transitions while keeping data fresh.

## Imagery
Use a small original blue stepped-bar mark in the masthead, six original instrument glyphs formed from lines and polygons, crisp hand-drawn-in-code candle wicks, volume bars, miniature price traces and an allocation ring. Give the selected chart visual precedence. No photographs.

## Tone
Economical US English desk labels, precise signed prices and plain feedback about what happened.

---
— Prompt by VibeFather · https://vibefather.ai/t/stock-trading-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
