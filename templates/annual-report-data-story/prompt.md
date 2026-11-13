# Annual Report Data Story

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page annual report for [BRAND], which runs [BUSINESS], told as a scroll data story in seven chapters: cover, the year in numbers, growth, revenue mix, offices, a letter from [LEADER], and a PDF download. Every chapter makes one clear point. Every figure, person and place is invented and labeled as sample data.

- Audience: Customers, partners, staff and donors who will give a yearly report three minutes on a laptop or phone, and who are not financial specialists.
- Goal: Have a reader finish knowing the year's four headline numbers and why they moved, then download the PDF.
- Tone: Plainspoken, exact and a little dry, like a good business editor. Short sentences, real units, no corporate filler. It never reads as a regulated filing.

## Stack
- Framework: Vite 5 + TypeScript (no UI framework)
- Styling: Tailwind CSS 3.4
- Libraries: gsap 3 with ScrollTrigger (GSAP Standard (no charge, commercial use allowed)), pdf-lib (devDependency, build script only) (MIT), vite 5 (MIT), typescript 5 (Apache-2.0), tailwindcss 3.4, postcss, autoprefixer (MIT), @fontsource-variable/bodoni-moda (OFL-1.1), @fontsource-variable/newsreader (OFL-1.1), @fontsource/ibm-plex-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Files: index.html, src/main.ts, src/style.css, src/content.json, src/charts/line.ts, src/charts/bars.ts, src/charts/donut.ts, src/charts/map.ts, src/countup.ts, src/rail.ts, scripts/make-pdf.mjs, public/favicon.svg, public/images/, ASSETS.md.
  - package.json scripts: dev is 'vite'; build is 'node scripts/make-pdf.mjs && tsc --noEmit && vite build'. Set 'type': 'module'.
  - vite.config.ts: base './', build.sourcemap false, build.outDir 'dist'. tsconfig.json: strict true, resolveJsonModule true.
  - tailwind.config.js: content ['./index.html', './src/**/*.ts']; theme.extend.colors paper, paper-deep, ink, slate, stone, hairline, accent with the hex values in Design; theme.extend.fontFamily display 'Bodoni Moda Variable', read 'Newsreader Variable', sans 'IBM Plex Sans', each with a serif or sans-serif fallback.
  - src/main.ts imports, in order: @fontsource-variable/bodoni-moda/opsz.css, @fontsource-variable/newsreader/opsz.css, @fontsource-variable/newsreader/opsz-italic.css, @fontsource/ibm-plex-sans/400.css, /500.css, /600.css, then ./style.css. Set font-optical-sizing: auto on html.
  - All copy and every figure live in src/content.json with top-level keys meta, cover, numbers, growth, quarters, mix, offices, letter, download, footer. main.ts fills the DOM from it, and all charts read their data from it. Figures must stay consistent with one another whenever they are rewritten.
  - Images referenced from TypeScript use import.meta.env.BASE_URL + 'images/hero.webp'. The PDF link is ./annual-report.pdf.
  - scripts/make-pdf.mjs reads src/content.json and uses pdf-lib to write public/annual-report.pdf: 3 US Letter pages with StandardFonts.TimesRoman and Helvetica. Page 1: Paper-colored background, a Cobalt rectangle 612 by 180 pt at the bottom, [BRAND], 'Annual Report [REPORT_YEAR]', 'Sample data'. Page 2: the four headline numbers, then the 8 quarterly bars drawn as rectangles. Page 3: the letter text, word-wrapped by hand with widthOfTextAtSize. Standard fonts only encode WinAnsi, so replace the minus sign U+2212 with a hyphen before drawing. The file stays under 100 KB.
  - Register once with gsap.registerPlugin(ScrollTrigger). Put every animation inside gsap.matchMedia() under the condition '(prefers-reduced-motion: no-preference)'. Initial hidden states are set by JavaScript inside that block only, so the HTML and CSS default is always the final state. Call ScrollTrigger.refresh() after document.fonts.ready and after window load.
  - Pulse keyframes and the scroll cue keyframes live in src/style.css, inside @media (prefers-reduced-motion: no-preference). html gets scroll-behavior: smooth under the same query. Every chapter has scroll-margin-top: 56px below 1024px.

## Variables
- [BRAND] — Company or organization name (default: "Fennmark"). An invented company, nonprofit or fund.
- [BUSINESS] — What it does, in a short phrase (default: "refrigerated freight and cold storage for food and medicine"). Rewrites the chapter claims, revenue segments, milestones and the letter.
- [REPORT_YEAR] — The year being reported (default: "2025"). Four digits. Set on the cover in huge numerals and used as the last year of the charts.
- [LEADER] — Letter writer, name and title (default: "Maren Aldous, Chief Executive"). A fictional person. Use a name that fits the portrait, or swap in your own portrait.
- [HERO_IMAGE] — Cover photograph file (default: "hero-cold-yard.webp"). hero-cold-yard.webp or hero-water-tower.webp from the assets list, or your own wide dusk or dawn photo with a dark lower third. Saved to public/images/hero.webp.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/annual-report-data-story in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/annual-report-data-story?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/annual-report-data-story · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
