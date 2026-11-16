---
name: "Resume Builder Web App"
colors:
  desk_paper: "#F7F4EC"
  forest: "#1F5F4A"
  marigold: "#F2B134"
  cutting_mat: "#204D40"
  ink: "#1C3029"
  graphite: "#52635C"
  keyline: "#D0D5C9"
  proof_sheet: "#FFFFFF"
typography:
  wordmark_workspace_heading_and_default_printed_name: { family: "Newsreader", weights: [500, 600] }
  interface_resume_body_and_alternate_sans_headings: { family: "Source Sans 3", weights: [400, 500, 600, 700] }
spacing: "Use a 4 px base. At 1440 px, give the header and work area 48 px side gutters with a 1440 px maximum outer width. Leave 28 px between editor and preview. Use a 370–410 px editor and give the preview the remaining width. Allow 20–24 px inside the editor and 26–36 px around the preview sheet. App body 15–16 px with 1.45 line height. Main title 44 px with tight tracking, 32 px on mobile. Resume name 38 pt, role 12 pt, body 10.5 pt at physical size."
radius: "Use 7 px for editor panels and the mat, 5 px on fields and buttons. Printed sheets have square corners. Use a single soft offset shadow under the paper."
---

# Resume Builder Web App — Design System

Apply this design system to an existing project. It describes the look and feel only; for the full site, use prompt.md.

## Colors
- **Desk paper** `#F7F4EC` — Overall warm app background, top bar, and editor margins.
- **Forest** `#1F5F4A` — Wordmark, active editor controls, print button, and default resume ink accent.
- **Marigold** `#F2B134` — Fold of the app mark, selected layout swatch, and the small labeled paper-size tab on the preview board. Pair with dark ink.
- **Cutting mat** `#204D40` — Large preview board behind the paper, with sparse low-contrast ruling at its top and left edges.
- **Ink** `#1C3029` — Primary text and dark strokes on marigold.
- **Graphite** `#52635C` — Supporting labels on pale surfaces.
- **Keyline** `#D0D5C9` — Field outlines and subtle accordion separators.
- **Proof sheet** `#FFFFFF` — Document pages, fields, and expanded editor surface.

## Typography
- **Wordmark, workspace heading, and default printed name** — Newsreader (OFL), weights 500/600. Self-host the font files.
- **Interface, resume body, and alternate sans headings** — Source Sans 3 (OFL), weights 400/500/600/700. Self-host the font files.

## Spacing & shape
- Spacing: Use a 4 px base. At 1440 px, give the header and work area 48 px side gutters with a 1440 px maximum outer width. Leave 28 px between editor and preview. Use a 370–410 px editor and give the preview the remaining width. Allow 20–24 px inside the editor and 26–36 px around the preview sheet. App body 15–16 px with 1.45 line height. Main title 44 px with tight tracking, 32 px on mobile. Resume name 38 pt, role 12 pt, body 10.5 pt at physical size.
- Radius: Use 7 px for editor panels and the mat, 5 px on fields and buttons. Printed sheets have square corners. Use a single soft offset shadow under the paper.

## Motion
- Use a 120 ms color change for selection, and a thin marigold insertion rule while dragging sections.
- Leave the live paper still while typing. Reduced motion removes transitions and movement during reordering.

## Imagery
Build the document and cutting mat in HTML and CSS. A white proof sheet floats over a deep forest plotting surface with fine 24 px grid lines at low opacity and short ruler ticks along the outer edge. A marigold tab marked Letter or A4 sits at the board corner outside the sheet. Draw the original app mark as two offset paper outlines with a folded marigold corner. Keep illustration, grid, and ruler entirely out of the printed resume.

## Tone
The quiet precision of a print studio. Use short, literal US English labels and specific, economical resume prose.

---
— Prompt by VibeFather · https://vibefather.ai/t/resume-builder-web-app · CC BY-NC 4.0 (non-commercial; commercial use needs a VibeFather Pro license) · Request removal: https://vibefather.ai/takedown
