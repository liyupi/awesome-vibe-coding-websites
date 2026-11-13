# Music Theory Interactive Lesson

> Press a key, hear the interval, watch the theory light up: a playable lesson on one long page.

<a href="https://vibefather.ai/templates/music-theory-interactive-lesson?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/music-theory-interactive-lesson/af0603c9-6944-49b1-a393-b071ab0ea5ca/webp.0e611b817a.webp" width="100%" alt="Music Theory Interactive Lesson — Interactive Music Theory Lesson with Piano built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/music-theory-interactive-lesson?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

This template is a single-page music lesson that teaches intervals and chords by making the visitor play them. The page runs as one long scroll in a steady rhythm: a short concept, a hands-on widget, then a small win that fills a bright yellow bar and adds to a progress count in the header. It covers a two-octave piano played by mouse, touch or computer keyboard, a circle of fifths you drag or tap to turn, a chord builder with nine chord qualities, and an eight-round ear-training quiz that ends in a results card. All sound is synthesized in the browser with the Web Audio API, so there are no audio files to license or host. It suits music teachers, online course creators, evening schools and developers who want a working pattern for any learn-by-playing page. The look is a stage at night: a deep ultraviolet ground, coral and acid yellow accents, and twelve note colors assigned in circle-of-fifths order, so keys that sound related also look related. Those colors stay the same on the piano keys, circle wedges, chord chips and quiz feedback, and one shared state ties it all together. Turn the circle to G and the chord builder, the piano and the bottom dock all follow. To adapt it, change the brand, the lesson topic, the audience, the starting key and the instructor. The widgets stay as they are, while the copy, win tasks, chord list and quiz rounds live in one content file, so a seventh-chord course for beatmakers takes an afternoon of rewriting rather than new code. The instructor section and course details at the end can be cut if you only want the free lesson.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md) |
| Style | [Playful](../../styles/playful.md), [Dark](../../styles/dark.md) |
| Effects | Drag & Physics, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/music-theory-interactive-lesson?case=af0603c9-6944-49b1-a393-b071ab0ea5ca&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/music-theory-interactive-lesson/af0603c9-6944-49b1-a393-b071ab0ea5ca/shot_desktop.28b8e07783.webp" width="100%" alt="Music Theory Interactive Lesson — Intervals and chords, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Intervals and chords</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/music-theory-interactive-lesson?case=af0603c9-6944-49b1-a393-b071ab0ea5ca&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/music-theory-interactive-lesson?case=38377d38-e8ed-461d-be34-647da90d5d68&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/music-theory-interactive-lesson/38377d38-e8ed-461d-be34-647da90d5d68/shot_desktop.793ad02847.webp" width="100%" alt="Music Theory Interactive Lesson — Seventh chords for beatmakers, built by Claude Sonnet 5.5 in Cursor"></a><br>
<b>Seventh chords for beatmakers</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/music-theory-interactive-lesson?case=38377d38-e8ed-461d-be34-647da90d5d68&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | School or course brand | Overtone Night School |
| `[LESSON_TOPIC]` | Lesson topic | Intervals and chords |
| `[AUDIENCE]` | Who the lesson is for | Beginners who play by ear and want to name what they hear |
| `[START_KEY]` | Starting key | C |
| `[INSTRUCTOR_NAME]` | Instructor name | Marisol Adeyemi |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add music-theory-interactive-lesson` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An evening music school: set BRAND to your school, START_KEY to the key your course opens in, and replace the instructor section with your own teacher and term dates.
- A beatmaking course: set LESSON_TOPIC to seventh chords, reorder the chord list and quiz rounds toward the qualities your students use, and set AUDIENCE to producers who work by ear.
- A guitar or ukulele teacher: keep the piano and circle, but rewrite the win tasks and copy around intervals your students meet first, and set INSTRUCTOR_NAME to your own name with your photo.
- A developer building a learn-by-playing page: keep the shared state and widget rhythm, change LESSON_TOPIC and AUDIENCE, and rewrite the content file for a different subject that rewards pressing and listening.

## FAQ

### What can a visitor actually do on the Music Theory Interactive Lesson page?
Visitors play a two-octave piano with mouse, touch or computer keyboard, turn a draggable circle of fifths, build chords across nine chord qualities, and take an eight-round ear-training quiz that ends in a results card. Each section pairs a short concept with a hands-on widget and a small win that fills a yellow progress bar in the header.

### Do I need audio files or a music license to publish this lesson?
No. The Music Theory Interactive Lesson template synthesizes every note in the browser with the Web Audio API, so there are no audio files to host, license or load. Sound starts on the first key press or tap rather than on page load, which keeps the initial view quiet and avoids browser autoplay restrictions.

### How do I change the lesson topic to seventh chords or another subject?
Set LESSON_TOPIC to your subject and rewrite the copy, win tasks, chord list and quiz rounds in the single content file. The widgets, layout, colors and motion stay as they are. The template is built so a seventh-chord course for beatmakers is a rewriting job rather than new code, and the live demos show both intervals and seventh chords.

### Which variables should I set first when adapting this music lesson template?
Start with BRAND, LESSON_TOPIC, AUDIENCE and START_KEY, then INSTRUCTOR_NAME. BRAND appears in the top bar, instructor section, final band and footer. START_KEY sets where the circle of fifths, interval root and chord builder open. AUDIENCE shapes the hero lead and the FAQ, so write it as a specific group rather than a general public.

### Can I remove the instructor section and course details if I only want a free lesson?
Yes. The Music Theory Interactive Lesson template puts the instructor section and course details at the end as a closing band, and the brief notes they can be cut if you only want the free lesson. The piano, circle of fifths, chord builder and ear-training quiz work without them, and the page still ends on the quiz results card.

### How do I build a music theory interactive lesson with AI?
Copy the prompt from this page or run npx vibefather add music-theory-interactive-lesson, replace [BRAND], [LESSON_TOPIC], [AUDIENCE] and [START_KEY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Music Theory Interactive Lesson demo?
The Intervals and chords case was built by Claude Opus 5.5 in Claude Code; the Seventh chords for beatmakers case was built by Claude Sonnet 5.5 in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Music Theory Interactive Lesson template use?
Music Theory Interactive Lesson is a single-page site built with Tailwind CSS, Motion and React, with drag & physics, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Music Theory Interactive Lesson template for a client or a business?
The Music Theory Interactive Lesson prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Music Theory Interactive Lesson template work on mobile?
Yes. Every Music Theory Interactive Lesson build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Music Theory Interactive Lesson on VibeFather](https://vibefather.ai/templates/music-theory-interactive-lesson?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
