# Link in Bio Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page, mobile-first link-in-bio page for [CREATOR] — '[TAGLINE]', a creator making content about [NICHE]. It must be thumb-first: a ringed monogram avatar, one-line bio, four big link buttons (all '#' placeholders), a latest-video card, two product mini-cards, a drawn-generic socials row, and an email capture that validates inline and saves in the browser only. One page: index.html. Everything runs in the browser; nothing is submitted anywhere.

- Audience: Phone visitors arriving from a social profile bio at 11pm: 80% mobile, deciding in seconds. They want the newest video, the shop, and maybe the newsletter — big targets, no hunting.
- Goal: Move thumbs to the two or three things that matter: watch, shop, subscribe. Everything above the fold on a 390×844 screen.
- Tone: The creator's own voice: warm, short, a little playful. Link titles are verbs or treats ('Watch the glaze fail'), never menu labels.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/baloo-2 (OFL-1.1), @fontsource-variable/figtree (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (cream, sand, card, charcoal, ash, coral, coral-deep, coral-mist, sage, rule) and fontFamily display ['Baloo 2', 'Georgia', 'serif'], sans ['Figtree Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 18px — this page is friendly — and add maxWidth { phone: '420px' }.
  - In src/fonts.ts import '@fontsource/baloo-2/500.css', '@fontsource/baloo-2/700.css' and '@fontsource-variable/figtree'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, link, product, video title/duration, social label and the email copy, typed), src/lib/brand.ts (creatorSlug = [CREATOR] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = creatorSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with creatorSlug + ':').
  - State: src/store/email.ts is a tiny external store (useSyncExternalStore) holding { email, done } persisted to localStorage key creatorSlug + ':email'; submitting with a valid address flips done and renders the inline success line; 'Use a different address' resets.
  - Components in src/components/: AvatarRing.tsx (portrait circle with coral ring, presence dot; monogram circle only as the image's loading fallback), BioBlock.tsx, LinkButton.tsx (icon, title, subtitle, arrow), VideoCard.tsx (poster, play badge, duration), ProductMini.tsx, SocialRow.tsx (drawn generic glyphs), EmailCapture.tsx, FooterLine.tsx, Reveal.tsx (Motion whileInView, gentle). src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FAF5EC'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[CREATOR] — links, shop and letters</title>, viewport meta with viewport-fit=cover.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the four images. Keep it under 5 MB.

## Variables
- [CREATOR] — Creator name (default: "Hearth & Hallow"). The invented creator handle/brand. Used in the title, name block, monogram, footer, email (hello@ + creatorSlug without hyphens + .com) and localStorage keys. Never a real creator.
- [TAGLINE] — One-line bio (default: "Small-batch ceramics, big-batch calm"). The single bio line under the name — what the creator makes, with personality. Drives the tagline block and the email capture's pitch.
- [NICHE] — Niche (default: "slow pottery and studio life"). What the content is about, one lowercase phrase. Drives the video card's title, product names and two link subtitles. Keep it concrete.
- [SHOP_HINT] — Shop hint (default: "the mug shop"). How the shop is referred to in copy ('the mug shop', 'the starter shop'). Used in the shop link button and one product caption.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/link-in-bio-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Cream `#FAF5EC` — Page background throughout.
- Sand `#F1E8D9` — Link button fill, card wells, chips.
- Card `#FFFDF8` — Video and product cards, email panel.
- Charcoal `#33302B` — Headlines, link titles, body text, icon color.
- Ash `#7A756B` — Secondary text, subtitles, captions, placeholder text.
- Coral `#E2725B` — The one accent: avatar ring, presence dot, primary button, play badge, prices, focus ring, link arrows.
- Coral Deep `#C55B45` — Button pressed state, arrow hover, email success tick.
- Coral Mist `#FBE9E2` — Email success panel fill, selected/pressed button tint.
- Sage `#7C8B6F` — Quiet second color: the presence dot's alternative, small availability note, footer dot.
- Rule `#E5DCCB` — 1px hairlines, card borders, input borders.

### Typography
- Display: the creator name, link button titles, prices, the email heading: Baloo 2 (OFL), weights 500/700
- Text and UI: bio, subtitles, captions, buttons, email copy: Figtree (OFL), weights 400/600

### Layout & motion
- Spacing: 4px base, thumb-first. The page is one 420px column (max-width phone) centered on desktop with the cream backdrop continuing. Side padding 20px; block gaps 16px; section gaps 32px. Link buttons: 60px tall, full-width, 18px radius, icon 22px left, title Baloo 2 700 16px + subtitle Figtree 400 12.5px stacked, arrow 18px right. Avatar 88px with a 3px coral ring and 12px presence dot. Video card: 16:9 poster, 18px radius. Product minis: 64px image, name and price in a row, 56px tall. Email input 50px, button 50px. Type scale: name Baloo 2 700 26px; bio 15px Ash; section labels (none — this page has no labels, only blocks); captions 12.5px. Focus ring everywhere: 2px Coral outline with 3px offset — visible on every tappable thing.
- Radius: 18px on buttons, cards and the email panel; 999px on avatar, presence dot, chips, play badge and social glyphs.
- Motion: Easing: --ease-out cubic-beta(0.22, 0.61, 0.36, 1) — that is cubic-bezier(0.22,0.61,0.36,1); --ease-io cubic-bezier(0.65, 0, 0.35, 1). Friendly and quick.
- Motion: Load: the blocks reveal in order (avatar → bio → links → video → products → socials → email) with 60ms stagger, each a 10px rise + fade over 450ms --ease-out. On desktop the column also settles from scale 0.98.
- Motion: Link buttons: press scales to 0.97 with a 60ms snap-back (whileTap); hover on desktop lifts 2px and nudges the arrow right; the icon wobbles once on hover (rotate ±4deg, 300ms).
- Motion: Avatar: the coral ring draws once on load (stroke-dashoffset, 800ms); the presence dot pulses gently (scale 1→1.25, 2000ms loop, off under reduced motion) with the caption 'shipping week — studio open'.
- Motion: Video card: the play badge pulses subtly (scale 1→1.08, 2400ms loop); tapping it (href '#') shows a small inline note under the card for 2s: 'The real page opens the video — this demo rests.'
- Motion: Email capture: invalid shake 4px once with the inline hint 'That address looks shy of a dot'; success swaps the form for the Coral Mist panel (220ms fade) with a drawn tick scaling in.
- Motion: Social glyphs: hover lifts 3px and rotates -6deg, once each, 200ms; they are buttons with aria-labels.
- Motion: prefers-reduced-motion: reduce — no loops (ring draws fully, dot static), no stagger (all blocks appear), presses change color only. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Warm, soft photography for the four content images — studio, hands-off craft and product stills in one palette (cream, clay, sage). No people, no faces, no hands anywhere; no readable text or logos. The avatar is the AI-generated creator portrait (a warm working shot: apron, clay-dusted hands cradling a bowl, genuine smile — a fictional person) in the coral ring; the drawn monogram remains only as its loading fallback. Socials are drawn generic glyphs (a camera ring, a wave, a bird-silhouette-free abstract note, an envelope) — never real platform marks. Icons for link buttons: lucide-react, stroke width 2.

## Pages & Sections
### Links (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([CREATOR] = Hearth & Hallow, [TAGLINE] = Small-batch ceramics, big-batch calm, [NICHE] = slow pottery and studio life, [SHOP_HINT] = the mug shop). Put every string and number in src/content.ts and render from it. If any variable value differs, rewrite the bio, all four link titles/subtitles, the video card, both products and the email copy so they are specific and believable for the new creator, keeping the same structure and counts (4 links, 1 video, 2 products, 4 socials). All links are '#' placeholders; the audience, video and products are invented; nothing claims real numbers. Email: hello@ + emailDomain. Portrait: portrait-creator.webp is an AI-generated fictional person matching the default creator (a fictional ceramicist, not resembling any real individual); alt stays 'The creator, a fictional ceramicist'.
   Layout: n/a
   Motion: n/a
2. **Avatar and bio** — Centered: the creator portrait portrait-creator.webp as a 88px circle with the coral ring and the presence dot bottom-right (alt 'The creator, a fictional ceramicist'); the name '[CREATOR]' (Baloo 2 700 26px); the bio line '[TAGLINE]' (Figtree 15px Ash); the 'studio of one' chip. The portrait is an AI-generated fictional person users swap for their own photo.
   Layout: Vertical stack, 12px gaps, 40px top padding from the safe area; portrait 88px circle.
3. **Link buttons** — Four big buttons (60px, Sand fill, 1px Rule border), icon + two-line text + arrow: 1) PlayCircle icon — 'Watch the glaze fail' — 'new studio video · 14 min' — '#'. 2) ShoppingBag icon — 'Shop [SHOP_HINT]' — 'restocks Friday 6pm, drops sell out by nine' — '#'. 3) Mail icon — 'The Kiln Letter' — 'one honest note on [NICHE], most Sundays' — '#email (anchor scrolls to the capture)'. 4) MapPin icon — 'Studio markets this season' — 'four dates, one spreadsheet, zero regrets' — '#'. Every button opens its '#' placeholder; the third anchors to the email block.
   Layout: Stack of four, 12px gaps, full column width. Tap targets ≥60px; arrow (ArrowUpRight 18px Coral) right-aligned.
