---
name: "Ocean Depth Scroll Explainer"
colors:
  surface: "#9fe0e8"
  sky: "#e8f6f3"
  shallows: "#3fa9c6"
  lagoon: "#1b6e9a"
  dusk: "#0f3e6b"
  indigo: "#0a2546"
  midnight: "#04132a"
  abyssal: "#020914"
  floor: "#010407"
  ink: "#07293b"
  foam: "#e9f5f4"
  mist: "rgba(233,245,244,0.62)"
  hairline: "rgba(233,245,244,0.18)"
  lume: "#79f2d0"
  lure: "#ffcf7a"
typography:
  display_intro_title_chapter_headlines_zone_name_in_gauge_wordmark: { family: "Fraunces", weights: [300, 400] }
  text_lead_chapter_body_lines_buttons_finale_copy: { family: "Manrope", weights: [400, 500, 600] }
  mono_hud_eyebrows_depth_readout_gauge_labels_plate_captions_hints: { family: "DM Mono", weights: [400, 500] }
spacing: "Fixed HUD inset 32px from the edges at ≥ 900px wide, 18px below. Chapters sit inside a 6vw side margin; left and right chapters max-width 560px, centered chapters max-width 760px. Eyebrow → headline gap 20px, headline → body 22px. Mono labels 11px uppercase with 0.18em letter-spacing. Plates: width clamp(260px, 30vw, 460px), 10px inner padding, caption 12px below. Vertical rhythm in multiples of 8px."
radius: "0 on plates, frames and panels. Pill buttons 999px. Cursor ring, gauge marker and glows are circles."
---

# Ocean Depth Scroll Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Surface** `#9fe0e8` — Depth color stop at 0 m; intro water near the waterline
- **Sky** `#e8f6f3` — Intro sky above the waterline (gradient top)
- **Shallows** `#3fa9c6` — Depth stop at 60 m
- **Lagoon** `#1b6e9a` — Depth stop at 200 m
- **Dusk** `#0f3e6b` — Depth stop at 600 m
- **Indigo** `#0a2546` — Depth stop at 1000 m
- **Midnight** `#04132a` — Depth stop at 0.4 × MAX
- **Abyssal** `#020914` — Depth stop at 0.7 × MAX
- **Floor** `#010407` — Depth stop at MAX and the finale background; seabed fill #03090e
- **Ink** `#07293b` — Text on the bright surface (intro and 0–20 m)
- **Foam** `#e9f5f4` — Text from 80 m down, marine snow, cursor ring; between 20 m and 80 m --fg is interpolated Ink→Foam
- **Mist** `rgba(233,245,244,0.62)` — Secondary text, body lines, plate captions, gauge labels (Ink at 70% while --fg is Ink)
- **Hairline** `rgba(233,245,244,0.18)` — Gauge track, plate frames, dividers
- **Lume** `#79f2d0` — The bioluminescent accent: gauge marker, jellyfish and photophore glow, finale organism, focus rings, button dot. Never for text blocks or large fills.
- **Lure** `#ffcf7a` — Only the anglerfish lure bulb and its glow

## Typography
- **Display (intro title, chapter headlines, zone name in gauge, wordmark)** — Fraunces (OFL), weights 300/400. Self-host the font files.
- **Text (lead, chapter body lines, buttons, finale copy)** — Manrope (OFL), weights 400/500/600. Self-host the font files.
- **Mono HUD (eyebrows, depth readout, gauge labels, plate captions, hints)** — DM Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Fixed HUD inset 32px from the edges at ≥ 900px wide, 18px below. Chapters sit inside a 6vw side margin; left and right chapters max-width 560px, centered chapters max-width 760px. Eyebrow → headline gap 20px, headline → body 22px. Mono labels 11px uppercase with 0.18em letter-spacing. Plates: width clamp(260px, 30vw, 460px), 10px inner padding, caption 12px below. Vertical rhythm in multiples of 8px.
- Radius: 0 on plates, frames and panels. Pill buttons 999px. Cursor ring, gauge marker and glows are circles.

## Motion
- Global easing: entrances cubic-bezier(.2,.8,.2,1); everything tied to scroll is scrubbed directly from depth, never time-based. Damping helper damp(a, b, λ, dt) = a + (b − a)(1 − e^(−λ·dt)) for cursor, creature reactions and glow.
- Depth mapping: ScrollTrigger on #dive, start 'top top', end 'bottom top', gives p ∈ [0, 1]. zone i = min(floor(p·N), N−1), u = p·N − i, depth = start_i + u·(end_i − start_i). Before #dive depth = 0; in #finale depth = MAX. All visuals read this one depth value each frame.
- Background color: body background is set every frame by interpolating the stops (0 m Surface, 60 m Shallows, 200 m Lagoon, 600 m Dusk, 1000 m Indigo, 0.4·MAX Midnight, 0.7·MAX Abyssal, MAX Floor) in linear RGB. Stops that are not strictly increasing for a given ZONES list are dropped.
- Chapters fade by zone-local position u: opacity = smoothstep(c−0.16, c−0.08, u) × (1 − smoothstep(c+0.08, c+0.16, u)); translateY = (c − u) × 180px; the headline's second line lags the first by 0.025 in u.
- Plates reveal with clip-path inset(100% 0 0 0) → inset(0) while their top travels from 100% to 60% of the viewport (scrub), the image inside scales 1.12 → 1 and moves −6% → 6% in y across the plate's pass (parallax). Plate filter: t = clamp(depth / 1200, 0, 1); saturate(1 − 0.7t) brightness(1 − 0.5t).
- Canvas loop (requestAnimationFrame, paused when the tab is hidden): marine snow streams upward with scroll velocity, light shafts sway and fade out by 220 m, creatures pulse and react to the cursor, finale glow charges while the pointer is held.
- Readout numbers update every frame with tabular figures; zone name changes slide up through a 1-line mask in 0.45s.
- prefers-reduced-motion: native scroll (no Lenis), chapters crossfade with opacity only (no translate), no plate parallax or clip reveal (plates simply fade in), snow drawn static at 40 particles, no shaft sway, creatures drawn in a still pose with glow on, finale copy shown without needing to hold, custom cursor off.

## Imagery
Six real public-domain photographs from NOAA (via Wikimedia Commons) in the first three zones: kelp from below, kelp and a fish school, bigeye jacks, a deep coral mound, a siphonophore and an Arctic comb jelly. They keep their natural aspect and are only darkened and desaturated by depth through the CSS filter. Everything else is drawn in code: the waterline, sun, light shafts, marine snow, jellyfish, lanternfish, anglerfish, seafloor, finale organism, grain, vignette, cursor and favicon. No people, no divers' faces, no logos.

## Tone
Quiet, precise, slightly poetic. Short declarative sentences, real numbers, no exclamation marks, no hype. Headlines read like captions in a good museum; body lines are one or two sentences of plain science.

---
Inspired by Descent — an interactive scroll journey from the ocean surface to the abyss by @ohmiler — https://ohmiler.github.io/opus-5.5/underwater-journey/
— Prompt by VibeFather · https://vibefather.ai/t/ocean-depth-scroll-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
