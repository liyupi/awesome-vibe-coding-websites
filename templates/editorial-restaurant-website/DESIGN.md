---
name: "Editorial Restaurant Website"
colors:
  paper: "#F4EEE3"
  paper_deep: "#EAE1D1"
  ink: "#1E1B17"
  ink_soft: "#5B544B"
  hairline: "#CFC4B2"
  terracotta: "#A8502F"
  cream: "#FBF8F2"
  moss: "#5F6B47"
  ochre: "#C8963E"
  beet: "#7B3343"
typography:
  display_h1_h2_statements_dish_names_wordmarks_large_contact_links_use_upright_300_for_large_sizes_italic_300_for_accent_words_400_for_dish_names_and_the_header_wordmark_turn_font_optical_sizing_on: { family: "Fraunces", weights: [300, 400] }
  text_and_labels_body_17px_1_6_at_400_prices_500_with_tabular_nums_labels_12px_at_600_uppercase_with_letter_spacing_0_18em_buttons_12px_at_600_uppercase_with_letter_spacing_0_16em: { family: "Instrument Sans", weights: [400, 500, 600] }
spacing: "12-column grid inside a container with max-width 1360px, 48px side padding on desktop and 24px on mobile, and 24px column gaps. Sections have 128px vertical padding on desktop and 80px on mobile. Use 24px between a label and its heading and 32px between a heading and its body text. Rules are 1px #CFC4B2 hairlines. Type scale: .display-xl clamp(3.5rem, 10.5vw, 10.5rem) at weight 300, line-height 0.92, tracking -0.035em; .display-l clamp(2.5rem, 6vw, 6rem) at 300, line-height 0.98, tracking -0.03em; .statement clamp(1.75rem, 3.2vw, 3rem) at 300, line-height 1.15, tracking -0.015em. Breakpoints: mobile below 768px, single column; the desktop grid starts at 1024px; tablet (768–1023px) uses the mobile stacking with wider padding."
radius: "0px everywhere: buttons, chips, tags, figures, cards and the map frame. Only intrinsically circular things are round: the map pin head, the today dot, the nav dot, the pulse ring and the plate drawings."
---

# Editorial Restaurant Website — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#F4EEE3` — Page background, header and course-index background, text on the dark band
- **Paper deep** `#EAE1D1` — Alternate section band (home menu preview), illustration panels, map ground
- **Ink** `#1E1B17` — All headings and body text, primary button fill, reservation band background
- **Ink soft** `#5B544B` — Secondary text, descriptions, captions, dotted leaders (at 50% opacity)
- **Hairline** `#CFC4B2` — 1px rules, borders, table lines, plate rims
- **Terracotta** `#A8502F` — The only UI accent: italic headline words, today dot, active nav dot, course-index underline, map pin and route, hover states
- **Cream** `#FBF8F2` — Plates, cloths and price tags inside illustrations
- **Moss** `#5F6B47` — Illustration only: leaves, hills, park hatch
- **Ochre** `#C8963E` — Illustration only: squash, pears, wheat, sky tint
- **Beet** `#7B3343` — Illustration only: beetroot, small food details

