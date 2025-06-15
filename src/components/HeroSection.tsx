import { memo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Terminal, Cpu, HomeIcon, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingButton } from "@/components/GlowingButton";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "default" | "primary" | "secondary" | "accent" | "orange";
  description: string;
}

const navItems: NavItem[] = [
  {
    title: "LLM Playground",
    href: "/llm-playground",
    icon: Terminal,
    color: "primary",
    description: "Experiment with AI models and build applications"
  },
  {
    title: "3D Printer Projects",
    href: "/3d-printer",
    icon: Cpu,
    color: "secondary",
    description: "Explore 3D printing designs and tutorials"
  },
  {
    title: "Home Lab",
    href: "/home-lab",
    icon: HomeIcon,
    color: "accent", 
    description: "Server setups, networking, and automation"
  },
  {
    title: "CV",
    href: "/cv",
    icon: FileText,
    color: "orange",
    description: "Professional experience and skills"
  }
];

const HeroSectionComponent = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          border: "border-professional-primary/20",
          bg: "bg-professional-primary/5",
          text: "text-professional-primary",
          icon: "text-professional-primary",
          hover: "hover:border-professional-primary/40 hover:bg-professional-primary/10"
        };
      case "secondary":
        return {
          border: "border-professional-secondary/20",
          bg: "bg-professional-secondary/5",
          text: "text-professional-secondary",
          icon: "text-professional-secondary",
          hover: "hover:border-professional-secondary/40 hover:bg-professional-secondary/10"
        };
      case "accent":
        return {
          border: "border-professional-accent/20",
          bg: "bg-professional-accent/5",
          text: "text-professional-accent",
          icon: "text-professional-accent",
          hover: "hover:border-professional-accent/40 hover:bg-professional-accent/10"
        };
      case "orange":
        return {
          border: "border-professional-orange/20",
          bg: "bg-professional-orange/5",
          text: "text-professional-orange",
          icon: "text-professional-orange",
          hover: "hover:border-professional-orange/40 hover:bg-professional-orange/10"
        };
      default:
        return {
          border: "border-border",
          bg: "bg-muted/50",
          text: "text-foreground",
          icon: "text-muted-foreground",
          hover: "hover:border-border hover:bg-muted"
        };
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-professional-primary/5 via-professional-secondary/5 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-[200px] bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 opacity-30 professional-grid"></div>
        
        {/* Animated elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-professional-primary/10 rounded-full filter blur-[60px] animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-professional-secondary/10 rounded-full filter blur-[80px] animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-professional-accent/10 rounded-full filter blur-[50px] animate-[float_6s_ease-in-out_infinite]"></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-32 md:pt-40 lg:pt-48 pb-16 flex flex-col items-center justify-center flex-1 z-10 relative">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-professional-primary/10 text-professional-primary border border-professional-primary/20 mb-4">
              Welcome to RandomHack
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight relative z-10"
          >
            <span className="text-professional-primary">Tech</span>{" "}
            <span className="text-professional-secondary">Innovation</span>{" "}
            <span className="text-foreground">Hub</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A professional showcase of technology projects, AI experiments,
            3D printing innovations, and infrastructure solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <GlowingButton size="lg" variant="default">
              Explore Projects
            </GlowingButton>
            <GlowingButton variant="outline" size="lg">
              About Me
            </GlowingButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-professional-primary animate-bounce" />
        </motion.div>
      </div>

      {/* Navigation cards */}
      <div className="container mx-auto px-4 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {navItems.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <Link
                key={item.title}
                to={item.href}
                className={`group relative overflow-hidden bg-card border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 shadow-professional hover:shadow-professional-lg ${colors.border} ${colors.bg} ${colors.hover}`}
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${colors.bg}`}>
                    <item.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-2 ${colors.text}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  <div className={`inline-flex items-center text-sm font-medium transition-colors ${colors.text}`}>
                    <span>Explore</span>
                    <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

const HeroSection = memo(HeroSectionComponent);
export default HeroSection;