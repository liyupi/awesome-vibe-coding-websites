# Ski Resort Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a four-page static website for [BRAND], an invented ski resort in [LOCATION], for [AUDIENCE]. The hero uses the line [TAGLINE]. The site includes a clearly labeled sample mountain conditions report, an original interactive SVG trail map with difficulty filters and selectable route details, lift-ticket and rental pricing with working browser-only estimators, a lesson finder and request form, and lodging with a stay estimate. Pages are index.html, tickets.html, lessons.html and lodging.html. Every internal link uses a real file name. All conditions, availability, prices and requests are illustrative and local; nothing is live, charged, booked or sent.

- Audience: The visitor audience is [AUDIENCE]: people comparing terrain, weather, lesson options, equipment and the total cost of a mountain trip on desktop or mobile. The template itself suits resort operators and hospitality marketers who need a concrete planning experience rather than a brochure.
- Goal: Let a visitor understand the mountain within ten seconds, find an appropriate trail, estimate tickets and equipment, choose a lesson, and price a stay without encountering a dead control or an invented live-service claim.
- Tone: Clear, capable and quietly warm, like a good mountain host. Use precise terrain, times, inclusions and prices. Avoid luxury clichés, exaggerated powder claims, fake urgency and exclamation marks. All site copy is US English.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/bricolage-grotesque (OFL-1.1), @fontsource-variable/inter (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Keep four root HTML entry files: index.html, tickets.html, lessons.html and lodging.html. Each loads /src/main.tsx and sets body data-page to home, tickets, lessons or lodging; main.tsx selects the matching page component without a router.
  - vite.config.ts: base './', plugins [react()], build.outDir 'dist', build.sourcemap false, assetsInlineLimit 0, and rollupOptions.input containing absolute resolved paths to all four root HTML files. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS with content covering all root HTML files and src/**/*.{ts,tsx}. Add every Design color as a kebab-case theme color, fontFamily display ['Bricolage Grotesque Variable','system-ui','sans-serif'], sans ['Inter Variable','system-ui','sans-serif'], mono ['IBM Plex Mono','monospace'], and a 1360px container.
  - In src/fonts.ts import '@fontsource-variable/bricolage-grotesque', '@fontsource-variable/inter', '@fontsource/ibm-plex-mono/400.css' and '@fontsource/ibm-plex-mono/500.css'. Import fonts and src/index.css from main.tsx.
  - Put every visible string, price, time, trail record, lift record, condition, FAQ, image path and variable default in typed src/content.ts. Derive brandSlug by lowercasing [BRAND] and replacing non-alphanumeric runs with hyphens; derive the fictional email as hello@ plus brandSlug without hyphens plus .example. Components contain no hard-coded default-brand copy.
  - Use src/pages/Home.tsx, Tickets.tsx, Lessons.tsx and Lodging.tsx. Shared components include Header, Footer, Reveal, SectionHeading, Accordion and PhotoFrame. Feature components include ConditionsBar, TrailMap, TicketEstimator, RentalPicker, LessonFinder, LessonRequest and StayEstimator. Keep all calculations in pure functions with whole-dollar rounding.
  - Before building, download the six exact image URLs under Assets into public/images/ using the specified file names. Reference them as ./images/<file> from content.ts so all four root-level pages resolve them under Vite base './'. The build never fetches assets.
  - Create public/favicon.svg as described under Assets. Each HTML file gets lang='en', a local favicon link and a plain title: '[BRAND] — [TAGLINE]' on index, and '[BRAND] — Lift Tickets & Rentals', '[BRAND] — Ski & Snowboard Lessons', or '[BRAND] — Lodging' on the others.
  - Write ASSETS.md at the project root with every image, font and icon package, its source, author and license exactly as described under Assets.
  - The production dist/ must contain all four HTML files, hashed local JS/CSS, woff2 fonts, favicon.svg and the six local images, with no source maps and a total size under 20 MB.

## Variables
- [BRAND] — Resort name (default: "Alderpeak Resort"). An invented resort name used in the wordmark, titles, footer, sample email and localStorage key prefixes. Never use a real resort or VibeFather.
- [LOCATION] — Resort location (default: "Juniper Valley, Colorado"). An invented town or valley with a real state. Used in the hero, lodging address, directions and footer.
- [TAGLINE] — Hero tagline (default: "Find your line above the valley."). A short resort-specific sentence used as the homepage H1 and adapted for alternate values.
- [AUDIENCE] — Primary visitors (default: "Skiers, snowboarders, and mountain families"). A plain-language audience phrase used in introductory copy; lesson and trail recommendations should suit this audience.
- [TICKET_PRICE] — Adult day ticket (default: "129"). Digits only, in USD. Drives every ticket category and multi-day rate: teen 0.80, child 0.55, senior 0.75 of adult; two-day 1.85 and three-day 2.55 of the corresponding one-day rate; round each final per-person rate to a whole dollar.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/ski-resort-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/ski-resort-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/ski-resort-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
