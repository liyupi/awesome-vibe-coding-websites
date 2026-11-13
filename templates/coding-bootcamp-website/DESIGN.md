---
name: "Coding Bootcamp Website"
colors:
  chalk: "#FCFBF7"
  panel: "#FFFFFF"
  cream: "#F4F1E8"
  line: "#E4E0D4"
  ink: "#20221C"
  soft_ink: "#5D6055"
  green: "#2E7D54"
  green_deep: "#236242"
  green_mist: "#E7F1EA"
  clay: "#B4543A"
  slate_ink: "#0F1A14"
  good: "#2E7D54"
typography:
  display_h1_h2_phase_titles_plan_names_zilla_slab_campus_slab_serif: { family: "Zilla Slab", weights: [400, 600] }
  text_and_ui_body_table_forms_tags_inter_tabular_numerals_for_stats_and_seats: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(36px, 5vw, 60px) Zilla 600 line-height 1.08; H2 clamp(26px, 3.4vw, 40px) Zilla 600; phase titles Zilla 600 22px; body 15.5px / 1.7; standfirst 17px / 1.65 Soft Ink; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; captions and sample labels 12.5px; stats 32px Zilla 600 tabular. Buttons: height 48px, Inter 600 14px; primary Green fill with white text, secondary 1px Line border on Panel. Inputs/selects: height 48px, Panel fill, 1px Line border, focus Green border + 2px offset ring. Focus everywhere: 2px Green outline, 3px offset."
radius: "10px on cards, panels, buttons, inputs; 8px on table wrapper; 999px for chips."
---

# Coding Bootcamp Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Chalk** `#FCFBF7` — Page background throughout.
- **Panel** `#FFFFFF` — Cards, table, form panel.
- **Cream** `#F4F1E8` — Alternate sections (Curriculum, Tuition), chip fills.
- **Line** `#E4E0D4` — 1px hairlines: table rows, card borders, timeline rail.
- **Ink** `#20221C` — Headlines and body ink, icons.
- **Soft Ink** `#5D6055` — Standfirsts, captions, eyebrows, sample-label lines.
- **Green** `#2E7D54` — The one accent: primary buttons, phase numbers, links, focus ring, selected plans.
- **Green Deep** `#236242` — Hover and pressed primary.
- **Green Mist** `#E7F1EA` — Chip fills, hover rows, selected tracks.
- **Clay** `#B4543A` — Validation errors and the caveat asterisk.
- **Slate Ink** `#0F1A14` — Text on green fills.
- **Good** `#2E7D54` — Success states (alias kept simple).

## Typography
- **Display: H1, H2, phase titles, plan names — Zilla Slab, campus slab serif** — Zilla Slab (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, table, forms, tags — Inter; tabular numerals for stats and seats** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(36px, 5vw, 60px) Zilla 600 line-height 1.08; H2 clamp(26px, 3.4vw, 40px) Zilla 600; phase titles Zilla 600 22px; body 15.5px / 1.7; standfirst 17px / 1.65 Soft Ink; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; captions and sample labels 12.5px; stats 32px Zilla 600 tabular. Buttons: height 48px, Inter 600 14px; primary Green fill with white text, secondary 1px Line border on Panel. Inputs/selects: height 48px, Panel fill, 1px Line border, focus Green border + 2px offset ring. Focus everywhere: 2px Green outline, 3px offset.
- Radius: 10px on cards, panels, buttons, inputs; 8px on table wrapper; 999px for chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Campus-steady: one reveal per block, no theatrics.
- Reveal: sections wrapped in <Reveal> rise 12px over 600ms at 15% viewport (Motion whileInView, once); siblings stagger 70ms.
- Curriculum: phase rows reveal in order; the timeline rail draws as you scroll (scaleY driven by useScroll on the section); topic tags fade 40ms staggered.
- Cohort table: rows reveal with a 40ms stagger; hover fills Green Mist.
- Stats: figures count up once on first view (700ms, tabular).
- Plan cards: the middle (installments) card carries a Green 1.5px border and lifts 4px on hover; the selected state is visual only — no real checkout.
- Form: field errors fade in 160ms; the live character counter ticks; success crossfades 260ms to the Good panel.
- Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no reveals, no rail draw, no counting (final values shown); everything at rest and usable. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
Three instructor portraits, all AI-generated fictional people in one consistent style: natural light against a chalk-white studio wall, business-casual, warm and approachable, varied in age and ethnicity (a Black man in his 30s, a white woman in her 40s, an East Asian woman around 30), not resembling any real individuals. Portraits object-fit cover, 10px corners, 1px Line outline; captions in Inter 12.5px Soft Ink noting they are placeholder portraits. No other photos; everything else is typography, tables and chips. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Tone
Campus-plain: concrete weeks, named projects, honest sample labeling. One joke about vending machines.

---
— Prompt by VibeFather · https://vibefather.ai/t/coding-bootcamp-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
