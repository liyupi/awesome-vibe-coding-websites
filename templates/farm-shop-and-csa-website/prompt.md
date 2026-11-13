# Farm Shop and CSA Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a polished three-page website for [BRAND], an invented small farm at [LOCATION] known for [FARM_FOCUS]. The site combines a seasonal produce calendar, an interactive [CSA_SEASON] configurator, a four-product farm shop, the farm's story, and visit events for [PICKUP_AREA].

- Audience: Local households comparing CSA options, shoppers looking for farm produce and pantry staples, and visitors planning a practical farm event or pickup.
- Goal: Help visitors understand what is in season, configure and save a CSA share plan, assemble a pickup order, and reserve event places through clear client-side interactions.
- Tone: Warm, plain-spoken, capable, and rooted in daily farm work. Use concrete crop names, quantities, prices, hours, and pickup instructions; avoid rustic clichés, health claims, sustainability superlatives, and faux handwritten slogans.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (Motion for React) (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/dm-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './', build.outDir to 'dist', and build.sourcemap to false.
  - Configure Vite rollupOptions.input for index.html, csa.html, and shop.html, each with a small React entry that shares components and src/content.ts.
  - Define the exact color tokens, Fraunces and DM Sans families, container widths, shadows, and keyframes in the Tailwind configuration and src/index.css.
  - Import @fontsource-variable/fraunces and @fontsource-variable/dm-sans locally; never request a font stylesheet from a remote service.
  - Keep all variable values, navigation labels, crop data, share options, pickup points, products, people, events, FAQs, and interface copy in src/content.ts so changing the variables triggers a coherent rewrite.
  - Use React state with localStorage for the share plan, cart, event reservations, and saved pickup order; make no network requests and show only honest on-device confirmations.
  - Download the six listed images into public/images and reference them with relative paths; create ASSETS.md at the project root with every image, font, and icon credit.
  - Use Motion for React for section reveals, modal and drawer transitions, and calendar updates, plus CSS for hover states; disable nonessential movement when prefers-reduced-motion is set.

## Variables
- [BRAND] — Farm name (default: "Hazel & Furrow Farm"). An invented farm or cooperative name used throughout the site.
- [LOCATION] — Farm address (default: "18 Meadow Gate, North Elms, Vermont"). A fictional but believable street address and region.
- [FARM_FOCUS] — Farm focus (default: "vegetables, herbs, and pasture-raised eggs"). The main products and growing focus; rewrite crops and products to match.
- [CSA_SEASON] — CSA season name (default: "Summer Share"). The current share name used in the announcement, calendar, and builder.
- [PICKUP_AREA] — Pickup area (default: "the Upper Valley"). The local service area; rewrite pickup-point names and directions to fit.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/farm-shop-and-csa-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Field `#24362A` — Deep green header, footer, primary text, and dark section background
- Ink `#30352D` — Body copy and readable secondary text
- Cream `#F3EDDF` — Main page background
- Paper `#FFFBF2` — Product surfaces, forms, and calendar rows
- Sage `#D7DFC8` — Selected controls, subtle bands, and availability accents
- Terracotta `#A94328` — Primary buttons, active links, and key prices; pair with white text
- Pollen `#E8B44F` — Small seasonal markers and decorative highlights only

### Typography
- Display and section headings: Fraunces Variable (OFL), weights 400/500/600
- Body, navigation, controls, and data: DM Sans Variable (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use an 8px base grid, a 1280px maximum content width, 32px desktop gutters and 20px mobile gutters. Desktop sections have 104–128px vertical padding; mobile sections have 64–76px. Hero headline is clamp(3.5rem, 6vw, 6.5rem) with 0.94 line-height, section headings are clamp(2.25rem, 4vw, 4rem), and body copy stays within 62 characters per line.
- Radius: Use restrained 2px radii on buttons and inputs, 14px on product and summary surfaces, and one distinctive 160px upper-left arch on the hero photograph. Use 1px Field borders at 18% opacity and soft, short shadows rather than floating every section in a card.
- Motion: Reveal major section headings and content with a 24px upward movement and opacity transition over 500ms, staggered by 70ms and triggered once at 15% visibility.
- Motion: Move the hero photograph no more than 40px on scroll with a restrained parallax effect; keep the headline and controls stationary.
- Motion: Crossfade seasonal rows and share-manifest changes in 160–220ms without changing container height.
- Motion: Drawers and modals use a 240ms ease-out transform and fade, trap keyboard focus, close on Escape, and restore focus to their trigger.
- Motion: Hover product images scale to at most 1.025 and buttons shift by no more than 2px; all nonessential animation is removed for reduced motion.
- Imagery: Use the six supplied documentary-style farm photographs as one coherent shoot: warm golden-hour light, muted forest green, cream and terracotta, realistic textures, and gentle 35mm grain. The first screen must show the large harvest scene, not typography alone. Product cards use the supplied still lifes, and the story uses the environmental working portrait with no visible face. Do not add other photos, recognizable people, text within images, logos, or branded packaging. Crop with object-fit while preserving the subject and supply the listed alt text.

## Pages & Sections
### Farm home, seasons, story, and events (`index.html`)
1. **Shared announcement, header, and footer** — On every page, show a slim Field-green announcement bar: '[CSA_SEASON] requests are open · Farm pickup and [PICKUP_AREA] collection points.' Below it, place the [BRAND] wordmark with an original simple three-line furrow SVG, navigation links 'Seasons' to ./index.html#seasons, 'CSA Shares' to ./csa.html, 'Farm Shop' to ./shop.html, 'Our Story' to ./index.html#story, and 'Visit' to ./index.html#visit. The right CTA reads 'Build your box'. The shared footer contains [BRAND], [LOCATION], 'Farm shop Wed–Fri 10 AM–6 PM · Sat–Sun 9 AM–4 PM', the same file-name navigation links, and the optional credit link.
   Layout: The announcement is 34px high. The sticky 78px header has a Cream background at 94% opacity, a fine bottom border, and a 1280px inner row. Desktop uses left brand, centered navigation, right CTA; mobile uses brand, cart count, and a menu button opening a full-width panel beneath the header. Footer is a deep-green two-column block with a large brand line and practical details.
   Motion: The header gains a subtle shadow after 24px of scroll. The mobile panel fades and slides down 12px; reduced motion removes the slide.
2. **Harvest hero** — Eyebrow: 'A small farm for [PICKUP_AREA]'. Headline: 'Good food, grown close to home.' Body: 'Seasonal [FARM_FOCUS] from [BRAND], packed for your table and your week.' Primary CTA 'Choose your CSA share' links to ./csa.html; secondary CTA 'Shop this week’s harvest' links to ./shop.html. Add a small caption under the image: 'Morning harvest · [LOCATION]'. A compact Paper note overlaps the photo’s lower-left corner with 'IN THE BOX THIS WEEK' and 'Leafy greens · roots · herbs · a pantry extra'.
   Layout: At desktop, use a 12-column, 680px-minimum-height hero: copy occupies five columns and vertically centers; the hero-harvest image occupies seven columns with a 4:3 frame and 160px upper-left arch. Keep the headline to four short lines at most. On mobile, copy comes first and the full-width image follows, with the weekly note positioned inside the lower edge rather than covering the headline.
   Motion: The headline lines reveal in a 70ms stagger while the photograph wipes in from the bottom with a clipped mask. Apply the specified 40px maximum image parallax afterward.
3. **This week at the farm** — Three concise updates: 'HARVEST / Rainbow chard, carrots, and basil are at their peak.' 'FARM SHOP / Order by Wednesday for a Friday pickup.' 'NEXT VISIT / Morning field walk · Saturday, 9:30 AM.' Each has a text link to the relevant section or page.
   Layout: A bordered horizontal band divided into three equal columns on desktop and stacked rows on mobile. Labels are 11px uppercase with letter spacing; updates use 16px DM Sans. No icon cards or extra containers.
   Motion: Rows reveal together with a small opacity fade only.
4. **Seasonal produce calendar** — Eyebrow 'THE PRODUCE CALENDAR'; heading 'Know what’s coming home.' Intro: 'Harvest shifts with weather, but the rhythm stays useful. Explore a typical [CSA_SEASON] and plan your kitchen.' Provide Spring, Summer, Autumn, and Winter tabs with Summer selected initially. Summer rows are: Tomatoes / July–September / PEAK; Basil / June–September / PEAK; Sweet corn / July–August / COMING IN; Zucchini / June–August / PEAK; Carrots / June–October / AVAILABLE; Peppers / July–September / COMING IN. Include a note: 'Typical harvest windows, not live inventory.' The adjacent panel uses csa-box.webp with heading 'A high-summer box' and list 'Tomatoes · basil · carrots · zucchini · eggs · one pantry surprise'.
   Layout: At desktop, an eight-column calendar sits beside a four-column photo panel. Tabs form a single bordered rail, rows use three aligned columns with generous 18px padding, and status is a small uppercase label with a colored dot rather than a pill cloud. On mobile, tabs scroll horizontally, crop and status stay visible, and harvest window moves beneath the crop name. The photo panel stacks below.
   Motion: Changing tabs crossfades and shifts rows 8px over 180ms while the calendar height remains stable.
5. **CSA introduction** — On a Field-green background, eyebrow 'CSA, WITHOUT THE GUESSWORK', heading 'One farm. A box that fits your week.', and copy 'Choose your size, pickup point, and rhythm. Every share follows the harvest and includes a useful pantry extra.' Show three steps: '01 Pick your box — Little, Kitchen, or Family.' '02 Choose pickup — Farm gate or a neighborhood point.' '03 Cook with the season — A crop note and simple use ideas in every box.' CTA 'Build your [CSA_SEASON]' links to ./csa.html#share-builder. Include 'From $24 per box · pause or change before the next packing day.'
   Layout: A 12-column split with csa-box.webp cropped as a quiet five-column image and text in seven columns. Steps are separated by thin translucent horizontal rules, not individual cards. On mobile, text precedes the image and all CTAs become full width.
   Motion: The three steps reveal in sequence; no pinned scrolling.
6. **Farm shop preview** — Eyebrow 'FROM THE FARM STAND'; heading 'Good things for the weekly table.' Intro 'A short shelf of what we grow and make, ready for local pickup.' Show four products with the same data and cart behavior as shop.html: Weekly Harvest Basket $28 each; Pasture-Raised Eggs $7 per dozen; Orchard Preserves $9 per 9 oz jar; Stone-Milled Farm Loaf $8 per loaf. Each has an 'Add to pickup order' button. Link 'Browse the whole farm shop' to ./shop.html.
   Layout: Four equal product columns at desktop, two at tablet, and one at mobile. Images are square with a subtle bottom border; name and price share a baseline row, unit and short availability note sit below. Do not wrap each product in a heavy floating card.
   Motion: Adding a product briefly changes the button to 'Added' and updates the header cart count; the cart drawer opens only when the visitor activates the cart control.
7. **Farm story** — Anchor id 'story'. Eyebrow 'ROOTED HERE'; heading 'Small fields. Long relationships.' Copy: 'We farm 14 acres outside North Elms, growing 32 crop varieties in rotation and keeping the shop stocked with a few things we use in our own kitchen.' Second paragraph: 'Mara Ellison leads the growing work and Theo Bennett runs packing days. Their rule is simple: harvest close, pack carefully, and tell people exactly what is in the box.' Add three factual markers: '14 acres in rotation', '32 crop varieties', '4 seasons of farm visits'. CTA 'Meet us at the farm' links to #visit. Rewrite names, figures, and regional details when variables change.
   Layout: Use farmer-at-work.webp in a five-column 3:4 frame and story copy in seven columns. Markers form a three-column ruled row beneath the copy. On mobile, image sits above the text at a 4:3 crop with the farmer still centered.
   Motion: The portrait reveals with a gentle clip mask; markers fade in together.
8. **Visit the farm events** — Anchor id 'visit'. Eyebrow 'COME BY'; heading 'See where your food grows.' Intro 'Small-group visits at [LOCATION]. Dress for the field and bring a water bottle.' Event rows: 'JUN 13 · Morning field walk · 9:30–11:00 AM · Free · 12 places · A guided loop through the growing fields and pack shed.' 'JUN 27 · Summer pickling workshop · 2:00–4:00 PM · $18 · 10 places · Make one jar to take home; ingredients and tools included.' 'JUL 11 · Farm-table picnic · 5:30–8:00 PM · $32 · 24 places · A casual shared menu served beside the lower field.' Each CTA reads 'Reserve a place' and opens a modal with name, email, party size, and the selected event. Validation is inline; confirmation says 'Your event request is saved on this device.'
   Layout: The section heading occupies four columns and events occupy eight. Each event is a ruled row with a 72px date block, title and details, and a right-aligned CTA. Mobile rows stack date, title, metadata, and full-width CTA. The modal is centered at 520px maximum width with a Paper background.
   Motion: Event rows reveal with a 60ms stagger; the modal uses the standard 240ms transition.

### CSA share configurator and pickup guide (`csa.html`)
1. **CSA hero** — Eyebrow '[CSA_SEASON]'; headline 'Your share of the season.' Body 'A weekly or every-other-week box of [FARM_FOCUS], packed at [BRAND] for [PICKUP_AREA].' Primary CTA 'Choose your share' anchors to #share-builder; secondary CTA 'See the produce calendar' links to ./index.html#seasons. Include three reassurance notes: 'Three useful sizes', 'Four pickup choices', 'Change before packing day'.
   Layout: A compact 420px editorial hero with copy in seven columns and a five-column crop of csa-box.webp. The shared announcement and header remain visible above. On mobile the image follows at 4:3 and the reassurance notes wrap into one column.
   Motion: Use the standard heading and image reveal only; no additional parallax.
2. **Interactive share builder** — Anchor id 'share-builder'. Heading 'Build a box around your week.' Step 1 offers Little Share at $24 per box, '1–2 people · 5–6 harvest items'; Kitchen Share at $34 per box, '2–3 people · 7–8 harvest items'; Family Share at $44 per box, '4–5 people · 10–12 harvest items'. Kitchen Share is initially selected. Step 2 offers Farm Gate at [LOCATION], Saturday 9 AM–12 PM, no fee; North Elms Library, Wednesday 4–6 PM, no fee; Upper Valley Co-op, Friday 3–6 PM, $2 handling; Meadow Market Hall, Sunday 10 AM–1 PM, no fee. Step 3 offers Weekly or Every other week. The live summary shows selected size, pickup, frequency, a scaled produce manifest, per-box total including handling, and estimated monthly total using four boxes weekly or two boxes every other week. Fields for name and email are required and validated. The final button reads 'Save my share plan'; success says 'Your share plan is saved on this device. No payment has been collected.' Include 'Harvest substitutions are normal; the final box follows the field.'
   Layout: At desktop, the three steps occupy seven columns and a sticky five-column summary stays below the header. Options are large bordered rows with radio indicators and price on the right; selected rows use Sage with a 2px Field border. The summary is Paper with a 14px radius, a small csa-box image strip, itemized totals, and full-width CTA. On mobile the summary follows the steps and is not sticky.
   Motion: Option selection responds immediately; manifest rows crossfade and the total uses a short 150ms opacity change. Saving shows an inline success panel, not a browser alert.
3. **A season in three boxes** — Heading 'The box changes. The habit stays.' Show three sample manifests: 'Early summer / Snap peas, baby lettuce, spring onions, radishes, herbs, eggs, farm loaf.' 'High summer / Tomatoes, zucchini, basil, carrots, peppers, eggs, orchard preserves.' 'Early autumn / Winter squash, potatoes, kale, onions, apples, eggs, farm loaf.' Note: 'Examples show the Kitchen Share. Quantities scale with your selected size.'
   Layout: Three equal editorial columns separated by vertical rules on desktop and horizontal rules on mobile. Each has a large 01/02/03 index, season title, and readable comma-separated manifest; no extra photographs or icon cards.
   Motion: Columns reveal in a short stagger on entry.
4. **Pickup and flexibility** — Heading 'Pickup should be the easy part.' Four notes: 'Bring a bag — We pack in returnable crates.' 'Running late — Farm-gate boxes stay in the cool room until 6 PM.' 'Away for a week — Change your rhythm before the next packing day.' 'Send a friend — Add their name to your saved plan.' Include a simple three-step line: 'Choose your point → Look for your name → Take your box home.'
   Layout: A Sage-tinted section with a four-column note grid above a wide, ruled three-step line. Mobile uses a two-column note grid and stacked steps with clear arrows rotated downward.
   Motion: Static content with only the standard section reveal.
5. **CSA frequently asked questions** — Five accessible accordion items: 'What if I do not recognize a crop?' — Every box includes a short crop note with storage and preparation ideas. 'Can I switch box sizes?' — Yes; save a new plan before the next packing day. 'Is the monthly total a charge?' — No; it is an estimate from your selected rhythm. No payment is collected by this site. 'What happens in a poor harvest week?' — A comparable crop or pantry item replaces the missing item and the packing note explains the change. 'Do I need to return the crate?' — Return it at the next pickup so it can go back into circulation.
   Layout: A narrow 860px accordion with 20px rows, plus icons from Lucide, and a final link to ./shop.html labeled 'Rather shop one week at a time?'
   Motion: Accordion height and plus rotation animate over 200ms; reduced motion shows immediate expansion.

### Farm shop and local pickup cart (`shop.html`)
1. **Shop hero and controls** — Eyebrow '[BRAND] FARM SHOP'; headline 'Good things from nearby fields.' Body 'A short, changing shelf of [FARM_FOCUS] and kitchen staples. Save your order for local pickup.' Controls are category chips All, Produce, Pantry, Bakery and a sort menu Featured, Price low to high, Price high to low. The header cart button always displays the current item count.
   Layout: A 320px text-led hero with a thin botanical furrow SVG on the right rather than another large photo. Controls form a sticky 64px row beneath the hero with horizontal scrolling on mobile and the sort control aligned right on desktop.
   Motion: Filter changes crossfade the grid without animating individual items across the page.
2. **Product grid and quick view** — Product 1: Weekly Harvest Basket, Produce, $28 each, csa-box.webp, 'About 8 lb of mixed seasonal produce', badge 'PACKED FRIDAY'. Product 2: Pasture-Raised Eggs, Produce, $7 per dozen, farm-eggs.webp, 'One dozen mixed-color eggs', badge 'FARM GATE'. Product 3: Orchard Preserves, Pantry, $9 per 9 oz jar, orchard-preserves.webp, 'Small-batch fruit preserve with cane sugar', badge 'PANTRY'. Product 4: Stone-Milled Farm Loaf, Bakery, $8 per loaf, farm-loaf.webp, 'Naturally leavened; contains wheat', badge 'SATURDAY ONLY'. Product names or images open a quick-view modal with a larger image, description, unit, allergen or storage note, quantity stepper, and add button. Rewrite product details when variables change.
   Layout: Use a four-column grid on wide desktop, two columns on tablet, and one column on mobile. Each product has a square image, category label, name, unit detail, and aligned price. Quick view is a 760px two-column modal on desktop and a single-column bottom sheet on mobile.
   Motion: Product hover uses the specified 1.025 image scale; quick view follows the shared modal behavior.
3. **Pickup cart drawer and saved order** — The cart drawer lists chosen products with quantity steppers, remove actions, and a live subtotal. Empty state: 'Your pickup basket is empty.' Pickup choices reuse Farm Gate, North Elms Library, Upper Valley Co-op, and Meadow Market Hall with their times and fees. 'Review pickup order' reveals a compact order summary and requires name and email. 'Save pickup order' stores the order on this device and shows 'Your pickup order is saved on this device. No payment has been collected.' Never imply that an order was transmitted or paid.
   Layout: A 440px right-side drawer on desktop and full-width on mobile, with a fixed header, scrollable item list, and bottom subtotal and CTA area. Review replaces the drawer content while preserving a clear Back button. Focus is trapped until close.
   Motion: The drawer slides from the right over 240ms with a dimmed backdrop; quantity and subtotal updates fade briefly.
4. **Pickup notes** — Heading 'A few things before pickup.' Three notes: 'Order rhythm — Save your list by Wednesday for the best Friday selection.' 'What to bring — A reusable bag and your saved order screen.' 'Questions about allergens — Product notes list sample ingredients; always check with the farm before purchasing.' Add the shared farm-shop hours and [LOCATION].
   Layout: A Cream section with three ruled columns and a full-width location strip at the bottom. On mobile all notes stack with 24px spacing.
   Motion: Standard reveal only.

## Assets
- image: Download https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/hero-harvest.webp to public/images/hero-harvest.webp. Alt: 'A wooden crate of mixed seasonal produce beside rows on a small farm at golden hour.' Use as the homepage harvest hero. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/csa-box.webp to public/images/csa-box.webp. Alt: 'A wooden CSA box filled with leafy greens, vegetables, herbs, and fruit.' Use in the seasonal calendar, CSA sections, and Weekly Harvest Basket product. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/farm-eggs.webp to public/images/farm-eggs.webp. Alt: 'Brown and cream eggs in a plain pulp carton on a wooden farm-shop shelf.' Use for Pasture-Raised Eggs in the shop and quick view. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/orchard-preserves.webp to public/images/orchard-preserves.webp. Alt: 'Three jars of amber orchard preserves with blank labels on a wooden table.' Use for Orchard Preserves in the shop and quick view. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/farm-loaf.webp to public/images/farm-loaf.webp. Alt: 'A round rustic sourdough loaf on a linen-covered farm-shop counter.' Use for Stone-Milled Farm Loaf in the shop and quick view. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/e18be6d4-25ab-4c85-83b8-d1ca8f6dbe52/farmer-at-work.webp to public/images/farmer-at-work.webp. Alt: 'A farmer seen from behind carrying a harvest crate between crop rows.' Use in the homepage farm story. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- icon: Use locally installed lucide-react icons only for menu, cart, arrows, plus, minus, close, calendar, and pickup markers; license ISC. Draw the original three-line furrow brand mark directly in SVG. Record both in ASSETS.md.
- font: Self-host Fraunces Variable through @fontsource-variable/fraunces and DM Sans Variable through @fontsource-variable/dm-sans, both OFL-1.1. Import the packages locally and record them in ASSETS.md; do not use a font CDN.

## Don'ts
- Do not use any real farm’s name, logo, wordmark, slogan, exact copy, product labels, packaging, signature illustrations, mascots, unique icons, custom fonts, or exact reference palette; all brand and business content must remain invented and original.
- Do not copy reference code, prompts, imagery, videos, or layouts beyond the high-level information structure described here.
- Do not include recognizable people, celebrity likenesses, branded products, recognizable landmarks used as brands, anime or game characters, or any third-party logo.
- Do not add stock imagery from Unsplash, Pexels, Pixabay, Google Images, placeholder services, or any source that is not explicitly allowed; use only the six supplied generated photographs and local SVG or Lucide icons.
- Do not hotlink assets, load CDN scripts or stylesheets, use remote fonts, add analytics, or make third-party API calls; every runtime asset must be local.
- Do not create a backend, database, authentication, server routes, real checkout, payment collection, or forms that transmit data; localStorage saves and on-device confirmations must state exactly what happened.
- Do not use commercial fonts or dependencies with missing, noncommercial, share-alike, or otherwise restricted licenses.
- Do not output source maps, copy src into dist, exceed 20 MB in dist, or require more than the single npm run build command.
- Do not use bare-directory internal links; link to ./index.html, ./csa.html, ./shop.html, or documented same-page anchors, and keep all asset paths relative.
- Do not introduce horizontal overflow, console errors, inaccessible focus states, or motion that ignores prefers-reduced-motion; verify at 1440×900 and 390×844.
- Do not add SEO metadata, structured data, sitemaps, Open Graph tags, or keyword-stuffed content; a plain variable-aware title and local favicon are sufficient.
- Do not mention VibeFather inside the site except the optional credit footer link, and never use VibeFather as a variable default.

---
— Prompt by VibeFather · https://vibefather.ai/t/farm-shop-and-csa-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
