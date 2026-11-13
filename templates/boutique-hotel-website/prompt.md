# Boutique Hotel Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A three-page static website for [BRAND], a [STAY] above [PLACE]. It must feel like a real, operating hotel: real coastal photographs and matching interior photographs, a rooms catalogue with sizes, capacities, nightly rates in [CURRENCY] and amenities, a client-side availability and booking widget (date-range calendar, guests, room choice, price summary, fake confirmation with reference code), the restaurant and bar with opening hours and menu highlights, seasonal offers, guest reviews, an FAQ, contact details and a map drawn in SVG, plus a local guide page with an interactive SVG map. Pages: index.html (home), rooms.html (rooms and rates), guide.html (local guide).

- Audience: Couples and small families planning a two-to-four-night coastal break, who want to see the rooms, know the exact price and check dates before they commit; plus walkers and food travellers looking for a quiet base.
- Goal: Get a visitor from the first photograph to a priced, date-checked booking request in as few steps as possible, while showing enough of the rooms, food and surroundings to make the stay feel worth it.
- Tone: Calm, specific and warm. Short declarative sentences, concrete facts (sizes, times, distances, prices), dry understatement instead of superlatives. Never 'luxury', 'unforgettable', 'nestled' or 'hidden gem'.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from motion/react) (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL-1.1), @fontsource-variable/hanken-grotesk (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1), @vitejs/plugin-react (dev) (MIT), tailwindcss, postcss, autoprefixer (dev) (MIT), typescript (dev) (Apache-2.0)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with Vite's react-ts template. package.json scripts: dev = vite, build = tsc -b && vite build, preview = vite preview.
  - vite.config.ts: plugins [react()], base './', build.sourcemap false, build.outDir 'dist', build.rollupOptions.input = { main: 'index.html', rooms: 'rooms.html', guide: 'guide.html' } (resolve each with path.resolve(__dirname, ...)).
  - Three HTML entry files at the project root (index.html, rooms.html, guide.html), each with <title>[BRAND] · Home|Rooms & rates|Local guide</title>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, a <div id='root'>, and a module script pointing to src/entries/home.tsx, src/entries/rooms.tsx or src/entries/guide.tsx.
  - src/main.css: @tailwind base/components/utilities; import the fonts there or in src/fonts.ts: @fontsource/cormorant-garamond/400.css, 500.css, 600.css, 400-italic.css; @fontsource-variable/hanken-grotesk; @fontsource/ibm-plex-mono/400.css, 500.css.
  - tailwind.config.ts: content ['./index.html','./rooms.html','./guide.html','./src/**/*.{ts,tsx}']; theme.extend.colors = { paper:'#F4EFE6', shell:'#EAE3D6', ink:'#1F2A30', slate:'#46565E', mist:'#8B979B', rule:'#D3CABB', rust:'#B5532E', 'rust-deep':'#8F3F21', sea:'#DCE4E3', night:'#172126', kelp:'#56634B' }; fontFamily = { display:['"Cormorant Garamond"','Georgia','serif'], sans:['"Hanken Grotesk Variable"','system-ui','sans-serif'], mono:['"IBM Plex Mono"','ui-monospace','monospace'] }; letterSpacing.label = '0.18em'.
  - All copy, rates, room data, menu items, offers, reviews, FAQ, guide places and map pin coordinates live in one file, src/content.ts, exported as typed constants. Components read only from it. When the variable values differ from the defaults, rewrite all copy in content.ts to fit the new brand, place and property while keeping the same structure, counts and lengths.
  - Shared components in src/components: Header, Footer, Reveal (motion wrapper), PhotoBand, BookingWidget (with Calendar, GuestStepper, RoomPicker, PriceSummary, Confirmation), BookingDrawer, Accordion, CoastMap (SVG), SectionLabel.
  - Booking logic in src/lib/booking.ts as pure functions: isUnavailable(date, roomIndex), nightsBetween, priceFor(roomId, checkIn, checkOut, adults, children), referenceCode(input). Dates are handled as local YYYY-MM-DD strings; no date library.
  - Images live in public/images (downloaded files, see Assets) and are referenced as ./images/<file>. public/favicon.svg is a 32x32 rust (#B5532E) rounded square (rx 7) with three paper-coloured horizontal wave strokes.
  - Write ASSETS.md at the project root listing every third-party file: path, source URL, author, license. Add a README.md with npm install / npm run dev / npm run build.

## Variables
- [BRAND] — Hotel name (default: "Skerry House"). Invented property name. Used in the wordmark, page titles, copy and the booking reference prefix.
- [PLACE] — Location (default: "Porthkell Head"). Invented headland, village or valley. Used in copy, the guide and the map labels.
- [STAY] — Property (default: "24-room hotel on a granite headland"). What the place is, with its room count. Room counts in the catalogue must add up to this number.
- [CURRENCY] — Currency symbol (default: "€"). Symbol used for every rate and total. Place it the way the currency is normally written (€165, 1 650 kr).
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/boutique-hotel-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/boutique-hotel-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/boutique-hotel-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
