
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CyberHeading } from "@/components/CyberHeading";
import { CyberCard } from "@/components/CyberCard";
import { GlowingButton } from "@/components/GlowingButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Cpu, 
  Layers, 
  Printer, 
  Settings, 
  ExternalLink, 
  DownloadCloud,
  GalleryHorizontal,
  GanttChartSquare,
  GaugeCircle
} from "lucide-react";

export default function PrinterProjects() {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "3D Printer Projects | RandomHack";
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cyber-black to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cyber-black to-transparent"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-cyber-purple/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-cyber-purple/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-cyber-purple/10 text-cyber-purple text-sm font-medium rounded-full mb-4">
            3D Printing Workshop
          </span>
          <CyberHeading as="h1" variant="purple" glow="sm" className="mb-4">
            3D Printer Projects
          </CyberHeading>
          <p className="text-cyber-text-muted text-lg max-w-2xl mx-auto">
            Explore my collection of 3D printing projects, from practical designs to cyberpunk props and smart home accessories.
          </p>
        </motion.div>
        
        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="mb-20"
        >
          <CyberCard variant="glowPurple" className="overflow-hidden" size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-cyber-purple/20">
                <div className="absolute inset-0 bg-cyber-grid opacity-20 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1631196511550-e32e18390856?q=80&w=1000" 
                  alt="Smart Home Control Panel" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 z-20">
                  <span className="px-3 py-1 bg-cyber-purple text-black text-sm font-medium rounded-full">
                    Featured Project
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-cyber-purple mb-2">
                    Smart Home Control Panel
                  </h2>
                  <p className="text-cyber-text-muted">
                    A wall-mounted smart home control center with modular components for controlling lights, temperature, and other IoT devices.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <p className="text-sm text-cyber-text-muted">Printer</p>
                    <p className="text-sm font-medium">Prusa i3 MK3S+</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-cyber-text-muted">Material</p>
                    <p className="text-sm font-medium">PLA / PETG</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-cyber-text-muted">Print Time</p>
                    <p className="text-sm font-medium">12 hours</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-cyber-text-muted">Difficulty</p>
                    <p className="text-sm font-medium">Intermediate</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <GlowingButton variant="purple">
                    <DownloadCloud className="w-4 h-4 mr-2" />
                    Download STL Files
                  </GlowingButton>
                  <GlowingButton variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project Details
                  </GlowingButton>
                </div>
              </div>
            </div>
          </CyberCard>
        </motion.div>
        
        {/* Project Gallery */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-2">Project Gallery</h2>
              <p className="text-cyber-text-muted">Browse through my collection of 3D printing projects</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 md:mt-0"
            >
              {/* IMPORTANT FIX: Moved TabsList into the Tabs component */}
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="bg-cyber-dark/50 border border-cyber-border">
                  <TabsTrigger value="all" className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="functional" className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple">
                    Functional
                  </TabsTrigger>
                  <TabsTrigger value="decorative" className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple">
                    Decorative
                  </TabsTrigger>
                  <TabsTrigger value="gadgets" className="data-[state=active]:bg-cyber-purple/20 data-[state=active]:text-cyber-purple">
                    Gadgets
                  </TabsTrigger>
                </TabsList>
                
                {/* IMPORTANT FIX: Moved TabsContent components inside the Tabs component */}
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                      <ProjectCard 
                        key={project.title}
                        {...project}
                        delay={0.1 + index * 0.1}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="functional" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter(project => project.category === "Functional")
                      .map((project, index) => (
                        <ProjectCard 
                          key={project.title}
                          {...project}
                          delay={0.1 + index * 0.1}
                        />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="decorative" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter(project => project.category === "Decorative")
                      .map((project, index) => (
                        <ProjectCard 
                          key={project.title}
                          {...project}
                          delay={0.1 + index * 0.1}
                        />
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="gadgets" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects
                      .filter(project => project.category === "Gadget")
                      .map((project, index) => (
                        <ProjectCard 
                          key={project.title}
                          {...project}
                          delay={0.1 + index * 0.1}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
        
        {/* Resources Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-cyber-purple/10 text-cyber-purple text-sm font-medium rounded-full mb-4">
              3D Printing Resources
            </span>
            <h2 className="text-2xl font-bold mb-4">Helpful Resources</h2>
            <p className="text-cyber-text-muted">
              Tools, guides and resources to help you with your 3D printing projects
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ResourceCard
              icon={GalleryHorizontal}
              title="Model Repositories"
              links={[
                { text: "Thingiverse", href: "#" },
                { text: "Printables", href: "#" },
                { text: "MyMiniFactory", href: "#" },
                { text: "Cults3D", href: "#" },
              ]}
              delay={0.1}
            />
            
            <ResourceCard
              icon={GanttChartSquare}
              title="Slicing Software"
              links={[
                { text: "PrusaSlicer", href: "#" },
                { text: "Cura", href: "#" },
                { text: "Simplify3D", href: "#" },
                { text: "IdeaMaker", href: "#" },
              ]}
              delay={0.2}
            />
            
            <ResourceCard
              icon={GaugeCircle}
              title="Calibration Tools"
              links={[
                { text: "Temperature Tower", href: "#" },
                { text: "Retraction Test", href: "#" },
                { text: "Calibration Cube", href: "#" },
                { text: "Bed Leveling Guide", href: "#" },
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

type ProjectCardProps = {
  title: string;
  category: string;
  difficulty: string;
  image: string;
  delay: number;
};

import { memo } from "react";

const ProjectCard = memo(function ProjectCard({ title, category, difficulty, image, delay }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <CyberCard
        className="overflow-hidden group h-full"
        variant="glowPurple"
        hoverEffect
      >
        <a href="#" className="block h-full">
          <div className="relative h-48 mb-4 overflow-hidden rounded">
            <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-transparent mix-blend-overlay"></div>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 to-transparent"></div>
            <div className="absolute bottom-3 left-3 flex gap-2">
              <span className="px-2 py-1 text-xs font-medium rounded bg-cyber-purple/20 text-cyber-purple">
                {category}
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded bg-cyber-dark/70 text-cyber-text-muted border border-cyber-border/50">
                {difficulty}
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-cyber-purple group-hover:text-cyber-purple">
            {title}
          </h3>
          
          <div className="flex items-center text-sm text-cyber-text-muted">
            <DownloadCloud className="w-4 h-4 mr-1.5 text-cyber-purple" />
            <span>Download files</span>
          </div>
        </a>
      </CyberCard>
    </motion.div>
  );
});

type ResourceCardProps = {
  icon: React.ElementType;
  title: string;
  links: { text: string; href: string }[];
  delay: number;
};

function ResourceCard({ icon: Icon, title, links, delay }: ResourceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <CyberCard className="h-full">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-md flex items-center justify-center mb-4 bg-cyber-purple/10">
            <Icon className="w-6 h-6 text-cyber-purple" />
          </div>

          <h3 className="text-lg font-bold mb-4 text-cyber-purple">
            {title}
          </h3>

          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.text}>
                <a 
                  href={link.href}
                  className="text-cyber-text-muted hover:text-cyber-purple flex items-center text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-2 opacity-70" />
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CyberCard>
    </motion.div>
  );
}

const projects = [
  {
    title: "Modular Desktop Organizer",
    category: "Functional",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1611117775350-ac3950990985?w=800&auto=format&fit=crop"
  },
  {
    title: "Cyberpunk Desk Lamp",
    category: "Decorative",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1556742503-13a5fa49a0b5?w=800&auto=format&fit=crop"
  },
  {
    title: "Raspberry Pi NAS Case",
    category: "Functional",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b95?w=800&auto=format&fit=crop"
  },
  {
    title: "Mechanical Keyboard Case",
    category: "Gadget",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1595225476474-5fe5f987e9b3?w=800&auto=format&fit=crop"
  },
  {
    title: "Cyberpunk City Diorama",
    category: "Decorative",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1579532536935-619928decd08?w=800&auto=format&fit=crop"
  },
  {
    title: "Phone Amplifier Stand",
    category: "Gadget",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1609146580742-e2d29c7aa24a?w=800&auto=format&fit=crop"
  }
];
