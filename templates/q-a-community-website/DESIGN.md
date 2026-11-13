---
name: "Q&A Community Website"
colors:
  canvas: "#F3F0E8"
  paper: "#FFFDF8"
  ink: "#202A24"
  muted: "#68736C"
  forest: "#234B3A"
  sage: "#DDE8D8"
  vermilion: "#B84A32"
  blush: "#F4DDD4"
  line: "#D9D4C8"
  badge_gold: "#8A641C"
typography:
  brand_page_headings_question_titles_pull_quotes_and_long_form_answers: { family: "Newsreader Variable", weights: [400, 500, 600, 700] }
  navigation_controls_metadata_search_editor_chrome_badges_and_helper_text: { family: "Source Sans 3 Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base scale. The sticky desktop header is 68px high. The workspace has a 1480px maximum width, 28px outer gutters, and a 208px left rail, minmax(0,760px) center, and 264px right rail with 24px gaps. Feed cards use 22px padding and 18px vertical gaps. Question reading uses a 68px vote rail and a maximum 680px text measure with 20px Newsreader body text at 1.72 line-height. Mobile uses 16px gutters and at least 44px touch targets."
radius: "Use 10px for buttons and inputs, 14px for standard cards, 18px for featured panels and editor surfaces, and full rounding only for compact chips and status pills. Make geometric portraits rounded squares rather than generic initial circles. Prefer hairline borders; reserve 0 18px 50px rgba(32,42,36,0.14) shadows for search results, drawers, and dialogs."
---

# Q&A Community Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F3F0E8` — Overall app background and quiet space around the three-column workspace
- **Paper** `#FFFDF8` — Question cards, answer bodies, editor, preview, search, and sticky header
- **Ink** `#202A24` — Headlines, answer text, primary controls, and important icons
- **Muted** `#68736C` — Metadata, secondary labels, inactive icons, and helper copy
- **Forest** `#234B3A` — Primary buttons, followed topics, active navigation, and dark community panels
- **Sage** `#DDE8D8` — Selected navigation, reputation progress, helpful highlights, and soft diagram fills
- **Vermilion** `#B84A32` — Brand dot, vote highlights, small underlines, and focused accents; use white text on solid fills
- **Blush** `#F4DDD4` — Upvoted backgrounds, featured-question accents, and warm badge surfaces
- **Line** `#D9D4C8` — Hairline card borders, column dividers, input outlines, and answer separators
- **Badge Gold** `#8A641C` — Highest reputation label and small award details on light backgrounds

## Typography
- **Brand, page headings, question titles, pull quotes, and long-form answers** — Newsreader Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Navigation, controls, metadata, search, editor chrome, badges, and helper text** — Source Sans 3 Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale. The sticky desktop header is 68px high. The workspace has a 1480px maximum width, 28px outer gutters, and a 208px left rail, minmax(0,760px) center, and 264px right rail with 24px gaps. Feed cards use 22px padding and 18px vertical gaps. Question reading uses a 68px vote rail and a maximum 680px text measure with 20px Newsreader body text at 1.72 line-height. Mobile uses 16px gutters and at least 44px touch targets.
- Radius: Use 10px for buttons and inputs, 14px for standard cards, 18px for featured panels and editor surfaces, and full rounding only for compact chips and status pills. Make geometric portraits rounded squares rather than generic initial circles. Prefer hairline borders; reserve 0 18px 50px rgba(32,42,36,0.14) shadows for search results, drawers, and dialogs.

## Motion
- On hash-route changes, fade the new main view in with translateY(6px) over 180ms; do not animate the shared header or side rails and do not delay readable content.
- Upvote buttons fill and their count crossfades over 140ms. Follow buttons swap label and icon with a 160ms ease-out transition without shifting neighboring controls.
- Collapsed answers animate height and opacity over 200ms while retaining the author row and Expand answer control; newly published local answers enter with a 220ms fade and 8px rise.
- Mobile navigation, topic, and contributor drawers slide 16px and fade their backdrop over 200ms. Search results scale from 0.99 to 1 over 140ms.
- Under prefers-reduced-motion: reduce, remove route travel, height animation, smooth scrolling, and entrance transitions while preserving instant state, focus, and text feedback.

## Imagery
Use no bitmap images, generated portraits, stock photographs, or avatar services. The complete app UI is the first-screen visual anchor, strengthened by a featured question card with an original inline SVG field-note diagram. For the default community, draw a balcony sunlight map with four planters, a pale sun arc, railing lines, and small numeric hour markers; for another subject, replace it with an equally specific technical diagram such as a bread-proofing timeline. Draw eight distinct fictional contributors as original geometric SVG head-and-shoulder portraits with varied skin tones, hair shapes, clothing, and sage, blush, ochre, blue, and clay backgrounds; never use initials-only avatars or resemble real people. Create an original [BRAND] mark from two open book-like rectangular leaves and one vermilion dot, plus a simple matching favicon.

## Tone
Thoughtful, generous, specific, and calm. Answers should sound like experienced peers explaining what they would try and why, with useful constraints and honest uncertainty. Avoid growth-hacking language, empty welcomes, generic encouragement, and claims that sample contributors or metrics are real.

---
— Prompt by VibeFather · https://vibefather.ai/t/q-a-community-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
