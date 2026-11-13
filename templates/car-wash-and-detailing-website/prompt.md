# Car Wash and Detailing Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the car wash and detailing studio run by [FOUNDER] in [CITY], [EXPERIENCE] at the same corner. The page is glossy dark-mode — wet black, candy blue, foam white — with a vehicle-size selector that reprices everything, three wash packages, a membership picker with live break-even math, a paint-correction before/after slider, a size-aware detailing menu, slot booking, gift cards, fleet accounts and an equipment-and-water trust strip. Photos of foam, gloss and reflections on generic cars with no badges or plates. All prices, slots and reviews are invented sample data.

- Audience: Primary: drivers around [CITY] deciding between a $12 wash and a $45/month habit — people who want the menu, the math and a slot without a phone call. Secondary: mobile detailers and fleet-wash operators re-pointing the menu.
- Goal: Move a visitor from 'just a wash' to either a booked detail slot or a joined membership: show the tiers with times, make the membership math visible and honest, prove the detailing with the slider, then let booking finish inline.
- Tone: Confident pit-lane English — short, glossy, lightly fun about clean cars. Every claim is about process and equipment, never miracle adjectives.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/chakra-petch (OFL-1.1), @fontsource/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Chakra Petch' and fontFamily.body 'Inter'.
  - Self-host Chakra Petch weights 600 and 700 and Inter weights 400, 500, 600, 700 through @fontsource/chakra-petch and @fontsource/inter, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals, price tweens and the slider spring; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, the single price table by vehicle size (packages, memberships, detailing services with durations), break-even copy, gift-card presets, fleet form fields, trust items, reviews, slot chips. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Pricing table, exactly one source: wash packages by size (sedan/SUV & van/truck & oversize) — Express $14/$18/$22 · 5 min; Deluxe $24/$29/$35 · 12 min; Ceramic Shine $39/$46/$54 · 25 min. Memberships by size — Suds Unlimited $29/$34/$41 (unlimited Express-and-up washes); Gloss Unlimited $45/$52/$60 (plus vacuums, tire foam and dash wipe per visit); Everything $69/$78/$88 (plus a monthly ceramic boost and a quarterly interior refresh). Detailing by size — Interior Detail $189/$209/$229 · 3 h; Machine Polish $349/$369/$389 · 5 h; Ceramic Coating $899/$929/$959 · 8 h; Headlight Restore $89 flat · 45 min. The size selector (three chips near the top of pricing) swaps every displayed price with a 180ms tween and persists to localStorage under [BRAND_SLUG]-size.
  - Break-even math, exactly: for each membership tier, break-even = tier monthly price ÷ single price of the included single wash tier at the current size, shown to one decimal as '≈ 1.7 Deluxe washes and it's paid for'; it updates live with the size selector.
  - Gloss effects in CSS only: cards on wet black get a 1px candy-blue top edge and a slow 1200ms specular sweep (::after gradient translating across) on hover, disabled under prefers-reduced-motion; a faint radial 'water bead' pattern (CSS radial-gradient dots at 6% opacity) on the hero and membership bands. Text stays at AA contrast on every background.
  - The before/after slider uses before-paint (swirled dull paint) under after-paint (corrected gloss), same 4:3 panel vantage, clipped by inset(0 0 0 N%), with a candy-blue handle (pointer drag, click-to-position, arrow keys when focused, role='slider').
  - Booking: service select (any package or detailing service, preselectable from cards), relative day window chips (Today / Tomorrow / This weekend) with three sample time slots each (Morning: 8:00, 9:30, 11:00; Midday: 12:30, 2:00; Late: 4:30, 6:00), name, phone, vehicle-size chips; inline validation, success state with a slot code like 'SLT-402', persisted to localStorage under [BRAND_SLUG]-booking; no calendar dates tied to the real clock.
  - Gift cards as code-drawn visuals: a candy-blue card SVG with foam-white ribbon, preset chips $25/$50/$100 and a 'custom amount' note; the claim line 'redeemable for washes, details and memberships — plastic-free, emailed instantly (sample)' makes clear nothing is really purchased.
  - Fleet accounts: a short local-only form (company, contact name, email, number of vehicles slider 2–40, wash frequency chips) with inline success; note 'we invoice monthly — no per-visit receipts in the cupholder'.
  - Use only these lucide-react icons: Phone, Droplets, Sparkles, Car, Truck, Timer, CheckCircle2, Star, MapPin, ChevronRight, ChevronLeft, ArrowRight, Menu, X, CreditCard, Users, Clock, Gift, Waves.
  - Persist size choice, booking and fleet submissions to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the wet-black rounded square with a candy-blue water-drop mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Brand (default: "Sudworks Auto Spa"). Invented wash name; a water-drop logomark is derived from it in code.
