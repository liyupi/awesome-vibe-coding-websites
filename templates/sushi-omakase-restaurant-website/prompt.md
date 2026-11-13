# Sushi Omakase Restaurant Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page marketing site for an eight-seat omakase counter: lacquer-black quiet luxury, a full-bleed macro nigiri hero, a seasonal menu that reveals course by course on scroll, the chef's story, and an interactive counter-seat reservation picker (date, seating time, 8-seat diagram) that runs entirely as UI state.

- Audience: Diners booking high-end tasting counters, and the owners and studios who build sites for such restaurants.
- Goal: Convince a visitor to request a counter seat: establish hush and craft in the first screen, walk them through the season's courses one at a time, earn trust with the chef's story, then let them pick date, seating and seat in one calm interaction.
- Tone: Hushed, precise, unhurried. Short declarative sentences; luxury communicated through restraint, space and light, never adjectives.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), lenis (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL), @fontsource/karla (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest sushi-omakase-restaurant-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add lenis, lucide-react, @fontsource/cormorant-garamond and @fontsource/karla as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors lacquer #0D0B09, charred #171310, cedar #6B4A2F, ashwood #A9805B, amber #C8873A, amber-raised #E3A85C, rice #EDE6DB, mist #9A8F83; fontFamily display 'Cormorant Garamond' and sans 'Karla'; set the default borderRadius scale to 0 and add rounded-sm2 = 2px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/lib/motion.ts holds the IntersectionObserver reveal hook (useReveal, threshold 0.25, fires once), the rAF parallax helper and the prefersReducedMotion() check; all keyframes and transition utilities live in src/index.css.
  - Keep every user-facing string (brand, label lines, hero copy, the eight courses, seat map, hours, FAQs, email) in src/content.ts, built from the variables; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] — An Omakase Counter</title> plus a drawn-in-code favicon.svg (a single 2px amber square centered on the lacquer ground); no other meta work.

## Variables
- [BRAND] — Restaurant name (default: "Kurosumi"). Invented wordmark used in the header, footer, page title, contact email and every mention in the copy.
- [CONCEPT] — Menu concept (default: "seasonal omakase"). How the tasting is described in the hero sub-line, the course intro and the reservation copy (e.g. 'guided cupping flight').
- [PRICE] — Tasting price (default: "$185 per guest"). Shown in the hero sub-line, under the course list, and in the reservation section.
- [SEATS] — Counter seats (default: "8"). Drives the number of tokens in the seat diagram and the spelled-out count in copy like 'a counter for eight'.
- [CHEF] — Chef name (default: "Ren Ishida"). Names the hands in the chef section headline and story; keep it a fictional person.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/sushi-omakase-restaurant-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Lacquer `#0D0B09` — Page ground everywhere; base of the hero scrim. Near-black with a warm brown undertone — never pure #000.
- Charred `#171310` — Solid header background after scroll, footer ground, confirmation panel ground.
- Cedar `#6B4A2F` — Hairlines, section rules, course rail, the wood of the counter diagram. Used at 40–60% opacity for hairlines.
- Ashwood `#A9805B` — Warm wood highlight: dimmed seat tokens, captions, the counter bar in the seat diagram.
- Amber `#C8873A` — The single accent: section labels, active course tick, selected seat fill, CTA underline.
- Amber raised `#E3A85C` — Hover and active accent states only (links, date chips, seat hover hairline).
- Rice `#EDE6DB` — Primary text: headlines, course names, body copy. Warm off-white, never pure #fff.
- Mist `#9A8F83` — Secondary text: descriptions, captions, nav links at rest.

### Typography
- Display — headlines, course names, the pull quote (500 italic): Cormorant Garamond (OFL), weights 500/600
- Text — body, labels, chips, nav (uppercase labels tracked 0.18em): Karla (OFL), weights 400/500/600

