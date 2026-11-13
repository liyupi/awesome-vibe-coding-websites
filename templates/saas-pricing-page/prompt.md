# SaaS Pricing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page pricing page for [BRAND], a [PRODUCT] tool priced per seat. It must answer a buyer's whole pricing question on one page: a monthly/annual toggle (annual saves 20%), a seat slider (1–100, default [SEAT_DEFAULT]) that live-updates every tier total, three tier cards derived from the $[BASE_PRICE] base (Starter ×1, Team ×2 featured, Business ×4), a trust strip, a sixteen-row feature comparison table with a sticky header, a plain enterprise contact block and a six-question FAQ. One page: index.html with sections (#calculator implicit in the hero, #compare, #enterprise, #faq). Everything runs in the browser; nothing is submitted anywhere.

- Audience: Operations leads and team managers comparing three tools in a tab each, 28–50. They want the real per-seat math for THEIR headcount in seconds, hate 'Contact sales' walls for mid tiers, and read FAQ answers for cancellation traps.
- Goal: Get visitors to the free trial with a tier chosen. Within ten seconds they should see the toggle and the featured tier; within thirty, the total for their own seat count.
- Tone: Direct and a little dry, like a pricing page that respects the reader. Concrete numbers, no 'flexible plans for every team' filler, one tasteful joke maximum.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (ISC), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource-variable/space-grotesk (OFL-1.1), @fontsource-variable/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS (tailwindcss + postcss + autoprefixer), content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (white, mist, fog, ink, slate-ink, hairline, indigo, indigo-deep, indigo-mist, good) and fontFamily display ['Space Grotesk Variable', 'system-ui', 'sans-serif'], sans ['Inter Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 12px and add maxWidth { container: '1120px' }.
  - In src/fonts.ts import '@fontsource-variable/space-grotesk' and '@fontsource-variable/inter'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, number, tier, feature row, FAQ answer and enterprise term, typed), src/lib/brand.ts (brandSlug = [BRAND] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = brandSlug without hyphens + '.com', salesMail = 'sales@' + emailDomain), src/lib/pricing.ts (pure pricing: perSeat(tier, cycle) = BASE × tier.multiplier × (cycle annual ? 0.8 : 1), tierTotal = perSeat × seats; money(n) formats US dollars, cents only when needed).
  - State: src/store/pricing.ts is a tiny external store (useSyncExternalStore) holding { cycle: 'monthly' | 'annual', seats: number } with setCycle and setSeats; not persisted — pricing pages don't remember you.
  - Components in src/components/: Header.tsx, Footer.tsx, Eyebrow.tsx, Reveal.tsx (Motion whileInView wrapper), CycleToggle.tsx (with the save-20% chip), SeatSlider.tsx, TierCard.tsx (PriceLine.tsx with counting numbers), TrustStrip.tsx, CompareTable.tsx (StickyHead row; Cell.tsx rendering check/dash/number), Enterprise.tsx, Faq.tsx, CtaBand.tsx, AppPanel.tsx (the SVG product mock). src/pages/Home.tsx composes them.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#FFFFFF'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>Pricing — [BRAND]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts and favicon.svg. Keep it under 5 MB — no images to speak of.

## Variables
- [BRAND] — Product name (default: "Slateline"). Invented SaaS product name. Used in the wordmark, title, footer, emails (hello@ and sales@ + brandSlug without hyphens + .com) and the SVG app panel. Never a real product.
- [PRODUCT] — What it does (default: "team scheduling and time tracking"). The product category in one lowercase phrase. Drives the hero headline, tier feature lines, comparison row names and FAQ answers. Keep it generic enough that all sixteen table rows still make sense.
- [BASE_PRICE] — Base monthly price (default: "12"). The Starter per-seat monthly price as digits. Team is ×2, Business ×4; annual is 20% off all tiers. Every price on the page derives from this number.
- [SEAT_DEFAULT] — Default seats (default: "10"). Where the seat slider starts, as digits (1–100). A number typical for the product's buyer; the calculator updates live from here.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/saas-pricing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- White `#FFFFFF` — Page background, tier cards, table header.
- Mist `#F5F6F8` — Alternate section background (table, FAQ), input fill, chips.
- Fog `#EBEDF1` — Slider track, table row banding, disabled states.
- Ink `#101319` — Headlines, body text, table feature names, icon color.
- Slate Ink `#565E6C` — Secondary text, captions, eyebrows, per-seat lines.
- Hairline `#E1E4EA` — 1px hairlines, card borders, table grid lines.
- Indigo `#4F46E5` — The one accent: primary buttons, featured tier ring, toggle active, slider fill, checks, focus ring.
- Indigo Deep `#4338CA` — Primary hover and pressed, toggle active dark.
- Indigo Mist `#EEF2FF` — Featured tier wash, selected cells, the save-20% chip fill.
- Good `#0E9F6E` — The trust strip checks and the enterprise availability dot.

