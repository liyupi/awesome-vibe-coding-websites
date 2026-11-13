---
name: "Carbon Cycle Scroll Explainer"
colors:
  night_indigo: "#160F3D"
  dusk_violet: "#3B1F7A"
  horizon_ember: "#FF8A3D"
  deep_teal: "#06535F"
  abyss: "#03252C"
  molten_orange: "#FF6A1A"
  acid_lime: "#C6FF3D"
  glow_cyan: "#5CE1E6"
  ember_pink: "#FF3D7F"
  forest: "#0E6B4A"
  strata_rust: "#7A3A1E"
  strata_umber: "#4A2418"
  coal_black: "#120B0A"
  mist: "#F3EEFF"
  lavender_gray: "#B9B0E0"
typography:
  display_hero_headline_step_titles_section_headings_big_readout_tight_tracking_0_02em_line_height_0_95_for_hero_1_05_for_others: { family: "Bricolage Grotesque (variable)", weights: [700, 800] }
  body_text_card_copy_faq_buttons_18px_desktop_17px_mobile_line_height_1_55: { family: "Atkinson Hyperlegible", weights: [400, 700] }
  numbers_stock_labels_year_counter_illustrative_tags_axis_ticks_uppercase_for_tags_with_0_08em_tracking: { family: "JetBrains Mono", weights: [500] }
spacing: "8px base grid. Content max-width 1200px with 6vw side padding on desktop and 16px gutters on mobile. Sections are separated by 160px (desktop) / 96px (mobile). Hero headline 112px desktop / 52px mobile (clamp(52px, 8vw, 112px)); section headings clamp(36px, 5vw, 64px); step titles 40px desktop / 28px mobile."
radius: "Cards and step panels 20px; buttons and chips fully rounded (999px); slider track 999px; ledger bars 6px. The scene itself is full-bleed with no radius."
---

# Carbon Cycle Scroll Explainer — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Night Indigo** `#160F3D` — Page background, upper sky, card fill (at 90% opacity over the scene)
- **Dusk Violet** `#3B1F7A` — Mid sky gradient stop, section bands, slider track
- **Horizon Ember** `#FF8A3D` — Low sky glow band just above the horizon, sun disk rim
- **Deep Teal** `#06535F` — Ocean surface layer, ledger section background
- **Abyss** `#03252C` — Deep ocean layer, footer background
- **Molten Orange** `#FF6A1A` — Human-driven flow (fossil burning) particles and stroke, primary CTA fill, High-emissions curve
- **Acid Lime** `#C6FF3D` — Biosphere flows (photosynthesis), slider thumb, active step marker, Rapid-cuts curve, focus rings
- **Glow Cyan** `#5CE1E6` — Ocean exchange particles, links, Current-path curve
- **Ember Pink** `#FF3D7F` — Warming tint target for the sky in the scenario lab, warning highlight on the net-change bar
- **Forest** `#0E6B4A` — Hills and tree bodies (trees use Forest with Acid Lime tops)
- **Strata Rust** `#7A3A1E` — Upper rock band
- **Strata Umber** `#4A2418` — Middle rock band
- **Coal Black** `#120B0A` — Fossil seams and lower rock band
- **Mist** `#F3EEFF` — Body and heading text on dark grounds (AA+ on Night Indigo and Deep Teal)
- **Lavender Gray** `#B9B0E0` — Secondary text, axis labels, captions (AA on Night Indigo)

## Typography
- **Display: hero headline, step titles, section headings, big readout. Tight tracking -0.02em, line-height 0.95 for hero, 1.05 for others.** — Bricolage Grotesque (variable) (OFL), weights 700/800. Self-host the font files.
- **Body text, card copy, FAQ, buttons. 18px desktop / 17px mobile, line-height 1.55.** — Atkinson Hyperlegible (OFL), weights 400/700. Self-host the font files.
- **Numbers, stock labels, year counter, Illustrative tags, axis ticks. Uppercase for tags with 0.08em tracking.** — JetBrains Mono (OFL), weights 500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Content max-width 1200px with 6vw side padding on desktop and 16px gutters on mobile. Sections are separated by 160px (desktop) / 96px (mobile). Hero headline 112px desktop / 52px mobile (clamp(52px, 8vw, 112px)); section headings clamp(36px, 5vw, 64px); step titles 40px desktop / 28px mobile.
- Radius: Cards and step panels 20px; buttons and chips fully rounded (999px); slider track 999px; ledger bars 6px. The scene itself is full-bleed with no radius.

