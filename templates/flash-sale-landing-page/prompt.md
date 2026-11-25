# Flash Sale Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
An evergreen sale page for a fictional homeware brand that works for any seasonal sale: a countdown, tiered discounts, deal cards with stock bars, a bundle builder, a coupon reveal, a gift guide by recipient and budget, and an FAQ on shipping cut-offs. Product photographs from one shoot. Deep plum #3A0CA3, hot red #F72585 and gold #FFC300.

- Audience: Shoppers who already like the brand and are looking for a reason and a deadline to buy.
- Goal: Make the discount obvious in three seconds, get a bundle or a deal into the basket, and get the coupon used.
- Tone: Loud but honest: big numbers, short lines, plain terms, and small print that says what is sample content.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/anton (OFL-1.1), @fontsource-variable/dm-sans (OFL-1.1), @fontsource/dm-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors plum #3A0CA3, plumDeep #24046B, red #F72585, gold #FFC300, white #FFFFFF, lilac #C9B8FF, rust #C2410C; fontFamily display 'Anton', sans 'DM Sans Variable', mono 'DM Mono'.
  - src/components/ProductTile.tsx crops one cell out of the three 3 × 3 product sheets with background-image, background-size: 300% 300% and background-position: (col × 50)% (row × 50)%.
  - src/lib/pricing.ts exports the tier logic as pure functions: tierFor(subtotal) returns 10% from $60, 15% from $120 and 20% from $200, else 0; lineTotal, savings and the coupon (10% off one full-price item) are computed in the same file.
  - The countdown deadline is stored in localStorage under the key [BRAND_SLUG]-sale-deadline as the time of first visit plus 72 hours, where [BRAND_SLUG] is [BRAND] lowercased with hyphens; when it has passed, the page shows the ended state and sets a new deadline on the next visit. The basket persists under [BRAND_SLUG]-basket.
  - All copy, tiers, products, recipients, FAQ, coupon code and form labels live in src/content.ts; components never hard-code copy.

## Variables
- [BRAND] — Brand name (default: "Copperleaf Home")
- [SALE_NAME] — Name of the sale (default: "The Cosy Home Sale"). Change this to reuse the page for any seasonal sale.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/flash-sale-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- plum `#3A0CA3` — Deep plum: page ground
- plumDeep `#24046B` — Panels, cards, the countdown box
- red `#F72585` — Hot red: sticker, sale tags, sale prices, stock bars; fills carry white bold text of 18px or larger
- gold `#FFC300` — Gold: primary buttons with plum text, countdown digits, tier headings
- white `#FFFFFF` — Headlines and body text
- lilac `#C9B8FF` — Secondary text and rules on plum (keeps AA contrast)
- rust `#C2410C` — Small accent for the struck-through old price with white text

### Typography
- Display / headlines, prices, countdown: Anton (OFL), weights 400
- Body / UI: DM Sans Variable (OFL), weights 400/500/700
- Mono / small print, tier maths, coupon code: DM Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Page max-w-[1240px] px-6; section padding py-20; cards p-4 with an 8px radius; 8px rhythm.
- Radius: Cards and tiles 8px; buttons square; the sticker is a circle.
- Motion: Countdown digits flip with a 200ms cross-fade every second.
- Motion: Headline words rise 24px and fade in, staggered 80ms, on load; the sticker rotates from −12 to −6 degrees.
- Motion: Stock bars animate to their width 500ms when scrolled into view; deal cards fade up staggered 60ms; content is visible by default.
- Motion: The coupon flips over 400ms on reveal; the basket drawer slides in 250ms.
- Motion: prefers-reduced-motion: the countdown updates without animation and everything else appears instantly.
- Imagery: Homeware photographs from one shoot: warm wood, rust linen, amber glass, stoneware and brass in low window light with plum, red and gold tones. Three product sheets are 3 × 3 grids on a warm light-grey ground, each cell one product. No packaging text, no labels, no logos.

## Pages & Sections
### Sale (`index.html`)
1. **Site header** — Left: wordmark [BRAND] in Anton 22px white. Center nav: Deals, Bundles, Gifts, FAQ. Right: a basket icon button with a gold count badge. A thin gold top strip with scrolling text in DM Mono 12px: 'FREE DELIVERY OVER $80 · EASY RETURNS within 30 days'.
   Layout: Sticky 60px bar on plum/90 with backdrop blur and a 1px bottom hairline lilac/30; inner max-w-[1240px]. Mobile: wordmark, basket button and a lucide menu button on one line at 390px; the nav moves into the menu.
   Motion: Top strip scrolls continuously; static under reduced motion.
