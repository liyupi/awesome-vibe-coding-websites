# Minimal Developer Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A one-page portfolio for [NAME], a [ROLE] focused on [FOCUS], based in [LOCATION]. It must be genuinely minimal: an intro, four selected projects with stack tags, three writing entries, three open-source repo cards (sample stars, drawn language dots), a contact block with a 'now' line, and a light/dark theme toggle that persists and respects the system preference on first visit. One page: index.html with sections (#projects, #writing, #oss, #contact). Everything runs in the browser; nothing is submitted anywhere; all off-page links are '#' placeholders.

- Audience: Engineers and hiring managers who arrive from a link and decide in ninety seconds. They read the bio, two projects and the now-line; anything decorated reads as compensation.
- Goal: Earn the email or the follow. Within ten seconds a visitor knows who, what and where; within two minutes they have seen the best work and the now-line.
- Tone: Plain-spoken engineer: short sentences, verbs first, dry humor at most once per section. No 'passionate crafter of delightful experiences'.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/ibm-plex-mono (OFL-1.1), @fontsource/schibsted-grotesk (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS with darkMode: 'class'. content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper-light, surface-dark, ink, ink-soft, rule, accent, accent-deep, faint) and fontFamily mono ['IBM Plex Mono', 'ui-monospace', 'monospace'], sans ['Schibsted Grotesk', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 6px and add maxWidth { column: '640px' } — a portfolio is a narrow read.
  - In src/fonts.ts import '@fontsource/ibm-plex-mono/400.css', '@fontsource/ibm-plex-mono/600.css' and '@fontsource/schibsted-grotesk/400.css', '@fontsource/schibsted-grotesk/500.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, project, post, repo, stack tag, now-line and link, typed), src/lib/brand.ts (personSlug = [NAME] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = personSlug without hyphens + '.dev'), src/lib/theme.ts (getTheme(): stored 'light'|'dark' or matchMedia fallback; applyTheme toggles document.documentElement.classList 'dark' and updates a meta theme-color).
  - State: src/store/theme.ts is a tiny external store (useSyncExternalStore) over src/lib/theme.ts; the toggle flips it and persists to localStorage key 'theme'.
  - Components in src/components/: ThemeToggle.tsx (Sun/Moon with a 300ms rotate crossfade), Header.tsx, Reveal.tsx (Motion whileInView wrapper), Intro.tsx, Projects.tsx (ProjectRow.tsx with TagList.tsx), Writing.tsx (PostRow.tsx), OpenSource.tsx (RepoCard.tsx, LangDot.tsx), Now.tsx, Footer.tsx. src/pages/Home.tsx composes them.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBFAF7' id='theme-meta'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[NAME] — [ROLE]</title>. Apply the stored theme before first paint with a tiny inline script in index.html's head (read localStorage 'theme' || matchMedia, toggle the 'dark' class on <html>) to avoid a flash.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the two photographs. Keep it under 5 MB.

## Variables
- [NAME] — Name (default: "Noor Alami"). The developer's name. Used in the intro, title, footer, email (hi@ + personSlug + .dev) and the masthead. Always an invented person.
- [ROLE] — Role (default: "Backend Engineer"). The headline discipline. Used in the title, the intro line and one project's context. Keep it one real title, no compound buzzwords.
- [FOCUS] — Focus (default: "Databases and developer tooling"). Title-case phrase naming the specialty. Drives the bio's second sentence, two of the four projects and all three repos. Keep it a real field.
- [LOCATION] — Location (default: "Toronto, Canada"). City and country. Used in the intro's availability line and the footer. Real places are fine; employers stay invented.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/minimal-developer-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper Light `#FBFAF7` — Light-mode page background.
- Surface Dark `#121212` — Dark-mode page background (the primary design).
- Ink `#17181A` — Light-mode text; dark-mode surfaces use a lifted #1A1A1C card instead of borders.
- Ink Soft `#55575C` — Secondary text in light; #A8A9AD in dark — one token, two values.
- Rule `#E8E6E0` — Light-mode hairlines and tag borders; #2A2A2D in dark.
- Accent `#E8590C` — The one accent in both themes: links, the toggle, stack-tag dots, repo language dots, focus ring, the caret in the intro.
- Accent Deep `#C74A08` — Link hover and pressed in both themes.
- Faint `#F1EFEA` — Light-mode hover fills; #1E1E20 in dark.

### Typography
- Mono: name, section labels (uppercase), stack tags, repo stats, availability line, the prompt caret, footer: IBM Plex Mono (OFL), weights 400/600
- Sans: bio, project lines, post descriptions, repo blurbs, now-line: Schibsted Grotesk (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Column max-width 640px, centered, side padding 32px desktop, 20px under 640px — one narrow column, no grid. Section spacing 88px desktop, 64px under 640px. Type scale: name clamp(40px, 7vw, 64px) IBM Plex Mono 600, line-height 1.05; section labels mono 600 12px uppercase letter-spacing 0.18em with an Accent rule after; project titles sans 500 20px; bio sans 400 17px / 1.75 (max-width 58ch); body 15.5px / 1.7; tags mono 400 12px with 6px dot; captions mono 12px Ink Soft. The only button is the toggle (36px square); contact entries are text links. Focus ring everywhere: 2px Accent outline with 3px offset.
- Radius: 6px on repo cards, tag chips and the toggle. Everything else is square — hairlines do the work.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Minimal in both senses: 200–400ms, small distances, nothing loops except the caret blink.
- Motion: Theme toggle: the icon rotates 180deg and crossfades Sun/Moon over 300ms; colors transition 220ms via CSS custom properties (no layout animation); the meta theme-color updates instantly.
- Motion: Intro: the name rises 12px once; the mono caret after the availability line blinks on a 1.2s step loop (disabled under reduced motion).
- Motion: Reveal: rows wrapped in <Reveal> start at opacity 0, translateY(8px) and settle over 400ms --ease-out when 20% visible (Motion whileInView, viewport once). Siblings stagger 40ms — barely perceptible, correct for the genre.
- Motion: Project rows: hover indents the title 4px and the ArrowUpRight nudges 2px; the stack dots brighten.
- Motion: Repo cards: hover lifts 2px and the star count ticks once in Accent; language dots pulse softly (scale 1→1.15→1, 800ms, once).
- Motion: Links: .link-draw grows a 1px Accent underline over 220ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no caret blink, no transitions (theme swaps instantly), reveals render at rest. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Two template photographs, no others: (1) portrait-noor.webp — a low-key professional headshot of a fictional developer (soft window light, dark neutral background, quiet confidence), shown as an 88px circle in the intro and never on the print-only paths (this page has none); it is a placeholder users swap for their own photo. (2) night-desk.webp — a wide moody shot of a home desk at night: two monitors glowing terminal green, mechanical keyboard, headphones on a stand, one desk lamp — the developer-feel anchor placed between Projects and Writing. Both carry 0px corners and a subtle rule-dark border; the night shot dims to 85% under the dark theme automatically. Everything else remains code-drawn (paw→none; terminal glyphs, language dots, theme icon, repo cards). Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Portfolio (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([NAME] = Noor Alami, [ROLE] = Backend Engineer, [FOCUS] = Databases and developer tooling, [LOCATION] = Toronto, Canada). Put every string, tag and list in src/content.ts and render from it. If any variable value differs, rewrite the bio, all project lines, post titles/descriptions, repo blurbs and the now-line so they are specific and believable for the new developer, keeping the same structure and counts (4 projects with 2–4 tags each, 3 posts, 3 repos, 1 now-line). All projects, posts, repos and figures are invented; stars carry '(sample)' in the section caption. Contact: hi@ + emailDomain; handle '@' + personSlug without hyphens; all off-page links '#'-placeholders.
   Layout: n/a
   Motion: n/a
2. **Header** — A single row above the intro: left 'noor.dev' in mono 600 14px (the emailDomain) linking ./index.html; right the ThemeToggle. No nav — the page is short enough that anchors would be decoration (section labels carry ids for deep links anyway).
   Layout: Sticky top, transparent until scrolled 24px, then background at 80% + blur + 1px Rule bottom border. Height 56px.
3. **Intro** — The portrait portrait-noor.webp as an 88px circle (rule-dark ring, alt 'Developer portrait placeholder'), then the name (H1) directly below. The mono role line: '[ROLE] — [FOCUS]' with a blinking caret after. Bio (two sentences): 'I build the parts of systems nobody sees until they break: storage engines, migration tooling, the query linter that keeps your 3am deploys boring. Previously at two startups you haven''t heard of and one database vendor you have.' Availability line in mono 13px: '[LOCATION] · remote-friendly · open to interesting problems' (ending with a styled underscore caret).
   Layout: Light Paper/Surface Dark background, vertical padding 120px top, 64px bottom. Bio max-width 58ch.
4. **Night desk** — A full-column-width photograph night-desk.webp (16:9, alt 'A developer desk at night with two monitors in terminal green') with a mono caption under: 'where the bad commits happen'. It is the page's single wide visual breath between Projects and Writing.
   Layout: Full column width, 0px radius, 1px rule-dark border; caption mono 12px ink-soft 24px below; the image sits 64px after the Projects list and 64px before Writing.
5. **Selected projects** — Section id='projects'. Label 'SELECTED WORK'. Four rows: 1) 'quartermoon' — 'A query planner visualizer that explains plans like a patient senior engineer — drop in an EXPLAIN, get the story.' — tags: Rust · PostgreSQL · WASM — '#'. 2) 'ledgermist' — 'Double-entry storage engine with time-travel reads; the demo database is a fictional bakery, because ledgers deserve joy.' — tags: Go · LSM-tree · gRPC — '#'. 3) 'sqlscratch' — 'Zero-setup SQL scratchpad with shareable snapshots — the link people paste into code review instead of screenshots.' — tags: TypeScript · SQLite · CRDTs — '#'. 4) 'pgtender' — 'A Postgres babysitter: notices bloat before your dashboard does, writes the VACUUM schedule you keep postponing.' — tags: Python · psycopg — '#'.
   Layout: Rows separated by 1px Rule hairlines (no cards): title sans 500 20px with ArrowUpRight on hover, one-liner 15.5px Ink Soft, tags mono 12px with Accent dots. 40px row padding.
