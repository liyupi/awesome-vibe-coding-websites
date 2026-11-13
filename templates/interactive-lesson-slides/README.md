# Interactive Lesson Slides

> A working lesson deck with instant quizzes, a live code slide, drawing tools and a link to every slide.

<a href="https://vibefather.ai/templates/interactive-lesson-slides?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/interactive-lesson-slides/4188fe48-fb9e-4033-8327-bb2c87c97d5c/webp.ee063d3ddb.webp" width="100%" alt="Interactive Lesson Slides — Lesson Slide Deck with Quizzes and Live Code built by Claude Opus 5.5 and Claude Sonnet 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/interactive-lesson-slides?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Interactive Lesson Slides is a working lesson deck that runs in the browser, not a landing page about one. It opens straight on the deck: an outline on the left, a 16:9 chalk-green slide stage in the center, and a slim control bar below with progress, slide number, drawing tools and a copy-link button. Twelve slides walk through a sample lesson on sorting, and each slide type behaves differently. Multiple-choice questions reveal the answer and a short explanation the moment a learner clicks, and a running score follows them through the outline to the recap. A drag-to-reorder check and a fill-in-the-blank check test recall in other ways. The live code slide pairs an editor with a console that runs JavaScript in a sandboxed iframe with no network access, so errors and endless loops stay contained.

It suits teachers, course creators, bootcamp instructors and workshop leads who want a deck that checks understanding while they teach, and who are happy to host a static site. There is no backend: answers, edited code and pen marks stay in the learner's browser, and every slide has its own URL that can be dropped into a chat or a lesson plan.

The design pairs warm paper panels with a dark green board, one marker-yellow accent and friendly serif headlines. Diagrams are drawn in SVG with a slightly rough chalk line, and the code theme is built from the same palette. On phones, the outline becomes a drawer and the code panes stack.

To adapt it, change the school, lesson title, course label, instructor and audience, then have your agent rewrite the single content file. The slide types, order and layout stay the same, so a statistics session or a data workshop keeps the same look. Swap the instructor portrait for your own photo.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Interactive Explainer](../../types/explainer.md), [Slide Deck](../../types/slides.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md) |
| Effects | Drag & Physics, Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + codemirror + @codemirror/view + @codemirror/state |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Claude Code, [Claude Sonnet 5.5](../../models/claude-sonnet-5-5.md) in Claude Code |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-lesson-slides?case=4188fe48-fb9e-4033-8327-bb2c87c97d5c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-lesson-slides/4188fe48-fb9e-4033-8327-bb2c87c97d5c/shot_desktop.3985efd5ef.webp" width="100%" alt="Interactive Lesson Slides — Sorting lesson for beginners, built by Claude Opus 5.5 in Claude Code"></a><br>
<b>Sorting lesson for beginners</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/interactive-lesson-slides?case=4188fe48-fb9e-4033-8327-bb2c87c97d5c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/interactive-lesson-slides?case=b51fae47-e4fe-41cb-9421-fb764515c109&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/interactive-lesson-slides/b51fae47-e4fe-41cb-9421-fb764515c109/shot_desktop.7003d11fcd.webp" width="100%" alt="Interactive Lesson Slides — Statistics session for teens, built by Claude Sonnet 5.5 in Claude Code"></a><br>
<b>Statistics session for teens</b><br>
<sub>Built by <b>Claude Sonnet 5.5</b> in Claude Code · <a href="https://vibefather.ai/templates/interactive-lesson-slides?case=b51fae47-e4fe-41cb-9421-fb764515c109&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | School or course provider | Tallow Street Code School |
| `[LESSON_TITLE]` | Lesson title | How Sorting Works |
| `[COURSE_LABEL]` | Course and lesson position | Intro to Programming, Unit 4, Lesson 2 |
| `[INSTRUCTOR]` | Instructor name | Ines Halloran |
| `[AUDIENCE]` | Who the lesson is for | Tuesday evening beginners |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add interactive-lesson-slides` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A statistics teacher: set BRAND to your school and LESSON_TITLE to your topic, then rewrite the stepper and bars diagrams to plot your own numbers.
- A coding bootcamp instructor: keep the live code slide but swap the starter JavaScript and check answers for your language basics.
- A workshop lead running data sessions: set AUDIENCE to your group and turn the multiple-choice slides into questions about your dataset.
- A solo course creator: set INSTRUCTOR to your name, swap the portrait, and rewrite the recap slide to point at your next lesson.

## FAQ

### How do I change the lesson content in the Interactive Lesson Slides template?
The Interactive Lesson Slides template keeps all copy in one content file, with the variables BRAND, LESSON_TITLE, COURSE_LABEL, INSTRUCTOR and AUDIENCE at the top. Have your AI agent set those five values, then rewrite the twelve slides' teaching text, starter code, check answers and explanations for your lesson. Keep the slide types, their order and the layout, and the deck behaves the same.

### What can learners actually do on the Interactive Lesson Slides deck?
The Interactive Lesson Slides template gives learners instant feedback on multiple-choice questions with a short explanation and a running score, a drag-to-reorder check and a fill-in-the-blank check, and a live code slide where they edit and run JavaScript in a sandboxed iframe with no network access. They can also draw on any slide and copy a link to any slide.

### Is the code editor in the Interactive Lesson Slides template safe to run student code?
The Interactive Lesson Slides template runs code in a hidden iframe with sandbox="allow-scripts" and no same-origin access, under a content policy that blocks everything but inline scripts. Console logs and errors come back to the page, and anything still running after 3000 ms is stopped and replaced with a timeout message. There is no backend, so edited code stays in the learner's browser.

### Can I link a learner straight to one slide in the Interactive Lesson Slides template?
Every slide in the Interactive Lesson Slides template has its own URL in the form #/slide/7, and the copy-link button in the control bar grabs it. Paste that link into a chat, a lesson plan or a learning system and the deck opens on that slide. Browser back and forward work, and an empty or out-of-range link is corrected to the nearest valid slide.

### What should I change first when turning the Interactive Lesson Slides template into my own lesson?
Start with the five variables in the content file: BRAND, LESSON_TITLE, COURSE_LABEL, INSTRUCTOR and AUDIENCE. Then replace the instructor portrait with your own photo and rewrite the twelve slides for your topic, keeping the seven slide types in the same order. The chalk-green board, marker-yellow accent and serif headlines stay as they are, so a statistics session or data workshop keeps the same look.

### How do I build an interactive lesson slides with AI?
Copy the prompt from this page or run npx vibefather add interactive-lesson-slides, replace [BRAND], [LESSON_TITLE], [COURSE_LABEL] and [INSTRUCTOR] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Interactive Lesson Slides demo?
The Sorting lesson for beginners case was built by Claude Opus 5.5 in Claude Code; the Statistics session for teens case was built by Claude Sonnet 5.5 in Claude Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Interactive Lesson Slides template use?
Interactive Lesson Slides is a single-page site built with Tailwind CSS and React, with drag & physics, page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Interactive Lesson Slides template for a client or a business?
The Interactive Lesson Slides prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Interactive Lesson Slides template work on mobile?
Yes. Every Interactive Lesson Slides build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Interactive Lesson Slides on VibeFather](https://vibefather.ai/templates/interactive-lesson-slides?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
