import { memo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Terminal, Cpu, HomeIcon, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowingButton } from "@/components/GlowingButton";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "default" | "blue" | "purple" | "green" | "yellow";
  description: string;
}

const navItems: NavItem[] = [
  {
    title: "LLM Playground",
    href: "/llm-playground",
    icon: Terminal,
    color: "blue",
    description: "Experiment with AI models and build cool applications"
  },
  {
    title: "3D Printer Projects",
    href: "/3d-printer",
    icon: Cpu,
    color: "purple",
    description: "Explore 3D printing designs and tutorials"
  },
  {
    title: "Home Lab",
    href: "/home-lab",
    icon: HomeIcon,
    color: "green", 
    description: "Server setups, networking, and home automation"
  },
  {
    title: "CV",
    href: "/cv",
    icon: FileText,
    color: "yellow",
    description: "Professional experience and skills"
  }
];

const HeroSectionComponent = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Scanline effect */}
      <div className="scanline pointer-events-none"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-cyber-purple/20 via-cyber-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-[200px] bg-gradient-to-t from-cyber-black to-transparent"></div>
        <div className="absolute inset-0 opacity-30 cyber-grid"></div>
        
        {/* Animated glow elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyber-primary/20 rounded-full filter blur-[60px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-cyber-blue/20 rounded-full filter blur-[80px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-cyber-purple/20 rounded-full filter blur-[50px] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyber-primary/5 rounded-full filter blur-[80px] animate-[pulse_10s_ease-in-out_infinite]"></div>
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
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20 mb-4">
              Welcome to RandomHack
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight relative z-10 inline-block"
          >
            <span className="neon-text-blue">Hacker</span>{" "}
            <span className="neon-text-pink">Haven</span>{" "}
            <span className="text-cyber-text">Portal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cyber-text-muted max-w-3xl mx-auto"
          >
            A digital playground for exploring tech projects, AI experiments,
            3D printing, and homelab adventures
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <GlowingButton size="lg" glowing>
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
          <span className="text-cyber-text-muted text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-cyber-blue animate-bounce" />
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
          {navItems.map((item, index) => (
            <Link
              key={item.title}
              to={item.href}
              className={`group relative overflow-hidden bg-cyber-dark/70 border border-cyber-${
                item.color === "default" ? "primary" : item.color
              }/20 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-${
                item.color === "default" ? "primary" : item.color
              }/40 hover:shadow-[0_0_15px_rgba(${
                item.color === "blue" ? "1,200,238" : item.color === "purple" ? "111,0,255" :
                item.color === "green" ? "0,255,159" : "255,42,109"
              },0.2)]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-cyber-${
                item.color === "default" ? "primary" : item.color
              }/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyber-${
                  item.color === "default" ? "primary" : item.color
                }/10 mb-4`}>
                  <item.icon className={`w-6 h-6 text-cyber-${
                    item.color === "default" ? "primary" : item.color
                  }`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 text-cyber-${
                  item.color === "default" ? "primary" : item.color
                }`}>
                  {item.title}
                </h3>
                
                <p className="text-sm text-cyber-text-muted mb-4">
                  {item.description}
                </p>
                
                <div className={`inline-flex items-center text-sm font-medium text-cyber-${
                  item.color === "default" ? "primary" : item.color
                }/80 group-hover:text-cyber-${
                  item.color === "default" ? "primary" : item.color
                } transition-colors`}>
                  <span>Explore</span>
                  <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const HeroSection = memo(HeroSectionComponent);
export default HeroSection;
