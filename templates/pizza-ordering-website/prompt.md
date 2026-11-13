# Pizza Ordering Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a complete responsive single-page ordering website for [BRAND], an invented pizzeria serving [PIZZA_STYLE] in [CITY]. The experience includes a photo-led storefront, category-filtered menu, build-your-own pizza workstation with a live SVG preview and price, shared cart drawer, pickup or delivery time slots, customer details, and a client-side confirmation screen. Use the exact default content below, then rewrite names, details, and supporting copy coherently when the variable values change.

- Audience: Independent pizzeria owners, small restaurant teams, ghost kitchens, and front-end builders who need a realistic hospitality ordering flow that runs entirely as a static site.
- Goal: Let a visitor move from craving to a customized, priced, scheduled demo order with no dead ends, while giving the restaurant a warm and credible local identity.
- Tone: Warm, appetizing, concise, and neighborhood-focused. Use specific ingredients and service details rather than generic restaurant claims. Make the interface playful without becoming childish.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL-1.1), @fontsource/dm-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to './', build.outDir to 'dist', build.sourcemap to false, and emptyOutDir to true.
  - Configure Tailwind for index.html and src/**/*.{ts,tsx}; add the specified colors and font families to the theme and keep global keyframes in src/index.css.
  - Import Motion from motion/react and use lucide-react for interface icons; do not add a component library or another animation library.
  - Self-host Fraunces Variable and DM Sans by importing their Fontsource packages in src/main.tsx, including only the weights used.
  - Put all variable values, headlines, labels, menu items, prices, hours, time slots, validation messages, and alt text in src/content.ts so a new case changes one content module rather than scattered JSX.
  - Use one typed order state in src/App.tsx for the menu, custom pizza, cart, fulfillment method, slot, customer details, and confirmation; derive every displayed total from that state.
  - Store money as integer cents. Calculate subtotal, delivery fee, tax, and total through shared functions so the builder, cart, checkout, and confirmation never disagree.
  - Persist the cart and current custom pizza in localStorage under a stable key derived from the slugified BRAND value; validate stored data before rendering it.
  - Use buttons with scrollIntoView for Menu, Pizza Lab, and Visit navigation, and keep the entire experience in index.html without a router.

## Variables
- [BRAND] — Pizzeria name (default: "Juniper & Crust"). An invented neighborhood pizzeria name, never a real restaurant chain.
- [CITY] — City and region (default: "Portland, Oregon"). Used in the announcement, hero, service copy, and footer.
- [TAGLINE] — Hero tagline (default: "A little wild. A lot wood-fired."). A short original line that can serve as the large hero headline.
- [PIZZA_STYLE] — Pizza style (default: "wood-fired neighborhood pizza"). A concise description used to adapt the story and menu details.
- [ADDRESS] — Pickup address (default: "418 Alder Finch Street, Portland, Oregon"). An invented street address used for pickup and visit information.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/pizza-ordering-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Oven Cream `#F6EFE3` — Primary page background and confirmation screen
- Flour White `#FFFaf2` — Menu cards, drawer, inputs, and raised surfaces
- Roasted Ink `#2B1B17` — Headings, body text, dark buttons, and icon strokes
- Tomato `#B9402A` — Primary actions, active category tabs, prices, and small highlights; use white text on it
- Basil `#35543D` — Secondary buttons, dietary badges, success states, and footer background
- Crust Gold `#E2A44B` — Decorative crust tones, stars, and focus accents only, never small body text

