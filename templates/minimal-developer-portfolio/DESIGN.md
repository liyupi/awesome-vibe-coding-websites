---
name: "Minimal Developer Portfolio"
colors:
  paper_light: "#FBFAF7"
  surface_dark: "#121212"
  ink: "#17181A"
  ink_soft: "#55575C"
  rule: "#E8E6E0"
  accent: "#E8590C"
  accent_deep: "#C74A08"
  faint: "#F1EFEA"
typography:
  mono_name_section_labels_uppercase_stack_tags_repo_stats_availability_line_the_prompt_caret_footer: { family: "IBM Plex Mono", weights: [400, 600] }
  sans_bio_project_lines_post_descriptions_repo_blurbs_now_line: { family: "Schibsted Grotesk", weights: [400, 500] }
spacing: "8px base unit. Column max-width 640px, centered, side padding 32px desktop, 20px under 640px — one narrow column, no grid. Section spacing 88px desktop, 64px under 640px. Type scale: name clamp(40px, 7vw, 64px) IBM Plex Mono 600, line-height 1.05; section labels mono 600 12px uppercase letter-spacing 0.18em with an Accent rule after; project titles sans 500 20px; bio sans 400 17px / 1.75 (max-width 58ch); body 15.5px / 1.7; tags mono 400 12px with 6px dot; captions mono 12px Ink Soft. The only button is the toggle (36px square); contact entries are text links. Focus ring everywhere: 2px Accent outline with 3px offset."
radius: "6px on repo cards, tag chips and the toggle. Everything else is square — hairlines do the work."
---

# Minimal Developer Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper Light** `#FBFAF7` — Light-mode page background.
- **Surface Dark** `#121212` — Dark-mode page background (the primary design).
- **Ink** `#17181A` — Light-mode text; dark-mode surfaces use a lifted #1A1A1C card instead of borders.
- **Ink Soft** `#55575C` — Secondary text in light; #A8A9AD in dark — one token, two values.
- **Rule** `#E8E6E0` — Light-mode hairlines and tag borders; #2A2A2D in dark.
- **Accent** `#E8590C` — The one accent in both themes: links, the toggle, stack-tag dots, repo language dots, focus ring, the caret in the intro.
- **Accent Deep** `#C74A08` — Link hover and pressed in both themes.
- **Faint** `#F1EFEA` — Light-mode hover fills; #1E1E20 in dark.

## Typography
- **Mono: name, section labels (uppercase), stack tags, repo stats, availability line, the prompt caret, footer** — IBM Plex Mono (OFL), weights 400/600. Self-host the font files.
- **Sans: bio, project lines, post descriptions, repo blurbs, now-line** — Schibsted Grotesk (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Column max-width 640px, centered, side padding 32px desktop, 20px under 640px — one narrow column, no grid. Section spacing 88px desktop, 64px under 640px. Type scale: name clamp(40px, 7vw, 64px) IBM Plex Mono 600, line-height 1.05; section labels mono 600 12px uppercase letter-spacing 0.18em with an Accent rule after; project titles sans 500 20px; bio sans 400 17px / 1.75 (max-width 58ch); body 15.5px / 1.7; tags mono 400 12px with 6px dot; captions mono 12px Ink Soft. The only button is the toggle (36px square); contact entries are text links. Focus ring everywhere: 2px Accent outline with 3px offset.
- Radius: 6px on repo cards, tag chips and the toggle. Everything else is square — hairlines do the work.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Minimal in both senses: 200–400ms, small distances, nothing loops except the caret blink.
- Theme toggle: the icon rotates 180deg and crossfades Sun/Moon over 300ms; colors transition 220ms via CSS custom properties (no layout animation); the meta theme-color updates instantly.
- Intro: the name rises 12px once; the mono caret after the availability line blinks on a 1.2s step loop (disabled under reduced motion).
- Reveal: rows wrapped in <Reveal> start at opacity 0, translateY(8px) and settle over 400ms --ease-out when 20% visible (Motion whileInView, viewport once). Siblings stagger 40ms — barely perceptible, correct for the genre.
- Project rows: hover indents the title 4px and the ArrowUpRight nudges 2px; the stack dots brighten.
- Repo cards: hover lifts 2px and the star count ticks once in Accent; language dots pulse softly (scale 1→1.15→1, 800ms, once).
- Links: .link-draw grows a 1px Accent underline over 220ms on hover and focus-visible.
- prefers-reduced-motion: reduce — no caret blink, no transitions (theme swaps instantly), reveals render at rest. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
Two template photographs, no others: (1) portrait-noor.webp — a low-key professional headshot of a fictional developer (soft window light, dark neutral background, quiet confidence), shown as an 88px circle in the intro and never on the print-only paths (this page has none); it is a placeholder users swap for their own photo. (2) night-desk.webp — a wide moody shot of a home desk at night: two monitors glowing terminal green, mechanical keyboard, headphones on a stand, one desk lamp — the developer-feel anchor placed between Projects and Writing. Both carry 0px corners and a subtle rule-dark border; the night shot dims to 85% under the dark theme automatically. Everything else remains code-drawn (paw→none; terminal glyphs, language dots, theme icon, repo cards). Icons: lucide-react only, stroke width 1.75.

## Tone
Plain-spoken engineer: short sentences, verbs first, dry humor at most once per section. No 'passionate crafter of delightful experiences'.

---
— Prompt by VibeFather · https://vibefather.ai/t/minimal-developer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
