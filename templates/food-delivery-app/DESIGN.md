---
name: "Food Delivery App"
colors:
  canvas: "#F6F1E8"
  surface: "#FFFDF8"
  ink: "#25291F"
  muted: "#6E7165"
  tomato: "#B7472A"
  sage: "#DDE6D4"
  leaf: "#365B3D"
  honey: "#F1C75B"
  hairline: "#E3DCCE"
typography:
  hero_page_headings_restaurant_names_and_editorial_food_moments: { family: "Bricolage Grotesque Variable", weights: [500, 600, 700, 800] }
  navigation_menu_items_prices_forms_status_labels_and_body_copy: { family: "Inter Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base unit. App content has a 1280px maximum width with 28px desktop and 16px mobile gutters. Desktop header is 72px, mobile header 64px, and major page modules are separated by 24px. Restaurant cards use 16px padding, menu rows 20px, and checkout panels 24px. Keep interactive targets at least 44×44px, preserve 16px between sticky bars and content, and include safe-area padding below mobile controls."
radius: "Use 24px for the photographic hero and tracking map, 18px for restaurant and checkout cards, 14px for menu images and dialogs, 10px for inputs, and fully rounded shapes only for cuisine chips, rating badges, and compact icon buttons. Use 1px Hairline borders and short warm shadows rather than glass effects."
---

# Food Delivery App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F6F1E8` — Warm parchment app background and spacious separation between modules.
- **Surface** `#FFFDF8` — Restaurant cards, menu panels, address dialog, checkout, and sticky bars.
- **Ink** `#25291F` — Primary text, wordmark, icons, prices, and high-contrast outlines.
- **Muted** `#6E7165` — Metadata, secondary copy, timings, and inactive controls.
- **Tomato** `#B7472A` — Default value of [ACCENT]; primary actions, active filters, and route progress with white text.
- **Sage** `#DDE6D4` — Success panels, vegetarian labels, delivered states, and quiet map areas.
- **Leaf** `#365B3D` — Success text, availability, and high-contrast accents on Sage.
- **Honey** `#F1C75B` — Rating stars and small highlights, always beside dark Ink text.
- **Hairline** `#E3DCCE` — One-pixel borders, dividers, input outlines, and progress tracks.

## Typography
- **Hero, page headings, restaurant names, and editorial food moments** — Bricolage Grotesque Variable (OFL), weights 500/600/700/800. Self-host the font files.
- **Navigation, menu items, prices, forms, status labels, and body copy** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. App content has a 1280px maximum width with 28px desktop and 16px mobile gutters. Desktop header is 72px, mobile header 64px, and major page modules are separated by 24px. Restaurant cards use 16px padding, menu rows 20px, and checkout panels 24px. Keep interactive targets at least 44×44px, preserve 16px between sticky bars and content, and include safe-area padding below mobile controls.
- Radius: Use 24px for the photographic hero and tracking map, 18px for restaurant and checkout cards, 14px for menu images and dialogs, 10px for inputs, and fully rounded shapes only for cuisine chips, rating badges, and compact icon buttons. Use 1px Hairline borders and short warm shadows rather than glass effects.

## Motion
- Use 180–240ms ease-out transitions for cuisine selection, restaurant hover, add buttons, quantity steppers, address changes, and cart badges; update state before playing any effect.
- Hash-route changes fade and settle 8px upward over 200ms. Preserve the shared header and bottom navigation without animating them, and move focus to the new page heading.
- Adding a dish draws one small checkmark and pulses the basket badge once. The minimum-order progress bar animates width over 260ms while its text updates immediately.
- Sticky menu category tabs use a 180ms active-indicator slide and smooth scroll with the correct header offset; scrollspy changes the active tab without moving the page.
- Checkout success transitions directly into tracking with one 240ms order-card settle. Do not use confetti, celebratory audio, or a fake payment-processing delay.
- For a playing order, move the bicycle marker continuously along the SVG route using getPointAtLength, and reveal route progress with the same normalized value. Status changes and courier position derive from one 60-second clock.
- Dialogs and mobile drawers enter over 220ms with opacity and a 12px settle; toasts remain for 1800ms. Never block basket or navigation controls during an animation.
- Under prefers-reduced-motion, remove route settles, smooth scrolling, badge pulses, progress interpolation, and autonomous courier motion. Show a static route and allow manual tracking-stage changes only.

## Imagery
Use exactly six local AI-generated realistic editorial food photographs: one wide neighborhood-dinner tableau and five 4:3 restaurant-signature dishes. Every image shares soft upper-left window daylight, warm cream stone surfaces, matte ivory ceramics, subtle tomato and sage accents, natural food texture, gentle contact shadows, 50mm lens perspective, and fine 35mm grain. Keep plates fully readable with appetizing portions and no text, packaging marks, logos, watermarks, people, hands, or recognizable branded products. Use each restaurant photograph only for that restaurant and its matching signature dish; delivery-spread.webp belongs only to discovery. Do not rename a supplied dish into unrelated food when variables change. The first screen must prominently feature the wide tableau, not typography alone.

## Tone
Warm, brisk, neighborly, and precise. Use appetizing but restrained food writing, transparent prices and timing, and clear demo disclosures. Avoid delivery-platform clichés, manufactured urgency, exaggerated ratings claims, or language that implies a real order or courier exists.

---
— Prompt by VibeFather · https://vibefather.ai/t/food-delivery-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
