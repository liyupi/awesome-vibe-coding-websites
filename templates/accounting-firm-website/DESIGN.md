---
name: "Accounting Firm Website"
colors:
  paper: "#F7F4EC"
  ledger: "#EFEAD9"
  card: "#FFFDF8"
  ink: "#26221A"
  slate: "#6B675C"
  green_ledger: "#2E5641"
  green_deep: "#21402F"
  green_mist: "#E4EBE2"
  brass: "#A87C2F"
  rule: "#DFD8C4"
typography:
  display_h1_h2_h3_service_titles_the_estimate_figures_the_wordmark: { family: "Libre Franklin", weights: [400, 600] }
  text_and_ui_body_eyebrows_buttons_chips_form_fields_captions_tabular_numerals_for_all_figures_and_dates: { family: "IBM Plex Sans", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 72px) Libre Franklin 600, line-height 1.06; H2 clamp(28px, 3.8vw, 46px) Libre Franklin 600; H3 21px Libre Franklin 600; the estimate figures Libre Franklin 600 40px Brass tabular; lead IBM Plex 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow IBM Plex 600 12px uppercase letter-spacing 0.16em Slate; caption 13px Slate; deadline rows IBM Plex 15px with tabular dates. Buttons: height 50px, IBM Plex 600 14px. Primary: Green Ledger fill, Card text. Secondary: 1px Green Ledger border, Green Ledger text. Inputs: height 50px, 1px Rule border, Card fill, focus Green border. Focus ring everywhere: 2px Green Ledger outline with 3px offset."
radius: "6px on cards, buttons, inputs, chips and photos — ledger-crisp. 999px only for chips, dots and pills."
---

# Accounting Firm Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F7F4EC` — Page background on both pages.
- **Ledger** `#EFEAD9` — Alternate section background (Services, Estimator), chips, hover fill.
- **Card** `#FFFDF8` — Estimator panel, deadline rows, form panel, confirmation.
- **Ink** `#26221A` — Headlines, body text, icon color.
- **Slate** `#6B675C` — Secondary text, captions, eyebrows, deadline notes.
- **Green Ledger** `#2E5641` — Primary: headlines' accents, primary buttons, selected chips, ledger rules, focus ring.
- **Green Deep** `#21402F` — Hover, footer background.
- **Green Mist** `#E4EBE2` — Selected chip fills, deadline month markers, well fills.
- **Brass** `#A87C2F` — The one accent: the estimate range figures, brass paperclip details, deadline dots, focus-visible extras.
- **Rule** `#DFD8C4` — 1px hairlines, card borders, input borders, ledger lines.

## Typography
- **Display: H1, H2, H3, service titles, the estimate figures, the wordmark** — Libre Franklin (OFL), weights 400/600. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, chips, form fields, captions; tabular numerals for all figures and dates** — IBM Plex Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 72px) Libre Franklin 600, line-height 1.06; H2 clamp(28px, 3.8vw, 46px) Libre Franklin 600; H3 21px Libre Franklin 600; the estimate figures Libre Franklin 600 40px Brass tabular; lead IBM Plex 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 64ch); eyebrow IBM Plex 600 12px uppercase letter-spacing 0.16em Slate; caption 13px Slate; deadline rows IBM Plex 15px with tabular dates. Buttons: height 50px, IBM Plex 600 14px. Primary: Green Ledger fill, Card text. Secondary: 1px Green Ledger border, Green Ledger text. Inputs: height 50px, 1px Rule border, Card fill, focus Green border. Focus ring everywhere: 2px Green Ledger outline with 3px offset.
- Radius: 6px on cards, buttons, inputs, chips and photos — ledger-crisp. 999px only for chips, dots and pills.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and range changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Calm — money pages shouldn't dance.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 650ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Hero: the desk photo scales 1.03→1.0 over 2200ms; the headline rises; a small brass paperclip detail beside the eyebrow rotates in 6deg once.
- Deadline ledger: rows reveal 50ms-staggered; the ledger's vertical rule draws downward as the section scrolls (scaleY); the next-upcoming row's dot fills Brass and pulses gently once (off under reduced motion).
- Estimator: chips fill Green Mist on select (150ms); every range change counts both figures over 450ms --ease-io (tabular); the assumption line crossfades with the forms count.
- Team cards: hover lifts 2px and the initials monogram gains a Brass ring.
- Booking: day chips fill Green on select; invalid submit shakes 4px with inline labels; sending swaps to Confirmed (300ms --ease-io) — a drawn Brass 'SCHEDULED' stamp rotating in -5deg→-2deg, 'Bring what you have — even the shoebox.' echoed.
- Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no scales, pulses, counts or stamps (instant values); color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Calm real photography, all four made for this template in one consistent style: warm paper light, desks with ledgers, calculators, pencils and coffee — accountant portraits are AI-generated fictional people at their desks (consistent warm window light, the ledger-calm world); they are placeholders a real firm swaps for its own staff photos; other photos stay people-free with no readable text. Every photo uses object-fit cover with the object-position given under Assets, 6px corners, no shadow; photos on Paper get a 1px Rule outline. Captions in IBM Plex 13px Slate. Drawn in code: the paperclip, deadline dots, the SCHEDULED stamp, monograms and the favicon. Icons: lucide-react only, stroke width 1.75.

## Tone
Plain, patient, quietly funny about receipts. Concrete deliverables and ranges, zero percent jargon without translation, one joke about the shoebox.

---
— Prompt by VibeFather · https://vibefather.ai/t/accounting-firm-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
