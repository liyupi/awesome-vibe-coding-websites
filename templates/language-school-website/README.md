# Language School Website

> A warm school website with course filters, a placement quiz, clear tuition, and easy enrollment.

<a href="https://vibefather.ai/templates/language-school-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/language-school-website/f265748c-41bd-476d-9137-25355ffe8450/webp.5d7c8e0782.webp" width="100%" alt="Language School Website — Language School Website with Placement Quiz built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/language-school-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Language School Website is a warm, content-rich site for independent schools, community language programs, and small teaching studios. It brings the essential enrollment journey into one polished page: visitors can compare courses by language and level, take a ten-question placement quiz, review weekly schedules and prices, meet their teachers, and send an enrollment request. The quiz is more than a decorative modal. It includes scored answer banks, progress tracking, level recommendations, and a direct route back to matching courses.

The visual direction pairs an editorial serif with a clean sans serif, creamy paper tones, deep green type, and bright persimmon and cobalt accents. A generous classroom photograph anchors the first screen, while consistent fictional teacher portraits and documentary-style learning scenes make the school feel established. Restrained reveals, animated quiz transitions, responsive tables, and useful filter states keep the experience lively without getting in the way.

The defaults introduce Cedar & Verb, an invented neighborhood school offering Spanish, French, and Italian classes in Portland. Swap a handful of variables to change the brand, languages, audience, location, and base price; the builder then rewrites the surrounding course, teacher, schedule, and enrollment copy to fit. The alternate case turns the same system into a different community language studio. All interactions run in the browser, including quiz scoring and form confirmation, so the finished site can be hosted as static files. It is a practical starting point for educators who need clear information and a convincing path from first visit to the right class.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/language-school-website?case=f265748c-41bd-476d-9137-25355ffe8450&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/language-school-website/f265748c-41bd-476d-9137-25355ffe8450/shot_desktop.c28653eeae.webp" width="100%" alt="Language School Website — Neighborhood language school, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Neighborhood language school</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/language-school-website?case=f265748c-41bd-476d-9137-25355ffe8450&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/language-school-website?case=bbb4f300-c9ec-4b9b-a32b-e783ba8346ea&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/language-school-website/bbb4f300-c9ec-4b9b-a32b-e783ba8346ea/shot_desktop.52fd7589de.webp" width="100%" alt="Language School Website — Community language studio, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Community language studio</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/language-school-website?case=bbb4f300-c9ec-4b9b-a32b-e783ba8346ea&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | School name | Cedar & Verb |
| `[COURSE_LANGUAGES]` | Languages taught | Spanish, French, and Italian |
| `[AUDIENCE]` | Learner audience | adults learning for travel, work, and connection |
| `[LOCATION]` | School location | Portland, Oregon |
| `[BASE_PRICE]` | Group course price | $240 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add language-school-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A community language studio: set BRAND and LOCATION to your neighborhood, keep three languages in COURSE_LANGUAGES, and adjust BASE_PRICE for shorter evening courses.
- A private tutor teaching one language: reduce COURSE_LANGUAGES to your subject, rewrite AUDIENCE for exam preparation, and simplify the schedule to your weekly slots.
- A university language department: set AUDIENCE to students and staff, use LOCATION for your campus, and rewrite course levels around your term structure.
- A corporate language training provider: point AUDIENCE at teams and professionals, raise BASE_PRICE for group contracts, and rework teacher bios toward workplace teaching.

## FAQ

### How does the placement quiz on the Language School Website template work?
The Language School Website template includes a ten-question placement quiz with a scored answer bank for each language in COURSE_LANGUAGES. Visitors answer one question at a time with progress tracking, get a level recommendation announced through aria-live, and are routed back to matching courses in the course finder. Scoring runs in the browser, so no backend is needed and the latest result is stored in localStorage.

### What do I need to change first in the Language School Website template to make it my own school?
Start with the five variables: BRAND for your school name, COURSE_LANGUAGES for the languages you teach, AUDIENCE for who the classes serve, LOCATION for your city and region, and BASE_PRICE for your eight-week group course price. The builder then rewrites the hero, course records, quiz banks, schedules, teacher bios, and enrollment copy to match. Review the teachers and schedule sections after the swap.

### Does the Language School Website template include tuition prices and weekly schedules?
The Language School Website template shows transparent weekly schedules and prices alongside each course, using BASE_PRICE as the eight-week group course price. Course cards list the language, level, meeting days and times, class length, and maximum group size. The schedule section presents recurring rows in responsive tables, so prospective students can compare time commitments before sending an enrollment request.

### Can I host the Language School Website template without a backend or server?
The Language School Website template builds to static files in a dist folder with no backend, server code, or external APIs. Quiz scoring, course filters, the mobile menu, and form confirmation all run in the browser. You can host the finished site on any static hosting service and keep enrollment requests as a client-side confirmation until you connect your own form endpoint.

### Which languages can I teach with the Language School Website template?
The Language School Website template is built around COURSE_LANGUAGES, which defaults to Spanish, French, and Italian with courses and a quiz bank for each. When you change the variable, the builder rewrites every course record, question bank, schedule row, and dependent headline. The default school, Cedar & Verb in Portland, Oregon, is invented sample content meant to be replaced with your own.

### How do I build a language school website with AI?
Copy the prompt from this page or run npx vibefather add language-school-website, replace [BRAND], [COURSE_LANGUAGES], [AUDIENCE] and [LOCATION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Language School Website demo?
The Neighborhood language school case was built by Kimi K3.1 Pro in Kimi Code; the Community language studio case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Language School Website template use?
Language School Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Language School Website template for a client or a business?
The Language School Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Language School Website template work on mobile?
Yes. Every Language School Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Language School Website on VibeFather](https://vibefather.ai/templates/language-school-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
