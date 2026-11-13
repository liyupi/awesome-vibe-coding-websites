---
name: "Yoga Studio Website"
colors:
  sand: "#F5F1E8"
  shell: "#EDE6D8"
  card: "#FDFBF6"
  fern: "#2A352F"
  moss: "#6E7F6A"
  clay: "#AE7A64"
  clay_deep: "#916152"
  rule: "#DCD3C2"
  night: "#26302B"
typography:
  display_h1_h2_h3_class_names_teacher_names_prices_in_large_sizes_the_wordmark: { family: "Marcellus", weights: [400] }
  text_and_ui_body_eyebrows_buttons_nav_form_fields_schedule_times_numbers_font_variant_numeric_tabular_nums_for_times_and_prices: { family: "Mulish", weights: [400, 600, 800] }
spacing: "8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(42px, 6vw, 88px) Marcellus 400, line-height 1.06, letter-spacing 0; H2 clamp(32px, 4vw, 54px) Marcellus 400, line-height 1.1; H3 24px Marcellus 400, line-height 1.25; lead paragraph Mulish 400 18px / 1.7 Fern at 85% opacity; body Mulish 400 16px / 1.75 (max-width 64ch); eyebrow Mulish 800 12px uppercase letter-spacing 0.18em Moss, preceded by a 24px x 1px Clay line with 12px gap; caption Mulish 400 13px Moss. Buttons: height 50px, padding 0 28px, Mulish 600 14px letter-spacing 0.06em. Primary: Clay fill, Card text. Secondary: 1px Fern border, Fern text, transparent (on photos: 1px Card border, Card text). Small buttons 38px high, padding 0 16px, 12px text. Inputs: height 50px, 1px Rule border, Card fill, 16px Mulish, focus border Clay. Focus ring everywhere: 2px Clay outline with 3px offset."
radius: "18px on cards, photos, inputs, chips and the modal. 999px only for level pills, filter chips, teacher initials and the open dot."
---

# Yoga Studio Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Sand** `#F5F1E8` — Page background on both pages, input fill.
- **Shell** `#EDE6D8` — Alternate section background (Styles, Memberships), hover fill for rows and chips, image wells.
- **Card** `#FDFBF6` — Card surfaces (class cards, teacher cards, tier cards, modal), light panel background.
- **Fern** `#2A352F` — Headlines and body text, primary outline buttons, icon color, modal border.
- **Moss** `#6E7F6A` — Secondary text, captions, eyebrows, level pills for gentle classes, open dot.
- **Clay** `#AE7A64` — The one accent: primary buttons, prices, intro offer border and headline accents, selected chips, focus ring.
- **Clay Deep** `#916152` — Primary button hover and pressed state, level 2 pill.
- **Rule** `#DCD3C2` — 1px hairlines, card borders, input borders, day-column dividers.
- **Night** `#26302B` — Footer, hero overlay base, photo overlays (as rgba(38,48,43,x)).

## Typography
- **Display: H1, H2, H3, class names, teacher names, prices in large sizes, the wordmark** — Marcellus (OFL), weights 400. Self-host the font files.
- **Text and UI: body, eyebrows, buttons, nav, form fields, schedule times, numbers (font-variant-numeric tabular-nums for times and prices)** — Mulish (OFL), weights 400/600/800. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 80px under 1024px, 64px under 640px. Type scale: H1 clamp(42px, 6vw, 88px) Marcellus 400, line-height 1.06, letter-spacing 0; H2 clamp(32px, 4vw, 54px) Marcellus 400, line-height 1.1; H3 24px Marcellus 400, line-height 1.25; lead paragraph Mulish 400 18px / 1.7 Fern at 85% opacity; body Mulish 400 16px / 1.75 (max-width 64ch); eyebrow Mulish 800 12px uppercase letter-spacing 0.18em Moss, preceded by a 24px x 1px Clay line with 12px gap; caption Mulish 400 13px Moss. Buttons: height 50px, padding 0 28px, Mulish 600 14px letter-spacing 0.06em. Primary: Clay fill, Card text. Secondary: 1px Fern border, Fern text, transparent (on photos: 1px Card border, Card text). Small buttons 38px high, padding 0 16px, 12px text. Inputs: height 50px, 1px Rule border, Card fill, 16px Mulish, focus border Clay. Focus ring everywhere: 2px Clay outline with 3px offset.
- Radius: 18px on cards, photos, inputs, chips and the modal. 999px only for level pills, filter chips, teacher initials and the open dot.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the modal; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for filters and the FAQ. Slow and calm — nothing bounces, nothing snaps.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and animate to rest over 900ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 100ms (index prop).
- Hero photo: on load the image scales from 1.05 to 1.0 over 2600ms --ease-out; while scrolling, the image translates 0 to 8% of its height as the hero scrolls out (Motion useScroll, offset ['start start', 'end start']). H1 lines rise from translateY(24px) and opacity 0 with 160ms stagger, starting 300ms after load.
- Breathing dot: a 10px Clay circle under the hero headline scales 1 to 1.5 and back on a 5000ms ease-in-out loop (inhale/exhale), pausing under reduced motion to a static dot.
- Class cards: hover lifts 4px and softens the border to Fern over 300ms; clicking opens the BookingModal. Filter changes fade cards out (opacity, 8px y) and re-stagger them in over 350ms --ease-io.
- Booking modal: Night overlay fades to 45% over 300ms; the Card panel rises 24px and fades in over 380ms --ease-out; closing reverses in 260ms. The confirmation view crossfades inside the panel and the spot number types in character by character over 600ms. Escape and overlay click close.
- FAQ accordions: height 0 to auto and opacity 0 to 1 over 340ms --ease-io; the Plus icon rotates 45 degrees into an X.
- Membership tiers: the middle (featured) tier is outlined 1px Clay and lifted 8px; on hover each tier's per-class math line counts the price down/up to the effective per-class value over 500ms.
- Header: transparent over the photo hero with Card text; after 40px of scroll it gets Sand at 94% opacity, backdrop-filter blur(10px), Fern text and a 1px Rule bottom border, 250ms transition. On schedule.html it is solid from the start.
- Links: .link-draw grows a 1px currentColor underline from 0% to 100% width over 300ms --ease-out on hover and focus-visible.
- prefers-reduced-motion: reduce — disable the hero scale and parallax, H1 rise, breathing dot, count-ups, type-in and staggered filters (render at rest). Color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Real photography only, calm and airy, all six made for this template in one consistent style: soft daylight, pale wood, linen and plants, empty rooms and still-life props, documentary editorial look, fine grain. Two photo kinds, never mixed: room and prop stills (the hero, the three style cards, the evening candle shot — no people, no hands, no faces) and teacher portraits (AI-generated fictional people, head-and-shoulders headshots only, natural light, never full-body poses, never hands touching props, never resembling any real individual; they are placeholders users swap for their own staff). Schedule and class avatars are never photos: initials circles drawn in code. No readable text or logos anywhere. Every photo uses object-fit cover with the object-position given under Assets, 18px corners, no shadow; photos on Sand get a 1px Rule outline. Captions below photos in Mulish 13px Moss. Drawn in code: the favicon, the wordmark (type only), level pills, teacher initials circles, the breathing dot, dividers and the modal spot card. Icons: lucide-react only, stroke width 1.5.

## Tone
Warm, unhurried and specific, like a teacher greeting a first-timer at the door. Short sentences, concrete numbers (minutes, dollars, mats), no wellness jargon, no medical claims, no exclamation marks.

---
— Prompt by VibeFather · https://vibefather.ai/t/yoga-studio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
