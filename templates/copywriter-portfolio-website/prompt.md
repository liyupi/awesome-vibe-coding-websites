# Copywriter Portfolio Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A portfolio for a fictional freelance copywriter where typography is the design. Writing samples grouped by type (websites, product pages, email, taglines, long-form), each with the brief, the before and the after side by side and results as sample numbers; a tone-of-voice playground where you pick a brand personality and see one sentence rewritten in that voice; services with packages and turnaround; client quotes; a newsletter sign-up; and contact. Cream #FFF8EC, ink #161616 and a highlighter green #B8F35C used like a marker on key words. No photographs.

- Audience: Founders and marketers at small software and consumer brands who need better words on their site, product pages and emails.
- Goal: Show the difference between average and good copy in the first ten seconds, then get a visitor to the contact form or the newsletter.
- Tone: Plain, exact and a little wry. Short sentences. No marketing adjectives about marketing.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/fraunces (OFL-1.1), @fontsource-variable/hanken-grotesk (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors cream #FFF8EC, edge #EFE6D0, ink #161616, muted #5C5A52, marker #B8F35C; fontFamily display 'Fraunces Variable', sans 'Hanken Grotesk Variable', mono 'IBM Plex Mono'.
  - Highlighter marks are inline spans with a skewed background block (an SVG path or a linear-gradient with hard stops) in marker behind the text, never text colour changes.
  - All copy, samples, voices, packages, quotes and form options live in src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Copywriter's name (default: "Ada Whitlock")
- [CITY] — City (default: "Philadelphia")
- [SPECIALTY] — What you write (default: "websites, product pages and email")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/copywriter-portfolio-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- cream `#FFF8EC` — Page ground
- edge `#EFE6D0` — Before panels, dividers, card edges
- ink `#161616` — Text, buttons, dark band
- muted `#5C5A52` — Secondary text on cream and edge
- marker `#B8F35C` — The single accent: highlighter strokes behind key words, results chips, links on ink; always behind ink text

### Typography
- Display / headlines and pull quotes: Fraunces Variable (OFL), weights 600/900
- Body / UI: Hanken Grotesk Variable (OFL), weights 400/500/600
- Mono / briefs, labels, numbers: IBM Plex Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1160px] px-6; cards p-6 to p-8; 8px rhythm.
- Radius: Cards 6px; buttons pill (rounded-full); chips pill; copy-deck card 10px.
- Motion: Scroll reveals: sections fade up 20px over 450ms, once (Motion whileInView); content is visible by default.
- Motion: Hero: the marker strokes grow from left to right 600ms after the headline appears; the copy-deck card's 'after' line types in 60ms per character once, then the results chip pops in.
- Motion: Sample filter: leaving cards fade 150ms, entering cards fade up 250ms with a 40ms stagger.
- Motion: Tone playground: switching voice cross-fades the sentence 200ms and slides the active personality pill's underline.
- Motion: prefers-reduced-motion: no reveals, typing or stroke animation; everything is shown in its final state at once.
- Imagery: No photographs and no illustrations. The page is carried by type, a code-drawn copy-deck card, oversized quotation marks and highlighter strokes. Flat cream, ink and highlighter green only; no gradients, shadows or textures beyond a 1px edge line.

