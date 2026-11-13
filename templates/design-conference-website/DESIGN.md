---
name: "Design Conference Website"
colors:
  paper: "#F3EFE6"
  shade: "#E7E1D4"
  ink: "#141414"
  mute: "#6E6A62"
  signal: "#FF4A1C"
  signal_deep: "#D93A12"
typography:
  display_poster_headline_section_titles_speaker_names_prices_big_times: { family: "Anybody Variable", weights: [300, 600, 800, 900] }
  body_paragraphs_bios_faq_answers_buttons: { family: "Inter Variable", weights: [400, 500, 600] }
  mono_meta_rows_labels_track_names_marquee_map_labels_session_times_on_mobile: { family: "JetBrains Mono", weights: [400, 700] }
spacing: "12-column grid, max width 1440px, side padding 40px desktop / 20px mobile, 24px column gap. Sections are separated by a full-bleed 2px Ink rule and have 120px vertical padding desktop / 72px mobile. Inside cards use 24px padding. Every section opens with a SectionHead: a row with the number in Signal (Anybody 900, 20px, e.g. '02') followed by the title in Anybody 800 at font-stretch 85%, uppercase, clamp(40px, 6vw, 88px), line-height 0.9, and a 2px Ink rule underneath with 32px gap."
radius: "0 everywhere: buttons, cards, chips, dialog and inputs are square-cornered. The only round things are circles in the art (hero disc, portraits, map pin)."
---

# Design Conference Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F3EFE6` — Page background everywhere except ink bands
- **Shade** `#E7E1D4` — Portrait backgrounds, break rows in the schedule, map land, card hover fill
- **Ink** `#141414` — All text, 2px rules and borders, marquee and footer background, active tab fill
- **Mute** `#6E6A62` — Secondary text: roles, meta labels, durations, map street labels
- **Signal** `#FF4A1C` — The only accent: primary buttons, hero disc (multiply), section numbers, sold-out stamp, map pin, CTA band background, focus rings
- **Signal Deep** `#D93A12` — Hover state of Signal buttons only

## Typography
- **Display (poster headline, section titles, speaker names, prices, big times)** — Anybody Variable (OFL), weights 300/600/800/900. Self-host the font files.
- **Body (paragraphs, bios, FAQ answers, buttons)** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono (meta rows, labels, track names, marquee, map labels, session times on mobile)** — JetBrains Mono (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 12-column grid, max width 1440px, side padding 40px desktop / 20px mobile, 24px column gap. Sections are separated by a full-bleed 2px Ink rule and have 120px vertical padding desktop / 72px mobile. Inside cards use 24px padding. Every section opens with a SectionHead: a row with the number in Signal (Anybody 900, 20px, e.g. '02') followed by the title in Anybody 800 at font-stretch 85%, uppercase, clamp(40px, 6vw, 88px), line-height 0.9, and a 2px Ink rule underneath with 32px gap.
- Radius: 0 everywhere: buttons, cards, chips, dialog and inputs are square-cornered. The only round things are circles in the art (hero disc, portraits, map pin).

## Motion
- Poster headline: each letter is its own span; on pointermove (desktop) a requestAnimationFrame loop computes the distance d from the pointer to each letter's centre and sets font-variation-settings 'wght' and 'wdth' from t = 1 − smoothstep(0, 360px, d): wght = 300 + 600·t, wdth = 60 + 80·t. Current values ease toward targets with lerp factor 0.14 per frame. When the pointer leaves the hero, targets return to rest (wght 300, wdth 60).
- On devices with (pointer: coarse) or no pointer movement for 4s, a virtual pointer at the vertical centre of the headline sweeps left to right and back across the word, one full cycle every 7s (x = centre + sin(time) · half width).
- Headline fit: on load and on resize, set font-size so the word fits the container with every letter at wght 900 / wdth 140, capped at 300px. The word never wraps or overflows at any pointer position.
- Section reveal: SectionHead and the first block of each section fade in and move up 24px over 600ms ease [0.2, 0.7, 0.2, 1] when 20% visible (Motion whileInView, once: true).
- Marquee: Ink band, content duplicated twice in one track, translateX 0 → −50% over 40s linear infinite; pauses on hover.
- Buttons: on hover the background shifts to Signal Deep (or Ink buttons to Signal) and the label's arrow moves 4px right, 150ms. Focus-visible: 3px Signal outline with 3px offset.
- Reduced motion: headline renders static at wght 800 / wdth 100 with no pointer tracking, marquee is static and wraps, no reveals, map is fully drawn, schedule and accordion change instantly.

## Imagery
No photos and no bitmaps. All art is drawn in code: the hero disc (CSS), abstract speaker portraits (SVG generated from a seeded random function of the speaker's name), the venue street map (inline SVG), the favicon (SVG). Icons come from lucide-react only. The overprint idea: Signal shapes sit on top of or behind Ink with mix-blend-mode: multiply so overlaps read as a darker red-black, like two inks printed over each other.

## Tone
Confident, dry and a little opinionated, like a poster written by designers for designers. Short sentences, concrete numbers, no hype words, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/design-conference-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
