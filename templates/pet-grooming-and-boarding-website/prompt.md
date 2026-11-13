# Pet Grooming and Boarding Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the grooming and boarding salon opened by [FOUNDER] in [CITY], running [EXPERIENCE] of happy outcomes. The page is cheerful and clean — bubblegum, sky and sunshine on white — with a grooming price picker (pet type, size, coat → price and time from one visible table), a boarding stay calculator (nights, suite, add-ons → line-item total), a day-in-the-life schedule, vaccination requirements, a locally saved pet profile and an inline booking flow. Photos show freshly groomed, anatomically correct dogs and cats in a bright salon. All prices, suites and reviews are invented sample data.

- Audience: Primary: dog and cat owners around [CITY] who call every salon asking 'how much for a medium dog, kind of matted?' — they want the number and a trustworthy place. Secondary: doggy daycares and cat-only lounges re-pointing the menus.
- Goal: Move a visitor from 'how much and will they be kind' to a booked groom or stay: answer price in one interaction, reassure with the day schedule and requirements, then let the pet profile make booking feel like a text to a friend.
- Tone: Warm groomer-chat: affectionate about animals, crisp about logistics, lightly funny about cat opinions. Never saccharine, never clinical.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/baloo-2 (OFL-1.1), @fontsource/nunito (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Baloo 2' and fontFamily.body 'Nunito'.
  - Self-host Baloo 2 weights 600 and 700 and Nunito weights 400, 600, 700, 800 through @fontsource/baloo-2 and @fontsource/nunito, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals and calculator tweens; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, the grooming price matrix (species × size × coat → price and minutes), boarding suites and nightly rates, add-ons with prices, the day-in-the-life schedule, vaccination requirements, profile fields, booking options, reviews. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Grooming price matrix, exactly: species Dog and Cat; sizes Small / Medium / Large (cat is Cat only, single size); coats Smooth / Double / Curly / Matted-plus (matted applies to dogs only). Dog — Small: $65 / $78 / $85 / $115; Medium: $78 / $92 / $99 / $135; Large: $92 / $108 / $118 / $160. Cat (all coats except Matted): Smooth $85, Double $98, Curly $110. Durations: Small 60 min, Medium 75, Large 90, Cat 75; Matted-plus adds 30 min. Every combination's price and duration derives from this one table; a footnote reads 'Sample prices — matted coats get a kindness check before we quote firm.'
  - Stay calculator, exactly: nightly rate by suite — Cozy Den $48, Run Suite $68, Villa with window $89 (per night, per pet); nights stepper 1–21 (default 3); add-ons per stay — Group playtime $12/day, One-on-one walk $15/day, Going-home bath $42 flat, Bedtime story session $8 flat; total = nights × suite rate + day add-ons × (nights, capped at 14 for day-based add-ons) + flat add-ons, shown with a line list ('3 nights × Villa — $267', 'Group playtime × 3 days — $36', 'Going-home bath — $42') and the total; footnote 'Sample rates — multi-pet and long-stay discounts quoted at booking.' Inputs persist to localStorage under [BRAND_SLUG]-stay.
  - Draw the paw logomark and small paw accents as inline flat SVG in code — used sparingly (logomark, section eyebrows, the schedule strip); no clip-art paw photos.
  - The pet profile form (pet name, species chips Dog/Cat, size chips, coat chips, quirks textarea like 'hates the dryer, loves the peanut butter spoon') saves to localStorage under [BRAND_SLUG]-pet-profile and shows as a chip on the booking form ('Booking for: Biscuit · Medium · curly ×' with an X to detach and an 'Edit profile' link).
  - Booking: service segmented control (Groom / Boarding stay / Daycare day), the price-picker or stay-calculator result attachable, preferred window chips (Morning drop-off / Midday / Late afternoon), name + phone with inline validation, success card 'Biscuit's on the book — we text a confirmation. This demo stores the booking in this browser only.' persisted under [BRAND_SLUG]-booking.
  - Use only these lucide-react icons: Phone, Dog, Cat, Scissors, Bath, Moon, Sun, Clock, CheckCircle2, Star, MapPin, ChevronRight, ArrowRight, Menu, X, Heart, ShieldCheck, Sparkles, Users, BedDouble.
  - Persist the picker state, stay inputs, pet profile and booking to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the bubblegum circle with a white paw) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Business name (default: "Biscuit & Bubbles Salon"). Invented salon name; the paw logomark is derived from it in code.
