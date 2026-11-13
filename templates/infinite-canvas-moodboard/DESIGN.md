---
name: "Infinite Canvas Moodboard"
colors:
  mat_green: "#0A5C4B"
  mat_deep: "#074537"
  dot_minor: "#2F8B75"
  dot_major: "#7CCDB5"
  vermilion: "#FF4A1C"
  paper: "#FFF8E8"
  ink: "#10231E"
  ink_soft: "#4A5C55"
  marigold: "#FFC21F"
  bubblegum: "#FF9CC7"
  sky: "#86D2FF"
typography:
  display_board_headings_project_name_group_labels_sticky_note_text_weight_500: { family: "Bricolage Grotesque", weights: [500, 700, 800] }
  interface_text_panel_rows_buttons_chips_search_field: { family: "Instrument Sans", weights: [400, 500, 600] }
  mono_photo_captions_hex_codes_counts_zoom_percent_note_signatures: { family: "DM Mono", weights: [400, 500] }
spacing: "World units are CSS pixels at 100% zoom. Floating panels sit 16px from the viewport edge with 8px gaps; panel padding 14px; rows 40px tall on desktop, 44px minimum tap targets under 768px."
radius: "Paper items are nearly square: photo mats and swatches 3px, notes 2px. Floating panels 14px, buttons 9px, chips full pill."
---

# Infinite Canvas Moodboard — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Mat Green** `#0A5C4B` — The table: full-viewport background, a self-healing cutting mat. The color people remember.
- **Mat Deep** `#074537` — Radial vignette at the viewport edges, from transparent at 55% to this color at 100%.
- **Dot Minor** `#2F8B75` — Fine grid dots.
- **Dot Major** `#7CCDB5` — Every 8th grid dot, slightly larger.
- **Vermilion** `#FF4A1C` — The single action color: primary button fill with Ink text, selection ring, minimap viewport rectangle, active board marker, Objects tag dot.
- **Paper** `#FFF8E8` — Photo mats, swatch captions, floating panels, board headings and crop marks on the mat, Color tag dot.
- **Ink** `#10231E` — All text on paper, notes and vermilion.
- **Ink Soft** `#4A5C55` — Secondary text on paper only.
- **Marigold** `#FFC21F` — Sticky note, tape strips at 70% opacity, Texture tag dot.
- **Bubblegum** `#FF9CC7` — Sticky note, Pattern tag dot.
- **Sky** `#86D2FF` — Sticky note, Light tag dot.

## Typography
- **Display: board headings, project name, group labels, sticky note text (weight 500)** — Bricolage Grotesque (OFL), weights 500/700/800. Self-host the font files.
- **Interface text: panel rows, buttons, chips, search field** — Instrument Sans (OFL), weights 400/500/600. Self-host the font files.
- **Mono: photo captions, hex codes, counts, zoom percent, note signatures** — DM Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: World units are CSS pixels at 100% zoom. Floating panels sit 16px from the viewport edge with 8px gaps; panel padding 14px; rows 40px tall on desktop, 44px minimum tap targets under 768px.
- Radius: Paper items are nearly square: photo mats and swatches 3px, notes 2px. Floating panels 14px, buttons 9px, chips full pill.

## Motion
- Pan inertia: on release take velocity from the last 80ms of pointer samples, cap at 3 px/ms, multiply by 0.94 per 16.67ms and stop below 0.02 px/ms.
- Zoom: k is limited to 0.08 to 2.5. Wheel and pinch keep the world point under the cursor or finger midpoint fixed.
- Item drag: lift on grab over 120ms (scale 1.035, rotation eases to 0, deeper shadow, brought to top). On release, throw with the last 80ms velocity (cap 1.8 px/ms), friction 0.90 per 16.67ms, then a spring back to rest scale 1 and home rotation (stiffness 220, damping 18, mass 1) with a small visible overshoot.
- Camera moves (board, fit, minimap click, item): GSAP tween on progress t, ease power2.inOut, duration 0.6s + 0.5s * min(1, distance / 2500) in world units. Interpolate the world center linearly and log(k) linearly, then multiply k by 1 - dip * sin(pi * t), where dip = min(0.35, distance / 8000), so long trips pull back slightly in mid-flight. Any pointer or wheel input on the canvas kills the running tween.
- Cluster: each item tweens a progress value over 0.85s, ease power3.inOut, along a quadratic bezier from its current spot to its target. Control point is the midpoint offset perpendicular by 120 + (index % 5) * 30 world units, sign alternating by index. Rotation tweens to the target. Delay = groupIndex * 0.06s + itemIndexInGroup * 0.035s. Return uses the same arcs over 0.7s in the reverse direction of offset.
- Load: items fade from opacity 0 and scale 0.96 to rest, staggered 0.02s in array order, 0.4s each, ease power2.out. The hint pill fades in after 1s.
- prefers-reduced-motion: no inertia, throw, spring or stagger; camera moves and cluster changes are instant cuts; lift changes only the shadow.

## Imagery
18 photographs on paper mats: 6 generated from one shoot for the project, 12 CC0 museum works from Cleveland Museum of Art Open Access (coast paintings, Japanese wave prints, textiles, bowls). Together with sticky notes and swatches they form the first-screen visual anchor. Everything else, including grid, crop marks, tape and note curl, is drawn in CSS.

## Tone
Working studio: dry, specific and a little opinionated. Notes read like colleagues talking over a table, with real quantities and prices. Tool labels are short and plain.

---
— Prompt by VibeFather · https://vibefather.ai/t/infinite-canvas-moodboard · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
