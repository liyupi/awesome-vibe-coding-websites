---
name: "Music Lessons School Website"
colors:
  plum: "#4B1D52"
  plum_deep: "#38153E"
  brass: "#E3A33B"
  brass_tint: "#F9EFD9"
  cream: "#FAF5EC"
  white: "#FFFFFF"
  ink: "#2E2233"
  steel: "#6E5F73"
  hairline: "#EAE0E3"
typography:
  display_headlines_prices_week_totals: { family: "Petrona", weights: [600, 700] }
  body_paragraphs_controls_tracker: { family: "Mulish", weights: [400, 600, 700, 800] }
spacing: "Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced brass-on-plum (or plum-on-cream) eyebrow over a Petrona 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps."
radius: "Warm studio: 14px cards, 10px chips and inputs, pill CTAs; photos 14px."
---

# Music Lessons School Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Plum** `#4B1D52` — Hero ground, dark bands, headings
- **Plum deep** `#38153E` — Footer ground and darkest panels
- **Brass** `#E3A33B` — Accent: CTAs, tracker fills, highlights
- **Brass tint** `#F9EFD9` — Chips and note panels
- **Cream** `#FAF5EC` — Page ground
- **White** `#FFFFFF` — Cards on cream
- **Ink** `#2E2233` — Body text
- **Steel** `#6E5F73` — Secondary text; #C4B3C9 on dark
- **Hairline** `#EAE0E3` — Hairline rules and card borders

## Typography
- **Display: headlines, prices, week totals** — Petrona (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, tracker** — Mulish (OFL), weights 400/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced brass-on-plum (or plum-on-cream) eyebrow over a Petrona 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Warm studio: 14px cards, 10px chips and inputs, pill CTAs; photos 14px.

## Motion
- Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Tracker cells fill with a 200ms scale; the goal bar fills 300ms; the streak count counts up 500ms.
- Finder results crossfade 200ms on any filter change; opening chips pop 1.05× when selected.
- All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.

## Imagery
Sunlit lesson-room photography from one shoot: a warm room with an upright piano and a violin waiting on a chair, four teacher portraits (fictional, varied, holding or beside their instruments), and a small warm recital hall with empty chairs facing a lit stage — no people in close-up except the portraits, no brand marks on instruments.

## Tone
Warm studio English — a director who remembers every student's dog's name. Encouraging about practice without pressure; honest about instruments being loud at first.

---
— Prompt by VibeFather · https://vibefather.ai/t/music-lessons-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
