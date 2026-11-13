---
name: "Food Truck Website"
colors:
  warm_paper: "#F6EDDA"
  charcoal: "#24231F"
  tomato: "#D94F35"
  pickle_green: "#244C3F"
  turmeric: "#F2B84B"
typography:
  display_and_section_headings: { family: "Bricolage Grotesque Variable", weights: [600, 700, 800] }
  body_navigation_forms_and_labels: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base unit. Cap the content at 1440px with 24px mobile and 48px desktop gutters. Use a 12-column desktop grid with 24px gaps, 72px mobile and 112px desktop section padding, 16px label-to-heading gaps, and 28–40px paragraph-to-action gaps. Keep prose to 62 characters and schedule rows at least 72px tall."
radius: "Use 10px for inputs and buttons, 18px for content cards, 28px for large image frames, and fully rounded pills only for dietary and status badges. Give major images and selected controls a 2px Charcoal outline; reserve a 5px by 5px hard shadow for the primary CTA and avoid nested floating cards."
---

# Food Truck Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Warm Paper** `#F6EDDA` — Primary page background and light text on dark green.
- **Charcoal** `#24231F` — Headlines, body copy, outlines, and hard-shadow details.
- **Tomato** `#D94F35` — Daily-special accents, selected pins, and small editorial highlights.
- **Pickle Green** `#244C3F` — Location section, primary buttons, and footer background.
- **Turmeric** `#F2B84B` — Badges, active schedule markers, and small graphic accents.

## Typography
- **Display and section headings** — Bricolage Grotesque Variable (OFL), weights 600/700/800. Self-host the font files.
- **Body, navigation, forms, and labels** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base unit. Cap the content at 1440px with 24px mobile and 48px desktop gutters. Use a 12-column desktop grid with 24px gaps, 72px mobile and 112px desktop section padding, 16px label-to-heading gaps, and 28–40px paragraph-to-action gaps. Keep prose to 62 characters and schedule rows at least 72px tall.
- Radius: Use 10px for inputs and buttons, 18px for content cards, 28px for large image frames, and fully rounded pills only for dietary and status badges. Give major images and selected controls a 2px Charcoal outline; reserve a 5px by 5px hard shadow for the primary CTA and avoid nested floating cards.

## Motion
- On initial load, reveal the hero eyebrow, headline, copy, and actions from 18px below with a 70ms stagger over 500ms; settle the truck photograph from scale 1.035 to 1 over 700ms.
- Reveal each major section once with Motion whileInView using opacity 0 to 1 and a 24px rise over 450ms; content must remain visible if the observer or JavaScript motion fails.
- When a schedule day is selected, crossfade its detail text over 160ms and grow the matching SVG pin from 0.85 to 1 with a 180ms spring; never pan or zoom the map.
- On hover, shift primary buttons by 2px into their hard shadow and move arrow icons 3px right; FAQ chevrons rotate 180 degrees and mobile navigation fades over 180ms.
- Under prefers-reduced-motion, remove reveals, smooth scrolling, scaling, and nonessential transitions so every state appears immediately.

## Imagery
Use exactly six locally bundled, AI-generated documentary photographs with warm late-afternoon desert light, tactile surfaces, and a coordinated cream, terracotta, green, and turmeric palette. The hero is a wide environmental photograph of an original unbranded food truck, not a face close-up; dish photographs carry the menu, and cropped hands or a catering spread add human scale without recognizable faces. Draw the map as an original inline SVG with slightly irregular double-line roads, six numbered pins, tiny block shapes, and legible neighborhood labels. Do not substitute remote stock, generic colored placeholders, food illustrations, or additional photography.

## Tone
Warm, quick, generous, and plainly spoken, with the energy of a hand-painted sidewalk board rather than a corporate restaurant chain.

---
— Prompt by VibeFather · https://vibefather.ai/t/food-truck-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
