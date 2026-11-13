---
name: "Sorting Algorithms Visualizer"
colors:
  graphite_950: "#0D0F12"
  graphite_900: "#14171C"
  graphite_800: "#1C2027"
  hairline: "#2B3038"
  grid: "#1E232A"
  text: "#E8EAED"
  muted: "#8C94A1"
  compare: "#F5A524"
  swap: "#3CC8E0"
  bar_idle: "#515967"
  bar_range: "#7C8694"
  bar_pivot: "#F4EFE1"
  bar_sorted: "#B9C3CF"
typography:
  display_logo_wordmark_h1_and_section_headings_h1_28px_on_desktop_and_22px_on_mobile_h2_36px_on_desktop_and_26px_on_mobile_letter_spacing_0_02em: { family: "Bricolage Grotesque", weights: [600, 700] }
  text_body_at_15px_with_1_55_line_height_control_labels_at_13px_card_explanations_at_14px: { family: "IBM Plex Sans", weights: [400, 500, 600] }
  mono_all_live_numerals_step_readouts_complexity_notation_axis_numbers_and_small_uppercase_eyebrow_labels_at_11px_with_0_08em_tracking_counter_numerals_at_36px_on_desktop_and_22px_on_mobile_with_tabular_figures: { family: "JetBrains Mono", weights: [400, 500, 700] }
spacing: "4px base unit. Page max-width 1360px with 24px gutters on desktop and 16px on mobile. Sections below the visualizer have 96px vertical padding on desktop and 64px on mobile. Panels have 16px inner padding and 1px hairline borders, no shadows."
radius: "4px on panels, cards and buttons. 2px on slider thumbs. Bars are square with no rounding. The play button is the only circle."
---

# Sorting Algorithms Visualizer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **graphite-950** `#0D0F12` — Page background and stage background
- **graphite-900** `#14171C` — Panels, cards, transport bar
- **graphite-800** `#1C2027` — Raised controls, hover state of cards and buttons
- **hairline** `#2B3038` — All 1px borders and slider tracks
- **grid** `#1E232A` — Faint gridlines inside canvas stages
- **text** `#E8EAED` — Primary text and counter numerals
- **muted** `#8C94A1` — Secondary text, labels and axis numbers
- **compare** `#F5A524` — The one warm accent: bars being compared, play button, focus on the selected tab
- **swap** `#3CC8E0` — The one cool accent: bars being swapped or written, focus rings
- **bar-idle** `#515967` — Bars outside the active range
- **bar-range** `#7C8694` — Bars inside the active range
- **bar-pivot** `#F4EFE1` — Pivot bar, always paired with a small amber caret above it
- **bar-sorted** `#B9C3CF` — Bars in final position

## Typography
- **Display: logo wordmark, H1 and section headings. H1 28px on desktop and 22px on mobile; H2 36px on desktop and 26px on mobile; letter-spacing -0.02em** — Bricolage Grotesque (OFL), weights 600/700. Self-host the font files.
- **Text: body at 15px with 1.55 line height, control labels at 13px, card explanations at 14px** — IBM Plex Sans (OFL), weights 400/500/600. Self-host the font files.
- **Mono: all live numerals, step readouts, complexity notation, axis numbers and small uppercase eyebrow labels at 11px with 0.08em tracking. Counter numerals at 36px on desktop and 22px on mobile with tabular figures** — JetBrains Mono (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: 4px base unit. Page max-width 1360px with 24px gutters on desktop and 16px on mobile. Sections below the visualizer have 96px vertical padding on desktop and 64px on mobile. Panels have 16px inner padding and 1px hairline borders, no shadows.
- Radius: 4px on panels, cards and buttons. 2px on slider thumbs. Bars are square with no rounding. The play button is the only circle.

## Motion
- Autoplay: 400ms after load the main stage starts playing quick sort at 50 steps per second, unless prefers-reduced-motion is set.
- Bars cut crisply between steps. Only at 12 steps per second or slower do swapped bars slide over 90% of the step interval with ease-out; above that they cut.
- Completion sweep: when the last step lands, a white (#FFFFFF) highlight travels left to right across the bars in 700ms, each bar lit for 120ms, then settles to bar-sorted. The play button becomes a replay icon.
- Controls: 120ms color transitions on hover and press; cards lift their border from hairline to muted on hover with no movement.
- In-page navigation scrolls smoothly; under reduced motion it jumps.
- prefers-reduced-motion: both stages start paused at step 0, the sweep is skipped, slides are skipped, the race does not auto-start, and a one-line note under the main stage reads 'Reduced motion is on, so playback starts paused. Step manually or press play.'

## Imagery
No photographs or bitmaps. The visual anchor of the first screen is the live visualizer itself, drawn on canvas 2D: crisp bars on a faint grid with mono axis numbers. The logo glyph and favicon are three ascending bars in hand-written SVG. Icons are Lucide at 18px with 1.75 stroke.

## Tone
Precise, calm and instrument-like. Short labels, plain English, no exclamation marks and no claims about learners, results or popularity. Every number on the page is computed live by the engine.

---
— Prompt by VibeFather · https://vibefather.ai/t/sorting-algorithms-visualizer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
