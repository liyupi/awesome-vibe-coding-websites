# Independent Bookstore Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [SHOP], an independent bookstore in [CITY] specializing in [GENRE]. It must smell like paper: staff picks with invented titles, weekday-named events, a book club, the shop in three photos, a bookseller portrait (AI-generated fictional person), hours with open-now, and an order-for-pickup form confirming client-side. One page: index.html with sections (#picks, #events, #club, #shop, #order). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Neighborhood readers and gift-buyers who'd rather browse a shelf than a feed: 25–75, loyal once won. They want tonight's event, this month's club pick, and a way to ask for a book without an account.
- Goal: Fill the pickup list and the event chairs. Within ten seconds a visitor feels the shelves and sees the order CTA; within two minutes they've read one pick and one event.
- Tone: Bookseller chatty: warm, opinionated, one exclamation per lifetime. Invented titles get honest one-line reviews. Dry humor about e-readers exactly once.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/bitter (OFL-1.1), @fontsource-variable/nunito-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (papercream, kraft, card, inkbrown, mocha, mustard, mustard-deep, forestrule, rule) and fontFamily display ['Bitter', 'Georgia', 'serif'], sans ['Nunito Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 8px and add maxWidth { container: '1120px' }.
  - In src/fonts.ts import '@fontsource/bitter/500.css', '@fontsource/bitter/700.css', '@fontsource/bitter/500-italic.css' and '@fontsource-variable/nunito-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, pick, event, club line, hour and image path, typed), src/lib/brand.ts (shopSlug = [SHOP] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = shopSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with shopSlug + ':'), src/lib/useOpenNow.ts (open-now from the hours table and the client clock).
  - State: src/store/order.ts is a tiny external store (useSyncExternalStore) holding { title, author, day, name, phone, sent } persisted to localStorage key shopSlug + ':order'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, TicketStub.tsx (the event-card edge motif drawn in code); Hero.tsx, Picks.tsx (PickCard.tsx in a scroll-snap carousel with prev/next buttons), Events.tsx (EventCard.tsx), BookClub.tsp → BookClub.tsx, ShopStrip.tsx (ShopPhoto.tsx), BooksellerNote.tsx, OrderForm.tsx (DayChips.tsx, Confirmed.tsx), HoursBlock.tsx (OpenNowPill.tsx). src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F8F3E6'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[SHOP] — An independent bookstore in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [SHOP] — Shop name (default: "Dog-Eared & Sons"). Invented shop name. Used in the wordmark, title, footer, email (hello@ + shopSlug without hyphens + .com) and localStorage keys. Never a real store.
- [CITY] — City (default: "Portland, Maine"). Where the shop is. Used in the title, hero, hours block and footer. Real cities fine; street invented.
- [GENRE] — Specialty (default: "fiction, poetry and the odd map"). What the shop stacks deepest, lowercase. Drives the hero line, the picks' flavor and the club voice.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/independent-bookstore-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Papercream `#F8F3E6` — Page background throughout.
- Kraft `#EFE7D2` — Alternate section background (Events, Club), chips, hover fill.
- Card `#FFFEF8` — Pick cards, event stubs, the order panel, confirmation.
- Inkbrown `#3A2E22` — Headlines and body text, icon color.
- Mocha `#7C6A55` — Secondary text, captions, eyebrows, closed states.
- Mustard `#D9A420` — The one accent: primary buttons, event dates, the club ribbon, focus ring, price dots.
- Mustard Deep `#B8871A` — Hover and pressed states.
- Forestrule `#5F7155` — Quiet second color: open dot, club vine, staff-pick ribbons.
- Rule `#E1D8C2` — 1px hairlines, card borders, input borders, stub perforations.

### Typography
- Display: H1, H2, book titles, event names, the wordmark — Bitter slab serif, papery and warm: Bitter (OFL), weights 500/700
- Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for hours: Nunito Sans (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(42px, 6.2vw, 76px) Bitter 700, line-height 1.05; H2 clamp(28px, 3.8vw, 44px) Bitter 700; book titles 19px Bitter 700; lead Nunito 400 17.5px / 1.65 Inkbrown at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.16em Mocha; caption 13px Mocha. Buttons: height 50px, Nunito 700 14px. Primary: Mustard fill, Card text. Secondary: 1px Inkbrown border. Inputs: height 50px, 1px Rule border, Card fill, focus Mustard border. Focus ring everywhere: 2px Mustard outline with 3px offset.
- Radius: 8px on cards, buttons, inputs and photos. 999px only for pills, the open dot and pick ribbons.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and carousel; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. Papery and unhurried.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 750ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 75ms.
- Motion: Hero: the stacks photo scales 1.04→1.0 over 2200ms; the H1 rises; a small drawn bookmark slides in beside the eyebrow once.
- Motion: Picks carousel: horizontal scroll-snap with prev/next arrow buttons; cards lift 3px on hover and the cover tilts 2deg; the ribbon (staff name) fades in.
- Motion: Event stubs: the perforation line dashes in when the card enters view; hover lifts 3px and the mustard date square brightens.
- Motion: Club: the ribbon draws its tail once; the join note crossfades.
- Motion: Order form: day chips fill Mustard on select (150ms); invalid submit shakes 4px with kind inline labels; sending swaps to Confirmed (320ms --ease-io) — a drawn bookmark stamp sliding in, 'On the list!' 'We''ll email when [TITLE] hits the counter, [NAME].' and 'Change the order' pre-filled. Persisted in localStorage.
- Motion: Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no carousel snap animation (still scrollable), no tilts, draws or staggers; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Warm real photography, all six made for this template in one consistent style: amber shop light, wood shelves, paper and cats-optional. Book covers appear as abstract art only — generated blank spines and textured covers with no readable titles (typography-free); the shop's 'signage' never shows readable text. The bookseller portrait is an AI-generated fictional person (apron, mid-shelve, warm smile) — a placeholder staff photo. No customer faces, no readable signage, no logos. Every photo uses object-fit cover with the object-position given under Assets, 8px corners, no shadow. Captions in Nunito 13px Mocha. Drawn in code: the favicon, bookmark glyph, stub perforations, ribbons and the stamp. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Shop (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([SHOP] = Dog-Eared & Sons, [CITY] = Portland, Maine, [GENRE] = fiction, poetry and the odd map). Put every string and list in src/content.ts and render from it. If any variable value differs, rewrite the hero, all six picks (invented titles/authors/one-line reviews), four events, the club copy, shop captions and order copy so they are specific and believable for the new shop, keeping the same structure and counts. All books, authors and events are invented; covers stay abstract/blank. Hours: Mon–Fri 10:00–19:00, Sat 10:00–20:00, Sun 11:00–16:00. Facts: address '142 Wharf Street, [CITY]' invented; phone (207) 555-0178; pickup orders ready next open day; book club last Thursday of the month (weekday-named, never dated). Picks (title · author · review · cover photo): 'The Lighthouse Keeper''s Ledger' 'Ida Bellweather (invented)' 'a quiet storm of a book; the ledger does what the lighthouse cannot' picks-1.webp; 'Nine Ways to Fold a Map' 'Tomás Reyes (invented)' 'funnier than a book about cartography has any right to be' picks-2.webp; 'The Orchard Underwater' 'Gwen Ha (invented)' 'generational, damp, unforgettable' picks-3.webp; 'Small Gods of the Interchange' 'Alfie Osei (invented)' 'rush-hour mythology; read it on the bus for full effect' picks-4.webp; 'A Field Guide to Leaving' 'Marguerite Vale (invented)' 'poetry that checks your ticket and lets you board anyway' picks-5.webp; 'The Tuesday Detectives' 'J. W. Strong (invented)' 'cozy crime; the solution is a scone' picks-6.webp. Events: 'Thursday · Reading: Ida Bellweather' 'from the ledger itself, 7pm, chairs early'; 'Saturday · Story Hour (ages 3–8)' 'dragons, snacks, gentle chaos, 10:30am'; 'Thursday (last) · Book Club' 'this month''s pick below; new faces get the good chair'; 'Saturday (late) · Poetry & Vinyl Night' 'bring a record, bring a poem, 8pm'. Club: this month 'The Orchard Underwater' — 'fourteen chapters, one long-held breath; we''ll talk about the ending, the water, and whether Gwen Ha is being merciful.'
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[SHOP]' (Bitter 700 19px) over 'Independent bookstore · [CITY]' (10px uppercase Mocha) linking ./index.html. Right nav (Nunito 600 14px): 'Picks' → #picks, 'Events' → #events, 'Book club' → #club, 'The shop' → #shop; a small Mustard 'Order a book' → #order. Under 800px: wordmark + order button.
   Layout: Sticky top, height 72px, Papercream/95% blur, Rule border.
3. **Hero** — Two columns. Left: eyebrow 'FICTION · POETRY · [CITY]'; H1 'The shelves' / '*remember you.*' Lead (max-width 500px): '[SHOP] stocks [GENRE] — recommended by people who have actually read them, wrapped in brown paper if you ask nicely.' Primary 'Order for pickup' → #order and secondary 'This week''s events' → #events; trust row: 'Order ready next open day'; 'Wrapped free'; 'The cat is friendly (sample)'. Right: shop-stacks.webp (4:3) with the caption 'The fiction wall, mid-restock'.
   Layout: Papercream background, vertical padding 104px top; left 6 cols, right 5 cols offset 1.
4. **Staff picks** — Section id='picks'. Eyebrow 'STAFF PICKS' and H2 'Six books we keep re-shelving.' A scroll-snap carousel of PickCards: cover (3:4, abstract art, no readable titles), title, invented author, one-line review (italic Bitter), a Forestrule ribbon with the staffer''s name ('Ida''s pick' style names: Ida, Sam, Priya, Owen, Rosa, Jun). Caption: 'All titles invented for this template — bring us yours and we''ll argue politely about them.'
   Layout: Papercream background. Carousel: cards 260px wide, gap 16px, snap; arrows top-right; under 640px native swipe.
5. **Events** — Section id='events'. Eyebrow 'ON THE CALENDAR' and H2 'FOUR RECURRING NIGHTS.' EventCards as ticket stubs (Mustard date square with weekday initial, perforated edge, name, line): the roster events. Caption: 'Recurring weekly or monthly — sign up for the email at the counter; it arrives like a good chapter, rarely.'
   Layout: Kraft background. 2x2 stub grid 20px gap; stubs on Card with drawn perforation right edge; hover lift 3px.
6. **Book club** — Section id='club'. Eyebrow 'BOOK CLUB · LAST THURSDAYS' and a ribbon-topped card: this month's pick cover (picks-3.webp reused), title, author, and the club line; a note 'New members: show up, no homework beyond the book; the good chair is genuinely a good chair.'
   Layout: Papercream background; a wide Card with the cover left (3:4, 200px) and text right; the Forestrule ribbon drawn top-left.
7. **The shop** — Section id='shop'. Eyebrow 'THE SHOP' and H2 'THREE CORNERS.' ShopStrip photos with captions: shop-counter.webp 'The counter — where recommendations happen'; shop-nook.webp 'The reading nook — one chair, strong opinions'; shop-window.webp 'The window — new arrivals face the street'. Beside them the BooksellerNote: bookseller-pru.webp portrait (3:4) with 'Pru, holding the fort — a fictional bookseller' and the note: 'Ask Pru for [GENRE] and she''ll walk you to the shelf; ask her for 'something like that one book'' and she''ll narrow her eyes, then find it.'
   Layout: Kraft background. Photos three columns 16px gap (4:3); the note 4 cols beside (portrait + text) on desktop, stacked under 900px.
8. **Order form and footer** — Section id='order'. Eyebrow 'ORDER FOR PICKUP' and H2 'Tell us the book; we''ll do the hunting.' OrderForm on Card: title input (placeholder 'Title — invented or classic, we''ll try'), author input (optional), DayChips (next 3 open days, weekday-named), name + phone; primary 'Add to the pickup list' with caption 'Saved in this browser — the real page emails the shop. Nothing is sent here.' Confirmed: the bookmark stamp, 'On the list!' 'We''ll email when [TITLE] hits the counter, [NAME].' pickup day echo, 'Change the order' pre-filled; persisted in localStorage. HoursBlock with OpenNowPill beside the form. Footer (Inkbrown, cream text): wordmark, 'Independent bookstore · [CITY]', '142 Wharf Street', (207) 555-0178 tel:, hello@ + emailDomain; bottom line '© [SHOP]. All titles invented; the cat is real (sample).'
   Layout: Papercream background; form 7 cols, hours 4 cols offset 1; footer three-part row with bottom line.

## Assets
- image: Final asset list (6 files): https://media.vibefather.ai/assets/28a1cac7-db84-41c5-aa4a-f2aad6035253/shop-stacks.webp → public/images/shop-stacks.webp (Hero; alt 'Wooden shelves of books in warm shop light'); .../covers-sheet.webp → public/images/covers-sheet.webp (a 3x2 grid of six abstract book-cover artworks — each cell a distinct texture/palette, absolutely no readable text; the carousel crops each cell via object-position); .../shop-counter.webp (alt 'A wooden shop counter with brown-paper-wrapped books'); .../shop-nook.webp (alt 'A reading nook with one armchair and a lamp'); .../shop-window.webp (alt 'A shop window with new books facing the street, no readable spines'); .../bookseller-pru.webp (alt 'Pru holding a book, a fictional bookseller'). Write ASSETS.md listing all six, plus fonts and icons rows.
- icon: lucide-react only: BookOpen, CalendarDays, ArrowLeft, ArrowRight, Check, Clock, Phone, Mail. Stroke width 1.75, 16–24px, color inherits. The bookmark glyph/stamp, stub perforations, ribbons and favicon are drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 7 filled #3A2E22, a Mustard (#D9A420) bookmark glyph. No other logo: the shop name is always set as type.
- font: Install @fontsource/bitter and @fontsource-variable/nunito-sans and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the pickup order saves in the browser only (localStorage) and says so; tel: links are built from the phone digits.
- All links on this single page are anchors (./index.html#picks, #events, #club, #shop, #order) plus the footer mailto.
- No real books, authors, publishers or cover art: all titles invented, covers abstract/typography-free; no publisher logos or imprint marks.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- The bookseller portrait is an AI-generated fictional person, not any real individual; no customer faces; no readable signage or spine text in any photo.
- No dates or years anywhere; events are weekday-named recurring; day chips show weekday names; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: carousel still scrolls, no tilts/draws/staggers; everything at rest; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; the carousel, chips and form work with keyboard only and visible focus rings.
- Keep copy bookseller-warm: no lorem, no chain-store voice; every pick, event and hour lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/independent-bookstore-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
