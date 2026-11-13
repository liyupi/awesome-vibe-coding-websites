---
name: "Hackathon Event Page"
colors:
  shell: "#0A0F0C"
  panel: "#101812"
  panel_2: "#16211A"
  line: "#23322A"
  bone: "#ECF2EC"
  mist: "#8FA093"
  lime: "#A8E63C"
  lime_deep: "#7FB92A"
  lime_mist: "#1D2A16"
  amber: "#E0A93C"
  violet: "#8A7BE8"
  slate_ink: "#0C1408"
  good: "#7FBF6A"
typography:
  display_h1_track_titles_judge_names_wordmark_space_grotesk: { family: "Space Grotesk", weights: [500, 700] }
  text_and_ui_body_forms_faq_inter: { family: "Inter", weights: [400, 500, 600] }
  mono_countdown_schedule_times_brackets_chips_jetbrains_mono: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(44px, 7vw, 84px) Space Grotesk 700 line-height 1.02; H2 clamp(26px, 3.6vw, 40px) Space Grotesk 700; countdown digits JetBrains 500 48px tabular with 11px uppercase Mist labels; track titles Space Grotesk 700 22px; prize figures Space Grotesk 700 30px; body 15.5px / 1.7; eyebrows mono 12px uppercase letter-spacing 0.14em Mist; schedule times mono 13px. Buttons: height 48px, Inter 600 14px; primary Lime fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs/selects: height 48px, Panel 2 fill, 1px Line border, focus Lime border + 2px offset ring. Focus everywhere: 2px Lime outline, 3px offset."
radius: "8px on cards, panels, buttons, inputs; 4px on schedule rows; 999px for chips and pills."
---

# Hackathon Event Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Shell** `#0A0F0C` — Page background — near-black with a green cast.
- **Panel** `#101812` — Cards, schedule rows, form panel.
- **Panel 2** `#16211A` — Hover fills, raised panels, selects.
- **Line** `#23322A` — 1px hairlines: borders, table rows, dividers.
- **Bone** `#ECF2EC` — Primary text, headings.
- **Mist** `#8FA093` — Secondary text, eyebrows, schedule times.
- **Lime** `#A8E63C` — The one electric accent: countdown digits, primary buttons, track prize figures, focus ring, active states.
- **Lime Deep** `#7FB92A` — Hover and pressed primary.
- **Lime Mist** `#1D2A16` — Chip fills, selected track, tier-1 tile tint.
- **Amber** `#E0A93C` — Validation hints and the 'sleep' schedule block.
- **Violet** `#8A7BE8` — The 'food' schedule block and one judge-role accent — used sparingly.
- **Slate Ink** `#0C1408` — Text on lime fills.
- **Good** `#7FBF6A` — Success panel, registered state.

## Typography
- **Display: H1, track titles, judge names, wordmark — Space Grotesk** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, forms, FAQ — Inter** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: countdown, schedule times, brackets, chips — JetBrains Mono** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(44px, 7vw, 84px) Space Grotesk 700 line-height 1.02; H2 clamp(26px, 3.6vw, 40px) Space Grotesk 700; countdown digits JetBrains 500 48px tabular with 11px uppercase Mist labels; track titles Space Grotesk 700 22px; prize figures Space Grotesk 700 30px; body 15.5px / 1.7; eyebrows mono 12px uppercase letter-spacing 0.14em Mist; schedule times mono 13px. Buttons: height 48px, Inter 600 14px; primary Lime fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs/selects: height 48px, Panel 2 fill, 1px Line border, focus Lime border + 2px offset ring. Focus everywhere: 2px Lime outline, 3px offset.
- Radius: 8px on cards, panels, buttons, inputs; 4px on schedule rows; 999px for chips and pills.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Terminal-quick: nothing over 400ms except section reveals.
- Reveal: sections rise 10px over 500ms at 15% viewport (Motion whileInView, once); siblings stagger 60ms.
- Hero: the title's mono brackets draw in first (each bracket translates 8px, 240ms), then the title settles; a thin lime rule under the eyebrow pulses once.
- Countdown: digits swap instantly (information, tabular width held); at zero the row crossfades to the live line (300ms).
- Track cards: hover lifts 3px with the prize figure turning full Lime; the recommended track carries a persistent Lime 1.5px border.
- Schedule: rows reveal staggered 40ms; block-type chips (BUILD/FOOD/SLEEP/DEMOS) tint per color; hover fills Panel 2.
- Judges: portraits settle from scale 1.04 with an 80ms stagger.
- Register: field errors fade 160ms; the success crossfade is 260ms; the submit button's lime fill deepens on hover.
- Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no reveals, no bracket drawing, no portrait scale; the countdown still ticks; color hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
Four judge portraits, all AI-generated fictional people in one consistent style: low-key lighting with a lime-rim light against near-black, hoodies and tees with blazers mixed, confident calm expressions, varied in age and ethnicity (a Latina woman in her 30s, a white man around 50, a South Asian man in his 20s, a Black woman around 40), not resembling any real individuals. No readable text, no logos, no lanyards or badges. Portraits object-fit cover, 8px corners, 1px Line outline. The sponsor strip is drawn-generic: wordmark-style text tiles in three tiers (no logos — invented names set as type). Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Tone
Overnight-caffeinated but kind: terminal shorthand, zero corporate. One joke about调试 at 3 AM.

---
— Prompt by VibeFather · https://vibefather.ai/t/hackathon-event-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
