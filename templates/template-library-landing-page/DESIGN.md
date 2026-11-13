---
name: "Template Library Landing Page"
colors:
  ink: "#0a0b0a"
  panel: "#111311"
  raised: "#171a17"
  line: "#232723"
  line_strong: "#2f342f"
  bone: "#ecefe8"
  ash: "#9aa197"
  smoke: "#6b7268"
  acid: "#c6f432"
  acid_dim: "#9fc426"
  aurora_green: "rgba(104,150,102,0.22)"
  aurora_teal: "rgba(47,111,106,0.20)"
  aurora_amber: "rgba(170,126,52,0.12)"
  syntax_teal: "#7fb8a8"
  syntax_sand: "#d8c08a"
typography:
  display_h1_h2_card_titles_type_list_names_footer_giant_wordmark: { family: "Bricolage Grotesque Variable (@fontsource-variable/bricolage-grotesque)", weights: [500, 600, 700] }
  text_body_nav_buttons_faq: { family: "Inter Variable (@fontsource-variable/inter)", weights: [400, 500, 600] }
  mono_eyebrow_step_labels_tags_counts_url_pills_code_panel_meter_numbers: { family: "JetBrains Mono Variable (@fontsource-variable/jetbrains-mono)", weights: [400, 500] }
spacing: "8px base unit. Container max-width 1240px, centered, horizontal padding 24px (20px under 640px). Section vertical padding 128px desktop and 88px mobile. Section header block: mono label, then H2 with a 16px gap, then a 17px Ash intro paragraph (max-width 620px) with a 16px gap, then 48px to the content. Type scale: H1 72px/1.02, weight 600, letter-spacing -0.03em (44px under 640px); H2 48px/1.05, weight 600, -0.025em (34px mobile); card title 18px/1.3, weight 600; body 17px/1.6; hero sub 19px/1.55; mono labels 12px uppercase with letter-spacing 0.08em. Grid gaps are 16px for the demo wall and 20px for the catalog."
radius: "Browser-frame cards and catalog cards 10px; code panel and Pro panel 14px; buttons 8px; tags, eyebrow and URL pills 999px; mini-site inner shapes 2–4px. No radius larger than 14px except pills."
---

# Template Library Landing Page — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Ink** `#0a0b0a` — Page background; text color on lime buttons
- **Panel** `#111311` — Section panels, code panel body, card bodies, eyebrow pill
- **Raised** `#171a17` — Hover backgrounds, browser-frame chrome bar, active tab
- **Line** `#232723` — 1px hairline borders and dividers everywhere
- **Line Strong** `#2f342f` — Button outlines, input-like borders, browser dots, meter track border
- **Bone** `#ecefe8` — Primary text and headings
- **Ash** `#9aa197` — Body copy and secondary text
- **Smoke** `#6b7268` — Mono labels, captions, code comments, URL pills
- **Acid** `#c6f432` — The only accent: primary CTA fill, step numerals, meter fill, caret, check icons, hover outlines (at 55% opacity). Never used for large areas or body text.
- **Acid Dim** `#9fc426` — Primary CTA hover fill
- **Aurora Green** `rgba(104,150,102,0.22)` — Hero-only radial glow, top-left
- **Aurora Teal** `rgba(47,111,106,0.20)` — Hero-only radial glow, top-right
- **Aurora Amber** `rgba(170,126,52,0.12)` — Hero-only radial glow, center
- **Syntax Teal** `#7fb8a8` — Code keys and flags
- **Syntax Sand** `#d8c08a` — Code strings

