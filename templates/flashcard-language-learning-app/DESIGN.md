---
name: "Flashcard Language Learning App"
colors:
  cheerful_paper: "#FAF9F5"
  card_white: "#FFFFFF"
  study_ink: "#18181B"
  cobalt_blue: "#2563EB"
  mastery_mint: "#10B981"
  warm_gold: "#F59E0B"
typography:
  editorial_vocabulary_display_headings: { family: "Fraunces", weights: [600, 700] }
  ui_controls_definitions_and_examples: { family: "Plus Jakarta Sans", weights: [400, 500, 600, 700] }
  srs_intervals_phonetic_guides_and_streak_counters: { family: "JetBrains Mono", weights: [400, 500, 600] }
spacing: "Mobile (<768px) centers the tactile flashcard cleanly with 84px bottom clearance above the fixed 64px tab bar. Desktop (>=768px) displays a 240px left sidebar + wide centered study workspace with deck switcher and live session telemetry."
radius: "20px for the 3D flashcard stage, 14px for deck and quiz cards, 999px for SRS rating badges and filter chips."
---

# Flashcard Language Learning App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cheerful Paper** `#FAF9F5` — Warm tactile paper canvas
- **Card White** `#FFFFFF` — 3D flashcard faces, deck cards, and quiz panels
- **Study Ink** `#18181B` — Primary vocabulary words and headings
- **Cobalt Blue** `#2563EB` — Active tabs, Flip/Good CTA, pronunciation button, and goal arc
- **Mastery Mint** `#10B981` — Easy rating, correct quiz answers, and streak heatmap highlights
- **Warm Gold** `#F59E0B` — Hard rating, streak flame badge, and phonetic highlights

## Typography
- **Editorial vocabulary & display headings** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **UI controls, definitions, and examples** — Plus Jakarta Sans (OFL), weights 400/500/600/700. Self-host the font files.
- **SRS intervals, phonetic guides, and streak counters** — JetBrains Mono (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: Mobile (<768px) centers the tactile flashcard cleanly with 84px bottom clearance above the fixed 64px tab bar. Desktop (>=768px) displays a 240px left sidebar + wide centered study workspace with deck switcher and live session telemetry.
- Radius: 20px for the 3D flashcard stage, 14px for deck and quiz cards, 999px for SRS rating badges and filter chips.

## Motion
- Tactile 3D rotateY(180deg) flip animation on card tap or Spacebar.
- Smooth green/gold/cobalt visual feedback on Quiz answers and SRS interval updates.
- Honors prefers-reduced-motion; all content visible immediately.

## Imagery
100% crisp code-drawn study visuals: SVG daily review goal ring, 28-day study consistency heatmap, per-deck mastery progress bars, and Lucide icons.

## Tone
Warm, encouraging, crisp paper-card clarity, clutter-free.

---
— Prompt by VibeFather · https://vibefather.ai/t/flashcard-language-learning-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
