# News Magazine Homepage

> Broadsheet front page with a serif masthead, dense story grid, section fronts, readable article pages and a newsletter box.

<a href="https://vibefather.ai/templates/news-magazine-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/news-magazine-homepage/77202bfe-c231-4ca2-b7ab-6bb67a1bf5fd/webp.79129363b6.webp" width="100%" alt="News Magazine Homepage — News Magazine Front Page Grid built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/news-magazine-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A two-page news magazine for an invented city paper: a masthead era front page (heavy serif nameplate, kicker line, section bar) over a dense grid — a lead story with a wide documentary photo, a secondary rail, and three section fronts (city, culture, business) separated by hairlines, each with a story card and a list of headlines; a newsletter box woven into the grid; and article pages (?a=<slug>, first article without one) with readable typography — a held measure, drop cap, pull quote, a two-column fact box, related stories and the same newsletter box. Six editorial photographs made for the template in one documentary style anchor the grid. The default publishes an invented paper for an invented city, but the structure suits any local, niche or community publication. The look is broadsheet ink: warm paper ground, heavy serif nameplate, ink text, one red accent, hairline rules. All copy lives in one typed file; swapping the variables rewrites the paper. No dates from the real clock; edition lines are static sample text.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Style | [Swiss](../../styles/swiss.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/news-magazine-homepage?case=77202bfe-c231-4ca2-b7ab-6bb67a1bf5fd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/news-magazine-homepage/77202bfe-c231-4ca2-b7ab-6bb67a1bf5fd/shot_desktop.4c7c5cd0b3.webp" width="100%" alt="News Magazine Homepage — City weekly paper, built by GLM-5.3 in ZCode"></a><br>
<b>City weekly paper</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/news-magazine-homepage?case=77202bfe-c231-4ca2-b7ab-6bb67a1bf5fd&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/news-magazine-homepage?case=2eb80a7f-7df3-4541-b72c-5eec5738757f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/news-magazine-homepage/2eb80a7f-7df3-4541-b72c-5eec5738757f/shot_desktop.c507dc36ab.webp" width="100%" alt="News Magazine Homepage — Coastal town paper, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Coastal town paper</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/news-magazine-homepage?case=2eb80a7f-7df3-4541-b72c-5eec5738757f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[PAPER]` | Paper name | The Marlow Ledger |
| `[CITY]` | City | Marlow |
| `[BEAT]` | Coverage | city hall, the riverfront and the people who use both |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add news-magazine-homepage` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighborhood newsletter: set PAPER and CITY to your area, narrow BEAT to local streets and schools, and swap the section fronts for your own recurring columns.
- A trade or industry journal: keep the masthead and dense grid, set BEAT to your sector, and replace the city and culture fronts with your beats and a jobs or events list.
- A student newspaper: point PAPER at the school paper, set CITY to the campus, and use the newsletter box to collect addresses for a weekly digest.
- A food and dining zine: keep the serif nameplate, set BEAT to restaurants and markets, and use the fact box rows for opening hours and price ranges.

## FAQ

### How do I change the paper's name and the city it covers in the News Magazine Homepage template?
The News Magazine Homepage template reads its identity from three variables: PAPER sets the nameplate, page titles, footer and the newsletter address, CITY sets the datelines and kicker, and BEAT sets the coverage phrase used in section blurbs and the newsletter pitch. Change those three and the paper rewrites itself, but you still need to rewrite every headline, standfirst and photo caption in the content file so they match the new place.

### How does the newsletter signup work on the News Magazine Homepage template?
The newsletter box on the News Magazine Homepage template collects an email in the browser and stores it in local storage under the paper's slug, then shows a confirmation line. Nothing is sent to a server or a mailing list. To collect real subscribers, connect the form to your email provider's signup endpoint or embed their form in place of the box.

### How do article pages work on the News Magazine Homepage template?
The News Magazine Homepage template has two pages: the front page and a single article page that reads a slug from the address, such as ?a=riverfront-budget. The first article opens when no slug is given, and an unknown slug falls back to that first article rather than a not-found page. Each article carries a headline, standfirst, byline, photo, body paragraphs, an optional pull quote, a fact box and related stories.

### What should I change first in the News Magazine Homepage template to make it my own publication?
Start with PAPER, CITY and BEAT, then replace the sample articles in the content file: slugs, sections, kickers, headlines, standfirsts, bylines, body paragraphs and the fact box rows. Swap the six editorial photographs for your own in the same documentary style and rewrite the captions. Finally, adjust the section fronts if your paper covers different ground than city, culture and business.

### Is the News Magazine Homepage template free to use?
The News Magazine Homepage template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, client work and the source code of the demos require Pro. The brief, stack and variables are shown publicly on the template page, and Pro members see the full prompt.

### How do I build a news magazine homepage with AI?
Copy the prompt from this page or run npx vibefather add news-magazine-homepage, replace [PAPER], [CITY] and [BEAT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the News Magazine Homepage demo?
The City weekly paper case was built by GLM-5.3 in ZCode; the Coastal town paper case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the News Magazine Homepage template use?
News Magazine Homepage is a 2-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the News Magazine Homepage template for a client or a business?
The News Magazine Homepage prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the News Magazine Homepage template work on mobile?
Yes. Every News Magazine Homepage build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [News Magazine Homepage on VibeFather](https://vibefather.ai/templates/news-magazine-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
