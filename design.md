# Aurora Glass — Design System

A frosted-glass design system derived from the brand mark: a glossy letter **"b"** with a heart cutout, rendered in a periwinkle-to-pink gradient with a cyan-white glassy outline.

---

## 1. Brand Foundation

The system is built directly from the logo:

- **Gradient** — periwinkle blue → lavender → magenta-pink, sampled from the logo fill.
- **Edge glow** — a cyan-white outline that echoes the logo's glassy rim.
- **Translucency** — frosted-glass surfaces float over the gradient canvas.

All tokens live in `app/globals.css` under the `@theme inline` block and are exposed as CSS variables (prefixed `--gds-`).

---

## 2. Color Tokens

### Brand gradient stops

| Token          | Value     | Use                          |
| -------------- | --------- | ---------------------------- |
| `--gds-grad-1` | `#7e95f0` | Periwinkle (gradient start)  |
| `--gds-grad-2` | `#a39ff0` | Lavender                     |
| `--gds-grad-3` | `#c6a4e6` | Mauve                        |
| `--gds-grad-4` | `#e8a9da` | Magenta-pink (gradient end)  |
| `--gds-gradient` | `linear-gradient(135deg, …)` | Full canvas gradient |

### Edge glow (from logo outline)

| Token             | Value                         | Use                         |
| ----------------- | ----------------------------- | --------------------------- |
| `--gds-edge`      | `#d6ecff`                     | Cyan-white rim color        |
| `--gds-edge-glow` | layered box-shadow            | Glassy outline for features |

### Glass surfaces (white tints over the gradient)

| Token                  | Value                      | Use                       |
| ---------------------- | -------------------------- | ------------------------- |
| `--gds-surface-1`      | `rgba(255,255,255,0.10)`   | Inset fields / pills      |
| `--gds-surface-2`      | `rgba(255,255,255,0.15)`   | Default glass card        |
| `--gds-surface-3`      | `rgba(255,255,255,0.20)`   | Hover state               |
| `--gds-surface-strong` | `rgba(255,255,255,0.40)`   | Emphasis surface          |
| `--gds-border`         | `rgba(255,255,255,0.20)`   | Subtle glass border       |
| `--gds-border-strong`  | `rgba(255,255,255,0.30)`   | Card border               |

### On-glass text

| Token               | Value                    | Use            |
| ------------------- | ------------------------ | -------------- |
| `--gds-text`        | `rgba(255,255,255,1)`    | Primary text   |
| `--gds-text-muted`  | `rgba(255,255,255,0.70)` | Secondary text |
| `--gds-text-subtle` | `rgba(255,255,255,0.60)` | Tertiary text  |

> **Rule:** Stay within these tokens. Do not introduce raw `text-white` / `bg-black` or new hues outside the brand range without updating tokens first.

---

## 3. Typography

- **Family:** Space Grotesk (loaded in `app/layout.tsx`, wired through `font-sans`).
- **Headings:** `font-medium`, `text-balance`, with `drop-shadow` over the gradient.
- **Body:** relaxed line-height (`leading-relaxed`), `text-pretty`, muted color for secondary copy.
- Maximum of one font family — Space Grotesk handles both headings and body.

---

## 4. Radii & Elevation

| Token              | Value     | Use                |
| ------------------ | --------- | ------------------ |
| `--gds-radius-sm`  | `0.75rem` | Pills, inputs      |
| `--gds-radius-md`  | `1rem`    | Buttons            |
| `--gds-radius-lg`  | `1.5rem`  | Cards              |
| `--gds-radius-xl`  | `2rem`    | Featured panels    |
| `--gds-blur`       | `16px`    | Backdrop blur      |
| `--gds-shadow`     | soft drop | Card elevation     |

---

## 5. Utility Classes

Defined in the `@layer components` block of `globals.css`:

| Class                 | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| `.gds-canvas`         | Applies the full brand gradient as a backdrop        |
| `.gds-glass`          | Frosted-glass surface (blur + border + shadow)       |
| `.gds-glass-inset`    | Lighter inset surface with hover, for fields/pills   |
| `.gds-gradient-fill`  | Solid gradient fill for primary actions              |
| `.gds-edge-glow`      | Logo-style cyan-white glassy outline                 |

---

## 6. Component Library

Located in `components/glass/`:

| Component     | File               | Notes                                                   |
| ------------- | ------------------ | ------------------------------------------------------- |
| `GlassCard`   | `glass-card.tsx`   | Frosted container, base building block                  |
| `GlassButton` | `glass-button.tsx` | Variants: `gradient`, `glass`, `ghost`; sizes `sm/md/lg`|
| `GlassInput`  | `glass-input.tsx`  | Inset glass field with on-glass placeholder             |
| `GlassBadge`  | `glass-badge.tsx`  | Pill label, includes `gradient` variant                 |
| `GlassTabs`   | `glass-tabs.tsx`   | Segmented control on a glass track                      |

### Showcase

`app/page.tsx` renders a living showcase composed of:

- `components/showcase/color-section.tsx`
- `components/showcase/typography-section.tsx`
- `components/showcase/components-section.tsx`

---

## 7. Usage Guidelines

1. **Always place glass over the gradient.** Glass surfaces are designed to sit on `.gds-canvas`; on a flat background they lose their effect.
2. **Reserve `.gds-edge-glow` for featured elements** (logo tile, hero CTAs) — overuse dilutes its impact.
3. **Use the gradient fill sparingly** for the single most important action per view.
4. **Keep text on tokens** — primary/muted/subtle cover the full hierarchy.
5. **Respect the radius scale** — smaller radii for controls, larger for containers.
6. **One font, multiple weights** — never add a second family.

---

## 8. File Map

```
app/
  globals.css            # tokens + utility classes
  layout.tsx             # Space Grotesk font + metadata
  page.tsx               # design system showcase
components/
  glass/                 # reusable primitives
    glass-card.tsx
    glass-button.tsx
    glass-input.tsx
    glass-badge.tsx
    glass-tabs.tsx
  showcase/              # documentation sections
    color-section.tsx
    typography-section.tsx
    components-section.tsx
public/
  images/logo.png        # brand mark
```
