---
name: "Flower Anatomy 3D Explainer"
colors:
  warm_paper: "#F5F1E8"
  botanical_ink: "#18342B"
  leaf: "#3E6B50"
  specimen_mist: "#E3ECE2"
  petal_coral: "#EEA095"
  petal_light: "#FFD7CA"
  pollen_gold: "#D99A2B"
  fine_line: "#B9C6B9"
  muted_text: "#64736A"
  chalk: "#FFFDF8"
typography:
  display_headlines_specimen_name_and_quiz_result: { family: "Fraunces", weights: [500, 600, 700] }
  body_copy_controls_labels_and_answer_choices: { family: "Inter", weights: [400, 500, 600, 700] }
  eyebrows_step_numbers_shortcuts_and_scientific_metadata: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use a 4px base unit with 8px control gaps, 16px card padding, 24px panel padding, and 32px desktop page gutters. Cap the shared shell at 1600px. Desktop chapter rail, stage, and inspector columns are 220px, minmax(0, 1fr), and 320px with 24px gaps. Keep 44px minimum touch targets and 12px minimum separation between projected labels."
radius: "Use 2px on small taxonomy chips, 8px on buttons, 14px on the stage and inspector, and fully circular geometry only for status dots and compact icon buttons. Avoid a dashboard made from many floating rounded cards."
---

# Flower Anatomy 3D Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm paper** `#F5F1E8` — Page background and quiet outer gutters
- **Botanical ink** `#18342B` — Headings, primary buttons, wordmark, and high-emphasis text
- **Leaf** `#3E6B50` — Stem, leaves, secondary controls, and active lesson markers
- **Specimen mist** `#E3ECE2` — Viewport backdrop and pale diagram surfaces
- **Petal coral** `#EEA095` — Default lily tepals and selected-part accents; derive a different specimen color when SPECIMEN changes
- **Petal light** `#FFD7CA` — Tepal inner faces, soft highlights, and pale selection washes
- **Pollen gold** `#D99A2B` — Anthers, pollen grains, pollination path, and quiz progress
- **Fine line** `#B9C6B9` — Hairline borders, leader lines, timeline tracks, and separators
- **Muted text** `#64736A` — Instructions, secondary facts, and metadata
- **Chalk** `#FFFDF8` — Cards, labels, and text placed on botanical ink

## Typography
- **Display headlines, specimen name, and quiz result** — Fraunces (OFL), weights 500/600/700. Self-host the font files.
- **Body copy, controls, labels, and answer choices** — Inter (OFL), weights 400/500/600/700. Self-host the font files.
- **Eyebrows, step numbers, shortcuts, and scientific metadata** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit with 8px control gaps, 16px card padding, 24px panel padding, and 32px desktop page gutters. Cap the shared shell at 1600px. Desktop chapter rail, stage, and inspector columns are 220px, minmax(0, 1fr), and 320px with 24px gaps. Keep 44px minimum touch targets and 12px minimum separation between projected labels.
- Radius: Use 2px on small taxonomy chips, 8px on buttons, 14px on the stage and inspector, and fully circular geometry only for status dots and compact icon buttons. Avoid a dashboard made from many floating rounded cards.

## Motion
- On first load, ease the specimen from 96% scale and zero opacity to full scale and opacity over 600ms while the header and inspector fade in over 300ms; do not auto-rotate the flower.
- Use damped orbit controls with damping factor 0.08, limited zoom, and a restrained floor shadow. Dragging never selects text or scrolls the stage on touch; vertical page scrolling remains available outside the canvas.
- Animate dissection changes over 650ms with cubic-bezier(0.22, 1, 0.36, 1): tepals lift and rotate outward, stamens part, then the camera and clipping plane reveal the ovary. Keep every intermediate state interruptible by Previous, Next, Reset, or label selection.
- Project HTML labels from 3D anchor positions every frame and draw fine SVG leader lines to them. Update selection with a 160ms highlight and a soft target ring rather than bouncing labels.
- Crossfade chapter inspector content over 220ms without unmounting the canvas. Pollination is a deterministic 12-second sequence with play, pause, previous, next, replay, and 0.5x or 1x speed; never start it on page load.
- For prefers-reduced-motion, remove the entrance tween, idle motion, damping, camera tweens, and particle travel. Dissection and chapter changes become immediate, and pollination becomes four user-controlled static storyboard states with the same copy.
- Pause rendering when the document is hidden or the stage is offscreen. Cap pixel ratio at 1.75 desktop and 1.5 mobile, use one directional and one hemisphere light, avoid real-time shadow maps, and reuse pollen through InstancedMesh.

## Imagery
Create every visual in code: the flower, stem, leaves, pollen, ovary cutaway, leader lines, floor shadow, wordmark, favicon, and WebGL-fallback cross-section. Use no photographs, AI-generated images, downloaded models, HDRIs, image textures, people, or mascots. The default flower uses two alternating whorls of three curved coral tepals, six copper-gold anthers, a green central pistil, and a subtle procedural speckle pattern made from small geometry marks. A specimen change must update tepal silhouette, proportions, material colors, and decorative marks from src/content.ts; a tulip uses smoother cup-shaped unspotted tepals rather than inheriting lily speckles.

## Tone
Precise, calm, curious, and tactile, like a beautifully designed museum specimen station. Use direct verbs and short explanations. Avoid hype, gamified shouting, classroom clipart, childish mascots, fake scientific claims, and generic AI copy.

---
Inspired by Flower Anatomy 3D Explainer — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/flower-anatomy-3d-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
