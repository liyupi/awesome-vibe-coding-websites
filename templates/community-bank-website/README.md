# Community Bank Website <sup>PRO</sup>

> A quiet-authority community bank site with a loan calculator and a CD ladder builder that does the math on screen.

<a href="https://vibefather.ai/templates/community-bank-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/community-bank-website/1f2eee1f-c1e8-45ff-ba09-585fdd3538d5/webp.aa02635d74.webp" width="100%" alt="Community Bank Website — Community Bank Site with CD Ladder Tool built by GLM-5.3 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/community-bank-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Community Bank Website is a single-page site for a local community bank, in deep evergreen, brass gold and paper white with a refined serif — money-site gravitas that earns trust by being calm, not by shouting badges. Two working financial tools carry the page: a loan calculator with its amortization chart drawn in code (amount, rate, term → monthly payment, principal/interest split, cumulative-interest curve that redraws live), and a CD ladder builder that spreads a deposit across four rungs and shows each rung's APY, maturity value, the blended rate and the year-by-year maturing schedule. Around them: a sample rates table with an honest as-of note, personal/business/lending sections, a stylized SVG branch-and-ATM map with hours and filters, an interactive switch-to-us checklist, and a security center with plain fraud tips. The template never names real institutions, never claims deposit insurance, and labels every rate as sample data. It suits community banks, credit unions and local lenders, and adapts to investment advisors by re-pointing the tools. Five variables swap bank name, town, president, phone and age; rates, branches and ATMs are invented sample data in one content file.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/community-bank-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/community-bank-website?case=1f2eee1f-c1e8-45ff-ba09-585fdd3538d5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/community-bank-website/1f2eee1f-c1e8-45ff-ba09-585fdd3538d5/shot_desktop.3ce9173a76.webp" width="100%" alt="Community Bank Website — Community bank, Calverton, built by GLM-5.3 in ZCode"></a><br>
<b>Community bank, Calverton</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/community-bank-website?case=1f2eee1f-c1e8-45ff-ba09-585fdd3538d5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/community-bank-website?case=ac2ee925-bbee-4bdc-b82d-73a3aac1d46e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/community-bank-website/ac2ee925-bbee-4bdc-b82d-73a3aac1d46e/shot_desktop.8879d3dfa1.webp" width="100%" alt="Community Bank Website — Community bank, Harmony Grove, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Community bank, Harmony Grove</b><br>
<sub>Built by <b>Kimi K3.1 Pro</b> in Kimi Code · <a href="https://vibefather.ai/templates/community-bank-website?case=ac2ee925-bbee-4bdc-b82d-73a3aac1d46e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Bank name | Almstead Community Bank |
| `[CITY]` | Town | Calverton |
| `[FOUNDER]` | President | Ellen Marchetti |
| `[PHONE]` | Phone | (555) 664-1000 |
| `[EXPERIENCE]` | Years serving | 93 years |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/community-bank-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A credit union in a small town: set BRAND and CITY to your field of membership, keep the loan calculator, and rewrite the personal and business sections around member-owned language.
- An independent mortgage broker: keep the loan calculator and amortization chart, swap the rates table for your loan programs, and replace the branch map with office hours and a booking form.
- A farm credit lender: point the CD ladder builder at seasonal deposit planning, retitle the rungs, and rewrite the switch checklist for agricultural accounts.
- A fee-only investment advisor: repoint the two tools at portfolio scenarios, replace the rates table with a services overview, and keep the calm serif layout.

## FAQ

### How does the loan calculator on the Community Bank Website work?
The loan calculator on the Community Bank Website takes an amount from $5,000 to $600,000, a rate from 3.0% to 9.0% and a term of 120, 180, 240 or 360 months, then shows the monthly payment, total interest and total paid in whole dollars. A code-drawn chart plots the remaining balance and cumulative interest across the term and redraws as you move the sliders.

### What does the CD ladder builder in the Community Bank Website show?
The CD ladder builder in the Community Bank Website splits a deposit of $5,000 to $500,000 evenly across four rungs at 12, 24, 36 and 60 months, each with its own sample APY. It shows each rung's share and maturity value, the blended APY, the total value if all four run to term, and a note that a rung matures every 12 months.

### Is the branch map on the Community Bank Website a real map?
The branch map on the Community Bank Website is a stylized inline drawing, not a real map service. It shows a simplified street grid, a river curve, three branch markers with names and six ATM dots, with filter chips for All, Branches and ATMs only, plus branch hours beside it. All branches, ATMs and hours are invented sample data for the demo.

### Can I use the Community Bank Website template for a credit union or a local lender?
The Community Bank Website template suits credit unions and local lenders as well as community banks, because the structure is rates, tools, branches and security rather than anything specific to a bank charter. Commercial and client use requires Pro. Change the five variables and rewrite the copy in the content file so the tools, rates table and branch list match your institution.

### What should I change first in the Community Bank Website template?
Start with the five variables: set BRAND to your institution's name, CITY to your town, FOUNDER to your president, PHONE to your branch line and EXPERIENCE to your years serving. Then replace the sample rates table, branch and ATM data and calculator defaults in the content file, since the template labels every rate as sample data and names no real institution.

### How do I build a community bank website with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add community-bank-website, replace [BRAND], [CITY], [FOUNDER] and [PHONE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Community Bank Website demo?
The Community bank, Calverton case was built by GLM-5.3 in ZCode; the Community bank, Harmony Grove case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Community Bank Website template use?
Community Bank Website is a single-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Community Bank Website template free to use?
Community Bank Website is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Community Bank Website template work on mobile?
Yes. Every Community Bank Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Community Bank Website on VibeFather](https://vibefather.ai/templates/community-bank-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
