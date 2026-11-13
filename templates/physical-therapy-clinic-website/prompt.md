# Physical Therapy Clinic Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A two-page website for [CLINIC], a physical therapy clinic in [CITY] serving [FOCUS], self-pay visits from $[SELF_PAY]. It must be warm and honest: conditions in plain words, a three-step approach, three therapists with AI portraits (fictional placeholders), an insurance block that answers the awkward questions, a new-patient intake form confirming client-side, and hours with an open-now indicator. Pages: index.html, newpatient.html. No diagnosis language, no outcome guarantees. Everything runs in the browser; nothing is submitted anywhere.

- Audience: Adults 30–70 with a twinge that won't quit and a deductible they don't understand: post-op knees, desk backs, runner's everything. They want to know the clinic fixes their kind of problem, takes their insurance, and won't shame them for waiting.
- Goal: Get the intake form filled. Within ten seconds a visitor sees the promise, a therapist's face and the new-patient CTA; within two minutes they've found their condition and opened the form.
- Tone: Encouraging and matter-of-fact, like a PT who's seen the same shoulder a thousand times. Plain words for anatomy, typical journeys for outcomes (sample-labeled), one joke about homework compliance.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/nunito (OFL-1.1), @fontsource-variable/source-sans-3 (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. Two real HTML pages at the project root: index.html (entry src/main-home.tsx) and newpatient.html (entry src/main-new.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0, rollupOptions { input { index: resolve(__dirname, 'index.html'), newpatient: resolve(__dirname, 'newpatient.html') } } }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './newpatient.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (white-page, slate-mist, card, teal, teal-deep, teal-mist, ink, slate, coral, rule, good) and fontFamily display ['Nunito', 'system-ui', 'sans-serif'], sans ['Source Sans 3 Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 14px and add maxWidth { container: '1160px' }.
  - In src/fonts.ts import '@fontsource/nunito/600.css', '@fontsource/nunito/700.css' and '@fontsource-variable/source-sans-3'; import src/fonts.ts and src/index.css from both entry files.
  - File layout: src/content.ts (every string, condition, step, therapist, insurance line, hour and image path, typed), src/lib/brand.ts (clinicSlug = [CLINIC] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = clinicSlug without hyphens + '.com', phoneDigits for tel:), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with clinicSlug + ':'), src/lib/useOpenNow.ts (open-now from the hours table and the client clock).
  - State: src/store/intake.ts is a tiny external store (useSyncExternalStore) holding { condition, history: string[], name, phone, sent } persisted to localStorage key clinicSlug + ':intake'.
  - Components in src/components/: Header.tsx, Reveal.tsx (Motion whileInView wrapper), Eyebrow.tsx, Footer.tsx; home: Hero.tsx, Conditions.tsx (ConditionCard.tsx), Approach.tsx (StepCard.tsx), Therapists.tsx (TherapistCard.tsx), Insurance.tsx (InsRow.tsx); newpatient: IntakeForm.tsx (ConditionSelect.tsx, HistoryChecks.tsx, Confirmed.tsx), HoursBlock.tsx (OpenNowPill.tsx), GettingHere.tsx. src/pages/Home.tsx and NewPatient.tsx compose them; both pages render Header and Footer.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. Both HTML files: lang en, <meta name='theme-color' content='#FDFDFB'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>. Titles: index.html '<title>[CLINIC] — Physical therapy in [CITY]</title>', newpatient.html '<title>New patients — [CLINIC]</title>'.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds the two HTML files, hashed JS/CSS, the woff2 fonts, favicon.svg and the six images. Keep it under 10 MB.

