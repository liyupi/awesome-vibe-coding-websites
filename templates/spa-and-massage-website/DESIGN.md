---
name: "Spa and Massage Website"
colors:
  porcelain: "#F5F2EA"
  oat: "#E9E3D6"
  paper: "#FCFAF5"
  spruce: "#24382F"
  spruce_soft: "#354C41"
  ink: "#252A26"
  sage: "#6F7D6C"
  clay: "#A9654B"
  clay_deep: "#85503B"
  rule: "#D8D1C2"
  white: "#FFFDF8"
typography:
  display_h1_h2_h3_treatment_names_therapist_names_package_prices_and_wordmark: { family: "Cormorant Garamond", weights: [400, 500, 600] }
  text_and_ui_body_navigation_buttons_labels_prices_in_compact_rows_form_fields_and_captions: { family: "Manrope", weights: [400, 500, 600, 700] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px below 640px. Twelve-column grid with 24px gutters. Section padding 104px desktop, 80px tablet, 64px mobile. H1 clamp(48px, 6.4vw, 88px), Cormorant Garamond 500, line-height 0.98, letter-spacing -0.025em; H2 clamp(34px, 4vw, 54px), weight 500, line-height 1.04; H3 26px, weight 600, line-height 1.15. Lead 18px/1.7 Manrope 400; body 16px/1.75 max-width 64ch; eyebrow 11px Manrope 700 uppercase, letter-spacing 0.2em, Sage, with a 28px Clay rule; caption 13px/1.6 Sage. Buttons 50px high with 24px horizontal padding, Manrope 700 13px; primary Spruce fill and White text, secondary 1px Spruce border and transparent fill. Inputs 52px high, Paper fill, 1px Rule border, 16px text, Clay focus border. All interactive elements receive a 2px Clay outline with 3px offset on focus-visible."
radius: "20px on cards, photographs, input groups and the booking panel; 12px on inputs and small buttons; 999px only for chips, status dots and compact pills. The home hero image alone uses 280px 280px 20px 20px corners to create a tall arch."
---

# Spa and Massage Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Porcelain** `#F5F2EA` — Main page background, header and input fill.
- **Oat** `#E9E3D6` — Alternate section backgrounds, filter chips and image wells.
- **Paper** `#FCFAF5` — Cards, booking panel, accordions and confirmation surface.
- **Spruce** `#24382F` — Footer, package section, primary buttons and dark overlays.
- **Spruce Soft** `#354C41` — Primary button hover and elevated surfaces on Spruce.
- **Ink** `#252A26` — Headlines and primary body text on light backgrounds.
- **Sage** `#6F7D6C` — Secondary text, captions, icons, available indicators and muted borders.
- **Clay** `#A9654B` — Warm accent for prices, selected states, eyebrow rules and focus rings.
- **Clay Deep** `#85503B` — Accent hover and accessible accent text on pale backgrounds.
- **Rule** `#D8D1C2` — Hairlines, card borders, form controls and stepper connectors.
- **White** `#FFFDF8` — Text on Spruce and photographic overlays.

## Typography
- **Display: H1, H2, H3, treatment names, therapist names, package prices and wordmark** — Cormorant Garamond (OFL), weights 400/500/600. Self-host the font files.
- **Text and UI: body, navigation, buttons, labels, prices in compact rows, form fields and captions** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px below 640px. Twelve-column grid with 24px gutters. Section padding 104px desktop, 80px tablet, 64px mobile. H1 clamp(48px, 6.4vw, 88px), Cormorant Garamond 500, line-height 0.98, letter-spacing -0.025em; H2 clamp(34px, 4vw, 54px), weight 500, line-height 1.04; H3 26px, weight 600, line-height 1.15. Lead 18px/1.7 Manrope 400; body 16px/1.75 max-width 64ch; eyebrow 11px Manrope 700 uppercase, letter-spacing 0.2em, Sage, with a 28px Clay rule; caption 13px/1.6 Sage. Buttons 50px high with 24px horizontal padding, Manrope 700 13px; primary Spruce fill and White text, secondary 1px Spruce border and transparent fill. Inputs 52px high, Paper fill, 1px Rule border, 16px text, Clay focus border. All interactive elements receive a 2px Clay outline with 3px offset on focus-visible.
- Radius: 20px on cards, photographs, input groups and the booking panel; 12px on inputs and small buttons; 999px only for chips, status dots and compact pills. The home hero image alone uses 280px 280px 20px 20px corners to create a tall arch.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and image settling; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for accordions, filters and booking steps. Nothing bounces or spins.
- Reveal: major blocks wrapped in Reveal start at opacity 0 and translateY(18px), then settle over 800ms --ease-out when 15% visible with Motion whileInView and viewport once. Siblings stagger by 90ms.
- Hero: the photograph scales from 1.045 to 1 over 1800ms on load; the two headline lines rise 24px and fade in with 140ms stagger. The small appointment note fades in after 500ms. No scroll parallax is required.
- Treatment rows: hover shifts the title 6px right, changes the border to Clay and reveals the arrow over 250ms. Keyboard focus produces the same state without hiding the price or duration.
- Therapist cards: portrait scales to 1.025 over 600ms on hover and the booking underline draws left to right; no card tilt.
- Gift card: amount changes crossfade the price over 200ms and the recipient name updates immediately; saving opens a small confirmation drawer that slides up 12px and fades over 300ms.
- Booking: step changes use AnimatePresence mode 'wait', crossfading with a 16px horizontal slide over 280ms. Selection chips fill over 150ms. The confirmation check stroke draws over 500ms and the reference fades in; no typewriter effect.
- FAQ: height 0 to auto and opacity 0 to 1 over 320ms --ease-io; the Plus icon rotates 45 degrees.
- Header: solid Porcelain at 96% with backdrop blur 12px from the start; after 24px scroll a 1px Rule bottom border fades in. Mobile menu slides from the right over 280ms.
- prefers-reduced-motion: reduce — render every reveal and hero element at rest, disable image scaling, step slides, check drawing and smooth scrolling; retain instant state changes, color hovers and focus indicators. Use CSS media queries and Motion useReducedMotion.

## Imagery
Six coordinated realistic editorial photographs made for this template: warm window light, porcelain and oat tones, pale oak, natural linen, muted eucalyptus green and restrained clay accents, subtle fine grain. The hero, treatment still life and gift still life contain no people, no readable text and no logos. Three therapist portraits are fictional adults not resembling any real individual, framed consistently from mid-torso up in the same softly lit treatment room, diverse in age and ethnicity, wearing plain sage or cream work clothing. These are professional staff placeholders, never celebrity likenesses. Use object-fit cover, 20px corners except the arched hero, and no heavy shadows. Icons are lucide-react only at 1.5 stroke width. The favicon and all decorative arcs, rules, check marks and gift-card graphics are drawn in code.

## Tone
Calm, warm and precise, like a considerate receptionist who never rushes a guest. Short sentences, concrete minutes and dollars, no mystical wellness language, no medical promises, no exclamation marks. Use US English throughout.

---
— Prompt by VibeFather · https://vibefather.ai/t/spa-and-massage-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
