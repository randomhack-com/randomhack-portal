
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef, memo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("font-bold relative inline-block", {
  variants: {
    variant: {
      default: "text-cyber-text",
      blue: "text-cyber-blue",
      pink: "text-cyber-primary",
      purple: "text-cyber-purple",
      green: "text-cyber-green",
      yellow: "text-cyber-yellow",
      gradient: "bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary to-cyber-blue",
    },
    size: {
      h1: "text-4xl md:text-5xl lg:text-6xl tracking-tight",
      h2: "text-3xl md:text-4xl tracking-tight",
      h3: "text-2xl md:text-3xl",
      h4: "text-xl md:text-2xl",
      h5: "text-lg md:text-xl",
      h6: "text-base md:text-lg font-semibold",
    },
    glow: {
      none: "",
      sm: "text-shadow-sm",
      md: "text-shadow-md",
      lg: "text-shadow-lg",
    },
  },
  compoundVariants: [
    {
      variant: "blue",
      glow: "sm",
      className: "text-shadow-[0_0_3px_rgba(1,200,238,0.3)]",
    },
    {
      variant: "blue",
      glow: "md",
      className: "text-shadow-[0_0_6px_rgba(1,200,238,0.5)]",
    },
    {
      variant: "blue",
      glow: "lg",
      className: "text-shadow-[0_0_12px_rgba(1,200,238,0.8)]",
    },
    {
      variant: "pink",
      glow: "sm",
      className: "text-shadow-[0_0_3px_rgba(255,42,109,0.3)]",
    },
    {
      variant: "pink",
      glow: "md",
      className: "text-shadow-[0_0_6px_rgba(255,42,109,0.5)]",
    },
    {
      variant: "pink",
      glow: "lg",
      className: "text-shadow-[0_0_12px_rgba(255,42,109,0.8)]",
    },
    {
      variant: "purple",
      glow: "sm",
      className: "text-shadow-[0_0_3px_rgba(111,0,255,0.3)]",
    },
    {
      variant: "purple",
      glow: "md",
      className: "text-shadow-[0_0_6px_rgba(111,0,255,0.5)]",
    },
    {
      variant: "purple",
      glow: "lg",
      className: "text-shadow-[0_0_12px_rgba(111,0,255,0.8)]",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "h2",
    glow: "none",
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  glitch?: boolean;
}

const CyberHeadingInner = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size, glow, as = "h2", glitch = false, children, ...props }, ref) => {
    const Comp = as || "h2";
    const dataText = typeof children === "string" ? children : undefined;

    return (
      <Comp
        className={cn(
          headingVariants({ variant, size, glow, className }),
          glitch && "glitch-effect"
        )}
        {...(glitch && dataText ? { "data-text": dataText } : {})}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

CyberHeadingInner.displayName = "CyberHeading";

const CyberHeading = memo(CyberHeadingInner);

export { CyberHeading, headingVariants };
