---
name: "Island Postal Route Game"
colors:
  forest_ink: "#24332D"
  letter_paper: "#FFF7E8"
  aged_parchment: "#F1E2C2"
  trail_ochre: "#D7BC8F"
  moss: "#6F8154"
  pine: "#355849"
  copper_leaf: "#B85C3F"
  harvest_amber: "#D88A3D"
  river_blue: "#5F96A0"
  morning_mist: "#D9E4D5"
  stamp_gold: "#F2C66D"
  journal_muted: "#68766C"
typography:
  game_title_shrine_names_sign_text_and_completion_heading: { family: "Fraunces Variable", weights: [600, 700] }
  hud_labels_quest_entries_instructions_buttons_and_status: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base unit. The game is fixed to 100dvh with no document scrolling. Desktop outer gutters are 20px, panel gaps 12px, and card padding 16px. The quest journal is 300px wide. Keep the center and lower-middle view clear for the courier. Mobile gutters are 10px, panel padding 12px, ordinary buttons at least 44px high, the joystick 124px wide, and the action button 76px wide. Respect safe-area insets on every edge."
radius: "Use 16px for journal and modal cards, 12px for compact controls, 10px for small badges, and circular stamp seals. Give cards a 1px Forest ink border and a restrained 3px parchment shadow rather than glass blur. Keep world geometry faceted and angular, with modest bevels only on the courier, post house, and gate timbers."
---

# Island Postal Route Game — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Forest ink** `#24332D` — Primary text, dark buttons, courier trousers, and journal outlines
- **Letter paper** `#FFF7E8` — Quest cards, dialogs, sign faces, and light text on dark controls
- **Aged parchment** `#F1E2C2` — Secondary panels, path-edge details, and inactive stamp paper
- **Trail ochre** `#D7BC8F` — Walking paths, bridge timbers, and sandy island edges
- **Moss** `#6F8154` — Main grass, low shrubs, and soft environmental accents
- **Pine** `#355849` — Distant foliage, tree trunks, and deep landscape contrast
- **Copper leaf** `#B85C3F` — Autumn crowns, roof accents, and small route flags
- **Harvest amber** `#D88A3D` — Courier jacket, tracked-objective highlights, and primary buttons
- **River blue** `#5F96A0` — Stream facets, river-stamp details, and cool atmospheric contrast
- **Morning mist** `#D9E4D5` — Sky, scene fog, and pale distant terrain
- **Stamp gold** `#F2C66D` — Earned stamp seals, gate-ready glow, and completion accents
- **Journal muted** `#68766C` — Secondary labels, distance hints, and inactive objectives on Letter paper

## Typography
- **Game title, shrine names, sign text, and completion heading** — Fraunces Variable (OFL), weights 600/700. Self-host the font files.
- **HUD labels, quest entries, instructions, buttons, and status** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. The game is fixed to 100dvh with no document scrolling. Desktop outer gutters are 20px, panel gaps 12px, and card padding 16px. The quest journal is 300px wide. Keep the center and lower-middle view clear for the courier. Mobile gutters are 10px, panel padding 12px, ordinary buttons at least 44px high, the joystick 124px wide, and the action button 76px wide. Respect safe-area insets on every edge.
- Radius: Use 16px for journal and modal cards, 12px for compact controls, 10px for small badges, and circular stamp seals. Give cards a 1px Forest ink border and a restrained 3px parchment shadow rather than glass blur. Keep world geometry faceted and angular, with modest bevels only on the courier, post house, and gate timbers.

## Motion
- Run gameplay with a fixed 1/60-second simulation step and capped frame delta. Use a simple articulated walk cycle driven by actual travel speed, with opposing arm and leg swings and no root sliding.
- Damp the follow camera and courier heading with frame-rate-independent exponential smoothing. Keep the courier just below center and look slightly ahead along the current path; never use camera shake or forced cinematic camera moves.
- Animate water facets, ribbon chimes, treetop sway, and a few falling leaves at low amplitude. Untracked shrine rings breathe gently, while the tracked shrine uses a steady vertical marker and a readable DOM objective.
- Stamp collection presses the seal inward over 120ms, draws a circular postmark over 260ms, and releases 16 small leaf or paper fragments for 700ms. The two gate leaves swing open over 1.4 seconds after the third stamp without taking control away.
- Use 160–220ms fades and at most 8px translation for panels, help, pause, and completion. With prefers-reduced-motion, stop decorative foliage, water, falling leaves, idle pulses, particles, and panel translations; make stamp and gate state changes immediate while retaining essential walking movement.

## Imagery
Create every visible world element from original Three.js primitives, extruded shapes, custom BufferGeometry, CSS, and inline SVG: the courier, satchel, post house, terrain, paths, trees, river, bridge, three shrines, temple gate, signs, stamps, and particles. Use flat shading, visible facets, soft contact shadows, warm morning light, and Morning mist fog. The default scene uses Moss, Pine, Copper leaf, and Harvest amber; adjust foliage accents when SETTING changes. No photographs, downloaded models, HDRIs, image textures, recognizable landmarks, existing characters, or logos. The live third-person island itself is the first-screen visual anchor; stamps and signs are drawn locally and contain only original English copy.

## Tone
Gentle, pastoral, curious, tactile, and quietly optimistic. Use concise original US English field-journal copy, friendly wayfinding, and small environmental details. There is no combat, health bar, countdown, fail state, punitive copy, epic fantasy lore, paper-crane mascot, or reference to an existing game or AI product.

---
Inspired by Island Postal Route Game — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/island-postal-route-game · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
