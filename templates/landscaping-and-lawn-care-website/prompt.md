# Landscaping and Lawn Care Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the landscaping and lawn care company founded by [FOUNDER], based in [CITY] with [EXPERIENCE] of design and maintenance behind it. The page sells with garden photography — designed beds, stone paths, dusk lighting — and wins the lead with a lawn plan builder that prices a monthly care program from lot size, frequency and add-ons, every line visible. A filterable gallery, a five-step design timeline, a month-by-month seasonal calendar, a clean-cut guarantee and a site-visit request complete the page. All prices, projects and clients are invented sample data.

- Audience: Primary: homeowners around [CITY] who want a better yard without running it themselves — deciding between one-time design work and an ongoing program. Secondary: garden designers, pool and property-care companies adapting the plan builder's table.
- Goal: Move a visitor from 'our yard could look like that' to a requested site visit: inspire with photography in one screen, answer the money question with the plan builder, prove reliability with the calendar and guarantee, then convert with the short visit form.
- Tone: Warm, knowledgeable and unhurried — a horticulturalist who loves explaining why the yard does what it does. Specific plants, specific months, no corporate filler.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/fraunces (OFL-1.1), @fontsource/work-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Fraunces' and fontFamily.body 'Work Sans'.
  - Self-host Fraunces weights 600 and 700 (plus 600 italic if used for accents) and Work Sans weights 400, 500, 600, 700 through @fontsource/fraunces and @fontsource/work-sans, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for reveals, the timeline draw and the builder's number tween; gate every animation on useReducedMotion().
  - Keep all copy, prices and data in src/content.ts: brand strings, hero copy, service cards, plan-builder config (lot tiers with base visit price, visits-per-month per frequency, add-on monthly prices, season notes), gallery items with category and location, process steps, the twelve-month calendar entries, stats, reviews, form options. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Plan builder math, exactly: base visit price by lot size tier — under 6,000 sq ft $58, 6,000–12,000 $74, over 12,000 $92; visits per month — weekly 4.3, every other week 2.2, monthly 1.0; monthly base = visit price × visits per month, rounded to the nearest $5; add-ons add fixed monthly amounts — bed weeding $46, aeration $8 (yearly pass amortized), fall leaf removal $28, holiday lighting $40 (season amortized); result shows the monthly total, each line, a season note ('weekly programs run March through November; billing is even across the year') and a 'quoted yearly, billed monthly' disclaimer. Persist all inputs to localStorage under [BRAND_SLUG]-plan.
  - Build the process timeline as an SVG vine line that draws left to right (stroke-dashoffset over 900ms on entry) connecting five numbered step markers; steps animate in 80ms apart.
  - Build the gallery as a data-driven grid with category chips (All, Design & build, Lawn programs, Hardscape & paths, Lighting, Irrigation); 'All' is the default so the grid is never empty; filtering crossfades 200ms.
  - Build the seasonal calendar as a 12-cell grid (4×3 desktop, horizontal scroll-snap on mobile) — month name, one crew task, one garden note, each cell with a season-tinted top rule: spring lime, summer green, autumn terracotta, winter slate. No years, no dates tied to the visitor's clock.
  - Persist the site-visit request to localStorage under [BRAND_SLUG]-visit-request; validate restored JSON and recover silently from malformed data.
  - Use only these lucide-react icons: Phone, Leaf, Sprout, Sun, Snowflake, Droplets, Scissors, Shovel, Lightbulb, CalendarCheck, CheckCircle2, Star, MapPin, ChevronRight, ArrowRight, Menu, X, Ruler, Sparkles.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the fern-green circle holding a lime Leaf glyph) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Brand (default: "Fernhollow Landscaping"). Invented company name; a leaf logomark is derived from it in code.
