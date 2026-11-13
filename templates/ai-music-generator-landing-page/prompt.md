# AI Music Generator Landing Page

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a fictional AI music concept described as [PRODUCT] for [AUDIENCE]. It has a functional static audio audition demo, not a live generation backend.

- Audience: [AUDIENCE] who want to explore a musical direction before editing.
- Goal: Hear four original bundled tracks, change genre/mood, inspect a genuine analyzer and compare credit plans without claiming cloud AI work occurred.
- Tone: Musically literate and precise; label every demo boundary close to its control.

## Stack
- Framework: Vite + React + TypeScript
- Styling: Vanilla CSS
- Libraries: vite (MIT), react (MIT), react-dom (MIT), typescript (Apache-2.0), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set Vite base to ./ and build.sourcemap to false. Use a single src/content.ts for all editable content and fully rewrite its data for variable changes.
  - Implement responsive components and CSS tokens in src/styles.css. Bundle fonts through the listed Fontsource packages; import only the weights actually used.
  - Provide semantic native controls and keyboard/touch alternatives; implement focus-managed dialogs and local-only validated form feedback.
  - Implement scripts/make-demo-audio.mjs using only Node built-in fs: synthesize original PCM16 mono WAV files at 22050Hz, four 16-second seamless loops, below 3MB combined. npm run build must run node scripts/make-demo-audio.mjs && vite build. No downloads, packages, samples, copyrighted melodies or external music.
  - Audio generation specification: deterministic seeded noise, sine/triangle oscillators, kick with exponential 95→42Hz pitch sweep and decaying envelope, high-pass-like noise hats, soft clipped bass, original 8-note arpeggio patterns. 120 BPM/eight 4-beat bars per 16s loop; each track uses a distinct scale, drum pattern and patch. Apply 10ms boundary fades and normalize peak <=.75, avoid clipping. Save public/audio/prism-pulse.wav, soft-current.wav, paper-steps.wav and low-orbit.wav. Write source composition/ownership notes in ASSETS.md.
  - Create one HTMLAudioElement, one AudioContext and one MediaElementAudioSourceNode per mounted player. Connect source→AnalyserNode→GainNode→destination once; fftSize=1024, smoothingTimeConstant=.8. Only resume/play after user gesture; catch errors visibly. Use time-domain and frequency data from this node, not random animation. Pause requestAnimationFrame when paused/hidden, clean up on unmount.

## Variables
- [BRAND] — Brand (default: "Prismtone"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [AUDIENCE] — Audience (default: "independent video makers"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [PRODUCT] — Product (default: "a music sketchpad"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [STARTER_PRICE] — Starter Price (default: "12"). Rewrite every related headline, item, label, alt and confirmation for this value.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/ai-music-generator-landing-page in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/ai-music-generator-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/ai-music-generator-landing-page · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
