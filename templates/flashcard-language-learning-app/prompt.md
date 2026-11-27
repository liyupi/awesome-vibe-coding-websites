# Flashcard Language Learning App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A warm, cheerful responsive mobile-first spaced-repetition flashcard & vocabulary study PWA ([BRAND]) for [LEARNER_NAME] with a [DAILY_GOAL] daily review target. Mobile (<768px) uses a bottom 4-tab bar (Study, Decks, Quiz, Stats); desktop uses a left sidebar + wide study workspace. No fake phone frame.

- Audience: Language learners, travelers picking up practical phrases, and students using spaced repetition on phone and desktop.
- Goal: Make daily flashcard review tactile, rewarding, and fast with 3D flip cards, spaced-repetition intervals, pronunciation audio, and instant multiple-choice quizzes.
- Tone: Warm, encouraging, crisp paper-card clarity, clutter-free.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: lucide-react (ISC), @fontsource/fraunces (OFL), @fontsource/plus-jakarta-sans (OFL), @fontsource/jetbrains-mono (OFL)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/fraunces (600, 700), @fontsource/plus-jakarta-sans (400, 500, 600, 700), and @fontsource/jetbrains-mono (400, 500, 600) locally in src/main.tsx.
  - Seed 4 starter decks (Travel Spanish, Japanese Kana & Phrases, French Café, Design Terms) with 8 realistic cards each (32 total) in src/data/decksSeed.ts; persist SRS intervals, mastery counts, custom cards, and daily review progress in localStorage.
  - Use CSS 3D preserve-3d / backface-visibility for smooth flashcard flips (with instant crossfade fallback under prefers-reduced-motion).
  - Use window.speechSynthesis for pronunciation playback with a graceful inline visual pulse fallback when unsupported.

## Variables
- [BRAND] — Study app name (default: "KanaLeaf"). Fictional flashcard PWA name
- [LEARNER_NAME] — Learner display name (default: "Elena Brooks"). Fictional learner profile name
- [DAILY_GOAL] — Daily review goal (default: "20 cards"). Daily target shown on goal ring
- [PRIMARY_DECK] — Default active deck (default: "Travel Spanish"). Initial selected deck on Study tab
- [STREAK_LABEL] — Active streak badge (default: "9-Day Study Streak"). Shown in sidebar and Stats header
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/flashcard-language-learning-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Cheerful Paper `#FAF9F5` — Warm tactile paper canvas
- Card White `#FFFFFF` — 3D flashcard faces, deck cards, and quiz panels
- Study Ink `#18181B` — Primary vocabulary words and headings
- Cobalt Blue `#2563EB` — Active tabs, Flip/Good CTA, pronunciation button, and goal arc
- Mastery Mint `#10B981` — Easy rating, correct quiz answers, and streak heatmap highlights
- Warm Gold `#F59E0B` — Hard rating, streak flame badge, and phonetic highlights

### Typography
- Editorial vocabulary & display headings: Fraunces (OFL), weights 600/700
- UI controls, definitions, and examples: Plus Jakarta Sans (OFL), weights 400/500/600/700
- SRS intervals, phonetic guides, and streak counters: JetBrains Mono (OFL), weights 400/500/600

### Layout & motion
- Spacing: Mobile (<768px) centers the tactile flashcard cleanly with 84px bottom clearance above the fixed 64px tab bar. Desktop (>=768px) displays a 240px left sidebar + wide centered study workspace with deck switcher and live session telemetry.
- Radius: 20px for the 3D flashcard stage, 14px for deck and quiz cards, 999px for SRS rating badges and filter chips.
- Motion: Tactile 3D rotateY(180deg) flip animation on card tap or Spacebar.
- Motion: Smooth green/gold/cobalt visual feedback on Quiz answers and SRS interval updates.
- Motion: Honors prefers-reduced-motion; all content visible immediately.
- Imagery: 100% crisp code-drawn study visuals: SVG daily review goal ring, 28-day study consistency heatmap, per-deck mastery progress bars, and Lucide icons.

## Pages & Sections
### [BRAND] — Spaced-Repetition Flashcards (`index.html`)
1. **Adaptive Mobile Bottom Tabs & Desktop Sidebar** — Mobile (<768px): compact [BRAND] header with active deck pill + Create Card '+' button, plus fixed bottom 4-tab bar (Study, Decks, Quiz, Stats). Desktop (>=768px): 240px left sidebar with [BRAND] emblem, [STREAK_LABEL] badge, 4 nav tabs, live daily review mini-meter, and '+ New Card' CTA.
   Layout: Full-viewport responsive paper PWA; zero fake phone borders.
2. **Study View — 3D Flip Flashcard & SRS Ratings** — Quick deck switcher pills above a generous interactive 3D Flashcard displaying deck badge, front term, phonetic pronunciation hint, and a SpeechSynthesis Listen button. Clicking the card (or pressing Space) flips smoothly to the back revealing translation, example sentence, and usage note. Below: 4 tactile spaced-repetition rating buttons (Again · 10m, Hard · 1d, Good · 3d, Easy · 7d) that compute and persist next-review intervals in localStorage while advancing the queue and incrementing today's reviewed count.
   Layout: Wide centered study stage + right session progress card on desktop; full-width card on mobile.
3. **Decks View & Create Custom Card Modal** — Displays all 4 starter decks (Travel Spanish, Japanese Kana & Phrases, French Café, Design Terms) with card counts, due count, mastery progress bars, 'Study Now' button, and '+ Add Card' modal letting learners create custom front/phonetic/back/example cards persisted to localStorage.
   Layout: 2-column deck grid on desktop; stacked cards on mobile.
4. **Quiz View — 4-Option Multiple Choice With Streak** — Fast recall quiz drawing real prompts and 3 distractors from the active deck. Tracks live quiz streak, accuracy percentage, instant emerald/rose option feedback, and 'Next Question' flow.
   Layout: Centered responsive quiz card with 2x2 option buttons on desktop and stacked buttons on mobile.
5. **Stats View — Daily Goal Ring & 28-Day Streak Grid** — Displays an animated SVG Daily Study Goal ring (toward [DAILY_GOAL]), 3 summary KPI cards (Active Streak, Cards Mastered, Quiz Accuracy), a 28-day Mint consistency heatmap grid, and per-deck mastery breakdown.
   Layout: 2-column analytics grid on desktop; stacked cards on mobile.

## Assets
- icon: Install lucide-react (ISC) for volume pronunciation, flip arrows, flame streak, quiz checkmarks, plus button, and tab icons.
- font: Self-host Fraunces, Plus Jakarta Sans, and JetBrains Mono via @fontsource packages (OFL).
- image: Daily goal ring and 28-day study heatmap are rendered cleanly in inline SVG. Zero external images.

## Don'ts
- No fake phone bezel or fixed narrow mobile container on desktop screens.
- No real language-app mascots, trademarks, or copyrighted course content.
- No external TTS APIs, CDN scripts, Google Fonts links, or source maps; always set base: './'.
- No empty first screen; seed 4 starter decks (32 cards) ready to flip immediately.
- No horizontal overflow on 390x844 mobile or 1440x900 desktop.
- No mention of VibeFather or competitors except the optional [CREDIT] slot.

---
— Prompt by VibeFather · https://vibefather.ai/t/flashcard-language-learning-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
