# Golf Club Website

> An elegant deep-green golf club site with SVG hole cards, a tee-time grid and membership tiers.

<a href="https://vibefather.ai/templates/golf-club-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/golf-club-website/63935f1c-ada6-494a-9453-52e3bcbbe792/webp.e629119c5d.webp" width="100%" alt="Golf Club Website — Golf Club with Course Tour built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/golf-club-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site for a golf club with the manners of a members' notebook: deep fairway-green ground, ivory panels, hairline brass rules, and a refined serif over a quiet sans. The first screen is a morning fairway in mist — dew, low gold light, one flag — under the club's wordmark and an unhurried headline; a single gentle parallax is the page's only flourish up top. The course tour is the centerpiece: three featured holes, each an ivory card with par, yardage and index in brass, one line of playing advice, and a hand-drawn SVG layout of the hole — tee, tapering fairway, bunkers, green and flag — that draws itself in on first view, with a tap-through between holes and an honest sample-data note. A tee-time picker follows: three sample days crossed with hourly slots, availability drawn plainly, players chosen, the reservation saved to local storage with a note that the pro shop confirms by phone. Three membership tiers sit on ivory cards with brass rules; the clubhouse dining block pairs a moody interior with the club's own invented dining room; a quiet events strip runs on weekly and seasonal patterns rather than dates. Photography stays in one register — morning light, dew, deep greens, golfers only distant from behind, no readable text anywhere. Playfair Display over Mulish, everything gentle and deferential under prefers-reduced-motion. Swap club, region, holes and green fee in one content file; the second demo case turns the club into a nine-hole links by the sea.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md), [Luxury](../../styles/luxury.md) |
| Effects | Parallax, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/golf-club-website?case=63935f1c-ada6-494a-9453-52e3bcbbe792&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/golf-club-website/63935f1c-ada6-494a-9453-52e3bcbbe792/shot_desktop.6acc5fd006.webp" width="100%" alt="Golf Club Website — Golf club, built by GLM-5.3 in ZCode"></a><br>
<b>Golf club</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/golf-club-website?case=63935f1c-ada6-494a-9453-52e3bcbbe792&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/golf-club-website?case=584bba1f-5129-4c43-8734-58e41b88e4b2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/golf-club-website/584bba1f-5129-4c43-8734-58e41b88e4b2/shot_desktop.afc7e87c76.webp" width="100%" alt="Golf Club Website — Links golf club, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Links golf club</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/golf-club-website?case=584bba1f-5129-4c43-8734-58e41b88e4b2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Club name | Kestrel Downs |
| `[REGION]` | Setting | Aldermoor Heath |
| `[HOLES]` | Hole count | 18 |
| `[GREEN_FEE]` | Visitor green fee | $95 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add golf-club-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A nine-hole links club: set BRAND and REGION to your seaside course, change HOLES to nine, and rewrite the course-tour hole paths and playing notes for your own layout.
- A members' country club: keep the membership tiers but rename them for your categories, and set GREEN_FEE to your visitor rate while pointing the dining block at your own clubhouse room.
- A golf resort or hotel course: use the tee-time grid for guest bookings, set GREEN_FEE to your resort rate and rewrite the events strip for your seasonal competitions and open days.
- A golf society or tour operator: swap BRAND for the society name, use the hole cards to preview the courses you play and link the tee-time block to your booking contact.

## FAQ

### How do I change the club name, region, hole count and green fee on the Golf Club Website template?
The Golf Club Website template keeps every user-facing value in one content file, so you swap BRAND, REGION, HOLES and GREEN_FEE in a single place and the wordmark, page title, hero label, course-tour intro, address line, footer and tee-time block all update. The prompt asks you to rewrite each headline and paragraph for your values rather than leaving the default copy half-edited.

### How does the tee-time booking work on the Golf Club Website template?
The Golf Club Website template shows a grid of three sample days against eight hourly slots, with each cell marked available or taken from a fixed map. A visitor picks a slot, chooses two, three or four players, and the reservation is saved to local storage with a note that the pro shop confirms by phone. There is no backend, so real bookings still go through your club.

### What are the self-drawing SVG hole cards on the Golf Club Website template?
The course tour on the Golf Club Website template shows three featured holes as ivory cards with par, yardage and index in brass, one line of playing advice, and a hand-drawn SVG layout of the hole: tee, tapering fairway, bunkers, green and flag. The fairway path draws itself in when the card first appears, and visitors tap through between holes. Each hole's path, green position and bunker offsets live in the content file.

### Is the Golf Club Website template free, and what does Pro add?
The Golf Club Website template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also gives you the full prompt for Pro templates and the source code of the demos. The live demos, the brief, stack and variables are public either way.

### How do I add my own photography and images to the Golf Club Website template?
The Golf Club Website template ships with six generated photographs in one consistent register: morning light, dew, deep greens and golfers only distant from behind. Replace them with your own course and clubhouse shots in the same low golden light, keep faces unidentifiable and avoid readable signage or scorecards in frame, then point the image paths in the content file at your files.

### How do I build a golf club website with AI?
Copy the prompt from this page or run npx vibefather add golf-club-website, replace [BRAND], [REGION], [HOLES] and [GREEN_FEE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Golf Club Website demo?
The Golf club case was built by GLM-5.3 in ZCode; the Links golf club case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Golf Club Website template use?
Golf Club Website is a single-page site built with Tailwind CSS, Motion and React, with parallax, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Golf Club Website template for a client or a business?
The Golf Club Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Golf Club Website template work on mobile?
Yes. Every Golf Club Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Golf Club Website on VibeFather](https://vibefather.ai/templates/golf-club-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
