# Golf Club Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page golf club site with an elegant deep-green-and-ivory identity: a morning-fairway hero with one gentle parallax, a course tour of featured holes with par, yardage and self-drawing SVG hole layouts, a day/time tee-time grid with sample availability and a locally saved reservation, three membership tiers on ivory cards, a clubhouse dining block and a sample events strip.

- Audience: Golf and country clubs, nine-hole courses and links clubs, and the studios dragging their sites into this decade.
- Goal: Move a visitor from the view to the first tee: fall for the morning course, understand the holes, book a tee time in three taps, and consider membership — with every number honestly labeled as sample data.
- Tone: courteous, unhurried, quietly proud — a secretary's letter, not a brochure; short lines, exact numbers, no superlatives.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/playfair-display (OFL), @fontsource/mulish (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest golf-club-website -- --template react-ts; add tailwindcss@3.4, postcss and autoprefixer as dev dependencies; add motion, lucide-react, @fontsource/playfair-display and @fontsource/mulish as dependencies.
  - vite.config.ts: base './', build.sourcemap false, build output dist/.
  - tailwind.config.js: extend colors fairwaydeep #1E3D2B, fairway #2A4E38, ivory #F4EFE3, ivoryline #DED4BE, brass #B08D4A, brasslight #C9A968, pineink #2B3327, fescue #9BA791; fontFamily display 'Playfair Display' and sans 'Mulish'; radius: panel 4px and pill 999px.
  - postcss.config.js: tailwindcss + autoprefixer.
  - src/components/HoleSVG.tsx: a hand-drawn hole layout drawn in code, viewBox 0 0 400 220 — the fairway as a thick tapered path (stroke 26px, round caps, fairway green #2A4E38) following a fixed path string per hole, the tee as a 14px pineink square at the path's start, the green as a 34×24 ellipse (#7FA06B) at the path's end with a 3px brass flag line and dot, two sand bunkers as 20px ivoryline blobs placed from a fixed offset pair, and dashed olive rough hugging the fairway path at 40% opacity; each hole's path data, green position and bunker offsets live in content.ts; the fairway path animates stroke-dashoffset 1→0 (800ms) the first time its card is shown.
  - src/components/TeeGrid.tsx: the day/time picker — three static sample day chips ('Tuesday', 'Friday', 'Saturday') crossed with eight hourly slots (07:00–11:00, 13:00–15:00); cell states come from a fixed availability map in content.ts (available / taken / selected); clicking an available cell selects it (brass fill), a players row (2/3/4) completes the reservation.
  - src/lib/motion.ts: gentle variants — reveal (opacity 0→1, y 20→0, 700ms cubic-bezier(0.16,1,0.3,1), 100ms stagger, whileInView once), crossfade (300ms) — with useReducedMotion skipping parallax and stroke-draws (holes render complete) and using plain 200ms fades.
  - Keep every user-facing string and data set (club, region, green fee, holes array {n, name, par, yards, index, note, path, greenAt, bunkers}, tee availability map, tiers, dining copy, events, contact) in src/content.ts; sections read from it so values swap in one place.
  - index.html: <title>[BRAND] Golf Club — [REGION]</title> plus a drawn-in-code favicon.svg (a small brass flag line on the fairway-deep ground); no other meta work.

## Variables
- [BRAND] — Club name (default: "Kestrel Downs"). Invented club name for the wordmark, page title, dining room name and contact email (from content.ts).
- [REGION] — Setting (default: "Aldermoor Heath"). The invented setting the course is routed through — hero label, address line and footer.
- [HOLES] — Hole count (default: "18"). The course's hole count in the hero label and course-tour intro ('an [HOLES]-hole heathland course').
- [GREEN_FEE] — Visitor green fee (default: "$95"). The sample visitor rate in the hero sub-line and the tee-time block.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/golf-club-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Fairway deep `#1E3D2B` — Page ground everywhere — deep heathland green, the background of the whole club.
- Fairway `#2A4E38` — Raised tints on green: tee-grid cells, event rows, hover grounds; the SVG fairway stroke.
- Ivory `#F4EFE3` — Panels, hole cards, membership cards, form fields — the club's paper.
- Ivory line `#DED4BE` — Hairlines on ivory: table rules, card borders, bunker blobs in the SVG.
- Brass `#B08D4A` — The rules and accents: 1px brass hairlines on ivory, hole numbers, par/yardage chips, CTAs, the flag in the SVG.
- Brass light `#C9A968` — Hover and emphasis states on brass.
- Pine ink `#2B3327` — Primary text on ivory — green-black ink for serif headlines and body.
- Fescue `#9BA791` — Secondary text on green: captions, meta lines, sample notes.

### Typography
- Display — club wordmark, headlines, hole names, prices (refined serif, italic accents): Playfair Display (OFL), weights 500/600
- Text — body, chips, tables, form labels (quiet sans; labels uppercase tracked 0.14em): Mulish (OFL), weights 400/500/600

### Layout & motion
- Spacing: Club-letter generous: sections py-32 (128px) desktop / py-20 mobile; content max-w-6xl px-6/px-10; ivory panels carry 32px padding with 1px brass hairline borders; the course tour card gets 48px padding — it is the letterhead.
- Radius: Restrained: 4px on panels, cards and inputs; 999px only on the two CTAs and chips; photographs keep square corners.
- Motion: Hero: the fairway photograph parallaxes at 0.08 of scroll (the page's one parallax) and settles 1.03→1 over 2.5s on load; the headline follows 200ms behind.
- Motion: Hole layouts: the fairway path draws itself stroke-dashoffset 1→0 over 800ms the first time its card is shown; bunkers and green fade in 300ms after.
- Motion: Hole tap-through: prev/next crossfades the card content (300ms) with a 12px slide; the hole number in brass ticks over.
- Motion: Tee grid: available cells lift 1px with a brass ring on hover (200ms); selecting fills brass with ivory text; the reservation note fades in 300ms.
- Motion: Reveals: sections and cards fade up (y 20→0, 700ms cubic-bezier(0.16,1,0.3,1)) with 100ms stagger via Motion whileInView, once.
- Motion: prefers-reduced-motion: no parallax or load-zoom, hole paths render complete instantly, all reveals become plain 200ms opacity fades.
- Imagery: One morning at the club: golf-course and clubhouse photography in low golden morning sun with soft mist — dew on fairways and greens, one flag in the haze, deep greens under ivory light, brass lanterns in a moody clubhouse interior, heather and bunker detail — tranquil, exclusive, 35mm look. Golfers appear at most as distant figures from behind with no identifiable faces. No readable text anywhere in frame (no signage, scoreboards or scorecards), no logos. The six photographs are generated by VibeFather and downloaded into public/images.

## Pages & Sections
### [BRAND] Golf Club — [REGION] (`index.html`)
1. **Header** — Fixed top bar, 68px, transparent over the hero. Left: the [BRAND] wordmark in Playfair Display 600 21px ivory with 'GOLF CLUB' in Mulish 600 10px uppercase tracked 0.3em fescue beneath. Right (desktop): anchor links 'The Course', 'Tee Times', 'Membership', 'Dining' in Mulish 500 13px uppercase tracked 0.14em fescue → ivory on hover; then a brass-outline pill 'Book a tee time' (ivory text) → #tees. Mobile: wordmark + pill + lucide menu/x toggle opening a fairway-deep panel with the four links stacked.
   Layout: position fixed, z-40; after 80px of scroll the bar gains the fairway-deep ground at 93% opacity, a soft blur and a 1px brass bottom hairline at 40% opacity (300ms).
   Motion: Ground and hairline fade in at the threshold; mobile panel slides down 250ms; link hovers 200ms.
2. **Hero — first light** — Full-bleed morning fairway photograph (public/images/fairway-morning.webp): dew, low mist, one pin in the distance. Label above the headline in Mulish 600 12px uppercase tracked 0.2em brasslight: 'AN [HOLES]-HOLE HEATHLAND COURSE · [REGION]'. Headline in Playfair Display 500, clamp(3rem, 7vw, 5.5rem), ivory: 'The heath, played properly.' Sub, Mulish 400 17px fescue max-w 48ch: 'Fast greens, firm fairways, and weather that keeps the card honest. Visitors welcome Tuesday to Sunday — green fee [GREEN_FEE].' CTAs: 'Book a tee time' (brass pill, fairway-deep text) → #tees; 'Tour the course' (ivory text with brasslight underline) → #course.
   Layout: min-h 94vh; photo absolute inset-0 object-cover object-center; scrim linear-gradient(180deg, rgba(30,61,43,0.42) 0%, rgba(30,61,43,0.18) 45%, rgba(30,61,43,0.94) 100%); text block bottom-left, columns 1–9, padding-bottom 104px.
   Motion: Photo parallaxes at 0.08 and settles 1.03→1 over 2.5s; label, headline, sub and CTAs fade up staggered 100ms from 300ms; reduced motion: static photo, single fade.
3. **The course — hole cards** — id=course. Label 'THE COURSE' brasslight; heading Playfair: 'Three holes worth the walk.' An ivory panel (48px padding, 1px brass hairline) holding the featured hole: the hole number as a huge Playfair figure in brass ('01'), the hole name ('Heather Start'), chips 'PAR 4 · 385 YDS · INDEX 7' in Mulish 600 12px on ivoryline pills, the HoleSVG layout, and one line of advice in Mulish italic fescue-on-ivory (pineink at 75%): 'Driver optional — the burn sleeps left of the short grass.' Prev/next arrows (lucide) tap through three holes: 01 'Heather Start' — PAR 4 · 385 YDS · INDEX 7; 07 'Kestrel's Rise' — PAR 3 · 168 YDS · INDEX 11 — 'All carry, no bail-out; take one more club into the wind.'; 12 'The Long Sleep' — PAR 5 · 512 YDS · INDEX 3 — 'Three good shots or two brave ones; the green runs away right.' Sample note beneath, Mulish 12px fescue: 'Yardage and index are sample data for the demo.'
   Layout: Panel max-w-4xl mx-auto; inside, a 12-column grid: number + name + chips + advice columns 1–5, HoleSVG columns 6–12; arrows bottom-right with a '1 / 3' counter in brass.
   Motion: The fairway path draws itself on first view (800ms); tap-through crossfades 300ms; reduced motion: paths render complete, instant swaps.
4. **Tee times — sample grid** — id=tees. Label 'TEE TIMES'; heading: 'Pick your morning.' Intro Mulish 16px fescue: 'Three sample days, hourly slots, honest availability — the pro shop confirms every booking by phone.' The TeeGrid on a fairway panel: day chips ('Tuesday', 'Friday', 'Saturday' — static sample days), a 4×2 grid of time slots (07:00, 08:00, 09:00, 10:00, 11:00, 13:00, 14:00, 15:00) with available cells on ivory and taken cells on fairway at 50% with a struck diagonal, and a players row ('2 players' / '3 players' / '4 players'). Button 'Reserve this slot' (brass). On click: save {day, time, players} to localStorage key 'teeTime' and show the inline note (300ms fade, Mulish 13px fescue): 'Saved on this device only — this demo sends nothing; the pro shop confirms by phone. Availability is sample data.' Visitor line beside the grid: 'Visitor green fee [GREEN_FEE] · members book by phone.'
   Layout: 12-column grid: grid panel columns 1–8, visitor line and players column 9–12 self-center; mobile stacks.
   Motion: Cells hover-lift 1px with a brass ring (200ms); selection fills brass; the note fades in; reduced motion: color-only transitions.
5. **Membership** — id=membership. Label 'MEMBERSHIP'; heading: 'Three ways to belong.' Three ivory cards (32px padding, 1px brass hairline, 4px radius): 'Midweek' — '$145 / MO' brass Playfair 32px — 'Weekday play, Monday to Friday' · 'Handicap and competitions' · 'Dining room priority'. 'Full Playing' — '$230 / MO' — 'Seven-day play' · 'Competition entry' · 'Two guest passes monthly'. 'Founder's' — '$3,900 / YR' with a small brasslight tag 'BY INVITE (SAMPLE)' — 'Full playing rights' · 'Family guests' · '$400 clubhouse credit'. Each card ends with the text link 'Enquire →' (brass, mailto proshop@kestreldowns.com from content.ts). Sample note: 'Fees are sample data for the demo.'
   Layout: 3-column grid (stacked on mobile), 24px gaps; prices on a 1px ivoryline rule; the Founder's card lifts 6px on desktop.
   Motion: Cards fade up staggered 120ms; hover lifts 2px; reduced motion: plain fades.
6. **Clubhouse dining** — id=dining. Label 'CLUBHOUSE'; heading: 'The [BRAND] Room.' Copy Mulish 16px fescue max-w 44ch: 'Lunch from noon on the terrace, dinner till late by the fire — open to members and visiting players. Sunday is roast, and the toast list is short on purpose.' Hours pattern rows on brass hairlines: 'LUNCH — NOON TILL 15:00 · DINNER — 18:00 TILL LATE · SUNDAY — ROAST FROM 12:30'. The moody interior photograph (public/images/clubhouse-interior.webp, 3:4) with the caption 'THE DINING ROOM, WINTER EVENING'.
   Layout: 12-column grid: photograph columns 1–5, text columns 6–12 self-center; mobile stacks photo first.
   Motion: Photograph fades up with a slow 1.03→1 settle; rows stagger 100ms.
7. **Events strip** — Label 'FIXTURES' brasslight; heading: 'The quiet calendar.' Three rows on brass hairlines (40% opacity), each with a pattern tag in brass, a Playfair 20px ivory title and a Mulish 14px fescue line: 'WEEKLY — Twilight Nine' — 'Summer evenings, nine holes, one glass of something after.' / 'MONTHLY — Mug & Medal' — 'Stableford, early tee, lunch to follow.' / 'SEASONAL — Guest Day' — 'Members bring a friend; the heath behaves (mostly).' Footnote Mulish 12px fescue: 'Sample fixtures — patterns, not dates.'
   Layout: Rows full content width, 72px tall, tag left / title center / line right on desktop; stacked on mobile.
   Motion: Rows fade up staggered 100ms; tags gain a brasslight underline once on reveal.
8. **Footer** — 1px brass hairline (40% opacity) top rule. Left: the [BRAND] wordmark and one line Mulish 13px fescue: '1 Aldermoor Lane, [REGION] · proshop@kestreldowns.com · (555) 014-2266 — an invented club; yardage, fees and fixtures on this page are sample copy.' Right: anchor links 'The Course · Tee Times · Membership · Dining' in fescue; optional [CREDIT] link. No dates, no social row.
   Layout: py-14, max-w-6xl, flex row wrapping to column on mobile.
   Motion: None.

## Assets
- image: Download https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/fairway-morning.webp to public/images/fairway-morning.webp. Alt: 'A misty morning fairway with dew on the grass and one distant flag.' Used full-bleed as the hero anchor (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/green-flag.webp to public/images/green-flag.webp. Alt: 'A close morning view of a putting green with the flagstick in low light.' Used beside the tee-time visitor line (4:3). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/clubhouse-interior.webp to public/images/clubhouse-interior.webp. Alt: 'A moody clubhouse dining room with dark wood, brass lamps and set tables.' Dining section (3:4). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/bunker-detail.webp to public/images/bunker-detail.webp. Alt: 'A detail of heather and a sand bunker edge in morning light.' Used in the course tour panel corner (1:1). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/golfer-behind.webp to public/images/golfer-behind.webp. Alt: 'A golfer seen from behind, distant, walking down a dewy fairway.' Membership section side (3:4). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/3da4f67b-a83f-4546-839c-1b71245947ab/clubhouse-exterior.webp to public/images/clubhouse-exterior.webp. Alt: 'The clubhouse exterior at dawn overlooking the closing green, no people.' Events strip backdrop band (16:9). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: lucide-react (ISC) via npm — chevron-left and chevron-right on the hole tap-through, clock and map-pin in the tee-time and footer contact lines, calendar on event tags, users on the players row, arrow-right in links and CTAs, menu and x for the mobile header. No other iconography: no emoji, no club crests, no tournament marks.
- font: @fontsource/playfair-display (OFL, weights 500 and 600, plus the 500 italic) and @fontsource/mulish (OFL, weights 400, 500, 600), imported in src/main.tsx; never loaded from fonts.googleapis.com or any CDN. List both families and the six photographs in ASSETS.md at the project root: path, source, generator or author, license.

## Don'ts
- No booking backend, no payments, no network calls: the tee-time reservation saves to localStorage only with its honest inline note, membership enquiries are a mailto, and nothing anywhere checks out.
- No real golf clubs, courses, tournaments or Tours: the club, holes, fixtures and dining room are invented, with no championship or ranking claims anywhere.
- Yardage, index, availability, green fees and membership fees are sample data and stay labeled as such; no dates tied to the real clock — day chips are static weekday samples and fixtures are weekly/monthly/seasonal patterns, never calendar dates.
- Photographs show the course, clubhouse and details only: golfers at most as distant figures from behind with no identifiable faces, and no readable text, signage, scoreboards or logos anywhere in frame; the dining outlet is the clubhouse's own invented room — no restaurant brands.
- No CDN anything: fonts ship through Fontsource packages, icons from lucide-react, photographs from public/images; never hotlink, never use Unsplash/Pexels/Pixabay or placeholder-image services.
- Production build: single command, minified, no source maps, no src/ in the output, relative paths (Vite base './'); keep dist/ under 20 MB by compressing each photograph to ≤ 400 KB WebP.
- Single page with anchor navigation; must render cleanly at 1440×900 and 390×844 with zero console errors; the tee grid and hole tap-through must be keyboard operable (buttons with visible focus) and every animation must respect prefers-reduced-motion (no parallax or path-draw; holes render complete; plain fades).
- Keep the club identity locked: deep fairway-green ground, ivory panels, hairline brass rules, Playfair Display over Mulish, restrained radii; no light page backgrounds, no neon, no glassmorphism, nothing faster than a 300ms interface transition.
- All copy, labels, sample data and alt text in US English, living in src/content.ts; when [BRAND], [REGION], [HOLES] or [GREEN_FEE] change, rewrite hole names, fixtures and tiers to fit the new club instead of leaving heathland copy under a links club.
- List every third-party file (two Fontsource families, lucide icons, six photographs) in ASSETS.md at the project root: path, source, license.

---
— Prompt by VibeFather · https://vibefather.ai/t/golf-club-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
