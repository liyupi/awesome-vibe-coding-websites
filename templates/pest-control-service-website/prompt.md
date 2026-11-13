# Pest Control Service Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the pest control company founded by entomologist [FOUNDER] in [CITY], [EXPERIENCE] in the field. The page is calm and reassuring — green and ink with amber warnings, pest icons drawn in code, no gross photography — and leads with an identifier quiz (what you saw, where, when → likely pest, confidence note, recommended plan). Plans compare honestly, a safety section answers the pet-and-kid question specifically, a seasonal calendar shows what's active by month, a concrete guarantee backs it, and a free inspection booking closes the page with the quiz result attachable. All prices, pests-as-sample and reviews are invented.

- Audience: Primary: homeowners around [CITY] who just saw something and want to know what it is and whether it's dangerous — often at night, often with kids or pets in the house. Secondary: lawn-care and wildlife services adapting the quiz and plans.
- Goal: Move a visitor from 'what IS this' to a booked free inspection: identify the pest honestly in three taps, answer the safety objection before it's asked, then let the quiz result ride along into the booking form.
- Tone: Calm, knowledgeable, slightly warm-funny — an entomologist neighbor who likes bugs and hates infestations. Explains what things are before selling what to do.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/nunito-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display and fontFamily.body both 'Nunito Sans'.
  - Self-host Nunito Sans weights 400, 600, 700, 800 through @fontsource/nunito-sans, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, AnimatePresence, useInView, useReducedMotion) for quiz steps and reveals; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, services, quiz questions and the full outcome table, plans and inclusions, safety cards, calendar months, guarantee, reviews, form options. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Draw seven pest marks as inline flat-SVG icons in code — ant, bed bug, termite (winged), mouse, flea, wasp, spider — each a friendly two- or three-color silhouette in a green-tint circle, 40px, recognizable but never gross; no photographic pests anywhere on the page.
  - Quiz logic, exactly: three questions, each answer carrying a weight map to the seven outcomes — Q1 'What did you see?' (six cards with the drawn icons: 'A marching line of ants' / 'Tiny dark specks on sheets or mattress seams' / 'Winged swarmers by the window' / 'Droppings or scratching at night' / 'Jumping specks on the pet' / 'Paper nests under the eaves'); Q2 'Where?' (Kitchen or bath / Bedroom / Basement or crawl / Yard and foundation); Q3 'When?' (Daytime / After dark / Dawn and dusk / After rain). The outcome table in content.ts sums weights per pest; the top scorer wins with its confidence line ('very likely' at 3+ weight over second, 'most likely' otherwise), a two-sentence plain-language description, and a recommended plan tier (One-time / Quarterly / Home Shield). Store the last result to localStorage under [BRAND_SLUG]-quiz; show it as an amber chip on the booking form ('Identifier: Ant colony — most likely') with an X to detach.
  - Plans and inclusions, exactly: One-time treatment $189 — single visit, targeted treatment, 45-day re-treat window; Quarterly Guard $39/mo (billed annually $468) — four scheduled visits, unlimited free re-treats between visits, exterior web-and-nest sweep; Home Shield $59/mo — everything in Quarterly plus termite monitors at four corners and an annual exclusion inspection (door sweeps, weep holes, pipe penetrations).
  - The seasonal calendar is a 12-cell grid (month name, the active pest with its drawn icon, one prevention tip), with amber top rules for peak months (May–August wasps, March–June ants, Sept–Nov rodents seeking warmth); no years, no dates tied to the clock.
  - Use only these lucide-react icons: Phone, ShieldCheck, Baby, Dog, Clock, CalendarCheck, CheckCircle2, Star, MapPin, ChevronRight, ArrowRight, Menu, X, Search, Home, Droplets, ClipboardCheck, Sparkles.
  - Persist the quiz result and the inspection request to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the five generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the green circle with a white shield-and-bug mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Company name (default: "Kindguard Pest Solutions"). Invented company name; a shield-and-bug logomark is derived from it in code.
