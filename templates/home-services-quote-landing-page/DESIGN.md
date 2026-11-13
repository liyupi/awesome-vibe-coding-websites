---
name: "Home Services Quote Landing Page"
colors:
  paper: "#FFFFFF"
  mist: "#F1F4F8"
  navy: "#13293F"
  navy_soft: "#1D3A57"
  ink: "#17222E"
  slate: "#5B6B7B"
  rule: "#DCE2EA"
  orange: "#E8622A"
  orange_deep: "#C94E1D"
  orange_pale: "#FBE3D6"
  good: "#2E7D5B"
typography:
  display_h1_h2_h3_service_names_price_figures_the_wordmark_phone_numbers_in_large_sizes: { family: "Barlow Condensed", weights: [600, 700] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_captions_numbers_font_variant_numeric_tabular_nums_for_prices_and_estimates: { family: "Barlow", weights: [400, 600] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(46px, 7vw, 96px) Barlow Condensed 700, line-height 0.98, uppercase, letter-spacing 0.005em; H2 clamp(34px, 4.4vw, 58px) Barlow Condensed 700 uppercase; H3 24px Barlow Condensed 700; lead Barlow 400 18px / 1.65; body Barlow 400 16px / 1.7 (max-width 64ch); eyebrow Barlow 600 12px uppercase letter-spacing 0.16em Slate, preceded by a 24px x 2px Orange line with 12px gap; caption Barlow 400 13px Slate. Buttons: height 54px, padding 0 28px, Barlow 600 15px uppercase letter-spacing 0.08em. Primary: Orange fill, Paper text. Secondary: 1px Ink border, Ink text (on Navy: 1px Paper border, Paper text). Small buttons 40px high. Inputs: height 52px, 1px Rule border, Mist fill, 16px Barlow, focus border Orange. Phone links: Barlow Condensed 700 26px, tabular-nums. Focus ring everywhere: 2px Orange outline with 3px offset."
radius: "10px on cards, buttons, inputs, chips, photos and the estimator panel. 999px only for chips, badges and the pulse dot."
---

# Home Services Quote Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#FFFFFF` — Page background, cards, estimator panel.
- **Mist** `#F1F4F8` — Alternate section background (Services, Process), input fill, chips.
- **Navy** `#13293F` — Hero background, header surface, footer, emergency bar text, photo overlays (as rgba(19,41,63,x)).
- **Navy Soft** `#1D3A57` — Hover surface on Navy, selected estimator step fill, deep borders.
- **Ink** `#17222E` — Headlines and body text on light backgrounds, icon color.
- **Slate** `#5B6B7B` — Secondary text, captions, eyebrows, disabled states (at 45% opacity).
- **Rule** `#DCE2EA` — 1px hairlines, card borders, input borders, map contour lines.
- **Orange** `#E8622A` — The one accent: emergency bar background, primary CTAs, price figures, selected chips, focus ring, map pin.
- **Orange Deep** `#C94E1D` — Primary button hover and pressed state.
- **Orange Pale** `#FBE3D6` — Estimate result background, badge fills, hover tint for service cards.
- **Good** `#2E7D5B` — Success states: ZIP covered check, form saved check, guarantee check marks.

## Typography
- **Display: H1, H2, H3, service names, price figures, the wordmark, phone numbers in large sizes** — Barlow Condensed (OFL), weights 600/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, captions, numbers (font-variant-numeric tabular-nums for prices and estimates)** — Barlow (OFL), weights 400/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(46px, 7vw, 96px) Barlow Condensed 700, line-height 0.98, uppercase, letter-spacing 0.005em; H2 clamp(34px, 4.4vw, 58px) Barlow Condensed 700 uppercase; H3 24px Barlow Condensed 700; lead Barlow 400 18px / 1.65; body Barlow 400 16px / 1.7 (max-width 64ch); eyebrow Barlow 600 12px uppercase letter-spacing 0.16em Slate, preceded by a 24px x 2px Orange line with 12px gap; caption Barlow 400 13px Slate. Buttons: height 54px, padding 0 28px, Barlow 600 15px uppercase letter-spacing 0.08em. Primary: Orange fill, Paper text. Secondary: 1px Ink border, Ink text (on Navy: 1px Paper border, Paper text). Small buttons 40px high. Inputs: height 52px, 1px Rule border, Mist fill, 16px Barlow, focus border Orange. Phone links: Barlow Condensed 700 26px, tabular-nums. Focus ring everywhere: 2px Orange outline with 3px offset.
- Radius: 10px on cards, buttons, inputs, chips, photos and the estimator panel. 999px only for chips, badges and the pulse dot.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and result changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for accordion and picker swaps. Confident, never playful.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and animate to rest over 600ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 70ms (index prop).
- Emergency bar: a small Orange pulse dot beside '24/7' (scale 1 to 1.3, 1400ms loop, pauses under reduced motion); the bar itself slides down 100% into place 300ms after load.
- Estimator: each picker choice fills the chip over 120ms and slides the estimate panel's numbers to the new range — the price counts between old and new values over 500ms --ease-io, the minutes badge crossfades. Switching steps slides the panel content 16px horizontally, 260ms --ease-io (AnimatePresence mode 'wait').
- ZIP checker: on submit, a spinner (drawn CSS ring) spins for a fixed 700ms, then the result card slides up 12px — Good check and 'Covered — [neighborhood]' for served prefixes, Orange 'Call us' card otherwise.
- Service cards: hover lifts 4px and the price ticks up 2px; the Orange 'from' rule grows from 0 to 24px width.
- Area map: when scrolled into view, the radius circle draws (stroke-dashoffset to 0) over 900ms, then van pins pop with 100ms stagger; the covered ZIP dots fade in.
- Reviews: cards rise 8px on hover; the star row fills Orange left to right over 400ms on first view.
- Header: transparent over the Navy hero with Paper text; after 40px of scroll it gets Paper at 96% opacity, Ink text, a 1px Rule border and a small Orange 'Call' button, 250ms transition. The emergency bar stays above it (two stacked sticky rows, emergency bar first).
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 250ms --ease-out on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the bar slide, pulse, count-ups, draws, staggered pins and layout animations (render at rest). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, documentary and workmanlike, all six made for this template in one consistent style: natural daylight, navy and white with orange tool accents, clean job sites, fine grain. Never a person: vans, tools, installs, parts and details — no faces, no hands. No readable text, logos or branding on vans, tools or parts. Every photo uses object-fit cover with the object-position given under Assets, 10px corners, no shadow; photos on Mist get a 1px Rule outline. Captions under photos in Barlow 13px Slate. Drawn in code: the favicon, the wordmark (type only), the invented guarantee badges (plain geometric shapes — shield, ring, check, clock — never a real certification body's logo), the area map, chips and the estimator panel. Icons: lucide-react only, stroke width 1.75.

## Tone
Plain, fast and honest, like a good dispatcher. Short declarative sentences, concrete numbers (minutes, dollars, years), no exclamation marks, no 'family owned and operated' clichés without specifics.

---
— Prompt by VibeFather · https://vibefather.ai/t/home-services-quote-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
