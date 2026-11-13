---
name: "Live Shopping Stream Page"
colors:
  canvas: "#100F0E"
  surface: "#1B1917"
  raised: "#29241F"
  parchment: "#FFF8EE"
  muted: "#BCB0A3"
  coral: "#FF7A66"
  butter: "#F2CF7A"
  sage: "#A8C5A0"
  hairline: "#40372F"
typography:
  host_captions_event_title_and_editorial_notes: { family: "Fraunces Variable", weights: [500, 600, 700] }
  interface_chat_prices_product_data_and_controls: { family: "Manrope Variable", weights: [400, 500, 600, 700, 800] }
spacing: "Use a 4px base unit. Desktop header is 64px with 28px horizontal padding; the main workspace uses a 20px gap and 24px outer gutters. Stage overlays use 20–24px padding, chat rows 12px vertical gaps, and drawer content 20px. Mobile header is 56px, outer gutters 12px, product and coupon controls at least 44px high, and bottom drawers include safe-area padding."
radius: "Use 20px for the live stage and large drawers, 14px for product and coupon cards, 10px for inputs and small thumbnails, and fully rounded shapes only for compact badges, icon buttons and progress chips. Use 1px Hairline borders and short warm shadows rather than glass effects."
---

# Live Shopping Stream Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#100F0E` — Warm near-black page background, stage scrims and deep surround.
- **Surface** `#1B1917` — Header, chat, product shelf, cart and secondary panels.
- **Raised** `#29241F` — Inputs, product cards, chips and elevated overlay surfaces.
- **Parchment** `#FFF8EE` — Primary text, prices, headings and high-contrast icons.
- **Muted** `#BCB0A3` — Timestamps, metadata, secondary copy and inactive controls.
- **Coral** `#FF7A66` — Default value of [ACCENT]; primary buttons, active states and simulated-live indicators.
- **Butter** `#F2CF7A` — Coupon panel and savings highlights, always with dark text.
- **Sage** `#A8C5A0` — Claimed, in-stock and successful local-state feedback.
- **Hairline** `#40372F` — One-pixel dividers, card borders and quiet progress tracks.

## Typography
- **Host captions, event title and editorial notes** — Fraunces Variable (OFL), weights 500/600/700. Self-host the font files.
- **Interface, chat, prices, product data and controls** — Manrope Variable (OFL), weights 400/500/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Desktop header is 64px with 28px horizontal padding; the main workspace uses a 20px gap and 24px outer gutters. Stage overlays use 20–24px padding, chat rows 12px vertical gaps, and drawer content 20px. Mobile header is 56px, outer gutters 12px, product and coupon controls at least 44px high, and bottom drawers include safe-area padding.
- Radius: Use 20px for the live stage and large drawers, 14px for product and coupon cards, 10px for inputs and small thumbnails, and fully rounded shapes only for compact badges, icon buttons and progress chips. Use 1px Hairline borders and short warm shadows rather than glass effects.

## Motion
- Drift the active host still slowly from scale 1.025 translate3d(-0.5%,0,0) to scale 1.075 translate3d(0.75%,-0.75%,0) over 16s, alternating direction. Pause drift with show playback and when the document is hidden.
- At each 12-second chapter boundary, exit the old featured-product card 8px downward over 160ms and enter the new card 12px upward with 96% to 100% scale over 280ms. Host caption and chapter progress update on the same clock tick.
- Append one deterministic seed chat message every 2.4 seconds while chat playback is active. New rows use a 180ms opacity and 6px rise; cap the rendered list at 30 rows while retaining user messages.
- Emit a small gift reaction at seconds 5, 13, 21, 29, 37, 45 and 53 of each show cycle. Move at most three original Lucide-based gift symbols up separate fixed lanes over 1400ms with a slight horizontal drift, then remove them.
- Open desktop drawers from the right over 320ms and mobile bottom sheets upward over 300ms using cubic-bezier(0.22,1,0.36,1); fade scrims over 180ms and never animate the background page.
- Pulse the cart badge once at 180ms after an addition. Coupon claiming draws one checkmark, toasts remain for 1800ms, and price changes crossfade without moving surrounding layout.
- The coupon timer updates numerically once per second without flipping or pulsing. At zero it remains at 00:00 and reads Offer ended; it never resets.
- Under prefers-reduced-motion, remove host drift, gift travel, staggered entrances, smooth scrolling and count pulses. Start the show paused and use immediate chapter changes with at most a 100ms opacity transition for overlays.

## Imagery
Use exactly six local AI-generated photographs: one wide editorial host scene and five square product still lifes. All share warm tungsten practical light, walnut and cream surfaces, restrained coral accents, soft contact shadows, tactile realistic materials and fine 35mm grain. The host is a fictional adult shown in a spacious wide or medium-wide working scene, never a tight face crop. Apply directional Canvas scrims behind text rather than darkening the whole photograph. Products must remain generic and unbranded with no lettering, packaging marks, logos or watermarks. Do not replace these photographs with real people, recognizable commercial designs or unrelated imagery when variables change.

## Tone
Warm, composed, convivial and specific. Write like a thoughtful studio host sharing useful details, with gentle audience energy rather than frantic sales pressure, exaggerated claims or platform clichés.

---
— Prompt by VibeFather · https://vibefather.ai/t/live-shopping-stream-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
