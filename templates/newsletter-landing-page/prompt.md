# Newsletter Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page newsletter sign-up for [BRAND], a weekly letter about [TOPIC], written by [AUTHOR] and sent [CADENCE] to [SUBS] readers (sample figure). It must sell the writing, not describe it: three issue previews, reader quotes, an archive and a subscribe form that never leaves reach — inline validation, a client-side welcome card, and a sticky bar once the hero scrolls off. One page: index.html with sections (#issues, #quotes, #archive, #about). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Readers who already subscribe to too many letters and are deciding whether this one earns the inbox: developers and team leads 25–45 for the default, curious and allergic to growth-hack tone. They read one preview before deciding.
- Goal: Earn the subscribe. Within ten seconds a visitor should know what the letter is about, who writes it and how often; within two minutes they should have read a preview and met the form again.
- Tone: The letter's own voice: warm, precise, a little wry. Concrete beats abstract in every line; no 'join our community', no exclamation marks.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/newsreader (OFL-1.1), @fontsource/space-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper, wash, card, ink, umber, rule, redlink, redlink-deep, olive-tick) and fontFamily serif ['Newsreader Variable', 'Georgia', 'serif'], mono ['Space Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 6px and add maxWidth { container: '1000px' } — a letter is narrow.
  - In src/fonts.ts import '@fontsource-variable/newsreader' (with its italic axis) and '@fontsource/space-mono/400.css', '@fontsource/space-mono/700.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, number, issue, quote, archive entry, promise line and cadence, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':').
  - State: src/store/subscribe.ts is a tiny external store (useSyncExternalStore) holding { email, subscribed } persisted to localStorage key brandSlug + ':reader'. Subscribing shows the welcome card; 'Not you?' clears it back to the form.
  - Components in src/components/: Header.tsx, SubscribeForm.tsx (validation, WelcomeCard.tsx), StickyBar.tsx (appears after the hero form scrolls off, hides once subscribed), EnvelopeCard.tsx (the latest issue styled as an envelope with the drawn stamp), Reveal.tsx, Eyebrow.tsx, Footer.tsx; Hero.tsx, Issues.tsx (IssueCard.tsx with drop cap), ProofStrip.tsx, Quotes.tsx, Archive.tsx, Inbox.tsx. src/pages/Home.tsx composes them.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F8F4EC'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — A weekly letter about [TOPIC]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB — no images.

## Variables
- [BRAND] — Newsletter name (default: "The Margin Note"). Invented newsletter name. Used in the masthead, title, footer, email (hello@ + brandSlug without hyphens + .com) and localStorage keys. Never a real newsletter.
- [AUTHOR] — Author (default: "June Okafor"). The invented writer's name. Used in the byline, the about section, the signature ('— June') and the quotes' context. Never a real writer.
- [TOPIC] — What it's about (default: "the craft of small software teams"). One lowercase phrase. Drives the title, the one-line promise, the issue titles, the quotes and the inbox section. Keep it a field with real stakes, not a category dump.
- [CADENCE] — Cadence (default: "Tuesdays, 6am"). When the letter lands ('Tuesdays, 6am', 'Sundays, 8pm'). Used in the promise line, the proof strip and one FAQ-style line in the inbox section. Day and time, never a dated deadline.
- [SUBS] — Subscriber figure (default: "11,204"). The comma-formatted sample reader count shown in the proof strip and sticky bar. Always labeled '(sample)' the first time it appears. Keep it 1,000–50,000.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/newsletter-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#F8F4EC` — Page background throughout.
- Wash `#F0EADD` — Alternate section background (Quotes, Archive), hover fill, chips.
- Card `#FFFEF9` — Issue cards, envelope card, form panel, welcome card.
- Ink `#26211B` — Headlines, body text, the masthead, icon color.
- Umber `#6B6155` — Secondary text, captions, eyebrows, archive metadata.
- Rule `#E0D8C8` — 1px hairlines, card borders, input borders, archive dividers.
- Redlink `#A33B2E` — The one accent: links, the subscribe button, the stamp, selection color, focus ring, drop caps.
- Redlink Deep `#862E23` — Button hover, pressed states.
- Olive Tick `#5C6B4C` — Quiet second color: checkmarks in the inbox list, the 'free' tick, read-time dots.

