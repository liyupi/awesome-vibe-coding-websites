# Open Source Project Homepage

> Homepage for an open-source library: copyable install command, tabbed code example, feature grid, contributors and sponsor tiers.

<a href="https://vibefather.ai/templates/open-source-project-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/open-source-project-homepage/8a911742-c560-4e29-ad52-8c3a8fa8760e/webp.741bedc6c6.webp" width="100%" alt="Open Source Project Homepage — Open Source Library Homepage built by GLM-5.3 and DeepSeek V4.1 Flash"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/open-source-project-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [DESIGN.md](DESIGN.md)

A single-page homepage for an open-source library: the name and one-line pitch over a copyable install command, a tabbed code example (JavaScript and TypeScript) that shows the library's core call in a statically highlighted panel, a six-card feature grid, a counters row with clearly-sample stars and downloads, a humans strip with contributors as initials avatars, a docs card with a small table-of-contents mock, a sponsor card with drawn tiers, and a changelog teaser of three semver entries. The default content documents an invented zero-dependency validation library, but the structure suits any small open-source package: change the project name, package name, description and star figure and every section — including both code samples and the changelog verbs — still reads true. The look is terminal-warm: a paper canvas, ink text, one terminal-green accent, JetBrains Mono for code, names and counters, Overpass for prose; the code panel's window chrome, all avatars, badges and community glyphs are drawn in code, with no real platform marks anywhere. To adapt it, swap the variables and rewrite the copy in one content file; features, docs mock, changelog and tiers all read from it.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Docs](../../types/docs.md) |
| Style | [Minimal](../../styles/minimal.md), [Terminal](../../styles/terminal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | [GLM-5.3](../../models/glm-5-3.md) in ZCode, [DeepSeek V4.1 Flash](../../models/deepseek-v4-1-flash.md) in DeepSeek Harness |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/open-source-project-homepage?case=8a911742-c560-4e29-ad52-8c3a8fa8760e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/open-source-project-homepage/8a911742-c560-4e29-ad52-8c3a8fa8760e/shot_desktop.24a3cbc8c5.webp" width="100%" alt="Open Source Project Homepage — Config validation library, built by GLM-5.3 in ZCode"></a><br>
<b>Config validation library</b><br>
<sub>Built by <b>GLM-5.3</b> in ZCode · <a href="https://vibefather.ai/templates/open-source-project-homepage?case=8a911742-c560-4e29-ad52-8c3a8fa8760e&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/open-source-project-homepage?case=db168576-8894-4359-a96e-b8cecc8bf5dc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/open-source-project-homepage/db168576-8894-4359-a96e-b8cecc8bf5dc/shot_desktop.3da2f52492.webp" width="100%" alt="Open Source Project Homepage — Cron scheduler library, built by DeepSeek V4.1 Flash in DeepSeek Harness"></a><br>
<b>Cron scheduler library</b><br>
<sub>Built by <b>DeepSeek V4.1 Flash</b> in DeepSeek Harness · <a href="https://vibefather.ai/templates/open-source-project-homepage?case=db168576-8894-4359-a96e-b8cecc8bf5dc&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Project name | Figleaf |
| `[PKG]` | Package name | figleaf |
| `[WHAT]` | What it is | zero-dependency schema validation for configs and forms |
| `[STARS]` | Star figure | 8.4k |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add open-source-project-homepage` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A solo maintainer shipping a small npm utility: set BRAND and PKG to your package, rewrite WHAT for its category, and replace the validation sample with your library's core call.
- A developer tooling team launching an internal library: point the docs card table of contents at your real sections and rewrite the three changelog entries in your release style.
- An indie hacker publishing a cron scheduler: reuse the second live demo's framing, set STARS to your count, and swap the sponsor tiers for your funding options.
- A maintainer reviving an older package: keep the terminal look, replace the contributor initials with your current humans strip and rewrite the feature grid around what still works.

## FAQ

### How do I change the install command and package name on the Open Source Project Homepage template?
The Open Source Project Homepage template reads the install line from the PKG variable, so setting PKG to your published package name updates the copyable command (npm i [PKG]) and the import lines in both code samples at once. Keep the package name one word and matching the project name in BRAND, then rewrite the surrounding copy in the content file so the pitch still describes what the package does.

### Can I use the Open Source Project Homepage template for a library that isn't about validation?
Yes. The Open Source Project Homepage template ships with sample content for an invented zero-dependency validation library, but every section reads from one content file. Change WHAT to a lowercase phrase describing your package's category, then rewrite the six feature cards, both code samples, the docs table-of-contents mock and the three changelog entries so they describe your library's real API and release history.

### What should I edit first on the Open Source Project Homepage template?
Start with the four variables on the Open Source Project Homepage template: BRAND for the project name, PKG for the package name, WHAT for the one-line category and STARS for the sample star figure. Then replace the six feature cards, both JavaScript and TypeScript code samples and the changelog teaser. The counters, contributor avatars and sponsor tiers are clearly labelled as samples, so swap them before publishing.

### Are the stars, downloads and sponsor tiers on the Open Source Project Homepage template real?
No. The Open Source Project Homepage template draws its counters, contributor initials and sponsor tiers from sample content in the content file, and the star figure is captioned as a sample near the counters row and the header chip. Replace STARS with your project's figure, add your real contributors as initials avatars, and rewrite the sponsor tiers to match what your project actually offers.

### Is the Open Source Project Homepage template free to use for my own open-source project?
The Open Source Project Homepage template is free, and its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client use needs Pro, which also gives you the full prompt and the source code of the demos. You can add it to a project with npx vibefather add open-source-project-homepage and fill in the variables.

### How do I build an open source project homepage with AI?
Copy the prompt from this page or run npx vibefather add open-source-project-homepage, replace [BRAND], [PKG], [WHAT] and [STARS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Open Source Project Homepage demo?
The Config validation library case was built by GLM-5.3 in ZCode; the Cron scheduler library case was built by DeepSeek V4.1 Flash in DeepSeek Harness. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Open Source Project Homepage template use?
Open Source Project Homepage is a single-page site built with Tailwind CSS, Motion and React, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Open Source Project Homepage template for a client or a business?
The Open Source Project Homepage prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Open Source Project Homepage template work on mobile?
Yes. Every Open Source Project Homepage build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Open Source Project Homepage on VibeFather](https://vibefather.ai/templates/open-source-project-homepage?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
