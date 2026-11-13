---
name: "Auto Repair Shop Website"
colors:
  shop_white: "#F6F5F1"
  mist: "#ECEBE4"
  steel: "#2E4A62"
  steel_deep: "#22394C"
  ink: "#20242A"
  slate: "#5B6470"
  safety: "#F2B705"
  safety_deep: "#C99A04"
  good: "#2E7D4F"
  rule: "#D9D7CF"
typography:
  display_h1_h2_h3_service_names_the_phone_number_price_ranges_the_wordmark_barlow_condensed_workhorse_caps: { family: "Barlow Condensed", weights: [500, 600] }
  text_and_ui_body_buttons_form_fields_faq_answers_captions: { family: "Barlow", weights: [400, 600] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(46px, 7vw, 92px) Barlow Condensed 600 uppercase, line-height 0.98; H2 clamp(32px, 4.4vw, 54px) Barlow Condensed 600 uppercase; H3 22px Condensed 600; the phone in the header Condensed 600 24px tabular; lead Barlow 400 18px / 1.65 Ink at 90%; body 16px / 1.7 (max-width 64ch); eyebrow Barlow 600 12px uppercase letter-spacing 0.18em Slate; caption 13px Slate; price ranges Condensed 600 20px with the range dash in Safety. Buttons: height 52px, Barlow 600 14px uppercase letter-spacing 0.06em. Primary: Steel fill, Shop White text. Secondary: 1px Ink border, Ink text. Inputs: height 50px, 1px Rule border, white fill, focus Steel border. Focus ring everywhere: 2px Steel outline with 3px offset."
radius: "6px on cards, buttons, inputs, chips and photos. 999px only for pills, badges and the open-now dot."
---

# Auto Repair Shop Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Shop White** `#F6F5F1` — Page background on both pages.
- **Mist** `#ECEBE4` — Alternate section background (Services, FAQ), hover fill.
- **Steel** `#2E4A62` — Primary: headlines' ink tone, primary buttons, selected chips, focus ring.
- **Steel Deep** `#22394C` — Primary hover, footer background, the warranty strip's ink.
- **Ink** `#20242A` — Body text, service names, icon color.
- **Slate** `#5B6470` — Secondary text, captions, eyebrows, range tails.
- **Safety** `#F2B705` — The one accent: price ranges, the warranty badge, selected day, focus-visible details, the tire-rule treads.
- **Safety Deep** `#C99A04` — Safety hover and pressed states.
- **Good** `#2E7D4F` — The confirmation check, 'open now' dot, warranty checks.
- **Rule** `#D9D7CF` — 1px hairlines, card borders, input borders, dividers.

## Typography
- **Display: H1, H2, H3, service names, the phone number, price ranges, the wordmark — Barlow Condensed, workhorse caps** — Barlow Condensed (OFL), weights 500/600. Self-host the font files.
- **Text and UI: body, buttons, form fields, FAQ answers, captions** — Barlow (OFL), weights 400/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(46px, 7vw, 92px) Barlow Condensed 600 uppercase, line-height 0.98; H2 clamp(32px, 4.4vw, 54px) Barlow Condensed 600 uppercase; H3 22px Condensed 600; the phone in the header Condensed 600 24px tabular; lead Barlow 400 18px / 1.65 Ink at 90%; body 16px / 1.7 (max-width 64ch); eyebrow Barlow 600 12px uppercase letter-spacing 0.18em Slate; caption 13px Slate; price ranges Condensed 600 20px with the range dash in Safety. Buttons: height 52px, Barlow 600 14px uppercase letter-spacing 0.06em. Primary: Steel fill, Shop White text. Secondary: 1px Ink border, Ink text. Inputs: height 50px, 1px Rule border, white fill, focus Steel border. Focus ring everywhere: 2px Steel outline with 3px offset.
- Radius: 6px on cards, buttons, inputs, chips and photos. 999px only for pills, badges and the open-now dot.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap and FAQ. Shop-floor steady — nothing bounces.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 600ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the bay photo scales 1.04→1.0 over 2400ms; the headline rises 18px; the phone number ticks in last with a Safety underline draw.
- Service rows: hover fills Mist and the price range slides 6px right with a Safety tick; the 'Book' pill fades in at the right edge linking ./booking.html?service=<slug>.
- Warranty strip: the badge draws once (stroke-dashoffset) when scrolled into view; the three checks stagger 60ms.
- Noise FAQ: accordions open height 0→auto 300ms --ease-io; the sound glyph (Squeal/Knock/Hum/Grind drawn waveforms in SVG) animates its waveform once per open (off under reduced motion).
- Booking form: day chips fill Steel on select (150ms); invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) with the Good check drawing and a Safety 'IN THE BOOK' tag stamping in -6deg→-2deg.
- Tire rules: the tread divider slides in as the section enters view (600ms, once).
- Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, draws, staggers or stamps; everything renders at rest. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Workshop photography, all six made for this template in one consistent style: clean independent-shop bays, warm work light with steel-blue shadows, generic de-badged cars (no logos, no readable plates — plates blank or obscured), tools, tires and parts. Never a person (no faces, no hands). No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 6px corners, no shadow; photos on Shop White get a 1px Rule outline. Captions in Barlow 13px Slate. Drawn in code: the tire-tread rules, the noise waveforms (four SVG glyphs), the warranty badge, the IN THE BOOK stamp, chips and the favicon. Icons: lucide-react only, stroke width 2.

## Tone
Straight-talking shop counter: short sentences, exact ranges ('$180–320 depending on pads'), light humor about cars and none about customers.

---
— Prompt by VibeFather · https://vibefather.ai/t/auto-repair-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
