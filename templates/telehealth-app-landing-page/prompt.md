# Telehealth App Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a polished single-page landing site for [BRAND], a fictional [CARE_FOCUS] app for [AUDIENCE]. Pair an interactive booking phone and video-visit phone with care-topic browsing, a three-step product walkthrough, sample self-pay and insurance pricing, an honest static-demo privacy section, FAQs, and generic mobile download actions.

- Audience: People seeking non-emergency [CARE_FOCUS], plus founders and product teams presenting a clear, trustworthy mobile care service to [AUDIENCE].
- Goal: Help visitors understand the product, try realistic booking and video-visit interactions, compare illustrative costs, and preview the mobile download path without submitting information or implying medical outcomes.
- Tone: Warm, precise, calm, and plain-spoken. Reassuring without fear-based urgency, diagnoses, treatment promises, insurance guarantees, or unsupported trust claims. Rewrite all care roles, topics, interface copy, and FAQs to fit the supplied variables.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: @fontsource-variable/fraunces (OFL), @fontsource-variable/inter (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite with base: './', React, TypeScript, and Tailwind CSS; keep all copy and sample data in src/content.ts and derive it from the supplied variable values.
  - Import @fontsource-variable/fraunces and @fontsource-variable/inter in src/main.tsx; define color tokens, shared component classes, and keyframes in src/index.css.
  - Use React state for booking, video controls, care-topic selection, the three-step preview, pricing, FAQ, mobile navigation, and the download toast; do not add a state-management library.
  - Create original inline SVG icons as small React components and build all phone and product visuals with semantic HTML and CSS.
  - Configure the production build with sourcemap: false and output to dist/; keep every asset and internal path relative.
  - Set a plain document title from [BRAND] and an original inline SVG favicon; do not add other metadata.

## Variables
- [BRAND] — Brand (default: "Avelune Health"). An invented virtual-care brand used in the header, product screens, copy, and footer.
- [AUDIENCE] — Audience (default: "adults managing everyday health needs"). The people the service is designed for; rewrite examples and interface copy for them.
- [CARE_FOCUS] — Care focus (default: "everyday primary care"). The non-emergency care category presented by the app.
- [VISIT_PRICE] — Self-pay visit price (default: "$39"). An illustrative per-visit price including the currency symbol.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/telehealth-app-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Canvas `#F4F7F3` — Warm off-white page background and quiet sections.
- Surface `#FFFFFF` — Cards, phone screens, input rows, and accordion surfaces.
- Ink `#15332F` — Headings, primary text, and dark icon strokes.
- Muted `#566C66` — Secondary copy and metadata with readable contrast.
- Teal `#176B5E` — Primary buttons, selected controls, links, and active progress.
- Mint `#DCEFE7` — Soft panels, selected chips, and the download CTA.
- Coral `#E9846B` — Small decorative accents and active status dots only, never body text.
- Night `#102D2A` — Privacy section background and video-call chrome.
- Line `#CFDED7` — One-pixel borders, separators, and dotted hero grid.

### Typography
- Display and section headings; H1 72px desktop / 46px mobile at 0.98 line-height, H2 48px / 36px at 1.05, tracking -0.035em: Fraunces Variable (OFL), weights 500/600
- Body 16–18px at 1.6 line-height, navigation and UI labels 13–15px, buttons 15px semibold: Inter Variable (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use an 8px base scale, a 1180px maximum content width, 32px desktop and 20px mobile gutters, 104px desktop and 72px mobile section padding, 24px card padding, and 44px minimum tap targets.
- Radius: Use 44px phone shells, 30px large feature panels, 20px cards, 14px input and UI rows, and fully rounded chips and primary buttons; keep borders crisp at 1px.
- Motion: On initial load, fade and lift the hero copy by 16px over 450ms, then the two phones by 22px over 550ms with a 100ms stagger; never hide content indefinitely.
- Motion: Reveal major sections once with IntersectionObserver using opacity and translateY(16px) over 400ms, with no scroll-jacking or pinned scenes.
- Motion: Use 180ms opacity and translateX(8px) transitions when changing phone screens or walkthrough steps, and 160ms color or shadow transitions for selected chips and pricing.
- Motion: Animate FAQ answers with a 200ms grid-row expansion and rotate the chevron; animate the download toast in and out over 180ms.
- Motion: Under prefers-reduced-motion, remove reveals, rotations, smooth scrolling, and transitions while preserving every state change and all visible content.
- Imagery: Use no raster images or external artwork. The visual anchor is a pair of rich CSS phone mockups with believable interface rows, a generic faceless line avatar made from original geometric SVG shapes, a dotted background field, and a local-data privacy diagram. All icons are simple original inline SVG strokes; no app-store marks, third-party logos, or recognizable people.

## Pages & Sections
### Telehealth product landing and interactive app preview (`index.html`)
1. **Header and navigation** — Create an original abstract brand mark from four rounded rectangles around a small center dot, never a medical cross, beside [BRAND]. Navigation items are Care topics, How it works, Pricing, and Privacy. The right button reads Try the demo and moves focus to the phone demo. On mobile, a Menu button opens a compact panel with the same anchors and closes after selection.
   Layout: Sticky 76px header with a translucent Canvas background, subtle blur, and bottom Line border. Use the shared 1180px container, brand left, centered desktop navigation, and CTA right. Mobile shows brand and a 44px menu button. Every anchor uses ./index.html#care, ./index.html#how, ./index.html#pricing, or ./index.html#privacy.
2. **Hero with booking and video phones** — Default eyebrow: '[CARE_FOCUS] · Non-emergency video visits'. H1: 'Care that fits into real life.' Body: 'Book a video visit, see what to expect, and stay clear on costs with [BRAND]. Designed for [AUDIENCE], with sample screens you can explore before you download.' Primary CTA: Explore the demo; secondary CTA: See pricing. Add 'Static product preview · No personal or health information required'. Above the phones, a Booking / Video visit segmented control changes emphasis and selects the visible phone on mobile. The booking phone says Book a visit and What would you like to discuss? Include reason chips Cold symptoms, Skin question, and Allergy follow-up; day chips Today, Tomorrow, and Friday; time buttons 9:30 AM, 11:00 AM, and 2:15 PM. Selecting each updates a summary such as Skin question · Tomorrow · 11:00 AM. Review sample visit reveals an inline confirmation: Sample visit ready — no information was sent. The video phone shows Video visit, Mara Ellison · Care clinician, a sample 08:24 timer, a generic faceless line avatar, and three note rows: Discuss symptoms, Ask questions, Agree on next steps. Microphone and camera buttons toggle their local active icons; Visit notes expands the notes panel. Do not request real device access. Adapt the professional role and every topic when the variables change.
   Layout: Use a two-column hero, 0.9fr copy and 1.1fr product stage, vertically centered with 64px top and 80px bottom padding. Set the H1 to a maximum of 560px and body to 520px. The product stage is 620px tall with a soft Mint radial wash, one small Coral orb, and a subtle dotted grid. Render a 278×560px booking phone rotated -3 degrees and a 258×528px video phone rotated 4 degrees, overlapping by 32px with white screens, dark 9px shells, soft layered shadows, speaker slot, and home indicator. Both remain visible on desktop; mobile stacks the copy and shows only the selected 250×500px phone without rotation or horizontal overflow.
   Motion: Use the specified hero entrance. Changing segmented screens crossfades the active phone and moves it forward by 12px; selected reasons, days, and times fill Mint with a Teal border. Never autoplay a call or timer.
3. **Assurance strip** — Three concise assurance pairs: Clear before you book / Sample prices shown up front; Private by default / No form submissions in this demo; Clear boundaries / Not for emergencies — contact local emergency services.
   Layout: A full-width strip with Line top and bottom borders and a three-column shared container. Each cell has a small original SVG icon, a semibold title, and one muted line; stack the cells on mobile with dividers.
4. **Care topics** — Eyebrow: Care topics. H2: Start with what you need today. Intro: Use these examples to choose a conversation, not to self-diagnose. Six selectable cards: Cold & sinus / Talk through symptoms and everyday next steps; Skin questions / Share what you have noticed in a video conversation; Allergies / Discuss triggers, history, and questions to raise; Digestive concerns / Describe changes and decide what to discuss; Medication questions / Review the information you want to ask about; General wellness / Make time for routine, non-emergency guidance. Selecting a card marks it with a check and reveals Selected: [topic] plus an Open sample booking button. That button applies the topic to the booking phone and scrolls to it. Adapt all six topics for [CARE_FOCUS].
   Layout: Give this section id=care. Place the heading and intro in a narrow left column and a small selected-topic status at the right, then use a three-column by two-row card grid with 16px gaps. Cards are white with 20px radius, original 24px line icons, and generous text spacing. Use two columns at tablet width and one on mobile.
   Motion: On hover, lift cards by 3px and strengthen the border; on selection, draw the check with a 180ms stroke transition. Reduced motion removes the lift and drawing animation.
5. **Three-step product walkthrough** — Eyebrow: How it works. H2: From question to conversation in three steps. Step 01 Share what is on your mind / Choose a sample topic and answer a short, non-sensitive prompt. Step 02 Pick a time / Compare example slots and review the illustrative cost. Step 03 Join from your device / Open the video screen and explore the visit controls. Each step is a button that swaps the adjacent product panel among a compact topic form, schedule list, and video UI. Include a progress label Step 1 of 3 and Previous / Next buttons with correct disabled states. All content is fictional sample data derived from the variables.
   Layout: Give this section id=how. Use a 5/7-column grid inside a white 30px-radius panel. Steps sit left with large muted numerals and a small vertical connector; the right side is a 520px-high Mint workspace containing one detailed code-drawn app window. Keep the active step and active screen aligned. On mobile, place the steps as a horizontal three-item selector above a 440px workspace.
   Motion: Swap the workspace with the specified 180ms crossfade and update a thin Teal progress bar. Do not autoplay the steps.
6. **Self-pay and insurance pricing** — Eyebrow: Sample pricing. H2: Know the example cost before the visit. Intro: Compare two fictional pricing paths. These figures are illustrative, not quotes or coverage guarantees. A Self-pay / With insurance toggle changes the emphasized card and summary. Self-pay card: [VISIT_PRICE] per video visit, No membership required, Illustrative price for this demo, Review before confirming. Insurance card: $15 sample estimated copay, Actual coverage varies by plan, Eligibility would need verification, Estimate is not a guarantee. Below the cards, a dynamic note reads Self-pay selected: one sample price with no membership, or Insurance selected: a fictional copay that would require plan verification. Never name real insurers or invent discounts.
   Layout: Give this section id=pricing. Center the heading and toggle, then show two equal white cards in a 760px-wide two-column grid. The active card has a 2px Teal border and a small Selected label; the inactive card remains readable. Put prices on one strong baseline and use three compact detail rows with original check icons. Stack the cards on mobile while preserving the toggle.
   Motion: Use a 160ms border and shadow change when pricing selection changes; do not animate the number or hide either price.
7. **Privacy and trust** — Eyebrow: Privacy in this preview. H2: Explore without handing over personal information. Body: Try every screen without entering a name, email, symptom, or payment detail. This static demo does not request camera or microphone access and sends nothing to a server. Three points: Nothing submitted / Buttons update only this browser preview; No device access / Video and microphone controls are visual demonstrations; Clear boundaries / For emergencies, contact local emergency services instead. Include a small diagram labeled Your device → Local preview → No upload. Do not add security certifications, compliance seals, encryption claims, or unsupported guarantees.
   Layout: Give this section id=privacy. Use a Night 30px-radius panel with white headings, pale Mint body copy, and two columns. The three points stack left; the right contains a large Surface/10 card with three connected diagram nodes, dashed lines, and an original stop icon before No upload. On mobile, stack the content and make the diagram vertical.
   Motion: Reveal the three points with a small stagger. The diagram remains static so its no-upload message is always legible.
8. **Frequently asked questions** — H2: Straight answers before you explore. Accordion items: Can I use [BRAND] in an emergency? / No. This concept is for non-emergency visit topics only. Contact local emergency services for urgent help. Does the booking demo create a real appointment? / No. It only changes the screen in your browser and stores or sends no appointment data. Will my insurance cover a visit? / The $15 copay is fictional sample content, not a coverage estimate. A real service must verify your plan before quoting a price. Can the app diagnose or treat a condition? / This demo provides no medical advice, diagnosis, or treatment. It only shows how a visitor might navigate a virtual-care app. What happens when I select a download button? / A message explains that this is a static preview. No app store opens and no file is downloaded. Rewrite answers for the alternate care focus without weakening these boundaries.
   Layout: Use a two-column layout with the heading and a short Non-emergency care only note on the left and five white accordion rows on the right. Open the first item initially, allow only one open item, and provide aria-expanded plus keyboard-operable buttons.
9. **Download preview and footer** — H2: Take the calmer care experience with you. Body: Preview the iOS and Android download paths for [BRAND]. Use two original buttons labeled Download for iOS / App preview and Get the Android app / App preview, with generic smartphone and download SVG icons rather than platform badges. Either button opens a dismissible toast: Static preview: no download is available. Footer: [BRAND], Non-emergency virtual-care concept. All names, prices, and screens are fictional samples. Repeat the four navigation anchors and include the optional [CREDIT] link.
   Layout: Center the CTA in a Mint 30px-radius panel with 64px desktop and 40px mobile padding. Place two dark pill buttons side by side and stack them full-width on mobile. Put the toast at the bottom center above a safe-area offset. Finish with a simple footer row, brand and disclaimer left, navigation right, and credit below.
   Motion: Fade and lift the toast over 180ms, keep it visible for four seconds unless dismissed, and never navigate away or initiate a download.

## Assets
- image: Do not use raster or downloaded images. Draw both phones, every app screen, the generic faceless avatar, decorative fields, and the privacy diagram with React, CSS, and original inline SVG. Record these as original code-drawn visuals in ASSETS.md.
- icon: Draw all interface icons as original inline SVG strokes inside React components; do not use brand marks, app-store badges, third-party logo packs, or external icon files. Document the original SVG artwork in ASSETS.md.
- font: Self-host Fraunces Variable and Inter Variable through @fontsource-variable/fraunces and @fontsource-variable/inter. In ASSETS.md, list both package names, https://www.npmjs.com/package/@fontsource-variable/fraunces and https://www.npmjs.com/package/@fontsource-variable/inter, Fontsource as package author, and OFL-1.1 for the fonts.

## Don'ts
- Do not copy or reference an existing telehealth product, brand name, logo, slogan, copy, proprietary app screen, or signature illustration.
- Do not use official app-store badges, Apple or Google logos, real insurer names, third-party logo packs, commercial fonts, or restricted assets; use only the specified original SVG icons and self-hosted OFL fonts.
- Do not make diagnoses, treatment or outcome claims, efficacy promises, insurance guarantees, emergency-care promises, or unsupported security, privacy, certification, or compliance claims.
- Do not use real patient or clinician identities, photographs, likenesses, testimonials, credentials, ratings, download counts, or usage numbers; all sample people and content must be fictional and non-identifiable.
- Do not request, collect, transmit, or persist real names, contact details, health information, payment details, camera data, or microphone data; all interactions are local static-demo state.
- Do not add a backend, server code, API routes, databases, authentication, real appointment booking, real video calls, external form submission, third-party APIs, analytics, or actual downloads.
- Do not use stock photos, raster artwork, placeholder-image services, hotlinked assets, CDN scripts, CDN stylesheets, external font URLs, or any network dependency in the rendered demo.
- Do not leave dead controls: reason, day, time, review, video toggles, care topics, step navigation, pricing, FAQ, mobile menu, download buttons, and toast dismissal must all produce the specified local response.
- Do not use bare-directory internal links; keep the single page at index.html and use the specified ./index.html#... anchor links with relative asset paths.
- Do not ship source maps, copy src/ into dist/, exceed 20 MB in dist/, or change the fixed build command npm run build.
- Do not add SEO metadata, Open Graph tags, JSON-LD, sitemaps, or keyword-stuffed headings; use only the plain [BRAND] document title and original favicon.
- Do not allow horizontal overflow or console errors at 1440×900 and 390×844; preserve 44px tap targets, readable contrast, keyboard focus, and prefers-reduced-motion behavior.

---
— Prompt by VibeFather · https://vibefather.ai/t/telehealth-app-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
