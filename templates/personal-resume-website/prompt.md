# Personal Resume Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A one-page resume site for [NAME], a [ROLE] working in [FIELD], based in [BASE]. It must read top-to-bottom like a great one-pager on screen and print like one too: summary, experience timeline (year ranges, two bullets each), leveled skills, three projects, education and certifications, contact links, and a Download PDF button that opens the print dialog on a dedicated A4 stylesheet. One page: index.html with sections (#experience, #skills, #projects, #education). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Recruiters skimming on a phone between meetings and hiring managers reading properly later. Six seconds for the headline facts, sixty for the timeline; the PDF is what gets forwarded, so it must look intentional, not screenshotted.
- Goal: Get the PDF saved and the calendar link clicked. Within ten seconds a reader knows the role, the field and the years of experience; the print button is visible without scrolling on every screen size.
- Tone: First person, plain and specific. Numbers over adjectives, achievements over responsibilities, no 'passionate', no emoji, one tasteful joke in the footer only.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/source-serif-4 (OFL-1.1), @fontsource-variable/sora (OFL-1.1), @fontsource/spline-sans-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper, mist, ink, slate-ink, rule, cobalt, cobalt-deep, cobalt-mist) and fontFamily serif ['Source Serif 4 Variable', 'Georgia', 'serif'], sans ['Sora Variable', 'system-ui', 'sans-serif'], mono ['Spline Sans Mono', 'ui-monospace', 'monospace']. Set borderRadius DEFAULT to 8px and add maxWidth { sheet: '880px' } — resume width, not marketing width.
  - In src/fonts.ts import '@fontsource-variable/source-serif-4', '@fontsource-variable/sora' and '@fontsource/spline-sans-mono/400.css', '@fontsource/spline-sans-mono/500.css'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, year range, bullet, skill with its level word, project, school, certification and link, typed), src/lib/brand.ts (personSlug = [NAME] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = personSlug without hyphens + '.com').
  - The Download PDF button calls window.print() — no PDF library, no data URL tricks. The print stylesheet is hand-written @media print rules in src/index.css (plus a few screen/print class switches), detailed under Design motion/print.
  - Components in src/components/: Masthead.tsx (NameBlock.tsx, ContactRow.tsx, PrintButton.tsx), Summary.tsx, Experience.tsx (Rail.tsx, RoleCard.tsx), Skills.tsx (SkillGroup.tsx, LevelDots.tsx), Projects.tsx (ProjectCard.tsx), Education.tsx, Availability.tsx (screen only), Reveal.tsx (Motion whileInView wrapper). src/pages/Home.tsx composes them.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FFFFFF'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[NAME] — [ROLE]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the portrait. Keep it under 5 MB.

## Variables
- [NAME] — Name (default: "Rowan Ademola"). The candidate's name. Used in the masthead, title, footer, email (hello@ + name-slug + .com) and the wordmark initials. Always an invented person; never a real one.
- [ROLE] — Role (default: "Staff Backend Engineer"). The headline title. Used in the H1 line, the <title>, the summary's first sentence and the print header. Keep it a real-sounding seniority + discipline.
- [FIELD] — Field (default: "payments infrastructure"). The domain in one lowercase phrase. Drives the summary, the projects' subject and the skills' most specific group. Keep it concrete ('payments infrastructure', 'design systems').
- [BASE] — Base city (default: "Berlin, Germany"). Where the candidate lives and works (remote-friendly noted in copy). Used in the masthead, availability footer and one experience bullet's context. Real cities are fine.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/personal-resume-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Paper `#FFFFFF` — Page background; the only background in print.
- Mist `#F4F6F8` — Screen-only section tint (Skills, Education) and chips; never prints.
- Ink `#1A1D21` — Headlines, body text, rail lines, icon color.
- Slate Ink `#565D66` — Secondary text, bullet bodies, captions, level words.
- Rule `#E5E7EB` — 1px hairlines, card borders, rail ticks, dividers.
- Cobalt `#2B4BD8` — The one accent: links, the PDF button, rail markers, level dots, focus ring, section eyebrows.
- Cobalt Deep `#2139AE` — Link hover, button pressed.
- Cobalt Mist `#EDF1FE` — Skill group panels on screen (screen only); the level-dot track.

