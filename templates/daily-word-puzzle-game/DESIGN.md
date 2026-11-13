---
name: "Daily Word Puzzle Game"
colors:
  cream: "#FBF3E4"
  panel: "#FFFBF0"
  card: "#FFFFFF"
  line: "#E5D9C0"
  ink: "#241F16"
  soft_ink: "#6E6552"
  marigold: "#E8A33C"
  marigold_deep: "#C4842A"
  marigold_mist: "#F8E8CB"
  hit: "#E8A33C"
  near: "#F3D9A4"
  miss: "#D8CFBC"
  slate_ink: "#241F16"
  good: "#5E8C4A"
typography:
  display_wordmark_result_headings_big_answer_reveal_bricolage_grotesque: { family: "Bricolage Grotesque", weights: [400, 600] }
  text_and_ui_tiles_keys_stats_help_inter_tabular_numerals_for_stats: { family: "Inter", weights: [400, 500, 700] }
spacing: "8px base unit. Shell max-width 560px centered; board 350px wide (tiles 62px, gap 8px; scales to 92vw with tiles at min(62px, 16vw)); keyboard full shell width, keys 40px tall with 6px gaps. Top bar 56px. Type scale: wordmark 22px Bricolage 600; tile letters Inter 700 26px uppercase; key letters Inter 600 14px uppercase; result heading 24px Bricolage 600; stats numerals Inter 700 22px tabular; body and help 14.5px / 1.6; toasts 13px. Buttons: height 44px, Inter 600 13.5px; primary Marigold fill with Slate Ink text, ghost 1px Line border. Focus everywhere: 2px Marigold outline, 3px offset."
radius: "12px on tiles and primary buttons; 10px on keys; 8px on panels and modals; 999px for toasts and pills."
---

# Daily Word Puzzle Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FBF3E4` — Page background — warm arcade daylight.
- **Panel** `#FFFBF0` — Result panel, help modal.
- **Card** `#FFFFFF` — Tiles before commit, keys, toasts.
- **Line** `#E5D9C0` — 2px tile and key borders (1px on panels).
- **Ink** `#241F16` — Tile letters pre-commit, headings, body.
- **Soft Ink** `#6E6552` — Hints, stats labels, the sample-rotation line.
- **Marigold** `#E8A33C` — The one accent: hit tiles, primary buttons, winning distribution bar, focus ring, wordmark dot.
- **Marigold Deep** `#C4842A` — Hover/pressed primary.
- **Marigold Mist** `#F8E8CB` — Toast fills, selected states.
- **Hit** `#E8A33C` — Correct-letter tile fill (same as the accent — the game owns it).
- **Near** `#F3D9A4` — Present-elsewhere tile fill: a paler marigold with a Cocoa 2px border so it never reads as the hit color.
- **Miss** `#D8CFBC` — Absent-letter tile fill and disabled keys.
- **Slate Ink** `#241F16` — Text on marigold fills (kept dark for warmth).
- **Good** `#5E8C4A` — Streak ticks, copied confirmation.

## Typography
- **Display: wordmark, result headings, big answer reveal — Bricolage Grotesque** — Bricolage Grotesque (OFL), weights 400/600. Self-host the font files.
- **Text and UI: tiles, keys, stats, help — Inter; tabular numerals for stats** — Inter (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Shell max-width 560px centered; board 350px wide (tiles 62px, gap 8px; scales to 92vw with tiles at min(62px, 16vw)); keyboard full shell width, keys 40px tall with 6px gaps. Top bar 56px. Type scale: wordmark 22px Bricolage 600; tile letters Inter 700 26px uppercase; key letters Inter 600 14px uppercase; result heading 24px Bricolage 600; stats numerals Inter 700 22px tabular; body and help 14.5px / 1.6; toasts 13px. Buttons: height 44px, Inter 600 13.5px; primary Marigold fill with Slate Ink text, ghost 1px Line border. Focus everywhere: 2px Marigold outline, 3px offset.
- Radius: 12px on tiles and primary buttons; 10px on keys; 8px on panels and modals; 999px for toasts and pills.

## Motion
- Easing: --ease-io cubic-bezier(0.65, 0, 0.35, 1) for flips; a spring (stiffness 420, damping 26) for the result panel. Arcade-crisp, never sluggish.
- Tile typing: each letter pops in (scale 0.9→1, 90ms) as it's typed.
- Tile flip: the row's five tiles flip in sequence (110ms stagger, 520ms each: rotateX 0→90→0) revealing state colors at midpoint; keys recolor as each lands.
- Invalid shake: row ±6px, three cycles, 300ms total, then rest.
- Win: the completed row's tiles bounce once in sequence (translateY -8px, 80ms each, staggered) — small joy, no confetti.
- ResultPanel: slides up in-sheet with the spring; distribution bars grow from 0 over 400ms staggered 40ms; the winning bar carries a Marigold fill.
- Help modal: scrim 160ms, panel scale 0.96→1 with the spring.
- Toast: rises 6px, 160ms, auto-dismiss 2.2s.
- prefers-reduced-motion: reduce — states swap instantly (no flips, no shake translation, no bounce), bars render at full width, panel fades only; the game stays fully playable. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No images at all: tiles, keys, chips, the distribution chart and the favicon are drawn in code. The share format uses unicode box characters in plain text — never colored-square emoji. Icons: lucide-react only, stroke width 1.75.

## Tone
Warm-arcade: short, kind, lightly teasing on a loss. One dry line in the help modal.

---
— Prompt by VibeFather · https://vibefather.ai/t/daily-word-puzzle-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
