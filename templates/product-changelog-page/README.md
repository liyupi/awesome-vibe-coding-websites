# Product Changelog Page

> Release-notes page with a version timeline, type filters with live counts, copyable version anchors and a drawn feed chip.

<a href="https://vibefather.ai/templates/product-changelog-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/product-changelog-page/88d938ae-10a1-4353-8f16-bcc71b88e712/webp.f9a0d22a9a.webp" width="100%" alt="Product Changelog Page — Changelog Page with Tag Filters built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/product-changelog-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A single-page changelog for one product: a sticky slim header with the wordmark and the newest version chip; a filter bar of type chips (feature / improvement / fix / breaking) with live counts that dim entries out rather than reflowing them; and a hairline timeline of nine release entries — each with a mono version chip, an entry title, tag chips, a two-line summary and bulleted changes, an anchor (#v2-4-1) with a copy-link affordance on hover, and occasional small code-drawn accents (a keyboard-shortcut note, a before/after line). A subscribe panel (client-side, honest) and a drawn-generic RSS-style feed chip close the page above the footer. The default logs an invented productivity tool, but the structure suits any app or library. The look is release notes: warm white ground, ink text, mono version chips, hairline rules, one violet accent. Entries order by version only — no dates anywhere. Everything runs locally.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Docs](../../types/docs.md), [SaaS](../../types/saas.md) |
| Style | [Swiss](../../styles/swiss.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/product-changelog-page?case=88d938ae-10a1-4353-8f16-bcc71b88e712&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/product-changelog-page/88d938ae-10a1-4353-8f16-bcc71b88e712/shot_desktop.dbeb32fdaa.webp" width="100%" alt="Product Changelog Page — Productivity app changelog, built by GLM-5.3 in ZCode"></a><br>
<b>Productivity app changelog</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/product-changelog-page?case=88d938ae-10a1-4353-8f16-bcc71b88e712&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/product-changelog-page?case=e662e1cd-4f4d-4412-87c1-88fcb9d0b02c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/product-changelog-page/e662e1cd-4f4d-4412-87c1-88fcb9d0b02c/shot_desktop.190383e1a7.webp" width="100%" alt="Product Changelog Page — Developer library changelog, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Developer library changelog</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/product-changelog-page?case=e662e1cd-4f4d-4412-87c1-88fcb9d0b02c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[PRODUCT]` | Product name | Traybike |
| `[SUMMARY]` | What it is | a tray-based task app for people who close tabs too fast |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add product-changelog-page` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A developer library: set PRODUCT to your package name, rewrite the nine entries as API changes and use the breaking tag on every deprecation so integrators spot them first.
- A small SaaS startup: set SUMMARY to one plain line about your app, replace the sample entries with your real release history and point the subscribe panel at your mailing list.
- An internal platform team: keep the timeline and filters, rename the type chips to match your team's labels and use the anchor links in standup notes to reference specific releases.
- A desktop tool with shortcuts: use the keyboard-shortcut note accent on entries that add or change hotkeys, and the before/after line to show old versus new behaviour.

## FAQ

### How do I change the product name and summary on the Product Changelog Page template?
The Product Changelog Page template takes two variables: PRODUCT and SUMMARY. Set PRODUCT to your app or library name and SUMMARY to one lowercase phrase describing what it is. Both feed the wordmark, page title, footer, subscribe line and the generated email address, so the whole changelog reads as your product rather than the invented productivity tool.

### How do I add a new release entry to the changelog?
Release entries in the Product Changelog Page template live in one content file as a list, each with a version, title, type tags, a two-line standfirst and bulleted changes. Add an entry at the top with its version number and tags, and the timeline, filter counts and anchor link update automatically. Entries order by version only, so no dates are needed.

### What do the type filters and live counts do on the changelog page?
The Product Changelog Page template has filter chips for feature, improvement, fix and breaking. Each chip shows the true total for that type, and selecting one dims non-matching entries to 22 percent opacity in place rather than reflowing the list. A count line updates from Showing 9 of 9 to the filtered total, and a Clear chip appears when filters are active.

### Is the subscribe panel on the Product Changelog Page connected to an email service?
No. The subscribe panel in the Product Changelog Page template is client-side only: it validates the email, saves it in the browser and shows a success line. Nothing is sent anywhere. To collect real subscribers, point the form at your own mailing list or backend, and keep the honest wording so visitors know what happens to their address.

### How do the copyable version anchors work on the changelog timeline?
Each release in the Product Changelog Page template carries an anchor built from its version, so 2.4.1 becomes #v2-4-1. A link icon appears on hover or focus, and clicking copies the full URL to the clipboard with a short check confirmation. The entry also has scroll margin so the sticky header does not cover it when someone opens a shared link.

### How do I build a product changelog page with AI?
Copy the prompt from this page or run npx vibefather add product-changelog-page, replace [PRODUCT] and [SUMMARY] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Product Changelog Page demo?
The Productivity app changelog case was built by GLM-5.3 in ZCode; the Developer library changelog case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Product Changelog Page template use?
Product Changelog Page is a single-page site built with React, Motion and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Product Changelog Page template for a client or a business?
The Product Changelog Page prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Product Changelog Page template work on mobile?
Yes. Every Product Changelog Page build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Product Changelog Page on VibeFather](https://vibefather.ai/templates/product-changelog-page?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
