import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const testimonialVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        card: "bg-white rounded-lg border shadow-sm p-6",
        minimal: "bg-transparent border-0 p-4",
        featured: "bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 shadow-xl"
      },
      layout: {
        grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        stack: "space-y-6",
        carousel: "flex space-x-6 overflow-x-auto"
      }
    },
    defaultVariants: {
      variant: "card",
      layout: "grid"
    }
  }
)

const testimonialItemVariants = cva(
  "flex flex-col space-y-4 transition-all duration-300",
  {
    variants: {
      variant: {
        card: "bg-white rounded-lg border shadow-sm p-6 hover:shadow-md",
        minimal: "bg-transparent p-4",
        featured: "bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 shadow-xl hover:shadow-2xl"
      }
    },
    defaultVariants: {
      variant: "card"
    }
  }
)

export interface TestimonialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof testimonialVariants> {
  asChild?: boolean
  testimonials?: Array<{
    name: string
    role: string
    company: string
    content: string
    rating: number
    avatar?: string
  }>
}

export interface TestimonialItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof testimonialItemVariants> {
  asChild?: boolean
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ className, variant, layout, asChild = false, testimonials = [], children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    
    const defaultTestimonials = [
      {
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        content: "This product has completely transformed how we work. The interface is intuitive and the results speak for themselves. Our productivity has increased by 40% since implementation.",
        rating: 5,
        avatar: "SJ"
      },
      {
        name: "Michael Chen",
        role: "Product Manager",
        company: "Innovation Labs",
        content: "Outstanding quality and exceptional support. The team went above and beyond to ensure our success. I highly recommend this to any organization looking to scale.",
        rating: 5,
        avatar: "MC"
      },
      {
        name: "Emily Rodriguez",
        role: "CTO",
        company: "Digital Solutions",
        content: "The best investment we've made this year. Seamless integration, powerful features, and a user experience that our entire team loves. Simply phenomenal!",
        rating: 5,
        avatar: "ER"
      }
    ];
    
    const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;
    
    return (
      <Comp
        className={cn(testimonialVariants({ variant: "card", layout, className }))}
        ref={ref}
        {...props}
      >
        {children || displayTestimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            variant={variant}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            content={testimonial.content}
            rating={testimonial.rating}
            avatar={testimonial.avatar}
          />
        ))}
      </Comp>
    )
  }
)
Testimonial.displayName = "Testimonial"

const TestimonialItem = React.forwardRef<HTMLDivElement, TestimonialItemProps>(
  ({ className, variant, asChild = false, name, role, company, content, rating, avatar, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    
    const renderStars = (rating: number) => {
      return Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          )}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
    };
    
    return (
      <Comp
        className={cn(testimonialItemVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {renderStars(rating)}
        </div>
        
        {/* Content */}
        <blockquote className={cn(
          "text-base leading-relaxed",
          variant === "featured" ? "text-gray-100" : "text-gray-700"
        )}>
          "{content}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center space-x-3 mt-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm",
            variant === "featured" 
              ? "bg-white/20 text-white" 
              : "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
          )}>
            {avatar || name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className={cn(
              "font-semibold",
              variant === "featured" ? "text-white" : "text-gray-900"
            )}>
              {name}
            </div>
            <div className={cn(
              "text-sm",
              variant === "featured" ? "text-gray-300" : "text-gray-600"
            )}>
              {role} at {company}
            </div>
          </div>
        </div>
      </Comp>
    )
  }
)
TestimonialItem.displayName = "TestimonialItem"

export { Testimonial, TestimonialItem, testimonialVariants, testimonialItemVariants }