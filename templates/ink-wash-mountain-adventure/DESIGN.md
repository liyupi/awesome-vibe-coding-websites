---
name: "Ink Wash Mountain Adventure"
colors:
  sumi_ink: "#171B19"
  soft_ink: "#414B46"
  rain_slate: "#71817D"
  mountain_mist: "#B9C2B8"
  rice_paper: "#EEEAE0"
  aged_paper: "#DDD8CA"
  cinnabar: "#A64232"
  breath_pale: "#D7C993"
  moss_wash: "#667463"
  lightning_paper: "#F7F3E9"
typography:
  game_title_guardian_names_objective_headings_and_completion_display: { family: "Newsreader Variable", weights: [500, 600] }
  hud_labels_instructions_buttons_timers_and_status: { family: "Inter Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base unit. The game is fixed to 100dvh with no document scrolling. Desktop outer gutters are 20px, panel gaps 12px, and paper-panel padding 16px. The objective card is 320px wide and the trial list 220px wide. Keep the traveler and ground immediately ahead clear. Mobile gutters are 10px, panel padding 12px, ordinary buttons at least 44px high, the joystick 124px wide, STRIKE 76px, and DODGE 68px. Respect safe-area insets on every edge."
radius: "Use 2–6px radii and clipped 12px corners on paper panels, 2px on compact bars, and circular guardian seals and touch controls. Avoid generic rounded glass cards. Give panels a 1px Soft ink border, a dry-brush underline drawn in CSS or SVG, and a restrained 3px offset ink shadow. World geometry uses broad angular stone, folded cloth, and irregular hand-built silhouettes rather than glossy toy shapes."
---

# Ink Wash Mountain Adventure — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sumi ink** `#171B19` — Primary text, deep mountain strokes, traveler clothing, and dark controls
- **Soft ink** `#414B46` — Secondary text, near terrain, guardian wood, and ink outlines
- **Rain slate** `#71817D` — Rain streaks, distant ridges, wet-stone reflections, and inactive markers
- **Mountain mist** `#B9C2B8` — Scene fog, middle-distance wash, and disabled details
- **Rice paper** `#EEEAE0` — Sky wash, HUD cards, dialogs, light text on Sumi ink, and shader paper base
- **Aged paper** `#DDD8CA` — Secondary panels, path stone, and quiet separators
- **Cinnabar** `#A64232` — Attack telegraphs, guardian resolve, active objective seals, and primary action accents
- **Breath pale** `#D7C993` — Available stamina fill and ready-combo detail, always paired with a numeric label
- **Moss wash** `#667463` — Sparse pines, bank vegetation, and subdued landscape variation
- **Lightning paper** `#F7F3E9` — Brief restrained sky lift, impact edges, and completion highlights

## Typography
- **Game title, guardian names, objective headings, and completion display** — Newsreader Variable (OFL), weights 500/600. Self-host the font files.
- **HUD labels, instructions, buttons, timers, and status** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. The game is fixed to 100dvh with no document scrolling. Desktop outer gutters are 20px, panel gaps 12px, and paper-panel padding 16px. The objective card is 320px wide and the trial list 220px wide. Keep the traveler and ground immediately ahead clear. Mobile gutters are 10px, panel padding 12px, ordinary buttons at least 44px high, the joystick 124px wide, STRIKE 76px, and DODGE 68px. Respect safe-area insets on every edge.
- Radius: Use 2–6px radii and clipped 12px corners on paper panels, 2px on compact bars, and circular guardian seals and touch controls. Avoid generic rounded glass cards. Give panels a 1px Soft ink border, a dry-brush underline drawn in CSS or SVG, and a restrained 3px offset ink shadow. World geometry uses broad angular stone, folded cloth, and irregular hand-built silhouettes rather than glossy toy shapes.

## Motion
- Run gameplay at a fixed 60Hz and render with interpolation. Use an articulated run cycle driven by actual travel speed, opposing arm and leg swings, short baton follow-through, and no root sliding. Essential player and guardian motion remains readable at every quality level.
- Damp camera position and heading with frame-rate-independent exponential smoothing. Attacks use brief forward lunges and cloth follow-through; dodges use a low controlled lean. Never add camera shake, forced finish cameras, or long hit-stop.
- Every guardian telegraph fills or sharpens over its exact stated duration, locks its danger shape before activation, and disappears on the active frame. Animation windows and collision damage must use the same simulation state, not independent CSS timers.
- Rain falls continuously in a bounded volume, mist layers drift only a few units, and rare lightning gently lifts sky illumination once rather than strobing. Resolving a guardian releases 14 short ink fragments and a single expanding brush ring without pausing input.
- Use 160–220ms fades and at most 8px translation for help, pause, retry, and completion. Combo labels crossfade rather than bounce; Breath and resolve bars interpolate visually over 80ms while their underlying values update immediately.
- With prefers-reduced-motion, reduce rain to sparse slow streaks, stop mist drift, lightning, ink fragments, idle pulses, and panel translations. Keep essential movement, attack poses, and static or filling danger shapes necessary for play, with no camera impulse or flashing.

## Imagery
Create every visible world element from original Three.js primitives, custom BufferGeometry, CSS, and inline SVG: the faceless traveler, paired short practice batons, three mechanical training dummies, stone trail, practice gates, layered ridges, sparse pines, rain, gates, summit circle, and impact marks. Use an original full-screen ink-wash shader over the rendered 3D scene, with no bitmap paper texture. No photographs, downloaded models, HDRIs, image textures, recognizable landmarks, existing characters, or logos. The live playable mountain itself is the first-screen visual anchor; all interface icons and guardian seals are drawn locally.

## Tone
Focused, atmospheric, elegant, restrained, and encouraging. Use concise original US English training copy and quiet environmental detail. Combat is non-gory practice against mechanical dummies, with 'resolve', 'calibrate', and 'form learned' language rather than killing. There is no epic fantasy exposition, long staff, resonance power, bell-foundry quest, licensed character, or reference to an existing game or AI product.

---
Inspired by 铜雨行者 3D Interactive Game — https://www.kimi.com/showcases/3dmake
— Prompt by VibeFather · https://vibefather.ai/t/ink-wash-mountain-adventure · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