## Typography
- **Display: H1, H2, card titles, type-list names, footer giant wordmark** — Bricolage Grotesque Variable (@fontsource-variable/bricolage-grotesque) (OFL), weights 500/600/700. Self-host the font files.
- **Text: body, nav, buttons, FAQ** — Inter Variable (@fontsource-variable/inter) (OFL), weights 400/500/600. Self-host the font files.
- **Mono: eyebrow, step labels, tags, counts, URL pills, code panel, meter numbers** — JetBrains Mono Variable (@fontsource-variable/jetbrains-mono) (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1240px, centered, horizontal padding 24px (20px under 640px). Section vertical padding 128px desktop and 88px mobile. Section header block: mono label, then H2 with a 16px gap, then a 17px Ash intro paragraph (max-width 620px) with a 16px gap, then 48px to the content. Type scale: H1 72px/1.02, weight 600, letter-spacing -0.03em (44px under 640px); H2 48px/1.05, weight 600, -0.025em (34px mobile); card title 18px/1.3, weight 600; body 17px/1.6; hero sub 19px/1.55; mono labels 12px uppercase with letter-spacing 0.08em. Grid gaps are 16px for the demo wall and 20px for the catalog.
- Radius: Browser-frame cards and catalog cards 10px; code panel and Pro panel 14px; buttons 8px; tags, eyebrow and URL pills 999px; mini-site inner shapes 2–4px. No radius larger than 14px except pills.

## Motion
- Hero marquee: each demo-wall row is a flex track that contains its card list twice. Each card has margin-right 16px, so translateX(0 → -50%) loops seamlessly. Rows A and C move left; rows B and D move right (animation-direction: reverse). Durations: A 64s, B 76s, C 58s, D 70s, linear, infinite. Hovering a row sets animation-play-state: paused.
- Hero aurora: three absolutely positioned 60vw circles with radial-gradient(closest-side, color, transparent) and filter: blur(80px). They drift with a 24s ease-in-out infinite alternate keyframe (translate up to ±4% plus scale 1 → 1.08), each with a different delay (0s, -8s, -16s).
- Eyebrow lime dot pulses its opacity 1 → 0.35 → 1 over 2.4s.
- Section reveals: Motion whileInView with initial {opacity:0, y:16}, animate {opacity:1, y:0}, duration 0.5s, ease [0.22,1,0.36,1], viewport {once:true, margin:'-80px'}. Children stagger by 0.06s.
- Catalog and demo cards on hover: translateY(-2px), border-color shifts to rgba(198,244,50,0.55), over 200ms. Catalog filter changes use Motion AnimatePresence with layout: cards fade and scale 0.98 → 1 over 0.25s.
- Type-list rows on hover: background becomes Raised, the ArrowUpRight icon slides 6px right and turns Acid, and a thumbnail strip opens from height 0 to 76px over 300ms. Desktop (≥1024px) only.
- Code panel: a lime block caret (8×16px) blinks at the end of the last code line with a 1.1s steps(1) animation. The copy icon swaps Copy → Check for 1.6s.
- Pro meter: the fill animates width from 0 to the claimed percentage over 1.2s ease-out when it scrolls into view.
- FAQ: the answer animates height auto with Motion (0.3s). The Plus icon rotates 45° when open.
- Header: after scrollY > 8, the background goes from transparent to rgba(10,11,10,0.78) with backdrop-filter: blur(10px) and a 1px Line bottom border, over 200ms.
- prefers-reduced-motion: reduce stops marquees (animation: none; the first card set sits static and tracks get overflow-x: auto), stops aurora drift, the eyebrow pulse and the caret blink (caret stays solid), and makes Motion reveals instant via useReducedMotion. The meter shows its final width immediately.

## Imagery
No photos or bitmaps anywhere. All visuals are code: (1) the hero aurora, built from CSS radial gradients; (2) a faint 64px hairline grid over the hero, built as background-image of two 1px linear-gradients in rgba(236,239,232,0.035) and masked with radial-gradient(ellipse at 50% 20%, black, transparent 70%); (3) twelve invented mini-websites, each a React component drawn with absolutely positioned divs and inline SVG in percentage units so it scales to any card size. Mini-sites use their own muted palettes (cream, terracotta, olive, teal, sand, rust, mustard, charcoal). They never use Acid lime, and there is never blue-purple or purple-pink. They contain no readable text other than the URL pill in the browser chrome. They show no logos, people or characters.

## Tone
Precise, calm and crafted. Short declarative sentences, concrete nouns, no hype words (no 'revolutionary', 'supercharge', 'unleash'), no filler. Every heading names what its section covers.

---
— Prompt by VibeFather · https://vibefather.ai/t/template-library-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
