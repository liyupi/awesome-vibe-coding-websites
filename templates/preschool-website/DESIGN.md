---
name: "Preschool Website"
colors:
  warm_white: "#FBF8F2"
  milkyway: "#F1EDE3"
  card: "#FFFFFF"
  skydeep: "#3A6EA5"
  skymist: "#E3EDF7"
  ink: "#2F3338"
  slate: "#66707A"
  crayon: "#EE8B4A"
  crayon_deep: "#D2742F"
  rule: "#E2DCCE"
  good: "#3E8E6D"
typography:
  display_h1_h2_h3_program_names_teacher_names_the_wordmark_baloo_2_rounded_and_storybook: { family: "Baloo 2", weights: [600, 700] }
  text_and_ui_body_eyebrows_buttons_forms_captions_tabular_numerals_for_tuition_and_hours: { family: "Nunito Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 72px) Baloo 2 700, line-height 1.08; H2 clamp(28px, 3.8vw, 44px) Baloo 700; H3 21px Baloo 700; tuition figures Baloo 700 32px Crayon tabular; lead Nunito 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.15em Slate; caption 13px Slate. Buttons: height 50px, Nunito 700 14px. Primary: Skydeep fill, Card text. Tour CTA: Crayon fill, Card text. Secondary: 1px Skydeep border. Inputs: height 50px, 1px Rule border, Card fill, focus Skydeep border. Focus ring everywhere: 2px Skydeep outline with 3px offset."
radius: "16px on cards, buttons, inputs, chips and photos. 999px only for pills, timeline dots and the open dot."
---

# Preschool Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FBF8F2` — Page background throughout.
- **Milkyway** `#F1EDE3` — Alternate section background (Programs, Tuition), chips, hover fill.
- **Card** `#FFFFFF` — Program cards, teacher cards, the tour panel, booked state.
- **Skydeep** `#3A6EA5` — Primary: headlines' accents, primary buttons, selected chips, timeline dots, focus ring.
- **Skymist** `#E3EDF7` — Selected chip fills, icon wells, timeline base.
- **Ink** `#2F3338` — Headlines and body text, icon color.
- **Slate** `#66707A` — Secondary text, captions, eyebrows, closed states.
- **Crayon** `#EE8B4A` — The one warm accent: the tour CTA, tuition figures, timeline highlight dot, focus-visible extras.
- **Crayon Deep** `#D2742F` — CTA hover and pressed.
- **Rule** `#E2DCCE` — 1px hairlines, card borders, input borders.
- **Good** `#3E8E6D` — Open dot, booked check, license ticks.

## Typography
- **Display: H1, H2, H3, program names, teacher names, the wordmark — Baloo 2, rounded and storybook** — Baloo 2 (OFL), weights 600/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for tuition and hours** — Nunito Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 72px) Baloo 2 700, line-height 1.08; H2 clamp(28px, 3.8vw, 44px) Baloo 700; H3 21px Baloo 700; tuition figures Baloo 700 32px Crayon tabular; lead Nunito 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.15em Slate; caption 13px Slate. Buttons: height 50px, Nunito 700 14px. Primary: Skydeep fill, Card text. Tour CTA: Crayon fill, Card text. Secondary: 1px Skydeep border. Inputs: height 50px, 1px Rule border, Card fill, focus Skydeep border. Focus ring everywhere: 2px Skydeep outline with 3px offset.
- Radius: 16px on cards, buttons, inputs, chips and photos. 999px only for pills, timeline dots and the open dot.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the timeline draw; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Gentle and steady — a preschool pace.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- Hero: the classroom photo scales 1.04→1.0 over 2200ms; the H1 rises; a small drawn sun bobs once beside the eyebrow (off under reduced motion).
- Day timeline: the horizontal base line draws left-to-right as the section scrolls; each stop's dot pops in sequence with a 120ms stagger; the current-stop highlight (lunch) fills Crayon.
- Program cards: hover lifts 3px and the icon well fills Skymist; the age badge ticks once.
- Teacher cards: portraits scale 1.03 on hover and the one-liner crossfades in.
- Tuition rows: hover slides a 2px Skydeep rule; figures never animate.
- Tour form: day chips fill Skydeep on select (150ms); invalid submit shakes 4px with kind inline labels; sending swaps to Booked (300ms --ease-io) — a drawn Crayon 'SEE YOU SOON' sticker scaling in, 'We can''t wait to meet [NAME] (and their grown-up).' day/age echo, 'Change my tour' pre-filled. Persisted in localStorage.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, draws, pops or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Bright real photography, all six made for this template in one consistent style: sunlit empty classrooms and play spaces — never any children's faces or bodies; toys and tiny chairs do the talking. Teacher portraits are AI-generated fictional people (warm, kneeling-height energy) — placeholders a real school swaps for its own staff photos. No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 16px corners, no shadow; photos on Warm White get a 1px Rule outline. Captions in Nunito 13px Slate. Drawn in code: the favicon, the sun glyph, timeline dots, the sticker and chips. Icons: lucide-react only, stroke width 1.75.

## Tone
Warm teacher-voice: short sentences, concrete details, gentle humor about toddler logic. No educational jargon without a plain gloss.

---
— Prompt by VibeFather · https://vibefather.ai/t/preschool-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
