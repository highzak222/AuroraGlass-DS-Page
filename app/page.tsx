import { GlassBadge } from "@/components/glass/glass-badge"
import { ColorSection } from "@/components/showcase/color-section"
import { TypographySection } from "@/components/showcase/typography-section"
import { ComponentsSection } from "@/components/showcase/components-section"

export default function DesignSystemPage() {
  return (
    <main className="gds-canvas min-h-screen px-4 py-16 text-[var(--gds-text)]">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <header className="text-center">
          <GlassBadge variant="gradient" className="mb-4">
            <span>Design System</span>
          </GlassBadge>
          <h1 className="text-balance text-4xl font-medium drop-shadow sm:text-5xl">
            Aurora Glass
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-[var(--gds-text-muted)]">
            A frosted-glass design system built from this project&apos;s aesthetic — soft
            periwinkle-to-pink gradients, translucent surfaces, and Space Grotesk type.
          </p>
        </header>

        <ColorSection />
        <TypographySection />
        <ComponentsSection />

        <footer className="pb-4 text-center text-sm text-[var(--gds-text-subtle)]">
          Built with reusable glass primitives · GlassCard · GlassButton · GlassInput · GlassBadge · GlassTabs
        </footer>
      </div>
    </main>
  )
}
