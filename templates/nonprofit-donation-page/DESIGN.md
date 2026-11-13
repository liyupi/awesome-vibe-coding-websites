---
name: "Nonprofit Donation Page"
colors:
  paper: "#F4EFE6"
  paper_deep: "#EAE2D3"
  ink: "#1B2422"
  river: "#1F4E4A"
  river_light: "#6E9A93"
  silt: "#8A6E4B"
  rule: "#CFC4B1"
  signal: "#E2582B"
  error: "#A8321E"
typography:
  display_headlines_big_figures_faq_questions: { family: "Fraunces Variable", weights: [400, 600, 800] }
  text_body_form_fields_buttons: { family: "Public Sans Variable", weights: [400, 500, 600] }
  mono_captions_section_numbers_nav_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "12-column grid inside a 1200px max-width container, 24px gutters; side padding 40px desktop, 20px mobile. Sections are separated by 128px vertical padding on desktop and 80px on mobile. Every section starts with a SectionLabel: mono 12px uppercase, letter-spacing 0.14em, Silt, e.g. “01 — The record so far”, followed by a full-width 1px Rule hairline and 32px gap before the heading. Section headings are Fraunces 600, clamp(32px, 4vw, 52px), line-height 1.05, letter-spacing -0.015em. Body columns never exceed 62ch."
radius: "Square editorial edges: 0 on panels, cards, meter track and images; 2px on buttons, inputs and chips; full circle only for the slider thumb, timeline dots and map dots."
---

# Nonprofit Donation Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4EFE6` — Page background, text on dark bands
- **Paper Deep** `#EAE2D3` — Meter band and volunteer section background, illustration panels
- **Ink** `#1B2422` — Body text, headlines, closing band and footer background
- **River** `#1F4E4A` — Impact calculator band background, drop caps, river strokes, form submit button, links
- **River Light** `#6E9A93` — Contour lines, vignette strokes, unreached timeline dots
- **Silt** `#8A6E4B` — Captions, section numbers, timeline numerals, unreached milestone labels
- **Rule** `#CFC4B1` — 1px hairlines, meter track, input borders
- **Signal** `#E2582B` — Only for donate buttons, the meter fill, the slider fill and map site dots
- **Error** `#A8321E` — Form error text and invalid field borders

## Typography
- **Display (headlines, big figures, FAQ questions)** — Fraunces Variable (OFL), weights 400/600/800. Self-host the font files.
- **Text (body, form fields, buttons)** — Public Sans Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono (captions, section numbers, nav, labels)** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 12-column grid inside a 1200px max-width container, 24px gutters; side padding 40px desktop, 20px mobile. Sections are separated by 128px vertical padding on desktop and 80px on mobile. Every section starts with a SectionLabel: mono 12px uppercase, letter-spacing 0.14em, Silt, e.g. “01 — The record so far”, followed by a full-width 1px Rule hairline and 32px gap before the heading. Section headings are Fraunces 600, clamp(32px, 4vw, 52px), line-height 1.05, letter-spacing -0.015em. Body columns never exceed 62ch.
- Radius: Square editorial edges: 0 on panels, cards, meter track and images; 2px on buttons, inputs and chips; full circle only for the slider thumb, timeline dots and map dots.

## Motion
- Default ease is [0.22, 1, 0.36, 1]. Reveal: elements fade from opacity 0 and y 16px to 0 over 0.6s when 30% in view, once; siblings stagger 0.08s.
- Big figures count up once with CountUp (1.4s); the meter fill grows from 0 to its percentage over 1.8s when 40% in view, and re-animates smoothly (0.6s) whenever raisedTotal changes.
- SVG line drawings draw themselves with Motion pathLength 0 to 1 (river map 1.6s, vignettes 1.2s, check stamp 0.5s).
- The timeline’s vertical progress line is scroll-linked: useScroll on the Dispatches section (offset ['start 60%', 'end 60%']) drives scaleY of a River-coloured line from 0 to 1, transform-origin top.
- Hover: buttons darken 8% and lift 1px over 150ms; text links animate an underline from 0 to 100% width over 200ms.
- With prefers-reduced-motion: no reveals, count-ups, path drawing, scroll-linked line or water drift; everything renders in its final state and smooth scroll is off.

## Imagery
No photographs. All imagery is original line art drawn in SVG components: a contour-line map of the river stretch, six small vignettes for the timeline, a bag glyph for the calculator, a check stamp, and drifting water lines. Strokes are 1.5px, round caps, River Light or River, on Paper Deep panels, each with a mono figure caption (“Fig. 1 — …”). No people, faces, animals with personality, or real places.

## Tone
Plain-spoken, warm and factual, like a good local reporter. Short sentences, concrete numbers, no exclamation marks, no guilt, no buzzwords.

---
— Prompt by VibeFather · https://vibefather.ai/t/nonprofit-donation-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
