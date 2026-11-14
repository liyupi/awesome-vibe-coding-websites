# Theme Park Website

> A candy-colored theme park site with a filterable illustrated map and a plan-your-day checklist.

<a href="https://vibefather.ai/templates/theme-park-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/theme-park-website/bf2e8074-0d03-4681-82dc-4207924654cb/webp.deac160fc1.webp" width="100%" alt="Theme Park Website — Theme Park with Ride Map built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/theme-park-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A theme park site built entirely from flat, candy-colored code — no photographs anywhere. Cream ground, bubblegum pink, sky blue, lemon and mint zones, chunky rounded Fredoka headlines, and grape-ink text. The hero is the park itself: an illustrated map drawn in SVG with four colored districts, flat-vector landmarks — a wheel, a looping coaster, a carousel — and fourteen ride dots that pop in on load. Filters for thrill level and height requirement sit on the map and re-light the dots and the ride list together; clicking a dot opens a ride card with its zone, thrill meter, height chip and an add-to-my-day button. The ride list mirrors the map in chunky cards with tiny drawn icons; tickets compare a day pass, a season pass (flagged the pick) and a family four, with demo buy buttons that say plainly that no ticketing is connected. A sample hours-and-shows strip runs parade and stunt-dive times as static copy, and the plan-your-day checklist turns tapped rides and shows into a saved, reorderable itinerary with a small confetti pop — local storage only, honestly noted. Every height requirement, hour and show time is labeled sample data. Motion is bouncy but polite — springy reveals, popping dots, one confetti burst per add — with calm fallbacks under prefers-reduced-motion and keyboard-operable filters. Swap park name, town, day-pass price and ride count in one content file; the second demo case turns the park into a water park with splash zones.

| | |
|---|---|
| Category | [More Landing Pages](../../README.md#more-landing-pages) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Playful](../../styles/playful.md), [Bento Grid](../../styles/bento.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/theme-park-website?case=bf2e8074-0d03-4681-82dc-4207924654cb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/theme-park-website/bf2e8074-0d03-4681-82dc-4207924654cb/shot_desktop.67919e204d.webp" width="100%" alt="Theme Park Website — Theme park, built by GLM-5.3 in ZCode"></a><br>
<b>Theme park</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/theme-park-website?case=bf2e8074-0d03-4681-82dc-4207924654cb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/theme-park-website?case=0cc7257f-810d-4e76-8c56-b2266bd8db0c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/theme-park-website/0cc7257f-810d-4e76-8c56-b2266bd8db0c/shot_desktop.1043596bd8.webp" width="100%" alt="Theme Park Website — Water park, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Water park</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/theme-park-website?case=0cc7257f-810d-4e76-8c56-b2266bd8db0c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Park name | Jubilee Junction |
| `[CITY]` | Town | Fernhollow |
| `[TICKET_DAY]` | Day pass price | $58 |
| `[RIDES]` | Ride count | 24 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add theme-park-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A family fun center: set BRAND to your venue, swap the four candy zones for arcade, mini-golf, laser tag and party rooms, and replace the ticket comparison with your day-pass and party packages.
- A seasonal fair or carnival: keep the illustrated map and filterable ride dots, rename the zones after your grounds, and use the hours-and-shows strip for your parade and stage times.
- A water park: follow the second demo, turn Candy Canyon and the others into splash zones, swap the coaster glyphs for slide and flume icons, and keep the height filter for little swimmers.
- A zoo or aquarium: set BRAND and CITY, turn the ride dots into animal and exhibit markers, keep the plan-your-day checklist so families can order their route, and label all times as sample data.

## FAQ

### How do I change the park name, town, ticket price and ride count on the Theme Park Website template?
The Theme Park Website template keeps every user-facing string and data set in one content file. Swap BRAND for your park name, CITY for your town, TICKET_DAY for the day-pass price and RIDES for the ride count, and the wordmark, hero line, page title, footer, hero stat row and ticket comparison all update from those values. The map shows fourteen of the rides, so keep that in mind when you set RIDES.

### Can I turn the Theme Park Website into a water park instead of a theme park?
Yes. The Theme Park Website template ships with a second live demo that turns the park into a water park with splash zones, built by DeepSeek V4.1 Flash in DeepSeek Harness. You rewrite the zone names, ride names and blurbs in the content file, keep the same four colored map districts, and swap the flat-vector landmarks and ride glyphs for slide and splash shapes. The filters for thrill level and height requirement carry over unchanged.

### Does the Theme Park Website template connect to a real ticketing system?
No. The Theme Park Website template compares a day pass, a season pass flagged as the pick, and a family four, but the buy buttons are demo buttons that say plainly that no ticketing is connected. Every height requirement, hour and show time is labeled sample data, and the plan-your-day checklist saves to local storage only. You would wire real checkout and park data yourself.

### What can visitors do with the illustrated map and the plan-your-day checklist?
Visitors filter the illustrated SVG map by thrill level or height requirement, which re-lights the fourteen ride dots and the matching ride list together. Clicking a dot opens a ride card with its zone, thrill meter, height chip and an add-to-my-day button. Tapped rides and shows become a saved, reorderable itinerary that persists in local storage, with one small confetti burst per add.

### Is the Theme Park Website template free, and can I use it for a real park?
The Theme Park Website template is a free template: its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, including a real park or a client, needs Pro, which gives you the full prompt and the demo source code. The page itself is a single landing page built with Vite, React, TypeScript, Tailwind CSS and Motion.

### How do I build a theme park website with AI?
Copy the prompt from this page or run npx vibefather add theme-park-website, replace [BRAND], [CITY], [TICKET_DAY] and [RIDES] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Theme Park Website demo?
The Theme park case was built by GLM-5.3 in ZCode; the Water park case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Theme Park Website template use?
Theme Park Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Theme Park Website template for a client or a business?
The Theme Park Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Theme Park Website template work on mobile?
Yes. Every Theme Park Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More More Landing Pages](../../README.md#more-landing-pages) · [Theme Park Website on VibeFather](https://vibefather.ai/templates/theme-park-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
