# Email Inbox App Interface <sup>PRO</sup>

> Three-pane email client for a fictional mail service, with a seeded mailbox, split inbox, composer and shortcuts.

<a href="https://vibefather.ai/templates/email-inbox-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/email-inbox-app-interface/a501119e-6ea5-4003-8e6d-f2a6c15e9aed/webp.edbb266e9d.webp" width="100%" alt="Email Inbox App Interface — Three-Pane Email Client UI in Dark Mode built by GLM-5.4 and Kimi K3.1 Pro"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/email-inbox-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

A three-pane email client built as a real, working interface rather than a picture of one. The first screen is a busy dark slate inbox with a conversation already open: folders and coloured labels on the left, a dense conversation list in the middle and a threaded reading view on the right. The split inbox separates Primary, Updates and Newsletters, and the list supports unread marks, stars, snooze, selection and bulk actions. The composer has rich-text formatting, attachment chips, recipient autocomplete from a contact list, scheduled send and keyboard sending. Search filters live as you type, with chips for attachments, unread state, labels and time, and a shortcuts sheet lists the single-key commands for moving, archiving, starring, replying and composing. A seeded mailbox of a fictional freelancer gives the screen real density, with clients, an accountant, newsletters, receipts and family. Everything lives in localStorage behind one adapter file, so a real mail API can replace the storage without touching the interface. White, slate and a warm coral for unread and primary actions; dark mode by default with a light mode switch. Swap the service name, user and seed data in the content and seed files to make it yours.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [SaaS](../../types/saas.md), [Dashboard](../../types/dashboard.md) |
| Style | [Bento Grid](../../styles/bento.md), [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 6 + React 18 + TypeScript + Tailwind CSS 3.4 + motion + lucide-react |
| Pages | 1 |
| Built with | <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/kimi.svg"><img src="https://vibefather.ai/icons/tools/kimi.svg" width="13" height="13" alt=""></picture> [Kimi K3.1 Pro](../../models/kimi-k3-1-pro.md) in Kimi Code |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/email-inbox-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/email-inbox-app-interface?case=a501119e-6ea5-4003-8e6d-f2a6c15e9aed&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/email-inbox-app-interface/a501119e-6ea5-4003-8e6d-f2a6c15e9aed/shot_desktop.5d05c4a210.webp" width="100%" alt="Email Inbox App Interface — Brand designer's mailbox, built by GLM-5.4 in ZCode"></a><br>
<b>Brand designer's mailbox</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/email-inbox-app-interface?case=a501119e-6ea5-4003-8e6d-f2a6c15e9aed&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/email-inbox-app-interface?case=4e062e55-3b3b-42d5-9594-666ea72ce6a8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/email-inbox-app-interface/4e062e55-3b3b-42d5-9594-666ea72ce6a8/shot_desktop.07c0326984.webp" width="100%" alt="Email Inbox App Interface — Motion designer's mailbox, built by Kimi K3.1 Pro in Kimi Code"></a><br>
<b>Motion designer's mailbox</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/kimi.svg"><img src="https://vibefather.ai/icons/tools/kimi.svg" width="12" height="12" alt=""></picture>&nbsp;Kimi K3.1 Pro in Kimi Code · <a href="https://vibefather.ai/templates/email-inbox-app-interface?case=4e062e55-3b3b-42d5-9594-666ea72ce6a8&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Mail service name | Quill Mail |
| `[USER_NAME]` | Mailbox owner | Maya Okonkwo |
| `[USER_ROLE]` | What the owner does | freelance brand designer |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/email-inbox-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A customer support team: set BRAND to your help desk name, relabel the folders for queues and turn the seeded freelancer mailbox into sample customer threads with reply templates.
- A freelance consultant: set USER_NAME and USER_ROLE to yourself, replace the seed messages with your own client correspondence and point the signature at your business details.
- A messaging product prototype: keep the three-pane layout, swap email fields for direct messages and use the labels for conversation topics while keeping search and shortcuts.
- An internal tool demo for a developer audience: keep the dark slate theme, seed the mailbox with deploy alerts and receipts, and show the split inbox as Primary, Alerts and Digests.

## FAQ

### What is included in the Email Inbox App Interface template?
The Email Inbox App Interface template is a single-page three-pane email client. It includes folders and coloured labels, a conversation list with unread marks, stars, snooze, selection and bulk actions, a threaded reading view, a composer with rich-text formatting, attachment chips, recipient autocomplete and scheduled send, live search with filter chips, a keyboard shortcuts sheet, and a split inbox for Primary, Updates and Newsletters. A seeded mailbox gives the screen real density on first load.

### How do I connect the Email Inbox App Interface to a real mail API?
The Email Inbox App Interface template stores everything in localStorage behind one adapter file that exports a mail adapter interface. To use real mail, write a new adapter that implements the same interface against your mail API and swap it in place of the local storage adapter. The interface, store and components stay as they are, because only that adapter file reads or writes stored mail.

### How do I change the mail service name and the person whose inbox is shown?
Set BRAND to your mail service name, USER_NAME to the mailbox owner and USER_ROLE to what that person does. The template also keeps all interface copy, folder names, labels, contacts and settings in one content file, and the seeded mailbox in a separate seed file. Rewrite those two files with your own messages, clients and labels, and update the signature and account menu to match.

### Can I use the Email Inbox App Interface template for client work?
Commercial and client use of the Email Inbox App Interface template needs Pro. Free templates' prompts and every DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0, while Pro templates show the brief, stack and variables publicly and the full prompt and the demo source code to Pro members. The template is a Pro template, so its prompt and source code come with Pro membership.

### Which keyboard shortcuts does the Email Inbox App Interface support?
The Email Inbox App Interface template includes a shortcuts sheet that lists the single-key commands for moving, archiving, starring, replying and composing, and the composer supports sending by keyboard. The sheet is part of the interface, so open it in the demo to see the exact keys. Every shortcut runs through the same mailbox state as the buttons, so actions stay in sync.

### How do I build an email inbox app interface with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add email-inbox-app-interface, replace [BRAND], [USER_NAME] and [USER_ROLE] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Email Inbox App Interface demo?
The Brand designer's mailbox case was built by GLM-5.4 in ZCode; the Motion designer's mailbox case was built by Kimi K3.1 Pro in Kimi Code. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Email Inbox App Interface template use?
Email Inbox App Interface is a single-page site built with Motion, React and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the Email Inbox App Interface template free to use?
Email Inbox App Interface is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the Email Inbox App Interface template work on mobile?
Yes. Every Email Inbox App Interface build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Email Inbox App Interface on VibeFather](https://vibefather.ai/templates/email-inbox-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
