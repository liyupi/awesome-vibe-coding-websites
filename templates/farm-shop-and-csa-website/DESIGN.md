---
name: "Farm Shop and CSA Website"
colors:
  field: "#24362A"
  ink: "#30352D"
  cream: "#F3EDDF"
  paper: "#FFFBF2"
  sage: "#D7DFC8"
  terracotta: "#A94328"
  pollen: "#E8B44F"
typography:
  display_and_section_headings: { family: "Fraunces Variable", weights: [400, 500, 600] }
  body_navigation_controls_and_data: { family: "DM Sans Variable", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid, a 1280px maximum content width, 32px desktop gutters and 20px mobile gutters. Desktop sections have 104–128px vertical padding; mobile sections have 64–76px. Hero headline is clamp(3.5rem, 6vw, 6.5rem) with 0.94 line-height, section headings are clamp(2.25rem, 4vw, 4rem), and body copy stays within 62 characters per line."
radius: "Use restrained 2px radii on buttons and inputs, 14px on product and summary surfaces, and one distinctive 160px upper-left arch on the hero photograph. Use 1px Field borders at 18% opacity and soft, short shadows rather than floating every section in a card."
---

# Farm Shop and CSA Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Field** `#24362A` — Deep green header, footer, primary text, and dark section background
- **Ink** `#30352D` — Body copy and readable secondary text
- **Cream** `#F3EDDF` — Main page background
- **Paper** `#FFFBF2` — Product surfaces, forms, and calendar rows
- **Sage** `#D7DFC8` — Selected controls, subtle bands, and availability accents
- **Terracotta** `#A94328` — Primary buttons, active links, and key prices; pair with white text
- **Pollen** `#E8B44F` — Small seasonal markers and decorative highlights only

## Typography
- **Display and section headings** — Fraunces Variable (OFL), weights 400/500/600. Self-host the font files.
- **Body, navigation, controls, and data** — DM Sans Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid, a 1280px maximum content width, 32px desktop gutters and 20px mobile gutters. Desktop sections have 104–128px vertical padding; mobile sections have 64–76px. Hero headline is clamp(3.5rem, 6vw, 6.5rem) with 0.94 line-height, section headings are clamp(2.25rem, 4vw, 4rem), and body copy stays within 62 characters per line.
- Radius: Use restrained 2px radii on buttons and inputs, 14px on product and summary surfaces, and one distinctive 160px upper-left arch on the hero photograph. Use 1px Field borders at 18% opacity and soft, short shadows rather than floating every section in a card.

## Motion
- Reveal major section headings and content with a 24px upward movement and opacity transition over 500ms, staggered by 70ms and triggered once at 15% visibility.
- Move the hero photograph no more than 40px on scroll with a restrained parallax effect; keep the headline and controls stationary.
- Crossfade seasonal rows and share-manifest changes in 160–220ms without changing container height.
- Drawers and modals use a 240ms ease-out transform and fade, trap keyboard focus, close on Escape, and restore focus to their trigger.
- Hover product images scale to at most 1.025 and buttons shift by no more than 2px; all nonessential animation is removed for reduced motion.

## Imagery
Use the six supplied documentary-style farm photographs as one coherent shoot: warm golden-hour light, muted forest green, cream and terracotta, realistic textures, and gentle 35mm grain. The first screen must show the large harvest scene, not typography alone. Product cards use the supplied still lifes, and the story uses the environmental working portrait with no visible face. Do not add other photos, recognizable people, text within images, logos, or branded packaging. Crop with object-fit while preserving the subject and supply the listed alt text.

## Tone
Warm, plain-spoken, capable, and rooted in daily farm work. Use concrete crop names, quantities, prices, hours, and pickup instructions; avoid rustic clichés, health claims, sustainability superlatives, and faux handwritten slogans.

---
— Prompt by VibeFather · https://vibefather.ai/t/farm-shop-and-csa-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