### Layout & motion
- Spacing: Generous and unhurried: sections py-40 (160px) desktop / py-24 (96px) mobile; content max-w-6xl (72rem) with px-6 mobile / px-10 desktop; 64–96px between blocks inside a section; structure carried by 1px cedar hairlines at 45% opacity instead of boxes or cards.
- Radius: Almost none: 2px on controls, date chips and seat tokens; 0px on images and surfaces. No pill buttons, no large rounded cards.
- Motion: Lenis smooth scrolling (duration 0.9), initialized once in App; fully disabled under prefers-reduced-motion.
- Motion: Course reveal: IntersectionObserver at 25% threshold, fires once per course — opacity 0→1 and translateY 28px→0 over 750ms cubic-bezier(0.16,1,0.3,1); label, name and description stagger 80ms apart.
- Motion: Hero: the cover photo scales 1.06→1 over 2.4s ease-out on load and parallaxes at 0.15 of scroll (capped at 12%); headline lines fade up staggered 120ms starting at 300ms; the scrim deepens with scroll.
- Motion: Course rail: the tick of the course nearest 40% of the viewport height fills amber over 200ms; past ticks stay amber at 50% opacity.
- Motion: Seat picker micro-interactions: hovering a free token lifts it 2px with a 1px amber hairline; selecting fills amber over 200ms; the inline confirmation panel fades in over 300ms. No animation anywhere exceeds 750ms.
- Motion: prefers-reduced-motion: Lenis off, parallax and load-scale off, every reveal becomes a plain 200ms opacity fade, micro-interactions keep color changes only.
- Imagery: Every photograph comes from one session: macro food photography on a dark lacquered cedar counter, one warm side light from the left like a low lamp over the counter, deep soft shadows, muted amber highlights, near-black background with faint warm wood grain, subtle film grain, shallow depth of field. No text, no logos, no branded props, no recognizable faces — the chef appears only as hands at work. No stock-photo services; the six photographs are generated by VibeFather and downloaded into the project.

## Pages & Sections
### [BRAND] — An Omakase Counter (`index.html`)
1. **Header** — Fixed top bar, 72px. Left: the [BRAND] wordmark set in Cormorant Garamond 600, 20px, rice — letters only, no logo mark. Right (desktop): anchor links 'The house', 'This season', 'The hands', 'Find us' in Karla 12px uppercase, tracking 0.18em, mist → rice on hover; then a quiet CTA 'Reserve' with a 1px amber underline. Mobile: wordmark + 'Reserve' + a lucide menu/x toggle opening a full-width charred panel with the same four links stacked.
   Layout: position: fixed, full width, z-50, transparent over the hero; after 80px of scroll the bar gains bg charred at 92% opacity, a backdrop blur and a bottom 1px cedar hairline (transition 300ms).
   Motion: Background and hairline fade in on the 80px threshold; mobile menu panel slides down 300ms; anchor links use Lenis smooth scrolling to their sections.
2. **Hero** — Full-viewport anchor. Small label above the headline: 'AN OMAKASE COUNTER FOR [SEATS]' (Karla 12px uppercase, amber, tracking 0.18em). Headline in Cormorant Garamond 500, clamp(3rem, 8vw, 6.25rem), line-height 1.04, rice: 'Eight seats. One season at a time.' Sub-line, Karla 400, 18px, mist, max-w 46ch: 'Warm rice, day-boat fish and a counter of cedar — [BRAND] serves one [CONCEPT] menu each night, [PRICE].' Two CTAs: primary 'Reserve a counter seat' (rice text, 1px amber underline that thickens to 2px on hover, arrow-right icon) scrolling to #reserve; secondary 'The courses' in mist scrolling to #courses. Bottom center: a 1px amber vertical line, 48px tall, whose height quietly loops 24px→48px→24px every 3.2s.
   Layout: 100vh relative. Background: public/images/hero-nigiri.webp, absolute inset-0, object-cover, object-position center 68%. Scrim: linear-gradient(105deg, rgba(13,11,9,0.92) 0%, rgba(13,11,9,0.55) 45%, rgba(13,11,9,0.12) 100%). Text block absolute bottom-left on the 12-column grid, columns 1–7, bottom padding 96px desktop / 48px mobile; headline and sub-line left-aligned.
   Motion: Cover photo scales 1.06→1 over 2.4s on load and parallaxes at 0.15 (max 12%) on scroll; headline, sub-line and CTAs fade up in sequence, 120ms apart, starting 300ms; the amber scroll line loops. Reduced motion: static photo, one 200ms fade for the text block.
3. **The house** — Label 'THE HOUSE' (Karla uppercase amber). Headline, Cormorant 500, clamp(2.25rem, 4.5vw, 3.5rem), rice: 'Quiet is the luxury.' Two paragraphs, Karla 400, 17px, mist, max-w 46ch: 'The room seats [SEATS] and holds nothing louder than the knives. Cedar, lacquer, two low lamps — everything else was deliberately left out.' / 'Fish comes off the morning boat; rice is seasoned with a two-year akazu and held warmer than the room. Nothing at the counter is rushed, including you.' Below, one hairline-separated quiet row, Karla uppercase 12px mist: 'TWO SEATINGS · [SEATS] GUESTS · ONE MENU'.
   Layout: 12-column grid: photo right, columns 8–12 (counter-interior.webp, full-height ~560px, object-cover, 0px radius, bleeding to the right viewport edge); text columns 1–6 with the label, headline, paragraphs and the quiet row. Mobile: photo on top (320px tall), text below.
   Motion: The interior photograph parallaxes at 0.08 and reveals once (opacity + 28px rise, 750ms); text blocks reveal with 80ms stagger; the quiet row fades in last.
