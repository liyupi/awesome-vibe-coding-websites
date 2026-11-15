# AI Chat App Interface

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a complete browser-local AI chat workspace for [WORKSPACE]. Use the exact variable defaults on the initial demo. Lead with a seeded conversation containing a highlighted code answer and a Markdown table, a deep-plum history sidebar, and a vivid coral composer action. Implement the full interaction loop, light/dark themes, editable assistant profiles and persistent local attachments.

- Audience: [AUDIENCE] who want a focused place to work through [PROJECT].
- Goal: Let [USER_NAME] organize conversations, ask [ASSISTANT_NAME] for useful local example replies, revise a request and keep the workspace between visits. A single sendMessage adapter is the sole future integration point; the delivered site makes no external requests.
- Tone: Warm, concise, thoughtful and practical. Specific product-work examples, restrained humor, no grand AI claims, no marketing hero.

## Stack
- Framework: Vite + React + TypeScript
- Styling: Tailwind CSS 4 + CSS variables
- Libraries: react (MIT), react-dom (MIT), vite (MIT), @vitejs/plugin-react (MIT), typescript (Apache-2.0), tailwindcss (MIT), @tailwindcss/vite (MIT), react-markdown (MIT), remark-gfm (MIT), highlight.js (BSD-3-Clause), lucide-react (ISC), @fontsource/space-grotesk (OFL-1.1), @fontsource/dm-sans (OFL-1.1), @fontsource/ibm-plex-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite with base: './', build.sourcemap:false and the React and Tailwind Vite plugins; build static files directly into dist/.
  - Keep all copy, variable defaults, seeded conversation content, profile defaults and local response banks in src/content.ts; components reference this data instead of duplicating copy.
  - Use a typed React reducer or equivalent small state layer for conversations, drafts, profiles, attachments and active-stream identity. No state library is needed.
  - Implement the only response boundary in src/adapters/sendMessage.ts as an abortable async generator. Every send, retry, regenerate and edit-and-resend calls it; never call a real model API.
  - Use react-markdown with remark-gfm and a custom code renderer using highlight.js on code text only. Disable raw HTML and unsafe URL protocols; never highlight or execute arbitrary HTML.
  - Import only needed local font weights: Space Grotesk 500/600/700, DM Sans 400/500/600/700, IBM Plex Mono 400/500. Use CSS variables for both exact palettes and custom keyframes for tiny UI transitions.
  - Use index.html as the only page and client state for the workspace; no route library is required. Set the document title to [BRAND] and create an original local SVG favicon.
  - Create ASSETS.md documenting the locally bundled icon/font packages and original code drawings, with source URLs, authors and licenses; include no remote visual assets.
  - When variables are unchanged, use every default exactly, including the seeded project copy. If a value is changed later, rewrite all dependent visible prose, system prompts, snippets, filenames and attachment text coherently while keeping structure, palette and functionality.

## Variables
- [BRAND] — Assistant app name (default: "Plumline"). A fictional product name; derive the favicon label and storage namespace from this value.
- [WORKSPACE] — Workspace name (default: "Juniper Studio"). The fictional team or personal workspace shown in the sidebar.
- [USER_NAME] — Your display name (default: "Nora Vale"). A fictional workspace member; show their first name in the empty-state greeting.
- [ASSISTANT_NAME] — Assistant name (default: "Mira"). The fictional assistant shown beside replies; keep profile role labels separate.
- [AUDIENCE] — Primary audience (default: "small product teams"). Adapt sample conversations, starter prompts and profile descriptions to this audience.
- [PROJECT] — Example project (default: "a collaborative notes app"). The default chat works through a launch checklist for this project; adapt code data, table rows and files together if changed.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/ai-chat-app-interface in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/ai-chat-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/ai-chat-app-interface · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
