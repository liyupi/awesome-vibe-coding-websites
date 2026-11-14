# Bento Grid SaaS Landing Page

> A warm cream bento SaaS homepage with live tiles, a working command palette and a yearly pricing switch.

<a href="https://vibefather.ai/templates/bento-grid-saas-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/oatmeal/338c0197-e778-41ef-b62b-8633e8214053/webp.b2f6554ee8.webp" width="100%" alt="Bento Grid SaaS Landing Page — Light Warm-Neutral SaaS Landing Page with Interactive Bento Grid built by Claude Opus 5.5 and Gemini 4 Carbon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/bento-grid-saas-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Oatmeal is a single-page SaaS homepage built around a bento feature grid where the tiles actually do things. It is set on a cream background with white cards, ink text and one burnt-orange accent. The default content is for an invented team analytics product, so the tiles show counters, charts and settings: a large live-pulse chart with range tabs and a hover crosshair, numbers that count up when they scroll into view, a goal ring, a bar chart with tooltips, toggles you can switch, and a fake command palette. The palette opens with Cmd or Ctrl+K, filters a hardcoded list and works with the keyboard.

It suits early-stage software products, internal tools and any service that has numbers to show and wants a calm, friendly look instead of the usual dark SaaS style. Headlines are set in Fraunces, body text in Inter and figures in Geist Mono. All fonts are self-hosted. Every card uses the same 28px radius and padding, and the hairline borders darken slightly on hover. That consistency is what makes the asymmetric twelve-column grid read as one system.

Under the grid is logo-free social proof: a row of large animated stats and a quote wall where the avatars are tinted initial circles. Pricing has a pill switch for monthly or yearly billing. The prices roll to their new values and the middle plan is shown on an ink card. After that come an accordion FAQ with smooth height animation, a dark closing call-to-action band and a plain footer.

