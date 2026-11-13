# Startup Waitlist Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page waitlist for [BRAND], a product doing [WHAT], launching [LAUNCH], with [WAITLIST] people already in line (sample figure). It must capture an email with inline validation and then, client-side, show a queue position, a copyable referral link, and a share row whose copies visibly improve the position — clearly a demo mechanic, stored in this browser. Below: three benefit cards, one beta quote with a small stats row, five FAQ answers, a footer. One page: index.html. Nothing is submitted anywhere.

- Audience: Developers and early adopters who see forty launch pages a month and sign up for three. They scan the headline, glance at the queue number for social proof, and want the referral mechanics explained in one honest sentence.
- Goal: Collect the email and seed one share. Within ten seconds a visitor should know what the product does and that the line is moving; within one minute they should have joined and copied their link.
- Tone: Dry and confident, like a README with a personality. Short lines, one joke per screen, no exclamation marks, no 'revolutionary'.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/archivo (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (void-black, coal, graphite, bone, ash, lime, lime-deep, hairline) and fontFamily display ['Archivo Variable', 'system-ui', 'sans-serif'], mono ['IBM Plex Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 4px and add maxWidth { container: '1040px' }.
  - In src/fonts.ts import '@fontsource-variable/archivo' and '@fontsource/ibm-plex-mono/400.css', '@fontsource/ibm-plex-mono/500.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, number, benefit, stat, FAQ answer and the referral copy, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':'), src/lib/queue.ts (seededPosition(email) → a stable pseudo-random 4-digit position from the email hash; referralUrl() → location.href + '?ref=' + a stable 6-char code derived from the same hash; bumps(from, n) for the mock skips).
  - State: src/store/waitlist.ts is a tiny external store (useSyncExternalStore) holding { email, position, referrals } and the joined flag, persisted to localStorage key brandSlug + ':spot'. A ?ref=<code> in location.search shows a small 'You were referred — you start 3 spots ahead' ribbon on load (still the visitor's own browser state).
  - Components in src/components/: Header.tsx, DotField.tsx (the canvas background), Hero.tsx (EmailCapture.tsx with inline validation, TrustLine.tsx), SpotCard.tsx (PositionFigure.tsx, ReferralBox.tsx with copy button, ShareRow.tsx), Benefits.tsx, Proof.tsx (Quote.tsx, StatsRow.tsx), Faq.tsx, Footer.tsx, Reveal.tsx (Motion whileInView wrapper). src/pages/Home.tsx composes them.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#0B0C10'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — Join the waitlist</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB — no images.

## Variables
- [BRAND] — Product name (default: "Tandem"). Invented product name. Used in the wordmark, title, footer, email (hello@ + brandSlug without hyphens + .com) and localStorage keys. Never a real product or startup.
- [WHAT] — What it does (default: "pair-programming sessions for solo developers"). One lowercase phrase stating the product category. Drives the headline's second line, the benefit cards and two FAQ answers. Keep it concrete and short.
- [LAUNCH] — Launch window (default: "this winter"). A season phrase, never a dated deadline ('this winter', 'this spring'). Used in the hero sub-line, the confirmation card and one FAQ answer.
- [WAITLIST] — Queue figure (default: "2,417"). The comma-formatted sample queue size shown in the hero sub-line and stats row. Clearly a demo figure (the FAQ admits it); keep it 800–9,999.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/startup-waitlist-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Void Black `#0B0C10` — Page background, footer, the spot card.
- Coal `#12141A` — Benefit and FAQ cards, the email input fill, chips.
- Graphite `#1B1E26` — Hover surfaces, input focus fill, share-row buttons.
- Bone `#EDEEF0` — Primary text: headlines, body, card titles.
- Ash `#8B909C` — Secondary text, captions, eyebrows, the trust line.
- Lime `#C6F432` — The one accent: the join button, queue number, referral link, focus ring, canvas dots at their brightest, stat figures.
- Lime Deep `#A8D226` — Button hover, the position tick, selected states.
- Hairline `#262A33` — 1px hairlines, card borders, the input border, dividers.

### Typography
- Display: H1, H2, benefit titles, the wordmark — heavy, wide-tracked Archivo: Archivo (OFL), weights 700/800
- Numbers and links: the queue position, referral URL, stats row, eyebrow labels (uppercase): IBM Plex Mono (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Container max-width 1040px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow (a waitlist page is a funnel, not a brochure). Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(52px, 9vw, 120px) Archivo 800, line-height 0.94, letter-spacing -0.03em, uppercase; H2 clamp(28px, 4vw, 44px) Archivo 800 uppercase letter-spacing -0.02em; benefit titles 19px Archivo 700; lead 18px / 1.6 Bone at 80%; body 16px / 1.7 (max-width 60ch); eyebrow IBM Plex Mono 500 12px uppercase letter-spacing 0.2em Ash; caption IBM Plex Mono 400 13px Ash. The queue position is IBM Plex Mono 500 clamp(72px, 14vw, 160px) in Lime, tabular-nums. Buttons: height 54px, Archivo 700 15px uppercase letter-spacing 0.06em. Join: Lime fill, Void Black text. Secondary/share: 1px Hairline border on Coal, Bone text, hover Graphite. Inputs: height 54px, Coal fill, 1px Hairline border, 16px IBM Plex Mono, focus border Lime. Focus ring everywhere: 2px Lime outline with 3px offset.
- Radius: 4px on cards, buttons, inputs and the spot card — sharp launch energy. No pills except the referred-ribbon.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and the position counter; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the spot card swap and FAQ. Snappy but never cute.
- Motion: DotField: a canvas of ~140 dots on a slow 2D noise drift; dots near the cursor brighten toward Lime and repel gently. 60fps with a rAF loop that pauses when the tab hides; under prefers-reduced-motion the field renders one static frame. Dots never obscure text (the field sits at 40% max opacity behind a Void gradient at the text areas).
- Motion: H1: words rise from translateY(28px) and opacity 0 with 90ms stagger, 600ms --ease-out; the Lime period on the final word blinks once like a cursor after the line lands (a 180ms opacity toggle, once).
- Motion: Email capture: validation errors shake the input 4px once and show the inline line in Lime (not red — the palette has no red); on submit the button label swaps to 'Joining…' for 600ms, then the hero's form area swaps to the SpotCard with a 300ms --ease-io slide.
- Motion: SpotCard: the position counts DOWN from a few above to the final number over 900ms --ease-io (a slot machine settling, not a spin); each referral copy/share visibly decrements the position by 3 with a quick 240ms count and a Lime tick; the referral box copies with the button label swapping to 'Copied ✓' for 1400ms.
- Motion: Benefits: cards reveal with 90ms stagger and a 6px rise; icons draw once on first view (stroke-dashoffset).
- Motion: Stats row: figures count up once on reveal (700ms), then sit still; the '(sample data)' caption never animates.
- Motion: FAQ accordions: height 0 to auto, opacity 0 to 1, 260ms --ease-io; Plus rotates 45 degrees into an X.
- Motion: Referred ribbon (?ref= present): slides down from the header once on load, stays dismissible.
- Motion: Links: .link-draw grows a 1px Lime underline over 250ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — static DotField frame, no counters (final values render instantly), no shakes, no stagger; color and border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: No photography, no stock, no external images — everything drawn in code. The DotField canvas background is the only ambient art; benefit icons are Lucide; the queue 'meter' is a thin SVG progress rule; share glyphs are generic Lucide icons (Link2, Mail, MessageCircle) — never real social platform marks. A subtle CSS grain overlay (repeating radial-gradient at 3% opacity) keeps the black from banding. Icons: lucide-react only, stroke width 2.

## Pages & Sections
### Waitlist (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([BRAND] = Tandem, [WHAT] = pair-programming sessions for solo developers, [LAUNCH] = this winter, [WAITLIST] = 2,417). Put every string and number in src/content.ts and render from it. If any variable value differs, rewrite the headline, benefit lines, quote, stats and FAQ answers so they are specific and believable for the new product, keeping the same structure and counts (3 benefits, 3 stats, 1 quote, 5 FAQs). All numbers are sample data and the page says so once in the stats row. Product facts: private beta runs first, [WAITLIST] in line (sample); referrals skip 3 spots per verified share (demo mechanic, stored locally); emails only for the invite, one ping, never sold; built by one developer and a dog, allegedly.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: wordmark '[BRAND]' (Archivo 800 18px uppercase letter-spacing 0.04em) with a 6px Lime square dot after it, linking to ./index.html. Right: 'Why' → #why, 'FAQ' → #faq, and hello@ + emailDomain as a quiet mailto link. A referred-ribbon slot sits under the header: when the URL carries ?ref=<code>, it shows 'Referred — you start 3 spots ahead.' with an X to dismiss.
   Layout: Sticky top, height 68px, Void Black/80% with blur and a Hairline bottom border, container-aligned.
3. **Hero with email capture** — The DotField canvas fills the hero behind everything. Centered stack: eyebrow 'WAITLIST — [WAITLIST] IN LINE (SAMPLE)' in mono; H1 two lines: 'CODE ALONE.' / '*TOGETHER.*' (final word in Lime italic); sub-line 18px Bone/80% max-width 540px: '[BRAND] is [WHAT] — matching you with a partner for a focused hour, [LAUNCH]. Join the line; we''ll ping you once.' The EmailCapture: one input (placeholder 'you@work.dev') and the Lime 'Join the line' button side by side (stacked full-width under 560px); inline validation ('That email looks unfinished — one more pass?'); TrustLine under the form in mono 12px Ash: 'NO SPAM · NO CARD · ONE EMAIL, THEN SILENCE'. Before joining, a mono caption under the form: 'Joining stores your spot in this browser — the demo''s only trick.'
   Layout: Void Black, vertical padding 160px top under the header, 96px bottom, min-height 88svh. The canvas absolute inset 0 at 40% max opacity; a radial Void gradient keeps the center-left readable. Form max-width 620px.
4. **Spot card (after joining)** — Replaces the form area once joined. On Coal with a 1px Lime border: eyebrow 'YOU''RE IN — SAMPLE QUEUE'; the PositionFigure '#2,418' counting down to settle (from the seeded hash; plus 3 ahead if referred); the line 'in line for the [LAUNCH] invite' (mono, Ash); the ReferralBox — the referral URL in mono 14px with a copy button; the ShareRow — three generic share buttons (Link2 'Copy link', Mail 'Email a friend' as a mailto with the URL in the body, MessageCircle 'Share anywhere' copying + a toast line); the mechanics line in mono 12px Ash: 'Each share skips you 3 spots — in this demo, instantly and locally. The real queue is being built right now.' A small 'Not you? Leave the line' text button clears the stored spot.
   Layout: Same width as the form; swap animation 300ms --ease-io. PositionFigure dominates; the meter rule beneath fills Lime proportional to (WAITLIST − position)/WAITLIST.
5. **Benefits** — Section id='why'. Eyebrow 'WHY BOTHER' and H2 'Three honest reasons.' Cards on Coal with 1px Hairline borders: 1) Users icon — 'A partner, not an audience' — 'One matched developer, one focused hour, no stream chat, no performance.' 2) CalendarClock icon — 'Slots that respect deep work' — 'Sessions slot into your calendar''s real gaps; the matcher knows a 2pm slump from a 10am streak.' 3) Timer icon — 'Ship by the end of the hour' — 'Every session ends with a demo, a diff, or a very good reason there isn''t one.'
   Layout: Void Black continues. Three columns 20px gap; cards 24px padding; icon 24px Lime; title Archivo 700 19px; line 14.5px / 1.65 Bone/80%. Under 860px: stacked.
6. **Proof** — A single centered quote block: '"Two sessions in the beta unblocked a side project I''d abandoned in March. The matcher paired me with someone who had made my exact mistake, twice."' — 'Rin, beta tester #114' (mono). StatsRow beneath in mono, Lime figures with Ash labels and one caption: '1,400+ SESSIONS · 27 MIN MEDIAN MATCH · 4.9/5 SESSION RATING (SAMPLE DATA)'.
   Layout: Coal band full-width with 1px Hairline top/bottom borders; quote max-width 720px, 22px Archivo 700 / 1.45; stats row spaced with 40px gaps, wrapping on mobile.
7. **FAQ** — Section id='faq'. Eyebrow 'QUESTIONS' and H2 'Five answers, no hedging.' Accordions: 1) 'When does it launch?' — 'The private beta starts [LAUNCH]; the waitlist goes in order, referrals first. The public version follows once the matching feels boring — in the best way.' 2) 'How do referrals actually work?' — 'In this demo: instantly and in your browser. In the real queue: each verified share skips you three spots; we can verify links, not vibes.' 3) 'What does it cost?' — 'The beta is free. After that: a flat monthly price smaller than your coffee budget — on the page before you ever enter a card.' 4) 'Who will I be paired with?' — 'Developers who booked the same slot and share your stack''s rough neighborhood. You''ll see a profile before you accept; a bad match costs you nothing but the clicking.' 5) 'Is my email safe?' — 'It''s used once, for the invite, and never sold, shared or 'anonymized'. The unsubscribe is one click and actually works.'
   Layout: Void Black, rows on Coal 1px Hairline border, question Archivo 700 16px, answer 15px / 1.7 Bone/85% max-width 64ch, Plus icon right. Container max-width 720px.
