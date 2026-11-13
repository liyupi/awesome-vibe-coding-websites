# Funeral Home Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the family funeral home led by director [FOUNDER] in [CITY], serving families for [EXPERIENCE]. The page is gentle and dignified — sage, slate, warm ivory, a graceful serif, photography of the chapel, gardens and flowers with no caskets in close-up. It offers arrangement options in family language, a transparent sample price list, a five-step pre-planning checklist saved locally, an obituaries list with a sample tribute and browser-local guestbook with candles, grief resources, a look at the chapel and garden, and a 24/7 contact block. All families, prices and tributes are invented sample data.

- Audience: Two visitors at two very different moments: families arranging now (often at 3 a.m., on a phone, needing the number and the price) and adults planning ahead for themselves or a parent (needing the checklist and reassurance). Both need warmth and zero friction.
- Goal: For arranging families: the phone number and the price, findable in seconds, with nothing pushing a decision. For planners: the checklist started and a conversation booked gently. The page never sells; it steadies.
- Tone: Quiet, warm, unhurried second person. Short sentences. 'Your family' and 'when you're ready' over euphemism; no urgency, no upsell, no 'loved one' more than once per section.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL-1.1), @fontsource/karla (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Cormorant Garamond' and fontFamily.body 'Karla'.
  - Self-host Cormorant Garamond weights 500 and 600 and Karla weights 400, 500, 700 through @fontsource/cormorant-garamond and @fontsource/karla, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for slow fades only; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, arrangement options, price rows, checklist steps, the three obituaries with tributes, grief resources, guestbook copy, visit copy. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Pre-planning checklist, exactly five steps with 2–4 sub-items each: 'Write down your wishes' (service type, music and readings, resting place); 'Gather the documents' (will, deeds and accounts, military papers, insurance); 'Choose the service' (burial, cremation, green, celebration — with a one-line plain gloss each); 'Note the financial side' (prepaid options exist but deciding can wait, keep a folder); 'Tell one person' (who holds the folder, where it lives). Each sub-item is a checkbox; a progress line '2 of 5 steps begun' with a thin sage bar; state persists to localStorage under [BRAND_SLUG]-plan; a reset link 'Start fresh' with an inline confirm (no confirm()).
  - Obituaries, exactly three sample tributes: 'Margaret Ellison, 1938–2026' — 'taught thirty years of third grade, grew better roses than her neighbor (she said)'; 'Samuel Reyes, 1949–2026' — 'welder, coach, maker of the world's best breakfast tortillas'; 'Ida Bloom, 1931–2026' — 'quilter, bridge shark, grandmother of nine, great-grandmother of fourteen'. Years are part of the invented life story (fixed strings, never computed). The list shows an initial-monogram medallion (code-drawn sage circle with the initials), name, years, one line, and 'Read tribute'. The tribute view (in-page expansion or anchor) shows the full sample tribute (3 short paragraphs), service details ('A service was held at the Willowmere chapel; the family suggests donations to the [CITY] library in lieu of flowers' — generic), and the guestbook: name + optional message entries stored locally under [BRAND_SLUG]-guestbook with two seeded sample entries ('The Ellisons — She taught our daughter; the tortilla claim stands'), a 'Light a candle' toggle that adds a small flame icon counter (also local, starting at sample 87), and a note 'This demo guestbook lives in your browser only.'
  - Price list, exactly three packages plus a note: 'Simple cremation — $1,395' (transport, necessary paperwork, simple container, return of ashes); 'Traditional service — $4,850' (everything above plus chapel service, visitation, hearse, basic casket choice); 'Celebration of life — $3,200' (memorial-led gathering, chapel or garden, keepsake printing). Under the packages: 'Itemized lists are always provided — you may choose any or none of the above. No one decides today. Prices are samples for this template.'
  - Use only these lucide-react icons: Phone, Clock, Flower2, Leaf, Sun, Candle? (use Flame), BookOpen, CheckCircle2, ChevronRight, ArrowRight, Menu, X, MapPin, Heart, FileText, PenLine, TreePine.
  - Persist the checklist, guestbook entries and candle state to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the ivory circle with a sage leaf) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Home name (default: "Willowmere Funeral Home"). Invented funeral home name; a leaf logomark is derived from it in code.
