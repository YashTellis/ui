import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pink-buttonVariants = cva(
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
        pink: "bg-pink-500 text-white hover:bg-pink-600",
        dark-pink: "bg-pink-700 text-white hover:bg-pink-800",
        pink-outline: "border-2 border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500/10",
        pink-ghost: "bg-transparent text-pink-500 hover:bg-pink-500/10"
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

export interface PinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pink-buttonVariants> {
  asChild?: boolean
}

const PinkButton = React.forwardRef<HTMLButtonElement, PinkButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(pink-buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PinkButton.displayName = "PinkButton"

export { PinkButton, pink-buttonVariants }