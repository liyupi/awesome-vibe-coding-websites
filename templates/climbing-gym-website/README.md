# Climbing Gym Website

> A chalk-white climbing gym site with a grade-filterable wall map and busy-times chart.

<a href="https://vibefather.ai/templates/climbing-gym-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/climbing-gym-website/45248244-bf0e-4cfe-84b4-3ad1666f4e21/webp.9913e6b297.webp" width="100%" alt="Climbing Gym Website — Climbing Gym with Grade Filter built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/climbing-gym-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page site for a climbing gym, drawn in chalk and neon. Light concrete gray ground, bold condensed headlines in Anton, and one electric magenta accent that only appears where it means something — a grade band, a busy hour, a CTA. The hero is a wide shot of a colorful wall with climbers small on it, the gym's name set huge across the frame. The centerpiece utility is the wall overview: a stylized elevation of the gym's four walls drawn in SVG, every route a cluster of colored holds with its grade — and grade-band chips (V0–2, V3–5, V6+) that re-light the map instantly, dimming everything outside your range; hovering a cluster names its grade, and because the map is drawn in code it stays sharp at any width. Below it, day passes and memberships compared quietly on hairlines, an intro-course booking form that saves locally and says so, a sample events strip with weekly and monthly patterns, and an opening-hours block with a seven-day busy-times heat chart drawn in code — sample data, honestly labeled, and doubling as planning advice: come at seven or after nine. Photography stays in one chalk-dusted register: bright gym light, colorful holds, climbers only from behind or as silhouettes, no readable text anywhere. Motion is quick and snappy to match the sport — 400ms reveals, 150ms chips — with disciplined static fallbacks under prefers-reduced-motion. Swap gym name, district, day-pass price and wall size in one content file; the second demo case turns the same layout into a bouldering-only gym.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Brutalist](../../styles/brutalist.md), [Playful](../../styles/playful.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/climbing-gym-website?case=45248244-bf0e-4cfe-84b4-3ad1666f4e21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/climbing-gym-website/45248244-bf0e-4cfe-84b4-3ad1666f4e21/shot_desktop.3b62d290f3.webp" width="100%" alt="Climbing Gym Website — Climbing gym, built by GLM-5.3 in ZCode"></a><br>
<b>Climbing gym</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/climbing-gym-website?case=45248244-bf0e-4cfe-84b4-3ad1666f4e21&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/climbing-gym-website?case=73d4bbe0-4d48-4b1b-9812-e7686eb62006&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/climbing-gym-website/73d4bbe0-4d48-4b1b-9812-e7686eb62006/shot_desktop.9fc33a5dca.webp" width="100%" alt="Climbing Gym Website — Bouldering-only gym, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Bouldering-only gym</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/climbing-gym-website?case=73d4bbe0-4d48-4b1b-9812-e7686eb62006&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Gym name | The Chalk Room |
| `[DISTRICT]` | District | the Old Glassworks |
| `[DAY_PASS]` | Day pass price | $18 |
| `[WALL_SIZE]` | Wall size | 13,000 sq ft |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add climbing-gym-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A bouldering-only gym: set BRAND and DISTRICT, strip top rope and training room from the hero label, and rewrite the walls array so every route is a bouldering grade.
- A climbing instruction studio: keep the intro-course form as the main conversion, set DAY_PASS to your session price, and replace the events strip with course dates and coaching blocks.
- A multi-discipline sports facility: reuse the grade-band chips as level filters, rename the wall map to your lanes or zones, and point the busy chart at your real peak hours.
- A gym owner without a developer: change BRAND, DISTRICT, DAY_PASS and WALL_SIZE in the content file, swap the six photographs for your own wall shots, and leave the layout and motion alone.

## FAQ

### How does the grade-filterable wall map work on the Climbing Gym Website template?
The Climbing Gym Website template draws the gym's four walls as a stylized elevation in code, with every route shown as a cluster of colored holds and a grade chip. Grade-band chips for V0–2, V3–5 and V6+ re-light the map instantly, dimming routes outside your range. Hovering a cluster names its grade, and because the map is drawn rather than photographed it stays sharp at any screen width.

### What do I need to change first to make the Climbing Gym Website template my own gym?
Start with the four variables in the content file: set BRAND to your gym name, DISTRICT to your neighborhood, DAY_PASS to your single-visit price and WALL_SIZE to your wall area. Then replace the sample walls and routes with your own grades and tape colors, and rewrite the hero headline and copy to match. Busy-times data and events are sample sets, so swap them for your real opening pattern.

### Is the busy-times chart on the Climbing Gym Website template real data?
No. The Climbing Gym Website template ships a seven-day busy-times heat chart built from a fixed sample intensity array, and the page labels it as sample data. It shows cells across six time slots per day and a tooltip that reads as a sample. To use it for your gym, replace the intensity values in the content file with your own quiet and packed hours.

### Where do intro-course bookings from the Climbing Gym Website template go?
The Climbing Gym Website template's intro-course form saves submissions locally in the browser and tells the visitor so. There is no backend, server code or external API, so nothing is emailed or stored remotely. To take real bookings, connect the form to your own booking system or mailing list, or keep it as a lead form and follow up manually.

### Can I turn the Climbing Gym Website template into a bouldering-only gym site?
Yes. The Climbing Gym Website template already includes a second demo case built as a bouldering-only gym from the same layout. Edit the walls array so every wall profile and route reflects bouldering grades, adjust the hero label and copy to drop top rope and training room mentions, and set WALL_SIZE and DAY_PASS to your bouldering gym's figures.

### How do I build a climbing gym website with AI?
Copy the prompt from this page or run npx vibefather add climbing-gym-website, replace [BRAND], [DISTRICT], [DAY_PASS] and [WALL_SIZE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Climbing Gym Website demo?
The Climbing gym case was built by GLM-5.3 in ZCode; the Bouldering-only gym case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Climbing Gym Website template use?
Climbing Gym Website is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Climbing Gym Website template for a client or a business?
The Climbing Gym Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Climbing Gym Website template work on mobile?
Yes. Every Climbing Gym Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Climbing Gym Website on VibeFather](https://vibefather.ai/templates/climbing-gym-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
