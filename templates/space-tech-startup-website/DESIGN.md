---
name: "Space Tech Startup Website"
colors:
  void: "#05070d"
  panel: "#0b111c"
  panel_raise: "#101826"
  star_white: "#e9eef6"
  dim: "#8a97ab"
  hairline: "rgba(233,238,246,0.14)"
  signal: "#4db8ff"
  signal_orb: "rgba(77,184,255,0.28)"
typography:
  display_wordmark_tracked_caps_headlines_milestone_names_investor_names: { family: "Space Grotesk", weights: [500, 700] }
  text_body_copy_buttons_captions: { family: "Inter", weights: [400, 500] }
  mono_eyebrows_telemetry_labels_spec_table_statuses_small_print: { family: "Space Mono", weights: [400, 700] }
spacing: "8px rhythm. Sections py-28 (desktop) / py-16 (mobile); container max-w-[1120px] px-6 (px-5 mobile). Hero min-h-[100vh], content vertically centered. Panels p-8 (p-5 mobile). Mono eyebrows 12px uppercase, letter-spacing 0.2em. Headline tracking 0.04em on caps, -0.01em on sentence case. Telemetry labels 11px."
radius: "2px on chips and buttons, 8px on panels and cards, 0 on the spec table and rules. Everything else is circles (nodes, stars, pings) or hairlines. No pills."
---

# Space Tech Startup Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#05070d` — Page ground everywhere; near-black with a faint blue cast
- **Panel** `#0b111c` — Raised panel fill (spec table, milestone cards, globe disc)
- **Panel raise** `#101826` — Panel hover fill, abstract landmasses on the globe
- **Star white** `#e9eef6` — Primary text, headline fills, satellite bodies
- **Dim** `#8a97ab` — Secondary text, scheduled chips, muted mono labels
- **Hairline** `rgba(233,238,246,0.14)` — 1px rules, graticule lines, panel borders, orbit lines at rest
- **Signal** `#4db8ff` — The single accent: telemetry trails, downlink beam, station pings, complete chips, buttons, focus rings, links
- **Signal orb** `rgba(77,184,255,0.28)` — Orbit ellipse strokes, coverage arcs, thin envelope rings

## Typography
- **Display (wordmark, tracked-caps headlines, milestone names, investor names)** — Space Grotesk (OFL), weights 500/700. Self-host the font files.
- **Text (body copy, buttons, captions)** — Inter (OFL), weights 400/500. Self-host the font files.
- **Mono (eyebrows, telemetry labels, spec table, statuses, small print)** — Space Mono (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px rhythm. Sections py-28 (desktop) / py-16 (mobile); container max-w-[1120px] px-6 (px-5 mobile). Hero min-h-[100vh], content vertically centered. Panels p-8 (p-5 mobile). Mono eyebrows 12px uppercase, letter-spacing 0.2em. Headline tracking 0.04em on caps, -0.01em on sentence case. Telemetry labels 11px.
- Radius: 2px on chips and buttons, 8px on panels and cards, 0 on the spec table and rules. Everything else is circles (nodes, stars, pings) or hairlines. No pills.

## Motion
- Global clock: one rAF loop drives satellites, pings and telemetry; entrances use cubic-bezier(.2,.8,.2,1); anything scroll-tied is scrubbed, never time-based.
- Star field: layer A drifts -1.2 px/s with 0.12x scroll parallax, layer B -2.4 px/s at 0.3x; 12 layer-B stars twinkle (alpha x 0.6-1, sine, 2-5 s periods). Deterministic seeded layout.
- Orbit diagram: satellites move at constant angular speeds 0.175, 0.108 and 0.075 rad/s on orbits 1-3 (stylized, not Keplerian); trails are 70-degree fading dashes behind each satellite; the innermost satellite fires a downlink beam and expanding ground ring while inside a 44-degree window on the planet-facing side.
- Telemetry tick: value labels update every 900 ms with deterministic jitter (velocity 7.55-7.63 km/s, link 112-136 kbps); the pass label loops 42:00 down to 00:00; a 'SIMULATED TELEMETRY' label always sits under the diagram.
- Section entrances: eyebrow, headline, body rise 20px and fade over 0.6 s, 90 ms stagger, once.
- Manifest rail: the 2px rail line scales from 0 to 1 (transform-origin top) scrubbed to the section's scroll progress; a milestone's ring fills Signal and its chip pops when the node crosses the viewport center.
- Hover micro-interactions: buttons raise background to Signal at 12% white blend; spec rows highlight with a Signal-orb left rule; nav links brighten from Dim to Star white.
- prefers-reduced-motion: star field rendered as a static single frame (no drift, twinkle at fixed 0.8 alpha), satellites at fixed t = 0 angles with trails drawn, telemetry static at initial values, rail fully drawn with all rings at final state, entrances as opacity-only fades.

## Imagery
Everything is drawn in code: the star field (canvas, seeded), the orbit diagram, planet graticule and satellites (SVG), the coverage globe with abstract landmasses (SVG), ping rings (SVG + CSS), chips and rules (CSS), and the favicon (hand-written SVG). No photographs, no people, no logos, no flags, no downloaded imagery. The palette is strictly the eight tokens; Signal blue is the only accent.

## Tone
Mission-control calm. Short declarative sentences, tracked-caps labels, concrete sample numbers, no exclamation marks, no cosmic cliches. The copy sounds like a good flight director briefing a customer.

---
— Prompt by VibeFather · https://vibefather.ai/t/space-tech-startup-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
