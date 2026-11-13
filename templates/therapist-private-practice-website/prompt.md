# Therapist Private Practice Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A single-page site for [THERAPIST], a licensed therapist practicing in [CITY] — sessions in person or by telehealth, from $[FEE] with a sliding scale. It must feel like the room itself: approach, specialty areas (framed gently), fees and insurance in plain words, what the first session actually looks like, practice details, and a contact form confirming client-side. One page: index.html with sections (#approach, #areas, #fees, #first-session, #contact). No clinical claims, no outcome promises, no diagnostic language. Everything runs in the browser; nothing is submitted anywhere.

- Audience: Adults who have been 'meaning to look into that' for months: they read at night, fear being judged or sold to, and need the first message to feel safe and small. The page's job is to make writing one sentence feel possible.
- Goal: Receive the first message. Within ten seconds a visitor feels the room's calm and sees the contact CTA; within two minutes they've read what the first session looks like and opened the form.
- Tone: Warm, unhurried, first-person. Plain words for hard things; no clinical vocabulary without a plain-language companion; no cheerfulness about pain.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), motion (motion.dev, import from 'motion/react') (MIT), lucide-react (MIT), tailwindcss (MIT), postcss (MIT), autoprefixer (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), @fontsource/lora (OFL-1.1), @fontsource-variable/nunito-sans (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Scaffold with npm create vite@latest using the react-ts template. One HTML page at the project root: index.html (entry src/main.tsx).
  - vite.config.ts: base './', plugins [react()], build { outDir 'dist', sourcemap false, assetsInlineLimit 0 }. Do not copy src/ into dist/.
  - Tailwind 3.4 through PostCSS, content ['./index.html', './src/**/*.{ts,tsx}']. In tailwind.config.ts add every color under Design to theme.extend.colors with kebab-case keys (sand, warmhaze, card, warmink, taupe, sage-soft, sage-deep, rose-quiet, rose-deep, rule) and fontFamily display ['Lora', 'Georgia', 'serif'], sans ['Nunito Sans Variable', 'system-ui', 'sans-serif']. Set borderRadius DEFAULT to 18px and add maxWidth { container: '1040px' } — a practice page is narrower than a shop.
  - In src/fonts.ts import '@fontsource/lora/500.css', '@fontsource/lora/600.css', '@fontsource/lora/500-italic.css' and '@fontsource-variable/nunito-sans'; import src/fonts.ts and src/index.css from the entry file.
  - File layout: src/content.ts (every string, fee, area line, step and image path, typed), src/lib/brand.ts (therapistSlug = [THERAPIST] lowercased with every run of non-alphanumeric characters replaced by '-', emailDomain = therapistSlug without hyphens + '.com', practiceEmail = 'hello@' + emailDomain), src/lib/storage.ts (safe localStorage get/set wrapped in try/catch, keys prefixed with therapistSlug + ':').
  - State: src/store/contact.ts is a tiny external store (useSyncExternalStore) holding { name, email, line, sent } persisted to localStorage key therapistSlug + ':contact'. A sent note renders a gentle confirmation; 'Write again' clears it.
  - Components in src/components/: Header.tsx (quiet, no sticky urgency — a small top bar), Reveal.tsx (Motion whileInView wrapper, gentle), Eyebrow.tsx, Footer.tsx; Hero.tsx, Approach.tsx, Areas.tsx (AreaCard.tsx), Fees.tsx (FeeRow.tsx), FirstSession.tsx (StepCard.tsx), Details.tsx (HoursRow.tsx), ContactForm.tsx (SentNote.tsx), CrisisNote.tsx. src/pages/Home.tsx composes them.
  - Before the first build, download every image listed under Assets into public/images/ with curl -L -o using the exact file names given. The build itself never fetches anything.
  - public/favicon.svg as described under Assets. index.html: lang en, <meta name='theme-color' content='#F6F1E7'>, <link rel='icon' href='./favicon.svg' type='image/svg+xml'>, <title>[THERAPIST] — Therapy in [CITY]</title>.
  - Write ASSETS.md at the project root as described under Assets.
  - dist/ holds index.html, hashed JS/CSS, the woff2 fonts, favicon.svg and the four images. Keep it under 6 MB.

## Variables
- [THERAPIST] — Therapist name (default: "Elena Marsh"). The invented therapist's name with credentials kept generic ('Lena Marsh, LMFT-style' is wrong — use plain '[THERAPIST], licensed therapist'). Used in the title, byline, email (hello@ + name-slug + .com) and localStorage keys. Never a real person.
- [CITY] — City (default: "Santa Fe, New Mexico"). Where the practice is. Used in the title, hero line, details block and footer. Real cities fine; street invented.
- [FEE] — Session fee (default: "140"). The standard 50-minute session fee as digits. Drives the fees section, the sliding-scale line ('a limited number of sliding-scale places at $90–120') and the FAQ-free honesty copy. Keep it 100–200.
- [MODES] — Session modes (default: "in person and by telehealth"). How sessions happen, lowercase ('in person and by telehealth', 'in person only'). Drives the hero sub-line, the details block and one approach sentence.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/therapist-private-practice-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Sand `#F6F1E7` — Page background throughout — warm, quiet.
- Warmhaze `#EFE8DA` — Alternate section background (Areas, First session), hover fill, chips.
- Card `#FDFBF6` — Area cards, fee rows, the contact panel, sent note.
- Warmink `#3B352C` — Headlines and body text, icon color.
- Taupe `#7A7163` — Secondary text, captions, eyebrows, fee labels.
- Sage Soft `#A9B49C` — Quiet second color: step numbers, area glyph fills, gentle rules.
- Sage Deep `#6F7D62` — Primary buttons, selected states, focus ring, the sent-note check.
- Rose Quiet `#C99A94` — The one warm accent: the contact CTA, italic emphasis marks, the rose detail in photos' captions, hover ticks.
- Rose Deep `#B07D76` — Rose hover and pressed.
- Rule `#E2DAC8` — 1px hairlines, card borders, input borders, dividers.

### Typography
- Display: H1, H2, H3, the therapist name, fee figure, the wordmark — Lora, warm and human: Lora (OFL), weights 500/600
- Text and UI: body, eyebrows, buttons, form fields, captions; tabular numerals for the fee: Nunito Sans (OFL), weights 400/600/700

### Layout & motion
- Spacing: 8px base unit. Container max-width 1040px, centered, side padding 48px desktop, 32px tablet, 20px under 640px. Single column flow with two-column hero and fees. Section vertical padding 96px desktop, 72px under 1024px, 56px under 640px — the most generous spacing of any page this practice has seen. Type scale: H1 clamp(38px, 5.6vw, 64px) Lora 500, line-height 1.08; H2 clamp(26px, 3.6vw, 42px) Lora 500; H3 20px Lora 600; italic phrases in headings use Lora 500 italic (marked *asterisks*, rendered <em>); lead Nunito 400 17.5px / 1.7 Warmink at 90%; body 16px / 1.8 (max-width 62ch); eyebrow Nunito 700 12px uppercase letter-spacing 0.18em Taupe; caption 13px Taupe. Buttons: height 50px, Nunito 700 14px. Primary (contact CTA): Sage Deep fill, Card text. Quiet secondary: 1px Warmink/30% border, Warmink text. Inputs: height 50px, 1px Rule border, Card fill, focus Sage Deep border. Focus ring everywhere: 2px Sage Deep outline with 3px offset.
- Radius: 18px on cards, buttons, inputs, photos and the contact panel — soft corners, nothing sharp on this page. 999px only for pills and dots.
- Motion: Easing: --ease-out cubic-bezier(0.22, 0.61, 0.36, 1) for reveals; --ease-io cubic-bezier(0.65, 0, 0.35, 1) for the form swap. The slowest, gentlest motion of any D-group page — 900ms reveals, nothing bounces, nothing loops.
- Motion: Reveal: blocks wrapped in <Reveal> start at opacity 0, translateY(10px) and settle over 900ms --ease-out when 20% visible (Motion whileInView, viewport once). Siblings stagger 100ms.
- Motion: Hero: the room photo fades in from 96% opacity over 1400ms (no scale — nothing lurches); the H1 lines rise 14px with 180ms stagger; the italic emphasis word draws a 2px Rose Quiet underline once.
- Motion: Area cards: hover lifts 2px only; the small glyph (a leaf, a bridge, a knot — drawn SVGs) fills Sage Soft on hover. No pulses anywhere on this page.
- Motion: First-session steps: the connecting hairline draws downward as the section scrolls (scaleY); step numbers fade in sequentially, 80ms apart, once.
- Motion: Fee rows: the fee figure counts once on reveal (600ms, gentle); the sliding-scale line fades in last.
- Motion: Contact form: invalid submit shakes 3px once (the gentlest shake) with a kind inline line ('An email address helps the reply find you'); sending swaps to SentNote (360ms --ease-io) — a drawn Sage Deep check scaling in softly, 'Thank you, [NAME].' 'A reply usually comes within two days — no newsletters, no follow-up sequence.' and 'Write again' clearing gently. Persisted in localStorage.
- Motion: Links: .link-draw grows a 1px currentColor underline over 320ms on hover and focus-visible.
- Motion: prefers-reduced-motion: reduce — everything renders at rest (no reveals, no draws, no count); color/border hover changes stay. Use CSS @media in index.css plus Motion's useReducedMotion in components.
- Imagery: Calm real photography, all four made for this template in one consistent style: soft natural light, warm sand and sage tones, empty rooms — an armchair by a window, tea things, plants, a hallway. Never a person (no faces, no hands, no silhouettes); no readable text. Every photo uses object-fit cover with the object-position given under Assets, 18px corners, no shadow; photos on Sand get a 1px Rule outline. Captions in Nunito 13px Taupe. Drawn in code: the area glyphs (leaf, bridge, knot, wave, stone, path), step numbers, the sent-check, chips and the favicon. Icons: lucide-react only, stroke width 1.5, used sparingly.

## Pages & Sections
### Practice (`index.html`)
1. **Content file and copy rules** — All copy below is written for the default values ([THERAPIST] = Elena Marsh, [CITY] = Santa Fe, New Mexico, [FEE] = 140, [MODES] = in person and by telehealth). Put every string, fee and list in src/content.ts and render from it. If any variable value differs, rewrite the hero, approach, all six areas, fees, steps and details so they are specific and believable for the new practice, keeping the same structure and counts (3 approach paragraphs, 6 areas, 3 fee rows, 4 steps). All experience-framed language, never clinical: no diagnoses, no outcomes, no 'treatment of'; areas are 'a space to explore'. Facts: sessions 50 minutes, [MODES], $[FEE] standard with sliding-scale places at $90–120; hours Tue–Fri 9–5 (two evenings until 7); the practice is one quiet room at '412 Alameda Court, [CITY]' plus a secure video room; the therapist answers her own email; no crisis line — the CrisisNote reads 'If you are in immediate danger, please call your local emergency number or go to your nearest emergency room — this page is not a crisis service.'
   Layout: n/a
   Motion: n/a
2. **Header** — A quiet top bar, not a navigation machine: left '[THERAPIST]' (Lora 500 19px) over 'Licensed therapist · [CITY]' (10px uppercase Taupe); right two text links only — 'Fees' → #fees, 'First session' → #first-session — and the Rose-to-Sage primary 'Write to Elena' → #contact. No sticky behavior; the page is one gentle scroll. Under 640px: name + the contact button.
   Layout: Relative (non-sticky), height 80px, Sand background, hairline bottom border.
3. **Hero** — Two columns. Left: eyebrow 'A QUIET PLACE TO START'; H1: 'You don''t have to' / '*know what to say.*'; lead (max-width 500px): 'I''m [THERAPIST], a licensed therapist in [CITY]. Sessions happen [MODES] — fifty minutes that belong entirely to you, at whatever pace the week allows.'; the primary 'Write a first note' → #contact with the caption 'One sentence is enough. No forms, no commitment.'; a small line beneath in Taupe: 'Currently welcoming new clients'. Right: room-chair.webp (4:3) with the caption 'The room — the chair by the window is yours'.
   Layout: Sand background, vertical padding 112px top; left 6 cols, right 5 cols offset 1.
4. **Approach** — Section id='approach'. Eyebrow 'HOW I WORK' and H2 'Slower, plainer, yours.' Three paragraphs (Lora-led first lines, Nunito body): 'My approach is conversational first. We talk like people — about your week, your work, the thing you keep almost saying — and the deeper work finds its own way in.' / 'I draw on psychodynamic and mindfulness-based traditions, translated into plain language. You will never leave a session with homework you didn''t help design.' / 'Change, when it comes, tends to look quiet: a shorter pause before the old reaction, a sentence you couldn''t say last month. We notice those together.'
   Layout: Warmhaze background. Single column max-width 640px; first lines in Lora 600 22px, body 16.5px / 1.8; 28px between paragraphs.
5. **Areas** — Section id='areas'. Eyebrow 'WHAT WE MIGHT EXPLORE' and H2 'Areas, not labels.' Six AreaCards, each a drawn glyph (Sage Soft) + title (Lora 600 18px) + two gentle lines: 'Anxiety' — 'the kind that hums under everything; a place to turn the volume knob'; 'Life transitions' — 'new city, new job, new shape of family — thresholds deserve witnesses'; 'Relationships' — 'the ones you''re in, the ones you left, the one with yourself'; 'Work stress' — 'when the job follows you home and sits down'; 'Grief' — 'no timetable, no five stages in order, whatever it is to you'; 'Identity' — 'the questions that don''t fit on forms'. A caption: 'If your something isn''t listed, write anyway — the sentence matters more than the category.'
   Layout: Sand background. 3x2 grid 20px gap; cards on Card Rule-bordered 24px padding; glyph 36px; under 800px: 2 columns, under 560px: one.
6. **Fees and insurance** — Section id='fees'. Eyebrow 'MONEY, PLAINLY' and H2 'Fees and the awkward part, answered.' FeeRows on Card: 'A session' — '50 minutes' — '$[FEE]'; 'Sliding scale' — 'a limited number of places' — '$90–120, no paperwork, just ask'; 'Insurance' — 'I''m out-of-network' — 'superbills provided for reimbursement'. Two plain lines under: 'Payment is by card after each session. If the fee is the reason you''re hesitating, say so in your note — the sliding scale exists exactly for that.' / 'No packages, no pre-paid bundles: one session at a time, always.'
   Layout: Warmhaze background. Rows hairline-divided in a Card panel max-width 680px; the fee figure Lora 600 22px tabular; the two lines 15px Taupe under the panel.
7. **First session** — Section id='first-session'. Eyebrow 'THE FIRST SESSION' and H2 'What it actually looks like.' StepCards with Sage Soft numbers: 1) 'The first ten minutes' — 'Tea if you''re in the room, headphones if you''re not. We go at conversation speed; you can start anywhere, including nowhere.' 2) 'The middle' — 'You talk, I listen, we find the thread together. Questions when they help; silence when that helps more.' 3) 'The last ten minutes' — 'We surface, gently. You''ll leave with a sense of the room and how it feels to be heard in it — no plan is required.' 4) 'After' — 'You decide. If it fit, we find a time; if it didn''t, that''s information too, and I''ll say so kindly.'
   Layout: Sand background. Four steps on a drawing vertical hairline; numbers Lora 28px Sage Deep; titles Lora 600 18px; body 15.5px / 1.75; container max-width 680px.
