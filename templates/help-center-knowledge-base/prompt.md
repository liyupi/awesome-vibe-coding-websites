# Help Center Knowledge Base

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A help center for [BRAND], [PRODUCT]: a search-first home, six category pages and sixteen article pages with table-of-contents rails, helpfulness voting, related articles and a contact panel. Pages: index.html, category.html?c=<slug>, article.html?a=<slug> (first category / first article when opened without one). Everything runs in the browser; nothing is submitted anywhere.

- Audience: A slightly annoyed customer on a phone, mid-task: they want the answer in the first result, or a human in two clicks. Every article earns its place by being skimmable.
- Goal: Self-serve answers. Within five seconds the search box is focused and the six categories are visible; within thirty seconds a visitor has opened an article and found the step they needed.
- Tone: Service-desk warm: plain words, numbered steps, zero corporate hedging. One gentle joke per category at most.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/figtree (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors). Three real HTML pages at the project root: index.html (entry src/main-index.tsx), category.html (entry src/main-category.tsx), article.html (entry src/main-article.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), category: resolve(__dirname, 'category.html'), article: resolve(__dirname, 'article.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './category.html', './article.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (warmwhite, panel, line, ink, softink, blue, blue-deep, blue-mist, good, warn) and fontFamily sans ['Figtree Variable', 'system-ui', 'sans-serif'], mono ['IBM Plex Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 8px and add maxWidth { container: '1160px', read: '720px' }.
  - In src/fonts.ts import '@fontsource-variable/figtree' and '@fontsource/ibm-plex-mono/400.css' plus '500.css'; import src/fonts.ts and src/index.css from all three entry files.
  - File layout: src/content.ts (every string, category, article, section, step and related link, typed — categories: { slug, name, blurb, icon }, articles: { slug, category, title, summary, sections: { heading, body: string[] }[], related: string[] }); all sixteen articles written out in full), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com', supportMail = 'support@' + emailDomain), src/lib/route.ts (reads ?c= / ?a=, resolves the category or article, falls back to the first — never a not-found), src/lib/search.ts (score(query) across titles, summaries and section headings; returns ranked article slugs with the matched heading named), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed brandSlug + ':').
  - State: src/store/helpfulness.ts is a tiny external store (useSyncExternalStore) holding { articleSlug, vote: 'up' | 'down' | null } persisted per article under brandSlug + ':vote'; src/store/contact.ts holds { name, email, message, sent } persisted under brandSlug + ':contact'.
  - Components in src/components/: Header.tsx, SearchCard.tsx (InstantResults.tsx), Footer.tsx, Breadcrumbs.tsx, CategoryCard.tsx, ArticleRow.tsx, ContactPanel.tsx (shared form); article-only: TocRail.tsx, VoteWidget.tsx, RelatedList.tsx. Pages: src/pages/Home.tsx, Category.tsx, Article.tsx.
  - SearchCard: a large input (height 56px, search icon) that autofocuses on the home page only; as the visitor types, InstantResults shows up to seven ranked rows (title + matched heading + category chip) below the input in a Panel card with a Line border and soft shadow; arrow keys move an active row, Enter opens it (./article.html?a=<slug>), Escape clears. Below the input, three suggestion chips ('booking', 'calendar sync', 'refunds' — built from real article topics in content.ts). Zero results: 'Nothing matched — try fewer words, or write to us below.' All client-side.
  - Article prose lives as structured strings in content.ts and renders as semantic HTML (h2/p/ol/li) — no markdown parser; keyboard shortcuts inside articles render as mono kbd chips.
  - VoteWidget: 'Was this helpful?' with two buttons (ThumbsUp / ThumbsDown, lucide) — a vote persists locally and swaps to 'Thanks — noted in this browser (the demo sends nothing).' with the chosen icon filled Good.
  - ContactPanel: name, email, message, submit; validation inline (red Warn text under the field); on success the form crossfades to a Good check line 'Message saved — this demo stores it locally; a real center would email ' + supportMail.
  - public/favicon.svg as described under Assets. All three HTML files: lang en, <meta name='theme-color' content='#FBFAF7'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index '<title>[BRAND] Help Center</title>', category '<title>Category — [BRAND] Help</title>' (set on load), article '<title>Article — [BRAND] Help</title>' (set on load from the article title).
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the three HTML files, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB.

## Variables
- [BRAND] — Product name (default: "Plainpost"). The invented product's name, one word. Used in the wordmark, titles, footer, support email (support@ + brandSlug without hyphens + '.com') and localStorage keys. Never a real product.
- [PRODUCT] — What it is (default: "appointment scheduling for small clinics"). One lowercase phrase naming the product. Rewrites the home intro, category blurbs and article examples so they fit that product. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/help-center-knowledge-base in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm White `#FBFAF7` — Page background throughout.
- Panel `#FFFFFF` — Result cards, category cards, forms, votes.
- Line `#E7E4DC` — 1px hairlines everywhere; borders, table rows, dividers.
- Ink `#1E2126` — Headings, body, icons.
- Soft Ink `#5D6167` — Summaries, captions, breadcrumbs, eyebrows.
- Trust Blue `#2C55E0` — The one accent: links, focused input ring, active chips, primary buttons, category icons.
- Blue Deep `#1F40B4` — Hover and pressed states.
- Blue Mist `#EDF1FD` — Active chips, hovered result rows, vote selected fill.
- Good `#3E8E5A` — Success lines, the helpful vote, contact confirmation.
- Warn `#C24141` — Validation errors only.

### Typography
- Text and display: H1, H2, body, UI — Figtree, friendly grotesque: Figtree (OFL), weights 400/500/600
- Mono: kbd shortcut chips, slugs in breadcrumbs: IBM Plex Mono (OFL), weights 400

### Layout & motion
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; the reading column max 720px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 (home search heading) 34px Figtree 600; article H1 30px 600; H2 in articles 20px 600 with 28px top margin; body 16px / 1.7 Ink; summaries 15px / 1.65 Soft Ink; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; breadcrumbs 13px Soft Ink. Buttons: height 46px, Figtree 600 14px; primary Trust Blue fill with white text, secondary 1px Line border on Panel. Inputs: height 46px (search 56px), Panel fill, 1px Line border, focus Trust Blue border + 2px offset ring. Focus everywhere: 2px Trust Blue outline, 3px offset.
- Radius: 8px on cards, inputs, buttons, votes; 999px for chips.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Help centers should feel like a paper drawer: quiet.
- Motion: Home: the search card rises 12px on load (500ms); category cards reveal with a 60ms stagger as they enter.
- Motion: InstantResults: the results panel fades and drops 4px into place (160ms); the active arrow-key row fills Blue Mist with a 120ms ease; suggestion chips lift 1px on hover.
- Motion: Category page: article rows reveal with a 40ms stagger; row hover shifts the title Trust Blue and slides a 16px Line arrow in from the left (160ms).
- Motion: Article page: the prose column settles 8px on load; the TocRail's active dot slides between headings on scroll (200ms); section anchors offset for the sticky header.
- Motion: VoteWidget: button icons pop 1→1.15→1 on press (140ms); the thank-you line crossfades 200ms.
- Motion: Contact form: submit crossfades the panel to the confirmation (240ms); error text fades in under fields (160ms).
- Motion: Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no reveals, no sliding dots, no arrow slides; everything sits at rest and works. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: No photographs, no illustrations, no people, no avatars (article bylines stay uncredited — 'the [BRAND] team'): the design is typography, hairlines and lucide category icons on Blue Mist wells. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Pages & Sections
### Help home (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([BRAND] = Plainpost, [PRODUCT] = appointment scheduling for small clinics). Put every string, category, article and step in src/content.ts and render from it. If any variable differs, rewrite the intro, category blurbs and all sixteen articles so they are specific and believable for that product, keeping the same structure and counts (6 categories, 16 articles, every article 3–5 sections with real steps). Categories (slug · name · blurb · icon · article count): 'getting-started' 'Getting started' 'from invite to first booking in one sitting' Rocket 3; 'bookings' 'Bookings & calendar' 'editing, rescheduling, and the two-clock problem' CalendarDays 4; 'payments' 'Payments & refunds' 'deposits, payouts and the refund window' CreditCard 3; 'notifications' 'Notifications' 'reminders that arrive before they matter' Bell 2; 'team' 'Team & access' 'receptionists, rooms, and who sees what' Users 2; 'account' 'Account & billing' 'plans, invoices and closing an account' Settings 2. Articles (slug · category · title): 'gs-invite' getting-started 'Accepting your invite'; 'gs-first-booking' getting-started 'Your first booking'; 'gs-setup-checklist' getting-started 'The one-page setup checklist'; 'bk-edit' bookings 'Editing a booking'; 'bk-reschedule' bookings 'Rescheduling without phone tag'; 'bk-no-show' bookings 'No-shows and late cancellations'; 'bk-sync' bookings 'Syncing with your calendar'; 'pay-deposits' payments 'Taking deposits'; 'pay-payouts' payments 'When payouts arrive'; 'pay-refunds' payments 'Refunds in one screen'; 'nt-reminders' notifications 'Reminder timing that works'; 'nt-custom' notifications 'Custom reminder messages'; 'tm-roles' team 'Roles: front desk vs. providers'; 'tm-rooms' team 'Rooms and resources'; 'ac-plans' account 'Plans and invoices'; 'ac-close' account 'Closing an account (properly)'. Every article's body: 3–5 sections, numbered steps where steps exist, one optional gentle joke (e.g. in pay-payouts: 'Payouts leave at 4 PM sharp; they do not wait for stragglers.').
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[BRAND]' (Figtree 600 18px) with a small Trust Blue help glyph; over 'HELP CENTER' (10px uppercase Soft Ink). Right (Figtree 500 14px): 'Categories' → ./index.html#categories, 'Contact' → ./index.html#contact. Under 720px: wordmark only.
   Layout: Sticky top, height 64px, Warm White at 95% with backdrop blur, Line bottom border.
3. **Search hero** — Centered stack (max-width 680px, 96px top padding): eyebrow '[BRAND] SUPPORT'; H1 'How can we help?'; the SearchCard with InstantResults and the three suggestion chips; under it the one-line intro 'Answers for [PRODUCT] — written by the team, read in about a minute each.'
   Layout: Warm White background; results panel absolute over the content below (z-10) with a soft shadow.
4. **Category grid** — Section id='categories'. Eyebrow 'BROWSE BY TOPIC'; H2 'Six drawers, clearly labeled.' A 3x2 grid of CategoryCards linking ./category.html?c=<slug>: a lucide icon on a Blue Mist well, name (Figtree 600 17px), blurb (14px Soft Ink), and a count line '3 articles' (12px Soft Ink, tabular).
   Layout: 3 columns 24px gap (2 under 960px, 1 under 620px); cards Panel with 1px Line border, hover lifts 2px with a Trust Blue border.
5. **Popular strip** — Eyebrow 'READ OFTEN'; H2 'The five we link most.' Five ArticleRows (title 15.5px Figtree 500, category chip, one-line summary 14px Soft Ink) linking article pages, hairline-divided.
   Layout: Single column max-width 720px, rows 20px padded.
6. **Contact panel and footer** — Section id='contact'. A wide Panel card with a Trust Blue 1px top rail: left — eyebrow 'STILL STUCK?'; H2 'Write to a human.'; body 'The form saves locally in this demo; a real center would email ' + supportMail + ' and answer within a day.'; right — the ContactPanel form. Footer: left wordmark + supportMail; right '© [BRAND]. Sample help center; sample answers.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: Contact card max-width 1040px, two columns 40px padding (stacked under 900px); footer 72px, Line top border.

### Category listing (`category.html`)
1. **Category view** — Reads ?c=<slug>; with no query the first category (getting-started) renders. Breadcrumbs: 'Home' → ./index.html · the category name. Header block: eyebrow 'CATEGORY'; H1 the category name; the blurb; the count line. The SearchCard repeats here (smaller, 48px) with InstantResults scoped to this category first (cross-category results under a 'From other drawers' divider). Below: ArticleRows for each article in the category (title, summary, sections count), hairline-divided, staggered reveals.
   Layout: Warm White background; reading column max-width 720px centered; breadcrumb at 88px top padding.

### Article (`article.html`)
1. **Article view** — Reads ?a=<slug>; with no query the first article (gs-invite) renders. Breadcrumbs: 'Home' → ./index.html · the category name linking ./category.html?c=<slug> · the article title (truncated). Two columns: the prose column (max 620px) — eyebrow with the category name; H1 the title; summary paragraph in Soft Ink; the 3–5 sections as h2 headings with body, numbered lists rendered as styled ols; the VoteWidget at the foot; RelatedList ('Related articles', three ArticleRows). The TocRail (sticky, top 88px): 'On this page' + the section headings as anchor rows with the sliding active dot. On mobile the TocRail becomes a collapsible 'On this page' summary above the prose. document.title set from the article title on load.
   Layout: Warm White background; grid: prose 7 cols, rail 3 cols offset 2 (rail hidden under 1024px, summary shown instead).

## Assets
- image: No photographs or downloaded images: the design is typography, hairlines and lucide icons; the favicon is drawn SVG. Do not fetch or hotlink anything.
- image: Write ASSETS.md at the project root listing the code-drawn assets (icon wells, chips, favicon — 'drawn in code, original') and the npm packages: @fontsource-variable/figtree and @fontsource/ibm-plex-mono (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react only: ArrowRight, Bell, CalendarDays, Check, ChevronDown, CreditCard, Rocket, Search, Settings, ThumbsDown, ThumbsUp, Users. Stroke width 1.75, 16–24px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #2C55E0, a white drawn speech bubble with a small question-dot. No brand logos.
- font: Install @fontsource-variable/figtree and @fontsource/ibm-plex-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: search, votes and the contact form are client-side only, persisted in localStorage, and the copy says so honestly.
- Every internal link points to a file name (./index.html, ./category.html?c=bookings, ./article.html?a=pay-refunds) — never to a bare directory; category.html without a query shows the first category and article.html the first article, never an error page.
- No real help centers, SaaS products, chat-widget vendors or their copy; the product, articles and support address are invented and derive from the variables.
- No dates anywhere: no 'updated 2 weeks ago', no version dates; counts and ratings, if any, are invented sample data and stay out of the prose.
- No photographs, no people, no avatars; article bylines read 'the [BRAND] team' without initials circles.
- No lorem anywhere: all sixteen articles are complete, believable, and specific to the product phrase.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no reveals, no sliding dots, no chip lifts; everything sits at rest and works.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; search, votes, forms, breadcrumbs and TOC anchors work with keyboard only and visible focus rings.
- Accessibility: search results carry aria-activedescendant; the vote buttons label themselves; heading order is h1-then-h2 within articles.

---
— Prompt by VibeFather · https://vibefather.ai/t/help-center-knowledge-base · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