4. **Latest video card** — A Card panel: 16:9 poster studio-wheel.webp with the play badge (56px Coral circle, Paper play glyph) center and the duration chip '14:02' bottom-right; title under (Baloo 2 700 17px): 'The glaze that failed beautifully' with the caption 'inside [NICHE], episode 12' (Figtree 13px Ash). Tapping shows the inline demo note (see Motion).
   Layout: Full column width, 18px radius, 1px Rule border, 12px inner padding; poster 16:9 rounded 12px.
5. **Product mini-cards** — Two minis side by side (each 50% minus gap): 1) mug-speckled.webp — 'The Morning Speckle' — '$38' — caption 'the mug people photograph'. 2) vase-mini.webp — 'Bud Vase, ash glaze' — '$26' — caption 'one stem is plenty'. Both link '#' with the tiny row 'from [SHOP_HINT]' above the pair (Figtree 600 12.5px Ash).
   Layout: Two columns 12px gap; mini: 64px rounded image left, name Baloo 2 700 14px + price Coral 700 14px in a row, caption 12px Ash below; Card fill, 1px Rule border, 14px radius.
6. **Socials** — Four drawn generic glyphs (36px circles, Sand fill, Charcoal strokes; never real platform marks), centered row with 16px gaps, aria-labeled: 'photos' (a drawn camera ring), 'videos' (a drawn play triangle in a rounded square), 'audio' (a drawn waveform), 'letters' (an envelope glyph). All href '#'.
   Layout: Centered row, 24px vertical margins.