4. **This season — courses** — Label 'THIS SEASON'. Headline: 'Eight courses, served one at a time.' Intro line, mist: 'The menu follows the market boat and is rewritten with the season.' Then the eight courses, each with a Karla uppercase mist label, a Cormorant 600 rice name, and a one-line Karla mist description: Course 01 · First fire — 'Hokkaido scallop seared over binchotan, yuzu kosho, a whisper of smoked salt.' Course 02 · Silk — 'Chawanmushi of snow crab, dashi gelée, young ginger.' Course 03 · The boat — 'Day-boat sashimi, three cuts, wasabi grated to order.' Course 04 · Slow ember — 'Braised Kyoto vegetables in bonito broth, six hours.' Course 05 · The progression — 'Five nigiri in sequence — warm rice, akazu, fish rested, never chilled.' Course 06 · Smoke and char — 'Grilled barramundi collar, charred lemon, shiso.' Course 07 · The hand roll — 'Temaki of bluefin belly and crisp nori, served one at a time and eaten immediately.' Course 08 · Last sweetness — 'Warabi mochi, stone-milled matcha, hojicha to finish.' Closing hairline note, Karla 14px mist: 'The whole counter eats together — one path, [PRICE]; allergies honored with 72 hours' notice.'
   Layout: Vertical progression down the page. Desktop: a sticky progress rail on the left (1px cedar vertical line with eight 6px square ticks, sticky within the section). Each course is a 12-column row with 96px between rows: 'COURSE 01' label in columns 1–2; name and description in columns 3–7 (name clamp 1.75–2rem); courses 01, 03 and 05 carry a photograph in columns 8–12 (01 right, 03 left mirrored so the photo takes 1–5, 05 right), object-cover, 0px radius, roughly 4:3 to 16:9 as supplied. Mobile: rail hidden, each course stacked with photos full-width and 24px gaps.
   Motion: Each course reveals independently at 25% viewport (750ms rise-and-fade, 80ms inner stagger); photographs parallax 0.06 within their frames; the rail tick of the course nearest 40% viewport fills amber (200ms), past ticks rest at 50% amber. Reduced motion: plain 200ms opacity fades.
5. **The hands — chef** — Label 'THE HANDS'. Headline: '[CHEF] shapes every piece.' Body, Karla 17px mist, max-w 44ch: 'Fifteen years across counters in Kyoto and Copenhagen, and two rules carried from both: rice warmer than the room, fish never chilled past the moment.' / 'The counter is worked by one pair of hands each night — the same hands that fillet, season and press what you eat.' Pull quote in Cormorant Garamond 500 italic, 28px, rice, with a 1px amber left rule: 'The rice decides; the fish only asks.' Caption under the photograph, Karla 12px mist: 'Nigiri, pressed once. Photographed across the counter.'
   Layout: Mirror of 'The house': photograph on columns 1–5 (chef-hands.webp, 3:4, ~640px tall, bleeding to the left viewport edge), text on columns 7–12. Mobile: stacked, photo first, 380px tall.
   Motion: The photograph reveals with a slow 1.04→1 zoom over 1.2s (once); text and pull quote reveal with 80ms stagger. Reduced motion: opacity fades only.
6. **Reserve — counter-seat picker** — Label 'RESERVATIONS'. Headline: 'Choose your seat at the counter.' Left column copy, Karla 17px mist, max-w 40ch: 'Two seatings each night, 17:30 and 20:00. The counter seats [SEATS]; every seat watches the same hands. [PRICE], 72 hours to cancel.' Right column, three steps separated by 1px cedar hairlines (no boxes, no panel): Step 1 'THE EVENING' — seven date chips generated from the visitor's clock at runtime, each showing weekday and day number. Step 2 'THE SEATING' — two options, '17:30' and '20:00'. Step 3 'THE SEAT' — a top-view diagram: a horizontal ashwood bar (the counter) with a small 10px amber circle labeled 'the chef' behind it, and [SEATS] square tokens numbered 1–[SEATS] in front; default content marks seats 4 and 7 taken (dimmed, diagonal strike, not clickable). Selecting date + seating + a free token updates a summary line, Karla 14px rice: e.g. 'Thursday 20:00 · counter seat 5'. Button 'Request this seat' (rice, amber underline) swaps the step area to an inline confirmation: 'Noted. We reply personally within a day to confirm every seat.' with a 'Change selection' link that restores the picker. Nothing is submitted anywhere.
   Layout: Two columns: copy columns 1–5, picker columns 6–12. Seat tokens 44px square (40px on mobile, 6px gaps, wrapping to a second row if [SEATS] grows); date chips 72px wide with horizontal scroll on mobile; all controls 2px radius on the lacquer ground.
   Motion: Free-seat hover lifts the token 2px with a 1px amber hairline; selection cross-fades the amber fill over 200ms; date-chip selection slides a 1px amber underline (180ms); the confirmation fades in over 300ms. Reduced motion: color-only transitions.