### Typography
- Display and section headings: Fraunces Variable (OFL), weights 600/700/900
- Body, navigation, controls, prices, and form labels: DM Sans (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use an 8px base grid with a 1280px maximum content width and 32px desktop or 20px mobile side gutters. Sections have 96px desktop and 64px mobile vertical padding. Card content uses 24px padding; control groups use 16px gaps; body copy stays below 62 characters per line.
- Radius: Use 24px radii on photography and primary cards, 16px on inputs and compact rows, 12px on small controls, and fully rounded pills for tabs, badges, and primary buttons. Borders are 1px solid Roasted Ink at 12% opacity; shadows are soft and warm rather than black.
- Motion: On initial load, stagger the hero eyebrow, headline, copy, and buttons by 70ms with a 20px upward fade; reveal the hero photograph with a 500ms clip-path wipe and no parallax.
- Motion: Reveal major section headings and menu cards once as they enter the viewport using 16px upward fades over 350ms; do not replay them on every scroll.
- Motion: Animate category changes with a 160ms crossfade and 8px vertical shift while keeping the grid height stable enough to avoid jumps.
- Motion: Scale newly selected SVG topping groups from 0.7 to 1 with a 160ms ease-out and animate the live price with a subtle 120ms highlight, not rolling digits.
- Motion: Slide the cart drawer in from the right with a damped spring over 320ms and fade its backdrop; trap focus, close on Escape, and restore focus to the order button.
- Motion: Transition checkout to confirmation with a 180ms fade and a small check-icon scale. Under prefers-reduced-motion, remove transforms and staggered reveals and show all state changes immediately.
- Imagery: Use the six listed generated editorial photographs and nothing else photographic. They share a pale stone surface or warm cream interior, tomato and basil accents, soft late-afternoon window light from the upper left, and restrained natural restaurant styling. Crop hero.webp as a large landscape scene, show the four pizza photographs in consistent 4:3 cards, and place dining-room.webp beside the visit copy. The pizza configurator is a crisp original SVG drawn in code, not a generated image. No people, text baked into images, logos, branded packaging, or recognizable restaurant chains.

## Pages & Sections
### Pizzeria storefront and ordering flow (`index.html`)
1. **Announcement and shared header** — A slim Basil announcement strip reads 'Wood-fired in [CITY] · Pickup 20–30 min · Delivery 35–45 min'. Below it, the sticky Flour White header contains the [BRAND] wordmark in Fraunces, three text buttons labeled Menu, Pizza Lab, and Visit, and a Tomato order button with a shopping-bag icon and live item count. On mobile, keep the wordmark and order button visible and place the three navigation buttons in an accessible compact menu.
   Layout: The announcement is 32px tall and centered. The header is 76px tall with a bottom hairline, a 1280px inner row, and generous space between navigation groups. On scroll it remains sticky with a subtle cream blur. The mobile menu opens below the header rather than covering the order button.
   Motion: The sticky header gains a faint shadow after 24px of scroll. The cart count briefly scales to 1.12 whenever an item is added; all movement is removed for reduced motion.
2. **Photo-led ordering hero** — Use a small Tomato eyebrow 'NEIGHBORHOOD PIZZA, MADE YOUR WAY'. The H1 is [TAGLINE], exactly 'A little wild. A lot wood-fired.' for the default case. Supporting copy reads 'Slow-fermented dough, bright produce, and pies built your way. Order pickup or delivery from [BRAND] in [CITY].' Primary CTA: 'Start an order' scrolling to the menu. Secondary CTA: 'Build your own' scrolling to Pizza Lab. Beneath, three concise facts read '48-hour dough', 'Local pickup', 'No app needed'. Use hero.webp with alt text from the asset list and a small integrated caption 'Hot from the oven · ready when you are'.
   Layout: At 1440px, use a 5/7 two-column grid inside the 1280px container with a minimum height of calc(100svh - 108px), vertically centered content, and 64px between columns. The left H1 is clamp(56px, 6vw, 88px), weight 900, line-height 0.94, and tight tracking. The right photograph fills a 24px-radius frame at roughly 4:3 and extends slightly beyond the container edge without causing horizontal scroll. On mobile, stack copy before a 4:3 image, reduce the H1 to 48px, and keep both CTAs full-width side by side only if they fit without truncation.
   Motion: Use the specified hero entrance sequence and image wipe. CTA hover lifts by 2px and the hero caption fades in with the photograph; no continuous floating or cursor effects.
3. **Category menu** — Heading: 'Tonight's lineup'. Intro: 'Start with a house favorite, then make it yours. Every pizza is stretched to order.' Provide category pills Pizzas, Sides, and Drinks with visible counts. Default Pizzas: Ember Margherita, $16, 'Crushed tomato, fior di latte, basil, olive oil', vegetarian badge, ember-margherita.webp; Forest Floor, $19, 'Roasted mushrooms, caramelized onion, thyme, smoked provolone', vegetarian badge, forest-floor.webp; Hot Honey Pepperoni, $19, 'Pepperoni, mozzarella, chili honey, oregano', spicy badge, hot-honey-pepperoni.webp; Green Orchard, $18, 'Zucchini ribbons, roasted leeks, basil pesto, ricotta, lemon', vegetarian badge, green-orchard.webp. Sides: Rosemary Dough Knots, $8, 'Six knots, roasted garlic butter, parsley'; Charred Little Gems, $9, 'Little Gem lettuce, lemon dressing, toasted breadcrumbs', vegetarian badge. Drinks: Blood Orange Fizz, $5, 'Blood orange, sparkling water, rosemary'; Basil Lime Cooler, $5, 'Lime, basil, cucumber, sparkling water'. Every item has an Add button and a clear price. Category choices only filter the menu; they do not reset the cart.
   Layout: Section heading and intro sit left with category pills right on desktop. Pizzas render as a two-column grid of substantial horizontal cards: 4:3 photograph above a 24px content area, name and price on one row, ingredients below, and Add button aligned at the foot. Sides and Drinks use a two-column set of compact Flour White rows without empty image placeholders. On mobile all cards become one column and the category pills scroll horizontally without wrapping. Menu cards share equal heights within each row.
   Motion: Animate filtered items with the category transition. On Add, show a brief check icon and 'Added' in the button for 700ms while the cart count updates; never block repeated additions.
4. **Pizza Lab configurator** — Heading: 'Your pizza, in the making'. Intro: 'Choose a size, pick a sauce, and tap toppings to see them land.' Step 1 Size: 12-inch for $14 or 16-inch for $18. Step 2 Sauce: Crushed Tomato included, Garlic Cream +$1, Spicy Arrabbiata +$1. Step 3 Toppings: Basil, Mushroom, Red Onion, Roasted Pepper, Olive, Pepperoni, and Jalapeño, each +$1.50; mozzarella is included. Topping buttons expose pressed state and allow any combination, including none. The live SVG shows a top-down pizza with crust, sauce, cheese, and deterministic fixed positions for each topping type. Show a recipe summary and the formula 'Base + sauce + toppings'. Live price begins at $14.00 and updates immediately. Controls: Reset restores 12-inch, Crushed Tomato, no toppings; 'Add custom pizza · $14.00' updates its own price and adds a uniquely identified custom item to the shared cart.
   Layout: Use a Basil-tinted section background with a two-column workstation: controls on the left in three numbered groups and a sticky Flour White preview panel on the right. The SVG occupies a square up to 480px, with the live price as a large Fraunces figure beneath it and the add button full width. On mobile, show the SVG preview first at 280px maximum, then the three control groups and a sticky bottom add bar that never covers the final controls.
   Motion: Toppings appear and disappear with the specified scale transition, selection pills respond in 140ms, and Reset gently fades the preview back to its base. Keep the SVG geometry stable so only the chosen layers move.
5. **Visit and service details** — Heading: 'The oven is on'. Body: 'Come for a quick slice at the counter or order ahead for a relaxed night in. Our small dining room keeps things simple: good dough, careful ingredients, and a table when you need one.' Show dining-room.webp, pickup address [ADDRESS], phone '(503) 555-0148', and hours: Monday Closed; Tuesday–Thursday 4–10 PM; Friday–Saturday 12–11 PM; Sunday 12–9 PM. Add three service notes: 'Pickup · Usually ready in 20–30 minutes', 'Delivery · Within 3 miles, $3.50 fee', 'Questions · Call us for allergy information before ordering'. The phone and menu content live in src/content.ts and are rewritten to fit a changed variable set.
   Layout: A two-column grid places the 4:3 dining-room photograph on the left and a content stack on the right. Hours use a compact two-column definition list with aligned values. Service notes form three separated rows beneath the address rather than three floating cards. On mobile, image comes first, followed by story, hours, and service notes with 16px gaps.
   Motion: Use a single viewport reveal for the image and copy; no map animation or ambient video.
6. **Footer** — Footer heading: 'Good pizza. No waiting room.' Include [BRAND], [CITY], the three navigation buttons, the phone number, and 'Demo ordering experience · no payment collected'. Use a small code-drawn pizza-slice favicon based on simple triangles and circles, not a logo copied from any restaurant.
   Layout: Basil background with Flour White text, a 1280px inner container, and a 40px vertical padding. Brand and heading sit left; navigation and service details sit right with a thin translucent divider above the small print. Stack cleanly on mobile with readable 16px text and large tap targets.
   Motion: No entrance animation beyond the standard section reveal.
7. **Cart drawer and checkout** — The order button opens a modal cart drawer. Empty state: bag icon, 'Your pizza is waiting', and 'Browse the menu' to close and scroll to the menu. Filled state lists each standard or custom pizza with its options, quantity stepper, line total, and Remove action. Show Subtotal, Delivery fee ($3.50 for delivery, $0 for pickup), Estimated tax (8.75% of food subtotal), and Total; do not tax the delivery fee. Checkout has two large segmented choices, Pickup and Delivery. Pickup slots: 'ASAP · 20–30 min', '5:45–6:00 PM', '6:15–6:30 PM', '6:45–7:00 PM'. Delivery slots: 'ASAP · 35–45 min', '6:00–6:15 PM', '6:30–6:45 PM', '7:00–7:15 PM'. Require Name and Phone for both; require Street address and ZIP only for Delivery. Use inline errors and preserve entered values when switching methods. The final button reads 'Place demo order' and is disabled until the cart, slot, and required fields are valid. Adjacent note: 'Demo only — no payment is collected and no order is sent.'
   Layout: On desktop the drawer is 480px wide, full viewport height, right aligned, with a dimmed backdrop and three internal regions: fixed header, scrollable items or checkout form, and fixed totals/footer. Back returns from checkout to items without losing state. At 390px it fills the viewport. Inputs are at least 48px tall, error text is specific, and keyboard focus remains inside the drawer until closed.
   Motion: Use the drawer spring and backdrop fade. Method and slot changes crossfade their details without changing totals unpredictably; disabled buttons never animate as if clickable.
8. **Order confirmation screen** — Placing a valid demo order snapshots the cart and selections, generates an order reference from the uppercase initials of [BRAND] plus '-1048' (default 'JC-1048'), clears the active cart, and replaces checkout with confirmation. Show a Basil check icon, 'Your demo order is in the books', the reference, selected method and slot, customer name, item summary, fees, tax, and final total. Pickup shows [ADDRESS]; delivery shows the entered delivery address. Supporting copy: 'This is a demonstration. No payment was taken and nothing was sent to a kitchen.' Primary button 'Start another order' resets fulfillment and customer details, closes the confirmation, and scrolls to the menu. Secondary button 'Back to site' closes it without starting another order.
   Layout: Use a full-viewport Oven Cream overlay with a centered 640px column, generous whitespace, and one continuous confirmation panel rather than scattered cards. The order summary is a bordered list with totals aligned right. On mobile, keep all actions visible with 20px gutters and allow vertical scrolling.
   Motion: Fade the overlay in and scale the check icon once. Starting another order returns to a clean menu state without animating every section again.

## Assets
- image: Download https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/hero.webp to public/images/hero.webp. Alt: 'A wood-fired pizza with basil on a cream ceramic plate in warm window light'. Use as the large hero photograph. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/ember-margherita.webp to public/images/ember-margherita.webp. Alt: 'A margherita pizza with tomato, mozzarella, and fresh basil'. Use on the Ember Margherita menu card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/forest-floor.webp to public/images/forest-floor.webp. Alt: 'A rustic pizza topped with roasted mushrooms, caramelized onion, and thyme'. Use on the Forest Floor menu card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/hot-honey-pepperoni.webp to public/images/hot-honey-pepperoni.webp. Alt: 'A pepperoni pizza with melted mozzarella and a glossy chili-honey drizzle'. Use on the Hot Honey Pepperoni menu card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/green-orchard.webp to public/images/green-orchard.webp. Alt: 'A vegetable pizza with zucchini, roasted leeks, pesto, and ricotta'. Use on the Green Orchard menu card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Download https://media.vibefather.ai/assets/48136723-c752-4085-9636-8de8c41cde5a/dining-room.webp to public/images/dining-room.webp. Alt: 'A small cream and terracotta pizzeria dining room with oak tables and an open oven'. Use beside the Visit and service details. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.
- image: Draw the configurator pizza as an original layered SVG in src/components/PizzaPreview.tsx: concentric crust and cheese circles, sauce-color layer, and reusable topping symbols at fixed coordinates. Draw the simple pizza-slice favicon locally as SVG. Neither requires an external asset file.
- icon: Use only locally bundled lucide-react icons for bag, plus, minus, trash, clock, map pin, phone, check, chevron, menu, and close actions. Give icon-only buttons accessible names and do not draw substitute brand marks.
- font: Self-host Fraunces Variable through @fontsource-variable/fraunces at weights 600, 700, and 900; license OFL-1.1. Import locally through Fontsource and record the package in ASSETS.md.
- font: Self-host DM Sans through @fontsource/dm-sans at weights 400, 500, 600, and 700; license OFL-1.1. Import locally through Fontsource and record the package in ASSETS.md.

## Don'ts
- Do not use any real pizzeria name, logo, slogan, mascot, brand palette, copied menu copy, recognizable restaurant photography, branded packaging, or signature illustration.
- Do not fetch stock images or use Unsplash, Pexels, Pixabay, Google Images, placeholder-image services, external image URLs in the rendered site, or any imagery beyond the six listed generated files and code-drawn SVG.
- Do not load Google Fonts, Adobe Fonts, CDN scripts, CDN stylesheets, remote icons, analytics, or any third-party API. Self-host every runtime asset.
- Do not add a backend, database, authentication, serverless function, payment field, payment processor, real order submission, or claim that a kitchen received the demo order.
- Do not let the menu, custom pizza, cart, checkout, and confirmation maintain separate totals or contradictory option state; all must use the shared typed order state and integer-cent calculations.
- Do not reset the cart when changing menu categories or opening Pizza Lab, and do not lose checkout details when switching between pickup and delivery.
- Do not create additional routes or bare-directory links. Keep the site in index.html, use relative asset paths, and output only the static production site to dist/.
- Do not emit source maps, copy src/ into dist/, exceed 20 MB in dist/, or leave console errors at 1440×900 and 390×844.
- Do not scatter copy or prices through JSX, hard-code the default brand into storage keys, or leave default-only details unchanged when variable values change.
- Do not use commercial fonts, restricted UI source, unlicensed dependencies, recognizable people's likenesses, anime or game characters, or third-party logos.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemap work, analytics, or keyword-stuffed copy; a plain [BRAND] title and local favicon are sufficient.
- Do not ignore keyboard operation, visible focus, accessible names, form errors, modal focus management, color contrast, or prefers-reduced-motion.
- Keep all interface copy, sample data, validation messages, and alt text in US English. Do not mention VibeFather inside the site except the optional credit link.

---
— Prompt by VibeFather · https://vibefather.ai/t/pizza-ordering-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
