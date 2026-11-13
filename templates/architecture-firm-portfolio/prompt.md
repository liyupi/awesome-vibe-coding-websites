# Architecture Firm Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A four-page website for [PRACTICE], an architecture practice based in [CITY], working through [APPROACH]. It must read like a good drawing set: a home with one hero project and a tease, a twelve-project index filterable by typology, project detail pages with large photos, a facts block and a drawn SVG floor plan, a studio page (story, approach, people, awards), and a client-side inquiry block. Pages: index.html, projects.html, project.html?p=<slug> (first project without a query), studio.html. Everything runs in the browser; nothing is submitted anywhere.

- Audience: Potential clients (developers, institutions, private commissioners) and peers. They look for rigor: clear facts per project, honest plans, a practice that can explain its approach in three sentences.
- Goal: Produce inquiry emails. Within ten seconds a visitor sees the quality bar; within two minutes they have filtered the typology they build and opened one project.
- Tone: Precise and quiet, like a set of specifications. Short declarative sentences, exact numbers (square meters, years), no poetry about light unless it is structural.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/archivo (OFL-1.1), @fontsource/ibm-plex-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Four real HTML pages at the project root: index.html (entry src/main-home.tsx), projects.html (src/main-projects.tsx), project.html (src/main-project.tsx) and studio.html (src/main-studio.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), projects: resolve(__dirname, 'projects.html'), project: resolve(__dirname, 'project.html'), studio: resolve(__dirname, 'studio.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './projects.html', './project.html', './studio.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (concrete, concrete-deep, paper, ink, ink-soft, rust, rust-deep, hairline, drawing) and fontFamily display ['Archivo Variable', 'Arial', 'sans-serif'], sans ['IBM Plex Sans', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 0px — the practice draws squares — and add maxWidth { container: '1280px' }.
  - In src/fonts.ts import '@fontsource-variable/archivo' and '@fontsource/ibm-plex-sans/300.css', '@fontsource/ibm-plex-sans/400.css', '@fontsource/ibm-plex-sans/500.css'; import src/fonts.ts and src/index.css from all four entry files.
  - File layout: src/content.ts (every string, project, fact, plan label, person, award and image path, typed), src/lib/brand.ts (practiceSlug = [PRACTICE] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = practiceSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with practiceSlug + ':'), src/lib/project.ts (reads the query 'project.html?p=<slug>', returns the matching project or the first — never a not-found), src/lib/filters.ts (applyTypology(projects, key)).
  - State: src/store/inquiry.ts is a tiny external store (useSyncExternalStore) holding { name, email, typologyInterest, note, sent } persisted to localStorage key practiceSlug + ':inquiry'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), SectionNumber.tsx (the numbered-label system), Footer.tsx; home: Hero.tsx, Tease.tsx (ProjectCard.tsx), ApproachStrip.tsx; projects: IndexMasthead.tsx, TypologyBar.tsx, ProjectRow.tsx, EmptyIndex.tsx; project: ProjectHero.tsx, FactsBlock.tsx, PlanDrawing.tsx (inline SVG per project), NextProject.tsx, InquiryCard.tsx (shared with studio); studio: Story.tsx, People.tsx (PersonCard.tsx initials), Awards.tsx, ContactBlock.tsx. src/pages/Home.tsx, Projects.tsx, Project.tsx, Studio.tsx compose them; every page renders Header and Footer.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. All four HTML files: lang en, <meta name='theme-color' content='#F2F1EE'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index.html '<title>[PRACTICE] — Architecture, [CITY]</title>', projects.html '<title>Work — [PRACTICE]</title>', project.html '<title>Work — [PRACTICE]</title>' (the project page sets document.title to the project name on load), studio.html '<title>Studio — [PRACTICE]</title>'.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the four HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 12 MB.

## Variables
- [PRACTICE] — Practice name (default: "Cardinal & Grid"). Invented practice name. Used in the wordmark, titles, footer, email (studio@ + practiceSlug without hyphens + .com) and localStorage keys. Never a real practice.
- [CITY] — City (default: "Montreal, Quebec"). Where the practice is based. Used in the title, story, facts blocks' locations (projects sit in and around it) and the footer. Real cities fine; project streets invented.
- [APPROACH] — Approach (default: "long-life buildings from short-list materials"). One lowercase phrase naming the practice's method. Drives the home approach strip, the studio story's second paragraph and one FAQ-style line. Concrete and repeatable, not poetic.
- [TYPOLOGIES] — Typologies (default: "Housing, cultural, education and retrofit"). The practice's four project typologies, comma-separated, title case. Drives the index filter and every project's typology tag. Keep exactly four.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/architecture-firm-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/architecture-firm-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/architecture-firm-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
