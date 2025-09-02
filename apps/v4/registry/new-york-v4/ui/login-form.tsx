import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const loginFormVariants = cva(
  "w-full max-w-md mx-auto space-y-6 p-8 bg-white border border-gray-200 rounded-lg shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200",
        elevated: "bg-white border-gray-200 shadow-lg",
        minimal: "bg-transparent border-0 shadow-none p-6"
      },
      size: {
        default: "max-w-md p-8",
        compact: "max-w-sm p-6", 
        comfortable: "max-w-lg p-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-red-500 focus-visible:ring-red-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface LoginFormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof loginFormVariants> {
  asChild?: boolean
  onSubmit?: (data: { email: string; password: string }) => void
  isLoading?: boolean
  errors?: {
    email?: string
    password?: string
    general?: string
  }
}

const LoginForm = React.forwardRef<HTMLFormElement, LoginFormProps>(
  ({ className, variant, size, asChild = false, onSubmit, isLoading = false, errors = {}, ...props }, ref) => {
    const [formData, setFormData] = React.useState({
      email: '',
      password: ''
    })
    
    const [localErrors, setLocalErrors] = React.useState<{
      email?: string
      password?: string
    }>({})
    
    const Comp = asChild ? Slot : "form"
    
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      
      const newErrors: { email?: string; password?: string } = {}
      
      if (!formData.email) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
      
      if (!formData.password) {
        newErrors.password = 'Password is required'
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters'
      }
      
      setLocalErrors(newErrors)
      
      if (Object.keys(newErrors).length === 0) {
        onSubmit?.(formData)
      }
    }
    
    const handleInputChange = (field: 'email' | 'password') => (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      setFormData(prev => ({
        ...prev,
        [field]: e.target.value
      }))
      
      // Clear error when user starts typing
      if (localErrors[field]) {
        setLocalErrors(prev => ({
          ...prev,
          [field]: undefined
        }))
      }
    }
    
    const displayErrors = { ...localErrors, ...errors }
    
    return (
      <Comp
        className={cn(loginFormVariants({ variant, size, className }))}
        onSubmit={handleSubmit}
        ref={ref}
        {...props}
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Sign in to your account</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password to access your account
          </p>
        </div>
        
        {displayErrors.general && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
            {displayErrors.general}
          </div>
        )}
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange('email')}
              className={cn(inputVariants({ 
                variant: displayErrors.email ? 'error' : 'default' 
              }))}
              disabled={isLoading}
              autoComplete="email"
              aria-describedby={displayErrors.email ? 'email-error' : undefined}
            />
            {displayErrors.email && (
              <p id="email-error" className="text-sm text-red-600">
                {displayErrors.email}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange('password')}
              className={cn(inputVariants({ 
                variant: displayErrors.password ? 'error' : 'default' 
              }))}
              disabled={isLoading}
              autoComplete="current-password"
              aria-describedby={displayErrors.password ? 'password-error' : undefined}
            />
            {displayErrors.password && (
              <p id="password-error" className="text-sm text-red-600">
                {displayErrors.password}
              </p>
            )}
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={cn(buttonVariants({ variant: "default", size: "default" }))}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            'Sign in'
          )}
        </button>
        
        <div className="text-center">
          <a href="#" className="text-sm text-primary hover:underline">
            Forgot your password?
          </a>
        </div>
      </Comp>
    )
  }
)

LoginForm.displayName = "LoginForm"

export { LoginForm, loginFormVariants }