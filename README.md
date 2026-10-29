# kb — the support knowledge base

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.

## S01E03 review deliverables

- New signed review: `src/routes/kb/incidents/4471-review/+page.svx`.
- Rendered review: `build/kb/incidents/4471-review.html`; the complete static site and its assets are in `build/`.
- Replacement decision proposal: `src/routes/kb/decisions/0002-dedupe-by-cause/+page.svx`. Decision 0001 is unchanged.
- Issue bodies and ID-level audit: `evidence/`. Counts describe the 2026-10-04 export.

Build with `npm ci --ignore-scripts`, then `npm run build`. Verify with `node verify.mjs` (Node.js 22.18+ for native TypeScript stripping). Serve `build/` as a static directory to read the rendered kb, or run `npm run dev` for the interactive local site. No external host is required.

The source classifier groups 379 parser and 33 hint reports. Five anomalous timing reports remain in the parser count but need investigation; the classifier is not proof that a month/day swap explains every body.
