<!-- Copilot / AI agent guidance for nextjs-dashboard -->
# Copilot instructions — nextjs-dashboard

Purpose: Help AI coding agents become productive quickly in this repo (Next.js + TypeScript + Tailwind).

- Project type: Next.js (App Router) app using TypeScript. Entry is the `app/` directory.
- Key files:
  - app/layout.tsx — root layout, global fonts and `app/globals.css` import.
  - app/page.tsx — main example page; good starting point for UI edits.
  - app/lib/definitions.ts — canonical TypeScript types (use these, not ad-hoc types).
  - app/lib/placeholder-data.ts — mock customers & invoices used for examples and components.
  - next.config.ts — Next config (currently minimal).
  - package.json — scripts and dependency versions (Next 16, React 19, TS 5).

Quick commands
- Install: `npm install` (or `pnpm/yarn` as preferred).
- Dev: `npm run dev` (opens on http://localhost:3000).
- Build: `npm run build` then `npm run start` to run production build.
- Lint: `npm run lint` (uses root `eslint` / `eslint-config-next`).

Architectural notes
- Uses the Next.js App Router: default files under `app/` are server components unless `"use client"` is added.
  - Prefer server components for page/layout logic; add `"use client"` only when you must use browser-only APIs or React state/hooks.
- Fonts: `next/font` is used in `app/layout.tsx` (see Geist/Geist_Mono usage) — keep font imports at layout-level.
- Styling: Tailwind via `globals.css` (imported in `app/layout.tsx`) and PostCSS config present.
- Images: Uses `next/image` and static assets are in `public/` (e.g., customer images referenced from `app/lib/placeholder-data.ts`).

Code & contribution patterns (found in repo)
- Use the types in `app/lib/definitions.ts` when generating components or APIs (e.g., `Invoice` type with status union `'pending'|'paid'`).
- Mock data: `app/lib/placeholder-data.ts` supplies `customers` and `invoices` — use this for UI prototyping or tests.
- Keep UI changes inside `app/` and prefer small, focused diffs. The app uses TypeScript strict-ish patterns (explicit prop types in layout).

Testing & debugging
- No test runner configured; local verification is manual via `npm run dev` and browser testing.
- For runtime issues, check console/terminal output from `next dev` and browser DevTools. For type errors, run `tsc` implicitly via editor or during `next build`.

Generator guidance for AI completions
- Always reference and reuse `app/lib/definitions.ts` types for new components or API types.
- When adding data fixtures, prefer `app/lib/placeholder-data.ts` and keep formats consistent (ISO date strings, numeric cents for money, `customer_id` linking to `customers[].id`).
- Prefer server components; add `"use client"` only when necessary and document why in the PR description.
- Avoid changing project-wide configs (Next, Tailwind, PostCSS) unless the change is small and justified — mention breaking changes explicitly.

Merging with existing AI guidance
- If a `.github/copilot-instructions.md` already exists, merge by preserving any repo-specific bullets and updating versions/scripts if they differ from `package.json`.

If something is unclear
- Ask for the intended UI, sample data shape, or whether changes should be server- or client-side.

End of file.