### Typography
- Display: H1, H2, H3, tier names, prices in large sizes, the wordmark: Space Grotesk (OFL), weights 500/700
- Text and UI: body, eyebrows, buttons, nav, table cells, FAQ, all money (font-variant-numeric tabular-nums): Inter (OFL), weights 400/500/600

### Layout & motion
- Spacing: 8px base unit. Container max-width 1120px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px — a utility page breathes less than a brochure. Type scale: H1 clamp(40px, 5.6vw, 72px) Space Grotesk 700, line-height 1.02, letter-spacing -0.02em; H2 clamp(28px, 3.6vw, 44px) Space Grotesk 700 letter-spacing -0.01em; H3 20px Space Grotesk 700; price figures Space Grotesk 700 44px with tabular-nums; lead Inter 400 17px / 1.65 Ink at 85%; body Inter 400 15.5px / 1.7 (max-width 66ch); eyebrow Inter 600 12px uppercase letter-spacing 0.14em Slate Ink; caption Inter 400 13px Slate Ink. Buttons: height 46px, padding 0 22px, Inter 600 14px. Primary: Indigo fill, White text. Secondary: 1px Ink/20% border, Ink text. Small buttons 34px. Inputs: not needed (no forms except mailto). Focus ring everywhere: 2px Indigo outline with 3px offset.
- Radius: 12px on cards, the toggle, the slider thumb, chips and the FAQ rows. 999px only for pills (badges, save chip) and the toggle track.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals and number changes; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the toggle and accordion. Precise, product-grade — small distances, quick settles.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and animate to rest over 500ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger by 60ms.
- Motion: Cycle toggle: the sliding thumb moves 200ms --ease-io with a slight scaleX squash; every price on the page counts to its new value over 400ms --ease-io (tabular-nums hold their width); the save-20% chip fades in only on annual.
- Motion: Seat slider: the thumb pops 1.0→1.1→1.0 on grab; the fill tracks instantly; totals count on release or step (200ms). The featured tier's total sits in a slightly larger figure that ticks once when it changes.
- Motion: Tier cards: hover lifts 3px with a hairline shadow; the featured card is permanently lifted 6px with a 2px Indigo ring and an Indigo Mist wash.
- Motion: Comparison table: the header row sticks under the page header (top 76px) with White/95% and blur; scrolling under it, the active tier's column carries a faint Indigo Mist band; check cells draw their check stroke once when scrolled into view (60ms stagger, disabled under reduced motion).
- Motion: FAQ accordions: height 0 to auto, opacity 0 to 1, 260ms --ease-io; Plus rotates 45 degrees into an X.
- Motion: Header: sticky from the top, White/90% with blur and a Hairline border always (no hero transparency — this is a utility page).
- Motion: Links: .link-draw grows a 1px currentColor underline over 250ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — disable counting (swap instantly), squash, draws and staggers; keep color/border/shadow hover changes. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: No photography at all — everything drawn in code. The hero's AppPanel is a small SVG product mock (a week strip with shift blocks, a totals sidebar and a cursor dot) using Hairline strokes, Indigo and Mist fills, strictly abstract UI geometry. Checks, dashes, slider, toggle, badges and the favicon are all SVG/CSS. Icons: lucide-react only, stroke width 2.

## Pages & Sections
### Pricing (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([BRAND] = Slateline, [PRODUCT] = team scheduling and time tracking, [BASE_PRICE] = 12, [SEAT_DEFAULT] = 10). Put every string, number and list in src/content.ts and render from it. If any variable value differs, rewrite every headline, tier line, table row name, FAQ answer and the AppPanel labels so they are specific and believable for the new product, keeping the same structure and counts (3 tiers, 16 table rows, 4 enterprise terms, 6 FAQs). Tiers derive from [BASE_PRICE]: Starter $12/seat monthly, Team $24/seat monthly (featured), Business $48/seat monthly; annual = 20% off each ($9.60, $19.20, $38.40, shown with cents). Trial 14 days, no card; refunds 30 days; cancel self-serve any time. All figures invented.
   Layout: n/a
   Motion: n/a
