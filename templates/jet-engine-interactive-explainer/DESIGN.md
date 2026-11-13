---
name: "Jet Engine Interactive Explainer"
colors:
  deep_hangar: "#080B10"
  instrument_panel: "#10161D"
  raised_graphite: "#17212B"
  frost: "#EDF3F6"
  cool_gray: "#92A3AD"
  blueprint_line: "#283642"
  flow_cyan: "#62D7F2"
  combustion_amber: "#FF9A4D"
  brushed_titanium: "#A9B4BA"
  gunmetal: "#4C5A64"
typography:
  display_and_section_headings: { family: "Space Grotesk", weights: [500, 600, 700] }
  body_buttons_guide_rows_and_quiz_answers: { family: "Inter", weights: [400, 500, 600] }
  eyebrows_model_ids_airflow_labels_and_instrument_readouts: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base unit, a maximum content width of 1520px, 32px desktop gutters, and 20px mobile gutters. Desktop section padding is 120px 0; mobile is 76px 0. Use a 12-column desktop grid with 24px gaps. Keep body measure between 52 and 68 characters, control gaps at 10–12px, and stage-row padding at 24px 0."
radius: "Use 3px on buttons and inputs, 8px on scene panels and inspectors, and no rounding on major sections or stage-guide rows. Reserve pills for compact airflow legends and circles for transport icon buttons."
---

# Jet Engine Interactive Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Deep hangar** `#080B10` — Page background and canvas clear color.
- **Instrument panel** `#10161D` — Header, stage inspector, lab controls, and quiz surfaces.
- **Raised graphite** `#17212B` — Control groups, selected rows, and subtle scene panels.
- **Frost** `#EDF3F6` — Primary headings, important values, and high-contrast body copy.
- **Cool gray** `#92A3AD` — Secondary copy and inactive labels; never use for text smaller than 13px.
- **Blueprint line** `#283642` — Hairline borders, construction grid, table rules, and leader lines.
- **Flow cyan** `#62D7F2` — Primary action, bypass airflow, active stage, focus outline, and progress only.
- **Combustion amber** `#FF9A4D` — Combustor, heated core particles, and exhaust highlights only.
- **Brushed titanium** `#A9B4BA` — Three.js blades and bright machined surfaces, with darker variants for depth.
- **Gunmetal** `#4C5A64` — Three.js shafts, casings, stators, and secondary metal surfaces.

## Typography
- **Display and section headings** — Space Grotesk (OFL), weights 500/600/700. Self-host the font files.
- **Body, buttons, guide rows, and quiz answers** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Eyebrows, model IDs, airflow labels, and instrument readouts** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit, a maximum content width of 1520px, 32px desktop gutters, and 20px mobile gutters. Desktop section padding is 120px 0; mobile is 76px 0. Use a 12-column desktop grid with 24px gaps. Keep body measure between 52 and 68 characters, control gaps at 10–12px, and stage-row padding at 24px 0.
- Radius: Use 3px on buttons and inputs, 8px on scene panels and inspectors, and no rounding on major sections or stage-guide rows. Reserve pills for compact airflow legends and circles for transport icon buttons.

## Motion
- On hero entry, fade the copy upward by 14px over 420ms and ease the engine from scale 0.97 and opacity 0 to its final state over 560ms. Rotors and airflow then follow the throttle continuously; there is no separate idle camera spin or decorative background animation.
- Drive every cutaway directly from normalized scroll progress through five explicit keyframes. Interpolate casing opacity, hinge rotation, stage highlight, camera position, and label visibility from the same keyframe records so scrolling cannot drift from the visible engine state.
- Rotate the N1 and N2 groups around the engine X axis at their specified relative speeds. Keep stators, combustor, shafts, and nacelle stationary. Clamp frame delta after tab restoration and use deterministic particle wrapping so returning to the page never causes a jump or burst.
- Enable OrbitControls damping at 0.08 with zoom limited to 0.8×–1.65× of the default camera distance and polar angle limited to 35°–110°. Reset view restores camera, target, and selected stage over 240ms without changing throttle or scroll progress.
- Airflow particles follow two separate deterministic longitudinal paths: the larger bypass annulus remains outside the core and rejoins behind it, while the core stream narrows through compressor rows, expands and shifts from cyan to amber in the combustor, then accelerates through turbine and exhaust. Hide each stream immediately when its legend toggle is off.
- Buttons, stage disclosures, labels, and quiz feedback use 160ms opacity and 2–4px transform transitions. Avoid glitch effects, camera shake, excessive bloom, lens flares, arbitrary part explosions, and unrelated parallax.
- For prefers-reduced-motion, stop rotor and particle loops, remove smoothing and entrance transitions, and update scroll scenes to discrete keyframe states instantly. Throttle changes still update numeric readouts and static flow-path emphasis, and the complete lesson remains usable without animation.

## Imagery
The only hero visual is an original, high-craft procedural Three.js [ENGINE], shown large in three-quarter view with machined metal, a restrained construction grid, fine stage callouts, and a soft contact shadow. The default turbofan must be recognizable immediately through its wide front fan, long nacelle, coaxial compressor and turbine rows, central shafts, annular combustor, and exhaust cone. Casing wedges open progressively to reveal the interior. No photographs, AI-generated images, downloaded 3D models, HDRIs, texture maps, logos, people, or branded objects are used. HTML labels and an SVG leader-line overlay track projected 3D anchors; Lucide supplies only interface icons.

## Tone
Precise, curious, calm, and educational. Use short declarative explanations, concrete mechanical relationships, and honest labels for simplified sample data. The page should feel like a carefully art-directed engineering exhibit, not an aircraft cockpit, military interface, game HUD, or generic technology landing page.

---
Inspired by Kimi 3D Make Showcase — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/jet-engine-interactive-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
