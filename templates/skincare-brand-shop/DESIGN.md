---
name: "Skincare Brand Shop"
colors:
  bone: "#F6F1E7"
  clay: "#EDE5D6"
  card: "#FFFEFA"
  olive_ink: "#3B4231"
  olive_deep: "#2B3125"
  olive_mist: "#E5E9DD"
  ink: "#2C2A24"
  umber: "#6E6656"
  blush: "#D9A795"
  blush_deep: "#C08A75"
  rule: "#DFD7C5"
  good: "#5F7D5A"
typography:
  display_h1_h2_product_names_prices_the_wordmark_cormorant_garamond_apothecary_serif: { family: "Cormorant Garamond", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_quiz_options_forms_captions_tabular_numerals_for_prices: { family: "Work Sans", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px — an apothecary's calm. Type scale: H1 clamp(42px, 6.2vw, 78px) Cormorant 500, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Cormorant 500; product names Cormorant 600 24px; prices Cormorant 600 26px Blush tabular; lead Work Sans 400 17.5px / 1.65 Olive Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Work Sans 600 12px uppercase letter-spacing 0.18em Umber; caption 13px Umber. Buttons: height 50px, Work Sans 600 14px. Primary: Olive Ink fill, Card text. Quiz CTA: Blush Deep fill, Card text. Secondary: 1px Olive Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Olive Ink border. Focus ring everywhere: 2px Olive Ink outline with 3px offset."
radius: "2px on cards, buttons, inputs, chips and photos — bottle-label corners. 999px only for pills, chips and the cart badge."
---

# Skincare Brand Shop — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Bone** `#F6F1E7` — Page background throughout.
- **Clay** `#EDE5D6` — Alternate section background (Products, Glossary), chips, hover fill.
- **Card** `#FFFEFA` — Product cards, the quiz panel, cart drawer.
- **Olive Ink** `#3B4231` — Headlines and body ink, primary buttons, focus ring.
- **Olive Deep** `#2B3125` — Hover and pressed, footer background.
- **Olive Mist** `#E5E9DD` — Selected chip fills, icon wells, active quiz step.
- **Ink** `#2C2A24` — Secondary headline ink, icon color.
- **Umber** `#6E6656` — Secondary text, captions, eyebrows, ingredient tails.
- **Blush** `#D9A795` — The one warm accent: prices, quiz highlight, active ingredient dots, focus-visible extras.
- **Blush Deep** `#C08A75` — Hover and pressed states.
- **Rule** `#DFD7C5` — 1px hairlines, card borders, input borders, drawer dividers.
- **Good** `#5F7D5A` — Cart ticks, vegan badge, in-stock note.

## Typography
- **Display: H1, H2, product names, prices, the wordmark — Cormorant Garamond, apothecary serif** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, quiz options, forms, captions; tabular numerals for prices** — Work Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px — an apothecary's calm. Type scale: H1 clamp(42px, 6.2vw, 78px) Cormorant 500, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Cormorant 500; product names Cormorant 600 24px; prices Cormorant 600 26px Blush tabular; lead Work Sans 400 17.5px / 1.65 Olive Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Work Sans 600 12px uppercase letter-spacing 0.18em Umber; caption 13px Umber. Buttons: height 50px, Work Sans 600 14px. Primary: Olive Ink fill, Card text. Quiz CTA: Blush Deep fill, Card text. Secondary: 1px Olive Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Olive Ink border. Focus ring everywhere: 2px Olive Ink outline with 3px offset.
- Radius: 2px on cards, buttons, inputs, chips and photos — bottle-label corners. 999px only for pills, chips and the cart badge.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and quiz steps; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for drawer and detail swaps. Slow and certain — like a good emulsion.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- Hero: the texture photo scales 1.04→1.0 over 2400ms; the H1 rises; a drawn sprig beside the eyebrow draws once.
- Quiz: steps slide 16px horizontally, 280ms --ease-io (AnimatePresence mode 'wait'); option chips fill Olive Mist→Olive Ink on select (150ms); the ResultPanel's three products stagger in 90ms with prices counting up.
- Product cards: hover lifts 3px and the active dot brightens; clicking opens the detail view crossfading in place.
- Product detail: the ingredient list rows stagger 40ms; swatch/texture figure crossfades.
- Cart: adding pops the badge 1→1.3→1; the drawer slides from the right 420ms --ease-out; qty changes count the subtotal over 300ms; checkout stub confirms with a drawn Blush 'ORDER NOTES' seal (this demo stores locally).
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, staggered reveals or counts; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography, all six made for this template in one consistent style: bone-light apothecacy, glass and clay, texture close-ups on slate. Never a face or skin close-up — bottles, droppers, drops and swatches only. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 2px corners, no shadow; photos on Bone get a 1px Rule outline. Captions in Work Sans 13px Umber. Drawn in code: the favicon, sprig accents, active dots, quiz step marks, the seal and chips. Icons: lucide-react only, stroke width 1.75.

## Tone
Apothecary-calm: short factual lines, percentages and actives named, one dry joke about 12-step routines.

---
— Prompt by VibeFather · https://vibefather.ai/t/skincare-brand-shop · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
