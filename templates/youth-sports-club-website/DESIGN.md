---
name: "Youth Sports Club Website"
colors:
  chalk: "#F6F3EA"
  paper: "#FFFEF8"
  forest: "#173F35"
  field: "#2E6B4F"
  volt: "#D8F45D"
  ink: "#17221C"
  slate: "#647067"
  line: "#D8DDD2"
  clay: "#C95D43"
typography:
  display_headlines_score_numerals_squad_names_and_the_wordmark: { family: "Barlow Condensed", weights: [600, 700] }
  body_navigation_tables_forms_captions_and_parent_information: { family: "Manrope", weights: [400, 500, 600, 700, 800] }
spacing: "Use an 8px base grid and a 1240px maximum content width with 40px desktop gutters, 28px tablet gutters, and 18px mobile gutters. Major sections use 96px vertical padding desktop and 64px mobile. Use a 12-column desktop grid with 24px gaps. H1 is clamp(58px, 7vw, 96px) Barlow Condensed 700 with 0.94 line height; page H1 is clamp(50px, 6vw, 78px); H2 is clamp(38px, 4vw, 56px) with 0.98 line height; H3 is 26px. Body is 16px/1.7 with a 65ch maximum; small metadata is 12px/1.4 Manrope 800 uppercase with 0.12em tracking. Tables use 14px with tabular numerals. Buttons and inputs are at least 48px high. Focus uses a 2px Volt outline plus a 2px Forest outer ring on light surfaces."
radius: "Use 18px radii on photographic frames and major cards, 12px on tables and forms, 8px on inputs, and fully rounded chips and buttons. Cards use 1px Line borders rather than heavy shadows; only the registration summary gets a restrained 0 16px 44px Forest shadow at 8% opacity."
---

# Youth Sports Club Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Chalk** `#F6F3EA` — Main page background and quiet information sections
- **Paper** `#FFFEF8` — Cards, forms, table surfaces, and text on Forest
- **Forest** `#173F35` — Primary buttons, dark bands, footer, headings, and selected controls
- **Field** `#2E6B4F` — Links, secondary badges, field-line details, and hover states
- **Volt** `#D8F45D` — Primary accent for CTAs, active sort indicators, score highlights, and focus details
- **Ink** `#17221C` — Body text and table numerals on light surfaces
- **Slate** `#647067` — Secondary text, captions, metadata, and disabled states
- **Line** `#D8DDD2` — Hairline borders, table rules, inputs, and card outlines
- **Clay** `#C95D43` — Small loss or cancellation status accents; never the sole status signal

## Typography
- **Display headlines, score numerals, squad names, and the wordmark** — Barlow Condensed (OFL), weights 600/700. Self-host the font files.
- **Body, navigation, tables, forms, captions, and parent information** — Manrope (OFL), weights 400/500/600/700/800. Self-host the font files.

## Spacing & shape
- Spacing: Use an 8px base grid and a 1240px maximum content width with 40px desktop gutters, 28px tablet gutters, and 18px mobile gutters. Major sections use 96px vertical padding desktop and 64px mobile. Use a 12-column desktop grid with 24px gaps. H1 is clamp(58px, 7vw, 96px) Barlow Condensed 700 with 0.94 line height; page H1 is clamp(50px, 6vw, 78px); H2 is clamp(38px, 4vw, 56px) with 0.98 line height; H3 is 26px. Body is 16px/1.7 with a 65ch maximum; small metadata is 12px/1.4 Manrope 800 uppercase with 0.12em tracking. Tables use 14px with tabular numerals. Buttons and inputs are at least 48px high. Focus uses a 2px Volt outline plus a 2px Forest outer ring on light surfaces.
- Radius: Use 18px radii on photographic frames and major cards, 12px on tables and forms, 8px on inputs, and fully rounded chips and buttons. Cards use 1px Line borders rather than heavy shadows; only the registration summary gets a restrained 0 16px 44px Forest shadow at 8% opacity.

## Motion
- On the home hero, reveal the eyebrow, headline lines, body, and CTAs with y 24 to 0 and opacity 0 to 1 over 600ms, staggered by 75ms; settle hero-match.webp from scale 1.035 to 1 over 900ms.
- Reveal section headings and card groups once with y 18 and opacity over 480ms and a 60ms sibling stagger. Content remains visible without IntersectionObserver and is never hidden while waiting for animation.
- Filter fixture cards with a 180ms opacity and y 8 transition; animate standings row order with a 240ms layout transition and rotate the active sort arrow without animating the numbers.
- Mobile navigation opens with opacity and height over 220ms. Accordions use height and opacity over 200ms. Selected squad, kit, and payment controls use color and border transitions only.
- Registration success replaces the form in place over 220ms and moves focus to its heading. Do not shake invalid fields or animate fee totals with counting effects.
- Respect prefers-reduced-motion through Motion's reduced-motion hook and CSS overrides: remove transforms, smooth scrolling, staggers, and nonessential transitions while preserving all final states and interactions.

## Imagery
Use the six supplied documentary editorial sports photographs as one coherent shoot: natural grass, plain forest-green and chalk unbranded kits, warm late-afternoon sunlight, realistic texture, and subtle 35mm grain. Youth players are visible only from behind, at distance, or in non-identifiable profile; no recognizable child appears. The three adult coaches are fictional people who do not resemble any real individual. No image contains readable text, squad numbers, logos, sponsors, branded products, or recognizable venues. Use object-fit cover with the specified focal positions and descriptive alt text; never place text over a face. Field lines, the corner-flag favicon, score rules, icons, and small diagrams are drawn in code.

## Tone
Energetic, welcoming, organized, and specific. Sound like a capable community club rather than a professional franchise. Use short direct sentences, concrete times and fees, no hype, no guaranteed development claims, and no pressure tactics.

---
— Prompt by VibeFather · https://vibefather.ai/t/youth-sports-club-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
