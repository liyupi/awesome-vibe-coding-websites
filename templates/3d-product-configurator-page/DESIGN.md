---
name: "3D Product Configurator Page"
colors:
  paper: "#F3F1EC"
  stage: "#FBFAF7"
  stage_edge: "#E3DFD6"
  surface: "#FFFFFF"
  surface_2: "#F8F7F3"
  ink: "#17181B"
  muted: "#6B6A66"
  line: "#DCD8CF"
  line_strong: "#A9A59C"
  accent_graphite_default: "#3557D4"
  footer: "#17181B"
  footer_text: "#ECE9E2"
typography:
  display_h1_product_name_h2s_big_stat_numbers_odometer_total: { family: "Bricolage Grotesque Variable", weights: [600, 700] }
  text_body_buttons_option_names_spec_values_faq: { family: "Inter Variable", weights: [400, 500, 600] }
  mono_eyebrows_step_numbers_price_deltas_part_numbers_readouts_character_counter_uppercase_eyebrows_with_0_14em_tracking: { family: "JetBrains Mono", weights: [400, 500] }
  engraving_style_serif_only_canvas_texture_and_its_segmented_control_label: { family: "Instrument Serif", weights: [400] }
spacing: "8px base. Container max 1200px with 48px side padding on desktop, 20px on mobile. Sections below the stage use 128px vertical padding on desktop, 80px on mobile. Configurator panel padding 24px, gap 28px between steps. Header 64px desktop, 56px mobile."
radius: "Panel and drawer 20px (drawer only on its left corners), review cards 16px, option cards and inputs 12px, buttons 999px (pill), swatches and badges fully round, part label pills 999px."
---

# 3D Product Configurator Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F3F1EC` — Page background, header background (at 86% with 10px backdrop blur once scrolled)
- **Stage** `#FBFAF7` — Center of the stage radial backdrop
- **Stage Edge** `#E3DFD6` — Outer edge of the stage radial backdrop; contact shadow sits on this tone
- **Surface** `#FFFFFF` — Configurator panel (at 94%), review cards, cart drawer, spec table rows
- **Surface 2** `#F8F7F3` — Input fields, inactive segmented control, odometer well, cart line thumbnail well
- **Ink** `#17181B` — Headings, body text, primary icons, label pills text
- **Muted** `#6B6A66` — Secondary text, captions, spec labels, mono eyebrows
- **Line** `#DCD8CF` — 1px borders, table rules, dividers
- **Line Strong** `#A9A59C` — 3D leader lines, input borders on hover, unselected radio rings
- **Accent (Graphite, default)** `#3557D4` — CSS var --accent. Follows the chosen finish: Chalk #96643B, Graphite #3557D4, Signal #C94A22, Lagoon #1E6F6B. Used for the Add to cart button, selected rings and borders, focus rings, star icons, cart badge, odometer underline, active part badge. Transitions over 400ms when the finish changes.
- **Footer** `#17181B` — Footer background
- **Footer Text** `#ECE9E2` — Footer text; links at 70% opacity, 100% on hover

