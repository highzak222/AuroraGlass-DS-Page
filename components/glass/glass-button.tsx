"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type GlassButtonVariant = "gradient" | "glass" | "ghost"
type GlassButtonSize = "sm" | "md" | "lg"

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GlassButtonVariant
  size?: GlassButtonSize
}

const sizeClasses: Record<GlassButtonSize, string> = {
  sm: "h-10 px-4 text-sm rounded-[var(--gds-radius-sm)]",
  md: "h-12 px-6 text-base rounded-[var(--gds-radius-md)]",
  lg: "h-14 px-8 text-base rounded-[var(--gds-radius-lg)]",
}

const variantClasses: Record<GlassButtonVariant, string> = {
  gradient: "gds-gradient-fill text-[var(--gds-text)] border-0 hover:brightness-110 shadow-lg",
  glass:
    "gds-glass-inset text-[var(--gds-text)] hover:scale-105 border border-[var(--gds-border-strong)]",
  ghost:
    "bg-transparent text-[var(--gds-text-muted)] hover:text-[var(--gds-text)] hover:bg-[var(--gds-surface-1)] border border-transparent",
}

/**
 * GlassButton — action surface for the glass design system.
 * `gradient` for primary CTAs, `glass` for secondary, `ghost` for tertiary.
 */
export function GlassButton({
  className,
  variant = "gradient",
  size = "md",
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300",
        "transform active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
