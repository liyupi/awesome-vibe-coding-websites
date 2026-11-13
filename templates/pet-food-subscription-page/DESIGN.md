---
name: "Pet Food Subscription Page"
colors:
  cream: "#FFF5E8"
  peanut: "#FAE7CD"
  ink: "#2B2520"
  fetch_orange: "#F0761F"
  orange_deep: "#D25F10"
  grass_green: "#4C9A58"
  grass_deep: "#3B7A45"
  rule: "#EFDCC3"
typography:
  display_wordmark_h1_h2_plan_numbers_step_questions_fredoka_chunky_rounded_sentence_case_line_height_1_15: { family: "Fredoka", weights: [500, 600, 700] }
  text_body_option_labels_reviews_600_for_names_captions: { family: "Figtree", weights: [400, 600, 700] }
spacing: "Big and friendly: 104px desktop section rhythm (64px mobile), 1160px container, 28px padding. Cards 24px gap; the plan builder is a 6/6 split with a 40px gutter; buttons are 52-56px tall."
radius: "Chunky rounds: 24px on cards and the plan panel, 999px on buttons, chips and badges, 20px on images."
---

# Pet Food Subscription Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FFF5E8` — Page ground everywhere — warm, like an afternoon kitchen.
- **Peanut** `#FAE7CD` — Card wells, chips, the plan panel, review cards.
- **Ink** `#2B2520` — Primary text: headlines, numbers, buttons on light grounds.
- **Fetch Orange** `#F0761F` — Primary accent: CTAs, slider fill, active step, bowl fill, focus ring.
- **Orange Deep** `#D25F10` — Orange hover and pressed state.
- **Grass Green** `#4C9A58` — Second accent: pet-safe and ingredient tags, secondary buttons, check marks, cadence chips.
- **Grass Deep** `#3B7A45` — Green hover and pressed state.
- **Rule** `#EFDCC3` — 1px hairlines and card borders, stepper dividers.

## Typography
- **Display — wordmark, H1, H2, plan numbers, step questions. Fredoka, chunky rounded, sentence case, line-height 1.15** — Fredoka (OFL), weights 500/600/700. Self-host the font files.
- **Text — body, option labels, reviews (600 for names), captions** — Figtree (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Big and friendly: 104px desktop section rhythm (64px mobile), 1160px container, 28px padding. Cards 24px gap; the plan builder is a 6/6 split with a 40px gutter; buttons are 52-56px tall.
- Radius: Chunky rounds: 24px on cards and the plan panel, 999px on buttons, chips and badges, 20px on images.

## Motion
- Bouncy but polite: quiz steps slide 28px with a spring (stiffness 300, damping 20); mobile uses 300ms tweens instead.
- Plan numbers (cups, kcal, price) spring into place on every input change — old value exits up, new value enters from below, 240ms.
- The bowl SVG fills with orange to the portion ratio on the same spring; switching species swaps the bowl art with a 240ms crossfade.
- Primary buttons have a chunky 0 4px 0 shadow that flattens on press; chips scale 0.96 on press.
- Reveals fade and rise 18px over 420ms with 70ms stagger; prefers-reduced-motion makes every animation an instant state change.

## Imagery
One bright studio shoot: every photograph is a pet or its food on a warm cream seamless backdrop — soft even light with a warm golden cast, joyful expressions, gentle floor shadow. No people, no hands, no readable packaging, no logos.

## Tone
Cheerful and straight-talking, like a good vet tech: plain words, real numbers, gentle jokes about pets. Never wiggles around the fact that the math is a sample.

---
— Prompt by VibeFather · https://vibefather.ai/t/pet-food-subscription-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