- [CITY] — City (default: "Maplewood"). Where the salon is; appears in hero, hours and footer.
- [FOUNDER] — Owner (default: "Nell Faraday"). Invented groomer-owner, named in hero and about copy.
- [PHONE] — Phone (default: "(555) 719-4420"). Salon line; links as tel: with digits only.
- [EXPERIENCE] — Years (default: "11 years"). Plain phrase like '11 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/pet-grooming-and-boarding-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Bubblegum `#FF7EB6` — Primary accent: CTAs, grooming sections, logomark
- Bubblegum tint `#FFEDF5` — Chips and highlight panels
- Sky `#5EC2FF` — Boarding sections, info accents, links
- Sky tint `#EAF6FF` — Info panels and schedule strip
- Sunshine `#FFD84D` — Highlights, tags, schedule sun, price totals
- Sunshine tint `#FFF7D9` — Note panels
- White `#FFFFFF` — Page ground and cards
- Cloud `#F7F9FB` — Alternate light band
- Ink `#2B2733` — Headings and body
- Steel `#6A6575` — Secondary text
- Hairline `#EAE6EF` — Hairline rules and card borders

### Typography
- Display: headlines, prices, totals: Baloo 2 (OFL), weights 600/700
- Body: paragraphs, controls, schedule: Nunito (OFL), weights 400/600/700/800

### Layout & motion
- Spacing: Sections separated by 88px desktop / 60px mobile; section headers use a 13px letter-spaced bubblegum (or sky on boarding sections) eyebrow over a Baloo 2 700 title at clamp(28px, 3.2vw, 44px); cards 26px padding, 22px gaps.
- Radius: Maximum friendliness that stays adult: 18px cards, 12px chips and inputs, pill CTAs; photos 18px.
- Motion: Fade-rise reveals (14px, 500ms, 60ms stagger) via useInView, once.
- Motion: Price-picker and stay-calculator outputs tween 200ms; the schedule strip's sun icon moves 8° on section entry.
- Motion: Profile and booking chips pop 1.05× when attached; success checks pop 1.15×.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Bright salon photography from one shoot: freshly groomed dogs and cats (anatomically correct, fluffy and healthy) on white salon tables and in sunlit suites, a tidy bathing station with bubbles, and the salon's window front — no people's faces, no brand marks, no distressed animals, every animal looking calm and well cared for.

## Pages & Sections
### [BRAND] — Grooming & boarding in [CITY] (`index.html`)
1. **Header and hero** — Header (white at 94% with backdrop blur, 72px): paw logomark (bubblegum circle with white paw) + [BRAND] in Baloo 2 700 18px; nav anchors Grooming, Boarding, A day here, Requirements, Book; right: phone chip Phone icon + [PHONE] (tel:) and bubblegum pill 'Book a visit'. At 390px: logomark + name, phone icon button, menu button on one line; anchors in a white dropdown. Hero: cloud ground; left copy (columns 1–6): eyebrow sky 'GROOMING · BOARDING · DAYCARE — [CITY]'; H1 Baloo 2 700 ink 'Go home fluffy. Stay here happy.'; paragraph steel '[FOUNDER] and four groomers run the gentlest tables in town — [EXPERIENCE] of patient scissor work, honest prices published, and boarding suites with actual windows.'; bubblegum pill 'Price my groom' (anchor) and sky-outline pill 'Price a boarding stay' (anchor); chips: 'Cats Tuesdays & Thursdays' · 'Same-week grooms' · 'Report cards every stay'. Right (columns 7–12): the freshly-groomed-dog photo in an 18px frame 4:3 with a floating white card overlapping bottom-left: Sparkles icon, 'Today: 6 grooms, 4 boarders', 'Next opening: Thursday 10:20' in Baloo 2 700 bubblegum, 12px steel 'Sample board.'
   Layout: 12-column grid; floating card offset -18px; mobile stacks copy then photo.
   Motion: Photo settles from 1.03; copy rises 14px staggered 70ms.
2. **Grooming price picker** — White band, the first tool. Eyebrow 'GROOMING PRICES' (bubblegum); title 'The number, before the phone call.' Controls in a cloud panel (left, 6 columns): species chips (Dog / Cat); size chips (Small / Medium / Large — hidden when Cat selected); coat chips (Smooth / Double / Curly / Matted-plus — Matted-plus hidden for cats, shown with a small Heart icon and note 'kindness check first'). Result card (right, 6 columns, bubblegum-tint ground): price in Baloo 2 700 bubblegum at clamp(36px, 4vw, 52px), e.g. '$92'; duration chip 'about 75 minutes'; a what's-included list (bath, blow-out, trim to taste, nails, ears); footnote 12px steel 'Sample prices — matted coats get a kindness check before we quote firm.'; bubblegum pill 'Book this groom' (anchors the form with the selection attached). The full matrix lives in content.ts and the picker state persists.
   Layout: 6/6 columns desktop; stacked mobile; chips 44px targets.
   Motion: Price and duration tween 200ms on change; no layout shift.
