# Travel Agency Tour Packages Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A three-page website for [BRAND], a small-group tour operator founded in [FOUNDED], running trips across [DESTINATIONS] with a maximum of [GROUP_MAX] travelers. It must work like a real operator's site: a home page with featured trips and the why-us strip, a listing with combined filters (region, length, price, style) and a live count, and a detail page per tour with a summary strip, a day-by-day itinerary accordion, an SVG route map, included and excluded lists, and a booking request form that ends in a client-side confirmation with a reference. Pages: index.html, tours.html, tour.html?t=<slug> (first tour when opened without a query). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Travelers 35–65 who have outgrown hostels and buses — they want small groups, real guides, honest itineraries and a price that explains itself. They compare three operators over a week and book the one whose itinerary reads like a person wrote it.
- Goal: Produce booking requests. Within ten seconds a visitor should see where the operator goes and that groups are small; within two minutes they should be reading a day-by-day itinerary and checking a departure.
- Tone: Knowledgable and plain, like a good guide at dinner on day three. Concrete specifics (miles, hours, ferry names), light humor about weather and knees, no 'unforgettable journey' clichés, no exclamation marks.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/lora (OFL-1.1), @fontsource-variable/public-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Three real HTML pages at the project root: index.html (entry src/main-home.tsx), tours.html (src/main-tours.tsx) and tour.html (src/main-tour.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), tours: resolve(__dirname, 'tours.html'), tour: resolve(__dirname, 'tour.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './tours.html', './tour.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (paper, vellum, card, navy, navy-soft, ink, slate-blue, coral, coral-deep, sand, rule) and fontFamily display ['Lora', 'Georgia', 'serif'], sans ['Public Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 10px and add maxWidth { container: '1240px' }.
  - In src/fonts.ts import '@fontsource/lora/500.css', '@fontsource/lora/600.css', '@fontsource/lora/500-italic.css' and '@fontsource-variable/public-sans'; import src/fonts.ts and src/index.css from all three entry files.
  - File layout: src/content.ts (every string, number, tour, day, departure, filter, testimonial and image path, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', brandInitials, emailDomain = brandSlug without hyphens + '.com'), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with brandSlug + ':'), src/lib/tour.ts (reads the query 'tour.html?t=<slug>' from location.search, returns the matching tour or the first — never a not-found), src/lib/filters.ts (applyFilters(tours, { region, length, price, style }) with the bands defined in content.ts).
  - State: src/store/request.ts is a tiny external store (useSyncExternalStore) holding the booking draft { tourSlug, departure, travelers, name, email, note } and the submitted flag per tour, persisted to localStorage key brandSlug + ':request:<tourSlug>'.
  - Components in src/components/: Header.tsx, MobileMenu.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, StampBadge.tsx (drawn circular stamp), Footer.tsx; home: Hero.tsx, Featured.tsx (TourCard.tsx), WhyUs.tsx, Testimonials.tsx; tours: ToursMasthead.tsx, FilterRail.tsx (RegionPicker, LengthPicker, PricePicker, StylePicker), ResultsGrid.tsx (with empty state); tour: TourHero.tsx, SummaryStrip.tsx, Itinerary.tsx (DayAccordion.tsx), RouteMap.tsx (inline SVG), Inclusions.tsx, BookingForm.tsx (DepartureSelect.tsx, TravelersStepper.tsx, RequestCard.tsx), NextTour.tsx. src/pages/Home.tsx, Tours.tsx, Tour.tsx compose them; every page renders Header and Footer.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. All three HTML files: lang en, <meta name='theme-color' content='#F6F2E9'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index.html '<title>[BRAND] — Small-group tours in [DESTINATIONS]</title>', tours.html '<title>All tours — [BRAND]</title>', tour.html '<title>Tours — [BRAND]</title>' (the tour page sets document.title to the tour name on load).
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the three HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 12 MB.

## Variables
- [BRAND] — Operator name (default: "Northbound Trails"). Invented tour operator name. Used in the wordmark, titles, footer, email (hello@ + brandSlug without hyphens + .com), localStorage keys and booking references (initials, e.g. NT-8104). Never a real operator or travel brand.
- [DESTINATIONS] — Destinations (default: "Norway, Scotland and the Alps"). The three regions the operator runs, comma-separated. Drives the region filter, the hero line, the eight tours' assignments and the route maps. Keep exactly three regions; towns, hotels and ferries inside itineraries stay invented-sounding where they are partners, real where they are public geography (cities, ferry routes).
- [FOUNDED] — Year founded (default: "2013"). Four-digit year. Drives the footer line, the why-us strip ('since [FOUNDED]') and the guides' tenure spans.
- [GROUP_MAX] — Group maximum (default: "12"). The small-group cap as digits. Drives every tour's summary strip, the travelers stepper's maximum and the why-us copy. Keep it 8–16.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/travel-agency-tour-packages-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/travel-agency-tour-packages-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/travel-agency-tour-packages-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
