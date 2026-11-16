# Resume Builder Web App

Build this website exactly as described below. Replace the [VARIABLES] with your own values; keep everything else.

## Brief
Build [BRAND], a browser-based resume workbench. Open directly on the working editor with a filled, editable resume for [CANDIDATE], a [PROFESSION]. The preview is the largest piece of artwork on the screen and the actual document the user will print.

- Audience: Job seekers, students, and career advisers assembling a resume from roles, projects, and practical skills.
- Goal: Let someone change a bullet, see its effect on the paper, inspect the text reading order, and print or take an editable copy away in the first session.
- Tone: The quiet precision of a print studio. Use short, literal US English labels and specific, economical resume prose.

## Stack
- Framework: Vite 5 + React 18 + TypeScript
- Styling: Vanilla CSS
- Libraries: react and react-dom (MIT), @fontsource/newsreader (OFL-1.1), @fontsource/source-sans-3 (OFL-1.1)
- Build: `npm run build` → static files in `dist/`. No backend, no server code, no external APIs.
- Setup:
  - Use a Vite React project with base './', production minification, no source maps, and index.html as its entry.
  - Keep all interface copy, built-in choices, and seed content in one content.ts file. When the variable values change, rewrite the contact details, employers, accomplishments, study, skills, and sample project as one coherent fictional career. Derive the title, wordmark, storage key, and download filename from the active brand and candidate.
  - Use a versioned local resume model with stable section, entry and bullet IDs, section visibility and order, and separate layout settings. Drive the form, paper, plain text, print, and JSON round trip from this one model.
  - Set up local Latin WOFF2 imports for the listed font weights. Build original line icons as inline SVG. Set the document title to '[BRAND] — Resume builder' and use the original paper mark for the favicon.

## Variables
- [BRAND] — Editor name (default: "Quirefield"). The invented name in the application wordmark.
- [CANDIDATE] — Candidate name (default: "Mira Calder"). A fictional applicant used to derive contact details and the filename.
- [PROFESSION] — Target role (default: "Exhibit Designer"). The role shown directly below the candidate name.
- [CAREER_FOCUS] — Career focus (default: "Accessible museum exhibits, tactile interpretation, and small touring installations"). Use this specialty to write specific employers, responsibilities, skills, education, and projects.
- [CREDIT] — keep a small "Template by VibeFather" link to https://vibefather.ai/t/resume-builder-web-app in the footer (default: yes; delete this line to remove it)

The copy under Pages & Sections is written for the default values. If your values differ, rewrite every headline, paragraph, label and image for them — same length, tone and structure. Layout, colors, type and motion stay as described.
Keep all copy, image paths and links in one content file (for example `src/content.ts`), keyed by section, so the content can be swapped later without touching components.

## Design
### Colors
- Desk paper `#F7F4EC` — Overall warm app background, top bar, and editor margins.
- Forest `#1F5F4A` — Wordmark, active editor controls, print button, and default resume ink accent.
- Marigold `#F2B134` — Fold of the app mark, selected layout swatch, and the small labeled paper-size tab on the preview board. Pair with dark ink.
- Cutting mat `#204D40` — Large preview board behind the paper, with sparse low-contrast ruling at its top and left edges.
- Ink `#1C3029` — Primary text and dark strokes on marigold.
- Graphite `#52635C` — Supporting labels on pale surfaces.
- Keyline `#D0D5C9` — Field outlines and subtle accordion separators.
- Proof sheet `#FFFFFF` — Document pages, fields, and expanded editor surface.

### Typography
- Wordmark, workspace heading, and default printed name: Newsreader (OFL), weights 500/600
- Interface, resume body, and alternate sans headings: Source Sans 3 (OFL), weights 400/500/600/700

### Layout & motion
- Spacing: Use a 4 px base. At 1440 px, give the header and work area 48 px side gutters with a 1440 px maximum outer width. Leave 28 px between editor and preview. Use a 370–410 px editor and give the preview the remaining width. Allow 20–24 px inside the editor and 26–36 px around the preview sheet. App body 15–16 px with 1.45 line height. Main title 44 px with tight tracking, 32 px on mobile. Resume name 38 pt, role 12 pt, body 10.5 pt at physical size.
- Radius: Use 7 px for editor panels and the mat, 5 px on fields and buttons. Printed sheets have square corners. Use a single soft offset shadow under the paper.
- Motion: Use a 120 ms color change for selection, and a thin marigold insertion rule while dragging sections.
- Motion: Leave the live paper still while typing. Reduced motion removes transitions and movement during reordering.
- Imagery: Build the document and cutting mat in HTML and CSS. A white proof sheet floats over a deep forest plotting surface with fine 24 px grid lines at low opacity and short ruler ticks along the outer edge. A marigold tab marked Letter or A4 sits at the board corner outside the sheet. Draw the original app mark as two offset paper outlines with a folded marigold corner. Keep illustration, grid, and ruler entirely out of the printed resume.

