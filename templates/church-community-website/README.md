# Church Community Website

> Single-page church site with service times, events, a filterable sermon archive, groups, giving and plan-your-visit.

<a href="https://vibefather.ai/templates/church-community-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/church-community-website/026bf48b-a9ed-44ad-83fc-d32b079489e7/webp.d1b49e82f2.webp" width="100%" alt="Church Community Website — Church Site with Sermon Archive built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/church-community-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page website for a local church community: a sanctuary-in-morning-light hero with a warm welcome line and a plan-your-visit CTA; service times with an open-now indicator and what-to-expect; four recurring events (weekday-named); a sermon archive of eight entries filterable by series and speaker; six small groups with meeting patterns; a quiet giving section describing ways to give without processing payments; a plan-your-visit three-step strip with a client-side 'say hello' form; and a pastor portrait (AI-generated fictional person) anchoring the welcome. The default content follows an invented non-denominational community church, but the structure suits any congregation: change the name, city and pastor line and every section still reads true. The look is welcoming light: warm white and soft stone, a deep teal accent, gentle serif headlines over a humanist sans, sanctuary-light photography and calm reveals. Imagery stays architectural — light, brick, gathering spaces — with no liturgical-specific symbols and no congregation faces. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Events & Communities](../../README.md#events--communities) |
| Site type | [Event](../../types/event.md) |
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
<a href="https://vibefather.ai/templates/church-community-website?case=026bf48b-a9ed-44ad-83fc-d32b079489e7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/church-community-website/026bf48b-a9ed-44ad-83fc-d32b079489e7/shot_desktop.444e559b27.webp" width="100%" alt="Church Community Website — Neighborhood community church, built by GLM-5.3 in ZCode"></a><br>
<b>Neighborhood community church</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/church-community-website?case=026bf48b-a9ed-44ad-83fc-d32b079489e7&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/church-community-website?case=f8e2cd04-f774-448b-8548-4f28a084acc9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/church-community-website/f8e2cd04-f774-448b-8548-4f28a084acc9/shot_desktop.b12a763480.webp" width="100%" alt="Church Community Website — City center church, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>City center church</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/church-community-website?case=f8e2cd04-f774-448b-8548-4f28a084acc9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[CHURCH]` | Church name | Cornerstone Commons |
| `[CITY]` | City | Nashville, Tennessee |
| `[PASTOR]` | Pastor | Pastor Elena Marsh |
| `[VIBE]` | Vibe | neighborhood, unplugged and sincere |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add church-community-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A neighborhood congregation: set CHURCH, CITY, PASTOR and VIBE, then rewrite the welcome note and what-to-expect copy in your own voice.
- A city-center church: update the hero line and directions for transit and parking, and adjust service times so the open-now indicator reads correctly.
- A small group network: replace the six group cards with your meeting patterns and link the say-hello form to your group coordinator.
- A new church plant: keep the plan-your-visit steps and giving section, and swap the sermon archive for your first teaching series.

## FAQ

### What sections are included in the Church Community Website template?
The Church Community Website template is a single page with sections for service times and what to expect, four recurring events, an eight-entry sermon archive filterable by series and speaker, six small groups, a giving section that describes ways to give without processing payments, a three-step plan-your-visit strip, and a client-side say-hello form. A pastor portrait and welcome note anchor the page.

### How do I change the church name, city and pastor in the Church Community Website template?
Set the CHURCH, CITY, PASTOR and VIBE variables in the prompt, then rewrite the copy in the single content file. The wordmark, page title, footer, hello email address and stored form keys all follow the church name, so changing CHURCH once updates them together. The default content uses an invented church, city and pastor.

### Does the say-hello form on the Church Community Website send emails or store messages on a server?
No. The say-hello form on the Church Community Website template confirms entirely in the browser and saves the name, email and note to local storage under a key prefixed with the church name. Nothing is submitted anywhere and no backend or external API is involved, so you would connect your own form service if you need messages delivered.

### How does the sermon archive filtering work in the Church Community Website template?
The Church Community Website template ships with eight sermons that filter by series and speaker using chips. Selecting a series or speaker fills the chip and reshuffles the rows with a short fade, and a live count updates. If no sermon matches the combination, the archive shows a short message saying nothing is in that combination yet and that sermons arrive weekly.

### How do I add a wine club signup or mailing list to a church website built with AI?
The Church Community Website template has no wine club, but it does have a giving section and a say-hello form you can repurpose for a mailing list. Rewrite the giving copy in the content file, point the form at your email provider, and keep the welcome note and plan-your-visit steps so newcomers still see times and what to expect.

### How do I build a church community website with AI?
Copy the prompt from this page or run npx vibefather add church-community-website, replace [CHURCH], [CITY], [PASTOR] and [VIBE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Church Community Website demo?
The Neighborhood community church case was built by GLM-5.3 in ZCode; the City center church case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Church Community Website template use?
Church Community Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Church Community Website template for a client or a business?
The Church Community Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Church Community Website template work on mobile?
Yes. Every Church Community Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Events & Communities](../../README.md#events--communities) · [Church Community Website on VibeFather](https://vibefather.ai/templates/church-community-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
