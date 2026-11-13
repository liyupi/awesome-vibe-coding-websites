# Surf School Website

> A sun-bleached surf school site with a drawn forecast strip, lesson levels, camps and coaches.

<a href="https://vibefather.ai/templates/surf-school-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/surf-school-website/24ea95fa-762a-4d65-a982-a80ce4f7e6eb/webp.ae0b6d14ed.webp" width="100%" alt="Surf School Website — Sun-Faded Surf School with Forecast Strip built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/surf-school-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page site for a surf school with a sun-bleached, film-grain identity. The first screen is a full-bleed photograph of an empty wave on faded color film, a warm grain overlay sitting over the whole page, and a laid-back display headline over the haze. Right under the hero sits the forecast strip: five weekday cells drawn in SVG with wave arcs sized to the swell, rotated wind arrows and tiny tide curves — invented sample data, clearly labeled, replaced from one content file. Below that the school gets practical: three lesson levels (first timer, improver, advanced), each with what you will actually learn and a price; camps and packages as editorial rows — a weekend camp, a surf-and-stay week, private coaching; and coach cards with candid working shots taken from behind, with no identifiable faces. A client-side booking form collects level, preferred session pattern and party size, saves to local storage and says so honestly, next to the shop's address and hours. The final strip is a stylized SVG coastline map with a pin on the invented beach. The palette is locked: sand and dune neutrals, faded ocean blue, a deep tide accent and one warm sun highlight, with soft ink text. Bricolage Grotesque carries the display voice over Archivo text and Space Mono readouts. Motion is slow and calm — gentle parallax, drifting wave arcs, soft reveals — all honoring prefers-reduced-motion. Swap brand, beach, price and class size in one file; the second demo case turns the same layout into a kiteboarding school.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Retro](../../styles/retro.md), [Editorial](../../styles/editorial.md) |
| Effects | Parallax, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/surf-school-website?case=24ea95fa-762a-4d65-a982-a80ce4f7e6eb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/surf-school-website/24ea95fa-762a-4d65-a982-a80ce4f7e6eb/shot_desktop.1d9cf19b18.webp" width="100%" alt="Surf School Website — Surf school, built by GLM-5.3 in ZCode"></a><br>
<b>Surf school</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/surf-school-website?case=24ea95fa-762a-4d65-a982-a80ce4f7e6eb&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/surf-school-website?case=254daa05-3d7d-40d6-aa74-ff88d44c6cb2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/surf-school-website/254daa05-3d7d-40d6-aa74-ff88d44c6cb2/shot_desktop.5568cd144b.webp" width="100%" alt="Surf School Website — Kiteboarding school, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Kiteboarding school</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/surf-school-website?case=254daa05-3d7d-40d6-aa74-ff88d44c6cb2&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | School name | Driftline |
| `[BEACH]` | Beach name | Sanderling Bay |
| `[PRICE_LESSON]` | Entry lesson price | $55 |
| `[CLASS_SIZE]` | Max group size | 6 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add surf-school-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A kiteboarding school: set [BRAND] and [BEACH] to your spot, rewrite the three levels for kite skills and relabel the forecast cells for wind speed.
- A paddleboard and kayak rental: keep the booking form, change the levels to rental durations and swap the camps rows for guided tours and sunset paddles.
- A single surf coach: set [CLASS_SIZE] to your private session limit, replace the coach cards with your own bio and turn the camps rows into one-to-one coaching packages.
- A coastal surf hostel: reuse the coastline map and address block, add your room types into the camp rows and point the booking form at your stay enquiries.

## FAQ

### How do I change the surf school name, beach and lesson price in this template?
The Surf School Website template keeps every user-facing string in one content file, so you set [BRAND], [BEACH], [PRICE_LESSON] and [CLASS_SIZE] there and the wordmark, page title, hero label, forecast intro, level prices, booking form and map pin caption all update. Point your AI agent at that file first and ask it to rewrite the copy for your own school, keeping the same length and tone.

### What is the forecast strip on the surf school site and is the surf data real?
The forecast strip is five weekday cells drawn in SVG, each with a wave arc sized to the swell, a rotated wind arrow and a small tide curve. The Surf School Website template ships invented sample rows that are clearly labeled as sample data, and you replace them from the content file. There is no live forecast feed or external API, so the strip is a designed placeholder you either keep labeled or swap for your own values.

### How does the booking form work if there is no backend?
The Surf School Website template includes a client-side booking form that collects lesson level, preferred session pattern and party size, with the party-size maximum set by [CLASS_SIZE]. It saves the request to the browser's local storage and says so honestly on the page. Nothing is emailed or sent to a server, so to take real bookings you connect the form to your own booking tool or mailing list.

### Can I turn this surf school template into a kiteboarding or SUP school site?
Yes. The Surf School Website template is built for surf, kite, SUP and other beach schools, and one of the two live demos is already a kiteboarding school built from the same prompt. You keep the layout, palette and motion and rewrite the content file: brand, spot, prices, class size, lesson levels, camps, coaches and the forecast labels, so the copy matches your discipline.

### What should I change first in the Surf School Website template?
Start with the content file: set [BRAND], [BEACH], [PRICE_LESSON] and [CLASS_SIZE], then replace the sample forecast rows, the three lesson levels, the camp rows and the coach cards with your own. After that, swap the six photographs in the images folder for your own film-style shots and check the hero headline still reads well over your photo.

### How do I build a surf school website with AI?
Copy the prompt from this page or run npx vibefather add surf-school-website, replace [BRAND], [BEACH], [PRICE_LESSON] and [CLASS_SIZE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Surf School Website demo?
The Surf school case was built by GLM-5.3 in ZCode; the Kiteboarding school case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Surf School Website template use?
Surf School Website is a single-page site built with Tailwind CSS, Motion and React, with parallax, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Surf School Website template for a client or a business?
The Surf School Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Surf School Website template work on mobile?
Yes. Every Surf School Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Surf School Website on VibeFather](https://vibefather.ai/templates/surf-school-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