- [CITY] — City (default: "Briarfield"). Service home base; appears in hero, calendar copy and footer.
- [FOUNDER] — Founder (default: "Nadia Okonkwo"). Invented entomologist founder, named in hero and safety copy.
- [PHONE] — Phone (default: "(555) 471-3320"). Office line; links as tel: with digits only.
- [EXPERIENCE] — Experience (default: "12 years"). Plain phrase like '12 years'; used in hero and guarantee copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/pest-control-service-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Fresh green `#1BA35A` — Brand: header accents, CTAs, icons, links
- Green deep `#0F7A42` — Dark band ground, icon circles
- Deep ink `#11242B` — Hero ground, headings, footer ground
- Ink deeper `#0C1B21` — Footer deepest panels
- Amber `#FFB020` — Warnings, peak-season rules, quiz result chip
- Amber tint `#FFF3D9` — Warning panels and result chips
- Green tint `#E7F6EE` — Info panels and icon circles
- Cloud `#F6F8F9` — Light section ground
- White `#FFFFFF` — Cards and panels
- Steel `#56656D` — Secondary text; #A3B4BC on dark
- Hairline `#E0E5E8` — Hairline rules and card borders

### Typography
- Display and body: everything: Nunito Sans (OFL), weights 400/600/700/800

### Layout & motion
- Spacing: Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced green eyebrow over an 800-weight title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Friendly and calm: 14px cards, 10px chips and inputs, pill CTAs; photos 14px.
- Motion: Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Motion: Quiz steps slide horizontally 240ms via AnimatePresence; answer cards pop 1.04× on select; the verdict card expands with a 250ms height ease.
- Motion: Calendar cells stagger 40ms; stats count up 800ms.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Clean morning-light home photography from one shoot: a tidy suburban home exterior with a green lawn, a bright kitchen corner, a tidy bedroom, a neatly organized technician's kit laid out (gloves, sprayer, tamper stations — no logos), and a foundation perimeter with fresh mulch. No people, no pests, no gross imagery, no readable text.

## Pages & Sections
### [BRAND] — Pest control in [CITY] (`index.html`)
1. **Header and hero** — Header (white at 94% with backdrop blur, 72px): shield-and-bug logomark (green circle, white shield with a small bug glyph) + [BRAND] in Nunito Sans 800 18px ink; nav anchors Identifier, Plans, Safety, The year; right: phone chip Phone icon + [PHONE] (tel:) and green pill 'Free inspection'. At 390px: logomark + name, phone icon button, menu button on one line; anchors in a white dropdown. Hero: full-bleed tidy-home photo (morning light, green lawn, 80vh desktop / 560px mobile) under a bottom-left gradient scrim from ink #11242B 94% fading to transparent at 55%; content bottom-left: eyebrow in green 'PEST CONTROL — [CITY] & 25 MILES AROUND'; H1 800 white 'Know what it is. Then decide.'; paragraph '#C9D6DB' 'Entomologist [FOUNDER] runs [BRAND] — [EXPERIENCE] of identifying first and treating second. Most of what people find at midnight isn't an emergency; the quiz below tells you which kind yours is.'; green pill 'Take the 60-second quiz' (anchor) and white-outline pill 'See plans & prices' (anchor); chips in white 12px on translucent ink: 'Licensed · #PC-71288' · 'Pet- & kid-conscious products' · 'Re-treat free between visits'.
   Layout: Copy columns 1–7; chips wrap two rows max at 390px; scrim guarantees AA contrast.
   Motion: Photo scales 1.04→1 over 800ms; copy rises 14px staggered 70ms.
