import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const purple-buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        purple: "bg-purple-500 text-white hover:bg-purple-600",
        dark-purple: "bg-purple-700 text-white hover:bg-purple-800",
        purple-outline: "border-2 border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500/10",
        purple-ghost: "bg-transparent text-purple-500 hover:bg-purple-500/10"
      },
      size: {
        default: "h-10 rounded-md px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-11 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
        sm: "h-9 rounded-md px-3 text-sm",
        default: "h-10 rounded-md px-4 py-2",
        lg: "h-11 rounded-md px-8 text-lg"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface PurpleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof purple-buttonVariants> {
  asChild?: boolean
}

const PurpleButton = React.forwardRef<HTMLButtonElement, PurpleButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(purple-buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PurpleButton.displayName = "PurpleButton"

export { PurpleButton, purple-buttonVariants }