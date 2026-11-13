---
name: "Paper Lantern Festival Page"
colors:
  night_ink: "#070C18"
  river_indigo: "#0D1830"
  composer_navy: "#111D33"
  mist_teal: "#24424B"
  paper_cream: "#F7EAC8"
  muted_blue: "#AAB6CB"
  lantern_amber: "#F6B85F"
  lantern_core: "#FFE6A3"
  copper_line: "#8A6848"
  amber_ink: "#261808"
  water_glint: "#7EA4B8"
  night_line: "#2A3850"
typography:
  wordmark_welcome_h1_festival_note_gallery_title_and_released_wish_text: { family: "Fraunces", weights: [400, 500, 600] }
  body_composer_buttons_fields_gallery_actions_and_status_messages: { family: "Manrope", weights: [400, 500, 600, 700] }
  step_numbers_wind_labels_wish_counts_and_small_privacy_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base unit. The desktop shell is max-width 1600px with 24px side padding; header is 68px high. The desktop festival hero is height calc(100svh - 92px), minimum 680px and maximum 840px, with 48–56px overlay padding. The composer is 380px wide with 24px padding and 16px group gaps. Gallery and ritual sections use a 1280px inner shell, 96px desktop and 64px mobile vertical padding. At 390 × 844 use a 56px header, 16px side padding, a 430px scene, a normal-flow composer below it, and single-column gallery cards. All interactive targets are at least 44 by 44px, and page content never causes horizontal overflow."
radius: "Use 20px for the festival stage, 16px for the composer and gallery cards, 10px for fields and primary buttons, 8px for small controls, and 999px only for the three-step indicator and compact scene-status pills. Use 1px Night line borders and restrained shadows. The scene and paper lanterns supply the organic curves; avoid nesting every control inside a rounded floating card."
---

# Paper Lantern Festival Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night ink** `#070C18` — Page background, deepest sky, and modal scrims.
- **River indigo** `#0D1830` — Sky transition, header, and primary raised surfaces.
- **Composer navy** `#111D33` — Wish composer, gallery cards, and control surfaces.
- **Mist teal** `#24424B` — Far hills, atmospheric bands, and quiet scenic depth.
- **Paper cream** `#F7EAC8` — Primary text, lantern paper, and warm highlights.
- **Muted blue** `#AAB6CB` — Secondary copy and inactive controls with readable contrast.
- **Lantern amber** `#F6B85F` — Primary action, active steps, focus rings, and lantern edges.
- **Lantern core** `#FFE6A3` — Lantern illumination and tiny warm glints only.
- **Copper line** `#8A6848` — Paper ribs, warm dividers, and secondary ornamental rules.
- **Amber ink** `#261808` — Text on Lantern amber buttons.
- **Water glint** `#7EA4B8` — Fine current lines and cool river reflections.
- **Night line** `#2A3850` — Borders, input outlines, stepper tracks, and card separators.

## Typography
- **Wordmark, welcome H1, festival note, gallery title, and released-wish text** — Fraunces (OFL), weights 400/500/600. Self-host the font files.
- **Body, composer, buttons, fields, gallery actions, and status messages** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.
- **Step numbers, wind labels, wish counts, and small privacy labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit. The desktop shell is max-width 1600px with 24px side padding; header is 68px high. The desktop festival hero is height calc(100svh - 92px), minimum 680px and maximum 840px, with 48–56px overlay padding. The composer is 380px wide with 24px padding and 16px group gaps. Gallery and ritual sections use a 1280px inner shell, 96px desktop and 64px mobile vertical padding. At 390 × 844 use a 56px header, 16px side padding, a 430px scene, a normal-flow composer below it, and single-column gallery cards. All interactive targets are at least 44 by 44px, and page content never causes horizontal overflow.
- Radius: Use 20px for the festival stage, 16px for the composer and gallery cards, 10px for fields and primary buttons, 8px for small controls, and 999px only for the three-step indicator and compact scene-status pills. Use 1px Night line borders and restrained shadows. The scene and paper lanterns supply the organic curves; avoid nesting every control inside a rounded floating card.

## Motion
- Render the complete landscape, first ambient lantern field, headline, and write form immediately, with no splash, loading gate, or blocking intro. Ambient lanterns drift only after the first painted tableau is visible.
- Lantern ascent, wind sway, tiny rotation, and 7% brightness variation follow the exact fixed-step simulation. Pointer parallax is limited to 2, 4, 7, and 10 CSS pixels by layer and never moves interface panels.
- The folding preview is one coherent 1100ms sequence: corners, side panels, base, then inner light. It does not loop, bounce, or require the user to drag paper.
- Personal release uses a 1400ms easeOutCubic rise from the dock with a short fading trail, then joins the same wind and ascent system. Composer success crossfades over 180ms without shifting the panel width.
- Wish prompts, wind settings, buttons, and gallery actions use 120–180ms color, opacity, or at most 4px movement transitions. Reduced motion removes ambient drift, flicker, parallax, folding travel, release travel, and nonessential transforms while retaining immediate state feedback.

## Imagery
The high-craft procedural Canvas 2D river festival is the visual anchor; use no photographs, generated bitmap images, downloaded landscapes, paper textures, video, or external lantern art. Layer an indigo sky, 96 stable stars, a plain moon, teal hill silhouettes, translucent mist, fine water currents, warm six-panel lanterns, soft halos, broken reflections, and an unoccupied dock. The SVG folding preview and favicon reuse the same original paper geometry. No people, faces, mascots, sacred emblems, recognizable landmarks, real event signage, or branded lantern imagery.

## Tone
Tender, quiet, secular, and lightly poetic rather than mystical or sentimental. Use concise US English and concrete interaction feedback. Treat lanterns as original paper-craft objects, not as sacred symbols or a claim of cultural authenticity. Never promise that a wish will come true. Be explicit that ambient wishes are invented, visitor wishes stay in the current browser, and there is no live public feed.

---
— Prompt by VibeFather · https://vibefather.ai/t/paper-lantern-festival-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
