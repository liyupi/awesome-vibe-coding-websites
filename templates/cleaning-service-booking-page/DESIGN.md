---
name: "Cleaning Service Booking Page"
colors:
  white_page: "#FBFDFF"
  mist: "#EFF4F8"
  card: "#FFFFFF"
  sky_ink: "#1F5FA8"
  sky_deep: "#174A85"
  sky_mist: "#E3EFFA"
  slate: "#5A6B7A"
  citrus: "#F2A93B"
  citrus_deep: "#D98F1F"
  good: "#2E9E6B"
  rule: "#DDE6EC"
typography:
  display_h1_h2_h3_section_labels_the_price_figure_the_wordmark: { family: "Poppins", weights: [500, 700] }
  text_and_ui_body_buttons_checklist_form_fields_captions_tabular_numerals_for_all_prices: { family: "Plus Jakarta Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 5.8vw, 72px) Poppins 700, line-height 1.06; H2 clamp(28px, 3.8vw, 44px) Poppins 700; H3 20px Poppins 500; the live price Poppins 700 40px Citrus tabular; lead Plus Jakarta 400 17px / 1.65; body 15.5px / 1.7 (max-width 64ch); eyebrow Plus Jakarta 700 12px uppercase letter-spacing 0.14em Slate; caption 13px Slate. Buttons: height 50px, Plus Jakarta 700 14.5px. Primary: Sky Ink fill, Card text. Secondary: 1px Sky Ink border, Sky Ink text. Inputs: height 50px, 1px Rule border, Card fill, focus Sky Ink border. Focus ring everywhere: 2px Sky Ink outline with 3px offset."
radius: "16px on cards, the calculator, buttons, inputs, add-on tiles and the summary. 999px only for pills, steppers, badges and sparkles."
---

# Cleaning Service Booking Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **White Page** `#FBFDFF` — Page background throughout.
- **Mist** `#EFF4F8` — Alternate section background (Checklist, Reviews), chips, hover fills.
- **Card** `#FFFFFF` — Calculator card, summary panel, add-on tiles, confirmation.
- **Sky Ink** `#1F5FA8` — Primary: headlines' accent color, primary buttons, selected pills, focus ring.
- **Sky Deep** `#174A85` — Primary hover, footer background.
- **Sky Mist** `#E3EFFA` — Selected chip fills, stepper wells, the summary's total strip.
- **Slate** `#5A6B7A` — Secondary text, captions, eyebrows, unselected labels.
- **Citrus** `#F2A93B` — The one warm accent: the live price figure, add-on prices, sparkles, 'save' badges, the confirmed stamp.
- **Citrus Deep** `#D98F1F` — Citrus hover, discount pill text.
- **Good** `#2E9E6B` — Checklist checks, the trust strip icons, the confirmation check.
- **Rule** `#DDE6EC` — 1px hairlines, card borders, input borders.

## Typography
- **Display: H1, H2, H3, section labels, the price figure, the wordmark** — Poppins (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, buttons, checklist, form fields, captions; tabular numerals for all prices** — Plus Jakarta Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 5.8vw, 72px) Poppins 700, line-height 1.06; H2 clamp(28px, 3.8vw, 44px) Poppins 700; H3 20px Poppins 500; the live price Poppins 700 40px Citrus tabular; lead Plus Jakarta 400 17px / 1.65; body 15.5px / 1.7 (max-width 64ch); eyebrow Plus Jakarta 700 12px uppercase letter-spacing 0.14em Slate; caption 13px Slate. Buttons: height 50px, Plus Jakarta 700 14.5px. Primary: Sky Ink fill, Card text. Secondary: 1px Sky Ink border, Sky Ink text. Inputs: height 50px, 1px Rule border, Card fill, focus Sky Ink border. Focus ring everywhere: 2px Sky Ink outline with 3px offset.
- Radius: 16px on cards, the calculator, buttons, inputs, add-on tiles and the summary. 999px only for pills, steppers, badges and sparkles.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and price changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the confirmation swap. Fresh and quick.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 600ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Price line: every quote change counts the total to its new value over 400ms --ease-io (tabular-nums hold width); changed line items flash a Sky Mist background 300ms once.
- Steppers: the number pops 1.0→1.15→1.0 on each step (200ms); the +/- buttons are 40px circles.
- Frequency pills: the selected pill fills Sky Ink with the 'save 15%' / 'save 25%' badge in Citrus scaling in (240ms).
- Add-on tiles: toggling sweeps a Citrus check across the tile (a 240ms width reveal) and the price line item slides in.
- Date chips: selecting fills Sky Mist with a Sky Ink ring; unavailable days sit at 40% with a strike; the whole strip scrolls horizontally with snap.
- Checklist: the Good checks draw once when scrolled into view (stroke-dashoffset, 40ms stagger).
- Confirmation: the panel swaps with a 280ms --ease-io slide; the drawn stamp (Citrus 'BOOKED' ring) scales in with one soft overshoot; sparkles (small drawn 4-point stars) pop once around it.
- Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no counting (instant values), no sweeps, pops or draws; color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Bright, airy real photography, all four made for this template in one consistent style: daylight rooms, white and sky-blue with citrus accents, mid-clean details (no before/after diptychs — just fresh rooms). Never a person — rooms, sinks, folded towels, caddies. No readable text or logos. Every photo uses object-fit cover with the object-position given under Assets, 16px corners, no shadow; photos on White get a 1px Rule outline. Captions in Plus Jakarta Sans 13px Slate. Drawn in code: the sparkles, the stamp, stepper glyphs, checks and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Fresh, plain and a little bubbly — clean windows, clear words. Concrete inclusions, no 'deep-clean masterpiece' fluff, one joke about baseboards.

---
— Prompt by VibeFather · https://vibefather.ai/t/cleaning-service-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