2. **Pest identifier quiz** — White band, the signature section. Eyebrow 'IDENTIFIER QUIZ' (green); title 'Three questions. No guessing.' The quiz card (white, 14px radius, max-width 860px): step dots 1–2–3 with labels (What · Where · When). Step 1 — six answer cards in a 3×2 grid, each with a drawn pest icon and label ('A marching line of ants', 'Tiny dark specks on sheets or mattress seams', 'Winged swarmers by the window', 'Droppings or scratching at night', 'Jumping specks on the pet', 'Paper nests under the eaves'). Step 2 — four area chips with Home-style icons (Kitchen or bath / Bedroom / Basement or crawl / Yard and foundation). Step 3 — four timing chips (Daytime / After dark / Dawn and dusk / After rain). Back and Continue buttons; answers selectable in any order. Verdict card (green-tint ground) after step 3: the pest's drawn icon large, name in 800 weight ('Ant colony'), confidence chip in amber ('most likely' / 'very likely'), a two-sentence plain description ('Odorous house ants trail along moisture lines. They're a nuisance pest, not a health emergency — and treatable in one visit.'), 'Recommended: One-time treatment · $189 sample' with a green pill 'Book the free inspection' that scrolls to the form with the result attached, and a steel link 'Not it? Retake the quiz'. Result persists and shows on the booking form as an amber chip with an X to detach.
   Layout: Steps slide horizontally 240ms; answer cards 3×2 grid (2-column under 700px, 1-column under 480px); verdict expands 250ms.
   Motion: Selected cards pop 1.04× with a green outline; step slide 240ms; verdict rises 12px.
3. **Services** — Cloud band. Eyebrow 'WHAT WE TREAT' (green); title 'The usual suspects, handled calmly.' Five cards with drawn icons: 'Ants & roaches' — 'Gel baits in wall voids plus a perimeter band — kitchens stay usable the same day.'; 'Wasps & hornets' — 'Nest removal at dawn when the colony is home, then a preventive eave treatment.'; 'Rodents' — 'Exclusion first (we find the gap), snap or station second, never bait in the house with kids or pets.'; 'Termites' — 'Monitors at four corners and treatment only when evidence says so.'; 'Fleas & ticks' — 'Two-step pet-home program timed to the life cycle, coordinated with your vet's treatment.' Each footer: green link 'Ask about this →' anchoring the form.
   Layout: Five cards: 3+2 wrapped rows (2-column under 900px, 1-column under 640px).
   Motion: Cards rise 14px staggered 70ms.
4. **Plans comparison** — White band. Eyebrow 'PLANS' (green); title 'Three ways in, no contracts.' Three plan cards (cloud ground, hairline; middle card green with white text and an amber 'MOST CHOSEN' chip): 'One-time treatment' — '$189' — 'Targeted visit for one identified pest. 45-day re-treat window included.'; 'Quarterly Guard' — '$39 / mo' — 'Four scheduled visits, unlimited free re-treats between them, exterior web-and-nest sweep every trip.'; 'Home Shield' — '$59 / mo' — 'Quarterly everything plus termite monitors at four corners and an annual exclusion inspection.' Inclusion matrix under the cards (rows: Visits per year 1 / 4 / 4, Free re-treats 45-day window / unlimited / unlimited, Exterior sweep — / check / check, Termite monitors — / — / check, Exclusion inspection — / — / check; checks as green CheckCircle2). Note 13px steel: 'Sample prices for this demo. Annual billing shown monthly; cancel any time — plans are agreements, not contracts.'
   Layout: Three cards in a row (1-column under 900px); matrix scrolls horizontally under 700px.
   Motion: Middle card lifts 12px; checks pop staggered 50ms on entry.
