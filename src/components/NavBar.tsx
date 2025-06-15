import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Home, FileText, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  color: "default" | "primary" | "secondary" | "accent" | "orange";
};

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
    color: "default"
  },
  {
    title: "LLM Playground",
    href: "/llm-playground",
    icon: Terminal,
    color: "primary"
  },
  {
    title: "3D Printer Projects",
    href: "/3d-printer",
    icon: Cpu,
    color: "secondary"
  },
  {
    title: "Home Lab",
    href: "/home-lab",
    icon: Cpu,
    color: "accent"
  },
  {
    title: "CV",
    href: "/cv",
    icon: FileText,
    color: "orange"
  }
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const getColorClass = (color: string, isActive: boolean) => {
    if (!isActive) return "text-muted-foreground hover:text-foreground";
    
    switch (color) {
      case "primary":
        return "text-professional-primary border border-professional-primary/30 bg-professional-primary/5";
      case "secondary":
        return "text-professional-secondary border border-professional-secondary/30 bg-professional-secondary/5";
      case "accent":
        return "text-professional-accent border border-professional-accent/30 bg-professional-accent/5";
      case "orange":
        return "text-professional-orange border border-professional-orange/30 bg-professional-orange/5";
      default:
        return "text-foreground border border-border/30 bg-muted/50";
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-professional-lg border-b border-border py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-professional-primary to-professional-secondary rounded-md flex items-center justify-center transform group-hover:rotate-3 transition-transform">
              <span className="font-bold text-white text-lg">R</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-professional-primary to-professional-secondary rounded-md opacity-50 blur-sm group-hover:opacity-80 transition-opacity"></div>
          </div>
          <span className="text-xl font-bold professional-text-gradient">RandomHack</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                getColorClass(item.color, location.pathname === item.href)
              )}
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              <div className="flex items-center gap-1.5">
                <item.icon className="w-4 h-4" aria-hidden="true" />
                {item.title}
              </div>
            </Link>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-muted-foreground hover:text-foreground p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transform transition-transform duration-300 pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 text-xl font-medium transition-all py-2 px-6 rounded-lg",
                getColorClass(item.color, location.pathname === item.href)
              )}
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              <item.icon className="w-6 h-6" aria-hidden="true" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}