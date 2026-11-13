---
name: "Tea Shop Website"
colors:
  paper: "#F4EDDE"
  kraft: "#EAE0C9"
  ink: "#2F2A22"
  olive: "#6F7A4F"
  clay: "#B26840"
  clay_deep: "#96532F"
  stone: "#8B8171"
  rule: "#D9CCB0"
typography:
  display_wordmark_h1_h2_tea_names_set_names_lora_serif_sentence_case_line_height_1_25_flavor_notes_use_the_italic: { family: "Lora", weights: [400, 600] }
  text_body_buttons_500_0_04em_tracking_captions_faq_answers: { family: "Alegreya Sans", weights: [400, 500, 700] }
  figures_the_steep_timer_digits_brewing_numbers_prices: { family: "Spline Sans Mono", weights: [400, 500] }
spacing: "Calm and generous: 128px desktop section rhythm (80px mobile), 1120px container, 32px padding, body line-height 1.7. Grid gap 24px; product page 6/6 split with a 56px gutter."
radius: "Soft but not bubbly: 10px on cards and panels, 999px on chips and buttons, 8px on images."
---

# Tea Shop Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4EDDE` — Page ground everywhere — warm paper carrying a whisper of grain.
- **Kraft** `#EAE0C9` — Alternate section bands, tea cards, the brewing guide panel.
- **Ink** `#2F2A22` — Primary text: headlines, body, prices, buttons on light.
- **Olive** `#6F7A4F` — Muted green: eyebrows, type chips, links, the timer ring at rest.
- **Clay** `#B26840` — Accent: CTAs, running timer ring, selected filters, note-chip borders, focus ring.
- **Clay Deep** `#96532F` — Clay hover and pressed state.
- **Stone** `#8B8171` — Secondary text: captions, brewing labels, the quiet footnotes.
- **Rule** `#D9CCB0` — 1px hairlines: card borders, set rows, footer divider.

## Typography
- **Display — wordmark, H1, H2, tea names, set names. Lora serif, sentence case, line-height 1.25; flavor notes use the italic** — Lora (OFL), weights 400/600. Self-host the font files.
- **Text — body, buttons (500, 0.04em tracking), captions, FAQ answers** — Alegreya Sans (OFL), weights 400/500/700. Self-host the font files.
- **Figures — the steep timer digits, brewing numbers, prices** — Spline Sans Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Calm and generous: 128px desktop section rhythm (80px mobile), 1120px container, 32px padding, body line-height 1.7. Grid gap 24px; product page 6/6 split with a 56px gutter.
- Radius: Soft but not bubbly: 10px on cards and panels, 999px on chips and buttons, 8px on images.

## Motion
- Slow like steam: reveals fade and rise 14px over 550ms with 80ms stagger; nothing bounces.
- Filtering re-flows the tea grid with Motion layout animations at 380ms.
- A thin steam wisp — one SVG path drifting upward on a 4s loop — sits at the hero's bottom edge; under prefers-reduced-motion it is a static curl.
- The steep timer ring drains smoothly (SVG stroke-dashoffset) and the digits breathe once per second at 4% opacity while running; pause freezes both instantly.
- Note chips and swatch-like type chips crossfade 220ms on selection; reduced-motion makes every animation instant.

## Imagery
One warm-graded shoot: every photograph is tea — pouring liquor with steam, dry leaves on linen or dark wood, clay pots and dishes — in soft warm side window light, amber and clay tones, shallow depth of field, 50-85mm macro feel. No people, no readable packaging, no logos.

## Tone
Quietly sensory: honey, woodsmoke, orchid — flavors first, facts second, never salesy. The copy never hurries the reader.

---
— Prompt by VibeFather · https://vibefather.ai/t/tea-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
