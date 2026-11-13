---
name: "Veterinary Clinic Website"
colors:
  warm_white: "#FDFBF7"
  mist: "#F0EFE9"
  card: "#FFFFFF"
  teal: "#2C6E63"
  teal_deep: "#1F5349"
  teal_mist: "#E3EEEA"
  ink: "#22302C"
  slate: "#5E6B66"
  honey: "#D9A441"
  honey_deep: "#B8862F"
  coral_alert: "#C75146"
  rule: "#E4E1D8"
typography:
  display_h1_h2_h3_service_and_vet_names_the_wordmark_form_headings: { family: "Comfortaa", weights: [500, 700] }
  text_and_ui_body_eyebrows_buttons_forms_captions_hours_tabular_numerals_for_times: { family: "Albert Sans", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(42px, 6vw, 76px) Comfortaa 700, line-height 1.05; H2 clamp(30px, 4vw, 48px) Comfortaa 700; H3 22px Comfortaa 700; lead Albert Sans 400 18px / 1.7 Ink at 90%; body 16px / 1.7 (max-width 64ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.16em Slate with a small drawn paw before it in Teal; caption 13px Slate. Buttons: height 52px, Albert Sans 700 15px. Primary: Teal fill, Card text. Secondary: 1px Teal border, Teal text. Emergency CTA: Coral Alert outline, Coral Alert text (never a fill — calm). Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset."
radius: "16px on cards, buttons, inputs, chips, photos, the form panel. 999px only for pills, the open-now dot, vet initials and paw dots."
---

# Veterinary Clinic Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm White** `#FDFBF7` — Page background on both pages.
- **Mist** `#F0EFE9` — Alternate section background (Services, Care tips), hover fill.
- **Card** `#FFFFFF` — Cards, the form panel, confirmation, hours card.
- **Teal** `#2C6E63` — Primary: headlines' accents, primary buttons, service icons, open-now dot, focus ring.
- **Teal Deep** `#1F5349` — Primary hover, footer background, emergency band text.
- **Teal Mist** `#E3EEEA` — Selected chips, vet avatar circles, service icon wells.
- **Ink** `#22302C` — Headlines and body text, icon color.
- **Slate** `#5E6B66` — Secondary text, captions, eyebrows, hours labels.
- **Honey** `#D9A441` — The warm accent: prices-free highlights, star moments, paw prints, care-tip icons, 'new patient' chip.
- **Honey Deep** `#B8862F` — Honey hover states, form focus ticks.
- **Coral Alert** `#C75146` — Emergency band only: the band border, phone figure and pulse dot — calm, sparing, never flashing.
- **Rule** `#E4E1D8` — 1px hairlines, card borders, input borders, map contour lines.

## Typography
- **Display: H1, H2, H3, service and vet names, the wordmark, form headings** — Comfortaa (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, forms, captions, hours (tabular numerals for times)** — Albert Sans (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(42px, 6vw, 76px) Comfortaa 700, line-height 1.05; H2 clamp(30px, 4vw, 48px) Comfortaa 700; H3 22px Comfortaa 700; lead Albert Sans 400 18px / 1.7 Ink at 90%; body 16px / 1.7 (max-width 64ch); eyebrow Albert Sans 700 12px uppercase letter-spacing 0.16em Slate with a small drawn paw before it in Teal; caption 13px Slate. Buttons: height 52px, Albert Sans 700 15px. Primary: Teal fill, Card text. Secondary: 1px Teal border, Teal text. Emergency CTA: Coral Alert outline, Coral Alert text (never a fill — calm). Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset.
- Radius: 16px on cards, buttons, inputs, chips, photos, the form panel. 999px only for pills, the open-now dot, vet initials and paw dots.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap and accordion. Gentle, unhurried — a waiting-room pace.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 80ms.
- Hero photo: scales 1.05→1.0 over 2400ms on load; a drawn paw print trail (three small SVG paws) fades in along the hero's bottom edge, staggered 200ms (off under reduced motion).
- Emergency band: the pulse dot breathes (scale 1→1.2, 1800ms loop, off under reduced motion); the band itself is static — urgency without alarm.
- Service cards: hover lifts 3px and the icon well fills Teal Mist; the icon's stroke re-draws once per hover.
- Vet cards: hover lifts the avatar 2px and swaps the specialty line to the bedside quote (a 240ms crossfade).
- Form: species chips fill Teal Mist on select (150ms); invalid submit shakes 4px once with inline hints; submitting slides the panel to the ConfirmationCard (280ms --ease-io) with a drawn heart-plus-paw stamp scaling in; 'Start another' reverses.
- Hours: the open-now dot pulses only while open; the today-row carries a 2px Teal left rule that slides between days at midnight (crossfade).
- MiniMap: on view, the road lines draw (900ms), then the pin bobs in with one soft overshoot; the park block fills last.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no pulses, draws, staggers or scales; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Warm real photography, all six made for this template in one consistent style: soft daylight, warm whites and wood with teal accents, animals relaxed, vet portraits are AI-generated fictional people shown at work with animal patients (consistent warm clinic light); they are placeholders a real clinic swaps for its own staff photos; all other photos stay animal-and-room only. Every photo uses object-fit cover with the object-position given under Assets, 16px corners, no shadow; photos on Warm White get a 1px Rule outline. Captions in Albert Sans 13px Slate. Drawn in code: the paw prints, service icons stay lucide, the heart-paw stamp, the mini-map, chips and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Warm, plain, unhurried — the receptionist everyone hopes for. Short sentences, no jargon without a translation, gentle humor about pets (never about owners).

---
— Prompt by VibeFather · https://vibefather.ai/t/veterinary-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
