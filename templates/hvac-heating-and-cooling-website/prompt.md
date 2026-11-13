# HVAC Heating and Cooling Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the heating and cooling company founded by [FOUNDER], serving [CITY] and 30 miles around with [EXPERIENCE] of work behind it. The page runs on a hot-and-cold duotone — ember red for heating and urgency, ice cyan for cooling and data — with an SVG temperature-dial motif that recurs from hero to results. A system sizing helper turns square footage, climate zone and insulation into a recommended capacity and system type with a plain-language why; maintenance plans compare honestly; a 24/7 emergency banner promises a response time; technicians, rebates and reviews fill out the trust story; a booking form with time windows closes it. Every price, rebate and capacity figure is invented sample data.

- Audience: Primary: homeowners in [CITY] facing a failing furnace or summer AC replacement — people who want a straight answer about what system fits before a salesperson arrives. Secondary: any diagnostic-and-quote trades business adapting the helper to plumbing, electrical or insulation.
- Goal: Move a visitor from 'my house is uncomfortable' to a booked appointment: triage the emergency fast in the top banner, answer the money and sizing question honestly without capture, then convert with the short booking form.
- Tone: Plain-spoken trades confidence — numbers, promises and explanations in short sentences. Reads like a technician who likes teaching, never like a sales script.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/barlow-condensed (OFL-1.1), @fontsource/barlow (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Barlow Condensed' and fontFamily.body 'Barlow'.
  - Self-host Barlow Condensed weights 500, 600, 700 and Barlow weights 400, 500, 600, 700 through @fontsource/barlow-condensed and @fontsource/barlow, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for section reveals, dial tweens and count-ups; gate every animation on useReducedMotion().
  - Keep all copy, rates and data in src/content.ts: brand strings, hero copy, service cards, emergency copy, sizing helper config (zone factors, insulation factors, BTU-per-sqft base, system-type thresholds and explanations), plan tiers with inclusions and prices, rebate steps with sample amounts, technician profiles, reviews, FAQ-free page, form options. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Sizing helper math, exactly: cooling BTU = footprint × zoneFactor × insulationFactor, where zoneFactor is 22 / 26 / 30 BTU per sq ft for the three zones (mild summers / four full seasons / hot summers) and insulationFactor is 0.92 tight-and-new, 1.0 decent, 1.12 old-and-drafty; tons = BTU ÷ 12,000 rounded to the nearest 0.5; system type: tons ≤ 2 'Single-stage', tons ≤ 3.5 'Two-stage', otherwise 'Two systems, zoned'; heating line shows 'furnace sized around 40 BTU per sq ft in this zone' unadjusted by cooling factors. Show BTU, tons, system type, the three factors used, and one explanation sentence per factor. Persist inputs to localStorage under [BRAND_SLUG]-sizing.
  - Draw the temperature dial as an inline SVG semicircle gauge with tick marks every 10°, a needle, an ember-red arc on the left half and an ice-cyan arc on the right; the hero needle idles drifting 4° either way (paused under reduced motion), and the sizing result reuses the component with the needle set to a position mapped from tons (1–5).
  - Draw the climate-zone picker as a simple inline SVG map shape — an abstract three-band region (north / middle / south) with the selected band filled cyan and [CITY] marked with a dot — purely decorative positioning, not a real map.
  - Use only these lucide-react icons: Phone, Flame, Snowflake, Wind, Wrench, Thermometer, CalendarCheck, ShieldCheck, Clock, CheckCircle2, Star, MapPin, ChevronRight, ArrowRight, Menu, X, Home, AlertTriangle, Leaf.
  - Persist the booking request to localStorage under [BRAND_SLUG]-booking-request; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the navy square with half-ember, half-cyan dial mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Brand (default: "Calder Point Heating & Air"). Invented company name; the dial logomark is derived from it in code.
- [CITY] — City (default: "Rookfield"). Service home base; appears in the emergency banner, hero, zone picker and footer.
- [FOUNDER] — Founder (default: "Marta Ellison"). Invented founder and master technician; named in the hero proof line and the first technician card.
- [PHONE] — Phone (default: "(555) 462-8871"). Emergency and booking line; links as tel: with digits only.
- [EXPERIENCE] — Experience (default: "19 years"). Plain phrase like '19 years'; used in hero copy and technician cards.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/hvac-heating-and-cooling-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Deep navy `#0B1F3A` — Hero ground, dark bands, header, footer
- Navy deep `#081729` — Footer and emergency banner ground
- Ember red `#FF4D2E` — Heating sections, urgency, primary CTAs, dial left arc
- Ember tint `#FFE7E2` — Heating chips and highlights on light
- Ice cyan `#3DD6F5` — Cooling sections, data, links, dial right arc
- Ice tint `#E2F6FC` — Info panels, cooling chips
- Warm white `#F6F8FA` — Light section band ground
- White `#FFFFFF` — Cards and panels
- Ink `#10233F` — Headings and body on light
- Steel `#54627A` — Secondary text on light; #9FB0C6 on dark
- Hairline `#DCE4EC` — Hairline rules and card borders

### Typography
- Display: headlines, section titles, stats, nav: Barlow Condensed (OFL), weights 500/600/700
- Body: paragraphs, controls, table cells: Barlow (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Sections separated by 96px desktop / 64px mobile; section headers use a 14px letter-spaced eyebrow (ember or cyan per section temperature) over a Barlow Condensed 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px grid gaps.
- Radius: Hard-edged identity: 2px cards and chips, 0 buttons; photos and the dial panel 6px.
- Motion: Fade-rise reveals (16px, 500ms, 60–90ms stagger) on section entry via useInView, once.
- Motion: The hero dial needle idles drifting ±4° on a 4s loop; the sizing result dial tweens to its tons position over 600ms; stat numbers count up over 900ms.
- Motion: Plan-tier cards highlight with a 200ms lift; emergency banner pulse is a subtle background shift on a 3s loop, and only on the banner.
- Motion: Everything disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Trade photography from one shoot: navy-dusk exteriors with condenser units and warm window light, clean daylight utility rooms and ductwork, and three studio-lit technician portraits (fictional people, varied, no logos on uniforms). Equipment is generic with no readable model numbers, brand marks or text anywhere.

## Pages & Sections
### [BRAND] — Heating & Cooling in [CITY] (`index.html`)
1. **Emergency banner and header** — Top banner (navy-deep ground, full width, 40px tall, single line at 390px): an AlertTriangle icon in ember, text in white 14px '24/7 emergency line — on-site within 4 hours across [CITY]:' and [PHONE] in cyan (tel:); far right, 12px steel-on-dark 'Cooling calls answered first this week.' Header below (deep navy, 76px): logomark — a navy square holding the half-ember/half-cyan dial — beside [BRAND] in Barlow Condensed 700 uppercase 20px white; nav anchors Services, Sizing helper, Plans, Technicians; right side an ember pill 'Book now' and a cyan phone chip with Phone icon + [PHONE] (tel:). At 390px: banner one line with the seasonal note hidden, header shows logomark + brand, a phone icon button and a menu button (44px targets); anchors in a navy dropdown.
   Layout: Banner and header are sticky as one block; hero sits below. All text on navy holds AA contrast.
   Motion: Banner background shifts navy-deep → #0E1F33 and back on a 3s ease loop; paused under reduced motion.
2. **Hero with dial** — Deep-navy hero (88vh desktop / 640px mobile). Left (columns 1–7): eyebrow in ice cyan 'HEATING & COOLING — [CITY] & 30 MILES AROUND'; H1 Barlow Condensed 700 uppercase white 'ONE COMPANY FOR THE HOT AND THE COLD.'; paragraph in #C9D6E8 '[FOUNDER] started [BRAND] with one van and a rule that still stands: explain the system before you sell it. [EXPERIENCE] later — 6,400 repairs, 2,100 installs, and a 4.9 from 268 neighbors.'; two CTAs: ember pill 'Book a visit' (anchor to form) and cyan-outline pill 'What system fits my home?' (anchor to helper); proof chips row in white 12px uppercase on translucent navy: 'EPA-certified refrigerant handling' · 'License #HV-20417' · 'Same-day diagnostics'. Right (columns 8–12): the hero photo — a clean condenser unit beside a modern home at dusk, warm windows glowing — in a 6px-radius frame, with the SVG temperature dial (140px) floating as a card overlapping its bottom-left corner, needle idling.
   Layout: 12-column grid, dial card offset -20px from the photo corner; on mobile the photo follows the copy full-width at 4:3 with the dial overlapping its top-right.
   Motion: Photo settles from scale 1.04 over 700ms; copy rises 16px in an 80ms stagger; dial needle drifts ±4° on a 4s loop.
3. **Services, hot and cold** — Warm-white band. Eyebrow 'WHAT WE DO' (ember); title 'Heating on the left. Cooling on the right.' Four cards in a row, each with a top color bar: 'Furnace & heating' (ember bar, Flame icon) — 'Repairs, replacements and heat-pump conversions for gas and electric systems. Diagnostics $89, waived with the repair.' — chips: 'Same-day parts', 'Carbon-monoxide testing'; 'AC & cooling' (cyan bar, Snowflake icon) — 'Repair and replacement of central air and mini-splits, with static-pressure testing so the new unit actually fits your ducts.' — chips: 'Refrigerant leak tracing', 'Mini-split installs'; 'Indoor air quality' (white bar, Wind icon) — 'Humidity, filtration and fresh-air systems sized to the house, not the catalog.' — chips: 'HEPA bypass', 'Whole-home humidifiers'; 'Maintenance plans' (navy bar, Wrench icon) — 'Two tune-ups a year, priority scheduling and 15% off repairs. Compared in full below.' — chip: 'See the plans' anchoring to the comparison. Card body 15px ink on white, 2px radius, hairline border; footer link in the card's temperature color 'Book this' anchoring to the form.
   Layout: 4-column grid (2×2 under 1024px, 1-column under 640px); top color bars are 4px tall.
   Motion: Cards rise 16px in a 70ms stagger; the color bar draws from 0 to full width over 400ms after entry.
4. **System sizing helper** — Navy band, the signature section. Eyebrow 'THE SIZING HELPER' (cyan); title 'What system fits my home?'; sub-lead #9FB0C6 'Three answers in, one plain-language recommendation out. It's a starting point — the real load calc happens on site.' Controls in a white panel (left, 7 columns): 1) 'Heated & cooled floor area' — slider 600–4,000 sq ft, default 1,850, live condensed value; 2) 'Climate zone' — the inline SVG three-band region map as a picker (Mild summers / Four full seasons / Hot summers), selected band fills cyan, [CITY] dot stays visible; 3) 'Insulation' — three chips: 'Old and drafty', 'Decent', 'Tight and new'. Result panel (navy-deep, right, 5 columns): the result dial (needle mapped from tons 1–5, cyan arc lighting up); 'YOUR STARTING POINT' eyebrow in cyan; capacity big in Barlow Condensed 700 cyan — e.g. '3.0 tons · 36,000 BTU cooling'; system type line in white 600 — 'Two-stage system'; three explanation rows in 13px #9FB0C6 with white values: 'Zone: four full seasons — 26 BTU per sq ft', 'Insulation: decent — no adjustment', 'Heating: furnace around 40 BTU per sq ft here'; footnote 12px 'Illustrative sizing from industry rules of thumb. Your quote follows a room-by-room Manual-J-style load calc on site.'; ember pill 'Book the free estimate'. Result re-computes live and persists.
   Layout: 7/5 grid desktop; mobile stacks the result panel under controls; the dial is 120px inside the result panel.
   Motion: Needle tweens to position over 600ms on change; capacity number tweens 200ms; explanation rows fade 8px; no layout shift.
5. **Maintenance plan comparison** — White band. Eyebrow 'PLANS' (cyan); title 'Tune-ups, compared honestly.' Three plan cards (warm-white ground, hairline border, 28px padding; middle card navy with white text and a cyan 'MOST PICKED' chip): 'Seasonal Check' — '$149 / year' — 'One precision tune-up a year, on the season you choose. 21-point checklist, filter included.'; 'Comfort Club' — '$249 / year' — 'Two tune-ups (heat + cool), priority scheduling, 15% off repairs, no diagnostic fee ever.'; 'Total Care' — '$389 / year' — 'Everything in Comfort Club plus parts coverage on repairs and no overtime rates — even at 2 a.m.' Inclusion matrix under the cards (rows: Precision tune-up ×1/×2/×2, Priority scheduling —/check/check, 15% off repairs —/check/check, Parts covered —/—/check, No overtime rates —/—/check; checks as cyan CheckCircle2). Arithmetic note in an ice-tint panel, 14px: 'Bought separately, two tune-ups plus one $89 diagnostic come to $338 — Comfort Club is $249. The math is the pitch.'
   Layout: Three cards in a row (1-column under 900px with the matrix scrolling horizontally); matrix rows use hairline dividers.
   Motion: Middle card lifts 12px on desktop; checks pop 1.15× as the matrix enters view, staggered 50ms.
6. **Trust and stats** — Ember band (solid #FF4D2E ground, white text — heating temperature, deliberately). Eyebrow in white 'WHY NEIGHBORS KEEP THE NUMBER'; title 'Promises with numbers behind them.' Four stats with Barlow Condensed 700 white numbers counting up: '4 hr' 'emergency response, guaranteed' · '6,400' 'repairs completed' · '2,100' 'systems installed' · '4.9' 'from 268 reviews'. Below, a one-line promise in white 18px: 'If we miss the window, the diagnostic is free. It's in writing on every quote.' Right side: the furnace-room photo (clean utility room, new air handler) in a 6px frame, 40% width, floating over the band's bottom edge into the next section (overlap -48px).
   Layout: Stats 2×2 grid left, photo right; on mobile stats stack and the photo sits inline without overlap.
   Motion: Numbers count up over 900ms on entry; photo rises 16px.
7. **Rebates explainer** — White band. Eyebrow 'REBATES' (ember); title 'Three places the price comes down.' Three numbered step cards (hairline border, big cyan step numeral 01/02/03): 01 'Utility rebate' — 'Most regional utilities pay back part of a high-efficiency swap. Sample: up to $400 back on a qualifying AC. We file the paperwork with your invoice.'; 02 'Manufacturer seasonal offer' — 'Equipment makers run spring and fall promotions — sample: up to $900 off a complete system during the fall campaign. We show you the current sheet with the quote.'; 03 'Tax credit' — 'High-efficiency installs may qualify for a federal credit of up to 30% of the equipment cost. Confirm with your tax preparer — we hand over the spec sheets they'll want.' Footer note in ice-tint panel 13px: 'Amounts shown are illustrative samples, not offers. Rebates change by season, utility and equipment — your written quote lists what's live right now.'
   Layout: Three cards in a row (1-column under 900px); step numerals in Barlow Condensed 700 cyan at 44px.
   Motion: Cards rise 16px staggered 80ms.
8. **Technicians** — Warm-white band. Eyebrow 'THE PEOPLE AT THE DOOR' (cyan); title 'Background-checked, certified, and on time.' Three cards, each with a 3:4 portrait (generated fictional technician), name in Barlow Condensed 700 20px ink, role in steel 13px, two text chips (no badge graphics): '[FOUNDER]' — 'Founder & master technician' — '[EXPERIENCE] in the field' — chips 'EPA-certified refrigerant handling', 'Gas systems'; 'Dev Ranganathan' — 'Senior installer' — 'Heat pumps and mini-splits, 11 years' — chips 'Duct design', 'Mini-splits'; 'Lu Chen' — 'Diagnostics lead' — 'Finds the failure others miss' — chips 'Indoor air quality', 'Controls & thermostats'. Under each portrait a one-line quote in 14px steel: e.g. 'Measure twice, charge once.' / 'The ducts are half the system.' / 'Comfort is a data problem.'
   Layout: Three cards in a row (1-column under 900px); portraits cropped 3:4 with 6px top radius.
   Motion: Cards rise 16px staggered 90ms.
9. **Reviews** — White band. Eyebrow 'NEIGHBORS'; title 'What the street says.' Three quote cards (warm-white, hairline, cyan quote mark): five cyan-star rows; 16px ink quotes; footers 13px steel. 'Furnace died on the coldest night of the year. Tech at 9 p.m., new board installed, house warm by midnight. The 4-hour promise is real.' — Gwen A., [CITY], emergency repair. 'The sizing helper said 2.5 tons; the load calc on site said 2.5 tons. First company that didn't try to sell me five.' — Tomas W., Alder Junction, full system. 'Comfort Club tune-up found a cracked heat exchanger under warranty. They handled the whole claim — I paid $0.' — Riya K., Foxglove, plan member.
   Layout: Three cards in a row; middle card lifts 12px on desktop.
   Motion: Cards rise 16px staggered 90ms.
10. **Booking form** — Navy band. Eyebrow 'BOOK A VISIT' (cyan); title 'Pick a window. We'll confirm by phone.' Form in a white panel (max-width 720px, 32px padding): service need (segmented control, ember when selected: 'Emergency — no heat/AC' / 'Estimate for a new system' / 'Tune-up or repair'); Name (required), Phone (tel, required), Street address (required); town select: '[CITY]', 'Alder Junction', 'Foxglove', 'Milldam', 'Rookfield North', 'Stony Hollow'; time window (segmented: 'Morning 8–12' / 'Afternoon 12–4' / 'Any'); notes textarea placeholder 'e.g. upstairs never cools, unit is 16 years old'. Ember pill submit 'Request the visit'. Validation: missing required fields get a 2px ember border and a 13px ember note; no browser-native popups. Success replaces the form: cyan CheckCircle2, 'Got it, [name].' in Barlow Condensed 700, 'Emergency requests: we call back within 15 minutes, day or night. Everything else: the office confirms your window within one business day. This demo stores the request in this browser only.' and an outline pill 'Book another'. Persists to localStorage.
   Layout: Two-column field rows on desktop (name+phone, address+town), segmented controls and textarea full width; 1-column mobile with 96px bottom padding so the sticky bar never covers submit.
   Motion: Success crossfades with a 12px rise; check pops 1.15×.
11. **Footer** — Navy-deep band. Column 1: dial logomark + [BRAND] in Barlow Condensed 700 white; 13px #9FB0C6 lines '42 Kiln Yard Road, Unit 2, [CITY]', 'License #HV-20417 · insured', 'Mon–Sat 7a–6p · emergency line always on'. Column 2 'Services': anchors Services, Sizing helper, Plans, Technicians. Column 3 'Talk to us': [PHONE] in cyan (tel:), ember pill 'Book now'. Bottom hairline row: '[BRAND] · Sample site for a template — all prices, rebates and reviews invented' in 12px #6B7C93 plus the optional [CREDIT] link. Mobile sticky bar (under 768px): fixed bottom navy 96% + blur, ember pill 'Call [PHONE]' (tel:) and cyan-outline pill 'Book now' (anchor), safe-area padding.
   Layout: Footer grid 4/4/4 desktop to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Hero condenser at dusk. Download https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/hero-hvac.webp to public/images/hero-hvac.webp. Alt: 'A clean air-conditioner condenser beside a modern home at dusk.' The hero's visual anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Utility room. Download https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/furnace-room.webp to public/images/furnace-room.webp. Alt: 'A tidy utility room with a new air handler and water heater.' Used in the trust band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Technician portrait one (founder). Download https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/tech-1.webp to public/images/tech-1.webp. Alt: 'Portrait of a fictional HVAC technician in a plain navy uniform.' Used on the [FOUNDER] technician card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Technician portrait two. Download https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/tech-2.webp to public/images/tech-2.webp. Alt: 'Portrait of a fictional senior installer in a plain work uniform.' Used on the Dev Ranganathan card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Technician portrait three. Download https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/tech-3.webp to public/images/tech-3.webp. Alt: 'Portrait of a fictional diagnostics technician in a plain work uniform.' Used on the Lu Chen card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Install detail. Download https://media.vibefather.ai/assets/a1fd975a-dcee-43b4-aa1c-2c72142544ae/install-detail.webp to public/images/install-detail.webp. Alt: 'New galvanized ductwork and a fresh vent detail.' A supporting detail shot in the services band background or rebates band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup. No other icon source.
- font: Barlow Condensed (OFL) and Barlow (OFL) self-hosted through @fontsource/barlow-condensed and @fontsource/barlow; no CDN font loading.

## Don'ts
- No real HVAC manufacturers, equipment brand names, model numbers or warranty programs; equipment is described generically (single-stage, two-stage, heat pump, mini-split).
- No real utilities, rebate programs, tax forms or government incentives by name; rebate amounts are illustrative samples and the page says so.
- No real contractors, franchises or certification-badge graphics; [BRAND], license #HV-20417, reviews and towns are invented sample data, and certifications appear as plain text only.
- Photos: no readable model numbers, brand marks or text on equipment; technician portraits are fictional people, varied in age and ethnicity, who resemble no real individual.
- All prices, capacity figures and rebates are sample data: label the sizing output as a rule-of-thumb starting point and the rebates as illustrative — never as a load calculation, quote or offer.
- No dates anywhere on the page: no year in the footer, no copyright year, no date pickers tied to the real clock; time references stay relative ('this week', 'within one business day').
- Forms are local-only samples: no submit to any server, no APIs, no analytics, no email or calendar services. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- The sizing helper must never guess silently: keep the factor table in content.ts and show the factors used on screen.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, dial tweens, count-ups and the banner pulse, all respecting prefers-reduced-motion.
- Keep the emergency banner to one line at 390px, and never let the sticky bottom bar cover the booking form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/hvac-heating-and-cooling-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
