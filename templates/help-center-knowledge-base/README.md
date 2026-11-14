# Help Center Knowledge Base

> Calm help center with instant search, six category cards, article pages with TOC rails, helpfulness voting and a contact form.

<a href="https://vibefather.ai/templates/help-center-knowledge-base?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/help-center-knowledge-base/e69c36f8-df66-4b0a-92a4-dde1f7ed2216/webp.3f54feb68c.webp" width="100%" alt="Help Center Knowledge Base — Help Center with Instant Search built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/help-center-knowledge-base?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A three-page help center for a fictional product: a search-first home (one large instant-search card over a six-category grid with counts and a popular-articles strip); a category page (?c=<slug>, first category without one) listing its articles with the search in context; and article pages (?a=<slug>, first article without one) with a sticky table-of-contents rail, readable prose in sections, a 'was this helpful' vote with a thank-you state persisted locally, related articles and a contact-support panel with an honest client-side-only note. The default content answers questions for an invented scheduling tool, but the structure suits any SaaS help center. The look is calm utility: warm white ground, ink text, one dependable blue accent, hairlines instead of heavy cards. Search, voting and the form all run in the browser — no network. All copy lives in one typed file; swapping the variables rewrites the whole site.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Docs](../../types/docs.md), [SaaS](../../types/saas.md) |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 3 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/help-center-knowledge-base?case=e69c36f8-df66-4b0a-92a4-dde1f7ed2216&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/help-center-knowledge-base/e69c36f8-df66-4b0a-92a4-dde1f7ed2216/shot_desktop.9487c64b4e.webp" width="100%" alt="Help Center Knowledge Base — Scheduling tool help center, built by GLM-5.3 in ZCode"></a><br>
<b>Scheduling tool help center</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/help-center-knowledge-base?case=e69c36f8-df66-4b0a-92a4-dde1f7ed2216&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/help-center-knowledge-base?case=d79479be-ecb3-43a9-8424-01806374c8e1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/help-center-knowledge-base/d79479be-ecb3-43a9-8424-01806374c8e1/shot_desktop.cba29e4f26.webp" width="100%" alt="Help Center Knowledge Base — Invoicing tool help center, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Invoicing tool help center</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/help-center-knowledge-base?case=d79479be-ecb3-43a9-8424-01806374c8e1&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Product name | Plainpost |
| `[PRODUCT]` | What it is | appointment scheduling for small clinics |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add help-center-knowledge-base` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A developer-tools startup: set [BRAND] and [PRODUCT] to your API platform, rewrite the six categories around authentication, webhooks and rate limits, and point the contact panel at your support inbox.
- A small clinic scheduling product: keep the default [PRODUCT] wording, swap the booking articles for patient-facing setup guides and add a category for account and billing questions.
- An internal IT desk: set [BRAND] to your company name and [PRODUCT] to your staff tools, then rewrite the article sections as numbered fixes for common login and device issues.
- A nonprofit volunteer portal: set [BRAND] to the organization, rewrite categories around signup, shifts and donations, and keep the voting widget to see which guides need clearer steps.

## FAQ

### How does the instant search on the Help Center Knowledge Base home page work?
The Help Center Knowledge Base template puts one large search card at the top of the home page and focuses it on load. As a visitor types, up to seven ranked rows appear below the input, each showing the article title, the matched section heading and a category chip. Arrow keys move between rows, Enter opens an article, and Escape clears the query. Search runs entirely in the browser across article titles, summaries and section headings.

### What happens when someone votes on whether an article was helpful or submits the contact form?
Voting and the contact form in the Help Center Knowledge Base template are both local to the browser. A helpful vote swaps the widget to a thank-you line and is remembered per article in that browser. The contact form validates name, email and message inline, then crossfades to a confirmation that says the message was saved locally and that a real help center would email the support address built from your brand name. Nothing is sent over a network.

### How do I rewrite the Help Center Knowledge Base for my own product?
The Help Center Knowledge Base template keeps all copy in one typed content file and exposes two variables, BRAND and PRODUCT. Setting BRAND changes the wordmark, page titles, footer, support email and local storage keys; setting PRODUCT rewrites the home intro, category blurbs and article examples. The default answers questions for an invented scheduling tool, so replace the six categories and their articles with your own support topics while keeping the same structure.

### How many categories and articles does the Help Center Knowledge Base template include?
The Help Center Knowledge Base template ships with six category cards and sixteen articles written out in full, spread across three pages: a search-first home, a category page and an article page. Each category card shows its article count, and the home page adds a popular-articles strip below the grid. Category and article pages are reached with a query parameter and fall back to the first category or first article when opened without one.

### Can I add a live search backend or a real support inbox to the Help Center Knowledge Base?
The Help Center Knowledge Base template is built as static files with no backend, so search, voting and the contact form all run in the browser and the form only stores a message locally. To connect a real inbox or a hosted search index, you would wire the contact panel and the search function to your own service. The template's honest client-side-only note tells visitors exactly that, so replace it once a real endpoint exists.

### How do I build a help center knowledge base with AI?
Copy the prompt from this page or run npx vibefather add help-center-knowledge-base, replace [BRAND] and [PRODUCT] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Help Center Knowledge Base demo?
The Scheduling tool help center case was built by GLM-5.3 in ZCode; the Invoicing tool help center case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Help Center Knowledge Base template use?
Help Center Knowledge Base is a 3-page site built with React, Motion and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Help Center Knowledge Base template for a client or a business?
The Help Center Knowledge Base prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Help Center Knowledge Base template work on mobile?
Yes. Every Help Center Knowledge Base build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Help Center Knowledge Base on VibeFather](https://vibefather.ai/templates/help-center-knowledge-base?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
