# B2B Sales Proposal Slide Deck

> A 12-slide interactive B2B sales proposal deck with clickable architecture, live ROI calculator, and PDF print.

<a href="https://vibefather.ai/templates/b2b-sales-proposal-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/b2b-sales-proposal-slide-deck/3554da52-820a-42e8-ad8a-3053879515d3/webp.649ac00776.webp" width="100%" alt="B2B Sales Proposal Slide Deck — Interactive 12-Slide B2B Sales Proposal Deck built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/b2b-sales-proposal-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This interactive web presentation template turns an enterprise B2B sales proposal into a live, 12-slide browser deck that prospects can explore on desktop, tablet, or mobile and export cleanly to PDF. Built for workflow automation vendors, enterprise account executives, and solutions engineers pitching mid-market or enterprise buyers, it replaces static pitch files with hands-on decision tools embedded directly inside the slides. The visual direction pairs a crisp ivory stage with deep slate typography, royal cobalt structural accents, and emerald outcome highlights, keeping every slide focused and scannable with strict visual hierarchy. Core slides walk stakeholders from executive account summary and current operational bottlenecks through an interactive SVG solution architecture diagram where clicking any pipeline node inspects latency, security controls, and integration protocols. A live ROI and payback calculator slide lets champions adjust team size and blended hourly rate with tactile sliders to update annual hours saved, net first-year return, and payback months in real time. Subsequent slides cover a 90-day phased implementation timeline, three-tier pricing and SLA comparison with seat-band toggles, anonymized enterprise case metrics, security governance checkpoints, and a clear mutual action plan. Built-in presentation controls include arrow-key, spacebar, swipe, and click navigation, a slide progress bar, a G-key thumbnail overview grid, an N-key presenter notes drawer with a live elapsed timer, F-key fullscreen mode, and a landscape print stylesheet rendering one slide per page. Swap the vendor, prospect, product name, and deal metrics in one central content file to tailor the deck for any enterprise opportunity.

| | |
|---|---|
| Category | [Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) |
| Site type | [SaaS](../../types/saas.md), [Slide Deck](../../types/slides.md) |
| Style | [Minimal](../../styles/minimal.md), [Editorial](../../styles/editorial.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/b2b-sales-proposal-slide-deck?case=3554da52-820a-42e8-ad8a-3053879515d3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/b2b-sales-proposal-slide-deck/3554da52-820a-42e8-ad8a-3053879515d3/shot_desktop.7fa76b3b74.webp" width="100%" alt="B2B Sales Proposal Slide Deck — Workflow automation sales pitch, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Workflow automation sales pitch</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/b2b-sales-proposal-slide-deck?case=3554da52-820a-42e8-ad8a-3053879515d3&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/b2b-sales-proposal-slide-deck?case=4ff7af8b-18c8-451d-81f4-d3ae68501133&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/b2b-sales-proposal-slide-deck/4ff7af8b-18c8-451d-81f4-d3ae68501133/shot_desktop.11b462dbf0.webp" width="100%" alt="B2B Sales Proposal Slide Deck — Cloud security enterprise proposal, built by GLM-5.4 in ZCode"></a><br>
<b>Cloud security enterprise proposal</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/b2b-sales-proposal-slide-deck?case=4ff7af8b-18c8-451d-81f4-d3ae68501133&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Vendor brand name | RelayWorks |
| `[PROSPECT]` | Prospect company name | Meridian Freight |
| `[PRODUCT_CATEGORY]` | Solution category | Enterprise Workflow Automation |
| `[ACV_RANGE]` | Target annual contract value | $84,000 / year |
| `[CONTACT_EMAIL]` | Account executive email | enterprise@relayworks.example |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add b2b-sales-proposal-slide-deck` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- For a workflow automation vendor: set BRAND and PRODUCT_CATEGORY, then relabel the five architecture nodes to your own pipeline stages and keep the latency and security details accurate.
- For a cloud security consultancy: swap the ROI inputs for incident response hours and breach exposure, and rewrite the three pricing tiers around assessment, rollout and managed retainer.
- For a solutions engineer at an ERP integrator: change PROSPECT and the four bottleneck cards to the client's real scoping findings, and update the cost bar chart totals to match.
- For a founder pitching a mid-market buyer: shorten the deck by editing slide copy in the content file, set ACV_RANGE to your contract value and point CONTACT_EMAIL at your own inbox.

## FAQ

### How do I change the prospect name and deal numbers in the B2B Sales Proposal Slide Deck?
The B2B Sales Proposal Slide Deck keeps every slide, metric, architecture node, pricing tier and speaker note in one central content file. Swap BRAND, PROSPECT, PRODUCT_CATEGORY, ACV_RANGE and CONTACT_EMAIL there and the cover dossier, pricing slide and closing slide update together. Rewrite the headlines and pain-point figures for your own opportunity so the numbers match the scoping notes.

### How does the live ROI and payback calculator work in this sales deck?
The B2B Sales Proposal Slide Deck includes a live ROI slide where champions move sliders for team size and blended hourly rate. The readouts update in real time to show annual hours saved, net first-year return and payback months, with smooth number transitions. Because it is a browser deck with no backend, prospects can test assumptions themselves during a review instead of asking you to rebuild a spreadsheet.

### Can prospects export the B2B sales proposal deck to PDF?
Yes. The B2B Sales Proposal Slide Deck has a Print PDF button and a landscape print stylesheet that renders one slide per page in a 16:9 container, hiding the navigation bar and presenter drawers. That gives procurement and legal a clean file to circulate after the meeting while the live deck stays the interactive version you present from.

### What presenter controls does the B2B Sales Proposal Slide Deck include?
The B2B Sales Proposal Slide Deck supports arrow keys, spacebar, swipe and click navigation, a 12-segment progress bar, G for a thumbnail overview grid, N for a speaker notes drawer with a live elapsed timer, and F for fullscreen. The current slide is kept in the URL hash, so you can reload or share a link that opens on a specific slide.

### Is the B2B Sales Proposal Slide Deck template free to use?
The B2B Sales Proposal Slide Deck is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial use, client work and the demo source code require Pro. The page shows the brief, stack and variables publicly, and Pro members get the full prompt.

### How do I build a B2B sales proposal slide deck with AI?
Copy the prompt from this page or run npx vibefather add b2b-sales-proposal-slide-deck, replace [BRAND], [PROSPECT], [PRODUCT_CATEGORY] and [ACV_RANGE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the B2B Sales Proposal Slide Deck demo?
The Workflow automation sales pitch case was built by Gemini 4 Neon in Antigravity; the Cloud security enterprise proposal case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the B2B Sales Proposal Slide Deck template use?
B2B Sales Proposal Slide Deck is a single-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the B2B Sales Proposal Slide Deck template for a client or a business?
The B2B Sales Proposal Slide Deck prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the B2B Sales Proposal Slide Deck template work on mobile?
Yes. Every B2B Sales Proposal Slide Deck build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More Interactive Explainers & Slides](../../README.md#interactive-explainers--slides) · [B2B Sales Proposal Slide Deck on VibeFather](https://vibefather.ai/templates/b2b-sales-proposal-slide-deck?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
