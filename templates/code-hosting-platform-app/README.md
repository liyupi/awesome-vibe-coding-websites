# Code Hosting Platform App <sup>PRO</sup>

> A complete developer code-hosting workspace with file browser, split diffs, issues, releases, and insights.

<a href="https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/code-hosting-platform-app/bfdd517b-88c6-4f77-a4e8-8948d675c670/webp.f843aa7320.webp" width="100%" alt="Code Hosting Platform App — Developer Code Hosting Web App with Diffs built by Gemini 4 Neon and GPT-6.2 Sol"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Code Hosting Platform App is a self-contained developer workspace modeled around the everyday repository workflow: browsing source trees, switching branches, reviewing split or unified pull request diffs, triaging issues, tracking releases, and inspecting code activity charts. Designed for developer tools teams, internal platform demos, documentation sandboxes, and engineering showcases, it ships as a pure static single-page app with zero backend dependencies. Everything interactive persists locally in the browser through a dedicated storage adapter, including stars, watches, forks, new issues, issue replies, reaction counters, and inline pull request review comments. The visual system anchors on Midnight Ink (#0D1321) paired with semantic Mint (#3DDC97) for additions and open states, Coral (#FF6B6B) for deletions and closed items, and Amber (#FFB547) for highlights, alongside a high-contrast light mode toggle. Space Grotesk and Inter handle navigation and prose while JetBrains Mono drives the syntax-highlighted code viewer, clickable line numbers, and commit hashes. A global command palette triggered by '/' or Cmd+K searches across repositories, files, and issues in real time. On mobile screens, the repository file tree tucks cleanly into an on-demand drawer and pull request diffs switch automatically to unified view. Swap the platform name, organization handle, primary repository, and maintainer profile variables to adapt the workspace to any engineering team or open-source project.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [SaaS](../../types/saas.md), [Dashboard](../../types/dashboard.md) |
| Style | [Minimal](../../styles/minimal.md), [Dark](../../styles/dark.md), [Terminal](../../styles/terminal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 4 + lucide-react |
| Pages | 7 |
| Built with | [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, [GPT-6.2 Sol](../../models/gpt-6-2-sol.md) in Codex |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/code-hosting-platform-app?case=bfdd517b-88c6-4f77-a4e8-8948d675c670&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/code-hosting-platform-app/bfdd517b-88c6-4f77-a4e8-8948d675c670/shot_desktop.6fc77de9e5.webp" width="100%" alt="Code Hosting Platform App — Systems KV storage org, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Systems KV storage org</b><br>
<sub>Built by <b>Gemini 4 Neon</b> in Antigravity · <a href="https://vibefather.ai/templates/code-hosting-platform-app?case=bfdd517b-88c6-4f77-a4e8-8948d675c670&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/code-hosting-platform-app?case=20464864-d9d7-464f-b5d3-6974df1dc7ed&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/code-hosting-platform-app/20464864-d9d7-464f-b5d3-6974df1dc7ed/shot_desktop.937dc833f8.webp" width="100%" alt="Code Hosting Platform App — Audio DSP toolkit org, built by GPT-6.2 Sol in Codex"></a><br>
<b>Audio DSP toolkit org</b><br>
<sub>Built by <b>GPT-6.2 Sol</b> in Codex · <a href="https://vibefather.ai/templates/code-hosting-platform-app?case=20464864-d9d7-464f-b5d3-6974df1dc7ed&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
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

- An open-source maintainer: set BRAND to your project, ORG_HANDLE and PRIMARY_REPO to your repository, and seed real issues and releases so visitors see live activity.
- An internal platform team: keep the dark Midnight Ink theme and fill the repository tree with your services, using Insights charts to show code activity across teams.
- A developer-tools startup: point MAINTAINER_NAME and MAINTAINER_HANDLE at your lead engineer and use the profile view as a public engineering showcase.
- A coding bootcamp: swap the seeded source files for lesson repositories in Rust, Go and Python, and use issues as exercise threads students can reply to.

## FAQ

### How do I adapt the Code Hosting Platform App to my own engineering team or open-source project?
The Code Hosting Platform App exposes five variables: BRAND for the platform name, ORG_HANDLE for the organization slug, PRIMARY_REPO for the repository shown on first load, and MAINTAINER_NAME plus MAINTAINER_HANDLE for the lead maintainer. Change those values, then rewrite the seeded repositories, source files, issues, pull requests, commits and releases so they describe your project. The prompt asks you to keep all copy in one content file so you can swap it without touching components.

### Can I use the Code Hosting Platform App for a client project?
Commercial and client use of the Code Hosting Platform App needs a Pro membership, which is also how you get the full prompt and the demo source code. The published brief, stack and variables are visible to everyone, but the complete prompt and the source files of the demos are reserved for Pro members. Free prompts and every DESIGN.md are licensed for personal, non-commercial use only.

### Where does the Code Hosting Platform App store stars, new issues and review comments without a backend?
The Code Hosting Platform App keeps all browser persistence inside a single storage adapter, which writes to localStorage. Stars, watches, forks, new issues, issue replies, reaction counters, inline pull request review comments and the theme choice all survive a page reload. Because every write goes through that one adapter, pointing the app at a real API later means editing one file rather than hunting through components.

### How does the search palette and keyboard shortcut work in the Code Hosting Platform App?
The Code Hosting Platform App opens a global command palette when you press the slash key or Cmd+K. The palette searches across repositories, files and issues in real time as you type, so you can jump to a source file or an open issue without leaving the keyboard. The rest of the workspace uses hash routing between the Repository Code, Issues, Pull Requests, Commits, Releases, Insights and User Profile views.

### How do I add a new issue reply or a pull request review comment in the Code Hosting Platform App?
The Code Hosting Platform App lets you create issues, reply to existing threads, react to comments and leave inline review comments directly on a pull request diff. Every one of those actions is saved locally through the storage adapter, so the thread you build stays visible the next time you open the page. The split and unified diff views both show added lines in Mint and deleted lines in Coral.

### How do I build a code hosting platform app with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add code-hosting-platform-app, replace [BRAND], [ORG_HANDLE], [PRIMARY_REPO] and [MAINTAINER_NAME] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Code Hosting Platform App demo?
The Systems KV storage org case was built by Gemini 4 Neon in Antigravity; the Audio DSP toolkit org case was built by GPT-6.2 Sol in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Code Hosting Platform App template use?
Code Hosting Platform App is a 7-page site built with React and Tailwind CSS, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Code Hosting Platform App template free to use?
Code Hosting Platform App is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Code Hosting Platform App template work on mobile?
Yes. Every Code Hosting Platform App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Code Hosting Platform App on VibeFather](https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
