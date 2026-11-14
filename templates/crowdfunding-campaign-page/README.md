# Crowdfunding Campaign Page

> A warm board-game crowdfunding page with sample progress, tiers, stretch-goal unlocks and FAQ.

<a href="https://vibefather.ai/templates/crowdfunding-campaign-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/crowdfunding-campaign-page/1effcee4-f30a-41d0-9082-a13f7701bbdc/webp.bfc8606fb9.webp" width="100%" alt="Crowdfunding Campaign Page — Crowdfunding Page with Reward Tiers built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/crowdfunding-campaign-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A crowdfunding campaign page for a board game, built like a warm game-night table: deep plum ground, cream panels, brass accents, and tabletop macro photography of wooden pieces under a single lamp. The hero is the box and its components in that lamp light, with the campaign title in a chunky storybook serif. Right beneath it sits the conversion machine, honestly labeled as sample data: a funding bar that fills to 111 percent as you reach it, with a counting raised figure, backer and days chips, and a note that no real funding happens. Three reward tiers carry contents lists and limited-count chips, one flagged most popular, and every pledge button opens a demo note instead of a checkout. The stretch-goal track is the showpiece: as the animated bar passes each threshold, a locked milestone pops to unlocked brass — and the locked ones say exactly how much more they need. Story chapters pair component close-ups with short copy — the idea, the pieces, the table — and close with the invented team as a quiet list. An FAQ accordion (including an honest is-this-real entry) and a sample updates list finish the page. Young Serif display over Alegreya Sans, 12px panel radii, brass used only for money and milestones. All numbers are sample copy; motion honors prefers-reduced-motion with a static full bar. Swap game, studio, goal and days in one content file; the second demo case turns the same page into a tarot-deck campaign.

| | |
|---|---|
| Category | [Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Retro](../../styles/retro.md), [Playful](../../styles/playful.md) |
| Effects | Text Animation, Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/crowdfunding-campaign-page?case=1effcee4-f30a-41d0-9082-a13f7701bbdc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/crowdfunding-campaign-page/1effcee4-f30a-41d0-9082-a13f7701bbdc/shot_desktop.261e62bd8e.webp" width="100%" alt="Crowdfunding Campaign Page — Board game campaign, built by GLM-5.3 in ZCode"></a><br>
<b>Board game campaign</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/crowdfunding-campaign-page?case=1effcee4-f30a-41d0-9082-a13f7701bbdc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/crowdfunding-campaign-page?case=1c5a3de8-266b-4be2-b477-e9a3d243284f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/crowdfunding-campaign-page/1c5a3de8-266b-4be2-b477-e9a3d243284f/shot_desktop.429cc40e90.webp" width="100%" alt="Crowdfunding Campaign Page — Tarot deck campaign, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Tarot deck campaign</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/crowdfunding-campaign-page?case=1c5a3de8-266b-4be2-b477-e9a3d243284f&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[GAME]` | Project name | Thistlewick |
| `[STUDIO]` | Studio name | Paper Lantern Press |
| `[GOAL]` | Funding goal | $28,000 |
| `[DAYS]` | Days remaining | 14 |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add crowdfunding-campaign-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An indie tabletop studio launching a card game: set GAME and STUDIO to your title, swap the tier contents for your decks and add-ons, and rewrite the story chapters around your art.
- A tarot or oracle deck creator: follow the second demo, set GAME to your deck name, replace the component close-ups with card photography, and rewrite the stretch goals as print upgrades.
- A small publisher running a pre-order campaign: set GOAL to your print run target, change the pledge buttons to your shop link, and rewrite the FAQ to answer shipping and delivery questions.
- A designer crowdfunding a single product: set STUDIO to your name, trim the team section to a short bio, and keep the progress panel and stretch-goal track as the campaign centerpiece.

## FAQ

### How do I change the funding goal and days left on the crowdfunding page?
The Crowdfunding Campaign Page template keeps every campaign number in a single content file. Set GOAL to your funding target and DAYS to your remaining days there, and the progress bar, the raised figure, the backer and days chips and the goal mark all read from it. Replace GAME and STUDIO in the same place to update the title, hero, tiers and footer. The stretch-goal thresholds live in that file too.

### Are the funding numbers on this crowdfunding template real, or can someone actually pledge?
Every number on the Crowdfunding Campaign Page template is sample copy. The funding bar, raised total, backer count and days chip are invented, and each pledge button opens an inline note saying nothing is charged and no platform is connected. The FAQ includes an honest is-this-real entry. For a live campaign you replace the demo anchors with your real checkout or platform link.

### How do the stretch-goal unlocks work on the crowdfunding page?
The stretch-goal track on the Crowdfunding Campaign Page template reads from a fixed thresholds list. As the animated funding bar counts up and passes each threshold, that milestone node pops from a locked state to an unlocked brass state with a check. Locked nodes stay dimmed and state exactly how much more they need. With reduced motion on, the bar and all milestone states render final instantly.

### Can I use this crowdfunding template for something other than a board game?
Yes. The Crowdfunding Campaign Page template was built for a board game, but the second live demo turns the same page into a tarot-deck campaign. Set GAME and STUDIO to your project and studio, rewrite the story chapters, tier contents and FAQ for your product, and keep the funding bar, reward tiers and stretch-goal track as they are. The layout, colors and motion stay fixed.

### What should I edit first on the Crowdfunding Campaign Page template?
Start with the content file: set GAME, STUDIO, GOAL and DAYS, then rewrite the three reward tiers, the stretch-goal thresholds, the story chapters, the team list, the FAQ and the sample updates. Replace the six tabletop photographs in the images folder with your own product shots. Check the mobile menu and the pledge note on a phone before you publish.

### How do I build a crowdfunding campaign page with AI?
Copy the prompt from this page or run npx vibefather add crowdfunding-campaign-page, replace [GAME], [STUDIO], [GOAL] and [DAYS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Crowdfunding Campaign Page demo?
The Board game campaign case was built by GLM-5.3 in ZCode; the Tarot deck campaign case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Crowdfunding Campaign Page template use?
Crowdfunding Campaign Page is a single-page site built with React, Motion and Tailwind CSS, with text animation, scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Crowdfunding Campaign Page template for a client or a business?
The Crowdfunding Campaign Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Crowdfunding Campaign Page template work on mobile?
Yes. Every Crowdfunding Campaign Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Landing Pages & Product Launches](../../README.md#landing-pages--product-launches) · [Crowdfunding Campaign Page on VibeFather](https://vibefather.ai/templates/crowdfunding-campaign-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
