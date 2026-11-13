---
name: "Travel Agency Tour Packages Website"
colors:
  paper: "#F6F2E9"
  vellum: "#EFE9DC"
  card: "#FCFAF4"
  navy: "#163A4A"
  navy_soft: "#215063"
  slate_blue: "#5C7385"
  coral: "#D96A4B"
  coral_deep: "#BC5539"
  sand: "#C9A227"
  rule: "#DDD5C4"
typography:
  display_h1_h2_h3_tour_names_day_titles_prices_in_large_sizes_the_wordmark: { family: "Lora", weights: [500, 600] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_itinerary_body_numbers_font_variant_numeric_tabular_nums_for_prices_and_days: { family: "Public Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(46px, 6.8vw, 92px) Lora 500, line-height 1.04; H2 clamp(32px, 4.2vw, 56px) Lora 500, line-height 1.08; H3 24px Lora 600; italic phrases in headings use Lora 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead Public Sans 400 18px / 1.7 Navy at 88%; body Public Sans 400 16px / 1.7 (max-width 64ch); eyebrow Public Sans 700 12px uppercase letter-spacing 0.18em Slate Blue, preceded by a 24px x 2px Coral line with 12px gap; caption Public Sans 400 13px Slate Blue. Buttons: height 50px, padding 0 26px, Public Sans 700 14px letter-spacing 0.04em. Primary: Coral fill, Card text. Secondary: 1px Navy border, Navy text. Small buttons 38px. Inputs: height 50px, 1px Rule border, Card fill, 16px Public Sans, focus border Coral. Focus ring everywhere: 2px Coral outline with 3px offset."
radius: "10px on cards, buttons, inputs, chips, photos, accordions and the form panel. 999px only for pills (difficulty, days), the stepper buttons and map stop dots."
---

# Travel Agency Tour Packages Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F6F2E9` — Page background on all pages.
- **Vellum** `#EFE9DC` — Alternate section background (listing rail, itinerary), hover fill, image wells.
- **Card** `#FCFAF4` — Card surfaces (tour cards, accordion panels, form), input fill.
- **Navy** `#163A4A` — Headlines and body ink, footer background, hero overlays (as rgba(22,58,74,x)), selected filters.
- **Navy Soft** `#215063` — Hover surface on Navy, accordion open state fill, map water fills.
- **Slate Blue** `#5C7385` — Secondary text, captions, eyebrows, disabled filters (at 45%).
- **Coral** `#D96A4B` — The one accent: primary buttons, prices, stamps, selected departure, focus ring, route line on maps.
- **Coral Deep** `#BC5539` — Primary button hover and pressed state.
- **Sand** `#C9A227` — Quiet second color: stars in testimonials, map compass highlights, 'next departure' ticks. Never for body text.
- **Rule** `#DDD5C4` — 1px hairlines, card borders, input borders, map contour lines.

## Typography
- **Display: H1, H2, H3, tour names, day titles, prices in large sizes, the wordmark** — Lora (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, itinerary body, numbers (font-variant-numeric tabular-nums for prices and days)** — Public Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(46px, 6.8vw, 92px) Lora 500, line-height 1.04; H2 clamp(32px, 4.2vw, 56px) Lora 500, line-height 1.08; H3 24px Lora 600; italic phrases in headings use Lora 500 italic (marked with *asterisks* in content.ts and rendered as <em>); lead Public Sans 400 18px / 1.7 Navy at 88%; body Public Sans 400 16px / 1.7 (max-width 64ch); eyebrow Public Sans 700 12px uppercase letter-spacing 0.18em Slate Blue, preceded by a 24px x 2px Coral line with 12px gap; caption Public Sans 400 13px Slate Blue. Buttons: height 50px, padding 0 26px, Public Sans 700 14px letter-spacing 0.04em. Primary: Coral fill, Card text. Secondary: 1px Navy border, Navy text. Small buttons 38px. Inputs: height 50px, 1px Rule border, Card fill, 16px Public Sans, focus border Coral. Focus ring everywhere: 2px Coral outline with 3px offset.
- Radius: 10px on cards, buttons, inputs, chips, photos, accordions and the form panel. 999px only for pills (difficulty, days), the stepper buttons and map stop dots.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and grid animations; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for accordions, filters and the booking swap. Nothing bounces.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(18px) and animate to rest over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 80ms (index prop).
- Hero photo: on load scales from 1.06 to 1.0 over 2600ms --ease-out; scrolling translates it 0 to 10% (Motion useScroll, offset ['start start', 'end start']) and the headline fades to 0.3. H1 lines rise from translateY(24px) with 140ms stagger; the stamp badge rotates in from -12deg with a 300ms settle.
- Tour cards: hover lifts 4px, photo scales 1.03, and the price ticks up 2px; the 'View itinerary' affordance fades in at the bottom edge.
- Listing filtering: cards use Motion layout with AnimatePresence mode 'popLayout'; leaving cards fade and scale to 0.97 over 200ms, survivors glide over 400ms --ease-io; the count crossfades; an empty state ('No trips match — loosen a filter or two.') fades in when zero results, with a Reset link.
- Filter rail: chips fill Navy with Card text over 150ms; the section label ('Region', 'Length', 'Price', 'Style') keeps a small Coral rule that slides under the active group (Motion layoutId).
- Itinerary accordions: day rows open height 0 to auto and opacity 0 to 1 over 340ms --ease-io; the day number pill fills Coral when open; the Plus rotates 45 degrees into an X; opening one closes the others (single-open).
- Route map: when it enters view, the route line draws (stroke-dashoffset to 0) over 1200ms, then stops pop with 120ms stagger and their labels fade; the stamp rotates in last.
- Booking form: departure chips select over 150ms; the stepper counts pulse; submitting slides the form out and the RequestCard in (16px rise, 320ms --ease-io, AnimatePresence mode 'wait'); the reference (brandInitials + '-' + four digits) types character by character over 700ms.
- Header: transparent over the home hero with Card text; after 40px of scroll it gets Paper at 94% opacity, backdrop-filter blur(10px), Navy text and a 1px Rule border, 250ms transition. Solid from the start on tours.html and tour.html.
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 300ms on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the hero scale and parallax, stamp rotate, draws, count-ups, type-in and layout animations (render at rest). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, wide-open and airy, all six made for this template in one consistent style: big skies, cool blues and greens with warm light accents, documentary editorial look, fine grain. Never a person — fjords, roads, passes, villages, rails and harbors. No readable text or logos anywhere. Every photo uses object-fit cover with the object-position given under Assets, 10px corners, no shadow; photos on Paper get a 1px Rule outline. Captions below photos in Public Sans 13px Slate Blue. Drawn in code: the favicon, the wordmark (type only), the circular stamp badges, difficulty pills, route maps (contours, water, route line, stops), the ticket-style request card and dividers. Icons: lucide-react only, stroke width 1.5.

## Tone
Knowledgable and plain, like a good guide at dinner on day three. Concrete specifics (miles, hours, ferry names), light humor about weather and knees, no 'unforgettable journey' clichés, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/travel-agency-tour-packages-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
