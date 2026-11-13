---
name: "Biotech Startup Website"
colors:
  paper: "#fcfefd"
  ink: "#12262e"
  slate: "#5d6f7c"
  mist: "#e9f2f1"
  hairline: "#d8e5e3"
  teal: "#0e7c86"
  teal_deep: "#0a5a62"
  cell_soft: "#90a4ad"
typography:
  display_wordmark_headlines_program_names_stat_numbers: { family: "Sora", weights: [600, 700] }
  text_body_copy_buttons_chips_captions: { family: "Inter", weights: [400, 500, 600] }
  mono_eyebrows_program_codes_technical_depth_lines_table_headers_small_print: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px vertical rhythm throughout. Sections py-28 (desktop) / py-16 (mobile); container max-w-[1160px] with px-6 (px-5 mobile). Hero min-h-[92vh] with items centered. Eyebrow to headline 16px, headline to body 20px, body max-width 560px. Table cells py-5 px-4; program column 260px, stage columns equal. Mono eyebrows 12px, uppercase, letter-spacing 0.16em."
radius: "Pills 999px for status chips and the header CTA; 12px on the molecule card and mechanism panel; 6px on buttons and inputs; 0 on the pipeline table, hairline rules and stat blocks. No other rounded shapes except the code-drawn cells."
---

# Biotech Startup Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#fcfefd` — Page ground everywhere; slightly cool white
- **Ink** `#12262e` — Primary text, Phase II filled chip, molecule carbon atoms
- **Slate** `#5d6f7c` — Secondary text, Discovery outlined chips, inactive table dots
- **Mist** `#e9f2f1` — Panel tint behind approach steps, careers strip and team tiles
- **Hairline** `#d8e5e3` — 1px rules, table grid, dot-grid dots, card borders
- **Teal** `#0e7c86` — The single accent: links, buttons, Phase I filled chip, Preclinical outlined chip, nitrogen atoms, focus rings
- **Teal deep** `#0a5a62` — Button hover state, oxygen atoms in the molecule, strong underlines
- **Cell soft** `#90a4ad` — Molecule hydrogen atoms, inactive stage dots, muted mono labels

## Typography
- **Display (wordmark, headlines, program names, stat numbers)** — Sora (OFL), weights 600/700. Self-host the font files.
- **Text (body copy, buttons, chips, captions)** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono (eyebrows, program codes, technical depth lines, table headers, small print)** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px vertical rhythm throughout. Sections py-28 (desktop) / py-16 (mobile); container max-w-[1160px] with px-6 (px-5 mobile). Hero min-h-[92vh] with items centered. Eyebrow to headline 16px, headline to body 20px, body max-width 560px. Table cells py-5 px-4; program column 260px, stage columns equal. Mono eyebrows 12px, uppercase, letter-spacing 0.16em.
- Radius: Pills 999px for status chips and the header CTA; 12px on the molecule card and mechanism panel; 6px on buttons and inputs; 0 on the pipeline table, hairline rules and stat blocks. No other rounded shapes except the code-drawn cells.

## Motion
- Molecule canvas: rotate the fixed 18-atom model around Y at 0.16 rad/s under a constant X tilt of -18 degrees; orthographic projection, center (280,280), scale 80; depth factor 1 - 0.18*zN on atom radius, bond alpha 0.92 - 0.38*mean(zN); draw far to near each frame; loop paused off-screen or when the tab is hidden.
- Cell blobs drift on 26 s and 34 s keyframe loops (translate up to 20px, rotate up to 4 degrees, alternate, ease-in-out); they stop under prefers-reduced-motion.
- Section entrances: eyebrow, headline and body rise 20px and fade over 0.6 s with 90 ms stagger, once, cubic-bezier(.2,.8,.2,1).
- Pipeline: each stage column's header underline draws scaleX 0 to 1 over 0.5 s when the column enters; its chips pop from scale 0.85 and fade in, 80 ms stagger; past columns stay lit when scrolling back up.
- Metrics count up once from 0 over 1.1 s ease-out; under reduced motion the final numbers render immediately.
- Hover micro-interactions: buttons darken to Teal deep and shift the Lucide arrow 3px; publication titles draw a 2px Teal underline scaleX 0 to 1; team monogram rings brighten from 40% to 100% Teal.
- prefers-reduced-motion: molecule renders one static frame at t = 0 (tilt only), cells rest, entrances become plain opacity fades, counters render final values, chips render in their final state.

## Imagery
Everything is drawn in code and nothing is a bitmap: the hero molecule (canvas, exact atom and bond data below), the two drifting cell blobs (SVG), the mechanism circuit diagram (SVG), the pipeline chips and dots, the dot-grid background (CSS radial-gradient), and the favicon (hand-written SVG). No photographs, no people, no logos, no downloaded files beyond fonts and the icon package. Palette strictly the eight tokens above.

## Tone
Precise, calm, confident. Short declarative sentences, concrete sample numbers, no hype, no exclamation marks, no marketing superlatives. Headlines read like figure captions from a well-set paper; mono labels carry the data.

---
— Prompt by VibeFather · https://vibefather.ai/t/biotech-startup-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
