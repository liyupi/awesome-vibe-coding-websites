---
name: "Plant Shop Website"
colors:
  cream: "#FBF4E4"
  white: "#FFFFFF"
  leaf: "#2F5D3E"
  leaf_deep: "#234931"
  clay: "#C4704B"
  clay_soft: "#F2E0D2"
  bark: "#6D5F4E"
  ink: "#2C2A24"
  rule: "#E8DEC9"
typography:
  display_wordmark_h1_h2_plant_names_quiz_question_baloo_2_rounded_chunky_sentence_case_line_height_1_15: { family: "Baloo 2", weights: [600, 700] }
  text_body_care_lines_buttons_600_for_labels_captions: { family: "Nunito", weights: [400, 600, 700] }
spacing: "Friendly and airy: 104px desktop section rhythm (64px mobile), 1200px container, 28px side padding. Grid gap 24px; product page 6/6 split with a 48px gutter."
radius: "Rounded like the shop: 20px on cards and the quiz panel, 999px on chips, buttons and badges, 16px on images."
---

# Plant Shop Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FBF4E4` — Page ground everywhere — warm cream, sun-washed.
- **White** `#FFFFFF` — Cards, the quiz panel, care cards — clean but warm against the cream.
- **Leaf** `#2F5D3E` — Primary green: headings, buttons, links, the filled heart on wishlist.
- **Leaf Deep** `#234931` — Green hover and pressed state.
- **Clay** `#C4704B` — Terracotta accent: prices, the pet-safe paw badge, quiz progress, focus ring, tag chips.
- **Clay Soft** `#F2E0D2` — Chip and badge fills, the delivery-note band, selected filter states.
- **Bark** `#6D5F4E` — Secondary text: eyebrows, captions, care-guide body.
- **Ink** `#2C2A24` — Primary text on light grounds.
- **Rule** `#E8DEC9` — 1px hairlines: card borders, footer divider, filter underline.

## Typography
- **Display — wordmark, H1, H2, plant names, quiz question. Baloo 2, rounded chunky, sentence case, line-height 1.15** — Baloo 2 (OFL), weights 600/700. Self-host the font files.
- **Text — body, care lines, buttons (600 for labels), captions** — Nunito (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Friendly and airy: 104px desktop section rhythm (64px mobile), 1200px container, 28px side padding. Grid gap 24px; product page 6/6 split with a 48px gutter.
- Radius: Rounded like the shop: 20px on cards and the quiz panel, 999px on chips, buttons and badges, 16px on images.

## Motion
- Gentle, never fast: reveals fade and rise 16px over 450ms with 70ms stagger; mobile shortens to 350ms.
- Filtering re-flows the grid with Motion layout animations at 320ms so plants glide, not jump.
- Quiz steps crossfade with a small 12px slide at 320ms; the result card rises 16px with a soft spring (stiffness 200, damping 22).
- Wishlist heart pops once (scale 1 to 1.2 to 1, 300ms) when saved; pot-pairing selection bounces the price at the same spring.
- prefers-reduced-motion: every animation becomes an instant state change.

## Imagery
One sunny shoot: every photograph is a live plant in an unglazed terracotta (or pale wood) pot in bright soft window light, cream walls, gentle leaf shadows, pale wood floors and shelves. 50mm eye-level, warm and airy. No people, no readable plant tags, no logos.

## Tone
Friendly neighborhood expert: warm, specific, a little green-thumbed humor. Never botanical Latin for its own sake, never preachy.

---
— Prompt by VibeFather · https://vibefather.ai/t/plant-shop-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
