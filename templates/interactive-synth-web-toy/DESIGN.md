---
name: "Interactive Synth Web Toy"
colors:
  chassis: "#0D0618"
  panel: "#1A0D2E"
  raised: "#2A1648"
  key_violet: "#3B2170"
  line: "#5B3A91"
  hot_magenta: "#FF2BD6"
  electric_cyan: "#19F0FF"
  volt: "#C8FF2E"
  lilac_text: "#F3E8FF"
  silk: "#B9A6DC"
typography:
  display_wordmark_notes_headings_voice_and_button_labels: { family: "Unbounded", weights: [600, 800] }
  text_and_readouts_panel_labels_tagline_key_hints_notes_body_numbers: { family: "JetBrains Mono", weights: [400, 500, 700] }
spacing: "4px base. Page padding 14px at desktop and 16px gutter on mobile. 10px gap between panels. Panels have 10-12px inner padding. At 1440x900 the instrument fills 100dvh in a CSS grid with these rows: top bar 48px, scope minmax(200px, 1fr), transport 76px, sequencer 273px, keyboard 190px, so nothing scrolls until the notes section. Breakpoints: 1100px and up is this desktop layout; 720-1099px wraps the transport to two rows and lets the page scroll; under 720px is the stacked mobile layout."
radius: "Panels 14px. Step pads 5px. Buttons and voice segments 10px. Starter chips full pill. Keys are square on top with 8px bottom corners. Play button and knobs are circles."
---

# Interactive Synth Web Toy — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Chassis** `#0D0618` — Page background and the dark text on bright fills
- **Panel** `#1A0D2E` — Module panels: scope frame, transport, grid, keyboard
- **Raised** `#2A1648` — Off controls, knob tracks, scope graticule lines
- **Key violet** `#3B2170` — Top of the natural key gradient, knob cap highlight
- **Line** `#5B3A91` — 1px panel, pad and key borders
- **Hot magenta** `#FF2BD6` — Hero color: wordmark start, Play button, voice 1 accent, trace start
- **Electric cyan** `#19F0FF` — Hero color: wordmark end, Copy link button, voice 0 accent, playhead
- **Volt** `#C8FF2E` — Voice 2 accent, third notes card heading
- **Lilac text** `#F3E8FF` — Body text, readouts, key hints
- **Silk** `#B9A6DC` — Silk-screened uppercase panel labels (passes AA on Panel)

## Typography
- **Display: wordmark, notes headings, voice and button labels** — Unbounded (OFL), weights 600/800. Self-host the font files.
- **Text and readouts: panel labels, tagline, key hints, notes body, numbers** — JetBrains Mono (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: 4px base. Page padding 14px at desktop and 16px gutter on mobile. 10px gap between panels. Panels have 10-12px inner padding. At 1440x900 the instrument fills 100dvh in a CSS grid with these rows: top bar 48px, scope minmax(200px, 1fr), transport 76px, sequencer 273px, keyboard 190px, so nothing scrolls until the notes section. Breakpoints: 1100px and up is this desktop layout; 720-1099px wraps the transport to two rows and lets the page scroll; under 720px is the stacked mobile layout.
- Radius: Panels 14px. Step pads 5px. Buttons and voice segments 10px. Starter chips full pill. Keys are square on top with 8px bottom corners. Play button and knobs are circles.

## Motion
- Active accent: set --accent and --accent-2 on the root by voice. Voice 0: cyan, magenta. Voice 1: magenta, cyan. Voice 2: volt, magenta. Colors transition over 180ms when the voice changes.
- Keys press in 60ms: translateY(2px), the bottom lip collapses, fill turns --accent, box-shadow 0 0 24px of --accent at 60%. Release takes 120ms.
- When the playhead fires a lit pad it scales to 1.06 and brightens its glow for 120ms, and the matching on-screen key lights for the note length.
- Beat LED in the transport flashes for 80ms on steps 1, 5, 9 and 13 while playing.
- Under prefers-reduced-motion: no scale, translate or glow pulses and no color transitions. The scope draws one static trace. The playhead still steps, because that is state, and colors still change instantly.

## Imagery
No photos, no illustrations and no sample files. Every visual is drawn in code: the Canvas 2D scope, CSS keys, SVG knobs, inline SVG waveform glyphs. The page background is #0D0618 with two fixed radial glows: rgba(255,43,214,.16) at the top left and rgba(25,240,255,.12) at the bottom right. Panels carry 1px Line borders, an inset top highlight of rgba(243,232,255,.06) and four 6px CSS screw dots in their corners on desktop. The panel is a generic invented layout and does not resemble any real instrument.

## Tone
Like a small lit-up machine on a dark desk: playful, tactile and direct. Labels are short and silk-screened in uppercase mono. Sentences are plain and never explain what a synthesizer is.

---
— Prompt by VibeFather · https://vibefather.ai/t/interactive-synth-web-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
