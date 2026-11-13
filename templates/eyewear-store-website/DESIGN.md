---
name: "Eyewear Store Website"
colors:
  paper: "#F5F1E8"
  paper_deep: "#EDE7DA"
  ink: "#211F1B"
  graphite: "#6B665D"
  accent_persimmon: "#E8582D"
  accent_deep_persimmon: "#C24420"
  accent_cobalt: "#2749C6"
  accent_deep_cobalt: "#1D3BA6"
  rule: "#DCD4C5"
typography:
  display_wordmark_h1_h2_frame_names_prices_space_grotesk_headlines_sentence_case_with_tight_0_01em_eyebrows_and_labels_uppercase_with_0_18em_tracking: { family: "Space Grotesk", weights: [500, 700] }
  text_body_copy_quiz_options_buttons_uppercase_0_1em_tracking_at_13px_captions: { family: "Karla", weights: [400, 700] }
spacing: "Airy and editorial: 120px desktop section rhythm (72px mobile), 1240px container, 32px padding. Grid gap 24px; product page uses a 7/5 split with a 64px gutter."
radius: "Soft but tailored: 14px on cards and the quiz panel, 999px on chips and buttons, 4px on inputs and images."
---

# Eyewear Store Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F5F1E8` — Page ground everywhere — warm off-white with a whisper of grain.
- **Paper Deep** `#EDE7DA` — Cards, the quiz panel, filter chips, footer band.
- **Ink** `#211F1B` — Primary text: headlines, prices, buttons on paper, frame borders on hover.
- **Graphite** `#6B665D` — Secondary text: eyebrows, captions, unselected chips, spec labels.
- **Accent (persimmon)** `#E8582D` — The one bold accent when [ACCENT]=persimmon: CTA fill, quiz progress, selected swatch ring, filter active state, links.
- **Accent Deep (persimmon)** `#C24420` — Accent hover and pressed state for persimmon.
- **Accent (cobalt)** `#2749C6` — The accent when [ACCENT]=cobalt — used in exactly the same places.
- **Accent Deep (cobalt)** `#1D3BA6` — Accent hover and pressed state for cobalt.
- **Rule** `#DCD4C5` — 1px hairlines: grid dividers, spec table rows, chip borders.

## Typography
- **Display — wordmark, H1, H2, frame names, prices. Space Grotesk; headlines sentence case with tight -0.01em, eyebrows and labels uppercase with 0.18em tracking** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Text — body copy, quiz options, buttons (uppercase 0.1em tracking at 13px), captions** — Karla (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: Airy and editorial: 120px desktop section rhythm (72px mobile), 1240px container, 32px padding. Grid gap 24px; product page uses a 7/5 split with a 64px gutter.
- Radius: Soft but tailored: 14px on cards and the quiz panel, 999px on chips and buttons, 4px on inputs and images.

## Motion
- Crisp, never slow: reveals fade and rise 20px over 300ms with 60ms stagger — one beat, done.
- Filtering re-flows the grid with Motion layout animations at 280ms so cards glide into place instead of jumping.
- Swatch and lens selection crossfades the paper-tone backdrop behind the product photo in 240ms and the price rolls with a 200ms y-shift.
- Quiz steps slide horizontally 24px in 260ms with a progress bar that fills in accent.
- prefers-reduced-motion: every animation above becomes an instant state change.

## Imagery
One studio shoot on paper: every photograph is a frame — invented design, no recognizable silhouette — lying on warm off-white textured paper in soft directional daylight with a gentle long shadow. Macro feel, generous empty paper, no people, no readable text, no logos.

## Tone
Fashion-editorial calm: short confident lines, no exclamation marks, prices stated plainly. The shop knows what it likes and says so in one breath.

---
— Prompt by VibeFather · https://vibefather.ai/t/eyewear-store-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