- [CITY] — City (default: "Willow Bend"). Home base; appears in the hero eyebrow, gallery locations and footer.
- [FOUNDER] — Founder (default: "Cole Barrett"). Invented horticulturalist founder, named in hero and about copy.
- [PHONE] — Phone (default: "(555) 703-2214"). Office line in the header and mobile call bar; links as tel: with digits only.
- [EXPERIENCE] — Experience (default: "14 years"). Plain phrase like '14 years'; used in hero copy and the stats band.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/landscaping-and-lawn-care-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Deep fern `#1E4D2B` — Hero scrim and ground, dark bands, headings on light
- Fern deeper `#163822` — Footer ground
- Fresh lime `#B7E36B` — Primary CTA fills, active chips, timeline markers — never small text on light
- Lime tint `#EDF6DA` — Spring chips and highlight panels
- Warm terracotta `#C8643B` — Accents, autumn calendar rules, secondary CTAs and eyebrow text
- Terracotta tint `#F8E7DE` — Autumn chips and note panels
- Soft stone `#F2F0EA` — Light section ground
- White `#FFFFFF` — Cards and panels
- Ink `#1E2B22` — Headings and body on light
- Steel `#5C6B5F` — Secondary text on light; #B9C9BB on dark
- Hairline `#DEDCD2` — Hairline rules and card borders

### Typography
- Display: headlines, section titles, prices: Fraunces (OFL), weights 600/700
- Body: paragraphs, controls, calendar cells: Work Sans (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Sections separated by 96px desktop / 64px mobile; section headers use a 14px letter-spaced terracotta eyebrow over a Fraunces 700 title at clamp(30px, 3.4vw, 46px); cards 28px padding, 24px grid gaps.
- Radius: Garden warmth: 12px on cards and photos, 8px on chips, pill buttons — the softest radius in the library is wrong here; keep it consistent and organic, never brutally square.
- Motion: Fade-rise reveals (16px, 500ms, 60–90ms stagger) via useInView, once.
- Motion: The process timeline's SVG vine draws left to right over 900ms with steps 80ms apart; the builder's monthly price tweens over 200ms on change.
- Motion: Gallery photos scale 1.03 inside their frames on hover (400ms); filter changes crossfade 200ms.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Late-afternoon garden photography from one shoot: designed planting beds, stone paths, striped lawns and dusk lighting scenes, warm natural light, lush greens with terracotta accents — no crews, no faces, no equipment brand marks, no readable text anywhere.

## Pages & Sections
### [BRAND] — Landscaping in [CITY] (`index.html`)
1. **Header and hero** — Header (white at 92% with backdrop blur, 72px): leaf logomark — fern-green circle holding a lime Leaf glyph — beside [BRAND] in Fraunces 700; nav anchors Services, Plan builder, Gallery, The year; right side phone line with Phone icon + [PHONE] (tel:) and a fern-green pill 'Book a site visit'. At 390px: logomark + brand, phone icon button, menu button, one line (44px targets); anchors in a white dropdown. Hero: full-bleed hero-garden photo (designed garden with stone path, golden hour, 86vh desktop / 600px mobile, object-cover) under a bottom-heavy gradient scrim from #163822 at 92% to transparent at 55% height; content bottom-left: eyebrow in lime 'GARDEN DESIGN & CARE — [CITY]'; H1 in Fraunces 700 white 'A yard that earns its keep.'; paragraph '#DCE8DC' 'Design, build, and a crew that shows up: [FOUNDER]'s team has kept [CITY] yards trim for [EXPERIENCE] — with a plan for every month of the year.'; primary lime pill 'Get a free site visit' (anchor to form) and white-outline pill 'Price my lawn plan' (anchor to builder); proof chips in white 12px uppercase on translucent fern: 'Licensed & insured · #LC-55230' · 'Clean-cut guarantee' · '4.9 from 214 neighbors'.
   Layout: Copy in columns 1–7 of a 1200px grid; chips wrap to two rows max at 390px; scrim guarantees AA contrast for all hero text.
   Motion: Photo scales from 1.05 over 900ms; copy rises 16px in an 80ms stagger.
2. **Services** — Soft-stone band. Eyebrow 'WHAT WE DO' (terracotta); title 'Five ways we keep a yard right.' Five cards (white, 12px radius, hairline border): 'Garden design' — Sprout icon — 'Planting plans tuned to your light and soil, drawn to scale and installed by the same crew that maintains them.' — 'from $1,800'; 'Build & hardscape' — Shovel icon — 'Stone paths, patios and edging that make the planting read. Permeable, properly based, guaranteed against frost heave for 5 years.' — 'from $3,400'; 'Weekly lawn care' — Scissors icon — 'Mow, trim, blow and a sharp-eye check of the beds on every visit. Programs run March through November.' — 'from $58 / visit'; 'Seasonal cleanup' — Leaf icon — 'Spring wake-up and fall leaf programs, with a dormant-prune pass that keeps shrubs honest.' — 'from $240 / season'; 'Irrigation & lighting' — Droplets icon — 'Smart-line irrigation and dusk lighting, zoned, timed and winterized every fall.' — 'from $1,150'. Card footers: terracotta ChevronRight 'Book this' anchoring the form.
   Layout: Five cards in one row (3+2 wrapped two rows at 1200px, 2-column under 900px, 1-column under 640px); price in a lime-tint chip top-right.
   Motion: Cards rise 16px staggered 70ms.
3. **Lawn plan builder** — Fern band, the signature section. Eyebrow 'THE PLAN BUILDER' (lime); title 'Know your monthly number.'; sub-lead '#B9C9BB' 'Three choices, one honest price — quoted yearly, billed monthly. The visit confirms it.' Controls in a white 12px-radius panel (left, 7 columns): 1) 'Lot size' — slider 2,000–20,000 sq ft, default 8,500, live Fraunces value '8,500 sq ft'; 2) 'How often?' — three chips: 'Weekly', 'Every other week', 'Monthly' with the crew's note under each ('sharpest look' / 'most picked' / 'tidy-up'); 3) 'Add-ons' — four toggle rows with prices: 'Bed weeding +$46/mo', 'Aeration (yearly pass) +$8/mo', 'Fall leaf removal +$28/mo', 'Holiday lighting +$40/mo'. Result panel (fern-deeper, right, 5 columns): 'YOUR PLAN' eyebrow in lime; monthly total in Fraunces 700 lime at clamp(36px, 4vw, 52px), e.g. '$365 / month'; line items 13px #B9C9BB with white values: 'Weekly visits, 8,500 sq ft · $74 × 4.3', 'Bed weeding · +$46', 'Fall leaf removal · +$28'; hairline; season note 12px 'Weekly programs run March–November; even billing keeps winter visits covered.'; lime pill 'Book the free site visit'. Recomputes live and persists.
   Layout: 7/5 grid desktop; result stacks under controls on mobile; result panel non-sticky.
   Motion: Total tweens 200ms on change; add-on rows slide 8px on toggle; no layout shift.
