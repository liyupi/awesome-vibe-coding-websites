---
name: "Conference Talk Slide Deck"
colors:
  stage: "#0C0D10"
  stage_2: "#131519"
  line: "#23262D"
  bone: "#F2EFE9"
  mist: "#8E939D"
  spotlight: "#E8B44A"
  spotlight_deep: "#C99633"
  spotlight_mist: "#2E2712"
  good: "#7FB069"
typography:
  display_title_statements_bullet_leads_bricolage_grotesque_big_and_warm: { family: "Bricolage Grotesque", weights: [400, 600] }
  text_and_ui_agenda_two_column_copy_notes_counters: { family: "Inter", weights: [400, 500, 600] }
  mono_code_key_hints_slide_numbers: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "The deck fills the viewport (100dvh) with 72px side padding desktop, 24px under 640px; slides center their content vertically. Type scale — the stage rule: if it can't be read from the back row, it's too small. Title slide title clamp(56px, 9vw, 120px) Bricolage 600; statement slides clamp(44px, 7vw, 96px); bullet leads 34px; agenda items 26px; two-column copy 20px / 1.65; code 20px / 1.7; meta and key hints 13px mono/Inter. Buttons: height 40px, Inter 600 13px; ghost 1px Line border. Focus everywhere: 2px Spotlight outline, 3px offset."
radius: "8px on code panels and tiles; 999px for key-hint chips and the counter pill."
---

# Conference Talk Slide Deck — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Stage** `#0C0D10` — The deck's ground everywhere.
- **Stage 2** `#131519` — Code panels, overview tiles, notes drawer.
- **Line** `#23262D` — 1px hairlines: progress bar track, code panel border, drawer border.
- **Bone** `#F2EFE9` — Slide text — headlines, bullets, statements.
- **Mist** `#8E939D` — Meta text: counters, key hints, captions, notes.
- **Spotlight** `#E8B44A` — The one warm accent: the progress bar fill, active rings, key-hint chips, code focus underline, links.
- **Spotlight Deep** `#C99633` — Pressed states.
- **Spotlight Mist** `#2E2712` — Selected overview tiles, code keyword tint.
- **Good** `#7FB069` — Code strings and the closing slide's thanks dot.

## Typography
- **Display: title, statements, bullet leads — Bricolage Grotesque, big and warm** — Bricolage Grotesque (OFL), weights 400/600. Self-host the font files.
- **Text and UI: agenda, two-column copy, notes, counters** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: code, key hints, slide numbers** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: The deck fills the viewport (100dvh) with 72px side padding desktop, 24px under 640px; slides center their content vertically. Type scale — the stage rule: if it can't be read from the back row, it's too small. Title slide title clamp(56px, 9vw, 120px) Bricolage 600; statement slides clamp(44px, 7vw, 96px); bullet leads 34px; agenda items 26px; two-column copy 20px / 1.65; code 20px / 1.7; meta and key hints 13px mono/Inter. Buttons: height 40px, Inter 600 13px; ghost 1px Line border. Focus everywhere: 2px Spotlight outline, 3px offset.
- Radius: 8px on code panels and tiles; 999px for key-hint chips and the counter pill.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Projector-calm: one move per action.
- Slide transitions as specified: fade-in-place 320ms; bullets and agenda rows stagger 60ms within their slide on entry; the statement slide's word underline draws once (400ms).
- Code focus: the Spotlight underline moves between lines with a 160ms ease; non-focused lines dim 180ms.
- Overview: the scrim fades 160ms; tiles rise 8px staggered 30ms; the selection ring moves with a 160ms ease.
- Notes drawer: slides up 200ms; Escape reverses.
- Progress bar: the fill width follows the slide index with a 260ms ease; the counter crossfades on change.
- prefers-reduced-motion: reduce — instant slide swaps, no staggers, no ring easing (it jumps), no underlines drawing; everything readable and fully usable. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
Zero images: the deck is type on black with the Spotlight accent; code colors come from the palette (strings Good, keywords Spotlight Mist-tinted, numbers Mist-bright, comments Mist-dim). Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG. No photos, no logos, no sponsor bars.

## Tone
Stage-confident: short lines, big claims earned by the next slide. One joke per three slides.

---
— Prompt by VibeFather · https://vibefather.ai/t/conference-talk-slide-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
