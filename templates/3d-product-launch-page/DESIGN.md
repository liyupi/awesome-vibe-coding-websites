---
name: "3D Product Launch Page"
colors:
  void: "#07080B"
  graphite: "#0E1016"
  hairline: "#1C1F27"
  bone: "#ECEAE4"
  ash: "#8A8F9C"
  amber: "#FFB547"
  frost: "#E6F0FF"
  violet: "#9C7CFF"
  rim: "#5C6680"
  light_dynamic: "var(--light), updated from the 3D light color"
typography:
  display_h1_h2_big_spec_numerals: { family: "Space Grotesk", weights: [500, 600] }
  text_body_nav_buttons: { family: "Inter Variable", weights: [400, 500] }
  mono_eyebrows_hud_spec_table_values_chart_labels: { family: "JetBrains Mono", weights: [400, 500] }
spacing: "8px base unit. Content grid: 12 columns, max-width 1280px, 24px gutters, side padding clamp(20px, 5vw, 72px). Type scale: H1 clamp(56px, 9vw, 148px) / line-height 0.92 / letter-spacing -0.04em, weight 500. H2 clamp(36px, 5vw, 72px) / 1.0 / -0.03em, weight 500. Body 17px / 1.6 in Ash, max-width 440px. Eyebrow mono 12px uppercase, letter-spacing 0.14em, color var(--light). Big spec numerals: Space Grotesk 600, clamp(64px, 8vw, 128px), tabular. Hero is 100vh. Each feature chapter is 160vh tall with its copy block starting 30vh from the section top. The spec sheet and preorder sections use natural height with 160px vertical padding (96px on mobile)."
radius: "Buttons and pills 999px. Mobile copy cards, the email input group and HUD panel 14px. Spec table and rules 0 (square, hairline only)."
---

# 3D Product Launch Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#07080B` — Page background, scene background, fog color
- **Graphite** `#0E1016` — Mobile copy cards, input background, header background at 72% opacity
- **Hairline** `#1C1F27` — 1px rules, table lines, borders, inactive chapter dots
- **Bone** `#ECEAE4` — Primary text, primary button fill
- **Ash** `#8A8F9C` — Body copy, secondary labels, mono captions
- **Amber** `#FFB547` — Light stop 'Warm' (2700K); default --light value; hero and preorder light
- **Frost** `#E6F0FF` — Light stop 'Focus' (5000K)
- **Violet** `#9C7CFF` — Light stop 'Night' (ambient)
- **Rim** `#5C6680` — Constant cool rim light behind the lamp in the 3D scene
- **--light (dynamic)** `var(--light), updated from the 3D light color` — Every UI accent: eyebrows, progress line, active chapter dot, button glow, HUD tone swatch, focus rings

## Typography
- **Display (H1, H2, big spec numerals)** — Space Grotesk (OFL), weights 500/600. Self-host the font files.
- **Text (body, nav, buttons)** — Inter Variable (OFL), weights 400/500. Self-host the font files.
- **Mono (eyebrows, HUD, spec table values, chart labels)** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Content grid: 12 columns, max-width 1280px, 24px gutters, side padding clamp(20px, 5vw, 72px). Type scale: H1 clamp(56px, 9vw, 148px) / line-height 0.92 / letter-spacing -0.04em, weight 500. H2 clamp(36px, 5vw, 72px) / 1.0 / -0.03em, weight 500. Body 17px / 1.6 in Ash, max-width 440px. Eyebrow mono 12px uppercase, letter-spacing 0.14em, color var(--light). Big spec numerals: Space Grotesk 600, clamp(64px, 8vw, 128px), tabular. Hero is 100vh. Each feature chapter is 160vh tall with its copy block starting 30vh from the section top. The spec sheet and preorder sections use natural height with 160px vertical padding (96px on mobile).
- Radius: Buttons and pills 999px. Mobile copy cards, the email input group and HUD panel 14px. Spec table and rules 0 (square, hairline only).

## Motion
- Lenis inertial scrolling (duration 1.15, expo-out easing) synced with GSAP ScrollTrigger.
- Scroll-scrubbed 3D choreography: per-section ScrollTriggers (scrub 1.2) tween one shared state object between keyframes. The render loop reads that state every frame.
- Text reveal on enter: every element marked data-reveal goes from opacity 0 / translateY(24px) to 0 / 0 over 0.9s, ease power3.out, stagger 0.08s, triggered at 'top 75%' once.
- Hero intro on load: the canvas fades from black over 1.2s while the lamp's intensity ramps 0 → 1 (power2.inOut). Then H1 lines rise with clip-path inset(100% 0 0 0) → inset(0) over 1.0s, stagger 0.12s, starting at 0.4s.
- Idle life (not scroll-bound): the head breathes ±1.2° with sin(t·0.6), and the camera eases toward the pointer by up to ±0.15 units (lerp 0.05; desktop only).
- --light CSS variable written from the current 3D light color whenever it changes by more than 1/255 per channel. UI accents recolor in sync with the lamp.
- Header progress line: scaleX bound to overall scroll progress, color var(--light).
- Rhythm chapter SVG day curve: stroke-dashoffset scrubbed from full length to 0 across the chapter, with a marker dot following the path.
- Buttons: 200ms transition on box-shadow and transform. Hover adds a var(--light) glow and translateY(-1px).
- prefers-reduced-motion: no Lenis, no scrub, no idle motion, no dust drift, no reveals (content visible immediately). An IntersectionObserver (threshold 0.5) snaps the state to each section's keyframe instantly, and the scene renders only when state changes.

## Imagery
No bitmaps at all. The only visual is the real-time three.js scene: a graphite metal lamp with matte arms on a near-black floor in exponential fog, lit by its own spotlight. A volumetric cone, a bloom halo on the diffuser, faint dust motes and a soft light pool on the floor. A cool rim light outlines the silhouette from behind. UI graphics (wordmark mark, arrows, chapter dots, day-curve chart, favicon) are inline SVG drawn in code.

## Tone
Quiet, confident and precise. Short declarative headlines, concrete numbers, no exclamation marks and no hype words. It should feel like a film title sequence crossed with an engineering datasheet.

---
— Prompt by VibeFather · https://vibefather.ai/t/3d-product-launch-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
