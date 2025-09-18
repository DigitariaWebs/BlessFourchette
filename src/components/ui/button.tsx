import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            // Default variant using primary colors
            "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-primary)]/90": variant === "secondary",
            // Secondary variant using secondary colors  
            "bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)]/90": variant === "default",
            // Outline variant
            "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-accent)]/10 text-[var(--color-foreground)]": variant === "outline",
            // Ghost variant
            "hover:bg-[var(--color-accent)]/10 text-[var(--color-foreground)]": variant === "ghost",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm", 
            "h-11 rounded-md px-8": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
