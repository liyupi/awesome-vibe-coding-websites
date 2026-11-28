# SaaS App Dashboard Starter <sup>PRO</sup>

> A working analytics app with onboarding, account tables, team settings, keys, and local billing flows.

<a href="https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/saas-app-dashboard-starter/a64a33a3-7965-4275-a61a-ca072cb99b5c/webp.7a697be339.webp" width="100%" alt="SaaS App Dashboard Starter — Cobalt Analytics Dashboard and App Shell built by Gemini 4 Neon and GPT-6 Astra"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

This dashboard starter covers the screens a subscription product needs after someone signs in. It opens inside a fictional analytics workspace, with a populated overview, comparison charts, account health, and useful next actions. Founders and developers can explore the complete flow before connecting their own services.

The layout balances a quiet white and slate foundation with confident cobalt and signal orange. A large chart gives the first screen its visual focus, while precise typography, compact controls, and consistent borders keep dense information readable. The dark theme carries the same hierarchy into deep slate surfaces. Charts, product marks, and interface artwork are drawn in code, so the design has no dependency on remote images.

The account directory includes combined search and filters, selectable columns, pagination, bulk operations, and a detailed account drawer. A workspace switcher changes the underlying sample data. Keyboard search connects navigation and account results, while a notifications drawer leads to relevant actions. Settings cover profile editing, member roles, pending invitations, local demo API keys, plan selection, usage, and invoice downloads.

Sign-in, sign-up, and password reset screens have explicit validation. A four-step onboarding flow collects a workspace name, teammates, and integration choices before opening the app. Every simulated external operation passes through one adapter file. Browser storage preserves changes, with an in-memory fallback when storage is unavailable. No real email, payment, or authentication service is called.

Change the brand, workspace, audience, measurement focus, and owner to make another analytics product. Copy and sample records stay together, and both themes remain consistent across screens. On phones, navigation becomes a drawer and detailed tables use a contained scroll area. Empty results always offer a useful recovery action.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [SaaS](../../types/saas.md), [Dashboard](../../types/dashboard.md) |
| Style | [Dark](../../styles/dark.md), [Minimal](../../styles/minimal.md) |
| Effects | Page Transitions, Micro-interactions |
| Stack | Vite + React + TypeScript + Vanilla CSS + lucide-react |
| Pages | 11 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="13" height="13" alt=""></picture> [GPT-6 Astra](../../models/gpt-6-astra.md) in Codex |
| Access | Pro — brief, stack and variables are public; [full prompt with VibeFather Pro](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-access) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/saas-app-dashboard-starter?case=a64a33a3-7965-4275-a61a-ca072cb99b5c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/saas-app-dashboard-starter/a64a33a3-7965-4275-a61a-ca072cb99b5c/shot_desktop.0c1e1249dd.webp" width="100%" alt="SaaS App Dashboard Starter — Commerce operations analytics, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Commerce operations analytics</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/saas-app-dashboard-starter?case=a64a33a3-7965-4275-a61a-ca072cb99b5c&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/saas-app-dashboard-starter?case=aa4ad3fa-4a25-4da0-b2db-41b21e198663&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/saas-app-dashboard-starter/aa4ad3fa-4a25-4da0-b2db-41b21e198663/shot_desktop.749b8fb899.webp" width="100%" alt="SaaS App Dashboard Starter — Subscription product analytics, built by GPT-6 Astra in Codex"></a><br>
<b>Subscription product analytics</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/chatgpt.svg"><img src="https://vibefather.ai/icons/tools/chatgpt.svg" width="12" height="12" alt=""></picture>&nbsp;GPT-6 Astra in Codex · <a href="https://vibefather.ai/templates/saas-app-dashboard-starter?case=aa4ad3fa-4a25-4da0-b2db-41b21e198663&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | Product name | Quillmere Analytics |
| `[WORKSPACE]` | Primary workspace | Brindle Research |
| `[AUDIENCE]` | Product audience | Product teams at subscription software companies |
| `[FOCUS]` | Analytics focus | Account engagement and expansion |
| `[OWNER]` | Demo owner | Mira Calder |

## How to use it

1. Get the full prompt on the [template page](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-howto) (VibeFather Pro), or read the public part in [prompt.md](prompt.md).
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A developer tools startup: set BRAND and WORKSPACE to your product, point FOCUS at API usage and error rates, and rename the seeded accounts to your early customers.
- A subscription commerce team: change AUDIENCE to ecommerce operators and FOCUS to repeat purchases, then rewrite the account records and chart copy around storefront metrics.
- An agency building a client portal: set OWNER to the client contact, rename the workspace to their company, and adjust members, invitations and plan labels to match the engagement.
- A solo founder testing an idea: keep the default layout, set BRAND to the working title and FOCUS to activation, and use the onboarding flow to walk through the signup experience.

## FAQ

### Can I use the SaaS App Dashboard Starter for a client project?
Commercial and client use of the SaaS App Dashboard Starter needs a Pro membership. Free templates' prompts and every DESIGN.md are licensed for personal, non-commercial use under CC BY-NC 4.0, but this is a Pro template: the brief, stack and variables are public, the full prompt is for Pro members, and the demo source code comes with Pro.

### How do I rebrand the dashboard for my own analytics product?
Change the five variables in the prompt: BRAND becomes your product name, WORKSPACE the primary workspace, AUDIENCE who the app serves, FOCUS what is measured, and OWNER the demo owner. The prompt asks the agent to rewrite every matching headline, record, plan label and insight so the sample data stays coherent with the new brand.

### Does the dashboard connect to Stripe or a real authentication service?
No. The SaaS App Dashboard Starter simulates sign-in, sign-up, password reset, invitations, API keys, plan changes and invoice downloads through one local adapter file. Browser storage keeps your changes, with an in-memory fallback and a Session only indicator when storage is blocked. No real email, payment or authentication call is made, so you replace that single adapter with your own services.

### What screens come with the dashboard starter?
The SaaS App Dashboard Starter has 11 pages: a populated overview with comparison charts, an account directory with filters, selectable columns and a detail drawer, integrations, team settings with roles and invitations, API keys, billing with plan selection and invoices, plus sign-in, sign-up, password reset and a four-step onboarding flow. A workspace switcher swaps the underlying sample data between workspaces.

### How do I turn this dashboard into a dashboard for a different industry?
Set AUDIENCE and FOCUS to the new sector and measurement, then rewrite the seeded accounts, chart categories, metric names and insight copy in the content file so they describe that business. The SaaS App Dashboard Starter keeps layout, colors and motion fixed while the brand, workspace, owner and sample records change together, and both light and dark themes stay consistent.

### How do I build a SaaS app dashboard starter with AI?
Copy the full prompt (Pro) from this page or run npx vibefather add saas-app-dashboard-starter, replace [BRAND], [WORKSPACE], [AUDIENCE] and [FOCUS] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the SaaS App Dashboard Starter demo?
The Commerce operations analytics case was built by Gemini 4 Neon in Antigravity; the Subscription product analytics case was built by GPT-6 Astra in Codex. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the SaaS App Dashboard Starter template use?
SaaS App Dashboard Starter is a 11-page site built with React, with page transitions and micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Is the SaaS App Dashboard Starter template free to use?
SaaS App Dashboard Starter is a Pro template: the brief, stack and variables are public, and the full prompt, the source code of the live demo and a commercial license come with VibeFather Pro. Its DESIGN.md is free for personal projects.

### Does the SaaS App Dashboard Starter template work on mobile?
Yes. Every SaaS App Dashboard Starter build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [SaaS App Dashboard Starter on VibeFather](https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