2. **Hero — the sale** — Full-bleed public/images/hero-flatlay.webp (16:9), alt 'A folded rust linen throw, stoneware mugs, a lit candle and plates on a warm wood table', under a gradient from plum on the left to transparent on the right so the text keeps WCAG AA contrast. Left, on the scrim: eyebrow DM Mono 500 13px uppercase gold '[SALE_NAME]'; H1 Anton clamp(56px, 8vw, 128px) white, uppercase, line-height 0.9: 'UP TO 20% OFF EVERYTHING THAT MAKES A HOUSE WARM.'; a round hot-red sticker 150px across at the photo's top right, rotated −6 degrees, reading 'UP TO 20% OFF' in white Anton 26px centred on two lines; buttons 'Shop the deals' (gold fill, plum text → #deals) and 'Build a bundle' (white outline → #bundles). Bottom right, a plumDeep panel with gold Anton digits 'ENDS IN 47 : 12 : 09' and mono labels 'HOURS MINUTES SECONDS'. When the countdown has ended the panel reads 'THIS SALE HAS ENDED' with a line 'Sign up below to hear about the next one.'
   Layout: Min-h-[calc(100vh-60px)] with the text block bottom-left, max-w-[760px], padding 48px; the countdown panel under the buttons on mobile and bottom-right on desktop.
   Motion: Headline rises word by word; the sticker settles from −12 degrees; countdown digits cross-fade each second.
3. **Tiers** — Three cards on plumDeep: 'Spend $60 · Save 10%', 'Spend $120 · Save 15%', 'Spend $200 · Save 20%', each with a one-line example in mono: 'A $70 throw costs $63.', 'A $130 lamp costs $110.50.', 'A $210 bundle costs $168.'; the middle card has a gold border and a tag 'Most popular'.
   Layout: Grid md:grid-cols-3 gap-4; percentages in Anton 56px gold.
   Motion: Cards fade up staggered 80ms.
4. **Deal cards** — id="deals". H2 'The deals.' Nine products with a tile cropped from a sheet, a sale tag, the old price struck through in rust and the new price in Anton red, a name and a stock bar with a mono line: from grid-kitchen.webp — Speckled stoneware mug $18 now $13 (tile col 0 row 0, 62% claimed), Glass carafe $24 now $17 (col 1 row 1, 48%), Small cast-iron skillet $42 now $32 (col 2 row 0, 'Only 7 left', 86%); from grid-living.webp — Rust linen throw $68 now $51 (col 0 row 0, 71%), Amber soy candle $26 now $18 (col 0 row 1, 54%), Brass table lamp $120 now $90 (col 1 row 1, 33%); from grid-bedroom-bath.webp — Linen pillowcase pair $54 now $41 (col 1 row 0, 59%), Waffle bath towel $32 now $24 (col 0 row 0, 44%), Brass-framed mirror $88 now $66 (col 2 row 2, 'Only 3 left', 91%). Each card has 'Add to basket' (gold fill, plum text). A mono note under the grid: 'Stock bars, discounts and the countdown are sample content.'
   Layout: Grid grid-cols-2 md:grid-cols-3 gap-4; tiles square on a light ground; stock bars 6px tall with a red fill.
   Motion: Stock bars and cards as described in motion.
5. **Bundle builder** — id="bundles". H2 'Build a bundle.' Left: twelve bundle-eligible products as rows with a small tile, a name, a price and a checkbox: mug $13, candle $18, carafe $17, tea towels $16, pouring jug $22, side plates $20, mustard cushion $38, rattan basket $34, soap dish $18, hand towel $28, ceramic tray $20, wooden hairbrush $26. Right, a sticky panel on plumDeep: 'Your bundle', the chosen items, the subtotal, the tier reached with the amount saved ('15% off · You save $18.60'), a progress bar to the next tier with the line '$42 more for 20% off', the total in Anton 56px gold and a button 'Add bundle to basket' (gold fill).
   Layout: lg:grid-cols-[58%_42%] gap-8; rows py-3 with 1px lilac/20 separators; the panel rounded-[8px] p-6.
   Motion: The total and progress bar update with a 250ms tween.
6. **Coupon reveal** — Left: public/images/candle-closeup.webp (4:3), alt 'A lit candle in amber glass with dried lavender on a wood table'. Right: H2 'A little extra.'; line white/80: 'Take a further 10% off one full-price item.' A card that flips on click from 'Reveal your code' (gold outline) to the code 'THANKS10' in Anton 48px gold with a 'Copy code' button that copies it and shows 'Copied'.
   Layout: lg:grid-cols-2 gap-8 items-center.
   Motion: Card flips over 400ms (instant under reduced motion).
7. **Gift guide** — id="gifts". H2 'Find a gift.' Two chip rows: 'For' (The host, The new homeowner, The one who has everything, Your desk) and 'Budget' (Under $25, $25 to $50, $50 and over), with 'All' on each. Products are tagged in content.ts and the grid below shows the matches (three to six items) with tiles, names and sale prices; 'No gifts match — try a wider budget.' when nothing does.
   Layout: Chips wrap; results grid grid-cols-2 md:grid-cols-3 gap-4.
   Motion: Results fade 200ms when a chip changes.