To adapt it, change the brand, product, audience, headline and main call to action. All copy lives in one content file, so tile labels, quotes, plans and questions can be rewritten in one place. The charts are inline SVG fed by small data arrays, and every animation turns off when reduced motion is requested.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Landing Page](../../types/landing-page.md), [SaaS](../../types/saas.md) |
| Style | [Minimal](../../styles/minimal.md), [Bento Grid](../../styles/bento.md) |
| Effects | Scroll Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + react, + motion + lucide-react |
| Pages | 1 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor, [Gemini 4 Carbon](../../models/gemini-4-carbon.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/bento-grid-saas-landing-page?case=338c0197-e778-41ef-b62b-8633e8214053&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/oatmeal/338c0197-e778-41ef-b62b-8633e8214053/shot_desktop.1081a0920f.webp" width="100%" alt="Bento Grid SaaS Landing Page — Team analytics tool, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Team analytics tool</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/bento-grid-saas-landing-page?case=338c0197-e778-41ef-b62b-8633e8214053&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/bento-grid-saas-landing-page?case=97c3aaad-f62b-4165-b3ef-7713ff21a4f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/oatmeal/97c3aaad-f62b-4165-b3ef-7713ff21a4f5/shot_desktop.fc5894f1e7.webp" width="100%" alt="Bento Grid SaaS Landing Page — Small-shop cash-flow app, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Small-shop cash-flow app</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/bento-grid-saas-landing-page?case=97c3aaad-f62b-4165-b3ef-7713ff21a4f5&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/bento-grid-saas-landing-page?case=83055d14-8919-423e-a3c8-8dbca3b1f008&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/bento-grid-saas-landing-page/83055d14-8919-423e-a3c8-8dbca3b1f008/shot_desktop.7cdfe15e49.webp" width="100%" alt="Bento Grid SaaS Landing Page — Release analytics tool, built by Gemini 4 Carbon in Cursor"></a><br>
<b>Release analytics tool</b><br>
<sub>Built by <b>Gemini 4 Carbon</b> in Cursor · <a href="https://vibefather.ai/templates/bento-grid-saas-landing-page?case=83055d14-8919-423e-a3c8-8dbca3b1f008&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Brand name | Brindle |
| `[PRODUCT]` | Product category | team analytics |
| `[AUDIENCE]` | Target audience | product and engineering teams |
| `[HEADLINE]` | Hero headline | See how your team really works. |
| `[PRIMARY_CTA]` | Primary call to action | Start free for 14 days |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add bento-grid-saas-landing-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An indie developer shipping a usage dashboard: set BRAND and PRODUCT, then swap the pulse chart and counters for requests, errors and uptime figures your users check daily.
- A small-shop cash-flow app: point AUDIENCE at shop owners, replace the analytics tiles with cash-in, cash-out and runway numbers, and rewrite the quote wall with owner testimonials.
- A release analytics tool for engineering leads: keep the bento grid, change the bar chart to deploy frequency and the command palette entries to your own product actions.
- An internal tool team presenting to approvers: set HEADLINE to the internal win, keep the pricing switch off the page and lead the closing band to a request-access form.

## FAQ

### What actually works inside the bento tiles on the Bento Grid SaaS Landing Page?
The tiles on the Bento Grid SaaS Landing Page are interactive rather than decorative. A large pulse chart has range tabs and a hover crosshair, counters count up when they scroll into view, a bar chart shows tooltips, toggles can be switched, a goal ring fills, and a fake command palette opens with Cmd or Ctrl+K and filters a list using the keyboard. All motion turns off when reduced motion is requested.

### How do I change the brand name, product and hero headline on the Bento Grid SaaS Landing Page?
The Bento Grid SaaS Landing Page is driven by five variables: BRAND, PRODUCT, AUDIENCE, HEADLINE and PRIMARY_CTA. Set those, then rewrite the copy in the single content file so tile labels, quotes, plan features, FAQ answers and palette items match your product. The prompt asks you to keep each string within about 20 percent of its original length so the grid and cards still hold their shape.

### Can the bento tiles show my own numbers instead of the sample team analytics data?
Yes. The charts on the Bento Grid SaaS Landing Page are inline SVG fed by small data arrays, and the counters read their targets from the same content file. Replace those arrays and the stat labels with your own figures, then adjust the tile captions so they describe what the numbers mean for your audience. No backend or external API is involved, so the values are fixed until you edit them.

### Is the Bento Grid SaaS Landing Page free to use, and what do I get?
The Bento Grid SaaS Landing Page is a free template. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also covers the source code of the demos. The page shows the brief, stack and variables to everyone, and the full prompt to Pro members.

### How do I make the pricing switch and FAQ work for my own plans?
The pricing section on the Bento Grid SaaS Landing Page has a pill switch between monthly and yearly billing, prices that roll to their new values, and the middle plan shown on an ink card. Edit the plan names, prices and feature lines in the content file, keeping the same structure for each plan. The FAQ is an accordion fed by the same file, so replace the questions and answers there and the smooth height animation stays as it is.

### How do I build a bento grid SaaS landing page with AI?
Copy the prompt from this page or run npx vibefather add bento-grid-saas-landing-page, replace [BRAND], [PRODUCT], [AUDIENCE] and [HEADLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Bento Grid SaaS Landing Page demo?
The Team analytics tool case was built by Claude Opus 5.5 in Cursor; the Small-shop cash-flow app case was built by Claude Opus 5.5 in Cursor; the Release analytics tool case was built by Gemini 4 Carbon in Cursor. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Bento Grid SaaS Landing Page template use?
Bento Grid SaaS Landing Page is a single-page site built with React, Motion and Tailwind CSS, with scroll animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Bento Grid SaaS Landing Page template for a client or a business?
The Bento Grid SaaS Landing Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Bento Grid SaaS Landing Page template work on mobile?
Yes. Every Bento Grid SaaS Landing Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Bento Grid SaaS Landing Page on VibeFather](https://vibefather.ai/templates/bento-grid-saas-landing-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
