# Open Source Project Homepage

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page homepage for [BRAND], an open-source library — [WHAT] — published as the npm package '[PKG]'. It must convince a developer in one scroll: a copyable install command, a tabbed code sample (JavaScript / TypeScript) statically highlighted, six one-line features, sample counters ([STARS] stars and friends), contributors as initials avatars, a docs card, a sponsors card with drawn tiers, and a three-entry changelog teaser. One page: index.html with sections (#sample, #features, #humans, #docs, #sponsors, #changelog). Everything runs in the browser; nothing is submitted anywhere; every link off-page is a '#' placeholder the maintainer fills in.

- Audience: Developers arriving from a link in a README, a search or a thread, 22–45, evaluating in under a minute. They want the install line, a code sample that shows the API's shape, the license, and evidence a human maintains it.
- Goal: Get the install command copied. Within ten seconds a visitor sees the pitch and the command; within one minute they have seen the API, the license and the humans.
- Tone: README-confident and a little dry: short declarative sentences, real trade-offs stated plainly, no marketing adjectives, one joke about semver.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/jetbrains-mono (OFL-1.1), @fontsource/overpass (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper, wash, card, ink, slate-green, rule, term-green, term-green-deep, amber-dot) and fontFamily mono ['JetBrains Mono', 'ui-monospace', 'monospace'], sans ['Overpass', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 8px and add maxWidth { container: '1080px' }.
  - In src/fonts.ts import '@fontsource/jetbrains-mono/400.css', '@fontsource/jetbrains-mono/700.css' and '@fontsource/overpass/400.css', '@fontsource/overpass/600.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, feature, code sample line with its token classes, contributor, counter, docs mock entry, sponsor tier and changelog entry, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', pkg = [PKG], emailDomain = 'vibefather.invalid' never used — keep contact as the repo placeholder).
  - Code highlighting is hand-rolled: content.ts stores each sample as an array of lines, each line an array of { text, t } where t is one of 'kw' (keyword), 'str' (string), 'fn' (function), 'num', 'com' (comment), 'pln' (plain); a <CodeLine> maps t to the token colors under Design. No external highlighter package.
  - State: src/store/codeTab.ts is a tiny external store (useSyncExternalStore) holding { lang: 'js' | 'ts' } (not persisted). The copy buttons use navigator.clipboard with a fallback to a selected textarea.
  - Components in src/components/: Header.tsx, Footer.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, InstallStrip.tsx (with CopyButton.tsx), CodePanel.tsx (TabSwitch.tsx, CodeLine.tsx, WindowChrome.tsx), Features.tsx (FeatureCard.tsx), Counters.tsx, Humans.tsx (Avatar.tsx initials circle), DocsCard.tsx (TocMock.tsx), Sponsors.tsx (TierCard.tsx), Changelog.tsx (LogEntry.tsx), CommunityGlyphs.tsx (drawn generic chat/repo/issue glyphs — never real platform marks). src/pages/Home.tsx composes them.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FAF8F2'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — [WHAT]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB — no images.

## Variables
- [BRAND] — Project name (default: "Figleaf"). Invented library name. Used in the masthead, title, footer and the feature copy ('Figleaf never…'). Never a real package or project.
- [PKG] — Package name (default: "figleaf"). The lowercase npm-style package name, used in the install command (npm i [PKG]) and the code samples' import lines. Keep it one word, matching [BRAND].
- [WHAT] — What it is (default: "zero-dependency schema validation for configs and forms"). One lowercase phrase for the library's category. Drives the title, hero pitch, both code samples' subject and three of the six features. Keep it concrete enough to write real sample code for.
- [STARS] — Star figure (default: "8.4k"). The sample star count, formatted like '8.4k'. Shown in the counters row and the sticky header chip, always with the sample caption nearby. Keep it 1k–30k.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/open-source-project-homepage in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#FAF8F2` — Page background throughout.
- Wash `#F1EEE4` — Alternate section background (Features, Changelog), chips, hover fill.
- Card `#FFFFFF` — Code panel, docs card, sponsor cards, install strip.
- Ink `#1F2421` — Headlines, prose, table text, icon color, code plain tokens.
- Slate Green `#5D6B60` — Secondary text, captions, eyebrows, docs mock metadata.
- Rule `#E2DDD0` — 1px hairlines, card borders, code panel chrome lines, dividers.
- Term Green `#2F9E44` — The one accent: the prompt glyph, copied state, keyword tokens, counters, focus ring, avatar rings on hover.
- Term Green Deep `#237A34` — Keyword token on Card, links' hover, the 'v2' changelog dot.
- Amber Dot `#D9822B` — Quiet second color: string tokens, the changelog's minor-version dots, the sponsor tier badge.

### Typography
- Code, names, counters, install line, eyebrows (uppercase letterspaced), the wordmark: JetBrains Mono (OFL), weights 400/700
- Prose: pitch, feature lines, sponsor copy, changelog bodies: Overpass (OFL), weights 400/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1080px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 88px desktop, 68px under 1024px, 52px under 640px — docs density, not marketing air. Type scale: H1 clamp(40px, 6vw, 72px) JetBrains Mono 700, line-height 1.05, letter-spacing -0.02em; H2 clamp(26px, 3.4vw, 40px) JetBrains Mono 700; H3 18px JetBrains Mono 700; pitch Overpass 400 18px / 1.65 Ink at 90%; body Overpass 400 15.5px / 1.7 (max-width 62ch); eyebrow JetBrains Mono 400 11px uppercase letter-spacing 0.2em Slate Green; caption JetBrains Mono 400 12px Slate Green; code 13.5px / 1.7 JetBrains Mono. Buttons: height 44px, padding 0 20px, JetBrains Mono 700 13px. Primary: Ink fill, Paper text. Secondary: 1px Ink/25% border, Ink text. Focus ring everywhere: 2px Term Green outline with 3px offset.
- Radius: 8px on cards, the code panel, buttons, chips and the install strip. 999px only for the tab switch, counters' chips and avatar circles.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and tab swaps; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the changelog accordion. Terminal-snappy: quick settles, no drift.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(10px) and animate to rest over 450ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 50ms.
- Motion: Install strip: on load the prompt glyph ('$') types in, then the command fades across 200ms; the copy button's label swaps to 'copied ✓' in Term Green for 1400ms.
- Motion: Code panel tabs: the JS/TS switch slides a Term Green underline (Motion layoutId); the panel content crossfades 8px horizontally, 220ms --ease-io; the output comment lines (// → FigleafResult) type across character by character once per swap (500ms, disabled under reduced motion).
- Motion: Feature cards: hover lifts 2px and the icon's stroke re-draws (stroke-dashoffset, once per hover).
- Motion: Counters: each figure counts up once on reveal (600ms), tabular-nums; the '(sample)' caption never animates.
- Motion: Avatars: initials circles gain a 2px Term Green ring and scale 1.06 on hover with the name tooltip fading in; the strip staggers in 40ms per avatar.
- Motion: Changelog accordion: height 0 to auto, opacity 0 to 1, 240ms --ease-io; the Plus rotates 45 degrees into an X; the version dot fills Term Green when open.
- Motion: Docs card: the TOC mock's active row carries a Term Green left rule that slides between rows on a slow 6s interval loop (pausing on hover and under reduced motion) — the page feels maintained.
- Motion: Links: .link-draw grows a 1px Term Green underline over 220ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — disable typing, counters (final values), the TOC loop, staggered reveals; keep color/border hover changes. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: No photography, no stock, no external images — the code panel is the hero image. Window chrome (three dots, title bar), install prompt, avatars (initials circles), badges, sponsor tiers, TOC mock and community glyphs are all drawn in SVG/CSS. Community links use drawn generic glyphs (a repository box, a chat bubble, an issue ring) — never real platform marks. Icons: lucide-react only, stroke width 2.

## Pages & Sections
### Home (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([BRAND] = Figleaf, [PKG] = figleaf, [WHAT] = zero-dependency schema validation for configs and forms, [STARS] = 8.4k). Put every string, number, code line and list in src/content.ts and render from it. If any variable value differs, rewrite the pitch, both code samples (js and ts), all six features, the docs mock titles, the sponsor tiers and the changelog entries so they are specific and believable for the new library, keeping the same structure and counts (6 features, 4 counters, 8 contributors, 5 TOC rows, 3 tiers, 3 changelog entries). The library, API, contributors and figures are all invented; counters carry a '(sample)' caption. API facts for the samples: figleaf exports `schema`, `field`, `check`; schemas compile to plain functions; errors are arrays of { path, message, got }.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the glyph (an inline SVG leaf-in-brackets mark, Term Green) and the wordmark '[BRAND]' (JetBrains Mono 700 17px) linking to ./index.html. Center nav (JetBrains Mono 400 13px): 'Sample' → #sample, 'Features' → #features, 'Humans' → #humans, 'Docs' → #docs, 'Sponsors' → #sponsors, 'Changelog' → #changelog. Right: a chip '★ [STARS]' (drawn star glyph, not a platform mark; sample) and a small primary 'Get started' → #sample. Under 820px: glyph + wordmark + Get started only. Below the tablet breakpoint a compact menu button (lucide Menu, 44px target) opens a stacked list of the six anchors, so every section is reachable on mobile.
   Layout: Sticky top, Paper/92% with blur and a 1px Rule border, height 64px, container-aligned.
3. **Hero with install strip** — Eyebrow 'OPEN SOURCE · MIT · ZERO DEPENDENCIES'. H1: '[BRAND].' then the pitch line inside the heading block (Overpass 20px): '[WHAT] — small enough to read on a coffee break, strict enough to trust in production.' The InstallStrip on Card: a '$' prompt in Term Green, 'npm i [PKG]' in JetBrains Mono 700 16px, and the copy button; beside it two CTAs: primary 'Read the docs' → #docs and secondary '60-second tour' → #sample. Under the strip, one caption line: '4.1 kB min+gzip · ESM & CJS · Node 18+, browsers, workers'.
   Layout: Paper background, vertical padding 120px top under the header, 72px bottom. Centered column max-width 760px; InstallStrip full-width of that column at 56px height.
4. **Code sample** — Section id='sample'. The CodePanel: window chrome (three Ink dots, title '[PKG] · 60-second tour'), JS/TS tabs, then the sample — JS: import { schema, field, check } from '[PKG]' / const env = schema({ /   port: field.number.int().default(8080), /   keys: field.string.min(24), /   retries: field.number.max(5).when(check.isNaN, 0), / }) / const cfg = env.parse(process.env) // → { port: 8080, keys: '…', retries: 0 } / cfg.errors // → [] — TS: the same plus typed generics: const env = schema<{ port: number; keys: string }>({ … }) and a line // cfg: { port: number; keys: string } — inferred, not asserted. Under the panel, three quick lines with check glyphs: 'Schemas are plain functions — no classes, no DSL to learn'; 'Errors come back as data, ready to hand to a form'; 'Zero dependencies; the bundle chart is a bar and a rumor.' The code pre gets overflow-x:auto with a faded right edge; the output comment wraps onto its own line on mobile; the check-list aligns to the panel's left edge.
   Layout: Wash background section. Panel max-width 820px on Card with 1px Rule border and 8px radius, chrome bar 40px; code area Ink-on-Card 13.5px with token colors (kw Term Green Deep, str Amber Dot, fn Ink 700, num Amber Dot, com Slate Green, pln Ink). Quick lines under the panel in Overpass 15px with drawn checks.
5. **Features** — Section id='features'. Eyebrow 'WHY [BRAND].toUpperCase()' and H2 'Six features, no asterisks.' Cards: 1) Zap — 'Fast by not being clever' — 'A compiled schema is one function; 1M parses of a 12-field config run in under 90ms on a laptop from 2019.' 2) ShieldCheck — 'Strict by default' — 'Unknown keys fail. Opt into sloppiness explicitly with .loose() — the door is labeled.' 3) Braces — 'Typed at the edges' — 'The TS side infers the output type from the schema; your config object arrives already knowing itself.' 4) FileJson — 'Errors as data' — 'Every failure is { path, message, got } — serialize it, log it, or render it next to the input it belongs to.' 5) Leaf — 'Tree-shakeable' — 'Import field.string and that is what ships; the whole library visits your bundle as 4.1 kB.' 6) GitBranch — 'Stable core, semver kept' — 'Two majors in four years, both announced with migration notes and a codemod, not a blog post.'
   Layout: Paper background. 3x2 grid 20px gap; cards on Wash 1px Rule border 20px padding; icon 22px Term Green; title JetBrains Mono 700 15px; line Overpass 14.5px / 1.6. Under 860px: 2 columns; under 640px: one.
