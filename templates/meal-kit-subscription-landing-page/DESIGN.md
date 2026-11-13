---
name: "Meal Kit Subscription Landing Page"
colors:
  warm_white: "#FBF7F0"
  linen: "#F2EBDD"
  card: "#FFFFFF"
  herb: "#4A6B3A"
  herb_deep: "#37522C"
  herb_mist: "#E6EDDD"
  ink: "#2E2B22"
  clay_gray: "#6E6858"
  tomato: "#D6552F"
  tomato_deep: "#B84320"
  rule: "#E1D8C6"
  good: "#5E7D4E"
typography:
  display_h1_h2_h3_dish_names_prices_the_wordmark_fraunces_kitchen_table_serif: { family: "Fraunces", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_prices: { family: "Source Sans 3", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6vw, 74px) Fraunces 500, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Fraunces 500; dish names Fraunces 600 20px; per-serving figure Fraunces 600 40px Tomato tabular; lead Source Sans 400 17.5px / 1.65 Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.16em Clay Gray; caption 13px Clay Gray. Buttons: height 50px, Source Sans 700 14px. Primary: Herb fill, Card text. Join CTA: Tomato fill, Card text. Secondary: 1px Herb border. Inputs: height 50px, 1px Rule border, Card fill, focus Herb border. Focus ring everywhere: 2px Herb outline with 3px offset."
radius: "12px on cards, buttons, inputs, chips and photos. 999px only for pills, portion dots and day chips."
---

# Meal Kit Subscription Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FBF7F0` — Page background throughout.
- **Linen** `#F2EBDD` — Alternate section background (Menu, Trust), chips, hover fill.
- **Card** `#FFFFFF` — Dish cards, the plan panel, join panel, joined state.
- **Herb** `#4A6B3A` — Primary: headlines' accents, primary buttons, selected chips, focus ring.
- **Herb Deep** `#37522C` — Hover and pressed, footer background.
- **Herb Mist** `#E6EDDD` — Selected chip fills, icon wells, portion dots.
- **Ink** `#2E2B22` — Headlines and body ink, icon color.
- **Clay Gray** `#6E6858` — Secondary text, captions, eyebrows, difficulty dots.
- **Tomato** `#D6552F` — The one warm accent: the join CTA, per-serving figure, day chip active, focus-visible extras.
- **Tomato Deep** `#B84320` — CTA hover and pressed.
- **Rule** `#E1D8C6` — 1px hairlines, card borders, input borders, dividers.
- **Good** `#5E7D4E` — Trust ticks, joined check, veg badges.

## Typography
- **Display: H1, H2, H3, dish names, prices, the wordmark — Fraunces, kitchen-table serif** — Fraunces (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for prices** — Source Sans 3 (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6vw, 74px) Fraunces 500, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Fraunces 500; dish names Fraunces 600 20px; per-serving figure Fraunces 600 40px Tomato tabular; lead Source Sans 400 17.5px / 1.65 Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.16em Clay Gray; caption 13px Clay Gray. Buttons: height 50px, Source Sans 700 14px. Primary: Herb fill, Card text. Join CTA: Tomato fill, Card text. Secondary: 1px Herb border. Inputs: height 50px, 1px Rule border, Card fill, focus Herb border. Focus ring everywhere: 2px Herb outline with 3px offset.
- Radius: 12px on cards, buttons, inputs, chips and photos. 999px only for pills, portion dots and day chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 1, 0.35, 1) for plan updates and the join swap. Kitchen-paced.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the dish photo scales 1.04→1.0 over 2200ms; the H1 rises; a small steam squiggle over the bowl draws once (off under reduced motion).
- Plan selector: people and meals chips fill Herb Mist→Herb on select (150ms); the weekly total and per-serving figure count to new values over 450ms; the portion dots (one per person) pop in sequence.
- Menu cards: hover lifts 3px and the difficulty dots brighten.
- How-it-works: the connector line draws with scroll; step numbers pop in sequence.
- Join form: day chips fill Tomato on select; invalid submit shakes 4px with inline labels; sending swaps to Joined (320ms --ease-io) — a drawn Tomato 'FIRST BOX' stamp scaling in, 'Welcome to the table, [NAME].' plan/day echo with the per-serving line, 'Edit' pre-filled. Persisted in localStorage.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, draws, counts or pops; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real overhead food photography, all six made for this template in one consistent style: overhead on warm ceramic, herb-green and tomato-red pops, soft daylight — plated dishes only, no faces, no hands, no readable text. Every photo uses object-fit cover with the object-position given under Assets, 12px corners, no shadow; photos on Warm White get a 1px Rule outline. Captions in Source Sans 13px Clay Gray. Drawn in code: the favicon, portion dots, steam squiggle, the stamp and chips. Icons: lucide-react only, stroke width 1.75.

## Tone
Farm-table warm: short lines, real ingredients, honest numbers, one joke about leftovers.

---
— Prompt by VibeFather · https://vibefather.ai/t/meal-kit-subscription-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
