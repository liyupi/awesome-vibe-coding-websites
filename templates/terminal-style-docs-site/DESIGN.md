---
name: "Terminal-Style Docs Site"
colors:
  bg: "#0d0c0a"
  surface: "#15130f"
  surface2: "#1c1a15"
  line: "#2a261f"
  ink: "#e8e3d8"
  muted: "#9a9284"
  dim: "#6b6458"
  amber: "#f5a524"
  ambersoft: "rgba(245,165,36,0.08)"
  sand: "#d9c79e"
typography:
  display_ui_headings_nav_top_bar_tables_kbd_all_code: { family: "JetBrains Mono", weights: [400, 500, 700] }
  body_prose_paragraphs_list_items_table_description_cells: { family: "IBM Plex Sans", weights: [400, 500, 600] }
spacing: "4px base unit. Top bar 56px tall. Desktop grid at ≥1280px: sidebar 260px | main column (content max-width 760px, padding 48px 56px) | outline 220px. At 1024–1279px the outline is hidden. Below 1024px the sidebar becomes a drawer and the main padding is 32px 20px. Vertical rhythm: 64px between H2 sections, 24px between blocks inside a section, 12px between a paragraph and its terminal block. Type scale: H1 40px/1.15 mono 700, tracking -0.02em (30px on mobile); H2 24px/1.3 mono 700, prefixed by '## ' in amber at 60% opacity; H3 17px mono 500; body 16px/1.7 Plex Sans 400 in ink; small labels 11px mono uppercase tracking 0.08em in dim; terminals and tables 14px mono (13px on mobile)."
radius: "6px for terminal, code-file, callout, link cards and tables; 4px for inline code, kbd, badges and buttons; 10px for the search palette panel. No pill shapes."
---

# Terminal-Style Docs Site — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **bg** `#0d0c0a` — Page background, top bar base (at 85% opacity with blur)
- **surface** `#15130f` — Sidebar hover, cards, palette panel, table header rows
- **surface2** `#1c1a15` — Terminal and code block bodies, inline code background, selected palette row
- **line** `#2a261f` — All 1px borders, dividers, table rules, tree glyphs at rest
- **ink** `#e8e3d8` — Primary text, headings, command text in terminals
- **muted** `#9a9284` — Secondary text, inactive nav items, table descriptions
- **dim** `#6b6458` — Labels, line numbers, comments, terminal output timings, group headings
- **amber** `#f5a524` — The single accent: links, active nav and '>' marker, caret, $ prompt, focus rings, flag names, TOML section headers, 'copied' state
- **amberSoft** `rgba(245,165,36,0.08)` — Callout background, active sidebar row tint, hover tint on link cards
- **sand** `#d9c79e` — Strings in code and inline code text; never used for UI chrome

## Typography
- **Display + UI (headings, nav, top bar, tables, kbd, all code)** — JetBrains Mono (OFL), weights 400/500/700. Self-host the font files.
- **Body prose (paragraphs, list items, table description cells)** — IBM Plex Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 4px base unit. Top bar 56px tall. Desktop grid at ≥1280px: sidebar 260px | main column (content max-width 760px, padding 48px 56px) | outline 220px. At 1024–1279px the outline is hidden. Below 1024px the sidebar becomes a drawer and the main padding is 32px 20px. Vertical rhythm: 64px between H2 sections, 24px between blocks inside a section, 12px between a paragraph and its terminal block. Type scale: H1 40px/1.15 mono 700, tracking -0.02em (30px on mobile); H2 24px/1.3 mono 700, prefixed by '## ' in amber at 60% opacity; H3 17px mono 500; body 16px/1.7 Plex Sans 400 in ink; small labels 11px mono uppercase tracking 0.08em in dim; terminals and tables 14px mono (13px on mobile).
- Radius: 6px for terminal, code-file, callout, link cards and tables; 4px for inline code, kbd, badges and buttons; 10px for the search palette panel. No pill shapes.

## Motion
- Block caret: an 8×16px amber block after the top-bar brand and at the end of the hero terminal, animation blink 1.06s steps(1) infinite.
- Hero typing (Getting started only): after 300ms, type the command '[BINARY] run build' at 45ms per character. Pause 250ms, then reveal the 5 output lines one at a time every 120ms (opacity 0→1, 100ms), then show a fresh '$ ' prompt with the blinking caret. Runs once per page visit.
- Page change: the main column replays fadeUp (opacity 0→1, translateY 4px→0, 160ms ease-out).
- Search palette: backdrop fades in over 120ms and the panel scales 0.98→1 with opacity 0→1 over 120ms ease-out. Closing reverses it in 100ms.
- Mobile drawer: slides from translateX(-100%) to 0 in 200ms cubic-bezier(.2,.8,.2,1), with an overlay fading to rgba(13,12,10,0.6).
- Copy button: the icon swaps Copy→Check and the label 'copied' appears in amber with a 120ms opacity fade, then reverts after 1600ms.
- Hover micro-interactions: nav items and links change colour over 120ms. Link cards shift their border to amber and nudge the arrow 3px right over 150ms. No transforms on text.
- Smooth scrolling only for outline and anchor clicks. Under prefers-reduced-motion: no typing (the hero shows its final state immediately), a static caret, no fades, slides or smooth scroll.

## Imagery
No photos or illustrations. All visuals are type, 1px borders, and terminal and code windows drawn with HTML and CSS. Icons are Lucide at 14–16px with stroke width 1.75, in muted (amber when active). The only graphic file is the code-drawn favicon.svg.

## Tone
Calm, exact and a little dry, like good man pages written by a friendly person. Short sentences, second person, no exclamation marks, no marketing words. Terminal flavour comes from glyphs (>, $, #, //, ├─) and type, not from jokes.

---
— Prompt by VibeFather · https://vibefather.ai/t/terminal-style-docs-site · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
