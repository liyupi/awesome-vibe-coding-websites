---
name: "Kids Learning App Landing Page"
colors:
  lilac_base: "#EDE7FF"
  bubblegum_pink: "#FF4FA3"
  sky_blue: "#2FADFF"
  butter_yellow: "#FFD84D"
  grass_green: "#4ECB68"
  deep_plum_ink: "#2D174D"
  secondary_plum: "#58466B"
  paper_white: "#FFFFFF"
  clay_shadow: "#7A5EA8"
typography:
  display_headings_plain_wordmark_and_large_lesson_answers: { family: "Fredoka", weights: [400, 500, 600] }
  body_navigation_form_labels_buttons_chart_labels_and_small_ui: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base scale. Desktop content max-width 1240px with 48px outer gutters, 104px between major sections and 24px card gaps. Header height 80px. Desktop hero has two columns, 46% text and 54% visual, an approximately 600px-tall main area, and no giant empty margin. At 390px use 20px gutters, 64px header, 56px section spacing and 16px gaps. The mobile hero copy is compact enough that both the large pink clay subject and most of the blue phone are visible at 390×844. Keep every control at least 44×44 CSS pixels, even inside the phone. Body is 18px/1.6 desktop and 16px/1.55 mobile; supporting UI never below 12px. Display headline 68px/1.02 desktop and 42px/1.04 mobile, weight 500, tracking -0.025em; section headings 42px/1.08 desktop and 32px/1.12 mobile."
radius: "Puffy buttons are 18px radii with an inset white top highlight and a 4px deep-plum-tinted bottom ledge; press moves the face down 2px. Cards use 28px, dashboard panels 20px, the phone exterior 48px and its inner screen 34px. Clay objects are intentionally irregular soft ellipses, arches and rounded cuboids. Avoid outlining every surface; use a restrained 1px deep-plum border at 14% alpha on white cards and a solid 3px visible focus ring."
---

# Kids Learning App Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Lilac base** `#EDE7FF` — Main page canvas and the hero scene background. Keep this exact lilac; do not replace it with cream, beige or gray.
- **Bubblegum pink** `#FF4FA3` — Large hero clay companion and a large supporting clay orb, reading cards, pricing highlight and parent chart bars. This is a saturated hero subject, not merely a button accent.
- **Sky blue** `#2FADFF` — Large CSS phone body, broad math surfaces and a learning card. The blue phone occupies roughly half of the hero’s visual stage and remains clear on mobile.
- **Butter yellow** `#FFD84D` — Puffy arch details, age selection, lesson feedback accents and the safety section surface. Keep it bright and saturated.
- **Grass green** `#4ECB68` — Second clay companion, math tokens, parent dashboard balance and the final CTA band.
- **Deep plum ink** `#2D174D` — All headings, body text, labels, icons, outlines, chart labels and text on pink, blue, yellow, green or lilac. This ink has contrast above 5:1 on all four strong colors and above 13:1 on the lilac.
- **Secondary plum** `#58466B` — Supporting text on white or lilac only; never place this color on pink, blue, green or yellow. It exceeds 6.9:1 on lilac.
- **Paper white** `#FFFFFF` — Phone screen, dashboard panels, plain content cards and text on deep-plum filled buttons only. Never use white body text on the four bright colors.
- **Clay shadow** `#7A5EA8` — Tinted ambient shadows at 10–20% alpha only, never text or an extra section color.

## Typography
- **Display headings, plain wordmark and large lesson answers** — Fredoka (OFL), weights 400/500/600. Self-host the font files.
- **Body, navigation, form labels, buttons, chart labels and small UI** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base scale. Desktop content max-width 1240px with 48px outer gutters, 104px between major sections and 24px card gaps. Header height 80px. Desktop hero has two columns, 46% text and 54% visual, an approximately 600px-tall main area, and no giant empty margin. At 390px use 20px gutters, 64px header, 56px section spacing and 16px gaps. The mobile hero copy is compact enough that both the large pink clay subject and most of the blue phone are visible at 390×844. Keep every control at least 44×44 CSS pixels, even inside the phone. Body is 18px/1.6 desktop and 16px/1.55 mobile; supporting UI never below 12px. Display headline 68px/1.02 desktop and 42px/1.04 mobile, weight 500, tracking -0.025em; section headings 42px/1.08 desktop and 32px/1.12 mobile.
- Radius: Puffy buttons are 18px radii with an inset white top highlight and a 4px deep-plum-tinted bottom ledge; press moves the face down 2px. Cards use 28px, dashboard panels 20px, the phone exterior 48px and its inner screen 34px. Clay objects are intentionally irregular soft ellipses, arches and rounded cuboids. Avoid outlining every surface; use a restrained 1px deep-plum border at 14% alpha on white cards and a solid 3px visible focus ring.

## Motion
- Hero elements appear immediately. A single 500ms, 16px upward entrance may run after render, but content must never depend on animation to become visible. No startup overlay or delayed headline.
- Decorative clay scene floats by at most 6px on a slow 6-second loop; the phone and all its controls stay still. Use a 160ms squeeze on button press and 180ms crossfades between phone lessons and age-band content. Never animate layout height to zero.
- A correct answer causes three small local CSS stars to pop for 450ms, with a visible text success message; an incorrect answer gets a gentle 2px nudge and a helpful hint. No confetti over the page, negative scoring, loud sounds or forced progression.
- Reveal sections once with a subtle 14px translate/350ms fade through IntersectionObserver; everything remains visible if JavaScript or observation fails. Chart bars transition from their previous heights in 280ms without count-up text.
- For prefers-reduced-motion, remove floating, reveal transforms, nudge, stars and smooth scrolling; retain immediate state changes and visible text feedback. Pause decorative loops while offscreen or the document is hidden.

## Imagery
Use exactly the three supplied original clay illustrations, all from the same handmade 3D studio world with saturated #FF4FA3, #2FADFF, #FFD84D and #4ECB68 on #EDE7FF. They show two original abstract learning companions, rounded geometric props and blank books; they contain no baked-in text, numbers, letters, logos or screens and do not resemble existing characters. The first image is a large hero anchor; the phone is entirely live CSS/HTML and must never be an image. The second image explains reading and number play; the third supports the calm safety section. Make both cases use the same abstract images and rewrite the live story examples. Use object-fit: contain or a deliberate loose crop with all main characters intact. A gentle CSS radial mask may feather the lilac edges, but do not desaturate, blur or tint the art. Add small original CSS sun, sprout, parcel, kite, counting pebble and shape illustrations as needed for the active story world. No real people or stock photography are needed for this playful product page.

## Tone
Warm, curious, concrete, lightly playful, and calm about mistakes. Never promise learning outcomes or use urgency, streak pressure, guilt, awards, testimonials, or unsupported adoption numbers.

---
— Prompt by VibeFather · https://vibefather.ai/t/kids-learning-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
