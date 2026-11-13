# Esports Team Website

> A dark esports team site with player stats, match tracking, merch, sponsors, and news.

<a href="https://vibefather.ai/templates/esports-team-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/esports-team-website/127e7932-0288-40b9-b7eb-2e7ce690ceb9/webp.261a821168.webp" width="100%" alt="Esports Team Website — Dark Esports Team Website with Player Stats built by Kimi K3.1 Pro and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/esports-team-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Esports Team Website is a dark, multi-page team site built around the information fans actually look for: who is playing, when the next match starts, how the last series ended, and where to find team stories and merchandise. It suits fictional esports organizations, gaming collectives, tournament teams, and creator squads that need a complete public home rather than a single promotional screen. The default content follows Static Vale, an invented tactical-arena team based in Rotterdam, with five players, a season schedule, match results, original sponsors, six products, and four news stories.

The visual system pairs condensed sports typography with near-black surfaces, thin technical rules, clipped corners, and one volt accent. A wide arena photograph gives the first screen a clear team identity, while individual player portraits keep the roster personal. Oversized scores, compact data tables, angled image crops, and restrained marquees create energy without turning every element into an animated effect. Scroll reveals, hover statistics, route transitions, product quick views, and drawer interactions use Motion and respect reduced-motion preferences.

The roster includes role filters and expandable player statistics. The match page switches between upcoming fixtures and results, with map-level scores for completed series. The shop provides category filters, size and quantity controls, a persistent local cart, and an explicitly labeled mock checkout. News cards expand into readable stories without requiring another backend. All navigation uses static hash routes.

Change the team name, code, discipline, home city, and season through the variable block. The builder keeps copy and sample data together in one content file so the roster, opponents, products, sponsors, headlines, statistics, and article text can be rewritten as a coherent set. Fonts, generated photographs, icons, scripts, and product artwork are local, making the finished site portable as a static build.

| | |
|---|---|
| Category | [E-commerce & Product Pages](../../README.md#e-commerce--product-pages) |
| Site type | [E-commerce](../../types/ecommerce.md), Esports |
| Style | [Brutalist](../../styles/brutalist.md), [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md) |
| Effects | Marquee, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript 5 + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 5 |
| Built with | [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/esports-team-website?case=127e7932-0288-40b9-b7eb-2e7ce690ceb9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/esports-team-website/127e7932-0288-40b9-b7eb-2e7ce690ceb9/shot_desktop.dfc2308224.webp" width="100%" alt="Esports Team Website — Tactical arena team, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Tactical arena team</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/esports-team-website?case=127e7932-0288-40b9-b7eb-2e7ce690ceb9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/esports-team-website?case=ea812d2c-3884-42ab-a5ba-5619a1909363&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/esports-team-website/ea812d2c-3884-42ab-a5ba-5619a1909363/shot_desktop.cb935c3c78.webp" width="100%" alt="Esports Team Website — Survival arena team, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Survival arena team</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/esports-team-website?case=ea812d2c-3884-42ab-a5ba-5619a1909363&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Team name | Static Vale |
| `[TEAM_CODE]` | Short team code | STV |
| `[DISCIPLINE]` | Competitive discipline | Tactical arena |
| `[HOME_CITY]` | Home city | Rotterdam |
| `[SEASON_NAME]` | Season or series name | Meridian Open |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add esports-team-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A local tournament organizer: set BRAND to your event series, rewrite the match page for brackets and fixtures, and replace the shop with entry passes and event merchandise.
- A creator gaming squad: use TEAM_CODE for your collective's tag, swap the roster for your streamers with their roles, and turn the news page into stream recaps and announcements.
- A university esports club: set HOME_CITY to your campus, list student players in the roster, and replace sponsors with your society partners and supporters.
- A fighting game community team: change DISCIPLINE to your scene, trim the roster to your fighters, and rewrite the match results around your weekly local brackets.

## FAQ

### How do I change the team name, city and season on the Esports Team Website?
Set BRAND, TEAM_CODE, DISCIPLINE, HOME_CITY and SEASON_NAME in the variable block, then rewrite the whole content set so the roster, opponents, sponsors, products and stories stay coherent with the new organization. The template keeps copy and sample data in one content file, so a name change should read as a new team rather than a renamed header.

### Does the Esports Team Website template include a working shop and cart?
The Esports Team Website template includes a shop with category filters, size and quantity controls, a persistent local cart and product quick views. Checkout is explicitly labeled as a mock, so orders are not processed. Products are drawn as original black-and-volt SVG illustrations, and you can rewrite the six sample products in the content file for your own merchandise.

### How do player stats and match results work in this esports template?
The roster page has role filters and expandable player statistics, with a detail drawer that opens when you select a player. The match page switches between upcoming fixtures and results, and completed series show map-level scores. All players, opponents and match records are invented sample data held in the content file, so you replace them with your own team's schedule and numbers.

### What do I need to change first after downloading the Esports Team Website?
Start with the five variables: team name, three-letter team code, discipline, home city and season name. Then replace the roster, opponents, sponsors, products and news stories as one coherent set, and swap the six generated photographs for your own arena shot and player portraits. The design, typography and motion stay as built, so the content is where the work happens.

### Is the Esports Team Website template free to use?
The Esports Team Website template is free. Its prompt and DESIGN.md are available for personal, non-commercial use under CC BY-NC 4.0. Commercial use, client projects and the source code of the demos require Pro. Pro members see the full prompt, and the brief, stack and variables are shown publicly on the template page.

### How do I build an esports team website with AI?
Copy the prompt from this page or run npx vibefather add esports-team-website, replace [BRAND], [TEAM_CODE], [DISCIPLINE] and [HOME_CITY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Esports Team Website demo?
The Tactical arena team case was built by Kimi K3.1 Pro in Kimi Code; the Survival arena team case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Esports Team Website template use?
Esports Team Website is a 5-page site built with Tailwind CSS, Motion and React, with marquee, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Esports Team Website template for a client or a business?
The Esports Team Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Esports Team Website template work on mobile?
Yes. Every Esports Team Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More E-commerce & Product Pages](../../README.md#e-commerce--product-pages) · [Esports Team Website on VibeFather](https://vibefather.ai/templates/esports-team-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
