---
name: "Motion Designer Portfolio"
colors:
  black: "#111111"
  acid: "#E8FF3A"
  violet: "#6A4CFF"
  violetlight: "#A394FF"
  white: "#F4F4F0"
  grey: "#8A8A94"
  line: "#2A2A30"
typography:
  display_headlines_and_wordmark: { family: "Archivo Variable", weights: [800, 900] }
  body_ui: { family: "Space Grotesk Variable", weights: [400, 500] }
  mono_labels_timecodes_frame_counts: { family: "JetBrains Mono Variable", weights: [400, 500] }
spacing: "Section padding py-24 desktop / py-16 mobile; container max-w-[1240px] px-6; cards p-6; 8px rhythm."
radius: "Corners are square: 0px on cards, frames and images; buttons are pills with rounded-full; curve cards rounded-[6px]."
---

# Motion Designer Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **black** `#111111` — Page ground
- **acid** `#E8FF3A` — First accent: headline, primary buttons, reel shapes, marquee band
- **violet** `#6A4CFF` — Second accent: fills, display-size type, outline buttons, reel shapes
- **violetLight** `#A394FF` — Violet for small text and labels on black (keeps AA contrast)
- **white** `#F4F4F0` — Body text
- **grey** `#8A8A94` — Muted text, timecodes
- **line** `#2A2A30` — Hairlines and card borders

## Typography
- **Display / headlines and wordmark** — Archivo Variable (OFL), weights 800/900. Self-host the font files.
- **Body / UI** — Space Grotesk Variable (OFL), weights 400/500. Self-host the font files.
- **Mono / labels, timecodes, frame counts** — JetBrains Mono Variable (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1240px] px-6; cards p-6; 8px rhythm.
- Radius: Corners are square: 0px on cards, frames and images; buttons are pills with rounded-full; curve cards rounded-[6px].

## Motion
- Showreel: a 2D canvas driven by requestAnimationFrame with time-based animation at devicePixelRatio capped at 2; it plays by default, loops every 20 seconds and stops when scrolled out of view.
- Project thumbnails: each tile runs its drawThumbnail loop on a small canvas only while hovered or focused; otherwise it shows the frame at t = 0.
- Case player: play / pause, a scrubber (range input 0–72 frames) and prev / next frame buttons all call drawCase with the chosen time, so scrubbing is exact.
- Scroll reveals: sections fade up 20px over 400ms, once (Motion whileInView); content is visible by default.
- Marquee: the acid band scrolls its text continuously at 60px per second.
- prefers-reduced-motion: the reel, thumbnails, case player, marquee and reveals all rest on still frames drawn at t = 0 (the reel on its final frame); no element moves unless the visitor presses play.

## Imagery
Everything is drawn in code: type, circles, bars and lines on 2D canvas, SVG easing curves, CSS marquees. Flat acid yellow, electric violet, white and off-black only; no gradients, no glows, no photographs, no video files, no logos.

## Tone
Confident, quick and exact. Short lines, timecodes and frame counts instead of adjectives.

---
— Prompt by VibeFather · https://vibefather.ai/t/motion-designer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