8. **Practice details** — Eyebrow 'THE PRACTICAL BITS' and H2 'Where and when.' Two quiet columns on Warmhaze: 'In person' — '412 Alameda Court, [CITY]' · 'a quiet ground-floor room; tea and a window' · ' Tue–Thu 9–5'; 'Telehealth' — 'a secure video room, link sent the morning of' · 'Fri 9–5, Tue/Wed evenings until 7' · 'same fee, same fifty minutes'. A soft photo (tea-light.webp) with the caption 'The kettle is usually on'.
   Layout: Warmhaze background continuing; columns 5/5 with 32px gap; photo 4 cols right on desktop stacked under 800px.
9. **Contact and close** — Section id='contact'. Eyebrow 'A FIRST NOTE' and H2 'One sentence is enough.' The ContactForm on Card: name (placeholder 'A name you''d like to be called'), email, and one field with generous height — 'What brings you here, if you''d like to say' (placeholder 'Even ''not sure yet'' is a fine start.'); primary 'Send the note' with the caption 'Saved in this browser — the real page would reach Elena''s own inbox. Nothing is sent here.' SentNote: the drawn check, 'Thank you, [NAME].' 'A reply usually comes within two days — no newsletters, no follow-up sequence.' and 'Write again' clearing gently. The CrisisNote under the form, small and steady in Taupe: 'If you are in immediate danger, please call your local emergency number or go to your nearest emergency room — this page is not a crisis service.' Footer: Sand with a hairline; left the name + 'Licensed therapist · [CITY]'; right hello@ + emailDomain. Bottom line: '© [THERAPIST]. Content on this page is informational, not medical advice.'
   Layout: Sand background. Panel max-width 600px; CrisisNote 32px under the panel, centered; footer hairline-topped, 48px padding.