## Variables
- [CLINIC] — Clinic name (default: "Bridge Physical Therapy"). Invented clinic name. Used in the wordmark, titles, footer, email (hello@ + clinicSlug without hyphens + .com) and localStorage keys. Never a real clinic or chain.
- [CITY] — City (default: "Minneapolis, Minnesota"). Where the clinic is. Used in the title, hero, hours block and footer. Real cities fine; street invented.
- [FOCUS] — Who they treat (default: "adults with stubborn joints"). One lowercase phrase naming the clientele. Drives the hero line, conditions voice and one FAQ. Keep it warm and specific.
- [SELF_PAY] — Self-pay visit (default: "95"). The self-pay per-visit rate as digits. Drives the insurance block's honesty math and one FAQ. Keep it 75–150.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/physical-therapy-clinic-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- White Page `#FDFDFB` — Page background on both pages.
- Slate Mist `#EFF3F2` — Alternate section background (Conditions, Insurance), chips, hover fill.
- Card `#FFFFFF` — Condition cards, therapist cards, the intake panel, confirmation.
- Teal `#1F7A6D` — Primary: headlines' accents, primary buttons, selected chips, step numbers, focus ring.
- Teal Deep `#155F55` — Hover and pressed, footer background.
- Teal Mist `#E0F0ED` — Selected chip fills, icon wells, open dot glow.
- Ink `#22302D` — Headlines and body text, icon color.
- Slate `#5C6B68` — Secondary text, captions, eyebrows, closed states.
- Coral `#E2795B` — The one warm tick: the new-patient CTA, journey dots, sample-outcome labels, hover ticks.
- Rule `#DEE5E2` — 1px hairlines, card borders, input borders, dividers.
- Good `#2E8B62` — Confirmation checks, insurance-accepted ticks, open-now dot.

