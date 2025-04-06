
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";

const cardVariants = cva(
  "relative rounded-md overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-cyber-dark/70 border border-cyber-border shadow-[0_4px_15px_rgba(0,0,0,0.2)] backdrop-filter backdrop-blur-md hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1",
        glow: "bg-cyber-dark/70 border border-cyber-blue/30 shadow-[0_0_10px_rgba(1,200,238,0.2)] backdrop-filter backdrop-blur-md hover:border-cyber-blue/50 hover:shadow-[0_0_15px_rgba(1,200,238,0.4),0_0_30px_rgba(1,200,238,0.2)] hover:-translate-y-1",
        glowPink:
          "bg-cyber-dark/70 border border-cyber-primary/30 shadow-[0_0_10px_rgba(255,42,109,0.2)] backdrop-filter backdrop-blur-md hover:border-cyber-primary/50 hover:shadow-[0_0_15px_rgba(255,42,109,0.4),0_0_30px_rgba(255,42,109,0.2)] hover:-translate-y-1",
        glowPurple:
          "bg-cyber-dark/70 border border-cyber-purple/30 shadow-[0_0_10px_rgba(111,0,255,0.2)] backdrop-filter backdrop-blur-md hover:border-cyber-purple/50 hover:shadow-[0_0_15px_rgba(111,0,255,0.4),0_0_30px_rgba(111,0,255,0.2)] hover:-translate-y-1",
        outline:
          "border border-cyber-border bg-cyber-black/40 hover:border-cyber-muted/50 hover:-translate-y-1",
        panel:
          "bg-cyber-black/70 border border-cyber-border shadow-inner backdrop-filter backdrop-blur-md",
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
  scanline?: boolean;
}

const CyberCard = React.forwardRef<HTMLDivElement, CyberCardProps>(
  ({ className, variant, size, hoverEffect = false, scanline = false, children, ...props }, ref) => {
    if (hoverEffect) {
      return (
        <motion.div
          ref={ref}
          className={cn(cardVariants({ variant, size, className }))}
          whileHover={{ y: -5 }}
          // Fixed the transition prop type issue
          transition={{ type: "tween", duration: 0.3 }}
          {...props}
        >
          {children}
          {scanline && (
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-[scan-line_2s_linear_infinite]"></div>
            </div>
          )}
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
        {scanline && (
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/50 to-transparent animate-[scan-line_2s_linear_infinite]"></div>
          </div>
        )}
      </div>
    );
  }
);
CyberCard.displayName = "CyberCard";

export { CyberCard, cardVariants };
