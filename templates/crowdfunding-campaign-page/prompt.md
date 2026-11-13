# Crowdfunding Campaign Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page crowdfunding campaign for an invented board game: deep-plum ground with cream panels and brass accents, a tabletop macro hero of box and components, a sample funding bar with backer and days chips, three limited reward tiers, an animated stretch-goal track that unlocks milestones as the bar passes them, story chapters with component close-ups, an honest FAQ accordion and a sample updates list.

- Audience: Board game designers, tabletop studios and any creator running a product campaign — plus the studios building their pages.
- Goal: Walk a visitor from 'that looks lovely on the table' to 'I want in' in one scroll: fund the story with the progress bar, pick a tier, see what more unlocks, and trust the team enough to press pledge — a demo note here, a real platform checkout in production.
- Tone: Warm, plainspoken, game-night honest — enthusiastic about wood and linen, quiet about hype; every number cheerfully admits it is sample copy.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/young-serif (OFL), @fontsource/alegreya-sans (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest crowdfunding-campaign-page -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/young-serif and @fontsource/alegreya-sans as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors plumdeep #2A1D27, plum #3A2A37, cream #F5EBDC, creamline #DCCDB6, brass #C89B4B, brasslight #E0BC72, cocoa #3B2F2A, mauveash #8D7A82; fontFamily display 'Young Serif' and sans 'Alegreya Sans'; radius: panel 12px and pill 999px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/ProgressStory.tsx: the funding heart — a cream panel holding the raised figure (rAF count-up 0→31240 once on reveal), a 10px bar that fills to 111% (1.8s ease-out), backer and days chips, and a stretch-goal row of four milestone nodes; each node's state derives from the animated value against a fixed thresholds array in content.ts ($32,000 / $38,000 / $46,000) — when the animated figure passes a threshold, that node pops from locked (mauveash, lucide lock) to unlocked (brass, lucide check); a 'FUNDED — SAMPLE' brass chip sits at the goal mark.
  - FAQ accordion built with button + region pairs (aria-expanded, keyboard operable, no native details styling quirks): one open at a time is not required; chevron rotates 180deg on open.
  - Pledge buttons are demo anchors: every tier's 'Pledge $XX' button reveals the same inline note under the tier (300ms fade, Alegreya Sans 13px mauveash): 'Demo pledge — nothing is charged, no platform is connected.'
  - src/lib/motion.ts: reveal variants (opacity 0→1, y 22→0, 700ms cubic-bezier(0.16,1,0.3,1), 100ms stagger, whileInView once) with useReducedMotion rendering the bar full instantly, no count-up, no node pops.
  - Keep every user-facing string and data set (game, studio, raised/goal/days, tiers, thresholds, story chapters, team, FAQ, updates) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[GAME] — a board game by [STUDIO]</title> plus a drawn-in-code favicon.svg (a simple brass meeple silhouette on the plum ground); no other meta work.

## Variables
- [GAME] — Project name (default: "Thistlewick"). The invented game's name — campaign title, hero, tiers and footer.
- [STUDIO] — Studio name (default: "Paper Lantern Press"). The invented studio behind the campaign; header wordmark, team intro and footer.
- [GOAL] — Funding goal (default: "$28,000"). The sample funding goal the progress bar measures against; the goal mark sits at 100% of the bar.
- [DAYS] — Days remaining (default: "14"). The static days-to-go chip — a sample number only, never a countdown to a real date.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/crowdfunding-campaign-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Plum deep `#2A1D27` — Page ground everywhere — deep warm plum, the table it all sits on.
- Plum `#3A2A37` — Hover tints, tier-card borders on plum, updates rows.
- Cream `#F5EBDC` — Panels, tier cards, progress panel, FAQ rows — the paper of the page.
- Cream line `#DCCDB6` — Hairlines and rules on cream surfaces.
- Brass `#C89B4B` — Money and milestones only: raised figure, progress fill, unlocked nodes, prices, chips, links.
- Brass light `#E0BC72` — Hover and emphasis states on brass; the most-popular ribbon.
- Cocoa `#3B2F2A` — Primary text on cream — warm dark brown, never black.
- Mauve ash `#8D7A82` — Secondary text on plum: captions, sample notes, locked milestone labels.

### Typography
- Display — campaign title, tier names, chapter titles (chunky storybook serif): Young Serif (OFL), weights 400
- Text — body, chips, buttons, FAQ (warm humanist sans; labels uppercase tracked 0.12em): Alegreya Sans (OFL), weights 400/500/700

### Layout & motion
- Spacing: Game-night generous: sections py-28 (112px) desktop / py-20 mobile; content max-w-6xl px-6/px-10; cream panels carry 28px padding with 1px creamline borders; tiers and chapters gap 24px; the progress panel gets 36px padding — it is the money table.
- Radius: Rounded like box corners: 12px on panels, cards and images; 999px pills on chips and buttons; the progress bar itself 999px.
- Motion: Progress story: on reveal the bar fills 0→111% over 1.8s ease-out while the raised figure counts up (rAF); the 'FUNDED — SAMPLE' chip pops when the fill crosses 100%.
- Motion: Stretch goals: as the counting figure passes each threshold ($32k, $38k, $46k), that node pops (scale 0.7→1 spring, 300ms) from locked to unlocked brass; locked nodes rest at 60% opacity and state exactly how much more they need.
- Motion: Tier cards hover-lift 3px with the price turning brasslight (200ms); the most-popular ribbon sways once on reveal (rotate ±3°, 600ms).
- Motion: FAQ: rows expand with a 280ms height ease and the chevron rotates 180°; keyboard operable.
- Motion: Reveals: sections, tiers and chapters fade up (y 22→0, 700ms) with 100ms stagger via Motion whileInView, once.
- Motion: Hero: the tabletop macro settles 1.03→1 over 2.5s; the title follows 200ms later.
- Motion: prefers-reduced-motion: the bar renders full instantly with the final figure (no count-up), milestone states render final (no pops), FAQ opens without easing, all reveals become 200ms fades.
- Imagery: One tabletop session: warm macro and overhead photography of game components on a deep plum felt table under a single warm lamp glow from the upper left — wooden meeples and lantern pieces, linen-finish cards, brass-toned dice and coins, a box and an unmarked illustrated board corner — soft shadows, shallow depth of field, cozy game-night mood, cream-and-wood palette with brass highlights. Components carry no readable text (blank cards, unmarked board and dice), no logos, and no people ever enter the frame. The six photographs are generated by VibeFather and downloaded into public/images.

## Pages & Sections
### [GAME] — a board game by [STUDIO] (`index.html`)
1. **Header** — Fixed top bar, 64px, plumdeep at 92% opacity with a 1px plum bottom hairline. Left: the [STUDIO] wordmark in Young Serif 18px cream. Right (desktop): anchor links 'Story', 'Rewards', 'Stretch goals', 'FAQ' in Alegreya Sans 500 14px mauveash → cream on hover; then a brass pill 'Back this project' (cocoa text) → #rewards. Mobile: wordmark + pill + lucide menu/x toggle opening a plum panel with the four links stacked.
   Layout: position fixed, z-40; the bar exists from load (the hero photo runs beneath it).
   Motion: Mobile panel slides down 250ms; link hover 200ms; the brass pill presses darker.
2. **Hero — the table** — Full-bleed tabletop macro (public/images/components-hero.webp): the game box half open with wooden lantern pieces, meeples, dice and a stack of blank cards arranged under the lamp. Label above the title in Alegreya Sans 700 12px uppercase tracked 0.18em brass: 'A COZY STRATEGY GAME · 2–5 PLAYERS · ~60 MIN'. Title in Young Serif, clamp(3rem, 8vw, 6rem), cream: '[GAME]'. Sub-line Alegreya Sans 400 17px cream at 85% max-w 48ch: 'Hedge witches, rebuilt villages and one warm lamp. Gather the grove, trade lantern-light, and let the thicket decide who wins.' CTAs: 'Back [GAME]' (brass pill, cocoa text) → #rewards; 'Read the story' (outline cream) → #story.
   Layout: min-h 92vh; photo absolute inset-0 object-cover object-center; scrim linear-gradient(180deg, rgba(42,29,39,0.55) 0%, rgba(42,29,39,0.25) 45%, rgba(42,29,39,0.94) 100%); text block bottom-left, columns 1–8, padding-bottom 96px.
   Motion: Photo settles 1.03→1 over 2.5s; label, title, sub and CTAs fade up staggered 100ms from 300ms; reduced motion: static, single fade.
3. **Funding progress — sample** — A cream panel overlapping the hero's bottom edge by -36px (max-w-6xl, 12px radius, 36px padding): the raised figure in Young Serif 48px brass counting up to '$31,240'; beside it 'of [GOAL] goal' and '111%' in Alegreya Sans cocoa; the 10px bar (creamline track, brass fill) with a small 'FUNDED — SAMPLE' brass chip at the 100% mark; under the bar three chips in Alegreya Sans 13px — lucide users '1,412 backers — sample', lucide clock '[DAYS] days to go — sample', lucide info 'demo page, no real funding'. Everything derives from content.ts.
   Layout: Panel spans the content width, overlapping the hero; chips wrap on mobile; the bar is full-width with the funded chip positioned at 100% minus its own width.
   Motion: On reveal the bar fills 0→111% (1.8s) and the figure counts up (rAF); the funded chip pops at 100%; reduced motion: bar full and figure final immediately.
4. **Reward tiers** — id=rewards. Label 'REWARDS' brass; heading Young Serif cocoa: 'Pick your lantern.' Three cream cards (12px radius, creamline border, 28px padding): Card 1 'Hedge Friend' — '$19' brass — 'The base game: illustrated board, 60 linen-finish cards, five wooden lanterns, rulebook.' — chip 'EARLY BIRD · LIMITED 200 — 63 CLAIMED (SAMPLE)'. Card 2 'Village Keeper' — '$39' — 'Base game, painted-miniatures expansion, the art print, and unlocked stretch goals.' — chip 'LIMITED 500 — 214 CLAIMED (SAMPLE)' — plus a brasslight ribbon 'MOST POPULAR' on the top edge. Card 3 'Grand Grove' — '$69' — 'Everything, the solo mode, an embroidered component bag, and your name printed in the rulebook.' — chip 'LIMITED 100 — 18 CLAIMED (SAMPLE)'. Each card ends with a brass pill 'Pledge $XX — demo' that reveals the inline note 'Demo pledge — nothing is charged, no platform is connected.' (300ms fade).
   Layout: 3-column grid (stacked on mobile) with the middle card lifted 8px on desktop; the ribbon sits across card 2's top border.
   Motion: Cards fade up staggered 120ms; hover lifts 3px; the ribbon sways once; the demo note fades in and stays.
5. **Stretch goals — the unlock track** — id=stretch. Label 'STRETCH GOALS'; heading: 'More brass, if you will.' A cream panel with a horizontal track: four milestone nodes at 100% ($28k goal, brass check, 'FUNDED — SAMPLE'), $32,000 'Metal coins' — unlocks during the fill animation — 'replaces punchboard coins with stamped metal', $38,000 'Solo campaign mode' — locked — 'needs $6,760 more (sample)', $46,000 'Oversized grove board' — locked — 'needs $14,760 more (sample)'. Each node: a 40px circle (locked = mauuveash with lucide lock at 60% opacity; unlocked = brass with lucide check), a Young Serif 18px cocoa title, an Alegreya Sans 13px description, and a brass threshold chip. The track line fills brass up to the current sample figure's position (111% clamped at track end).
   Layout: Track = a 2px creamline horizontal line with nodes evenly spaced (flex row, gap grows to fill); stacks into a vertical timeline on mobile with a vertical line.
   Motion: The track fill follows the same reveal animation as the progress bar; the $32k node pops from locked to unlocked (scale 0.7→1, 300ms) as the figure passes it; locked nodes stay quiet; reduced motion: all states final.
6. **Campaign story** — id=story. Label 'THE STORY'; heading: 'Why this table.' Three chapters, alternating image and text: Chapter 1 'The idea' (component-meeple.webp, 1:1) — 'Cozy strategy, not cozy nap: one hour, five players, and a hedge that fights back. We wanted a game you could teach before the kettle boils.' Chapter 2 'The pieces' (component-cards.webp and component-dice.webp, two 1:1s side by side) — 'Linen-finish cards, solid-wood lanterns, coins with weight. No plastic anywhere in the box — the thicket deserves better.' Chapter 3 'The table' (table-scene.webp, 16:9) — 'Two to five players, setup in four minutes, one scoring track even grandma will interrogate. It plays beautifully at two and rowdily at five.' Team list on a cream card beneath: 'From [STUDIO]' — 'Wren Callow — design · Ferris Okafor — development · Mattie Voss — illustrations' with the ashrose line 'Invented creators for a demo campaign.'
   Layout: Chapters on 12-column grids alternating (image 1–5 / text 7–12, then mirrored); chapter 2 uses two square images stacked in columns 1–5; team card full-width max-w-3xl centered.
   Motion: Chapters fade up staggered 120ms; images get a slow 1.03→1 settle on reveal; reduced motion: plain fades.
7. **FAQ and updates** — id=faq. Two-column (stacked): left 'QUESTIONS' — an accordion of four rows on cream (question Alegreya Sans 700 16px cocoa, answer 15px cocoa at 80%): 'Is this a real campaign?' — 'No — this is a template demo. Every figure, tier limit and backer count is sample copy; the pledge buttons charge nothing.' / 'When does it ship?' — 'Sample answer: fulfillment is planned for the season after the campaign closes — a real page would state real windows.' / 'How many players?' — '2–5, best at 4; a solo mode sits behind the $38,000 stretch goal.' / 'What's in the box?' — 'Board, 60 cards, five wooden lanterns, coins, rulebook — no plastic.' Right 'UPDATES' — three sample rows on plum with cream text (no dates): 'Update 04 — The coins are metal' — 'The first stretch goal crossed its line tonight; foundry quotes are in.' / 'Update 03 — Box art, final' — 'The cover illustration is locked; the lantern glow stays.' / 'Update 02 — 1,000 lanterns lit' — 'A thousand backers before the second week — thank you.' A small mauveash line under both columns: 'Updates and answers are sample copy.'
   Layout: Two 6-column halves (FAQ left, updates right); FAQ rows separated by creamline hairlines; update rows separated by plum hairlines.
   Motion: FAQ rows expand 280ms with a rotating chevron; updates fade up staggered 100ms; reduced motion: instant open, plain fades.
8. **Footer** — 1px plum top hairline. Left: '[STUDIO]' in Young Serif 16px cream and one line Alegreya Sans 13px mauveash: 'An invented studio shipping an invented game — all campaign numbers on this page are sample copy.' Right: anchor links 'Story · Rewards · Stretch goals · FAQ' in mauveash; optional [CREDIT] link. No dates, no social row.
   Layout: py-12, max-w-6xl, flex row wrapping to column on mobile.
   Motion: None.

## Assets
- image: Download https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/components-hero.webp to public/images/components-hero.webp. Alt: 'A half-open board game box with wooden lantern pieces, meeples, dice and blank cards arranged on a plum felt table under a warm lamp.' Used full-bleed as the hero anchor (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-meeple.webp to public/images/component-meeple.webp. Alt: 'Wooden meeples and lantern pieces clustered under warm lamp light.' Story chapter 1 (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-cards.webp to public/images/component-cards.webp. Alt: 'A fanned stack of linen-finish cards with abstract art faces and no text.' Story chapter 2 (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-dice.webp to public/images/component-dice.webp. Alt: 'Brass-and-cream dice and unmarked metal coins on plum felt.' Story chapter 2 (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/component-board.webp to public/images/component-board.webp. Alt: 'A corner of an illustrated game board with hedge paths and no text, wooden pieces resting on it.' Used beside the reward tiers strip (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/b50c4ead-d6ab-4931-95c5-38dd7a776a6b/table-scene.webp to public/images/table-scene.webp. Alt: 'The full game laid out on a plum felt table under a single warm lamp, box lid leaning nearby.' Story chapter 3 (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: lucide-react (ISC) via npm — users, clock and info on the sample chips, lock and check on stretch-goal nodes, chevron-down on the FAQ, package on tier contents headers, arrow-right in CTAs, menu and x for the mobile header. No other iconography: no emoji, no platform marks, no coin icons that imitate real currency symbols beyond $ in text.
- font: @fontsource/young-serif (OFL, weight 400) and @fontsource/alegreya-sans (OFL, weights 400, 500, 700), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and the six photographs in ASSETS.md at the project root: path, source, generator or author, license.

## Don'ts
- No payments, no checkout, no platform integration: pledge buttons only reveal the demo note ('nothing is charged, no platform is connected'), and no form ever submits.
- No real crowdfunding platforms' branding: no Kickstarter, Indiegogo or any platform name, logo or signature green-blue palette — the page stays platform-agnostic and says 'your platform of choice' at most.
- Every number is sample copy and stays labeled: raised figure, percentage, backer count, tier limits, claimed counts, thresholds and the [DAYS] chip are static samples; no real countdown, no real date math, no live-anything claims.
- No real games, artists or studios credited anywhere: the game, studio, creators, tiers and updates are invented; component photos imply no real product.
- Photographs show game components and tabletop only — no people; cards, boards, coins and dice carry no readable text (blank or abstract faces only) and no logos; if a generated image ever shows writing, a face or a brand, replace it.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react, photographs from public/images; never hotlink, never use Unsplash/Pexels/Pixabay or placeholder-image services.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ under 20 MB by compressing each photograph to ≤ 400 KB WebP.
- Single page with anchor navigation; must render cleanly at 1440×900 and 390×844 with zero console errors; the FAQ accordion must be keyboard operable (button + aria-expanded), and all motion must respect prefers-reduced-motion (full static bar and final milestone states, no count-up or pops, plain fades).
- Keep the board-game warmth locked: plum ground, cream panels, one brass accent used only for money and milestones, Young Serif over Alegreya Sans, 12px radii; no dark-neon, no glassmorphism, no platform green-blue, no plastic-looking gradients.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [GAME], [STUDIO], [GOAL] or [DAYS] change, rewrite tiers, thresholds and story copy to fit the new campaign instead of leaving hedge-witch copy under a tarot deck.
- List every third-party file (two Fontsource families, lucide icons, six photographs) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/crowdfunding-campaign-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