7. **Email capture** — id='email'. A Card panel: heading (Baloo 2 700 18px) 'One letter, most Sundays'; line (Figtree 14px Ash): 'What came out of the kiln, what cracked, and the recipe that worked. No schedule-guilt.' The field + button row: input (placeholder 'you@inbox.com') and Coral button 'Join'; inline hint on invalid; success panel (Coral Mist): drawn tick, 'You''re in — saved in this browser. The real page would hand this to the newsletter tool.' and 'Use a different address' text button resetting the form.
   Layout: Full column width, 18px radius, 16px padding; field and button stacked full-width under 380px.
8. **Footer line** — Centered 12px Ash: '[CREATOR] · made with clay and [NICHE]' over a hairline, with the Sage dot and 'no cookies, no trackers — just links'.
   Layout: 32px top padding, hairline above, safe-area bottom padding.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/studio-wheel.webp → public/images/studio-wheel.webp (Video poster; alt 'A potter\'s wheel with a half-formed bowl under warm studio light'); https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/mug-speckled.webp → public/images/mug-speckled.webp (Product 1; alt 'A speckled ceramic mug on a linen cloth'); https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/vase-mini.webp → public/images/vase-mini.webp (Product 2; alt 'A small ash-glazed bud vase holding one dried stem'); https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/studio-shelf.webp → public/images/studio-shelf.webp (Desktop-only: a faint background wash behind the column at 6% opacity; alt 'Shelves of drying ceramics in soft light'). Four files in total. https://media.vibefather.ai/assets/508996cd-4e84-4ea9-b437-2504f297d847/portrait-creator.webp → public/images/portrait-creator.webp (The avatar circle; alt 'The creator, a fictional ceramicist'). Five files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/baloo-2 and @fontsource-variable/figtree (OFL-1.1) and lucide-react (ISC). Never replace photos with stock sites or images with people, faces, hands or readable branding.
- icon: lucide-react only: PlayCircle, ShoppingBag, Mail, MapPin, ArrowUpRight, Play, Check. Stroke width 2, 18–24px, color inherits. Social glyphs, the avatar monogram ring, presence dot, play badge and the email tick are drawn SVG — never real platform marks, never a photo avatar. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 rect rx 10 filled #E2725B, a Paper (#FFFDF8) rounded link-glyph (two interlocking rounded brackets). No other logo: the creator name is always set as type.
- font: Install @fontsource/baloo-2 and @fontsource-variable/figtree and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the avatar monogram and ring, presence dot, play badge and duration chip, the four social glyphs, the email tick and the favicon. No other bitmaps beyond the four photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the email capture saves in localStorage only and says so; every link and social is a '#' placeholder.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics — and the footer says so.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No real creators, audiences or products; no real social platform icons anywhere (drawn generic glyphs only); no photos with faces or hands; the avatar is a drawn monogram, never a face.
- No dates or years; no follower or subscriber counts, real or implied; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no pulse loops or staggers; presses change color only; everything still visible without motion.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; thumb-first on mobile (all tap targets ≥52px, safe-area padding, no horizontal scroll); every interactive element works with keyboard only and a visible focus ring.
- Keep copy concrete: no lorem, no 'link tree' service names; every link title, price and duration lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/link-in-bio-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
