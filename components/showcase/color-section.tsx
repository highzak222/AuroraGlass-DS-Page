import { GlassCard } from "@/components/glass/glass-card"

const swatches = [
  { name: "Gradient 1", token: "--gds-grad-1", value: "#8aa0f5" },
  { name: "Gradient 2", token: "--gds-grad-2", value: "#a8a5f0" },
  { name: "Gradient 3", token: "--gds-grad-3", value: "#c9a8e8" },
  { name: "Gradient 4", token: "--gds-grad-4", value: "#efb4dd" },
]

const surfaces = [
  { name: "Surface 1", token: "--gds-surface-1", className: "gds-glass-inset" },
  { name: "Surface 2", token: "--gds-surface-2", className: "gds-glass" },
  { name: "Surface Strong", token: "--gds-surface-strong", className: "bg-[var(--gds-surface-strong)] border border-[var(--gds-border-strong)]" },
]

export function ColorSection() {
  return (
    <GlassCard>
      <h2 className="mb-1 text-2xl font-medium">Color &amp; Surfaces</h2>
      <p className="mb-6 text-sm text-[var(--gds-text-muted)]">
        A periwinkle-to-pink brand gradient with layered translucent glass surfaces.
      </p>

      <div className="mb-8 h-24 w-full rounded-[var(--gds-radius-lg)] gds-gradient-fill" aria-hidden />

      <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--gds-text-muted)]">
        Gradient stops
      </h3>
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {swatches.map((s) => (
          <div key={s.token}>
            <div
              className="mb-2 h-16 w-full rounded-[var(--gds-radius-md)] border border-[var(--gds-border)]"
              style={{ background: s.value }}
            />
            <p className="text-sm font-medium">{s.name}</p>
            <p className="font-mono text-xs text-[var(--gds-text-subtle)]">{s.value}</p>
          </div>
        ))}
      </div>

      <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--gds-text-muted)]">
        Glass surfaces
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {surfaces.map((s) => (
          <div key={s.token}>
            <div className={`mb-2 flex h-16 w-full items-center justify-center rounded-[var(--gds-radius-md)] ${s.className}`}>
              <span className="text-xs text-[var(--gds-text-muted)]">{s.name}</span>
            </div>
            <p className="font-mono text-xs text-[var(--gds-text-subtle)]">{s.token}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
