---
name: "Vacation Rental Booking Page"
colors:
  cream: "#F7F3E9"
  bark: "#EFE8D9"
  card: "#FDFBF5"
  timber: "#4A3A2C"
  pine: "#2E3B2E"
  moss: "#6E7F5E"
  clay: "#B5652F"
  clay_deep: "#97521F"
  rust: "#8C4A3C"
  rule: "#DFD6C3"
typography:
  display_h1_h2_h3_the_property_name_totals_day_prices_the_wordmark: { family: "Bitter", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_captions_all_money_math_font_variant_numeric_tabular_nums: { family: "Work Sans", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.4vw, 88px) Bitter 600, line-height 1.02; H2 clamp(32px, 4.2vw, 54px) Bitter 600, line-height 1.08; H3 24px Bitter 600; lead Work Sans 400 18px / 1.7 Timber at 88%; body Work Sans 400 16px / 1.7 (max-width 64ch); eyebrow Work Sans 600 12px uppercase letter-spacing 0.16em Moss, preceded by a 24px x 2px Clay line with 12px gap; caption Work Sans 400 13px Moss. Buttons: height 50px, padding 0 26px, Work Sans 600 14px letter-spacing 0.04em. Primary: Clay fill, Card text. Secondary: 1px Timber border, Timber text. Small buttons 38px. Inputs: height 50px, 1px Rule border, Card fill, 16px Work Sans, focus border Clay. Focus ring everywhere: 2px Clay outline with 3px offset."
radius: "12px on cards, inputs, chips, photos, the calendar panel and the request card. 999px only for pills, the guest stepper buttons and the map pin."
---

# Vacation Rental Booking Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#F7F3E9` — Page background throughout.
- **Bark** `#EFE8D9` — Alternate section background (The cabin, Area guide), hover fill for rows and chips.
- **Card** `#FDFBF5` — Card surfaces (calendar panel, breakdown, rules, form, gallery captions), input fill.
- **Timber** `#4A3A2C` — Headlines and body text, primary outline buttons, icon color.
- **Pine** `#2E3B2E` — Footer, photo overlays (as rgba(46,59,46,x)), deep calendar chrome.
- **Moss** `#6E7F5E` — Secondary text, eyebrows, captions, available-day prices, weekend price accent.
- **Clay** `#B5652F` — The one accent: primary buttons, selected date fill, total figure, focus ring, map pin.
- **Clay Deep** `#97521F` — Primary button hover, selected range edges.
- **Rust** `#8C4A3C` — Booked-day strike color, rules warning icons, the 'from' rate tick.
- **Rule** `#DFD6C3` — 1px hairlines, card borders, input borders, calendar grid lines.

## Typography
- **Display: H1, H2, H3, the property name, totals, day prices, the wordmark** — Bitter (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, captions, all money math (font-variant-numeric tabular-nums)** — Work Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.4vw, 88px) Bitter 600, line-height 1.02; H2 clamp(32px, 4.2vw, 54px) Bitter 600, line-height 1.08; H3 24px Bitter 600; lead Work Sans 400 18px / 1.7 Timber at 88%; body Work Sans 400 16px / 1.7 (max-width 64ch); eyebrow Work Sans 600 12px uppercase letter-spacing 0.16em Moss, preceded by a 24px x 2px Clay line with 12px gap; caption Work Sans 400 13px Moss. Buttons: height 50px, padding 0 26px, Work Sans 600 14px letter-spacing 0.04em. Primary: Clay fill, Card text. Secondary: 1px Timber border, Timber text. Small buttons 38px. Inputs: height 50px, 1px Rule border, Card fill, 16px Work Sans, focus border Clay. Focus ring everywhere: 2px Clay outline with 3px offset.
- Radius: 12px on cards, inputs, chips, photos, the calendar panel and the request card. 999px only for pills, the guest stepper buttons and the map pin.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and calendar transitions; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for month swaps and the form swap. Nothing bounces.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and animate to rest over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 80ms (index prop).
- Hero photo: on load scales from 1.06 to 1.0 over 2400ms --ease-out; scrolling translates it 0 to 10% (Motion useScroll, offset ['start start', 'end start']) and the headline block fades to 0.3. H1 rises from translateY(24px) with 140ms stagger. The 'from $[NIGHTLY]' tick slides in last with a small 2px underline draw.
- Gallery: photos rise 6px and darken their caption bar on hover; clicking opens the Lightbox (Pine overlay at 82%, photo at max 82vh, caption in Card, X closes, arrows and Escape navigate) with a 240ms fade and 8px scale settle.
- Calendar: month swaps slide 24px horizontally over 280ms --ease-io (AnimatePresence mode 'wait'). Hovering a day lifts the price 2px. Selecting start fills the cell Clay; selecting an end draws the range as a Clay/15% band behind the days with rounded ends; booked cells refuse selection with a 4px shake. The breakdown re-lines item by item (each row fades up 8px, 60ms stagger) and the total counts to the new value over 500ms.
- Breakdown: the weekly discount row appears with a Moss check drawing when nights reach 7.
- Rules: each rule row reveals with its icon drawing once (stroke-dashoffset) and 80ms stagger.
- Mini-map: on view, the road lines draw over 800ms, then the pin drops with a soft overshoot and the guide dots pop with 100ms stagger.
- Booking form: guest stepper counts pulse 1.0→1.15→1.0 over 240ms; submitting slides the form out and the RequestCard in (16px rise, 320ms --ease-io); the reference (brandInitials + '-' + four digits) types character by character over 700ms.
- Header: transparent over the hero with Card text; after 40px of scroll it gets Cream at 94% opacity, backdrop-filter blur(10px), Timber text, 1px Rule border, 250ms transition; a small Clay 'Book now' → #book button is always in the header.
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 300ms on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the hero scale and parallax, H1 rise, map draws, count-ups, type-in, shakes and slides (render at rest). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, warm and woodsy, all six made for this template in one consistent style: dusk lantern light and morning mist, timber and moss palette, documentary editorial look, fine grain. Never a person — exteriors, rooms, porch, dock. No readable text or logos anywhere. Every photo uses object-fit cover with the object-position given under Assets, 12px corners, no shadow; photos on Cream get a 1px Rule outline. Captions under photos in Work Sans 13px Moss. Drawn in code: the favicon, the wordmark (type only), the mini-map, price pills, the check circle, dividers. Icons: lucide-react only, stroke width 1.5.

## Tone
Warm and matter-of-fact, like the owner leaving a note on the fridge. Short sentences, exact numbers (miles, minutes, dollars), no 'nestled' or 'retreat' clichés, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/vacation-rental-booking-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
