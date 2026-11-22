# Online Learning Platform

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an interactive online course platform for [PLATFORM_NAME] signed in as active learner [LEARNER_NAME] with a [STREAK_DAYS]-day study streak. Palette: deep ink (#161A33), sunflower (#FFC93C), sky blue (#5AB2FF), and warm paper (#FBFAF5). CRITICAL: Frame 1 MUST open directly on #/dashboard showing [LEARNER_NAME] mid-course (not an empty catalog)—displaying active streak, weekly goal progress, three enrolled courses with real completion percentages, and a prominent 'Resume Lesson' card. Sync five hash routes bidirectionally with window.location.hash: (1) #/dashboard — Active mid-course learner dashboard with streak calendar strip (Mon–Sun, no dates), study stats, active course cards with illustrated covers, and quick Resume button; (2) #/catalog — Filterable Course Catalog (Topic, Level, Length) covering three complete seeded fictional courses ('Visual Data Storytelling', 'Systems Design for Product Builders', 'Everyday Sound & Acoustics') with real multi-chapter outlines, instructor bios, and student reviews; (3) #/course — Full Course Detail page with syllabus outline, learning outcomes, instructor bio, reviews, and lesson launcher; (4) #/player — Interactive Lesson Player featuring live animated HTML5 Canvas visual diagrams tailored to each course (live animated charts, system-architecture packet flows, or harmonic soundwave interference) with Play/Pause, timeline scrubber, chapter markers, speed selector (1×/1.25×/1.5×/2×), toggleable live synced Captions bar, per-lesson Markdown Notes saved to localStorage, Mark Complete button, and an interactive graded Quiz with instant explanations; (5) #/certificate — Clean printable completion certificate for [LEARNER_NAME] with course selector, serial ID, total hours, and window.print() button (zero calendar dates or 4-digit years). Bundle all 4 cohesive illustrated course cover WebP images under public/images/.

- Audience: Self-paced learners, cohort educators, and online course creators.
- Goal: Deliver an energizing, distraction-free learning workspace that feels genuinely alive mid-course from the very first pixel.
- Tone: Warm, encouraging editorial academy—structured clarity with tactile study craft.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/plus-jakarta-sans (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/plus-jakarta-sans (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (500, 600) in src/main.tsx.
  - Bundle all 4 generated cohesive editorial illustration WebP files in public/images/ and document them in ASSETS.md.
  - Persist completed lesson IDs, quiz scores, and per-lesson notes in localStorage and sync routes (#/dashboard, #/catalog, #/course, #/player, #/certificate) with window.location.hash.

## Variables
- [PLATFORM_NAME] — Platform Name (default: "Brightleaf Academy"). Fictional online course platform name
- [LEARNER_NAME] — Active Learner Name (default: "Samira Chen"). Fictional learner displayed on dashboard and certificate
- [STREAK_DAYS] — Active Streak Days (default: "12"). Current study streak counter on dashboard
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/online-learning-platform in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/online-learning-platform?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/online-learning-platform · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
