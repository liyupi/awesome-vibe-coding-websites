# Hackathon Event Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [EVENT], a 36-hour hackathon about [SCENE], starting [DATE]: a live countdown, three prize tracks, the schedule, four judges, a sponsor strip, an FAQ and a registration form (client-side only). One page, index.html; everything runs in the browser.

- Audience: Students and early-career builders deciding in one tab whether to give up a weekend: they want the tracks, the rules that matter (teams, hardware, sleep), and a two-minute registration.
- Goal: Registrations. Within ten seconds the visitor sees the countdown and 'Register'; within two minutes they've picked a track and submitted the form.
- Tone: Overnight-caffeinated but kind: terminal shorthand, zero corporate. One joke about调试 at 3 AM.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/space-grotesk (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors), then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (shell, panel, panel-2, line, bone, mist, lime, lime-deep, lime-mist, amber, violet, slateink, good) and fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 8px and add maxWidth { container: '1160px' }.
  - In src/fonts.ts import '@fontsource-variable/space-grotesk', '@fontsource-variable/inter' and '@fontsource/jetbrains-mono/400.css' plus '500.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (event name, scene phrase, date string, tracks, schedule blocks, judges, sponsor tiers, FAQ rows and every string, typed), src/lib/brand.ts (eventSlug = [EVENT] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = eventSlug without hyphens + '.dev'), src/lib/countdown.ts (parse [DATE]; timeLeft(target) → { days, hours, minutes, seconds, done }), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, key eventSlug + ':reg').
  - State: src/store/reg.ts is a tiny external store (useSyncExternalStore) holding { name, email, track, teamSize, sent } persisted to localStorage; a clock hook ticks each second (information — continues under reduced motion).
  - Components in src/components/: Header.tsx (Wordmark, RegisterButton), Countdown.tsx (CountCell.tsx), Hero.tsx (BracketTitle.tsx — the title wrapped in mono brackets), Tracks.tsx (TrackCard.tsx), Schedule.tsx (BlockRow.tsx), Judges.tsx (JudgeCard.tsx), Sponsors.tsx (TierRow.tsx, TileChip.tsx), Register.tsx (TrackSelect.tsx, TeamSizeSelect.tsx, Field.tsx), Faq.tsx (FaqRow.tsx), Footer.tsx. src/pages/Event.tsx composes them.
  - The countdown's done-state swaps the hero line to 'We're live — the wifi password is on the whiteboard (sample).' and the register button to 'Join the recap list'.
  - Registration form: name, email, TrackSelect (the three tracks), TeamSizeSelect (solo / 2 / 3 / 4); validation inline on blur (Amber text under fields); success crossfades to a Good panel: 'You're in — saved in this browser only; a real event would confirm from hello@' + emailDomain + '.'
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#0A0F0C'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[EVENT] — a 36-hour hackathon</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and four portraits. Keep it under 8 MB.

## Variables
- [EVENT] — Event name (default: "Nightcompile"). The invented hackathon's name, one word. Used in the wordmark, title, brackets and email (hello@ + eventSlug without hyphens + '.dev'). Never a real event.
- [DATE] — Start date (default: "February 19, 2027"). The full future date the countdown runs to, written like 'February 19, 2027'. Keep it in the future; the date itself is never printed on the page.
- [SCENE] — Scene phrase (default: "tools that make student life slightly less chaotic"). One lowercase phrase naming what gets built. Rewrites the H1, track briefs, schedule demos and FAQ so the event reads true. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/hackathon-event-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Shell `#0A0F0C` — Page background — near-black with a green cast.
- Panel `#101812` — Cards, schedule rows, form panel.
- Panel 2 `#16211A` — Hover fills, raised panels, selects.
- Line `#23322A` — 1px hairlines: borders, table rows, dividers.
- Bone `#ECF2EC` — Primary text, headings.
- Mist `#8FA093` — Secondary text, eyebrows, schedule times.
- Lime `#A8E63C` — The one electric accent: countdown digits, primary buttons, track prize figures, focus ring, active states.
- Lime Deep `#7FB92A` — Hover and pressed primary.
- Lime Mist `#1D2A16` — Chip fills, selected track, tier-1 tile tint.
- Amber `#E0A93C` — Validation hints and the 'sleep' schedule block.
- Violet `#8A7BE8` — The 'food' schedule block and one judge-role accent — used sparingly.
- Slate Ink `#0C1408` — Text on lime fills.
- Good `#7FBF6A` — Success panel, registered state.

