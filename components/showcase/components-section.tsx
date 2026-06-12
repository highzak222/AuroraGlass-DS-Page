"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass/glass-card"
import { GlassButton } from "@/components/glass/glass-button"
import { GlassInput } from "@/components/glass/glass-input"
import { GlassBadge } from "@/components/glass/glass-badge"
import { GlassTabs } from "@/components/glass/glass-tabs"
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react"

export function ComponentsSection() {
  const [tab, setTab] = useState("buttons")

  return (
    <GlassCard>
      <h2 className="mb-1 text-2xl font-medium">Components</h2>
      <p className="mb-6 text-sm text-[var(--gds-text-muted)]">
        Reusable building blocks composed from the glass primitives.
      </p>

      <GlassTabs
        className="mb-8"
        value={tab}
        onChange={setTab}
        tabs={[
          { value: "buttons", label: "Buttons" },
          { value: "inputs", label: "Inputs" },
          { value: "badges", label: "Badges" },
        ]}
      />

      {tab === "buttons" && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <GlassButton variant="gradient">
              Get started <ArrowRight className="h-4 w-4" />
            </GlassButton>
            <GlassButton variant="glass">Secondary</GlassButton>
            <GlassButton variant="ghost">Ghost</GlassButton>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <GlassButton variant="gradient" size="sm">Small</GlassButton>
            <GlassButton variant="gradient" size="md">Medium</GlassButton>
            <GlassButton variant="gradient" size="lg">Large</GlassButton>
          </div>
          <GlassButton variant="gradient" disabled>Disabled</GlassButton>
        </div>
      )}

      {tab === "inputs" && (
        <div className="flex max-w-md flex-col gap-4">
          <GlassInput placeholder="Plain field" />
          <GlassInput icon={<Mail className="h-5 w-5" />} placeholder="Enter your email" type="email" />
          <GlassInput icon={<Lock className="h-5 w-5" />} placeholder="Enter your password" type="password" />
        </div>
      )}

      {tab === "badges" && (
        <div className="flex flex-wrap items-center gap-3">
          <GlassBadge>Default</GlassBadge>
          <GlassBadge variant="gradient">
            <Sparkles className="h-3 w-3" /> New
          </GlassBadge>
          <GlassBadge>Beta</GlassBadge>
          <GlassBadge variant="gradient">Pro</GlassBadge>
        </div>
      )}
    </GlassCard>
  )
}
