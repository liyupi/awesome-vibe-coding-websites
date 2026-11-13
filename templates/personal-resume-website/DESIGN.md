---
name: "Personal Resume Website"
colors:
  paper: "#FFFFFF"
  mist: "#F4F6F8"
  ink: "#1A1D21"
  slate_ink: "#565D66"
  rule: "#E5E7EB"
  cobalt: "#2B4BD8"
  cobalt_deep: "#2139AE"
  cobalt_mist: "#EDF1FE"
typography:
  display_the_name_h2_section_titles_role_titles_school_names: { family: "Source Serif 4", weights: [600, 700] }
  text_and_ui_summary_bullets_skills_buttons_contact_rows: { family: "Sora", weights: [400, 600] }
  year_spans_section_eyebrows_uppercase_location_lines_page_hints: { family: "Spline Sans Mono", weights: [400, 500] }
spacing: "8px base unit. Sheet max-width 880px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column with a left rail for Experience (rail at 32px). Section vertical padding 72px desktop, 56px under 1024px — resume density, not landing-page air. Type scale: the name clamp(44px, 7vw, 72px) Source Serif 4 700, line-height 1.0; role line Sora 600 20px Slate Ink; H2 section titles Source Serif 4 700 22px with a mono eyebrow above; body Sora 400 15.5px / 1.7 (max-width 68ch); bullets 15px / 1.65; year spans Spline Sans Mono 500 12.5px Cobalt; caption mono 12px Slate Ink. Buttons: height 44px, Sora 600 13.5px. PDF button: Ink fill, Paper text. Contact links: Sora 400 14px Slate Ink, hover Cobalt. Focus ring everywhere: 2px Cobalt outline with 3px offset."
radius: "8px on cards, buttons and chips. The rail markers and level dots are circles (999px). Nothing else rounds."
---

# Personal Resume Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#FFFFFF` — Page background; the only background in print.
- **Mist** `#F4F6F8` — Screen-only section tint (Skills, Education) and chips; never prints.
- **Ink** `#1A1D21` — Headlines, body text, rail lines, icon color.
- **Slate Ink** `#565D66` — Secondary text, bullet bodies, captions, level words.
- **Rule** `#E5E7EB` — 1px hairlines, card borders, rail ticks, dividers.
- **Cobalt** `#2B4BD8` — The one accent: links, the PDF button, rail markers, level dots, focus ring, section eyebrows.
- **Cobalt Deep** `#2139AE` — Link hover, button pressed.
- **Cobalt Mist** `#EDF1FE` — Skill group panels on screen (screen only); the level-dot track.

## Typography
- **Display: the name, H2 section titles, role titles, school names** — Source Serif 4 (OFL), weights 600/700. Self-host the font files.
- **Text and UI: summary, bullets, skills, buttons, contact rows** — Sora (OFL), weights 400/600. Self-host the font files.
- **Year spans, section eyebrows (uppercase), location lines, page hints** — Spline Sans Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Sheet max-width 880px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column with a left rail for Experience (rail at 32px). Section vertical padding 72px desktop, 56px under 1024px — resume density, not landing-page air. Type scale: the name clamp(44px, 7vw, 72px) Source Serif 4 700, line-height 1.0; role line Sora 600 20px Slate Ink; H2 section titles Source Serif 4 700 22px with a mono eyebrow above; body Sora 400 15.5px / 1.7 (max-width 68ch); bullets 15px / 1.65; year spans Spline Sans Mono 500 12.5px Cobalt; caption mono 12px Slate Ink. Buttons: height 44px, Sora 600 13.5px. PDF button: Ink fill, Paper text. Contact links: Sora 400 14px Slate Ink, hover Cobalt. Focus ring everywhere: 2px Cobalt outline with 3px offset.
- Radius: 8px on cards, buttons and chips. The rail markers and level dots are circles (999px). Nothing else rounds.

## Motion
- Screen-only. Print media queries disable all of it by definition (motion rules live in screen-scoped CSS and components render at rest when printing).
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Restrained — a resume should feel calm.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(10px) and settle over 500ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 50ms.
- Masthead: the name rises from 16px; the contact row and PDF button fade in 150ms later; the role line's thin rule draws outward from the text.
- Experience rail: a 2px Ink rail grows downward as the section scrolls (scaleY, useScroll on the list); each role's marker dot fills Cobalt as its card reaches 60% view; cards settle with the standard reveal.
- Level dots: the five dots fill one-by-one (80ms stagger) when a skill group first enters view — quiet, once.
- Links: contact and project links get the .link-draw underline (220ms); external-link arrows nudge 2px right on hover.
- Print button: on click it briefly reads 'Opening print dialog…' while window.print() fires; on the print stylesheet it disappears entirely.
- prefers-reduced-motion: reduce — all reveals render at rest, the rail shows fully drawn, no dot stagger. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- @media print (hand-written in src/index.css, not Tailwind-generated): @page { size: A4; margin: 14mm 16mm } — the whole page becomes one flowing sheet: hidden: the print button, availability footer, section tints (Mist panels print white), chips' fills and all interactive affordances; body text drops to 10.5pt, the name to 26pt, H2s to 13pt with a 0.5pt rule; the experience rail prints as a thin left rule with square markers; year spans print in Cobalt (browsers keep colors with 'print backgrounds' but the layout must survive without it: markers and dots also have 0.5pt ink outlines); links print as text followed by their URL in parentheses via ::after with content from data-print-url attributes (mailto/handles included, socials skipped); page-break rules: never inside a RoleCard or ProjectCard (break-inside: avoid), the sheet targets one page and gracefully flows to two if copy grows; a print-only footer line with the email printed at the page bottom via position: fixed. The portrait prints at 22mm square in the header's right column.

## Imagery
One AI-generated professional portrait (3:4) of a fictional person matching the default candidate — a composed studio headshot with soft daylight, neutral warm background, smart-casual dress — used in the masthead on screen and in the print header. It is a template placeholder: users replace it with their own photo. No other photos; rules, rail, dots and chips remain drawn in code. Icons: lucide-react only, stroke width 1.75, used sparingly.

## Tone
First person, plain and specific. Numbers over adjectives, achievements over responsibilities, no 'passionate', no emoji, one tasteful joke in the footer only.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-resume-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
