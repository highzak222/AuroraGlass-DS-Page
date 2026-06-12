import type React from "react"
import { cn } from "@/lib/utils"

interface GlassBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "glass" | "gradient"
}

/**
 * GlassBadge — small pill label for statuses and tags.
 */
export function GlassBadge({ className, variant = "glass", children, ...props }: GlassBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-[var(--gds-text)]",
        variant === "glass" ? "gds-glass-inset" : "gds-gradient-fill",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
