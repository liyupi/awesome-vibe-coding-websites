---
name: "Ski Resort Website"
colors:
  snow: "#F4F7F5"
  card: "#FFFFFF"
  frost: "#E6EFED"
  spruce: "#102E2D"
  pine: "#1D4842"
  slate: "#5E7272"
  ice: "#B9E2E5"
  sky: "#67B8C5"
  sun: "#E8AD54"
  beginner: "#2E7656"
  intermediate: "#286F9D"
  advanced: "#20292D"
  closed: "#A34F45"
  rule: "#D2DEDA"
typography:
  display_h1_h2_large_prices_room_names_and_the_text_wordmark: { family: "Bricolage Grotesque", weights: [500, 600, 700] }
  text_and_ui_body_navigation_buttons_form_labels_table_cells_and_captions: { family: "Inter", weights: [400, 500, 600] }
  technical_data_condition_values_trail_metadata_coordinates_badges_and_small_numeric_labels: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Use an 8px base unit. Center a 12-column container at max-width 1360px with 40px desktop side padding, 28px tablet and 18px under 640px; grid gap 24px. Section padding is 104px desktop, 80px tablet and 64px mobile. H1: Bricolage Grotesque 600, clamp(48px,6.4vw,88px), line-height 0.98, letter-spacing -0.045em. Interior page H1: clamp(42px,5vw,68px), line-height 1.02. H2: clamp(32px,3.6vw,52px), line-height 1.06, letter-spacing -0.035em. H3: 24px/1.2, weight 600. Lead: Inter 18px/1.65, max 58ch. Body: Inter 16px/1.65. Eyebrow: IBM Plex Mono 500 11px uppercase, letter-spacing 0.15em. Buttons: minimum 48px high, 22px horizontal padding, Inter 600 14px. Inputs: 52px high with 16px text. Use tabular numerals for all prices and conditions. Focus-visible: 2px Sky outline with 3px offset."
radius: "18px on large photo frames and major panels, 12px on cards and inputs, 8px on small controls, and 999px only for chips, difficulty dots and stepper buttons. Use 1px Rule borders rather than heavy card shadows; only floating header and mobile menu may use a soft 0 16px 40px rgba(16,46,45,0.12) shadow."
---

# Ski Resort Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Snow** `#F4F7F5` — Main page background and light text over dark photography.
- **Card** `#FFFFFF` — Calculators, map details, pricing cards, forms and accordions.
- **Frost** `#E6EFED` — Alternate sections, map land, selected soft backgrounds and disabled states.
- **Spruce** `#102E2D` — Headline and body ink, footer, primary buttons and dark overlays.
- **Pine** `#1D4842` — Secondary dark surfaces, hover fills and illustrated forest shapes.
- **Slate** `#5E7272` — Secondary copy, captions and inactive labels; never use for small text below accessible contrast.
- **Ice** `#B9E2E5` — Primary accent for selected controls, focus details, data highlights and map panels.
- **Sky** `#67B8C5` — Links on dark surfaces, active data accents and subtle icon fills.
- **Sun** `#E8AD54` — Sparse warm accent for weather, sunrise markers and sample-data badges.
- **Beginner** `#2E7656` — Beginner trail strokes, dots and labels only.
- **Intermediate** `#286F9D` — Intermediate trail strokes, dots and labels only.
- **Advanced** `#20292D` — Advanced trail strokes, diamonds and labels only.
- **Closed** `#A34F45` — Closed status text and dashed trail state; never the only status cue.
- **Rule** `#D2DEDA` — One-pixel borders, table lines, input borders and separators.