- [CITY] — City (default: "Ashton Mill"). Where the home and garden are; appears in hero, tributes and footer.
- [FOUNDER] — Director (default: "Eleanor Voss"). Invented funeral director, named in hero and pre-planning copy.
- [PHONE] — 24/7 line (default: "(555) 447-1000"). The always-answered line; the site's most prominent element; links as tel: with digits only.
- [EXPERIENCE] — Years serving (default: "34 years"). Plain phrase like '34 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/funeral-home-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Soft sage `#7C9A87` — The calm accent: icons, links, checklist bars, monogram medallions
- Sage tint `#E8EFE9` — Quiet panels and chips
- Deep slate `#2E3A40` — Text, headers, quiet bands
- Slate deep `#232D33` — Footer ground
- Warm ivory `#FAF7F0` — Page ground
- White `#FFFFFF` — Cards
- Steel `#5E6B6E` — Secondary text
- Hairline `#E6E0D6` — Hairline rules and card borders

### Typography
- Display: headlines, names, prices: Cormorant Garamond (OFL), weights 500/600
- Body: paragraphs, checklist, guestbook: Karla (OFL), weights 400/500/700

### Layout & motion
- Spacing: The most generous in the library: sections separated by 112px desktop / 72px mobile; section headers use a 12px letter-spaced sage eyebrow over a Cormorant Garamond 600 title at clamp(30px, 3.6vw, 48px); body copy max-width 640px with 1.7 line-height; cards 30px padding, 26px gaps.
- Radius: Soft and unsharp: 4px cards and chips, 2px buttons — quiet edges, nothing playful.
- Motion: Slow fade-rise reveals (10px, 700ms, 90ms stagger) via useInView, once — barely perceptible.
- Motion: Checklist bars fill 400ms; candles flicker with a 2s opacity loop only on the candle icon; nothing else moves.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media, no slides or pops.
- Imagery: Soft-light photography from one shoot: a calm chapel interior with flowers and empty pews, light through a window on the pews, a memorial garden path with a bench, white flowers in close-up, a family reception room in warm light, and a candlelit memorial table — no caskets in close-up, no people, no readable signage.

## Pages & Sections
### [BRAND] — [CITY] (`index.html`)
1. **Header and hero** — Header (ivory at 96% with backdrop blur, 68px): leaf logomark + [BRAND] in Cormorant Garamond 600 20px slate; nav anchors Arrangements, Prices, Planning ahead, Obituaries, Our place; right: the 24/7 chip — Phone icon + [PHONE] (tel:) in slate with sage ring, always visible. At 390px: logomark + name, phone icon button, menu button on one line; anchors in an ivory dropdown. Hero: full-bleed chapel-garden photo (chapel with soft light, 76vh desktop / 540px mobile) under a bottom gradient from slate #2E3A40 at 88% to transparent 55%; content bottom-left: eyebrow sage 'FUNERAL SERVICES & MEMORIALS — [CITY]'; H1 Cormorant Garamond 600 warm white 'We'll take care of everything, gently.'; paragraph #DDE4DF 'Director [FOUNDER] and her family have served [CITY] for [EXPERIENCE] — at any hour, a person answers.'; two quiet pills: white pill 'Call now — [PHONE]' (tel:) and sage-outline pill 'Plan ahead' (anchor); beneath, one line 13px #DDE4DF 'Arranging now, or thinking ahead — both are welcome here.'
   Layout: Copy columns 1–7; scrim guarantees AA contrast; the phone number appears twice above the fold (header chip and CTA).
   Motion: Photo fades in 700ms; copy rises 10px staggered 90ms.
2. **Arrangement options** — Ivory band. Eyebrow 'ARRANGEMENTS' (sage); title 'In family words, not industry words.' Four cards (white, hairline): 'Burial' — 'Ground rest at the cemetery of your choosing — traditional service first, or a quiet graveside only.'; 'Cremation' — 'With or without a service; ashes returned in the container you choose, on the timeline you need.'; 'Green burial' — 'A simpler resting in our meadow section — no vault, a natural marker, the way it was done for centuries.'; 'Celebration of life' — 'Led by a celebrant or someone who knew them best; the chapel, the garden, or anywhere that fits.' Each card: a small code-drawn line icon (Leaf, Sun, TreePine, Flower2). Footer line steel 14px: 'Every option can be mixed, trimmed, or replaced — bring us what you have, we'll shape the rest.'
   Layout: Four cards in a row (2×2 under 900px, 1-column under 640px).
   Motion: Cards fade in staggered 90ms.
