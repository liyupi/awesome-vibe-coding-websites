---
name: "Hand-Drawn Scroll Explainer"
colors:
  paper: "#F6F0E2"
  card: "#FFFDF6"
  paper_shade: "#ECE3CF"
  rule_blue: "rgba(116,160,200,0.20)"
  margin_red: "rgba(214,104,104,0.38)"
  ink: "#1E1B18"
  ink_soft: "#5A534A"
  tape: "rgba(255,232,160,0.72)"
  sun_yellow: "#FFD84D"
  leaf_green: "#8BD96B"
  water_blue: "#74C7F2"
  air_lilac: "#C3A8F5"
  sugar_orange: "#FFB35C"
  breath_mint: "#7FE0C8"
typography:
  display_h1_scene_titles_recap_title_button_labels: { family: "Caveat Brush", weights: [400] }
  handwriting_speech_bubbles_svg_labels_kickers_progress_numbers_scroll_cue: { family: "Patrick Hand", weights: [400] }
  text_intro_lede_scene_notes_cheat_sheet_footer: { family: "Atkinson Hyperlegible", weights: [400, 700] }
spacing: "8px base unit. Content container max-width 1240px, side padding 48px desktop / 20px mobile, centred. Desktop scenes use a 12-column grid with 32px gaps. Type scale: H1 clamp(56px, 8vw, 120px) line-height 0.95. Scene title clamp(40px, 5vw, 72px) line-height 1. Kicker 20px. Bubble 22px desktop / 18px mobile, line-height 1.25. Notes 18px / 16px, line-height 1.5, max-width 34ch. SVG labels 24 user units in the 600×600 viewBox."
radius: "No geometric corners. Hand-drawn shapes use the irregular CSS radius 255px 15px 225px 15px / 15px 225px 15px 255px (buttons, progress pill). Cards are square-cornered paper rotated slightly. Bubbles are SVG paths, not CSS boxes."
---

# Hand-Drawn Scroll Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F6F0E2` — Page background
- **Card** `#FFFDF6` — Index-card drawing panels, speech bubble fill, progress pill fill on mobile
- **Paper shade** `#ECE3CF` — Card drop shadow tint, footer band, cheat-sheet number circles
- **Rule blue** `rgba(116,160,200,0.20)` — Horizontal ruled lines every 32px across the page
- **Margin red** `rgba(214,104,104,0.38)` — Single vertical margin line at left:72px desktop / 18px mobile
- **Ink** `#1E1B18` — All strokes, headings, body text, button borders
- **Ink soft** `#5A534A` — Kickers, notes, label text, faint progress trail (at 30% opacity)
- **Tape** `rgba(255,232,160,0.72)` — Translucent tape strips on card corners
- **Sun yellow** `#FFD84D` — Scene 1 accent, primary CTA fill, intro highlighter
- **Leaf green** `#8BD96B` — Scene 2 accent, intro “(drawn by hand)” highlighter
- **Water blue** `#74C7F2` — Scene 3 accent
- **Air lilac** `#C3A8F5` — Scene 4 accent
- **Sugar orange** `#FFB35C` — Scene 5 accent
- **Breath mint** `#7FE0C8` — Scene 6 accent

