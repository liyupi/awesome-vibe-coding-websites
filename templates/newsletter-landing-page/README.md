# Newsletter Landing Page

> Sign-up page for a writer's newsletter with the author's portrait, issue previews, reader quotes, an archive and a sticky subscribe form.

<a href="https://vibefather.ai/templates/newsletter-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/newsletter-landing-page/22ff8f0c-a2ed-4776-85bc-476994c677bc/webp.a1440f9241.webp" width="100%" alt="Newsletter Landing Page — Newsletter Page with Archive built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/newsletter-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page sign-up page for a writer's newsletter: the name and one-line promise beside a subscribe form and three proof points, the three latest issues previewed as readable cards, a subscriber figure with a plain sample-data note, four reader testimonials, a ten-issue archive list, a 'what lands in your inbox' section and an unsubscribe promise — with a sticky subscribe bar that follows once the hero form scrolls away. The default content follows an invented letter about the craft of small software teams, written every Tuesday at 6am by an invented author, but the page suits any newsletter: change the name, author, topic, cadence and subscriber figure and every section still reads true. The subscribe form validates inline, confirms with a small welcome card and remembers the reader in the browser — nothing is submitted anywhere. The look is paper editorial: warm paper, deep brown-black ink, one muted red accent for links and the form, Newsreader for both display and body with a Space Mono eyebrow voice, drop caps on issue previews and an envelope-styled latest-issue card with a drawn stamp. To adapt it, swap the variables and rewrite the copy in one content file; issues, quotes and archive all read from it.

| | |
|---|---|
| Category | [Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) |
| Site type | [Personal Site](../../types/personal.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/newsletter-landing-page?case=22ff8f0c-a2ed-4776-85bc-476994c677bc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/newsletter-landing-page/22ff8f0c-a2ed-4776-85bc-476994c677bc/shot_desktop.ce0d643709.webp" width="100%" alt="Newsletter Landing Page — Software-craft newsletter, built by GLM-5.3 in ZCode"></a><br>
<b>Software-craft newsletter</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/newsletter-landing-page?case=22ff8f0c-a2ed-4776-85bc-476994c677bc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/newsletter-landing-page?case=be54a155-c4e3-49ab-8a79-efd076ceaa8d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/newsletter-landing-page/be54a155-c4e3-49ab-8a79-efd076ceaa8d/shot_desktop.b821aa1248.webp" width="100%" alt="Newsletter Landing Page — Rail travel newsletter, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Rail travel newsletter</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/newsletter-landing-page?case=be54a155-c4e3-49ab-8a79-efd076ceaa8d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Newsletter name | The Margin Note |
| `[AUTHOR]` | Author | June Okafor |
| `[TOPIC]` | What it's about | the craft of small software teams |
| `[CADENCE]` | Cadence | Tuesdays, 6am |
| `[SUBS]` | Subscriber figure | 11,204 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add newsletter-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A working journalist launching a personal dispatch: set BRAND and AUTHOR to your own name, TOPIC to your beat, and swap the three issue previews for recent stories you have filed.
- A small studio founder writing about design process: set TOPIC to how you work, rewrite the quotes from client feedback, and point the archive at past project notes.
- A teacher or researcher sharing a field notebook: set CADENCE to term time, replace the issue previews with lesson or reading notes, and keep the inbox section listing what readers receive.
- A rail travel writer: set BRAND and TOPIC to routes and journeys, rewrite the envelope card as the latest dispatch, and swap the archive for past trip letters.

## FAQ

### How do I change the newsletter name, author and topic on the Newsletter Landing Page template?
The Newsletter Landing Page template keeps every string in one content file, so you set BRAND to your newsletter name, AUTHOR to your name, TOPIC to your one-line subject and CADENCE to when the letter lands, then rewrite the headlines, promise line, issue previews and quotes to match. The masthead, title, footer, email address and browser storage keys all read from those variables, so one edit updates the whole page.

### Does the subscribe form on the Newsletter Landing Page actually send emails or store addresses?
The subscribe form on the Newsletter Landing Page validates the address inline, shows a small welcome card and remembers the reader in the browser, but nothing is submitted anywhere. There is no backend and no external API. To collect real addresses you connect the form to your own mailing list service, and until then the page works as a faithful preview of the sign-up flow.

### What sections does the Newsletter Landing Page include besides the sign-up form?
The Newsletter Landing Page is one page with a two-column hero carrying the name, promise, subscribe form and three proof points, then three issue previews as readable cards, a subscriber figure labeled as sample data, four reader quotes, a ten-issue archive list, a what-lands-in-your-inbox section and an unsubscribe promise. A sticky subscribe bar follows once the hero form scrolls away and hides once the reader subscribes.

### Can I use the Newsletter Landing Page template for a real newsletter and is it free?
The Newsletter Landing Page template is free for personal, non-commercial use under CC BY-NC 4.0, which covers a writer's own letter. Commercial or client work needs Pro, and Pro also unlocks the full prompt and the demo source code. The default content is an invented letter about small software teams by an invented author, so replace the variables and copy before publishing.

### How do I edit the issue previews, reader quotes and archive on the Newsletter Landing Page?
Issue previews, reader quotes and the ten-issue archive on the Newsletter Landing Page all read from the same content file as the rest of the copy. You rewrite each issue title and body, each quote with its reader context, and each archive entry with its number and category, and every section updates without touching the layout. Keep the copy in the letter's warm, precise voice so the page still reads as one publication.

### How do I build a newsletter landing page with AI?
Copy the prompt from this page or run npx vibefather add newsletter-landing-page, replace [BRAND], [AUTHOR], [TOPIC] and [CADENCE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Newsletter Landing Page demo?
The Software-craft newsletter case was built by GLM-5.3 in ZCode; the Rail travel newsletter case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Newsletter Landing Page template use?
Newsletter Landing Page is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Newsletter Landing Page template for a client or a business?
The Newsletter Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Newsletter Landing Page template work on mobile?
Yes. Every Newsletter Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Portfolios, Studios & Blogs](../../README.md#portfolios-studios--blogs) · [Newsletter Landing Page on VibeFather](https://vibefather.ai/templates/newsletter-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
