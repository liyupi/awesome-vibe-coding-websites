# Code Hosting Platform App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build an original, full-featured developer code-hosting web application for [BRAND], anchored on the [ORG_HANDLE]/[PRIMARY_REPO] open-source project maintained by [MAINTAINER_NAME] (@[MAINTAINER_HANDLE]). The app uses hash routing across Repository Code, Issues, Pull Requests, Commits, Releases, Insights, and User Profile views, with a global '/' and Cmd+K search palette, light/dark theme switching, and localStorage persistence isolated inside a single storage adapter module.

- Audience: Software engineers, open-source maintainers, developer-tools teams, and technical founders evaluating or demonstrating a self-contained repository collaboration workspace.
- Goal: Deliver an immediately inhabited, genuinely usable code-hosting interface on the very first screen—landing on the primary repository with an interactive file tree, branch switcher, syntax-highlighted code viewer, Markdown README, live diffs, and persistent local collaboration state.
- Tone: Crisp, technical, uncluttered, and authentic to real systems engineering teams—concrete commit messages, realistic multi-language source files, and zero marketing fluff.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 4
- Libraries: lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/inter (OFL-1.1), @fontsource/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Set base: './' and build: { sourcemap: false } in vite.config.ts.
  - Import @fontsource/space-grotesk (600, 700), @fontsource/inter (400, 500, 600), and @fontsource/jetbrains-mono (400, 500, 600) in src/main.tsx.
  - Store all seeded repositories, source files, issues, pull requests, diffs, commits, releases, and profile metrics in src/data/seedData.ts, keyed dynamically from [BRAND], [ORG_HANDLE], [PRIMARY_REPO], [MAINTAINER_NAME], and [MAINTAINER_HANDLE].
  - Keep all browser persistence (stars, watches, forks, created issues, comments, inline PR reviews, reactions, and theme choice) inside src/data/storageAdapter.ts so swapping to a real API only edits one file.
  - Implement a lightweight, zero-dependency syntax tokenizer in src/utils/syntaxHighlight.ts supporting Rust, TypeScript, Go, Python, SQL, and Markdown without CDN scripts.

## Variables
- [BRAND] — Platform Name (default: "KestrelForge"). Fictional code-hosting platform name
- [ORG_HANDLE] — Organization Handle (default: "linden-sys"). Lowercase slug for the seeded organization
- [PRIMARY_REPO] — Primary Repository (default: "quiver-kv"). Default open repository shown on first load
- [MAINTAINER_NAME] — Maintainer Full Name (default: "Nadia Okafor"). Invented lead maintainer displayed on profile and commits
- [MAINTAINER_HANDLE] — Maintainer Handle (default: "nokafor"). Lowercase username for the maintainer profile
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/code-hosting-platform-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/code-hosting-platform-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/code-hosting-platform-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