- [CITY] — City (default: "Marina Heights"). Where the tunnel is; appears in hero, hours and footer.
- [FOUNDER] — Owner (default: "Theo Marsh"). Invented owner, named in hero and trust copy.
- [PHONE] — Phone (default: "(555) 554-7788"). Studio line; links as tel: with digits only.
- [EXPERIENCE] — Years at the corner (default: "7 years"). Plain phrase like '7 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/car-wash-and-detailing-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Wet black `#0A0A0C` — Page ground
- Panel black `#121218` — Cards and panels on dark
- Panel raised `#181820` — Hover and selected panel states
- Candy blue `#2D7BFF` — Electric accent: CTAs, active chips, prices, slider handle
- Blue glow `#6FA8FF` — Gradient ends, speculars, links on dark
- Foam white `#F4F7FB` — Primary text on dark, light card accents
- Foam tint `#E9F1FB` — Selected chips' text and gift-card ribbon
- Steel `#8A94A6` — Secondary text on dark
- Hairline `#23232C` — Hairline rules and card borders on dark

### Typography
- Display: headlines, prices, times, nav: Chakra Petch (OFL), weights 600/700
- Body: paragraphs, controls, menus: Inter (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced candy-blue eyebrow over a Chakra Petch 700 title at clamp(28px, 3.2vw, 44px); cards 24px padding, 20px gaps.
- Radius: Automotive softness: 10px cards and chips, pill CTAs; photos 10px with a 1px blue top edge on frames.
- Motion: Fade-rise reveals (12px, 450ms, 50ms stagger) via useInView, once — quick and glossy.
- Motion: Price changes tween 180ms on size switch; break-even counts to its new value 300ms; the specular sweep crosses cards in 1200ms on hover.
- Motion: The slider handle follows the pointer directly while dragging and settles with a 200ms spring on release.
- Motion: All motion (including the sweep and bead pattern) disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Dark glossy automotive photography from one shoot: a car under white foam in a blue-lit wash bay, mirror-gloss panel reflections, a swirled-vs-corrected paint pair at the same vantage, a pristine leather interior detail and self-serve vacuum stations — generic cars only, no badges, no plates, no people.

## Pages & Sections
### [BRAND] — Car wash & detailing in [CITY] (`index.html`)
1. **Header and hero** — Header (wet black at 92% with backdrop blur, 68px, sticky): water-drop logomark (candy-blue drop in a foam-white ring) + [BRAND] in Chakra Petch 700 uppercase foam white 17px; nav anchors Washes, Unlimited, Detailing, Book, Fleet; right: phone chip Phone icon + [PHONE] (tel:) in blue and a candy-blue pill 'Book a slot'. At 390px: logomark + name, phone icon button, menu button on one line; anchors in a panel-black dropdown. Hero: full-bleed foam photo (car under white foam in a blue-lit bay, 82vh desktop / 560px mobile) with a bottom-up gradient scrim from wet black 95% to transparent 50% and the faint CSS water-bead pattern overlay; content bottom-left: eyebrow in candy blue 'TUNNEL WASH · HAND DETAIL — [CITY]'; H1 Chakra Petch 700 uppercase foam white 'DIRT DOESN'T STAND A GLOSS.'; paragraph steel 'Soft-cloth tunnel, spot-free rinse, and a hand-finish bay — [FOUNDER]'s crew has kept [CITY] shiny for [EXPERIENCE]. Pick your size below; every price updates.'; candy-blue pill 'Book a slot' (anchor) and foam-outline pill 'See memberships' (anchor); chips in 12px foam white on translucent panel black: 'Open daily 7a–8p' · 'Water reclamation — 80% reused' · 'Free vacuums with any wash'.
   Layout: Copy columns 1–7; chips wrap two rows max at 390px; scrim guarantees AA contrast.
   Motion: Photo scales 1.04→1 over 800ms; copy rises 12px staggered 60ms.
2. **Wash packages and size selector** — Wet-black band. Eyebrow 'THE TUNNEL' (candy blue); title 'Three washes. Pick your size.' The vehicle-size selector row (sticky under header on desktop): three chips 'Sedan' (Car icon), 'SUV & van' (Car icon), 'Truck & oversize' (Truck icon) — active chip fills candy blue with foam-white text; a 12px steel note 'Prices below match your size.' Three package cards (panel black, 1px blue top edge, specular sweep on hover): 'Express' — '$14' — '5 minutes' — 'Soft-cloth wash, spot-free rinse, wheel blast, air dry.'; 'Deluxe' — '$24' — '12 minutes' — 'Everything in Express plus triple-foam wax, tire shine and underbody blast.' tagged 'MOST WASHED' in a foam-white chip; 'Ceramic Shine' — '$39' — '25 minutes' — 'Everything in Deluxe plus a ceramic sealant pass and 10-minute hand-finish in the bay.' Prices render in Chakra Petch 700 at 40px and re-tween on size change; each card footer: blue link 'Book this' (anchoring the form with the service preselected).
   Layout: Three cards in a row (1-column under 900px); selector centered above, full-width; prices tween 180ms.
   Motion: Cards rise 12px staggered 60ms; hover sweeps the specular; price tween 180ms on size change.
3. **Unlimited membership picker** — Panel-black band with the water-bead pattern, the signature section. Eyebrow 'UNLIMITED' (candy blue); title 'The membership math, shown.' Three membership cards: 'Suds Unlimited' — '$29 / mo' — 'Unlimited Express-and-up washes. Any day, both lanes.'; 'Gloss Unlimited' — '$45 / mo' — 'Plus vacuums, tire foam and a dash wipe on every visit.' tagged 'BEST VALUE' in foam white; 'Everything' — '$69 / mo' — 'Plus a monthly ceramic boost and a quarterly interior refresh.' Under the cards, the live math strip (candy-blue border): 'Break-even: ≈ 1.7 Deluxe washes — everything after that is free gloss.' updating with the size selector. Footnote 12px steel: 'Sample prices, month-to-month, cancel any time. Join at the counter or the pay station — this demo doesn't take a card.' A 'How unlimited works' 3-step row: 'Windshield tag at the gate → wash detected automatically → drive out, no wallet'. Blue pill 'Start at the counter →' anchoring the booking form with 'Membership signup' preselected.
   Layout: Three cards in a row (1-column under 900px); math strip full width beneath; steps 3-across.
   Motion: Break-even counts to its value 300ms on change; cards rise 12px staggered.
4. **Paint correction slider** — Wet-black band. Eyebrow 'PROOF' (candy blue); title 'Swirls out. Gloss in.' The before/after slider (max-width 1080px, 16:9 crop of the 4:3 photos): before-paint (dull swirled clear coat under harsh light) under after-paint (corrected mirror gloss), candy-blue handle with chevrons, 'BEFORE' / 'AFTER' chips at top corners. Caption 13px steel: 'Fender panel, machine polish stage two — same light, same angle. No filters; the bay camera doesn't have any.'
   Layout: Slider centered; pointer drag, click-to-position, arrow keys when focused; 44px handle.
   Motion: Handle follows pointer directly, settles with a 200ms spring; clip updates every frame.
5. **Detailing menu** — Panel-black band. Eyebrow 'HAND DETAIL' (candy blue); title 'Menu by the hour, priced by size.' Four service rows (hairline dividers): 'Interior Detail' — '$189' — '3 hours' — 'Full interior deep-clean: steam on fabric, leather conditioner, glass, jambs.'; 'Machine Polish' — '$349' — '5 hours' — 'Two-stage correction cutting swirls and oxidation; measured with a gloss meter.'; 'Ceramic Coating' — '$899' — '8 hours' — 'Multi-layer ceramic with a 24-month sample warranty; cured overnight indoors.'; 'Headlight Restore' — '$89' — '45 minutes' — 'Wet-sand, polish and seal — output measured before and after.' Each row: book button 'Book' (blue pill) preselecting the form; prices re-tween with the size selector. The interior-detail photo beside the menu (10px frame).
   Layout: Menu 7 columns, photo 5; mobile stacks menu then photo.
   Motion: Rows fade in 50ms apart; prices tween 180ms on size change.
6. **Equipment and water trust** — Wet-black band. Eyebrow 'THE BAY, EXPLAINED' (candy blue); title 'Gentle on paint, loud about water.' Four fact cards: 'Soft-cloth everything' — 'No brushes on paint — closed-cell foam and microfiber only.'; 'Water reclamation' — '80% of every wash is filtered and reused; the bay floor drinks first.'; 'Spot-free final rinse' — 'Deionized water, so drying marks never start.'; 'Hand-finish bay' — 'Two towels minimum on any glossy surface, always.' Stats row count-up: '310k' 'washes run' · '80%' 'water reused' · '4.9' 'from 502 reviews'.
   Layout: Four cards 2×2 (1-column under 800px); stats 3-across beneath.
   Motion: Numbers count up 800ms; cards rise 12px staggered.
7. **Booking by slot** — Panel-black band. Eyebrow 'BOOK A SLOT' (candy blue); title 'Twelve minutes, scheduled.' Form (wet-black panel, max-width 720px): service select (all washes, details, 'Membership signup'); relative day chips (Today / Tomorrow / This weekend) with three sample time slots each (Morning 8:00 / 9:30 / 11:00; Midday 12:30 / 2:00; Late 4:30 / 6:00); Name (required), Phone (required); vehicle-size chips mirroring the global selector. Candy-blue pill submit 'Hold my slot'. Validation inline (2px blue borders, 13px notes), no native popups. Success: CheckCircle2 blue, slot code 'SLT-402' in Chakra Petch 700 24px, 'Held for 2 hours — reply to the confirmation text if you're running late. This demo stores the booking in this browser only.' and an outline pill 'Book another'. Persists to localStorage.
   Layout: Two-column field rows desktop, 1-column mobile with 96px bottom padding clear of the sticky bar; slot chips 44px targets.
   Motion: Success crossfades with a 12px rise; code pops 1.1×.
8. **Gift cards and fleet** — Wet-black band, two halves. Left: 'Gift cards' — the code-drawn candy-blue card with foam ribbon; preset chips $25 / $50 / $100 and a custom-amount note; line 'Redeemable for washes, details and memberships — emailed instantly, plastic-free (sample).' Right: 'Fleet accounts' — short form: company, contact name, email (required trio), vehicles slider 2–40, frequency chips (Weekly / Biweekly / Monthly); inline success 'We'll call with a lane plan and monthly invoicing — no per-visit receipts in the cupholder.'; both persist locally.
   Layout: 6/6 columns desktop, stacked mobile.
   Motion: Card tilts 4° on hover; panels rise 12px.
9. **Reviews and footer** — Panel-black band. Eyebrow 'FROM THE LANES'; title 'Shiny, and said nicely.' Three quote cards: five blue stars; foam-white 15px quote; steel 13px footer. 'The membership math strip is real — I wash twice a week and my truck pays for Everything by the 9th.' — Danny R., Silverado. 'They photographed my fender before and after polish and printed the gloss-meter numbers. Nerds. Excellent nerds.' — Priya M., hatchback. 'Water reclamation is why I switched. Also the free vacuums have actual suction.' — Gwen A., minivan. Disclaimer 12px steel: 'Sample reviews for this demo.' Footer (wet black): column 1 — logomark + [BRAND], '4 Harbor Loop Road, [CITY]', 'Daily 7a–8p · details by slot', [PHONE] (tel:); column 2 'Studio': anchors Washes, Unlimited, Detailing, Fleet; column 3 'Small print': 'Sample site for a template — prices, slots and reviews invented', 'No real payment or subscription anywhere in this demo', optional [CREDIT] link in blue. Mobile sticky bar (under 768px): fixed bottom wet black 96% + blur; candy-blue pill 'Call' (tel:) and foam-outline pill 'Book' (anchor), safe-area padding.
   Layout: Three cards in a row (1-column under 900px); footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: Cards rise 12px staggered 70ms.

## Assets
- image: Foam hero. Download https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/hero-foam.webp to public/images/hero-foam.webp. Alt: 'A car covered in white foam inside a blue-lit wash bay.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Gloss reflection. Download https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/gloss-reflection.webp to public/images/gloss-reflection.webp. Alt: 'A mirror-gloss car panel reflecting blue studio light.' Supporting image in the equipment band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Before paint. Download https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/before-paint.webp to public/images/before-paint.webp. Alt: 'A car fender panel with swirl marks under harsh light.' The before layer of the slider. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: After paint. Download https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/after-paint.webp to public/images/after-paint.webp. Alt: 'The same fender panel corrected to a mirror gloss.' The after layer of the slider, matching the before vantage. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Interior detail. Download https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/interior-detail.webp to public/images/interior-detail.webp. Alt: 'A pristine leather car interior after detailing.' Beside the detailing menu. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Vacuum bay. Download https://media.vibefather.ai/assets/4040e97e-485b-467c-842e-83aaab08c7b6/vacuum-bay.webp to public/images/vacuum-bay.webp. Alt: 'A row of self-serve vacuum stations in a clean bay.' Supporting image in the trust band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup. No other icon source.
- font: Chakra Petch (OFL) and Inter (OFL) self-hosted through @fontsource/chakra-petch and @fontsource/inter; no CDN font loading.

## Don'ts
- No real car-wash brands, franchises or their slogans; [BRAND], prices, slots and reviews are invented sample data.
- No real vehicle brands, badges or license plates in photos; cars are generic and unmarked.
- No real detailing-product or equipment brands (waxes, coatings, machines); products are described generically (ceramic sealant, dual-action polish, deionized rinse).
- No real payment processors or subscription platforms named; membership stays month-to-month sample pricing and no card is ever taken online — the page says so.
- No miracle-detailing claims: no 'showroom guaranteed', no coating-life promises beyond the labeled 'sample warranty'; corrections are described by process and measurement.
- No dates tied to the real clock: booking uses relative day chips and static sample slots, no calendar dates, no copyright year.
- Forms are local-only samples: no submit to any server, no APIs, no analytics, no real gift-card purchase. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG/CSS art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- One price source only: every displayed price derives from the content.ts table via the size selector — never hard-code a second copy.
- Text on wet-black and panel-black holds AA contrast; the specular sweep and bead pattern are decorative layers that never sit behind body text.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, tweens, sweeps, count-ups and the slider spring, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the booking form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/car-wash-and-detailing-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