### Typography
- Display and body: masthead, H1–H3, issue previews, quotes — Newsreader with its optical-size axis doing both jobs: Newsreader (OFL), weights 400/500/600
- Eyebrows and metadata: cadence lines, issue numbers, categories, form labels (uppercase): Space Mono (OFL), weights 400/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1000px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow with a two-column hero. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: masthead (H1) clamp(48px, 7vw, 92px) Newsreader 500, line-height 1.0, letter-spacing -0.01em; H2 clamp(30px, 4vw, 48px) Newsreader 500; H3 22px Newsreader 600; lead Newsreader 400 19px / 1.65 Ink at 90%; body Newsreader 400 17px / 1.75 (max-width 62ch); issue preview body Newsreader 400 16px / 1.8 with a Redlink drop cap; eyebrow Space Mono 700 11px uppercase letter-spacing 0.22em Umber; caption Space Mono 400 12px Umber. Buttons: height 52px, padding 0 26px, Space Mono 700 13px uppercase letter-spacing 0.1em. Subscribe: Redlink fill, Paper text. Secondary: 1px Ink/30% border, Ink text. Inputs: height 52px, 1px Rule border, Card fill, 16px Newsreader, focus border Redlink. Focus ring everywhere: 2px Redlink outline with 3px offset. Links: Redlink with the .link-draw underline.
- Radius: 6px on cards, the envelope, the form panel and buttons. 999px only for the category chips and read-time dots.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the welcome swap; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the sticky bar and archive hovers. Papery and unhurried.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(14px) and animate to rest over 800ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 90ms.
- Motion: Masthead: the three words of the name rise with 120ms stagger; the Redlink period after the name stamps in with a 200ms scale settle.
- Motion: EnvelopeCard: on load the flap's shadow line draws, the stamp tilts in from -6deg to its resting -3deg, and the postmark circle strokes once (600ms, disabled under reduced motion).
- Motion: Subscribe form: invalid emails shake 3px once with the inline line ('Almost — that address is missing a piece'); on submit the button reads 'Subscribing…' for 500ms, then the form area swaps to the WelcomeCard with a 280ms --ease-io slide — 'Welcome aboard.' in Newsreader 500 26px, 'Issue No. 48 lands [CADENCE]. Until then, the archive is right below.' and 'Not you? Use a different address' returning to the form.
- Motion: StickyBar: appears pinned to the bottom (safe-area aware) 200ms after the hero form scrolls fully out, slides up 16px over 260ms; hides the moment subscribed or when the footer is in view; contains a compact form mirroring the hero's.
- Motion: Issue cards: hover lifts 3px and the drop cap ticks Redlink→Redlink Deep; clicking expands the preview to its full first section inline (a 340ms height animation) with a 'fold' line — issues open like letters, not modals.
- Motion: Archive rows: hover fills Wash and the issue number slides 6px into a Redlink tick; rows reveal with 40ms stagger.
- Motion: Quotes: cards reveal with a 4px rise; the opening quote marks stay static (restraint is the point).
- Motion: Links: .link-draw grows a 1px Redlink underline over 300ms on hover and focus-visible; ::selection is Redlink with Paper text.
- Motion: prefers-reduced-motion: reduce — disable stamp/postmark draws, staggers, slides (swap instantly), the sticky bar's slide (it appears in place); keep color and border hover changes. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: No photography, no stock, no external images — the page is typography plus drawn postal details. The EnvelopeCard's stamp, postmark and flap shadow are inline SVG; drop caps are CSS ::first-letter; the archive's read-time dots and the inbox checks are drawn. A faint paper-grain (repeating radial-gradient at 2% Ink) sits over the page. Icons: lucide-react only, stroke width 1.5.

## Pages & Sections
### Newsletter (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([BRAND] = The Margin Note, [AUTHOR] = June Okafor, [TOPIC] = the craft of small software teams, [CADENCE] = Tuesdays, 6am, [SUBS] = 11,204). Put every string and number in src/content.ts and render from it. If any variable value differs, rewrite the promise, issue titles and previews, quotes, archive entries and inbox lines so they are specific and believable for the new letter, keeping the same structure and counts (3 previewed issues, 4 quotes, 10 archive rows, 3 inbox bullets). All readers, issues and figures are invented; the subscriber count is labeled '(sample)' at first appearance. Facts: free, forever; one email a week plus the occasional double issue; issues numbered continuously (currently No. 47 published, No. 48 next); read times 4–9 minutes; unsubscribe is one click and instant. Portrait: portrait-june.webp is an AI-generated fictional person matching the default [AUTHOR] (a fictional writer, not resembling any real individual); alt stays '[AUTHOR], writing the next issue'.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the masthead '[BRAND].' (Newsreader 500 20px with the Redlink period) linking to ./index.html. Right (Space Mono 12px uppercase): 'Issues' → #issues, 'Archive' → #archive, 'About' → #about, and a small subscribe chip 'Subscribe' → the hero form (focuses the email input). Under 640px: masthead + chip only.
   Layout: Sticky top, Paper/92% with blur and a 1px Rule bottom border, height 64px, container-aligned.
