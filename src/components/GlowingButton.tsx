import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-professional-primary text-white hover:bg-professional-primary/90 shadow-professional hover:shadow-professional-lg",
        secondary:
          "bg-professional-secondary text-white hover:bg-professional-secondary/90 shadow-professional hover:shadow-professional-lg",
        accent:
          "bg-professional-accent text-white hover:bg-professional-accent/90 shadow-professional hover:shadow-professional-lg",
        orange:
          "bg-professional-orange text-white hover:bg-professional-orange/90 shadow-professional hover:shadow-professional-lg",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-accent-foreground",
        ghost: "bg-transparent hover:bg-muted hover:text-accent-foreground",
        link: "text-professional-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GlowingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const GlowingButtonInner = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
GlowingButtonInner.displayName = "GlowingButton";

const GlowingButton = memo(GlowingButtonInner);

export { GlowingButton, buttonVariants };