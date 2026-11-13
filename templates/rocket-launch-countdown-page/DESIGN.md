---
name: "Rocket Launch Countdown Page"
colors:
  sky: "#07080C"
  ink: "#E7E4DC"
  muted: "#9A9488"
  panel: "#12141A"
  line: "#2A2E36"
  sodium: "#E7A04A"
  cyan: "#7EE0E6"
  copper: "#C4895A"
  rocket: "#243044"
  shell: "#C9CDD4"
  pad: "#3C3832"
  ground: "#100E0C"
typography:
  display_countdown_numerals_h1_h2_stat_values_wordmark: { family: "Big Shoulders Display", weights: [500, 700, 800] }
  text_body_buttons_deck_faq_form: { family: "Outfit", weights: [400, 500, 600] }
  mono_eyebrows_telemetry_timeline_times_unit_labels_status: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base. Header 56px. Flight section min-height calc(100vh - 56px). Aside padding 28px 32px on desktop and 20px 20px 8px under 1024px. Lower sections use a 1120px container, 40px side padding on desktop, 20px on mobile, and 96px vertical padding on desktop (64px on mobile). Gap between aside blocks is 14px."
radius: "2px on buttons, inputs, timeline rows, the drag chip, and cards. Countdown cells and the header are square. No pills."
---

# Rocket Launch Countdown Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sky** `#07080C` — Page background, canvas clear color, fog, primary-button text, footer
- **Ink** `#E7E4DC` — Headings, countdown numerals, body text, scrubber thumb
- **Muted** `#9A9488` — Secondary text, unit labels, inactive timeline rows, placeholders
- **Panel** `#12141A` — Inputs, active timeline row, drag chip, watch card, fact cells
- **Line** `#2A2E36` — 1px borders, countdown rules, telemetry dividers, header border
- **Sodium** `#E7A04A` — Tower lamps, plume outer color, form error text. The warm practical light
- **Cyan** `#7EE0E6` — The single cold accent: links, focus, primary button, active phase, replay kicker, payload lamp
- **Copper** `#C4895A` — The one band on the first stage, the fin edge, and the umbilical
- **Rocket** `#243044` — First-stage body and the three fins
- **Shell** `#C9CDD4` — Second stage and the ogive shell
- **Pad** `#3C3832` — Concrete square under the vehicle
- **Ground** `#100E0C` — The ground disc around the pad

