---
name: "Financial Advisor Website"
colors:
  warm_white: "#FBFAF6"
  mist: "#F0EEE6"
  charcoal_soft: "#33352F"
  ink: "#23251F"
  slate: "#63665C"
  green_deep: "#2F5D50"
  green_mist: "#E4EDE8"
  brass: "#A8823F"
  rule: "#E0DDD1"
typography:
  display_h1_h2_h3_fee_tiers_the_balance_figure_the_wordmark_pt_serif_humanist_and_calm: { family: "PT Serif", weights: [400, 700] }
  text_and_ui_body_eyebrows_buttons_sliders_forms_captions_tabular_numerals_for_all_money: { family: "Public Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 78px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.8vw, 72px) PT Serif 700, line-height 1.08; H2 clamp(28px, 3.8vw, 46px) PT Serif 700; H3 21px PT Serif 700; the balance figure PT Serif 700 44px Brass tabular; lead Public Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Public Sans 700 12px uppercase letter-spacing 0.16em Slate; caption 13px Slate. Buttons: height 50px, Public Sans 700 14px. Primary: Green Deep fill, Warm White text. Secondary: 1px Ink border, Ink text. Inputs: height 50px, 1px Rule border, warmwhite fill, focus Green Deep border. Focus ring everywhere: 2px Green Deep outline with 3px offset."
radius: "10px on cards, buttons, inputs, chips and photos. 999px only for pills, slider thumbs and cred badges."
---

# Financial Advisor Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FBFAF6` — Page background throughout.
- **Mist** `#F0EEE6` — Alternate section background (Calculator, Credentials), chips, hover fill.
- **Charcoal Soft** `#33352F` — Footer background, photo overlay ink.
- **Ink** `#23251F` — Headlines and body text, icon color.
- **Slate** `#63665C` — Secondary text, captions, eyebrows, assumption lines.
- **Green Deep** `#2F5D50` — Primary: headlines' accents, primary buttons, chart line, selected chips, focus ring.
- **Green Mist** `#E4EDE8` — Selected chip fills, slider tracks, card washes.
- **Brass** `#A8823F` — The one warm tick: the balance figure, cred badges, slider thumbs, footnote markers.
- **Rule** `#E0DDD1` — 1px hairlines, card borders, input borders, table rules.

## Typography
- **Display: H1, H2, H3, fee tiers, the balance figure, the wordmark — PT Serif, humanist and calm** — PT Serif (OFL), weights 400/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, sliders, forms, captions; tabular numerals for all money** — Public Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 78px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.8vw, 72px) PT Serif 700, line-height 1.08; H2 clamp(28px, 3.8vw, 46px) PT Serif 700; H3 21px PT Serif 700; the balance figure PT Serif 700 44px Brass tabular; lead Public Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Public Sans 700 12px uppercase letter-spacing 0.16em Slate; caption 13px Slate. Buttons: height 50px, Public Sans 700 14px. Primary: Green Deep fill, Warm White text. Secondary: 1px Ink border, Ink text. Inputs: height 50px, 1px Rule border, warmwhite fill, focus Green Deep border. Focus ring everywhere: 2px Green Deep outline with 3px offset.
- Radius: 10px on cards, buttons, inputs, chips and photos. 999px only for pills, slider thumbs and cred badges.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and chart draws; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for calculator updates and the form swap. Calm — money pages move slowly.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- Hero: the portrait fades in 96%→100% over 1200ms; the H1 rises 16px; a brass underline draws under 'fee-only' once.
- Calculator: slider moves update the chart line and balance with a 250ms --ease-io tween; the chart's area fill fades to the new shape; the balance figure counts to its new value over 500ms; the assumptions line crossfades.
- Fee rows: hover slides a 2px Green Deep rule from the left; the price ticks up 1px.
- Credentials: badges stagger in 60ms; the brass ring draws once per badge.
- Booking: day chips fill Green Mist→Green Deep on select (150ms); invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn brass 'TALK SOON' ring scaling in gently, 'I look forward to it, [NAME].' and the day echoed.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no draws, counts (instant values) or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Calm real photography, all four made for this template in one consistent style: soft window light, warm neutrals, a quiet office. The advisor portrait is an AI-generated fictional person (mid-fifties, warm and credible — a placeholder users swap for their own photo); other photos show the desk, the reading corner and a notebook — no other people, no readable text, no brand marks. Every photo uses object-fit cover with the object-position given under Assets, 10px corners, no shadow; photos on Warm White get a 1px Rule outline. Captions in Public Sans 13px Slate. Drawn in code: the favicon, cred badges, sliders, the projection chart and chips. Icons: lucide-react only, stroke width 1.75.

## Tone
Plain, patient, numerate. Explains jargon in the same breath it uses it. Dry humor about compound interest exactly once.

---
— Prompt by VibeFather · https://vibefather.ai/t/financial-advisor-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
