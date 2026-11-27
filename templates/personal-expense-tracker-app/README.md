# Personal Expense Tracker App

> A true responsive mobile-first personal expense tracker PWA with keypad bottom sheet, SVG spending charts, budgets, and CSV export.

<a href="https://vibefather.ai/templates/personal-expense-tracker-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-cover"><img src="https://media.vibefather.ai/t/personal-expense-tracker-app/409a061e-99ad-4031-adfc-a24eac7c8d01/webp.0ceae4b438.webp" width="100%" alt="Personal Expense Tracker App — Mobile-First Personal Expense Tracker PWA built by Gemini 4 Neon and GLM-5.4"></a>

**[▶ Live demo on VibeFather](https://vibefather.ai/templates/personal-expense-tracker-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-top)** · [prompt.md](prompt.md) · [中文译文](prompt.zh-CN.md) · [DESIGN.md](DESIGN.md)

Built as a genuinely responsive mobile-first web application rather than a static mockup inside a fake phone frame, this personal finance and daily expense tracker adapts fluidly across phones, tablets, and desktop screens. On mobile viewports under 768 pixels it behaves like a native finance app with a fixed bottom tab bar covering Home, Analytics, Budgets, and Settings plus a tactile bottom sheet triggered by the central plus action. On tablet and desktop screens the layout expands naturally into a persistent left navigation rail paired with a clean two-column workspace. The bright light canvas pairs deep slate ink with crisp emerald income and savings indicators and alert rose overspend cues, alongside a one-tap dark mode toggle saved locally. Out of the box the app is pre-seeded with realistic fictional monthly transactions so every summary ring, chart, and feed is immediately rich and inspectable. Users can log new expenses or income using a custom touch-friendly numeric keypad, category chips, and date picker; search, filter, edit, or delete entries in the transaction ledger; inspect an interactive SVG category donut and seven-day spend bar chart; drag per-category monthly budget sliders with live progress feedback; review upcoming recurring bills; and export their entire ledger to CSV. All changes persist automatically in localStorage with a clean one-tap reset option.

| | |
|---|---|
| Category | [SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) |
| Site type | [Dashboard](../../types/dashboard.md), [Mobile App](../../types/mobile-app.md) |
| Style | [Bento Grid](../../styles/bento.md), [Minimal](../../styles/minimal.md) |
| Effects | Micro-interactions |
| Stack | Vite 5 + React 18 + TypeScript + Tailwind CSS 3.4 + lucide-react |
| Pages | 1 |
| Built with | <img src="https://vibefather.ai/icons/tools/gemini.svg" width="13" height="13" alt=""> [Gemini 4 Neon](../../models/gemini-4-neon.md) in Antigravity, <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="13" height="13" alt=""></picture> [GLM-5.4](../../models/glm-5-4.md) in ZCode |
| Access | Free for personal and non-commercial use (CC BY-NC 4.0) |

## Live demos

<table>
<tr>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-expense-tracker-app?case=409a061e-99ad-4031-adfc-a24eac7c8d01&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-expense-tracker-app/409a061e-99ad-4031-adfc-a24eac7c8d01/shot_desktop.389d621198.webp" width="100%" alt="Personal Expense Tracker App — Personal monthly budget tracker, built by Gemini 4 Neon in Antigravity"></a><br>
<b>Personal monthly budget tracker</b><br>
<sub>Built by <img src="https://vibefather.ai/icons/tools/gemini.svg" width="12" height="12" alt="">&nbsp;Gemini 4 Neon in Antigravity · <a href="https://vibefather.ai/templates/personal-expense-tracker-app?case=409a061e-99ad-4031-adfc-a24eac7c8d01&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
<td width="50%" valign="top">
<a href="https://vibefather.ai/templates/personal-expense-tracker-app?case=b948c723-1871-4a62-a50f-7f5a246d7e17&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case"><img src="https://media.vibefather.ai/t/personal-expense-tracker-app/b948c723-1871-4a62-a50f-7f5a246d7e17/shot_desktop.16b05398f3.webp" width="100%" alt="Personal Expense Tracker App — Freelance studio cashflow tracker, built by GLM-5.4 in ZCode"></a><br>
<b>Freelance studio cashflow tracker</b><br>
<sub>Built by <picture><source media="(prefers-color-scheme: dark)" srcset="https://vibefather.ai/icons/tools-dark/zcode.svg"><img src="https://vibefather.ai/icons/tools/zcode.svg" width="12" height="12" alt=""></picture>&nbsp;GLM-5.4 in ZCode · <a href="https://vibefather.ai/templates/personal-expense-tracker-app?case=b948c723-1871-4a62-a50f-7f5a246d7e17&utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-case">Open live demo</a></sub>
</td>
</tr>
</table>

## Variables

Replace these in the prompt with your own values; everything else stays as written.

| Variable | What it is | In the demo |
|---|---|---|
| `[BRAND]` | App brand name | LedgerLeaf |
| `[USER_NAME]` | Profile display name | Maya Lin |
| `[MONTHLY_BUDGET]` | Monthly budget headline | $3,400 |
| `[CURRENCY_SYMBOL]` | Currency symbol | $ |
| `[SAVINGS_GOAL]` | Highlighted savings bucket | Autumn Kyoto Trip |

## How to use it

1. Copy [prompt.md](prompt.md), or run `npx vibefather add personal-expense-tracker-app` in your project.
2. Replace the `[VARIABLES]` with your own brand, copy and details.
3. Paste it into Claude Code, Codex, Cursor or another AI coding agent and let it build. [DESIGN.md](DESIGN.md) holds the colors, type and spacing on their own if you only want the look.

## Make it yours

- A freelancer tracking irregular income: set USER_NAME to your name, keep the Expense and Income toggle for client payments, and rename the savings card to a tax set-aside.
- A couple sharing household costs: set MONTHLY_BUDGET to your combined cap, relabel the category chips to rent, food, utilities and transport, and export the CSV monthly.
- A student on a tight allowance: lower MONTHLY_BUDGET, swap SAVINGS_GOAL for a term trip, and use the budget sliders to cap dining and leisure spending.
- A small studio owner: set BRAND to the studio name, use the recurring bills list for software subscriptions, and export the ledger for bookkeeping each month.

## FAQ

### How do I change the budget, currency and name in the Personal Expense Tracker App?
The Personal Expense Tracker App template has five variables you set before generating: BRAND for the app name, USER_NAME for the profile greeting, MONTHLY_BUDGET for the spending cap, CURRENCY_SYMBOL for every amount shown, and SAVINGS_GOAL for the highlighted savings card. Change them in the prompt, then rewrite the default headlines and labels so the copy matches your values instead of the sample ones.

### Does the Personal Expense Tracker App actually save my data between visits?
Yes. Every transaction, category budget limit, bill paid flag and dark mode choice is written to localStorage in the browser, so the ledger survives a refresh or a closed tab on the same device. Nothing goes to a server. Settings includes a Restore Sample Data button that returns the app to the seeded fictional transactions and bills.

### Can I export my expenses to a spreadsheet from the Personal Expense Tracker App?
The Personal Expense Tracker App template includes a CSV Export button in Settings that downloads your full ledger as a CSV file directly in the browser. You can open that file in a spreadsheet to review spending, hand it to an accountant, or archive a month before resetting the sample data.

### Is there a free personal expense tracker template I can build with AI?
The Personal Expense Tracker App template is free. Its prompt and DESIGN.md are free for personal, non-commercial use under CC BY-NC 4.0. Commercial or client work needs a VibeFather Pro license, which also gives you the full prompt and the demo source code. The page lists the live demos built with Gemini 4 Neon in Antigravity and GLM-5.4 in ZCode.

### What should I change first after building the Personal Expense Tracker App?
Start with the seeded data: replace the fictional transactions, recurring bills and category limits in the seed data file with your own, and set the five variables so the brand name, user name, monthly budget, currency symbol and savings goal read correctly. Then adjust the six category chips if your spending categories differ, and check the bottom tab bar and add-expense sheet on a real phone.

### How do I build a personal expense tracker app with AI?
Copy the prompt from this page or run npx vibefather add personal-expense-tracker-app, replace [BRAND], [USER_NAME], [MONTHLY_BUDGET] and [CURRENCY_SYMBOL] with your own content, and paste it into Claude Code, Codex, Cursor or another AI coding agent. The live demos were built from exactly that text.

### Which AI model built the Personal Expense Tracker App demo?
The Personal monthly budget tracker case was built by Gemini 4 Neon in Antigravity; the Freelance studio cashflow tracker case was built by GLM-5.4 in ZCode. Each build used the published prompt with nothing added, so you can compare the models side by side.

### What tech stack and pages does the Personal Expense Tracker App template use?
Personal Expense Tracker App is a single-page site built with React and Tailwind CSS, with micro-interactions. The prompt fixes the stack so every AI tool builds the same kind of project, and the result runs as a static site you can host anywhere.

### Can I use the Personal Expense Tracker App template for a client or a business?
The Personal Expense Tracker App prompt and DESIGN.md are free for personal, non-commercial projects under CC BY-NC 4.0. Client work and commercial use need VibeFather Pro, which also includes the source code of the live demo.

### Does the Personal Expense Tracker App template work on mobile?
Yes. Every Personal Expense Tracker App build was tested on a phone-sized screen as well as desktop before it went live, checking layout, text size and touch targets. Open the live demo on your phone, or switch the preview on this page to mobile view, to check it yourself.

---

[← All templates](../../README.md) · [More SaaS, AI & App Sites](../../README.md#saas-ai--app-sites) · [Personal Expense Tracker App on VibeFather](https://vibefather.ai/templates/personal-expense-tracker-app?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=template-bottom)
