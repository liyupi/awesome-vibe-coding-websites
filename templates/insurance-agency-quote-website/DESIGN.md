---
name: "Insurance Agency Quote Website"
colors:
  parchment: "#F4F0E6"
  paper: "#FFFDF8"
  forest: "#183B35"
  pine: "#2E5B50"
  clay: "#C86F4B"
  sage: "#DCE5D8"
  muted: "#66736D"
  line: "#CBD3C8"
  error: "#9B3E35"
typography:
  display_headlines_section_titles_large_quote_numerals_and_the_wordmark: { family: "Fraunces", weights: [600, 700] }
  body_navigation_forms_reviews_checklists_captions_and_buttons: { family: "Public Sans", weights: [400, 500, 600, 700] }
spacing: "Use a 4px base grid and a 1280px maximum content width with 32px desktop gutters and 20px mobile gutters. Major sections use 112px vertical padding desktop and 72px mobile. Use a 12-column desktop grid with 24px gaps. H1 is clamp(46px, 5.2vw, 74px) Fraunces 600 with 1.01 line height and -0.035em tracking; inner-page H1 is clamp(44px, 4.8vw, 66px). H2 is clamp(34px, 3.5vw, 50px) with 1.08 line height; H3 is 25px. Body is 17px/1.65 with a 64ch maximum; small labels are 12px/1.4 Public Sans 700 uppercase with 0.13em tracking. Buttons and inputs are at least 50px high. Focus uses a 3px Pine outline with 3px offset on light surfaces and Paper on dark surfaces."
radius: "Use 28px radii on large photographic frames, 22px on major cards, 14px on quote and checklist panels, 12px on inputs, 10px on buttons, and fully rounded compact tags only. Cards use 1px Line borders rather than floating shadows; only the quote workspace gets a restrained 0 20px 55px Forest shadow at 8% opacity."
---

# Insurance Agency Quote Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Parchment** `#F4F0E6` — Main page background and warm editorial sections
- **Paper** `#FFFDF8` — Cards, forms, portrait captions, and text on Forest
- **Forest** `#183B35` — Primary text, dark bands, footer, and primary buttons
- **Pine** `#2E5B50` — Links, selected controls, focus rings, and secondary button fills
- **Clay** `#C86F4B` — Decorative rules, small icon tiles, step markers, and non-text accents
- **Sage** `#DCE5D8` — Quiet badges, selected backgrounds, progress tracks, and checklist panels
- **Muted** `#66736D` — Secondary copy, captions, helper text, and inactive progress labels
- **Line** `#CBD3C8` — Hairline borders, inputs, table rules, and card outlines
- **Error** `#9B3E35` — Validation messages and error borders, always paired with text and an icon

## Typography
- **Display headlines, section titles, large quote numerals, and the wordmark** — Fraunces (OFL), weights 600/700. Self-host the font files.
- **Body, navigation, forms, reviews, checklists, captions, and buttons** — Public Sans (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4px base grid and a 1280px maximum content width with 32px desktop gutters and 20px mobile gutters. Major sections use 112px vertical padding desktop and 72px mobile. Use a 12-column desktop grid with 24px gaps. H1 is clamp(46px, 5.2vw, 74px) Fraunces 600 with 1.01 line height and -0.035em tracking; inner-page H1 is clamp(44px, 4.8vw, 66px). H2 is clamp(34px, 3.5vw, 50px) with 1.08 line height; H3 is 25px. Body is 17px/1.65 with a 64ch maximum; small labels are 12px/1.4 Public Sans 700 uppercase with 0.13em tracking. Buttons and inputs are at least 50px high. Focus uses a 3px Pine outline with 3px offset on light surfaces and Paper on dark surfaces.
- Radius: Use 28px radii on large photographic frames, 22px on major cards, 14px on quote and checklist panels, 12px on inputs, 10px on buttons, and fully rounded compact tags only. Cards use 1px Line borders rather than floating shadows; only the quote workspace gets a restrained 0 20px 55px Forest shadow at 8% opacity.

## Motion
- On the home hero, reveal the eyebrow, headline lines, body, and CTAs with y 22 to 0 and opacity 0 to 1 over 600ms, staggered by 70ms; reveal hero.webp from clip-path inset(0 0 100% 0) to inset(0) over 850ms with scale 1.025 to 1.
- Reveal section headings and card groups once with y 18 and opacity over 480ms and a 60ms sibling stagger. Content remains visible without IntersectionObserver and is never hidden while waiting for animation.
- Quote steps enter with opacity and x 18 over 220ms and exit with x -12 over 160ms. Move focus to the new step heading after navigation. Progress fills use width over 240ms; answers never animate before they are visible.
- Mobile navigation opens with opacity and height over 220ms. Claims tabs use a 180ms content fade, and FAQ accordions use height and opacity over 200ms. Copy and print actions show concise text feedback without confetti.
- Coverage cards and agent cards use a 3px maximum hover lift with border-color transitions; no looping decoration, carousel, parallax, counting premiums, or animated star ratings.
- Respect prefers-reduced-motion through Motion's reduced-motion hook and CSS overrides: remove transforms, clip reveals, smooth scrolling, staggers, and nonessential transitions while preserving all final states and interactions.

## Imagery
Use the six supplied documentary editorial photographs as one coherent agency shoot: warm natural daylight, soft window light, muted forest green, parchment, terracotta, warm oak, realistic texture, and subtle 35mm grain. The hero is a wide welcoming home scene with any people distant and non-identifiable, never a face close-up. The three adult agents are fictional people who do not resemble any real individual, with varied age and ethnicity and consistent office light. The advisory and claims photographs make hands, conversation, and place more important than identity. No image contains readable text, logos, carrier materials, license cards, branded products, or recognizable real people. Use object-fit cover with the specified focal positions and descriptive alt text; never place text over a face. The open-door favicon, icons, progress graphics, and checklist marks are drawn in code. Do not substitute stock photos, initials avatars, or additional portraits.

## Tone
Warm, clear, steady, and specific. Sound like a patient local advisor rather than a carrier, call center, or aggressive lead funnel. Use short sentences, concrete examples, transparent limitations, no scare tactics, no savings promises, and no pressure countdowns.

---
— Prompt by VibeFather · https://vibefather.ai/t/insurance-agency-quote-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
