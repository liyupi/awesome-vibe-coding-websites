---
name: "Jelly Squish Physics Toy"
colors:
  studio_cream: "#faf4e9"
  peach_wash: "#f0ded1"
  ink: "#443d37"
  muted_clay: "#786b60"
  edition_accent: "[ACCENT]"
  plate_ivory: "#fffaf0"
typography:
  display_headline_and_wordmark: { family: "Fraunces", weights: [500, 600] }
  body_controls_and_measurements: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "Desktop: 40px outer gutters, centered content max-width 1360px, 24px header padding. Hero intro sits upper left and the large stage occupies the center-right; control tray is centered beneath the object. Use an 8px spacing grid, 16px compact gaps and 24px tray gaps. Mobile: 20px gutters, header 58px, headline 40px, intro 14px, scene 300–340px tall; place the complete first interaction controls within or very near a 390×844 viewport. Do not create a tall blank gap before the object."
radius: "Control tray 24px, buttons and flavor chips 999px, small instruction labels 8px. Use thin #d8cabe borders and soft warm shadows rather than many cards."
---

# Jelly Squish Physics Toy — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Studio cream** `#faf4e9` — Main page and warm studio background
- **Peach wash** `#f0ded1` — Stage horizon and subtle surface gradient
- **Ink** `#443d37` — Main text and strongest outlines
- **Muted clay** `#786b60` — Secondary copy with readable contrast
- **Edition accent** `[ACCENT]` — Primary button, active flavor outline, focus state and slider thumb
- **Plate ivory** `#fffaf0` — Glazed ceramic plate and control tray

## Typography
- **Display headline and wordmark** — Fraunces (OFL), weights 500/600. Self-host the font files.
- **Body, controls and measurements** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Desktop: 40px outer gutters, centered content max-width 1360px, 24px header padding. Hero intro sits upper left and the large stage occupies the center-right; control tray is centered beneath the object. Use an 8px spacing grid, 16px compact gaps and 24px tray gaps. Mobile: 20px gutters, header 58px, headline 40px, intro 14px, scene 300–340px tall; place the complete first interaction controls within or very near a 390×844 viewport. Do not create a tall blank gap before the object.
- Radius: Control tray 24px, buttons and flavor chips 999px, small instruction labels 8px. Use thin #d8cabe borders and soft warm shadows rather than many cards.

## Motion
- The deformation itself is the main animation; avoid perpetual floating or camera rotation. The jelly rests visibly on its plate.
- Model a closed, non-watermelon fluted dome with approximately 16–20 latitude rings and 40–48 longitudinal nodes. Use a position/velocity or Verlet mass-spring solver with structural and diagonal neighbor constraints, damped rest-shape restoring forces and stable fixed-timestep substeps. Update the actual BufferGeometry positions and normals after solving; highlights must follow the deformed surface.
- Use bounded steps, velocity clamping and enough solver iterations to keep rapid dragging stable. Soft volume or radial restoration preserves a recognizable dessert silhouette. The lower ring can slide/compress against the plate rather than falling through it. Nearby rings should follow the grabbed node with smoothly decreasing influence.
- Pointer-down raycasts onto the mesh and grabs a local vertex cluster in a camera-facing drag plane. Moving drags the cluster toward the pointer with spring force, allowing a clear local indentation or stretch; release removes the grab and produces damped oscillation. A quick click or tap applies a short inward impulse. Clamp extreme stretch to keep the shape recoverable.
- Drop it releases the jelly from about one jelly-height above the plate; gravity, collision, compression and damped rebound visibly change the mesh before it settles. The button must work repeatedly. The stiffness range maps to solver restoration and damping so its endpoints feel clearly different, without numerical explosions.
- Reduced-motion preference disables decorative transitions and reduces drop height, impulse amplitude and rebound duration, while retaining deliberate direct manipulation. Pause simulation when hidden; cap device pixel ratio at 1.75 desktop and 1.5 mobile. Use touch-action none only on the stage, not the whole page.

## Imagery
Create all visuals procedurally in Three.js. Jelly is an original rounded, fluted pudding dome, about 2.6 units wide and 1.8 high, with soft scalloped edges and a small top dimple. Use a translucent MeshPhysicalMaterial or equivalent physically shaded material: roughness around 0.13, clearcoat 1, transmission around 0.45, thickness around 0.8, and color from the active flavor. A few subtle bubbles can follow nearby deformation nodes but no seeds or rind. Use a code-built ivory plate with two soft concentric rims, a warm floor, contact shadow, large soft key light upper left and muted rim light. Build any reflection environment locally using Three.js RoomEnvironment or code-drawn CanvasTexture. Include a restrained fine studio grain in CSS. No external photograph, generated image, watermelon wedge, identifiable logo or copied composition.

## Tone
Warm, lightly humorous, tactile and concise. Never describe health benefits or make wellness claims.

---
Inspired by Watermelon Jelly Squishy soft-body study by @UPGPTs Team — https://upgpts.com/en/tutorials/chatgpt/gpt-6.1-sol-test-cases
— Prompt by VibeFather · https://vibefather.ai/t/jelly-squish-physics-toy · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
