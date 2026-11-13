---
name: "Industrial Robotics Company Website"
colors:
  steel: "#ECEEF0"
  panel: "#FFFFFF"
  panel_2: "#F6F7F8"
  line: "#D8DCE0"
  chip: "#F1F3F5"
  ink: "#1D2126"
  slate: "#4E565E"
  faint: "#8A939C"
  orange: "#E8590C"
  orange_deep: "#C44908"
  orange_tint: "#FCE9DF"
typography:
  display_h1_clamp_40px_5vw_64px_line_height_1_05_letter_spacing_0_01em_weight_700_h2_clamp_28px_3_4vw_42px_weight_700_card_and_arm_titles_20_22px_weight_600: { family: "Saira Variable", weights: [600, 700] }
  text_body_16px_1_6_subheads_17px_nav_14px_buttons_15px_weight_600: { family: "Barlow Variable", weights: [400, 500, 600] }
  mono_spec_chips_table_keys_calculator_values_section_labels_11_12px_letter_spacing_0_12em_uppercase_captions: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "8px base. Container max-width 1180px with 24px side padding (20px below 640px). Sections 104px vertical padding on desktop, 76px on mobile. Section headers 48px below. Cards pad 24-28px; spec table rows 14px tall cells."
radius: "Sharp industrial: cards and photos 6px; chips 3px; buttons and inputs 4px; slider tracks square. No pills anywhere."
---

# Industrial Robotics Company Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **steel** `#ECEEF0` — Page background, light steel grey
- **panel** `#FFFFFF` — Cards, spec sheet, calculator, form
- **panel-2** `#F6F7F8` — Inset areas, chips, footer base
- **line** `#D8DCE0` — Hairline borders and table rules
- **chip** `#F1F3F5` — Mono chip background
- **ink** `#1D2126` — Headings, primary text, drawn arm strokes
- **slate** `#4E565E` — Body copy
- **faint** `#8A939C` — Captions, mono labels, footnotes
- **orange** `#E8590C` — The safety accent: CTAs, active tab bar, joint rings, proof numbers, slider fills
- **orange-deep** `#C44908` — Hover and pressed states
- **orange-tint** `#FCE9DF` — Highlighted table rows, metric chips, focus tints

## Typography
- **Display: H1 clamp(40px, 5vw, 64px) line-height 1.05 letter-spacing -0.01em weight 700; H2 clamp(28px, 3.4vw, 42px) weight 700; card and arm titles 20-22px weight 600** — Saira Variable (OFL), weights 600/700. Self-host the font files.
- **Text: body 16px/1.6, subheads 17px, nav 14px, buttons 15px weight 600** — Barlow Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono: spec chips, table keys, calculator values, section labels (11-12px, letter-spacing 0.12em, uppercase), captions** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Container max-width 1180px with 24px side padding (20px below 640px). Sections 104px vertical padding on desktop, 76px on mobile. Section headers 48px below. Cards pad 24-28px; spec table rows 14px tall cells.
- Radius: Sharp industrial: cards and photos 6px; chips 3px; buttons and inputs 4px; slider tracks square. No pills anywhere.

## Motion
- Arm tabs: the profile SVG and spec table crossfade (opacity 0 -> 1, 240ms) with the table rows staggering in 30ms apart; the active tab's orange left bar slides 200ms.
- ROI calculator: outputs tween between values (Motion animate on a motion value, 300ms, rounded display) as sliders move; slider tracks fill orange to the knob.
- Install band: the background photo translates 0 -> 6% over the band's scroll (parallax, transform only).
- Scroll reveals: fade up 20px, 0.6s, ease [0.22, 1, 0.36, 1], once, stagger 0.06-0.08s.
- prefers-reduced-motion: no crossfades (instant swap), no tweening (instant numbers), no parallax; sliders still work as direct manipulation.

## Imagery
Six generated photographs that read as one facility: clean modern factory bays, soft even daylight from skylights, polished concrete, cool grey and white machinery with small safety-orange accents; no people, no readable text, no logos anywhere in frame. The robot arms in photos are generic unbranded designs. On the page, the arms themselves are drawn as original SVG side profiles — capsule links, sphere joints, cream housing, orange joint rings — geometry invented for this template that deliberately resembles no real maker's arm.

## Tone
Industrial and precise. Short declarative sentences, engineering units, mono-labeled data. Confident without slogans; every claim is a labeled sample number.

---
— Prompt by VibeFather · https://vibefather.ai/t/industrial-robotics-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
