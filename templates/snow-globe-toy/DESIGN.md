---
name: "Snow Globe Toy"
colors:
  night: "#0B1917"
  spruce: "#132B26"
  raised_pine: "#1B3932"
  line: "#315047"
  ivory: "#F3EFE3"
  mist: "#B8C8BE"
  brass: "#D2A85F"
  walnut: "#5C3828"
  ice: "#C4E7E9"
  ember: "#F2C477"
  cranberry: "#9A4A44"
typography:
  wordmark_h1_scene_names_in_the_introduction_dialog_title_and_plaque_lettering: { family: "Fraunces", weights: [500, 600] }
  body_copy_buttons_fields_scene_selectors_status_messages_character_count_and_help_text: { family: "DM Sans", weights: [400, 500, 600] }
spacing: "Use an 8px base unit. At 1440×900, header is 68px high with 32px horizontal padding; main uses 28px vertical and 32px horizontal padding, a 280px / minmax(420px, 1fr) / 304px column grid, and 24px gaps. The center stage fills the available height and is at least 560px high; left introduction aligns near its vertical center and the right workbench aligns to its top. H1 uses clamp(46px, 4.4vw, 68px) at 1.02 line height. At 390×844 use a 56px header with 16px padding, a compact intro with 16px side insets and 38px H1, a 340px stage, then the workbench in normal flow with 16px padding. Collapse the numbered instructions to one short Drag · Choose · Write line on mobile. Allow vertical scrolling on short screens, respect safe-area insets, never overlap the globe with controls, and keep every target at least 44 by 44px."
radius: "Use 18px on the stage and workbench, 12px on dialogs, 10px on fields and primary buttons, 8px on scene selectors, and fully round shapes only for status dots and tiny icon buttons. Use 1px Line borders and broad soft shadows. The physical glass globe may be luminous; do not turn every UI surface into translucent glass."
---

# Snow Globe Toy — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night** `#0B1917` — Page background, renderer clear color, and deepest room shadows.
- **Spruce** `#132B26` — Solid workbench, header, and secondary surfaces.
- **Raised Pine** `#1B3932` — Selected fields, hover states, and miniature evergreen shadows.
- **Line** `#315047` — Hairline borders, dividers, and inactive control outlines.
- **Ivory** `#F3EFE3` — Primary text, button text on dark surfaces, snow, and lighthouse ivory.
- **Mist** `#B8C8BE` — Readable secondary copy and inactive labels.
- **Brass** `#D2A85F` — Active outlines, primary Shake button, base rings, and message plaque; pair with Night text on fills.
- **Walnut** `#5C3828` — Turned base, cabin timber, and plaque lettering.
- **Ice** `#C4E7E9` — Glass rim, cool highlights, rock pools, and snow sparkle.
- **Ember** `#F2C477` — Warm windows, lighthouse lens, and small interior lights.
- **Cranberry** `#9A4A44` — Muted lighthouse bands and one small cabin door accent, never a UI error color.

## Typography
- **Wordmark, H1, scene names in the introduction, dialog title, and plaque lettering** — Fraunces (OFL), weights 500/600. Self-host the font files.
- **Body copy, buttons, fields, scene selectors, status messages, character count, and help text** — DM Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit. At 1440×900, header is 68px high with 32px horizontal padding; main uses 28px vertical and 32px horizontal padding, a 280px / minmax(420px, 1fr) / 304px column grid, and 24px gaps. The center stage fills the available height and is at least 560px high; left introduction aligns near its vertical center and the right workbench aligns to its top. H1 uses clamp(46px, 4.4vw, 68px) at 1.02 line height. At 390×844 use a 56px header with 16px padding, a compact intro with 16px side insets and 38px H1, a 340px stage, then the workbench in normal flow with 16px padding. Collapse the numbered instructions to one short Drag · Choose · Write line on mobile. Allow vertical scrolling on short screens, respect safe-area insets, never overlap the globe with controls, and keep every target at least 44 by 44px.
- Radius: Use 18px on the stage and workbench, 12px on dialogs, 10px on fields and primary buttons, 8px on scene selectors, and fully round shapes only for status dots and tiny icon buttons. Use 1px Line borders and broad soft shadows. The physical glass globe may be luminous; do not turn every UI surface into translucent glass.

## Motion
- Render the complete globe and miniature immediately with no splash, intro camera flight, or blocking loading treatment. The first ordinary-motion flurry settles in roughly five seconds without moving the page layout.
- Dragging tilts the physical globe directly within the stated clamp and transfers pointer velocity to snow. Release uses a damped upright spring of about 700ms; flakes continue independently and settle over four to eight seconds.
- Shake globe runs three diminishing impulses over 1.1 seconds and temporarily changes its label to Shaking…; additional presses restart from current particle positions rather than duplicating loops.
- Scene changes crossfade the outgoing and incoming miniature over 240ms with scale from 0.97 to 1, keep the same glass and base, and begin one moderate flurry in the new world. The message and camera remain unchanged.
- The lighthouse lantern rotates a subtle warm beam once every nine seconds in ordinary motion. Glass highlights remain static apart from the globe's physical tilt; no bloom pulsing, floating page ornaments, or autoplay camera rotation.
- Buttons, fields, selectors, and dialogs use 120–160ms color or opacity transitions with at most 3px movement. Toasts remain for 2.4 seconds. Reduced-motion behavior follows Setup and removes all autonomous movement.

## Imagery
The interactive Three.js snow globe is the high-craft visual anchor; use no photographs, generated bitmaps, downloaded models, image textures, or HDRIs. Create translucent but readable glass, a walnut-and-brass base, procedural snow, three intricate low-poly worlds, and a live CanvasTexture plaque entirely in code. Use deterministic Canvas-generated walnut grain and subtle snow sparkle if needed. Cabin, lighthouse, and city must have different silhouettes and tiny crafted details rather than being recolors of one model. Original inline SVG supplies the three selector thumbnails and favicon; Lucide supplies only familiar utility icons. No people, faces, mascots, characters, real landmarks, brand marks, or recognizable product designs.

## Tone
Tactile, wintry, intimate, and precise, like a handcrafted keepsake on a quiet desk. Use concise US English and concrete interaction feedback; avoid holiday sales language, whimsical filler, scores, streaks, and exaggerated claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/snow-globe-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