4. **Project gallery** — White band. Eyebrow 'RECENT WORK' (terracotta); title 'Gardens we're still proud of.' Category chips: All, Design & build, Lawn programs, Hardscape & paths, Lighting, Irrigation (All active by default in fern). Six photo cards (12px radius, 4:3, hairline border): 'Kestrel Lane regrade' — Design & build — 'a soggy back corner turned into a raised pollinator bed' — Willow Bend; 'The Harper program' — Lawn programs — 'weekly cuts, stripes and all' — Fernhill; 'Milldam flagstone run' — Hardscape & paths — '120 ft of path, permeable base, no more mud season' — Milldam; 'Dusk at the Alders' — Lighting — '12 uplights, one transformer, moths politely uninvited' — Alder Junction; 'Foxglove beds, year three' — Design & build — 'the fill-in finally beat the weeds' — Foxglove; 'Orchard line irrigation' — Irrigation — 'drip zones cut their water bill by a third' — Stony Hollow. Filter hides non-matching cards with a 200ms crossfade; captions under each photo: title 16px ink, note 14px steel, town 12px steel with MapPin.
   Layout: 3-column grid (2-column under 900px, 1-column under 640px); chips scroll horizontally on mobile; grid never renders empty.
   Motion: Hover scales photos 1.03 in-frame (400ms); filter crossfades 200ms.
5. **Design process timeline** — Soft-stone band. Eyebrow 'HOW A GARDEN HAPPENS' (terracotta); title 'From soil test to Sunday afternoon.' An SVG vine line draws left to right connecting five lime numbered markers: 01 'Site visit & soil test' — 'We measure light, slope and soil before we say a word about plants — free, 45 minutes.'; 02 'Design & plant plan' — 'A to-scale drawing with a plant list you keep, tuned to the way you actually use the yard.'; 03 'Build & hardscape' — 'Paths, beds and lighting go in first; planting follows in the right season, not the convenient one.'; 04 'Grow-in season' — 'Watering schedules, a mid-season tweak visit, and the patience speech every good garden needs.'; 05 'Year-round care' — 'The same crew that built it maintains it — mow programs, seasonal passes, one number to call.'.
   Layout: Five steps in a horizontal row with the vine line behind (vertical on mobile, line drawn top to bottom); each step is 200px wide with marker, title 16px ink, note 14px steel.
   Motion: Vine draws over 900ms on entry; steps fade in 80ms apart.
