---
name: "News Magazine Homepage"
colors:
  paper: "#FAF8F2"
  panel: "#FFFFFF"
  line: "#D9D4C7"
  line_2: "#1E1B16"
  ink: "#1E1B16"
  soft_ink: "#5D594E"
  red: "#B3282D"
  red_deep: "#8E1F23"
  red_mist: "#F6E7E4"
  slate_ink: "#1A1210"
  good: "#3E7A52"
typography:
  display_the_nameplate_lead_headline_section_front_headlines_playfair_display_heavy_and_institutional: { family: "Playfair Display", weights: [700, 900] }
  article_serif_article_body_standfirsts_pull_quotes_pt_serif: { family: "PT Serif", weights: [400, 700] }
  sans_kickers_bylines_section_bars_captions_ui_inter: { family: "Inter", weights: [400, 500, 600] }
spacing: "8px base unit. Container max-width 1280px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; article reading column max 680px with a 34ch held measure. The front page is a 12-column grid, column gap 24px, ruled by 1px Line dividers (real borders, not gaps — the newspaper look). Section vertical rhythm: 40px between fronts. Type scale: nameplate Playfair 900 clamp(44px, 7vw, 84px) letter-spacing -0.01em; lead headline Playfair 900 clamp(32px, 4.6vw, 56px) line-height 1.04; front-card headlines Playfair 700 24px; headline rows PT Serif 700 17px; standfirst PT Serif italic 17px Soft Ink; article body PT Serif 18px / 1.75; kicker Inter 600 11px uppercase letter-spacing 0.18em Red; byline Inter 500 12.5px Soft Ink; captions Inter 400 12.5px Soft Ink. Buttons: height 44px, Inter 600 13.5px; primary Red fill with white text. Inputs: height 44px, Panel fill, 1px Line border, focus Red border + 2px offset ring. Focus everywhere: 2px Red outline, 3px offset."
radius: "2px everywhere — print, not app. The newsletter box and fact box also 2px."
---

# News Magazine Homepage — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Paper** `#FAF8F2` — Page background throughout — aged newsprint warm.
- **Panel** `#FFFFFF` — Newsletter box, fact box.
- **Line** `#D9D4C7` — 1px hairlines: the grid, rules, dividers.
- **Line 2** `#1E1B16` — The masthead's 2px bold rule and section-front top rules.
- **Ink** `#1E1B16` — Headlines and body ink.
- **Soft Ink** `#5D594E` — Standfirsts, bylines, captions, eyebrows.
- **Red** `#B3282D` — The one accent: kicker bars, drop caps, pull-quote rules, links, primary buttons, focus ring.
- **Red Deep** `#8E1F23` — Hover and pressed states.
- **Red Mist** `#F6E7E4` — Section label chips, selected states.
- **Slate Ink** `#1A1210` — Text on red fills.
- **Good** `#3E7A52` — Newsletter success line.

## Typography
- **Display: the nameplate, lead headline, section-front headlines — Playfair Display, heavy and institutional** — Playfair Display (OFL), weights 700/900. Self-host the font files.
- **Article serif: article body, standfirsts, pull quotes — PT Serif** — PT Serif (OFL), weights 400/700. Self-host the font files.
- **Sans: kickers, bylines, section bars, captions, UI — Inter** — Inter (OFL), weights 400/500/600. Self-host the font files.

## Spacing & shape
- Spacing: 8px base unit. Container max-width 1280px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; article reading column max 680px with a 34ch held measure. The front page is a 12-column grid, column gap 24px, ruled by 1px Line dividers (real borders, not gaps — the newspaper look). Section vertical rhythm: 40px between fronts. Type scale: nameplate Playfair 900 clamp(44px, 7vw, 84px) letter-spacing -0.01em; lead headline Playfair 900 clamp(32px, 4.6vw, 56px) line-height 1.04; front-card headlines Playfair 700 24px; headline rows PT Serif 700 17px; standfirst PT Serif italic 17px Soft Ink; article body PT Serif 18px / 1.75; kicker Inter 600 11px uppercase letter-spacing 0.18em Red; byline Inter 500 12.5px Soft Ink; captions Inter 400 12.5px Soft Ink. Buttons: height 44px, Inter 600 13.5px; primary Red fill with white text. Inputs: height 44px, Panel fill, 1px Line border, focus Red border + 2px offset ring. Focus everywhere: 2px Red outline, 3px offset.
- Radius: 2px everywhere — print, not app. The newsletter box and fact box also 2px.

## Motion
- Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). A paper settles; nothing bounces.
- Reveal: story blocks rise 8px over 450ms as they enter (Motion whileInView, once); the front page staggers by grid row (60ms).
- Lead photo: settles from scale 1.02 over 1400ms once, then rest.
- Headline hovers: PT Serif headline rows shift their Red index bar 4px right (140ms) and the headline ink holds — underline only via .link-draw on links.
- SlimBar: translateY -100%→0 over 200ms when triggered; hides again when the masthead returns.
- Newsletter submit: crossfades to the Good line over 240ms (220ms out).
- Article page: the header block settles 8px; the drop cap and pull quote reveal with their paragraphs; the fact box slides 6px.
- prefers-reduced-motion: reduce — no reveals, no photo settle, no bar shifts; everything at rest. Use CSS @media in index.css plus Motion's useReducedMotion.

## Imagery
Six documentary editorial photographs made for this template in one consistent style: available light, candid scenes of an invented city — a riverfront market morning, a city-hall stairwell, a print shop press, a small venue crowd (faces indistinct), a main street at dusk, a library reading room. No readable text, no logos, no identifiable people (crowd faces stay indistinct). Photos object-fit cover, 2px corners, 1px Line outline; captions in Inter 12.5px Soft Ink with a sample credit 'Ledger staff photo (fictional)'. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Tone
Weekly-paper dry: plain declaratives, gentle wit, no clickbait. Headlines carry the paper's voice.

---
— Prompt by VibeFather · https://vibefather.ai/t/news-magazine-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