## Assets
- image: Template photos made for this design (free to redistribute with the template). Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/room-chair.webp → public/images/room-chair.webp (Hero; object-position 50% 55%; alt 'An empty armchair beside a window with soft light and a plant'); https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/tea-light.webp → public/images/tea-light.webp (Details; alt 'A ceramic tea set on a low table in warm light'); https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/hallway-soft.webp → public/images/hallway-soft.webp (Approach side; alt 'A soft-lit hallway with a wooden door ajar'); https://media.vibefather.ai/assets/c1758982-3c2e-4a04-8e28-ab387f18c305/window-plants.webp → public/images/window-plants.webp (Areas side; alt 'Plants on a windowsill with sheer curtains'). Four files in total.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row for each photo (source 'media.vibefather.ai, made for this template', author 'VibeFather', license 'Distributed with the template'), plus rows for @fontsource/lora and @fontsource-variable/nunito-sans (OFL-1.1) and lucide-react (ISC). Never replace photos with stock sites or images with people, faces, hands or readable text.
- icon: lucide-react only: Clock, MapPin, Video, Check, ArrowRight (used sparingly — this page prefers drawn glyphs). The six area glyphs (leaf, bridge, knot, wave, stone, path), step numbers, the sent-check and the favicon are hand-drawn SVG. public/favicon.svg: viewBox 0 0 32 32, a 32x32 rect rx 10 filled #6F7D62, a Card (#FDFBF6) soft-leaf glyph. No other logo: the therapist's name is always set as type; no real directory or license badges.
- font: Install @fontsource/lora and @fontsource-variable/nunito-sans and import them in src/fonts.ts as listed in Setup. Vite bundles the woff2 files into dist/.
- image: Drawn in code: the six area glyphs, step numbers, the sent-check, chips and the favicon. No other bitmaps beyond the four photos; no illustrations; no map tiles.

