---
name: "Meditation App Landing Page"
colors:
  dawn_mist: "#FDF7F4"
  cloud: "#FFFFFF"
  sky_rose: "#F5DAD3"
  dawn_gold: "#F3CDA9"
  dusk_lavender: "#CDC8E8"
  deep_plum: "#4A4159"
  mauve: "#8E8199"
  still_teal: "#7AA69C"
typography:
  display_headlines_brand_prices_quiet_rounded: { family: "Quicksand", weights: [500, 600] }
  text_body_cards_chips_cues_relaxed_1_7_line_height: { family: "Figtree", weights: [400, 500, 600] }
spacing: "Airy beyond habit: sections py-32 (128px) desktop / py-24 (96px) mobile; content max-w-5xl — deliberately narrower than usual; the breathing circle gets a full clear viewport with nothing within 96px of it; body copy capped at 52ch."
radius: "Soft everywhere: 20px on cards, panels and the phone mockup, 14px on inputs and chips, 999px pills on buttons; the breathing circle is pure geometry with a blurred edge."
---

# Meditation App Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Dawn mist** `#FDF7F4` — Page ground everywhere — warm porcelain, never pure white.
- **Cloud** `#FFFFFF` — Cards, panels, phone mockup body, header bar.
- **Sky rose** `#F5DAD3` — Hero gradient stop, soft tints, the breathing circle's fill.
- **Dawn gold** `#F3CDA9` — Gradient stop, duration chips, the sun ellipse.
- **Dusk lavender** `#CDC8E8` — Gradient stop and the sleep-stories band ground.
- **Deep plum** `#4A4159` — Primary text and headings — quiet dark plum, never black.
- **Mauve** `#8E8199` — Secondary text: intros, captions, narrator lines.
- **Still teal** `#7AA69C` — The single accent: Begin button, progress arc, active chips, links.

## Typography
- **Display — headlines, brand, prices (quiet rounded)** — Quicksand (OFL), weights 500/600. Self-host the font files.
- **Text — body, cards, chips, cues (relaxed 1.7 line-height)** — Figtree (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Airy beyond habit: sections py-32 (128px) desktop / py-24 (96px) mobile; content max-w-5xl — deliberately narrower than usual; the breathing circle gets a full clear viewport with nothing within 96px of it; body copy capped at 52ch.
- Radius: Soft everywhere: 20px on cards, panels and the phone mockup, 14px on inputs and chips, 999px pills on buttons; the breathing circle is pure geometry with a blurred edge.

## Motion
- Drifting sky: the three gradient layers crossfade over a 180s loop (60s phase offsets), with the sun ellipse drifting 40px across it — the page's time moves in minutes, not seconds.
- Breathing circle: 4-7-8 — scale 1→1.35 over the 4s inhale (easeInOut), a soft ripple ring during the 7s hold, back to 1 over the 8s exhale; cue words crossfade 400ms at each boundary; the progress arc fills per phase; a cycle counter rests bottom-right.
- Reveals: sections and cards fade up (y 20→0, 700ms ease-out) with 90ms stagger via Motion whileInView, once — nothing snaps.
- Waveform: bars oscillate scaleY ±20% on a 6s staggered loop; the play chip toggles full/half amplitude with a 600ms ease.
- Hover: cards and buttons lift 2px (300ms) with a shadow deepening one step; pricing toggle chips crossfade prices (300ms).
- prefers-reduced-motion: the sky holds a static dawn gradient, the breathing circle stays at rest with the three phases shown as static steps and a working counter, the waveform freezes at half amplitude, all reveals become 200ms opacity fades.

## Imagery
Zero photography: serene CSS gradient skies drifting through dawn, midday and dusk, one soft sun ellipse, and the breathing circle — soft blurred geometry over type. No people, no photos, no starfields, no illustration sets; the calm comes from hue, air and pace.

## Tone
Soft, unhurried, sincere — short sentences that breathe; experiential words like 'settle' and 'rest'; no clinical language, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/meditation-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
