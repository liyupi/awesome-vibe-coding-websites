# Coming Soon Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-screen coming-soon page for [BRAND], arriving to deliver [PROMISE]. A drifting aurora background, a live countdown to [DATE], an email capture (client-side only), a three-feature teaser and a micro-footer. One page, index.html; everything runs in the browser.

- Audience: A curious visitor who landed from one link and will give you eight seconds: they want to know what's coming, when, and whether leaving an email costs anything (it doesn't).
- Goal: Email capture. Within five seconds the visitor sees the promise and the countdown; within twenty they've typed an email or closed the tab.
- Tone: Quiet confidence: one promise, no exclamation marks, zero 'revolutionary'.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/sora (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors), then keep one real HTML page: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (night, panel, line, bone, mist, apricot, apricot-deep, apricot-mist, slateink, good) and fontFamily display ['Sora Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 10px and add maxWidth { shell: '720px' }.
  - In src/fonts.ts import '@fontsource-variable/sora' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from the entry file.
  - The aurora background lives in CSS only (index.css): three absolutely-positioned radial-gradient layers (Apricot Mist, a deep blue #1B2547, and a violet #2A2350 tint) at 40–60% opacity, each animating translate/scale over 26–40s alternate-infinite with different durations; plus an SVG-noise grain overlay (inline data-URI feTurbulence at 4% opacity, defined once in index.css). Under prefers-reduced-motion the keyframes pause (animation-play-state: paused) — the gradient still renders, static.
  - File layout: src/content.ts (brand, promise line, three features, countdown labels, every string, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, key brandSlug + ':waitlist'), src/lib/countdown.ts (parse [DATE] with new Date; timeLeft(target) → { days, hours, minutes, seconds, done }).
  - State: src/store/waitlist.ts is a tiny external store (useSyncExternalStore) holding { email, saved } persisted to localStorage; a clock hook ticks every second (the tick is information — it continues under reduced motion without animations).
  - Components in src/components/: Aurora.tsx (the three CSS layers + grain), BrandMark.tsx (a drawn glyph + the wordmark), Countdown.tsx (CountCell.tsx), EmailCapture.tsx (Field states inline), FeatureRow.tsx (FeatureChip.tsx), MicroFooter.tsx (SocialChip.tsx), Toast.tsx. src/pages/Soon.tsx composes them.
  - Countdown: four CountCells (DAYS / HOURS / MINUTES / SECONDS) with Sora 700 tabular 40px digits over 11px uppercase Mist labels; digits swap without animation (width held by tabular figures); when done, the whole row crossfades to 'We're live — check your inbox first.'
  - EmailCapture: one input (height 52px, Night fill, 1px Line border, focus Apricot ring) + primary 'Notify me'; validation inline (a Mist line 'That email looks unfinished' under the field on invalid, no red sirens); on success the pair crossfades to the Good line 'Saved in this browser — the demo sends nothing. Real launch notes come from hello@' + emailDomain.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#0B1023'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[BRAND] — coming soon</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 2 MB.

## Variables
- [BRAND] — Brand name (default: "Ferrywheel"). The invented product's name, one word. Used in the mark, title, footer and email (hello@ + brandSlug without hyphens + '.com'). Never a real product.
- [PROMISE] — Promise line (default: "handoff notes that write themselves while you ship"). One lowercase phrase naming what's coming. Rewrites the H1's second line and the feature chips. Keep it concrete and unhyped.
- [DATE] — Launch date (default: "January 14, 2027"). The full future date the countdown runs to, written like 'January 14, 2027'. Keep it in the future so the demo counts down; the date itself is never printed on the page.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/coming-soon-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Night `#0B1023` — Page ground — deep indigo.
- Panel `#131A36` — Input fill, chip fills, toast.
- Line `#28305A` — 1px borders: input, chips, dividers.
- Bone `#EFF1F6` — Primary text, digits, wordmark.
- Mist `#98A0BC` — Labels, hints, validation lines, micro-footer.
- Apricot `#E8A26B` — The one warm accent: primary button, focus ring, the brand glyph, aurora's warm layer, selected states.
- Apricot Deep `#C9844F` — Hover/pressed primary.
- Apricot Mist `#3A2E33` — Aurora warm layer base, chip tint.
- Slate Ink `#1A1006` — Text on apricot fills.
- Good `#69C08C` — Saved-state line, done check.

### Typography
- Display: H1, countdown digits, wordmark — Sora: Sora (OFL), weights 600/700
- Text and UI: promise, features, footer — Inter; tabular numerals in the countdown: Inter (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. One centered column, max-width 720px, 24px side padding; the screen is a single 100dvh flex column: mark (top 12vh), promise + countdown + capture (center), features and micro-footer (bottom). Type scale: H1 clamp(34px, 5vw, 56px) Sora 700 line-height 1.08; promise 17px Inter 400 / 1.6 Mist at 92% max-width 46ch; countdown digits 40px Sora 700 tabular with 11px labels; feature chips 14px Inter 500; footer 12.5px. Buttons: height 52px, Inter 600 14px; primary Apricot fill with Slate Ink text. Input: height 52px, Night→Panel fill, focus Apricot border + 2px offset ring. Focus everywhere: 2px Apricot outline, 3px offset.
- Radius: 10px on input, buttons and toasts; 999px for feature and social chips.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Night-launch slow: nothing under 500ms except hover states.
- Motion: Aurora: three layers drift on 26–40s alternate-infinite keyframes (translate ±4%, scale 1→1.06), staggered so they never sync; the grain overlay is static.
- Motion: Entrance: the mark fades 400ms; the promise rises 10px 600ms; the countdown fades 600ms delayed 150ms; features stagger 80ms; the footer fades last.
- Motion: Countdown: digits swap instantly (information); once per minute the seconds cell's label pulses 4% opacity — removed entirely under reduced motion.
- Motion: EmailCapture: the input's focus ring eases 160ms; the saved-state crossfade is 260ms; the primary button's hover deepens to Apricot Deep 160ms.
- Motion: Done state: when the countdown reaches zero, the row crossfades to the launch line (300ms) and the aurora's warm layer brightens one step (a class swap, 600ms).
- Motion: prefers-reduced-motion: reduce — aurora paused (static gradients), no entrances (content at rest), no pulse; the countdown keeps ticking; color hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: No photographs and no images: the aurora is layered CSS gradients plus one inline SVG-noise grain; the brand glyph, chips and favicon are drawn in code. Social chips use lucide icons drawn generic (AtSign, Globe, Mail) — never platform logos. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Coming soon (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([BRAND] = Ferrywheel, [PROMISE] = handoff notes that write themselves while you ship, [DATE] = January 14, 2027). Put every string in src/content.ts and render from it. If any variable differs, rewrite the promise, the three feature chips and the footer line so they fit that product, keeping the counts (3 features, 3 social chips). Feature chips: 'Writes while you work' (PenLine) — 'captures decisions as they happen'; 'Reads like you wrote it' (BookOpen) — 'in your tone, not a template's'; 'Never a blank page' (Sparkles) — 'drafts wait pre-filled, you edit'. Footer line: 'hello@' + emailDomain + ' · quietly building'. Social chips: AtSign 'Mastodon-ish', Globe 'Website-ish', Mail 'Email' — each an inert '#' anchor with the title 'Demo link (sample)'. All counts, links and claims stay sample-honest.
   Layout: n/a
   Motion: n/a
2. **Mark and promise** — The BrandMark: a 36px drawn glyph (a ferris-wheel circle of six dots with one Apricot cab — inline SVG) beside the wordmark '[BRAND]' (Sora 700 20px). Below, the H1: 'Almost there.' with the promise as the second line in Mist ('[PROMISE]' set at 60% size, Inter 400).
   Layout: Centered; mark at 12vh; H1 max-width 20ch.
3. **Countdown and capture** — The Countdown row (four cells, 2px Line separators between, not boxes). Under it, one quiet line 'Launching soon — no newsletter, one email, then silence' (12.5px Mist). The EmailCapture below: input placeholder 'you@somewhere.com' + primary 'Notify me'; the small print line 'Sample form: saved in this browser only.' sits under, always visible; success swaps to the Good line per Setup.
   Layout: Centered column, gap 20px; the capture row max-width 420px.
4. **Feature teaser and micro-footer** — FeatureRow: three FeatureChips in one row (wrap to column under 560px): icon on a Panel well + label (Inter 500 14px Bone) + one-line promise (12.5px Mist). MicroFooter: a hairline Line top border, 20px tall: left the social chips; right '© [BRAND]' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: Features row 24px gap; footer pinned to the bottom with 24px padding.

## Assets
- image: No images at all: the aurora is CSS gradients plus one inline SVG-noise data-URI overlay defined in index.css; the glyph, chips and favicon are drawn in code. Do not fetch or hotlink anything.
- image: Write ASSETS.md at the project root listing the code-drawn assets (aurora layers, grain overlay, brand glyph, social chips, favicon — 'drawn in code, original') and the npm packages: @fontsource-variable/sora and @fontsource-variable/inter (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react only: AtSign, BookOpen, Globe, Mail, PenLine, Sparkles. Stroke width 1.75, 14–18px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #0B1023, a ferris-wheel glyph (Bone circle outline with six dots, one Apricot cab). No platform or brand logos.
- font: Install @fontsource-variable/sora and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API, no analytics, no cookies: the capture saves in localStorage only and says so; social chips are inert demo anchors.
- Every internal link is the page itself (./index.html) — never to a bare directory; there is exactly one page.
- No real product names, platform logos or social marks; the brand, glyph and chips are invented and drawn generic.
- No fake urgency or launch-date claims beyond the countdown itself; [DATE] is an invented future default and the date is never printed; no years anywhere.
- No photographs, illustrations or third-party assets; the background is CSS only and self-contained.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 2 MB.
- Never mention VibeFather inside the page except the micro-footer credit link.
- Respect prefers-reduced-motion: aurora paused, no entrances, no pulse; the countdown keeps ticking and the capture stays fully usable.
- The page must work at 1440x900 desktop and 390x844 mobile (column wraps, countdown cells pair 2x2 if needed) with zero console errors; the input, button and chips work with keyboard only and visible focus rings.

---
— Prompt by VibeFather · https://vibefather.ai/t/coming-soon-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
