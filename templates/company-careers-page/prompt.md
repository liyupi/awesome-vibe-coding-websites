# Company Careers Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A careers site for a fictional climate-tech company: mission and culture, a benefits grid, team stories, open roles with department and location filters, a role page with a structured application form and CV chip, a hiring process timeline, and a talent community sign-up. Office and team photographs from one shoot, with people far away or from behind. Forest #1B4332, mint #95D5B2 and sunshine #FFD23F on white.

- Audience: Engineers, technicians, designers and operators considering joining a small climate-tech company.
- Goal: Make the mission and the culture concrete in one scroll, then get a visitor to the right role and a completed application.
- Tone: Warm and plain, like a colleague explaining the job: specific perks, real names, no recruiting slogans.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/red-hat-display (OFL-1.1), @fontsource-variable/manrope (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors forest #1B4332, mint #95D5B2, mintTint #E9F5EE, sunshine #FFD23F, white #FFFFFF, ink #12261F, muted #4F6159, line #DDE6E1; fontFamily display 'Red Hat Display Variable', sans 'Manrope Variable', mono 'IBM Plex Mono'.
  - A small hash router reads location.hash: #/ (home), #/roles, #/roles/<slug>, #/stories; a role route without a slug shows the first role; scroll to top on route change. No router library.
  - The CV upload keeps only the file name and size in component state (no file is stored or sent); the form and the talent sign-up are local samples that say so.
  - All copy, roles, benefits, stories, process steps and form options live in src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Company name (default: "Everwarm")
- [CITY] — Where the office is (default: "Burlington")
- [MISSION] — The mission in one line (default: "Heat every home without heating the planet.")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/company-careers-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- forest `#1B4332` — Forest green: hero scrim, dark band, text on mint and sunshine, primary buttons with white text
- mint `#95D5B2` — Mint: cards, chips and secondary buttons with forest text
- mintTint `#E9F5EE` — Pale mint panels
- sunshine `#FFD23F` — Sunshine yellow: the main call to action and highlights, always with forest text
- white `#FFFFFF` — Page ground and cards
- ink `#12261F` — Text
- muted `#4F6159` — Secondary text
- line `#DDE6E1` — Borders and dividers

### Typography
- Display / headlines: Red Hat Display Variable (OFL), weights 600/800
- Body / UI: Manrope Variable (OFL), weights 400/500/600
- Mono / labels, pay ranges, step numbers: IBM Plex Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Section padding py-24 desktop / py-16 mobile; container max-w-[1200px] px-6; cards p-6 with a 16px radius; 8px rhythm.
- Radius: Cards 16px; buttons pill; chips pill; photos 16px; inputs 10px.
- Motion: Scroll reveals: sections fade up 20px over 450ms, once (Motion whileInView); content is visible by default.
- Motion: Role filters: leaving rows fade 150ms, entering rows fade up 250ms with a 40ms stagger.
- Motion: Hero photograph settles from scale 1.04 over 1.2 seconds.
- Motion: prefers-reduced-motion: no reveals or scale; filters change instantly.
- Imagery: Bright documentary photographs from one shoot of a small climate-tech company: a sunlit office full of plants, people at work far away or seen from behind, an engineering bench with heat-pump parts and a rooftop with solar panels. Green, mint and pale wood tones. No front-facing close-up portraits, no readable text, no logos.

## Pages & Sections
### Home (`index.html`)
1. **Site header** — Left: wordmark [BRAND] in Red Hat Display 800 22px forest with a small sunshine circle. Center nav: Mission (→ #/), Roles (→ #/roles), Stories (→ #/stories), Talent (→ #/talent), Manrope 500 14px muted, hover forest. Right: pill 'See open roles' (sunshine fill, forest text → #/roles).
   Layout: Sticky 64px white bar with a 1px bottom hairline line; inner max-w-[1200px]. Mobile: wordmark, a compact 'Roles' pill and a lucide menu button stay on one line at 390px; the menu opens a full-screen white drawer with the links stacked.
   Motion: Links underline in forest on hover 150ms; drawer fades in 200ms.
2. **Hero — at work** — Full-bleed public/images/hero-office.webp (16:9), alt 'An open, plant-filled office with people working far away at their desks', under a gradient from transparent to forest across the bottom 65%. Over the scrim, bottom-left: eyebrow IBM Plex Mono 500 12px uppercase tracking-widest mint 'CAREERS AT [BRAND] · [CITY]'; H1 Red Hat Display 800 clamp(40px, 5.4vw, 84px) white, max three lines: 'Do the best work of your career on a problem that matters.'; paragraph white/85 18px max-w-[46ch]: '[MISSION] We make home heat pumps that people actually want in their houses, and we need more hands.'; buttons 'See open roles' (sunshine fill, forest text → #/roles) and 'Meet the team' (mint outline, white text → #/stories); a mono line '8 open roles · On-site, hybrid and remote'.
   Layout: h-[calc(100vh-64px)] min-h-[620px] with the text block bottom-left, max-w-[760px], padding 48px. On mobile the photo is cropped 4:5 and the text sits on the lower part of the scrim.
   Motion: Text fades up 500ms; the photo settles from scale 1.04.
3. **Mission and numbers** — H2 'Why we do this.' Left: two paragraphs: 'Heating is the largest source of emissions in a typical home. We started [BRAND] to make the clean option the easy one: a heat pump that fits an old house, an app that explains it, and an installer who turns up on time.' 'We are 84 people in [CITY] and remote across the country. We measure ourselves on homes heated, not on promises.' Right: three numbers with a mono note 'Sample figures': '12,400 homes heated', '38,000 tonnes of CO₂ avoided', '84 people'.
   Layout: lg:grid-cols-[58%_42%] gap-12 items-center py-24; numbers in Red Hat Display 800 56px forest.
   Motion: Fade up 450ms.
4. **Benefits grid** — H2 'What you get.' Eight cards on mintTint with a lucide icon and one specific line each: 'A heat pump of your own — Up to $3,000 toward a system for your home.', 'Twenty weeks parental leave — For every parent, birth or adoptive.', 'Summer Fridays — Four-day weeks from June to August.', 'Health from day one — Medical, dental and vision for you and your family.', 'Six percent 401(k) match — Vested immediately.', '$2,000 to learn — Courses, conferences and books, no approval needed.', 'A carbon budget — $400 a year to spend on lower-carbon choices.', 'Sabbatical — Four weeks after four years.'
   Layout: Grid md:grid-cols-2 lg:grid-cols-4 gap-4; titles in Red Hat Display 600 20px forest.
   Motion: Cards fade up staggered 60ms.
5. **Team stories** — H2 'The people, in their own words.' Three story cards with a photo and a quote: public/images/lounge.webp (4:3), alt 'Two colleagues talking by a window in a plant-filled break room' — 'Priya Raman · Installation coordinator' — 'I schedule forty installs a week. The best part is when a customer writes in to say their living room is finally warm.'; public/images/workbench.webp (4:3), alt 'An engineer testing the parts of a heat pump on a workbench' — 'Marcus Osei · Test technician' — 'I break things on purpose so they do not break in someone's basement in January.'; public/images/team-whiteboard.webp (4:3), alt 'Four colleagues gathered at a whiteboard, seen from behind' — 'Elena Novak · Firmware engineer' — 'Our stand-up is ten minutes. The other seven hours are for thinking.' Each card links to #/stories.
   Layout: Grid md:grid-cols-3 gap-6; photos at 4:3 with a 16px radius; quotes in Red Hat Display 600 20px forest.
   Motion: Cards fade up staggered 90ms; photos scale 1.03 on hover.
6. **Open roles preview** — H2 'Open roles.' The first four roles as rows: title in Red Hat Display 600 22px, then mono lines with department, location and type; a right-aligned arrow. Under them 'See all 8 roles' → #/roles.
   Layout: White card with rows py-5 and 1px line separators.
   Motion: Rows hover with a mintTint background.
7. **Hiring process timeline** — H2 'How hiring works here.' Five steps on a forest band with white text and mint numbered circles: '01 Application — We read every one within five working days.', '02 Intro call — 30 minutes with a recruiter or the hiring manager.', '03 Practical exercise — A take-home task or a live session, 90 minutes, paid for our time.', '04 Team interview — Two hours with the people you would work with.', '05 Offer — A call, then a written offer within two days.'
   Layout: Grid md:grid-cols-5 gap-8 py-20; a 1px mint line behind the circles on desktop, a vertical list on mobile.
   Motion: Steps fade up staggered 80ms.
8. **Talent community and footer** — id="talent". H2 'Not the right role yet?'; line muted: 'Leave your email and we will send one note a month: what we are building and who we are hiring.' An email input and 'Sign up' (forest fill, white text); a valid email is required and the error shows inline. On success: 'Thanks. This is a sample form, so nothing was sent.' Footer: wordmark, nav, small print 13px muted '[BRAND] · [CITY] and remote · People, roles, figures and benefits on this site are invented sample content.' plus [CREDIT].
   Layout: Sign-up max-w-[560px]; footer with a 1px top hairline.
   Motion: Success fades in 200ms.

### Open roles (`#/roles`)
1. **Role filters and list** — H1 'Open roles.'; line muted '8 roles across [CITY] and remote.' Filters: 'Department' chips (All, Engineering, Operations, Sales & Support, Design) and 'Location' chips (All, Burlington, Remote). The list, each row linking to #/roles/<slug>: Senior heat-pump engineer — Engineering · Burlington · Full-time; Firmware engineer, thermostat — Engineering · Burlington · Hybrid; Test technician — Engineering · Burlington · Full-time; Installation coordinator — Operations · Remote · Full-time; Warehouse lead — Operations · Burlington · Full-time; Home energy advisor — Sales & Support · Remote · Full-time; Customer support specialist — Sales & Support · Remote · Part-time; Product designer, app — Design · Remote · Full-time. 'No roles match these filters.' with a 'Clear filters' link when nothing does.
   Layout: max-w-[900px]; chips wrap; rows py-5 with 1px line separators; the count line follows the filters ('Engineering · 3 roles').
   Motion: Filter change as described in motion.

### Role page (`#/roles/senior-heat-pump-engineer`)
1. **Role header** — Shows the role for the slug in the hash (#/roles/<slug> for each of the eight roles); opened as #/roles/senior-heat-pump-engineer it shows that role. Breadcrumb 'Roles'; H1 Red Hat Display 800 clamp(36px, 4.6vw, 64px) forest; a mono line 'Engineering · Burlington · Full-time · On-site'; the pay range in sunshine chip with forest text '$105,000 – $135,000 + equity'; buttons 'Apply now' (forest fill, white text → #apply) and 'Save role' (outline). Right: public/images/workbench.webp (4:3) with its alt text.
   Layout: lg:grid-cols-[60%_40%] gap-12 items-center py-16.
   Motion: Fade up 400ms.
2. **About the role** — H2 'What you will do.' Five bullets: 'Own the mechanical design of our next outdoor unit, from sketch to production line.', 'Run thermal and acoustic tests and turn the results into design changes.', 'Work with the firmware team on the controls that keep the unit quiet.', 'Visit installers four times a year to see how the units behave in real homes.', 'Mentor two junior engineers.' H2 'What you bring.' Five bullets: 'Five or more years in mechanical design of appliances, HVAC or vehicles.', 'Hands-on experience with refrigeration cycles and compressor selection.', 'Comfort making a decision with incomplete data.', 'Clear writing: our design notes are read by the whole company.', 'Care about making low-carbon heating normal.' Other roles have their own bullets in content.ts.
   Layout: Two lists in two columns on desktop, stacked on mobile; bullets with mint check icons.
   Motion: Fade up 400ms.
3. **Hiring process and benefits** — A compact five-step timeline (Application, Intro call, Practical exercise, Team interview, Offer) with mono durations, and a benefits row of four chips: 'Heat pump grant', 'Health from day one', 'Six percent 401(k) match', '$2,000 to learn'.
   Layout: On a mintTint panel, rounded-[16px], p-8.
   Motion: None.
4. **Application form** — id="apply". H2 'Apply.' Fields: Name, Email, 'Where are you based?' text input, 'Why [BRAND]?' textarea with a mono counter (at least 100 characters), 'LinkedIn or portfolio' URL (optional), 'CV' — a file input styled as a drop area with a paperclip icon 'Add your CV (PDF, DOC or DOCX, up to 10 MB)'; a chosen file appears as a chip with a file icon, the file name, the size in mono and a remove icon; a consent checkbox 'I agree to [BRAND] storing this application.' (required). Button 'Submit application' (sunshine fill, forest text). Name, a valid email, location, a text of 100+ characters and consent are required; errors show inline in forest on sunshine under the field. On success the form is replaced by a check panel: 'Application received. This is a sample form, so nothing was sent.' with the role title.
   Layout: max-w-[720px]; inputs with a 1px line border, 10px radius and a 3px mint focus ring; the drop area on mintTint.
   Motion: The chip and success panel fade in 200ms.

### Team stories (`#/stories`)
1. **Stories** — H1 'The people, in their own words.' Three full interviews, each with a photo, name and role and three question-and-answer pairs. Priya Raman — Installation coordinator (lounge.webp): 'What does a good day look like?' — 'Forty installs scheduled by lunch and no phone call starting with “nobody came”.'; 'What surprised you?' — 'How much of the job is listening. People are nervous about ripping up their house.'; 'Why [BRAND]?' — 'My parents' house got one of the first units. It is warm now.' Marcus Osei — Test technician (workbench.webp): 'What do you do?' — 'I run the units harder than any winter would and log every failure.'; 'What surprised you?' — 'How loud quiet can be. Our target is quieter than a fridge.'; 'Why [BRAND]?' — 'I wanted to build something my neighbours can use.' Elena Novak — Firmware engineer (team-whiteboard.webp): 'What do you do?' — 'I write the controls that decide when the unit ramps up and when it waits.'; 'What surprised you?' — 'That the hardest problem is a ten-minute stand-up and nothing else.'; 'Why [BRAND]?' — 'I like that the measure of my code is a warm room.'
   Layout: Stories stacked with 1px line separators; photo at 4:3 beside the text on desktop, above it on mobile; questions in Red Hat Display 600 20px forest.
   Motion: Stories fade up 400ms.

## Assets
- image: Six photographs generated by VibeFather from one shoot, downloaded into public/images/ and used nowhere else: hero-office.webp (16:9), rooftop-solar.webp (16:9), team-whiteboard.webp, workbench.webp, lounge.webp and desk-call.webp (4:3). Each downloads from https://media.vibefather.ai/assets/897046cf-ea2f-421c-a4b6-2ad640de3c97/<file>; alt text is given in the sections above (rooftop-solar.webp and desk-call.webp may illustrate the mission section and the roles page). Credit in ASSETS.md: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- icon: lucide-react npm package (ISC): menu, x, arrowRight, check, paperclip, xCircle, mapPin, clock, briefcase, heart, wallet, bookOpen, sun, users. No other icon sets, no brand logos anywhere.
- font: Fontsource variable packages (OFL-1.1): @fontsource-variable/red-hat-display, @fontsource-variable/manrope and @fontsource/ibm-plex-mono, imported in main.tsx. No font CDN links.

## Don'ts
- No backend: no server code, API routes, databases, auth or requests to any service. The application form keeps the CV's name and size in memory only, and both forms are local samples that say so.
- The company, its people, roles, pay ranges, figures and benefits are invented sample content; no real employers, workplaces or people may be named or imitated, and figures carry the note 'Sample figures'.
- Photographs show people far away or from behind; no front-facing close-up portraits; no readable text or logos in images.
- This is one employer's careers site, not a job board: it lists only [BRAND]'s own roles.
- No gradients used as decoration (the hero scrim is for legibility only), no glass panels or glowing elements; flat forest, mint and sunshine on white with 1px lines.
- Sunshine and mint fills always carry forest text; small text on forest is white or mint.
- Self-host everything: fonts via Fontsource packages, images downloaded into the project, no CDN script or link tags, no Google Fonts, no analytics.
- Vite base './' with relative asset paths; internal links are anchors (#/roles, #/stories, #/talent) or real file names, never bare directories; a role route without a slug shows the first role.
- Production build minified with no source maps; dist/ under 20 MB.
- prefers-reduced-motion: no reveals or scale; filters change instantly. Never hide a whole element with clip-path or zero opacity while waiting for an in-view trigger.
- Tailwind opacity utilities use the default scale (for example /85, /90); custom steps are written as arbitrary values.
- No SEO work: a plain <title> with [BRAND] and a favicon are enough.
- No copied code, copy, imagery or fonts from any reference site; no brand names in template names, slugs, copy or alt text.

---
— Prompt by VibeFather · https://vibefather.ai/t/company-careers-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
