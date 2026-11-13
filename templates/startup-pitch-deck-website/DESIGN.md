---
name: "Startup Pitch Deck Website"
colors:
  ink: "#0B0B0C"
  surface: "#111113"
  raised: "#18181B"
  rule: "#2A2A2E"
  paper: "#F2EFE8"
  muted: "#8E8B85"
  faint: "#5C5A56"
  accent: "#3E6BFF"
  accent_deep: "#16224F"
  overtime: "#E5484D"
typography:
  display_wordmark_slide_headlines_big_numerals: { family: "Instrument Serif", weights: [400] }
  text_body_copy_card_titles_buttons: { family: "Inter", weights: [400, 500, 600] }
  mono_eyebrows_counter_chart_labels_metrics_footnotes: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "8px base unit. Slide padding 64px 88px 80px from 768px of slide width, 24px 20px 72px below. 12-column grid with 32px gaps, max content width 1440px. Vertical rhythm inside slides: 16px between eyebrow and headline, 28px headline to body, 48px body to charts or cards. Chrome sits 20–28px from the viewport edges."
radius: "Mostly square and editorial: 6px tooltips, 8px icon buttons, 10px thumbnails, 12px cards, 14px product window, 999px pills and dots."
---

# Startup Pitch Deck Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0B0B0C` — Page and slide background (print: #FFFFFF)
- **Surface** `#111113` — Overview and presenter panels
- **Raised** `#18181B` — Cards, product window, tooltips, chips (print: #F4F2EE)
- **Rule** `#2A2A2E` — Hairline rules, borders, axis lines (print: #DAD6CE)
- **Paper** `#F2EFE8` — Headlines and primary text (print: #0B0B0C)
- **Muted** `#8E8B85` — Body copy, captions, labels (print: #55524C)
- **Faint** `#5C5A56` — Footnotes, axis tick labels
- **Accent** `#3E6BFF` — The single electric accent: progress bar, active dot, chart lines, SOM circle, highlighted words, focus rings
- **Accent Deep** `#16224F` — Accent-tinted fills behind highlights and the [BRAND] halo
- **Overtime** `#E5484D` — Presenter timer only, once elapsed time passes the 10:00 target

## Typography
- **Display: wordmark, slide headlines, big numerals** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Text: body copy, card titles, buttons** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrows, counter, chart labels, metrics, footnotes** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Slide padding 64px 88px 80px from 768px of slide width, 24px 20px 72px below. 12-column grid with 32px gaps, max content width 1440px. Vertical rhythm inside slides: 16px between eyebrow and headline, 28px headline to body, 48px body to charts or cards. Chrome sits 20–28px from the viewport edges.
- Radius: Mostly square and editorial: 6px tooltips, 8px icon buttons, 10px thumbnails, 12px cards, 14px product window, 999px pills and dots.

## Motion
- One easing for entrances everywhere: cubic-bezier(0.22, 1, 0.36, 1); chart line drawing uses cubic-bezier(0.65, 0, 0.35, 1).
- Slide change: outgoing fade 0.25s, incoming fade plus 24px travel in the navigation direction over 0.4s.
- Content reveal on slide activation: data-reveal blocks rise 18px and fade in over 0.5s with 0.07s stagger, 0.12s delay.
- Charts and count-up numbers play each time their slide becomes active and reset when it is left.
- Progress bar width animates with a spring (stiffness 260, damping 32); counter digits slide 10px on change.
- Wheel navigation is debounced: 60px accumulated delta per step, then a 900ms lock.
- prefers-reduced-motion: every transition becomes an instant cut and every chart renders in its final state; print does the same.

## Imagery
No photographs and no bitmap images. Everything visual is drawn in code: SVG charts (nested market circles, ARR line chart with area fill, revenue bars with a hatch pattern, stacked use-of-funds bar, 2×2 positioning matrix), a code-built product window with an invented invoice table, CSS line decorations on the title and closing slides, initials monograms for the team, and Lucide icons at stroke 1.5. Hatch fill and halos use the Accent color only.

## Tone
Calm, confident and specific, like a well-rehearsed seed pitch: short declarative headlines, concrete numbers, no buzzwords or exclamation marks. Editorial dark styling with generous whitespace and one electric accent.

---
— Prompt by VibeFather · https://vibefather.ai/t/startup-pitch-deck-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
