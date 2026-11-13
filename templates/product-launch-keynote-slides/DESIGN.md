---
name: "Product Launch Keynote Slides"
colors:
  stage_black: "#000000"
  signal_coral: "#FF4B2B"
  ultraviolet: "#5B2EFF"
  white: "#FFFFFF"
  ash: "#A6A6B3"
  graphite: "#14141C"
  hairline: "#2A2A36"
typography:
  display_headlines_product_name_closing_word_dates: { family: "Bricolage Grotesque Variable", weights: [600, 700] }
  figures_and_text_stats_price_captions_tabular_nums_on_all_figures: { family: "Inter Tight Variable", weights: [400, 500, 600] }
  mono_eyebrows_slide_counter_spec_lines_uppercase_letter_spacing_0_14em: { family: "JetBrains Mono Variable", weights: [400, 500] }
spacing: "All sizes are multiples of --u (1% of stage width in landscape, 2.1% in portrait). Side margin is 6% of stage width in landscape, 8% in portrait. Display line-height 0.98, letter-spacing -0.03em. Large empty black areas are intentional: never fill a slide to its edges with copy, and never put more than one idea on a slide."
radius: "Stat cards 1.2u. HUD buttons 8px. Overview tiles 8px. Nothing else on the stage is rounded; there are no pills and no chips."
---

# Product Launch Keynote Slides — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Stage Black** `#000000` — Page and stage background. True black, so the letterbox around the stage is invisible.
- **Signal Coral** `#FF4B2B` — The one accent and the product's own color: progress bar, build markers, the underline actor, active states, the lower end of the hero stat gradient.
- **Ultraviolet** `#5B2EFF` — Spotlight falloff behind the product only, never text or buttons. Coral against ultraviolet on black is the deck's color identity and is visible from slide 1.
- **White** `#FFFFFF` — Headlines and figures.
- **Ash** `#A6A6B3` — Captions, secondary lines and HUD icons. Passes AA on black.
- **Graphite** `#14141C` — Stat card and HUD button surface.
- **Hairline** `#2A2A36` — 1px card and overview tile borders.

## Typography
- **Display (headlines, product name, closing word, dates)** — Bricolage Grotesque Variable (OFL), weights 600/700. Self-host the font files.
- **Figures and text (stats, price, captions, tabular-nums on all figures)** — Inter Tight Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono (eyebrows, slide counter, spec lines; uppercase, letter-spacing 0.14em)** — JetBrains Mono Variable (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: All sizes are multiples of --u (1% of stage width in landscape, 2.1% in portrait). Side margin is 6% of stage width in landscape, 8% in portrait. Display line-height 0.98, letter-spacing -0.03em. Large empty black areas are intentional: never fill a slide to its edges with copy, and never put more than one idea on a slide.
- Radius: Stat cards 1.2u. HUD buttons 8px. Overview tiles 8px. Nothing else on the stage is rounded; there are no pills and no chips.

## Motion
- Morph: every actor uses one transition, a 1.1s tween with ease [0.65, 0, 0.2, 1]. New key presses interrupt and retarget it; navigation is never locked.
- Copy change: outgoing slide copy fades out in 0.25s, incoming fades in over 0.6s after a 0.35s delay with no slide or scale, so the actors are the only things that travel.
- Product fade-up: on the reveal slide the image goes from brightness 0.25 to 1 and scale 0.96 to 1 over 2.4s with ease [0.16, 1, 0.3, 1], while its ultraviolet spotlight goes from opacity 0 to 1 over 1.6s.
- Slow drift: on any slide the product image inside its actor scales from 1 to 1.03 over 12s, linear, restarted on slide change.
- Image swap inside the product actor: AnimatePresence crossfade over 0.6s, keyed on the image path, while the actor box keeps moving.
- Count-up: 1.4s with ease [0.16, 1, 0.3, 1], starting 0.3s after slide entry; on multi-card slides each figure starts 0.15s after the previous one.
- Build reveal: opacity 0 to 1 and y from 1.2u to 0 over 0.5s with ease [0.16, 1, 0.3, 1]. Unrevealed builds keep their space (visibility hidden) so nothing shifts.
- prefers-reduced-motion: morphs and count-ups are replaced by plain crossfades and final values, as described in Setup.

## Imagery
One invented hero object: a free-standing coral anodized column with softly rounded edges and a single glowing horizontal seam, shot on seamless black with an ultraviolet haze behind it. The six images read as one studio shoot. They carry a feathered radial mask so they melt into the stage with no visible rectangle. Everything else on the stage is type and code-drawn light.

## Tone
Confident, unhurried, spare. Short declarative lines, one thought at a time, concrete numbers instead of adjectives. No exclamation marks, no marketing superlatives.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-launch-keynote-slides · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