### Typography
- Display: H1, track titles, judge names, wordmark — Space Grotesk: Space Grotesk (OFL), weights 500/700
- Text and UI: body, forms, FAQ — Inter: Inter (OFL), weights 400/500/600
- Mono: countdown, schedule times, brackets, chips — JetBrains Mono: JetBrains Mono (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(44px, 7vw, 84px) Space Grotesk 700 line-height 1.02; H2 clamp(26px, 3.6vw, 40px) Space Grotesk 700; countdown digits JetBrains 500 48px tabular with 11px uppercase Mist labels; track titles Space Grotesk 700 22px; prize figures Space Grotesk 700 30px; body 15.5px / 1.7; eyebrows mono 12px uppercase letter-spacing 0.14em Mist; schedule times mono 13px. Buttons: height 48px, Inter 600 14px; primary Lime fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs/selects: height 48px, Panel 2 fill, 1px Line border, focus Lime border + 2px offset ring. Focus everywhere: 2px Lime outline, 3px offset.
- Radius: 8px on cards, panels, buttons, inputs; 4px on schedule rows; 999px for chips and pills.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Terminal-quick: nothing over 400ms except section reveals.
- Motion: Reveal: sections rise 10px over 500ms at 15% viewport (Motion whileInView, once); siblings stagger 60ms.
- Motion: Hero: the title's mono brackets draw in first (each bracket translates 8px, 240ms), then the title settles; a thin lime rule under the eyebrow pulses once.
- Motion: Countdown: digits swap instantly (information, tabular width held); at zero the row crossfades to the live line (300ms).
- Motion: Track cards: hover lifts 3px with the prize figure turning full Lime; the recommended track carries a persistent Lime 1.5px border.
- Motion: Schedule: rows reveal staggered 40ms; block-type chips (BUILD/FOOD/SLEEP/DEMOS) tint per color; hover fills Panel 2.
- Motion: Judges: portraits settle from scale 1.04 with an 80ms stagger.
- Motion: Register: field errors fade 160ms; the success crossfade is 260ms; the submit button's lime fill deepens on hover.
- Motion: Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no reveals, no bracket drawing, no portrait scale; the countdown still ticks; color hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: Four judge portraits, all AI-generated fictional people in one consistent style: low-key lighting with a lime-rim light against near-black, hoodies and tees with blazers mixed, confident calm expressions, varied in age and ethnicity (a Latina woman in her 30s, a white man around 50, a South Asian man in his 20s, a Black woman around 40), not resembling any real individuals. No readable text, no logos, no lanyards or badges. Portraits object-fit cover, 8px corners, 1px Line outline. The sponsor strip is drawn-generic: wordmark-style text tiles in three tiers (no logos — invented names set as type). Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Pages & Sections
### Event page (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([EVENT] = Nightcompile, [DATE] = February 19, 2027, [SCENE] = tools that make student life slightly less chaotic). Put every string, track, block, judge, tier and FAQ row in src/content.ts and render from it. If any variable differs, rewrite the H1, track briefs, schedule demo names, judge one-liners and FAQ so they fit that scene, keeping the counts (3 tracks, 12 schedule blocks, 4 judges, 3 sponsor tiers, 5 FAQ rows). Tracks (name · brief · prize sample): 'Campus life' 'timetables, laundry, and the group-chat chaos' '$1,500 (sample)'; 'Study better' 'notes that index themselves and flashcards that care' '$1,500 (sample)'; 'Wildcards' 'anything that makes a student laugh — judged loudest' '$500 (sample)' [recommended chip: 'most fun']. Schedule (time · title · type): 'FRI 18:00' 'Doors, wifi, lies about sleeping bags' FOOD; 'FRI 19:00' 'Kickoff + track pitches' BUILD; 'FRI 20:00' 'Teams form; snacks attack' BUILD; 'FRI 22:00' 'Mentor rounds begin' BUILD; 'SAT 00:00' 'Midnight checkpoint; coffee diplomacy' FOOD; 'SAT 03:00' 'The quiet hour ( debugging in the dark )' BUILD; 'SAT 08:00' 'Breakfast; stand-up stretch' FOOD; 'SAT 12:00' 'Mentor rounds; demo-drills' BUILD; 'SAT 16:00' 'Recommended nap window' SLEEP; 'SAT 20:00' 'Practice pitch gym' BUILD; 'SUN 09:00' 'Hard commit; slides from scraps' BUILD; 'SUN 12:00' 'Demos, judges, loud applause' DEMOS. Judges (name · role · one-liner): 'Rosa Delgado' 'Staff engineer, tools team' 'ships CLI tools people actually keep'; 'Hendrik Vos' 'CS professor (retired-ish)' 'grades gently, asks one brutal question'; 'Arjun Mehta' 'Nightcompile alum, cohort one' 'won with a laundry app; now builds fintech'; 'Tessa Boateng' 'Founder, campus software studio' 'funds what she demos twice'. Sponsor tiers: Tier 1 'Coldbrew Cloud' 'Keystone'; Tier 2 'Snackstack' 'Kettle' + 'Gitmind' 'Kettle'; Tier 3 'Papertrail Press' 'Brew' + 'Cyclops Lenses' 'Brew' + 'Hallmate' 'Brew' — all invented names set as type tiles, no logos. FAQ: 'Team size?' 'One to four; solo heroes welcome.'; 'Hardware?' 'Bring what you like; we loan arduino-ish kits at the desk (sample).'; 'Sleep?' 'There is a sanctioned nap room and a Saturday window; use both.'; 'Who owns the code?' 'You do — fully; we just cheer.'; 'Cost?' 'Free, including food; registration helps us count sandwiches.' All names, prizes and policies are invented sample content.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[EVENT]' (Space Grotesk 700 19px Bone) in mono brackets; over '36-HOUR HACKATHON' (10px mono uppercase Mist). Right nav (Inter 500 14px): 'Tracks' → #tracks, 'Schedule' → #schedule, and a compact primary 'Register' → #register. Under 720px: wordmark + register.
   Layout: Sticky top, 64px, Shell at 92% with backdrop blur, Line bottom border.
3. **Hero** — BracketTitle: the H1 '[EVENT]' set with oversized mono brackets in Lime around the display name; standfirst 'Thirty-six hours to build [SCENE]. Mentors at 22:00, demos at noon Sunday, sandwiches counted (sample).' The Countdown (four CountCells — DAYS/HOURS/MINUTES/SECONDS — Lime digits with thin Line separators). CTA row: primary 'Register for [EVENT]' → #register, secondary 'See the tracks' → #tracks. Under, one mono status line '> doors open FRI 18:00 · fully in-person · sample event' with a blinking terminal cursor (cursor blink off under reduced motion).
   Layout: Shell background with a soft lime radial glow at 12% behind the countdown; centered column max-width 760px; 120px top padding.
4. **Tracks** — Section id='tracks'. Eyebrow 'THREE TRACKS'; H2 'Pick a lane, or make one.' Three TrackCards: title, brief, the prize figure ('(sample)' appended in Mist), a chip row ('mentored', 'beginner-safe' — and the Wildcards' 'most fun' Lime chip). Cards hover-lift; Wildcards carries the recommended Lime border.
   Layout: 3 columns 24px gap (1 under 860px).
5. **Schedule** — Section id='schedule'. Eyebrow 'THE 36 HOURS'; H2 'Coffee diplomacy included.' Twelve BlockRows on Panel: time (mono 13px Mist, fixed 96px), title (Inter 500 15px Bone), and a type chip (BUILD Lime-mist/Line; FOOD Violet-tinted; SLEEP Amber-tinted; DEMOS Lime fill with Slate Ink). A caption under: 'Times are the sample schedule — doors really do open at 18:00 (sample).'
   Layout: Reading column max-width 820px; rows 8px radius, 10px padding; single column.
6. **Judges** — Section id='judges'. Eyebrow 'THE JUDGES'; H2 'Four people who ship.' Four JudgeCards: portrait (3:4), name (Space Grotesk 700 18px), role (13px Lime), one-liner (Inter 14.5px Mist). Caption: 'Placeholder portraits — AI-generated fictional people.'
   Layout: 4 columns 24px gap (2 under 1024px, 1 under 640px).
7. **Sponsors** — Section id='sponsors'. Eyebrow 'BACKED BY (SAMPLE)'; H2 'Names, not logos.' Three TierRows: a mono tier label (KEYSTONE / KETTLE / BREW) and the tiles — invented names set as Space Grotesk wordmark-style type on Panel chips (tier 1 on Lime Mist, larger). Caption: 'Invented sponsors; real ones would go here with their marks.'
   Layout: Reading column max-width 860px; tiers stacked, tiles centered in rows.
8. **Register** — Section id='register'. A wide Panel card with a Lime 1px top rail: left — eyebrow 'REGISTRATION'; H2 'Two minutes, then build.'; body 'Name, email, track, team size — that's the whole form. Free, food included, code stays yours (sample policy).'; the honest note 'This demo saves your registration in this browser only.' Right — the form per Setup with primary 'Count me in'. Success: the Good panel with the recap-list line when the countdown is done.
   Layout: Shell background; card max-width 1040px, two columns 40px padding (stacked under 900px).
9. **FAQ and footer** — Five FaqRows (plus rotates to cross) on Panel rows. Footer: left wordmark + 'hello@' + emailDomain; right '© [EVENT]. A fictional hackathon; the sandwiches are real (in spirit).' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: FAQ single column max-width 760px; footer 72px, Line top border.

## Assets
- image: Template portraits made for this design (free to redistribute with the template), all AI-generated fictional people, not resembling any real individual. Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-rosa.webp → public/images/judge-rosa.webp (Judge 1; alt 'Portrait of judge Rosa Delgado'); https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-hendrik.webp → public/images/judge-hendrik.webp (Judge 2; alt 'Portrait of judge Hendrik Vos'); https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-arjun.webp → public/images/judge-arjun.webp (Judge 3; alt 'Portrait of judge Arjun Mehta'); https://media.vibefather.ai/assets/2ec629bd-055b-454e-9791-702acdfa3995/judge-tessa.webp → public/images/judge-tessa.webp (Judge 4; alt 'Portrait of judge Tessa Boateng'). Four files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row per portrait (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource-variable/space-grotesk, @fontsource-variable/inter and @fontsource/jetbrains-mono (OFL-1.1) and lucide-react (ISC). State that portraits are AI-generated fictional placeholders and sponsor names are invented.
- icon: lucide-react only: ArrowRight, Check, Coffee, Cpu, MoonStar, Plus, Users. Stroke width 1.75, 14–20px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #0A0F0C with a 1.5px #A8E63C border, a lime terminal chevron '>' centered. No brand logos.
- font: Install @fontsource-variable/space-grotesk, @fontsource-variable/inter and @fontsource/jetbrains-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: registration saves in localStorage only and the copy says so; every 'sample' label stays honest.
- Every internal link points to a file name or anchor (./index.html, #tracks, #register) — never to a bare directory; there is exactly one page.
- No real hackathons, sponsors, platforms (MLH, Devpost) or their marks: the event, sponsors, prizes and judges are invented; sponsor tiles are wordmark-style type, never logos.
- Judges are AI-generated fictional people, varied in age and ethnicity, not resembling any real individuals; no lanyards or badges in portraits.
- No real prize amounts presented as fact — '(sample)' rides along; the FAQ's cost answer stays free-but-fictional.
- The countdown targets the [DATE] variable only; no other dates, times as claims, or years appear beyond the sample schedule's weekday-pattern labels.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, portraits downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 8 MB.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no reveals, no bracket drawing, no cursor blink; the countdown keeps ticking and everything stays usable.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; nav, countdown, form, FAQ and buttons work with keyboard only and visible focus rings.

---
— Prompt by VibeFather · https://vibefather.ai/t/hackathon-event-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
