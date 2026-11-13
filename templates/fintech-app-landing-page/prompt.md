# Fintech App Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site that launches [APP], a mobile spending-and-saving account with the [CARD_NAME] card and a [RATE] savings rate (sample figure). The hero is a CSS phone mockup playing a screen loop; scrolling swaps screens; the card, goals and security sections are all drawn in code. One page, index.html; everything runs in the browser and nothing is submitted anywhere.

- Audience: People who switched banks last time because of one annoying fee: they want the rates, the card terms and the security story up front, in plain English, on the first scroll.
- Goal: Waitlist sign-ups and store opens. Within ten seconds a visitor sees the phone, the rate and the button; within two minutes they have seen the goals rings and the card reveal.
- Tone: Plain-money: exact numbers, short sentences, zero bro-y hype. One dry joke about spreadsheets.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/space-grotesk (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template, then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (ink, panel, glass, line, bone, mist, mint, mint-deep, mint-mist, gold, slateink, good) and fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 14px and add maxWidth { container: '1200px' }.
  - In src/fonts.ts import '@fontsource-variable/space-grotesk' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, feature, goal, faq row, rate and term, typed), src/lib/brand.ts (appSlug = [APP] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = appSlug without hyphens + '.com', cardLabel from [CARD_NAME]), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, key appSlug + ':waitlist'), src/lib/format.ts (money(n) with en-US grouping and no cents).
  - State: src/store/waitlist.ts is a tiny external store (useSyncExternalStore) holding { email, saved } persisted to localStorage.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx; Hero.tsx (PhoneMock.tsx with ScreenBalance.tsx, ScreenGoals.tsx, ScreenCard.tsx), FeatureRail.tsx (FeatureCard.tsx), CardShowcase.tsx (BankCard.tsx, NumberMask.tsx), GoalsSection.tsx (GoalRing.tsx), RoundUp.tsx, Security.tsx (LayerStack.tsx), Waitlist.tsx, Faq.tsx (FaqRow.tsx), StoreButtons.tsx. src/pages/Home.tsx composes them.
  - PhoneMock: a 300x612px div, border-radius 44px, 1px Line border, ink face with a subtle top-to-bottom glass sheen (linear-gradient), inside a notch pill and a home indicator bar. Screens fill it and swap on a loop: Balance → Goals → Card, 3.2s each, crossfading 400ms. transform: rotateX(6deg) rotateY(-14deg) on desktop (perspective 1200px on the wrapper), flat on mobile. The loop pauses on hover/focus and stops dead under prefers-reduced-motion (Balance shown).
  - ScreenBalance: Bone balance figure counting up on first view ($2,418.60, Inter 700 tabular), a mint delta chip '+$62.40 this week', three transaction rows (icon dot, name, amount), a small spend bar for the week.
  - ScreenGoals: two GoalRings (SVG circles, stroke-dashoffset animated on view): 'Trip to Lisbon 68%' and 'Emergency fund 41%', plus a round-up line 'Round-ups added $14.20 this week'.
  - ScreenCard: the BankCard face scaled down inside the phone with the last-four chip and a paused/spent pair of mini bars.
  - BankCard: a 340x214px SVG/CSS card: deep ink face with a mint-to-transparent diagonal wash, an abstract EMV-style chip (rounded rects, no real network marks), [CARD_NAME] in Space Grotesk 600, and NumberMask '•••• •••• •••• 4127' that expands to full invented digits on hover/focus (aria-label carries the masked form).
  - FeatureRail: as the section scrolls, each of the four features becomes active (IntersectionObserver) and sets the PhoneMock screen to match (Balance → Card → Goals → Round-up). On mobile the features stack as normal cards and the phone shows the plain loop.
  - Before the first build no images need downloading — every visual is code-drawn. public/favicon.svg as described under Assets.
  - index.html: lang en, <meta name='theme-color' content='#0A1120'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[APP] — banking that behaves</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB.

## Variables
- [APP] — App name (default: "Fernbank"). The invented app's name, one word. Used in the wordmark, title tag, footer, email (hello@ + appSlug without hyphens + '.com') and on the card. Never a real bank or fintech.
- [RATE] — Savings rate (default: "4.6%"). The headline savings APY, sample figure. Appears in the hero, the goals section and the FAQ small print, always with '(sample rate)' nearby in demo copy.
- [CARD_NAME] — Card name (default: "Fern Card"). The invented debit card's name. Appears on the card face and in the card section. No real card networks anywhere.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/fintech-app-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Ink `#0A1120` — Page background throughout, card faces.
- Panel `#101A2E` — Cards, sections panels, phone body.
- Glass `#16233C` — Raised panels, hover fill, select fill, glass sheen base.
- Line `#23324E` — 1px hairlines, card borders, input borders, phone edge.
- Bone `#EEF3F8` — Primary text, balance figures, headings.
- Mist `#8FA0B8` — Secondary text, captions, eyebrows, transaction names.
- Mint `#3DDC97` — The one live accent: rate chips, primary buttons, ring progress, focus ring, delta chips.
- Mint Deep `#22B37A` — Hover and pressed primary.
- Mint Mist `#12332E` — Chip fills, selected states, tint panels.
- Gold `#E5B54B` — The card chip and one warm detail on the card face only.
- Slate Ink `#08121C` — Text on mint or bone fills.
- Good `#3DDC97` — Success states, waitlist check, verified dots.

