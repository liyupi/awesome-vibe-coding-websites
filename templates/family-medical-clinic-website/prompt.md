# Family Medical Clinic Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the family medical clinic led by [FOUNDER] in [CITY], open [EXPERIENCE] at two locations. The page is warm and calm — teal, coral, cream, rounded type — and practical: a filterable provider directory, an appointment request with visit types and slot chips, a searchable insurance list, a what-to-bring checklist, a sample walk-in wait card, hours for both locations and after-hours guidance. It never makes medical claims or treatment promises; in an emergency it says call 911. All providers, plans and numbers are invented sample data.

- Audience: Primary: families and individuals around [CITY] choosing (or switching) a primary care home — checking who takes their insurance, who's taking patients, and how fast a sick visit happens. Secondary: pediatric, dental and specialty clinics adapting the directory and services.
- Goal: Move a visitor from 'is this clinic right for us' to a submitted appointment request: answer insurance and availability fast, make the wait visible, make the request take under a minute.
- Tone: Warm front-desk English — plain, kind, unhurried, zero jargon. Never sales-y about health; the page's confidence is calm, not loud.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/quicksand (OFL-1.1), @fontsource/nunito (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Quicksand' and fontFamily.body 'Nunito'.
  - Self-host Quicksand weights 600 and 700 and Nunito weights 400, 600, 700, 800 through @fontsource/quicksand and @fontsource/nunito, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, useInView, useReducedMotion) for gentle reveals and the wait-card tween; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, services, providers (name, credential, specialty, languages, accepting, oneLine bio, photo), insurance plans (invented), visit types, slot chips, what-to-bring items, hours for both locations, wait-card sample figures, reviews. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - Provider directory filters: specialty chips (All, Family medicine, Pediatrics, Women's health), language chips (All, English, Spanish), and an 'Accepting new patients' toggle; filtering is instant; a provider not accepting shows a muted 'Panel full — waitlist' state instead of the request button.
  - Insurance list: seven invented plans — Cedar Health PPO, Cedar Health HMO, Summit Care, Harborlight Plans, Meadowbrook Union, Crestline Direct, Self-pay — filtered by a search input ('Type your plan…'); no-match state shows 'Don't see it? Call [PHONE] — we check plans weekly.' Never use real insurance carrier names.
  - The what-to-bring checklist is interactive: checkboxes persist to localStorage under [BRAND_SLUG]-bring; a small '3 of 6 ready' counter updates as items tick.
  - Appointment request: visit type segmented control (New patient visit / Follow-up / Same-day sick visit / Vaccine only), optional provider select (accepting providers only), day-part chips (Morning / Midday / Afternoon), three slot chips per day part (e.g. 8:20, 9:00, 9:40) — slots are static sample chips, not a live calendar; name, phone, one-line reason (optional); submit validates required fields inline (no browser-native popups), then shows a success card 'Request received, [name]. The front desk calls to confirm — usually within two hours during office hours. This demo stores the request in this browser only.' Persist to localStorage under [BRAND_SLUG]-appointment.
  - Walk-in wait card: two location rows with a sample wait ('Meadowbrook ~25 min', 'Northside ~40 min') that tweens on entry, explicitly labeled 'Sample figures — the front desk updates this board all day.' No live-data claim.
  - Use only these lucide-react icons: Phone, CalendarCheck, Clock, Users, Languages, Stethoscope, Baby, HeartPulse, Syringe, ClipboardList, CheckCircle2, MapPin, ChevronRight, ArrowRight, Menu, X, Search, FileText, Building2.
  - Persist the checklist and appointment request to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the teal rounded square with a white cross-free heart mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps. No medical claim language anywhere.

## Variables
- [BRAND] — Clinic name (default: "Bramble Hill Family Clinic"). Invented clinic name; a rounded heart logomark is derived from it in code.
- [CITY] — City (default: "Meadowbrook"). Main location's town; appears in hero, locations, insurance copy.
- [FOUNDER] — Medical director (default: "Dr. Alana Reyes"). Invented medical director; also the first provider card.
- [PHONE] — Phone (default: "(555) 491-2200"). Front desk line; links as tel: with digits only.
- [EXPERIENCE] — Years open (default: "15 years"). Plain phrase like '15 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/family-medical-clinic-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Clinical teal `#0E7C7B` — Primary: header ground, section accents, links, active chips
- Teal deep `#0A5D5C` — Footer ground and dark panels
- Soft coral `#FF7F66` — Warmth: CTAs, highlights, wait-card accents
- Coral tint `#FFEAE5` — Warm chips and note panels
- Teal tint `#E4F2F1` — Info panels and section bands
- Soft cream `#FAF6EF` — Page ground
- White `#FFFFFF` — Cards and panels
- Warm ink `#2A3438` — Headings and body on light
- Steel `#5E6E71` — Secondary text
- Hairline `#E9E3D8` — Hairline rules and card borders

### Typography
- Display: headlines, section titles, wait numbers: Quicksand (OFL), weights 600/700
- Body: paragraphs, controls, provider bios: Nunito (OFL), weights 400/600/700/800

### Layout & motion
- Spacing: Sections separated by 92px desktop / 64px mobile; section headers use a 13px letter-spaced teal eyebrow over a Quicksand 700 title at clamp(28px, 3.2vw, 44px); cards 28px padding, 24px gaps.
- Radius: The friendliness lives here: 16px cards, 12px chips and inputs, fully-rounded pills; photos 16px to match.
- Motion: Gentle fade-rise reveals (14px, 550ms, 70ms stagger) via useInView, once.
- Motion: The wait numbers count up on entry over 700ms; the checklist counter ticks with a 150ms pop.
- Motion: Filter and search changes crossfade provider cards and plan rows 180ms.
- Motion: All motion disables instantly under prefers-reduced-motion; no parallax, no scroll-jacking, no autoplay media.
- Imagery: Warm clinical interiors from one shoot: a bright waiting room in cream and wood with plants, an exam room with teal accents and daylight — no patients, no close faces, no stethoscope-posing clichés. Provider portraits are studio-lit fictional people in white coats on plain warm backgrounds, varied in age and ethnicity.

## Pages & Sections
### [BRAND] — Family medicine in [CITY] (`index.html`)
1. **Header and hero** — Header (cream at 94% with backdrop blur, 72px): heart logomark (teal rounded square holding a white HeartPulse glyph) + [BRAND] in Quicksand 700; nav anchors Services, Providers, Insurance, New patients, Visit; right: phone chip Phone icon + [PHONE] (tel:) and coral pill 'Request a visit'. At 390px: logomark + short name, phone icon button, menu button on one line; anchors in a cream dropdown. Hero: left copy (columns 1–6): eyebrow in teal 'FAMILY MEDICINE · TWO LOCATIONS'; H1 Quicksand 700 warm ink 'Care that answers on the second ring.'; paragraph steel 16px '[FOUNDER] leads a four-provider team that has cared for [CITY] families for [EXPERIENCE]. Same-day sick visits, evening slots twice a week, and a front desk that picks up.'; coral pill 'Request an appointment' (anchor) and teal-outline pill 'Meet the providers' (anchor); three chips: 'Same-day sick visits' · 'Spanish spoken' · 'Walk-ins welcome'. Right (columns 7–12): the waiting-room photo in a 16px-radius frame (4:3) with a floating white card overlapping its bottom-left: Clock icon, 'Walk-in wait right now', '~25 min · Meadowbrook' in Quicksand 700 teal, and a 12px steel line 'Sample board — the front desk updates it all day.'
   Layout: 12-column grid; the floating card offset -18px; mobile stacks copy then photo with the card inside the frame's bottom-left.
   Motion: Photo settles from 1.03 over 600ms; copy rises 14px staggered 70ms; the wait number counts up.
2. **Services** — Cream band. Eyebrow 'WHAT WE SEE' (teal); title 'One clinic for the whole household.' Five cards (white, 16px radius, hairline): 'Primary care' — Stethoscope icon — 'Annual physicals, chronic-condition check-ins and the long view of your health, with whichever provider you click with.'; 'Pediatrics' — Baby icon — 'Well-child visits through the school years, sports forms and the earaches that show up on Fridays.'; 'Women's health' — HeartPulse icon — 'Well-woman visits, contraception planning and screenings, scheduled with the time they deserve.'; 'Vaccines' — Syringe icon — 'Flu shots, childhood series and travel vaccines — often in and out in fifteen minutes.'; 'Same-day sick visits' — Clock icon — 'Hold a slot before 8 a.m. and you're seen that day. Walk-ins welcome when the board above says so.' Each card footer: teal ChevronRight 'Request this visit' anchoring the form with that visit type preselected.
   Layout: Five cards: 3+2 wrapped rows at desktop, 2-column under 900px, 1-column under 640px; icons in teal-tint circles.
   Motion: Cards rise 14px staggered 70ms.
3. **Provider directory** — White band, the signature section. Eyebrow 'OUR PROVIDERS' (teal); title 'Pick your person.' Filter row: specialty chips (All, Family medicine, Pediatrics, Women's health), language chips (All, English, Spanish), 'Accepting new patients' toggle chip (coral when on). Four provider cards (cream ground, 16px radius): 3:4 portrait, name Quicksand 700 18px, credential + specialty 13px teal, languages 12px steel with Languages icon, one-line bio 14px ink, and either a coral pill 'Request with [first name]' (preselects them in the form) or a muted 'Panel full — join the waitlist' chip. '[FOUNDER], MD — Family medicine — English, Spanish — 'Started this clinic to keep appointment lengths long enough to actually listen.'' accepting. 'Dr. Owen Pike, MD — Pediatrics — English — 'Kids decide if they like a doctor in ten seconds; he passes.'' accepting. 'Naomi Ostrander, FNP — Women's health — English — 'Unhurried visits, plain answers, every time.'' accepting. 'Dr. Samuel Boateng, MD — Family medicine — English, Spanish — 'Second opinions welcome — bring the printouts.'' panel full. Filtering is instant and never leaves an empty grid without the 'All' chip offered.
   Layout: Four cards in a row (2×2 under 1024px, 1-column under 640px); filter chips scroll horizontally on mobile.
   Motion: Cards crossfade 180ms on filter changes; portraits scale 1.02 in frame on hover.
4. **Insurance and new patients** — Teal-tint band, two halves. Left: 'Insurance we work with' — search input 'Type your plan…' (Search icon) filtering a white panel list of the seven invented plans with CheckCircle2; no-match state shows the call line. Under the list 13px steel: 'Plans change often — the front desk re-checks the list weekly. Self-pay visit: $95, published, no surprises.' Right: 'First visit? Bring these.' — six interactive checkboxes (persist locally): 'Photo ID and insurance card', 'Medication bottles (or a list)', 'Pharmacy you prefer', 'Any records from your last clinic', 'Questions you keep forgetting to ask', 'Co-pay ready or card on file'; a coral '3 of 6 ready' progress counter with a thin progress bar; under it a note 'Forms? We hand you a clipboard once — after that everything's in the portal you'll never have to call.' with FileText icon.
   Layout: 6/6 columns desktop, stacked mobile; list rows 44px with hairline dividers.
   Motion: Checkbox ticks pop 1.15×; the counter bar fills 200ms; plan rows crossfade on search.
5. **Appointment request** — White band. Eyebrow 'REQUEST A VISIT' (coral); title 'Two minutes, then a real person calls.' Form in a cream panel (max-width 760px, 32px padding): visit type segmented control (New patient visit / Follow-up / Same-day sick visit / Vaccine only — coral when active); provider select ('First available', plus the three accepting providers); day-part chips Morning / Midday / Afternoon with three sample slot chips under the chosen part (Morning: 8:20, 9:00, 9:40; Midday: 11:20, 12:00, 1:10; Afternoon: 2:30, 3:20, 4:00) — one slot selected; Name (required), Phone (required), 'Anything the provider should know?' optional textarea placeholder 'e.g. scheduling a school sports physical'. Coral pill submit 'Send my request'. Validation: missing required fields get a 2px coral border and 13px coral note; no browser-native popups. Success replaces the form: teal CheckCircle2, 'Request received, [name].' Quicksand 700, 'The front desk calls to confirm — usually within two hours during office hours. Nothing was sent anywhere: this demo stores your request in this browser only.' and an outline pill 'Request another'. Persists to localStorage.
   Layout: Two-column field rows on desktop, 1-column mobile with 96px bottom padding so the sticky bar never covers submit; slot chips 44px targets.
   Motion: Success crossfades with a 12px rise; the check pops 1.15×; segmented and slot chips transition 150ms.
6. **Locations and hours** — Cream band. Eyebrow 'VISIT US' (teal); title 'Two doors, same team.' Two location cards (white, 16px radius): 'Meadowbrook — main' — '512 Bramble Hill Road' (MapPin), 'Mon–Fri 7:30a–6p · Sat 8a–12p · evening slots Tue & Thu until 8p', phone [PHONE]; 'Northside — walk-ins & sick visits' — '1980 Northside Crossing, Suite 3', 'Mon–Fri 8a–5p · Sat 9a–1p', '(555) 491-2299'. Under both, an after-hours note card (coral-tint): 'After hours: call the main line to reach the nurse line. In an emergency, call 911 or go to the nearest emergency department — this website is not for urgent help.' The exam-room photo as a wide 16px-radius banner between the cards and the note.
   Layout: Two cards in a row (1-column under 800px); the banner photo full-width at 21:9 crop.
   Motion: Cards rise 14px staggered 80ms; banner fades in.
7. **Reviews** — White band. Eyebrow 'FROM FAMILIES'; title 'What neighbors say.' Three quote cards (cream ground, teal quote mark): five teal stars; 16px ink quote; 13px steel footer. 'Same-day appointment at 8 a.m., seen by 9:15, out with a prescription by 10. That used to be a fantasy.' — The Harmons, Meadowbrook, family of four. 'They found a Spanish-speaking provider for my mother and treated her like their own family.' — Lucía G., Northside. 'The portal actually works, but I still call sometimes because someone picks up. Imagine that.' — Derek W., Meadowbrook. Disclaimer line 12px steel under the grid: 'Sample reviews for this template demo.'
   Layout: Three cards in a row (1-column under 900px); middle card lifts 12px on desktop.
   Motion: Cards rise 14px staggered 90ms.
8. **Footer** — Teal-deep band. Column 1: heart logomark + [BRAND] in Quicksand 700 white; 13px #A8C6C5 lines '512 Bramble Hill Road, [CITY]', '(555) 491-2299 · Northside', 'Sample site for a template — providers, plans and reviews invented'. Column 2 'Clinic': anchors Services, Providers, Insurance, New patients. Column 3 'Contact': [PHONE] in coral (tel:) and coral pill 'Request a visit'. Bottom hairline row: 'This demo is not medical advice. In an emergency call 911.' plus the optional [CREDIT] link. Mobile sticky bar (under 768px): fixed bottom teal 96% + blur; coral pill 'Call' (tel:) and white-outline pill 'Request visit' (anchor), safe-area padding.
   Layout: Footer grid 4/4/4 to 1-column mobile; body padding-bottom 80px under 768px.
   Motion: None.

## Assets
- image: Waiting room. Download https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/hero-waiting.webp to public/images/hero-waiting.webp. Alt: 'A bright clinic waiting room with wood chairs, plants and daylight.' The hero anchor. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Exam room. Download https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/exam-room.webp to public/images/exam-room.webp. Alt: 'A calm exam room with teal accents and daylight.' The locations banner. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Provider portrait one. Download https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-1.webp to public/images/provider-1.webp. Alt: 'Portrait of a fictional family physician in a white coat.' Used on the [FOUNDER] card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Provider portrait two. Download https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-2.webp to public/images/provider-2.webp. Alt: 'Portrait of a fictional pediatrician in a white coat.' Used on the Dr. Owen Pike card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Provider portrait three. Download https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-3.webp to public/images/provider-3.webp. Alt: 'Portrait of a fictional nurse practitioner in a white coat.' Used on the Naomi Ostrander card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- image: Provider portrait four. Download https://media.vibefather.ai/assets/981d0492-15ed-4c3a-bc9a-a5f3d6fd22a7/provider-4.webp to public/images/provider-4.webp. Alt: 'Portrait of a fictional family physician in a white coat.' Used on the Dr. Samuel Boateng card. Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template; record that exact credit in ASSETS.md.
- icon: Lucide (ISC) via the lucide-react package, restricted to the icon list in setup. No other icon source.
- font: Quicksand (OFL) and Nunito (OFL) self-hosted through @fontsource/quicksand and @fontsource/nunito; no CDN font loading.

## Don'ts
- No medical claims, treatment promises or outcome language anywhere — copy, tooltips, alt text or metadata: no 'we treat', 'cure', 'best', 'guaranteed results'; services stay at the visit-type level, and the footer keeps the not-medical-advice and 911 lines.
- No real health systems, clinic chains, hospital brands or their logos; [BRAND], providers, reviews and addresses are invented sample data.
- No real insurance carriers or plan networks by name — the accepted list uses only the seven invented plans in content.ts.
- No real medical boards, accreditation seals or certification badges; credentials appear as plain text only (MD, DO, FNP).
- No real drugs, named conditions-as-offerings, or procedure marketing; keep every sentence at the access-and-process level.
- The wait card is sample data and says so; never imply live data feeds.
- No dates tied to the real clock: no copyright year, no today's-date logic, no countdowns; time references stay relative ('usually within two hours').
- Forms are local-only samples: no submit to any server, no APIs, no analytics, no email or calendar services. Persist to localStorage only and validate restored data.
- No backend, server code, databases or auth. Static output in dist/ from the single build command, under 20 MB, with Vite's base relative.
- Self-host fonts through the Fontsource packages only; never load Google Fonts, Adobe Fonts or any CDN stylesheet or script.
- No source maps in production and no src/ copied into dist/.
- No Unsplash, Pexels, Pixabay, Google Images, placeholder-image services or hotlinked files; use only the six generated photos and code-drawn SVG art.
- No SEO work: no meta descriptions, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings. A plain title with [BRAND] and a favicon are enough.
- Provider filters must never leave an empty grid without offering the 'All' chips; a panel-full provider never shows the request button.
- Portraits are fictional people, varied in age and ethnicity, resembling no real individual — and no stethoscope-posing stock clichés.
- No scroll-jacking, page parallax, custom cursor or autoplay media; motion limited to the specified reveals, count-ups, pops and crossfades, all respecting prefers-reduced-motion.
- Keep the mobile header on one line at 390px and never let the sticky bottom bar cover the appointment form's submit button.
- Build brand-derived strings (storage keys, tel: link) from [BRAND] and [PHONE] so alternate variable values never leave default-brand remnants.
- Every internal link is a file name or in-page anchor, never a bare directory; the site stays one index.html.

---
— Prompt by VibeFather · https://vibefather.ai/t/family-medical-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