2. **Header** — Left: wordmark '[BRAND]' (Space Grotesk 700 19px) with a small 8px Indigo dot after it, linking to ./index.html. Center nav (Inter 500 14px): 'Plans' → #plans, 'Compare' → #compare, 'Enterprise' → #enterprise, 'FAQ' → #faq. Right: secondary 'Sign in' (href '#', styled as a quiet link) and primary 'Start free' (href '#', small). Under 820px: wordmark + Start free only.
   Layout: Sticky top, height 76px, White/90% blur, 1px Hairline bottom border, container-aligned.
3. **Masthead with calculator** — Eyebrow 'Pricing'. H1: 'Pay for the crew you have.' Lead (max-width 560px): 'Per-seat pricing for [PRODUCT]. Move the slider, flip the toggle — every number on this page is the number you''d pay.' The CycleToggle: 'Monthly | Annual' with the chip 'Save 20%' appearing on annual. Below, the SeatSlider: label 'How many seats?' with the live count in a Space Grotesk 700 22px figure, slider 1–100 step 1, end labels '1' and '100+', and the line 'at 100+ seats, Enterprise is usually cheaper — see below.' Right side (desktop): the AppPanel SVG with the caption 'The [BRAND] week view — pictured mid-price-argument.'
   Layout: White background, vertical padding 96px top. Two columns on desktop: calculator 6 cols, AppPanel 5 cols offset 1. The toggle and slider sit inside one Mist panel (16px radius, 28px padding) so the calculator reads as one object. Under 1024px: single column, panel full-width.
4. **Tier cards** — Section id='plans'. Three cards: 'Starter' — $[BASE_PRICE]/seat monthly ($9.60 annual) — 'For small crews getting off spreadsheets.' Lines: 'Up to 5 seats' (wait — tiers are per-seat; use): 'Unlimited schedules'; 'Time tracking'; '30-day history'; 'Email support'. CTA secondary 'Start free'. 'Team' (featured, chip 'Most popular') — $24/seat monthly ($19.20 annual) — 'For teams that live in the schedule.' Lines: 'Everything in Starter'; 'Roles & permissions'; 'Time-off tracking'; 'Integrations (calendar, payroll)'; 'Priority support'. CTA primary 'Start free'. 'Business' — $48/seat monthly ($38.40 annual) — 'For operations with audits in their future.' Lines: 'Everything in Team'; 'Approvals & audit log'; 'Custom fields & exports'; 'SSO (SAML)'; 'Dedicated success manager'. CTA secondary 'Start free'. Each card's total line under the CTA: '= $240/mo for 10 seats' (live, Inter 500 13px Slate Ink). Every price reacts to toggle and slider.
   Layout: White background continuing. Three columns 24px gap; featured card lifted 6px, 2px Indigo ring, Indigo Mist wash, 'Most popular' chip pinned to its top edge. Card anatomy: name Space Grotesk 700 18px, one-liner 14px, price figure 44px + '/seat' + cycle line, 5 check lines 14px, CTA full-width, total caption. Under 900px: stacked.
5. **Trust strip** — A single Mist band, three items with Good checks: '14-day free trial — no card'; 'Cancel any time, self-serve, no call'; '30-day money-back, no questions worth asking'. Centered, Inter 500 14px.
   Layout: Full-width band, vertical padding 28px, three equal items with 16px icon-text gap, wrapping on mobile.
