---
name: "Open Source Project Homepage"
colors:
  paper: "#FAF8F2"
  wash: "#F1EEE4"
  card: "#FFFFFF"
  ink: "#1F2421"
  slate_green: "#5D6B60"
  rule: "#E2DDD0"
  term_green: "#2F9E44"
  term_green_deep: "#237A34"
  amber_dot: "#D9822B"
typography:
  code_names_counters_install_line_eyebrows_uppercase_letterspaced_the_wordmark: { family: "JetBrains Mono", weights: [400, 700] }
  prose_pitch_feature_lines_sponsor_copy_changelog_bodies: { family: "Overpass", weights: [400, 600] }
spacing: "8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 88px desktop, 68px under 1024px, 52px under 640px — docs density, not marketing air. Type scale: H1 clamp(40px, 6vw, 72px) JetBrains Mono 700, line-height 1.05, letter-spacing -0.02em; H2 clamp(26px, 3.4vw, 40px) JetBrains Mono 700; H3 18px JetBrains Mono 700; pitch Overpass 400 18px / 1.65 Ink at 90%; body Overpass 400 15.5px / 1.7 (max-width 62ch); eyebrow JetBrains Mono 400 11px uppercase letter-spacing 0.2em Slate Green; caption JetBrains Mono 400 12px Slate Green; code 13.5px / 1.7 JetBrains Mono. Buttons: height 44px, padding 0 20px, JetBrains Mono 700 13px. Primary: Ink fill, Paper text. Secondary: 1px Ink/25% border, Ink text. Focus ring everywhere: 2px Term Green outline with 3px offset."
radius: "8px on cards, the code panel, buttons, chips and the install strip. 999px only for the tab switch, counters' chips and avatar circles."
---

# Open Source Project Homepage — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#FAF8F2` — Page background throughout.
- **Wash** `#F1EEE4` — Alternate section background (Features, Changelog), chips, hover fill.
- **Card** `#FFFFFF` — Code panel, docs card, sponsor cards, install strip.
- **Ink** `#1F2421` — Headlines, prose, table text, icon color, code plain tokens.
- **Slate Green** `#5D6B60` — Secondary text, captions, eyebrows, docs mock metadata.
- **Rule** `#E2DDD0` — 1px hairlines, card borders, code panel chrome lines, dividers.
- **Term Green** `#2F9E44` — The one accent: the prompt glyph, copied state, keyword tokens, counters, focus ring, avatar rings on hover.
- **Term Green Deep** `#237A34` — Keyword token on Card, links' hover, the 'v2' changelog dot.
- **Amber Dot** `#D9822B` — Quiet second color: string tokens, the changelog's minor-version dots, the sponsor tier badge.

## Typography
- **Code, names, counters, install line, eyebrows (uppercase letterspaced), the wordmark** — JetBrains Mono (OFL), weights 400/700. Self-host the font files.
- **Prose: pitch, feature lines, sponsor copy, changelog bodies** — Overpass (OFL), weights 400/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 88px desktop, 68px under 1024px, 52px under 640px — docs density, not marketing air. Type scale: H1 clamp(40px, 6vw, 72px) JetBrains Mono 700, line-height 1.05, letter-spacing -0.02em; H2 clamp(26px, 3.4vw, 40px) JetBrains Mono 700; H3 18px JetBrains Mono 700; pitch Overpass 400 18px / 1.65 Ink at 90%; body Overpass 400 15.5px / 1.7 (max-width 62ch); eyebrow JetBrains Mono 400 11px uppercase letter-spacing 0.2em Slate Green; caption JetBrains Mono 400 12px Slate Green; code 13.5px / 1.7 JetBrains Mono. Buttons: height 44px, padding 0 20px, JetBrains Mono 700 13px. Primary: Ink fill, Paper text. Secondary: 1px Ink/25% border, Ink text. Focus ring everywhere: 2px Term Green outline with 3px offset.
- Radius: 8px on cards, the code panel, buttons, chips and the install strip. 999px only for the tab switch, counters' chips and avatar circles.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and tab swaps; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the changelog accordion. Terminal-snappy: quick settles, no drift.
- Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(10px) and animate to rest over 450ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 50ms.
- Install strip: on load the prompt glyph ('$') types in, then the command fades across 200ms; the copy button's label swaps to 'copied ✓' in Term Green for 1400ms.
- Code panel tabs: the JS/TS switch slides a Term Green underline (Motion layoutId); the panel content crossfades 8px horizontally, 220ms --ease-io; the output comment lines (// → FigleafResult) type across character by character once per swap (500ms, disabled under reduced motion).
- Feature cards: hover lifts 2px and the icon's stroke re-draws (stroke-dashoffset, once per hover).
- Counters: each figure counts up once on reveal (600ms), tabular-nums; the '(sample)' caption never animates.
- Avatars: initials circles gain a 2px Term Green ring and scale 1.06 on hover with the name tooltip fading in; the strip staggers in 40ms per avatar.
- Changelog accordion: height 0 to auto, opacity 0 to 1, 240ms --ease-io; the Plus rotates 45 degrees into an X; the version dot fills Term Green when open.
- Docs card: the TOC mock's active row carries a Term Green left rule that slides between rows on a slow 6s interval loop (pausing on hover and under reduced motion) — the page feels maintained.
- Links: .link-draw grows a 1px Term Green underline over 220ms on hover and focus-visible.
- prefers-reduced-motion: reduce — disable typing, counters (final values), the TOC loop, staggered reveals; keep color/border hover changes. Use CSS @media in index.css plus Motion's useReducedMotion in components.

## Imagery
No photography, no stock, no external images — the code panel is the hero image. Window chrome (three dots, title bar), install prompt, avatars (initials circles), badges, sponsor tiers, TOC mock and community glyphs are all drawn in SVG/CSS. Community links use drawn generic glyphs (a repository box, a chat bubble, an issue ring) — never real platform marks. Icons: lucide-react only, stroke width 2.

## Tone
README-confident and a little dry: short declarative sentences, real trade-offs stated plainly, no marketing adjectives, one joke about semver.

---
— Prompt by VibeFather · https://vibefather.ai/t/open-source-project-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
