---
name: "Sales CRM Dashboard"
colors:
  canvas: "#F7F8FA"
  panel: "#FFFFFF"
  chrome: "#EEF0F4"
  hairline: "#E3E6EB"
  ink: "#191D23"
  ink_soft: "#5C6470"
  indigo: "#3D56D6"
  indigo_deep: "#3146B0"
  indigo_mist: "#EDF0FC"
  good: "#188652"
  warn: "#B7791F"
  danger: "#C0392B"
typography:
  ui_text_nav_buttons_table_cells_deal_names_drawer_labels_empty_states_13_13_5px: { family: "Inter", weights: [400, 500, 600] }
  numbers_deal_values_totals_chart_ticks_stage_counts_ages_tabular_nums: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "4px base unit — dashboards are dense. App shell: sidebar 208px fixed, top bar 56px, content padding 20px. Kanban columns: 272px wide, 12px gaps, horizontal scroll of the whole board. Table rows 44px, cell padding 12px. Drawer 400px from the right, full-screen under 640px. Type scale: app title Inter 600 14px; nav items Inter 500 13.5px; deal value JetBrains Mono 500 13px tabular; deal company Inter 600 13.5px; metadata Inter 400 12.5px Ink Soft; table header Inter 600 11px uppercase letter-spacing 0.06em; empty state title Inter 600 14px with one 13px line under. Buttons: 32px high (primary Indigo fill, secondary Chrome fill with 1px Hairline border), 12.5px Inter 600. Inputs: 32px, Chrome fill, 1px Hairline border, focus 2px Indigo ring. Focus ring everywhere: 2px Indigo outline, 2px offset."
radius: "8px on cards, the drawer, inputs, buttons, avatars and tooltips. 999px only for badges, stage-count chips and avatars."
---

# Sales CRM Dashboard — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F7F8FA` — App background throughout.
- **Panel** `#FFFFFF` — Cards, columns, table rows, drawer, top bar surfaces.
- **Chrome** `#EEF0F4` — Sidebar background, table header, input fills, hover fills.
- **Hairline** `#E3E6EB` — 1px borders everywhere chrome meets panel.
- **Ink** `#191D23` — Primary text, deal names, chart labels.
- **Ink Soft** `#5C6470` — Secondary text, metadata, table headers, placeholder text.
- **Indigo** `#3D56D6` — The one accent: primary buttons, selected states, focus ring, chart bars, stage counts, link text.
- **Indigo Deep** `#3146B0` — Hover/pressed, drag-active column ring.
- **Indigo Mist** `#EDF0FC` — Selected row fill, Won stage tint, tooltip fill.
- **Good** `#188652` — Won badges, positive deltas, the toast success tick.
- **Warn** `#B7791F` — Aging badges (deal > 21 days), the stage-distribution 'Stalled' hint.
- **Danger** `#C0392B` — Lost badges and destructive button text only — never for errors that aren't real errors.

## Typography
- **UI text: nav, buttons, table cells, deal names, drawer labels, empty states (13–13.5px)** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Numbers: deal values, totals, chart ticks, stage counts, ages (tabular-nums)** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 4px base unit — dashboards are dense. App shell: sidebar 208px fixed, top bar 56px, content padding 20px. Kanban columns: 272px wide, 12px gaps, horizontal scroll of the whole board. Table rows 44px, cell padding 12px. Drawer 400px from the right, full-screen under 640px. Type scale: app title Inter 600 14px; nav items Inter 500 13.5px; deal value JetBrains Mono 500 13px tabular; deal company Inter 600 13.5px; metadata Inter 400 12.5px Ink Soft; table header Inter 600 11px uppercase letter-spacing 0.06em; empty state title Inter 600 14px with one 13px line under. Buttons: 32px high (primary Indigo fill, secondary Chrome fill with 1px Hairline border), 12.5px Inter 600. Inputs: 32px, Chrome fill, 1px Hairline border, focus 2px Indigo ring. Focus ring everywhere: 2px Indigo outline, 2px offset.
- Radius: 8px on cards, the drawer, inputs, buttons, avatars and tooltips. 999px only for badges, stage-count chips and avatars.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for drops and the drawer; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for tooltips and route swaps. Product-speed: 150–260ms, nothing slower.
- Route swaps: views crossfade 160ms with an 8px rise (AnimatePresence).
- Drag: the lifted clone follows the pointer at 1.02 scale with a soft shadow; the target column ring pulses once; drop settles the card into its slot with a 180ms translate; the origin ghost collapses 140ms. Escape cancels — the clone flies home 200ms.
- Deal card hover: lifts 1px with a Hairline→Indigo/30% border; the drag handle appears.
- Drawer: slides from x 100% to 0 over 240ms --ease-out; backdrop fades 160ms; field edits crossfade the value; a note posts with a 160ms rise; the timeline's new entry draws its tick.
- Charts: bars grow from the baseline 320ms --ease-out staggered 30ms on view enter; hover tooltip fades 120ms; the stage distribution's segments settle width-first.
- Toasts: bottom-center, rise 8px + fade 200ms, auto-dismiss 2.4s with a thin progress rule; aria-live polite.
- Table sort: the header arrow flips 150ms; rows reorder instantly (no FLIP — tables read fine without it).
- prefers-reduced-motion: reduce — no bar growth (render at full height), no drawer slide (appear), no clone flight (cancel = instant), no staggers. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
No images at all. Avatars are initials circles (Chrome fill, Ink initials); charts are SVG; the favicon is SVG; deal 'logos' are two-letter monograms. Icons: lucide-react only, stroke width 2, 14–18px — small and crisp.

## Tone
Terse product copy: button verbs, one-line empty states, no marketing voice anywhere in the app. Sample data carries believable B2B texture.

---
— Prompt by VibeFather · https://vibefather.ai/t/sales-crm-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
