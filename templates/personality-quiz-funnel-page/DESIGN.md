---
name: "Personality Quiz Funnel Page"
colors:
  paper: "#F5F0E6"
  ink: "#20231F"
  chalk: "#FFFDF7"
  coral: "#F28C78"
  lime: "#CBE47A"
  lilac: "#C8B9E8"
  teal: "#70B8A7"
  muted_ink: "#62665E"
typography:
  display_headlines_and_result_archetype_names: { family: "Fraunces Variable, self-hosted with @fontsource-variable/fraunces; optical sizing enabled", weights: [600, 700] }
  body_navigation_buttons_form_labels_and_small_metadata: { family: "DM Sans Variable, self-hosted with @fontsource-variable/dm-sans", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid. Landing sections have 104px desktop and 72px mobile vertical padding. Content max-width is 1240px with 40px desktop and 20px mobile gutters. Hero copy max-width is 610px. Card padding is 28–36px desktop and 20–24px mobile; button gaps are 12px."
radius: "Use 24px for major cards and the quiz stage, 16px for answer cards and inputs, 999px for buttons and small tags. Major cards have a 2px Ink border and a 6px 6px 0 #20231F offset shadow; hover lifts reduce that shadow to 3px 3px 0."
---

# Personality Quiz Funnel Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F5F0E6` — Main page background and quiet negative space
- **Ink** `#20231F` — Headlines, body text, borders, and dark panels
- **Chalk** `#FFFDF7` — Cards, inputs, and text on Ink panels
- **Coral** `#F28C78` — Spark accents, selected states, and decorative circles
- **Lime** `#CBE47A` — Primary buttons, progress fill, and Anchor accents
- **Lilac** `#C8B9E8` — Weaver cards and report-preview accents
- **Teal** `#70B8A7` — Pathfinder accents and secondary illustrations
- **Muted Ink** `#62665E` — Secondary copy and metadata

## Typography
- **Display headlines and result archetype names** — Fraunces Variable, self-hosted with @fontsource-variable/fraunces; optical sizing enabled (OFL), weights 600/700. Self-host the font files.
- **Body, navigation, buttons, form labels, and small metadata** — DM Sans Variable, self-hosted with @fontsource-variable/dm-sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid. Landing sections have 104px desktop and 72px mobile vertical padding. Content max-width is 1240px with 40px desktop and 20px mobile gutters. Hero copy max-width is 610px. Card padding is 28–36px desktop and 20–24px mobile; button gaps are 12px.
- Radius: Use 24px for major cards and the quiz stage, 16px for answer cards and inputs, 999px for buttons and small tags. Major cards have a 2px Ink border and a 6px 6px 0 #20231F offset shadow; hover lifts reduce that shadow to 3px 3px 0.

## Motion
- Landing sections reveal with opacity 0 to 1 and translateY(18px) to 0 over 500ms using ease-out, staggered by 70ms within a grid; never hide content when IntersectionObserver is unavailable.
- Primary buttons and answer cards translate 2px upward on hover and return on press over 160ms. Selected answers fill with Lime and show a check icon before advancing.
- Starting the quiz crossfades and slides the landing view out and quiz view in over 280ms. Each answer advances after a 240ms selected state; question content exits 8px left and enters 8px right.
- The progress bar and active segment animate width or color over 240ms. The calculating interlude lasts 1100ms and cycles three status phrases; result content follows with a 420ms fade and 14px rise.
- Decorative hero shapes float no more than 8px over six seconds and an orbit label rotates slowly over 24 seconds; disable both under prefers-reduced-motion.
- Under prefers-reduced-motion, remove reveals, floating, rotation, smooth scrolling, and slide transforms; use immediate state changes or opacity-only transitions under 80ms.

## Imagery
Use no photographs, AI-generated portraits, external illustrations, or raster placeholders. The hero's visual anchor is a rich, layered quiz UI mock with original CSS/SVG geometric artwork, answer cards, progress, a paper-grid backdrop, and offset color shapes. Give each archetype a reusable original SVG emblem: radiating strokes for Spark, a precise modular grid for Anchor, interlocking loops for Weaver, and a winding contour path for Pathfinder. Keep all geometry abstract and generic.

## Tone
Warm, perceptive, energetic, and specific. Use encouraging plain language rather than vague affirmations. Treat results as flexible creative patterns, never fixed identities, diagnoses, rankings, or scientific measurements.

---
— Prompt by VibeFather · https://vibefather.ai/t/personality-quiz-funnel-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
