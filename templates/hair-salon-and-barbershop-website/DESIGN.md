---
name: "Hair Salon and Barbershop Website"
colors:
  cream: "#F7F2E7"
  oat: "#EFE7D5"
  card: "#FFFEF9"
  forest: "#24382B"
  forest_soft: "#2F4A39"
  ink: "#23201A"
  muted: "#7C7466"
  rule: "#DDD2BC"
  brass: "#A87B2F"
  brass_deep: "#8C6624"
  brass_light: "#D9B36A"
  sage: "#7C8B6F"
typography:
  display_h1_h2_h3_service_names_stylist_names_prices_in_large_sizes_the_wordmark_booking_reference: { family: "Bodoni Moda", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_review_attributions_numbers_font_variant_numeric_tabular_nums_for_prices_durations_and_hours: { family: "Karla", weights: [400, 500, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.2vw, 92px) Bodoni Moda 500, line-height 1.02, letter-spacing -0.01em; H2 clamp(32px, 4vw, 56px) Bodoni 500, line-height 1.06; H3 25px Bodoni 600, line-height 1.2; italic phrases in headings use Bodoni 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead paragraph Karla 400 18px / 1.65 Ink at 85% opacity; body Karla 400 16px / 1.7 (max-width 62ch); eyebrow Karla 700 12px uppercase letter-spacing 0.16em Muted, preceded by a 24px x 1px Brass line with 12px gap; caption Karla 400 13px Muted. Buttons: height 50px, padding 0 26px, Karla 700 14px uppercase letter-spacing 0.1em. Primary: Brass fill, Card text. Secondary: 1px Ink border, Ink text, transparent (on photos: 1px Card border, Card text). Small buttons 38px high, padding 0 16px, 12px text. Inputs: height 50px, 1px Rule border, Card fill, 16px Karla, focus border Brass. Focus ring everywhere: 2px Brass outline with 3px offset."
radius: "10px on cards, buttons, inputs, chips, photos and the confirmation. 999px only for duration and price pills, the open-now dot, step dots and slot chips."
---

# Hair Salon and Barbershop Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#F7F2E7` — Page background on both pages, input fill.
- **Oat** `#EFE7D5` — Alternate section background (Services, Gallery), hover fill for rows and chips, image wells.
- **Card** `#FFFEF9` — Card surfaces (stylist cards, review cards, confirmation), light modal background.
- **Forest** `#24382B` — Hero overlay base, Marquee band, footer, confirmation header, photo overlays (as rgba(36,56,43,x)).
- **Forest Soft** `#2F4A39` — Hover surface on Forest, slot chip selected fill, deep section borders.
- **Ink** `#23201A` — Headlines and body text on light backgrounds, primary outline buttons, icon color.
- **Muted** `#7C7466` — Secondary text, captions, eyebrows, disabled days and slots (at 45% opacity).
- **Rule** `#DDD2BC` — 1px hairlines, card borders, input borders, dividers.
- **Brass** `#A87B2F` — The one accent: primary buttons, prices, duration pills, selected step dots, focus ring, marquee text on Forest.
- **Brass Deep** `#8C6624` — Primary button hover and pressed state.
- **Brass Light** `#D9B36A` — Brass replacement for text and lines on Forest backgrounds (prices, active borders).
- **Sage** `#7C8B6F` — Quiet second color: open-now dot and text, 'walk-ins welcome' tag, booking success check.

## Typography
- **Display: H1, H2, H3, service names, stylist names, prices in large sizes, the wordmark, booking reference** — Bodoni Moda (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, review attributions, numbers (font-variant-numeric tabular-nums for prices, durations and hours)** — Karla (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.2vw, 92px) Bodoni Moda 500, line-height 1.02, letter-spacing -0.01em; H2 clamp(32px, 4vw, 56px) Bodoni 500, line-height 1.06; H3 25px Bodoni 600, line-height 1.2; italic phrases in headings use Bodoni 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead paragraph Karla 400 18px / 1.65 Ink at 85% opacity; body Karla 400 16px / 1.7 (max-width 62ch); eyebrow Karla 700 12px uppercase letter-spacing 0.16em Muted, preceded by a 24px x 1px Brass line with 12px gap; caption Karla 400 13px Muted. Buttons: height 50px, padding 0 26px, Karla 700 14px uppercase letter-spacing 0.1em. Primary: Brass fill, Card text. Secondary: 1px Ink border, Ink text, transparent (on photos: 1px Card border, Card text). Small buttons 38px high, padding 0 16px, 12px text. Inputs: height 50px, 1px Rule border, Card fill, 16px Karla, focus border Brass. Focus ring everywhere: 2px Brass outline with 3px offset.
- Radius: 10px on cards, buttons, inputs, chips, photos and the confirmation. 999px only for duration and price pills, the open-now dot, step dots and slot chips.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and steps; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for accordions, tab and step switches. Nothing bounces.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(18px) and animate to rest over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings in a list stagger by 80ms (index prop).
- Hero photo: on load the image scales from 1.07 to 1.0 over 2200ms --ease-out; while scrolling, the image translates 0 to 10% of its height as the hero scrolls out (Motion useScroll on the hero, offset ['start start', 'end start']), and the headline block fades to opacity 0.25 and moves -32px over the same range. H1 lines rise from translateY(26px) and opacity 0 with 120ms stagger, starting 150ms after load.
- Marquee: one continuous strip of pull quotes on Forest scrolling left at a constant 40px/s, pausing on hover, duplicated content for a seamless loop (CSS animation; disabled under reduced motion).
- Service rows: hover fills Oat at 60% and slides a 24px x 2px Brass rule in from the left over 250ms; the 'Book' affordance fades in at the right edge.
- Stylist cards: on hover the photo scales to 1.04 over 700ms --ease-out and the card border turns Ink; the 'next free slot' pill crossfades to 'Book with [name]' linking to ./booking.html?stylist=<id> (the booking page preselects that stylist; opened without a query it starts unselected — never an error).
- Gallery: photos rise 12px and lose their Oat frame on hover; clicking opens the Lightbox (Forest overlay at 85%, photo at max 80vh, caption in Card, X closes, left/right arrows navigate, Escape closes) with a 240ms fade and 16px scale settle.
- Booking steps: step changes crossfade with a 20px horizontal slide, 300ms --ease-io (AnimatePresence mode 'wait'). Selecting a service, stylist, day or slot fills the chip over 150ms; the sticky summary price counts to the new total over 400ms. The confirmation card flips in (rotateX -8deg to 0, opacity 0 to 1, 420ms --ease-out) and the reference number types character by character over 700ms.
- Hours: the open-now dot pulses (scale 1 to 1.25, 1600ms loop) only while open.
- Header: transparent over the photo hero with Card text; after 40px of scroll it gets Cream at 94% opacity, backdrop-filter blur(10px), Ink text and a 1px Rule bottom border, 250ms transition. On booking.html it is solid from the start.
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 300ms --ease-out on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the hero scale and parallax, H1 rise, marquee (show a static centered quote), count-ups, type-in and layout animations (render at rest). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, warm and natural, all six made for this template in one consistent style: deep green walls, warm cream light, brass details, leather and wood, documentary editorial look, fine grain. Never a face: interiors, tools, chairs, backs of heads. No readable text, logos or branded tools anywhere. Every photo uses object-fit cover with the object-position given under Assets, 10px corners, no shadow; photos on Cream get a 1px Rule outline. Captions below photos in Karla 13px Muted. Drawn in code: the favicon, the wordmark (type only), duration and price pills, the confirmation card layout, dividers and the stepper. Icons: lucide-react only, stroke width 1.5.

## Tone
Confident, warm and unpretentious, like a stylist who has heard every hair confession. Short sentences, concrete numbers (minutes, dollars, chairs), no beauty-industry buzzwords, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/hair-salon-and-barbershop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
