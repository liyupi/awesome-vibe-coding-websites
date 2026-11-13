---
name: "Interactive Lesson Slides"
colors:
  paper: "#F6F0E2"
  panel: "#FFFBF1"
  line: "#DDD2BA"
  ink: "#25302A"
  muted: "#5E695D"
  board: "#1F4A3C"
  board_deep: "#173A2F"
  console: "#122B23"
  chalk: "#F3F0E3"
  chalk_dim: "#B9C9B8"
  marker: "#F5CF3A"
  mint: "#8FD3A8"
  clay: "#E58E73"
  sky: "#9CCBE0"
  ledge: "#C8B48F"
typography:
  display_slide_headlines_big_numbers_lesson_name_in_the_outline_line_height_1_02_tracking_0_01em: { family: "Fraunces Variable", weights: [500, 600] }
  text_ui_body_copy_quiz_options_chosen_for_classroom_legibility_line_height_1_45: { family: "Atkinson Hyperlegible", weights: [400, 700] }
  mono_editor_console_slide_numbers_kickers_keyboard_keys_kickers_are_uppercase_with_0_08em_tracking: { family: "JetBrains Mono Variable", weights: [400, 600] }
spacing: "4px base. App: sidebar 280px expanded, 60px rail collapsed; control bar 56px; 24px padding around the stage. On the 1280x720 slide canvas: 64px outer padding, 32px between major blocks, 16px inside groups. Canvas type sizes: headline 56px, title-slide headline 88px, question 38px, body 24px, options 22px, kicker 18px, code 18px."
radius: "Slide surface 14px on top corners, square at the bottom where it meets the ledge. Cards, inputs and option rows 10px. Buttons 8px. Chips and the annotation toolbar are full pills. Photos on slides 6px with a 10px Panel border."
---

# Interactive Lesson Slides — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F6F0E2` — App background around the stage
- **Panel** `#FFFBF1` — Sidebar, control bar, quiz option cards, overlays
- **Line** `#DDD2BA` — Hairlines and panel borders on paper
- **Ink** `#25302A` — Text on paper and panels
- **Muted** `#5E695D` — Secondary text on paper
- **Board** `#1F4A3C` — Chalk-green slide surface, the main stage color
- **Board Deep** `#173A2F` — Editor background and inset panels on the board
- **Console** `#122B23` — Console output pane
- **Chalk** `#F3F0E3` — Headlines, text and diagram lines on the board
- **Chalk Dim** `#B9C9B8` — Secondary text on the board, code comments
- **Marker** `#F5CF3A` — The one accent: current slide, primary buttons, active bar, underline. Text on it is Ink.
- **Mint** `#8FD3A8` — Correct feedback only, always with a check icon; also code strings
- **Clay** `#E58E73` — Wrong feedback and errors only, always with an X icon; also code numbers
- **Sky** `#9CCBE0` — Annotation swatch only, never in the UI
- **Ledge** `#C8B48F` — 6px chalk-tray strip under the slide

## Typography
- **Display: slide headlines, big numbers, lesson name in the outline. Line height 1.02, tracking -0.01em.** — Fraunces Variable (OFL), weights 500/600. Self-host the font files.
- **Text: UI, body copy, quiz options. Chosen for classroom legibility. Line height 1.45.** — Atkinson Hyperlegible (OFL), weights 400/700. Self-host the font files.
- **Mono: editor, console, slide numbers, kickers, keyboard keys. Kickers are uppercase with 0.08em tracking.** — JetBrains Mono Variable (OFL), weights 400/600. Self-host the font files.

## Spacing & shape
- Spacing: 4px base. App: sidebar 280px expanded, 60px rail collapsed; control bar 56px; 24px padding around the stage. On the 1280x720 slide canvas: 64px outer padding, 32px between major blocks, 16px inside groups. Canvas type sizes: headline 56px, title-slide headline 88px, question 38px, body 24px, options 22px, kicker 18px, code 18px.
- Radius: Slide surface 14px on top corners, square at the bottom where it meets the ledge. Cards, inputs and option rows 10px. Buttons 8px. Chips and the annotation toolbar are full pills. Photos on slides 6px with a 10px Panel border.

## Motion
- Slide change: 180ms ease-out fade with a 12px horizontal shift in the direction of travel. Nothing else moves on the shell.
- Progress bar width eases over 240ms. The outline's current-slide bar snaps with no animation.
- Quiz feedback: the chosen option gets one 320ms outward ring pulse in Mint or Clay, and the explanation fades in over 160ms.
- Title underline: the Marker SVG stroke draws once over 600ms using stroke-dashoffset. Stepper bars move with a 220ms transform transition. Bars on slide 9 grow once over 400ms.
- Under prefers-reduced-motion: reduce, remove all of the above, including stepper autoplay. State changes apply instantly.

## Imagery
One shoot: warm documentary photographs in a classroom with low window light, oak, cloth-bound books and a green chalkboard, used on slides 1, 2 and 12 and for the instructor portrait. Photos sit on the board as printed pictures with a 10px Panel border, slight rotation and two semi-transparent paper tape strips drawn in CSS. All diagrams are original inline SVG with a rough chalk line (a feTurbulence plus feDisplacementMap filter at scale 2 on Chalk strokes). The board surface has a faint chalk smudge: two large radial gradients of Chalk at 4% plus an inline SVG feTurbulence noise at 5% opacity. No character illustrations.

## Tone
Warm classroom editorial. A good teacher talking: plain, specific, encouraging, a little wry. Short sentences, concrete numbers, no corporate language and no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/interactive-lesson-slides · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