### Typography
- Display: H1, H2, rate figure, card name, wordmark — Space Grotesk, techy but warm: Space Grotesk (OFL), weights 500/700
- Text and UI: body, transactions, forms, captions; tabular numerals for all money: Inter (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 104px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.4vw, 66px) Space Grotesk 700, line-height 1.05; H2 clamp(26px, 3.5vw, 42px) Space Grotesk 700; the rate figure Space Grotesk 700 56px with the % at 0.5em; lead Inter 400 17px / 1.65 Bone at 90%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist. Buttons: height 50px, Inter 600 14px; primary Mint fill with Slate Ink text, secondary 1px Line border with Bone text. Inputs: height 50px, Glass fill, 1px Line border, focus Mint border + 2px offset ring.
- Radius: 14px on cards and panels, 10px on buttons and inputs, 999px for pills and chips, 44px on the phone.
- Motion: Easing: --ease-io cubic-bezier(0.65, 0, 0.35, 1) for screen swaps and ring progress; --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals. Product-demo smooth.
- Motion: Reveal: sections wrapped in <Reveal> start opacity 0, translateY(16px), settle over 700ms --ease-out at 15% viewport (Motion whileInView, once), siblings stagger 70ms.
- Motion: Hero: the phone enters flat and rotates into its 3D pose over 900ms; the H1 lines rise; the rate chip pops once (scale 0.96→1).
- Motion: Phone loop: screens crossfade every 3.2s as described in Setup; the loop is also the reduced-motion fallback (frozen on Balance).
- Motion: FeatureRail: as each feature activates, the phone screen crossfades to match (400ms) and the active card lifts 2px with a Mint 1px left rail.
- Motion: Balance count-up: money figures count to their values over 900ms on first view (tabular, no jank).
- Motion: GoalRings: stroke-dashoffset animates to each percentage on view (900ms --ease-io); percentages count alongside.
- Motion: NumberMask: hover/focus expands the dots to digits with a 240ms width ease; blur (1px) on the digits' before-state for a reveal feel.
- Motion: Waitlist submit: the form crossfades to a Good check line 'Saved — this demo keeps your email in this browser only.'
- Motion: Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — phone frozen on Balance, no count-ups (final values shown), rings drawn at rest, no chip pop; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: No photographs anywhere — everything is drawn in code: the phone mockup and its three screens, the SVG card with its abstract chip, goal rings, the round-up visualization, the security layer stack and the favicon. No real network marks (no Visa/Mastercard/Amex shapes), no platform store badges (store buttons are drawn generic with lucide icons), no people. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Fintech app landing (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([APP] = Fernbank, [RATE] = 4.6%, [CARD_NAME] = Fern Card). Put every string, feature, goal, transaction, FAQ row and term in src/content.ts and render from it. If any variable differs, rewrite the H1, the feature lines, the goals, the transactions and the FAQ so they are specific and believable for that app, keeping the same structure and counts (4 features, 2 goal rings, 3 transaction rows, 4 FAQ rows). Features: 'No monthly fee, actually' 'the fee is zero; the fine print agrees'; 'Save at [RATE] (sample rate)' 'goals you can name, rings you can watch fill'; 'Round-ups, quietly' 'every purchase rounds up into a goal you pick'; 'The [CARD_NAME] works everywhere' 'and freezes from the app in one tap'. Goals: 'Trip to Lisbon' 68% $1,360/$2,000; 'Emergency fund' 41% $2,050/$5,000. Transactions: 'Grocer Row Market' −$42.18; 'Transit pass' −$2.75; 'Paycheck' +$1,940.00. FAQ: 'Is my money insured?' 'This is a demo — in a real app this line would name the partner bank and insurance limits.'; 'What does the card cost?' 'The demo answer: nothing to get, nothing monthly, nothing to freeze.'; 'When do savings pay out?' 'Monthly, on the first — [RATE] is a sample rate for the demo.'; 'Can I close the account?' 'From the app, two taps, no retention maze (this demo stores nothing at all).' All rate and fee figures are invented sample values and the copy says 'sample' where they appear.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[APP]' (Space Grotesk 700 19px, Bone) with a mint dot; over 'SPENDING + SAVING' (10px uppercase Mist). Right nav (Inter 500 14px): 'Features' → #features, 'Card' → #card, 'Security' → #security, and a compact primary 'Join waitlist' → #waitlist. Under 720px: wordmark + button.
   Layout: Sticky top, height 68px, Ink at 92% with backdrop blur, Line bottom border.
3. **Hero** — Two columns. Left (6 cols): eyebrow 'A BANK THAT BEHAVES'; H1 'Money, minus the drama.'; lead '[APP] is one account for spending and saving: no monthly fee, goals that fill themselves, and a [RATE] savings rate (sample) that isn't a teaser.'; CTA row: primary 'Join the waitlist' → #waitlist, StoreButtons beside it; trust row (mint checks): 'No monthly fee', 'Freeze in a tap', 'Works abroad (sample terms)'. Right (5 cols, offset 1): the PhoneMock playing its loop over a soft mint radial glow.
   Layout: Ink background, 128px top padding; phone centered in its column.
4. **Feature rail** — Section id='features'. Eyebrow 'FOUR THINGS IT DOES WELL'; H2 'One screen per promise.' Left: the four FeatureCards (from the roster) stacked; the active one carries a Mint left rail and Glass fill. Right: the PhoneMock (sticky on desktop), its screen following the active feature. Under 900px the phone hides and the cards stand alone with small inline screen hints.
   Layout: Panel-tinted background; two columns: 6 cards, 5 phone (sticky, top 96px).
5. **Card showcase** — Section id='card'. Left (5 cols): the BankCard at a gentle 3D tilt with its floor shadow; caption 'Hover the number — it's a demo card, the digits are invented.' Right (6 cols, offset 1): eyebrow 'THE [CARD_NAME]'; H2 'One card, zero theater.'; three term rows with lucide icons: 'No monthly fee' 'and no minimum balance'; 'Freeze and unfreeze' 'from the app, one tap, instant'; 'Works abroad' 'no foreign-transaction fee (sample terms)'.
   Layout: Ink background; card column centered; terms as hairline-divided rows.
6. **Goals and round-ups** — Section id='goals' on Panel background. Eyebrow 'SAVING, ON AUTOPILOT'; H2 'Rings you'll actually watch fill.' Left: two GoalRings side by side (68% / 41%) with names and amounts beneath. Right: the RoundUp panel — a receipt-style card (Glass, Line border) showing three purchases rounding up ($4.20 → $5.00 · $12.75 → $13.00 · $8.10 → $9.00) with the round-up deltas in Mint, and a footer line '$1.95 into Lisbon this week'.
   Layout: Two columns 24px gap (stacked under 900px); rings 180px diameter.
7. **Security** — Section id='security'. Eyebrow 'LOCKED, PLAINLY'; H2 'Security in sentences, not footnotes.' The LayerStack (drawn): three stacked glass panels labeled 'Device check', 'Instant freeze', 'Real alerts' that fan out on scroll (each shifting 12px further, 60ms stagger). Beside it four plain lines: 'Money sits at a partner bank (this demo names none).' / 'Card numbers live in the app, not on the card.' / 'Every login pings your device first.' / 'Freeze beats fraud: one tap, instant.' Caption: 'Sample security copy for a fictional product.'
   Layout: Ink background; stack left (5 cols), lines right (6 cols, offset 1).
8. **Waitlist** — Section id='waitlist'. A wide Glass card with a Mint 1px top rail: eyebrow 'JOIN THE WAITLIST'; H2 'Be first when it opens.'; one-line input + primary button 'Save my spot'; small print 'Demo: nothing is sent; your email stays in this browser.' On submit, crossfade to the Good check line. Below the card, StoreButtons row with the caption 'Also pretending to be on the stores.'
   Layout: Panel background; card max-width 640px centered, 40px inner padding.
9. **FAQ and footer** — Four FaqRows (plus rotates to cross) on Glass rows. Footer: left wordmark + 'hello@' + emailDomain; right '© [APP]. Sample product; sample rates; sample everything.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: FAQ single column max-width 760px; footer 76px, Line top border.

## Assets
- image: No photographs or downloaded images: every visual is drawn in code (phone mockup, screens, SVG card, rings, receipt, layer stack, favicon). Do not fetch or hotlink anything.
- image: Write ASSETS.md at the project root listing the code-drawn assets (phone mockup, card, rings, receipt, layer stack, favicon — 'drawn in code, original') and the npm packages: @fontsource-variable/space-grotesk and @fontsource-variable/inter (OFL-1.1), lucide-react (ISC).
- icon: lucide-react only: ArrowRight, Check, Eye, EyeOff, Globe2, Lock, Smartphone, Snowflake, Zap. Stroke width 1.75, 16–24px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #0A1120, a mint (#3DDC97) rounded 'F'-like mark built from two rounded rects (abstract, letterform optional). No brand logos.
- font: Install @fontsource-variable/space-grotesk and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: the waitlist saves in the browser only (localStorage) and says so; store buttons are inert anchors with an honest caption.
- Every internal link points to a file name or anchor (./index.html, #card) — never to a bare directory; there is exactly one page.
- No real banks, card networks, fintech brands or their marks (no Visa/Mastercard/Amex shapes, no Apple/Google store badges — buttons are drawn generic); the card is the invented brand's own.
- No real rate, fee or insurance numbers presented as fact: every figure is an invented sample and says 'sample' where it appears; no real regulator names (FDIC, FCA) — the demo says a real app would name its partner bank.
- No photographs and no people; every visual is code-drawn.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: phone frozen on the first screen, no count-ups, rings at rest, no fanning; color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; card reveal, waitlist, FAQ and buttons work with keyboard only and visible focus rings.
- Keep copy plain-money: no 'revolutionary', no crypto talk; every string lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/fintech-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