6. **Writing** — Section id='writing'. Label 'WRITING'. Three rows (no dates): 1) 'What I learned rewriting a WAL' — 'A write-ahead log is a promise you make to your future self. 4,200 words on keeping it.' — 14 min. 2) 'The migration tool is the product' — 'Nobody upgrades databases for fun; make the boring path the fast path.' — 8 min. 3) 'In defense of small queries' — 'Your ORM is innocent; your WHERE clause is not.' — 6 min. Rows link '#'.
   Layout: Rows with hairlines: title sans 500 17px, description 14.5px Ink Soft, read-time mono 12px right-aligned.
7. **Open source** — Section id='oss'. Label 'OPEN SOURCE' with the caption 'stars are sample data, commits are real effort'. Three repo cards: 1) 'btree-garten' — LangDot Rust — 'Serialization-friendly B-trees for teaching and for prod.' — '★ 1.2k (sample)'. 2) 'explain-it' — LangDot TypeScript — 'EXPLAIN output, translated to English with footnotes.' — '★ 640 (sample)'. 3) 'vacaysched' — LangDot Python — 'Vacuum scheduling that respects your I/O budget.' — '★ 210 (sample)'. Each card: repo name mono 600 15px, blurb 14.5px, stat row. Links '#'.
   Layout: Three cards in a row (16px gap) on Faint surfaces with 1px Rule borders, 20px padding; stacked under 760px.
