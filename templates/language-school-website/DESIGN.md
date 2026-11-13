---
name: "Language School Website"
colors:
  paper: "#F7F3EA"
  ink: "#19352F"
  persimmon: "#E76F51"
  cobalt: "#3157D5"
  sage: "#B7C9A8"
  chalk: "#FFFCF7"
typography:
  display_and_section_headlines: { family: "Fraunces", weights: [500, 600, 700] }
  body_navigation_forms_and_tables: { family: "DM Sans", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid, a 1280px maximum content width, 32px desktop gutters and 20px mobile gutters. Sections have 112px vertical padding on desktop and 72px on mobile. Use a 12-column desktop grid, 24px card gaps, and generous 40–56px internal padding for major interactive panels."
radius: "Use 24px card radii, 32px image-frame radii, 12px input radii, and fully rounded buttons and filter chips. Major surfaces have a 1px Ink border at 18% opacity; avoid heavy drop shadows."
---

# Language School Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F7F3EA` — Main page background and quiet section fills
- **Ink** `#19352F` — Headlines, body text, borders, and dark footer
- **Persimmon** `#E76F51` — Primary buttons, active quiz states, and small editorial accents
- **Cobalt** `#3157D5` — Secondary links, level chips, and focus rings
- **Sage** `#B7C9A8` — Course-card washes, progress tracks, and decorative shapes
- **Chalk** `#FFFCF7` — Cards, form surfaces, and text on Ink or Persimmon

## Typography
- **Display and section headlines** — Fraunces (OFL), weights 500/600/700. Self-host the font files.
- **Body, navigation, forms, and tables** — DM Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid, a 1280px maximum content width, 32px desktop gutters and 20px mobile gutters. Sections have 112px vertical padding on desktop and 72px on mobile. Use a 12-column desktop grid, 24px card gaps, and generous 40–56px internal padding for major interactive panels.
- Radius: Use 24px card radii, 32px image-frame radii, 12px input radii, and fully rounded buttons and filter chips. Major surfaces have a 1px Ink border at 18% opacity; avoid heavy drop shadows.

## Motion
- On hero load, rise the two headline lines 32px with a 650ms ease-out and stagger them by 90ms; settle the photograph from scale 1.04 to 1 over 900ms.
- Reveal section headings and card groups once with opacity 0 to 1 and y 24 to 0 over 550ms, staggered by 70ms; never hide content while waiting for JavaScript.
- Crossfade and slide quiz questions by 20px over 240ms, animate the progress bar width over 300ms, and announce the final level through aria-live.
- Animate filtered course layouts with Motion layout transitions, lift course cards 4px on hover, and scale teacher portraits only to 1.025.
- Use reduced-motion hooks and a prefers-reduced-motion CSS override to remove transforms, smooth scrolling, and nonessential transitions while preserving every final state.

## Imagery
Use the six supplied warm editorial documentary photographs as one coherent shoot: creamy walls, forest-green furnishings, restrained persimmon accents, soft window light, natural 35mm texture, and diverse fictional adults. The hero is a spacious classroom scene rather than a face close-up. Teacher portraits are consistent half-length working portraits of fictional people who do not resemble any real individual. Do not add readable text, logos, famous landmarks, or recognizable real people to any image.

## Tone
Warm, articulate, encouraging, and practical. Use concise educational language, concrete class details, and no guarantees about fluency, accreditation, or outcomes.

---
— Prompt by VibeFather · https://vibefather.ai/t/language-school-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
