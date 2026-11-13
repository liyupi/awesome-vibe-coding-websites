---
name: "Fintech App Landing Page"
colors:
  ink: "#0A1120"
  panel: "#101A2E"
  glass: "#16233C"
  line: "#23324E"
  bone: "#EEF3F8"
  mist: "#8FA0B8"
  mint: "#3DDC97"
  mint_deep: "#22B37A"
  mint_mist: "#12332E"
  gold: "#E5B54B"
  slate_ink: "#08121C"
  good: "#3DDC97"
typography:
  display_h1_h2_rate_figure_card_name_wordmark_space_grotesk_techy_but_warm: { family: "Space Grotesk", weights: [500, 700] }
  text_and_ui_body_transactions_forms_captions_tabular_numerals_for_all_money: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.4vw, 66px) Space Grotesk 700, line-height 1.05; H2 clamp(26px, 3.5vw, 42px) Space Grotesk 700; the rate figure Space Grotesk 700 56px with the % at 0.5em; lead Inter 400 17px / 1.65 Bone at 90%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist. Buttons: height 50px, Inter 600 14px; primary Mint fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs: height 50px, Glass fill, 1px Line border, focus Mint border + 2px offset ring."
radius: "14px on cards and panels, 10px on buttons and inputs, 999px for pills and chips, 44px on the phone."
---

# Fintech App Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0A1120` — Page background throughout, card faces.
- **Panel** `#101A2E` — Cards, sections panels, phone body.
- **Glass** `#16233C` — Raised panels, hover fill, select fill, glass sheen base.
- **Line** `#23324E` — 1px hairlines, card borders, input borders, phone edge.
- **Bone** `#EEF3F8` — Primary text, balance figures, headings.
- **Mist** `#8FA0B8` — Secondary text, captions, eyebrows, transaction names.
- **Mint** `#3DDC97` — The one live accent: rate chips, primary buttons, ring progress, focus ring, delta chips.
- **Mint Deep** `#22B37A` — Hover and pressed primary.
- **Mint Mist** `#12332E` — Chip fills, selected states, tint panels.
- **Gold** `#E5B54B` — The card chip and one warm detail on the card face only.
- **Slate Ink** `#08121C` — Text on mint or bone fills.
- **Good** `#3DDC97` — Success states, waitlist check, verified dots.

## Typography
- **Display: H1, H2, rate figure, card name, wordmark — Space Grotesk, techy but warm** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Text and UI: body, transactions, forms, captions; tabular numerals for all money** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.4vw, 66px) Space Grotesk 700, line-height 1.05; H2 clamp(26px, 3.5vw, 42px) Space Grotesk 700; the rate figure Space Grotesk 700 56px with the % at 0.5em; lead Inter 400 17px / 1.65 Bone at 90%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist. Buttons: height 50px, Inter 600 14px; primary Mint fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs: height 50px, Glass fill, 1px Line border, focus Mint border + 2px offset ring.
- Radius: 14px on cards and panels, 10px on buttons and inputs, 999px for pills and chips, 44px on the phone.

## Motion
- Easing: --ease-io cubic-bezier(0.65, 0, 0.35, 1) for screen swaps and ring progress; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals. Product-demo smooth.
- Reveal: sections wrapped in <Reveal> start opacity 0, translateY(16px), settle over 700ms --ease-out at 15% viewport (Motion whileInView, once), siblings stagger 70ms.
- Hero: the phone enters flat and rotates into its 3D pose over 900ms; the H1 lines rise; the rate chip pops once (scale 0.96→1).
- Phone loop: screens crossfade every 3.2s as described in Setup; the loop is also the reduced-motion fallback (frozen on Balance).
- FeatureRail: as each feature activates, the phone screen crossfades to match (400ms) and the active card lifts 2px with a Mint 1px left rail.
- Balance count-up: money figures count to their values over 900ms on first view (tabular, no jank).
- GoalRings: stroke-dashoffset animates to each percentage on view (900ms --ease-io); percentages count alongside.
- NumberMask: hover/focus expands the dots to digits with a 240ms width ease; blur (1px) on the digits' before-state for a reveal feel.
- Waitlist submit: the form crossfades to a Good check line 'Saved — this demo keeps your email in this browser only.'
- Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- prefers-reduced-motion: reduce — phone frozen on Balance, no count-ups (final values shown), rings drawn at rest, no chip pop; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs anywhere — everything is drawn in code: the phone mockup and its three screens, the SVG card with its abstract chip, goal rings, the round-up visualization, the security layer stack and the favicon. No real network marks (no Visa/Mastercard/Amex shapes), no platform store badges (store buttons are drawn generic with lucide icons), no people. Icons: lucide-react only, stroke width 1.75.

## Tone
Plain-money: exact numbers, short sentences, zero bro-y hype. One dry joke about spreadsheets.

---
— Prompt by VibeFather · https://vibefather.ai/t/fintech-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
