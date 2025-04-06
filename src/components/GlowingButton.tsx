
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-cyber-primary border border-cyber-primary/50 text-white hover:bg-cyber-primary/90",
        blue: "bg-cyber-blue border border-cyber-blue/50 text-white hover:bg-cyber-blue/90",
        purple: "bg-cyber-purple border border-cyber-purple/50 text-white hover:bg-cyber-purple/90",
        green: "bg-cyber-green border border-cyber-green/50 text-black hover:bg-cyber-green/90",
        yellow: "bg-cyber-yellow border border-cyber-yellow/50 text-black hover:bg-cyber-yellow/90",
        outline:
          "border border-cyber-border bg-transparent text-cyber-text hover:bg-cyber-dark hover:border-cyber-muted/80",
        ghost: "bg-transparent text-cyber-text hover:bg-cyber-dark",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-lg",
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
  glowing?: boolean;
}

const GlowingButton = React.forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, variant = "default", size, glowing = false, children, ...props }, ref) => {
    const getGlowColor = () => {
      switch (variant) {
        case "blue":
          return "before:bg-cyber-blue/20";
        case "purple":
          return "before:bg-cyber-purple/20";
        case "green":
          return "before:bg-cyber-green/20";
        case "yellow":
          return "before:bg-cyber-yellow/20";
        case "outline":
        case "ghost":
          return "before:bg-cyber-text/10";
        default:
          return "before:bg-cyber-primary/20";
      }
    };

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          glowing
            ? `relative before:absolute before:inset-0 before:rounded-full before:blur-md before:-z-10 ${getGlowColor()}`
            : ""
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
GlowingButton.displayName = "GlowingButton";

export { GlowingButton, buttonVariants };