## Pages & Sections
### Resume workspace (`index.html`)
1. **Workbench header** — Place the [BRAND] wordmark beside the folded-paper mark. On the right show a small status dot and 'Saved on this device', then a 'File' menu and a solid forest 'Print / PDF' button with a printer glyph. The File menu contains 'Import JSON' and 'Export JSON'. Use 'Resume workspace' as the main heading below the bar. Beneath it display the active document as '[CANDIDATE] · [PROFESSION]' with a small outline file icon. Avoid mission statements or a marketing introduction.
   Layout: Make the header 62 px high with a thin bottom rule. Align the heading and current document line to the editor edge, and let both columns begin on the same baseline below them. At phone widths shorten the button to 'Print', keep actions reachable, and collapse the save status to an accessible icon if needed.
2. **Section editor** — Head the left panel 'Resume sections'. Use a section-specific line icon, disclosure chevron and drag handle on each row. Seed the order Contact, Summary, Experience, Education, Skills, Projects, then a hidden custom section titled Workshops. Start with Experience expanded on desktop and all other rows collapsed. Show labeled Role, Organization, Duration, and Highlights fields for the selected entry. Add or remove experience, education and project entries, edit text, and add or remove individual bullets. Contact edits name, target role, location and email. Skills are editable and removable tokens. 'Add section' creates a custom titled text-and-bullets section. Every row, including Contact, offers Hide or Show, Move up, and Move down through a labeled section actions menu. Disable unavailable moves at list ends. Hidden sections stay editable and are omitted from every document output.
   Layout: Use a pale paper panel with narrow dividers and generous rows. The expanded Experience row has a 3 px forest left rule, pale green heading band, and a white field area. Put labels above full-width inputs. Keep entry names compact with disclosures for additional entries. Use a real button for each action and separate drag handles from disclosure buttons. Include a live announcement for reordering and retain focus on the moved item.
3. **Sample document** — Use the default name and target role, with 'Fern Quay' and 'mira.calder@example.test'. Summary: 'I turn field research into hands-on exhibits. My work spans tactile models, listening stations, and touring displays that a small crew can set up in a morning.' Experience: 'Exhibit Designer' at 'Tern Hall Workshop' for '18 months'. Bullets: 'Built six listening stations for a traveling sound exhibit, each with a seated reach option.' and 'Reworked the packing plan so a two-person crew could install the gallery in four hours.' Second role: 'Fabrication Assistant' at 'Brindle Yard Studio' for '11 months'. Bullet: 'Prototyped raised-line maps with visitors and revised the key after eight guided tests.' Education: 'Diploma in Exhibit Craft', 'Fern Quay School of Making', 'Two-year program'. Skills: 'Spatial planning', 'Model making', 'Tactile graphics', 'Shop drawings'. Project: 'The Listening Table', project note 'Portable audio exhibit', bullet 'Designed a flat-pack listening table with six touch-guided audio points for library visits.' Hidden Workshops item: 'Relief Mapping Lab' with the bullet 'Led a hands-on session on making raised maps from everyday materials.' Rewrite every dependent detail for alternate variable values, including the fictional mailbox.
   Layout: Present the same content in editable fields and in the proof. On the default Classic sheet anchor the top left with the large serif name, target role in forest, and a compact contact line. Draw a fine rule below the contact block. Section headings are small, widely tracked forest capitals. Group each role and organization on the left with the duration on the right, then two or three short lines underneath. Use real lists, comfortable leading, and generous white margins. Keep this seed on one sheet.
4. **Preview and typesetting** — Label the right panel 'Live preview'. Put a Paper / ATS check segmented switch in its heading, with Paper selected. Expose a compact row of settings labeled 'Layout', 'Accent', 'Type', and 'Paper size'. Layout choices are 'Classic', 'Sidebar', and 'Technical', each with a tiny original line drawing of its page geometry. Classic uses one narrative column. Sidebar places supporting sections such as skills and education in a 30% tinted column and preserves the chosen order within each column. Technical uses a compact single-column grid with short labels in a narrow left gutter and aligned experience details on the right. Offer Forest #1F5F4A, Indigo #394984, and Clay #984C36. Type choices 'Editorial' and 'Sans' switch between Newsreader headings with Source Sans 3 body, and Source Sans 3 throughout. Paper choices are US Letter and A4. Default to Classic, Forest, Editorial, and US Letter. Selected controls need visible marks and accessible names.
   Layout: Keep toolbar surfaces light above the forest mat. Set each paper box at its true dimensions, 8.5 × 11 in or 210 × 297 mm, with 0.65 in or 16.5 mm margins. Scale the display wrapper proportionally to the available width, capped near 660 px wide on desktop. Maintain the physical dimensions inside the wrapper. Make the full sheet accessible by normal vertical scrolling. A compact status line next to the preview heading reads 'Fits on one page' for a fitting document, or 'Uses N pages' with an amber warning when it spills. Base it on actual measured layout after fonts load, edits, hiding, reorder, size, type, or layout changes.
