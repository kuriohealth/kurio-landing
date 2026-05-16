## Summary

<!-- 1-3 sentences: what changed and why. -->

## Type of change

- [ ] Copy / i18n
- [ ] Visual / UI
- [ ] New section or component
- [ ] Refactor (no visual change)
- [ ] Bugfix
- [ ] Infra / config
- [ ] Docs

## Test plan

- [ ] `npm run build` passes locally
- [ ] Tested at http://localhost:4321/
- [ ] Tested `/en/` if i18n / shared component changed
- [ ] Mobile-tested in DevTools ≤720px if layout shifted

## Brand kit checklist (for any UI / styling change)

See [CLAUDE.md](../CLAUDE.md#brand-kit--read-this-section-before-writing-any-css) and [src/styles/README.md](../src/styles/README.md).

- [ ] Scanned `src/styles/kurio-ui.css` before adding new visual CSS
- [ ] Used existing `.k-*` classes where available
- [ ] Did NOT redefine status pills, eyebrows, banners, tag labels, recent-edit flashes, card state borders in component CSS
- [ ] No hardcoded brand colors / fonts / radii — only `--k-*` tokens
- [ ] If a new pattern was added to the kit, it's documented in `src/styles/README.md`

## Copy guardrails (if copy changed)

- [ ] No P12 terms (`cobranza`, `fight denials`, `del lado del hospital`, etc.) introduced — `grep -iE "(cobranza|fight denials|denial recovery|del lado del hospital|contra la aseguradora|get paid faster)"` returns empty
- [ ] P7 quote in Solution.astro left untouched (unless explicitly approved by the user)
- [ ] EN translation applied for any ES copy change (and vice versa)

## Deploy notes

- [ ] No new `PUBLIC_*` env vars (or, if added, listed below so they can be set in Railway before merge)

<!--
New env vars (Railway dashboard):
- PUBLIC_X = …
- PUBLIC_Y = …
-->
