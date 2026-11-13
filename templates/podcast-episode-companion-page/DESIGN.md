---
name: "Podcast Episode Companion Page"
colors:
  paper: "#F4EEE2"
  paper_deep: "#EAE1CF"
  print: "#FBF7EE"
  ink: "#1F2430"
  graphite: "#4A5160"
  pencil: "#8A8F98"
  rule: "#D9CEBA"
  lake_indigo: "#2F4B6E"
  glacier: "#9DB7C9"
  ochre: "#C8963E"
  rust: "#B5523B"
  moss: "#6F7F5A"
typography:
  display_hero_headline_chapter_titles_numerals_pull_quotes_lesson_statements: { family: "Fraunces Variable", weights: [400, 500, 600, 700] }
  text_body_copy_deks_captions_rail_titles: { family: "Source Serif 4 Variable", weights: [400, 600] }
  mono_kickers_timestamps_buttons_chart_axes_credits: { family: "IBM Plex Mono", weights: [400, 500] }
  hand_chart_annotations_and_margin_scribbles_only: { family: "Caveat Variable", weights: [500, 600] }
spacing: "8px base. Page container 1280px with 40px side padding (24px under 768px). Body text measure 680px; wide figures and charts 880px. Sections 128px apart on desktop, 88px on mobile; chapter openers get 160px top padding on desktop. Body 19px/1.7 Source Serif (17px/1.65 on mobile), paragraphs 24px apart."
radius: "Paper-like and mostly square: 2px on prints, lesson cards and panels; 6px on buttons and tooltips; 999px only for the Skim/Read pill, chapter chips and the notes count badge."
---

# Podcast Episode Companion Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4EEE2` — Page background, under a faint paper-grain texture
- **Paper Deep** `#EAE1CF` — Recap band, notes drawer, top bar background (at 94% opacity), map panel
- **Print** `#FBF7EE` — Photo print borders, lesson cards, tooltips, next-episode card
- **Ink** `#1F2430` — Headings, primary text, active states, primary button fill
- **Graphite** `#4A5160` — Body copy and deks
- **Pencil** `#8A8F98` — Captions, axis labels, inactive rail items, credit lines
- **Rule** `#D9CEBA` — 1px hairlines, borders, chart gridlines
- **Lake Indigo** `#2F4B6E` — Main accent: links, progress bar, primary chart lines, chapter 5 color
- **Glacier** `#9DB7C9` — Watercolor washes, chart area fills (35% opacity), chapter 1 color
- **Ochre** `#C8963E` — Lesson numerals and bookmark fill, tape strips (at 28% opacity), notes badge, chapter 2 color
- **Rust** `#B5523B` — Warnings and rivals: the 1890 price line, plant-ice line, Caveat annotations about loss, chapter 4 color
- **Moss** `#6F7F5A` — Chapter 3 color and its washes; never for text

## Typography
- **Display — hero headline, chapter titles, numerals, pull quotes, lesson statements** — Fraunces Variable (OFL), weights 400/500/600/700. Self-host the font files.
- **Text — body copy, deks, captions, rail titles** — Source Serif 4 Variable (OFL), weights 400/600. Self-host the font files.
- **Mono — kickers, timestamps, buttons, chart axes, credits** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.
- **Hand — chart annotations and margin scribbles only** — Caveat Variable (OFL), weights 500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base. Page container 1280px with 40px side padding (24px under 768px). Body text measure 680px; wide figures and charts 880px. Sections 128px apart on desktop, 88px on mobile; chapter openers get 160px top padding on desktop. Body 19px/1.7 Source Serif (17px/1.65 on mobile), paragraphs 24px apart.
- Radius: Paper-like and mostly square: 2px on prints, lesson cards and panels; 6px on buttons and tooltips; 999px only for the Skim/Read pill, chapter chips and the notes count badge.

## Motion
- Reveal: text blocks, prints, lesson cards and charts fade in and rise 16px over 600ms with ease [0.22, 1, 0.36, 1] when 30% visible, once. Lists stagger by 80ms.
- Watercolor bloom: every Blot scales 0.85 → 1 and fades from 0 to its opacity over 900ms when it enters the viewport, once.
- Chart draw-in when 40% visible, once: line paths animate pathLength 0 → 1 over 1.4s ease-in-out; bars and unit squares grow from the baseline over 700ms with a 60ms stagger; Caveat annotations and their hand-drawn arrows appear after the data (arrow path draws over 500ms, text fades in 300ms).
- Painting parallax (≥1024px only): chapter paintings move from translateY(24px) to translateY(-24px) across their pass through the viewport, via useScroll + useTransform.
- Reading progress: a 2px Lake Indigo bar under the top bar, scaleX bound to page scroll progress through useSpring (stiffness 120, damping 30).
- Prints rest at rotate(-1.5deg) or rotate(1.2deg) (alternating) and straighten to 0deg with translateY(-4px) and a deeper shadow on hover, 250ms.
- Top bar chapter label and rail timestamp cross-fade (opacity + 6px y) in 200ms when the active chapter changes.
- Notes drawer slides in from the right (x 100% → 0) in 320ms ease-out over a 30% Ink backdrop; on mobile it is a bottom sheet rising from y 100%. Saving a lesson pops the count badge (scale 1 → 1.25 → 1, 300ms).
- prefers-reduced-motion: no reveals, blooms, parallax or draw-ins; charts render fully drawn; the drawer appears without sliding.

## Imagery
Three layers, never mixed inside one frame. (1) Six watercolor paintings (hero + one per chapter) shown with mix-blend-mode: multiply so their white paper merges into the page, and a feathered edge: mask-image radial-gradient(ellipse 75% 72% at 50% 50%, #000 60%, transparent 100%). (2) Four archival public-domain images shown as scrapbook prints: Print-colored border 10px with 36px at the bottom, image filter grayscale(1) sepia(0.3) contrast(1.05), two Ochre tape strips at the top corners (72×22px, rotated ±6°, 28% opacity, jagged ends via clip-path), shadow 0 14px 24px -14px rgba(31,36,48,0.35). (3) Watercolor washes drawn in code (Blot component) behind numerals, quotes, the hero headline and in charts. A paper grain covers the page background: an inline SVG data-URI with feTurbulence (baseFrequency 0.9, numOctaves 2) at 5% opacity, tiled at 240px, set as body background-image over Paper.

## Tone
Warm, curious and precise, like a good magazine feature. Concrete numbers, dates and names; short declarative sentences; no hype words, no exclamation marks, no emoji.

---
Inspired by Illustrated interactive companion to a long podcast episode (Claude artifact showcase) by @bcherny — https://claude.ai/artifact/RdE6uE7WozcP2MLfx3BDky
— Prompt by VibeFather · https://vibefather.ai/t/podcast-episode-companion-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
