---
name: "Interactive Science Explainer"
colors:
  paper: "#F6F2EA"
  paper_deep: "#EDE6D8"
  ink: "#1B1E23"
  ink_muted: "#5C6169"
  rule: "#D8D0C0"
  teal: "#1F7A7A"
  teal_wash: "#D5E8E5"
  coral: "#E0654A"
  coral_wash: "#F7DDD4"
typography:
  display_serif_h1_h2_step_headings_pull_quote_captions_italic_masthead_wordmark: { family: "Newsreader (variable, with italic)", weights: [400, 500, 600] }
  text_sans_body_copy_dek_fallback_buttons_quiz_options: { family: "IBM Plex Sans", weights: [400, 500, 600] }
  mono_kickers_figure_numbers_callout_numbers_readouts_axis_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Page max-width 1200px with 32px side gutters (20px under 720px). 12-column grid, 24px gap. Reading column max-width 640px (about 66ch). Section padding 160px top/bottom on desktop, 96px on mobile. Each scroll step min-height 80vh. Type scale: H1 clamp(3rem, 6.5vw, 6rem), line-height 0.98, letter-spacing -0.02em, Newsreader 500. H2 clamp(2.25rem, 4vw, 3.5rem), line-height 1.05, Newsreader 500. Step heading 1.5rem, Newsreader 600. Body 18px, line-height 1.65, IBM Plex Sans 400. Dek 1.5rem, Newsreader 400 italic. Caption 15px, Newsreader 400 italic, ink-muted. Kicker 12px, IBM Plex Mono 500, uppercase, letter-spacing 0.12em, teal. Readouts 28px IBM Plex Mono 500 with tabular-nums."
radius: "Nearly square: 2px on figure panels, cards and buttons; 999px only on the slider thumb, callout number circles and the 'Cancelled' badge."
---

# Interactive Science Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **paper** `#F6F2EA` — Page background (warm off-white)
- **paper-deep** `#EDE6D8` — Figure panels, phase-lab card, quiz option hover, SVG cut-face fill
- **ink** `#1B1E23` — Body text, headings, summed wave, SVG outlines
- **ink-muted** `#5C6169` — Captions, bylines, inactive steps, axis labels
- **rule** `#D8D0C0` — Hairline rules (1px), grid lines on canvases, input track
- **teal** `#1F7A7A` — The noise / signal: noise wave, kickers, reading progress bar, correct answers
- **teal-wash** `#D5E8E5` — Teal tint behind correct quiz feedback and the 'Cancelled' badge
- **coral** `#E0654A` — The anti-noise: anti-noise wave, slider thumb, signal path in the earcup, incorrect answers
- **coral-wash** `#F7DDD4` — Coral tint behind incorrect quiz feedback

## Typography
- **Display serif: H1, H2, step headings, pull quote, captions (italic), masthead wordmark** — Newsreader (variable, with italic) (OFL), weights 400/500/600. Self-host the font files.
- **Text sans: body copy, dek fallback, buttons, quiz options** — IBM Plex Sans (OFL), weights 400/500/600. Self-host the font files.
- **Mono: kickers, figure numbers, callout numbers, readouts, axis labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Page max-width 1200px with 32px side gutters (20px under 720px). 12-column grid, 24px gap. Reading column max-width 640px (about 66ch). Section padding 160px top/bottom on desktop, 96px on mobile. Each scroll step min-height 80vh. Type scale: H1 clamp(3rem, 6.5vw, 6rem), line-height 0.98, letter-spacing -0.02em, Newsreader 500. H2 clamp(2.25rem, 4vw, 3.5rem), line-height 1.05, Newsreader 500. Step heading 1.5rem, Newsreader 600. Body 18px, line-height 1.65, IBM Plex Sans 400. Dek 1.5rem, Newsreader 400 italic. Caption 15px, Newsreader 400 italic, ink-muted. Kicker 12px, IBM Plex Mono 500, uppercase, letter-spacing 0.12em, teal. Readouts 28px IBM Plex Mono 500 with tabular-nums.
- Radius: Nearly square: 2px on figure panels, cards and buttons; 999px only on the slider thumb, callout number circles and the 'Cancelled' badge.

## Motion
- Canvas waves animate with requestAnimationFrame at a calm speed: one full cycle every 2.4s for the fundamental. They pause when off screen.
- Figure state changes between scroll steps interpolate wave parameters (amplitude, frequency, overlays) over 600ms with easeInOutCubic.
- Text steps: the inactive step sits at opacity 0.35 and the active one at 1. Transition 400ms ease.
- Paragraph and heading reveal on first entering the viewport: opacity 0→1 and translateY 12px→0, 600ms cubic-bezier(0.2,0.7,0.2,1), 80ms stagger. Runs once.
- Earcup parts draw in with stroke-dashoffset (700ms) and fill-opacity 0→1 (400ms, delayed 300ms). Callout circles scale 0.6→1 with 200ms ease-out. In the final step the signal path's dash pattern flows from outer mic to ear (stroke-dashoffset loop, 1.6s linear infinite).
- Phase-lab readouts tween numbers over 150ms. The 'Cancelled' badge fades and scales 0.9→1 in 200ms when |phase−180| ≤ 4.
- Frequency bars grow from height 0 when Figure 4 enters view: 800ms easeOutCubic, 60ms stagger per band.
- Reading progress hairline under the masthead fills with scroll position (transform: scaleX, no transition).
- prefers-reduced-motion: reduce. Waves render as a single static frame (t=0) and redraw only when inputs change. Step and state changes are instant. No reveal translate (opacity only, 0ms). The earcup signal path is a static dashed line. Bars appear at full height. The slider, drag and quiz all still work.

## Imagery
No photos and no bitmaps. All art is drawn in code: Canvas 2D line waves (2px strokes, round caps) on faint rule-colored grid lines, and inline SVG diagrams with 1.5px ink outlines. Cut faces use a 45° hatch pattern (ink at 25% opacity, 6px spacing) over paper-deep, and foam uses a dot pattern. Teal always means noise and coral always means anti-noise; ink is the result. Figures carry a mono figure number ('FIG. 2') and an italic caption under a hairline rule.

## Tone
Calm, precise, warm, like a good science-magazine feature. Short declarative sentences, no exclamation marks, no hype, no jargon left unexplained. Figure numbers, captions and quiet confidence.

---
— Prompt by VibeFather · https://vibefather.ai/t/interactive-science-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