3. **Hero with subscribe** — Two columns. Left: eyebrow 'A WEEKLY LETTER — [CADENCE]'; H1 'Small teams,' / '*sharpened.*'; the promise (19px, max-width 520px): '[BRAND] is a letter about [TOPIC] — what holds, what breaks, and what to steal from teams smaller than yours. Written by [AUTHOR], one honest page a week.' The SubscribeForm (email input + Redlink 'Subscribe' button, stacked full-width under 560px), the inline promise line (Space Mono 11px Umber): 'FREE · ONE EMAIL A WEEK · UNSUBSCRIBE IN ONE CLICK'. Three proof points as mono checkmarks beneath: 'No. 48 next, [CADENCE]'; '[SUBS] readers (sample)'; '4–9 minutes, worth both'. Right: the EnvelopeCard — the latest issue (No. 47, 'The Meeting Is a Message') styled as an opened envelope: a stamp (drawn, Redlink, tilts), a postmark circle, 'No. 47' mono, the issue title Newsreader 500 24px, its first two lines in the preview body face, and 'Read time 6 min' — clicking opens the issue's full preview in the Issues section (anchor scroll).
   Layout: Paper background, vertical padding 112px top under the header. Left 6 cols, right 5 cols offset 1. The envelope is a Card with a 1px Rule border, a 2px dashed flap line and a soft 4px paper shadow — the only shadow on the page.
4. **Issue previews** — Section id='issues'. Eyebrow 'RECENT ISSUES' and H2 'Read one before you decide.' Three IssueCards: No. 47 'The Meeting Is a Message' — category 'Teams' — 6 min — 'What your calendar says about your roadmap, read by the newest hire on their first day. This issue follows one engineering team''s week through the meetings they kept, cut, and quietly weaponized…'; No. 46 'Two-Pizza Teams Eat Cold Pizza' — 'Craft' — 8 min — 'The famous rule works until it doesn''t. A field guide to what actually breaks at nine people, drawn from three teams that lived through it and one that didn''t…'; No. 45 'The Oncall Journal' — 'Practice' — 5 min — 'What one team learned from a year of writing down every page: which alerts were fiction, which were debts, and the one that was a colleague…'. Each card expands inline to its full first section (three more paragraphs per issue, written in content.ts) with a fold line and 'fold' control.
   Layout: Wash background. Three columns 24px gap (stacked under 860px). Card: 'No. 47' mono Redlink, category chip, title Newsreader 600 22px, preview with drop cap, read-time row with dots. Expanded state grows the card downward.
5. **Proof strip** — A single hairline-bounded band on Paper: left, '[SUBS] readers' (Newsreader 500 28px) with '(sample)' in mono 11px Umber after it; center, 'One email a week. The double issue, twice a quarter.'; right, 'Sent [CADENCE] — no streaks, no guilt.' (mono).
   Layout: Full-width band with 1px Rule top/bottom borders, vertical padding 32px, three-part row wrapping on mobile.
6. **Reader quotes** — Section id='quotes'. Eyebrow 'WHAT READERS SAY' and H2 'Four reasons from the inbox.' Quotes: '"The only newsletter I read the week it arrives. June writes about teams the way a good mechanic talks about engines — no mystique, all parts."' — 'Priya N. · Staff engineer'; '"I forwarded No. 46 to my co-founder with the subject line ''read this before the offsite''. It changed the offsite."' — 'Dan & Mireille · two-person startup'; '"Unsubscribed from four newsletters the week I found this one. It earns the space."' — 'Anonymous, via the feedback form'; '"My team''s retro now has a standing agenda item stolen from issue No. 41. We call it what it is: stolen."' — 'Tomas R. · Tech lead'.
   Layout: Paper background. 2x2 grid 24px gap (stacked under 760px); cards on Card with 1px Rule border, quote Newsreader 400 italic 18px / 1.7, attribution mono 12px Umber.
