# Personal Blog Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a typography-driven personal blog and essay journal for [AUTHOR_NAME] titled [BRAND] (based in [LOCATION]). Powered by 12 real local Markdown files with front matter, hash routes for Home, Archive, Essay Reader, Tags, About, and Now, plus reader-controlled Light/Dark/Sepia themes, S/M/L font-size controls, a reading progress bar, auto TOC, code blocks with copy, footnotes, pull quotes, series links, RSS preview, and local newsletter sign-up.

- Audience: Independent writers, developer-bloggers, designers, and engineers who want an ownable, fast static personal blog with literary polish.
- Goal: Make reading long-form technical and personal essays genuinely pleasurable while giving the first screen unmistakable editorial character through serif hierarchy, warm paper, tomato accents, and bespoke linocut-style SVG editorial figures.
- Tone: Thoughtful, observant, grounded, first-person essays about craft, small tools, and slow travel—never corporate or clickbaity.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/newsreader (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/newsreader (400, 500, 600, 700, plus 400-italic), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500) in src/main.tsx.
  - Store 12 real Markdown essay files under src/content/posts/*.md with YAML front matter (slug, title, volume, issueNum, readingMins, tags, series, seriesPart, figureKey, excerpt) and load them via import.meta.glob('./content/posts/*.md', { query: '?raw', import: 'default', eager: true }).
  - Persist reading theme ('paper' | 'sepia' | 'dark'), font size ('sm' | 'md' | 'lg'), and local newsletter sign-up state in src/data/readerStorage.ts.

## Variables
- [BRAND] — Publication Title (default: "Fieldwork & Fold"). Personal blog masthead title
- [AUTHOR_NAME] — Writer Name (default: "Clara Lindqvist"). Fictional writer-developer name
- [LOCATION] — Writer City (default: "Gothenburg, Sweden"). City displayed on About and Now pages
- [BIO_LINE] — Short Author Intro (default: "Writer-developer crafting small local-first software, riding slow night trains, and documenting bookbinding workshops."). One-sentence home masthead introduction
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/personal-blog-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm Paper `#FBF8F1` — Default reading canvas background
- Paper Card `#F3EDE0` — Subtle alternating callouts, pull-quote wells, and figure mats
- Editorial Ink `#1B1B1B` — Primary display serif and body reading text
- Muted Graphite `#5A564E` — Captions, reading time, footnotes, and secondary metadata
- Tomato Accent `#E5533D` — Reading progress bar, active nav rule, drop-cap accents, tag pills, and links
- Sepia Paper `#F3E8D2` — Sepia reading theme canvas with #2E2418 ink and #C9442E accent
- Night Ink `#171717` — Dark reading theme canvas with #EFECE6 text and #FF6F59 accent

### Typography
- Editorial Display & Essay Body: Newsreader (OFL), weights 400/500/600/700
- Navigation, Tags & Controls: Inter (OFL), weights 400/500/600
- Code Blocks & Issue Numbers: JetBrains Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Literary magazine rhythm: 64px top bar with integrated reading-theme/font-size controls, 1080px shell width, 68ch optimal essay reading measure, generous 48px–64px vertical cadence.
- Radius: 4px for subtle paper tags and buttons; 8px for code frames, figures, and newsletter boxes.
- Motion: Continuous scroll-linked 3px Tomato reading progress bar pinned at top of viewport on essay pages.
- Motion: Smooth 140ms hover underlines and theme-switch transitions.
- Motion: Respect prefers-reduced-motion across all transitions.
- Imagery: Bespoke linocut-style editorial SVG illustrations drawn in code (matching Warm Paper, Editorial Ink, and Tomato Accent) depicting a coastal night train, hand-stitched notebook press, brass pocket compass, and minimalist terminal bench—each rendered with print registration marks and editorial captions so every page feels authored and visually rich.

## Pages & Sections
### [BRAND] · Essays by [AUTHOR_NAME] (`#/home`)
1. **Editorial Masthead, Reader Controls & Featured Essay Spotlight** — Clean top header with [BRAND] serif wordmark, navigation links (Home, Archive, Tags, About, Now), interactive Reading Theme segmented pill (`Paper` / `Sepia` / `Dark`), Font-Size toggle (`A-` / `A` / `A+`), and RSS feed button (opens a clean copyable XML preview modal). Below: a two-column Editorial Masthead intro for [AUTHOR_NAME] ([BIO_LINE]) paired with a framed Featured Essay spotlight card showcasing Essay 12 ('Notes on Software That Fits in a Weekend') alongside a rich linocut-style SVG illustration (`figureKey: 'press'`) and a 'Read essay' Tomato button.
   Layout: 1080px centered container; 2-column masthead spotlight collapsing to 1 column on mobile.
2. **Latest Essays Index & Local Newsletter Box** — Chronological list of the latest 6 essays showing issue number (`No. 12`), volume tag (`Volume IV`), reading time (`7 min read`), serif title, two-line excerpt, and clickable topic tag chips (`craft`, `travel`, `small-software`, `tools`). Below sits a warm paper Newsletter Sign-Up card ('One dispatch per month, no tracking pixels') saving subscriptions locally in localStorage with instant confirmation, plus subtle footer with RSS link and optional [CREDIT] link.
   Layout: Clean editorial ledger rows separated by 1px hairlines; newsletter card uses a 2-column split on desktop and stacked form on mobile.

### Archive · [BRAND] (`#/archive`)
1. **Searchable Archive by Volume & Tag** — Full list of all 12 seeded Markdown essays with instant keyword search input, Volume filter pills (`All Volumes`, `Volume IV`, `Volume III`, `Volume II` — no calendar years), and Tag filter pills (`All`, `craft`, `small-software`, `travel`, `typography`, `tools`). Grouped visually by Volume with essay counts.
   Layout: Filter toolbar above grouped essay archive rows.

### Essay · [BRAND] (`#/post/software-that-fits-in-a-weekend`)
1. **Long-Form Essay Reader with Auto TOC, Code, Footnotes & Series Nav** — Fixed 3px Tomato reading progress bar at the top edge. Opening without a slug defaults automatically to the latest seeded essay. Includes essay eyebrow (`Volume IV · No. 12 · 7 min read`), large Newsreader title, series banner ('Part 3 of 3 in Small Software Series' with direct links to Parts 1–3), sticky right-hand Auto Table of Contents tracking scroll, formatted paragraphs scaling with the reader's S/M/L font setting, an editorial pull quote with Tomato left rule, a captioned linocut SVG figure, a dark-ink syntax-tinted code block with one-click Copy button, clickable superscript footnotes (`[1]`, `[2]`) jumping smoothly to the Footnotes section at the end, and a 3-card Related Essays strip.
   Layout: Centered 68ch essay column paired with a sticky 210px right TOC on desktop (`>=1080px`); single column on mobile.

### Topics · [BRAND] (`#/tags`)
1. **Tag Directory & Filtered Essay Collection** — Interactive tag index showing post counts per topic (`small-software`, `craft`, `travel`, `typography`, `tools`); selecting any tag filters the matching essays below.
   Layout: Tag pill cloud above matching essay list.

### About · [BRAND] (`#/about`)
1. **Author Essay, Colophon & RSS** — Personal note from [AUTHOR_NAME] in [LOCATION] paired with an editorial linocut studio-desk SVG illustration, a Colophon listing the self-hosted Newsreader/Inter/JetBrains Mono type stack and local Markdown architecture, and a direct RSS XML modal trigger.
   Layout: 2-column editorial bio + colophon card.

### Now · [BRAND] (`#/now`)
1. **Current Projects, Reading Shelf & Workshop Notes** — A focused 'What I am working on right now' page organized into Currently Building, On the Desk (bookbinding & print notes), and Reading List (4 fictional/classic craft books), using a 'Current season' status tag with no calendar dates.
   Layout: Single editorial column with structured 2-column reading shelf cards.

## Assets
- icon: Install lucide-react (ISC) for reader theme switcher, search, RSS, copy code, and navigation icons.
- font: Install @fontsource/newsreader, @fontsource/inter, and @fontsource/jetbrains-mono (OFL) and import in src/main.tsx.
- image: Draw bespoke two-color linocut-style editorial SVG illustrations directly in code for featured essays, article figures, and the About page.

## Don'ts
- No real writer names, real blog publications, or copied essay prose.
- No calendar dates, months, or four-digit years anywhere on the rendered pages (organize archives by Volume IV / III / II and Essay No. 01–12).
- No SEO meta description, Open Graph, or JSON-LD boilerplate in the prompt or app.
- No backend newsletter service, remote analytics, or external CDN fonts/scripts.
- No source maps in production build (build.sourcemap: false) and keep dist/ under 20 MB.
- No clip-path scroll hiding that can leave sections invisible in Chromium.
- No horizontal page overflow at 1440x900 desktop or 390x844 mobile.

---
— Prompt by VibeFather · https://vibefather.ai/t/personal-blog-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