## Typography
- **Display: countdown numerals, H1, H2, stat values, wordmark** — Big Shoulders Display (OFL), weights 500/700/800. Self-host the font files.
- **Text: body, buttons, deck, FAQ, form** — Outfit (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrows, telemetry, timeline times, unit labels, status** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Header 56px. Flight section min-height calc(100vh - 56px). Aside padding 28px 32px on desktop and 20px 20px 8px under 1024px. Lower sections use a 1120px container, 40px side padding on desktop, 20px on mobile, and 96px vertical padding on desktop (64px on mobile). Gap between aside blocks is 14px.
- Radius: 2px on buttons, inputs, timeline rows, the drag chip, and cards. Countdown cells and the header are square. No pills.

## Motion
- One flight clock t in seconds, from 0 to 64, lives in React state. While playing, a requestAnimationFrame loop adds min(0.05, dt) and stops at 64 by setting playing false. Telemetry, the timeline, the scrubber, and the 3D pose are all pure functions of that same t. Do not simulate gravity.
- Idle spin: while t is 0, playing is false, the pointer has not interacted, and reduced motion is off, the vehicle group's yaw increases at 0.12 rad/s. The pad and tower do not spin. The first pointerdown on the canvas sets interacted and the spin stays off until Replay, which zeros yaw and clears interacted.
- Drag: drei OrbitControls, enabled only when t is 0 and playing is false. enablePan false, enableDamping true, dampingFactor 0.08, rotateSpeed 0.7, zoomSpeed 0.6, minDistance 14, maxDistance 34, minPolarAngle 0.5, maxPolarAngle 1.2, target [0, 6.4, 0]. Do not call listenToKeyEvents. The canvas wrapper uses touch-action: none. On OrbitControls start, set interacted.
- Scripted camera, linear interpolation between knots (t, position xyz, lookAt xyz). Clamp outside the ends. Snap; do not ease from the orbit pose. Knots: 0 → pos [8.8, 4.8, 22] look [0, 6.4, 0]; 12 → [9.2, 5.6, 22] / [0, 7.4, 0]; 18 → [11, 8, 21] / [0.2, 10, -1.5]; 36 → [13, 9.5, 18] / [1.2, 12.4, -3]; 44 → [12, 9, 18] / [0.2, 13.2, -4]; 52 → [13, 8.5, 20] / [0, 14.6, -4.5]; 60 and 64 → [15, 9, 22] / [0, 15.4, -5]. While scripted, OrbitControls enabled is false and controls.update is not called.
- Vehicle pose is a diorama. Telemetry kilometers are not the model's height. Climb from t 12 to 36: u = clamp((t-12)/24, 0, 1), s = u*u*(3-2*u), y = s*6, z = s*-3, pitch = s*0.16. Before t 12 the stack is at the origin. After t 36 the upper stage continues: u2 = clamp((t-36)/24, 0, 1), s2 = u2*u2*(3-2*u2), y = 6+s2*3, z = -3+s2*-2, pitch = 0.16+(0.05-0.16)*s2. The booster from t 36 to 50: p = clamp((t-36)/14, 0, 1), y = 6-p*4, x = p*2.8, z = -3, pitch 0.16, roll z = p*0.4, opacity 1-p, hidden at t >= 50.
- Plume, arm, shell, puff, all functions of t: stage-1 plume visible for 8 <= t < 36; stage-2 plume for 37.5 <= t < 54. While playing and not reduced, plume scale.y = 1 + sin(t*40)*0.06 + sin(t*17)*0.03; otherwise scale.y is 1. Umbilical rotation.z goes from 0 to -0.8 linearly across t 8 to 11. Shell halves swing from 0 to 1.15 rad across t 44 to 48 and hold. A sodium puff sphere sits at world [0, 13.75, -3], visible only for 36 <= t < 38, scale lerps 0.6 to 2.4 and opacity 0.45 to 0.
- UI motion is short. The drag chip fades over 300ms after the first interaction. The FAQ answer uses grid-template-rows 0fr to 1fr over 200ms. The primary button scales to 0.98 on active. The status dot pulses opacity 1 to 0.4 over 1.6s only while playing. No scroll-jacking, no page transitions, no marquee, no custom cursor.
- prefers-reduced-motion: no idle spin, no plume flicker, no dot pulse, no chip fade, FAQ snaps open, button does not scale. Playback does not interpolate. Hide the scrubber. The play control becomes Next still and cycles t through 0, 12, 36, 52, then back to 0, snapping the pose. Timeline clicks snap to that phase start. If reduced motion turns on mid-play, pause and snap to the greatest of those four times that is still <= t. Do not autoplay the flight when reduced motion is on. Camera and model pose still follow pose(t); they just do not animate between values.

## Imagery
No photographs, no HDRIs, no downloaded models, and no texture URLs. The first screen is the code-built rocket: it fills the canvas, which is the full height under the header on desktop and 62vh on mobile. Night sky is the clear color #07080C plus THREE.Fog #07080C near 34 far 72 and 360 stars. Lighting is code only: hemisphere sky #1A3344 ground #3A2A18 intensity 0.35, ambient #8EA0B0 intensity 0.18, a cool directional #C9D7E0 intensity 0.35 at [-16, 22, 10] with a 1024 shadow map (orthographic bounds -20 to 20, near 0.5 far 80, bias -0.0004), and sodium point lights on the tower and pad (color #E7A04A, intensity about 10, distance about 12, decay 2, no shadow). The rocket body is slate #243044 with one copper band #C4895A, a fog-gray upper stage #C9CDD4, three plain triangular fins, and one bell per stage. The plume is two additive cones, core #FFF6E4 and outer #E7A04A. The only cyan in the 3D scene is a small emissive panel on the payload, #7EE0E6, revealed when the shell opens. No letters, flags, patches, or logos on any mesh. Tone mapping ACESFilmic, exposure 1.05, output SRGB. Canvas dpr [1, 1.5], antialias true, alpha false, fov 34, near 0.1, far 160.

## Tone
Calm and concrete, like a small range console. Short sentences, named people, real figures. No slogans, no hype, no webcast catchphrases.

---
— Prompt by VibeFather · https://vibefather.ai/t/rocket-launch-countdown-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
