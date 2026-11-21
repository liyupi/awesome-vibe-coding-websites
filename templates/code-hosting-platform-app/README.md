# Code Hosting Platform App <sup>PRO</sup>

> A complete developer code-hosting workspace with file browser, split diffs, issues, releases, and insights.

<a href="https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/code-hosting-platform-app/bfdd517b-88c6-4f77-a4e8-8948d675c670/webp.f843aa7320.webp" width="100%" alt="Code Hosting Platform App — Developer Code Hosting Web App with Diffs built by Gemini 4 Neon"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Code Hosting Platform App is a self-contained developer workspace modeled around the everyday repository workflow: browsing source trees, switching branches, reviewing split or unified pull request diffs, triaging issues, tracking releases, and inspecting code activity charts. Designed for developer tools teams, internal platform demos, documentation sandboxes, and engineering showcases, it ships as a pure static single-page app with zero backend dependencies. Everything interactive persists locally in the browser through a dedicated storage adapter, including stars, watches, forks, new issues, issue replies, reaction counters, and inline pull request review comments. The visual system anchors on Midnight Ink (#0D1321) paired with semantic Mint (#3DDC97) for additions and open states, Coral (#FF6B6B) for deletions and closed items, and Amber (#FFB547) for highlights, alongside a high-contrast light mode toggle. Space Grotesk and Inter handle navigation and prose while JetBrains Mono drives the syntax-highlighted code viewer, clickable line numbers, and commit hashes. A global command palette triggered by '/' or Cmd+K searches across repositories, files, and issues in real time. On mobile screens, the repository file tree tucks cleanly into an on-demand drawer and pull request diffs switch automatically to unified view. Swap the platform name, organization handle, primary repository, and maintainer profile variables to adapt the workspace to any engineering team or open-source project.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [SaaS](../../types/saas.md), [Dashboard](../../types/dashboard.md) |
| Style | [Terminal](../../styles/terminal.md), [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 7 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/code-hosting-platform-app?case=bfdd517b-88c6-4f77-a4e8-8948d675c670&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/code-hosting-platform-app/bfdd517b-88c6-4f77-a4e8-8948d675c670/shot_desktop.6fc77de9e5.webp" width="100%" alt="Code Hosting Platform App — Systems KV storage org, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Systems KV storage org</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/code-hosting-platform-app?case=bfdd517b-88c6-4f77-a4e8-8948d675c670&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Platform Name | KestrelForge |
| `[ORG_HANDLE]` | Organization Handle | linden-sys |
| `[PRIMARY_REPO]` | Primary Repository | quiver-kv |
| `[MAINTAINER_NAME]` | Maintainer Full Name | Nadia Okafor |
| `[MAINTAINER_HANDLE]` | Maintainer Handle | nokafor |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- An open-source maintainer: set ORG_HANDLE and PRIMARY_REPO to your project, then seed the file tree, issues and releases with your real roadmap so contributors see a working workspace.
- An internal platform team: keep the repository views and insights charts but replace the public profile with your engineering org and seed internal service repos instead of open-source ones.
- A developer-tools startup: point BRAND at your product, use the releases view to present changelogs, and link the README to your docs so the demo doubles as a product tour.
- A coding bootcamp or course: set PRIMARY_REPO to a teaching project, seed exercises as issues, and use pull request diffs to show students how review comments work.

## FAQ

### What can you actually do inside the Code Hosting Platform App demo?
The Code Hosting Platform App opens on a full repository workspace: browse the file tree, switch branches, read syntax-highlighted source with clickable line numbers, and view a Markdown README. Separate views cover issues, pull request diffs in split or unified mode, commits, releases, insights charts and a maintainer profile. Stars, watches, forks, new issues, replies, reactions and inline review comments all persist in the browser.

### How do I turn this developer workspace into my own project or organization's site?
Set BRAND to your platform name, ORG_HANDLE to your organization slug, PRIMARY_REPO to the repository you want shown first, and MAINTAINER_NAME and MAINTAINER_HANDLE to your lead maintainer. Then rewrite the seeded repositories, source files, issues, pull requests, commits and releases so the commit messages and code read like your own project rather than the default sample data.

### Can I change the dark theme colors and fonts to match my developer brand?
The Code Hosting Platform App is built on Midnight Ink with Mint for additions and open states, Coral for deletions and closed items, and Amber for highlights, plus a light mode toggle. To rebrand, adjust those color values in the Tailwind theme and swap Space Grotesk, Inter and JetBrains Mono for your own typefaces, keeping the mono font for code, hashes and line numbers.

### How does the search palette and the branch switcher work without a backend?
The Code Hosting Platform App runs as a static single-page app with no server or external APIs. Pressing '/' or Cmd+K opens a command palette that searches repositories, files and issues in real time against seeded data. The branch switcher and every other interaction read from the same local dataset, and user actions like stars, forks and comments save through a storage adapter in the browser.

### Who is the Code Hosting Platform App template suited for, and can I use it for client work?
The Code Hosting Platform App suits developer-tools teams, open-source maintainers, technical founders and anyone building an internal platform demo, documentation sandbox or engineering showcase. It is a Pro template, so commercial and client use needs Pro, which also gives you the full prompt and the demo source code. Free template prompts and every DESIGN.md are licensed for personal, non-commercial use.

### How do I build a code hosting platform app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add code-hosting-platform-app, replace [BRAND], [ORG_HANDLE], [PRIMARY_REPO] and [MAINTAINER_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demo was built from exactly that text.

### Which AI model built the Code Hosting Platform App demo?
The Systems KV storage org case was built by Gemini 4 Neon in Antigravity. Each build used the published prompt with nothing added.

### What tech stack and pages does the Code Hosting Platform App template use?
Code Hosting Platform App is a 7-page site built with Tailwind CSS and React, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Code Hosting Platform App template free to use?
Code Hosting Platform App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Code Hosting Platform App template work on mobile?
Yes. Every Code Hosting Platform App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Code Hosting Platform App on VibeFather](https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
