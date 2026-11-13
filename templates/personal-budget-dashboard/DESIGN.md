---
name: "Personal Budget Dashboard"
colors:
  canvas: "#F3F0E7"
  panel: "#FFFDF8"
  forest: "#183B32"
  forest_soft: "#DCE8DF"
  ink: "#202722"
  muted: "#626D65"
  rule: "#D8DDD3"
  chartreuse: "#DCE9A8"
  housing: "#2E5B4C"
  groceries: "#7B9870"
  transport: "#769A9D"
  dining: "#C97455"
  utilities: "#D0A24D"
  health: "#A66558"
  leisure: "#8D7892"
  flexible: "#6E8293"
  danger: "#A34F39"
typography:
  page_titles_major_totals_and_editorial_numerals: { family: "Fraunces Variable", weights: [500, 600] }
  navigation_controls_labels_body_copy_tables_and_dialogs: { family: "Inter Variable", weights: [400, 500, 600, 700] }
  transaction_ids_dates_chart_ticks_and_right_aligned_monetary_values: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base scale. Desktop sidebar is 232px, top utility bar is 64px, main content has 32px padding and a 1480px maximum width, panels use 24px padding, and major sections have 24px gaps. Page titles are Fraunces 34px/1.1 at 600, KPI figures are Fraunces 30px at 600, body and table text are Inter 14px/1.5, and labels are 12px at 600. Controls are at least 40px high on desktop and 44px on mobile. Below 900px use 20px main padding; at 390px use 16px padding, 16px panel padding, and 12px field gaps."
radius: "Use 14px for major panels and dialogs, 9px for inputs and buttons, 6px for small category swatches, and 999px only for compact status chips and progress tracks. Keep the summary as one ruled band rather than a grid of floating cards; avoid glass, glows, and excessive pill containers."
---

# Personal Budget Dashboard — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F0E7` — Warm ivory application background.
- **Panel** `#FFFDF8` — Summary band, charts, ledger, dialogs, and goal surfaces.
- **Forest** `#183B32` — Navigation rail, primary buttons, active states, and income text.
- **Forest Soft** `#DCE8DF` — Selected navigation, positive status backgrounds, and subtle highlights.
- **Ink** `#202722` — Headings, body text, and transaction amounts.
- **Muted** `#626D65` — Secondary labels, notes, axes, and helper text.
- **Rule** `#D8DDD3` — Hairline borders, table rules, input borders, and chart grid lines.
- **Chartreuse** `#DCE9A8` — Small budget-remaining highlight and original brand-mark detail, never body text.
- **Housing** `#2E5B4C` — Housing donut segment and category marker.
- **Groceries** `#7B9870` — Groceries donut segment and category marker.
- **Transport** `#769A9D` — Transport donut segment and category marker.
- **Dining** `#C97455` — Dining donut segment and category marker.
- **Utilities** `#D0A24D` — Utilities donut segment and category marker.
- **Health** `#A66558` — Health donut segment and category marker.
- **Leisure** `#8D7892` — Leisure donut segment and category marker.
- **Flexible** `#6E8293` — Family or context-specific category donut segment and marker.
- **Danger** `#A34F39` — Over-budget text, destructive actions, and validation errors with readable contrast.

## Typography
- **Page titles, major totals, and editorial numerals** — Fraunces Variable (OFL), weights 500/600. Self-host the font files.
- **Navigation, controls, labels, body copy, tables, and dialogs** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Transaction IDs, dates, chart ticks, and right-aligned monetary values** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale. Desktop sidebar is 232px, top utility bar is 64px, main content has 32px padding and a 1480px maximum width, panels use 24px padding, and major sections have 24px gaps. Page titles are Fraunces 34px/1.1 at 600, KPI figures are Fraunces 30px at 600, body and table text are Inter 14px/1.5, and labels are 12px at 600. Controls are at least 40px high on desktop and 44px on mobile. Below 900px use 20px main padding; at 390px use 16px padding, 16px panel padding, and 12px field gaps.
- Radius: Use 14px for major panels and dialogs, 9px for inputs and buttons, 6px for small category swatches, and 999px only for compact status chips and progress tracks. Keep the summary as one ruled band rather than a grid of floating cards; avoid glass, glows, and excessive pill containers.

## Motion
- Use 120–160ms ease-out transitions for hover, focus, active navigation, filter chips, and button states; calculated numbers always update immediately.
- On the first Overview render, reveal the donut with a 450ms stroke-dashoffset animation and daily bars with a 350ms 6px rise, staggered by no more than 8ms per bar.
- Hash-view changes crossfade and translate the incoming content 5px over 160ms without moving the shared navigation or delaying interaction.
- Dialogs fade their scrim and move the panel 8px upward over 180ms; goal bars interpolate width over 300ms after a target or transaction changes.
- Toasts rise 8px and fade over 160ms, remain readable for at least 4 seconds, and can be dismissed manually.
- Under prefers-reduced-motion, remove chart drawing, stagger, sliding, and interpolation; render final states immediately while preserving every focus and status change.

## Imagery
Use no photographs, stock images, generated images, avatars, or external illustrations. The rich budget interface is the visual anchor: a forest navigation rail, a ruled financial summary, a large multi-segment SVG donut, and a dense daily-spending chart. Draw an original [BRAND] mark as a 28px forest square containing three ivory ledger lines and one chartreuse dot. Use simple geometric category glyphs and the owner's initials only as functional UI accents. Lucide supplies interface icons; no bank, card-network, merchant, or payment-service marks.

## Tone
Calm, precise, encouraging, and nonjudgmental. Use short practical labels and plain helper text. Never shame overspending, promise savings, provide financial advice, or imply that sample data came from a real account.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-budget-dashboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
