# API Reference Docs Site <sup>PRO</sup>

> Three-column API reference with instant search, parameter tables, tabbed code samples with copy buttons and response examples.

<a href="https://vibefather.ai/templates/api-reference-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/api-reference-docs-site/7038a60e-8b6b-4f16-8ac8-76f606642c10/webp.52011c9df2.webp" width="100%" alt="API Reference Docs Site — API Docs with Code Tabs built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/api-reference-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A one-page, three-column API reference for a fictional JSON API: a sticky left navigation of endpoint groups with an instant search box (client-side, keyboard-navigable); a center reading column with a getting-started block (base URL, one install command with copy button, three quickstart steps) and eight endpoint blocks — method chips, paths, descriptions, parameter tables (name, type, required, default, description), code samples with curl/JS/Python tabs and working copy buttons, and response examples with status chips and collapsible JSON; and a right-hand on-this-page anchor rail. The default documents an invented expenses API, but the structure suits any REST API. The look is studio light: paper ground, ink text, one signal-blue accent, hand-highlighted code in dark panels — no highlighter library, no network calls. All content lives in one typed file; swapping the variables rewrites every command, URL and sample from the brand slug.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Docs](../../types/docs.md), [SaaS](../../types/saas.md) |
| Style | [Minimal](../../styles/minimal.md), [Swiss](../../styles/swiss.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/api-reference-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/api-reference-docs-site?case=7038a60e-8b6b-4f16-8ac8-76f606642c10&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/api-reference-docs-site/7038a60e-8b6b-4f16-8ac8-76f606642c10/shot_desktop.d97b5d37f5.webp" width="100%" alt="API Reference Docs Site — Expenses API reference, built by GLM-5.3 in ZCode"></a><br>
<b>Expenses API reference</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/api-reference-docs-site?case=7038a60e-8b6b-4f16-8ac8-76f606642c10&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/api-reference-docs-site?case=e6c5490b-64ce-4ecc-94a1-787dc84d5d24&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/api-reference-docs-site/e6c5490b-64ce-4ecc-94a1-787dc84d5d24/shot_desktop.c092c1251d.webp" width="100%" alt="API Reference Docs Site — Forms API reference, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Forms API reference</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/api-reference-docs-site?case=e6c5490b-64ce-4ecc-94a1-787dc84d5d24&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | API name | Ledgerline |
| `[PRODUCT]` | What it serves | expense data for small teams |
| `[VERSION]` | API version | v1 |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/api-reference-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A payments startup: set BRAND to your gateway name, PRODUCT to card and payout data, and rewrite the eight endpoint blocks for charges, refunds and webhooks.
- An internal platform team: keep the three-column layout but replace the public API key line with your auth header and document only the endpoints your services call.
- A developer tool founder: point VERSION at your current release, swap the expenses sample for your core resource, and keep the copy buttons as the first-call path.
- An open-source maintainer: use the template as a hosted reference for a self-hosted API, keeping the collapsible JSON responses and the getting-started install command.

## FAQ

### How do I change the base URL, npm package and API key header in the API Reference Docs Site?
The API Reference Docs Site builds every command, URL and sample from three variables: BRAND, PRODUCT and VERSION. Set BRAND to your API name and VERSION to your version prefix; the template derives the base URL, the client package name and the key header from the brand slug, so you never edit individual samples. All content lives in one typed content file, so the swap rewrites the whole reference at once.

### Can I use the API Reference Docs Site for a GraphQL or gRPC API instead of REST?
The API Reference Docs Site is structured around REST endpoint blocks: method chips, paths, parameter tables and response examples. A GraphQL API would need the endpoint blocks reworked into query and mutation entries, and the curl/JS/Python tabs replaced with query samples. The search, copy buttons, collapsible JSON and on-this-page rail still apply, so the page is a reasonable starting point, but expect to rewrite the endpoint section.

### How does the instant search work in the API Reference Docs Site, and does it need a server?
Search in the API Reference Docs Site runs entirely in the browser. Typing filters the left endpoint navigation live, dimming non-matching items; Enter jumps to the first match's block, Escape clears the query, and a sticky results bar appears above the reading column. Matching scores endpoint titles, paths, groups, parameter names and descriptions. There are no network calls and no backend, so it works on any static host.

### How do I add a new endpoint or parameter row to the API Reference Docs Site?
Every endpoint in the API Reference Docs Site is one typed entry in the single content file, holding its group, method, path, title, description, parameter rows, three code samples and response examples. Add a new entry with the same shape and it appears in the navigation, the reading column and the search index automatically. Parameter rows take name, type, required, default and description, so the table stays consistent.

### Can I use the API Reference Docs Site for a client project or a commercial developer product?
The API Reference Docs Site is a Pro template. Its brief, stack and variables are public, and Pro members get the full prompt plus the demo source code. Free prompts and every DESIGN.md are licensed for personal, non-commercial use; commercial and client work needs Pro. The demos were built by GLM-5.3 in ZCode and DeepSeek V4.1 Flash in DeepSeek Harness.

### How do I build an API reference docs site with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add api-reference-docs-site, replace [BRAND], [PRODUCT] and [VERSION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the API Reference Docs Site demo?
The Expenses API reference case was built by GLM-5.3 in ZCode; the Forms API reference case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the API Reference Docs Site template use?
API Reference Docs Site is a single-page site built with Tailwind CSS, Motion and React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the API Reference Docs Site template free to use?
API Reference Docs Site is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the API Reference Docs Site template work on mobile?
Yes. Every API Reference Docs Site build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [API Reference Docs Site on VibeFather](https://vibefather.ai/templates/api-reference-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
