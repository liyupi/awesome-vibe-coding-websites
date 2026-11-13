---
name: "Furniture Store Catalog"
colors:
  gallery_white: "#FAF8F4"
  linen: "#F0EBE0"
  card: "#FFFFFF"
  walnut: "#5B4231"
  walnut_deep: "#402E21"
  walnut_mist: "#EAE1D5"
  ink: "#2C2925"
  slate_gray: "#6B655B"
  slate_blue: "#4A6B7C"
  rule: "#E2DBCC"
  good: "#5E7D4E"
typography:
  display_h1_h2_h3_product_names_prices_the_wordmark_zilla_slab_workshop_serif: { family: "Zilla Slab", weights: [400, 600] }
  text_and_ui_body_eyebrows_buttons_forms_captions_dimension_labels_tabular_numerals_for_dimensions_and_prices: { family: "Archivo", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76% under 1024px, 60px under 640px. Type scale: H1 clamp(42px, 6.2vw, 78px) Zilla 600, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Zilla 600; product names Zilla 600 22px; prices Zilla 600 24px Walnut tabular; lead Archivo 400 17.5px / 1.65 Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Archivo 600 12px uppercase letter-spacing 0.16em Slate Gray; caption 13px Slate Gray. Buttons: height 50px, Archivo 600 14px. Primary: Walnut fill, Card text. Secondary: 1px Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Walnut border. Focus ring everywhere: 2px Walnut outline with 3px offset."
radius: "6px on cards, buttons, inputs, chips and photos. 999px only for pills, chips and the bag badge."
---

# Furniture Store Catalog — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Gallery White** `#FAF8F4` — Page background on both pages.
- **Linen** `#F0EBE0` — Alternate section background (Craft, Locator), chips, hover fill.
- **Card** `#FFFFFF` — Product cards, the bag drawer, swatch panel.
- **Walnut** `#5B4231` — Primary: headlines' accents, primary buttons, selected chips, focus ring.
- **Walnut Deep** `#402E21` — Hover and pressed, footer background.
- **Walnut Mist** `#EAE1D5` — Selected chip fills, icon wells, diagram wood fill base.
- **Ink** `#2C2925` — Headlines and body ink, icon color.
- **Slate Gray** `#6B655B` — Secondary text, captions, eyebrows, dimension labels.
- **Slate Blue** `#4A6B7C` — The one cool accent: dimension arrows and labels, swatch selection ring, bag badge, focus-visible extras.
- **Rule** `#E2DBCC` — 1px hairlines, card borders, input borders, grid lines.
- **Good** `#5E7D4E` — In-stock ticks, bag check, showroom open dot.

## Typography
- **Display: H1, H2, H3, product names, prices, the wordmark — Zilla Slab, workshop serif** — Zilla Slab (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions, dimension labels; tabular numerals for dimensions and prices** — Archivo (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76% under 1024px, 60px under 640px. Type scale: H1 clamp(42px, 6.2vw, 78px) Zilla 600, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Zilla 600; product names Zilla 600 22px; prices Zilla 600 24px Walnut tabular; lead Archivo 400 17.5px / 1.65 Ink at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Archivo 600 12px uppercase letter-spacing 0.16em Slate Gray; caption 13px Slate Gray. Buttons: height 50px, Archivo 600 14px. Primary: Walnut fill, Card text. Secondary: 1px Ink border. Inputs: height 50px, 1px Rule border, Card fill, focus Walnut border. Focus ring everywhere: 2px Walnut outline with 3px offset.
- Radius: 6px on cards, buttons, inputs, chips and photos. 999px only for pills, chips and the bag badge.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and gallery crossfades; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the drawer and swatch swaps. Workshop-steady.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the room photo scales 1.03→1.0 over 2200ms; the H1 rises; a dimension-line detail under the eyebrow draws once.
- Grid filtering: cards use Motion layout popLayout (200ms out / 380ms glide); the live count crossfades; empty state: 'Nothing in that combination — the catalogue grows quarterly.'
- Product cards: hover lifts 3px and the material chip fills Walnut.
- Product gallery: thumbnails swap the main photo with a 240ms crossfade.
- DimensionsDiagram: the elevation draws (stroke-dashoffset) on view; dimension arrows and labels fade in last; swatch change crossfades the wood fill (Slate Blue ring marks the selected finish).
- Bag: adding pops the badge 1→1.3→1; the drawer slides from the right 420ms --ease-out; qty changes count the subtotal over 300ms; the checkout stub confirms with a drawn Slate Blue 'ORDER LIST' stamp; persisted.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, draws, counts or glides; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real styled-room photography, all six made for this template in one consistent style: gallery-white walls, walnut and oak pieces, slate-blue accents, soft daylight — the furniture is the star. Never a person, never a recognizable designer silhouette. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 6px corners, no shadow; photos on Gallery White get a 1px Rule outline. Captions in Archivo 13px Slate Gray. Drawn in code: the favicon, room nav glyphs, the dimensions diagram elevations, swatch chips and the stamp. Icons: lucide-react only, stroke width 1.75.

## Tone
Workshop-plain: exact millimetres, honest materials, gentle pride. One joke about instructions.

---
— Prompt by VibeFather · https://vibefather.ai/t/furniture-store-catalog · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
