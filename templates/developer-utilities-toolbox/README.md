# Developer Utilities Toolbox

> 15 working browser-local developer utilities with Cmd+K jumper, favorites, history, and dark mode.

<a href="https://vibefather.ai/templates/developer-utilities-toolbox?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/developer-utilities-toolbox/f065f39a-f6c4-48bb-ad25-b54f90c55e18/webp.36d9218742.webp" width="100%" alt="Developer Utilities Toolbox — Local Developer Utilities &amp; Converters Suite built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/developer-utilities-toolbox?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A fast, offline-first developer utilities web app featuring 15 genuinely functional tools on individual hash routes: JSON formatter & validator, Base64 encoder/decoder, URL parser, JWT decoder, live regex highlighter, line-by-line diff viewer, UUID & password generator, color converter with WCAG contrast checker, Unix timestamp converter, cron explainer, Markdown preview, image-to-Data-URI encoder, case converter, lorem ipsum generator, and Web Crypto hash generator. Includes localStorage favorites and history, Cmd+K command jumper, paper-white and ink-black aesthetic with lime accents, and full dark mode.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Web App](../../types/web-app.md), [Tool](../../types/tool.md) |
| Style | [Minimal](../../styles/minimal.md), [Technical](../../styles/technical.md) |
| Effects | Dark Mode, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 16 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/developer-utilities-toolbox?case=f065f39a-f6c4-48bb-ad25-b54f90c55e18&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/developer-utilities-toolbox/f065f39a-f6c4-48bb-ad25-b54f90c55e18/shot_desktop.0efaa6a220.webp" width="100%" alt="Developer Utilities Toolbox — BenchKit, built by Gemini 4 Neon in Antigravity"></a><br>
<b>BenchKit</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/developer-utilities-toolbox?case=f065f39a-f6c4-48bb-ad25-b54f90c55e18&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | App Name | BenchKit |
| `[TAGLINE]` | Short Tagline | 15 local developer utilities. Zero uploads. |
| `[DOMAIN_HINT]` | Local Domain Label | benchkit.local |
| `[SUPPORT_EMAIL]` | Sample Contact Email | ops@benchkit.local |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add developer-utilities-toolbox` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An internal platform team: set [BRAND] to your engineering portal name and keep the JSON, Base64 and JWT tools as the first favorites so support engineers stop pasting payloads into public sites.
- A security consultancy: use [DOMAIN_HINT] for your own sample tokens, keep the Web Crypto hash generator and JWT inspector, and point [SUPPORT_EMAIL] at your intake address.
- A frontend design studio: lean on the color converter with WCAG contrast checker and the regex tester, and rename [TAGLINE] to describe your accessibility review workflow.
- A solo developer's side project: set [BRAND] to your own name, trim the directory to the tools you actually use and keep the privacy badge to show nothing is uploaded.

## FAQ

### Does the Developer Utilities Toolbox send my data anywhere?
No. Every one of the 15 utilities in the Developer Utilities Toolbox runs entirely in the browser with no network calls or uploads, so JSON payloads, JWTs, regex test strings and hashes never leave the page. Favorites, recent history and the light or dark theme preference are stored in localStorage under keys derived from your brand name, which means the app also keeps working offline after the first load.

### How do I rename the app and change the sample domain in the Developer Utilities Toolbox?
Set the four variables in the prompt before you hand it to your agent: [BRAND] becomes the app name shown in the sidebar header, page titles and command palette, [TAGLINE] is the subtitle on the home directory and privacy banner, [DOMAIN_HINT] fills the sample JSON, JWT, URL and email snippets, and [SUPPORT_EMAIL] appears in payloads and the footer. Rewrite the default copy for your values, keeping the same length and tone.

### Is there a free developer tools website template I can build with AI?
Yes. The Developer Utilities Toolbox on VibeFather is a free template with 16 pages, and its prompt plus the DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs Pro, which also unlocks the full prompt and the source code of the demos. The live BenchKit demo was built with Gemini 4 Neon in Antigravity, so you can see the finished app before you start.

### What can I change first in the Developer Utilities Toolbox to make it mine?
Start with the brand variables, then the tool metadata and default sample inputs that sit in one data file, since those drive the sidebar directory, the home bento grid and the preloaded payloads inside each utility. Next adjust the lime accent and the paper-white and ink-black palette in the Tailwind theme, and finally edit the footer copy. Layout, type and motion can stay as described.

### How do the Cmd+K jumper, favorites and history work in the Developer Utilities Toolbox?
The Developer Utilities Toolbox opens each of its 15 utilities on its own hash route, and the persistent sidebar groups them into Formatting and Code, Encoding and Web, Security and Crypto, Text and Regex, and Design and Time. Pressing Cmd+K or Ctrl+K opens a command palette you can drive with the arrow keys and Enter, while pinned favorites and the last five tools you used are saved in localStorage and shown in the sidebar.

### How do I build a developer utilities toolbox with AI?
Copy the prompt from this page or run npx vibefather add developer-utilities-toolbox, replace [BRAND], [TAGLINE], [DOMAIN_HINT] and [SUPPORT_EMAIL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Developer Utilities Toolbox demo?
The BenchKit case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Developer Utilities Toolbox template use?
Developer Utilities Toolbox is a 16-page site built with Tailwind CSS, React and Vite, with dark mode and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Developer Utilities Toolbox template for a client or a business?
The Developer Utilities Toolbox prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Developer Utilities Toolbox template work on mobile?
Yes. Every Developer Utilities Toolbox build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Developer Utilities Toolbox on VibeFather](https://vibefather.ai/templates/developer-utilities-toolbox?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
