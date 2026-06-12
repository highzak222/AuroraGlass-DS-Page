import { GlassCard } from "@/components/glass/glass-card"

const scale = [
  { label: "Display", className: "text-4xl font-medium", sample: "Create an account" },
  { label: "Heading 1", className: "text-3xl font-normal", sample: "Welcome back" },
  { label: "Heading 2", className: "text-2xl font-medium", sample: "Section title" },
  { label: "Body", className: "text-base", sample: "Frosted glass, soft gradients, and clarity." },
  { label: "Muted", className: "text-sm text-[var(--gds-text-muted)]", sample: "Supporting helper text." },
  { label: "Caption", className: "text-xs uppercase tracking-wide text-[var(--gds-text-subtle)]", sample: "Or continue with" },
]

export function TypographySection() {
  return (
    <GlassCard>
      <h2 className="mb-1 text-2xl font-medium">Typography</h2>
      <p className="mb-6 text-sm text-[var(--gds-text-muted)]">
        Set in <span className="font-medium">Space Grotesk</span> via the <span className="font-mono text-xs">font-sans</span> token.
      </p>
      <div className="flex flex-col gap-5">
        {scale.map((row) => (
          <div key={row.label} className="flex flex-col gap-1 border-b border-[var(--gds-border)] pb-4 last:border-0 last:pb-0">
            <span className="font-mono text-xs text-[var(--gds-text-subtle)]">{row.label}</span>
            <span className={row.className}>{row.sample}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
