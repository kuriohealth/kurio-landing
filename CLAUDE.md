# Agent instructions — kurio-landing

Binding rules for any agent (Claude or otherwise) working in this repo.
Read once per session. Keep it short on purpose.

---

## Stack

- **Astro 5.7** SSG, **Tailwind v4**, TypeScript
- **i18n**: ES default + EN at `/en/`. All copy lives in [src/i18n/ui.ts](src/i18n/ui.ts) — never inline strings in templates.
- **Analytics**: PostHog via reverse proxy at `t.kurio.health` (PUBLIC_POSTHOG_HOST). See [src/layouts/Layout.astro](src/layouts/Layout.astro).
- **Hosting**: Railway. Auto-deploys on push to `main`. Astro inlines `PUBLIC_*` env vars at **build time** → they must exist in the Railway dashboard before the build runs.

## Brand kit — read this section before writing any CSS

Two CSS files own the look of every pattern that's reusable across
the landing (and, eventually, the product app):

- [src/styles/kurio-brand.css](src/styles/kurio-brand.css) — design tokens (`--k-*` CSS custom properties)
- [src/styles/kurio-ui.css](src/styles/kurio-ui.css) — semantic primitives (`.k-*` classes + keyframes)

**Full cheat sheet**: [src/styles/README.md](src/styles/README.md).

### Rule: kit-first

Before writing any visual CSS in a component:

1. **Scan [src/styles/kurio-ui.css](src/styles/kurio-ui.css)**. Is there a class for what you need? → Use it.
2. **Close but not exact?** → Add a new variant TO THE KIT (e.g., `.k-banner--warning`). Don't copy and modify in the component.
3. **Truly unique to one section?** → Keep local CSS, but **always reference `--k-*` tokens**. Never hardcode hex colors, fonts, radii.

### Anti-patterns — do NOT

- Don't redefine `status pills`, `eyebrows`, `banners`, `recent-edit flashes`, `card state borders`, `tag labels` in component CSS. They live in the kit.
- Don't declare local tokens like `--my-purple: #6D4FE8` or `--card-bg: #fff`. Use `--k-purple`, `--k-bg`.
- Don't hand-pick zinc / amber / green / blue hex codes. Use `--k-ink-*`, `--k-status-*-bg`, `--k-status-*-fg`.
- Don't add Geist, Fraunces, or any other font. Inter is the sans (set in Layout's `@theme`); `--k-font-mono` is the mono.

### Adding a new pattern to the kit

If you're adding a CSS pattern that 2+ places will use:

1. Add it to [kurio-ui.css](src/styles/kurio-ui.css) with a usage example in the section header comment (follow the existing box-drawing comment style).
2. Update [src/styles/README.md](src/styles/README.md) cheat sheet.
3. Mention the new class in your PR description.

## Load-bearing copy — never edit without explicit user approval

- The **Solution quote** ("Kurio trabaja junto a la coordinación de seguros: organiza el expediente, verifica que todo esté en orden, envía el caso y da seguimiento hasta la autorización.") in [src/i18n/ui.ts](src/i18n/ui.ts) is load-bearing for **P7** (assistance, not replacement).
- The **Hero subtitle** preserves **P12** (neutral positioning). Treat both ES and EN versions as immutable.

## Forbidden positioning language (P12) — grep before merging

Never introduce these terms in ANY copy, code comment, commit message, or PR description:

```
cobranza | recuperar dinero | lo que te deben | dinero atrapado
denial | fight denials | denial recovery
del lado del hospital | contra la aseguradora | vs aseguradora
get paid faster | cobrar más rápido
```

The internal term "**Clinical Knowledge Model**" stays internal — never appears in public copy or comments.

## Before committing

- `npm run build` passes locally.
- Grep check for forbidden P12 terms returns empty.
- If you added visual styles in a component, ask yourself "could this have been a kit class?". If yes, refactor before commit.
- For UI changes: tested at http://localhost:4321/ (and `/en/` if i18n changed); mobile-tested in DevTools ≤720px if layout shifted.

## Risky actions — confirm first

Push to `main`, force-push, deleting branches, modifying `.env`, changing `astro.config.mjs` or `package.json` dependencies → ask the user before doing it.
