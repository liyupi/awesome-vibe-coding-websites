# Church Community Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [CHURCH], a neighborhood church in [CITY] led by [PASTOR], [VIBE] in spirit. It must welcome without pressure: service times with what-to-expect, four recurring events, an eight-entry sermon archive filterable by series and speaker, six groups, a no-processing giving section, plan-your-visit steps and a 'say hello' form confirming client-side. One page: index.html with sections (#services, #events, #sermons, #groups, #giving, #visit). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Newcomers nervously typing 'church near me' at 9pm on a Saturday, plus long-time members checking tonight's group. They want times, parking truth, what to wear, and a face that looks kind.
- Goal: Get newcomers to plan a visit and members to the right group. Within ten seconds a visitor sees times and the visit CTA; within two minutes they've read what-to-expect and heard the pastor's tone.
- Tone: Warm, plain, hospitable. Short sentences, no insider language without a gloss, gentle humor about parking. Faith expressed in welcome, not vocabulary.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/sortsmillgoudy (OFL-1.1), @fontsource-variable/source-sans-3 (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (warmwhite, stonepaper, card, teal, teal-deep, teal-mist, ink, slate, wheat, rule) and fontFamily display ['Sorts Mill Goudy', 'Georgia', 'serif'], sans ['Source Sans 3 Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 12px and add maxWidth { container: '1120px' }.
  - In src/fonts.ts import '@fontsource/sortsmillgoudy/400.css' and '@fontsource-variable/source-sans-3'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, sermon, event, group, hour and image path, typed), src/lib/brand.ts (churchSlug = [CHURCH] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = churchSlug without hyphens + '.org'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with churchSlug + ':'), src/lib/useOpenNow.ts (open-now from the services table and the client clock), src/lib/sermonFilters.ts (applyFilters(sermons, { series, speaker })).
  - State: src/store/hello.ts is a tiny external store (useSyncExternalStore) holding { name, email, note, sent } persisted to localStorage key churchSlug + ':hello'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx; Hero.tsx, Services.tsx (WhatToExpect.tsx), Events.tsx (EventCard.tsx), Sermons.tsx (FilterChips.tsx, SermonRow.tsx), Groups.tsx (GroupCard.tsx), Giving.tsx, Visit.tsx (StepCard.tsx, HelloForm.tsx, SaidHello.tsx), PastorNote.tsx. src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FAF7F0'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[CHURCH] — A community church in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the four images. Keep it under 8 MB.

## Variables
- [CHURCH] — Church name (default: "Cornerstone Commons"). Invented church name. Used in the wordmark, title, footer, email (hello@ + churchSlug without hyphens + '.org') and localStorage keys. Never a real congregation.
- [CITY] — City (default: "Nashville, Tennessee"). Where the church meets. Used in the title, hero, directions and footer. Real cities fine; street invented.
- [PASTOR] — Pastor (default: "Pastor Elena Marsh"). The invented lead pastor's name. Used in the welcome note, sermon speaker list and hello form reply line. Never a real clergy person.
- [VIBE] — Vibe (default: "neighborhood, unplugged and sincere"). One lowercase phrase describing the community's feel. Drives the hero line and what-to-expect copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/church-community-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm White `#FAF7F0` — Page background throughout.
- Stonepaper `#F0EBE0` — Alternate section background (Events, Groups), chips, hover fill.
- Card `#FFFFFF` — Sermon rows, event cards, the hello panel.
- Teal `#2F6B5E` — Primary: headlines' accents, buttons, selected chips, focus ring, series dots.
- Teal Deep `#224F45` — Hover, footer background.
- Teal Mist `#E2EEEA` — Selected chip fills, icon wells.
- Ink `#2C2A24` — Headlines and body text, icon color.
- Slate `#6B675D` — Secondary text, captions, eyebrows, closed states.
- Wheat `#C9A54E` — Quiet second color: event weekday squares, group dots, small caps flourishes.
- Rule `#E4DDCE` — 1px hairlines, card borders, input borders, dividers.

### Typography
- Display: H1, H2, H3, sermon titles, group names, the wordmark — Sorts Mill Goudy, gentle and bookish: Sorts Mill Goudy (OFL), weights 400
- Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for times: Source Sans 3 (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(42px, 6vw, 72px) Sorts Mill Goudy 400, line-height 1.08; H2 clamp(28px, 3.8vw, 44px) Goudy 400; H3 21px Goudy 400; sermon titles Goudy 19px; lead Source Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.15em Slate; caption 13px Slate. Buttons: height 50px, Source Sans 700 14px. Primary: Teal fill, Card text. Secondary: 1px Teal border. Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset.
- Radius: 12px on cards, buttons, inputs, chips and photos. 999px only for pills, the open dot and filter chips.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and filters; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Calm and unhurried — like walking in early.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 80ms.
- Motion: Hero: the sanctuary photo brightens 4% while scaling 1.03→1.0 over 2600ms; the H1 rises; a thin wheat rule draws under the welcome word once.
- Motion: Services: the open-now dot pulses gently while open (1800ms, off under reduced motion); the today row's teal rule slides in once.
- Motion: Sermon filters: chips fill Teal Mist→Teal on select (150ms); rows reshuffle with a popLayout fade (200ms out / 380ms glide); a live count crossfades; the empty filtered archive shows 'Nothing in that combination yet — sermons arrive weekly.'
- Motion: Event cards: the wheat weekday square brightens on hover; cards lift 3px.
- Motion: Groups: dots pop in sequence when the section enters; hover lifts 2px.
- Motion: Hello form: invalid submit shakes 4px with kind inline labels; sending swaps to SaidHello (320ms --ease-io) with a drawn wheat 'HELLO, FRIEND' seal scaling in gently, 'Thanks, [NAME].' '[PASTOR] replies personally — usually within a day.' and 'Say more' pre-filled. Persisted in localStorage.
- Motion: Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no pulses, draws, shuffles or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Welcoming light real photography, all four made for this template in one consistent style: morning sanctuary light, brick and warm wood, gathering spaces and tables set for community meals — architectural and human-adjacent, never faces or liturgical-specific symbols. The pastor portrait is an AI-generated fictional person (a warm, mid-forties woman in a mustard cardigan) — a placeholder a real church swaps for its own pastor photo. No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 12px corners, no shadow. Captions in Source Sans 13px Slate. Drawn in code: the favicon, series dots, weekday squares, the seal and chips. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Church (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([CHURCH] = Cornerstone Commons, [CITY] = Nashville, Tennessee, [PASTOR] = Pastor Elena Marsh, [VIBE] = neighborhood, unplugged and sincere). Put every string and list in src/content.ts and render from it. If any variable value differs, rewrite the hero, what-to-expect, all four events, eight sermons, six groups, giving copy and visit steps so they are specific and believable for the new church, keeping the same structure and counts. All people, sermons and groups are invented; tone stays non-denominational and hospitable. Facts: address '2209 Clover Street, [CITY]' invented; services Sun 9:00 & 10:45 (the 9:00 is quieter), Wed 18:30 (simple, thirty minutes); office Mon–Thu 9–15; parking behind the building and on Clover; dress 'come as you are, genuinely'; kids welcome at both Sunday services. Sermons (title · series · speaker · length): 'The Long Table' 'Belonging First' [PASTOR] 28 min; 'Unhurried Mornings' 'Sabbath-ish' [PASTOR] 25 min; 'Brick by Brick' 'Belonging First' 'Pastor June Okafor (invented)' 31 min; 'The Quiet Yes' 'Sabbath-ish' [PASTOR] 26 min; 'Laundry Theology' 'Everyday Hours' 'Pastor June Okafor' 24 min; 'The Guest Room' 'Belonging First' [PASTOR] 29 min; 'Enough for Tuesday' 'Everyday Hours' [PASTOR] 27 min; 'Open Hands, Open Doors' 'Belonging First' 'Pastor June Okafor' 30 min. Events: 'Wednesday · Community Meal' 'tables at 6, everyone eats, nobody checks a list'; 'Thursday · Youth Night' 'grades 6–12, games with rules and games without'; 'Tuesday (1st) · Choir & Anyone Who Hums' 'no audition, no solos forced'; 'Saturday (monthly) · Block Workday' 'the garden, the fence, the donuts'. Groups: 'Sunday Breakfast Club' 'after the 9:00, diner booth theology' Sundays; 'Young Families' 'kids present, chaos welcome' Tuesdays; 'Men''s Morning' 'coffee, scripture, honesty' Wednesdays; 'Women''s Circle' 'tea, study, laughter that echoes' Thursdays; 'Walk & Pray' 'a slow mile, weather permitting' Saturdays; 'Dinner Church' 'we cook, we eat, we linger' Fridays (monthly).
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[CHURCH]' (Goudy 21px) over 'A community church · [CITY]' (10px uppercase Slate) linking ./index.html. Right nav (Source Sans 600 14px): 'Services' → #services, 'Events' → #events, 'Sermons' → #sermons, 'Groups' → #groups; a small Teal 'Plan a visit' → #visit. Under 800px: wordmark + visit button.
   Layout: Sticky top, height 72px, Warm White/95% blur, Rule border.
3. **Hero** — Full-bleed sanctuary-light.webp (88svh, min 600px) under a soft overlay. Eyebrow (Bone at 80%): 'A COMMUNITY CHURCH · [CITY]'. H1 two lines: 'Come as you are.' / '*Really.*' Lead (Bone at 85%, max-width 500px): '[CHURCH] is [VIBE] — two Sunday services, a Wednesday meal, and a front door that doesn''t have a dress code.' Primary 'Plan your visit' → #visit and secondary-on-photo 'What to expect' → #services. Bottom strip on Teal Deep/70%: 'Sundays 9:00 & 10:45' · 'Parking behind the building' · 'Kids at both services'.
   Layout: Photo object-position 50% 50%; overlay gradient Warm White 0.1→0.05→0.65; content anchored bottom-left 112px up.
4. **Services and what to expect** — Section id='services'. Eyebrow 'WHEN WE GATHER' and H2 'Two Sundays and a Wednesday.' Services rows (time, name, one-liner, today highlight): '9:00 · The quiet service' 'the earlier one: fewer kids, more silence'; '10:45 · The full room' 'the later one: all ages, all volumes'; 'Wed 18:30 · Midweek reset' 'thirty minutes, simple, done by seven'. WhatToExpect three cards: 'Dress' 'come as you are — the pulpit has seen running shoes'; 'Kids' 'welcome at both services; the 10:45 has a kids'' moment, then optional kid-space'; 'Parking' 'the lot behind the building, or Clover Street; the walk is one block'.
   Layout: Warm White background. Services rows hairline-divided max-width 720px; expect cards three columns 20px gap on Stonepaper.
5. **Events** — Section id='events'. Eyebrow 'THIS MONTH, MOST MONTHS' and H2 'FOUR RECURRING GATHERINGS.' EventCards (wheat weekday square, name, line): the roster. Caption: 'Details land in the newsletter — paper copies at the door, as tradition demands.'
   Layout: Stonepaper background; 2x2 stub-like cards 20px gap; weekday squares Wheat with the day's initial in Teal.
6. **Sermons** — Section id='sermons'. Eyebrow 'SERMON ARCHIVE' and H2 'EIGHT TO CATCH UP ON.' FilterChips: Series (All, Belonging First, Sabbath-ish, Everyday Hours) and Speaker (All, [PASTOR], Pastor June Okafor); live count '8 sermons'. SermonRows: title (Goudy), series dot + label, speaker, length; rows reshuffle on filter; each row's play affordance links '#placeholder' with a caption 'recordings live on the real page'.
   Layout: Warm White background; rows hairline-divided max-width 780px; chips sticky under the header on scroll.
7. **Groups** — Section id='groups'. Eyebrow 'SMALL GROUPS' and H2 'SIX WAYS IN THE DOOR.' GroupCards (dot, name, line, meeting pattern): the roster. A note: 'Groups open and close with the seasons; the Thursday circle has outlived three cars per member (sample).'
   Layout: Stonepaper background; 3x2 grid 20px gap; cards on Card Rule-bordered.
8. **Giving and pastor note** — Section id='giving'. Eyebrow 'GIVING' and H2 'IF YOU''D LIKE TO.' Three quiet rows: 'In person' 'the wooden box by the door, no envelopes required'; 'By bank transfer' 'details on the printed card — ask any usher'; 'Time and skills' 'the meal, the garden, the fence: hands count double'. A caption: 'This demo page doesn''t process gifts; the real one explains exactly where each goes.' PastorNote beside: pastor-elena.webp portrait (3:4) with the caption '[PASTOR] — a fictional pastor' and the note: 'I answer the hello form myself. Tell me what you''re looking for — or what you''re wary of. Both are welcome.'
   Layout: Warm White background; giving rows 6 cols hairline-divided; note 4 cols offset 1 with portrait atop.
9. **Plan your visit and footer** — Section id='visit'. Eyebrow 'PLAN A VISIT' and H2 'THREE EASY STEPS.' StepCards: 1) 'Pick a service' '9:00 for quiet, 10:45 for the full room'; 2) 'Park & walk' 'the lot behind the building; the side door is the main door on Sundays'; 3) 'Say hello — or don''t' 'nobody will single you out; the hello form below is for when you want to be expected.' HelloForm on Card: name, email, note (placeholder 'Anything you''d like us to know — or nothing at all'); primary 'Say hello' with caption 'Saved in this browser — the real page emails [PASTOR]. Nothing is sent here.' SaidHello: the wheat seal, 'Thanks, [NAME].' '[PASTOR] replies personally — usually within a day.' 'Say more' pre-filled. Footer (Teal Deep, bone text): wordmark, '2209 Clover Street, [CITY]', hello@ + emailDomain, (615) 555-0172 tel:, anchors; bottom line '© [CHURCH]. Everyone is welcome; the parking is free.'
   Layout: Steps three columns with numbered dots; form max-width 560px; footer three-part row with the bottom line over a bone/10% rule.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/sanctuary-light.webp → public/images/sanctuary-light.webp (Hero; object-position 50% 50%; alt 'A sanctuary with morning light through tall windows'); https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/community-table.webp → public/images/community-table.webp (Events side; alt 'Long tables set for a community meal'); https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/brick-entry.webp → public/images/brick-entry.webp (Visit side; alt 'A brick entry with a wooden door and lantern'); https://media.vibefather.ai/assets/6de4164a-09df-48f4-bff8-f9883994b202/pastor-elena.webp → public/images/pastor-elena.webp (Pastor note; alt 'Pastor Elena Marsh, a fictional pastor'). Four files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/sortsmillgoudy and @fontsource-variable/source-sans-3 (OFL-1.1) and lucide-react (ISC). The pastor portrait is an AI-generated fictional person per the portrait rules; no congregation faces, no readable signage, no liturgical-specific symbols in any photo.
