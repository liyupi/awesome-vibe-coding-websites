# Browser Extension Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site that launches [BRAND], a browser extension that [JOB], summoned with [SHORTCUT]. The hero is a code-drawn browser mockup running a scripted demo of the extension working; below it a synced three-step rail, a feature trio, a privacy manifesto, reviews, drawn install buttons and a short FAQ. One page, index.html; everything runs in the browser and nothing is submitted anywhere.

- Audience: People who read extension permissions before installing: developers, writers and tab-hoarders who want to see the thing work before they trust it with a toolbar slot.
- Goal: Installs. Within ten seconds a visitor sees the mockup demo playing and the install button; within two minutes they have read the privacy manifesto and hit download.
- Tone: Workshop-plain: what it does, what it touches, what it never touches. One dry joke about permissions.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/newsreader (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template, then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (graphite, panel, panel-2, line, paper, mist, amber, amber-deep, amber-mist, ink, good) and fontFamily display ['Newsreader Variable', 'Georgia', 'serif'], sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 10px and add maxWidth { container: '1180px' }.
  - In src/fonts.ts import '@fontsource-variable/newsreader', '@fontsource-variable/inter' and '@fontsource/jetbrains-mono/400.css' plus '500.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, step, feature, review, faq row, demo line, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', downloadName = brandSlug + '-extension.zip', emailDomain = brandSlug without hyphens + '.com').
  - State: src/store/demo.ts is a tiny external store (useSyncExternalStore) holding the demo step index 0–3 and a paused flag, driven by a 2.6s interval that stops on hover/focus of the mockup and under prefers-reduced-motion (which pins step 3, the finished clean state).
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, InstallButtons.tsx; Hero.tsx (BrowserMock.tsx), Steps.tsx (StepRow.tsx), Features.tsx (FeatureCard.tsx), Privacy.tsx, Reviews.tsx (ReviewCard.tsx, StarRow.tsx drawn SVG), Faq.tsx (FaqRow.tsx). src/pages/Home.tsx composes them.
  - BrowserMock: a 880x560px (max-width 100%) CSS browser window: chrome bar (three Line dots, a URL pill reading 'longreads.example — a very cluttered article', and a toolbar area with three gray glyph squares then the [BRAND] extension icon — a 22px rounded square in Amber with a drawn paper glyph). Inside, the fake page: a generic article (headline bar, two text columns of Line-gray placeholder bars, and — at steps 0–1 — four ad blocks: amber-crossed gray boxes labeled 'AD' in 10px mono). The demo loop: step 0 cluttered page idle (ad blocks pulsing gently); step 1 the extension icon bounces once and a cursor dot moves to it; step 2 the popup panel (a Paper card, 260px, spring-eased from the toolbar: brand row, one toggle 'Reading mode', one slider 'Width', a muted note 'Local only — no account'); step 3 the page transforms: ad blocks fade and collapse out (300ms), text bars become wider Paper-on-graphite readable bars, the popup closes, and a small Amber 'done' check sits on the toolbar icon. Step dots (4) under the mockup; hovering the mockup pauses the loop; clicking a dot jumps to that step (keyboard-focusable).
  - All fake-page content is drawn with divs/SVG — no screenshots, no readable paragraphs, no real site layouts.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#15171C'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — the extension that [JOB]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB.

## Variables
- [BRAND] — Extension name (default: "Hushpage"). The invented extension's name, one word. Used in the wordmark, title tag, toolbar icon tooltip, install buttons, footer and email (hello@ + brandSlug without hyphens + '.com'). Never a real extension.
- [JOB] — What it does (default: "strips clutter from any article and hands you clean, readable pages"). One lowercase phrase naming the job. Rewrites the H1, the demo popup, the steps and the feature lines. Keep it concrete and verb-first.
- [SHORTCUT] — Shortcut (default: "Alt+Shift+H"). The keyboard shortcut that summons it, in mono in the hero and steps. Invented; not a real extension's binding.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/browser-extension-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Graphite `#15171C` — Page background throughout.
- Panel `#1D2026` — Cards, mockup chrome, FAQ rows.
- Panel 2 `#242830` — Hover fill, raised panels, URL pill fill.
- Line `#2E333C` — 1px hairlines, card borders, placeholder bars, input borders.
- Paper `#F1ECE1` — Primary text, the popup card, readable-page bars, headings.
- Mist `#9BA1AC` — Secondary text, captions, eyebrows, placeholder text bars.
- Amber `#E2A13C` — The one accent: extension icon, primary buttons, active step dots, toggle, focus ring, stars.
- Amber Deep `#C4842A` — Hover and pressed primary.
- Amber Mist `#3A2E1B` — Chip fills, selected states, tint panels.
- Ink `#191510` — Text on Paper or Amber fills.
- Good `#7FB069` — Permission checks, 'done' states, privacy ticks.