6. **Comparison table** — Section id='compare'. Eyebrow 'Compare plans' and H2 'All sixteen rows, no asterisks.' The table: sticky header row (empty first cell, Starter, Team, Business — header cells carry each tier's price/seat live); 16 rows grouped with subtle group headers ('Scheduling', 'Time & attendance', 'Controls', 'Support'): 1 'Unlimited schedules' ✓✓✓; 2 'Shift swaps' — ✓ ✓; 3 'Open shifts marketplace' — — ✓; 4 'Time tracking' ✓ ✓ ✓; 5 'Time-off & leave policies' — ✓ ✓; 6 'GPS check-in' — — ✓; 7 'Roles & permissions' — ✓ ✓; 8 'Approval chains' — — ✓; 9 'Audit log (1 year)' — — ✓; 10 'Custom fields' — — ✓; 11 'Exports (CSV, XLSX)' — ✓ ✓; 12 'Calendar & payroll integrations' — ✓ ✓; 13 'API access' — — ✓; 14 'SSO (SAML)' — — ✓; 15 'Email support' ✓ ✓ ✓; 16 'Priority & success manager' — priority ✓ / manager: 'Priority' for Team, 'Dedicated' for Business (text cells). Checks in Indigo; dashes as true em-dashes in Fog.
   Layout: Mist background section, table on White 12px radius 1px Hairline border; header row sticky top 76px; first column sticky left on mobile with a White/95% shadow edge; rows 44px tall, Hairline dividers, group headers 36px in Inter 600 11px uppercase Slate Ink; Team column carries a faint Indigo Mist/50% band. Under 640px: table scrolls horizontally as a whole (first sticky column).
7. **Enterprise** — Section id='enterprise'. An Ink panel (White text, 16px radius): left, eyebrow 'Enterprise' in Indigo Mist tone and H2 'Over 100 seats, or paperwork to satisfy.' and four term lines with Good dots: 'Volume pricing from seat 101'; 'SSO, SCIM and a signed DPA'; '99.9% uptime SLA with credits'; 'Named human on support, not a queue'. Right: primary-on-dark 'Talk to sales' as a mailto to sales@ + emailDomain (White button, Ink text) with the caption 'We reply within one business day — usually faster than the demo you''ll book.'
   Layout: White background, panel container-aligned, vertical padding 56px inner, two columns 7/4 offset 1, items vertically centered.
8. **FAQ** — Section id='faq'. Eyebrow 'Pricing FAQ' and H2 'The questions everyone asks.' Six accordions: 1) 'What counts as a seat?' — 'Anyone who logs in. Managers who only view schedules are free; we''d rather you invite the whole office than bill lurkers.' 2) 'Can I change tiers mid-cycle?' — 'Yes, up or down. We prorate to the day and the difference lands on the next invoice.' 3) 'What happens if I add seats?' — 'The slider above already told you: new seats are prorated from the day they join, not the first of the month.' 4) 'Is there a free plan?' — 'A 14-day trial with everything, then Starter. We don''t do a crippled forever-free tier; support costs more than small accounts pay.' 5) 'How does the annual discount work?' — 'Pay yearly, save 20%. It''s the same product — the discount is for the paperwork we skip.' 6) 'What if we cancel?' — 'Self-serve, effective immediately, data exportable for 90 days. No retention scripts, no 'call to discuss'."
   Layout: Mist background, accordion rows on White 1px Hairline border, question Space Grotesk 500 17px, answer Inter 15.5px / 1.7 max-width 66ch, Plus icon right. Container max-width 760px.
9. **CTA band and footer** — CTA: a White band with a 1px Hairline top border: H2 'Fourteen days, no card, all features.' and a primary 'Start free' (href '#') beside secondary 'Talk to sales' (mailto sales@ + emailDomain). Footer: Ink/95% background, three columns: wordmark + '[PRODUCT] — priced to be understood.'; 'Plans' anchors (Plans, Compare, Enterprise, FAQ); 'Write' hello@ + emailDomain and sales@ + emailDomain. Bottom line: '© [BRAND]. Prices in USD.'
   Layout: CTA band vertical padding 72px centered; footer vertical padding 56px, 3 columns, bottom line under a White/10% hairline.

## Assets
- icon: lucide-react only: Check, Minus, Plus, ArrowRight, Building2, ShieldCheck, Timer, RefreshCw, Users, CalendarDays, Lock. Stroke width 2, 16–24px, color inherits. public/favicon.svg hand-written: viewBox 0 0 32 32, a 32x32 rect rx 8 filled #4F46E5, a White calendar-strip glyph (a rounded rect with two top notches and three White dots). No other logo: the product name is always set as type.
- image: Drawn in code only — no photos, no stock, no external images. The AppPanel hero mock (week strip, shift blocks, totals sidebar, cursor dot) is inline SVG with Hairline strokes and Indigo/Mist fills; table checks, dashes, the toggle, slider, chips and the favicon are SVG/CSS. Write ASSETS.md anyway, listing lucide-react (ISC), @fontsource-variable/space-grotesk and @fontsource-variable/inter (OFL-1.1), and noting 'No image assets; all visuals drawn in SVG/CSS.'
- font: Install @fontsource-variable/space-grotesk and @fontsource-variable/inter and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.

## Don'ts
- No backend, no form submission, no fetch to any API: the toggle, slider and totals are pure client math in src/lib/pricing.ts; CTAs are hrefs ('#' for the trial, mailto for sales).
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 5 MB.
- No real products, pricing pages or payment marks (no real card logos, no Stripe/PayPal badges); every tier name, number and feature line is invented.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion everywhere: disable counting, squash, staggered check draws and slides; keep color/border/shadow hovers.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; the slider, toggle and accordion work with keyboard only (arrow keys move the slider), the sticky table header never overlaps the sticky page header, and every interactive element has a visible focus ring.
- Keep copy concrete: no lorem, no 'flexible plans for every team'; every number derives from [BASE_PRICE] in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/saas-pricing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
