# Team Onboarding Handbook Deck

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A warm 11-slide 16:9 new-hire onboarding and culture presentation deck for [BRAND] ('[WELCOME_TITLE]'), guided by [BUDDY_NAME] ([STUDIO_LOCATION]). Includes interactive who-to-ask directory, weekly rituals calendar, 30/60/90 milestones, and an interactive First-Week Checklist persisted in localStorage, plus keyboard/swipe nav, G overview grid, N presenter notes + timer, F fullscreen, and print CSS.

- Audience: New hires joining a distributed studio, people operations teams, and founders welcoming teammates.
- Goal: Make a new hire's first week calm, clear, and actionable with self-paced navigation and a persistent checklist.
- Tone: Warm, human, transparent, reassuring, and structured.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/plus-jakarta-sans (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Persist Slide 08 interactive First-Week Checklist items in localStorage so checked onboarding tasks survive reloads.
  - Support ArrowLeft/ArrowRight/Space/Home/End navigation, touch swipe, G overview grid, N speaker notes + timer, F fullscreen, and @media print landscape PDF styling.

## Variables
- [BRAND] — Studio name (default: "Hearthstone Studio"). Fictional remote-first studio
- [WELCOME_TITLE] — Cover headline (default: "Welcome Home: Your First 90 Days With Us"). Warm onboarding cover headline
- [BUDDY_NAME] — Onboarding host (default: "Hannah Lin, People Lead"). Guide credited on cover
- [STUDIO_LOCATION] — Remote footprint (default: "Remote-First · 14 Cities"). Displayed on cover badge
- [CORE_VALUE] — Culture principle (default: "Write it down, protect deep work, assume goodwill."). Highlighted operating motto
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/team-onboarding-handbook-deck in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Warm Cream `#FAF7F2` — Primary editorial paper slide background
- Espresso Ink `#1E1B18` — Headings, dark anchor card, and high-contrast typography
- Sage Green `#2F855A` — Active checks, completed milestones, and primary accents
- Soft Apricot `#F6AD55` — Warm highlights, ritual tags, and spotlight badges
- Warm Taupe `#6B6259` — Secondary labels and notes

### Typography
- Warm editorial slide headlines: Fraunces (OFL), weights 600/700
- Readable handbook prose and UI: Plus Jakarta Sans (OFL), weights 400/500/600/700
- Slide indices, checklists, and ritual times: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Generous 16:9 widescreen composition with bold 52px desktop serif headline paired with a warm dark espresso 90-day preview anchor card.
- Radius: 20px for slide canvas, 14px for directory and checklist cards, 999px for pills.
- Motion: Smooth checklist completion progress ring & slide transitions.
- Motion: Honors prefers-reduced-motion; all content visible immediately.
- Imagery: 100% code-drawn warm editorial visuals: 30/60/90 milestone progression arc, weekly rituals grid, checklist progress bar, and Lucide icons.

## Pages & Sections
### [BRAND] — Team Onboarding Handbook (`index.html`)
1. **11-Slide Interactive Team Onboarding Handbook** — Slide 01 Cover ('[WELCOME_TITLE]', [BUDDY_NAME], [STUDIO_LOCATION], espresso anchor card with 30/60/90 readiness overview). Slide 02 Mission & Why We Exist. Slide 03 Four Operating Principles ('[CORE_VALUE]'). Slide 04 Interactive Org & 'Who To Ask' Directory (clickable department filters: Product, Design, Engineering, Ops). Slide 05 Core Toolstack & Async Communication Norms. Slide 06 Weekly Rituals Calendar (Mon Kickoff, Tue Crit, Thu Demo, Fri Quiet Focus). Slide 07 30 / 60 / 90-Day Onboarding Milestones (interactive phase selector). Slide 08 Interactive First-Week Checklist (8 clickable tasks persisted in localStorage with live completion bar). Slide 09 Benefits, Stipends & Time-Off Snapshot. Slide 10 How Feedback & Growth Reviews Work. Slide 11 Helpful Links & Your First Coffee Chats.
   Layout: 16:9 widescreen deck with top bar, bottom segmented progress dock, G overview grid, N presenter notes + timer, F fullscreen, and print PDF support.

## Assets
- icon: Install lucide-react (ISC) for handbook navigation, checkmarks, coffee chats, calendar, and print icons.
- font: Self-host Fraunces, Plus Jakarta Sans, and JetBrains Mono via @fontsource packages (OFL).
- image: All milestone diagrams and progress indicators are rendered cleanly in SVG/CSS. Zero external photos.

## Don'ts
- No real company names, SaaS trademarks/logos, calendar dates, or real employee photos.
- No CDN scripts, Google Fonts, or source maps; always set base: './'.
- No keyboard shortcut text hints on <768px mobile; show 'Swipe to navigate' instead.
- No horizontal overflow on 1440x900 desktop or 390x844 mobile.
- No mention of VibeFather or competitors except optional [CREDIT].

---
— Prompt by VibeFather · https://vibefather.ai/t/team-onboarding-handbook-deck · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
