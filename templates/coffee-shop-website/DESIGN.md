---
name: "Coffee Shop Website"
colors:
  cream: "#FAF5EC"
  latte: "#F1E7D6"
  foam: "#FFFDF8"
  espresso: "#2B211B"
  grounds: "#241A14"
  crema: "#7A6A5C"
  rule: "#E3D5BE"
  terracotta: "#C05A2E"
  terracotta_deep: "#A2481F"
  terracotta_light: "#E9A275"
  olive: "#67784B"
  caramel: "#B98A4E"
typography:
  display_h1_h2_h3_drink_and_pastry_names_prices_in_large_sizes_the_wordmark_ticket_totals: { family: "Fraunces", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_menu_descriptions_captions_numbers_font_variant_numeric_tabular_nums_for_prices_hours_and_totals: { family: "Nunito Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.4vw, 96px) Fraunces 500, line-height 1.0, letter-spacing -0.01em; H2 clamp(34px, 4.2vw, 60px) Fraunces 500, line-height 1.06; H3 26px Fraunces 600, line-height 1.2; italic phrases in headings use Fraunces 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead paragraph Nunito 400 18px / 1.65 Espresso at 85% opacity; body Nunito 400 16px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.16em Crema, preceded by a 24px x 1px Terracotta line with 12px gap; caption Nunito 400 13px Crema. Buttons: height 50px, padding 0 26px, Nunito 700 14px uppercase letter-spacing 0.1em. Primary: Terracotta fill, Foam text. Secondary: 1px Espresso border, Espresso text, transparent (on photos: 1px Foam border, Foam text). Small buttons 38px high, padding 0 16px, 12px text. Inputs: height 50px, 1px Rule border, Foam fill, 16px Nunito, focus border Terracotta. Focus ring everywhere: 2px Terracotta outline with 3px offset."
radius: "14px on cards, buttons, inputs, chips, photos and the ticket. 999px only for badges, the open-now dot, dietary badge pills, size-toggle dots and the map pin."
---

# Coffee Shop Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FAF5EC` — Page background on all three pages, header background after scroll.
- **Latte** `#F1E7D6` — Alternate section background (Signature drinks, Bean story, FAQ), image wells, hover fill for rows and chips.
- **Foam** `#FFFDF8` — Card surfaces (drink cards, hours card, ticket), input fill, mobile menu background.
- **Espresso** `#2B211B` — Headlines and body text on light backgrounds, primary outline buttons, icon color.
- **Grounds** `#241A14` — Order teaser band, footer, ticket header, photo overlays (as rgba(36,26,20,x)).
- **Crema** `#7A6A5C` — Secondary text, captions, eyebrows, disabled slot chips (at 45% opacity).
- **Rule** `#E3D5BE` — 1px hairlines, card borders, input borders, map street lines.
- **Terracotta** `#C05A2E` — The one accent: primary buttons, prices, badges, selected tab and chip states, map pin, focus ring, timeline dots.
- **Terracotta Deep** `#A2481F` — Primary button hover and pressed state.
- **Terracotta Light** `#E9A275` — Terracotta replacement for text and lines on Grounds backgrounds (prices, active chip border).
- **Olive** `#67784B` — Quiet second color: open-now dot and 'open' text, vegan and dairy-free badges, park block on the map, decaf badge.
- **Caramel** `#B98A4E` — Small numerals, years in the bean story, roast-day marks, window bench highlight on the map. Never for body text.

## Typography
- **Display: H1, H2, H3, drink and pastry names, prices in large sizes, the wordmark, ticket totals** — Fraunces (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, menu descriptions, captions, numbers (font-variant-numeric tabular-nums for prices, hours and totals)** — Nunito Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(44px, 6.4vw, 96px) Fraunces 500, line-height 1.0, letter-spacing -0.01em; H2 clamp(34px, 4.2vw, 60px) Fraunces 500, line-height 1.06; H3 26px Fraunces 600, line-height 1.2; italic phrases in headings use Fraunces 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead paragraph Nunito 400 18px / 1.65 Espresso at 85% opacity; body Nunito 400 16px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.16em Crema, preceded by a 24px x 1px Terracotta line with 12px gap; caption Nunito 400 13px Crema. Buttons: height 50px, padding 0 26px, Nunito 700 14px uppercase letter-spacing 0.1em. Primary: Terracotta fill, Foam text. Secondary: 1px Espresso border, Espresso text, transparent (on photos: 1px Foam border, Foam text). Small buttons 38px high, padding 0 16px, 12px text. Inputs: height 50px, 1px Rule border, Foam fill, 16px Nunito, focus border Terracotta. Focus ring everywhere: 2px Terracotta outline with 3px offset.
- Radius: 14px on cards, buttons, inputs, chips, photos and the ticket. 999px only for badges, the open-now dot, dietary badge pills, size-toggle dots and the map pin.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and drawers; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for tabs, accordions and builder steps. Nothing bounces.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(18px) and animate to rest over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings in a list stagger by 80ms (index prop).
- Hero photo: on load the image scales from 1.07 to 1.0 over 2200ms --ease-out; while scrolling, the image translates 0 to 10% of its height as the hero scrolls out (Motion useScroll on the hero, offset ['start start', 'end start']), and the headline block fades to opacity 0.25 and moves -32px over the same range. H1 lines rise from translateY(26px) and opacity 0 with 120ms stagger, starting 150ms after load.
- Signature drink cards: on hover the photo scales to 1.04 over 700ms --ease-out and the card border turns Espresso; the price ticks up 4px and settles. 'Order this' click: the button crossfades to a Check icon and 'Added' for 1400ms.
- Menu filtering: rows use Motion layout with AnimatePresence mode 'popLayout'; leaving rows fade and slide 8px left over 200ms, remaining rows glide to position over 380ms --ease-io. Tab switch slides a 2px Terracotta underline between tabs with Motion layoutId.
- Order builder: step changes crossfade with a 16px horizontal slide, 280ms --ease-io (AnimatePresence mode 'wait'). Selecting size, milk or extras fills the chip over 150ms; the running total counts to the new value over 400ms; the ticket replaces the form with a fade and a dashed border draw, and the order number types in character by character over 800ms.
- Hours: the open-now dot pulses (scale 1 to 1.25, 1600ms loop) only while open; 'Opens at 6:30am' lines crossfade when the day changes at midnight.
- Block map: on entering view the streets draw (stroke-dashoffset to 0) over 900ms, then the park block fills, then the shop pin drops from scale 0.6 with a soft overshoot and the transit, bike and parking markers pop in with 120ms stagger.
- Header: transparent over the photo hero with Foam text; after 40px of scroll it gets Cream at 94% opacity, backdrop-filter blur(10px), Espresso text and a 1px Rule bottom border, 250ms transition. On menu.html and visit.html it is solid from the start.
- FAQ accordions: height 0 to auto and opacity 0 to 1 over 300ms --ease-io; the Plus icon rotates 45 degrees into an X.
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 300ms --ease-out on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the hero scale and parallax, H1 rise, street draw, pin drop, count-ups, pulse and layout animations (render at rest; tabs and accordions switch instantly). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, warm and natural, all six made for this template in one consistent style: morning window light, oak and terracotta palette, documentary editorial look, fine grain. No people, no faces, no hands, no readable text, logos, cup branding or menu boards with writing. Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on Cream get a 1px Rule outline. Captions below photos in Nunito 13px Crema. Drawn in code: the favicon, the wordmark (type only), the illustrated block map, size dots, dietary badge icons, the ticket and dividers. Icons: lucide-react only, stroke width 1.5.

## Tone
Warm, plain and a little playful, like the person behind the counter who remembers your order. Short sentences, concrete numbers (sizes, prices, hours, grams), no coffee-snob vocabulary without a plain-word gloss, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/coffee-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