7. **Find us** — Label 'FIND US'. Headline: 'Old Harbour, after dusk.' Three quiet columns, each with one 16px lucide icon (map-pin, clock, mail) in amber and Karla text: Address — '14 Kestin Row, Old Harbour Quarter' / Hours — 'Tuesday to Saturday, seatings 17:30 and 20:00' / Write — 'reservations@kurosumi.com' (from content.ts; changes with [BRAND]). Below, three FAQ rows separated by hairlines, question Karla 500 rice, answer Karla 400 mist: 'Dietaries?' — 'The menu is one path; tell us 72 hours ahead and the kitchen bends it.' / 'Cancellation?' — 'Seats release back to the counter at 72 hours.' / 'Walk-ins?' — 'The counter is [SEATS]; we keep none empty. Book ahead.'
   Layout: Icon-topped columns on a 12-column grid (three equal spans with 48px gaps), hairline above the FAQ rows, which are always open (no accordion).
   Motion: Columns and FAQ rows reveal with the standard 750ms rise-and-fade, 80ms stagger. No other motion.
8. **Footer** — 1px cedar hairline, then on one line: the [BRAND] wordmark (Cormorant 600, rice), the quiet line 'A counter for [SEATS]' in Karla 12px mist (spelled-out number from content.ts), and anchor links 'The house · This season · Reserve' in mist. Optional [CREDIT] link in 12px mist at the far right. No dates, no social links, no newsletter.
   Layout: charred ground, py-12, max-w-6xl, flex row wrapping to a column on mobile.
   Motion: None.

## Assets
- image: Download https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/hero-nigiri.webp to public/images/hero-nigiri.webp. Alt: 'Two pieces of nigiri on a dark lacquered cedar counter under a single warm light.' Used full-bleed as the hero anchor (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/course-appetizer.webp to public/images/course-appetizer.webp. Alt: 'A charcoal-seared scallop in a small dark ceramic dish on cedar.' Used beside Course 01 (3:4). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/course-sashimi.webp to public/images/course-sashimi.webp. Alt: 'Three cuts of day-boat sashimi fanned on dark slate over the cedar counter.' Used beside Course 03 (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/course-nigiri-set.webp to public/images/course-nigiri-set.webp. Alt: 'Five pieces of nigiri in a row on a long dark serving board.' Used beside Course 05 (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/chef-hands.webp to public/images/chef-hands.webp. Alt: 'A chef's hands pressing a piece of nigiri over the cedar counter.' Used in 'The hands' section (3:4); hands and forearms only, no face. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/58784ade-8566-4083-9c76-e82c638662a5/counter-interior.webp to public/images/counter-interior.webp. Alt: 'The empty eight-seat cedar counter at dusk, lit by two low lamps.' Used in 'The house' section (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: lucide-react (ISC) via npm — arrow-right in the hero CTA and the seat-request button; map-pin, clock and mail in the 'Find us' columns; menu and x for the mobile header. No other iconography: no emoji, no logo marks, no decorative icon rows.
- font: @fontsource/cormorant-garamond (OFL, weights 500 and 600 plus 500 italic) and @fontsource/karla (OFL, weights 400, 500, 600), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and all six photographs in ASSETS.md at the project root: path, source, author or generator, license.

## Don'ts
- No backend, no API calls, no analytics; the reservation picker is local UI state only and never submits anywhere — 'Request this seat' shows the inline confirmation panel and nothing else.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react, photographs from public/images; never hotlink, never use Unsplash/Pexels/Pixabay or placeholder-image services.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ under 20 MB by compressing each photograph to ≤ 350 KB WebP.
- Single page with anchor navigation only; must render cleanly at 1440×900 and 390×844 with zero console errors, and respect prefers-reduced-motion.
- No real restaurant, chef or brand names, no Michelin stars or award badges, no calligraphy marks, seal stamps or kanji logotypes — the wordmark is [BRAND] set in Cormorant Garamond, courses numbered with plain numerals.
- No recognizable faces anywhere; the chef appears only as hands at work in the photograph.
- Stay out of the generic SaaS look: no white or light backgrounds, no rounded cards, no pill buttons, no blue-purple gradients, no glassmorphism panels — structure comes from hairlines, whitespace and type on the lacquer ground.
- No content dates anywhere (no 'Est.' years, no publish dates); the reservation date chips are generated from the visitor's clock at runtime.
- All copy, labels, sample data and alt text in US English; every string lives in src/content.ts; when [BRAND], [CONCEPT], [CHEF] or [SEATS] change, rewrite the season's course names, story and spelled-out counts to fit the new values instead of leaving sushi copy under a different brand.
- List every third-party file (two font families, lucide icons, six photographs) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/sushi-omakase-restaurant-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
