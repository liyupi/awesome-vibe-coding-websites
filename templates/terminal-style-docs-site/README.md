# Terminal-Style Docs Site

> A dark, monospace docs site for a command-line tool, with an amber accent, copyable commands and / search.

<a href="https://vibefather.ai/templates/terminal-style-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/terminal-style-docs-site/225a18de-afff-4c97-a66b-41f58f071275/webp.fbe56211f5.webp" width="100%" alt="Terminal-Style Docs Site — Dark Terminal-Style Documentation Site with Amber Accent and Keyboard Search built by Claude Opus 5.5"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/terminal-style-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

Amberterm is a three-page documentation template for an open-source command-line tool. It has a Getting started page, a Commands reference and a Configuration page. All three share one app shell: a fixed top bar, a left sidebar laid out like a file tree, and a right-hand "on this page" outline that highlights the heading you are reading. The background is near-black and a single amber accent marks links, the active page, focus rings and the blinking block caret. Headings, navigation and code use a monospace face. Longer explanations use a plain sans-serif so they stay easy to read.

It suits maintainers of small and mid-sized CLI tools, internal developer platforms, and anyone who wants docs that look at home next to a terminal without becoming a gimmick. Every command example sits in a terminal window with a $ prompt and a copy button. The button copies only the commands, not their output, and briefly confirms with "copied". Press / (or Ctrl/Cmd+K) to open a search palette. It filters a small index built in the browser from the same content file, and you move through results with the arrow keys and open one with Enter. Commands and configuration keys get anchored sections with flag and key tables you can scan quickly. On the Getting started page the first command types itself in, then its cached build output appears line by line.

To adapt it, change five values: the tool's name, its binary, a one-line purpose, the version and the config file name. All copy, commands, flags, config keys and terminal output live in one content file. The search index, sidebar and outline are all generated from that file, so they stay in sync. It is a static site with hash routing and no backend, and it builds into a single folder you can host anywhere. Motion is light, and all of it turns off when reduced motion is requested.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Docs](../../types/docs.md) |
| Style | [Minimal](../../styles/minimal.md), [Terminal](../../styles/terminal.md), [Dark](../../styles/dark.md) |
| Effects | Text Animation, Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 4 |
| Built with | [Claude Opus 5.5](../../models/claude-opus-5-5.md) in Cursor |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/terminal-style-docs-site?case=225a18de-afff-4c97-a66b-41f58f071275&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/terminal-style-docs-site/225a18de-afff-4c97-a66b-41f58f071275/shot_desktop.a39fe3d8d6.webp" width="100%" alt="Terminal-Style Docs Site — Task runner CLI, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Task runner CLI</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/terminal-style-docs-site?case=225a18de-afff-4c97-a66b-41f58f071275&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/terminal-style-docs-site?case=8ff8cf98-2fb0-47e6-8649-f9b5bd0b244a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/terminal-style-docs-site/8ff8cf98-2fb0-47e6-8649-f9b5bd0b244a/shot_desktop.3c32ae7e32.webp" width="100%" alt="Terminal-Style Docs Site — Database migration CLI, built by Claude Opus 5.5 in Cursor"></a><br>
<b>Database migration CLI</b><br>
<sub>Built by <b>Claude Opus 5.5</b> in Cursor · <a href="https://vibefather.ai/templates/terminal-style-docs-site?case=8ff8cf98-2fb0-47e6-8649-f9b5bd0b244a&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Tool name | Brindle |
| `[BINARY]` | Command / binary name | brindle |
| `[PURPOSE]` | One-line purpose | a local-first task runner that caches every step of your build |
| `[VERSION]` | Current version | v2.4.0 |
| `[CONFIG_FILE]` | Config file name | brindle.toml |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add terminal-style-docs-site` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An internal developer platform team: set BRAND to your platform, BINARY to its CLI and rewrite the Commands reference for your own verbs and flags.
- A solo maintainer of a small open-source CLI: set PURPOSE and VERSION, then replace the six commands, flags and config keys with your real ones.
- A database migration tool: keep the three-page structure and swap the Getting started commands and terminal output for your migrate and rollback examples.
- A teaching resource for terminal beginners: keep the amber terminal styling but rewrite the Getting started page as a guided first-run walkthrough with plainer prose.

## FAQ

### How do I add a wine club signup to a winery website built with AI?
The Terminal-Style Docs Site template does not include a wine club signup, because it is a documentation site for a command-line tool. It ships with a Getting started page, a Commands reference and a Configuration page, all driven by one content file, and no forms or mailing list fields. To add a signup you would need to change the brief before building, or extend the content file and add a form section yourself.

### How do I change the tool name, binary and version in the Terminal-Style Docs Site?
The Terminal-Style Docs Site template exposes five variables: BRAND, BINARY, PURPOSE, VERSION and CONFIG_FILE. Change those values and rewrite the copy, commands, flags, config keys and terminal output in the single content file so they stay coherent. The search index, sidebar and outline are generated from that same file, so they update with it. The default values are Brindle, brindle, v2.4.0 and brindle.toml.

### How does the / search palette work in the Terminal-Style Docs Site?
Pressing / or Ctrl/Cmd+K in the Terminal-Style Docs Site opens a search palette that filters a small index built in the browser from the same content file. Results cover pages, sections, commands, flags, config keys and environment variables. You move through matches with the arrow keys and open one with Enter. There is no external search service and no backend, so the index ships with the static build.

### What do the copy buttons in the Terminal-Style Docs Site command blocks actually copy?
Each command example in the Terminal-Style Docs Site sits in a terminal window with a $ prompt and a copy button. The button copies only the commands, not their output, and briefly confirms with the word "copied". That keeps pasted commands clean when a reader moves from the docs into their own terminal. The behavior is part of the template's terminal component and needs no configuration.

### Where can I host a Terminal-Style Docs Site, and does it need a server?
The Terminal-Style Docs Site template is a static site with hash routing and no backend. It builds into a single folder you can host anywhere, including static hosting or an internal file share. Setup uses Vite, React, TypeScript and Tailwind CSS, and the build produces the static files without server code or external APIs. There is nothing to run on a server for search or navigation.

### How do I build a Terminal-Style docs site with AI?
Copy the prompt from this page or run npx vibefather add terminal-style-docs-site, replace [BRAND], [BINARY], [PURPOSE] and [VERSION] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Terminal-Style Docs Site demo?
The Task runner CLI case was built by Claude Opus 5.5 in Cursor; the Database migration CLI case was built by Claude Opus 5.5 in Cursor. Each build used the published prompt with nothing added.

### What tech stack and pages does the Terminal-Style Docs Site template use?
Terminal-Style Docs Site is a 4-page site built with Tailwind CSS and React, with text animation and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Terminal-Style Docs Site template for a client or a business?
The Terminal-Style Docs Site prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Terminal-Style Docs Site template work on mobile?
Yes. Every Terminal-Style Docs Site build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Terminal-Style Docs Site on VibeFather](https://vibefather.ai/templates/terminal-style-docs-site?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
