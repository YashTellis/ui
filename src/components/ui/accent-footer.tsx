import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const accent-footerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-background",
        bordered: "bg-background border border-border",
        elevated: "bg-background shadow-md",
        red-accent: "bg-muted text-muted-foreground hover:bg-muted/80",
        green-accent: "bg-muted text-muted-foreground hover:bg-muted/80"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10",
        compact: "h-10 px-4 py-2",
        extended: "h-10 px-4 py-2"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        variant: "bordered",
        size: "icon",
        class: "h-10 w-10"
      },
      {
        variant: "elevated",
        size: "icon",
        class: "h-10 w-10"
      },
      {
        variant: "red-accent",
        size: "icon",
        class: "h-10 w-10"
      },
      {
        variant: "green-accent",
        size: "icon",
        class: "h-10 w-10"
      }
    ]
  }
)

export interface AccentFooterProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof accent-footerVariants> {
  asChild?: boolean
}

const AccentFooter = React.forwardRef<HTMLButtonElement, AccentFooterProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(accent-footerVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
AccentFooter.displayName = "AccentFooter"

export { AccentFooter, accent-footerVariants }