5. **Pet and kid safety** — Green-deep band. Eyebrow 'SAFETY FIRST, ACTUALLY' (amber); title 'What we use, and when it's dry.' Four cards on translucent white panels: 'Dry in 30–45 minutes' — Clock icon — 'Sprays go to cracks and voids, not surfaces people touch. Once dry, treated areas are back in service.'; 'Tamper-resistant stations' — ShieldCheck icon — 'Any bait lives inside locked stations anchored out of reach — pets and toddlers can't get into them, pests can.'; 'Product classes, in plain words' — ClipboardCheck icon — 'We use pyrethroid-family sprays and borate or ant-coagulant baits — the class matters more than the brand, and we'll name what we used.'; 'Prep that actually matters' — Baby icon — 'Fish tanks covered and pumps off, pet food up, crib mattresses washed — a two-line checklist texted before every visit.' A line under the grid in #CFE8DA: 'Every visit ends with the product label sheet on your counter. Keep it. [FOUNDER] answers questions about it on the phone, too.'
   Layout: Four cards 2×2 (1-column under 800px); icons in amber-tint circles.
   Motion: Cards rise 14px staggered 80ms.
6. **Seasonal calendar** — White band. Eyebrow 'THE PEST YEAR' (green); title 'What's active, month by month.' Twelve cells (4×3 desktop, horizontal scroll-snap mobile), each with month name 700 weight, the drawn pest icon small, and one prevention tip; peak months get an amber top rule: January 'Rodents — check the garage door seal'; February 'Rodents — inspect weep holes'; March 'Ants — trim branches off the siding'; April 'Ants — fix the dripping spigot'; May 'Wasps — knock down golf-ball nests early' (amber); June 'Wasps, mosquitoes — dump standing water' (amber); July 'Wasps, mosquitoes — eave check at dusk' (amber); August 'Wasps — keep trash lids tight' (amber); September 'Rodents return — door sweeps on order' (amber); October 'Rodents — seal the dryer vent gap'; November 'Spiders — sweep webs before eggs hatch'; December 'Rodents — a quiet attic is a warm attic'. Footer line 13px steel: 'Temperate-zone defaults for [CITY] — your inspection gets a version tuned to your property.'
   Layout: Cells white on cloud with 14px radius; 240px cells on mobile scroll-snap.
   Motion: Cells stagger 40ms; amber rules draw 300ms after entry.
7. **Guarantee and stats** — Ink band. Eyebrow 'THE GUARANTEE' (green); title 'Activity between visits? We come back free.' Copy '#C9D6DB' 16px: 'If you see live activity between scheduled visits on any plan, we re-treat within 48 hours at no charge — no deducting visits, no fine print about 'new' activity. It's the whole point of a plan.' Four count-up stats in green 800: '1,900' 'homes under care' · '48 hr' 're-treat promise' · '92%' 'one-visit ant clearances' · '4.9' 'from 241 reviews'.
   Layout: Stats 2×2 grid (4-across desktop); centered copy above.
   Motion: Numbers count up 800ms on entry.
8. **Reviews** — Cloud band. Eyebrow 'NEIGHBORS'; title 'Calm is the review theme.' Three cards (white, green quote mark): five green stars; 16px ink quote; 13px steel footer. 'The quiz said ants, the inspection said ants, one visit later — no ants. The label sheet on the counter was a nice touch.' — Dana P., kitchen trail. 'They found the gap behind the dryer vent before setting a single trap. Three weeks, zero activity, no bait anywhere my toddler reaches.' — The Okafors, rodents. 'I called in a panic about bed bugs at 11 p.m. The owner texted back: probably carpet beetles, here's a photo comparison, sleep fine. It was carpet beetles.' — Marisol V., not bed bugs. Disclaimer 12px steel: 'Sample reviews for this template demo.'
   Layout: Three cards in a row (1-column under 900px); middle lifts 12px.
   Motion: Cards rise 14px staggered 80ms.