## Typography
- **Display: H1, scene titles, recap title, button labels** — Caveat Brush (OFL), weights 400. Self-host the font files.
- **Handwriting: speech bubbles, SVG labels, kickers, progress numbers, scroll cue** — Patrick Hand (OFL), weights 400. Self-host the font files.
- **Text: intro lede, scene notes, cheat sheet, footer** — Atkinson Hyperlegible (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Content container max-width 1240px, side padding 48px desktop / 20px mobile, centred. Desktop scenes use a 12-column grid with 32px gaps. Type scale: H1 clamp(56px, 8vw, 120px) line-height 0.95. Scene title clamp(40px, 5vw, 72px) line-height 1. Kicker 20px. Bubble 22px desktop / 18px mobile, line-height 1.25. Notes 18px / 16px, line-height 1.5, max-width 34ch. SVG labels 24 user units in the 600×600 viewBox.
- Radius: No geometric corners. Hand-drawn shapes use the irregular CSS radius 255px 15px 225px 15px / 15px 225px 15px 255px (buttons, progress pill). Cards are square-cornered paper rotated slightly. Bubbles are SVG paths, not CSS boxes.

## Motion
- Stroke drawing: every ink path uses stroke-dashoffset from its full length to 0, scrubbed by ScrollTrigger (scrub: 0.6) inside pinned scenes. Ease 'none' while scrubbed.
- Pinned scenes: each scene section is pinned for end '+=150%' on desktop and '+=110%' on mobile, with one gsap.timeline of total duration 1 mapped to the pin.
- Marker wobble: all drawing SVGs use filter url(#wobble-0), an feTurbulence (type turbulence, baseFrequency 0.03, numOctaves 2, seed 1) feeding an feDisplacementMap (scale 3). Two more filters, #wobble-1 (seed 2) and #wobble-2 (seed 3), exist so the active scene's drawing group can cycle 0→1→2 every 140 ms (setInterval started onToggle active, cleared when inactive). This is the 'line boil'.
- Highlighter: a zigzag stroke (width 22, accent colour, opacity 0.85, mix-blend-mode multiply) clipped to the glyph's fill shape and drawn with the same dashoffset technique, beneath the ink strokes.
- Speech bubbles: the SVG bubble outline draws first. Then the text, split into one span per character, reveals with opacity 0→1 and y 4px→0 via a staggered scrubbed tween (typewriter feel).
- Narrator: arm paths morph between poses by tweening attr:{ d } (all arm paths share the identical 'M x y Q cx cy x y' structure) over 0.08 of the scene timeline. The idle body bobs y ±2px (yoyo, 1.6 s, sine.inOut, infinite). Eyes blink (scaleY 1→0.1→1, 120 ms) every 3.8 s on a gsap delayedCall loop. The wave pose wiggles the hand arm rotate ±12° three times when the intro loads.
- Title highlighter swipe: a rotated (-1.5deg) accent-coloured block behind each scene title scales X from 0 to 1 (transform-origin left) at the start of the scene timeline.
- Buttons: hover rotates -1deg and translates (-2px, -2px) while the 4px 4px 0 ink shadow grows to 6px 6px. Active presses to translate(2px, 2px) with a 2px shadow. 150 ms ease-out. On hover an SVG scribble ellipse around the button draws in 350 ms.
- Recap plays once (not scrubbed) when its top reaches 70% of the viewport: a 2.4 s timeline that draws the flow path, then each glyph in 0.25 s sequence, then arrows, then the equation characters. The narrator cheers with a y -12px jump twice.
- prefers-reduced-motion: reduce → no pinning, no scrub, no line boil, no bob, no blink, no typewriter. Every stroke renders fully drawn (dashoffset 0), every bubble shows its full text, and sections flow normally with 120px vertical gaps. The progress trail still updates its active number.

## Imagery
Only code-drawn inline SVG in marker style: round caps and joins, ink stroke width 3.5 in a 600×600 viewBox (2.5 for small details), fill none, slightly irregular hand-placed bezier curves (never perfect circles from <circle>, use 4-segment cubic paths with ±3 unit jitter baked into the coordinates). One highlighter accent per scene. The paper texture is pure CSS: repeating-linear-gradient rules every 32px, a margin line, and a fixed full-viewport grain overlay made from an inline SVG data-URI with feTurbulence fractalNoise (baseFrequency 0.9, numOctaves 3), opacity 0.35, mix-blend-mode multiply, pointer-events none. The narrator is an original, minimal stick figure distinguished only by a three-stroke cowlick.

## Tone
Warm, playful and plain-spoken, like a friendly older sibling doodling in a notebook. Short sentences, one gentle joke per scene, no jargon unless a label explains it. All copy below is written for the default values. If any variable differs from its default, rewrite every headline, note, bubble, label and recap line to fit the new values, keeping the same lengths and structure. Keep all copy in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/hand-drawn-scroll-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
