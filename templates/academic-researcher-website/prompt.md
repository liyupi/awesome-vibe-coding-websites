# Academic Researcher Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A homepage for a fictional professor and her lab: bio, research interests, publications with filters, copy-BibTeX and PDF links, projects, teaching with course pages, talks with slides links, a CV page with a print stylesheet, lab members, open positions, and news. Paper #FAFAF7, university navy #1C2B4A and a burgundy accent #8C1C3E; a scholarly serif.

- Audience: Students looking for a supervisor or a course, researchers looking for a paper or a BibTeX entry, and anyone checking the CV.
- Goal: Get a visitor to the right paper, course or open position in two clicks, and let them copy a citation or print the CV without friction.
- Tone: Measured and exact, like a good abstract: plain statements about questions, methods and findings, no hype.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/newsreader (OFL-1.1), @fontsource-variable/libre-franklin (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: extend colors paper #FAFAF7, navy #1C2B4A, navyTint #EEF1F7, burgundy #8C1C3E, ink #1F2430, muted #5C6472, rule #D9D9D2; fontFamily serif 'Newsreader Variable', sans 'Libre Franklin Variable', mono 'IBM Plex Mono'.
  - A small hash router reads location.hash: #/ (home), #/publications, #/projects, #/teaching, #/teaching/<slug>, #/talks, #/talks/<slug>, #/people, #/cv; a detail route without its slug shows the first item; scroll to top on route change. No router library.
  - src/lib/bibtex.ts builds a BibTeX entry from a publication's data; src/components/Figure.tsx draws the three project figures as inline SVG from data in content.ts.
  - The CV page has a print stylesheet (src/print.css) that hides the navigation and footer, sets black text on white and removes margins.
  - All copy, publications, projects, courses, talks, members, news and CV entries live in src/content.ts as typed objects; components never hard-code copy.

## Variables
- [BRAND] — Professor's name and title (default: "Dr. Sofia Anastasi")
- [FIELD] — Field, in lower case (default: "computational ecology")
- [UNIVERSITY] — Institution (default: "Halloran University")
- [LAB_NAME] — Lab name (default: "Anastasi Lab")
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/academic-researcher-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- paper `#FAFAF7` — Page ground
- navy `#1C2B4A` — University navy: headings, links, the sidebar band, primary buttons with white text
- navyTint `#EEF1F7` — Pale blue panels and hover rows
- burgundy `#8C1C3E` — Burgundy accent: interest chips, active filters, the copy-BibTeX button, figure accents
- ink `#1F2430` — Text
- muted `#5C6472` — Secondary text and meta
- rule `#D9D9D2` — Rules between list items

### Typography
- Display and body / headings, publication titles, prose: Newsreader Variable (OFL), weights 400/600
- UI / navigation, buttons, filters: Libre Franklin Variable (OFL), weights 400/500
- Mono / authors, venues, years, course codes, BibTeX: IBM Plex Mono (OFL), weights 400/500

### Layout & motion
- Spacing: Content max-w-[1080px] px-6; list rows py-4 with 1px rule separators; section padding py-16; 8px rhythm.
- Radius: Corners are square: 0px on cards, photos, buttons and inputs.
- Motion: Publication filters: leaving rows fade 150ms, entering rows fade 200ms; the result count updates at once.
- Motion: Copy-BibTeX shows an inline 'Copied' label for 2 seconds; the abstract panel slides down 200ms.
- Motion: Slide viewer: slides cross-fade 250ms; ArrowLeft and ArrowRight move between slides.
- Motion: Scroll reveals on the home page: sections fade up 12px over 350ms, once; content is visible by default.
- Motion: prefers-reduced-motion: everything changes instantly.
- Imagery: One professional portrait of the professor, four portraits of lab members and one photograph of the lab at work seen from behind: all fictional people, warm neutral backgrounds, soft window light. Project figures are inline SVG in navy, burgundy and pale blue. No university crests, seals, building photos or logos.

## Pages & Sections
### Home (`#/`)
1. **Site header** — Left: [BRAND] in Newsreader 600 22px navy. Center nav: Publications, Projects, Teaching, Talks, People, CV, Libre Franklin 400 14px muted, hover navy with a 2px burgundy underline; the active item keeps the underline.
   Layout: Sticky 56px bar on paper/95 with backdrop blur and a 1px bottom hairline rule; inner max-w-[1080px]. Mobile: name and a lucide menu button on one line at 390px; the menu opens a full-screen paper drawer with the links stacked.
   Motion: Drawer fades in 200ms.
2. **Hero — the professor** — Left: public/images/portrait-professor.webp (3:4) in a frame with a 6px navy border, alt 'Portrait of the professor in a navy blazer in front of bookshelves'. Right: eyebrow mono 12px uppercase burgundy 'ASSOCIATE PROFESSOR OF [FIELD]'; H1 Newsreader 600 clamp(40px, 5vw, 72px) navy: '[BRAND]'; a line Libre Franklin 16px muted '[UNIVERSITY] · [LAB_NAME]'; two paragraphs Newsreader 19px ink max-w-[56ch]: 'I study how animals move across changing landscapes, and build the statistical and software tools that make those questions answerable at scale.' 'The lab sits between ecology, statistics and computer science. We publish open code, open data and papers that a field biologist can use.' Research interests as burgundy outline chips: Movement ecology, Species distribution models, Bayesian statistics, Citizen-science data, Climate adaptation. Buttons: 'Publications' (navy fill, white text → #/publications), 'Open positions' (burgundy outline → #/people) and 'Download CV' (text link with a download icon that opens #/cv and triggers print).
   Layout: Grid lg:grid-cols-[36%_64%] gap-12 items-center py-16. Behind the text, at low opacity, a code-drawn SVG dot grid in navyTint and burgundy suggesting a distribution map. On mobile: portrait at 4:5 max-w-[320px], then text.
   Motion: Text fades up 400ms; the portrait settles from scale 1.02.
3. **News** — H2 'News.' Four rows with a mono month and year and a sentence: 'New preprint: wind-aware migration models for soaring birds.' (This month); 'Two open positions: a PhD studentship and a research assistant.' (Last month); 'Keynote at the Conference on Environmental Data.' (Three months ago); 'Best paper award for the camera-trap benchmark, with K. Mensah.' (Five months ago). A link 'Lab news archive' → #/people.
   Layout: Rows py-3 with 1px rule separators, the month in a 120px column on desktop.
   Motion: None.
4. **Selected publications** — H2 'Selected publications.' Five rows in the format of the publications page (title, authors in mono, venue, year) with copy-BibTeX and PDF buttons; a link 'All publications' → #/publications.
   Layout: Rows py-4 with 1px rule separators.
   Motion: Rows fade up staggered 60ms.
5. **Projects** — H2 'Projects.' Three cards with a code-drawn figure on top: 'BirdFlow' — figure: a dot-grid map with burgundy arrows arcing north — 'Continent-scale models of bird migration built from weather radar and citizen-science data.'; 'Microclimate loggers' — figure: a schematic of a small circuit board and sensor in navy lines — 'A $12 open-hardware logger for temperature and humidity in the field.'; 'Occupancy toolkit' — figure: a bar chart with error bars — 'Fast, documented Bayesian occupancy models for camera-trap and survey data.' Each links to #/projects.
   Layout: Grid md:grid-cols-3 gap-6; figures at 16:10 on navyTint.
   Motion: Figures fade in 350ms.

### Publications (`#/publications`)
1. **Filters and list** — H1 'Publications.' Filters as pills: Topic (All, Movement, Distribution, Methods, Climate), Type (All, Journal, Conference, Preprint), Year (All, 2025, 2024, 2023, 2022 and earlier); a mono count '12 publications'. Each row: title in Newsreader 600 20px navy; authors in mono 13px ink with the professor's own name set in burgundy; venue and year in mono 13px muted; two small buttons, 'BibTeX' (copies the entry) and 'PDF' (opens an abstract panel under the row with the abstract, a line 'This paper is a sample; no PDF file exists.' and a 'Copy BibTeX' link). The twelve publications: 'Wind-aware migration models for soaring birds' — Anastasi, Kaur, Okafor — Annals of Spatial Ecology, 2025, journal, Movement; 'Scaling species distribution models to 10-m resolution' — Anastasi, Chen — Journal of Wildlife Informatics, 2024, journal, Distribution; 'A benchmark for camera-trap occupancy estimators' — Mensah, Anastasi — Ecological Computing Review, 2024, journal, Methods; 'Learning phenology from street-level imagery' — Anastasi, Reyes, Chen — Proceedings of the Conference on Environmental Data, 2023, conference, Climate; 'Cheap sensors, strong inference: logging microclimate at scale' — Kaur, Anastasi — Annals of Spatial Ecology, 2023, journal, Methods; 'Route optimisation for volunteer survey networks' — Okafor, Anastasi — Journal of Wildlife Informatics, 2022, journal, Methods; 'Uncertainty maps for habitat suitability under climate scenarios' — Anastasi — Ecological Computing Review, 2022, journal, Climate; 'Do movement models transfer across continents? A test with storks' — Chen, Anastasi, Mensah — Annals of Spatial Ecology, 2021, journal, Movement; 'Open tools for cleaning citizen-science observations' — Anastasi, Reyes — Preprint, 2021, preprint, Methods; 'Heterogeneous satellites, homogeneous features' — Anastasi, Chen, Kaur — Proceedings of the Conference on Environmental Data, 2020, conference, Distribution; 'Microrefugia in agricultural landscapes' — Mensah, Anastasi — Journal of Wildlife Informatics, 2019, journal, Climate; 'A field guide to Bayesian occupancy models' — Anastasi — Ecological Computing Review, 2018, journal, Methods. Each has a two-sentence abstract in content.ts.
   Layout: Filters wrap above the list; rows py-4 with 1px rule separators; the abstract panel spans the row width.
   Motion: Filters and copy feedback as described in motion.

### Projects (`#/projects`)
1. **Projects** — H1 'Projects.' Each project as a block with its figure beside two paragraphs: 'BirdFlow' — 'Every spring, billions of birds move north. BirdFlow combines weather radar, light-level geolocators and citizen-science records to model those movements night by night.' 'The models are used by two conservation networks to time wind-farm shutdowns.'; 'Microclimate loggers' — 'Off-the-shelf loggers cost more than the fieldwork they support. We designed a $12 logger with open hardware and a phone app for read-out.' 'Four hundred units are in the field across three continents.'; 'Occupancy toolkit' — 'Camera traps produce more images than anyone can check. The toolkit fits Bayesian occupancy models in seconds and writes its own methods section.' It lists three people per project and a 'Code and data' link that shows 'Available on request (sample)'.
   Layout: Blocks with 1px rule separators; figure 40% and text 60% on desktop, stacked on mobile.
   Motion: Figures fade in 350ms.

### Teaching (`#/teaching`)
1. **Courses** — H1 'Teaching.' Three courses: 'Spatial Ecology' — ECL 640 · graduate · Fall — 'Species distribution models, movement ecology and the data behind them.'; 'Data Analysis for Ecologists' — ECL 320 · undergraduate · Spring — 'From messy field notes to a defensible model.'; 'Scientific Computing' — CS 210 · undergraduate · Fall — 'Version control, reproducible reports and enough Python to be dangerous.' Each row links to its course page (#/teaching/spatial-ecology, #/teaching/data-analysis, #/teaching/scientific-computing) and shows a mono line '12 students · lectures and labs'.
   Layout: Rows py-5 with 1px rule separators; course codes in mono burgundy.
   Motion: Rows hover with a navyTint background.
2. **Course page** — Shown at #/teaching/<slug> (opened as #/teaching/spatial-ecology when the slug is missing): breadcrumb 'Teaching'; H1 the course title; a mono line with the code, level and term; a description paragraph; 'Syllabus' as eight rows with week numbers, a topic and a mono label ('Lecture', 'Lab', 'Project'): 'Week 1 — Why things live where they do — Lecture'; 'Week 2 — Presence-only data — Lecture'; 'Week 3 — Maxent and its critics — Lab'; 'Week 4 — Occupancy models — Lecture'; 'Week 5 — Fitting occupancy models — Lab'; 'Week 6 — Movement and telemetry — Lecture'; 'Week 7 — Project clinics — Project'; 'Week 8 — Project presentations — Project'; and a line 'Office hours: Thursdays, 2 to 4 pm.' The other courses have their own eight rows in content.ts.
   Layout: max-w-[760px]; syllabus rows py-3 with 1px rule separators.
   Motion: None.

### Talks (`#/talks`)
1. **Talks** — H1 'Talks.' Six rows: title, venue in mono (all invented: 'Conference on Environmental Data', 'Halloran Department of Biology', 'Spatial Ecology Symposium', 'Wildlife Informatics Workshop'), a chip 'Invited' or 'Contributed', and a 'Slides' button that opens #/talks/<slug>. Talks: 'Where do the birds go when the wind changes?' — Conference on Environmental Data, 2025, Invited; 'Ten-metre species distribution models' — Spatial Ecology Symposium, 2024, Invited; 'Occupancy models in the browser' — Wildlife Informatics Workshop, 2024, Contributed; 'Learning phenology from street view' — Conference on Environmental Data, 2023, Contributed; 'The $12 logger' — Halloran Department of Biology, 2023, Invited; 'Maps that admit uncertainty' — Spatial Ecology Symposium, 2022, Invited.
   Layout: Rows py-4 with 1px rule separators; chips square with a 1px navy border, 'Invited' in burgundy.
   Motion: None.
2. **Slide viewer** — Shown at #/talks/<slug>: the talk title and venue; a 16:9 slide frame showing five code-drawn slides in navy and burgundy on paper (a title slide with the talk title and the speaker's name; three slides with a short heading and three bullet lines each; a closing slide 'Thank you — data and code on request'); prev and next buttons, a mono counter '2 / 5' and ArrowLeft / ArrowRight keys.
   Layout: Slide frame max-w-[960px]; controls under it.
   Motion: Cross-fade 250ms between slides; instant under reduced motion.

### People (`#/people`)
1. **Lab members** — H1 'People.' A lead paragraph: '[LAB_NAME] is eight people: two postdocs, four doctoral students and two research assistants.' A grid of five people with a portrait, name, role, a line about their work and a mono fictional email: [BRAND] — Principal investigator (portrait-professor.webp); 'Kabir Okafor' — Postdoc — 'Movement models for soaring birds.' — member-1.webp, alt 'Portrait of a postdoctoral researcher in glasses and a grey sweater'; 'Mei-Lin Chen' — PhD student — 'Species distribution models at high resolution.' — member-2.webp, alt 'Portrait of a doctoral student in a burgundy top'; 'Kwame Mensah' — PhD student — 'Occupancy models for camera traps.' — member-3.webp, alt 'Portrait of a doctoral student in a navy overshirt'; 'Alejandra Reyes' — Research assistant — 'Citizen-science data cleaning.' — member-4.webp, alt 'Portrait of a research assistant in a sage-green blouse'. Beneath, public/images/lab-group.webp (16:9) full width, alt 'The lab working around a table in a library room, seen from behind'.
   Layout: Grid md:grid-cols-2 lg:grid-cols-5 gap-6; portraits square with a 1px navy border; the group photo 16:9 with a caption.
   Motion: Portraits fade in staggered 60ms.
2. **Alumni and open positions** — H2 'Alumni.' Four rows: 'Lena Fischer — PhD — now at the Alpine Research Centre'; 'Tomás Rivera — Postdoc — now at the Institute for Wildlife Informatics'; 'Aisha Bello — Research assistant — now a data scientist'; 'Jonas Weber — MSc — now a high-school teacher'. H2 'Open positions.' Two cards: 'PhD studentship — Movement ecology and wind energy' — 'Four years, fully funded. Start in the fall. Experience with R or Python and a love of fieldwork.'; 'Research assistant — Data engineering' — 'One year, renewable. You will keep our pipelines honest.' Button 'How to apply' opens a panel: 'Send a short note and your CV to the email above. This is a sample page, so nothing is sent.'
   Layout: Alumni rows py-3 with 1px rule separators; position cards side by side on desktop.
   Motion: Panel slides down 200ms.

### CV (`#/cv`)
1. **Curriculum vitae** — H1 'Curriculum vitae.' with a button 'Print or save as PDF' that calls window.print(). Sections with year ranges in a 120px mono column: Education — 'PhD, Ecology — Halloran University, 2012'; 'MSc, Statistics — University of the Coast, 2008'; 'BSc, Biology — University of the Coast, 2006'. Positions — 'Associate Professor, Halloran University, 2021 – present'; 'Assistant Professor, Halloran University, 2015 – 2021'; 'Postdoctoral fellow, Institute for Wildlife Informatics, 2012 – 2015'. Awards — 'Early Career Researcher Award, Society for Spatial Ecology, 2019'; 'Best paper, Conference on Environmental Data, 2024'. Selected publications — the first five publications in a compact list. Teaching — the three courses. Service — 'Associate editor, Annals of Spatial Ecology, 2022 – present'; 'Review panel, Conference on Environmental Data, 2023, 2024'. A mono note at the end: 'Sample CV. Dates and entries are invented.'
   Layout: max-w-[820px]; rows py-3 with 1px rule separators. The print stylesheet hides the header, navigation and footer, removes colours except navy headings, and sets 18 mm margins.
   Motion: None.

## Assets
- image: Six photographs generated by VibeFather, downloaded into public/images/ and used nowhere else: portrait-professor.webp (3:4), lab-group.webp (16:9), member-1.webp, member-2.webp, member-3.webp and member-4.webp (1:1). Each downloads from https://media.vibefather.ai/assets/4d45d089-d722-4474-91dc-d1d231d266eb/<file>; alt text is given in the sections above. All are fictional people. Credit in ASSETS.md: 'Generated by VibeFather with qwen-image-3.0-pro, redistributable with this template.'
- image: Project figures, the hero dot grid and the talk slides are inline SVG and HTML drawn in code.
- icon: lucide-react npm package (ISC): menu, x, copy, check, fileText, download, printer, chevronLeft, chevronRight, arrowUpRight, mail. No other icon sets, no logos or crests anywhere.
- font: Fontsource variable packages (OFL-1.1): @fontsource-variable/newsreader, @fontsource-variable/libre-franklin and @fontsource/ibm-plex-mono, imported in main.tsx. No font CDN links.

## Don'ts
- No backend: no server code, API routes, databases, auth or network requests. Copying, filters, the slide viewer and printing all run in the browser.
- The professor, the lab, the institution, every publication, course, talk, award, journal and conference are invented sample content; no real university, department, journal, publisher, funding agency, person, crest or seal may be named or shown.
- The PDF buttons open an abstract panel and say plainly that no PDF file exists; there are no dead links.
- No front-facing portraits other than the six generated headshots; no university crests, seals, campus photographs or logos.
- No gradients, shadows, glass or rounded cards; flat paper, navy and burgundy with 1px rules and square corners.
- Burgundy is the only accent; small burgundy text on paper is used only at 13px mono or larger.
- Self-host everything: fonts via Fontsource packages, images downloaded into the project, no CDN script or link tags, no Google Fonts, no analytics.
- Vite base './' with relative asset paths; internal links are anchors (#/publications, #/teaching/spatial-ecology) or real file names, never bare directories; a detail route without its slug shows the first item.
- Production build minified with no source maps; dist/ under 20 MB.
- prefers-reduced-motion: no fades; everything changes instantly. Never hide a whole element with clip-path or zero opacity while waiting for an in-view trigger.
- The CV prints cleanly: no navigation, no footer, black text on white, no cut-off rows.
- Tailwind opacity utilities use the default scale (for example /95); custom steps are written as arbitrary values.
- No SEO work: a plain <title> with [BRAND] and a favicon are enough.
- No copied code, copy, imagery or fonts from any reference site; no brand names in template names, slugs, copy or alt text.

---
— Prompt by VibeFather · https://vibefather.ai/t/academic-researcher-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
