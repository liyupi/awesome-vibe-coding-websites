---
name: "Product Review Blog"
colors:
  paper_white: "#FFFFFF"
  warm_band: "#F6F3EC"
  ink: "#1B211D"
  slate_green: "#55605A"
  score_green: "#0E7C4A"
  green_tint: "#E3F0E6"
  hairline: "#E5E1D4"
  muted_red: "#B0433B"
typography:
  display_headlines_verdict_statements: { family: "Newsreader", weights: [400, 600, 700] }
  body_paragraphs_table_text_buttons: { family: "Figtree", weights: [400, 500, 600, 700] }
  numerals_scores_prices_eyebrows_metadata: { family: "Spline Sans Mono", weights: [500, 700] }
spacing: "8px base grid. Shell max-width 1080px with 32px desktop and 20px mobile side padding. Masthead 88px with a 1px ink bottom rule. Sections 88px vertical padding on desktop, 64px on mobile. Table cells 16px vertical padding; prose max 64 characters per line."
radius: "2px on cards, buttons, inputs, and photos — near-square editorial. The only circle is the 64px round score badge; the best-pick ribbon is a sharp rectangle."
---

# Product Review Blog — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper white** `#FFFFFF` — Page ground, cards, table
- **Warm band** `#F6F3EC` — Disclosure band, verdict box, newsletter card
- **Ink** `#1B211D` — Headings, body text, table rules
- **Slate green** `#55605A` — Secondary text, meta, footnotes
- **Score green** `#0E7C4A` — Scores, best-pick ribbon, pros checks, primary button
- **Green tint** `#E3F0E6` — Score badge fills and highlight row tint
- **Hairline** `#E5E1D4` — Table borders, dividers, card edges
- **Muted red** `#B0433B` — Cons X icons only, used sparingly

## Typography
- **Display: headlines, verdict statements** — Newsreader (OFL), weights 400/600/700. Self-host the font files.
- **Body: paragraphs, table text, buttons** — Figtree (OFL), weights 400/500/600/700. Self-host the font files.
- **Numerals: scores, prices, eyebrows, metadata** — Spline Sans Mono (OFL), weights 500/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Shell max-width 1080px with 32px desktop and 20px mobile side padding. Masthead 88px with a 1px ink bottom rule. Sections 88px vertical padding on desktop, 64px on mobile. Table cells 16px vertical padding; prose max 64 characters per line.
- Radius: 2px on cards, buttons, inputs, and photos — near-square editorial. The only circle is the 64px round score badge; the best-pick ribbon is a sharp rectangle.

## Motion
- The hero card stack settles from a 6-degree splay to its resting rotations over 500ms on load; the top card lifts 4px on hover.
- Sorting the table re-renders rows with a 220ms fade-and-rise stagger; the active header underline slides 200ms.
- Sub-score bars fill from 0 to their value over 600ms once the review header scrolls into view.
- Sections reveal once on scroll with a 12px rise and a 420ms fade, staggered 60ms.
- Under prefers-reduced-motion every animation above becomes an instant state change with no movement; all interactions stay fully functional.

## Imagery
One studio set, six shots, one grade: generic unbranded products centered on a warm neutral seamless (#EFEAE2) in soft diffused daylight from the left with a gentle contact shadow, 50mm lens, consistent scale and crop across all six. No text, letters, numbers, logos, or brand marks on any product; no props beyond a few scattered coffee beans where natural; no people.

## Tone
Calm, specific, and self-aware — a consumer-magazine testing desk that happens to be fictional. Concrete observations over adjectives, honest cons for every pro, and an always-visible disclosure that every score on the page is an invented sample.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-review-blog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
