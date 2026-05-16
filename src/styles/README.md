# Kurio brand kit

Plain CSS, framework-agnostic. Two files:

- **[kurio-brand.css](kurio-brand.css)** — design tokens (`--k-*` CSS custom properties)
- **[kurio-ui.css](kurio-ui.css)** — semantic primitives (`.k-*` classes + keyframes)

Both are imported globally in [src/layouts/Layout.astro](../layouts/Layout.astro) — available on every page.

When the product app (kurio-agente-autorizaciones) adopts these patterns, the same two files copy over and work identically in React.

---

## Quick decision tree

1. **Styling something visual?** → Scan this file first.
2. **Found something close but not exact?** → Add a variant to the kit (e.g., `.k-banner--warning`). Don't copy and modify locally.
3. **Truly unique to one section?** → Keep CSS local, but reference `--k-*` tokens (never hardcode hex / fonts / radii).

---

## Tokens — `kurio-brand.css`

| Group | Tokens |
|---|---|
| **Brand** | `--k-purple`, `--k-purple-soft`, `--k-purple-strong` |
| **Status — pending (gray)** | `--k-status-pending-bg`, `--k-status-pending-fg` |
| **Status — progress (amber)** | `--k-status-progress-bg`, `--k-status-progress-fg` |
| **Status — ready (green)** | `--k-status-ready-bg`, `--k-status-ready-fg` |
| **Status — sent (blue)** | `--k-status-sent-bg`, `--k-status-sent-fg` |
| **Neutral / surface** | `--k-ink`, `--k-ink-strong`, `--k-ink-soft`, `--k-ink-mute`, `--k-bg`, `--k-bg-subtle`, `--k-line`, `--k-line-soft` |
| **Typography** | `--k-font-mono` (Inter is the sans, set in Layout's `@theme`) |
| **Motion** | `--k-ease`, `--k-ease-out`, `--k-duration-fast`, `--k-duration-base`, `--k-duration-slow` |
| **Radii** | `--k-radius-sm`, `--k-radius-md`, `--k-radius-lg`, `--k-radius-xl` |

---

## Primitives — `kurio-ui.css`

### `.k-eyebrow`
Section-header eyebrow with pulsing brand-purple dot. Use above any section headline.

```html
<span class="k-eyebrow">Expediente en vivo</span>
```

### `.k-tag-label` + variants
Static themed micro-label for column headers / category tags. Text is muted; the leading dot carries the color.

**Variants**: `--agent` (purple), `--warm` (amber), `--success` (green), `--info` (blue), `--neutral` (default gray).

```html
<span class="k-tag-label k-tag-label--warm">Vida del paciente</span>
<span class="k-tag-label k-tag-label--agent">Expediente Kurio</span>
```

### `.k-headline-accent`
Italic + brand-purple emphasis. Drop inside any headline.

```html
<h1>
  De la realidad clínica al expediente,
  <em class="k-headline-accent">en tiempo real.</em>
</h1>
```

### `.k-status-pill` + variants
Semantic state badge. Static; one variant per state.

**Variants**: `--pending` (Borrador), `--progress` (En curso), `--ready` (Listo), `--sent` (Enviado).

```html
<span class="k-status-pill k-status-pill--ready">Listo</span>
```

For cycling through states via animation, stack multiple pills in the same grid cell with opacity keyframes at the call site (see InAction.astro for the pattern).

### `.k-card--state-*`
Border + glow modifier for status-aware cards. Apply on top of an existing card class.

**Variants**: `--state-progress`, `--state-ready`, `--state-sent`.

```html
<div class="my-card k-card--state-ready">…</div>
```

### `.k-recent-edit` / `.k-recent-edit--persistent`
Purple drop-shadow flash for "what the agent just did". Two variants:

- `.k-recent-edit` — flashes twice (~3s total), then fades. Good for one-off "this just changed".
- `.k-recent-edit--persistent` — sustained glow while the class is present. Good for "unread changes" state.

```html
<div class="exp-row k-recent-edit">…</div>
<div class="exp-row k-recent-edit--persistent">…</div>
```

### `.k-banner` + variants
Soft pill banner with icon + content.

**Variants**: `--ready`, `--sent`, `--progress`.

```html
<div class="k-banner k-banner--ready">
  <div class="k-banner__icon">✓</div>
  <div>Listo para envío</div>
</div>
```

### `.k-field-in`
Entrance animation (opacity + translateY) for newly populated data.

```html
<div class="k-field-in">Hemograma · Eco</div>
```

### `.k-button` + variants + sizes
Primary action element. Two variants (`--primary` filled, `--secondary` outlined) and an optional `--sm` size for compact contexts like navbars.

```html
<a class="k-button k-button--primary">Solicitar acceso</a>
<a class="k-button k-button--secondary">Iniciar sesión</a>
<a class="k-button k-button--primary k-button--sm">…</a>
```

Stack with `w-full sm:w-auto` (Tailwind) when you need the button to fill on mobile.

### `.k-step-number`
Sequence indicator (`01`, `02`, …). Mono, uppercase, tracked, muted. Like `.k-tag-label` but without a leading colored dot (numbers don't categorize — they sequence).

```html
<span class="k-step-number">01</span>
```

---

## Reduced motion

All kit animations respect `prefers-reduced-motion: reduce`. Visual states still apply; motion does not.

---

## Reference implementation

[src/components/InAction.astro](../components/InAction.astro) uses every primitive in the kit. Read it to see how the classes compose into a full UI.

---

## Adding new patterns

If you're adding a CSS pattern that 2+ places will use:

1. Add it to [kurio-ui.css](kurio-ui.css) following the existing box-drawing comment style for the section header.
2. Update this README — add a section above with class name, variants, and usage example.
3. Mention the new class in your PR description.