6. **Counters** — A hairline-bounded band: '★ [STARS]' / 'stars (sample)'; '210k' / 'weekly downloads (sample)'; '38' / 'contributors'; '4.1 kB' / 'minified + gzip'. Figures JetBrains Mono 700 28px Ink with Term Green check-dots; captions mono 11px Slate Green.
   Layout: Full-width band with 1px Rule top/bottom, vertical padding 28px, four equal cells with vertical hairline dividers; wraps 2x2 on mobile.
7. **Humans** — Section id='humans'. Eyebrow 'MAINTAINED BY HUMANS' and H2 'The people behind the leaf.' Eight Avatar initials circles: 'AN' Anya Nilsson — 'creator, breaks it'; 'JT' Jordan Tapp — 'types, fixes them'; 'MC' Mei Chen — 'docs maven'; 'RS' Ravi Shah — 'perf; owns the 90ms'; 'LB' Lina Bakken — 'forms integration'; 'DO' Daniel Osei — 'release automation'; 'PV' Petra Voss — 'codemods'; 'KM' Kaito Mori — 'benchmarks'. Hover or focus shows the name and one-liner. Below the strip: a drawn good-first-issue card: 'Good first issues: 6 open — the docs one is genuinely fun.' linking '#' (placeholder).
   Layout: Wash background. Avatars in a centered wrapping row of 56px circles (Wash fill, Ink initials, Rule border; hover ring Term Green); names JetBrains Mono 12px in a tooltip; the issues card max-width 560px centered.
