---
name: "Marketplace Shopping App"
colors:
  canvas: "#F7F4ED"
  surface: "#FFFFFF"
  ink: "#282330"
  teal: "#0F766E"
  raspberry: "#C73E67"
  sun: "#F4C95D"
  mist: "#E8E3DC"
typography:
  display_and_section_headings: { family: "Bricolage Grotesque Variable", weights: [600, 700, 800] }
  interface_product_data_reviews_and_body: { family: "Inter Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4 px base unit. App content max-width is 1360 px with 32 px desktop and 16 px mobile gutters. Header modules use 12–16 px gaps, product cards 12 px internal padding, major storefront modules 24 px vertical separation, and product/cart desktop columns 32 px separation. Keep touch targets at least 44×44 px."
radius: "Use 20 px for feature panels, 16 px for product and store cards, 12 px for images and inputs, and fully rounded chips only for filters, stock badges, and compact actions. Borders are 1 px Mist; shadows stay soft and shallow."
---

# Marketplace Shopping App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F7F4ED` — Warm ivory app background and generous gaps between dense modules
- **Surface** `#FFFFFF` — Product cards, search field, cart groups, dialogs, and sticky bars
- **Ink** `#282330` — Primary text, wordmark, icons, and high-contrast outlines
- **Teal** `#0F766E` — Primary actions, selected filters, links, and stock-positive messages
- **Raspberry** `#C73E67` — Flash-sale accents, price emphasis, badges, and claimed-coupon details
- **Sun** `#F4C95D` — Coupon panels, rating stars, and small moments of promotional warmth
- **Mist** `#E8E3DC` — Dividers, disabled controls, skeletons, and subtle card borders

## Typography
- **Display and section headings** — Bricolage Grotesque Variable (OFL), weights 600/700/800. Self-host the font files.
- **Interface, product data, reviews, and body** — Inter Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4 px base unit. App content max-width is 1360 px with 32 px desktop and 16 px mobile gutters. Header modules use 12–16 px gaps, product cards 12 px internal padding, major storefront modules 24 px vertical separation, and product/cart desktop columns 32 px separation. Keep touch targets at least 44×44 px.
- Radius: Use 20 px for feature panels, 16 px for product and store cards, 12 px for images and inputs, and fully rounded chips only for filters, stock badges, and compact actions. Borders are 1 px Mist; shadows stay soft and shallow.

## Motion
- Use 160–220 ms ease-out transitions for hover lift, chip selection, cart badges, coupon claims, image changes, and button feedback; never delay a state update for an animation.
- Route changes use a restrained 180 ms fade and 8 px vertical settle; product gallery changes crossfade without zooming the entire page.
- New waterfall batches reveal with a subtle opacity rise, the cart badge gives one small pulse, and claimed coupons show a brief checkmark sweep.
- The sale countdown updates numerically once per second without flipping or pulsing; when it reaches zero it stays at zero and shows 'Offer ended' rather than restarting.
- Under prefers-reduced-motion, remove reveals, crossfades, pulses, smooth scrolling, and nonessential transitions while preserving immediate functionality.

## Imagery
Use exactly six local, AI-generated, unbranded studio product photographs listed in assets. All share realistic catalog photography, a warm ivory set, cobalt/teal/raspberry accents, soft upper-left daylight, crisp material texture, and gentle contact shadows. Reuse a photograph only within the same product family or its genuine reviews, with CSS crops for detail views; never rename one photograph as an unrelated product. No people, faces, text, logos, packaging brands, landmarks, or recognizable commercial product designs. The first screen's flash-sale composition must prominently feature product photography, not typography alone.

## Tone
Lively, warm, useful, and specific. Use concise shopping language, believable product details, transparent sample-data labels, and playful promotional moments without urgency tricks or real transaction claims.

---
— Prompt by VibeFather · https://vibefather.ai/t/marketplace-shopping-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
