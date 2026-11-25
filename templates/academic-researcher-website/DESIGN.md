---
name: "Academic Researcher Website"
colors:
  paper: "#FAFAF7"
  navy: "#1C2B4A"
  navytint: "#EEF1F7"
  burgundy: "#8C1C3E"
  ink: "#1F2430"
  muted: "#5C6472"
  rule: "#D9D9D2"
typography:
  display_and_body_headings_publication_titles_prose: { family: "Newsreader Variable", weights: [400, 600] }
  ui_navigation_buttons_filters: { family: "Libre Franklin Variable", weights: [400, 500] }
  mono_authors_venues_years_course_codes_bibtex: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "Content max-w-[1080px] px-6; list rows py-4 with 1px rule separators; section padding py-16; 8px rhythm."
radius: "Corners are square: 0px on cards, photos, buttons and inputs."
---

# Academic Researcher Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **paper** `#FAFAF7` — Page ground
- **navy** `#1C2B4A` — University navy: headings, links, the sidebar band, primary buttons with white text
- **navyTint** `#EEF1F7` — Pale blue panels and hover rows
- **burgundy** `#8C1C3E` — Burgundy accent: interest chips, active filters, the copy-BibTeX button, figure accents
- **ink** `#1F2430` — Text
- **muted** `#5C6472` — Secondary text and meta
- **rule** `#D9D9D2` — Rules between list items

## Typography
- **Display and body / headings, publication titles, prose** — Newsreader Variable (OFL), weights 400/600. Self-host the font files.
- **UI / navigation, buttons, filters** — Libre Franklin Variable (OFL), weights 400/500. Self-host the font files.
- **Mono / authors, venues, years, course codes, BibTeX** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: Content max-w-[1080px] px-6; list rows py-4 with 1px rule separators; section padding py-16; 8px rhythm.
- Radius: Corners are square: 0px on cards, photos, buttons and inputs.

## Motion
- Publication filters: leaving rows fade 150ms, entering rows fade 200ms; the result count updates at once.
- Copy-BibTeX shows an inline 'Copied' label for 2 seconds; the abstract panel slides down 200ms.
- Slide viewer: slides cross-fade 250ms; ArrowLeft and ArrowRight move between slides.
- Scroll reveals on the home page: sections fade up 12px over 350ms, once; content is visible by default.
- prefers-reduced-motion: everything changes instantly.

## Imagery
One professional portrait of the professor, four portraits of lab members and one photograph of the lab at work seen from behind: all fictional people, warm neutral backgrounds, soft window light. Project figures are inline SVG in navy, burgundy and pale blue. No university crests, seals, building photos or logos.

## Tone
Measured and exact, like a good abstract: plain statements about questions, methods and findings, no hype.

---
— Prompt by VibeFather · https://vibefather.ai/t/academic-researcher-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
