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
    document.title = "RandomHack - Professional Technology Portfolio";
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-background professional-grid"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-professional-primary/5 via-professional-secondary/5 to-transparent opacity-70"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection />
        
        {/* About Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-muted/30 z-0"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-muted/30 z-0"></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-transparent to-muted/30 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-professional-primary/20 to-professional-secondary/20 rounded-lg blur-xl opacity-70"></div>
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-card shadow-professional-lg">
                    <div className="absolute inset-0 professional-grid opacity-30"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-professional-primary/10 to-professional-secondary/5"></div>
                    <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full w-20 h-20 bg-background/80 backdrop-blur-sm flex items-center justify-center border border-professional-primary/30 shadow-professional">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-professional-primary to-professional-secondary flex items-center justify-center">
                          <div className="text-white text-3xl font-bold">R</div>
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
                <span className="inline-block px-4 py-1.5 bg-professional-primary/10 text-professional-primary text-sm font-medium rounded-full border border-professional-primary/20">
                  About RandomHack
                </span>
                <CyberHeading as="h2" size="h2" className="mb-4">
                  <span className="text-foreground">Exploring the </span>
                  <span className="text-professional-primary">Digital Frontier</span>
                </CyberHeading>
                <p className="text-muted-foreground">
                  Welcome to my professional technology portfolio where innovation meets practical application. I'm passionate about AI, 3D printing, infrastructure automation, and building scalable solutions.
                </p>
                <p className="text-muted-foreground">
                  This platform serves as both my professional showcase and a knowledge hub for sharing projects, insights, and technical expertise across various technology domains.
                </p>
                <div className="pt-4">
                  <GlowingButton variant="default">
                    Learn More About Me
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Latest Projects Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 professional-grid opacity-20 pointer-events-none"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-muted/30 to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-1.5 bg-professional-accent/10 text-professional-accent text-sm font-medium rounded-full mb-4 border border-professional-accent/20">
                  Latest Projects
                </span>
                <CyberHeading as="h2" size="h2" className="mb-4">
                  <span className="text-foreground">Recent </span>
                  <span className="text-professional-accent">Innovations</span>
                </CyberHeading>
                <p className="text-muted-foreground text-lg">
                  Check out some of my recent projects and experiments across different technology domains
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="AI-Powered Code Assistant" 
                category="LLM Project"
                image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop"
                delay={0.1}
                color="primary"
                href="/llm-playground"
              />
              <ProjectCard 
                title="Smart Home Control Panel" 
                category="3D Printing"
                image="https://images.unsplash.com/photo-1581092335397-9583eb92fd77?w=800&auto=format&fit=crop"
                delay={0.2}
                color="secondary"
                href="/3d-printer"
              />
              <ProjectCard 
                title="Infrastructure Automation" 
                category="Home Lab"
                image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop"
                delay={0.3}
                color="accent"
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
  color: "primary" | "secondary" | "accent" | "default";
  href: string;
};

function ProjectCard({ title, category, image, delay, color, href }: ProjectCardProps) {
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
          badge: "bg-professional-primary/20 text-professional-primary",
          title: "text-professional-primary",
          arrow: "text-professional-primary"
        };
      case "secondary":
        return {
          badge: "bg-professional-secondary/20 text-professional-secondary",
          title: "text-professional-secondary",
          arrow: "text-professional-secondary"
        };
      case "accent":
        return {
          badge: "bg-professional-accent/20 text-professional-accent",
          title: "text-professional-accent",
          arrow: "text-professional-accent"
        };
      default:
        return {
          badge: "bg-muted text-muted-foreground",
          title: "text-foreground",
          arrow: "text-muted-foreground"
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
        className="overflow-hidden group h-full"
        variant={getVariant()}
        hoverEffect
      >
        <a href={href} className="block h-full">
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
            <div className="absolute inset-0 professional-grid opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-professional-primary/10 to-professional-secondary/5 mix-blend-overlay"></div>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-3 left-3">
              <span className={`px-2 py-1 text-xs font-medium rounded ${colors.badge}`}>
                {category}
              </span>
            </div>
          </div>
          
          <h3 className={`text-xl font-semibold mb-3 ${colors.title} group-hover:${colors.title}`}>
            {title}
          </h3>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="mr-2">View Project</span>
            <ChevronDown className={`w-4 h-4 rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1 ${colors.arrow}`} />
          </div>
        </a>
      </CyberCard>
    </motion.div>
  );
}