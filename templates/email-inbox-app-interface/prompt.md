# Email Inbox App Interface

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
A three-pane email client for a fictional mail service: folders and labels; a conversation list with unread, star, snooze and bulk actions; a threaded reading view; a composer with rich text, attachment chips, recipient autocomplete and scheduled send; search with filters; keyboard shortcuts; and a split inbox (Primary, Updates, Newsletters). A seeded mailbox of a fictional freelancer. Everything is stored in localStorage behind one adapter file written so a real mail API can replace it. The first screen is a busy inbox with a thread open. White, slate #1E293B and a warm coral #FF6B5A for unread and primary actions; dark mode.

- Audience: Product designers and front-end developers who need a believable mail or messaging interface to prototype with, and developers building a mail client.
- Goal: Look and behave like a mail client people already use: dense, fast and keyboard-friendly, with real state behind every control.
- Tone: Calm, compact and neutral. Interface labels are short and plain; the seeded messages read like real work email.

## Stack
- Framework: Vite 6 + React 18 + TypeScript
- Styling: Tailwind CSS 3.4
- Libraries: motion (MIT), lucide-react (ISC), @fontsource-variable/onest (OFL-1.1), @fontsource-variable/jetbrains-mono (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - vite.config.ts: base './', build.sourcemap false, nothing from src/ copied into dist/.
  - tailwind.config.js: darkMode 'class'; extend colors with two palettes named by CSS variables in src/index.css (slate, panel, raised, line, text, muted, accent) so the dark and light themes swap by changing the class on <html>.
  - src/data/types.ts defines Thread, Message, Contact, Label and Folder; src/data/seed.ts holds the seeded mailbox; src/data/adapter.ts exports a MailAdapter interface and LocalStorageAdapter, the only file that reads or writes localStorage under the key [BRAND_SLUG]-state, where [BRAND_SLUG] is [BRAND] lowercased with hyphens.
  - src/store/useMail.ts is a reducer (useReducer + context) that holds the mailbox state and every action: select thread, mark read or unread, star, snooze, archive, delete, move to label, send, schedule, save draft, apply search and filters, set theme.
  - Scheduled messages sit in an Outbox folder; on load, any whose scheduled time has passed move to Sent.
  - The rich-text body is a contentEditable div with document.execCommand for bold, italic, lists, link and quote; no editor library.
  - All interface copy, folder names, labels, contacts and settings live in src/content.ts; the mailbox itself lives in src/data/seed.ts; components never hard-code copy.

## Variables
- [BRAND] — Mail service name (default: "Quill Mail")
- [USER_NAME] — Mailbox owner (default: "Maya Okonkwo"). The freelancer whose mailbox is seeded.
- [USER_ROLE] — What the owner does (default: "freelance brand designer"). Shown in the account menu and the signature.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/email-inbox-app-interface in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/email-inbox-app-interface?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/email-inbox-app-interface · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