### Typography
- Display: H1, H2, H3, condition names, therapist names, the wordmark — Nunito, rounded and friendly: Nunito (OFL), weights 600/700
- Text and UI: body, eyebrows, buttons, forms, captions; tabular numerals for hours and prices: Source Sans 3 (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1160px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. 12-column grid, column gap 24px. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px. Type scale: H1 clamp(40px, 6vw, 72px) Nunito 700, line-height 1.06; H2 clamp(28px, 3.8vw, 44px) Nunito 700; H3 20px Nunito 700; lead Source Sans 400 17.5px / 1.65 Ink at 90%; body 15.5px / 1.7 (max-width 62ch); eyebrow Source Sans 700 12px uppercase letter-spacing 0.14em Slate; caption 13px Slate. Buttons: height 50px, Source Sans 700 14px. Primary: Teal fill, Card text. New-patient CTA: Coral fill, Card text. Secondary: 1px Teal border, Teal text. Inputs: height 50px, 1px Rule border, Card fill, focus Teal border. Focus ring everywhere: 2px Teal outline with 3px offset.
- Radius: 14px on cards, buttons, inputs, chips and photos. 999px only for pills, the open dot and journey dots.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap and accordion. Gentle and steady.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(12px) and settle over 700ms --ease-out when 15% visible (Motion whileInView, viewport once). Siblings stagger 70ms.
- Motion: Hero: the room photo scales 1.04→1.0 over 2000ms; the H1 rises; a small journey dot (coral) pulses once.
- Motion: Condition cards: hover lifts 3px and the icon well fills Teal Mist.
- Motion: Approach: the three step cards' connecting line draws left-to-right as the section scrolls; numbers pop sequentially.
- Motion: Therapist cards: portraits scale 1.03 on hover; the specialty pill crossfades to the one-liner.
- Motion: Insurance rows: the accepted-network ticks stagger in 60ms.
- Motion: Intake: history checkboxes tick with a drawn check; invalid submit shakes 4px once with kind inline labels; sending swaps to Confirmed (300ms --ease-io) with a Good check drawing and 'See you soon, [NAME].' plus the echoed condition line.
- Motion: Links: .link-draw grows a 1px currentColor underline over 280ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — no scales, draws, pops or staggered reveals; everything at rest; color/border hovers stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Bright real photography, all six made for this template in one consistent style: treatment rooms in soft daylight, pale wood and gentle greens, hands-free scenes — no patients, no faces. Therapist portraits are AI-generated fictional people at work (guiding a shoulder stretch, watching gait, demonstrating a band exercise) — placeholders a real clinic swaps for its own staff photos. No readable text or signage. Every photo uses object-fit cover with the object-position given under Assets, 14px corners, no shadow; photos on White get a 1px Rule outline. Captions in Source Sans 13px Slate. Drawn in code: the favicon, journey dots, ticks, chips and the confirmation check. Icons: lucide-react only, stroke width 1.75.

## Pages & Sections
### Home (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([CLINIC] = Bridge Physical Therapy, [CITY] = Minneapolis, Minnesota, [FOCUS] = adults with stubborn joints, [SELF_PAY] = 95). Put every string and number in src/content.ts and render from it; both pages share one content file. If any variable value differs, rewrite the hero, all eight conditions, the steps, therapists, insurance lines and FAQ so they are specific and believable for the new clinic, keeping the same structure and counts (8 conditions, 3 steps, 3 therapists, 4 insurance rows, 4 FAQs). All patients, therapists and journeys are invented; outcomes stay experiential with '(typical journey, sample)' labels. Facts: address '88 Shepherd Lane, [CITY]' invented; phone (612) 555-0172; hours Mon–Thu 7:00–19:00, Fri 7:00–15:00, Sat 8:00–12:00 (manual therapy only), Sun closed; self-pay $[SELF_PAY]/visit; in-network with 'most major plans — we check your card in five minutes and tell you before visit two'; conditions (name · plain line · journey): 'Necks & desk-backs' 'the monitor won, for now' 'most people feel freer turning their head within 3–4 visits (typical journey, sample)'; 'Shoulders' 'overhead, underpaid, over-40 — we get it' '6–8 weeks is the common arc for rotator-cuff irritation (typical journey, sample)'; 'Knees' 'stairs, squats and the kneecap''s opinions' 'many return to stairs comfortably in 4–6 visits (typical journey, sample)'; 'Hips & backs' 'the pair that carries everything' 'most report easier mornings by week two or three (typical journey, sample)'; 'Post-op rehab' 'knee and shoulder replacements, protocols followed' 'we sync with your surgeon''s protocol from visit one'; 'Runners'' legs' 'shins, IT bands, plantar fascia' 'a return-to-run plan from week one, progressed with you'; 'Wrists & thumbs' 'keyboards, phones, guitars' '2–3 weeks of calm work is typical (typical journey, sample)'; 'Dizziness & balance' 'vestibular-friendly, unhurried' 'positional work often settles spells in 1–3 visits (typical journey, sample)'. Steps: 1) 'Listen & measure' 'your story first, then the movement screen — noTreatment before we agree the problem'; 2) 'Treat & teach' 'hands-on when it helps, homework you''ll actually do, dosed like a prescription'; 3) 'Build the bridge' 'from the table to the trail, the gym, or the garden — your version of normal'. Therapists (portrait · name · line · days): 'pt-dana.webp' 'Dana Whitfield, DPT (fictional)' 'necks, headache-adjacent, vestibular' 'Mon–Thu'; 'pt-marcus.webp' 'Marcus Oyelaran, DPT (fictional)' 'post-op knees, runners, kettlebells' 'Tue–Sat'; 'pt-lin.webp' 'Lin Zhao, DPT (fictional)' 'shoulders, hands-on craft, weekend golfers' 'Mon–Fri'. Insurance rows: 'In-network' 'most major PPOs — we verify before visit two' Good; 'Self-pay' '$[SELF_PAY] a visit, no packages, homework included' Good; 'Medicare' 'accepted, assignment taken — bring the card' Good; 'Out-of-network?' 'we give superbills and honest odds — sometimes it''s cheaper self-pay' Good. FAQs: 'Do I need a referral?' 'State rules allow direct access — most people start without one; we check yours specifically.'; 'Will it hurt?' 'The treatment shouldn''t; the homework might, mildly, on day two. We scale to your Yes-line.'; 'What do I wear?' 'Comfortable clothes you can move in; shorts for knees, a tank for shoulders. We have spares.'; 'How many visits?' 'Honest ranges on day one — many conditions run 4–8 visits (typical journey, sample), and we re-check the plan every visit.'
   Layout: n/a
   Motion: n/a
2. **Header (all pages)** — Left: the wordmark '[CLINIC]' (Nunito 700 18px) over 'Move better · [CITY]' (10px uppercase Slate) linking ./index.html. Right nav (Source Sans 600 14px): 'Conditions' → ./index.html#conditions, 'Our approach' → ./index.html#approach, 'Therapists' → ./index.html#therapists, 'Insurance' → ./index.html#insurance; a Coral 'New patient' → ./newpatient.html. Under 800px: wordmark + new-patient button.
   Layout: Sticky top, height 72px, White/94% blur, Rule border.
3. **Hero** — Two columns. Left: eyebrow 'PHYSICAL THERAPY · [CITY]'; H1 'Stubborn joints,' / '*unstubborned.*' Lead (max-width 500px): '[CLINIC] helps [FOCUS] get back to stairs, gardens, gyms and golf — with a plan you understand from visit one and homework you''ll actually do.' Primary 'Start as a new patient' → ./newpatient.html and secondary 'See the conditions' → #conditions; trust row: 'Direct access — no referral needed for most'; 'Insurance verified before visit two'; 'Self-pay $[SELF_PAY], no packages'. Right: room-treatment.webp (4:3) with the caption 'Room two — where the kneeling happens'.
   Layout: White background, vertical padding 104px top; left 6 cols, right 5 cols offset 1.
4. **Conditions** — Section id='conditions'. Eyebrow 'WHAT WE SEE WEEKLY' and H2 'EIGHT FAMILIAR STORIES.' Eight ConditionCards (icon, name, plain line, journey note in Coral): the roster above. Caption: 'Journeys shown are typical (sample) — yours gets its own honest range on day one.'
   Layout: Slate Mist background. 4x2 grid 20px gap; cards on Card Rule-bordered; icon in a 44px Teal Mist rounded square; journey note 13px Coral. Under 900px: 2 columns, under 600px: one.
5. **Approach and therapists** — Section id='approach'. Eyebrow 'HOW IT GOES' and H2 'LISTEN. TREAT. BRIDGE.' Three StepCards with the connecting line. Section id='therapists'. Eyebrow 'THE TEAM' and H2 'THREE PTS, ZERO DRILLS.' TherapistCards: portrait (4:3, hover scale), name, one-liner specialty, days caption; a note under: 'You''ll see the same PT every visit — continuity is the treatment's best-kept secret.'
   Layout: White background. Steps three columns with a drawing connector; therapists three columns 24px gap; portraits with hover scale and a specialty→one-liner crossfade.
6. **Insurance and footer** — Section id='insurance'. Eyebrow 'THE MONEY PART, ANSWERED' and H2 'NO SURPRISES AT THE FRONT DESK.' InsRows on Card with Good ticks: the four roster rows. A quiet photo beside: room-gym.webp 'Where the bridges get built' (4:3). Footer (Teal Deep, bone text): wordmark + 'Move better · [CITY]'; '88 Shepherd Lane, [CITY]', (612) 555-0172 tel:, hello@ + emailDomain; hours block; bottom line '© [CLINIC]. Journeys shown are typical (sample); your plan is written with you.'
   Layout: Slate Mist for insurance (rows 6 cols, photo 4 cols offset 1 stacked under 900px); footer three-part row.

### New patients (`newpatient.html`)
1. **Masthead** — Solid header. Eyebrow 'NEW PATIENTS', H1 'Let''s start with your story.' Lead: 'Sixty seconds of forms, saved in this browser — the real clinic would send it ahead so your first visit is all assessment, no clipboard.'
   Layout: White background, vertical padding 136px top + 48px, bottom hairline.
2. **Intake form** — The IntakeForm on Card: ConditionSelect (the eight conditions + 'Something else — we''ll figure it out'); HistoryChecks (multi: 'This started after an injury' / 'I''ve had imaging (MRI/X-ray)' / 'Surgery is on the table' / 'I''ve tried PT before'); name + phone; primary 'Send my intake' with caption 'Saved in this browser — nothing is sent here.' Confirmed: the Good check drawing, 'See you soon, [NAME].' 'We''ll call to book your first hour — bring shorts and a question list.' the echoed condition; 'Edit my intake' returning pre-filled. Persisted in localStorage. HoursBlock beside with OpenNowPill and the week's hours (today highlighted).
   Layout: Slate Mist background; form 7 cols, hours 4 cols offset 1; under 900px stacked.
3. **Getting here** — Three quiet rows with icons: MapPin '88 Shepherd Lane — ground floor, no steps to the door'; Car 'Free lot behind the building, and the meters on Shepherd forgive a session''s length'; TrainFront 'Two blocks from the green line; a walk we''d count as a warm-up'. Closing line: 'First visits take an hour. Bring the paperwork energy; we''ll bring the coffee.'
   Layout: White background; rows hairline-divided max-width 720px; closing line centered 48px below.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/room-treatment.webp → public/images/room-treatment.webp (Hero; object-position 50% 55%; alt 'A bright treatment room with a low table and resistance bands'); https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/pt-dana.webp → public/images/pt-dana.webp (Therapist card Dana; alt 'Dana guiding a shoulder stretch, a fictional physical therapist'); https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/pt-marcus.webp → public/images/pt-marcus.webp (Therapist card Marcus; alt 'Marcus watching a patient''s gait, a fictional physical therapist'); https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/pt-lin.webp → public/images/pt-lin.webp (Therapist card Lin; alt 'Lin demonstrating a band exercise, a fictional physical therapist'); https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/room-gym.webp → public/images/room-gym.webp (Insurance side; alt 'A rehab gym corner with racks, bands and a treadmill'); https://media.vibefather.ai/assets/a35d3b49-4f19-45ea-be6d-2a4e4d5ee899/room-wait.webp → public/images/room-wait.webp (New-patient side small; alt 'A calm waiting corner with two chairs and plants'). Six files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/nunito and @fontsource-variable/source-sans-3 (OFL-1.1) and lucide-react (ISC). Therapist portraits are AI-generated fictional people per the portrait rules; no patients appear in any photo.
- icon: lucide-react only: Activity, Bone, Footprints, Dumbbell, PersonStanding, Keyboard, Waves, HeartPulse, Check, MapPin, Car, TrainFront. Stroke width 1.75, 16–24px, color inherits. The journey dots, drawn ticks, chips and favicon are SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 9 filled #1F7A6D, a Card (#FFFFFF) bridge-glyph (a gentle arch). No other logo: the clinic name is always set as type.
- font: Install @fontsource/nunito and @fontsource-variable/source-sans-3 and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the journey dots, drawn checks, step connector, chips, the favicon. No other bitmaps beyond the six photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the intake saves in the browser only (localStorage) and says so; tel: links are built from the phone digits.
- Every internal link points to a file name (./index.html, ./index.html#conditions, ./index.html#approach, ./index.html#therapists, ./index.html#insurance, ./newpatient.html) — never to a bare directory.
- No diagnosis, cure or guaranteed-outcome language: conditions are described experientially, outcomes as typical journeys with (sample) labels, and the copy says individual plans are written with the patient.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 10 MB.
- No real clinics, hospitals or insurers (networks described generically, no insurer logos); therapist portraits are AI-generated fictional people, not any real individual; no patients or faces in any photo; no readable signage.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion: no scales, connector draws, pops or staggered reveals; everything at rest; color/border hovers stay.
- The site must work at 1440x900 desktop and 390x844 mobile with zero console errors; selects, checkboxes and the form work with keyboard only and visible focus rings.
- Keep copy warm and plain: no lorem, no 'holistic healing journey'; every condition, hour and fee lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/physical-therapy-clinic-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
