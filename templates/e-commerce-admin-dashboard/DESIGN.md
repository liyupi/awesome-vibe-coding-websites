---
name: "E-commerce Admin Dashboard"
colors:
  ground: "#F4F5F7"
  panel: "#FFFFFF"
  panel_2: "#F7F8FA"
  line: "#E3E5EA"
  ink: "#171A20"
  soft_ink: "#5F6570"
  indigo: "#4F46E5"
  indigo_deep: "#3B34B8"
  indigo_mist: "#EEEDFC"
  mint: "#2F9E6E"
  amber: "#C77E1D"
  ruby: "#C24141"
  slate_ink: "#12131A"
  good: "#2F9E6E"
typography:
  text_and_display_headings_labels_table_text_instrument_sans_workaday_grotesque: { family: "Instrument Sans", weights: [400, 500, 600] }
  mono_money_skus_order_ids_axis_labels_tabular_everywhere: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "8px base unit. Shell: fixed sidebar 232px (collapses to 64px icon rail with a toggle, remembered in localStorage), content max-width 1480px with 32px padding (20px under 900px). Panels: 20px inner padding, 10px radius, 1px Line border. View header rows 48px tall. Table rows 52px, 12px cell padding, mono numerals right-aligned. Type scale: view titles 24px 600; KPI figures JetBrains 600 28px tabular; table and body 14px / 1.5; captions 12.5px Soft Ink; sidebar items 14px 500 with 36px rows. Buttons: height 38px, Instrument 600 13.5px; primary Indigo fill with white text, ghost 1px Line border. Inputs: height 38px, Panel fill, 1px Line border, focus Indigo border + 2px offset ring. Focus everywhere: 2px Indigo outline, 3px offset."
radius: "10px on panels and drawers; 8px on buttons, inputs, chips; 999px for status chips and toasts."
---

# E-commerce Admin Dashboard — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ground** `#F4F5F7` — App background.
- **Panel** `#FFFFFF` — Cards, table, drawer, sidebar.
- **Panel 2** `#F7F8FA` — Table header rows, hover fill, sidebar footer.
- **Line** `#E3E5EA` — 1px hairlines: borders, table rows, dividers.
- **Ink** `#171A20` — Headings, body, icons.
- **Soft Ink** `#5F6570` — Secondary text, captions, axis labels.
- **Indigo** `#4F46E5` — The one accent: active nav, links, primary buttons, chart line, focus ring, selected rows.
- **Indigo Deep** `#3B34B8` — Hover and pressed primary.
- **Indigo Mist** `#EEEDFC` — Selected fills, chip backgrounds, chart gradient base.
- **Mint** `#2F9E6E` — Positive deltas, paid/packed/shipped chips, success toasts.
- **Amber** `#C77E1D` — Pending chips, restock hints.
- **Ruby** `#C24141` — Refunded chips, validation errors, overdue alerts.
- **Slate Ink** `#12131A` — Text on indigo fills.
- **Good** `#2F9E6E` — Alias kept for success semantics.

## Typography
- **Text and display: headings, labels, table text — Instrument Sans, workaday grotesque** — Instrument Sans (OFL), weights 400/500/600. Self-host the font files.
- **Mono: money, SKUs, order ids, axis labels — tabular everywhere** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Shell: fixed sidebar 232px (collapses to 64px icon rail with a toggle, remembered in localStorage), content max-width 1480px with 32px padding (20px under 900px). Panels: 20px inner padding, 10px radius, 1px Line border. View header rows 48px tall. Table rows 52px, 12px cell padding, mono numerals right-aligned. Type scale: view titles 24px 600; KPI figures JetBrains 600 28px tabular; table and body 14px / 1.5; captions 12.5px Soft Ink; sidebar items 14px 500 with 36px rows. Buttons: height 38px, Instrument 600 13.5px; primary Indigo fill with white text, ghost 1px Line border. Inputs: height 38px, Panel fill, 1px Line border, focus Indigo border + 2px offset ring. Focus everywhere: 2px Indigo outline, 3px offset.
- Radius: 10px on panels and drawers; 8px on buttons, inputs, chips; 999px for status chips and toasts.

## Motion
- Easing: --ease-io cubic-bezier(0.65, 0, 0.35, 1) for drawers; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for the rest. Office-hours quick: nothing over 320ms.
- View swap: panels fade 6px up over 240ms; the sidebar's active item swaps a 2px Indigo rail instantly.
- KPI deltas: the arrows and +/− colors set immediately; figures count to value over 500ms on first view of Overview.
- RevenueChart: the area path draws once on view (clip-path reveal 700ms); the crosshair bubble follows pointer with no easing lag.
- Orders table: filter changes reflow with a 140ms fade on rows (no layout animation); the selected row holds an Indigo Mist fill.
- OrderDrawer / editor panel: slide 320ms --ease-io with a Line-left border and soft shadow; scrim at 24% Ink.
- Toasts: rise 8px and fade in 180ms, auto-dismiss 2.8s with a thin progress bar, exit fade 160ms.
- Restock steppers: qty changes pop the figure 1→1.15→1 (120ms); the stock cell flashes Mint once.
- prefers-reduced-motion: reduce — no counting, no chart reveal (final state), no row fades; drawers still slide (they are navigation, capped at 150ms) or fade if the UA prefers. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs, no logos, no avatars: products render as MonogramTiles (two-letter tiles on Indigo Mist with Ink initials), orders carry customer initials dots, and every chart is inline SVG. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Tone
Back-office calm: exact numbers, short labels, no motivational copy. One dry joke in the empty-state row.

---
— Prompt by VibeFather · https://vibefather.ai/t/e-commerce-admin-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
