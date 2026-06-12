import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a subtle hover lift + scale interaction. */
  interactive?: boolean
}

/**
 * GlassCard — the signature frosted-glass surface of the design system.
 * Soft white tint over the brand gradient, blurred backdrop, rounded-xl.
 */
export function GlassCard({ className, interactive = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "gds-glass rounded-[var(--gds-radius-xl)] p-8 text-[var(--gds-text)]",
        interactive &&
          "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(31,38,135,0.28)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