## Motion
- Load: the scene fades in from Night Indigo over 600ms, then the hero headline lines rise 24px and fade in with a 90ms stagger (power3.out, 700ms). Particles start immediately; there is no static first frame.
- Particle clock: one requestAnimationFrame loop in flows.ts drives every flow. Each flow is an SVG path sampled once into 240 points (Float32Array, via getPointAtLength at init). Each particle i of a flow sits at u = (time * speed + i / count) mod 1 and is drawn as a circle of radius 2.5 to 4px with a soft glow (an feGaussianBlur stdDeviation 2 filter on the flow group). count = clamp(round(value / 3), 3, 44); speed = 0.05 + value / 1500 cycles per second. Every guide path is also stroked at 25% opacity, 1.5px, dash 2 6.
- The loop pauses when the story section is fully offscreen (IntersectionObserver) and when document.hidden is true.
- Camera: a GSAP timeline scrubbed across the story track (scrub 0.6) tweens a proxy {x, y, w, h} through one keyframe per step and writes it to the scene's viewBox in onUpdate. Keyframes are listed in the story section.
- Step activation: each step panel has a ScrollTrigger (start 'top 60%', end 'bottom 40%'); the active panel is opacity 1, inactive panels 0.3; the active reservoir in the scene gets a 3px Acid Lime outline glow that fades in over 400ms, and its row in the reservoir gauge highlights.
- Industrial era: a second scrubbed tween drives a value industry 0 to 1 across step 5; the fossil-burning flow's stroke width goes 1px to 7px, its particle count 3 to 40, its speed x3, and the year counter interpolates 1850 to 2025 (rounded to whole years).
- Counters: the atmosphere stock in step 6 counts 600 to 900 with the scroll (scrubbed, whole numbers, tabular-nums).
- Ledger bars grow from 0 to their width over 900ms (power2.out) with a 120ms stagger when the ledger enters the viewport (once).
- Scenario curve: dragging the slider interpolates the projection path between the two neighbouring scenario point arrays every input event; on release the thumb snaps to the nearest stop and the path tweens to that scenario over 500ms (power2.inOut) using the same interpolation. The readout number tweens with it; the sky tint variable --heat (0, 0.45, 1 for the three stops) tweens alongside.
- Buttons: hover lifts 2px and brightens 8%; press scales 0.97. FAQ items expand with a 280ms height transition and the plus icon rotates 45 degrees.
- prefers-reduced-motion: no camera tweens and no scrub. Each step snaps the viewBox to its keyframe instantly when it becomes active (stepped static scenes). Particles are not animated: each flow is drawn as a static dashed stroke with arrowheads, width scaled by value. Counters show their end values. Slider updates the curve instantly without tweening. Load fade-ins are removed.

## Imagery
No photographs and no bitmap images. Everything is drawn in code as flat, layered vector shapes with a visible grain: one SVG feTurbulence (baseFrequency 0.9, numOctaves 2) noise rect over the whole scene at 9% opacity with mix-blend-mode overlay, plus a CSS grain overlay on section backgrounds using the same SVG filter as a data URL. Shapes are poster-like: bold silhouettes, no outlines, at most three tones per object, no gradients except the sky and the ocean depth. Icons are Lucide at 20px, stroke 1.75, in Mist or the flow color. No mascots, no characters, no people, no recognizable landmarks or real facilities; the factory is a generic block with two chimneys.

## Tone
Plain, warm and exact. Short sentences, concrete round numbers, no alarmism and no jokes about the subject. Poster-bold visuals, calm text. Write all copy for the default values below and keep it in src/content.ts; if the variables change, rewrite every headline, step, ledger row, FAQ answer and sources line to fit the new topic with the same length and rhythm.

---
— Prompt by VibeFather · https://vibefather.ai/t/carbon-cycle-scroll-explainer · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