3. **Boarding and stay calculator** — Sky-tint band, the signature tool. Eyebrow 'BOARDING' (sky); title 'Suites with windows. Math with line items.' Left (5 columns): three suite cards — 'Cozy Den' $48/night 'a snug private den with raised bedding'; 'Run Suite' $68/night 'private run + indoor-outdoor access' tagged 'MOST POPULAR'; 'Villa with window' $89/night 'sunbeam included, squirrel TV optional'. Right (7 columns) the calculator (white panel): nights stepper 1–21 default 3; add-on toggles — 'Group playtime +$12/day' (Users), 'One-on-one walk +$15/day' (Heart), 'Going-home bath +$42' (Bath), 'Bedtime story +$8' (Moon); total in Baloo 2 700 sunshine-on-ink chip 'Total stay: $345'; line list 13px steel with ink values ('3 nights × Villa — $267', 'Group playtime × 3 days — $36', 'Going-home bath — $42'); footnote 'Sample rates — multi-pet and long-stay discounts quoted at booking.'; sky pill 'Book this stay'. Inputs persist.
   Layout: 5/7 columns desktop; stacked mobile; suite cards stacked left.
   Motion: Total tweens 200ms; add-on rows slide 8px on toggle.
4. **A day here** — White band. Eyebrow 'A DAY AT THE SALON' (sky); title 'The schedule your dog would write.' The schedule strip: a horizontal sun-arc (code-drawn SVG with a sun icon moving along it on entry) over six time cards — '7:00 — Wake-up and yard rotation'; '8:30 — Grooming tables start, one dog at a time per groomer'; '12:00 — Nap hour: lights low, classical on, cats unimpressed'; '2:00 — Group playtime for the boarding crew'; '4:30 — Second yard rotation + report cards written'; '6:00 — Dinner and wind-down; late pickup by arrangement'. Under the strip, the day-in-life photo (cats lounging) as a wide 18px banner with caption 13px steel 'Boarding guests get the same tables the groomers use — everyone knows everyone.'
   Layout: Six cards in a scroll-snap row on mobile, 3×2 grid on desktop; banner 21:9 below.
   Motion: The sun icon travels the arc once over 1s on entry; cards stagger 60ms.
5. **Vaccination requirements** — Cloud band. Eyebrow 'REQUIREMENTS' (sky); title 'Papers, please (the friendly kind).' Two cards side by side: 'Dogs' — checklist: 'Rabies — current', 'DHPP — current', 'Bordetella — within 12 months', 'A quick meet-and-greet for new boarding dogs'; 'Cats' — checklist: 'Rabies — current', 'FVRCP — current', 'Front-load carrier (theirs, not ours)'. A sunshine-tint note under both: 'Snap a photo of the vaccine record at booking — we keep it on file so you never hunt for the folder again. Sample requirements; your vet's schedule wins.'
   Layout: Two cards 6/6 (stacked mobile); checklist items with sky CheckCircle2.
   Motion: Checks pop staggered 50ms on entry.
6. **Pet profile** — White band. Eyebrow 'TELL US ABOUT THEM' (bubblegum); title 'Save a profile, book in one tap.' Form (cloud panel, max-width 680px): pet name (required), species chips, size chips, coat chips, 'Quirks we should know' textarea placeholder 'e.g. hates the dryer, loves the peanut butter spoon, must say hi to the front-desk cat'; bubblegum pill 'Save profile'. Saved state: a profile chip card (paw icon, 'Biscuit · Dog · Medium · curly', Edit and Forget buttons) and a line 'Lives in this browser only — we never see it until you book.' The booking form shows this profile as an attachable chip.
   Layout: Chips wrap; success swaps the form to the chip card with a 12px rise.
   Motion: Save pops the paw 1.1×; chip card rises 12px.