6. **The seasonal calendar** — Fern band. Eyebrow 'THE YEAR, MONTH BY MONTH' (lime); title 'What the crew's doing while you're not watching.' Twelve cells (4×3 desktop, horizontal scroll-snap on mobile), each with month name in Fraunces 600, one crew task and one garden note, top rule tinted by season: January — 'Dormant pruning, tool service' / 'bare branches show the shape'; February — 'Structural cuts, bed-edge repair' / 'first bulbs nose up'; March — 'Wake-up cleanup, first cut, pre-emergent' / 'programs start'; April — 'Mow weekly, divide perennials' / 'everything leans into the sun'; May — 'Planting window, mulch refresh' / 'peak design season'; June — 'Mow, feed, first irrigation checks' / 'roses earn their keep'; July — 'Deep-water audits, hedge trims' / 'heat checks at 6 a.m.'; August — 'Renovation seeding prep' / 'lawns want September'; September — 'Aeration, overseed, leaf-plan setup' / 'best planting month of the year'; October — 'Leaf removal rounds, bulb planting' / 'the good kind of busy'; November — 'Final cleanup, irrigation winterize' / 'programs tuck in for winter'; December — 'Holiday lighting, dormant plans' / 'next year's garden starts on paper'. Footer line 13px '#B9C9BB': 'Your plan's calendar shifts with your garden — this is the default rhythm for [CITY].'
   Layout: Grid cells white at 6% on fern with 12px radius; month name 18px; tasks 13px white; notes 12px #B9C9BB; scroll-snap on mobile with 240px cells.
   Motion: Cells rise 12px staggered 40ms on entry; no per-cell animation after.
7. **Guarantee and stats** — White band. Eyebrow 'STANDING BEHIND THE CUT' (terracotta); title 'The clean-cut guarantee.' Copy 16px ink: 'If a cut isn't clean, a stripe is missed, or a gate is left unlatched — we come back within 48 hours and make it right, free. It's in writing on every program agreement.' Four stats in a row with Fraunces 700 ink numbers: '310' 'yards in weekly programs' · '96' 'gardens designed & built' · '11' 'crew members, [EXPERIENCE] average' · '4.9' 'from 214 neighbor reviews'. Right side: the dusk-lighting gallery photo (12px radius frame) floating over the band's bottom edge -40px into the calendar band.
   Layout: Stats 2×2 left, photo right 40%; mobile stacks stats then photo, no overlap.
   Motion: Numbers count up over 900ms on entry; photo rises 16px.
8. **Reviews** — Soft-stone band. Eyebrow 'NEIGHBORS'; title 'Word travels down the street.' Three cards (white, 12px radius, lime quote mark): five terracotta stars; 16px ink quote; 13px steel footer. 'The plan builder said $340 a month. The actual quote, after the site visit: $340. Nobody upsold us a thing.' — Dana P., Willow Bend, weekly program. 'They redesigned our back slope three years ago and still maintain it. The fall leaf program alone saved my marriage with the rake.' — Marcus L., Foxglove, design + program. 'Frost-heaved patio, fixed under warranty, no argument. The 5-year hardscape guarantee is real paper.' — Ines V., Milldam, hardscape.
   Layout: Three cards in a row (1-column under 900px); middle card lifts 12px on desktop.
   Motion: Cards rise 16px staggered 90ms.
