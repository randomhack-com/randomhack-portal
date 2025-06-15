import { memo } from "react";
import { motion } from "framer-motion";
import { CyberCard } from "./CyberCard";
import { CyberHeading } from "./CyberHeading";
import { GlowingButton } from "@/components/GlowingButton";
import { Link } from "react-router-dom";
import { Terminal, Cpu, HomeIcon, FileText, ArrowRight } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: "default" | "primary" | "secondary" | "accent" | "orange";
  delay: number;
  href: string;
};

const FeatureCardInner = ({ title, description, icon: Icon, color, delay, href }: FeatureCardProps) => {
  const getVariant = () => {
    switch (color) {
      case "primary": return "primary";
      case "secondary": return "secondary";
      case "accent": return "accent";
      default: return "default";
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return {
          icon: "text-professional-primary",
          bg: "bg-professional-primary/10",
          title: "text-professional-primary",
          button: "default"
        };
      case "secondary":
        return {
          icon: "text-professional-secondary",
          bg: "bg-professional-secondary/10",
          title: "text-professional-secondary",
          button: "secondary"
        };
      case "accent":
        return {
          icon: "text-professional-accent",
          bg: "bg-professional-accent/10",
          title: "text-professional-accent",
          button: "accent"
        };
      case "orange":
        return {
          icon: "text-professional-orange",
          bg: "bg-professional-orange/10",
          title: "text-professional-orange",
          button: "orange"
        };
      default:
        return {
          icon: "text-muted-foreground",
          bg: "bg-muted/50",
          title: "text-foreground",
          button: "default"
        };
    }
  };

  const colors = getColorClasses();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <CyberCard
        variant={getVariant()}
        className="h-full"
        hoverEffect
      >
        <div className="flex flex-col h-full">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors.bg}`}>
            <Icon className={`w-6 h-6 ${colors.icon}`} />
          </div>

          <h3 className={`text-xl font-semibold mb-2 ${colors.title}`}>
            {title}
          </h3>

          <p className="text-muted-foreground mb-6">{description}</p>

          <div className="mt-auto">
            <Link to={href}>
              <GlowingButton
                variant={colors.button as any}
                className="group"
              >
                Explore
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </GlowingButton>
            </Link>
          </div>
        </div>
      </CyberCard>
    </motion.div>
  );
};

const FeatureCard = memo(FeatureCardInner);

export default function FeatureSection() {
  const features = [
    {
      title: "LLM Playground",
      description: "Experiment with AI language models, build chatbots, and explore the cutting edge of natural language processing.",
      icon: Terminal,
      color: "primary" as const,
      href: "/llm-playground",
      delay: 0.1
    },
    {
      title: "3D Printer Projects",
      description: "Discover 3D printing designs, tutorials, and projects for your home or office space.",
      icon: Cpu,
      color: "secondary" as const,
      href: "/3d-printer",
      delay: 0.2
    },
    {
      title: "Home Lab",
      description: "Learn about home server setups, networking, and automation for your personal tech infrastructure.",
      icon: HomeIcon,
      color: "accent" as const,
      href: "/home-lab",
      delay: 0.3
    },
    {
      title: "Curriculum Vitae",
      description: "View my professional background, skills, and experience in technology and development.",
      icon: FileText,
      color: "orange" as const,
      href: "/cv",
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 professional-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-professional-primary/10 text-professional-primary text-sm font-medium rounded-full mb-4 border border-professional-primary/20">
              Explore the Technology Stack
            </span>
            <CyberHeading as="h2" size="h2" className="mb-4">
              <span className="text-foreground">Discover My </span>
              <span className="text-professional-primary">Tech Portfolio</span>
            </CyberHeading>
            <p className="text-muted-foreground text-lg">
              Explore my digital portfolio with these featured sections, each showcasing different aspects of my technology expertise
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}