---
name: "Editorial Law Firm Website"
colors:
  paper: "#F3EFE7"
  paper_deep: "#E8E2D6"
  ink: "#17150F"
  night: "#1E1C18"
  graphite: "#4A463E"
  muted: "#857E71"
  rule: "#D3CBBC"
  oxblood: "#7A1E1E"
  oxblood_deep: "#5C1515"
  ivory: "#EEE8DC"
typography:
  display_h1_h2_wordmark_practice_names_result_figures_article_titles_monogram_initials_family_bodoni_moda_variable_optical_size_axis_auto_italic_400_for_the_highlighted_phrase_in_each_heading: { family: "Bodoni Moda", weights: [400, 500, 600] }
  text_body_nav_buttons_form_fields_faq_answers_captions_longer_than_one_line_family_public_sans_variable: { family: "Public Sans", weights: [400, 500, 600] }
  mono_eyebrows_section_numbers_01_figure_captions_fig_1_step_labels_read_times_reference_numbers_office_hours_table_family_ibm_plex_mono: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1360px, centered, side padding 40px desktop, 24px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 128px desktop, 88px under 768px. Every home section starts with SectionHead: a full-width 1px Rule hairline, then 20px below it a row with the mono section number left ('§ 01', IBM Plex Mono 500 12px, Oxblood) and the mono label next to it ('PRACTICE AREAS', 12px uppercase, letter-spacing 0.14em, Muted), and on the far right a mono count where useful ('06 AREAS'). Type scale: H1 clamp(56px, 8.6vw, 136px) Bodoni 500, line-height 0.94, letter-spacing -0.025em; H2 clamp(40px, 5.2vw, 84px) Bodoni 500, line-height 0.98, letter-spacing -0.02em; H3 32px Bodoni 500 line-height 1.1; body Public Sans 400 17px / 1.65 (16px under 768px), long-form paragraphs max-width 64ch; lead paragraphs 21px / 1.5 Graphite; eyebrow IBM Plex Mono 400 12px uppercase letter-spacing 0.14em Muted. Buttons: height 52px, padding 0 28px, Public Sans 500 15px, letter-spacing 0.01em."
radius: "Square corners everywhere (0) — cards, photos, buttons, inputs, radio tiles, accordion rows. The only rounded shapes are the 8px 'open now' status dot, the 999px status pill in Contact and the success check circle."
---

# Editorial Law Firm Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F3EFE7` — Page background on both pages.
- **Paper Deep** `#E8E2D6` — Alternate section background (Principles, Intake, practice-page masthead), row hover, monogram tiles, input fill on focus.
- **Ink** `#17150F` — Headlines, body text on paper, the top bar, the footer background, primary outline buttons.
- **Night** `#1E1C18` — Background of the Case results section.
- **Graphite** `#4A463E` — Secondary body text and paragraph text in long-form sections.
- **Muted** `#857E71` — Eyebrow labels, captions, section numbers, placeholder text, read times.
- **Rule** `#D3CBBC` — All 1px hairlines, card borders, input borders, table lines on paper.
- **Oxblood** `#7A1E1E` — The only accent: primary buttons, active index item, italic highlight words in headings, the small bars above result figures, progress bar, error text, focus rings.
- **Oxblood Deep** `#5C1515` — Hover and pressed state of oxblood buttons.
- **Ivory** `#EEE8DC` — Text on Night and Ink backgrounds; hairlines on dark use Ivory at 14% opacity.

