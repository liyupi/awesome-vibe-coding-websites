---
name: "How Large Language Models Work"
colors:
  paper: "#F6F1E7"
  surface: "#FFFCF6"
  ink: "#1B1A17"
  ink_muted: "#5E584D"
  rule: "#DDD4C3"
  accent: "#E4572E"
  tint_animal: "#9DBFA8"
  tint_home: "#E2C27A"
  tint_action: "#B7A6D6"
  tint_weather: "#9FC3D9"
  tint_glue: "#D4CCBD"
  dark_paper: "#16151A"
  dark_surface: "#211F26"
  dark_ink: "#EDE7DA"
  dark_ink_muted: "#A39C8E"
  dark_rule: "#38353E"
  dark_accent: "#FF6B43"
typography:
  display_hero_headline_72px_desktop_44px_mobile_weight_600_opsz_144_letter_spacing_0_02em_line_height_1_02_step_card_titles_28px_24px_weight_600_section_headings_44px_32px_weight_500_sampled_sentence_26px_italic_weight_400: { family: "Fraunces", weights: [400, 500, 600] }
  text_hero_deck_21px_line_height_1_5_caption_body_17px_line_height_1_6_ui_labels_14px_weight_500_faq_and_glossary_16px: { family: "Inter", weights: [400, 500, 600] }
  mono_token_chips_15px_weight_500_token_ids_11px_step_counters_like_03_08_12px_uppercase_letter_spacing_0_08em_percentages_temperature_value_dice_number: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "8px base unit. Content max-width 1200px with 32px side padding desktop, 16px mobile. Sections 128px vertical padding desktop, 80px mobile. Scrolly grid on desktop (>=1024px): caption column 38% on the left, 4% gap, stage column 58% on the right. Caption cards max-width 420px, padding 28px, each card in its own step wrapper with min-height 100vh and the card vertically centered; the last step wrapper is 160vh so the reader can play with the slider while the stage stays pinned."
radius: "Token chips 6px, caption cards and stage panel 14px, glossary pills and buttons fully rounded (999px), bars 4px on the right end only, map regions are soft ellipses."
---

# How Large Language Models Work — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **paper** `#F6F1E7` — Light page background
- **surface** `#FFFCF6` — Light caption cards, stage panel, FAQ items
- **ink** `#1B1A17` — Headlines, body text, chip labels
- **ink-muted** `#5E584D` — Secondary text, token ids, axis labels, captions under figures
- **rule** `#DDD4C3` — Hairlines, card borders, empty bar tracks, map frame
- **accent** `#E4572E` — The one saturated color: focus chip, attention arcs, top bar, progress bar, slider thumb, chosen word underline, links
- **tint-animal** `#9DBFA8` — Sage: chips, dots and map region for animals and living things
- **tint-home** `#E2C27A` — Sand: map region for home and warmth (candidate next words)
- **tint-action** `#B7A6D6` — Lavender: chips and region for actions and states (walk, sleep, curled)
- **tint-weather** `#9FC3D9` — Sky: chips and region for weather words
- **tint-glue** `#D4CCBD` — Warm gray: small glue words, word pieces and punctuation
- **dark-paper** `#16151A` — Dark mode page background
- **dark-surface** `#211F26` — Dark mode cards and stage panel
- **dark-ink** `#EDE7DA` — Dark mode text
- **dark-ink-muted** `#A39C8E` — Dark mode secondary text
- **dark-rule** `#38353E` — Dark mode hairlines
- **dark-accent** `#FF6B43` — Dark mode accent; tints keep their hex but chips use them at 85% opacity with dark-ink labels switched to #16151A

## Typography
- **Display: hero headline (72px desktop / 44px mobile, weight 600, opsz 144, letter-spacing -0.02em, line-height 1.02), step card titles (28px / 24px, weight 600), section headings (44px / 32px, weight 500), sampled sentence (26px italic weight 400)** — Fraunces (OFL), weights 400/500/600. Self-host the font files.
- **Text: hero deck (21px, line-height 1.5), caption body (17px, line-height 1.6), UI labels (14px weight 500), FAQ and glossary (16px)** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: token chips (15px weight 500), token ids (11px), step counters like 03 / 08 (12px uppercase, letter-spacing 0.08em), percentages, temperature value, dice number** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Content max-width 1200px with 32px side padding desktop, 16px mobile. Sections 128px vertical padding desktop, 80px mobile. Scrolly grid on desktop (>=1024px): caption column 38% on the left, 4% gap, stage column 58% on the right. Caption cards max-width 420px, padding 28px, each card in its own step wrapper with min-height 100vh and the card vertically centered; the last step wrapper is 160vh so the reader can play with the slider while the stage stays pinned.
- Radius: Token chips 6px, caption cards and stage panel 14px, glossary pills and buttons fully rounded (999px), bars 4px on the right end only, map regions are soft ellipses.

## Motion
- Discrete step transitions, not scrubbed: when activeStep changes, a GSAP timeline of 0.6-0.9s with ease power3.inOut moves the stage to the new state; elements stagger by 0.03-0.05s in reading order.
- Only the 2px progress bar under the header is scrubbed (ScrollTrigger scrub: true over the whole scrolly section, scaleX 0 to 1).
- Hero sentence types in once on load at 28ms per character with a blinking 2px accent caret (1s steps blink) that stays at the end.
- Attention arcs draw in with stroke-dashoffset from full length to 0 over 0.6s, heaviest arc first.
- Bars grow from width 0 with power2.out over 0.7s, stagger 0.05s; percentages count up in step with the bar.
- Temperature changes re-tween bars over 0.35s power2.out; the dice icon rotates 360 degrees over 0.5s on every sample; the chosen word fades in with a 6px rise.
- Caption cards fade from 40% to 100% opacity and lift 12px when their step becomes active; inactive cards rest at 40% opacity.
- Hover and focus micro-interactions: chips lift 2px and show a 1px accent outline, glossary pills invert to accent fill, buttons darken 6%.
- prefers-reduced-motion: no typing, no tweens and no pinning. The stage is not sticky; instead each step card is followed by a static SVG figure of that step's final state (same Stage component rendered with a fixed step prop). The temperature figure stays fully interactive, bars just update instantly.

## Imagery
No photographs or raster images. Every visual is flat 2D SVG drawn in code: rounded token chips tinted by word group, a framed map with soft tinted ellipse regions and small caps region labels, dots with labels, smooth quadratic attention arcs in the accent color, horizontal bars on hairline tracks, a cumulative probability strip with a triangle marker, and a hand-made SVG wordmark mark (a small circle inside a rounded square with a short flame-like teardrop, drawn with two paths). Lucide line icons at 1.75px stroke for UI and the recap strip.

## Tone
Calm, precise and friendly, like a good science magazine. Short sentences, one idea per card, an everyday analogy for each idea, no hype, no jargon without an inline definition. Never names real AI products, labs or people; always says "a language model".

---
— Prompt by VibeFather · https://vibefather.ai/t/how-large-language-models-work · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
