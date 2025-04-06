
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import { CyberCard } from "@/components/CyberCard";
import { CyberHeading } from "@/components/CyberHeading";
import { GlowingButton } from "@/components/GlowingButton";

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "RandomHack - Neon Hacker Haven Portal";
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cyber-black bg-cyber-grid"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-primary/5 via-cyber-blue/5 to-transparent opacity-70"></div>
        <div className="scanline"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection />
        
        {/* About Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-cyber-black/80 z-0"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-cyber-black/80 z-0"></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-transparent to-cyber-black/80 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyber-primary/20 to-cyber-blue/20 rounded-lg blur-xl opacity-70 animate-pulse"></div>
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-cyber-border/50 bg-cyber-black/50">
                    <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 to-cyber-blue/5"></div>
                    <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-luminosity"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full w-20 h-20 bg-cyber-black/30 backdrop-blur-sm flex items-center justify-center border border-cyber-blue/30">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-blue flex items-center justify-center animate-pulse">
                          <div className="text-cyber-black text-3xl font-bold">R</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <span className="inline-block px-4 py-1.5 bg-cyber-primary/10 text-cyber-primary text-sm font-medium rounded-full">
                  About RandomHack
                </span>
                <CyberHeading as="h2" size="h2" className="mb-4">
                  <span className="text-cyber-text">Exploring the </span>
                  <span className="text-cyber-blue">Digital Frontier</span>
                </CyberHeading>
                <p className="text-cyber-text-muted">
                  Welcome to my digital playground where technology meets creativity. I'm passionate about AI, 3D printing, home lab setups, and pushing the boundaries of what's possible with technology.
                </p>
                <p className="text-cyber-text-muted">
                  This site serves as both my personal portfolio and a hub for sharing projects, tutorials, and experiments across various technology domains.
                </p>
                <div className="pt-4">
                  <GlowingButton variant="blue" glowing>
                    Learn More About Me
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Latest Projects Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-cyber-black/80 to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cyber-black/80 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 bg-cyber-purple/10 text-cyber-purple text-sm font-medium rounded-full mb-4">
                  Latest Projects
                </span>
                <CyberHeading as="h2" size="h2" className="mb-4">
                  <span className="text-cyber-text">Recent </span>
                  <span className="text-cyber-purple">Explorations</span>
                </CyberHeading>
                <p className="text-cyber-text-muted text-lg">
                  Check out some of my recent projects and experiments across different tech domains
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="GPT-powered Code Assistant" 
                category="LLM Project"
                image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop"
                delay={0.1}
                color="blue"
                href="/llm-playground"
              />
              <ProjectCard 
                title="3D Printed Smart Home Controller" 
                category="3D Printing"
                image="https://images.unsplash.com/photo-1581092335397-9583eb92fd77?w=800&auto=format&fit=crop"
                delay={0.2}
                color="purple"
                href="/3d-printer"
              />
              <ProjectCard 
                title="Home Media Server Setup" 
                category="Home Lab"
                image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop"
                delay={0.3}
                color="green"
                href="/home-lab"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  delay: number;
  color: "blue" | "purple" | "green" | "default";
  href: string;
};

function ProjectCard({ title, category, image, delay, color, href }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <CyberCard
        className="overflow-hidden group h-full"
        variant={color === "blue" ? "glow" : color === "purple" ? "glowPurple" : "default"}
        hoverEffect
      >
        <a href={href} className="block h-full">
          <div className="relative h-48 mb-4 overflow-hidden rounded">
            <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
            <div className={`absolute inset-0 bg-gradient-to-br from-cyber-${
              color === "blue" ? "blue" : color === "purple" ? "purple" : "green"
            }/20 to-transparent mix-blend-overlay`}></div>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <span className={`px-2 py-1 text-xs font-medium rounded bg-cyber-${
                color === "blue" ? "blue" : color === "purple" ? "purple" : "green"
              }/20 text-cyber-${
                color === "blue" ? "blue" : color === "purple" ? "purple" : "green"
              }`}>
                {category}
              </span>
            </div>
          </div>
          
          <h3 className={`text-xl font-bold mb-3 text-cyber-${
            color === "blue" ? "blue" : color === "purple" ? "purple" : "green"
          } group-hover:text-cyber-${
            color === "blue" ? "blue" : color === "purple" ? "purple" : "green"
          }`}>
            {title}
          </h3>
          
          <div className="flex items-center text-sm text-cyber-text-muted">
            <span className="mr-2">View Project</span>
            <ChevronDown className={`w-4 h-4 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1 text-cyber-${
              color === "blue" ? "blue" : color === "purple" ? "purple" : "green"
            }`} />
          </div>
        </a>
      </CyberCard>
    </motion.div>
  );
}
