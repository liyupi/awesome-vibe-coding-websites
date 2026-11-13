---
name: "Florist Shop Website"
colors:
  cream_blush: "#FBF6F1"
  petal: "#F4E6DE"
  card: "#FFFDFA"
  leaf: "#33523F"
  leaf_deep: "#243B2D"
  moss: "#7E8F7C"
  poppy: "#D4574B"
  poppy_deep: "#B23F35"
  ink_green: "#2A2E26"
  rule: "#E7DAD1"
typography:
  display_h1_h2_bouquet_names_prices_in_large_sizes_the_wordmark_notecard_script_line: { family: "Lora", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_form_fields_captions_tabular_numerals_for_prices_and_the_countdown: { family: "Albert Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.2vw, 78px) Lora 500, line-height 1.04; H2 clamp(28px, 3.8vw, 46px) Lora 500; H3 22px Lora 600; italic phrases in headings use Lora 500 italic (marked *asterisks*, rendered <em>); lead Albert Sans 400 17.5px / 1.7 Ink Green at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.16em Moss; caption 13px Moss. Buttons: height 50px, Albert Sans 700 14px. Primary: Leaf fill, Card text. Secondary: 1px Leaf border, Leaf text. Small 38px. Inputs: height 48px, 1px Rule border, Card fill, focus Leaf border. Focus ring everywhere: 2px Leaf outline with 3px offset."
radius: "14px on cards, buttons, inputs, chips, the notecard and the drawer. 999px only for pills, day chips, the cart badge and the ribbon dot."
---

# Florist Shop Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream Blush** `#FBF6F1` — Page background throughout.
- **Petal** `#F4E6DE` — Alternate section background (Reviews, Care), hover fill, chips.
- **Card** `#FFFDFA` — Bouquet cards, notecard preview, drawer, placed card.
- **Leaf** `#33523F` — Primary: headlines' weight color, primary buttons, size selected, focus ring.
- **Leaf Deep** `#243B2D` — Primary hover, footer background.
- **Moss** `#7E8F7C` — Secondary text, captions, eyebrows, closed days.
- **Poppy** `#D4574B` — The one warm accent: prices, the cutoff countdown, selected date, cart badge, ribbon details.
- **Poppy Deep** `#B23F35` — Poppy hover, pressed, the countdown's final hour.
- **Ink Green** `#2A2E26` — Body text, bouquet names, icon color.
- **Rule** `#E7DAD1` — 1px hairlines, card borders, input borders, dividers.

## Typography
- **Display: H1, H2, bouquet names, prices in large sizes, the wordmark, notecard script line** — Lora (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals for prices and the countdown** — Albert Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.2vw, 78px) Lora 500, line-height 1.04; H2 clamp(28px, 3.8vw, 46px) Lora 500; H3 22px Lora 600; italic phrases in headings use Lora 500 italic (marked *asterisks*, rendered <em>); lead Albert Sans 400 17.5px / 1.7 Ink Green at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.16em Moss; caption 13px Moss. Buttons: height 50px, Albert Sans 700 14px. Primary: Leaf fill, Card text. Secondary: 1px Leaf border, Leaf text. Small 38px. Inputs: height 48px, 1px Rule border, Card fill, focus Leaf border. Focus ring everywhere: 2px Leaf outline with 3px offset.
- Radius: 14px on cards, buttons, inputs, chips, the notecard and the drawer. 999px only for pills, day chips, the cart badge and the ribbon dot.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals, the drawer and price changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the notecard and checkout swaps. Light-footed and friendly.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- CutoffBanner: the countdown ticks every minute (tabular numerals hold width); in the final hour the figure turns Poppy Deep and the banner gently pulses once a minute (off under reduced motion).
- Bouquet cards: hover lifts 3px; the size picker's prices crossfade 150ms; selecting a size fills the chip Leaf; the vase toggle slides a small drawn vase glyph in.
- Add to cart: the button reads 'Added ✓' for 1300ms; a small petal (drawn) drifts from the button toward the cart button and fades (700ms, once); the badge pops 1→1.3→1.
- Notecard preview: the drawn notecard sits beside the message field; typed text appears on the card in Lora italic in real time, with a soft underline draw; the signature line ('— with love, [name]') types once when the name field completes.
- Date picker: day chips fill Petal on hover and Leaf (Card text) when selected; the same-day chip carries a Poppy 'today' dot that disappears after the cutoff, the chip itself greying out with the caption 'tomorrow''s earliest now'.
- Cart drawer: overlay fades 300ms, drawer slides from the right 420ms --ease-out; qty steppers pulse the line's subtotal count (300ms); removing collapses the row 240ms.
- Checkout swap: the placed card rises 16px (320ms --ease-io) with a drawn Poppy ribbon 'ORDER TIED' stamp rotating in -6deg→-2deg; the order number (shopInitials-####) types 700ms.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no pulses, petals, type-ins or counts; drawer and swaps appear; color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Warm real photography, all six made for this template in one consistent style: soft daylight, blush and cream with deep green leaves and poppy accents, one shop's world — buckets, stems, wrapped paper, workbench corners. Never a person (no faces, no hands); no readable signage. Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on Cream get a 1px Rule outline. Captions in Albert Sans 13px Moss. Drawn in code: the notecard, the vase glyph, the petal, the ribbon stamp, chips and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Warm, lightly witty, flower-literate but never gatekeep-y. Concrete stems and seasonal notes, one joke about lilies, no 'express your emotions through flowers'.

---
— Prompt by VibeFather · https://vibefather.ai/t/florist-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
