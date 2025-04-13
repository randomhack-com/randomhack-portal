import { memo } from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer className="mt-24 border-t border-cyber-border bg-cyber-black/80 backdrop-blur-md py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-cyber-primary to-cyber-blue rounded-sm flex items-center justify-center">
                  <span className="font-bold text-cyber-black text-lg">R</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary to-cyber-blue rounded-sm opacity-50 blur-md"></div>
              </div>
              <span className="text-xl font-bold cyber-gradient-text">RandomHack</span>
            </div>
            <p className="text-sm text-cyber-text-muted">
              Exploring technology through experimentation, projects, and learning.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-cyber-text-muted hover:text-cyber-blue transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-cyber-text-muted hover:text-cyber-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-cyber-text-muted hover:text-cyber-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-cyber-text-muted hover:text-cyber-green transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-cyber-text">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-cyber-text-muted hover:text-cyber-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/llm-playground"
                  className="text-sm text-cyber-text-muted hover:text-cyber-blue transition-colors"
                >
                  LLM Playground
                </Link>
              </li>
              <li>
                <Link
                  to="/3d-printer"
                  className="text-sm text-cyber-text-muted hover:text-cyber-purple transition-colors"
                >
                  3D Printer Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/home-lab"
                  className="text-sm text-cyber-text-muted hover:text-cyber-green transition-colors"
                >
                  Home Lab
                </Link>
              </li>
              <li>
                <Link
                  to="/cv"
                  className="text-sm text-cyber-text-muted hover:text-cyber-yellow transition-colors"
                >
                  CV
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-cyber-text">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-cyber-text-muted hover:text-cyber-blue transition-colors"
                >
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cyber-text-muted hover:text-cyber-blue transition-colors"
                >
                  3D Model Archive
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cyber-text-muted hover:text-cyber-blue transition-colors"
                >
                  Server Setup Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cyber-text-muted hover:text-cyber-blue transition-colors"
                >
                  Recommended Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4 text-cyber-text">Contact</h3>
            <ul className="space-y-2 text-sm text-cyber-text-muted">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-cyber-blue" />
                <span>contact@randomhack.com</span>
              </li>
              <li>
                <p className="mt-4">
                  Subscribe to my newsletter for updates on new projects and tutorials.
                </p>
                <form className="mt-2 flex">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="bg-cyber-dark border border-cyber-border rounded-l-md px-3 py-2 text-sm w-full focus:outline-none focus:border-cyber-blue"
                  />
                  <button
                    type="submit"
                    className="bg-cyber-blue text-black px-3 py-2 text-sm rounded-r-md hover:bg-cyber-blue/90 transition-colors"
                  >
                    Join
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cyber-border text-center text-sm text-cyber-text-muted">
          <p>© {new Date().getFullYear()} RandomHack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(FooterComponent);