5. **Reading view and print** — ATS check shows a selectable plain-text transcript of all visible sections in the user's section order, with complete field text and bullets on separate lines. Add one short explanation: 'Read the text in the order an application form would receive it.' Paper restores the chosen preview. 'Print / PDF' opens the browser print dialog for the current paper even when ATS check is selected. The printed result contains only the resume.
   Layout: Measure content at unscaled physical width. Paginate overflow into additional matching sheets, with headings kept with their first line and entries split at bullet or line boundaries when necessary. Share these page boxes and the same resume component between screen and print. Set @page size to the chosen format with zero outer margin, remove screen-only transforms, board, shadows, chrome and gaps, preserve document colors and break after each sheet except the last. Never clip longer text or create a trailing blank page. The ATS reading pane uses a light background, left-aligned wrapping, and no columns or decorative glyphs.
6. **Portability and narrow screens** — Autosave the draft and settings to localStorage. Show 'Saving…' while writing and 'Saved on this device' once successful. When storage is unavailable preserve edits in memory and show 'Local saving unavailable'. Export a versioned JSON file containing the full draft, including hidden sections, with a candidate-derived filename. Import via a local file picker, validate version, field types, supported layout choices and section structure before applying it. A failed import preserves the current draft and shows a plain-language error. Reopening the app restores saved work. An empty storage slot starts from the fictional sample.
   Layout: Below 800 px put an Edit / Preview toggle under the workspace heading, starting on Preview with the ready-made resume. Use full-width controls, 44 px touch targets, wrapping settings, scaled paper, and a single vertical scroll axis. Switching views preserves selection, draft data and layout. Provide visible focus rings, explicit input labels, keyboard-operable popovers with Escape and focus return, and an accessible save status. Any optional template credit belongs in the application footer outside the paper.

## Assets
- icon: Draw the folded-paper brand mark, favicon, layout thumbnails and 16–20 px line icons for file, print, section type, drag, disclosure, visibility and move in local SVG. Keep strokes consistent at 1.6 px. Decorative glyphs are hidden from assistive technology; icon-only controls get accessible labels.
- font: Bundle Latin Newsreader 500/600 and Source Sans 3 400/500/600/700 from the listed Fontsource packages. Record local asset paths, source URLs, authors and OFL-1.1 licenses in root ASSETS.md. Document the original inline glyphs and CSS mat as project-drawn assets.

## Don'ts
- No backend, API routes, accounts, external APIs, remote form submissions, analytics, network storage, or data uploads. All editing, file handling, and print preparation stay in the browser.
- Do not use real identities, addresses, service names, platform logos, employer logos, testimonials, branded resume designs, commercial fonts, copied UI or restricted library code. Keep all content and variable defaults in US English and all resume details fictional. Show duration phrases only, without calendar dates, year ranges, or timestamps anywhere in the interface, sample, or paper.
- Do not imply certification, ATS scores, hiring predictions, interviews, or external validation. Keep ATS check a plain-text reading view.
- Never hotlink or use a CDN. Self-host fonts, icons, scripts and styles and list third-party assets with author, source and license in ASSETS.md. Ship only permissively licensed dependencies. Use original code-drawn UI and paper artwork.
- Do not change the fixed stack or add a server. Build minified static files to dist/ with npm run build and relative asset URLs. Internal links must target actual filenames or hash routes. Keep dist/ below 20 MB, without source maps or copied src/.
- Do not hide editor functions behind hover or drag alone, use color alone for states, clip the printed document, or print app controls. Respect reduced motion, maintain WCAG AA body-text contrast and usable layout at 1440×900 and 390×844 with zero console errors and no horizontal page scrolling.
- No external brand credit inside the app except the optional template credit in its footer. Do not place credit, status, settings, or board decoration on a resume or its printed copy.

---
— Prompt by VibeFather · https://vibefather.ai/t/resume-builder-web-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
