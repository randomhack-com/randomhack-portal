
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CyberHeading } from "@/components/CyberHeading";
import { CyberCard } from "@/components/CyberCard";
import { GlowingButton } from "@/components/GlowingButton";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Send, ChevronsUpDown, Cpu, BrainCircuit, Code2, MessagesSquare } from "lucide-react";

export default function LLMPlayground() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState("gpt-4o");
  const [temperature, setTemperature] = useState([0.7]);
  
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "LLM Playground | RandomHack";
  }, []);

  // Simulates the AI response with a typing effect
  const simulateResponse = (text: string) => {
    setIsLoading(true);
    setResponse("");
    
    const fullResponse = "This is a simulated AI response to your prompt. In a live implementation, this would connect to an AI service like OpenAI, Anthropic Claude, or other LLM providers.\n\nYour prompt would be processed by the selected model and parameters, and the response would stream back in real-time.\n\nIn a complete implementation, this playground would include:\n\n- API key configuration\n- Multiple model options\n- Advanced parameters\n- Conversation history\n- Ability to save conversations\n- Various prompt templates\n- Code syntax highlighting\n- Markdown rendering";
    
    let i = 0;
    const typing = setInterval(() => {
      setResponse((prev) => prev + fullResponse[i]);
      i++;
      if (i === fullResponse.length) {
        clearInterval(typing);
        setIsLoading(false);
      }
      
      // Auto-scroll to bottom of response
      if (responseRef.current) {
        responseRef.current.scrollTop = responseRef.current.scrollHeight;
      }
    }, 20);
    
    return () => clearInterval(typing);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() === "" || isLoading) return;
    
    simulateResponse(prompt);
  };

  return (
    <main className="min-h-screen pt-24 pb-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-cyber-black to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cyber-black to-transparent"></div>
        <div className="absolute top-40 left-10 w-64 h-64 bg-cyber-blue/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 bg-cyber-blue/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 bg-cyber-blue/10 text-cyber-blue text-sm font-medium rounded-full mb-4">
            Natural Language Processing
          </span>
          <CyberHeading as="h1" variant="blue" glow="sm" className="mb-4">
            LLM Playground
          </CyberHeading>
          <p className="text-cyber-text-muted text-lg max-w-2xl mx-auto">
            Experiment with state-of-the-art language models. Enter your prompt below and see how different models and parameters affect the output.
          </p>
        </motion.div>
        
        {/* Main Playground */}
        <div className="max-w-6xl mx-auto">
          <CyberCard 
            variant="glow" 
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-4 xl:col-span-3">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-cyber-blue">Model</h3>
                    <Select value={model} onValueChange={setModel}>
                      <SelectTrigger className="bg-cyber-black/50 border-cyber-border">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyber-dark border-cyber-border">
                        <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                        <SelectItem value="gpt-4">GPT-4 Turbo</SelectItem>
                        <SelectItem value="claude-3">Claude 3 Opus</SelectItem>
                        <SelectItem value="llama-3">Llama 3</SelectItem>
                        <SelectItem value="mistral">Mistral Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-cyber-blue">Temperature</h3>
                      <span className="text-sm text-cyber-text-muted">{temperature[0]}</span>
                    </div>
                    <Slider
                      value={temperature}
                      min={0}
                      max={2}
                      step={0.1}
                      onValueChange={setTemperature}
                      className="py-1"
                    />
                    <div className="flex justify-between text-xs text-cyber-text-muted">
                      <span>Precise</span>
                      <span>Creative</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-cyber-blue">Templates</h3>
                    <div className="space-y-2">
                      <PromptTemplate 
                        icon={<Code2 className="w-4 h-4" />}
                        title="Code Generation"
                        description="Generate code based on requirements"
                        onClick={() => setPrompt("Write a function in JavaScript that...")}
                      />
                      <PromptTemplate 
                        icon={<BrainCircuit className="w-4 h-4" />}
                        title="Explain Concept"
                        description="Explain a complex topic simply"
                        onClick={() => setPrompt("Explain quantum computing as if I'm 10 years old")}
                      />
                      <PromptTemplate 
                        icon={<MessagesSquare className="w-4 h-4" />}
                        title="Creative Writing"
                        description="Generate creative content"
                        onClick={() => setPrompt("Write a short cyberpunk story about...")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Chat Area */}
              <div className="lg:col-span-8 xl:col-span-9 flex flex-col">
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  <div className="flex-grow mb-4 bg-cyber-black/30 border border-cyber-border rounded-lg p-4 overflow-y-auto max-h-[400px]" ref={responseRef}>
                    {response ? (
                      <div className="text-cyber-text whitespace-pre-wrap">{response}</div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-cyber-text-muted">
                        <div className="text-center">
                          <BrainCircuit className="w-12 h-12 mx-auto mb-3 text-cyber-blue/50" />
                          <p>AI responses will appear here</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <Textarea
                      placeholder="Enter your prompt here..."
                      className="min-h-[100px] bg-cyber-black/30 border-cyber-border resize-none pr-12"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    <GlowingButton
                      type="submit"
                      variant="blue"
                      className="absolute bottom-2 right-2"
                      disabled={isLoading || !prompt.trim()}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </GlowingButton>
                  </div>
                </form>
              </div>
            </div>
          </CyberCard>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard 
              title="Advanced AI Models"
              description="Access to state-of-the-art language models including GPT-4, Claude, Llama and more"
              icon={BrainCircuit}
              delay={0.1}
            />
            <FeatureCard 
              title="Customizable Parameters"
              description="Fine-tune your results with temperature, top-p sampling, max tokens and more"
              icon={ChevronsUpDown}
              delay={0.2}
            />
            <FeatureCard 
              title="Specialized Templates"
              description="Use pre-built prompts optimized for different tasks and applications"
              icon={Code2}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

type PromptTemplateProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
};

function PromptTemplate({ icon, title, description, onClick }: PromptTemplateProps) {
  return (
    <button
      className="w-full p-2 bg-cyber-black/30 border border-cyber-border rounded flex items-start text-left hover:border-cyber-blue/30 transition-colors"
      onClick={onClick}
    >
      <div className="h-6 w-6 mt-0.5 flex-shrink-0 bg-cyber-blue/10 rounded-sm flex items-center justify-center text-cyber-blue">
        {icon}
      </div>
      <div className="ml-2">
        <p className="text-sm font-medium text-cyber-text">{title}</p>
        <p className="text-xs text-cyber-text-muted">{description}</p>
      </div>
    </button>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
};

import { memo } from "react";

const FeatureCard = memo(function FeatureCard({ title, description, icon: Icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <CyberCard className="h-full">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-md flex items-center justify-center mb-4 bg-cyber-blue/10">
            <Icon className="w-6 h-6 text-cyber-blue" />
          </div>

          <h3 className="text-lg font-bold mb-2 text-cyber-blue">
            {title}
          </h3>

          <p className="text-sm text-cyber-text-muted">{description}</p>
        </div>
      </CyberCard>
    </motion.div>
  );
});
