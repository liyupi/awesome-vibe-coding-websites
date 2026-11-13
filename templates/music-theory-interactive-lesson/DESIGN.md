---
name: "Music Theory Interactive Lesson"
colors:
  stage: "#1B0B4B"
  pit: "#120634"
  curtain: "#2A0F73"
  panel: "#351A8C"
  coral: "#FF5A47"
  acid: "#E6FF2E"
  text: "#F6F1FF"
  muted: "#C9BEF2"
  ivory_key: "#F1EBFF"
  pc_c: "#FF5A47"
  pc_g: "#FF8A2B"
  pc_d: "#FFC21F"
  pc_a: "#E6FF2E"
  pc_e: "#8CF23C"
  pc_b: "#2EE87F"
  pc_gb: "#1FE5C4"
  pc_db: "#29C9FF"
  pc_ab: "#6FA3FF"
  pc_eb: "#A98BFF"
  pc_bb: "#E872FF"
  pc_f: "#FF5CB0"
typography:
  display_headlines_chapter_numerals_chord_and_key_names_weight_800_line_height_1_04_letter_spacing_0_02em: { family: "Unbounded Variable", weights: [500, 800] }
  text_body_at_18px_desktop_and_16px_mobile_line_height_1_55_buttons_at_weight_700: { family: "Figtree Variable", weights: [400, 500, 700] }
  mono_note_names_on_keys_half_step_counts_score_key_caps_small_labels_at_12_to_14px_uppercase_with_0_08em_tracking_where_labels_are_words: { family: "JetBrains Mono Variable", weights: [500, 700] }
spacing: "Base unit 8px. Page container max width 1320px with 40px side gutters on desktop and 16px on mobile. Chapters use 120px vertical padding on desktop and 72px on mobile. Widget panels use 32px padding on desktop and 16px on mobile. Gaps between panel groups are 24px."
radius: "Panels 28px, cards 20px, buttons and chips fully round (999px), piano keys square at the top and 10px at the bottom on naturals, 6px at the bottom on sharps."
---

# Music Theory Interactive Lesson — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **stage** `#1B0B4B` — Deep ultraviolet page ground; hero scrim tint and odd chapters
- **pit** `#120634` — Darkest ground for the top bar, dock and footer, and the ink on all bright fills
- **curtain** `#2A0F73` — Saturated violet ground for even chapters
- **panel** `#351A8C` — Widget panels and cards
- **coral** `#FF5A47` — Electric coral: secondary buttons, wrong answers, final band, chapter 1 accent. Must appear large in the hero
- **acid** `#E6FF2E` — Acid yellow: primary buttons, win bars, correct answers, circle pointer, focus rings. Must appear large in the hero
- **text** `#F6F1FF` — Body and heading text on dark grounds
- **muted** `#C9BEF2` — Secondary text on dark grounds
- **ivory-key** `#F1EBFF` — Pale lilac natural piano keys
- **pc-C** `#FF5A47` — Pitch class C
- **pc-G** `#FF8A2B` — Pitch class G
- **pc-D** `#FFC21F` — Pitch class D
- **pc-A** `#E6FF2E` — Pitch class A
- **pc-E** `#8CF23C` — Pitch class E
- **pc-B** `#2EE87F` — Pitch class B
- **pc-Gb** `#1FE5C4` — Pitch class F#/Gb
- **pc-Db** `#29C9FF` — Pitch class C#/Db
- **pc-Ab** `#6FA3FF` — Pitch class G#/Ab
- **pc-Eb** `#A98BFF` — Pitch class D#/Eb
- **pc-Bb** `#E872FF` — Pitch class A#/Bb
- **pc-F** `#FF5CB0` — Pitch class F

## Typography
- **Display: headlines, chapter numerals, chord and key names. Weight 800, line-height 1.04, letter-spacing -0.02em.** — Unbounded Variable (OFL), weights 500/800. Self-host the font files.
- **Text: body at 18px desktop and 16px mobile, line-height 1.55; buttons at weight 700.** — Figtree Variable (OFL), weights 400/500/700. Self-host the font files.
- **Mono: note names on keys, half-step counts, score, key caps, small labels at 12 to 14px, uppercase with 0.08em tracking where labels are words.** — JetBrains Mono Variable (OFL), weights 500/700. Self-host the font files.

## Spacing & shape
- Spacing: Base unit 8px. Page container max width 1320px with 40px side gutters on desktop and 16px on mobile. Chapters use 120px vertical padding on desktop and 72px on mobile. Widget panels use 32px padding on desktop and 16px on mobile. Gaps between panel groups are 24px.
- Radius: Panels 28px, cards 20px, buttons and chips fully round (999px), piano keys square at the top and 10px at the bottom on naturals, 6px at the bottom on sharps.

## Motion
- Stage beam: on every press of a hero piano key, a vertical beam in that note's color rises from the key to the top of the hero, 2 key-widths wide with a linear gradient fading to transparent, scaleY 0 to 1 in 120 ms, then fades out over 600 ms. Several beams may overlap. This is the signature effect.
- Key press: a pressed key moves down 3px in 60 ms, its fill becomes the pitch color and it gains a soft outer glow in that color. On release it returns over 140 ms.
- Circle rotation: Motion spring with stiffness 180 and damping 22 to the nearest 30-degree snap, taking the shortest path. While dragging, the rotation follows the pointer directly and a tick() plays each time a new wedge crosses the pointer. Wedge labels counter-rotate to stay upright.
- Win bar: the dashed outline fills from left to right with acid yellow in 350 ms, the check icon pops in with a spring (scale 0.4 to 1), and the top bar's win count bumps to scale 1.2 and back.
- Chord change: chips animate in with a 40 ms stagger, moving up 8px and fading in; the chord shape polygon morphs to its new vertices with a spring (stiffness 140, damping 18).
- Scroll reveal: chapter text and panels move up 24px and fade in once over 500 ms as they enter the viewport.
- Idle hero: on load, a 2.4 s wave of light passes left to right across the piano's color strips, once only, with no sound.
- With prefers-reduced-motion: no beams, wave or scroll reveals. The circle jumps to its position with no spring, and key presses only change color. Sound and all widgets still work.

## Imagery
A stage at night. Four matching photographs in one shoot style (ultraviolet haze, coral key light, thin acid yellow accent) set the mood for the hero, the instructor, the evening class and the final band. Everything interactive is drawn in SVG and HTML: the piano, circle, chord shape and color strips. Instruments carry no maker names.

## Tone
Playful, bold and plainspoken, like a good teacher on a small stage at night. Short sentences. Describes how things sound in everyday words. Never academic, never cute for its own sake.

---
— Prompt by VibeFather · https://vibefather.ai/t/music-theory-interactive-lesson · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
