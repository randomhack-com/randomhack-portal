import { useEffect } from "react";
import { motion } from "framer-motion";
import { CyberHeading } from "@/components/CyberHeading";
import { CyberCard } from "@/components/CyberCard";
import { GlowingButton } from "@/components/GlowingButton";
import { FileText, Download, Mail, ExternalLink, Github, Linkedin, Code2, Server as ServerIcon } from "lucide-react";

// Note: Changed Server to ServerIcon to avoid name conflicts, and GitHub to Github (correct casing)

export default function CV() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Curriculum Vitae | RandomHack";
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cyber-black to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cyber-black to-transparent"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-cyber-yellow/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-cyber-yellow/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-cyber-yellow/10 text-cyber-yellow text-sm font-medium rounded-full mb-4">
            Professional Background
          </span>
          <CyberHeading as="h1" variant="yellow" glow="sm" className="mb-4">
            Curriculum Vitae
          </CyberHeading>
          <p className="text-cyber-text-muted text-lg max-w-2xl mx-auto">
            My professional journey, skills, and experience in technology and development
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <GlowingButton variant="yellow" glowing>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </GlowingButton>
            <GlowingButton variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </GlowingButton>
          </div>
        </motion.div>
        
        {/* Main CV Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              <CyberCard className="overflow-hidden">
                <div className="relative h-48 mb-4 -mx-6 -mt-6 overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-yellow/20 to-transparent mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-cyber-yellow/10 border border-cyber-yellow/30 flex items-center justify-center">
                        <span className="text-2xl font-bold text-cyber-yellow">RH</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cyber-text">Random Hacker</h3>
                        <p className="text-cyber-yellow">Technology Enthusiast</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-cyber-yellow">Contact</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-cyber-text-muted">
                        <Mail className="w-4 h-4 mr-3 text-cyber-yellow" />
                        <span>contact@randomhack.com</span>
                      </li>
                      <li className="flex items-center text-cyber-text-muted">
                        <Github className="w-4 h-4 mr-3 text-cyber-yellow" />
                        <span>github.com/randomhack</span>
                      </li>
                      <li className="flex items-center text-cyber-text-muted">
                        <Linkedin className="w-4 h-4 mr-3 text-cyber-yellow" />
                        <span>linkedin.com/in/randomhack</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-cyber-yellow">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Skill name="Python" />
                      <Skill name="JavaScript" />
                      <Skill name="React" />
                      <Skill name="Node.js" />
                      <Skill name="Docker" />
                      <Skill name="Kubernetes" />
                      <Skill name="AWS" />
                      <Skill name="Machine Learning" />
                      <Skill name="3D Printing" />
                      <Skill name="Home Automation" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-cyber-yellow">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">MSc in Computer Science</p>
                        <p className="text-cyber-text-muted text-sm">Tech University, 2015-2017</p>
                      </div>
                      <div>
                        <p className="font-medium">BSc in Computer Engineering</p>
                        <p className="text-cyber-text-muted text-sm">Tech Institute, 2011-2015</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-cyber-yellow">Languages</h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>English</span>
                          <span>Native</span>
                        </div>
                        <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
                          <div className="h-full bg-cyber-yellow w-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Spanish</span>
                          <span>Fluent</span>
                        </div>
                        <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
                          <div className="h-full bg-cyber-yellow w-4/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>German</span>
                          <span>Intermediate</span>
                        </div>
                        <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
                          <div className="h-full bg-cyber-yellow w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-cyber-yellow">Professional Experience</h2>
              
              <div className="space-y-6">
                <ExperienceCard 
                  title="Senior Software Engineer"
                  company="Tech Innovations Inc."
                  period="2020 - Present"
                  description="Leading the development of AI-powered applications, managing a team of 5 developers, and implementing CI/CD pipelines for streamlined deployments."
                  achievements={[
                    "Designed and implemented an ML pipeline that improved prediction accuracy by 30%",
                    "Reduced infrastructure costs by 40% through containerization and cloud optimization",
                    "Led the development of a microservices architecture that improved system reliability"
                  ]}
                  tech={["Python", "TensorFlow", "Kubernetes", "AWS", "React"]}
                  delay={0.1}
                />
                
                <ExperienceCard 
                  title="DevOps Engineer"
                  company="Cloud Solutions Ltd."
                  period="2018 - 2020"
                  description="Responsible for maintaining and improving cloud infrastructure, implementing automation solutions, and ensuring high availability of production systems."
                  achievements={[
                    "Set up a fully automated CI/CD pipeline that reduced deployment time by 70%",
                    "Implemented infrastructure as code practices using Terraform and Ansible",
                    "Achieved 99.99% uptime for critical services through robust monitoring and alerting"
                  ]}
                  tech={["AWS", "Docker", "Terraform", "Ansible", "Jenkins"]}
                  delay={0.2}
                />
                
                <ExperienceCard 
                  title="Software Developer"
                  company="Web Creations Studio"
                  period="2017 - 2018"
                  description="Developed full-stack web applications for clients across various industries, focusing on responsive design and performance optimization."
                  achievements={[
                    "Built a custom e-commerce platform that increased client conversion rates by 25%",
                    "Optimized database queries that improved application performance by 40%",
                    "Implemented responsive design principles that enhanced mobile user experience"
                  ]}
                  tech={["JavaScript", "React", "Node.js", "MongoDB", "Redis"]}
                  delay={0.3}
                />
              </div>
            </section>
            
            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-cyber-yellow">Key Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard 
                  title="AI Code Assistant"
                  description="An LLM-powered tool that helps developers write better code through intelligent suggestions and automated refactoring."
                  link="https://github.com/randomhack/ai-code-assistant"
                  icon={Code2}
                  delay={0.1}
                />
                
                <ProjectCard 
                  title="Home Lab Server Cluster"
                  description="A custom-built home lab setup with multiple servers running virtualized environments for testing and development."
                  link="https://github.com/randomhack/homelab-cluster"
                  icon={ServerIcon}
                  delay={0.2}
                />
                
                <ProjectCard 
                  title="3D Printed Smart Home Controller"
                  description="A custom-designed wall-mounted controller for smart home devices with integrated touch display and sensors."
                  link="https://github.com/randomhack/smart-controller"
                  icon={Code2}
                  delay={0.3}
                />
                
                <ProjectCard 
                  title="Personal Knowledge Base"
                  description="A web application for organizing and searching through personal notes, references, and resources."
                  link="https://github.com/randomhack/knowledge-base"
                  icon={FileText}
                  delay={0.4}
                />
              </div>
            </section>
            
            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-cyber-yellow">Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CertificationCard 
                  title="AWS Solutions Architect"
                  issuer="Amazon Web Services"
                  date="2022"
                  delay={0.1}
                />
                
                <CertificationCard 
                  title="Google Cloud Professional"
                  issuer="Google Cloud"
                  date="2021"
                  delay={0.2}
                />
                
                <CertificationCard 
                  title="Certified Kubernetes Administrator"
                  issuer="Cloud Native Computing Foundation"
                  date="2020"
                  delay={0.3}
                />
                
                <CertificationCard 
                  title="TensorFlow Developer"
                  issuer="Google"
                  date="2019"
                  delay={0.4}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

type SkillProps = {
  name: string;
};

function Skill({ name }: SkillProps) {
  return (
    <span className="inline-block px-2 py-1 bg-cyber-yellow/10 text-cyber-yellow text-xs font-medium rounded border border-cyber-yellow/20">
      {name}
    </span>
  );
}

type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
  delay: number;
};

function ExperienceCard({ title, company, period, description, achievements, tech, delay }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <CyberCard className="border-l-4 border-l-cyber-yellow">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-cyber-yellow">{title}</h3>
            <p className="text-cyber-text-muted">{company}</p>
          </div>
          <span className="inline-block bg-cyber-yellow/10 text-cyber-yellow text-sm px-3 py-1 rounded-full mt-2 md:mt-0">
            {period}
          </span>
        </div>
        
        <p className="text-cyber-text-muted mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-cyber-text">Key Achievements</h4>
          <ul className="list-disc pl-5 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-cyber-text-muted">{achievement}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span 
              key={item}
              className="inline-block px-2 py-1 bg-cyber-dark rounded text-xs font-medium text-cyber-text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </CyberCard>
    </motion.div>
  );
}

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  delay: number;
};

function ProjectCard({ title, description, link, icon: Icon, delay }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <CyberCard className="h-full">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-md flex items-center justify-center mb-4 bg-cyber-yellow/10">
            <Icon className="w-6 h-6 text-cyber-yellow" />
          </div>

          <h3 className="text-lg font-bold mb-2 text-cyber-yellow">
            {title}
          </h3>

          <p className="text-sm text-cyber-text-muted mb-4">{description}</p>
          
          <div className="mt-auto">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-cyber-yellow hover:text-cyber-yellow/80 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </CyberCard>
    </motion.div>
  );
}

type CertificationCardProps = {
  title: string;
  issuer: string;
  date: string;
  delay: number;
};

function CertificationCard({ title, issuer, date, delay }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <CyberCard className="border border-cyber-yellow/20 bg-cyber-yellow/5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-cyber-yellow mb-1">{title}</h3>
            <p className="text-sm text-cyber-text-muted">{issuer}</p>
          </div>
          <span className="text-sm text-cyber-yellow">{date}</span>
        </div>
      </CyberCard>
    </motion.div>
  );
}
