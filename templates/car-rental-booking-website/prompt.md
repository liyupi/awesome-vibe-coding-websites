# Car Rental Booking Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a polished, multi-view car-rental booking website for [BRAND], serving [AUDIENCE] around [CITY]. The experience runs from a search-first homepage through filterable fleet results, a configurable vehicle detail, and a three-step mock checkout to a local confirmation. Use [BRAND_PROMISE] as the central customer promise and make every price visible before the final demo action.

- Audience: The primary visitors are [AUDIENCE] who want to compare practical rental options quickly, understand what is included, and know the full price before reserving. The template owner is a rental operator, travel startup, or small mobility business that needs a realistic booking interface without backend infrastructure.
- Goal: Help a visitor find a suitable generic vehicle, adjust dates, protection, and extras with immediate price feedback, then complete a believable but explicitly simulated reservation. Keep all fleet, policy, location, rate, and marketing content easy to replace in one content file.
- Tone: Calm, precise, and travel-literate rather than aggressive or luxury-obsessed. Use concise labels, specific inclusions, plain-language policies, and warm editorial copy. The interface should feel dependable and tactile, with no pressure timers, invented scarcity, or hidden fees.

## Stack
- Framework: Vite 6 + React 19 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion 12 (MIT), lucide-react (ISC), @fontsource-variable/bricolage-grotesque (OFL), @fontsource-variable/inter (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold a Vite React TypeScript project at the repository root. Set vite.config.ts to base: './', build.outDir to 'dist', build.sourcemap to false, and build.emptyOutDir to true; npm run build must create only the production site in dist/.
  - Configure Tailwind in tailwind.config.ts with the exact color tokens and font families below. Put global styles, focus states, native date-control styling, print rules, and reduced-motion overrides in src/index.css.
  - Import Bricolage Grotesque and Inter from the two Fontsource variable packages in src/main.tsx. Do not use any remote font stylesheet.
  - Wrap the app in MotionConfig with reducedMotion='user'. Use Motion and AnimatePresence for the specified route, filter, drawer, and checkout transitions; do not add another animation or routing library.
  - Implement a small hash router using window.location.hash and the hashchange event for index.html, #/results, #/vehicle, #/checkout, and #/confirmation. Render index.html content for an empty or unknown hash, and use ./index.html for the home link.
  - Keep every string, variable value, location, vehicle, rate, extra, protection plan, review, policy, and FAQ in src/content.ts. Rewrite variable-dependent copy coherently when the values change; never scatter default brand content through components.
  - Manage search, filters, selected vehicle, extras, protection, and checkout step in one React context with useReducer. Persist only non-sensitive booking state to sessionStorage under the generic key 'rental-booking-v1'; keep card, expiry, and security-code values only in component memory.
  - Use native date inputs and a shared UTC-based rental-day calculation. Default pickup to three days after the visitor's local today and return to six days after today, reject return dates on or before pickup, and calculate rentalDays as max(1, round((returnUTC - pickupUTC) / 86400000)).
  - Create a simple original SVG favicon and route mark from two curved road lines in a rounded square. Use Lucide icons for interface controls only, with accessible labels for icon-only buttons.

## Variables
- [BRAND] — Rental brand (default: "Morroway"). An invented short rental-company name; use it in the wordmark, title, copy, and confirmation.
- [CITY] — Primary service area (default: "Portland, Oregon"). The main pickup region used in search defaults, hero copy, and location guidance.
- [AUDIENCE] — Primary travelers (default: "weekend travelers and small families"). A lowercase phrase describing the people the fleet and copy should serve.
- [BRAND_PROMISE] — Customer promise (default: "Clear prices. Easy roads."). A short original promise used as the hero eyebrow and closing statement.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/car-rental-booking-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/car-rental-booking-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/car-rental-booking-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
