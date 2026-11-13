# Bridal Boutique Website

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build a one-page site for [BRAND], the bridal boutique owned by stylist [FOUNDER] in [CITY], dressing brides for [EXPERIENCE]. The page is editorial romance — blush, champagne, deep wine, a graceful serif, soft-light photos of gowns on forms and the fitting lounge, no faces. It offers a style quiz that suggests silhouettes, a filterable collection of eight invented-label gowns, party-size appointment booking, a six-step alterations timeline, real-wedding stories and accessories. All gowns, couples and prices are invented sample data.

- Audience: Primary: newly engaged brides (and their mothers) within driving distance of [CITY], overwhelmed by Pinterest and looking for a human to narrow it down. Secondary: formal-occasion and suit boutiques adapting the quiz and timeline.
- Goal: Move a visitor from 'I have 400 saved images and no idea' to a booked appointment: let the quiz narrow the world, let the collection prove the range, then make the appointment — with the right party size — the obvious next step.
- Tone: Editorial warmth — the way a great stylist talks: calm, certain, kind about nerves. Zero 'special day' clichés; one perfect sentence instead of three exclamation marks.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: react (MIT), react-dom (MIT), vite (MIT), typescript (Apache-2.0), tailwindcss (MIT), motion (MIT), lucide-react (ISC), @fontsource/playfair-display (OFL-1.1), @fontsource/lato (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Create a Vite 6 + React 18 + TypeScript project with base './', build.outDir 'dist', build.sourcemap: false. No router, no backend, no server code.
  - Install Tailwind CSS 3.4 with PostCSS and Autoprefixer. Extend the theme with the exact palette below, fontFamily.display 'Playfair Display' and fontFamily.body 'Lato'.
  - Self-host Playfair Display weights 500, 600 and 700 (plus 500 italic for pull quotes) and Lato weights 400, 700 through @fontsource/playfair-display and @fontsource/lato, imported in src/main.tsx. Never load fonts from a CDN.
  - Use Motion from 'motion/react' (motion, AnimatePresence, useInView, useReducedMotion) for reveals and quiz step transitions; gate every animation on useReducedMotion().
  - Keep all copy and data in src/content.ts: brand strings, hero copy, the quiz questions and silhouette mapping, the eight gowns (name, silhouette, neckline, price, one line, photo key by silhouette), filters, appointment copy, alterations steps, stories, accessories. When variable values change, rewrite the dependent copy there and derive storage keys and the tel: link from [BRAND] and [PHONE] so no default-brand remnants remain.
  - The collection, exactly eight gowns with photos mapped by silhouette: 'Wren' A-line · sweetheart · $1,850 · 'pockets, and the skirt does the talking'; 'Marisol' A-line · V · $2,100 · 'champagne buttons down the spine'; 'Odette' ballgown · boat · $2,900 · 'the ballroom, but make it weightless'; 'Elowen' ballgown · sweetheart · $3,400 · 'corseted, cathedral-ready'; 'Celeste' mermaid · V · $2,400 · 'satin that behaves like water'; 'Sable' mermaid · sweetheart · $2,750 · 'the dramatic exit dress'; 'Juniper' sheath · off-shoulder · $1,650 · 'city hall, then dinner, then dancing'; 'Pip' sheath · boat · $1,450 · 'crepe, clean lines, done'. Filters: silhouette chips (A-line / Ballgown / Mermaid / Sheath), neckline chips (Sweetheart / V / Boat / Off-shoulder), price chips (Under $2,000 / $2,000–3,000 / Over $3,000); live count ('8 of 8 gowns'); 'Clear filters' when active; zero-result state shows the clear chip. Cards show the silhouette photo 4:3, name in Playfair 600, neckline + price line, one-line note in italic.
  - Style quiz, exactly: three steps — Q1 'Where is it happening?' (Garden / City loft / Estate ballroom / Beach); Q2 'Pick a vibe' (Romantic minimal / Quietly dramatic / Easy elegance); Q3 'The dress you sketch in margins' (A train that clears the room / Sparkle everywhere / Clean lines only / Sleeves, definitely sleeves). Mapping (visible in content.ts): Garden→A-line & sheath; City loft→sheath & mermaid; Estate ballroom→ballgown & mermaid; Beach→A-line & mermaid; vibe and sketch each add one weight to their natural pairings (minimal→sheath, dramatic→mermaid/ballgown, elegance→A-line; train→ballgown, sparkle→ballgown/mermaid, clean→sheath, sleeves→A-line/sheath). Result: top two silhouettes with a one-sentence why each ('A-line: the garden classic — moves in photos, forgives everything') and links 'See A-line gowns →' that filter the grid; a 'Retake' link; suggestions are style advice about movement and mood, never body commentary.
  - Appointment booking, exactly: party-size chips ('Just me' / '2–3 VIPs' / 'The whole parade'), time-window chips (Weekday morning / Weekday afternoon / Saturday), name, phone, 'wedding season, if you know it' optional select (Spring / Summer / Fall / Winter / Still a secret); success 'Your appointment is requested — we call within a day to confirm and talk time. Bring photos, bring people, bring nerves; all three are normal.' with the demo note. Persist to localStorage under [BRAND_SLUG]-appointment.
  - Alterations timeline, exactly six steps with week offsets (relative, no dates): 'Gown arrives' — '8–12 weeks out: you try it as-is; we plan'; 'First fitting' — '8 weeks: structure — take-in, hem length, bustle plan'; 'Second fitting' — '5–6 weeks: the details settle'; 'Third fitting' — '3–4 weeks: bring the shoes, the bra, the veil'; 'Final fitting' — '2 weeks: the mirror moment'; 'Press & pickup' — 'the week of: steamed, boxed, ready'. Drawn as a champagne line with wine nodes.
  - Use only these lucide-react icons: Phone, Heart, Sparkles, CalendarCheck, Clock, ChevronRight, ChevronLeft, ArrowRight, Menu, X, Ruler, Gem, MapPin, Users.
  - Persist the quiz result and appointment to localStorage, namespaced with [BRAND_SLUG]; validate restored JSON and recover silently from malformed data.
  - Download the six generated photos to the exact public paths listed in Assets before building. Create ASSETS.md at the project root listing every file's path, source URL, author or generator, and license.
  - A plain <title> of [BRAND] and a favicon (the wine circle with a blush ribbon mark) are enough; no meta descriptions, Open Graph tags, JSON-LD, or sitemaps.

## Variables
- [BRAND] — Boutique name (default: "Wildfern Bridal"). Invented boutique name; a ribbon logomark is derived from it in code.
- [CITY] — City (default: "Hartswell"). Where the salon is; appears in hero, stories and footer.
- [FOUNDER] — Owner-stylist (default: "Isobel Marsh"). Invented stylist-owner, named in hero and appointment copy.
- [PHONE] — Phone (default: "(555) 664-9910"). Salon line; links as tel: with digits only.
- [EXPERIENCE] — Years (default: "9 years"). Plain phrase like '9 years'; used in hero copy.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/bridal-boutique-website in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/bridal-boutique-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/bridal-boutique-website · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
