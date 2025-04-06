
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
  color: "default" | "blue" | "purple" | "green" | "yellow";
  delay: number;
  href: string;
};

function FeatureCard({ title, description, icon: Icon, color, delay, href }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <CyberCard
        variant={color === "default" ? "glowPink" : color === "blue" ? "glow" : color === "purple" ? "glowPurple" : "default"}
        className="h-full"
        hoverEffect
      >
        <div className="flex flex-col h-full">
          <div
            className={`w-12 h-12 rounded-md flex items-center justify-center mb-4 bg-cyber-${
              color === "default" ? "primary" : color
            }/10`}
          >
            <Icon className={`w-6 h-6 text-cyber-${color === "default" ? "primary" : color}`} />
          </div>

          <h3 className={`text-xl font-bold mb-2 text-cyber-${color === "default" ? "primary" : color}`}>
            {title}
          </h3>

          <p className="text-cyber-text-muted mb-6">{description}</p>

          <div className="mt-auto">
            <Link to={href}>
              <GlowingButton
                variant={color}
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
}

export default function FeatureSection() {
  const features = [
    {
      title: "LLM Playground",
      description: "Experiment with AI language models, build chatbots, and explore the cutting edge of natural language processing.",
      icon: Terminal,
      color: "blue" as const,
      href: "/llm-playground",
      delay: 0.1
    },
    {
      title: "3D Printer Projects",
      description: "Discover 3D printing designs, tutorials, and projects for your home or office space.",
      icon: Cpu,
      color: "purple" as const,
      href: "/3d-printer",
      delay: 0.2
    },
    {
      title: "Home Lab",
      description: "Learn about home server setups, networking, and automation for your personal tech infrastructure.",
      icon: HomeIcon,
      color: "green" as const,
      href: "/home-lab",
      delay: 0.3
    },
    {
      title: "Curriculum Vitae",
      description: "View my professional background, skills, and experience in technology and development.",
      icon: FileText,
      color: "yellow" as const,
      href: "/cv",
      delay: 0.4
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-cyber-black to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cyber-black to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-cyber-blue/10 text-cyber-blue text-sm font-medium rounded-full mb-4">
              Explore the Digital Frontier
            </span>
            <CyberHeading as="h2" size="h2" className="mb-4">
              <span className="text-cyber-text">Discover My </span>
              <span className="text-cyber-primary">Tech Universe</span>
            </CyberHeading>
            <p className="text-cyber-text-muted text-lg">
              Explore my digital realm with these featured sections, each showcasing different aspects of my technology journey
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