### Typography
- Display: the name, H2 section titles, role titles, school names: Source Serif 4 (OFL), weights 600/700
- Text and UI: summary, bullets, skills, buttons, contact rows: Sora (OFL), weights 400/600
- Year spans, section eyebrows (uppercase), location lines, page hints: Spline Sans Mono (OFL), weights 400/500

### Layout & motion
- Spacing: 8px base unit. Sheet max-width 880px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column with a left rail for Experience (rail at 32px). Section vertical padding 72px desktop, 56px under 1024px — resume density, not landing-page air. Type scale: the name clamp(44px, 7vw, 72px) Source Serif 4 700, line-height 1.0; role line Sora 600 20px Slate Ink; H2 section titles Source Serif 4 700 22px with a mono eyebrow above; body Sora 400 15.5px / 1.7 (max-width 68ch); bullets 15px / 1.65; year spans Spline Sans Mono 500 12.5px Cobalt; caption mono 12px Slate Ink. Buttons: height 44px, Sora 600 13.5px. PDF button: Ink fill, Paper text. Contact links: Sora 400 14px Slate Ink, hover Cobalt. Focus ring everywhere: 2px Cobalt outline with 3px offset.
- Radius: 8px on cards, buttons and chips. The rail markers and level dots are circles (999px). Nothing else rounds.
- Motion: Screen-only. Print media queries disable all of it by definition (motion rules live in screen-scoped CSS and components render at rest when printing).
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1). Restrained — a resume should feel calm.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(10px) and settle over 500ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 50ms.
- Motion: Masthead: the name rises from 16px; the contact row and PDF button fade in 150ms later; the role line's thin rule draws outward from the text.
- Motion: Experience rail: a 2px Ink rail grows downward as the section scrolls (scaleY, useScroll on the list); each role's marker dot fills Cobalt as its card reaches 60% view; cards settle with the standard reveal.
- Motion: Level dots: the five dots fill one-by-one (80ms stagger) when a skill group first enters view — quiet, once.
- Motion: Links: contact and project links get the .link-draw underline (220ms); external-link arrows nudge 2px right on hover.
- Motion: Print button: on click it briefly reads 'Opening print dialog…' while window.print() fires; on the print stylesheet it disappears entirely.
- Motion: prefers-reduced-motion: reduce — all reveals render at rest, the rail shows fully drawn, no dot stagger. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Motion: @media print (hand-written in src/index.css, not Tailwind-generated): @page { size: A4; margin: 14mm 16mm } — the whole page becomes one flowing sheet: hidden: the print button, availability footer, section tints (Mist panels print white), chips' fills and all interactive affordances; body text drops to 10.5pt, the name to 26pt, H2s to 13pt with a 0.5pt rule; the experience rail prints as a thin left rule with square markers; year spans print in Cobalt (browsers keep colors with 'print backgrounds' but the layout must survive without it: markers and dots also have 0.5pt ink outlines); links print as text followed by their URL in parentheses via ::after with content from data-print-url attributes (mailto/handles included, socials skipped); page-break rules: never inside a RoleCard or ProjectCard (break-inside: avoid), the sheet targets one page and gracefully flows to two if copy grows; a print-only footer line with the email printed at the page bottom via position: fixed. The portrait prints at 22mm square in the header's right column.
- Imagery: One AI-generated professional portrait (3:4) of a fictional person matching the default candidate — a composed studio headshot with soft daylight, neutral warm background, smart-casual dress — used in the masthead on screen and in the print header. It is a template placeholder: users replace it with their own photo. No other photos; rules, rail, dots and chips remain drawn in code. Icons: lucide-react only, stroke width 1.75, used sparingly.

## Pages & Sections
### Resume (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([NAME] = Rowan Ademola, [ROLE] = Staff Backend Engineer, [FIELD] = payments infrastructure, [BASE] = Berlin, Germany). Put every string, year range, bullet, skill, project, school and certification in src/content.ts and render from it. If any variable value differs, rewrite the summary, all bullets, skill groups, projects, schools and certifications so they are specific and believable for the new candidate, keeping the same structure and counts (4 roles with 2 bullets each, 3 skill groups of 4–6 skills, 3 projects, 2 education rows, 2 certifications). All employers, projects and schools are invented; year ranges are closed ranges ending 2025 (no 'present' tied to the clock). Contact: hello@ + emailDomain; handle '@' + personSlug without hyphens; links '#'-placeholders for portfolio and calendar, marked as such. Portrait: portrait-rowan.webp is an AI-generated fictional person matching the default [NAME] (a fictional software engineer, not resembling any real individual); it is a placeholder — users swap in their own headshot, and the alt text stays generic ('Professional portrait placeholder').
   Layout: n/a
   Motion: n/a