## Typography
- **Display: H1 product name, H2s, big stat numbers, odometer total** — Bricolage Grotesque Variable (OFL), weights 600/700. Self-host the font files.
- **Text: body, buttons, option names, spec values, FAQ** — Inter Variable (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrows, step numbers, price deltas, part numbers, readouts, character counter (uppercase eyebrows with 0.14em tracking)** — JetBrains Mono (OFL), weights 400/500. Self-host the font files.
- **Engraving style 'Serif' only (canvas texture and its segmented-control label)** — Instrument Serif (OFL), weights 400. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Container max 1200px with 48px side padding on desktop, 20px on mobile. Sections below the stage use 128px vertical padding on desktop, 80px on mobile. Configurator panel padding 24px, gap 28px between steps. Header 64px desktop, 56px mobile.
- Radius: Panel and drawer 20px (drawer only on its left corners), review cards 16px, option cards and inputs 12px, buttons 999px (pill), swatches and badges fully round, part label pills 999px.

## Motion
- Easing tokens: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for drawers, reveals and fades; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the FAQ accordion; GSAP 'power2.inOut' for explode curves. Nothing bounces except the 240ms cart badge pop.
- Model idle spin: yaw increases at 0.18 rad/s while phase is 'configure' and the user has not touched the canvas for 6 s; it stops immediately on pointerdown.
- Drag rotate (custom hook useDragRotate, not OrbitControls, so the page can still scroll on touch): pointer drag on the canvas wrapper sets yaw += dx × 0.008 and pitch += dy × 0.005, pitch clamped to [-0.35, 0.35] rad. On release the yaw velocity carries on and decays with velocity *= exp(-dt × 4). Wrapper has touch-action: pan-y so vertical swipes scroll the page and horizontal swipes rotate. Cursor grab / grabbing. Left and Right arrow keys rotate 15° when the wrapper is focused.
- Option changes: every material color, roughness, sheen and bump scale damps toward its target with value += (target - value) × (1 - exp(-dt × 9)), about 350ms to settle. The accent CSS variable transitions with a 400ms color transition on elements that use it.
- Price odometer: each digit is a 1em-tall overflow-hidden column of 0–9 that translates to -digit × 10% over 380ms cubic-bezier(0.2, 0.8, 0.2, 1); a 2px accent underline under the total flashes from opacity 0 to 1 and back over 500ms on change.
- Exploded view (desktop): a GSAP ScrollTrigger on #product (start 'top top', end 'bottom bottom', scrub 0.6) writes p ∈ [0, 1] to sceneRef. e = power2.inOut(clamp((p - 0.25) / 0.30)) while p < 0.55, e = 1 for 0.55 ≤ p ≤ 0.75, e = power2.inOut(1 - clamp((p - 0.75) / 0.20)) after. Each part i (0–7, in the label order) uses e_i = power2.inOut(clamp(e × 1.4 - i × 0.05, 0, 1)) so parts leave in sequence. Positions = assembled + offset × e_i, computed in useFrame.
- Phase transitions driven by p: 0–0.15 configure; 0.15–0.25 the panel and hero headline fade out and move 24px right, the model group slides from x -0.7 to x 0 and the camera dollies from z 6.2 to z 7.6; 0.25–0.75 the inside headline is visible; during 0.55–0.75 the model turns an extra 0.44 rad; 0.95–1 phase becomes 'after'. Within the inside phase the model yaw blends to -0.6 rad and pitch to 0.14 rad with weight w = smoothstep(0.15, 0.25, p) × (1 - smoothstep(0.95, 1, p)), so the user's own rotation returns when scrolling back up.
- Part labels: label i fades in (opacity and 8px rise) as e_i passes 0.6 → 1.0 and fades out in reverse; its leader line uses the same opacity.
- Reveals below the stage: elements with data-reveal start at opacity 0 and translateY(24px) and animate to rest over 700ms --ease-out when their top crosses 85% of the viewport (ScrollTrigger.batch, once), siblings staggered 80ms.
- Cart drawer: slides from translateX(100%) to 0 over 380ms --ease-out, backdrop #17181B at 0 → 35% over 300ms. Cart badge pops scale 1 → 1.25 → 1 over 240ms on add.
- Drag hint chip pulses its icon (rotate -12° → 12°, 1.6s ease-in-out, infinite) and fades out after the first drag. Scroll cue chevron bobs 6px over 2s infinite.
- prefers-reduced-motion: no idle spin, no drag inertia (rotation stops on release), option changes apply instantly, odometer swaps digits without sliding, no reveals (content visible), no bobbing or pulsing, drawer appears with a 150ms opacity fade only. The exploded view becomes a still diagram: e is a step function (e = 1 for 0.25 ≤ p ≤ 0.75, else 0) applied with no interpolation and no stagger, labels appear at full opacity together, the extra 0.44 rad turn is skipped, and the panel and headlines switch instantly at p 0.2.

## Imagery
No photos and no 3D files. The headphones are built from three.js primitives (LatheGeometry, TorusGeometry, TubeGeometry along a CatmullRomCurve3, CylinderGeometry, drei RoundedBox) with MeshPhysicalMaterial; the engraving and the knit-mesh bump pattern are CanvasTextures; swatch and cushion previews are CSS. Lighting: <Environment resolution={256} frames={1}> containing four drei Lightformers — rect, intensity 2.2, position [0, 4, 2], rotation-x π/2, scale [8, 2] (top softbox); rect, intensity 1.2, position [-5, 1, 1], rotation-y π/2, scale [2, 6] (left strip); rect, intensity 1.6, position [5, 1, -1], rotation-y -π/2, scale [2, 6] (right rim); ring, intensity 0.8, position [0, 0.5, 6], scale 3 (front fill) — plus ambientLight 0.25 and directionalLight [3, 5, 4] intensity 1.4, no shadow maps. drei <ContactShadows position={[0, -1.32, 0]} opacity={0.38} scale={6} blur={2.6} far={2.2} resolution={512} color='#2a2620'>. Stage backdrop: radial-gradient(ellipse 70% 60% at 50% 45%, #FBFAF7 0%, #ECE9E2 60%, #E3DFD6 100%). Icons are Lucide, 1.75px stroke. The model carries no logo, letters or marks except the visitor's own engraving.

## Tone
Calm, precise and practical, like a well-labeled workshop. Short sentences, real numbers, no superlatives; technical labels in mono, warmth in the reviews.

---
— Prompt by VibeFather · https://vibefather.ai/t/3d-product-configurator-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
