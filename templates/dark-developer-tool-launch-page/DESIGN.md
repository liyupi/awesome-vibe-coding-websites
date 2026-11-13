---
name: "Dark Developer Tool Launch Page"
colors:
  ink: "#0A0B0D"
  panel: "#111317"
  panel_2: "#171A1F"
  line: "#22262D"
  line_strong: "#323842"
  text: "#E7E9EC"
  muted: "#8C939D"
  faint: "#5B626C"
  signal: "#C6F432"
  signal_ink: "#0A0B0D"
  add: "#3DDC97"
  add_bg: "rgba(61,220,151,0.09)"
  del: "#FF6B6B"
  del_bg: "rgba(255,107,107,0.09)"
  warn: "#F5B841"
  info: "#6CB4FF"
typography:
  display_hero_headline_56px_desktop_38px_mobile_weight_600_tracking_0_03em_line_height_1_02_section_headings_36px_28px_weight_600_tracking_0_02em_stat_numbers: { family: "Space Grotesk", weights: [500, 600, 700] }
  text_body_16px_1_6_weight_400_card_titles_16px_weight_500_buttons_14px_weight_500: { family: "Inter", weights: [400, 500, 600] }
  mono_terminal_13_5px_1_7_diff_13px_1_65_install_commands_15px_eyebrows_and_labels_12px_uppercase_tracking_0_08em_all_numbers_kbd_keys_chips_version_tags: { family: "JetBrains Mono", weights: [400, 500, 700] }
spacing: "Container max-width 1200px with 24px side padding (16px under 640px). Sections are separated by 1px Line borders full-bleed, with 112px vertical padding on desktop and 72px on mobile. Grids use a 1px gap over a Line-colored background so cells share hairline borders. Inner card padding 24px. Base unit 4px; dense rhythm, no huge empty bands."
radius: "6px on buttons, chips, kbd keys, inputs and tags; 10px on the terminal window, diff viewer, install box, overlay panel and feature grid outer frame; 999px only on severity dots and the hint chip."
---

# Dark Developer Tool Launch Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0A0B0D` — Page background, terminal body
- **Panel** `#111317` — Cards, diff viewer body, install box, overlay panel
- **Panel 2** `#171A1F` — Terminal and diff title bars, hunk header rows, hovered rows, kbd keys
- **Line** `#22262D` — All 1px hairline borders and dividers, inactive benchmark bars track
- **Line Strong** `#323842` — Hovered borders, inactive benchmark bars, kbd bottom border
- **Text** `#E7E9EC` — Headlines and body text
- **Muted** `#8C939D` — Secondary copy, line numbers, terminal prompt path, labels
- **Faint** `#5B626C` — Footnotes, disabled states, diff context gutter
- **Signal** `#C6F432` — The one accent: primary buttons, our benchmark bars, active tab underline, focus rings, caret, git branch in the prompt, 'Latest' tag, wordmark glyph
- **Signal Ink** `#0A0B0D` — Text on Signal buttons and tags
- **Add** `#3DDC97` — Added-line +/- gutter sign and text tint, success checkmarks, 'perf' and 'fix' changelog tags
- **Add BG** `rgba(61,220,151,0.09)` — Added-line row background
- **Del** `#FF6B6B` — Removed-line sign, 'high' severity dot and tag, 'breaking' tag
- **Del BG** `rgba(255,107,107,0.09)` — Removed-line row background
- **Warn** `#F5B841` — 'medium' severity dot and tag
- **Info** `#6CB4FF` — 'low' severity dot and tag, 'feat' changelog tag, code keywords

## Typography
- **Display: hero headline (56px desktop / 38px mobile, weight 600, tracking -0.03em, line-height 1.02), section headings (36px / 28px, weight 600, tracking -0.02em), stat numbers** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Text: body 16px/1.6 weight 400, card titles 16px weight 500, buttons 14px weight 500** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Mono: terminal (13.5px/1.7), diff (13px/1.65), install commands (15px), eyebrows and labels (12px uppercase, tracking 0.08em), all numbers, kbd keys, chips, version tags** — JetBrains Mono (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: Container max-width 1200px with 24px side padding (16px under 640px). Sections are separated by 1px Line borders full-bleed, with 112px vertical padding on desktop and 72px on mobile. Grids use a 1px gap over a Line-colored background so cells share hairline borders. Inner card padding 24px. Base unit 4px; dense rhythm, no huge empty bands.
- Radius: 6px on buttons, chips, kbd keys, inputs and tags; 10px on the terminal window, diff viewer, install box, overlay panel and feature grid outer frame; 999px only on severity dots and the hint chip.

## Motion
- Section reveal: every section heading and block fades up (opacity 0 to 1, y 16px to 0, 0.5s, ease [0.22, 1, 0.36, 1]) once when 20% visible; children stagger by 0.06s.
- Hero terminal: commands type character by character at 32ms per char with a blinking block caret (Signal, 1s steps); output lines appear one by one with 110ms between lines; the spinner cycles the braille frames ⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏ every 80ms for 900ms before being replaced by its result line. After the last line of session 2 it waits 2.6s, fades the body out over 0.3s and restarts session 1. It starts only when the terminal is in view and pauses when off screen or when the tab is hidden.
- Diff viewer: when the viewer is 35% in view, the three comments open in order, 1.1s apart. For each, the anchored line gets a 1.2s pulse-line highlight, then the comment card expands from height 0 to auto with opacity 0 to 1 (0.45s); the matching item in the Findings panel ticks from a hollow dot to a filled severity dot.
- Benchmark race: when the chart is 40% in view, bars grow from width 0 to their value (1.1s, ease [0.22, 1, 0.36, 1], stagger 0.12s top to bottom) and the numbers count up in sync using Motion's animate() on a motion value, formatted to one decimal for seconds and integers for counts. Switching tabs replays the race from 0.
- Micro-interactions: copy buttons swap the Lucide Copy icon for Check with a 0.15s scale pop and show a toast 'Copied: <command>' bottom-center for 1.8s; buttons lift 1px and brighten on hover; chips and cards change border to Line Strong on hover; the active tab underline slides between tabs with a shared layoutId.
- Shortcut overlay: backdrop fades to rgba(10,11,13,0.72) with backdrop-blur 6px in 0.2s; the panel scales from 0.97 to 1 and fades in over 0.2s; Esc or a backdrop click reverses it.
- Changelog expand: older entries animate height 0 to auto and fade in over 0.35s.
- prefers-reduced-motion: no typing, spinner or loop (the terminal renders session 1 complete and static with a Replay button that swaps to session 2), diff comments are all open from the start, bars and numbers render at their final values, reveals are instant, smooth scrolling is off. Overlay and toast still appear but without scale or movement.

## Imagery
No photos and no illustrations. The visual interest comes from code-drawn UI: the terminal window, the diff viewer, the bar chart, hairline grids, a very faint 48px background grid under the hero masked with a radial fade, and a 3.5% SVG noise overlay across the page. The wordmark glyph is an inline SVG: a 20x20 rounded square (radius 5) in Signal with two Ink horizontal strokes of different length, like two diff lines, the lower one offset right by 4px. Icons are Lucide at 18–20px with stroke-width 1.75.

## Tone
Terse, technical and confident, like a well-written README. Short sentences, concrete numbers, real command names, no hype words (no 'revolutionary', 'blazing', 'supercharge', 'magic'). Monospace for anything a developer would type or read in a terminal.

---
— Prompt by VibeFather · https://vibefather.ai/t/dark-developer-tool-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