7. **Booking** — Bubblegum-tint band. Eyebrow 'BOOK' (bubblegum); title 'Pick a service, attach a pet, done.' Form (white panel, max-width 720px): service segmented control (Groom / Boarding stay / Daycare day); if a picker result or pet profile exists, attachable chips at top ('Groom: Medium · curly — $92 ×', 'Booking for: Biscuit ×'); preferred window chips (Morning drop-off / Midday / Late afternoon); Name (required), Phone (required), notes optional. Bubblegum pill submit 'Send it'. Validation inline (2px bubblegum borders, 13px notes), no native popups. Success: CheckCircle2 bubblegum, 'Biscuit's on the book.' Baloo 2 700, 'We text a confirmation within office hours — and yes, the report card comes with photos. This demo stores the booking in this browser only.' and an outline pill 'Book another'. Persists to localStorage.
   Layout: Two-column field rows desktop, 1-column mobile with 96px bottom padding clear of the sticky bar.
   Motion: Success crossfades with a 12px rise; check pops 1.15×.
8. **Reviews and footer** — White band. Eyebrow 'FROM THE HUMANS'; title 'Fluffy results, quoted.' Three cards (cloud ground, bubblegum quote mark): five bubblegum stars; 16px ink quote; 13px steel footer. 'The price picker said $78 for our medium double-coat mutt. The invoice said $78. Revolutionary.' — Dana & Biscuit. 'Our cat tolerates exactly one place outside home. It's this one. The window villa was built for her.' — Priya & Miso. 'Boarding report card said 'excelled at nap hour.' We booked the next stay before leaving.' — Theo & Waffles. Disclaimer 12px steel: 'Sample reviews for this demo.' Footer (ink ground): column 1 — paw logomark + [BRAND] Baloo 2 700 white, '212 Alder Court, [CITY]', 'Mon–Sat 8a–6p · cats Tue & Thu', [PHONE] (tel:); column 2 'Salon': anchors Grooming, Boarding, Requirements; column 3 'Small print': 'Sample site — prices, suites and reviews invented', optional [CREDIT] link in bubblegum. Mobile sticky bar (under 768px): fixed bottom white 96% + blur; bubblegum pill 'Call' (tel:) and sky-outline pill 'Book' (anchor), safe-area padding.
   Layout: Three cards in a row (1-column under 900px); footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: Cards rise 14px staggered 80ms.

## Assets
- image: Freshly groomed dog. Download https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/hero-dog.webp to public/images/hero-dog.webp. Alt: 'A freshly groomed, fluffy dog on a white salon table.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Groomed cat. Download https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/cat-groomed.webp to public/images/cat-groomed.webp. Alt: 'A calm, freshly groomed cat in a bright salon.' The day-here banner. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Bathing station. Download https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/bath-station.webp to public/images/bath-station.webp. Alt: 'A tidy pet bathing station with bubbles and warm light.' Supporting image near the grooming picker. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Boarding suite. Download https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/suite.webp to public/images/suite.webp. Alt: 'A clean boarding suite with raised bedding and a window.' Supporting image in the boarding band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Yard play. Download https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/yard-play.webp to public/images/yard-play.webp. Alt: 'A sunny fenced play yard with agility toys.' Supporting image near the day schedule. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Salon front. Download https://media.vibefather.ai/assets/27b91602-a514-49ad-82d9-3163145d7521/salon-front.webp to public/images/salon-front.webp. Alt: 'The bright salon storefront with a paw-marked window.' Supporting image near the footer. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup, plus the code-drawn paw logomark. No other icon source.
- font: Baloo 2 (OFL) and Nunito (OFL) self-hosted through @fontsource/baloo-2 and @fontsource/nunito; no CDN font loading.

## Don'ts
- Every animal in every photo must look anatomically correct, healthy, calm and well cared for — no deformed paws, wrong eyes, impossible poses, or distressed animals; people never appear in close-up.
- No real grooming or boarding brands, franchises, product brands (shampoo, treats) or their logos; everything is generic and invented.
- No veterinary or medical claims: vaccination copy is a plain requirements list, never advice; no health-outcome promises beyond descriptive language ('gentle', 'patient').
- Kennel-club breed names never appear as pricing tiers; sizes stay Small/Medium/Large with generic coat descriptors.
- All prices and stay totals are sample data labeled as such; discounts are 'quoted at booking', never promised.
- No dates tied to the real clock: booking uses relative windows, the schedule strip uses fixed times-of-day, no calendar dates, no copyright year.
- Forms and the pet profile are local-only samples: no submit to any server, no APIs, no analytics — the profile explicitly 'lives in this browser only'. Persist to localStorage and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- One price source: picker, calculator and copy all derive from the content.ts tables; never hard-code a second copy of a number.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, tweens, pops, staggered cards and the sun-arc, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the booking form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/pet-grooming-and-boarding-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
