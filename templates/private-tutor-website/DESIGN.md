---
name: "Private Tutor Website"
colors:
  chalk: "#F7F4EC"
  midnight: "#172A3A"
  periwinkle: "#5B6BB2"
  apricot: "#D89A3D"
  mist: "#DDE7E0"
  paper: "#FFFDF8"
typography:
  display_tutor_quotations_and_section_headlines: { family: "Lora", weights: [500, 600, 700] }
  body_navigation_prices_calendar_and_forms: { family: "Manrope", weights: [400, 500, 600, 700] }
spacing: "Use an 8px base grid, a 1240px maximum content width, 32px desktop gutters and 20px mobile gutters. Sections have 104px vertical padding on desktop and 68px on mobile. Use a 12-column desktop grid, 24px card gaps, and 32–48px internal padding for major interactive panels. Keep paragraphs near 62 characters per line."
radius: "Use 20px card radii, 28px image-frame radii, 10px input radii, and fully rounded buttons and tabs. Major surfaces have a 1px Midnight border at 16% opacity and a restrained 0 12px 36px Midnight shadow at 6% opacity only on the booking panel."
---

# Private Tutor Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Chalk** `#F7F4EC` — Main page background and quiet editorial sections
- **Midnight** `#172A3A` — Headlines, body text, borders, primary buttons, and dark footer
- **Periwinkle** `#5B6BB2` — Subject tabs, selected calendar states, links, and focus rings
- **Apricot** `#D89A3D` — Small notebook-inspired accents and highlight rules with Midnight text
- **Mist** `#DDE7E0` — Secondary panels, availability washes, and progress tracks
- **Paper** `#FFFDF8` — Cards, forms, image captions, and text on Midnight or Periwinkle

## Typography
- **Display, tutor quotations, and section headlines** — Lora (OFL), weights 500/600/700. Self-host the font files.
- **Body, navigation, prices, calendar, and forms** — Manrope (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid, a 1240px maximum content width, 32px desktop gutters and 20px mobile gutters. Sections have 104px vertical padding on desktop and 68px on mobile. Use a 12-column desktop grid, 24px card gaps, and 32–48px internal padding for major interactive panels. Keep paragraphs near 62 characters per line.
- Radius: Use 20px card radii, 28px image-frame radii, 10px input radii, and fully rounded buttons and tabs. Major surfaces have a 1px Midnight border at 16% opacity and a restrained 0 12px 36px Midnight shadow at 6% opacity only on the booking panel.

## Motion
- On hero load, rise the eyebrow and two headline lines 26px with a 600ms ease-out and stagger them by 80ms; settle the photograph from scale 1.035 to 1 over 850ms.
- Reveal section headings and card groups once with opacity 0 to 1 and y 22 to 0 over 500ms, staggered by 65ms; content remains visible if JavaScript or IntersectionObserver is unavailable.
- Crossfade and slide subject-level panels by 16px over 220ms, move the active tab underline with a layout transition, and preserve keyboard focus on the selected tab.
- Animate selected calendar slots with a 180ms background and border transition; expand the booking summary with opacity and height over 220ms without shifting the calendar unexpectedly.
- Use reduced-motion hooks and a prefers-reduced-motion CSS override to remove transforms, smooth scrolling, and nonessential transitions while preserving every final state.

## Imagery
Use the four supplied warm editorial documentary photographs as one coherent shoot featuring the same fictional tutor: chalk-white plaster, light oak, midnight-blue shelving, restrained periwinkle clothing, small apricot accents, soft late-afternoon window light, natural skin texture, and subtle 35mm grain. The hero is a spacious working scene rather than a tight face close-up. The tutor and any student are fictional people who do not resemble any real individual. Use no readable text, logos, famous landmarks, branded products, or real student imagery.

## Tone
Warm, calm, intelligent, and practical. Write like a thoughtful tutor who explains the next step clearly. Use specific educational details, avoid pressure, and never promise grades, admissions, or guaranteed improvement.

---
— Prompt by VibeFather · https://vibefather.ai/t/private-tutor-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
