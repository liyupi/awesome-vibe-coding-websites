---
name: "Fashion Online Store"
colors:
  warm_white: "#FAF7F1"
  bone: "#F2EDE3"
  linen: "#E9E2D4"
  card: "#FFFFFF"
  ink: "#1C1A17"
  ink_soft: "#4A4640"
  taupe: "#8C857A"
  rule: "#DED6C6"
  ochre: "#A97C2F"
  ochre_deep: "#8C6623"
  olive_gray: "#6F7263"
typography:
  display_h1_h2_h3_product_names_prices_in_large_sizes_the_wordmark: { family: "Playfair Display", weights: [500, 600] }
  text_and_ui_body_eyebrows_letterspaced_caps_buttons_nav_forms_captions_all_money_font_variant_numeric_tabular_nums: { family: "Figtree", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1280px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.6vw, 96px) Playfair 500, line-height 1.02; H2 clamp(32px, 4vw, 56px) Playfair 500; H3 24px Playfair 600; italic phrases in headings use Playfair 500 italic (marked with *asterisks* in content.ts, rendered <em>); lead Figtree 400 18px / 1.7 Ink at 88%; body Figtree 400 16px / 1.7 (max-width 64ch); eyebrow Figtree 600 12px uppercase letter-spacing 0.22em Taupe; caption Figtree 400 13px Taupe. Buttons: height 52px, padding 0 30px, Figtree 600 13px uppercase letter-spacing 0.16em. Primary: Ink fill, Warm White text. Secondary: 1px Ink border, Ink text. Small buttons 38px. Inputs: height 52px, 1px Rule border, Card fill, 16px Figtree, focus border Ink. Focus ring everywhere: 2px Ochre outline with 3px offset."
radius: "2px on cards, buttons, inputs, chips, photos, the drawer and checkout panels — nearly square. 999px only for the cart badge, swatch rings, dots and chips."
---

# Fashion Online Store — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FAF7F1` — Page background on all pages.
- **Bone** `#F2EDE3` — Alternate section background (materials, editorial band), hover fill, image wells.
- **Linen** `#E9E2D4` — Filter chips, secondary surfaces, the size-guide table banding.
- **Card** `#FFFFFF` — Cards, inputs, the cart drawer, checkout panels.
- **Ink** `#1C1A17` — Headlines and body text, primary buttons (fill), icon color.
- **Ink Soft** `#4A4640` — Drawer and panel background on dark, footer background.
- **Taupe** `#8C857A` — Secondary text, captions, eyebrows, disabled sizes (at 45% opacity).
- **Rule** `#DED6C6` — 1px hairlines, card borders, input borders, dividers.
- **Ochre** `#A97C2F` — The one accent: sale ticks, selected swatch ring, focus ring, the free-shipping bar fill, price strikes.
- **Ochre Deep** `#8C6623` — Ochre hover state, badge text.
- **Olive Gray** `#6F7263` — Quiet second color: 'in stock' dot, material ticks, sustainability notes.

## Typography
- **Display: H1, H2, H3, product names, prices in large sizes, the wordmark** — Playfair Display (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows (letterspaced caps), buttons, nav, forms, captions, all money (font-variant-numeric tabular-nums)** — Figtree (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1280px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.6vw, 96px) Playfair 500, line-height 1.02; H2 clamp(32px, 4vw, 56px) Playfair 500; H3 24px Playfair 600; italic phrases in headings use Playfair 500 italic (marked with *asterisks* in content.ts, rendered <em>); lead Figtree 400 18px / 1.7 Ink at 88%; body Figtree 400 16px / 1.7 (max-width 64ch); eyebrow Figtree 600 12px uppercase letter-spacing 0.22em Taupe; caption Figtree 400 13px Taupe. Buttons: height 52px, padding 0 30px, Figtree 600 13px uppercase letter-spacing 0.16em. Primary: Ink fill, Warm White text. Secondary: 1px Ink border, Ink text. Small buttons 38px. Inputs: height 52px, 1px Rule border, Card fill, 16px Figtree, focus border Ink. Focus ring everywhere: 2px Ochre outline with 3px offset.
- Radius: 2px on cards, buttons, inputs, chips, photos, the drawer and checkout panels — nearly square. 999px only for the cart badge, swatch rings, dots and chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals, the drawer and page motion; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for filters, accordion and checkout steps. Whisper-quiet — small distances, long durations.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and animate to rest over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 90ms (index prop).
- Hero: the campaign photo scales from 1.05 to 1.0 over 2800ms --ease-out; scrolling translates it 0 to 8% (Motion useScroll, offset ['start start', 'end start']). H1 lines rise from translateY(20px) with 150ms stagger; the eyebrow letters track from 0.3em to 0.22em as it fades in.
- Product cards: hover crossfades to the alternate photo over 500ms (both photos stacked, opacity swap), the name indents 4px, and the quick-add line ('Quick add +') fades up from the bottom edge on shop cards.
- Grid filtering: cards use Motion layout with AnimatePresence mode 'popLayout'; leaving cards fade to 0.97 and slide 8px over 220ms, survivors glide over 420ms --ease-io; the count crossfades.
- Cart drawer: Ink overlay fades to 40% over 300ms; the drawer slides from the right (x 100% → 0) over 420ms --ease-out; closing reverses in 300ms. Line add: the header badge scales 1 → 1.3 → 1 (400ms) and a small '+1' chip floats from the add button toward the cart (600ms, fade). Line qty changes count the subtotal over 300ms. The free-shipping bar fills with --ease-io 600ms; on crossing the threshold the caption crossfades to 'Shipping is on us.'
- Checkout steps: crossfade with a 14px horizontal slide, 300ms --ease-io (AnimatePresence mode 'wait'). Placed: the order number types character by character over 800ms and a drawn check circle strokes in over 600ms.
- Size guide accordion: height 0 to auto, opacity 0 to 1, 340ms --ease-io; the Plus rotates 45 degrees into an X; the table rows band in with 40ms stagger.
- Swatches: selection moves a 2px Ochre ring between swatches (Motion layoutId); unavailable sizes show a diagonal strike and refuse clicks with a 3px shake.
- Header: transparent over the home hero with Warm White text; after 40px of scroll it gets Warm White at 95% opacity, backdrop-filter blur(10px), Ink text, 1px Rule border, 250ms. Solid from the start on other pages.
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 300ms on hover and focus-visible.
- prefers-reduced-motion: reduce — disable photo scales and parallax, H1 rise, floating '+1', count-ups, type-in and layout animations (render at rest). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, quiet luxury studio style, all six made for this template in one consistent look: warm white light, bone and ink palette, garments on forms, hangers, lines and folded stacks — never people, faces, hands or full identifiable bodies. No readable text or logos anywhere (care labels stay blank). Every photo uses object-fit cover with the object-position given under Assets, 2px corners, no shadow; photos on Warm White get a 1px Rule outline. Captions in Figtree 13px Taupe. Drawn in code: the favicon, the wordmark (type only), the size-guide table, swatch rings, the free-shipping bar, check circles and the neutral checkout payment row (drawn generic card and chip shapes — never real payment marks). Icons: lucide-react only, stroke width 1.5.

## Tone
Calm and specific, like a good garment tag. Short lines, concrete fabric and care facts, no hype adjectives, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/fashion-online-store · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
