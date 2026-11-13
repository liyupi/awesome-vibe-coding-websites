---
name: "Digital Marketing Agency Website"
colors:
  offblack: "#101112"
  coal: "#1A1C1E"
  bone: "#F4F1E8"
  paper: "#FBFAF6"
  ink_soft: "#8E8B82"
  lime: "#C8F135"
  lime_deep: "#A8CC1E"
  lime_mist: "#2A2E14"
  rule_dark: "#2E3134"
typography:
  display_h1_h2_service_tiles_case_names_metric_figures_the_wordmark_space_grotesk_at_poster_sizes_uppercase: { family: "Space Grotesk", weights: [500, 700] }
  text_and_ui_body_eyebrows_buttons_chips_forms_captions_tabular_numerals_for_all_figures: { family: "Inter", weights: [400, 600, 700] }
spacing: "8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 84px under 1024px, 64px under 640px. Type scale: H1 clamp(56px, 10vw, 140px) Space Grotesk 700 uppercase, line-height 0.92, letter-spacing -0.01em; H2 clamp(34px, 4.6vw, 64px) Space Grotesk 700 uppercase; service tile titles 22px Grotesk 700; metric figures Grotesk 700 56px Lime tabular; lead Inter 400 18px / 1.6 Bone at 85%; body 15.5px / 1.7 (max-width 62ch); eyebrow Inter 700 12px uppercase letter-spacing 0.22em Ink Soft; caption 13px Ink Soft. Buttons: height 54px, Inter 700 14px uppercase letter-spacing 0.08em. Primary: Lime fill, Offblack text. Secondary: 1px Bone/30% border, Bone text. Inputs: height 52px, Coal fill, 1px Rule Dark border, Bone text, focus Lime border. Focus ring everywhere: 2px Lime outline with 3px offset."
radius: "0px on everything — tiles, buttons, chips, cards, inputs, the form panel. Sharp is the brand."
---

# Digital Marketing Agency Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Offblack** `#101112` — Page background — the studio's default light setting is off.
- **Coal** `#1A1C1E` — Alternate section background (Services, Process), card surfaces.
- **Bone** `#F4F1E8` — Primary text: headlines, body, buttons on dark.
- **Paper** `#FBFAF6` — Inverted panels: the proposal form and sent panel flip to light.
- **Ink Soft** `#8E8B82` — Secondary text, captions, eyebrows, unselected chips.
- **Lime** `#C8F135` — The one accent: primary buttons, counters, ticker separators, selected chips, focus ring, the metric figures.
- **Lime Deep** `#A8CC1E` — Lime hover and pressed.
- **Lime Mist** `#2A2E14` — Selected chip fills on dark, metric wells.
- **Rule Dark** `#2E3134` — 1px hairlines, card borders, input borders, ticker edges.

## Typography
- **Display: H1, H2, service tiles, case names, metric figures, the wordmark — Space Grotesk at poster sizes, uppercase** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, chips, forms, captions; tabular numerals for all figures** — Inter (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 112px desktop, 84px under 1024px, 64px under 640px. Type scale: H1 clamp(56px, 10vw, 140px) Space Grotesk 700 uppercase, line-height 0.92, letter-spacing -0.01em; H2 clamp(34px, 4.6vw, 64px) Space Grotesk 700 uppercase; service tile titles 22px Grotesk 700; metric figures Grotesk 700 56px Lime tabular; lead Inter 400 18px / 1.6 Bone at 85%; body 15.5px / 1.7 (max-width 62ch); eyebrow Inter 700 12px uppercase letter-spacing 0.22em Ink Soft; caption 13px Ink Soft. Buttons: height 54px, Inter 700 14px uppercase letter-spacing 0.08em. Primary: Lime fill, Offblack text. Secondary: 1px Bone/30% border, Bone text. Inputs: height 52px, Coal fill, 1px Rule Dark border, Bone text, focus Lime border. Focus ring everywhere: 2px Lime outline with 3px offset.
- Radius: 0px on everything — tiles, buttons, chips, cards, inputs, the form panel. Sharp is the brand.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and counters; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap and ticker pauses. Snappy and declarative.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and settle over 550ms --ease-out when 12% visible (Motion whileInView, viewport once). Siblings stagger 60ms.
- Hero: H1 words slide in from alternating sides 24px (staggered 90ms); the abstract rising-bars SVG draws its bars upward 800ms; the Ticker runs at 60px/s below the fold line, pausing on hover, static under reduced motion.
- Ticker: invented client names in Grotesk 700 uppercase separated by drawn lime squares; duplicated content for a seamless loop.
- Counters: every case-study metric counts from 0 to its figure on first view (800ms --ease-out, tabular); the % suffix pops in after the count lands.
- Service tiles: hover inverts the tile to Bone with Offblack text (200ms); the tile's icon rotates 90deg once.
- Case cards: hover lifts 0 (no lift — brutal) but the card's chart glyph (mini bars/line/donut in Lime) animates its data once per hover.
- Proposal: budget pills fill Lime Mist with Lime text on select (150ms); service chips toggle individually; invalid submit shakes 5px with inline labels; sending swaps to SentPanel (280ms --ease-io) — the panel flips to Paper with Offblack text, a drawn lime 'SENT' stamp slamming in scale 1.2→1, and the echo of budget + services.
- Links: .link-draw grows a 1px Bone underline over 220ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no ticker motion (static row), no counters (final figures), no draws or stamps; color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Two AI-generated studio photographs (fictional people) in the offblack-lime world — a war-room session and a team huddle; everything else drawn in code. The hero's rising-bars SVG, case-card chart glyphs (bars, line, donut in Lime strokes), the ticker separators, initials avatar blocks and the favicon are SVG/CSS. No stock, no office photos, no real client logos (the ticker uses invented names only), no platform brand icons. Icons: lucide-react only, stroke width 2.

## Tone
Confident, specific, allergic to fluff. Real verbs, invented-but-believable numbers, one joke about funnels. Never 'we leverage synergies'.

---
— Prompt by VibeFather · https://vibefather.ai/t/digital-marketing-agency-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
