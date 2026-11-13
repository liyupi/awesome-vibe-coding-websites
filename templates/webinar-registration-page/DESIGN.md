---
name: "Webinar Registration Page"
colors:
  night: "#0B1526"
  panel: "#101E33"
  panel_2: "#15263F"
  line: "#24344D"
  bone: "#EDF2F7"
  mist: "#93A3B8"
  cyan: "#37C8E8"
  cyan_deep: "#1E9DBE"
  cyan_mist: "#12384A"
  slate_ink: "#0A111D"
  good: "#4ADE9B"
typography:
  display_h1_h2_countdown_digits_speaker_names_wordmark_sora_geometric_and_broadcast_cool: { family: "Sora", weights: [400, 600, 700] }
  text_and_ui_body_agenda_forms_captions_tabular_numerals_for_countdown_and_times: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(38px, 5.2vw, 64px) Sora 700, line-height 1.06; H2 clamp(26px, 3.4vw, 40px) Sora 700; speaker names Sora 600 19px; countdown digits Sora 700 tabular 44px (30px mobile) with 11px uppercase labels; lead Inter 400 17px / 1.65 Bone at 92%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist. Buttons: height 50px, Inter 600 14px; primary Cyan fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs/selects: height 50px, Panel 2 fill, 1px Line border, focus Cyan border + 2px offset ring."
radius: "10px on cards, panels, buttons, inputs. 999px only for pills and tags."
---

# Webinar Registration Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night** `#0B1526` — Page background throughout.
- **Panel** `#101E33` — Cards, agenda rows, form panel.
- **Panel 2** `#15263F` — Hover fill, raised panel, select fill.
- **Line** `#24344D` — 1px hairlines, card borders, input borders.
- **Bone** `#EDF2F7` — Primary text, headings.
- **Mist** `#93A3B8` — Secondary text, captions, eyebrows, agenda times.
- **Cyan** `#37C8E8` — The one live accent: countdown digits, primary buttons, selected states, tags, focus ring.
- **Cyan Deep** `#1E9DBE` — Hover and pressed primary.
- **Cyan Mist** `#12384A` — Tag chips, register panel tint, selection ring backgrounds.
- **Slate Ink** `#0A111D` — Text on cyan or bone fills.
- **Good** `#4ADE9B` — Replay/register checkmarks, form success.

## Typography
- **Display: H1, H2, countdown digits, speaker names, wordmark — Sora, geometric and broadcast-cool** — Sora (OFL), weights 400/600/700. Self-host the font files.
- **Text and UI: body, agenda, forms, captions; tabular numerals for countdown and times** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(38px, 5.2vw, 64px) Sora 700, line-height 1.06; H2 clamp(26px, 3.4vw, 40px) Sora 700; speaker names Sora 600 19px; countdown digits Sora 700 tabular 44px (30px mobile) with 11px uppercase labels; lead Inter 400 17px / 1.65 Bone at 92%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist. Buttons: height 50px, Inter 600 14px; primary Cyan fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs/selects: height 50px, Panel 2 fill, 1px Line border, focus Cyan border + 2px offset ring.
- Radius: 10px on cards, panels, buttons, inputs. 999px only for pills and tags.

## Motion
- Easing: --ease-io cubic-bezier(0.65, 0, 0.35, 1) for digit flips; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals. Control-room steady.
- Reveal: sections wrapped in <Reveal> start opacity 0, translateY(14px), settle over 700ms --ease-out at 15% viewport (Motion whileInView, once), siblings stagger 70ms.
- Countdown: digits flip per change as described in Setup; the seconds group always moves — this is information, not decoration, and keeps flipping under reduced motion (without rotation).
- Hero: a thin cyan rule under the eyebrow draws once (600ms); the H1 lines rise; the countdown panel fades in last with a single soft cyan pulse on the seconds cell.
- Agenda rows: the time column sets first, then the rest; hover lifts the row 2px and fills the slot tag with Cyan Mist.
- Speakers: cards reveal with 80ms stagger; portraits settle from scale 1.04.
- ZoneSelect change: the converted line crossfades 200ms; no layout shift (fixed two-line height).
- Form submit: the panel crossfades to a Good check line: 'You're on the list — this demo saved your seat in your browser only.'
- Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no digit rotation (digits swap instantly), no portrait scale, no pulse, no underline draw; countdown still ticks. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
Three speaker portraits, all AI-generated fictional people made for this template in one consistent style: three-quarter studio light on deep navy, calm confident expressions, varied age and ethnicity (a Black woman in her 30s, an East Asian man in his 40s, a South Asian woman around 50), business-casual, not resembling any real individual. Faces are fine here — these are speaker cards, not the hero; the hero anchor is the countdown panel and typography on Night. No readable text, no logos, no lanyards with badges. Portraits object-fit cover, 10px corners, 1px Line outline. Icons: lucide-react only, stroke width 1.75. The favicon and the agenda rail are drawn SVG/CSS.

## Tone
Broadcast-calm: precise times, plain promises, zero urgency theater. One dry joke about calendars.

---
— Prompt by VibeFather · https://vibefather.ai/t/webinar-registration-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
