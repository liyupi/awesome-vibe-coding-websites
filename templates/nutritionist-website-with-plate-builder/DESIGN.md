---
name: "Nutritionist Website with Plate Builder"
colors:
  cream: "#FBFAF6"
  white: "#FFFFFF"
  leaf_green: "#2E7D4F"
  leaf_tint: "#F0F7F1"
  citrus: "#F5A63B"
  spinach_ink: "#26332B"
  sage: "#DEE9DD"
  plate_veggie: "#4C9A5F"
  plate_protein: "#CC6B4A"
  plate_grain: "#DCA94E"
  plate_fats: "#8FA05C"
typography:
  display_headlines_prices_plate_readout_headings: { family: "Baloo 2", weights: [600, 700] }
  body_paragraphs_controls_chips_meta: { family: "Nunito", weights: [400, 600, 700] }
spacing: "8px base grid. Content shell max-width 1160px with 32px desktop and 20px mobile side padding. Header 72px. Desktop sections 96px vertical padding, mobile 64px. Card grids gap 24px. Prose blocks max 62 characters per line."
radius: "Pill 999px for buttons, chips, tags, and the logomark; 24px for photos, the plate card, and large panels; 16px for small cards and inputs. Photos get a 24px radius with a 1px sage border."
---

# Nutritionist Website with Plate Builder — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Cream** `#FBFAF6` — Page ground
- **White** `#FFFFFF` — Cards, chips, and the plate center
- **Leaf green** `#2E7D4F` — Primary: buttons, links, active states, logomark
- **Leaf tint** `#F0F7F1` — Section bands and soft chips
- **Citrus** `#F5A63B` — Accent: highlights, price ticks, selected-slot fills
- **Spinach ink** `#26332B` — Headings and body text
- **Sage** `#DEE9DD` — Hairline borders and dividers
- **Plate veggie** `#4C9A5F` — Plate-builder wedge fill for veggies and fruit
- **Plate protein** `#CC6B4A` — Plate-builder wedge fill for protein
- **Plate grain** `#DCA94E` — Plate-builder wedge fill for whole grains
- **Plate fats** `#8FA05C` — Plate-builder wedge fill for good fats and extras

## Typography
- **Display: headlines, prices, plate readout headings** — Baloo 2 (OFL), weights 600/700. Self-host the font files.
- **Body: paragraphs, controls, chips, meta** — Nunito (OFL), weights 400/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base grid. Content shell max-width 1160px with 32px desktop and 20px mobile side padding. Header 72px. Desktop sections 96px vertical padding, mobile 64px. Card grids gap 24px. Prose blocks max 62 characters per line.
- Radius: Pill 999px for buttons, chips, tags, and the logomark; 24px for photos, the plate card, and large panels; 16px for small cards and inputs. Photos get a 24px radius with a 1px sage border.

## Motion
- Sections reveal once on scroll: 14px rise with a 450ms ease-out fade, sibling cards staggered 60ms. Disabled under prefers-reduced-motion.
- Hero: the produce photo scales from 1.04 to 1 over 700ms while the copy lines rise 16px with an 80ms stagger.
- Plate builder: a newly added wedge springs in (stiffness 260, damping 20) and the newest wedge pulses once; the readout heading crossfades over 200ms and the score number tweens over 300ms.
- Hover states lift cards 4px with a soft shadow, 180ms. No page drift, no custom cursor, no autoplay media.
- With prefers-reduced-motion: reduce, replace springs, tweens, and reveals with 100ms opacity changes; every interaction stays fully functional.

## Imagery
One photographic set, one shoot: fresh produce and finished dishes in a consistent airy daylight grade — white marble and light oak surfaces, soft window light from the upper left, high-key whites, gentle warm highlights, leafy greens and citrus dominant. Six generated photos (hero produce spread, three plated recipes, the coaching kitchen, a market basket); no faces, no hands, no readable packaging or logos. The plate ring, icons, logomark, and decorative arcs are drawn in code, never photographed.

## Tone
Warm, plain-spoken, and appetizing — a cook in a sunny kitchen, never a clinic. Short sentences, real food words, gentle humor. Coaching talks skills, shopping, and habits; it never diagnoses, treats, prescribes, or promises weight or medical outcomes.

---
— Prompt by VibeFather · https://vibefather.ai/t/nutritionist-website-with-plate-builder · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
