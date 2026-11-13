---
name: "Neo-Brutalist Blog and Portfolio"
colors:
  paper: "#F4EEE1"
  card: "#FFFDF8"
  ink: "#111111"
  signal_orange: "#FF5A1F"
  pencil: "#5B564D"
  dot: "rgba(17,17,17,0.07)"
typography:
  display_hero_name_section_headlines_card_and_post_titles_marquee_items_giant_contact_link_drop_cap: { family: "Archivo Black", weights: [400] }
  body_paragraphs_excerpts_post_body_hero_sentence: { family: "Inter Variable", weights: [400, 500, 700] }
  labels_nav_links_buttons_chips_dates_section_numbers_captions_counters: { family: "Space Mono", weights: [400, 700] }
spacing: "8px base unit. Container max-width 1280px, side padding 48px at ≥1024px, 32px at 640–1023px, 20px below 640px. Section vertical padding 112px desktop, 72px mobile. Card padding 24px (20px mobile). Grid gaps 32px desktop, 24px mobile. Borders: 3px on cards, buttons, inputs, rules and nav; 2px on chips; 4px on the hero highlight block, lightbox and about card. Shadows: --shadow-sm 4px 4px 0 #111 (buttons, chips on hover), --shadow 6px 6px 0 #111 (cards), --shadow-lg 10px 10px 0 #111 (hovered cards, about card, lightbox). Below 640px every shadow drops one step (cards use 4px). Type scale: section headlines clamp(44px, 7vw, 96px) line-height 0.9 letter-spacing -0.03em uppercase; card titles 24px; list titles clamp(24px, 3vw, 36px); body 18px/1.65 (post body 19px/1.7); labels 13px uppercase letter-spacing 0.06em."
radius: "0px on everything (cards, buttons, inputs, art panels, lightbox, nav). The only rounded shapes are chips (999px pill) and the circular hero sticker."
---

# Neo-Brutalist Blog and Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4EEE1` — Page background everywhere except the marquee band; also the dot grid base.
- **Card** `#FFFDF8` — Card, button, input and chip fill; light fills inside SVG art.
- **Ink** `#111111` — All text, every border, every hard shadow, marquee band background, active chip background.
- **Signal Orange** `#FF5A1F` — The only accent: name highlight block, stickers, primary buttons, hover fills, odd illustration backgrounds, drop cap, reading progress bar, marquee separators, focus rings.
- **Pencil** `#5B564D` — Secondary text only: dates, reading times, captions, excerpt metadata.
- **Dot** `rgba(17,17,17,0.07)` — Body background texture: radial-gradient(var(--dot) 1px, transparent 1.4px) at 24px 24px over Paper.

## Typography
- **Display: hero name, section headlines, card and post titles, marquee items, giant contact link, drop cap** — Archivo Black (OFL), weights 400. Self-host the font files.
- **Body: paragraphs, excerpts, post body, hero sentence** — Inter Variable (OFL), weights 400/500/700. Self-host the font files.
- **Labels: nav links, buttons, chips, dates, section numbers, captions, counters** — Space Mono (OFL), weights 400/700. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1280px, side padding 48px at ≥1024px, 32px at 640–1023px, 20px below 640px. Section vertical padding 112px desktop, 72px mobile. Card padding 24px (20px mobile). Grid gaps 32px desktop, 24px mobile. Borders: 3px on cards, buttons, inputs, rules and nav; 2px on chips; 4px on the hero highlight block, lightbox and about card. Shadows: --shadow-sm 4px 4px 0 #111 (buttons, chips on hover), --shadow 6px 6px 0 #111 (cards), --shadow-lg 10px 10px 0 #111 (hovered cards, about card, lightbox). Below 640px every shadow drops one step (cards use 4px). Type scale: section headlines clamp(44px, 7vw, 96px) line-height 0.9 letter-spacing -0.03em uppercase; card titles 24px; list titles clamp(24px, 3vw, 36px); body 18px/1.65 (post body 19px/1.7); labels 13px uppercase letter-spacing 0.06em.
- Radius: 0px on everything (cards, buttons, inputs, art panels, lightbox, nav). The only rounded shapes are chips (999px pill) and the circular hero sticker.

## Motion
- Press physics on all buttons and cards: transition transform and box-shadow 140ms cubic-bezier(.2,.8,.2,1). Hover: translate(-2px,-2px) and shadow grows one step. Active (pressed): translate(4px,4px) and box-shadow 0 0 0 #111 so the element sinks into its shadow.
- Sticker tilt: hoverable cards rotate on hover, odd cards -2deg, even cards 2deg, combined with the hover translate; their chips switch to Signal Orange background and rotate -3deg.
- Marquee: a duplicated track of items animates translateX(0) → translateX(-50%) over 40s linear infinite; animation-play-state paused while the band is hovered or focused within.
- Hero intro on load: each name line sits in an overflow:hidden wrapper and rises from translateY(105%) to 0 over 700ms cubic-bezier(.2,.8,.2,1), 90ms stagger; the hero sticker pops from scale(0) rotate(-40deg) to scale(1) rotate(12deg) over 450ms cubic-bezier(.34,1.56,.64,1) starting at 500ms; the sentence and buttons fade up 16px at 650ms.
- Sticker ring: the circular text on the hero sticker rotates 360deg every 20s linear infinite.
- Scroll reveal: elements with data-reveal start at opacity 0, translateY(24px) rotate(-1.5deg) and settle to opacity 1, none over 450ms cubic-bezier(.2,.8,.2,1) when 15% visible (IntersectionObserver, unobserve after first reveal). Grid children stagger with transition-delay calc(var(--i) * 70ms).
- Lightbox and mobile menu open: scale(.96) rotate(-1deg) opacity 0 → scale(1) rotate(0) opacity 1 over 200ms.
- Post page reading progress bar: transform scaleX(progress) with transform-origin left, updated on scroll inside requestAnimationFrame.
- prefers-reduced-motion: reduce — marquee animation none and the track becomes a single non-duplicated row with overflow-x auto; sticker ring static; no hero intro (everything visible at once); data-reveal elements visible with no transition; hover keeps color and shadow changes but no rotate or translate; all transition durations 0.01ms.

## Imagery
No photographs and no bitmap files. Every illustration is a flat inline SVG drawn in code: thick 6px #111 strokes with stroke-linejoin round and stroke-linecap round, flat fills only in #111, #FFFDF8 and var(--art-pop) (no gradients, no shading, no faces, no characters). The art sits on a solid panel: odd panels have background #FF5A1F with --art-pop: #FFFDF8; even panels have background #FFFDF8 with --art-pop: #FF5A1F. Decorative elements are CSS or SVG: circular sticker with text on a path, rotated rectangle stamps, the dot grid, Lucide icons inside 3px bordered squares.

## Tone
Confident, warm and a little odd. Short sentences, first person, specific concrete details (trains, bakeries, drawers, ink). Loud in layout, never shouty in words. No buzzwords.

---
— Prompt by VibeFather · https://vibefather.ai/t/neo-brutalist-blog-and-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