## Typography
- **Display: h1, h2, statements, dish names, wordmarks, large contact links. Use upright 300 for large sizes, italic 300 for accent words, 400 for dish names and the header wordmark. Turn font-optical-sizing on.** — Fraunces (OFL), weights 300/400. Self-host the font files.
- **Text and labels: body 17px/1.6 at 400, prices 500 with tabular-nums, labels 12px at 600 uppercase with letter-spacing 0.18em, buttons 12px at 600 uppercase with letter-spacing 0.16em** — Instrument Sans (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 12-column grid inside a container with max-width 1360px, 48px side padding on desktop and 24px on mobile, and 24px column gaps. Sections have 128px vertical padding on desktop and 80px on mobile. Use 24px between a label and its heading and 32px between a heading and its body text. Rules are 1px #CFC4B2 hairlines. Type scale: .display-xl clamp(3.5rem, 10.5vw, 10.5rem) at weight 300, line-height 0.92, tracking -0.035em; .display-l clamp(2.5rem, 6vw, 6rem) at 300, line-height 0.98, tracking -0.03em; .statement clamp(1.75rem, 3.2vw, 3rem) at 300, line-height 1.15, tracking -0.015em. Breakpoints: mobile below 768px, single column; the desktop grid starts at 1024px; tablet (768–1023px) uses the mobile stacking with wider padding.
- Radius: 0px everywhere: buttons, chips, tags, figures, cards and the map frame. Only intrinsically circular things are round: the map pin head, the today dot, the nav dot, the pulse ring and the plate drawings.

## Motion
- Smooth scroll: new Lenis({ duration: 1.1, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }) driven by one requestAnimationFrame loop that also runs the parallax. Anchor links call lenis.scrollTo(target, { offset: -140 }).
- Headline entrance on load: every h1 line is wrapped in an overflow-hidden block span. The inner span rises from translateY(105%) to 0 over 1000ms with cubic-bezier(0.22,1,0.36,1), 90ms stagger, starting at 150ms. The label row fades in over 400ms first.
- Scroll reveals: [data-reveal] elements start at opacity 0 and translateY(24px) (only under html.js) and move to opacity 1 and 0 over 900ms with cubic-bezier(0.22,1,0.36,1). They are triggered once by an IntersectionObserver with threshold 0.15 and rootMargin '0px 0px -8% 0px'. Items in a group stagger 80ms through a --d CSS variable.
- Parallax strips: each strip holds absolutely positioned layers (top -20%, height 140%) with data-speed (back 0.08, mid 0.18, front 0.32, overlay text 0.45). Per frame, for strips flagged in view by an IntersectionObserver, compute p = clamp((innerHeight - rect.top) / (innerHeight + rect.height), 0, 1) and set each layer to transform: translate3d(0, (0.5 - p) * speed * rect.height px, 0) with will-change: transform.
- Hero plate: the plate group inside the hero figure rotates from 0deg to 10deg, linked to scroll progress through the hero.
- Count-up: the home stats count from 0 to their value over 1200ms with easeOutCubic the first time they enter view.
- Links: nav and text links use a 1px currentColor underline drawn with background-size, growing from 0% to 100% left to right over 400ms on hover. Persistent CTA text links keep the underline and it turns terracotta on hover.
- Dish rows (hover-capable pointers only): the name shifts 4px right and the dotted leader turns terracotta over 300ms.
- Reservation links: on hover the text shifts 8px right, the arrow-up-right icon rotates 45deg and the row's top border turns terracotta, all over 300ms.
- Map: when 30% of the map is in view, the dashed route draws once through an SVG mask whose solid path animates stroke-dashoffset from its length to 0 over 1800ms ease-in-out. The pin then drops from translateY(-24px) with opacity 0 to rest over 500ms with cubic-bezier(0.34,1.56,0.64,1), the label card fades in over 300ms, and a pulse ring under the pin loops (r 10 to 34, opacity 0.5 to 0, 2400ms ease-out, infinite).
- Mobile nav overlay: clip-path moves from inset(0 0 100% 0) to inset(0) over 600ms with cubic-bezier(0.22,1,0.36,1). Links rise 24px and fade in with a 70ms stagger. Lenis stops while the overlay is open.
- Footer giant wordmark: letters rise 40% and fade in with a 40ms stagger when the footer enters view.
- prefers-reduced-motion: reduce: Lenis is never created, parallax transforms are not applied, all [data-reveal] content and headline lines show immediately, count-ups show final values, the hero plate does not rotate, the map route is drawn statically with the pin in place and no pulse, and all CSS transitions and animations are set to 0.01ms.

## Imagery
There are no photographs. All imagery is flat, slightly textured illustration drawn as inline SVG strings in src/art/, using only the palette (cream, paper, paper-deep, ink, ink-soft, hairline, terracotta, moss, ochre, beet). Shapes are simple and geometric with a hand-drawn wobble from one shared SVG filter (feTurbulence type 'fractalNoise' baseFrequency 0.015 numOctaves 2 seed 4, then feDisplacementMap scale 3) applied to shape groups and never to text. A global grain overlay (.grain) is fixed at inset 0 with pointer-events none, z-index 60, opacity 0.07 and mix-blend-mode multiply; its background is a 200px tiled SVG data URI of feTurbulence fractalNoise at baseFrequency 0.8 with 2 octaves. HERO PLATE (viewBox 0 0 400 500): a paper-deep background; a cream plate at (200,250), r 160, with a 1.5px hairline rim and a 1px inner ring at r 120; five ochre squash crescents with lighter #E2B86A inner arcs fanned at 72deg intervals around the centre; six moss sage leaves with cream midribs; a wavy brown-butter drizzle (stroke #9A6A2F, 3px, 70% opacity); fourteen small ink seed ellipses; and the corner of a terracotta linen napkin at the bottom-left, rotated -8deg, with three cream stripe lines. STILL LIFE (viewBox 0 0 360 480): a paper-deep background, a cream cloth as a wavy polygon over the bottom third, two ochre pears with ink stems, one lumpy #D9B04C quince, three ink-soft walnuts with crease lines, and soft ink shadow ellipses at 8% opacity. STRIPS (every layer uses viewBox 0 0 1600 900 with preserveAspectRatio 'xMidYMid slice'). TABLE: the back layer is #E6DCC9 linen with a 6px crosshatch of ink lines at 8% opacity and a 220px terracotta table runner across the middle with three thin cream stripes. The mid layer has seven cream plates (r 90 to 170) with hairline rims, each holding a different simple dish: ochre squash crescents, beet discs with a cream swirl, a moss leaf cluster, ink seed dots, or a terracotta tartare oval with an ochre yolk circle. The front layer has a knife and fork as long rounded ink-soft shapes and two wine-glass rings (terracotta 4px stroke at 35% opacity). FIELD: the back layer is a sky gradient from #EBCB9C at the top to #F4EEE3 at the horizon, with a terracotta sun disc of r 90 at (1150,300). The mid layer has two rolling hill bands (#8A9470 behind, #5F6B47 in front) crossed by twelve parallel curved furrow strokes in cream at 25% opacity. The front layer is a dark #2B2A22 hedgerow of overlapping bumps along the bottom 30%, with a few ochre wheat-stalk strokes. MARKET: the back layer is an ink background with horizontal ink-soft crate slats (40px tall, 14px gaps). The mid layer has three crates seen straight on, packed with produce: terracotta tomatoes with moss star calyxes, ochre pears with ink stems, moss cabbages made of concentric leaf arcs, and beet roots with leaf stalks. The front layer has four cream price tags on ink strings, lettered in Fraunces italic with labels from content.ts ('Quince 3', 'Pears 2', 'Chard 4', 'Squash 5'). FAVICON (public/favicon.svg, 32x32): a terracotta circle with a cream inner ring, like a plate seen from above.

## Tone
Calm, warm and literate, like a printed menu card or a food magazine. Short plain sentences in the first-person plural ('we'), with concrete ingredients, places and times. No exclamation marks, superlatives or marketing clichés.

---
— Prompt by VibeFather · https://vibefather.ai/t/editorial-restaurant-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