8. **Footer** — A Coal band: left, '[BRAND]' wordmark with the Lime dot and the line '— [WHAT].' (14px Ash); right, 'hello@ + emailDomain' and 'Waitlist terms: one spot per browser, kindness per session.' (mono 12px). Bottom line under a Hairline: '© [BRAND]. Sample data, real intent.'
   Layout: Vertical padding 48px, two-part row, bottom line 24px below a hairline; stacked under 640px.

## Assets
- icon: lucide-react only: Users, CalendarClock, Timer, Plus, X, Copy, Check, Link2, Mail, MessageCircle, ArrowRight. Stroke width 2, 16–24px, color inherits. Share glyphs are generic Lucide icons — never real social-platform marks. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 rect rx 5 filled #0B0C10 with a 1px #C6F432 border, a Lime terminal-prompt glyph ('>' shape made of two Lime strokes and a block cursor). No other logo: the product name is always set as type.
- image: Drawn in code only — no photos, no stock, no external images. The DotField canvas background, the queue meter rule, the grain overlay (repeating radial-gradient at 3%), all buttons and the favicon are SVG/CSS/canvas. Write ASSETS.md listing lucide-react (ISC), @fontsource-variable/archivo and @fontsource/ibm-plex-mono (OFL-1.1), noting 'No image assets; all visuals drawn in code.'
- font: Install @fontsource-variable/archivo and @fontsource/ibm-plex-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the email, queue position, referrals and referred-ribbon state live in the browser only (localStorage + URL query); the spot card says the mechanics are a demo.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No real startups or products; no real social platform icons or brand marks anywhere; sample figures are labeled '(sample)' or '(sample data)' at least once per section showing them.
- No dates or years anywhere; the launch window is a season phrase only; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion everywhere: the DotField renders a static frame, counters show final values, no shakes or staggers; keep color/border hover changes.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; the form, copy button, share row and accordions work with keyboard only, and every interactive element has a visible focus ring.
- Keep copy concrete: no lorem, no 'revolutionary'; every number lives in src/content.ts with its sample label.

---
— Prompt by VibeFather · https://vibefather.ai/t/startup-waitlist-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