2. **Masthead** — Two columns. Left: the name (H1), role line '[ROLE] · [FIELD]' with a thin rule after it, and the ContactRow (Mail, AtSign, MapPin, Link2 icons as before). Right: the portrait photo portrait-rowan.webp — a 120px square (rounded 8px) professional headshot of a fictional software engineer — beside the PrintButton (primary, 'Download PDF' with Download icon, caption 'A4 · one page · no watermark'); the photo also prints in the header at 22mm square. The photo sits 16px left of the button block, vertically aligned with the name.
   Layout: Paper background, vertical padding 96px top. Two columns: name+contact block (8 cols) and portrait+button block (4 cols, right-aligned, row layout with 16px gap). Under 640px: stacked, portrait 96px beside the name in a row, button full-width below.
3. **Summary** — Section eyebrow 'SUMMARY' (mono). One paragraph (max-width 62ch): 'Backend engineer with eleven years in [FIELD], the last six leading small platform teams. I like systems that fail loudly and teams that write things down: idempotent payment flows, honest on-call, and postmortems that change code. Currently looking for a staff role where the hardest problems are organizational with technical teeth.'
   Layout: Paper, 72px section padding; the paragraph only — resume restraint.
4. **Experience** — Section id='experience'. Eyebrow 'EXPERIENCE'. Rail with role cards: 1) 'Ledgerline Payments' — 'Staff Backend Engineer' — '2022–2025' — '[BASE] · payments core' — bullets: 'Led the idempotency rework across three payment rails; duplicate-charge incidents went from monthly to zero, and the design doc became the team''s onboarding chapter.' / 'Cut p99 payout latency 41% by moving reconciliation to a streaming consumer — then deleted the batch job nobody missed.' 2) 'Cartwheel Commerce' — 'Senior Backend Engineer' — '2019–2022' — 'Remote' — 'Owned checkout''s service mesh migration; shipped behind flags, rolled back twice on purpose, landed with zero downtime minutes counted.' / 'Introduced RFC-driven design reviews; six months later, the team''s pages on Fridays were about capacity, not surprises.' 3) 'Northgate Health' — 'Backend Engineer' — '2016–2019' — 'Rotterdam' — 'Built the scheduling API five clinics still run on; the version field exists because I learned humility there.' / 'Automated the release train from a Friday ritual to a button; the button has guards, because it earned them.' 4) 'Independent' — 'Backend Developer' — '2014–2016' — 'Freelance' — 'Shipped eleven small-business backends; kept the lights on and the invoices honest.' / 'Learned that most 'scaling problems' are indexing problems wearing a costume.'
   Layout: Rail at left (2px Ink, growing on scroll), markers 10px Cobalt dots; cards 3-col-offset text: company Source Serif 4 700 19px, role Sora 600 15px, span mono 12.5px Cobalt, context caption mono 11.5px Slate Ink, bullets with 0.5pt Rule markers. Cards avoid page breaks in print.
5. **Skills** — Section id='skills'. Eyebrow 'SKILLS' and the caption 'Levels in plain words — dots are a summary, not a certificate.' Three groups on Cobalt Mist panels (screen): 'Languages' — Go 'expert ●●●●●', TypeScript 'strong ●●●●○', SQL 'strong ●●●●○', Rust 'working ●●●○○'; 'Infrastructure' — Kubernetes 'strong', PostgreSQL 'expert', Kafka 'strong', Terraform 'working', Redis 'strong'; 'Ways of working' — 'On-call design', 'Incident review facilitation', 'RFC culture', 'Migration-by-flag', each with a two-dot note 'practiced daily'. Level words stay; dots render from the level number.
   Layout: Mist background on screen (white in print with a Rule border). Three columns; skills as rows (name left, level word + dots right). Under 860px: stacked.
