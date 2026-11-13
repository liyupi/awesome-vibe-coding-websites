---
name: "Physical Therapy Clinic Website"
colors:
  white_page: "#FDFDFB"
  slate_mist: "#EFF3F2"
  card: "#FFFFFF"
  teal: "#1F7A6D"
  teal_deep: "#155F55"
  teal_mist: "#E0F0ED"
  ink: "#22302D"
  slate: "#5C6B68"
  coral: "#E2795B"
  rule: "#DEE5E2"
  good: "#2E8B62"
typography:
  display_h1_h2_h3_condition_names_therapist_names_the_wordmark_nunito_rounded_and_friendly: { family: "Nunito", weights: [600, 700] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_hours_and_prices: { family: "Source Sans 3", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 72px) Nunito 700, line-height 1.06; H2 clamp(28px, 3.8vw, 44px) Nunito 700; H3 20px Nunito 700; lead Source Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.14em Slate; caption 13px Slate. Buttons: height 50px, Source Sans 700 14px. Primary: Teal fill, Card text. New-patient CTA: Coral fill, Card text. Secondary: 1px Teal border, Teal text. Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset."
radius: "14px on cards, buttons, inputs, chips and photos. 999px only for pills, the open dot and journey dots."
---

# Physical Therapy Clinic Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **White Page** `#FDFDFB` — Page background on both pages.
- **Slate Mist** `#EFF3F2` — Alternate section background (Conditions, Insurance), chips, hover fill.
- **Card** `#FFFFFF` — Condition cards, therapist cards, the intake panel, confirmation.
- **Teal** `#1F7A6D` — Primary: headlines' accents, primary buttons, selected chips, step numbers, focus ring.
- **Teal Deep** `#155F55` — Hover and pressed, footer background.
- **Teal Mist** `#E0F0ED` — Selected chip fills, icon wells, open dot glow.
- **Ink** `#22302D` — Headlines and body text, icon color.
- **Slate** `#5C6B68` — Secondary text, captions, eyebrows, closed states.
- **Coral** `#E2795B` — The one warm tick: the new-patient CTA, journey dots, sample-outcome labels, hover ticks.
- **Rule** `#DEE5E2` — 1px hairlines, card borders, input borders, dividers.
- **Good** `#2E8B62` — Confirmation checks, insurance-accepted ticks, open-now dot.

## Typography
- **Display: H1, H2, H3, condition names, therapist names, the wordmark — Nunito, rounded and friendly** — Nunito (OFL), weights 600/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for hours and prices** — Source Sans 3 (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 72px) Nunito 700, line-height 1.06; H2 clamp(28px, 3.8vw, 44px) Nunito 700; H3 20px Nunito 700; lead Source Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.14em Slate; caption 13px Slate. Buttons: height 50px, Source Sans 700 14px. Primary: Teal fill, Card text. New-patient CTA: Coral fill, Card text. Secondary: 1px Teal border, Teal text. Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset.
- Radius: 14px on cards, buttons, inputs, chips and photos. 999px only for pills, the open dot and journey dots.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap and accordion. Gentle and steady.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the room photo scales 1.04→1.0 over 2000ms; the H1 rises; a small journey dot (coral) pulses once.
- Condition cards: hover lifts 3px and the icon well fills Teal Mist.
- Approach: the three step cards' connecting line draws left-to-right as the section scrolls; numbers pop sequentially.
- Therapist cards: portraits scale 1.03 on hover; the specialty pill crossfades to the one-liner.
- Insurance rows: the accepted-network ticks stagger in 60ms.
- Intake: history checkboxes tick with a drawn check; invalid submit shakes 4px once with kind inline labels; sending swaps to Confirmed (300ms --ease-io) with a Good check drawing and 'See you soon, [NAME].' plus the echoed condition line.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, draws, pops or staggered reveals; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Bright real photography, all six made for this template in one consistent style: treatment rooms in soft daylight, pale wood and gentle greens, hands-free scenes — no patients, no faces. Therapist portraits are AI-generated fictional people at work (guiding a shoulder stretch, watching gait, demonstrating a band exercise) — placeholders a real clinic swaps for its own staff photos. No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on White get a 1px Rule outline. Captions in Source Sans 13px Slate. Drawn in code: the favicon, journey dots, ticks, chips and the confirmation check. Icons: lucide-react only, stroke width 1.75.

## Tone
Encouraging and matter-of-fact, like a PT who's seen the same shoulder a thousand times. Plain words for anatomy, typical journeys for outcomes (sample-labeled), one joke about homework compliance.

---
— Prompt by VibeFather · https://vibefather.ai/t/physical-therapy-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
