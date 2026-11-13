---
name: "Solar Installer Website"
colors:
  sunwhite: "#FDFBF6"
  skymist: "#EEF4F8"
  card: "#FFFFFF"
  navy: "#1B3A5C"
  navy_deep: "#12293F"
  navy_mist: "#E3EDF5"
  slate: "#5A6B78"
  amber_sun: "#F0A419"
  amber_deep: "#D08A0A"
  rule: "#DEE5EA"
  good: "#2E8B62"
typography:
  display_h1_h2_h3_step_titles_the_savings_figure_the_wordmark: { family: "Manrope", weights: [700, 800] }
  text_and_ui_body_eyebrows_buttons_form_fields_captions_tabular_numerals_for_all_math: { family: "Public Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.4vw, 80px) Manrope 800, line-height 1.03; H2 clamp(28px, 3.8vw, 46px) Manrope 800; H3 20px Manrope 700; the savings figure Manrope 800 44px Amber tabular; lead Public Sans 400 17.5px / 1.65 Navy at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Public Sans 700 12px uppercase letter-spacing 0.16em Slate; caption 13px Slate. Buttons: height 50px, Public Sans 700 14px. Primary: Navy fill, Card text. Secondary: 1px Navy border, Navy text. Inputs: height 50px, 1px Rule border, Card fill, focus Navy border. Focus ring everywhere: 2px Navy outline with 3px offset."
radius: "14px on cards, buttons, inputs, chips, the calculator and photos. 999px only for pills, chips and the sun glyph."
---

# Solar Installer Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sunwhite** `#FDFBF6` — Page background throughout.
- **Skymist** `#EEF4F8` — Alternate section background (How, Projects), hover fill, chips.
- **Card** `#FFFFFF` — Calculator panel, financing cards, form, confirmation.
- **Navy** `#1B3A5C` — Primary: headlines' ink, primary buttons, selected chips, focus ring.
- **Navy Deep** `#12293F` — Hover, footer background, hero overlay ink.
- **Navy Mist** `#E3EDF5` — Selected roof option, step number wells, chips.
- **Slate** `#5A6B78` — Secondary text, captions, eyebrows, assumption lines.
- **Amber Sun** `#F0A419` — The one accent: the savings figure, sun glyph, selected slider fill, focus-visible details, gallery output numbers.
- **Amber Deep** `#D08A0A` — Amber hover and pressed.
- **Rule** `#DEE5EA` — 1px hairlines, card borders, input borders, dividers.
- **Good** `#2E8B62` — Trust checks, the confirmation check, 'switch-on' accents.

## Typography
- **Display: H1, H2, H3, step titles, the savings figure, the wordmark** — Manrope (OFL), weights 700/800. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals for all math** — Public Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.4vw, 80px) Manrope 800, line-height 1.03; H2 clamp(28px, 3.8vw, 46px) Manrope 800; H3 20px Manrope 700; the savings figure Manrope 800 44px Amber tabular; lead Public Sans 400 17.5px / 1.65 Navy at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow Public Sans 700 12px uppercase letter-spacing 0.16em Slate; caption 13px Slate. Buttons: height 50px, Public Sans 700 14px. Primary: Navy fill, Card text. Secondary: 1px Navy border, Navy text. Inputs: height 50px, 1px Rule border, Card fill, focus Navy border. Focus ring everywhere: 2px Navy outline with 3px offset.
- Radius: 14px on cards, buttons, inputs, chips, the calculator and photos. 999px only for pills, chips and the sun glyph.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and number changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Bright and confident.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 650ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the rooftop photo scales 1.04→1.0 over 2400ms; a small sun glyph rises beside the headline with rays drawing once (off under reduced motion).
- Calculator: the bill slider's fill tracks the thumb in Amber; every result counts to new values over 500ms --ease-io (tabular holds width); the payback figure ticks with a small underline draw; changing roof select crossfades the system-size line.
- How-it-works: the step connectors draw left-to-right as the section scrolls (scaleX); step numbers pop sequentially once.
- Financing cards: hover lifts 3px; the 'best for' line crossfades to a highlighted example.
- Gallery: photos scale 1.02 on hover with the output number ticking Amber; cards reveal staggered.
- Assessment: invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn sun+roof stamp scaling in and 'We''ll call within two days' with the bill echoed from the calculator.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, draws, counts or pops (instant values); color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Sunlit real photography, all six made for this template in one consistent style: big skies, rooftops with dark panels, warm light — houses from the street, array details, inverters and clean installs; never a person (no faces, no hands). No readable text or signage; panels are generic (no manufacturer marks). Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on Sunwhite get a 1px Rule outline. Captions in Public Sans 13px Slate. Drawn in code: the sun glyph, slider, step connectors, the stamp, chips and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Straightforward and sunny, like the best estimator on the crew: real numbers, stated assumptions, zero pressure. One joke about clouds.

---
— Prompt by VibeFather · https://vibefather.ai/t/solar-installer-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
