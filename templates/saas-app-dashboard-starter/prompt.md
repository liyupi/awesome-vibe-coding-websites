# SaaS App Dashboard Starter

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build the complete logged-in product for [BRAND], a fictional analytics app for [AUDIENCE] focused on [FOCUS]. Open immediately on a richly populated overview for [WORKSPACE], then support accounts, integrations, settings, simulated auth and onboarding through one coherent local app.

- Audience: [AUDIENCE]; the demo owner is [OWNER].
- Goal: Make every visible control useful: explore sample analytics, operate a table, manage the workspace and complete all local account flows. The first view should look ready for work and every external-service operation must be replaceable through one typed local adapter.
- Tone: Clear, precise and quietly confident. Use short US English product copy, honest demo language at service boundaries and specific fictional records; no marketing superlatives.

## Stack
- Framework: Vite + React + TypeScript
- Styling: Vanilla CSS
- Libraries: react and react-dom (MIT), vite and @vitejs/plugin-react (MIT), typescript (Apache-2.0), lucide-react (ISC), @fontsource/manrope font files (OFL-1.1), @fontsource/inter font files (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use Vite + React + TypeScript with vanilla CSS, lucide-react, @fontsource/manrope and @fontsource/inter. Implement charts in original inline SVG and routing with location.hash; no chart, auth or payment SDK is required.
  - Configure Vite base './', production minification, sourcemap false, output dist/. Provide npm run build and npm run dev. Set the document title to [BRAND] and generate an original geometric SVG favicon locally.
  - Keep every visible string, default variable, seed record, chart array, plan definition and integration definition in src/content.ts. When variables change, rewrite all matching copy and invented records coherently. Derive brandSlug from [BRAND]; use it for storage namespaces, .test addresses and download filenames. Do not hard-code the template title into the product UI.
  - Put all simulated service calls and persistence in src/localAdapter.ts: loadState, saveState, signIn, signUp, requestPasswordReset, createWorkspace, inviteMember, updateMemberRole, removeMember, connectIntegration, disconnectIntegration, createApiKey, revokeApiKey, changePlan and makeInvoiceDownload. All return typed local results and Promises where pending states are useful. This is the only integration boundary a future owner replaces. Components never fetch or send network requests.
  - Maintain a versioned state shape containing profile, selectedWorkspaceId, workspace-local accounts/members/invites/integrations/keys/billing/notifications, theme, sidebar mode and onboarding draft. Persist after successful mutations in localStorage; catch storage denial, quota errors and malformed JSON, recover to valid seed state, and fall back to a module-memory store. Show a compact 'Session only' indicator if persistence is unavailable. Never store passwords or real credentials.
  - On a fresh visit with no hash, immediately show #/overview with the primary seeded workspace, a simulated active session and the light theme. Never gate first load behind auth, onboarding, empty data, an intro animation or a modal. A saved theme and workspace may restore on later visits. All named hash routes must survive direct opening and refresh. Unknown hashes resolve to #/overview.
  - Seed 36 fictional accounts: 27 Active, 6 Trial and 3 Paused; plans are Starter, Growth and Scale. First rows are Ternleaf Works, Morrow Bench, Cobalt Finch, Reedvale Lab, Parchment Grove and Emberwell Office. Generate remaining original names deterministically from local arrays. Every row has id, company, invented contact, .test email, plan, status, owner, eventCount, expansionValue, healthScore and channel. Keep computed table totals, visible KPI values, exports and chart summaries synchronized to the same source records; label all data as sample data in one quiet toolbar badge.
  - Seed the primary workspace with four members (including [OWNER]), two pending invitations, two connected generic integrations, one demo API key, four invoice records and three unread notifications. Seed a second workspace named 'Fable Quarry Lab' with a distinct set of 12 accounts and a Starter plan; rewrite it appropriately when variables change. State, keys, members, billing, notifications and record selections must never leak between workspaces.
  - Use synthetic chart categories '01' through '12' under the label 'Cycles'. Overview comparison modes are 'Recent 6 cycles' and 'All 12 cycles'. No dates, month/day names, calendar controls or timestamps appear in any UI, invoice, download or sample content.
  - Use one shared app shell, reusable form fields, popovers, focus-trapped drawers/dialogs and a toast region. Escape closes the topmost overlay and returns focus; clicking the backdrop closes dismissible overlays; destructive confirmation dialogs require an explicit action. An aria-live polite region announces saved state and errors.
  - Validate keyboard navigation and a full interaction pass at 1440x900 and 390x844. Check fresh first load, theme persistence, workspace isolation, combined table filters, one bulk action, account details, profile save, invitation/role changes, key create/reveal/copy/revoke, billing change/download, all auth screens, the complete onboarding wizard, direct hash opening and empty-state recovery. Run a production build and inspect the final dist, with zero console errors and no page-level horizontal overflow.

## Variables
- [BRAND] — Product name (default: "Quillmere Analytics"). Invented analytics product; derive its slug, demo email domain and download filenames from this value.
- [WORKSPACE] — Primary workspace (default: "Brindle Research"). Invented organization whose sample data appears on first load.
- [AUDIENCE] — Product audience (default: "Product teams at subscription software companies"). Rewrite onboarding guidance, account examples and overview insights for this audience.
- [FOCUS] — Analytics focus (default: "Account engagement and expansion"). Drive metric names, chart descriptions, account detail labels and insight copy from this measurement focus.
- [OWNER] — Demo owner (default: "Mira Calder"). Fictional workspace owner; derive a lowercase dot-separated demo email local part and use a .test domain.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/saas-app-dashboard-starter in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

---
**This is the public part of a VibeFather Pro prompt.** The page sections, layout, motion and asset instructions that make the live demo look the way it does are for Pro members: https://vibefather.ai/templates/saas-app-dashboard-starter?utm_source=github&utm_medium=readme&utm_campaign=awesome-vibe-coding-websites&utm_content=pro-prompt
— Prompt by VibeFather · https://vibefather.ai/t/saas-app-dashboard-starter · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
