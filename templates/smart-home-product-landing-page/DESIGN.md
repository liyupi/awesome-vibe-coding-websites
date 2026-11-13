---
name: "Smart Home Product Landing Page"
colors:
  cream: "#FAF6EF"
  shell: "#F4EDE2"
  panel: "#FFFFFF"
  sand: "#EFE7DA"
  line: "#E5DACB"
  line_strong: "#D6C7B0"
  ink: "#2C2620"
  muted: "#6E655A"
  faint: "#9C9184"
  teal: "#0F8A85"
  teal_deep: "#0B6B67"
  teal_tint: "#DCEFEC"
typography:
  display_h1_clamp_38px_4_6vw_62px_line_height_1_08_letter_spacing_0_02em_weight_800_h2_clamp_30px_3_4vw_44px_weight_800_card_titles_20_22px_weight_700: { family: "Nunito Variable", weights: [600, 700, 800] }
  text_body_16px_1_65_subheads_17_18px_nav_14px_buttons_15px_weight_600: { family: "Figtree Variable", weights: [400, 500, 600, 700] }
  mono_device_chips_spec_chips_section_labels_11_12px_letter_spacing_0_12em_uppercase_prices_house_caption: { family: "IBM Plex Mono", weights: [400, 500, 600] }
spacing: "8px base. Container max-width 1160px with 24px side padding (20px below 640px). Sections 104px vertical padding on desktop, 72px on mobile. Section headers have 48px below them. Cards pad 24-28px; the house card pads 20px."
radius: "House card 28px; cards and bundle cards 24px; inner panels and phone app cards 16px; chips 10px; inputs 12px; every button and toggle is a full pill (999px); phone mockup 44px with 34px screen corners."
---

# Smart Home Product Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **cream** `#FAF6EF` — Page background, warm white
- **shell** `#F4EDE2` — Alternate section background, phone screen base
- **panel** `#FFFFFF` — Cards, house card, bundle cards
- **sand** `#EFE7DA` — Chips, inset panels, furniture fills in the house SVG
- **line** `#E5DACB` — Hairline borders and dividers
- **line-strong** `#D6C7B0` — House SVG walls, ground line, stronger borders
- **ink** `#2C2620` — Primary text, phone body
- **muted** `#6E655A` — Body copy, nav links
- **faint** `#9C9184` — Captions, mono labels, footnotes
- **teal** `#0F8A85` — The single accent: room highlights, pins, primary buttons, active toggles, check icons
- **teal-deep** `#0B6B67` — Hover and pressed states of teal elements
- **teal-tint** `#DCEFEC` — Selected-room fill, soft highlight backgrounds

## Typography
- **Display: H1 clamp(38px, 4.6vw, 62px) line-height 1.08 letter-spacing -0.02em weight 800; H2 clamp(30px, 3.4vw, 44px) weight 800; card titles 20-22px weight 700** — Nunito Variable (OFL), weights 600/700/800. Self-host the font files.
- **Text: body 16px/1.65, subheads 17-18px, nav 14px, buttons 15px weight 600** — Figtree Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Mono: device chips, spec chips, section labels (11-12px, letter-spacing 0.12em, uppercase), prices, house caption** — IBM Plex Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Container max-width 1160px with 24px side padding (20px below 640px). Sections 104px vertical padding on desktop, 72px on mobile. Section headers have 48px below them. Cards pad 24-28px; the house card pads 20px.
- Radius: House card 28px; cards and bundle cards 24px; inner panels and phone app cards 16px; chips 10px; inputs 12px; every button and toggle is a full pill (999px); phone mockup 44px with 34px screen corners.

## Motion
- Room selection: the selected room's fill crossfades to teal-tint over 300ms; the newly selected room's pins pop in (scale 0.8 -> 1, spring stiffness 320 damping 22, staggered 60ms); other rooms' pins settle to 45% opacity.
- Device lineup: hovering or focusing a card pulses its dots in the mini map (scale 1 -> 1.35, 900ms ease-in-out loop) and fades other dots to 35%.
- Phone scene: four steps check off in sequence (500ms apart) when 60% in view, progress bar fills to match, header status swaps from RUNNING to ALL SET; a Run again chip replays it.
- Scroll reveals: fade up 20px, 0.6s, ease [0.22, 1, 0.36, 1], once, stagger 0.06-0.1s.
- Hover lifts: cards rise 3px with the lift shadow over 220ms; toggles slide their knob 180ms.
- prefers-reduced-motion: no pops, pulses, sequences or reveals; the scene phone shows all steps checked, states static, full contrast everywhere.

## Imagery
Everything drawn in code: the cutaway house, mini map, device glyphs, phone mockups, logo mark and favicon are SVG/CSS built from the coordinates in this spec; no photographs, no people, no external image files of any kind. Warm whites and sand tones carry the house; teal appears only as the interactive accent (pins, highlights, primary buttons).

## Tone
Warm, calm and specific. Short sentences, plain verbs, real numbers (lumens, battery months, sample prices). Gently playful but never cute-obsessive; no hype words, no exclamation stacking.

---
— Prompt by VibeFather · https://vibefather.ai/t/smart-home-product-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
