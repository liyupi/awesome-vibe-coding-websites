# Wedding Photographer Portfolio

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A four-page portfolio for [BRAND], a wedding and portrait photographer working [REGION] since [FOUNDED], taking [YEARLY] by design. It must read like a printed film portfolio: a near-black cinematic home with the photographer's statement, a gallery index of four full weddings, one story page per wedding (opened with a query, first wedding when opened without), and an info page with three packages, testimonials and an inquiry flow whose date check answers against an invented booked list. Pages: index.html, gallery.html, story.html, info.html. A full-screen lightbox with keyboard navigation runs across the story pages. Everything runs in the browser; nothing is submitted anywhere.

- Audience: Engaged couples 26–38 scanning portfolios at midnight on a laptop, plus mothers-of-the-bride forwarded the link. They have seen fifty grid templates; they want to feel the work is scarce (a handful of weddings), the numbers are honest (hours, frames, prices) and the photographer answers email like a human.
- Goal: Book the inquiry call. Within ten seconds a visitor should feel the gallery is cinematic and the photographer is selective; within two minutes they should reach the packages and check their date.
- Tone: Quiet, specific and a little wry, like a photographer editing at 1am. Short declarative lines, concrete numbers, no SEO mush, no 'capturing your special day'.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/italiana (OFL-1.1), @fontsource-variable/manrope (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Four real HTML pages at the project root: index.html (entry src/main-home.tsx), gallery.html (src/main-gallery.tsx), story.html (src/main-story.tsx) and info.html (src/main-info.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), gallery: resolve(__dirname, 'gallery.html'), story: resolve(__dirname, 'story.html'), info: resolve(__dirname, 'info.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './gallery.html', './story.html', './info.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (ink-black, charcoal, graphite, bone, milk, smoke, brass, brass-deep, fern) and fontFamily display ['Italiana', 'Georgia', 'serif'], sans ['Manrope Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 4px — film corners are nearly square — and add maxWidth { container: '1240px' }.
  - In src/fonts.ts import '@fontsource/italiana/400.css' and '@fontsource-variable/manrope'; import src/fonts.ts and src/index.css from all four entry files.
  - File layout: src/content.ts (every string, number, wedding, frame, caption, package, testimonial, booked date, FAQ answer and image path, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com', mailto = 'hello@' + emailDomain), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':'), src/lib/wedding.ts (reads the story query 'story.html?w=<slug>' from location.search, returns the wedding whose slug matches, or the first wedding — never a not-found).
  - State: src/store/inquiry.ts is a tiny external store (useSyncExternalStore) holding the inquiry draft { names, email, date, venue, note } and the submitted flag, persisted to localStorage key brandSlug + ':inquiry'. The lightbox is local component state lifted into src/store/lightbox.ts (shared across the story page) with { open, weddingSlug, index }.
  - Components in src/components/: Header.tsx, Footer.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx (small-caps with thin rules), Lightbox.tsx, WeddingCard.tsx, Frame.tsx (an image with letterbox chrome and caption), Marquee.tsx; home: Hero.tsx, Statement.tsx, Featured.tsx, KindWords.tsx, Approach.tsx; gallery: GalleryIndex.tsx; story: StoryHero.tsx, FrameSequence.tsx, StoryMeta.tsx, NextStory.tsx; info: Packages.tsx (TierCard.tsx), Testimonials.tsx, Inquiry.tsx (DateCheck.tsx, BriefForm.tsx, SentCard.tsx), Faq.tsx. src/pages/Home.tsx, Gallery.tsx, Story.tsx, Info.tsx compose them; every page renders Header and Footer.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. All four HTML files: lang en, <meta name='theme-color' content='#141311'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index.html '<title>[BRAND] — Wedding photography in [REGION]</title>', gallery.html '<title>Full weddings — [BRAND]</title>', story.html '<title>Stories — [BRAND]</title>', info.html '<title>Packages & inquiry — [BRAND]</title>'. story.html opened with no query renders the first wedding, titled for it.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the four HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 12 MB.

## Variables
- [BRAND] — Photographer name (default: "Nora Vale"). The photographer's name as it appears on the site ('Nora Vale', wordmark 'NORA VALE'). Used in the wordmark, titles, email (hello@ + brandSlug without hyphens + .com) and localStorage keys. Always an invented person; never a real photographer or studio.
- [REGION] — Region (default: "the Hudson Valley"). Where the photographer works, lowercase article style ('the Hudson Valley', 'the Pacific Northwest'). Drives the hero line, story place names, travel copy and FAQ. Real regions are fine; venues and towns in the stories stay invented.
- [FOUNDED] — First year shooting (default: "2014"). Four-digit year of the first paid wedding. Drives the statement line, the footer 'since [FOUNDED]' and the About eyebrow.
- [YEARLY] — Weddings per year (default: "18 weddings a year"). The scarcity line ('18 weddings a year, deliberately'). Drives the statement, the packages note and the inquiry copy. Keep the number 10–24.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/wedding-photographer-portfolio in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/wedding-photographer-portfolio?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/wedding-photographer-portfolio · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
