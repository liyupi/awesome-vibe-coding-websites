# Product Changelog Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page changelog for [PRODUCT], [SUMMARY]: nine versioned entries on a hairline timeline, type filters with live counts, copyable version anchors, a subscribe panel (client-side only) and a feed chip. One page, index.html; everything runs in the browser.

- Audience: Existing users skimming 'what changed' after an update badge, and evaluators reading release cadence as a trust signal. Both want specifics, not marketing.
- Goal: Answer 'what's new' in fifteen seconds and earn a subscribe. Within one scroll a visitor has read three entry titles; within two they've filtered to fixes or copied a version link.
- Tone: Release-notes voice: specific, modest, occasionally funny about bugs. Every entry says what changed and why it matters in one line.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/dm-serif-display (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors), then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (warmwhite, panel, line, ink, softink, violet, violet-deep, violet-mist, feature, fix, breaking, improvement, good) and fontFamily display ['DM Serif Display', 'Georgia', 'serif'], sans ['Inter Variable', 'system-ui', 'sans-serif'], mono ['JetBrains Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 8px and add maxWidth { read: '760px' }.
  - In src/fonts.ts import '@fontsource/dm-serif-display/400.css', '@fontsource-variable/inter' and '@fontsource/jetbrains-mono/400.css' plus '500.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (product, summary, nine entries — { version, title, types: ('feature'|'improvement'|'fix'|'breaking')[], standfirst, changes: string[], note?: string }, subscribe copy, every string, typed), src/lib/brand.ts (productSlug = [PRODUCT] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = productSlug without hyphens + '.com', feedUrl = './feed.xml' (a demo path, never fetched)), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, key productSlug + ':sub'), src/lib/anchors.ts (versionToAnchor('2.4.1') → 'v2-4-1').
  - State: src/store/filter.ts is a tiny external store (useSyncExternalStore) holding the set of active type filters (empty = all); src/store/sub.ts holds { email, saved } persisted to localStorage.
  - Components in src/components/: SlimHeader.tsx (Wordmark.tsx, NewChip.tsx), FilterBar.tsx (TypeChip.tsx with counts), Timeline.tsx (EntryBlock.tsx: VersionChip.tsx, EntryTitle.tsx, TagRow.tsx, ChangeList.tsx, AnchorLink.tsx, NoteLine.tsx), SubscribePanel.tsx, FeedChip.tsx, Footer.tsx. src/pages/Changelog.tsx composes them.
  - AnchorLink: a Link2 icon appearing on entry hover/focus within the title row; clicking copies the full anchor URL (location.origin-safe: './index.html#v2-4-1') to the clipboard with a 1.2s Check swap; the entry carries id={anchor} with scroll-margin-top for the sticky header.
  - Filtering: entries whose types intersect the active set stay full; others dim to 22% opacity and sink 2px (180ms) — they keep their place (no reflow); the count line updates 'Showing 9 of 9' → 'Showing 3 of 9'; a Clear chip appears when filters are active. TypeChip counts always show true totals (not filtered totals).
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBFAF7'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[PRODUCT] — changelog</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 3 MB.

## Variables
- [PRODUCT] — Product name (default: "Traybike"). The invented product's name, one word. Used in the wordmark, title, footer and email (notes@ + productSlug without hyphens + '.com'). Never a real product.
- [SUMMARY] — What it is (default: "a tray-based task app for people who close tabs too fast"). One lowercase phrase naming the product. Rewrites the header blurb, entry copy and the subscribe line so the log reads true. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/product-changelog-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm White `#FBFAF7` — Page background throughout.
- Panel `#FFFFFF` — Subscribe panel, chips on hover.
- Line `#E5E1D8` — 1px hairlines: the timeline rail, card borders, dividers.
- Ink `#1F211C` — Headlines, body, icons.
- Soft Ink `#5F6258` — Standfirsts, counts, captions, notes.
- Violet `#6D5BD0` — The one accent: version chips' border and text, anchors, links, primary buttons, focus ring, active filter fill.
- Violet Deep `#54469F` — Hover and pressed states.
- Violet Mist `#EDEAF9` — Active chip fills, tag chips, entry hover tint.
- Feature `#2F7D5B` — The 'feature' tag chip color.
- Improvement `#3E6B9E` — The 'improvement' tag chip color.
- Fix `#B0812A` — The 'fix' tag chip color.
- Breaking `#B4443C` — The 'breaking' tag chip color — used sparingly and never alone (tag carries text).
- Good `#3E7A52` — Subscribe success, copied check.

### Typography
- Display: page title, entry titles — DM Serif Display, notes-with-personality serif: DM Serif Display (OFL), weights 400
- Text and UI: standfirsts, changes, chips, buttons — Inter: Inter (OFL), weights 400/500/600
- Mono: version chips, anchor ids, the feed chip, shortcut notes: JetBrains Mono (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Reading column max-width 760px centered, 32px side padding (20px under 640px). The timeline: a 1px Line rail on the left at 12px with entry dots; entries stack with 56px between; each entry is open (no card boxes) — hairlines only. Type scale: page title 34px DM Serif; entry titles 22px DM Serif; standfirst 15.5px Inter 400 / 1.6 Soft Ink; changes 15px / 1.65 Ink as a bullet list with 6px gaps; version chips mono 13px with 1px Violet border on Panel; tags 11px uppercase 600 letter-spacing 0.08em on their colors at 12% tint; counts 13px mono Soft Ink. Buttons: height 44px, Inter 600 13.5px; primary Violet fill with white text. Input: height 44px, Panel fill, 1px Line border, focus Violet border + 2px offset ring. Focus everywhere: 2px Violet outline, 3px offset.
- Radius: 8px on chips, buttons, input, panels; 999px for version chips and the feed chip.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Paper-quiet: nothing over 240ms except entries' first reveal.
- Motion: Entries reveal: each block rises 8px over 400ms as it enters (Motion whileInView, once); the rail draws from top on first view (scaleY 0→1, 600ms).
- Motion: Filtering: dim/sink 180ms as described; TypeChip fills crossfade 140ms; the count line crossfades 160ms.
- Motion: AnchorLink: the icon fades in 140ms on entry hover/focus; the copy→check swap pops 120ms scale.
- Motion: Breaking-tag entries: their dot on the rail gets a one-time 4px pulse when first revealed (off under reduced motion).
- Motion: Subscribe: crossfade to the Good line 240ms; validation line fades 160ms.
- Motion: Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no reveals, no rail draw, no pulse; filters dim instantly (opacity only); everything at rest and usable. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: No photographs or illustrations: the page is typography, chips and hairlines; dots, tags and the favicon are drawn in code. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Changelog (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([PRODUCT] = Traybike, [SUMMARY] = a tray-based task app for people who close tabs too fast). Put every string and all nine entries in src/content.ts and render from it. If any variable differs, rewrite the blurb, the entries and the subscribe line so the log fits that product, keeping the counts (9 entries; types across feature/improvement/fix/breaking; at least one breaking entry with a migration note). Entries (version · title · types · standfirst · changes · note): '2.4.1' 'The tray stops flickering' [fix] 'a redraw bug that only appeared on Wednesdays (kidding — on refresh)' — changes: 'Fixed the tray flicker when a tab closes mid-drag'; 'Removed a console log we shipped by accident (it said hi)'. '2.4.0' 'Trays in trays' [feature] 'sub-trays, for the organizers among us' — 'New: nest one tray inside another (up to three deep)'; 'Long-press a tray header to fold it'; note: 'Shortcut: hold Shift while dropping to auto-nest'. '2.3.2' 'Faster cold start' [improvement] 'opens before your coffee does' — 'Cold start down to 380ms from 1.2s (sample figure)'; 'Trimmed two dependencies that were mostly README'. '2.3.0' 'Search everything' [feature, improvement] 'one box, every tray' — 'New: Ctrl+K searches titles, notes and closed trays'; 'Results preview the tray path'. '2.2.4' 'The great undo' [fix] 'undo now undoes, reliably' — 'Fixed undo skipping drags in rare cases'; 'Undo history doubled'. '2.2.0' 'Dark mode, properly' [feature] 'not just inverted, actually tuned' — 'New theme follows the system'; 'Contrast passes everywhere we could measure'. '2.1.3' 'Sync conflict dance' [fix] 'two devices, one tray, zero lost tabs' — 'Conflicts now merge instead of last-write-wins'; note: 'If you hit a conflict before this version, the log entry above explains the recovery'. '2.1.0' 'Tray sharing' [feature] 'send a tray, not a mess' — 'Share a read-only tray link'; 'Recipients see live changes'. '2.0.0' 'Everything moves' [breaking] 'the 2.0 you asked for' — 'Trays replaced lists as the core object'; 'Keyboard shortcuts remapped (see the guide)'; note: 'Migration: the in-app wizard walks old lists over — takes about a minute'. Subscribe line: 'Get each release in your inbox — an email per version, nothing else.'
   Layout: n/a
   Motion: n/a
2. **Slim header** — Left: the wordmark '[PRODUCT]' (DM Serif 22px) over 'CHANGELOG · [SUMMARY]' (10.5px uppercase Soft Ink, truncated to one line). Right: NewChip — the newest version in a mono Violet-border pill 'v2.4.1' — and a compact primary 'Subscribe' → #subscribe.
   Layout: Sticky top, 60px, Warm White at 95% with backdrop blur, Line bottom border.
3. **Intro and filter bar** — Under the header: the page title 'What's new in [PRODUCT]' (34px DM Serif) and one standfirst line 'Nine releases, newest first — version numbers only, no dates to pretend about.' The FilterBar: four TypeChips (Feature 4 · Improvement 3 · Fix 3 · Breaking 1 — counts mono 12px), multi-select toggles; the live count line 'Showing 9 of 9'; a Clear chip when active.
   Layout: Reading column; the bar sits 24px under the standfirst, not sticky.
4. **Timeline entries** — Nine EntryBlocks on the rail: a Line dot (Violet fill for the newest; Breaking entries' dots in Breaking color), the VersionChip + tag row + AnchorLink on the first line, the title, the standfirst, the ChangeList (bulleted, 6px gaps), and any NoteLine set apart with a 1px Violet left rule (mono hints read like commit footnotes). Entries never show dates; ordering is version-descending.
   Layout: Rail at left 12px; entries indent 32px; 56px between entries.
5. **Subscribe, feed and footer** — Section id='subscribe': SubscribePanel (Panel, Line border, Violet 1px top rail): heading 'One email per release'; the honest body 'Sample form — this demo saves your address in this browser only; a real changelog would mail from notes@' + emailDomain; input + primary 'Subscribe'; success: the Good line 'Subscribed (in this browser). Silence until 2.5.0.' Beside it FeedChip: a drawn Rss icon + 'feed.xml' mono label, an inert anchor titled 'Demo feed link (sample)'. Footer: left wordmark + 'notes@' + emailDomain; right '© [PRODUCT]. Sample changelog; every version above is invented.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: Subscribe and feed share one row (panel grows, chip sits beside; stacked under 640px); footer 72px, Line top border.

## Assets
- image: No images at all: dots, chips, tags and the favicon are drawn in code. Do not fetch or hotlink anything.
- image: Write ASSETS.md at the project root listing the code-drawn assets (rail, dots, version/tag chips, feed chip, favicon — 'drawn in code, original') and the npm packages: @fontsource/dm-serif-display, @fontsource-variable/inter, @fontsource/jetbrains-mono (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react only: Check, Link2, Rss, Sparkles, Wrench (unused ok), Zap. Stroke width 1.75, 14–18px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #1F211C, a mono-style 'v' glyph in #6D5BD0 with a small dot (like a version chip). No brand logos.
- font: Install @fontsource/dm-serif-display, @fontsource-variable/inter and @fontsource/jetbrains-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: subscribe saves in localStorage only and the copy says so; the feed chip is an inert demo anchor and feed.xml is never generated or fetched.
- Every internal link points to the page or an anchor (./index.html, #subscribe, ./index.html#v2-4-0) — never to a bare directory; there is exactly one page.
- No real products, version histories or release-note copy; the product, versions and changes are invented sample content with ordinary specifics.
- No dates or timestamps anywhere: entries order by version only; no 'released yesterday', no years — the standfirst's 'no dates' joke stays.
- No images, photos or logos; everything is code-drawn.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 3 MB.
- Never mention VibeFather inside the page except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no reveals, no pulse; filters dim by opacity only.
- The page must work at 1440x900 desktop and 390x844 mobile (the rail indents collapse gracefully, chips wrap) with zero console errors; filters, anchors, copy buttons, subscribe and chips work with keyboard only and visible focus rings.
- Accessibility: filtered-out entries stay in the accessibility tree at their dimmed state but links inside them remain focusable — instead, set them aria-hidden and inert so keyboard order matches the visual story; tag colors always pair with text labels.

---
— Prompt by VibeFather · https://vibefather.ai/t/product-changelog-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
