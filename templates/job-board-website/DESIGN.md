---
name: "Job Board Website"
colors:
  warm_white: "#FBFAF6"
  panel: "#FFFFFF"
  line: "#E6E2D8"
  ink: "#20211C"
  soft_ink: "#63645C"
  fern: "#3E7A52"
  fern_deep: "#2F5F3F"
  fern_mist: "#E8F0E9"
  ochre: "#C08A1E"
  clay: "#C0603A"
  slate_ink: "#12271B"
  good: "#3E7A52"
typography:
  display_h1_h2_job_titles_wordmark_fraunces_ink_serif_with_presence: { family: "Fraunces", weights: [400, 600] }
  text_and_ui_body_filters_cards_forms_tabular_numerals_for_salaries: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; reading column max 760px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 clamp(34px, 4.6vw, 54px) Fraunces 600, line-height 1.08; H2 28px Fraunces 600; job titles 19px Fraunces 600; lead 17px Inter 400 / 1.65 at 90%; body 15.5px / 1.7; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; captions and posted labels 13px Soft Ink; salary bands 15px Inter 600 tabular. Buttons: height 46px, Inter 600 14px; primary Fern fill with white text, secondary 1px Line border on Panel. Inputs/selects: height 46px, Panel fill, 1px Line border, focus Fern border + 2px offset ring. Focus everywhere: 2px Fern outline, 3px offset."
radius: "10px on cards, panels, inputs, buttons; 999px for chips and the saved count."
---

# Job Board Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FBFAF6` — Page background throughout.
- **Panel** `#FFFFFF` — Cards, forms, apply panel.
- **Line** `#E6E2D8` — 1px hairlines: rules, borders, dividers, table rows.
- **Ink** `#20211C` — Headlines and body ink, icons.
- **Soft Ink** `#63645C` — Summaries, captions, posted labels, eyebrows.
- **Fern** `#3E7A52` — The one accent: links, primary buttons, salary bands, saved state, focus ring, active filters.
- **Fern Deep** `#2F5F3F` — Hover and pressed primary.
- **Fern Mist** `#E8F0E9` — Tag chips, remote chips, monogram tile fills, hover rows.
- **Ochre** `#C08A1E` — 'yours' / 'UNPOSTED' chips and the posted-by-you marker.
- **Clay** `#C0603A` — Validation errors and the overdue-style warnings (none by default).
- **Slate Ink** `#12271B` — Text on fern fills.
- **Good** `#3E7A52` — Form success, save confirmation.

## Typography
- **Display: H1, H2, job titles, wordmark — Fraunces, ink serif with presence** — Fraunces (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, filters, cards, forms; tabular numerals for salaries** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; reading column max 760px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 clamp(34px, 4.6vw, 54px) Fraunces 600, line-height 1.08; H2 28px Fraunces 600; job titles 19px Fraunces 600; lead 17px Inter 400 / 1.65 at 90%; body 15.5px / 1.7; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; captions and posted labels 13px Soft Ink; salary bands 15px Inter 600 tabular. Buttons: height 46px, Inter 600 14px; primary Fern fill with white text, secondary 1px Line border on Panel. Inputs/selects: height 46px, Panel fill, 1px Line border, focus Fern border + 2px offset ring. Focus everywhere: 2px Fern outline, 3px offset.
- Radius: 10px on cards, panels, inputs, buttons; 999px for chips and the saved count.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Broadsheet rhythm: quiet moves, nothing bounces.
- Reveal: sections and cards rise 10px over 500ms as they enter (Motion whileInView, once), siblings stagger 50ms — the listing staggers by row, not by card-shuffle.
- Filtering: cards dim 20% and sink 2px when filtered out (180ms) and the count line crossfades — rows keep their order; removed cards collapse height only after the fade (240ms total).
- SaveButton: icon fills with a 140ms scale pop; the SavedChip count ticks with a 160ms slide.
- Job page: the apply panel settles 8px on load; the Apply button is honest ('Apply — opens your mail client', a mailto: built from the company slug).
- Post form: the PreviewCard updates live with a 120ms micro-fade on each keystroke batch; validation errors fade in 160ms; the success toast rises 8px.
- Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no reveals, no dims (filtered cards hide immediately), no pops; everything sits at rest and works. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
One anchoring photograph: hero-office.webp, an editorial open-office scene (people at desks from behind or in soft side profile, faces not identifiable) used as the hero background under an Ink gradient. Everything else stays code-drawn: MonogramTiles for companies, chips, hairlines. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Tone
Broadsheet-plain: short lines, real salary bands, no 'rockstar ninja' anything. One dry joke in the empty state.

---
— Prompt by VibeFather · https://vibefather.ai/t/job-board-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
