# Hot Air Balloon Rides Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a dreamy single-page site for [BRAND], an invented hot air balloon ride company. A balloons-at-dawn photograph anchors the hero over a slowly drifting peach-to-lilac gradient, followed by a flight-morning timeline (meet, inflate, fly, toast), three flight packages, a gift voucher card, a drawn weather explainer with sample conditions, and a booking request form that saves locally with month chips.

- Audience: Gift-givers, couples and [AUDIENCE] choosing a dawn flight over [REGION], plus small ride operators who need an elegant page that explains the morning and captures a request.
- Goal: Turn a vague daydream into a concrete morning: show the timeline, set expectations with sample weather, price the options, and collect a booking request saved in the browser.
- Tone: Light, calm, a little poetic; specifics do the dreaming — dew, the burner roar, first light. Never over-promise: weather is explained, not forecast. Rewrite all copy to fit the supplied variables.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource/cormorant-garamond (OFL), @fontsource-variable/jost (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Vite with base './', React 18, TypeScript and Tailwind CSS 3.4; vite.config sets base './' and build.sourcemap: false.
  - Keep packages, timeline steps, weather cards, FAQs and all page copy in src/content.ts, derived from the variable values.
  - Import @fontsource/cormorant-garamond (300, 400, 500 plus italics) and @fontsource-variable/jost (300, 400, 500) in src/main.tsx; map them to heading and body fonts in tailwind.config.js.
  - Define the Dawn Peach, Dawn Lilac, Sky Cream, Dusk Plum, Apricot and Morning Gold tokens in tailwind.config.js; gradient-drift and float keyframes live in src/index.css.
  - Render one fixed, oversized gradient layer (twice viewport height, peach to lilac) behind all sections and animate its background-position over 32s ease-in-out alternate; under prefers-reduced-motion it renders a static blend.
  - Run the booking request with React state plus localStorage key booking-request.v1; no routing or state-management libraries.
  - Draw weather icons, balloon motifs and the favicon as original inline SVG; the favicon is a 32px lilac rounded square with an apricot balloon.
  - Set a plain document title from [BRAND] and the favicon above; add no other metadata.

## Variables
- [BRAND] — Company name (default: "Firstlight Balloons"). The invented ride company; used in the wordmark, copy and footer.
- [REGION] — Flight region (default: "the Amber Valley — vineyards, river bends and stone villages"). The landscape flown over; the hero kicker, timeline and packages all speak of it.
- [AUDIENCE] — Who flies (default: "couples, photographers and slow travelers"). The guests the site speaks to; rewrite packages and FAQs for them.
- [CAPACITY] — Basket capacity (default: "10"). Maximum guests in a shared basket; packages copy and the party-size stepper use it.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/hot-air-balloon-rides-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Dawn Peach `#FFC9B3` — Top of the drifting gradient and hero washes.
- Dawn Lilac `#C9A8E0` — Bottom of the gradient, accents and ribbons.
- Sky Cream `#FFF9F3` — Page ground, cards and panels over the gradient.
- Dusk Plum `#46365B` — Headlines, body text and hairlines.
- Apricot `#EE8A63` — Primary CTA, focus rings and balloon motifs.
- Morning Gold `#F2C94C` — Small highlights: stars, the voucher ribbon, step times.

### Typography
- Display / headlines: Cormorant Garamond (OFL), weights 300/400/500
- Body / UI text: Jost Variable (OFL), weights 300/400/500

### Layout & motion
- Spacing: Airy and light: 112px section padding on desktop and 64px on mobile, a 1160px container, 40px gaps, body line-height 1.8.
- Radius: Soft throughout: 24px cards and photo frames, 999px pills and chips, 12px inputs.
- Motion: The dawn gradient drifts: a fixed oversized peach-to-lilac layer animates background-position over 32s alternate; frozen to a static blend under prefers-reduced-motion.
- Motion: Balloon motifs bob: small drawn SVG balloons float 8px up and down on 7-10s staggered loops; timeline photos shift 6px with scroll parallax.
- Motion: Scroll reveals: sections fade and rise 24px over 0.6s with an 80ms stagger; the timeline hairline draws its length whileInView.
- Motion: Micro-interactions: month chips glow softly on select, the party-size stepper counts with a 150ms slide, inputs glow Apricot on focus.
- Imagery: Golden-dawn photography in one warm grade — balloons over landscapes, a dewy meadow, the burner glow, a landing toast — with passengers only as distant, unidentifiable figures and balloon envelopes plain or gently striped, never marked. Weather icons and balloon motifs are delicate line-drawn SVG in Dusk Plum with Apricot highlights.

## Pages & Sections
### [BRAND] dawn flights (`index.html`)
1. **Header and navigation** — Left, the wordmark: [BRAND] in Cormorant Garamond 500 with wide tracking. Center navigation: The flight, Packages, Good mornings, Gift vouchers. Right, an Apricot pill reading Request a flight. On mobile a Menu button opens a Sky Cream sheet with the same anchors that closes after selection.
   Layout: An 80px header sits absolute over the hero and gains a translucent Sky Cream backdrop plus a hairline plum rule after 24px of scroll. Anchors are ./index.html#flight, #packages, #weather, #gift and #book.
   Motion: The backdrop blur fades in on scroll; nothing in the header animates on its own.
2. **Hero with balloons at dawn** — Full-viewport hero-balloons.webp — balloons over the valley at dawn — blended at its bottom edge into the page gradient with a peach-to-lilac wash. Kicker in Jost 500 uppercase: Dawn flights over [REGION]. Headline in Cormorant 300 on two lines: Up before the sun. Gently. — with Gently in italic. Subline: One hour of standing still while the world turns under you. CTAs: Apricot pill Request a flight and ghost pill See the morning. A cream card carries three floating chips: one hour aloft, up to [CAPACITY] guests a basket, sparkling toast on landing.
   Layout: The photo covers the viewport; the text block sits bottom-left over the wash where contrast is safe; the chip card wraps under the CTAs at 390px; two small drawn balloon SVGs drift at the photo's top right. Alt text: Hot air balloons drifting over a misty valley at dawn.
   Motion: Text rises 28px on load over 0.8s; balloon motifs bob on 8s loops; the wash breathes with the page's gradient drift.
3. **Flight morning timeline** — Headline: A flight morning, step by step. Four steps along one hairline, each with a photo and two lines. 5:30 — Meet in the meadow: dew, coffee from a thermos, a basket lying on its side (meet-field.webp). 5:50 — Unfold and inflate: the envelope wakes up and the burner roars once (inflate.webp). 6:10 — Lift off at first light: the ground lets go and [REGION] turns gold underneath (aloft.webp). 7:40 — Toast on landing: orange juice in real glasses at a folding table, feet back on grass (toast.webp).
   Layout: Four columns over a single 1px Dusk Plum hairline that connects the step dots; photos are 4:3 with 24px radius; step times sit in Jost 500 uppercase on Morning Gold.
   Motion: The hairline draws left to right whileInView; each step fades up 100ms apart; photos shift 6px with scroll parallax.
4. **Flight packages** — Headline: Ways to go up. Three cards on Sky Cream. Shared Dawn Flight, $189 a guest: join a basket of up to [CAPACITY], one hour aloft, crew photos and the landing toast included. Private Basket for Two, $840: your own balloon and pilot, a longer line when the winds allow. Valley Explorer, $240 a guest: the extended route down the river bends and a picnic-style toast at the farm gate. Feature lists hold four items each, bulleted with a tiny drawn balloon.
   Layout: Three equal cards with 24px radius; the middle card rises 16px and is ringed in Dawn Lilac with a Most chosen ribbon; each card CTA scrolls to #book with that package preselected.
   Motion: Cards fade and rise whileInView with an 80ms stagger; the ribbon sways 3deg once.
5. **Gift voucher** — A split card rotated -1deg as a whole. Left, voucher-balloon.webp in a 3:4 frame under a Morning Gold ribbon reading Give the sunrise. Right: The gift that is impossible to re-gift — a $189 voucher for any shared dawn flight, delivered as a printable card and open for every season. Small print: vouchers are honored for any flight morning the crew confirms. CTA: Reserve a voucher, which jumps to #book with the voucher box checked.
   Layout: A two-column card at 40/60 on Sky Cream, floating over the gradient with a soft lilac shadow.
   Motion: The card rises 24px whileInView; the ribbon sways once.
6. **Weather explainer** — Headline: What makes a good morning. Sub: Sample conditions the crew looks for — your morning is confirmed with a call the evening before. Four cards with drawn line icons. Calm surface: wind under 10 km/h, flags barely lifting. Dry air: no showers within sight of the meadow. Clear horizon: five kilometers of visibility, hills readable. Settled cool: steady morning air before the thermals wake. Footnote: No forecasts here — just what a flyable morning looks like.
   Layout: Four equal cards on translucent Sky Cream with 48px line-drawn SVG icons in Dusk Plum with Apricot highlights; the footnote runs full width beneath.
   Motion: Icons draw themselves once (stroke-dashoffset) as cards enter; cards fade up with a 70ms stagger.
7. **Booking request form** — Headline: Request a flight morning. Above the form, a preselect line shows the chosen package or voucher as a removable chip. Fields: name, email, party size stepper from 1 to [CAPACITY], month chips from April to October with up to three selectable, morning preference (First light or Sunrise, radio), and notes. Submit: Save booking request. The form then swaps to a confirmation card: Saved in this browser only — nothing is sent, and this demo does not book real flights, with Edit and Clear buttons below. State persists in localStorage key booking-request.v1.
   Layout: A two-column card on Sky Cream; the stepper and chip row span full width on mobile; month chips wrap; focus states glow Apricot.
   Motion: Month chips glow softly on select; the stepper counts with a 150ms slide; the confirmation rises 16px with a soft check drawing once.
8. **Frequently asked questions** — Four accordions. What should I wear? Layers you can shed — mornings start cool and end warm; boots for dewy grass, a hat for burner heat. Can children fly? From age six, with an adult, tall enough to see over the basket rim. What if the weather says no? We simply re-book you — any morning, no fee, no expiry. Is it safe? Licensed pilots with thousands of hours, a briefing before every flight, and a crew that follows on the ground.
   Layout: A single 760px column with hairline Dusk Plum separators; a Plus rotates to an X while open; one row open at a time.
   Motion: Answers expand over 0.3s with height animation.
9. **Footer** — The gradient deepens toward lilac. Centered: the [BRAND] wordmark in Cormorant 500, then 2 Brindle Meadow Lane, Amber Valley. Small print: Booking requests in this demo stay in your browser. Anchors repeated: The flight, Packages, Good mornings, Gift vouchers. The optional [CREDIT] link goes last.
   Layout: A single centered column about 96px tall; hairline rules at 30% Dusk Plum.

## Assets
- image: Template photos made for this design, free to redistribute with the template. Download each with curl -L -o into public/images/: https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/hero-balloons.webp → public/images/hero-balloons.webp (Hero; alt Hot air balloons drifting over a misty valley at dawn); https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/meet-field.webp → public/images/meet-field.webp (Timeline step 1; alt A laid-out balloon envelope and basket on a dewy meadow at first light); https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/inflate.webp → public/images/inflate.webp (step 2; alt A half-inflated balloon envelope lit by its burner against a dawn-blue sky); https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/aloft.webp → public/images/aloft.webp (step 3; alt Balloons floating low over golden fields and a river bend at sunrise); https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/toast.webp → public/images/toast.webp (step 4; alt A folding table with glasses and fruit in a landing meadow in morning sun); https://media.vibefather.ai/assets/5302d894-057b-491d-a177-30a72f0a8a09/voucher-balloon.webp → public/images/voucher-balloon.webp (Gift voucher; alt A single striped balloon centered against a peach dawn sky). All six share one golden-dawn grade; no markings on envelopes, no logos, passengers only distant.
- image: Write ASSETS.md at the project root with a table: path, source URL, author, license — one row per photo (source media.vibefather.ai, made for this template; author VibeFather; license Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template), plus rows for @fontsource/cormorant-garamond and @fontsource-variable/jost (OFL-1.1) and lucide-react (ISC).
- icon: lucide-react (ISC) for UI strokes: Plus, Minus, X, Check, Gift, ArrowRight (stroke width 1.75, 16-24px, color inherits). Weather condition icons, balloon bullets and motifs, the voucher ribbon glyph and the favicon are original line-drawn SVG; no other icon packs, no brand marks.
- font: Install @fontsource/cormorant-garamond and @fontsource-variable/jost and import them in src/main.tsx as listed in Setup; Vite bundles the woff2 files into dist/. Never load fonts from fonts.googleapis.com or any CDN.
- image: Drawn in code: the four weather condition icons, balloon bullets and floating motifs, the timeline dots and hairline, and the favicon are original inline SVG. No other bitmaps beyond the six photos; no maps, no external artwork.

## Don'ts
- Do not copy or reference any real balloon operator, festival or launch site; the company, meadow, valley and crew are entirely invented.
- Do not present forecasts, live weather or any weather API; the weather section is a static explainer with sample conditions and says so.
- Do not show identifiable passengers or faces turned to camera, and no logos or markings on balloon envelopes; people appear only distant and unidentifiable, in images and alt text alike.
- Do not use real dates, years or a date picker; booking uses month chips only.
- Do not transmit anything: the booking request saves to localStorage only and is labeled plainly; no payments, no booking engine, no email capture.
- Do not add a backend, server code, API routes, databases, auth, form submission, third-party APIs or analytics; the site runs as static files.
- Do not use stock-photo sites, placeholder-image services, hotlinked assets, CDN scripts, CDN stylesheets or external font URLs; only the six generated photos downloaded into public/images/ plus code-drawn SVG.
- Do not load commercial fonts or fonts from Google or Adobe CDNs; self-host Cormorant Garamond and Jost through Fontsource only.
- Do not ship source maps or src/ inside dist/, exceed 20 MB in dist/, use absolute asset paths, or change the fixed build command npm run build.
- Do not use bare-directory internal links; the single page stays at index.html with ./index.html# anchors.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemaps or keyword-stuffed headings; a plain [BRAND] title and the favicon are enough.
- Do not leave dead controls: package preselect, voucher chip, month chips, stepper, radio, save, edit, clear, accordions and menu must all respond locally; the gradient drift and bobbing motifs respect prefers-reduced-motion.
- Do not allow console errors, horizontal overflow or tap targets under 44px at 1440x900 and 390x844.

---
— Prompt by VibeFather · https://vibefather.ai/t/hot-air-balloon-rides-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
