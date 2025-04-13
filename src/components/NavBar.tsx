
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Home, FileText, Menu, X } from "lucide-react";
import { GlowingButton } from "./ui/GlowingButton"; // Assuming this is not used, might need cleanup later
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
  color: "default" | "blue" | "purple" | "green" | "yellow";
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
    color: "blue"
  },
  {
    title: "3D Printer Projects",
    href: "/3d-printer",
    icon: Cpu,
    color: "purple"
  },
  {
    title: "Home Lab",
    href: "/home-lab",
    icon: Cpu,
    color: "green"
  },
  {
    title: "CV",
    href: "/cv",
    icon: FileText,
    color: "yellow"
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cyber-black/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-cyber-primary to-cyber-blue rounded-sm flex items-center justify-center transform group-hover:rotate-[5deg] transition-transform">
              <span className="font-bold text-cyber-black text-lg">R</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary to-cyber-blue rounded-sm opacity-50 blur-md group-hover:opacity-80 transition-opacity"></div>
          </div>
          <span className="text-xl font-bold cyber-gradient-text">RandomHack</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center"> {/* Removed space-x-1 here */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "relative px-3 py-1.5 rounded-md text-sm font-medium transition-all",
                location.pathname === item.href
                  ? `text-cyber-${item.color === "default" ? "primary" : item.color} border border-cyber-${
                      item.color === "default" ? "primary" : item.color
                    }/30`
                  : "text-cyber-text-muted hover:text-cyber-text"
              )}
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              <div className="flex items-center gap-1.5">
                <item.icon
                  className={cn(
                    "w-4 h-4",
                    location.pathname === item.href && `text-cyber-${item.color === "default" ? "primary" : item.color}`
                  )}
                  aria-hidden="true"
                />
                {item.title}
              </div>
              {location.pathname === item.href && (
                <span className="absolute inset-0 rounded-md bg-cyber-dark/30 -z-10 animate-pulse"></span>
              )}
            </Link>
          ))}
          <div className="ml-4"> {/* Add margin to separate from nav links */}
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center text-gray-300 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-cyber-primary" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-cyber-black/95 backdrop-blur-lg transform transition-transform duration-300 pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 text-xl font-medium transition-all py-2 px-6",
                location.pathname === item.href
                  ? `text-cyber-${item.color === "default" ? "primary" : item.color}`
                  : "text-cyber-text-muted"
              )}
              aria-current={location.pathname === item.href ? "page" : undefined}
            >
              <item.icon
                className={cn(
                  "w-6 h-6",
                  location.pathname === item.href && `text-cyber-${item.color === "default" ? "primary" : item.color}`
                )}
                aria-hidden="true"
              />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