8. **Docs and sponsors** — Two cards side by side. DocsCard (id='docs'): H3 'Docs', one line 'Everything fits in one read at the dentist', the TocMock — five rows with active sliding rule: 'Getting started', 'Field types', 'Errors as data', 'Forms integration', 'Recipes: env, CLI flags, fetch bodies'; a secondary 'Open the docs' → '#' placeholder. Sponsors (id='sponsors'): H3 'Sponsors', the line 'Server bills and coffee, in that order.' Three TierCards drawn: 'Leaf' $2/mo — 'name in the README'; 'Branch' $10/mo — 'name + early betas'; 'Canopy' $50/mo — 'logo here, priority issues'. Each with a generic drawn heart glyph and '#' links. Under 1024px the two-column grid collapses to single column with minmax(0,1fr) and min-width:0 on cards; box-sizing:border-box; nothing clips; TOC minutes never truncate.
   Layout: Paper background. DocsCard 6 cols, Sponsors 6 cols, both Card 1px Rule border 28px padding; tiers stack inside with hairline dividers. Under 860px: stacked.
9. **Changelog** — Section id='changelog'. Eyebrow 'CHANGELOG' and H2 'Recent versions.' Accordion of three: 'v2.4.0' (Amber dot) — 'Minor: .when() guards on fields; errors now carry `got` so forms can explain themselves. Migration: none — that''s the point.'; 'v2.3.1' (Term Green dot) — 'Patch: TS 5.6 inference fix; the type now survives an intermediate variable. Benchmarks unchanged, bragging unchanged.'; 'v2.3.0' (Amber dot) — 'Minor: .loose() for legacy configs; documented the one footgun we could not remove.' A closing line: 'Older entries live in CHANGELOG.md — semver, dates optional, drama absent.' The newest entry opens by default; every version line carries a one-line summary beside it (no dates - relative words like 'latest' are fine); the newest dot is filled green and minors are amber, so the Terminal green reads.
   Layout: Wash background. Rows on Card 1px Rule border; version JetBrains Mono 700 14px with its dot; body Overpass 15px / 1.7 max-width 66ch; Plus icon right. Container max-width 720px.
