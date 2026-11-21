# Product Documentation Website

> A guides-first three-column SDK documentation site with synced code tabs, version switching, and live try-it requests.

<a href="https://vibefather.ai/templates/product-documentation-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/product-documentation-website/c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d/webp.dfecdd02ff.webp" width="100%" alt="Product Documentation Website — Three-Column Developer SDK Documentation Site built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/product-documentation-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Product Documentation Website is a guides-first technical documentation template built for developer SDKs, APIs, and software platforms. It implements the classic three-column reading experience: a collapsible left navigation rail with active section tracking, a focused central documentation column, and a right-hand 'On this page' table of contents that highlights the active heading as you scroll. Content lives in 18+ local Markdown files organized into logical guide groups, making it effortless for teams to add or edit pages without touching React components. Key developer ergonomics work out of the box: a v2 / v3 version switcher that genuinely swaps prose, endpoints, and parameter tables; synchronized JavaScript, Python, and cURL code tabs across the entire page with one-click copy buttons; styled callouts (note, tip, warning, danger); numbered step lists; structured parameter tables; and an interactive 'Try it' request runner that returns realistic mocked JSON payloads. A Cmd+K search palette indexes every document heading with full keyboard navigation, while prev/next links, an edit-this-page link, local 'Was this page helpful?' feedback, a versioned changelog, and a helpful 404 route complete the shell. Styled in crisp paper white, graphite (#1C1E26), ultraviolet (#6C4CFF), and lime code highlights (#C3F53C) with a dark mode toggle, the site adapts smoothly to mobile drawers and swap-ready variables for any SDK brand.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Docs](../../types/docs.md) |
| Style | [Editorial](../../styles/editorial.md), [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 4 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/product-documentation-website?case=c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/product-documentation-website/c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d/shot_desktop.23d76a594f.webp" width="100%" alt="Product Documentation Website — Event routing SDK docs, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Event routing SDK docs</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/product-documentation-website?case=c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | SDK Brand Name | RelayMesh |
| `[PKG_NAME]` | Package Slug | relaymesh |
| `[API_BASE]` | Mock API Base URL | https://api.relaymesh.dev |
| `[TAGLINE]` | SDK One-Line Summary | Low-latency event routing, signed webhooks, and fan-out delivery for modern services. |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add product-documentation-website` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An API platform team: set BRAND and PKG_NAME to your service, point API_BASE at your real endpoint, and replace the seeded Markdown guides with your authentication and webhook pages.
- A developer-experience lead at a startup: keep the Quickstart layout, rewrite the numbered install steps for your package manager, and swap the parameter tables for your own request fields.
- A technical writer documenting an internal SDK: use the five sidebar groups for your own sections, add callouts for deprecations, and repoint the edit-this-page link at your repository.
- A founder launching a developer product: set TAGLINE to your one-line summary, use the changelog timeline for release notes, and keep the Try it panel to show a working request before signup.

## FAQ

### How do I add my own documentation pages to the Product Documentation Website template?
The Product Documentation Website template stores its content in 18+ local Markdown files, so you add a page by creating a new Markdown file with front matter, headings, callouts, steps, parameter tables and code-tab groups. The parser reads those files at build time and the left sidebar groups pick them up. You edit prose and examples in Markdown rather than touching React components.

### How does the version switcher work in the Product Documentation Website template?
The Product Documentation Website template includes a v2 and v3 switcher in the top bar. Choosing a version genuinely swaps the page prose, the code examples and the endpoint paths, so v3 shows /v3/events and v2 shows /v2/dispatch, and a v2 selection displays an amber legacy notice banner. The chosen version is saved in local storage so it persists between visits.

### Can I change the brand name, package slug and API base URL in the Product Documentation Website template?
Yes. The Product Documentation Website template is built around four swap-ready variables: BRAND for the SDK name, PKG_NAME for the lowercase package and CLI slug, API_BASE for the endpoint shown in cURL and Try It panels, and TAGLINE for the one-line summary. Set them to your own values and rewrite the default copy in the same tone and length, since the seeded text is written for the default brand.

### What does the Try it request panel do in the Product Documentation Website template?
The Try it panel on the Product Documentation Website template lets a reader edit JSON payload fields such as topic, region and idempotencyKey, choose an HTTP method and endpoint, and send a mock request. It returns a realistic mocked JSON response with an HTTP 202 status badge and a simulated latency readout. No backend or external API is called; the response is generated in the browser.

### How do the synchronized code tabs and Cmd+K search work in the Product Documentation Website template?
The Product Documentation Website template syncs JavaScript, Python and cURL tabs across the whole page, so clicking Python switches every multi-language code block at once and remembers the choice. The Cmd+K palette indexes every document heading and supports full keyboard navigation, while the right-hand On this page column highlights the active heading as you scroll. Both are built in and need no setup.

### How do I build a product documentation website with AI?
Copy the prompt from this page or run npx vibefather add product-documentation-website, replace [BRAND], [PKG_NAME], [API_BASE] and [TAGLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Product Documentation Website demo?
The Event routing SDK docs case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Product Documentation Website template use?
Product Documentation Website is a 4-page site built with Tailwind CSS and React, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Product Documentation Website template for a client or a business?
The Product Documentation Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Product Documentation Website template work on mobile?
Yes. Every Product Documentation Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Product Documentation Website on VibeFather](https://vibefather.ai/templates/product-documentation-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
