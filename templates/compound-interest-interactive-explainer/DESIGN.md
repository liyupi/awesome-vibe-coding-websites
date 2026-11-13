---
name: "Compound Interest Interactive Explainer"
colors:
  paper: "#F6F1E7"
  paper2: "#EEE6D6"
  card: "#FFFDF8"
  ink: "#1E2226"
  muted: "#5B6168"
  rule: "#D9CFBD"
  slate: "#6E7F91"
  green: "#2F8F5B"
  greendeep: "#1F6B42"
  coral: "#E2684A"
  coraltint: "#F7DCD2"
  amber: "#D9A43B"
typography:
  display_headings_h1_64_68px_desktop_40_44px_mobile_h2_44_50px_desktop_32_36px_mobile_weight_400_with_opsz_auto_and_a_slight_negative_tracking_0_01em_italic_400_used_for_one_emphasized_phrase_per_heading: { family: "Fraunces Variable", weights: [400, 600] }
  ui_and_body_text_body_18_30px_labels_14px_weight_600_uppercase_tracking_0_08em_buttons_15px_weight_600: { family: "Public Sans Variable", weights: [400, 500, 600] }
  all_numbers_counter_slider_readouts_tooltips_axis_ticks_formula_table_tabular_figures_always: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Page container max-width 1240px with 24px side padding (16px under 640px). Sections are separated by 128px vertical padding on desktop, 80px on mobile. Text columns cap at 62ch. Cards use 28px inner padding (20px on mobile). 12-column grid with 32px gutters on desktop."
radius: "Cards and chart wells 18px; sliders' tracks fully rounded; buttons and segmented controls 999px pill; tooltips 10px; illustrations 14px with a 1px rule-colored border."
---

# Compound Interest Interactive Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **paper** `#F6F1E7` — Page background, warm off-white
- **paper2** `#EEE6D6` — Alternate section background and inset wells behind charts
- **card** `#FFFDF8` — Control panel, chart cards, FAQ items, slider thumbs
- **ink** `#1E2226` — Headings, body text, axis labels, crosshair line
- **muted** `#5B6168` — Secondary text, captions, tick labels
- **rule** `#D9CFBD` — Hairlines, gridlines, slider tracks, card borders
- **slate** `#6E7F91` — Principal / deposits layer in every chart, late-starter line
- **green** `#2F8F5B` — Interest layer, early-starter line, slider fill, links, primary buttons
- **greenDeep** `#1F6B42` — Hover state for green, text on light green tints
- **coral** `#E2684A` — Inflation only: today's-money mode badge, inflation slider fill, shrinking-basket accents
- **coralTint** `#F7DCD2` — Disclaimer band background (text in ink)
- **amber** `#D9A43B` — Crossover marker dot and its leader line, nothing else

## Typography
- **Display headings (H1 64/68px desktop, 40/44px mobile; H2 44/50px desktop, 32/36px mobile), weight 400 with opsz auto and a slight negative tracking (-0.01em); italic 400 used for one emphasized phrase per heading** — Fraunces Variable (OFL), weights 400/600. Self-host the font files.
- **UI and body text: body 18/30px, labels 14px weight 600 uppercase tracking 0.08em, buttons 15px weight 600** — Public Sans Variable (OFL), weights 400/500/600. Self-host the font files.
- **All numbers: counter, slider readouts, tooltips, axis ticks, formula, table. Tabular figures always** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Page container max-width 1240px with 24px side padding (16px under 640px). Sections are separated by 128px vertical padding on desktop, 80px on mobile. Text columns cap at 62ch. Cards use 28px inner padding (20px on mobile). 12-column grid with 32px gutters on desktop.
- Radius: Cards and chart wells 18px; sliders' tracks fully rounded; buttons and segmented controls 999px pill; tooltips 10px; illustrations 14px with a 1px rule-colored border.

## Motion
- Chart redraws: when any input changes, area and line paths morph to the new shape over 0.5s with ease [0.22, 1, 0.36, 1] (animate the path 'd' via motion's motion.path with the new d value, both paths always built from the same number of points so they interpolate cleanly); during an active slider drag, update instantly without tweening to keep it responsive.
- Numbers never jump: every currency figure uses useTweenedNumber (0.6s).
- Scroll reveals: section headings and paragraphs fade up 16px over 0.6s when 25% visible, once only, staggered 0.08s between siblings.
- Scrollytelling: the sticky chart crossfades layers and highlights over 0.45s when the active step changes; inactive step paragraphs drop to 35% opacity.
- Comparison scene: a 'Play the decades' button animates an age scrubber from the earlier start age to 65 over 6s (linear), drawing both lines progressively via pathLength; the gap bracket at 65 grows in after the lines finish (0.6s spring, stiffness 160, damping 20).
- Micro-interactions: slider thumb scales to 1.1 while dragged; segmented controls slide a pill highlight between options with a motion layoutId; the inflation toggle swaps the mode badge text with a 0.25s vertical slide.
- prefers-reduced-motion: disable path morphing, tweening, reveals and the play animation (show the finished state with the scrubber at 65), keep only instant state changes and color transitions.

## Imagery
The first screen's visual anchor is the polished live chart card itself, not a photo. Supporting imagery is a set of four gouache-and-colored-pencil editorial illustrations on warm cream paper in the page's palette (slate blue, leaf green, soft coral, ink), generated for this template, one per chapter, shown at 4:3 inside 14px-rounded frames with a caption below in muted 14px text. Icons are Lucide at 18px with 1.75 stroke width. Everything else (charts, basket, brackets, markers) is drawn in SVG. No stock photos, no people's faces, no coins with real currency markings.

## Tone
Calm, warm and precise, like a well-edited magazine explainer. Short sentences, concrete numbers, second person used only to describe what the chart shows ('your deposits', 'your balance'), never to tell the reader what to do. No hype, no urgency, no 'guaranteed', no 'you should'.

---
— Prompt by VibeFather · https://vibefather.ai/t/compound-interest-interactive-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
