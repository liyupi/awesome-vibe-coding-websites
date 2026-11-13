# Food Truck Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a polished single-page website for [BRAND], an independent [CUISINE] food truck serving [CITY]. Pair an appetite-led editorial hero with an interactive seven-day location schedule and original SVG neighborhood map, a menu anchored by today's [SIGNATURE_DISH] special, and a client-side catering inquiry. Keep every piece of copy, all schedule and menu data, image paths, links, and alt text in src/content.ts; rewrite the default content coherently when the variable values change while retaining the same structure and interactions.

- Audience: Local office workers, market visitors, and neighborhood regulars deciding where to eat now, plus party hosts and workplace organizers comparing food-truck catering.
- Goal: Answer where the truck will be this week, make today's food and prices easy to scan, and turn catering interest into a complete email request without any backend.
- Tone: Warm, quick, generous, and plainly spoken, with the energy of a hand-painted sidewalk board rather than a corporate restaurant chain.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource-variable/bricolage-grotesque (OFL), @fontsource-variable/dm-sans (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './', disable source maps, emit production files to dist/, and never copy src/ into dist/.
  - Import the variable Bricolage Grotesque and DM Sans packages locally; make no remote font requests.
  - Centralize all navigation labels, copy, dishes, prices, schedule entries, image paths, social URLs, and alt text in src/content.ts, initialized from the six variables and rewritten coherently when their values change.
  - Use Motion through motion/react for reveals and small state transitions; use lucide-react for interface icons only.
  - Implement schedule selection, the mobile menu, FAQ accordions, and catering validation with local React state; Tuesday is always the initially selected schedule day for deterministic rendering.
  - On valid catering submission, show a request summary and an Open email draft link addressed to [CATERING_EMAIL]; do not transmit or claim to transmit the request.
  - Draw the neighborhood map as original inline SVG with local labels and pins; use no map tiles, geolocation, address lookup, or external mapping service.
  - Use ./index.html#section-id for navigation anchors, relative paths for every asset, and a plain document title containing [BRAND] plus a local code-drawn favicon.

## Variables
- [BRAND] — Food truck name (default: "Ember & Route"). An invented two-to-four-word mobile food business name.
- [CUISINE] — Cuisine description (default: "Sonoran street food"). A short cuisine phrase used in the eyebrow, introduction, and story.
- [CITY] — Service city (default: "Tucson, Arizona"). The primary city and state or region; rewrite neighborhoods and addresses to suit it.
- [SIGNATURE_DISH] — Signature dish (default: "Mesquite chicken taco"). The dish featured in the daily-special banner and first menu card.
- [CATERING_EMAIL] — Catering email (default: "hola@emberandroute.example"). Destination used only for the visitor-initiated email draft.
- [SOCIAL_HANDLE] — Social handle (default: "@emberandroute"). The handle displayed beside the text-based social links.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/food-truck-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm Paper `#F6EDDA` — Primary page background and light text on dark green.
- Charcoal `#24231F` — Headlines, body copy, outlines, and hard-shadow details.
- Tomato `#D94F35` — Daily-special accents, selected pins, and small editorial highlights.
- Pickle Green `#244C3F` — Location section, primary buttons, and footer background.
- Turmeric `#F2B84B` — Badges, active schedule markers, and small graphic accents.

### Typography
- Display and section headings: Bricolage Grotesque Variable (OFL), weights 600/700/800
- Body, navigation, forms, and labels: DM Sans Variable (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use a 4px base unit. Cap the content at 1440px with 24px mobile and 48px desktop gutters. Use a 12-column desktop grid with 24px gaps, 72px mobile and 112px desktop section padding, 16px label-to-heading gaps, and 28–40px paragraph-to-action gaps. Keep prose to 62 characters and schedule rows at least 72px tall.
- Radius: Use 10px for inputs and buttons, 18px for content cards, 28px for large image frames, and fully rounded pills only for dietary and status badges. Give major images and selected controls a 2px Charcoal outline; reserve a 5px by 5px hard shadow for the primary CTA and avoid nested floating cards.
- Motion: On initial load, reveal the hero eyebrow, headline, copy, and actions from 18px below with a 70ms stagger over 500ms; settle the truck photograph from scale 1.035 to 1 over 700ms.
- Motion: Reveal each major section once with Motion whileInView using opacity 0 to 1 and a 24px rise over 450ms; content must remain visible if the observer or JavaScript motion fails.
- Motion: When a schedule day is selected, crossfade its detail text over 160ms and grow the matching SVG pin from 0.85 to 1 with a 180ms spring; never pan or zoom the map.
- Motion: On hover, shift primary buttons by 2px into their hard shadow and move arrow icons 3px right; FAQ chevrons rotate 180 degrees and mobile navigation fades over 180ms.
- Motion: Under prefers-reduced-motion, remove reveals, smooth scrolling, scaling, and nonessential transitions so every state appears immediately.
- Imagery: Use exactly six locally bundled, AI-generated documentary photographs with warm late-afternoon desert light, tactile surfaces, and a coordinated cream, terracotta, green, and turmeric palette. The hero is a wide environmental photograph of an original unbranded food truck, not a face close-up; dish photographs carry the menu, and cropped hands or a catering spread add human scale without recognizable faces. Draw the map as an original inline SVG with slightly irregular double-line roads, six numbered pins, tiny block shapes, and legible neighborhood labels. Do not substitute remote stock, generic colored placeholders, food illustrations, or additional photography.

## Pages & Sections
### [BRAND] — [CUISINE] food truck in [CITY] (`index.html`)
1. **Header and hero** — Sticky header with a text-only [BRAND] wordmark, Find the truck, Menu, Catering, and Our story links, plus a This week's stops button. The mobile menu exposes the same links in a compact drawer. Hero eyebrow: '[CUISINE] · [CITY]'. H1: 'Big flavor. Always on the move.' Supporting copy: '[BRAND] serves a short menu from a little truck with a weekly route and plenty of room for your next gathering.' Primary CTA: 'Find this week's stop'; secondary CTA: 'See the menu'. Place a Warm Paper next-stop card over the lower-left of the truck image: 'Next stop', 'Tuesday · Cinder Market', '11:30 AM–2:00 PM', '418 Cinder Lane'. Add the small line 'Walk-ups welcome · No preorders needed'. Use hero-truck.webp with its specified alt text.
   Layout: Header is 76px tall on a Warm Paper background with a 1px Charcoal bottom border. The hero uses five columns for copy and seven for a 4:3 image, aligned center with a 40px gap; desktop H1 is clamp(56px, 6.2vw, 92px) at 0.94 line height. Keep the complete headline, CTAs, and large photograph in the first 900px desktop viewport. On mobile, stack copy before a full-width 4:3 photograph and move the next-stop card below the image rather than overlapping its edges.
   Motion: Use the specified hero entrance stagger and image settle. The sticky header gains a subtle 4px bottom shadow only after 24px of scroll; the mobile drawer opens and closes over 180ms.
2. **Daily special banner** — A compact band labeled 'Today's special' leads with [SIGNATURE_DISH], described by default as 'citrus slaw, charred scallion, and smoky red salsa', priced at $5.50. End with 'While it lasts' and a text link 'See the full menu'. When variables change, rewrite the dish description and a suitable price in src/content.ts rather than retaining the default taco copy.
   Layout: Full-width Pickle Green band with Warm Paper text. Inside the standard container, use a four-column desktop row: small Turmeric label, flexible dish and description, price, and arrow link. Stack into two compact rows on mobile with no horizontal scrolling.
   Motion: None; this is a stable utility band, not a marquee.
3. **Weekly schedule and illustrated map** — Heading: 'Where to find us this week'. Intro: 'Seven days, six stops, one little truck. Pick a day to see where we are parking.' Default schedule: Monday — 'Closed for prep'; Tuesday — 'Cinder Market', '418 Cinder Lane', '11:30 AM–2:00 PM'; Wednesday — 'Juniper Yard', '87 Juniper Street', '5:00–9:00 PM'; Thursday — 'Copper Foundry Lot', '220 Copper Row', '11:30 AM–2:00 PM'; Friday — 'Lantern Grove', '15 Lantern Walk', '5:00–10:00 PM'; Saturday — 'Makers’ Meadow', '640 Meadow Loop', '10:00 AM–3:00 PM'; Sunday — 'Agave Park', '92 Agave Avenue', '11:00 AM–4:00 PM'. Tuesday is selected initially. Selecting an open day updates the active row, numbered map pin, and detail panel with venue, full invented address, hours, and 'Walk-ups welcome'. Monday has no pin and its detail says 'We are restocking and making salsa. See you Tuesday.' The original map shows fictional Cinder, Juniper, Copper, Lantern, Meadow, and Agave blocks connected by simple roads; it is illustrative, not geographic navigation.
   Layout: Use a Pickle Green section with a five-column schedule and seven-column map. Each day is a full-width button with day, venue, and hours; the selected row is Warm Paper with Charcoal text and a Turmeric left marker, while unselected rows have a 1px Warm Paper at 30% border. The map sits in a Warm Paper 28px frame with an SVG aspect ratio of 4:3 and a compact detail strip beneath it. On mobile, stack all seven rows before the map and keep every control at least 48px tall.
   Motion: Crossfade the map detail and spring the selected pin as specified. Animate only state changes; do not auto-cycle days.
4. **Menu and today's special** — Eyebrow: 'From the little window'. Heading: 'A short menu, done right'. Intro: 'Six things every day, plus two salsas made each morning.' Default dishes: [SIGNATURE_DISH] — 'citrus slaw, charred scallion, smoky red salsa' — $5.50 — 'Today's special'; 'Ancho beef burrito' — 'slow-braised beef, smoky tomato rice, pickled onion' — $13; 'Citrus cauliflower burrito' — 'roasted cauliflower, black beans, herb crema' — $12 — 'Vegetarian'; 'Charred corn + black bean taco' — 'queso fresco, cilantro, lime' — $5 — 'Vegetarian'; 'Smoky tomato rice' — 'toasted cumin and scallion' — $4.50 — 'Vegan'; 'Cinnamon churro bites' — 'six pieces with cinnamon sugar' — $6. Use signature-taco.webp, ancho-burrito.webp, and cauliflower-burrito.webp for the first three dishes. Include a note: 'Ask about today’s vegan crema and gluten-free options.' Rewrite dish names, descriptions, prices, dietary tags, and alt text together when variables change.
   Layout: Warm Paper background. Start with a four-column section label and eight-column heading. The first three dishes form equal image cards with 4:3 photos, 18px borders, and price aligned opposite the dish name; give the signature card a small Tomato badge. Place the remaining three dishes in a single bordered list with three columns on desktop and stacked rows on mobile. Keep descriptions to two lines at desktop without truncating content.
   Motion: Reveal the three photo cards with a 70ms stagger. On hover, raise a card image by at most 4px and darken its arrow icon; do not create a carousel.
5. **Truck story and service details** — Eyebrow: 'Our story'. Heading: 'Small truck. Long mornings.' Default copy: 'Mara and Theo Bennett started [BRAND] with one plancha, a borrowed cooler, and a belief that lunch should feel like a break. We still prep in small batches, warm tortillas to order, and write the route on the window every Monday.' Add three specific service details: 'Two salsas made each morning', 'A vegetarian option every day', and 'Compostable trays and cutlery'. Use shared-tacos.webp with cropped hands and torsos only. Adapt names, rituals, and food references to [BRAND] and [CUISINE] rather than preserving these details unchanged.
   Layout: Two balanced columns: a large 4:3 photograph with a Turmeric offset block behind its lower-right corner, and copy with three horizontal service-detail rows. Use 40px between columns and keep the heading under 58px. On mobile, place the photograph after the introductory paragraph and before the three details.
   Motion: One restrained section reveal; service rows highlight their small Tomato number marker on hover with no layout shift.
6. **Catering request** — Eyebrow: 'Bring the truck to you'. Heading: 'Your gathering, with a better lunch line.' Intro: 'Office lunches, backyard birthdays, and neighborhood parties across [CITY].' Offer two transparent starting points: 'Street-side drop-off — from $18 per person — 25-guest minimum, two menu choices, setup included' and 'Full truck service — from $1,200 — two hours of service, up to 60 guests, travel within 20 miles included'. Form fields: name, email, event date, guest count, service style select, event location, and dietary notes. CTA: 'Prepare catering request'. Validate required fields, a valid email, guest count above zero, and a selected service style in the browser. On success show a complete summary and 'Your request is ready. Open the email draft to send it to [CATERING_EMAIL]. Nothing has been sent yet.' The Open email draft action uses a prefilled mailto link; include an Edit details action. Use catering-spread.webp beside the offer, not as a decorative background.
   Layout: Use a Tomato section with Charcoal text. The top has five columns for offer copy and seven for a 16:9 catering photograph. Below, place a Warm Paper form spanning eight columns and a four-column sticky aside containing the two price blocks and 'Replies within two business days' as invented business copy. Form controls have visible labels, 12px vertical padding, and inline error text. On mobile, remove sticky behavior and stack offer, image, prices, then form.
   Motion: Reveal the request summary with a 160ms fade and 8px rise; focus the summary heading for screen-reader users. No celebratory animation or false sending spinner.
7. **FAQ and social links** — Heading: 'Before you head over'. Four accordions: 'What happens if it rains?' — 'We post any route change beside the schedule and on our social links. If a stop is canceled, the day is labeled clearly.'; 'Can you handle dietary restrictions?' — 'A vegetarian dish is always on the menu. Tell us about allergies in the catering notes so we can discuss ingredients before you book.'; 'How far ahead should I book catering?' — 'Two weeks works for most drop-off orders. Full truck service is best booked four to six weeks ahead.'; 'Can I order ahead at the truck?' — 'Not right now. Walk up to the window and we will give you a time estimate.' Social heading: 'Follow the route'. Show [SOCIAL_HANDLE] with text links labeled Instagram, TikTok, and Facebook, each using a generic ArrowUpRight icon and a clearly marked placeholder URL from src/content.ts; do not embed social feeds or use brand icons.
   Layout: Two columns on Warm Paper: seven for bordered FAQ rows and five for a Pickle Green social panel with large Warm Paper handle text. Only one FAQ is open at a time, with the first open initially. On mobile, stack FAQ before social links and keep social URLs wrapping rather than overflowing.
   Motion: Accordion content opens with a 180ms opacity transition and chevron rotation; respect reduced motion and preserve native keyboard focus.
8. **Footer** — Repeat the text-only [BRAND] wordmark, the line '[CUISINE] · [CITY]', the four section links, [CATERING_EMAIL], and the three social text links. Add a small 'Schedule and menu are sample content for this demo' note and the optional [CREDIT] link. Do not add legal-page links that lead nowhere.
   Layout: Pickle Green footer with Warm Paper text and a 1px translucent top rule. Use a large but fully visible wordmark on the left, two compact link groups on the right, and a bottom row for contact, sample-content note, and credit. Mobile stacks all groups with 24px gaps and no cropped display type.
   Motion: None beyond link hover color and arrow movement.

## Assets
- image: Generated hero photograph. Exact URL: https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/hero-truck.webp. Target: public/images/hero-truck.webp. Alt: 'A cream and terracotta food truck open for lunch at a desert market'. Use in Header and hero. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record this credit and URL in ASSETS.md.
- image: Generated signature-dish photograph. Exact URL: https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/signature-taco.webp. Target: public/images/signature-taco.webp. Alt: 'Mesquite chicken tacos with citrus slaw and lime on a metal tray'. Use in the first menu card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record this credit and URL in ASSETS.md.
- image: Generated burrito photograph. Exact URL: https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/ancho-burrito.webp. Target: public/images/ancho-burrito.webp. Alt: 'Sliced ancho beef burrito with rice and smoky red salsa'. Use in the second menu card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record this credit and URL in ASSETS.md.
- image: Generated vegetarian-dish photograph. Exact URL: https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/cauliflower-burrito.webp. Target: public/images/cauliflower-burrito.webp. Alt: 'Citrus cauliflower burrito with herbs and pickled onion'. Use in the third menu card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record this credit and URL in ASSETS.md.
- image: Generated lifestyle photograph. Exact URL: https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/shared-tacos.webp. Target: public/images/shared-tacos.webp. Alt: 'Friends sharing tacos beside a food truck, visible only as cropped hands and torsos'. Use in Truck story and service details. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record this credit and URL in ASSETS.md.
- image: Generated catering photograph. Exact URL: https://media.vibefather.ai/assets/066f7d22-9180-4156-bfcd-d599ad7ff656/catering-spread.webp. Target: public/images/catering-spread.webp. Alt: 'A taco catering spread arranged on a sunlit outdoor table'. Use in Catering request. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record this credit and URL in ASSETS.md.
- image: Draw the schedule map and a simple favicon as original inline SVG in code. Use generic roads, blocks, numbers, and pins with no map tiles, logos, or copied illustration. Keep any decorative SVG local and list it as original code in ASSETS.md.
- icon: Use lucide-react (ISC) for MapPin, Clock, ArrowUpRight, Menu, X, ChevronDown, Users, and CalendarDays. Use text labels rather than social-brand icons and do not add separate icon files.
- font: Self-host Bricolage Grotesque Variable through @fontsource-variable/bricolage-grotesque (OFL) and DM Sans Variable through @fontsource-variable/dm-sans (OFL). Record both packages and licenses in ASSETS.md; never use a font CDN.

## Don'ts
- Do not use existing food-truck names, logos, liveries, slogans, copied menu wording, prices, stories, social bios, or recognizable product branding.
- Do not create a mascot, imitate a signature illustration style, reproduce an existing map, use branded location graphics, or include recognizable people's likenesses.
- Do not generate or place readable text, letters, numbers, or logos inside photographs; keep the truck panels unbranded and use the HTML text wordmark for [BRAND].
- Do not use Unsplash, Pexels, Pixabay, Google Images, placeholder-image services, social embeds, or remote stock; use exactly the six specified generated images, original code-drawn SVG, and Lucide icons, all bundled locally.
- Do not hotlink assets, load CDN scripts or styles, use commercial fonts, or request fonts from Google Fonts or any other remote host.
- Do not add a backend, API routes, database, authentication, analytics, map service, geolocation, third-party form endpoint, real ordering, payments, or an actual form submission.
- Never claim the catering request was sent or booked; only validate locally, display a summary, and let the visitor open a prefilled email draft to [CATERING_EMAIL].
- Do not hard-code default-specific copy outside src/content.ts or leave Sonoran names, Tucson locations, taco descriptions, handles, or email addresses unchanged when variables require different content.
- Do not introduce extra pages, a cart, a checkout, a menu carousel, autoplaying schedule tabs, parallax, 3D, or a continuous marquee.
- Do not emit source maps, copy src/ into dist/, use absolute deployment paths, exceed 20 MB in dist/, or require more than the single npm run build command.
- Do not use bare-directory links, broken placeholder anchors, empty FAQ answers, hidden focus indicators, or controls smaller than 44px; every navigation link must target ./index.html with its section hash and every interactive control must work with keyboard and touch.
- Do not allow horizontal overflow, clipped hero content, overlapping mobile cards, unreadable contrast, or motion that ignores prefers-reduced-motion at 1440×900 or 390×844.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemap work, analytics, or keyword-stuffed copy; a plain [BRAND] title and local favicon are enough.
- Do not mention VibeFather inside the demo except through the optional [CREDIT] footer link.

---
— Prompt by VibeFather · https://vibefather.ai/t/food-truck-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