## Typography
- **Display: H1, H2, large prices, room names and the text wordmark** — Bricolage Grotesque (OFL), weights 500/600/700. Self-host the font files.
- **Text and UI: body, navigation, buttons, form labels, table cells and captions** — Inter (OFL), weights 400/500/600. Self-host the font files.
- **Technical data: condition values, trail metadata, coordinates, badges and small numeric labels** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base unit. Center a 12-column container at max-width 1360px with 40px desktop side padding, 28px tablet and 18px under 640px; grid gap 24px. Section padding is 104px desktop, 80px tablet and 64px mobile. H1: Bricolage Grotesque 600, clamp(48px,6.4vw,88px), line-height 0.98, letter-spacing -0.045em. Interior page H1: clamp(42px,5vw,68px), line-height 1.02. H2: clamp(32px,3.6vw,52px), line-height 1.06, letter-spacing -0.035em. H3: 24px/1.2, weight 600. Lead: Inter 18px/1.65, max 58ch. Body: Inter 16px/1.65. Eyebrow: IBM Plex Mono 500 11px uppercase, letter-spacing 0.15em. Buttons: minimum 48px high, 22px horizontal padding, Inter 600 14px. Inputs: 52px high with 16px text. Use tabular numerals for all prices and conditions. Focus-visible: 2px Sky outline with 3px offset.
- Radius: 18px on large photo frames and major panels, 12px on cards and inputs, 8px on small controls, and 999px only for chips, difficulty dots and stepper buttons. Use 1px Rule borders rather than heavy card shadows; only floating header and mobile menu may use a soft 0 16px 40px rgba(16,46,45,0.12) shadow.

## Motion
- Define --ease-out cubic-bezier(0.22,0.61,0.36,1). Reveal major sections with Motion whileInView once: opacity 0 and translateY(20px) to rest over 600ms, 70ms sibling stagger, threshold 0.12. Never hide content when JavaScript or motion is unavailable.
- Hero image loads at scale 1.035 and settles to 1 over 1100ms; eyebrow, H1, lead and CTAs rise 18px with 70ms stagger. Do not add parallax or an auto-playing carousel.
- Header changes from transparent with Snow text over the homepage hero to Snow at 96% with Spruce text and a Rule bottom border after 32px scroll; interior pages start in the solid state. Mobile menu fades and slides down 10px over 180ms.
- Trail filters crossfade route opacity over 180ms; the selected route gains a 3px Snow under-stroke and a 160ms opacity pulse, while its detail rows rise 8px over 200ms. Closed routes remain dashed and visibly labeled.
- Calculator totals use a restrained 220ms opacity and translateY(4px) change, never a slot-machine count-up. Steppers, tabs, accordion panels and selected cards animate for 160–220ms with no layout jump.
- Photo frames subtly scale their image from 1 to 1.025 on hover over 450ms; captions and arrows do not move. Links grow a 1px underline from left to right over 220ms.
- With prefers-reduced-motion: reduce, disable all reveals, image scaling, slide/fade transitions, route pulses and smooth scrolling; render content immediately and retain only instant color or border feedback.

## Imagery
Use the six coordinated realistic editorial photographs listed in Assets, all with cool blue winter shadows, faint warm early-morning highlights, natural snow texture and fine grain. The homepage hero is an expansive alpine scene, not a portrait. People may appear only as distant skiers or fully helmeted, back-facing lesson participants; no close faces or identifiable individuals. No generated photo contains text, signs, logos, branded equipment or recognizable landmarks. Use object-fit: cover: hero 50% 48%, skiing 50% 45%, lesson 50% 50%, lodge 50% 55%, room 50% 52%, rentals 50% 50%. The original trail map, contour lines, lift lines, difficulty symbols, favicon and village map are hand-written SVG in code, never traced from a real resort. Use lucide-react icons at 1.6px stroke and 18–22px; do not substitute emoji.

## Tone
Clear, capable and quietly warm, like a good mountain host. Use precise terrain, times, inclusions and prices. Avoid luxury clichés, exaggerated powder claims, fake urgency and exclamation marks. All site copy is US English.

---
— Prompt by VibeFather · https://vibefather.ai/t/ski-resort-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
