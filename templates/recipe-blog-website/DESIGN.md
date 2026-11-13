---
name: "Recipe Blog Website"
colors:
  cream: "#FBF6EC"
  panel: "#FFFFFF"
  line: "#E7DECB"
  ink: "#26221A"
  soft_ink: "#6E6656"
  tomato: "#C8442E"
  tomato_deep: "#A63623"
  tomato_mist: "#F9E8E1"
  sage: "#7C8A5A"
  slate_ink: "#231109"
  good: "#4C8A54"
typography:
  display_h1_recipe_titles_the_wordmark_italic_story_lines_fraunces_warm_kitchen_serif: { family: "Fraunces", weights: [400, 600] }
  text_and_ui_body_steps_forms_timers_tabular_numerals_for_quantities_and_countdowns: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; reading column max 760px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 clamp(34px, 4.8vw, 58px) Fraunces 600, line-height 1.06; recipe titles clamp(28px, 3.8vw, 44px) Fraunces 600; card titles Fraunces 600 20px; lead 17px Inter 400 / 1.65 at 90%; body 15.5px / 1.7; story paragraphs Fraunces italic 18px / 1.7; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; meta and captions 13px Soft Ink; quantities Inter 600 15px tabular. Buttons: height 46px, Inter 600 14px; primary Tomato fill with white text, ghost 1px Line border on Panel. Inputs: height 46px, Panel fill, 1px Line border, focus Tomato border + 2px offset ring. Focus everywhere: 2px Tomato outline, 3px offset."
radius: "12px on cards and panels; 10px on buttons, inputs, chips; 999px for pills and timer chips."
---

# Recipe Blog Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FBF6EC` — Page background throughout — warm kitchen light.
- **Panel** `#FFFFFF` — Cards, ingredient panel, scaler.
- **Line** `#E7DECB` — 1px hairlines: card borders, dividers, checked rows.
- **Ink** `#26221A` — Headlines and body ink, icons.
- **Soft Ink** `#6E6656` — Blurbs, meta, captions, eyebrows.
- **Tomato** `#C8442E` — The one accent: primary buttons, active chips, checked ticks, timer running, focus ring, links.
- **Tomato Deep** `#A63623` — Hover and pressed primary.
- **Tomato Mist** `#F9E8E1` — Selected chip fills, diet tags, timer done tint.
- **Sage** `#7C8A5A` — Diet tag green (vegetarian), difficulty dots' filled state.
- **Slate Ink** `#231109` — Text on tomato fills.
- **Good** `#4C8A54` — Timer done, subscribe success, check ticks.

## Typography
- **Display: H1, recipe titles, the wordmark, italic story lines — Fraunces, warm kitchen serif** — Fraunces (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, steps, forms, timers; tabular numerals for quantities and countdowns** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; reading column max 760px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 clamp(34px, 4.8vw, 58px) Fraunces 600, line-height 1.06; recipe titles clamp(28px, 3.8vw, 44px) Fraunces 600; card titles Fraunces 600 20px; lead 17px Inter 400 / 1.65 at 90%; body 15.5px / 1.7; story paragraphs Fraunces italic 18px / 1.7; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; meta and captions 13px Soft Ink; quantities Inter 600 15px tabular. Buttons: height 46px, Inter 600 14px; primary Tomato fill with white text, ghost 1px Line border on Panel. Inputs: height 46px, Panel fill, 1px Line border, focus Tomato border + 2px offset ring. Focus everywhere: 2px Tomato outline, 3px offset.
- Radius: 12px on cards and panels; 10px on buttons, inputs, chips; 999px for pills and timer chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Kitchen-calm: quick, small moves.
- Reveal: cards and blocks rise 10px over 500ms as they enter (Motion whileInView, once); grid staggers 50ms per card.
- LeadCard: its photo settles from scale 1.02 over 1200ms once.
- Filtering: chips fill Tomato Mist with a 140ms ease; cards dim 20% and sink 2px when filtered out (180ms); the count line crossfades.
- ServingsScaler: quantity changes crossfade 120ms; an item rounding up pops its count once (140ms).
- CheckRow: the tick draws (SVG stroke, 160ms) and the text takes a soft strike; unchecking reverses.
- StepTimer: the countdown's digits swap without animation (tabular width holds); 'Done' flips the chip to Tomato Mist with a single ring pulse (skipped under reduced motion).
- Subscribe: crossfades to the Good line (240ms).
- Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no reveals, settles, pops or pulses; the tick keeps counting (information); color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
Six editorial food photographs made for this template in one consistent style: natural daylight, linen and ceramic surfaces, finished home-cooked dishes — a braised tomato butter pasta, a roast chicken platter, a grain salad bowl, a greens-and-egg skillet, and a plum cake slice. No people (except the cook's portrait), no readable text, no logos, no brand-name packaging. The cook portrait is an AI-generated fictional person (a woman in her 30s at a kitchen counter, natural working shot, not resembling any real individual). Photos object-fit cover, 12px corners; cards get a 1px Line outline. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Tone
Kitchen-table warm: one small story per recipe, exact grams, no fuss. One joke about doing the dishes.

---
— Prompt by VibeFather · https://vibefather.ai/t/recipe-blog-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