8. **FAQ** — id="faq". H2 'Delivery and returns.' An accordion of six: 'How long does the sale run?' — 'Sale pricing lasts until the countdown at the top reaches zero.'; 'When is the delivery cut-off?' — 'Order before 2 pm for next-working-day express delivery. Standard delivery takes 3 to 5 working days.'; 'Will it arrive in time?' — 'Leave at least seven working days between ordering and the day you need it.'; 'Can I return sale items?' — 'Yes, within 30 days and in their original condition.'; 'Do the tiers stack with the coupon?' — 'The tier discount comes off the basket first; the coupon then takes 10% off one full-price item.'; 'Do bundles arrive in one box?' — 'Yes, with the receipt inside the lid.'
   Layout: max-w-[800px]; rows py-5 with 1px lilac/20 separators; the open row has a gold chevron.
   Motion: Answers expand 250ms.
9. **Basket drawer** — Opened by the basket button: items with a small tile, name, quantity stepper and line total after the tier discount; a tier progress line '$38 away from 15% off' or 'You have 15% off'; a coupon input with 'Apply' that accepts THANKS10 and shows '−10% on one item' or 'That code isn't valid'; Subtotal, Savings, Delivery (Free over $80, otherwise $5.99) and Total in Anton; button 'Checkout' (gold fill). Checkout replaces the drawer content with: 'Sample checkout. No payment was taken and no order was placed.' and a 'Keep shopping' button.
   Layout: Drawer fixed right w-[420px] max-w-full h-full plumDeep over a plum/70 backdrop.
   Motion: Slides in 250ms; totals update instantly.
10. **Next sale sign-up and footer** — H2 'Be first next time.'; an email input and 'Sign up' (gold fill); a valid email is required; on success: 'Thanks. This is a sample form, so nothing was sent.' Footer: wordmark, nav, small print 12px lilac 'Products, discounts, stock levels and the countdown on this page are invented sample content.' plus [CREDIT].
   Layout: Sign-up max-w-[520px]; footer with a 1px top hairline.
   Motion: Success fades in 200ms.

## Assets
- image: Six images generated by VibeFather, downloaded into public/images/ and used nowhere else: hero-flatlay.webp (16:9), bundle-giftset.webp (4:3, used beside the bundle builder), candle-closeup.webp (4:3) and three 2048 × 2048 product sheets, grid-kitchen.webp, grid-living.webp and grid-bedroom-bath.webp, each a 3 × 3 grid on a warm light-grey ground. Each downloads from https://media.vibefather.ai/assets/dee21a4c-cd6f-4ea1-b0ea-ec48c1031892/<file>. A tile shows one cell with background-size 300% 300% and background-position (col × 50)% (row × 50)%. Alt text names the product. Credit in ASSETS.md: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- icon: lucide-react npm package (ISC): menu, x, shoppingBasket, plus, minus, check, copy, chevronDown, gift, timer, arrowRight. No other icon sets, no brand logos anywhere.
- font: Fontsource packages (OFL-1.1): @fontsource/anton, @fontsource-variable/dm-sans and @fontsource/dm-mono, imported in main.tsx. No font CDN links.

## Don'ts
- No backend: no server code, API routes, databases, auth or requests to any service. Basket, coupon, countdown deadline and sign-up live in localStorage and the checkout says it is a sample.
- The brand, products, discounts, stock levels and coupon are invented sample content; no real homeware brands, shops or products may be named or imitated.
- The page is evergreen: no named holiday and no calendar date appears in the copy; timing is expressed through the countdown and working days.
- Stock bars, the countdown and scarcity claims are labelled as sample content in the small print.
- Photographs carry no readable text or labels; products are cropped from the three sheets in code.
- No gradients used as decoration (the hero scrim is for legibility only), no glass panels or glowing elements; flat plum, red and gold.
- Hot red fills carry white bold text of 18px or larger; small text on plum is white or lilac; gold buttons carry plum text.
- Every control works: add to basket, bundle builder, coupon reveal and apply, gift filters, FAQ, countdown and checkout all change real state that survives a reload.
- Self-host everything: fonts via Fontsource packages, images downloaded into the project, no CDN script or link tags, no Google Fonts, no analytics.
- Vite base './' with relative asset paths; internal links are anchors on index.html (#deals, #bundles, #gifts, #faq), never bare directories.
- Production build minified with no source maps; dist/ under 20 MB.
- prefers-reduced-motion: no digit flips, rising words or bars; everything appears instantly. Never hide a whole element with clip-path or zero opacity while waiting for an in-view trigger.
- At 390×844 the header keeps the wordmark, basket and menu button on one line, the sticker scales to 110px, the headline wraps without overflow and the basket drawer is full width.
- Tailwind opacity utilities use the default scale (for example /30, /70, /80, /90); custom steps are written as arbitrary values.
- No SEO work: a plain <title> with [BRAND] and a favicon are enough.
- No copied code, copy, imagery or fonts from any reference site; no brand names in template names, slugs, copy or alt text.

---
— Prompt by VibeFather · https://vibefather.ai/t/flash-sale-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
