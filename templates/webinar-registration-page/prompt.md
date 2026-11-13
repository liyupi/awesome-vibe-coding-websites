# Webinar Registration Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site that fills seats for one live session: '[TITLE]', a 90-minute webinar about [TOPIC], hosted by the [BRAND] team on [DATE] at 11:00 ET. A live countdown, four learning outcomes, a timed agenda, three speakers, a registration form with live time-zone conversion and add-to-calendar .ics files built in the browser, and a short FAQ. One page, index.html; everything runs locally and nothing is submitted anywhere.

- Audience: Practitioners and team leads who register from a phone between meetings: they want the date in their timezone, the agenda, and proof the speakers have done this before — in under two minutes.
- Goal: Registrations. Within ten seconds a visitor sees the title, a ticking countdown and the register button; within two minutes they have checked their timezone and hit the form.
- Tone: Broadcast-calm: precise times, plain promises, zero urgency theater. One dry joke about calendars.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/sora (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template, then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (night, panel, panel-2, mist, bone, cyan, cyan-deep, cyan-mist, line, slateink, good) and fontFamily display ['Sora', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 10px and add maxWidth { container: '1180px' }.
  - In src/fonts.ts import '@fontsource/sora/400.css', '@fontsource/sora/600.css', '@fontsource/sora/700.css' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, outcome, agenda slot, speaker, faq row and image path, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, key brandSlug + ':reg'), src/lib/time.ts (parse [DATE] with new Date plus an 11:00 America/New_York anchor: target = new Date(`${DATE}`); set hours 11, minutes 0, and treat the zone label as display-only; countdown(target) → { days, hours, minutes, seconds, done }; localTime(zone) using Intl.DateTimeFormat with timeZone; zonesFor(locale) listing 8 sensible zones including 'America/New_York', 'Europe/London', 'Europe/Berlin', 'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'America/Los_Angeles', 'UTC'), src/lib/ics.ts (buildIcs(target, title, brand) returning a DTSTART/DTEND 90-minute VEVENT string with a UID from brandSlug and target time; downloadIcs triggers a Blob text/calendar download).
  - State: src/store/reg.ts is a tiny external store (useSyncExternalStore) holding { name, email, zone, saved } persisted to localStorage; src/store/clock.ts ticks every second via setInterval in a provider-level effect feeding countdown(target).
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, CountFlip.tsx (one digit group, per-digit flip); Hero.tsx (Countdown.tsx using CountFlip), Outcomes.tsx (OutcomeCard.tsx), Agenda.tsx (SlotRow.tsx), Speakers.tsx (SpeakerCard.tsx), Register.tsx (ZoneSelect.tsx, CalendarButtons.tsx), Faq.tsx (FaqRow.tsx). src/pages/Home.tsx composes them.
  - CountFlip: each group (days/hours/minutes/seconds) is two stacked digit cards in perspective; on change the old digit rotates -90deg out and the new one in (250ms --ease-io). Numbers are Sora 700 tabular, 44px desktop / 30px mobile. Under prefers-reduced-motion the digits change without rotation.
  - The ZoneSelect is a native <select> styled dark; the converted line reads like 'Thursday, [DATE] · 11:00 AM for you (America/New_York)' recomputed on change; a second static line always shows '11:00 AM ET · 90 minutes · replay for everyone who registers'.
  - CalendarButtons: two buttons ('Add to calendar' primary, 'Download .ics' secondary). 'Add to calendar' also downloads the .ics (a single VEVENT; the demo says so). Build the file entirely in src/lib/ics.ts; no network.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#0B1526'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[TITLE] — [BRAND] live session</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the three portraits. Keep it under 8 MB.

## Variables
- [BRAND] — Host brand (default: "Northfound"). The invented company or team hosting the session. Used in the wordmark, title tag, footer, email (hello@ + brandSlug without hyphens + '.com') and the .ics ORGANIZER. Never a real company.
- [TITLE] — Session title (default: "The Unhurried Roadmap"). The webinar's title, title case. Appears in the H1, the title tag, the agenda head and the .ics SUMMARY. Invented.
- [DATE] — Session date (default: "December 3, 2026"). The full future date the countdown runs to, written like 'December 3, 2026'. Drives the countdown, the timezone line and the .ics. Keep it in the future so the demo counts down; rewrite agenda wording if it changes.
- [TOPIC] — Topic phrase (default: "roadmaps that survive contact with reality"). One lowercase phrase naming what the session teaches. Rewrites the H1 subline, outcome cards and speaker one-liners. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/webinar-registration-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Night `#0B1526` — Page background throughout.
- Panel `#101E33` — Cards, agenda rows, form panel.
- Panel 2 `#15263F` — Hover fill, raised panel, select fill.
- Line `#24344D` — 1px hairlines, card borders, input borders.
- Bone `#EDF2F7` — Primary text, headings.
- Mist `#93A3B8` — Secondary text, captions, eyebrows, agenda times.
- Cyan `#37C8E8` — The one live accent: countdown digits, primary buttons, selected states, tags, focus ring.
- Cyan Deep `#1E9DBE` — Hover and pressed primary.
- Cyan Mist `#12384A` — Tag chips, register panel tint, selection ring backgrounds.
- Slate Ink `#0A111D` — Text on cyan or bone fills.
- Good `#4ADE9B` — Replay/register checkmarks, form success.

### Typography
- Display: H1, H2, countdown digits, speaker names, wordmark — Sora, geometric and broadcast-cool: Sora (OFL), weights 400/600/700
- Text and UI: body, agenda, forms, captions; tabular numerals for countdown and times: Inter (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(38px, 5.2vw, 64px) Sora 700, line-height 1.06; H2 clamp(26px, 3.4vw, 40px) Sora 700; speaker names Sora 600 19px; countdown digits Sora 700 tabular 44px (30px mobile) with 11px uppercase labels; lead Inter 400 17px / 1.65 Bone at 92%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist. Buttons: height 50px, Inter 600 14px; primary Cyan fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs/selects: height 50px, Panel 2 fill, 1px Line border, focus Cyan border + 2px offset ring.
- Radius: 10px on cards, panels, buttons, inputs. 999px only for pills and tags.
- Motion: Easing: --ease-io cubic-bezier(0.65, 0, 0.35, 1) for digit flips; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals. Control-room steady.
- Motion: Reveal: sections wrapped in <Reveal> start opacity 0, translateY(14px), settle over 700ms --ease-out at 15% viewport (Motion whileInView, once), siblings stagger 70ms.
- Motion: Countdown: digits flip per change as described in Setup; the seconds group always moves — this is information, not decoration, and keeps flipping under reduced motion (without rotation).
- Motion: Hero: a thin cyan rule under the eyebrow draws once (600ms); the H1 lines rise; the countdown panel fades in last with a single soft cyan pulse on the seconds cell.
- Motion: Agenda rows: the time column sets first, then the rest; hover lifts the row 2px and fills the slot tag with Cyan Mist.
- Motion: Speakers: cards reveal with 80ms stagger; portraits settle from scale 1.04.
- Motion: ZoneSelect change: the converted line crossfades 200ms; no layout shift (fixed two-line height).
- Motion: Form submit: the panel crossfades to a Good check line: 'You're on the list — this demo saved your seat in your browser only.'
- Motion: Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no digit rotation (digits swap instantly), no portrait scale, no pulse, no underline draw; countdown still ticks. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: Three speaker portraits, all AI-generated fictional people made for this template in one consistent style: three-quarter studio light on deep navy, calm confident expressions, varied age and ethnicity (a Black woman in her 30s, an East Asian man in his 40s, a South Asian woman around 50), business-casual, not resembling any real individual. Faces are fine here — these are speaker cards, not the hero; the hero anchor is the countdown panel and typography on Night. No readable text, no logos, no lanyards with badges. Portraits object-fit cover, 10px corners, 1px Line outline. Icons: lucide-react only, stroke width 1.75. The favicon and the agenda rail are drawn SVG/CSS.

## Pages & Sections
### Webinar registration (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([BRAND] = Northfound, [TITLE] = The Unhurried Roadmap, [DATE] = December 3, 2026, [TOPIC] = roadmaps that survive contact with reality). Put every string, outcome, agenda slot, speaker, FAQ row and image path in src/content.ts and render from it. If any variable differs, rewrite the H1 subline, the four outcomes, the agenda titles, the speaker one-liners and the FAQ so they are specific and believable for that session, keeping the same structure and counts (4 outcomes, 6 agenda slots, 3 speakers, 4 FAQ rows). Outcomes: 'Write a roadmap people can read' 'one page, three horizons, no gantt'; 'Trade honestly' 'what slips, what's protected, what's negotiable'; 'Run the quarterly rewrite' 'a 90-minute ritual that keeps the plan alive'; 'Say no with a schedule' 'declining without burning the bridge'. Agenda (time · title · tag): '11:00' 'Welcome and one slide of honesty' 'INTRO'; '11:08' 'Why roadmaps die' 'TALK'; '11:22' 'The three-horizon page' 'LIVE DEMO'; '11:44' 'Trades, buffers and the rewrite ritual' 'TALK'; '12:06' 'Your questions, unhurried answers' 'Q&A'; '12:26' 'The one-page kit and goodbye' 'WRAP'. Speakers (name · role · one-liner): 'Ada Mensah' 'Head of Product, Northfound' 'has rewritten forty roadmaps and apologized for six'; 'Kenji Watanabe' 'Principal Engineer' 'protects the boring work that keeps promises cheap'; 'Rukmini Iyer' 'Founder, Writes The Check' 'funds teams and grades their roadmaps, kindly'. FAQ: 'Will it be recorded?' 'Yes — the replay goes to everyone who registers, attender or not.'; 'Is it really free?' 'Yes. The one-page kit at the end is the pitch; you can ignore it.'; 'What timezone?' '11:00 AM ET; the form shows your local time before you commit.'; 'Can my team join?' 'One seat per registration — send them this page, it isn't a secret.'
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[BRAND]' (Sora 700 19px, Bone) with a small cyan dot after it; over 'LIVE SESSION' (10px uppercase Mist). Right nav (Inter 500 14px): 'Agenda' → #agenda, 'Speakers' → #speakers, and a compact primary 'Save my seat' → #register. Under 720px: wordmark + button.
   Layout: Sticky top, height 68px, Night at 92% with backdrop blur, Line bottom border.
3. **Hero** — Centered stack: eyebrow 'LIVE ON [DATE] · 11:00 AM ET'; H1 '[TITLE]' with the last word in Cyan; subline 'Ninety minutes about [TOPIC] — three practitioners, one page you'll actually keep, zero slides read aloud.'; the Countdown panel (Panel card, Line border: four CountFlip groups — DAYS / HOURS / MINUTES / SECONDS — with thin Line separators); CTA row: primary 'Save my seat' → #register, secondary 'See the agenda' → #agenda; caption 'Free · replay included · reschedule-proof (the .ics even survives Outlook)'.
   Layout: Night background with a single soft radial Cyan glow at 20% opacity behind the countdown; vertical padding 128px top, 104px bottom; max-width 760px for text, 640px for the panel.
4. **Outcomes** — Section id='learn'. Eyebrow 'WHAT YOU'LL WALK OUT WITH'; H2 'Four things, ninety minutes.' 2x2 grid of OutcomeCards (Panel, Line border, cyan corner index 01–04): title (Sora 600 18px) + one-liner (Inter 15px Mist) + a lucide icon (Map, Scale, RefreshCcw, ShieldCheck).
   Layout: Night background; grid 2x2 with 24px gaps (1 column under 800px).
5. **Agenda** — Section id='agenda'. Eyebrow 'THE RUNDOWN'; H2 'Timed like a broadcast.' Six SlotRows on a vertical rail: time (Inter 600 14px tabular Mist, fixed 64px column), title (Sora 600 17px Bone), tag pill (10px uppercase, Line border; the LIVE DEMO tag is Cyan Mist fill). A caption under: 'Times are ET; the form shows them in yours.'
   Layout: Night background; rows are full-width Panel cards with a left cyan rail dot aligned to a 1px Line vertical rule; single column, max-width 760px.
6. **Speakers** — Section id='speakers'. Eyebrow 'THE VOICES'; H2 'People who've shipped this.' Three SpeakerCards: portrait (4:5, top), name (Sora 600 19px), role (Inter 500 13px Cyan), one-liner (Inter 15px Mist).
   Layout: Night background; 3 columns 24px gap (1 under 860px); cards Panel with Line border, portrait inset with 1px Line outline.
7. **Register** — Section id='register'. A wide Panel card (Cyan Mist tint at 30% over Panel, Line border): left column — eyebrow 'SAVE MY SEAT'; H2 'One form, no webhook.'; body 'Name and email; we show the session in your timezone first, so there are no 3 AM surprises.'; the ZoneSelect with the converted two-line time readout; CalendarButtons. Right column — the form: name input, email input, primary 'Save my seat'; small print 'Demo: your details stay in this browser; nothing is sent, stored or sold.'; on submit the column crossfades to the Good check line and a 'Download the .ics anyway' link.
   Layout: Night background; card max-width 1040px, two columns 40px inner padding (stacked under 900px).
8. **FAQ and footer** — Four FaqRows (plus rotates to cross) on Panel rows. Footer: left wordmark + 'hello@' + emailDomain; right '© [BRAND]. Sessions run on coffee.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: FAQ single column max-width 760px on Night; footer 76px, Line top border.

## Assets
- image: Template portraits made for this design (free to redistribute with the template), all AI-generated fictional people, not resembling any real individual. Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/c236d2a3-329f-490f-b619-efcd3116172e/speaker-ada.webp → public/images/speaker-ada.webp (Speaker 1; alt 'Portrait of speaker Ada Mensah'); https://media.vibefather.ai/assets/c236d2a3-329f-490f-b619-efcd3116172e/speaker-kenji.webp → public/images/speaker-kenji.webp (Speaker 2; alt 'Portrait of speaker Kenji Watanabe'); https://media.vibefather.ai/assets/c236d2a3-329f-490f-b619-efcd3116172e/speaker-rukmini.webp → public/images/speaker-rukmini.webp (Speaker 3; alt 'Portrait of speaker Rukmini Iyer'). Three files in total. If the variables change, keep the portraits as fictional placeholders and change only the names in content.ts.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row per portrait (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/sora and @fontsource-variable/inter (OFL-1.1) and lucide-react (ISC). State that portraits are AI-generated fictional people used as template placeholders.
- icon: lucide-react only: CalendarPlus, Clock, Globe2, Map, Play, Qrcode (unused ok), RefreshCcw, Scale, ShieldCheck. Stroke width 1.75, 16–24px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #0B1526 with a 1.5px #37C8E8 ring inset, a cyan play triangle centered. No other logo: the brand is always set as type.
- font: Install @fontsource/sora and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the countdown flip cards, agenda rail, tag pills, the favicon, and the .ics file (plain text built in src/lib/ics.ts). No other bitmaps beyond the three portraits; no illustrations of stages or audiences.

## Don'ts
- No backend, no form submission, no fetch to API: the registration form saves in the browser only (localStorage) and says so; the .ics is built client-side and downloaded as a Blob; timezone conversion uses Intl only, never a network call.
- Every internal link points to a file name or anchor (./index.html, #agenda) — never to a bare directory; there is exactly one page.
- No real webinar platforms, tools or logos (Zoom, Teams, Meet, Webex, Livestorm, Calendly); the session and its tooling are described generically.
- Speakers, their companies and their roles are fictional; portraits are AI-generated fictional people, varied in age and ethnicity, not resembling any real individual; no real conference names or certifications.
- No fake urgency or attendee counts presented as fact; the 'seats' language stays a joke ('reschedule-proof'), and sample figures say so.
- The date shown everywhere comes from the [DATE] variable; no other dates or years appear on the page, and nothing prints today's date.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, portraits downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 8 MB.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no digit rotations, no portrait scale, no pulse; the countdown still ticks; color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; select, form, FAQ and buttons work with keyboard only and visible focus rings.
- Keep copy broadcast-calm: no 'don't miss out', no 'limited spots' countdown-of-doom; every string lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/webinar-registration-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
