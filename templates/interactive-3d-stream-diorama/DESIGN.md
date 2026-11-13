---
name: "Interactive 3D Stream Diorama"
colors:
  chrome: "#101714"
  panel: "#17201D"
  panel_border: "#415048"
  text: "#F0F3E9"
  muted: "#AAB6A9"
  accent: "#D8B978"
  water: "#315F63"
  grass: "#526C45"
  stone: "#77766F"
  day_sky: "#B8CABD"
  dusk_sky: "#805D57"
  night_sky: "#0B1524"
typography:
  scene_title_and_large_field_note_headings: { family: "Instrument Serif", weights: [400] }
  interface_body_copy_controls_and_metadata: { family: "DM Sans Variable", weights: [400, 500, 600] }
spacing: "Use an 8px base grid. Desktop outer frame is 16px, header height is 64px, title overlay inset is 40px, control-panel padding is 20px, and field-note sections have 24px vertical separation. Mobile uses an 8px outer frame, 56px header, 20px title inset, and 12px control padding."
radius: "The scene frame is 24px on desktop and 18px on mobile. Control panels and field-note drawer use 18px, small buttons use 10px, and segmented lighting controls use a 999px pill. Keep stones and terrain organic rather than applying UI-like rounding to geometry."
---

# Interactive 3D Stream Diorama — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Chrome** `#101714` — Page background and outer frame in every lighting mode.
- **Panel** `#17201D` — Control and field-note surfaces at 88 percent opacity with a subtle backdrop blur.
- **Panel Border** `#415048` — One-pixel dividers, control outlines, and selected-state borders at reduced opacity.
- **Text** `#F0F3E9` — Primary titles, labels, and readable control text.
- **Muted** `#AAB6A9` — Secondary notes, inactive controls, and gesture instructions.
- **Accent** `#D8B978` — Active lighting state, small focus details, and the interactive water indicator.
- **Water** `#315F63` — Deep-water base color, mixed with #79A8A0 in shallow areas and adjusted per lighting preset.
- **Grass** `#526C45` — Mid-tone vegetation, varied procedurally between #394E35 and #789064.
- **Stone** `#77766F` — Warm-gray rock material with darker seams and pale mineral speckles.
- **Day Sky** `#B8CABD` — Day canvas background and matching distance fog.
- **Dusk Sky** `#805D57` — Dusk canvas background and matching warm distance fog.
- **Night Sky** `#0B1524` — Night canvas background, fog, and deep reflected sky.

## Typography
- **Scene title and large field-note headings** — Instrument Serif (OFL), weights 400. Self-host the font files.
- **Interface, body copy, controls, and metadata** — DM Sans Variable (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid. Desktop outer frame is 16px, header height is 64px, title overlay inset is 40px, control-panel padding is 20px, and field-note sections have 24px vertical separation. Mobile uses an 8px outer frame, 56px header, 20px title inset, and 12px control padding.
- Radius: The scene frame is 24px on desktop and 18px on mobile. Control panels and field-note drawer use 18px, small buttons use 10px, and segmented lighting controls use a 999px pill. Keep stones and terrain organic rather than applying UI-like rounding to geometry.

## Motion
- On first load, fade the complete rendered scene from opacity 0 to 1 over 650ms and move the title overlay upward 16px over 600ms with a cubic-bezier(0.22, 1, 0.36, 1) easing; never show a blank hero while shaders compile.
- Water time advances continuously through layered directional noise and fine normal ripples. Grass blades sway by no more than 3 degrees with two offset wind frequencies; do not auto-rotate the camera.
- Lighting presets interpolate sky, fog, light colors, light intensities, exposure, and water uniforms over 900ms. Interface hover and pressed states use 160ms transitions.
- Pointer-created ripples expand from the exact raycast point, fade naturally, and recycle the oldest of eight ripple slots. Dragging water adds a new point at most every 45ms rather than creating uncontrolled uniforms.
- Camera reset eases position and target back to the original composition over 650ms. Field notes fade and translate 20px from the right on desktop and 24px from the bottom on mobile.
- For prefers-reduced-motion, remove intro movement and grass sway, render flowing water at a fixed time value, make UI and camera transitions immediate, and retain only brief user-initiated ripple feedback. Sound remains strictly opt-in.

## Imagery
No photographs, image downloads, external models, HDRIs, or recorded audio. The hero is a polished real-time WebGL diorama: a seeded asymmetric earth cutaway, custom water shader, procedurally deformed stones, instanced grasses and pebbles, generated noise textures, atmospheric lights, and soft shadows. Generic interface icons come from the locally bundled Lucide package.

## Tone
Quiet, observant, tactile, and precise. Use natural materials, soft atmospheric light, concise field-note language, and no gamified scores, sales copy, or techno-utopian claims.

---
Inspired by Interactive 3D Stream Diorama — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/interactive-3d-stream-diorama · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
