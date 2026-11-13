# Financial Advisor Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [ADVISOR], an independent fee-only financial advisor in [CITY] focused on [FOCUS], planning sessions at $[HOURLY]/hour. It must earn trust without promising returns: a portrait-anchored hero, a sample-math retirement calculator (age, contribution, return → illustrative chart), a plain-words fee table, three services, invented credentials, and an intro-call booking confirming client-side. One page: index.html with sections (#calculator, #fees, #services, #book). Every figure carries an 'illustrative, not financial advice' note. Everything runs in the browser; nothing is submitted anywhere.

- Audience: Pre-retirees 45–65 with accounts scattered across three former employers, and small-business owners who keep meaning to sort it out. They fear salesmen in advisor clothing; the page must read as the opposite.
- Goal: Book the intro call. Within ten seconds a visitor sees a face, a fee promise and 'fee-only'; within two minutes they've played with the calculator and picked a day.
- Tone: Plain, patient, numerate. Explains jargon in the same breath it uses it. Dry humor about compound interest exactly once.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/pt-serif (OFL-1.1), @fontsource-variable/public-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (warmwhite, mist, charcoal-soft, ink, slate, green-deep, green-mist, brass, rule) and fontFamily display ['PT Serif', 'Georgia', 'serif'], sans ['Public Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 10px and add maxWidth { container: '1080px' }.
  - In src/fonts.ts import '@fontsource/pt-serif/400.css', '@fontsource/pt-serif/700.css' and '@fontsource-variable/public-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, rate, assumption, service, credential, FAQ and image path, typed), src/lib/brand.ts (advisorSlug = [ADVISOR] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = advisorSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with advisorSlug + ':'), src/lib/projection.ts (pure: project({age, monthly, returnPct}) → year-by-year balance to age 85 using monthly compounding; assumptions exported for display).
  - State: src/store/call.ts is a tiny external store (useSyncExternalStore) holding { day, name, email, sent } persisted to localStorage key advisorSlug + ':call'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx, Disclaimer.tsx (the shared 'illustrative, not financial advice' line); Hero.tsx, Calculator.tsx (AgeSlider.tsx, MonthlySlider.tsx, ReturnSlider.tsx, ProjectionChart.tsx hand-rolled SVG), Fees.tsx (FeeRow.tsx), Services.tsx (ServiceCard.tsx), Credentials.tsx (CredBadge.tsx drawn), BookCall.tsx (DayChips.tsx, Confirmed.tsx). src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FBFAF6'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[ADVISOR] — Fee-only financial advice in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the four images. Keep it under 8 MB.

## Variables
- [ADVISOR] — Advisor name (default: "Marcus Bell"). The invented advisor's name. Used in the title, hero, email (hello@ + advisorSlug without hyphens + .com) and localStorage keys. Never a real person or firm.
- [CITY] — City (default: "Portland, Oregon"). Where the practice is. Used in the title, hero line and footer. Real cities fine.
- [FOCUS] — Focus (default: "retirement planning"). The practice's specialty, lowercase. Drives the hero line, the first service card and one FAQ. Keep it a real specialty.
- [HOURLY] — Hourly rate (default: "250"). The planning-session hourly rate as digits. Drives the fee table's first row and the transparency copy. Keep it 150–400.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/financial-advisor-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/financial-advisor-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/financial-advisor-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
