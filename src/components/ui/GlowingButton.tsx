
import React, { memo } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-cyber-dark border border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-black shadow-[0_0_10px_rgba(255,42,109,0.3)] hover:shadow-[0_0_15px_rgba(255,42,109,0.5)]",
        blue: "bg-cyber-dark border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black shadow-[0_0_10px_rgba(1,200,238,0.3)] hover:shadow-[0_0_15px_rgba(1,200,238,0.5)]",
        purple: "bg-cyber-dark border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black shadow-[0_0_10px_rgba(111,0,255,0.3)] hover:shadow-[0_0_15px_rgba(111,0,255,0.5)]",
        green: "bg-cyber-dark border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black shadow-[0_0_10px_rgba(0,255,159,0.3)] hover:shadow-[0_0_15px_rgba(0,255,159,0.5)]",
        yellow: "bg-cyber-dark border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow hover:text-black shadow-[0_0_10px_rgba(255,230,0,0.3)] hover:shadow-[0_0_15px_rgba(255,230,0,0.5)]",
        outline:
          "border border-cyber-muted bg-cyber-black/40 text-cyber-text hover:bg-cyber-muted/10 hover:text-cyber-secondary",
        ghost: "bg-transparent text-cyber-blue hover:bg-cyber-muted/10 hover:text-cyber-blue/80",
        link: "text-cyber-blue underline-offset-4 hover:underline hover:text-cyber-blue/80",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glowing?: boolean;
}

const GlowingButton = memo(React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glowing = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {glowing && (
          <span className="absolute inset-0 overflow-hidden rounded-md before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-0 before:transition hover:before:animate-[shimmer_1s_ease-out_infinite] hover:before:opacity-100"></span>
        )}
        {children}
      </button>
    );
  }
));
GlowingButton.displayName = "GlowingButton";

export { GlowingButton, buttonVariants };
