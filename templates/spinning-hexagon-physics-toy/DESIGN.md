---
name: "Spinning Hexagon Physics Toy"
colors:
  deep_indigo: "#1B1464"
  arena_indigo: "#241B7A"
  inner_ink: "#130D3F"
  hot_pink: "#FF3DA4"
  tangerine: "#FF8A34"
  lime: "#C7F43F"
  cyan: "#25E5F2"
  violet: "#A56BFF"
  paper_white: "#FFFFFF"
  lilac_text: "#DCD6FF"
typography:
  wordmark_main_headline_arena_title_and_large_control_headings: { family: "Fredoka", weights: [500, 600] }
  body_labels_helper_text_statuses_and_numeric_outputs: { family: "DM Sans", weights: [400, 500, 700] }
spacing: "Use a 4px base grid. Desktop shell max-width 1280px with 32px side padding, 24px workspace gap, 20px card interiors, 16px control gaps and 24px before the explanation/footer band. Header 64px; mobile shell 16px, header 56px, card interiors 16px and gaps 16px. Keep the desktop workbench visible within the 1440x900 first screen and the mobile headline, whole arena and transport visible within 390x844. Avoid giant empty spacer sections."
radius: "Arena 28px, tuning card 24px, ordinary buttons 14px, preset rows 10px, pills fully rounded. Use solid 2px dark ink outlines and a crisp 8px downward dark ink shadow to give the toy a physical, chunky edge; do not use a glass-dashboard card system."
---

# Spinning Hexagon Physics Toy — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep indigo** `#1B1464` — Mandatory dominant page background, header, footer and right-hand control-card body; never replace with black or a muted neutral. It remains visible around every section.
- **Arena indigo** `#241B7A` — Arena panel backing and control disclosure backing, distinct from the deep indigo page.
- **Inner ink** `#130D3F` — Hexagon interior, dark text on all five bright colors, ball number glyphs, slider outlines and solid control-card borders.
- **Hot pink** `#FF3DA4` — Large clipped upper-left circle behind the arena, one fifth of the balls, selected experiment tab, and the full-width Shake it up button. Pink covers an actual hero surface, not only a small accent.
- **Tangerine** `#FF8A34` — Large lower-right arena semicircle, one fifth of the balls, gravity-slider fill and action-button pressed state.
- **Lime** `#C7F43F` — Solid 76px-high Tuning lab card header, one fifth of the balls, active slow-motion pill and friction-slider fill. Dark ink text only.
- **Cyan** `#25E5F2` — Broad luminous hexagon edge, one fifth of the balls, spin-slider fill, keyboard focus rings and active status dot.
- **Violet** `#A56BFF` — One fifth of the balls, count-slider fill and the How it moves disclosure label background; use dark ink labels on violet.
- **Paper white** `#FFFFFF` — Main headings, control labels, readable value outputs, ball-number badge discs and small glossy reflections.
- **Lilac text** `#DCD6FF` — Secondary body text on the indigo backgrounds; use solid color rather than low-opacity white.

## Typography
- **Wordmark, main headline, arena title and large control headings** — Fredoka (OFL), weights 500/600. Self-host the font files.
- **Body, labels, helper text, statuses and numeric outputs** — DM Sans (OFL), weights 400/500/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base grid. Desktop shell max-width 1280px with 32px side padding, 24px workspace gap, 20px card interiors, 16px control gaps and 24px before the explanation/footer band. Header 64px; mobile shell 16px, header 56px, card interiors 16px and gaps 16px. Keep the desktop workbench visible within the 1440x900 first screen and the mobile headline, whole arena and transport visible within 390x844. Avoid giant empty spacer sections.
- Radius: Arena 28px, tuning card 24px, ordinary buttons 14px, preset rows 10px, pills fully rounded. Use solid 2px dark ink outlines and a crisp 8px downward dark ink shadow to give the toy a physical, chunky edge; do not use a glass-dashboard card system.

## Motion
- Use requestAnimationFrame rendering with a 1/240-second physics accumulator and adaptive collision microsteps, independent of frame rate. The detailed numerical solver in Interactive candy arena is part of the implementation requirement.
- Ball numbers and seams rotate with their computed angular state; wall rotation, contact impulses and friction are physical. Keep the five-color gloss legible throughout motion.
- Energetic contact confetti has a per-contact cooldown, lifetime below 0.4 second and maximum 120 particles. No strobe, full-screen flash, page shake, parallax, autoplay audio or ornamental reveal choreography.
- Respect prefers-reduced-motion by initially pausing in a polished still state, exposing Start motion and disabling confetti/decorative transitions. Ordinary users start automatically. Pause and Resume always remain available.
- Buttons have only a 100-120ms color/press response. Native details open immediately. No smooth scroll or press displacement with reduced motion.

## Imagery
Everything is drawn in code: glossy spheres, physical arena, two saturated backing shapes, tiny confetti, original hexagon mark, favicon and simple control symbols. There are no photographs, portraits, bitmaps, imported illustrations, 3D models or generated images. The arena itself is the large high-craft visual anchor; it must show twenty numbered balls clearly on load, not an empty container or static placeholder.

## Tone
Tactile, bright, curious and concise. Write friendly US English with concrete action labels. No pseudo-scientific claims, onboarding wall or marketing filler. Default copy appears below; adapt every context-dependent sentence to supplied variable values and keep all content in src/content.ts.

---
Inspired by Spinning Hexagon Physics Toy by @GlanceHall — https://glancehall.com/blog/coding-agents/codex-projects
— Prompt by VibeFather · https://vibefather.ai/t/spinning-hexagon-physics-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
