---
name: "Coworking Space Website"
colors:
  offwhite: "#F8F6F1"
  linen: "#EFEAE0"
  card: "#FFFFFF"
  walnut: "#3E3227"
  bark: "#71614F"
  coral: "#E2654A"
  coral_deep: "#C24E35"
  sage: "#7E9070"
  rule: "#E0D9CC"
typography:
  display_h1_h2_h3_plan_names_event_titles_the_wordmark: { family: "Sora", weights: [600, 700] }
  text_and_ui_body_eyebrows_buttons_form_fields_captions_tabular_numerals_for_prices_and_availability: { family: "Albert Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.2vw, 78px) Sora 700, line-height 1.04; H2 clamp(28px, 3.8vw, 46px) Sora 700; H3 21px Sora 600; lead Albert Sans 400 17.5px / 1.65 Walnut at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.16em Bark; caption 13px Bark. Buttons: height 50px, Albert Sans 700 14px. Primary: Walnut fill, Card text. Secondary: 1px Walnut border, Walnut text. Inputs: height 50px, 1px Rule border, Card fill, focus Walnut border. Focus ring everywhere: 2px Walnut outline with 3px offset."
radius: "12px on cards, buttons, inputs, chips and photos. 999px only for pills, availability dots and RSVP ticks."
---

# Coworking Space Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Offwhite** `#F8F6F1` — Page background throughout.
- **Linen** `#EFEAE0` — Alternate section background (Amenities, Events), hover fill, chips.
- **Card** `#FFFFFF` — Plan cards, event cards, the tour panel, confirmation.
- **Walnut** `#3E3227` — Primary ink: headlines, body text, primary buttons, focus ring.
- **Bark** `#71614F` — Secondary text, captions, eyebrows, zone labels' idle state.
- **Coral** `#E2654A` — The one accent: selected zones, prices, RSVP ticks, focus ring details, tour button.
- **Coral Deep** `#C24E35` — Hover and pressed states.
- **Sage** `#7E9070` — Quiet second color: availability dots, 'included' ticks, plan highlights.
- **Rule** `#E0D9CC` — 1px hairlines, card borders, input borders, floor-plan linework.

## Typography
- **Display: H1, H2, H3, plan names, event titles, the wordmark** — Sora (OFL), weights 600/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals for prices and availability** — Albert Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.2vw, 78px) Sora 700, line-height 1.04; H2 clamp(28px, 3.8vw, 46px) Sora 700; H3 21px Sora 600; lead Albert Sans 400 17.5px / 1.65 Walnut at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.16em Bark; caption 13px Bark. Buttons: height 50px, Albert Sans 700 14px. Primary: Walnut fill, Card text. Secondary: 1px Walnut border, Walnut text. Inputs: height 50px, 1px Rule border, Card fill, focus Walnut border. Focus ring everywhere: 2px Walnut outline with 3px offset.
- Radius: 12px on cards, buttons, inputs, chips and photos. 999px only for pills, availability dots and RSVP ticks.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and zone transitions; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for map selection and the tour swap. Calm — this is a workspace pitch.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 650ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the lounge photo scales 1.04→1.0 over 2400ms; the headline rises; the from-price ticks up once.
- Floor map: zones idle at Rule strokes with Bark labels; hover fills Linen, lifts 1px and shows the availability tooltip (Sage dot '6 of 8 free' tabular); taken desks within a zone dim as small squares; clicking selects — the zone fills Coral at 12% with a Coral stroke and the legend updates; selection swaps with a 200ms --ease-io crossfade. The plan draws in on first view (stroke-dashoffset, 1000ms).
- Plans: the featured card lifts 6px permanently; hover ticks the price 2px; the 'included' checks stagger 40ms.
- Events: RSVP toggles the button to 'Going ✓' (Sage tick drawing, 300ms) and increments the count with a tabular tick; second click cancels politely ('Maybe not' on hover).
- Tour form: day chips fill Walnut on select; invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn floor-plan fragment stamp 'TOUR BOOKED' rotating in -5deg→-2deg, the selected zone echoed ('Asking about: the mezzanine, 3 dedicated desks free').
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — the plan renders drawn, no lifts, ticks, staggers or stamps; zone selection is an instant color change. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Warm workplace photography, all six made for this template in one consistent style: big windows, pale wood and plants, walnut tones with coral accents — desks, lounges, booths and kitchen corners, never a person (no faces, no hands, no laptops-with-screensavers-of-people). No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 12px corners, no shadow; photos on Offwhite get a 1px Rule outline. Captions in Albert Sans 13px Bark. Drawn in code: the floor plan (linework zones, desks as small squares, doors as arcs), tooltips, availability dots, the stamp, chips and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Warm and matter-of-fact, like the community manager's welcome email. Real numbers (desks, hours, prices), honest noise talk, one joke about the printer.

---
— Prompt by VibeFather · https://vibefather.ai/t/coworking-space-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