8. **Now and contact** — Section id='contact'. Label 'NOW'. The now-line (sans 17px): 'Currently: making quartermoon explain parallel plans without hand-waving, and writing the WAL post''s sequel nobody asked for.' Contact rows in mono 14px: Mail 'hi@' + emailDomain (mailto); AtSign '@' + personSlug without hyphens ('#'); Rss 'blog feed' ('#'). A closing line: 'The inbox is open; the calendar is negotiable.'
   Layout: Hairline-topped block; rows as 32px lines with 20px icon-text gaps.
9. **Footer** — One line in mono 12px Ink Soft: '© [NAME]. No trackers, no cookies, no dark patterns — well, one dark mode.'
   Layout: Vertical padding 48px, hairline above, centered.

## Assets
- image: Template photographs made for this design (free to redistribute with the template): https://media.vibefather.ai/assets/dbe3f0a9-91ae-47f3-a42d-16ad896cffb0/portrait-noor.webp → public/images/portrait-noor.webp (Intro avatar, 88px circle; alt 'Developer portrait placeholder'); https://media.vibefather.ai/assets/dbe3f0a9-91ae-47f3-a42d-16ad896cffb0/night-desk.webp → public/images/night-desk.webp (The night-desk band between Projects and Writing; alt 'A developer desk at night with two monitors in terminal green').
- icon: lucide-react only: Sun, Moon, ArrowUpRight, Mail, AtSign, Rss, Star. Stroke width 1.75, 16–24px, color inherits. Stars and language dots are drawn glyphs, never a platform's mark. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 rect rx 6 filled #121212 (dark-first) with a 1px #E8590C border, an Accent terminal caret glyph ('>' + underscore). No other logo: the developer's name is always set as type.
- image: Drawn in code only — no photos, no avatars, no screenshots, no external images. The caret, language dots, star glyphs, theme icons and favicon are SVG/CSS. Write ASSETS.md listing lucide-react (ISC), @fontsource/ibm-plex-mono and @fontsource/schibsted-grotesk (OFL-1.1), noting 'No image assets; all visuals drawn in code.'
- font: Install @fontsource/ibm-plex-mono and @fontsource/schibsted-grotesk and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the theme store is localStorage + classList; every off-page link is a '#' placeholder or mailto.
- All links on this single page are anchors (./index.html#projects, #writing, #oss, #contact) or contact placeholders.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics — and the footer says so.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No real developers, repos, employers or platforms; no avatar or any photo of a person; no platform brand icons (generic drawn glyphs only); stars are sample-labeled.
- No dates or years anywhere: writing entries have read-times, not dates; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion and prefers-color-scheme: no caret blink or transitions under reduce; first visit follows the system theme; the theme choice persists.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors, in BOTH themes; every interactive element works with keyboard only and a visible focus ring; no theme-flash on load (inline pre-paint script).
- Keep copy concrete: no lorem, no 'passionate'; every tag, star and read-time lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/minimal-developer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