## Pages & Sections
### Home (`index.html`)
1. **Site header** — Left: wordmark [BRAND] in Fraunces 900 22px ink with a marker stroke behind the surname. Center nav: Samples (→ #samples), Tone playground (→ #playground), Services (→ #services), Contact (→ #contact), Hanken Grotesk 500 14px muted, hover ink. Right: pill 'Work with me' (ink fill, cream text → #contact).
   Layout: Sticky 64px bar on cream/95 with backdrop blur and a 1px bottom hairline ink/10; inner max-w-[1160px]. Mobile: wordmark and a lucide menu button stay on one line at 390px; the menu opens a full-screen cream drawer with the links stacked.
   Motion: Links get a marker stroke on hover 150ms; drawer fades in 200ms.
2. **Hero — the words are the design** — Left: eyebrow IBM Plex Mono 500 12px uppercase tracking-widest muted 'FREELANCE COPYWRITER · [CITY]'. H1 Fraunces 900 at clamp(52px, 7vw, 108px), ink, line-height 0.95: 'I write the words that do the selling.' — with marker strokes behind 'words' and 'selling'. Paragraph 19px muted max-w-[42ch]: 'I'm [BRAND]. I write [SPECIALTY] for brands that would rather sound like a person than a brochure.' Buttons: 'See the before and after' (ink pill, cream text → #samples) and 'Try the tone playground' (ink outline pill → #playground). Right: a copy-deck card drawn in code on white with a 10px radius and a 1px edge border: a header row with mono 'HOMEPAGE HERO · V3' and a green chip 'FINAL'; a 'Before' block on edge with the line 'Unlock the power of effortless financial management for your business' struck through in muted; an 'After' block in Fraunces 600 28px ink reading 'Your books, done by Friday.' with a marker stroke behind 'done by Friday'; a margin note in mono '−9 words. +1 reason to care.'; and a results chip in marker with ink text '+31% trial starts (sample)'.
   Layout: lg:grid-cols-[52%_48%] gap-12 items-center, min-h-[calc(100vh-64px)], py-14. The card is rotated −1deg and has a second sheet of paper behind it offset 12px (edge colour). A 240px Fraunces 900 quotation mark in marker sits behind its top-left corner. On mobile: text first, then the card upright at full width.
   Motion: Headline fades up 500ms, marker strokes grow 600ms, the 'After' line types in once and the chip pops in 250ms.
3. **Client line** — One row: mono label 'SELECTED CLIENTS' and the names Tallyhouse, Fieldwork, Driftwood Coffee, Pedal Post, Harrow & Sons set in Fraunces 600 20px ink/70, separated by small marker dots.
   Layout: py-10 with 1px top and bottom hairlines ink/10; names wrap on mobile.
   Motion: None.
4. **Writing samples — before and after** — id="samples". H2 Fraunces 900 56px 'Same brief. Different words.' Filter chips: All, Websites, Product pages, Email, Taglines, Long-form. Sample cards, each with: a mono line 'BRIEF' and the brief; two columns headed 'Before' and 'After'; and a results row of chips with a mono note 'Sample numbers'. Data from content.ts — Websites: brief 'Homepage headline for Tallyhouse, a bookkeeping app for freelancers'; before 'Unlock the power of effortless financial management for your business'; after 'Your books, done by Friday.'; results '+31% trial starts', '−12% bounce'. Websites: brief 'Pricing page intro for Fieldwork, a project tracker'; before 'Flexible pricing plans designed to scale with your team's needs'; after 'Pay for the people who log in. Nobody else.'; results '+9% plan upgrades'. Product pages: brief 'Product page for the Fieldwork standing desk'; before 'Ergonomic solutions for the modern workspace'; after 'A desk that remembers you like to stand at 2pm.'; results '+18% add-to-cart', 'Returns −6%'. Email: brief 'Win-back email for Driftwood Coffee subscriptions'; before 'We miss you! Come back and get 20% off!!!'; after 'Your grinder misses the good stuff. Here's 20% off your next bag.'; results '41% opens', '9% orders'. Taglines: brief 'Tagline for Pedal Post, a same-day bike courier'; before 'Fast. Reliable. Professional.'; after 'There by lunch, sweat included.'; results 'Used in 3 campaigns'. Long-form: brief 'About page for Harrow & Sons, a family hardware store'; before 'We are a family-owned business committed to excellence and customer satisfaction'; after 'Three generations of telling people the truth about their plumbing.'; results 'Avg. time on page 3:40'.
   Layout: Cards on white with a 1px edge border and 6px radius, p-6, grid lg:grid-cols-2 gap-6; inside each card the before and after columns are lg:grid-cols-2 with a 1px divider; the before text sits on edge in muted with line-through, the after text in Fraunces 600 26px ink with a marker stroke on its key phrase; results chips in marker with ink mono 13px text.
   Motion: Filter animation as described in motion; cards fade up staggered 60ms.
5. **Tone of voice playground** — id="playground". An ink band, cream text. H2 'One sentence, six voices.' Left: the sentence to rewrite in Fraunces 600 32px cream: 'Our new app helps you save money without thinking about it.' Under it a sentence picker of three mono options: 'Savings app', 'Standing desk', 'Coffee club'. Personality pills: Warm, Wry, Direct, Playful, Premium, Plain. Right: a result card on cream with the rewritten sentence in Fraunces 900 clamp(28px, 3vw, 44px) ink, a mono line naming the voice, a one-line note on what that voice does, and a button 'Copy this line' (lucide copy icon) that writes the sentence to the clipboard and shows 'Copied' for 2 seconds. Rewrites for the default sentence — Warm: 'Put a little aside each week and watch it add up, gently.'; Wry: 'Saving money, minus the spreadsheet you'll abandon in March.'; Direct: 'It moves spare change into savings. You don't have to do anything.'; Playful: 'Your loose change, finally doing something with its life.'; Premium: 'Quiet, considered saving, handled with care.'; Plain: 'The app saves small amounts for you automatically.' Voice notes — Warm: 'Speaks to one person and never rushes.'; Wry: 'Adds one joke. Never two.'; Direct: 'Says what happens, then stops.'; Playful: 'Gives the product a personality.'; Premium: 'Fewer words, slower pace.'; Plain: 'The shortest sentence that is still true.' content.ts holds the full 3 × 6 set for the other two sentences in the same voices.
   Layout: lg:grid-cols-2 gap-12 py-20 inside the band; pills in one wrapping row with marker text on the active pill and an ink fill; result card p-8 with a 6px radius.
   Motion: Switching voice or sentence cross-fades the result 200ms.
6. **Services and packages** — id="services". H2 'Three ways to work with me.' Three cards: 'Website copy — from $2,400 · 2 to 3 weeks' with items 'Sitemap and message hierarchy', 'Every page, written and revised once', 'Handover notes for your designer'; 'Product pages — from $900 per page · 1 week' with items 'One page, one job', 'Headlines, body and FAQ', 'Two rounds of edits'; 'Email sequences — from $1,200 · 10 days' with items 'Up to five emails', 'Subject line options for each', 'A plain-text version included'. A line under the cards muted 15px: 'Fixed quotes before we start. No hourly billing.'
   Layout: grid md:grid-cols-3 gap-6; prices in Fraunces 900 32px ink; the middle card has an ink fill with cream text and marker bullets.
   Motion: Cards fade up staggered 80ms.
7. **Client quotes** — H2 'What clients say.' Three quotes in Fraunces 600 24px ink with a marker opening quotation mark: '“The homepage paid for itself in a month. I stopped explaining what we do on calls.”' — Priya Raman, founder, Tallyhouse; '“She deleted half my copy and it suddenly made sense.”' — Jonas Feld, product lead, Fieldwork; '“People reply to our emails now. To a coffee shop.”' — Marisol Vega, owner, Driftwood Coffee.
   Layout: grid md:grid-cols-3 gap-8; names in mono 13px muted.
   Motion: Quotes fade up staggered 90ms.
8. **Newsletter and contact** — id="contact". Left: H2 'One email a month.'; line muted: 'I take one real sentence from the wild, rewrite it, and explain why. No links to buy anything.' An email input and a button 'Sign up' (ink fill). A valid email is required; the error shows inline. On success: 'You're on the list. This is a sample form, so nothing was sent.' Right: H2 'Tell me what you need writing.'; a form with Name, Email, 'What is it?' checkboxes (Website, Product pages, Email, Not sure yet), 'Budget' radio pills (Under $2,000 / $2,000–5,000 / $5,000+ / Not sure yet), 'A few lines about the project' textarea and 'Send' (ink fill). Name, a valid email, at least one 'What is it?' and a message of 20+ characters are required; errors show inline in a note under the field. On success: 'Thanks, <name>. This is a sample form, so nothing was sent.'
   Layout: lg:grid-cols-2 gap-12; inputs have a 1px ink/25 border, 6px radius, cream background and a 2px ink focus ring; newsletter fields share one row on desktop.
   Motion: Columns fade up staggered 90ms; success messages fade in 200ms.
9. **Footer** — Wordmark [BRAND], nav repeat, small print 13px muted: 'Copywriting for [SPECIALTY] · [CITY]' and 'Clients, results and quotes on this site are invented sample content.' plus [CREDIT].
   Layout: Grid md:grid-cols-3 gap-8 py-12 with a 1px top hairline ink/10.
   Motion: None.

## Assets
- image: None. No photographs or illustrations: the copy-deck card, quotation marks, marker strokes and dots are drawn in code with HTML, CSS and inline SVG.
- icon: lucide-react npm package (ISC): menu, x, copy, check, arrowRight, arrowDown. No other icon sets, no brand logos anywhere.
- font: Fontsource packages (OFL-1.1): @fontsource-variable/fraunces, @fontsource-variable/hanken-grotesk and @fontsource/ibm-plex-mono, imported in main.tsx. No font CDN links.

## Don'ts
- No backend: no server code, API routes, databases, auth, or forms that submit anywhere. The newsletter and contact forms are local samples that say so in their confirmation.
- Clients, results, quotes and people are invented sample content; no real brands, campaigns or slogans may be used, and results always carry the word 'sample'.
- No photographs, stock imagery or illustrations; the page is carried by type and code-drawn elements.
- No gradients, shadows, glass effects, emoji or glowing elements; flat cream, ink and marker only, with 1px hairlines.
- Highlighter green is always a stroke or chip behind ink text, never the colour of small text on cream.
- Self-host everything: fonts via Fontsource packages, no CDN script or link tags, no Google Fonts, no analytics.
- Vite base './' with relative asset paths; internal links are anchors on index.html (#samples, #contact), never bare directories.
- Production build minified with no source maps; dist/ under 20 MB.
- prefers-reduced-motion: no reveals, typing or stroke animation; all text is shown in its final state at once. Never hide a whole element with clip-path or zero opacity while waiting for an in-view trigger.
- Tailwind opacity utilities use the default scale (for example /10, /70, /95); custom steps are written as arbitrary values.
- No SEO work: a plain <title> with [BRAND] and a favicon are enough; no meta descriptions, Open Graph tags, JSON-LD or sitemaps.
- No copied code, copy or fonts from any reference site; no brand names in template names, slugs, copy or alt text.

---
— Prompt by VibeFather · https://vibefather.ai/t/copywriter-portfolio-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
