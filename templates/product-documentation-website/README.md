# Product Documentation Website

> A guides-first three-column SDK documentation site with synced code tabs, version switching, and live try-it requests.

<a href="https://vibefather.ai/templates/product-documentation-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/product-documentation-website/c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d/webp.dfecdd02ff.webp" width="100%" alt="Product Documentation Website — Three-Column Developer SDK Documentation Site built by Gemini 4 Neon and GPT-6.2 Sol"></a>

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
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/product-documentation-website?case=c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/product-documentation-website/c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d/shot_desktop.23d76a594f.webp" width="100%" alt="Product Documentation Website — Event routing SDK docs, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Event routing SDK docs</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/product-documentation-website?case=c905f12a-8b26-4ab4-9b9b-f1dffbbb1f0d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/product-documentation-website?case=dc2b03ec-8ba9-4d8a-a91c-9dd47c63000d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/product-documentation-website/dc2b03ec-8ba9-4d8a-a91c-9dd47c63000d/shot_desktop.62b7650244.webp" width="100%" alt="Product Documentation Website — Background job queue SDK, built by GPT-6.2 Sol in Codex"></a><br>
<b>Background job queue SDK</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6.2 Sol in Codex · <a href="https://vibefather.ai/templates/product-documentation-website?case=dc2b03ec-8ba9-4d8a-a91c-9dd47c63000d&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- For an internal platform team: set BRAND to your platform name, replace the API Reference group with your service endpoints, and keep the Try It panel pointed at your mock payloads.
- For a startup shipping its first SDK: set PKG_NAME to your npm package, rewrite the Quickstart steps for your install command, and use the changelog timeline for release notes.
- For a technical writer documenting a public API: keep the three-column shell, swap the seeded Markdown pages for your endpoint guides, and set API_BASE to your real base URL.
- For a developer-experience lead teaching an event system: keep the architecture diagram and callouts, rename the Core Concepts group to your own topics, and adjust the parameter tables.

## FAQ

### How do I change the SDK brand, package name, and API URL in the Product Documentation Website template?
The Product Documentation Website template swaps through four variables: BRAND for the SDK name, PKG_NAME for the lowercase package slug, API_BASE for the endpoint shown in cURL and Try It panels, and TAGLINE for the one-line summary. The default values are RelayMesh, relaymesh, https://api.relaymesh.dev, and a short event-routing summary. Set them once, then rewrite every headline and code sample that references them so the docs stay consistent.

### How does the v2 and v3 version switcher work in this documentation template?
The Product Documentation Website template ships a version dropdown that genuinely swaps page prose, code examples, endpoint paths, and parameter tables between v3 (Latest) and v2 (Legacy). Selecting v2 shows an Amber deprecation notice banner and changes the publish endpoint from /v3/events to /v2/dispatch. The active version persists in local storage, so a returning reader lands on the same version they last used.

### Can I add my own documentation pages and guides to the Product Documentation Website template?
Yes. The Product Documentation Website template stores 18+ documentation pages as local Markdown files, organized into five guide groups: Getting Started, Core Concepts, SDK Guides, API Reference, and Operations. Adding or editing a page means writing Markdown, not touching React components. The parser handles front matter, headings, callout blocks, numbered steps, parameter tables, and synced code-tab groups, so new pages inherit the same layout.

### What does the Try it request panel do on the Product Documentation Website template?
The Try it panel is an interactive request runner inside the Quickstart and API reference pages. Readers edit JSON payload fields such as topic, region, and idempotencyKey, pick an HTTP method and endpoint, then click Send mock request to receive a realistic mocked JSON response with an HTTP 202 status badge and a simulated latency readout. It runs entirely in the browser with no backend or external API calls, so it is safe to host as a static site.

### How do the synchronized code tabs and Cmd+K search work in this developer docs template?
The Product Documentation Website template keeps JavaScript, Python, and cURL examples in sync across the whole page: clicking Python switches every multi-language code block at once, and the choice persists in local storage. Each block has a one-click copy button. The Cmd+K search palette indexes every document heading with full keyboard navigation, so readers can jump straight to a section without scrolling the sidebar.

### How do I build a product documentation website with AI?
Copy the prompt from this page or run npx vibefather add product-documentation-website, replace [BRAND], [PKG_NAME], [API_BASE] and [TAGLINE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Product Documentation Website demo?
The Event routing SDK docs case was built by Gemini 4 Neon in Antigravity; the Background job queue SDK case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Product Documentation Website template use?
Product Documentation Website is a 4-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Product Documentation Website template for a client or a business?
The Product Documentation Website prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Product Documentation Website template work on mobile?
Yes. Every Product Documentation Website build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Product Documentation Website on VibeFather](https://vibefather.ai/templates/product-documentation-website?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