6. **Projects** — Section id='projects'. Eyebrow 'SELECTED PROJECTS'. Three cards: 1) 'swamprat' — 'An idempotency toolkit for payment backends' — 'What: a small library that wraps any write with an idempotency key and a store. Why: every rails'' docs hand-wave this. Result: 1.2k weekly installs and the doc''s diagrams stolen by three conference talks (credited).' — link '#' placeholder. 2) 'ledger-garden' — 'Local ledger sandbox with deterministic chaos' — 'What: a Postgres-backed double-entry sandbox that injects failures you can rehearse against. Why: reviewing incident responses needs a gym, not an outage. Result: used by two teams'' game-days; PRs welcome.' — '#'. 3) 'papyr-trail' — 'RFC-to-changelog pipeline' — 'What: turns merged RFC documents into changelog entries and migration notes. Why: writers write; historians automate. Result: three open-source teams run it on their docs repos.' — '#'.
   Layout: Paper. Three columns; cards with a Rule border, name mono 700 14px Cobalt, what/why/result as three compact lines Sora 14px / 1.6 with bold lead-ins. Under 860px: stacked.
7. **Education and certifications** — Eyebrow 'EDUCATION'. Rows: 'Delft University of Technology' — 'MSc Computer Science — distributed systems track' — '2012–2014'; 'University of Lagos' — 'BSc Computer Science' — '2008–2012'. Certifications (compact, two to a row): 'Certified Kubernetes Administrator' — 'CKA'; 'PostgreSQL Professional' — 'PGCE'.
   Layout: Mist band (screen). Rows: institution Source Serif 4 600 16px, degree Sora 14px, span mono right-aligned. Certifications as two chips with a BadgeCheck icon each.
8. **Availability footer (screen only)** — A centered band: 'Available for staff-plus roles from spring — remote or [BASE].' with a calendar-link button 'Book an intro call' ('#' placeholder) and the mono caption 'References on request · The PDF button above is not a metaphor.' Bottom line: '© [NAME]. Set in Source Serif 4 and Sora; printed on one page since 2025.'
   Layout: Paper with a Rule top border, vertical padding 64px, hidden entirely in print except the print-only footer rule (email printed at page bottom).

## Assets
- image: Template portrait made for this design (free to redistribute with the template): https://media.vibefather.ai/assets/98e01289-ef2c-4727-a829-34a3c0872fb8/portrait-rowan.webp → public/images/portrait-rowan.webp (Masthead on screen at 120px and print header at 22mm; alt 'Professional portrait placeholder').
- icon: lucide-react only: Mail, AtSign, MapPin, Link2, Download, ArrowUpRight, BadgeCheck, Briefcase, GraduationCap. Stroke width 1.75, 16–24px, color inherits. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 rect rx 6 filled #FFFFFF with a 1px #1A1D21 border, the initials '[RA]' in Spline-Sans-style drawn strokes (simplified geometric letterforms), Cobalt bracket glyphs. No other logo: the name is always set as type.
- image: Drawn in code only — no photos, no headshot, no logos, no badges. Rail markers, level dots, chips, the favicon and print markers are SVG/CSS. Write ASSETS.md listing lucide-react (ISC), @fontsource-variable/source-serif-4, @fontsource-variable/sora and @fontsource/spline-sans-mono (OFL-1.1), noting 'No image assets; all visuals drawn in code.'
- font: Install @fontsource-variable/source-serif-4, @fontsource-variable/sora and @fontsource/spline-sans-mono and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the PDF button is window.print() on a hand-written print stylesheet; contact and project links are mailto or '#' placeholders.
- All links on this single page are anchors (./index.html#experience, #skills, #projects, #education) or contact placeholders.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No real people, employers, schools or certifying bodies as the candidate's facts; the masthead portrait is an AI-generated fictional person, not any real individual; no vendor logo walls or certification badge images.
- No absolute dates: year ranges only, closed (ending 2025), no 'present'; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion on screen, and print must be motion-free by construction: the print stylesheet strips every screen-only affordance and renders text-first.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; every link and the print button work with keyboard only and a visible focus ring; the print output must be a legible one-page (overflowing gracefully to two) A4 sheet with URLs expanded.
- Keep copy concrete: no lorem, no 'results-driven professional'; every bullet, level and year lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-resume-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
