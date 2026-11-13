---
name: "3D Photo Gallery"
colors:
  void: "#0b0a09"
  soot: "#15130f"
  frame: "#2a241d"
  bone: "#ece4d6"
  ash: "#8f877a"
  hairline: "rgba(236,228,214,0.14)"
  albumen: "#c99a5b"
  letterbox: "#000000"
typography:
  display_wordmark_room_titles_work_titles: { family: "Cormorant Garamond", weights: [400, 500] }
  text_captions_panels_buttons: { family: "Hanken Grotesk", weights: [400, 500] }
  mono_micro_labels_counters_room_labels_hints_credits: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "HUD sits on a fixed inset frame: 28px from each edge at ≥ 900px wide, 18px below. Panels use 40px padding (24px mobile). Mono labels are 11px uppercase with 0.16em letter-spacing. Detail text column starts at 6vw from the left, max-width 520px. Vertical rhythm in text blocks is 8px multiples (8, 16, 24, 40)."
radius: "0 everywhere (frames, panels, images, lightbox). Only pill buttons use 999px, and the cursor ring is a circle."
---

# 3D Photo Gallery — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Void** `#0b0a09` — Page and scene background, fog color, loader background
- **Soot** `#15130f` — Index and About panels, mobile detail sheet, fallback page
- **Frame** `#2a241d` — Thin frame plane behind every photograph
- **Bone** `#ece4d6` — Primary text, room titles, cursor ring, dust particles
- **Ash** `#8f877a` — Secondary text, mono labels, dates, inactive controls
- **Hairline** `rgba(236,228,214,0.14)` — 1px dividers, progress track, panel borders
- **Albumen** `#c99a5b` — The only accent: progress fill, cursor dot, active index number, focus rings, the small dot in buttons. Never for large fills or body text.
- **Letterbox** `#000000` — Detail-view letterbox bars and the lightbox backdrop (at 96% opacity)

## Typography
- **Display (wordmark, room titles, work titles)** — Cormorant Garamond (OFL), weights 400/500. Self-host the font files.
- **Text (captions, panels, buttons)** — Hanken Grotesk (OFL), weights 400/500. Self-host the font files.
- **Mono micro-labels (counters, room labels, hints, credits)** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: HUD sits on a fixed inset frame: 28px from each edge at ≥ 900px wide, 18px below. Panels use 40px padding (24px mobile). Mono labels are 11px uppercase with 0.16em letter-spacing. Detail text column starts at 6vw from the left, max-width 520px. Vertical rhythm in text blocks is 8px multiples (8, 16, 24, 40).
- Radius: 0 everywhere (frames, panels, images, lightbox). Only pill buttons use 999px, and the cursor ring is a circle.

## Motion
- Easing: entrances cubic-bezier(.2,.8,.2,1); panels and letterbox cubic-bezier(.7,0,.2,1); camera flights easeInOutCubic. Damping helper damp(a, b, λ, dt) = a + (b − a)·(1 − e^(−λ·dt)) drives every continuous value.
- Inertial walk: wheel, drag and swipe write to a scroll target; the camera chases it with damp λ 5 and keeps momentum after release (velocity decays by e^(−3.5·dt)).
- Velocity bend: photograph planes curve slightly along their width while the camera moves (uBend = clamp(speed × 0.02, −0.35, 0.35)) and flatten when it stops.
- Pointer parallax: camera offsets up to 0.25 units in x and 0.15 in y and rotates up to 0.04 rad toward the pointer, damped λ 3.
- Camera flight to a photograph in 1.2 s with a FOV kick (+8° at the midpoint), other works dimming to 12% brightness in 0.6 s.
- Rolling digits: each digit is a masked vertical 0–9 strip that slides to the new value in 0.6 s; room names slide up out and in through a mask in 0.5 s.
- Loader shutter: the loader splits into a top and bottom half that slide off-screen in 0.9 s, then HUD items rise 12px and fade in with an 80ms stagger and the works reveal nearest-first.
- Film grain overlay steps through 8 offsets per second; dust drifts slowly. prefers-reduced-motion: no inertia (λ 14, no momentum), no bend, no FOV kick, no auto-walk, static grain and dust, camera jumps replaced by 0.35 s crossfades, rolling digits switch instantly.

## Imagery
Real nineteenth-century photographs only: 24 CC0 images from The Cleveland Museum of Art Open Access, kept in their original warm albumen, salted-paper, cyanotype and photochrom tones. No color grading, no filters, no crops: each plane uses the image's natural aspect ratio. Everything else (frames, labels, room titles, dust, grain, vignette, cursor, favicon) is drawn in code. No portraits and no logos.

## Tone
Quiet, exact and curatorial. Short factual captions, no exclamation marks, no marketing language. Labels read like museum wall text.

---
Inspired by Nocturne — an endless 3D corridor gallery (Opus 5.5 showcase by @ohmiler) by @ohmiler — https://ohmiler.github.io/opus-5.5/infinite-gallery/
— Prompt by VibeFather · https://vibefather.ai/t/3d-photo-gallery · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