### Typography
- Display: H1, H2, review quotes — Newsreader, warm editorial serif: Newsreader (OFL), weights 400/600
- Text and UI: body, buttons, forms, captions, mockup UI: Inter (OFL), weights 400/500/600
- Mono: shortcut keys, the URL pill, small labels in the mockup: JetBrains Mono (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Container max-width 1180px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 100px desktop, 76px under 1024px, 60px under 640px. Type scale: H1 clamp(40px, 5.4vw, 66px) Newsreader 600, line-height 1.06; H2 clamp(26px, 3.5vw, 42px) Newsreader 600; feature titles Inter 600 17px; lead Inter 400 17.5px / 1.65 Paper at 90%; body 15.5px / 1.7; eyebrow Inter 600 12px uppercase letter-spacing 0.16em Mist; caption 13px Mist; mono labels JetBrains Mono 400 12.5px. Buttons: height 50px, Inter 600 14px; primary Amber fill with Ink text, secondary 1px Line border with Paper text. Focus everywhere: 2px Amber outline, 3px offset.
- Radius: 10px on cards, panels, buttons; 999px for pills and step dots; 14px on the mockup window.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; a spring (stiffness 260, damping 24) for the popup. Workshop-steady.
- Motion: Reveal: sections wrapped in <Reveal> start opacity 0, translateY(14px), settle over 700ms --ease-out at 15% viewport (Motion whileInView, once), siblings stagger 70ms.
- Motion: The mockup demo loop runs as described in Setup (2.6s steps, hover/focus pause, dot jump); under prefers-reduced-motion it sits on the finished step 3 with all controls still usable.
- Motion: Hero: the mockup enters from translateY(20px) scale(0.98); the H1 lines rise; the shortcut key chips pop in with a 40ms stagger.
- Motion: Steps: the active step row carries an Amber left rail and its icon swaps from Mist to Amber; changes crossfade 200ms.
- Motion: Privacy: the four tick lines draw their checks (SVG stroke) on first view, staggered 90ms.
- Motion: Reviews: cards reveal with 70ms stagger; stars fill amber one by one (40ms apart).
- Motion: Install buttons: the primary draws a subtle 1px Amber top rail on hover; the version chip never moves.
- Motion: FAQ: rows expand 240ms; plus rotates to cross.
- Motion: Links: .link-draw grows a 1px currentColor underline over 260ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — demo pinned to the finished state, no check drawing, no star fills (amber at rest), no popup spring (popup shown open statically); color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: No photographs anywhere. Everything is drawn in code: the browser window, its chrome, the fake article page (placeholder bars, never readable paragraphs), ad blocks, the popup card, step glyphs, star rows and the favicon. No browser-vendor marks (no Chrome/Firefox/Edge/Safari names, logos or store badges) — install buttons are drawn generic with lucide icons and the words 'Install for your browser'. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Extension landing (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([BRAND] = Hushpage, [JOB] = strips clutter from any article and hands you clean, readable pages, [SHORTCUT] = Alt+Shift+H). Put every string, step, feature, review, FAQ row and demo label in src/content.ts and render from it. If any variable differs, rewrite the H1, the steps, the features, the popup labels and the FAQ so they are specific and believable for that extension, keeping the same structure and counts (3 steps, 3 features, 3 reviews, 4 FAQ rows). Steps: 'Open anything cluttered' 'an article, a recipe, a doc — [BRAND] waits quietly in the toolbar'; 'Press [SHORTCUT] or click' 'the popup opens where you are; no accounts, no cloud'; 'Read' 'the page settles into clean type; the noise is gone, not hidden'. Features: 'Local by design' 'everything runs in the tab; there is no server to leak'; 'Your keys, your habit' 'one shortcut, remembered per site, adjustable width'; 'Polite permissions' 'it asks for the tab, not your history, wallet or firstborn'. Reviews (quote · name · role): 'The first extension I haven't uninstalled.' 'Marta Kowalski' 'Reporter'; 'My eyes are 40 and grateful.' 'Devon Reyes' 'PhD student'; 'No account. That's the feature.' 'Ingrid Halvorsen' 'Privacy nerd'. FAQ: 'Which browsers?' 'Any Chromium browser and current Firefox; the buttons below keep it honest.'; 'Does it send my pages anywhere?' 'No — there is no anywhere; the demo popup says so.'; 'What permissions?' 'Active tab only, on click. It never reads other tabs.'; 'Is it really free?' 'Yes; there is no pro tier hiding in a menu (sample copy).' All install counts and ratings stay out; reviews are invented sample content.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[BRAND]' (Newsreader 600 20px, Paper) with a small Amber square glyph before it; over 'BROWSER EXTENSION' (10px uppercase Mist). Right nav (Inter 500 14px): 'How' → #how, 'Features' → #features, 'Privacy' → #privacy, and a compact primary 'Install' → #install. Under 720px: wordmark + button.
   Layout: Sticky top, height 68px, Graphite at 92% with backdrop blur, Line bottom border.
3. **Hero** — Two columns. Left (5 cols): eyebrow 'ONE JOB, DONE QUIETLY'; H1 'The page, minus the page.'; lead '[BRAND] [JOB] — summoned with [SHORTCUT], remembered per site, gone when you close the tab.'; CTA row: primary 'Install for your browser' → #install, secondary 'Watch it work' → #demo (scrolls to the mockup); trust row (Good checks): 'Active-tab permission only', 'No accounts', 'No telemetry'; the shortcut rendered as two mono key chips. Right (7 cols): the BrowserMock with step dots and the caption 'A scripted demo — your pages are your business.'
   Layout: Graphite background, 120px top padding; mockup fills its column, max-width 880px.
4. **How it works** — Section id='how'. Eyebrow 'HOW IT WORKS'; H2 'Three steps, no ceremony.' The BrowserMock repeats here in a compact form (or the hero one anchors above; on this page the section sits directly under the hero and reuses the same demo store): three StepRows under the mockup — number (mono 01–03 in Amber), title (Inter 600 17px), line (Inter 15px Mist). The active row tracks the demo step.
   Layout: Panel-tinted background; mockup centered, steps in a 3-column row under it (1 column under 800px).
5. **Features** — Section id='features'. Eyebrow 'WHAT YOU GET'; H2 'Small tool, sharp edges.' Three FeatureCards (Panel, Line border): a drawn glyph (Lock, Command, ShieldCheck lucide icons in Amber wells), title and line from the roster.
   Layout: Graphite background; 3 columns 24px gap (1 under 860px).
6. **Privacy** — Section id='privacy' on Amber Mist tint over Panel. Eyebrow 'THE PROMISE'; H2 'Reads like a permissions screen, means it.' Four tick lines (Good checks drawn in): 'No accounts' 'nothing to sign into, nothing to lose'; 'No telemetry' 'the only network is the page you asked for'; 'Tab-scoped' 'it touches the tab you summon it in, never your history'; 'Open source' 'the whole thing is [BRAND_SLUG] on the forge (sample link)' with an inert '#' link. Caption: 'Sample privacy copy for a fictional extension.'
   Layout: Two columns: heading left (4 cols), lines right (7 cols, offset 1) as hairline-divided rows.
7. **Reviews** — Section id='reviews'. Eyebrow 'THREE HUMANS'; H2 'Short sentences, real-seeming people.' Three ReviewCards: StarRow (5 amber SVG stars), quote (Newsreader 400 italic 19px), name (Inter 600 14px) over role (13px Mist).
   Layout: Graphite background; 3 columns 24px gap (1 under 860px); cards Panel with Line border.
8. **Install** — Section id='install'. Eyebrow 'GET IT'; H2 'Two buttons, zero dark patterns.' InstallButtons: primary 'Install for your browser' (lucide Download icon) — an inert anchor with the caption 'Demo: opens nothing' — and secondary 'Download the zip' (lucide Package icon) labeled downloadName. Under: a mono line 'v1.4 · 48 KB · sample version string' and the small print 'This is a template demo; the buttons are anchors, the zip is imaginary, the intent is honest.'
   Layout: Panel-tinted background; centered stack max-width 560px.
9. **FAQ and footer** — Four FaqRows (plus rotates to cross) on Panel rows. Footer: left wordmark + 'hello@' + emailDomain; right '© [BRAND]. Made in a tab, for tabs.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: FAQ single column max-width 760px on Graphite; footer 76px, Line top border.

## Assets
- image: No photographs or downloaded images: every visual is drawn in code (browser window, fake article page, popup, step glyphs, stars, favicon). Do not fetch or hotlink anything.
- image: Write ASSETS.md at the project root listing the code-drawn assets (browser mockup, fake page, popup, stars, favicon — 'drawn in code, original') and the npm packages: @fontsource-variable/newsreader, @fontsource-variable/inter, @fontsource/jetbrains-mono (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react only: ArrowDown, Check, Command, Download, Lock, MousePointerClick, Package, ShieldCheck. Stroke width 1.75, 16–24px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #E2A13C, an Ink (#191510) drawn 'quiet page' glyph (a rounded rectangle with three text lines and a small crossed-out block). No browser-vendor marks, no real extension icons.
- font: Install @fontsource-variable/newsreader, @fontsource-variable/inter and @fontsource/jetbrains-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: install buttons are inert anchors with honest captions; there is no form on this page.
- Every internal link points to a file name or anchor (./index.html, #install) — never to a bare directory; there is exactly one page.
- No browser-vendor names, logos or store badges (Chrome, Firefox, Edge, Safari, their marks); install buttons are drawn generic.
- No real extensions, their UI or their copy; the demo page inside the mockup is generic placeholder bars — never a recognizable site, never readable paragraphs, never real ads.
- No photographs and no people; every visual is code-drawn; reviewers get names only, no avatars.
- No install counts, star averages or store rankings presented as fact; reviews and the version string are invented sample content that says so.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No dates or years anywhere; the version string is clearly sample.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: the demo sits on its finished state with controls usable; no check drawing, no star fills, no spring; color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; step dots, FAQ and buttons work with keyboard only and visible focus rings.
- Keep copy workshop-plain: no 'revolutionize', no growth-hack; every string lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/browser-extension-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
