---
name: "Online Grocery Delivery Store"
colors:
  white: "#FFFFFF"
  cream: "#FAFAF7"
  leaf: "#2DB34A"
  leafdark: "#187A2E"
  tomato: "#FF5A3C"
  tomatodark: "#D93A1E"
  banana: "#FFE066"
  ink: "#1B2420"
  muted: "#56635C"
  line: "#E6EAE6"
typography:
  display_headings_prices_wordmark: { family: "Baloo 2", weights: [600, 800] }
  body_ui: { family: "Nunito", weights: [400, 600, 700] }
  mono_units_weights_slot_times: { family: "DM Mono", weights: [400, 500] }
spacing: "Page max-w-[1240px] px-6; product cards p-3 with a 14px radius; section padding py-16; 8px rhythm."
radius: "Cards 14px; tiles 12px; buttons 10px; chips and steppers rounded-full."
---

# Online Grocery Delivery Store — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **white** `#FFFFFF` — Page ground and cards
- **cream** `#FAFAF7` — Subtle panels
- **leaf** `#2DB34A` — Leaf green: accents, badges and chips with ink text
- **leafDark** `#187A2E` — Buttons and free-delivery meter with white text
- **tomato** `#FF5A3C` — Tomato: badges and highlights with ink text
- **tomatoDark** `#D93A1E` — Tomato for small text such as prices and sold-out labels
- **banana** `#FFE066` — Banana yellow: the hero panel and the search field, with ink text
- **ink** `#1B2420` — Text
- **muted** `#56635C` — Secondary text
- **line** `#E6EAE6` — Borders and dividers

## Typography
- **Display / headings, prices, wordmark** — Baloo 2 (OFL), weights 600/800. Self-host the font files.
- **Body / UI** — Nunito (OFL), weights 400/600/700. Self-host the font files.
- **Mono / units, weights, slot times** — DM Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Page max-w-[1240px] px-6; product cards p-3 with a 14px radius; section padding py-16; 8px rhythm.
- Radius: Cards 14px; tiles 12px; buttons 10px; chips and steppers rounded-full.

## Motion
- Adding an item: a small leaf-green badge on the basket icon counts up and the card's stepper pops from scale 0.9.
- The free-delivery meter bar animates to its new width 300ms.
- Filter and search changes fade the grid 200ms; the recipe page's 'Added' confirmation fades in and out.
- Scroll reveals: the hero text and the recipe cards fade up 20px over 400ms, once; content is visible by default.
- prefers-reduced-motion: everything updates instantly.

## Imagery
Product photographs from one bright studio shoot on pure white, plain packaging with no writing, no brand labels, no logos. Each product is one cell of a 3 × 3 sheet and is cropped in code. One lifestyle photograph of a crate of produce on a doorstep.

## Tone
Cheerful and practical: short product names, clear prices, no supermarket slogans.

---
— Prompt by VibeFather · https://vibefather.ai/t/online-grocery-delivery-store · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