- icon: lucide-react only: Clock, Users, MapPin, Car, Baby, Coffee, Music, Hammer, Check, Plus. Stroke width 1.75, 16–24px, color inherits. The series dots, weekday squares, the HELLO seal and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 9 filled #2F6B5E, a Card (#FFFFFF) open-door glyph (a simple arch). No other logo: the church name is always set as type; no crosses or denomination marks in the favicon — keep it architectural.
- font: Install @fontsource/sortsmillgoudy and @fontsource-variable/source-sans-3 and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: series dots, weekday squares, the seal, chips and the favicon. No other bitmaps beyond the four photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API — and no payment processing of any kind: giving is described in words only; the hello form saves in the browser and says so.
- All links on this single page are anchors (./index.html#services, #events, #sermons, #groups, #giving, #visit) plus the footer mailto.
- No real churches, clergy, denominations or their marks; no liturgical-specific symbols in imagery or the favicon; no congregation faces; no readable signage.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 8 MB.
- The pastor portrait is an AI-generated fictional person, not any real individual; tone stays hospitable and non-denominational throughout.
- No dates or years anywhere; events and groups are weekday-named recurring; sermon rows carry lengths, not dates; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no pulses, draws, shuffles or staggers; everything at rest; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; chips, rows and the form work with keyboard only and visible focus rings.
- Keep copy hospitable and plain: no lorem, no insider vocabulary without a gloss; every time, group and sermon lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/church-community-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