## Don'ts
- No backend, no form submission, no fetch to any API: the contact note saves in the browser only (localStorage) and the form says so; the crisis note points to local emergency services generically, inventing no hotline numbers.
- All links on this single page are anchors (./index.html#approach, #areas, #fees, #first-session, #contact) plus the footer mailto.
- Self-host everything: fonts through Fontsource, icons as npm packages or inline SVG, images downloaded into public/images/. No CDN <script> or <link> tags, no Google Fonts, no analytics — and no third-party booking widgets or chat bubbles; the page says the therapist answers her own email.
- Production build: minified, no source maps, no src/ copied into dist/, single command npm run build, output in dist/ under 6 MB.
- No clinical claims, outcome promises or diagnostic language anywhere; areas stay experiential; no real therapists, licensing bodies or directory badges; no photos with people, faces, hands or readable text.
- No dates or years anywhere; the site never shows today's date.
- Never mention VibeFather or any other brand inside the site except the optional credit footer link; all copy is invented US English.
- Respect prefers-reduced-motion absolutely — this page's calm is the product: everything renders at rest, nothing loops or pulses; color/border hovers stay.
- The page must work at 1440x900 desktop and 390x844 mobile with zero console errors; the form works with keyboard only and visible focus rings; the textarea gets a comfortable height (4 rows).
- Keep copy human and plain: no lorem, no 'journey of healing' clichés; every fee, hour and line lives in src/content.ts.

---
— Prompt by VibeFather · https://vibefather.ai/t/therapist-private-practice-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
