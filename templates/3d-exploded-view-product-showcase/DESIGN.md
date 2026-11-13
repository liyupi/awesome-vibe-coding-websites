---
name: "3D Exploded View Product Showcase"
colors:
  carbon: "#0B0D0E"
  graphite: "#131719"
  raised_steel: "#1B2023"
  bone_white: "#F1F0EA"
  cool_gray: "#9AA3A5"
  machined_line: "#30383B"
  safety_orange: "#F26A2E"
  satin_aluminum: "#BBC2C0"
  gunmetal: "#586165"
typography:
  display_and_section_headings: { family: "Barlow Condensed", weights: [500, 600, 700] }
  body_buttons_and_specification_values: { family: "Inter", weights: [400, 500, 600] }
  eyebrows_model_ids_dimensions_part_labels_and_transport_readouts: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base unit, a maximum content width of 1520px, 32px desktop gutters, and 20px mobile gutters. Desktop section padding is 128px 0; mobile is 80px 0. Use a 12-column desktop grid with 24px gaps. Keep body measure between 52 and 68 characters, control gaps at 8–12px, and table-cell padding at 18px 0."
radius: "Use 2px on buttons and inputs, 6px on inspectors and scene panels, and no rounding on major sections or specification rows. Reserve circles for status indicators and transport icon buttons."
---

# 3D Exploded View Product Showcase — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Carbon** `#0B0D0E` — Page background and the darkest canvas clear color.
- **Graphite** `#131719` — Header, inspector, and specification-row surfaces.
- **Raised steel** `#1B2023` — Control groups, hover states, and subtle scene panels.
- **Bone white** `#F1F0EA` — Primary headings, important values, and high-contrast copy.
- **Cool gray** `#9AA3A5` — Secondary copy and inactive labels; never use for text smaller than 13px.
- **Machined line** `#30383B` — Hairline borders, construction grid, table rules, and leader lines.
- **Safety orange** `#F26A2E` — Active step, selected part, primary button, focus outline, and playback progress only.
- **Satin aluminum** `#BBC2C0` — Three.js housing and machined aluminum components, with darker variants for depth.
- **Gunmetal** `#586165` — Three.js shafts, fasteners, and secondary metal surfaces.

## Typography
- **Display and section headings** — Barlow Condensed (OFL), weights 500/600/700. Self-host the font files.
- **Body, buttons, and specification values** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Eyebrows, model IDs, dimensions, part labels, and transport readouts** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit, a maximum content width of 1520px, 32px desktop gutters, and 20px mobile gutters. Desktop section padding is 128px 0; mobile is 80px 0. Use a 12-column desktop grid with 24px gaps. Keep body measure between 52 and 68 characters, control gaps at 8–12px, and table-cell padding at 18px 0.
- Radius: Use 2px on buttons and inputs, 6px on inspectors and scene panels, and no rounding on major sections or specification rows. Reserve circles for status indicators and transport icon buttons.

## Motion
- On hero entry, fade the copy upward by 16px over 450ms and ease the assembled model from scale 0.96 and opacity 0 to its final state over 600ms. After entry, use only a restrained ±4° idle yaw over 12 seconds; stop it on interaction and when reduced motion is requested.
- Drive the explosion directly from normalized scroll progress through five explicit keyframes. Interpolate each part's position, rotation, opacity, and label visibility from its own keyframe record; do not use time-based triggers that can drift from the visitor's scroll position.
- Enable OrbitControls damping at 0.08 on desktop with zoom limited to 0.72×–1.8× of the default camera distance and polar angle limited to 20°–105°. Reset view returns camera, target, selection, and clipping to their defaults over 250ms.
- Assembly playback starts fully exploded and assembles over exactly 6000ms with smoothstep easing per part, a 120ms stagger by assembly order, a progressing orange track, and a numeric 0–100% readout. Pause preserves the exact frame; Restart returns to 0%; Return to scroll restores the scroll-derived state.
- Part selection pauses playback, eases the camera target toward the selected component over 300ms, highlights only that mesh in safety orange, and opens the inspector. Closing the inspector restores the prior camera target and playback or scroll state.
- Buttons, disclosure panels, labels, and specification-copy confirmation use 160ms opacity and 2–4px transform transitions. Avoid decorative particles, glitch effects, constant spinning gears, large parallax backgrounds, and gratuitous page transitions.
- For prefers-reduced-motion, remove idle yaw, smoothing, camera flights, and automatic playback. Scroll and the manual progress slider update to discrete keyframe states instantly, and all content remains available without animation.

## Imagery
The only hero visual is an original, high-craft procedural Three.js [PRODUCT], shown large with physically shaded metal, a subtle construction grid, fine dimension marks, and a soft contact shadow. The default gearbox must be recognizably mechanical at first glance, with two parallel shafts, visible helical teeth, bearing races, housing halves, fasteners, and seals. No photographs, AI-generated images, downloaded 3D models, HDRIs, texture maps, logos, people, or branded objects are used. HTML labels and an SVG leader-line overlay track projected 3D anchors; Lucide supplies only interface icons.

## Tone
Precise, calm, engineered, and legible. Use short declarative copy and concrete sample engineering data. The page should feel like a carefully art-directed technical exhibit, not a science-fiction cockpit, gaming interface, or generic SaaS landing page.

---
Inspired by 3D Exploded View Product Showcase — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/3d-exploded-view-product-showcase · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
