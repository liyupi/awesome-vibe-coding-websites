# Workout & Gym Logger App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A dark, energetic, responsive mobile-first strength training & gym workout logger PWA ([BRAND]) for [ATHLETE_NAME] running '[PROGRAM_NAME]'. Mobile (<768px) uses a bottom tab bar (Today, Programs, Exercises, Progress) + floating rest timer pill; desktop adapts into a left sidebar + split workout & telemetry layout. No fake phone shell.

- Audience: Strength lifters, gym-goers, and personal training clients logging sets, rest intervals, PRs, and weekly lifting volume.
- Goal: Provide a zero-friction gym floor logger with instant set check-offs, automatic rest timers, PR detection, and visual progress tracking persisted in localStorage.
- Tone: Focused, athletic, crisp, high-contrast, no fluff or medical claims.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL), @fontsource/inter (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (500, 600, 700), @fontsource/inter (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Store seeded 4-day push/pull/legs routine, exercise library with SVG form specs, and 3 weeks of historical workout logs in src/data/workoutSeed.ts; persist active session, custom sets, PR records, and completed workouts in localStorage.
  - Synthesize an optional Web Audio API beep tone (no external audio files) when the floating rest timer hits 00:00.
  - Never draw a fake phone bezel; implement true three-breakpoint responsive layout (mobile bottom tab bar <768px, desktop left sidebar + split panels >=768px).

## Variables
- [BRAND] — Workout app name (default: "VoltRep"). Fictional strength logger PWA name
- [ATHLETE_NAME] — Lifter profile name (default: "Alex Carter"). Fictional athlete name
- [PROGRAM_NAME] — Active training split (default: "4-Day Push / Pull / Legs"). Seeded program title
- [UNIT_LABEL] — Weight unit (default: "lbs"). Default load unit (lbs or kg)
- [WEEKLY_GOAL] — Weekly consistency target (default: "4 Sessions / Week"). Displayed in Progress & Today views
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/workout-gym-logger-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/workout-gym-logger-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/workout-gym-logger-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
