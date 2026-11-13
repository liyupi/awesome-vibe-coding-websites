---
name: "Family Winery and Vineyard Website"
colors:
  parchment: "#F4EEE3"
  parchment_deep: "#EAE1D2"
  cream: "#FBF7F0"
  ink: "#2A211C"
  cellar: "#1E1714"
  cellar_soft: "#2E2420"
  muted: "#6E6258"
  rule: "#D8CCBA"
  oxblood: "#6B1F2A"
  oxblood_deep: "#521722"
  oxblood_light: "#C98B8F"
  olive: "#5E6340"
  oak: "#8C5E34"
  sage: "#9FAE9A"
typography:
  display_h1_h2_h3_wine_names_timeline_years_prices_in_large_sizes_tasting_note_descriptors_italic_the_wordmark: { family: "Cormorant Garamond", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_tables_captions_numbers_font_variant_numeric_tabular_nums_for_prices_and_hours: { family: "Hanken Grotesk", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1320px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 136px desktop, 96px under 1024px, 80px under 640px. Type scale: H1 clamp(48px, 7vw, 112px) Cormorant Garamond 500, line-height 0.98, letter-spacing -0.01em; H2 clamp(38px, 4.6vw, 72px) Cormorant 500, line-height 1.02; H3 28px Cormorant 600, line-height 1.15; italic phrases in headings use Cormorant 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead paragraph Hanken 19px / 1.6 Ink at 85% opacity; body Hanken 400 16px / 1.7 (max-width 62ch); eyebrow Hanken 600 12px uppercase letter-spacing 0.18em Muted, preceded by a 24px × 1px Oak line with 12px gap; caption Hanken 13px Muted. Buttons: height 52px, padding 0 28px, Hanken 600 14px uppercase letter-spacing 0.12em. Primary: Oxblood fill, Cream text. Secondary: 1px Ink border, Ink text, transparent (on photos: 1px Cream border, Cream text). Small buttons 40px high, padding 0 18px, 12px text. Inputs: height 52px, 1px Rule border, Cream fill, 16px Hanken, focus border Oxblood. Focus ring everywhere: 2px Oxblood outline with 3px offset (Oxblood Light on dark)."
radius: "2px on cards, buttons, inputs, chips, photos and the cart drawer edge — nearly square. 999px only for the cart count badge, the open-now dot, the type swatch dots, qty stepper buttons and map stop markers."
---

# Family Winery and Vineyard Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Parchment** `#F4EEE3` — Page background on all three pages, header background after scroll, cart drawer background.
- **Parchment Deep** `#EAE1D2` — Alternate section background (Timeline, Booking, Mixed cases), wine card image wells, input fill, hover fill for rows and month cells.
- **Cream** `#FBF7F0` — Card surfaces (wine cards, experience cards, booking summary), text on photographs and on Cellar backgrounds.
- **Ink** `#2A211C` — Headlines and body text on light backgrounds, primary outline buttons, icon color.
- **Cellar** `#1E1714` — Wine Club section, footer, age gate, mobile menu, photo overlays (as rgba(30,23,20,x)).
- **Cellar Soft** `#2E2420` — Tier cards and hairlines on Cellar backgrounds.
- **Muted** `#6E6258` — Secondary text, captions, eyebrows, disabled calendar days (at 45% opacity).
- **Rule** `#D8CCBA` — 1px hairlines, card borders, input borders, map contour lines, timeline base line.
- **Oxblood** `#6B1F2A` — The one accent: primary buttons, prices, cart badge, selected states, timeline progress line, focus ring, map tasting room and walking route, red wine swatch.
- **Oxblood Deep** `#521722` — Primary button hover and pressed state.
- **Oxblood Light** `#C98B8F` — Oxblood replacement for text and lines on Cellar backgrounds (prices, active tier border).
- **Olive** `#5E6340` — Quiet second color: growth phase in the harvest calendar, vine block hatching on the map, 'Organic' and 'In stock' tags, open-now dot.
- **Oak** `#8C5E34` — Timeline years, ripening phase in the calendar, oak grove on the map, small numerals. Never for body text.
- **Sage** `#9FAE9A` — Creek line on the map and the rest-phase bar in the calendar.

## Typography
- **Display: H1, H2, H3, wine names, timeline years, prices in large sizes, tasting-note descriptors (italic), the wordmark** — Cormorant Garamond (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, tables, captions, numbers (font-variant-numeric tabular-nums for prices and hours)** — Hanken Grotesk (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1320px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 136px desktop, 96px under 1024px, 80px under 640px. Type scale: H1 clamp(48px, 7vw, 112px) Cormorant Garamond 500, line-height 0.98, letter-spacing -0.01em; H2 clamp(38px, 4.6vw, 72px) Cormorant 500, line-height 1.02; H3 28px Cormorant 600, line-height 1.15; italic phrases in headings use Cormorant 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead paragraph Hanken 19px / 1.6 Ink at 85% opacity; body Hanken 400 16px / 1.7 (max-width 62ch); eyebrow Hanken 600 12px uppercase letter-spacing 0.18em Muted, preceded by a 24px × 1px Oak line with 12px gap; caption Hanken 13px Muted. Buttons: height 52px, padding 0 28px, Hanken 600 14px uppercase letter-spacing 0.12em. Primary: Oxblood fill, Cream text. Secondary: 1px Ink border, Ink text, transparent (on photos: 1px Cream border, Cream text). Small buttons 40px high, padding 0 18px, 12px text. Inputs: height 52px, 1px Rule border, Cream fill, 16px Hanken, focus border Oxblood. Focus ring everywhere: 2px Oxblood outline with 3px offset (Oxblood Light on dark).
- Radius: 2px on cards, buttons, inputs, chips, photos and the cart drawer edge — nearly square. 999px only for the cart count badge, the open-now dot, the type swatch dots, qty stepper buttons and map stop markers.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and drawers; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for accordions, month switches and booking steps. Nothing bounces.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(20px) and animate to rest over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings in a list stagger by 80ms (index prop).
- Hero photos (home and visit): on load the image scales from 1.08 to 1.0 over 2400ms --ease-out; while scrolling, the image translates from 0 to 12% of its height as the hero scrolls out (Motion useScroll target hero, offset ['start start', 'end start'], useTransform), and the headline block fades to opacity 0.2 and moves -40px over the same range. H1 lines rise from translateY(30px) and opacity 0 with 120ms stagger, starting 200ms after load (or after the age gate closes).
- Image bands (home CellarBand, wines masthead band): parallax, the image inside its overflow-hidden frame moves from -8% to 8% of its height across the frame's scroll progress.
- Timeline: a 2px Oxblood line over the 1px Rule base line grows with scroll (scaleY 0 → 1, transform-origin top, useScroll on the list with offset ['start 70%', 'end 60%']). Each entry's year dot fills Oxblood when the line reaches it (entry in view at 60%).
- Wine cards: on hover the bottle photo scales to 1.04 over 700ms --ease-out and the card border turns Ink. 'Add to cart' click: button content crossfades to a Check icon and 'Added' for 1400ms; the header cart badge scales 1 → 1.35 → 1 over 400ms and its number updates.
- Cart drawer: Cellar overlay fades to 55% opacity over 300ms; the drawer slides in from the right (x 100% → 0) over 420ms --ease-out; closing reverses in 320ms. Checkout steps crossfade with a 16px horizontal slide, 260ms --ease-io (AnimatePresence mode 'wait'). Line removal collapses height over 240ms.
- Wine grid filtering: cards use Motion layout with AnimatePresence mode 'popLayout'; leaving cards fade and scale to 0.96 over 200ms, remaining cards glide to their new positions over 400ms --ease-io.
- Accordions (tasting notes, FAQ): height 0 → auto and opacity 0 → 1 over 320ms --ease-io; the Plus icon rotates 45° into an X.
- Harvest calendar: changing the month crossfades the detail panel (opacity and 12px y) over 300ms --ease-io; the selected month's 2px Oxblood top bar slides between cells with Motion layoutId.
- Booking: selecting an experience, date or slot animates the selected tile's border and fill over 150ms; the summary price counts to the new total over 400ms; the success state replaces the widget with a fade and a check circle whose stroke draws over 600ms (pathLength 0 → 1).
- Header: transparent over the photo heroes with Cream text; after 40px of scroll it gets Parchment at 94% opacity, backdrop-filter blur(10px), Ink text and a 1px Rule bottom border, 250ms transition. On wines.html it is solid from the start.
- Age gate: overlay fades in 400ms on first load; on confirm the card fades and moves up 16px, the overlay fades out over 500ms, then the hero animation starts.
- Map: when the map enters view, vine blocks fade in with 100ms stagger, then the walking route fades in and its four stop markers pop from scale 0.6 to 1 with 120ms stagger. Hovered or focused blocks rise to full opacity and get a 2px Ink outline over 150ms.
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 300ms --ease-out on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the hero scale and parallax, image band parallax, H1 rise, reveals (render at rest), timeline growth (show the full line), grid layout animation, map stagger, count-ups and drawer slide (drawer and overlay appear with a 0ms fade). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, warm and natural: seven CC0 photos from Wikimedia Commons (golden autumn vineyard above a village, young vines in spring, Pinot Noir clusters on the vine, a vaulted bottle cellar, a hillside vineyard with a small white farm house at golden hour, pruned vines in spring, an 1880s archival vineyard photograph) and six photos made for this template (three unlabeled estate bottles — red, white, rosé — shot identically on an oak plank against limestone, the barrel cellar, the barn tasting room, and a tasting flight on the terrace). No people's faces anywhere, no readable labels, logos or signs. Every photo uses object-fit cover with the object-position given under Assets, square-ish 2px corners, no shadow; photos on Parchment get a 1px Rule outline. Captions sit below in Hanken 13px Muted. Photos under text get a Cellar gradient overlay as specified per section. Drawn in code: the favicon, the wordmark (type only), the estate map, calendar phase bars, type swatch dots, the check circle, dividers. Icons: lucide-react only, stroke width 1.5.

## Tone
Warm, grounded and precise, like a winemaker talking at the barn door. Concrete numbers (acres, cases, months in barrel, prices, hours), plain words for tasting notes, a little dry humor. No wine-snob jargon without explanation, no hype words, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/family-winery-and-vineyard-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