7. **Archive** — Section id='archive'. Eyebrow 'THE BACK CATALOGUE' and H2 'Forty-seven issues, all free.' Ten rows (No. 47 back to No. 38): No. 47 'The Meeting Is a Message' · Teams · 6 min; No. 46 'Two-Pizza Teams Eat Cold Pizza' · Craft · 8; No. 45 'The Oncall Journal' · Practice · 5; No. 44 'Hiring Your First, Carefully' · Teams · 9; No. 43 'The README Holds the Culture' · Craft · 7; No. 42 'Estimates Are Fiction With Deadlines' · Practice · 6; No. 41 'The Retrospective That Worked' · Practice · 8; No. 40 'One Repo, One Team, No Exceptions' · Craft · 5; No. 39 'The Intern Saved the Quarter' · Teams · 7; No. 38 'Delete the Wiki' · Craft · 4. Rows link '#' (placeholder hrefs — an archive the couple fills in), with a closing line: 'No. 1–37 live wherever old newsletters retire; ask nicely and we''ll dust them off.'
   Layout: Wash background. Rows with 1px Rule dividers: number mono Redlink (fixed width), title Newsreader 500 18px, category chip, read-time dots right-aligned. Hover fills Paper. Container max-width 760px.
8. **What lands in your inbox** — Section id='about'. Eyebrow 'ABOUT THE LETTER' and H2 'One page, three parts.' Bullets with Olive Tick checks: 'One idea about [TOPIC], taken from a real team and stripped of names but not consequences'; 'One practice you can run this week — a meeting format, a script, a checklist — with the failure modes noted'; 'One recommendation worth your time: a book chapter, a tool, an essay, never an ad'. A small author portrait portrait-june.webp (4:5, 1px Rule border, caption '[AUTHOR], writing the next issue') sits above the about paragraph: '[AUTHOR] has worked on teams of two and teams of two hundred and writes about the small ones, where the craft is loudest. The letter is written by hand the night before, and it shows, in the good way.' The unsubscribe promise in mono: 'UNSUBSCRIBE: ONE CLICK, INSTANT, NO SURVEY — THE BUTTON WORKS THE FIRST TIME'.
   Layout: Paper background. Two columns: bullets 7 cols, about 4 cols offset 1 with the portrait at its top (max-width 220px). Promise line full-width under a hairline.
9. **Footer** — A Wash band: left, '[BRAND].' masthead small and 'Written by [AUTHOR] · hello@ + emailDomain'; right, anchors Issues / Archive / About and 'Subscribe' → the form. Bottom line under a Rule: '© [BRAND]. Sample figures, real opinions.'
   Layout: Vertical padding 48px, two-part row, bottom line 24px below a hairline; stacked under 640px.

## Assets
- image: Template portrait made for this design (free to redistribute with the template): https://media.vibefather.ai/assets/9677dbf6-86a5-42da-b79d-e9cb76f8f7fc/portrait-june.webp → public/images/portrait-june.webp (The about-column portrait; alt '[AUTHOR], writing the next issue').
- icon: lucide-react only: Mail, Check, X, ArrowDown, Clock, ChevronDown, Quote. Stroke width 1.5, 16–24px, color inherits. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 rect rx 6 filled #F8F4EC with a 1px Ink border, a Redlink (#A33B2E) stamp-like square (rotated 4deg) with a paper-colored asterisk inside. No other logo: the newsletter name is always set as type.
- image: Drawn in code only — no photos, no stock, no external images. The envelope card's stamp, postmark and flap shadow; drop caps (CSS ::first-letter); read-time dots; the inbox ticks; the paper grain overlay; all in SVG/CSS. Write ASSETS.md listing lucide-react (ISC), @fontsource-variable/newsreader and @fontsource/space-mono (OFL-1.1), noting 'No image assets; all visuals drawn in code.'
- font: Install @fontsource-variable/newsreader and @fontsource/space-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the subscribe state lives in the browser only (localStorage); the form's confirmation says the demo saves locally, and no email service is named or shown.
- All links on this single page are anchors (./index.html#issues, #archive, #about) except archive rows, which are '#' placeholders the writer fills in.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No real newsletters, writers, readers or platforms; the subscriber figure is sample data and labeled so at first appearance; no real email-service badges.
- No dates or years anywhere; issues are numbered, not dated; cadence is a weekday and time only; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion everywhere: disable the stamp and postmark draws, staggered reveals, the sticky-bar slide (appear in place) and issue expansion animation; keep color/border hovers.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; the form and expanded issues work with keyboard only, and every interactive element has a visible focus ring.
- Keep copy concrete: no lorem, no 'join our community'; every issue title, read-time and figure lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/newsletter-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