9. **Free inspection booking** — White band. Eyebrow 'FREE INSPECTION' (green); title 'We look first. You decide after.' Form in a cloud panel (max-width 720px): if a quiz result exists, an amber chip at the top 'Identifier: Ant colony — most likely ×' (X detaches); Name (required), Phone (required), Street address (required); pest concern select (Ants & roaches / Wasps & hornets / Rodents / Termites / Fleas & ticks / Something else — the quiz result preselects); 'What did you see?' textarea optional; preferred window chips (Morning / Afternoon / Either). Green pill submit 'Book my inspection'. Validation inline (2px green borders, 13px notes), no native popups. Success replaces the form: CheckCircle2 green, 'Got it, [name].' 800 weight, 'The office calls within one business day — the inspection takes 30 minutes and ends with a written quote you can think about. This demo stores your request in this browser only.' and an outline pill 'Book another'. Persists to localStorage.
   Layout: Two-column field rows desktop, 1-column mobile with 96px bottom padding clear of the sticky bar.
   Motion: Success crossfades with a 12px rise; check pops 1.15×.
10. **Footer** — Ink-deeper band. Column 1: shield-and-bug logomark + [BRAND] 800 white; 13px #A3B4BC lines '77 Juniper Lane, Suite 2, [CITY]', 'Licensed applicator #PC-71288 · insured', 'Mon–Fri 8a–6p · Sat 9a–1p'. Column 2 'Company': anchors Identifier, Plans, Safety, The year. Column 3 'Talk to us': [PHONE] in green (tel:), green pill 'Free inspection', and 'Text photos of the bug — really.' in 12px steel. Bottom hairline row: 'Sample site for a template — prices, pests-as-listed and reviews invented' plus the optional [CREDIT] link in green. Mobile sticky bar (under 768px): fixed bottom ink 96% + blur; green pill 'Call' (tel:) and white-outline pill 'Free inspection' (anchor), safe-area padding.
   Layout: Footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Tidy home exterior. Download https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/hero-home.webp to public/images/hero-home.webp. Alt: 'A tidy suburban home with a green lawn in morning light.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Kitchen corner. Download https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/kitchen-clean.webp to public/images/kitchen-clean.webp. Alt: 'A bright, tidy kitchen corner with sealed counters.' Used beside the services or plans band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Bedroom. Download https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/bedroom-tidy.webp to public/images/bedroom-tidy.webp. Alt: 'A calm, tidy bedroom with fresh white bedding.' Supporting image near the quiz or safety band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Technician kit. Download https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/tech-kit.webp to public/images/tech-kit.webp. Alt: 'A neatly organized pest-control kit: gloves, sprayer and locked bait stations.' Used in the safety band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Foundation perimeter. Download https://media.vibefather.ai/assets/a61f5c2d-0352-4e0b-9f66-a9072dbe9ba9/foundation.webp to public/images/foundation.webp. Alt: 'A home foundation edge with fresh mulch and trimmed plants.' Used near the seasonal calendar. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package for UI icons, plus the seven original flat-SVG pest marks drawn in code (ant, bed bug, termite, mouse, flea, wasp, spider). No photographic or third-party pest art.
- font: Nunito Sans (OFL) self-hosted through @fontsource/nunito-sans; no CDN font loading.

## Don'ts
- No gross or graphic imagery anywhere: no infestation close-ups, dead pests, droppings photos or bites — pests appear only as friendly code-drawn flat icons.
- No absolute safety claims: never 'non-toxic', '100% safe' or 'chemical-free' — safety copy stays specific (drying times, tamper stations, product classes) and never gives medical or veterinary advice.
- No real pest-control brands, franchises, product names or pesticide trademarks; treatments are described by type and class, and the demo company, license #PC-71288 and reviews are invented.
- No real certification or association seals; credentials are plain text only.
- The quiz never claims AI or certainty: outcomes read 'most likely'/'very likely', the table is visible in content.ts, and the verdict always offers the free inspection rather than a self-diagnosis verdict.
- All prices are sample data labeled as such; plans are 'agreements, not contracts' and the page says so.
- No dates tied to the real clock: calendar shows month names only, no copyright year, no today's-date logic.
- Forms are local-only samples: no submit to any server, no APIs, no analytics. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource package only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the five generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- Quiz steps must be reversible and never trap the visitor; the verdict always offers 'Retake the quiz'.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, step slides, pops and count-ups, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the booking form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/pest-control-service-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