10. **Footer** — A Paper band with a 1px Rule top border: left, the glyph + '[BRAND] — MIT license. Copy it, break it, ship it.'; center, CommunityGlyphs with labels: 'Repository' → '#', 'Issues' → '#', 'Chat' → '#' (drawn generic glyphs, never platform marks); right, '★ [STARS] (sample) · Made by humans, maintained between releases.' Bottom line mono 11px: '© The [BRAND] contributors. Sample figures throughout.'
   Layout: Vertical padding 48px, three-part row; bottom line 24px below a hairline; stacked under 640px.

## Assets
- icon: lucide-react only: Zap, ShieldCheck, Braces, FileJson, Leaf, GitBranch, Copy, Check, Plus, X, ArrowRight, Heart. Stroke width 2, 16–24px, color inherits. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 rect rx 7 filled #FAF8F2 with a 1px #1F2421 border, a Term Green (#2F9E44) leaf glyph inside square brackets. No other logo: the project name is always set as type.
- image: Drawn in code only — no photos, no stock, no external images. The code panel's window chrome, the install prompt, hand-rolled token highlighting (stored as per-token classes in content.ts), avatars as initials circles, sponsor tier badges, the TOC mock, community glyphs (repository box, chat bubble, issue ring — never real platform marks) and the favicon are SVG/CSS. Write ASSETS.md listing lucide-react (ISC), @fontsource/jetbrains-mono and @fontsource/overpass (OFL-1.1), noting 'No image assets; all visuals drawn in code.'
- font: Install @fontsource/jetbrains-mono and @fontsource/overpass and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the tab switch, copy buttons and accordion are pure client state; every off-page link is a '#' placeholder.
- All links on this single page are anchors (./index.html#sample, #features, #humans, #docs, #sponsors, #changelog) plus '#' placeholders.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics, no external code highlighter.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No real libraries, packages, platforms or their marks (no repository-host logos, no npm mark, no chat-platform icons); community glyphs are drawn generic geometry; counters are sample figures with a caption.
- No dates or years anywhere: the changelog carries semver only, release notes say 'migration: none', and the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion everywhere: disable typing, counters, the TOC loop and staggers; keep color/border hover changes.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; tabs, copy buttons, accordion and avatars work with keyboard only, and every interactive element has a visible focus ring.
- Keep copy concrete: no lorem, no marketing adjectives; every figure, version verb and API name lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/open-source-project-homepage · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
