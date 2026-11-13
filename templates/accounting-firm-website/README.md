# Accounting Firm Website

> Two-page accounting firm site with team portraits, a tax-deadline ledger, a fee estimator and consultation booking.

<a href="https://vibefather.ai/templates/accounting-firm-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/accounting-firm-website/fc66de86-c7a2-431f-b822-5e628da60586/webp.a64c634f02.webp" width="100%" alt="Accounting Firm Website — Accounting Firm with Fee Estimator built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/accounting-firm-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A two-page website for an accounting firm: a home page with the plain-language promise, services split for individuals and small businesses, the year's key tax deadlines as a vertical ledger calendar (month-labeled recurring dates, never pretending to be legal advice), a fee estimator whose chips (filer type, complexity, forms) compute a clearly-labeled sample range with stated assumptions, four accountants with AI-generated professional portraits (fictional people users swap for their own team photos), and a trust strip; and a booking page whose consultation form (date chips, topic, contact) confirms client-side. The default content follows an invented four-person firm, but the structure suits any practice — bookkeeping, tax, payroll: change the firm name, city and base fee and every service, deadline line and estimate still reads true. The look is ledger calm: warm paper, ink text, a deep green primary and one brass accent, Libre Franklin serif headlines over IBM Plex Sans, hairline ledger rules and tabular numerals everywhere. Photography shows desks, ledgers and calculators — no people. To adapt it, swap the variables and rewrite the copy in one content file.

| | |
|---|---|
| Category | [Local Business & Services](../../README.md#local-business--services) |
| Site type | [Landing Page](../../types/landing-page.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 2 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/accounting-firm-website?case=fc66de86-c7a2-431f-b822-5e628da60586&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/accounting-firm-website/fc66de86-c7a2-431f-b822-5e628da60586/shot_desktop.c9eea3dc77.webp" width="100%" alt="Accounting Firm Website — Four-person accounting firm, built by GLM-5.3 in ZCode"></a><br>
<b>Four-person accounting firm</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/accounting-firm-website?case=fc66de86-c7a2-431f-b822-5e628da60586&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/accounting-firm-website?case=9d605c91-1b26-4695-aedd-a7dd9554a3d9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/accounting-firm-website/9d605c91-1b26-4695-aedd-a7dd9554a3d9/shot_desktop.022d5c7471.webp" width="100%" alt="Accounting Firm Website — Bookkeeping practice, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Bookkeeping practice</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/accounting-firm-website?case=9d605c91-1b26-4695-aedd-a7dd9554a3d9&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[FIRM]` | Firm name | Rowan & Fig |
| `[CITY]` | City | Raleigh, North Carolina |
| `[BASE_FEE]` | Base fee | 220 |
| `[FOCUS]` | Focus | tax filing and small-business books |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add accounting-firm-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo bookkeeper: set FIRM to your own name, FOCUS to monthly bookkeeping, lower BASE_FEE and cut the team section to one accountant card with your photo.
- A payroll bureau: keep the estimator chips but relabel them for employee count and pay frequency, and rewrite the deadline ledger around payroll filing dates.
- A small-business tax practice: set FOCUS to small-business returns, raise BASE_FEE for business filings and rewrite the services column around receipts, quarterly estimates and year-end packs.
- A new firm in another city: set CITY and FIRM, replace the invented street and email in the footer, and swap the desk photography for your own office shots.

## FAQ

### How does the fee estimator on the Accounting Firm Website template work?
The Accounting Firm Website template's estimator takes three inputs: filer type, complexity and forms. The base fee is the individual simple-return starting fee set by BASE_FEE, business filing multiplies it, moderate or messy complexity raises it, and each added form adds a fixed amount. It returns a sample range with the assumptions stated beside it, and it is clearly labeled as an estimate rather than a quote.

### Can I replace the four accountants and their AI-generated portraits with my own team?
Yes. The Accounting Firm Website template ships with four fictional accountants and AI-generated professional portraits. Swap each portrait file for a real photo of your team member and rewrite the name, role and short bio in the content file. The card layout, grid and reveal motion stay as they are, so the team section keeps its ledger-calm look with your own people.

### Is the tax deadline ledger on the Accounting Firm Website template real tax advice?
No. The Accounting Firm Website template's deadline ledger shows recurring, month-labeled dates as a vertical calendar and is written to be clearly generic, not legal or tax advice. Treat it as a reminder structure: update the dates for your own jurisdiction and add a line telling visitors to confirm deadlines with the relevant authority before relying on them.

### What do I need to change first to make the Accounting Firm Website template my own practice?
Start with the four variables: FIRM for your firm name, CITY for your location, FOCUS for your core practice such as bookkeeping or payroll, and BASE_FEE for your individual starting fee. Then rewrite the services columns, deadline lines and trust strip in the single content file. The estimate ranges recalculate from BASE_FEE, so the whole site reads true to your practice.

### Does the consultation booking form on the Accounting Firm Website template send anything to my email?
No. The Accounting Firm Website template's booking page confirms client-side only: the visitor picks a date chip, a topic and leaves contact details, and the form shows a confirmation in the browser. Nothing is submitted to a server or an inbox. To receive real bookings you connect the form to your own form handler or scheduling tool after generating the site.

### How do I build an accounting firm website with AI?
Copy the prompt from this page or run npx vibefather add accounting-firm-website, replace [FIRM], [CITY], [BASE_FEE] and [FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Accounting Firm Website demo?
The Four-person accounting firm case was built by GLM-5.3 in ZCode; the Bookkeeping practice case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Accounting Firm Website template use?
Accounting Firm Website is a 2-page site built with Tailwind CSS, Motion and React, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Accounting Firm Website template for a client or a business?
The Accounting Firm Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Accounting Firm Website template work on mobile?
Yes. Every Accounting Firm Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Local Business & Services](../../README.md#local-business--services) · [Accounting Firm Website on VibeFather](https://vibefather.ai/templates/accounting-firm-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