9. **Site-visit request** — Fern band. Eyebrow 'START HERE' (lime); title 'Free site visit. 45 minutes. Soil test included.' Form in a white panel (max-width 720px, 32px padding): Name (required), Phone (tel, required), Street address (required), town select — '[CITY]', 'Alder Junction', 'Fernhill', 'Foxglove', 'Milldam', 'Stony Hollow'; 'What does the yard need?' (segmented: 'Lawn care only' / 'Beds & garden' / 'Full redesign'); 'Tell us about it' textarea placeholder 'e.g. shady back lawn, two dogs, dreams of tulips'; preferred visit window (Morning / Afternoon / Either). Lime pill submit 'Request my visit' (ink text on lime for contrast). Validation: missing required fields get a 2px terracotta border and a 13px terracotta note; no browser-native popups. Success replaces the form: lime CheckCircle2, 'Got it, [name].' in Fraunces 700, '[FOUNDER] or the office calls within one business day to set the window. This demo stores your request in this browser only.' and an outline pill 'Book another'. Persists to localStorage.
   Layout: Two-column field rows on desktop, 1-column mobile with 96px bottom padding so the sticky bar never covers submit.
   Motion: Success crossfades with a 12px rise; check pops 1.15×.
10. **Footer** — Fern-deeper band. Column 1: leaf logomark + [BRAND] in Fraunces 700 white; 13px #B9C9BB lines '9 Greenhouse Lane, [CITY]', 'Licensed contractor #LC-55230 · insured', 'Mon–Fri 7a–5p · Sat by appointment'. Column 2 'Work': anchors Services, Plan builder, Gallery, The year. Column 3 'Talk to us': [PHONE] in lime (tel:), lime pill 'Book a site visit'. Bottom hairline row: '[BRAND] · Sample site for a template — all prices, projects and reviews invented' 12px #86A089 plus optional [CREDIT] in lime. Mobile sticky bar (under 768px): fixed bottom fern 96% + blur; lime pill 'Call [PHONE]' (tel:) and white-outline pill 'Free visit' (anchor); safe-area padding.
   Layout: Footer grid 4/4/4 desktop to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Hero garden. Download https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/hero-garden.webp to public/images/hero-garden.webp. Alt: 'A designed garden with a stone path in late-afternoon light.' The hero's full-bleed anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Gallery: hardscape. Download https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-hardscape.webp to public/images/gallery-hardscape.webp. Alt: 'A flagstone path with neat edging through a planted bed.' Used in the gallery (Hardscape & paths). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Gallery: dusk lighting. Download https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-lighting.webp to public/images/gallery-lighting.webp. Alt: 'Garden uplights glowing along a path at dusk.' Used in the gallery (Lighting) and floated in the guarantee band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Gallery: planting beds. Download https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-beds.webp to public/images/gallery-beds.webp. Alt: 'Layered perennial beds with fresh mulch.' Used in the gallery (Design & build). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Gallery: lawn. Download https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-lawn.webp to public/images/gallery-lawn.webp. Alt: 'A freshly mown lawn with clean stripes.' Used in the gallery (Lawn programs). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Gallery: irrigation. Download https://media.vibefather.ai/assets/0dd3ae1b-b732-4cb5-8693-8c2a74b09802/gallery-irrigation.webp to public/images/gallery-irrigation.webp. Alt: 'A low irrigation head misting a planted bed at golden hour.' Used in the gallery (Irrigation). Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup. No other icon source.
- font: Fraunces (OFL) and Work Sans (OFL) self-hosted through @fontsource/fraunces and @fontsource/work-sans; no CDN font loading.

## Don'ts
- No real landscaping brands, franchises, nurseries or plant trademarks; plants appear by common names only.
- No recognizable real gardens, estates or landmarks; all photographed gardens are fictional and generic.
- No real clients or addresses; [BRAND], license #LC-55230, projects, towns and reviews are invented sample data.
- Photos show gardens, lawns, paths and lighting only — no crews, no faces, no equipment brand marks, no readable text or signage anywhere.
- All prices are sample data; the builder's estimate must stay labeled as one ('the site visit confirms it'), never as a locked quote.
- No dates tied to the real clock: the calendar shows month names only, no years, no today's-date logic, no countdowns; the footer carries no copyright year.
- Forms are local-only samples: no submit to any server, no APIs, no analytics, no email or calendar services. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- The plan builder must never guess silently: keep the price table in content.ts and show every line on screen.
- Gallery filters must never leave an empty grid; 'All' restores six cards.
- Use lime for fills, chips and large numbers only — never small body text on light backgrounds; body text stays at AA contrast.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, the vine draw, count-ups, tweens and hover scale, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the visit form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/landscaping-and-lawn-care-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
