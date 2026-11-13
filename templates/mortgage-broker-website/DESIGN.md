---
name: "Mortgage Broker Website"
colors:
  parchment: "#F4F0E6"
  paper: "#FCFAF5"
  ink: "#1E2924"
  muted: "#667169"
  pine: "#285844"
  pine_light: "#DDE8DE"
  sand: "#D7B98A"
  rule: "#D9D4C8"
  footer: "#1D332B"
typography:
  display_for_h1_h2_h3_wordmark_and_the_large_monthly_payment: { family: "Newsreader Variable", weights: [400, 500, 600] }
  interface_and_body_for_navigation_labels_buttons_tables_disclosures_and_form_controls: { family: "Manrope Variable", weights: [400, 500, 600, 700] }
spacing: "8px base unit. Centered container max-width 1180px with 40px desktop side padding, 28px tablet, and 20px below 640px; 12-column grid with 24px gutters. Header 72px. Hero padding 48px top and 80px bottom; other sections 96px desktop, 72px tablet, 56px mobile. H1 Newsreader 500, clamp(46px, 5.2vw, 68px), line-height 1.02, letter-spacing -0.035em; H2 clamp(34px, 3.6vw, 48px), line-height 1.08, letter-spacing -0.025em; H3 24px / 1.2; lead 18px / 1.65; body 16px / 1.7, max 65ch; labels 13px / 1.4 weight 700; eyebrows 11px uppercase, letter-spacing 0.17em. Calculator payment Newsreader 500, 52px, Pine. Buttons and inputs 48px minimum height; primary buttons Pine with Paper text, secondary buttons transparent with Ink 1px border. All interactive elements get a 2px Pine focus outline with 3px offset."
radius: "18px for major cards and photographs, 12px for inputs and small panels, 999px only for chips, segmented controls, and pills. Use 1px Rule borders and almost no shadow; only the hero calculator gets 0 18px 50px rgba(30,41,36,0.08)."
---

# Mortgage Broker Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Parchment** `#F4F0E6` — Main page background and generous negative space.
- **Paper** `#FCFAF5` — Calculator, form, table, and profile card surfaces.
- **Ink** `#1E2924` — Headlines, primary body text, and dark icons.
- **Muted** `#667169` — Secondary copy, labels, captions, and assumptions; never use for text below 13px.
- **Pine** `#285844` — Primary buttons, links, selected controls, chart principal area, and focus rings.
- **Pine Light** `#DDE8DE` — Selected chips, calculator result wash, and soft section bands.
- **Sand** `#D7B98A` — Interest series in the amortization chart and small data highlights only.
- **Rule** `#D9D4C8` — One-pixel borders, table rules, input outlines, and chart grid lines.
- **Footer** `#1D332B` — Footer background with Paper text and Pine Light secondary text.

## Typography
- **Display for H1, H2, H3, wordmark, and the large monthly payment** — Newsreader Variable (OFL), weights 400/500/600. Self-host the font files.
- **Interface and body for navigation, labels, buttons, tables, disclosures, and form controls** — Manrope Variable (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Centered container max-width 1180px with 40px desktop side padding, 28px tablet, and 20px below 640px; 12-column grid with 24px gutters. Header 72px. Hero padding 48px top and 80px bottom; other sections 96px desktop, 72px tablet, 56px mobile. H1 Newsreader 500, clamp(46px, 5.2vw, 68px), line-height 1.02, letter-spacing -0.035em; H2 clamp(34px, 3.6vw, 48px), line-height 1.08, letter-spacing -0.025em; H3 24px / 1.2; lead 18px / 1.65; body 16px / 1.7, max 65ch; labels 13px / 1.4 weight 700; eyebrows 11px uppercase, letter-spacing 0.17em. Calculator payment Newsreader 500, 52px, Pine. Buttons and inputs 48px minimum height; primary buttons Pine with Paper text, secondary buttons transparent with Ink 1px border. All interactive elements get a 2px Pine focus outline with 3px offset.
- Radius: 18px for major cards and photographs, 12px for inputs and small panels, 999px only for chips, segmented controls, and pills. Use 1px Rule borders and almost no shadow; only the hero calculator gets 0 18px 50px rgba(30,41,36,0.08).

## Motion
- Use --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for entrances and --ease-io cubic-bezier(0.65, 0, 0.35, 1) for interface changes. Movement is functional and restrained.
- Reveal major section headers and cards from opacity 0 and translateY(16px) to rest over 600ms when 15% visible, once, with 70ms sibling stagger using Motion whileInView.
- Hero copy and photograph fade-rise in sequence; the calculator enters from translateY(12px) after 120ms. No parallax, cursor follower, autoplay carousel, or looping ambient animation.
- Calculator result numbers tween to updated values over 250ms with Motion animate, canceling the previous tween on new input. SVG chart paths update immediately and crossfade from 65% to 100% opacity over 180ms; never animate on every keystroke beyond these short transitions.
- Rate rows highlight with a Pine Light background over 150ms on hover; loan-card icons translate no more than 2px. Anchor scrolling uses smooth behavior only when reduced motion is not requested.
- Application steps crossfade and translateX(10px) over 220ms; validation errors appear without shaking. FAQ chevrons rotate 180 degrees over 180ms.
- For prefers-reduced-motion: reduce, disable reveals, smooth scrolling, number tweens, chart fades, and step transforms; show final values immediately while retaining color and border state changes.

## Imagery
Use exactly three warm editorial generated photographs with soft morning light, cream, cedar, pine, and sand tones. hero-home.webp is a spacious generic home exterior, never a landmark; broker-maya.webp is a medium working portrait of a fictional person not resembling any real individual, supplied as a replaceable placeholder for [BROKER]; planning-desk.webp is a people-free still life with blank papers. Apply 18px corners, object-fit cover, and the object-position specified under Assets. Do not put text or logos over faces. Draw the amortization chart, favicon, small step numerals, and UI ornaments in SVG/CSS. Use lucide-react icons at 1.6px stroke, never brand or government icons.

## Tone
Warm, precise, and unhurried. Use plain US English, short sentences, and specific examples. Explain necessary terms without condescension. Never use urgency, pressure, jargon-heavy sales copy, or homeownership clichés about dreams coming true.

---
— Prompt by VibeFather · https://vibefather.ai/t/mortgage-broker-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