## Typography
- **Display: H1, H2, wordmark, practice names, result figures, article titles, monogram initials (family 'Bodoni Moda Variable', optical size axis auto). Italic 400 for the highlighted phrase in each heading.** — Bodoni Moda (OFL), weights 400/500/600. Self-host the font files.
- **Text: body, nav, buttons, form fields, FAQ answers, captions longer than one line (family 'Public Sans Variable').** — Public Sans (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrows, section numbers (§ 01), figure captions ('Fig. 1 —'), step labels, read times, reference numbers, office-hours table (family 'IBM Plex Mono').** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1360px, centered, side padding 40px desktop, 24px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 128px desktop, 88px under 768px. Every home section starts with SectionHead: a full-width 1px Rule hairline, then 20px below it a row with the mono section number left ('§ 01', IBM Plex Mono 500 12px, Oxblood) and the mono label next to it ('PRACTICE AREAS', 12px uppercase, letter-spacing 0.14em, Muted), and on the far right a mono count where useful ('06 AREAS'). Type scale: H1 clamp(56px, 8.6vw, 136px) Bodoni 500, line-height 0.94, letter-spacing -0.025em; H2 clamp(40px, 5.2vw, 84px) Bodoni 500, line-height 0.98, letter-spacing -0.02em; H3 32px Bodoni 500 line-height 1.1; body Public Sans 400 17px / 1.65 (16px under 768px), long-form paragraphs max-width 64ch; lead paragraphs 21px / 1.5 Graphite; eyebrow IBM Plex Mono 400 12px uppercase letter-spacing 0.14em Muted. Buttons: height 52px, padding 0 28px, Public Sans 500 15px, letter-spacing 0.01em.
- Radius: Square corners everywhere (0) — cards, photos, buttons, inputs, radio tiles, accordion rows. The only rounded shapes are the 8px 'open now' status dot, the 999px status pill in Contact and the success check circle.

## Motion
- Easing: --ease-out cubic-bezier(0.2, 0.7, 0.2, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for accordions and form steps.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(16px) and animate to rest over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings in the same list stagger by 70ms (pass index prop).
- Headline mask: H1 and every H2 are split into lines in content.ts (an array of line strings, the italic phrase marked with *asterisks*). Each line sits in an overflow-hidden block; the inner span rises from translateY(105%) to 0 over 900ms --ease-out, 90ms stagger, when the heading enters the viewport (H1 on load after 120ms).
- Count-up: numeric parts of result figures and hero ledger figures count from 0 to their value over 1400ms easeOutCubic when 40% visible, once (useCountUp with requestAnimationFrame). Prefix and suffix ('$', 'M', '%', ' months') stay static; decimals keep their precision (4.2, 48.6). Non-numeric figures ('Dismissed') only fade in.
- Hero photo: on load it scales from 1.06 to 1 over 1600ms --ease-out; while scrolling, the image inside its frame translates from 0 to -6% of its height (Motion useScroll + useTransform on the frame's scroll progress). The frame itself does not move.
- Link underline: .link-draw uses background-image linear-gradient(currentColor, currentColor), background-size 0% 1px at bottom left, no-repeat; on hover and focus-visible it grows to 100% 1px over 300ms --ease-out.
- Rows and cards: practice rows and insight rows fade their background to Paper Deep over 200ms on hover, the arrow icon moves 6px right, the number turns Oxblood. Attorney monogram tiles swap to Ink background with Ivory initials over 300ms.
- Accordions (FAQ, insights): height animates with Motion (AnimatePresence, height 0 → auto, opacity 0 → 1) over 320ms --ease-io; the Plus icon rotates 45° into an X.
- Intake steps: the outgoing step fades and moves 24px left, the incoming step enters from 24px right, 260ms --ease-io (AnimatePresence mode 'wait'); going Back reverses the direction. The progress bar width animates over 400ms.
- Header: transparent with no border at the top of the page; after 24px of scroll it gets Paper at 92% opacity, backdrop-filter blur(8px) and a 1px Rule bottom border, 200ms transition.
- prefers-reduced-motion: reduce — disable the headline mask, reveals, parallax, hero scale, count-up (show final values), step slide (crossfade 0ms) and smooth scrolling. Hover color changes stay.

## Imagery
Real documentary photography only: the firm's own conference room, reception, consultation room, desk with case files, the view from its window and its street entrance (six photos made for this template), plus four public-domain / CC0 photos of a courthouse corridor, a law library, legal stacks and a nineteenth-century handwritten deed. No people or faces anywhere. Every photo gets the .photo treatment: filter saturate(0.82) contrast(1.04) sepia(0.06), object-fit cover, a 1px Rule outline, no shadow, square corners, and a caption below in IBM Plex Mono 12px Muted that starts with 'Fig. n —' (numbered in page order). Attorneys are typographic monograms, never photos. Everything else is drawn in code: the favicon, the SVG street map in Contact, dividers, the success check. Icons from lucide-react only, stroke 1.5.

## Tone
Serious, plain-spoken and confident. Short declarative sentences, concrete numbers, no legal jargon without an explanation, no hype words, no exclamation marks. The firm sounds like a calm senior partner explaining things across a table.

---
— Prompt by VibeFather · https://vibefather.ai/t/editorial-law-firm-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
