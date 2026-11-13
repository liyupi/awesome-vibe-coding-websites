---
name: "Car Rental Booking Website"
colors:
  canvas: "#F4F1EA"
  surface: "#FFFEFA"
  ink: "#14251F"
  muted: "#65716B"
  line: "#D9DDD5"
  cobalt: "#2855D9"
  cobalt_dark: "#1D3FA6"
  sun: "#E7B95C"
  forest: "#10231C"
typography:
  display_and_vehicle_names: { family: "Bricolage Grotesque Variable, sans-serif", weights: [600, 700] }
  body_labels_prices_and_controls: { family: "Inter Variable, sans-serif", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid and a 1320px max-width container with 32px desktop gutters and 20px mobile gutters. Desktop sections have 112px vertical padding, compact app views 48px, and mobile sections 72px. Hero heading is 76px/0.96 with -0.045em tracking on desktop and 44px/1.02 on mobile; section headings are 42px/1.08 desktop and 32px mobile; body copy is 16px/1.65; labels are 12px/1.3 with 0.08em uppercase tracking. Form controls are at least 48px high with 12px vertical and 16px horizontal padding."
radius: "Use 28px for the hero and large media, 20px for vehicle and summary cards, 14px for inputs and option cards, and 999px for buttons, chips, and small badges. Use 1px Line borders and soft 0 16px 48px rgba(20,37,31,0.08) shadows only on floating search, drawer, and sticky-summary surfaces."
---

# Car Rental Booking Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Canvas** `#F4F1EA` — Main warm-stone page background
- **Surface** `#FFFEFA` — Cards, forms, search panel, and checkout surfaces
- **Ink** `#14251F` — Headings, primary text, and dark buttons
- **Muted** `#65716B` — Secondary text and specification labels
- **Line** `#D9DDD5` — Hairline borders, separators, and inactive controls
- **Cobalt** `#2855D9` — Primary actions, selected filters, links, and focus rings
- **Cobalt Dark** `#1D3FA6` — Primary-action hover state
- **Sun** `#E7B95C` — Small recommendation badges and confirmation accent only
- **Forest** `#10231C` — Closing callout and footer background

## Typography
- **Display and vehicle names** — Bricolage Grotesque Variable, sans-serif (OFL), weights 600/700. Self-host the font files.
- **Body, labels, prices, and controls** — Inter Variable, sans-serif (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid and a 1320px max-width container with 32px desktop gutters and 20px mobile gutters. Desktop sections have 112px vertical padding, compact app views 48px, and mobile sections 72px. Hero heading is 76px/0.96 with -0.045em tracking on desktop and 44px/1.02 on mobile; section headings are 42px/1.08 desktop and 32px mobile; body copy is 16px/1.65; labels are 12px/1.3 with 0.08em uppercase tracking. Form controls are at least 48px high with 12px vertical and 16px horizontal padding.
- Radius: Use 28px for the hero and large media, 20px for vehicle and summary cards, 14px for inputs and option cards, and 999px for buttons, chips, and small badges. Use 1px Line borders and soft 0 16px 48px rgba(20,37,31,0.08) shadows only on floating search, drawer, and sticky-summary surfaces.

## Motion
- On initial home load, reveal the hero photograph with a 600ms clip-path inset animation and lift the search panel 16px into place over 450ms; do not animate the headline letter by letter.
- Use AnimatePresence with 180ms opacity and 8px vertical transitions when result cards reorder or disappear after filtering. Update the result count immediately and never delay interaction for animation.
- Route changes use a 220ms fade and 10px upward settle. Checkout steps use the same 220ms horizontal-free transition, with focus moved to the new step heading.
- When a price input changes, flash the total's background from rgba(40,85,217,0.10) to transparent over 180ms without rolling or scrambling digits.
- Mobile filter and summary drawers slide 24px from the bottom over 240ms with a dimmed backdrop; trap focus, close on Escape, and restore focus to the trigger.
- Disable nonessential transforms, clip reveals, and smooth scrolling under prefers-reduced-motion; state changes must remain immediate and understandable.

## Imagery
Use one coherent set of six locally bundled editorial automotive photographs: a wide generic crossover in an open Pacific Northwest-inspired road scene for the hero, plus five generic unbranded vehicles on a consistent warm concrete lot with a soft forest edge. Warm overcast daylight, muted stone and forest tones, subtle cobalt details, and restrained 35mm-style perspective unify the set. Every vehicle must be a fictional generic shape with smooth simple panels, blank plates, no badges, no logos, no text, and no resemblance to a production model. No people are needed. Crop card images at 4:3 and the hero at 16:9 with object-fit: cover; the selected vehicle image becomes the large visual anchor on the detail view.

## Tone
Calm, precise, and travel-literate rather than aggressive or luxury-obsessed. Use concise labels, specific inclusions, plain-language policies, and warm editorial copy. The interface should feel dependable and tactile, with no pressure timers, invented scarcity, or hidden fees.

---
— Prompt by VibeFather · https://vibefather.ai/t/car-rental-booking-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
