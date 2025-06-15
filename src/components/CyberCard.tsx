import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps, type Transition } from "framer-motion";

const cardVariants = cva(
  "relative rounded-lg overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-card border border-border shadow-professional backdrop-filter backdrop-blur-sm hover:shadow-professional-lg hover:-translate-y-1",
        elevated:
          "bg-card border border-border shadow-professional-lg backdrop-filter backdrop-blur-sm hover:shadow-professional-xl hover:-translate-y-2",
        primary:
          "bg-gradient-to-br from-professional-primary/5 to-professional-primary/10 border border-professional-primary/20 shadow-professional hover:border-professional-primary/30 hover:shadow-professional-lg hover:-translate-y-1",
        secondary:
          "bg-gradient-to-br from-professional-secondary/5 to-professional-secondary/10 border border-professional-secondary/20 shadow-professional hover:border-professional-secondary/30 hover:shadow-professional-lg hover:-translate-y-1",
        accent:
          "bg-gradient-to-br from-professional-accent/5 to-professional-accent/10 border border-professional-accent/20 shadow-professional hover:border-professional-accent/30 hover:shadow-professional-lg hover:-translate-y-1",
        outline:
          "border border-border bg-background hover:bg-muted/50 hover:-translate-y-1",
        muted:
          "bg-muted/50 border border-border shadow-sm backdrop-filter backdrop-blur-sm",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CyberCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  hoverEffect?: boolean;
  animated?: boolean;
}

const CyberCardInner = React.forwardRef<HTMLDivElement, CyberCardProps>(
  ({ className, variant, size, hoverEffect = false, animated = false, children, ...props }, ref) => {
    if (hoverEffect) {
      return (
        <motion.div
          ref={ref}
          className={cn(cardVariants({ variant, size, className }))}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 } as Transition}
        >
          {children}
        </motion.div>
      );
    }

    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={cn(cardVariants({ variant, size, className }))}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 } as Transition}
          viewport={{ once: true }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CyberCardInner.displayName = "CyberCard";

const CyberCard = memo(CyberCardInner);

export { CyberCard, cardVariants };