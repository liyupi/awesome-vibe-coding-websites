---
name: "Drone Services Company Website"
colors:
  cloud: "#FFFFFF"
  skywash: "#F2F6F9"
  mist: "#E3ECF2"
  line: "#D3DEE6"
  sky: "#2F6DA8"
  ink: "#16242E"
  slate: "#4E6272"
  faint: "#8AA0AF"
  signal: "#F25C05"
  signal_deep: "#C94804"
  signal_tint: "#FDEADD"
typography:
  display_h1_clamp_40px_5vw_68px_line_height_1_04_letter_spacing_0_02em_weight_700_h2_clamp_30px_3_6vw_46px_weight_700_card_titles_22px_weight_600: { family: "Space Grotesk Variable", weights: [500, 600, 700] }
  text_body_16px_1_6_subheads_17_18px_nav_14px_buttons_15px_weight_600: { family: "Archivo Variable", weights: [400, 500, 600] }
  mono_telemetry_chips_deliverable_chips_section_labels_11_12px_letter_spacing_0_12em_uppercase_gallery_captions_form_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base. Container max-width 1200px with 24px side padding (20px below 640px). Sections 104px vertical padding on desktop, 72px on mobile. Section headers 48px below. Cards pad 24px; the slider frame is edge-to-edge within the container."
radius: "Cards and photo cards 14px; chips 6px; inputs 8px; the slider frame 16px; primary and ghost buttons are full pills (999px); gallery tiles 10px."
---

# Drone Services Company Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **cloud** `#FFFFFF` — UI surface: header, cards, form, footer base
- **skywash** `#F2F6F9` — Alternate section background
- **mist** `#E3ECF2` — Chips background, inset panels, input fills
- **line** `#D3DEE6` — Hairline borders and dividers
- **sky** `#2F6DA8` — Cool data blue: links on white, contour tint base, small marks only
- **ink** `#16242E` — Headings, slider line, primary text on light
- **slate** `#4E6272` — Body copy
- **faint** `#8AA0AF` — Captions, mono labels, footnotes
- **signal** `#F25C05` — The single accent: CTAs, slider handle, waypoints, active states, proof numbers
- **signal-deep** `#C94804` — Hover and pressed states
- **signal-tint** `#FDEADD` — Soft orange highlights, selected chips

## Typography
- **Display: H1 clamp(40px, 5vw, 68px) line-height 1.04 letter-spacing -0.02em weight 700; H2 clamp(30px, 3.6vw, 46px) weight 700; card titles 22px weight 600** — Space Grotesk Variable (OFL), weights 500/600/700. Self-host the font files.
- **Text: body 16px/1.6, subheads 17-18px, nav 14px, buttons 15px weight 600** — Archivo Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono: telemetry chips, deliverable chips, section labels (11-12px, letter-spacing 0.12em, uppercase), gallery captions, form labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Container max-width 1200px with 24px side padding (20px below 640px). Sections 104px vertical padding on desktop, 72px on mobile. Section headers 48px below. Cards pad 24px; the slider frame is edge-to-edge within the container.
- Radius: Cards and photo cards 14px; chips 6px; inputs 8px; the slider frame 16px; primary and ghost buttons are full pills (999px); gallery tiles 10px.

## Motion
- Hero parallax: the background photo translates 0 -> 8% of its height over the first 120vh of scroll (rAF, transform only), telemetry chips fade from 1 -> 0.7; disabled under reduced motion.
- Map slider: pointer or keyboard drag with the position clamped 0-100; a one-time hint sweep (50 -> 62 -> 40 -> 50 over 1.6s) when first 50% in view and not yet interacted; disabled under reduced motion.
- Scroll reveals: fade up 20px, 0.6s, ease [0.22, 1, 0.36, 1], once, stagger 0.06-0.1s.
- Card hovers: photo zooms 1 -> 1.04 (400ms), card lifts 3px; gallery captions underline in signal orange.
- prefers-reduced-motion: no parallax, no hint sweep, no zooms; reveals render in place; the slider still drags (it is direct manipulation).

## Imagery
Six generated aerial photographs that read as one operator's book: every image is a straight-down (nadir) view from about 120 meters in clear mid-morning light with crisp aligned shadows and a cool natural grade — estuary, solar array, striped farmland, forest-meets-lake, quarry terraces, small harbor. No people, no vehicles with readable plates, no signage, no readable text anywhere in the frames. The white UI sits over them; the survey overlay in the slider is code-drawn, not photographic.

## Tone
Plain-spoken and measurable. Short sentences, surveyor vocabulary (GSD, orthomosaic, contour), concrete invented numbers. No adventure-sport language, no regulation talk, no hype.

---
— Prompt by VibeFather · https://vibefather.ai/t/drone-services-company-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