3. **Transparent prices** — Sage-tint band. Eyebrow 'PRICES, IN THE OPEN' (sage); title 'You may look before you call.' Three price cards (white, hairline, quiet): 'Simple cremation — $1,395' — 'Transport, necessary paperwork, a simple container, ashes returned.'; 'Traditional service — $4,850' — 'Everything in cremation's place: chapel service, visitation, hearse, a basic casket choice.'; 'Celebration of life — $3,200' — 'A celebrant-led gathering, chapel or garden, keepsake printing included.' Under the cards, a note panel (white, 15px slate): 'Itemized lists are always provided, and you may choose any or none of the above. No one decides today — and the price you see is the price we discuss. Samples for this template.'
   Layout: Three cards in a row (1-column under 900px); prices in Cormorant Garamond 600 at 30px.
   Motion: Cards fade in staggered 90ms.
4. **Planning ahead** — Ivory band, the signature tool. Eyebrow 'PLANNING AHEAD' (sage); title 'A quiet checklist, at your own pace.' Intro 16px steel: 'For yourself or a parent — five steps, started here, finished whenever. Nothing sends anywhere; your progress stays in this browser.' The checklist card (white, max-width 760px): five step groups with sage numerals and checkboxes as listed in setup; a progress line '2 of 5 steps begun' with a thin sage bar; 'Start fresh' link with inline confirm. A quiet aside card beside it: 'Why plan ahead' — 'Families who plan tell us the same thing: the hardest week held one fewer decision.' with the garden-path photo beneath.
   Layout: Checklist 7 columns, aside 5; mobile stacked; checkboxes 44px targets.
   Motion: Bars fill 400ms; check ticks fade in.
5. **Obituaries and guestbook** — White band. Eyebrow 'REMEMBRANCES' (sage); title 'Lives we've been honored to carry.' Three tribute rows (hairline dividers): the sage initial-monogram medallion (ME / SR / IB), name in Cormorant Garamond 600 22px, years as fixed strings ('1938–2026', '1949–2026', '1931–2026'), one line, and 'Read tribute' link expanding the row: three short sample paragraphs of life story, a service line ('A service was held at the [BRAND] chapel; the family suggests gifts to the [CITY] library.'), and the guestbook — two seeded entries, name + optional message input (two fields and a quiet 'Add a remembrance' button), the candle block (Flame icon, '88 candles lit' starting from sample 87, a 'Light a candle' toggle button), and the 12px note 'This demo guestbook lives in your browser only.'
   Layout: Rows max-width 760px; expanded tribute indents with a sage left rule; guestbook entries as quiet cards.
   Motion: Rows fade in 90ms apart; candles flicker on a 2s loop only when lit.
6. **Grief resources** — Sage-tint band. Eyebrow 'AFTER THE SERVICE' (sage); title 'Help that reads like a friend wrote it.' Three cards: 'The first weeks' — 'Sleep goes sideways; appetite too. Both ordinary. Accept the casseroles.'; 'How to help a grieving friend' — 'Say the name. Bring food. Mark the calendar for the hard month, not the hard week.'; 'Groups nearby' — 'The library hosts a Tuesday evening circle; the senior center a Wednesday lunch. Both welcome newcomers quietly.' Footer line steel: 'Reading suggestions live at the front desk — take any, keep any.'
   Layout: Three cards in a row (1-column under 900px).
   Motion: Cards fade in staggered 90ms.
