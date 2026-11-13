---
name: "Swiss Design Agency Portfolio"
colors:
  paper: "#FFFFFF"
  ink: "#111111"
  signal_red: "#E62314"
  grid_tint: "rgba(230,35,20,0.08)"
typography:
  display_hero_section_headlines_project_titles_numerals_wordmark: { family: "Inter Tight Variable", weights: [500, 700, 800] }
  text_body_copy_nav_lists: { family: "Inter Variable", weights: [400, 500] }
  captions_section_labels_like_02_meta_labels_figure_captions_small_footer_lines: { family: "IBM Plex Mono", weights: [400, 500] }
spacing: "8px base unit. Section padding-block 160px desktop / 96px mobile. Header 56px tall desktop, 48px mobile. Project rows 112px tall desktop (padding-block 32px), auto with 20px padding on mobile. Type scale: hero clamp(4rem, 14.5vw, 15rem) weight 800, line-height 0.84, letter-spacing -0.045em. Section headline clamp(2.5rem, 6vw, 6rem) weight 700, line-height 0.9, letter-spacing -0.035em. Row title clamp(1.5rem, 3vw, 2.75rem) weight 700, letter-spacing -0.02em. Case numeral clamp(7.5rem, 24vw, 22.5rem) weight 800, line-height 0.8, letter-spacing -0.05em. Body Inter 17px/1.45 desktop, 16px mobile, max 60ch. .caption = IBM Plex Mono 500, 12px, line-height 1.3, uppercase, letter-spacing 0.04em. All text flush-left, ragged-right; numerals use font-variant-numeric: tabular-nums."
radius: "0 everywhere. No rounded corners on anything, including buttons, focus rings and art."
---

# Swiss Design Agency Portfolio — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#FFFFFF` — Page background, text on red and black blocks
- **Ink** `#111111` — All text, hairline rules (1px), black blocks, contact/footer background
- **Signal Red** `#E62314` — Row hover fill, case-study numerals, principles band, art accents, wipe panel, focus ring on dark
- **Grid Tint** `rgba(230,35,20,0.08)` — Grid overlay column fill only (with 1px rgba(230,35,20,0.35) column edges)

## Typography
- **Display: hero, section headlines, project titles, numerals, wordmark** — Inter Tight Variable (OFL), weights 500/700/800. Self-host the font files.
- **Text: body copy, nav, lists** — Inter Variable (OFL), weights 400/500. Self-host the font files.
- **Captions: section labels like (02), meta labels, figure captions, small footer lines** — IBM Plex Mono (OFL), weights 400/500. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Section padding-block 160px desktop / 96px mobile. Header 56px tall desktop, 48px mobile. Project rows 112px tall desktop (padding-block 32px), auto with 20px padding on mobile. Type scale: hero clamp(4rem, 14.5vw, 15rem) weight 800, line-height 0.84, letter-spacing -0.045em. Section headline clamp(2.5rem, 6vw, 6rem) weight 700, line-height 0.9, letter-spacing -0.035em. Row title clamp(1.5rem, 3vw, 2.75rem) weight 700, letter-spacing -0.02em. Case numeral clamp(7.5rem, 24vw, 22.5rem) weight 800, line-height 0.8, letter-spacing -0.05em. Body Inter 17px/1.45 desktop, 16px mobile, max 60ch. .caption = IBM Plex Mono 500, 12px, line-height 1.3, uppercase, letter-spacing 0.04em. All text flush-left, ragged-right; numerals use font-variant-numeric: tabular-nums.
- Radius: 0 everywhere. No rounded corners on anything, including buttons, focus rings and art.

## Motion
- Headline line reveal: headlines are stored as arrays of lines and rendered as <span class="line" style="display:block;overflow:hidden"><span class="line-inner" style="display:block">…</span></span>. Under html.js, .line-inner starts at translateY(105%). When the headline enters the viewport (Motion inView, amount 0.4, once), animate each inner to translateY(0) over 700ms, ease [0.22, 1, 0.36, 1], stagger 70ms. The hero plays on load after 100ms.
- Rule draw: elements with data-reveal="rule" (1px ink hairlines) start at transform scaleX(0) with transform-origin left and animate to scaleX(1) over 600ms, ease [0.65, 0, 0.35, 1], when in view. Project-row top rules stagger 60ms down the list.
- Fade-up: captions and paragraphs with data-reveal="fade" go from opacity 0, translateY(16px) to opacity 1, 0 over 500ms, ease-out, when in view.
- Figure clip: art blocks with data-reveal="clip" go from clip-path inset(0 0 100% 0) to inset(0 0 0 0) over 900ms, ease [0.76, 0, 0.24, 1], when 25% visible.
- Row hover (pointer devices): background ink→signal transition 150ms linear, all text turns paper, the arrow SVG rotates from 0deg to -45deg over 200ms, and the number translates 8px right. :focus-visible gets the same state plus a 2px ink outline inset by -2px.
- Cross-document page transition (home ↔ case, case → next case): @view-transition { navigation: auto; }. The clicked link's [data-vt=num] and [data-vt=title] elements receive view-transition-name proj-num and proj-title. The case hero numeral and title carry the same names, so they morph. ::view-transition gets background #E62314 so a red field shows between pages. ::view-transition-old(root) fades out over 250ms ease. ::view-transition-new(root) animates clip-path inset(100% 0 0 0)→inset(0) over 600ms cubic-bezier(0.65,0,0.35,1) with a 150ms delay. ::view-transition-group(proj-num) and (proj-title) animate over 600ms cubic-bezier(0.65,0,0.35,1). Their old/new images use height:100%; width:auto; object-position:left top, and old fades out in the first 40% while new fades in from 30% to 100%.
- Fallback wipe (when 'onpageswap' in window is false): a fixed #wipe div (inset 0, background #E62314, z-index 100, pointer-events none, clip-path inset(100% 0 0 0)). On an internal link click with data-transition, preventDefault, set sessionStorage 'gridline:wipe' = '1', animate the panel with Motion to clip-path inset(0 0 0 0) over 420ms, ease [0.76, 0, 0.24, 1], then set location.href. On page load, if the flag is set, start the panel at inset(0) and animate it to inset(0 0 100% 0) over 480ms with the same ease, then remove the flag.
- Grid overlay toggle: the overlay fades opacity 0↔1 over 200ms.
- prefers-reduced-motion: reduce: skip every reveal (elements render in their final state), set @view-transition { navigation: none; } inside the media query, never run the wipe, and remove the hover rotation and translation (the colour change stays). No smooth-scroll library and no scroll hijacking; anchors use native CSS scroll-behavior: smooth, disabled under reduced motion.

## Imagery
No photographs and no people. Every image is a flat geometric SVG composition from src/art.ts, built only from paper, ink and signal red: bars, circles, rings, arcs, dot grids and giant letterforms on a 12×8 module of 100 units inside a 1200×800 viewBox. No strokes thinner than 8 units, no gradients, no shadows, no textures. Arrows are inline SVG lines (stroke 2px, square caps, currentColor). Variant a: paper background, ink elements, one red element. Variant b: red background, paper and ink elements. Variant c: ink background, paper elements, one red element.

## Tone
Precise, calm, confident and factual. Short declarative sentences, numbers over adjectives, no exclamation marks, no marketing superlatives.

---
— Prompt by VibeFather · https://vibefather.ai/t/swiss-design-agency-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
