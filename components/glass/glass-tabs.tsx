"use client"

import { cn } from "@/lib/utils"

interface GlassTabsProps {
  tabs: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  className?: string
}

/**
 * GlassTabs — the segmented pill control used across the system.
 */
export function GlassTabs({ tabs, value, onChange, className }: GlassTabsProps) {
  return (
    <div
      className={cn(
        "gds-glass-inset inline-flex rounded-full p-1",
        className,
      )}
      role="tablist"
    >
      {tabs.map((tab) => {
        const active = tab.value === value
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
            className={cn(
              "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300",
              active
                ? "bg-[var(--gds-surface-strong)] text-[var(--gds-text)] shadow-lg border border-[var(--gds-border-strong)]"
                : "text-[var(--gds-text-muted)] hover:text-[var(--gds-text)] hover:bg-[var(--gds-surface-1)]",
            )}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
