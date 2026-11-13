# Job Board Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A job board for [BOARD], listing [FOCUS]: search and filters over twelve jobs, job detail pages, four company pages, a post-a-job form with live preview, and a saved-jobs strip. Pages: index.html, job.html?j=<slug> (first job without one), company.html?c=<slug> (first company without one), post.html. Everything runs in the browser; nothing is submitted anywhere.

- Audience: A skimmer on a phone hunting during a commute: they filter in two taps, scan salary bands, save three roles and come back later.
- Goal: Applications started and jobs posted. Within ten seconds a visitor can filter to remote roles over $100k; within two minutes they've opened a job, saved it and peeked at the company.
- Tone: Broadsheet-plain: short lines, real salary bands, no 'rockstar ninja' anything. One dry joke in the empty state.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/fraunces (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template (pin the version if the latest template targets newer majors). Four real HTML pages at the project root: index.html (entry src/main-index.tsx), job.html (entry src/main-job.tsx), company.html (entry src/main-company.tsx), post.html (entry src/main-post.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), job: resolve(__dirname, 'job.html'), company: resolve(__dirname, 'company.html'), post: resolve(__dirname, 'post.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './job.html', './company.html', './post.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (warmwhite, panel, line, ink, softink, fern, fern-deep, fern-mist, ochre, clay, slateink, good) and fontFamily display ['Fraunces', 'Georgia', 'serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 10px and add maxWidth { container: '1200px', read: '760px' }.
  - In src/fonts.ts import '@fontsource/fraunces/400.css', '@fontsource/fraunces/600.css' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from all four entry files.
  - File layout: src/content.ts (board name and focus line, companies, jobs, tag vocabulary and every label, typed — companies: { slug, name, monogram, blurb, facts: { label, value }[], teamNote }, jobs: { slug, company, title, roleType, location, remote, salaryMin, salaryMax, tags[], posted: static relative label, summary, description: string[], requirements: string[] }); user-posted jobs merge from localStorage), src/lib/brand.ts (boardSlug = [BOARD] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = boardSlug without hyphens + '.com', helloMail = 'hello@' + emailDomain), src/lib/route.ts (reads ?j= / ?c=, resolves or falls back to the first — never not-found), src/lib/filters.ts (applyFilters(jobs, { q, roleType, location, remoteOnly, salaryMin })), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys boardSlug + ':saved' and ':posted').
  - State: src/store/saved.ts is a tiny external store (useSyncExternalStore) holding saved job slugs persisted under the saved key; src/store/posted.ts holds user-posted jobs under the posted key (each a jobs-shaped object with a 'yours' flag and a generated slug from the title).
  - Components in src/components/: Header.tsx (Wordmark.tsx, SavedChip.tsx), Footer.tsx, JobCard.tsx (MonogramTile.tsx, SalaryBand.tsx, TagChip.tsx, PostedLabel.tsx, SaveButton.tsx), FiltersPanel.tsx (SearchInput.tsx, RoleSelect.tsx, LocationSelect.tsx, RemoteToggle.tsx, SalarySlider.tsx), EmptyState.tsx; job page: ApplyPanel.tsx, RequirementList.tsx, RelatedJobs.tsx; company: FactRow.tsx; post: PostForm.tsx (Field.tsx), PreviewCard.tsx. Pages: src/pages/Home.tsx, Job.tsx, Company.tsx, Post.tsx.
  - SalarySlider: a native range input styled (accent Fern) with a mono readout '$100k+'; the min maps 0/60/80/100/120/140/160k stops; filtering compares salaryMin.
  - SaveButton: a Bookmark icon toggling filled/unfilled with a 140ms scale pop; the Header's SavedChip count animates on change; the saved strip on Home lists saved jobs in a horizontal scroll row (hidden when empty).
  - PostForm: fields company, title, roleType select, location, remote toggle, salary min/max (numeric, validated min<max), tags (up to three chosen from the vocabulary chips), summary (one line), description (textarea), requirements (one per line textarea). Validation inline on blur (Clay text). PreviewCard renders live from the draft as a real JobCard with an 'UNPOSTED' chip. Submit writes to posted store, toasts 'Posted — visible in this browser only' and links to the listing (the job appears first, marked 'yours' with an Ochre chip).
  - public/favicon.svg as described under Assets. All four HTML files: lang en, <meta name='theme-color' content='#FBFAF6'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index '<title>[BOARD] — [FOCUS] jobs</title>'; job/company/post set document.title on load.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the four HTML files, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 6 MB.

## Variables
- [BOARD] — Board name (default: "Deskwork"). The invented board's name, one word. Used in the wordmark, titles, footer, email (hello@ + boardSlug without hyphens + '.com') and localStorage keys. Never a real board.
- [FOCUS] — Board focus (default: "design and product jobs"). One lowercase phrase naming the niche. Rewrites the hero line, all twelve job titles, tags and company blurbs so the board reads true. Keep it concrete.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/job-board-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm White `#FBFAF6` — Page background throughout.
- Panel `#FFFFFF` — Cards, forms, apply panel.
- Line `#E6E2D8` — 1px hairlines: rules, borders, dividers, table rows.
- Ink `#20211C` — Headlines and body ink, icons.
- Soft Ink `#63645C` — Summaries, captions, posted labels, eyebrows.
- Fern `#3E7A52` — The one accent: links, primary buttons, salary bands, saved state, focus ring, active filters.
- Fern Deep `#2F5F3F` — Hover and pressed primary.
- Fern Mist `#E8F0E9` — Tag chips, remote chips, monogram tile fills, hover rows.
- Ochre `#C08A1E` — 'yours' / 'UNPOSTED' chips and the posted-by-you marker.
- Clay `#C0603A` — Validation errors and the overdue-style warnings (none by default).
- Slate Ink `#12271B` — Text on fern fills.
- Good `#3E7A52` — Form success, save confirmation.

### Typography
- Display: H1, H2, job titles, wordmark — Fraunces, ink serif with presence: Fraunces (OFL), weights 400/600
- Text and UI: body, filters, cards, forms; tabular numerals for salaries: Inter (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1200px, centered, side padding 48px desktop, 32px tablet, 20px under 640px; reading column max 760px. Section vertical padding 88px desktop, 64px under 1024px, 48px under 640px. Type scale: H1 clamp(34px, 4.6vw, 54px) Fraunces 600, line-height 1.08; H2 28px Fraunces 600; job titles 19px Fraunces 600; lead 17px Inter 400 / 1.65 at 90%; body 15.5px / 1.7; eyebrow 12px 600 uppercase letter-spacing 0.14em Soft Ink; captions and posted labels 13px Soft Ink; salary bands 15px Inter 600 tabular. Buttons: height 46px, Inter 600 14px; primary Fern fill with white text, secondary 1px Line border on Panel. Inputs/selects: height 46px, Panel fill, 1px Line border, focus Fern border + 2px offset ring. Focus everywhere: 2px Fern outline, 3px offset.
- Radius: 10px on cards, panels, inputs, buttons; 999px for chips and the saved count.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Broadsheet rhythm: quiet moves, nothing bounces.
- Motion: Reveal: sections and cards rise 10px over 500ms as they enter (Motion whileInView, once), siblings stagger 50ms — the listing staggers by row, not by card-shuffle.
- Motion: Filtering: cards dim 20% and sink 2px when filtered out (180ms) and the count line crossfades — rows keep their order; removed cards collapse height only after the fade (240ms total).
- Motion: SaveButton: icon fills with a 140ms scale pop; the SavedChip count ticks with a 160ms slide.
- Motion: Job page: the apply panel settles 8px on load; the Apply button is honest ('Apply — opens your mail client', a mailto: built from the company slug).
- Motion: Post form: the PreviewCard updates live with a 120ms micro-fade on each keystroke batch; validation errors fade in 160ms; the success toast rises 8px.
- Motion: Links: .link-draw grows a 1px currentColor underline over 240ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no reveals, no dims (filtered cards hide immediately), no pops; everything sits at rest and works. Use CSS @media in index.css plus Motion's useReducedMotion.
- Imagery: One anchoring photograph: hero-office.webp, an editorial open-office scene (people at desks from behind or in soft side profile, faces not identifiable) used as the hero background under an Ink gradient. Everything else stays code-drawn: MonogramTiles for companies, chips, hairlines. Icons: lucide-react only, stroke width 1.75. The favicon is drawn SVG.

## Pages & Sections
### Board home (`index.html`)
1. **Content file and copy rules** — All copy below is written for the defaults ([BOARD] = Deskwork, [FOCUS] = design and product jobs). Put every string, company, job and tag in src/content.ts and render from it. If any variable differs, rewrite the hero line, all twelve jobs, tags and company blurbs so they are specific and believable for that niche, keeping the same structure and counts (4 companies, 12 jobs, 3–4 tags each). Companies (slug · name · monogram · blurb · facts): 'larkspur-studio' 'Larkspur Studio' 'LS' 'a nine-person brand studio for food and farm clients' — facts: 'Team 9', 'Founded-era Grown slowly', 'Remote Mostly', note 'Known for identities that survive a farmers-market crush (sample).'; 'pemberly' 'Pemberly' 'PE' 'product design for reading apps' — 'Team 23', 'Remote Hybrid, two cities', 'Note Readers first, meetings never (sample).'; 'oakhollow-labs' 'Oak Hollow Labs' 'OH' 'research-driven interface studio' — 'Team 14', 'Remote Yes', 'Note Half the team are former librarians (sample).'; 'cadence-co' 'Cadence & Co' 'CA' 'a small consultancy for design systems' — 'Team 7', 'Remote Fully remote', 'Note Systems that survive their authors (sample).' Jobs (title · company · roleType · location · remote · salary band · tags · posted label): 'Senior Brand Designer' larkspur-studio full-time Portland, OR hybrid $95–120k ['brand', 'studio', 'hybrid'] 2d ago; 'Product Designer, Reading' pemberly full-time Remote remote $110–135k ['product', 'remote', 'reading'] 5h ago; 'Design Systems Lead' cadence-co full-time Remote remote $130–160k ['systems', 'lead', 'remote'] 1d ago; 'UX Researcher' oakhollow-labs full-time Chicago, IL hybrid $100–125k ['research', 'hybrid'] 3d ago; 'Visual Designer (Packaging)' larkspur-studio full-time Portland, OR onsite $78–95k ['packaging', 'studio'] 4d ago; 'Product Manager' pemberly full-time Remote remote $120–145k ['product', 'remote', 'pm'] 6d ago; 'Junior Product Designer' cadence-co full-time Columbus, OH hybrid $65–80k ['junior', 'product'] 1d ago; 'Motion Designer' oakhollow-labs contract Remote remote $70–90k ['motion', 'contract'] 2d ago; 'Design Engineer' cadence-co full-time Remote remote $125–150k ['systems', 'code', 'remote'] 8h ago; 'Content Designer' pemberly full-time Remote remote $95–115k ['writing', 'remote'] 2d ago; 'Studio Producer' larkspur-studio full-time Portland, OR onsite $70–88k ['producer', 'studio'] 5d ago; 'Service Designer' oakhollow-labs full-time Chicago, IL hybrid $105–130k ['service', 'research'] 6d ago. Tag vocabulary: brand, studio, hybrid, product, remote, reading, systems, lead, research, packaging, pm, junior, motion, contract, code, writing, producer, service. Every salary is an invented sample band; posted labels are static relative text.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: the wordmark '[BOARD]' (Fraunces 600 20px) over '[FOCUS], listed plainly' (10px uppercase Soft Ink). Right (Inter 500 14px): SavedChip (Bookmark + count, linking #saved, hidden when zero), 'Post a job' primary → ./post.html. Under 720px: wordmark + post button.
   Layout: Sticky top, 64px, Warm White at 95% with backdrop blur, Line bottom border.
3. **Hero and filters** — Full-width hero background photo hero-office.webp (16:9, object-position 50% 40%) under a left-to-right Ink gradient (rgba(32,33,28,.82) at left to .25 at right) so all copy stays readable; the hero section is 440px tall on desktop. Eyebrow 'TWELVE ROLES, NO GAMES'; H1 'Find work you can point at.'; one lead line 'Every listing shows its salary band and its remote truth — [FOCUS], curated by hand (sample board).' The FiltersPanel in a Panel card: SearchInput ('Role or company…'), RoleSelect (All / full-time / contract), LocationSelect (All / Portland / Chicago / Columbus / Remote-first), RemoteToggle ('Remote only'), the SalarySlider with its readout, and the live count line 'Showing 12 of 12'. Filters apply instantly. A code-drawn Salary landscape strip sits between the filter panel and the listing: twelve thin horizontal bars (one per job, min-to-max salary in Fern at 70%, remote roles solid Fern), mono axis ticks at $60k / $100k / $160k, caption 'Twelve bands, invented sample data'; the strip re-filters with the chips. A code-drawn Salary landscape strip sits between the filter panel and the listing: 12 thin horizontal bars (one per job, min-to-max salary, Fern at 70% with the remote roles in solid Fern), axis ticks at $60k/$100k/$160k in mono, and a caption 'Twelve bands, invented sample data'. It re-filters with the chips.
   Layout: Warm White background; hero text max-width 680px; the panel spans the container with fields wrapping on one row (stacked under 900px).
4. **Listing** — The twelve JobCards (user-posted first, marked 'yours' with an Ochre chip): MonogramTile + company name (links company page) · title (Fraunces 600 19px, links job page) · SalaryBand ('$95–120k', Fern, tabular) · location + posted label (13px Soft Ink) · TagChips (Fern Mist) · SaveButton on the right. Hairline dividers between rows (not boxed cards) — broadsheet density. EmptyState: 'Nothing matches those filters — even we can't invent that job. Loosen one and try again.'
   Layout: Single column, rows 22px padded, Line dividers; the listing sits under the sticky-ish filters (filters not sticky, count line is).
5. **Saved strip and footer** — Section id='saved' (hidden when empty): eyebrow 'SAVED BY YOU'; a horizontal scroll row of compact saved JobCards (title, company, salary, unsave). Footer: left wordmark + helloMail; right '© [BOARD]. Sample board; every role and salary is invented.' and 'Built with a VibeFather template' linking https://vibefather.ai.
   Layout: Saved row with a thin Line scrollbar; footer 72px, Line top border.

### Job detail (`job.html`)
1. **Job view** — Reads ?j=<slug>; with no query the first job renders. Breadcrumbs: 'Board' → ./index.html · company name → ./company.html?c=<slug>. Header block: title (H1), company line with MonogramTile, the fact row (roleType · location · remote/hybrid/onsite chip · posted label), SalaryBand prominent (18px), TagChips, and a SaveButton beside the ApplyPanel. Body (read column): eyebrow 'THE ROLE'; the description paragraphs; eyebrow 'WHAT YOU'LL BRING'; RequirementList (the job's five requirements as check rows); RelatedJobs ('Also open' — three jobs sharing a tag or the company). ApplyPanel (sticky on desktop): 'This demo doesn't take applications' small print, an honest primary 'Apply by email' (mailto:jobs@ + company email slug with the job title in the subject), and a ghost 'Save for later'.
   Layout: Warm White; grid: prose 7 cols, panel 4 cols offset 1 sticky (stacked under 900px).

### Company profile (`company.html`)
1. **Company view** — Reads ?c=<slug>; with no query the first company renders. Header: MonogramTile (56px), name (H1), blurb (lead), FactRow grid (the four facts), the teamNote as a quiet quote line. Below: eyebrow 'OPEN ROLES'; that company's jobs as JobCards (same component as home). A ghost 'See the whole board' → ./index.html.
   Layout: Warm White; header max-width 760px; roles single-column like home.

### Post a job (`post.html`)
1. **Post view** — Eyebrow 'POST A JOB'; H2 'One page, one preview, no account.' Two columns: the PostForm (left, 6 cols) and the live PreviewCard (right, 5 cols offset 1, sticky) reading exactly like a listing row plus the Ochre 'UNPOSTED' chip. Small print under the form: 'This demo saves your post in this browser only — it will be first on the board, marked yours.' On success: a Good toast, the button becomes 'View the board' → ./index.html, and the posted job carries into the listing.
   Layout: Warm White; form stacked under 900px with the preview above it, non-sticky.

## Assets
- image: Download with curl -L -o into public/images/: https://media.vibefather.ai/assets/ddb2b902-6cce-459e-8ba3-e55803da4603/hero-office.webp -> public/images/hero-office.webp (Hero background; alt 'An open-plan studio office with people working at desks'). One file in total; every other visual stays code-drawn (MonogramTiles, chips, salary bars, favicon).
- image: Write ASSETS.md at the project root listing the code-drawn assets (monogram tiles, tag chips, salary bands, favicon — 'drawn in code, original') and the npm packages: @fontsource/fraunces and @fontsource-variable/inter (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react only: ArrowRight, Bookmark, Check, Mail, MapPin, Search, SlidersHorizontal, Upload. Stroke width 1.75, 16–24px, color inherits. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rounded square filled #3E7A5A, a white rectangle 'card' with a Fern stem-line (a small job-card glyph). No brand logos.
- font: Install @fontsource/fraunces and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to API: the post form saves to localStorage only, appears marked 'yours', and the copy says so; apply buttons are honest mailto: links built from the variables.
- Every internal link points to a file name (./index.html, ./job.html?j=senior-brand-designer, ./company.html?c=pemberly, ./post.html) — never to a bare directory; job.html and company.html without a query show the first item, never an error.
- No real job boards, companies or their branding (LinkedIn, Indeed, Y Combinator, Airbnb); companies, roles and salary bands are invented sample data.
- No real salaries presented as market fact; no ATS or applicant-tracking claims; the apply panel is explicit about being a demo.
- No dates from the real clock: posted labels are static relative text ('2d ago'), and nothing prints today's date or years.
- The only photograph is hero-office.webp; people in it are background figures with no identifiable faces; everything else is monogram tiles, code-drawn bars and type.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 6 MB.
- Never mention VibeFather inside the site except the footer credit link; all copy is invented US English.
- Respect prefers-reduced-motion: no reveals, no dims, no pops; filtered-out cards hide immediately.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; filters, saves, tabs of the form, preview and mailto links work with keyboard only and visible focus rings.
- Keep the tone broadsheet-plain: no 'rockstar', 'ninja' or 'family'; every string lives in src/content.ts or the posted store.

---
— Prompt by VibeFather · https://vibefather.ai/t/job-board-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
