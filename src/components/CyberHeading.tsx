import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef, memo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("font-semibold relative inline-block", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-professional-primary",
      secondary: "text-professional-secondary",
      accent: "text-professional-accent",
      muted: "text-muted-foreground",
      gradient: "bg-clip-text text-transparent bg-gradient-to-r from-professional-primary to-professional-secondary",
    },
    size: {
      h1: "text-4xl md:text-5xl lg:text-6xl tracking-tight",
      h2: "text-3xl md:text-4xl tracking-tight",
      h3: "text-2xl md:text-3xl",
      h4: "text-xl md:text-2xl",
      h5: "text-lg md:text-xl",
      h6: "text-base md:text-lg font-medium",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "h2",
    weight: "semibold",
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CyberHeadingInner = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, size, weight, as = "h2", children, ...props }, ref) => {
    const Comp = as || "h2";

    return (
      <Comp
        className={cn(headingVariants({ variant, size, weight, className }))}
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