7. **Our place** — Ivory band. Eyebrow 'OUR PLACE' (sage); title 'Visit before you need us, if you can.' A 2×2 photo grid (chapel-light, garden bench, reception room, flowers close-up) in quiet 4px frames; copy beside: 'The chapel seats 120; the garden path is open to walkers any daylight hour. Tours need no appointment — knock, and if we're with a family, we'll find you within the hour.' Address '4 Willowmere Lane, [CITY]' (MapPin) and 'Office weekdays 8a–5p — the line answers always.'
   Layout: Photos 7 columns in a 2×2 grid, copy 5; mobile stacked.
   Motion: Photos fade in staggered 120ms.
8. **24/7 contact block** — Slate band, centered, no photo: 'Any hour. A person, not a menu.' in Cormorant Garamond 600 warm white 32px; the number [PHONE] as a large white pill (tel:); beneath, 14px #C6CFCC: 'If you're arranging now, call. If you're planning ahead, the checklist above waits — and so do we, whenever you're ready.'
   Layout: Centered max-width 640px; generous padding 96px vertical.
   Motion: None.
9. **Footer** — Slate-deep band. Column 1: leaf logomark + [BRAND] Cormorant Garamond 600 white; 13px #98A5A3 lines '4 Willowmere Lane, [CITY]', '[PHONE] — answered always (tel:)', 'Office weekdays 8a–5p'. Column 2 'Families': anchors Arrangements, Prices, Planning, Obituaries. Column 3 'Small print': 'Sample site for a template — families, prices and tributes invented', optional [CREDIT] link in sage. No copyright year. Mobile sticky bar (under 768px): fixed bottom slate 96% + blur; white pill 'Call [PHONE]' (tel:) and sage-outline pill 'Plan ahead' (anchor), safe-area padding.
   Layout: Footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Chapel hero. Download https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/hero-chapel.webp to public/images/hero-chapel.webp. Alt: 'A calm chapel interior with soft light, flowers and empty pews.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Garden path. Download https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/garden-path.webp to public/images/garden-path.webp. Alt: 'A memorial garden path with a bench in soft light.' Used in the planning-ahead aside and our-place grid. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Window light. Download https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/chapel-light.webp to public/images/chapel-light.webp. Alt: 'Soft light falling through a chapel window onto pews.' Our-place grid. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: White flowers. Download https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/flowers-soft.webp to public/images/flowers-soft.webp. Alt: 'White flowers in soft close-up light.' Our-place grid. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Reception room. Download https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/reception-room.webp to public/images/reception-room.webp. Alt: 'A warm family reception room with soft chairs and tea.' Our-place grid. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Candle memorial. Download https://media.vibefather.ai/assets/45a9044d-c534-43a5-9ee2-3dbaa058233a/candle-memorial.webp to public/images/candle-memorial.webp. Alt: 'A quiet table of memorial candles glowing softly.' Supporting the guestbook band. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup, plus the code-drawn leaf logomark and initial-monogram medallions. No other icon source.
- font: Cormorant Garamond (OFL) and Karla (OFL) self-hosted through @fontsource/cormorant-garamond and @fontsource/karla; no CDN font loading.

## Don'ts
- No caskets in close-up anywhere; photography shows chapel, garden, flowers, reception and candlelight only — no people, no readable signage.
- No religious imagery tied to a specific tradition; the chapel is generic and services adapt to the family's.
- No real grief organizations, hotlines or charities by name; resources stay generic and local-described (library circle, senior-center lunch).
- No upsell or urgency anywhere: no 'limited time', no package pushed above others, no 'act now'; the prices note explicitly says no one decides today.
- Tone check every string: short sentences, warm second person, at most one 'loved one' per section, no euphemism pile-ups, no cheery exclamation marks.
- Obituary years are fixed invented strings (1938–2026 etc.) — never computed from the visitor's clock; no copyright year, no calendar dates elsewhere.
- The guestbook, candles and checklist are browser-local demos and say so; no accounts, no sync, no analytics.
- All prices are sample data labeled as such; no price is ever called final on the page.
- Forms and inputs are local-only samples: no submit to any server, no APIs. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- Motion stays nearly invisible: slow fades, bar fills and the candle flicker only; nothing bounces, slides or pops; everything respects prefers-reduced-motion.
- The 24/7 phone number must be reachable in one tap from every screen — header chip, hero CTA, contact block and mobile sticky bar all use the same tel: link.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover content.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/funeral-home-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
