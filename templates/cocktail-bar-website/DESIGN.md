---
name: "Cocktail Bar Website"
colors:
  noir: "#12100D"
  coal: "#1C1915"
  candle: "#262019"
  amberglow: "#E0A458"
  bone: "#EDE6D8"
  ash: "#9C9184"
  brass: "#B08A4F"
  rule: "#322C24"
typography:
  display_h1_h2_drink_names_prices_the_wordmark_event_nights_oswald_tall_condensed_letterspaced: { family: "Oswald", weights: [400, 600] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_prices_and_hours: { family: "Karla", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 76px under 1024px, 60px under 640px — a dark room breathes slowly. Type scale: H1 clamp(48px, 7.5vw, 104px) Oswald 600 uppercase letter-spacing 0.02em, line-height 0.96; H2 clamp(30px, 4vw, 52px) Oswald 600 uppercase; drink names Oswald 400 21px; prices Oswald 600 18px Amberglow tabular; lead Karla 400 17.5px / 1.7 Bone at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Karla 700 11px uppercase letter-spacing 0.26em Ash; caption 12.5px Ash. Buttons: height 52px, Karla 700 13.5px uppercase letter-spacing 0.1em. Book CTA: Amberglow fill, Noir text. Secondary: 1px Bone/35% border, Bone text. Inputs: height 50px, Candle fill, 1px Rule border, Bone text, focus Amberglow border. Focus ring everywhere: 2px Amberglow outline with 3px offset."
radius: "4px on cards, buttons, inputs, chips and photos — dark and sharp. 999px only for pills, the candle dot and party-stepper buttons."
---

# Cocktail Bar Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Noir** `#12100D` — Page background on both pages.
- **Coal** `#1C1915` — Alternate section background, cards, menu board wells, hover fill.
- **Candle** `#262019` — Photo overlays (as rgba(38,32,25,x)), input fills, chips.
- **Amberglow** `#E0A458` — The one accent: prices, the book CTA, selected chips, candle dot, focus ring, brass hairlines.
- **Bone** `#EDE6D8` — Primary text: headlines, body, drink names.
- **Ash** `#9C9184` — Secondary text, captions, eyebrows, unavailable states.
- **Brass** `#B08A4F` — Quiet second color: section rules, group labels, small caps details, star fills.
- **Rule** `#322C24` — 1px hairlines, card borders, input borders, menu dividers.

## Typography
- **Display: H1, H2, drink names, prices, the wordmark, event nights — Oswald tall condensed, letterspaced** — Oswald (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for prices and hours** — Karla (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1140px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 76px under 1024px, 60px under 640px — a dark room breathes slowly. Type scale: H1 clamp(48px, 7.5vw, 104px) Oswald 600 uppercase letter-spacing 0.02em, line-height 0.96; H2 clamp(30px, 4vw, 52px) Oswald 600 uppercase; drink names Oswald 400 21px; prices Oswald 600 18px Amberglow tabular; lead Karla 400 17.5px / 1.7 Bone at 88%; body 15.5px / 1.7 (max-width 62ch); eyebrow Karla 700 11px uppercase letter-spacing 0.26em Ash; caption 12.5px Ash. Buttons: height 52px, Karla 700 13.5px uppercase letter-spacing 0.1em. Book CTA: Amberglow fill, Noir text. Secondary: 1px Bone/35% border, Bone text. Inputs: height 50px, Candle fill, 1px Rule border, Bone text, focus Amberglow border. Focus ring everywhere: 2px Amberglow outline with 3px offset.
- Radius: 4px on cards, buttons, inputs, chips and photos — dark and sharp. 999px only for pills, the candle dot and party-stepper buttons.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for form swaps and chips. Slow fades like eyes adjusting — 700–900ms, nothing snaps.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 800ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 80ms.
- Hero: the room photo fades from 60% to full over 1600ms while scaling 1.04→1.0; the H1 lines rise 18px with 150ms stagger; a small candle dot pulses once (amber, 2000ms, off under reduced motion).
- Menu rows: hover slides a 1px Brass rule from the left and the price brightens Ash→Amberglow; the drink's one-liner indents 2px.
- Bartender anchor: the photo's brass frame draws once when scrolled into view; the caption crossfades in last.
- Room strip: photos parallax 4% at different rates on scroll (useScroll per frame); captions fade with their frame.
- Events: night cards reveal 60ms-staggered; the weekday chip fills Amberglow on hover.
- Booking: party stepper pops on count; day chips fill Amberglow; area picker crossfades the mini floor sketch; submitting slides the panel to RequestCard (300ms --ease-io) with a candle-flame stamp (a drawn amber flame) flickering twice before resting.
- Links: .link-draw grows a 1px currentColor underline over 300ms on hover and focus-visible.
- prefers-reduced-motion: reduce — everything renders at rest; the flame stamp is static; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Moody real photography, all six made for this template in one consistent style: near-dark rooms lit by candles and one amber lamp, glassware catching light, blank-labeled bottles, deep leather. One anchor photo shows the bartender at work — an AI-generated fictional person (mid-pour, warm concentration), a placeholder a real bar swaps for its own staff photo. No customer faces anywhere, no readable text or logos (bottle labels blank). Every photo uses object-fit cover with the object-position given under Assets, 4px corners, no shadow; photos on Noir get a 1px Rule outline. Captions in Karla 12.5px Ash. Drawn in code: the favicon, the candle dot, the flame stamp, chips, the mini floor sketch and the star fills. Icons: lucide-react only, stroke width 1.75.

## Tone
Low-voice confident, dry wit between the drinks. Real ingredients, real minutes, no 'mixology journey'. One joke at the zero-proof section's expense — reversed.

---
— Prompt by VibeFather · https://vibefather.ai/t/cocktail-bar-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
