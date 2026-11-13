---
name: "API Reference Docs Site"
colors:
  paper: "#FAFAF8"
  panel: "#FFFFFF"
  line: "#E4E2DC"
  ink: "#1B1F24"
  soft_ink: "#61666D"
  signal_blue: "#2E5BFF"
  blue_deep: "#1F41C4"
  blue_mist: "#EDF1FF"
  get: "#157F4C"
  post: "#2E5BFF"
  patch: "#8A5CF6"
  delete: "#C24040"
  code_bg: "#14171C"
  code_text: "#E8EAF0"
  code_string: "#9DCE8C"
  code_key: "#8FB5FF"
  code_comment: "#6B7280"
typography:
  text_and_display_h1_h2_nav_body_tables_ibm_plex_sans_neutral_with_personality_at_600: { family: "IBM Plex Sans", weights: [400, 500, 600] }
  mono_paths_code_json_params_chips_ibm_plex_mono: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Page: a 1440px container split into three columns — left nav 264px, center reading column max 760px, right rail 200px, gaps 40px; under 1100px the right rail hides; under 900px the nav collapses into a top drawer (hamburger in the header) and the reading column takes full width with 24px side padding. Section vertical rhythm 56px between endpoint blocks. Type scale: H1 (getting-started title) 36px Plex Sans 600; group headings 22px 600 with mono group slugs; endpoint titles 26px 600; body 15.5px / 1.7; descriptions 15px / 1.65 Soft Ink; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; code and paths 13.5px / 1.65 Plex Mono; table text 14px. Buttons and inputs: height 40px; search input full nav width. Focus everywhere: 2px Signal Blue outline, 3px offset."
radius: "8px on code panels, tables, chips, search input, buttons. 6px on method chips and status chips (with 2px letter-spaced 10.5px labels)."
---

# API Reference Docs Site — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#FAFAF8` — Page background throughout.
- **Panel** `#FFFFFF` — Tables, nav, code panels sit on Paper; panels for hover and the search bar.
- **Line** `#E4E2DC` — 1px hairlines: column rules, table rows, borders, the sticky header underline.
- **Ink** `#1B1F24` — Headings, body, code path text.
- **Soft Ink** `#61666D` — Descriptions, captions, table defaults, eyebrows.
- **Signal Blue** `#2E5BFF` — The one accent: links, active nav item, focus ring, required asterisks, the version chip border.
- **Blue Deep** `#1F41C4` — Hover and pressed links.
- **Blue Mist** `#EDF1FF` — Active nav fill, selected tab underline wash, search highlight in nav.
- **GET** `#157F4C` — GET method chip fill and its PathLine method tag.
- **POST** `#2E5BFF` — POST method chip fill.
- **PATCH** `#8A5CF6` — PATCH method chip fill.
- **DELETE** `#C24040` — DELETE method chip fill and error status chips.
- **Code BG** `#14171C` — Code and JSON panel background.
- **Code Text** `#E8EAF0` — Default code text.
- **Code String** `#9DCE8C` — Strings and URLs in code.
- **Code Key** `#8FB5FF` — JSON keys and flags in code.
- **Code Comment** `#6B7280` — Comments and sample-value hints in code.

## Typography
- **Text and display: H1, H2, nav, body, tables — IBM Plex Sans, neutral with personality at 600** — IBM Plex Sans (OFL), weights 400/500/600. Self-host the font files.
- **Mono: paths, code, JSON, params, chips — IBM Plex Mono** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Page: a 1440px container split into three columns — left nav 264px, center reading column max 760px, right rail 200px, gaps 40px; under 1100px the right rail hides; under 900px the nav collapses into a top drawer (hamburger in the header) and the reading column takes full width with 24px side padding. Section vertical rhythm 56px between endpoint blocks. Type scale: H1 (getting-started title) 36px Plex Sans 600; group headings 22px 600 with mono group slugs; endpoint titles 26px 600; body 15.5px / 1.7; descriptions 15px / 1.65 Soft Ink; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; code and paths 13.5px / 1.65 Plex Mono; table text 14px. Buttons and inputs: height 40px; search input full nav width. Focus everywhere: 2px Signal Blue outline, 3px offset.
- Radius: 8px on code panels, tables, chips, search input, buttons. 6px on method chips and status chips (with 2px letter-spaced 10.5px labels).

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Documentation should feel like paper, not a carousel.
- Reveal: endpoint blocks rise 8px and settle over 400ms as they enter (Motion whileInView, once); no stagger needed between blocks.
- Tab swap: 160ms crossfade; the active tab's 2px Signal Blue underline slides (layout animation, 200ms).
- CopyButton: icon swaps FileCopy→Check with a 140ms scale pop, reverting after 1.2s.
- JsonView collapse: max-height animates 240ms; chevron rotates 180deg.
- Search: nav items dim/sink over 180ms; the results bar slides down 8px into place; matched nav text gets a Blue Mist highlight that persists while the query lives.
- Active nav tracking: the active item's 2px rail and Blue Mist fill follow scroll (no animation lag over 100ms).
- OnThisPage rail: active anchor gets a Signal Blue dot that slides between rows (200ms).
- prefers-reduced-motion: reduce — no reveals, no sliding underlines (plain swap), no dot sliding; everything sits still and works. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
No photographs, no illustrations, no logos: the page is typography, tables and code panels — the craft object is the layout itself. Method chips, status chips, the version chip and the favicon are drawn in code. Icons: lucide-react only, stroke width 1.75.

## Tone
Documentation-plain: short declarative sentences, no marketing voice, one dry joke in the errors block.

---
— Prompt by VibeFather · https://vibefather.ai/t/api-reference-docs-site · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
