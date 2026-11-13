---
name: "Kanban Project Board App"
colors:
  board: "#EFEAE0"
  panel: "#FBF9F4"
  card: "#FFFFFF"
  line: "#E2DCCE"
  ink: "#22201B"
  soft_ink: "#6B665B"
  spruce: "#3E6B5A"
  spruce_deep: "#2F5346"
  spruce_mist: "#E3EBE6"
  clay: "#C0603A"
  ochre: "#C9931B"
  plum: "#8B5CB8"
  moss: "#7B8F4A"
  slate_ink: "#10201A"
  good: "#4E8D5B"
typography:
  display_topbar_wordmark_column_headers_modal_title_bricolage_grotesque_warm_and_slightly_quirky: { family: "Bricolage Grotesque", weights: [400, 600] }
  text_and_ui_card_titles_body_buttons_due_chips_inter: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Shell max-width 1480px with 28px padding (16px under 900px). Columns: min-width 300px, gap 20px, horizontal scroll on overflow; column header 40px; cards stack with 12px gaps; cards 14px inner padding. Type scale: wordmark 20px Bricolage 600; column headers 15px Bricolage 600 with mono-like count chips; card titles 14px Inter 500; hints 12.5px Soft Ink; due chips 11px 600 tabular. Buttons: height 36px, Inter 600 13px; primary Spruce fill with Card text, ghost 1px Line border. Inputs: height 38px, Card fill, 1px Line border, focus Spruce border + 2px offset ring. Focus everywhere: 2px Spruce outline, 3px offset."
radius: "12px on columns and modal; 10px on cards, composer, buttons; 999px for chips, dots and toasts."
---

# Kanban Project Board App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Board** `#EFEAE0` — Page background — warm paper.
- **Panel** `#FBF9F4` — Column background.
- **Card** `#FFFFFF` — Cards, modal, composer.
- **Line** `#E2DCCE` — 1px hairlines: column borders, dividers, placeholder outline.
- **Ink** `#22201B` — Titles, body, icons.
- **Soft Ink** `#6B665B` — Counts, hints, empty states, placeholder text.
- **Spruce** `#3E6B5A` — The one accent: buttons, column count chips, focus ring, drag glow.
- **Spruce Deep** `#2F5346` — Hover and pressed primary.
- **Spruce Mist** `#E3EBE6` — Drag-hover column wash, selected label chips.
- **Clay** `#C0603A` — Label 1 and overdue chips.
- **Ochre** `#C9931B` — Label 2 and due-soon chips.
- **Plum** `#8B5CB8` — Label 3.
- **Moss** `#7B8F4A` — Label 4 and done states.
- **Slate Ink** `#10201A` — Text on spruce fills.
- **Good** `#4E8D5B` — Success toasts, saved tick.

## Typography
- **Display: topbar wordmark, column headers, modal title — Bricolage Grotesque, warm and slightly quirky** — Bricolage Grotesque (OFL), weights 400/600. Self-host the font files.
- **Text and UI: card titles, body, buttons, due chips — Inter** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Shell max-width 1480px with 28px padding (16px under 900px). Columns: min-width 300px, gap 20px, horizontal scroll on overflow; column header 40px; cards stack with 12px gaps; cards 14px inner padding. Type scale: wordmark 20px Bricolage 600; column headers 15px Bricolage 600 with mono-like count chips; card titles 14px Inter 500; hints 12.5px Soft Ink; due chips 11px 600 tabular. Buttons: height 36px, Inter 600 13px; primary Spruce fill with Card text, ghost 1px Line border. Inputs: height 38px, Card fill, 1px Line border, focus Spruce border + 2px offset ring. Focus everywhere: 2px Spruce outline, 3px offset.
- Radius: 12px on columns and modal; 10px on cards, composer, buttons; 999px for chips, dots and toasts.

## Motion
- Easing: a spring (stiffness 320, damping 28) for card drops; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) elsewhere. The board should feel like paper on felt — quick, no bounce overshoot beyond 2%.
- Drag: the ghost lifts (scale 1.02, 2deg tilt, soft shadow) over 120ms; the hovered column washes Spruce Mist over 120ms; drop commits with the spring (200ms settle); the vacated slot's placeholder fades in.
- View load: columns rise 10px staggered 60ms; cards inside stagger 25ms.
- Card interactions: hover lifts 2px (120ms); the grab handle fades in; ticking a subtask strikes the text (180ms) and pops the count.
- Move via menu: the card glides to its new column (layout animation, 260ms spring) — the same commit path as a drop.
- Filters: non-matching cards fade to 22% and sink 2px (160ms) in place — never reflow away; the column counts stay honest ('3 of 7 shown').
- Modal: scrim fades 160ms; the panel scales 0.97→1 with the spring; Escape reverses both.
- Toasts: rise 8px in 180ms with a 3s auto-dismiss bar; undo commits immediately when clicked.
- prefers-reduced-motion: reduce — no tilt/shadow on the ghost, no layout glides (cards jump), no staggers; filters still dim; the board stays fully usable. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs, no avatars, no logos: assignees are initials dots, labels are colored dots, and every glyph is lucide or inline SVG. Icons: lucide-react only, stroke width 1.75.

## Tone
Teammate-casual: card titles are imperative and short, the empty column has one gentle joke.

---
— Prompt by VibeFather · https://vibefather.ai/t/kanban-project-board-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
