---
name: "SaaS App Dashboard Starter"
colors:
  white_surface: "#FFFFFF"
  slate_canvas: "#F4F7FB"
  slate_ink: "#172338"
  slate_muted: "#52627A"
  slate_line: "#E2E8F0"
  confident_cobalt: "#2F5BFF"
  signal_orange: "#FF7A1A"
  cobalt_tint: "#EDF2FF"
  orange_tint: "#FFF0E4"
  dark_canvas: "#0D1422"
  dark_surface: "#151F31"
  dark_raised: "#1E2B42"
  dark_primary_text: "#F2F6FC"
  dark_secondary_text: "#A8B6CC"
  dark_line: "#2C3B53"
  error: "#B42318"
typography:
  brand_page_headings_and_kpi_values: { family: "Manrope", weights: [600, 700] }
  ui_text_labels_tables_and_body: { family: "Inter", weights: [400, 500, 600] }
spacing: "Use a 4px base unit. Main desktop padding 28px, panel padding 20–24px, grid gaps 16–20px, label-to-field gap 8px, form groups 18px. Body 14px/1.5, dense labels 12px/1.4, headings 30px/1.2 and metric values 30px/1.15. Phone page padding 16px and all interactive touch targets at least 44px. Do not add a landing-page hero or large decorative whitespace above the overview."
radius: "Cards 14px, dialogs 16px, inputs/buttons 8px, small chips 6px, status pills 999px. Light panel shadow only 0 2px 12px rgba(23,35,56,0.025); overlays may use 0 20px 60px rgba(13,20,34,0.20). Keep borders crisp; avoid glass or heavy gradients."
---

# SaaS App Dashboard Starter — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **White surface** `#FFFFFF` — Light cards, sidebar, form panels and topbar.
- **Slate canvas** `#F4F7FB` — Light main canvas and subtle secondary areas.
- **Slate ink** `#172338` — Primary text in light mode; text on orange fills.
- **Slate muted** `#52627A` — Secondary light-mode text at AA contrast.
- **Slate line** `#E2E8F0` — Light borders, chart grids and dividers.
- **Confident cobalt** `#2F5BFF` — Primary buttons, active nav, large first-screen KPI surface and main chart series; white labels.
- **Signal orange** `#FF7A1A` — Comparison line, expansion sparkline, source accents and warm signal panel; never small orange text on white.
- **Cobalt tint** `#EDF2FF` — Selected light rows and subtle accents with dark cobalt text.
- **Orange tint** `#FFF0E4` — Expansion signal callout and warnings with dark ink.
- **Dark canvas** `#0D1422` — Dark-mode main background and auth art panel.
- **Dark surface** `#151F31` — Dark cards, navigation, inputs and dialogs.
- **Dark raised** `#1E2B42` — Dark hover surfaces and alternating UI emphasis.
- **Dark primary text** `#F2F6FC` — Primary dark-mode text.
- **Dark secondary text** `#A8B6CC` — Secondary dark-mode text at AA contrast.
- **Dark line** `#2C3B53` — Dark borders and chart grids.
- **Error** `#B42318` — Light inline errors with icons; use #FFB4AB for errors in dark mode.

## Typography
- **Brand, page headings and KPI values** — Manrope (OFL), weights 600/700. Self-host the font files.
- **UI text, labels, tables and body** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Main desktop padding 28px, panel padding 20–24px, grid gaps 16–20px, label-to-field gap 8px, form groups 18px. Body 14px/1.5, dense labels 12px/1.4, headings 30px/1.2 and metric values 30px/1.15. Phone page padding 16px and all interactive touch targets at least 44px. Do not add a landing-page hero or large decorative whitespace above the overview.
- Radius: Cards 14px, dialogs 16px, inputs/buttons 8px, small chips 6px, status pills 999px. Light panel shadow only 0 2px 12px rgba(23,35,56,0.025); overlays may use 0 20px 60px rgba(13,20,34,0.20). Keep borders crisp; avoid glass or heavy gradients.

## Motion
- All seeded first-screen content is immediately visible. No intro loader, skeleton waiting on a network call or delayed reveal.
- Use 120–180ms color/focus/overlay transitions with ease-out. Toasts enter 6px upward and remain about 4 seconds; actionable Undo toasts remain about 8 seconds and pause on hover/focus.
- Reduced motion removes translations, drawing and width animations while keeping all feedback and keyboard focus states.
- Respect focus-visible with a 2px cobalt outline and sufficient offset. Icon-only controls have accessible names. Hover is never the only way to operate a control.

## Imagery
All artwork is original SVG/CSS: a simple offset-square product mark, activity and sparkline charts, segmented doughnut, generic integration glyphs, outline empty states and the auth panel composition. No external bitmap, generated image, stock photo, portrait, real logo or recognizable product UI is used. The populated overview is the first-screen visual anchor; the prominent cobalt surface and orange comparison curve make the identity unmistakable.

## Tone
Clear, precise and quietly confident. Use short US English product copy, honest demo language at service boundaries and specific fictional records; no marketing superlatives.

---
— Prompt by VibeFather · https://vibefather.ai/t/saas-app-dashboard-starter · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
