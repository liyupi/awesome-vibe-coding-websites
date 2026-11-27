# Company All-Hands Presentation Deck

> Lively 11-slide all-hands deck with KPI sparklines, shipped spotlights, and live Q&A upvote board.

<a href="https://vibefather.ai/templates/company-all-hands-presentation-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/company-all-hands-presentation-deck/25818737-f484-4bb1-9fc0-f150e0583f3e/webp.852eeba2a2.webp" width="100%" alt="Company All-Hands Presentation Deck — Interactive Company All-Hands Web Slide Deck built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/company-all-hands-presentation-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Company All-Hands Presentation Deck is an energetic 11-slide 16:9 widescreen web presentation designed for distributed software teams running monthly town halls. Rather than static exported slides, the deck lives natively in the browser with full keyboard arrows, Spacebar, Home/End, touch swipe, bottom segmented progress navigation, a G-key thumbnail overview grid, an N-key presenter notes drawer with a live talk timer, F-key fullscreen mode, and clean @media print landscape PDF pagination. Inside the deck, leadership walks through the agenda, four interactive KPI cards paired with inline SVG trend sparklines and team filters, What We Shipped product spotlight cards, a customer love quote wall, a new teammates and work-anniversary shoutout grid, an upcoming milestones timeline, and a working live-style Q&A upvote board where attendees click to upvote questions or submit new mock questions right inside the slide. Styled in crisp soft porcelain (#F7F8FC) and midnight navy (#131B2E) accented with bright violet (#7C3AED) and fresh mint (#14B8A6), the deck uses self-hosted Plus Jakarta Sans and JetBrains Mono for unmistakable readability from laptop to projector. Swap the company name, host, headline theme, and team count in src/content.ts.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [Slide Deck](../../types/slides.md) |
| Style | [Bento Grid](../../styles/bento.md), [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/company-all-hands-presentation-deck?case=25818737-f484-4bb1-9fc0-f150e0583f3e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/company-all-hands-presentation-deck/25818737-f484-4bb1-9fc0-f150e0583f3e/shot_desktop.983c473c1c.webp" width="100%" alt="Company All-Hands Presentation Deck — Distributed SaaS monthly town hall, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Distributed SaaS monthly town hall</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/company-all-hands-presentation-deck?case=25818737-f484-4bb1-9fc0-f150e0583f3e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/company-all-hands-presentation-deck?case=3836ef63-d601-490b-857c-6b22a8734830&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/company-all-hands-presentation-deck/3836ef63-d601-490b-857c-6b22a8734830/shot_desktop.f487805093.webp" width="100%" alt="Company All-Hands Presentation Deck — Remote design studio quarterly sync, built by GLM-5.4 in ZCode"></a><br>
<b>Remote design studio quarterly sync</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/company-all-hands-presentation-deck?case=3836ef63-d601-490b-857c-6b22a8734830&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Company name | RelayGrid |
| `[HOST_NAME]` | All-hands host | Claire Morales, CEO |
| `[DECK_THEME]` | Session headline | Building Together Across Six Timezones |
| `[TEAM_SIZE]` | Team badge | 118 Teammates · 6 Timezones |
| `[MANTRA]` | Closing mantra | Clarity over noise. Craft over rush. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add company-all-hands-presentation-deck` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A seed-stage startup running its first monthly all-hands: set BRAND and HOST_NAME, then replace the KPI cards with your burn, runway and signup numbers so the deck speaks to investors and new hires.
- A remote design studio's quarterly sync: keep the shipped spotlights and quote wall, swap the milestones timeline for client launches, and rewrite the mantra slide as your studio principles.
- An open-source maintainer team: point the shoutout grid at contributors and release anniversaries, and use the Q&A board to collect roadmap questions from the community during a live stream.
- A sales or customer success org: repurpose the team priorities slide for pipeline goals and the spotlight cards for closed deals, keeping the KPI sparklines for quota and churn trends.

## FAQ

### How do I run the Q&A upvote board during a live all-hands?
The Company All-Hands Presentation Deck includes a working Q&A upvote board on slide 10, where attendees click to upvote questions or type a new question directly into the slide. Because the deck is a static browser build with no backend, the board holds questions and votes in the session on the presenting machine, so one host screen collects the room's input while you present.

### What do I need to change first to make this all-hands deck my own company's?
Start with the five variables in the content file: BRAND sets your company name, HOST_NAME puts the presenter on the cover, DECK_THEME is the session headline, TEAM_SIZE fills the cover badge, and MANTRA closes the deck. Then rewrite the KPI figures, shipped spotlights, customer quotes, shoutouts and milestones so every slide matches your real numbers and people.

### Can I present this deck fullscreen and print it as a PDF handout?
The Company All-Hands Presentation Deck has an F-key fullscreen mode for projecting the 16:9 slides, plus keyboard arrows, Spacebar, Home and End, touch swipe and a G-key thumbnail grid to jump between slides. The print stylesheet lays each slide out in landscape on its own page, so you can export a clean PDF version for people who missed the town hall.

### Are presenter notes and a talk timer included in the deck?
Yes. Pressing N opens a presenter notes drawer in the Company All-Hands Presentation Deck, and that drawer carries a live session timer so you can pace the all-hands as you speak. Notes live alongside each slide rather than on the projected view, which keeps the audience-facing slide clean while the host sees reminders and elapsed time on the presenting screen.

### How do the KPI cards and sparklines work in the metrics slide?
Slide 03 of the Company All-Hands Presentation Deck shows four KPI cards, each paired with an inline SVG trend sparkline and team filters you can click. The default figures are sample data for a fictional company, so replace the ARR, uptime, retention and NPS numbers and their sparkline paths with your own so leadership is presenting real metrics at the town hall.

### How do I build a company All-Hands presentation deck with AI?
Copy the prompt from this page or run npx vibefather add company-all-hands-presentation-deck, replace [BRAND], [HOST_NAME], [DECK_THEME] and [TEAM_SIZE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Company All-Hands Presentation Deck demo?
The Distributed SaaS monthly town hall case was built by Gemini 4 Neon in Antigravity; the Remote design studio quarterly sync case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Company All-Hands Presentation Deck template use?
Company All-Hands Presentation Deck is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Company All-Hands Presentation Deck template for a client or a business?
The Company All-Hands Presentation Deck prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Company All-Hands Presentation Deck template work on mobile?
Yes. Every Company All-Hands Presentation Deck build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [Company All-Hands Presentation Deck on VibeFather](https://vibefather.ai/templates/company-all-hands-presentation-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
