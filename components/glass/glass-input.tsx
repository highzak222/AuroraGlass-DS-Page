"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional leading icon node, rendered inside the field on the left. */
  icon?: React.ReactNode
}

/**
 * GlassInput — frosted text field matching the design system.
 * Translucent surface, white text, subtle hover/focus brightening.
 */
export function GlassInput({ className, icon, ...props }: GlassInputProps) {
  return (
    <div className="relative">
      {icon ? (
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gds-text-muted)]">
          {icon}
        </span>
      ) : null}
      <input
        className={cn(
          "gds-glass-inset h-14 w-full rounded-[var(--gds-radius-md)] text-base text-[var(--gds-text)]",
          "placeholder:text-[var(--gds-text-subtle)] focus:bg-[var(--gds-surface-3)]",
          "focus:outline-none focus:border-[var(--gds-border-strong)]",
          icon ? "pl-12 pr-4" : "px-4",
          className,
        )}
        {...props}
      />
    </div>
  )
}
