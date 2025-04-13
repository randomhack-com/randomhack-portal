
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const LLMPlayground = lazy(() => import("./pages/LLMPlayground"));
const PrinterProjects = lazy(() => import("./pages/PrinterProjects"));
const HomeLab = lazy(() => import("./pages/HomeLab"));
const CV = lazy(() => import("./pages/CV"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-cyber-black">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/llm-playground" element={<LLMPlayground />} />
            <Route path="/3d-printer" element={<PrinterProjects />} />
            <Route path="/home-lab" element={<HomeLab />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      
      {/* Global UI elements */}
      <Toaster />
      <SonnerToaster />
      
      {/* Global scanline effect */}
      <div className="scanline pointer-events-none"></div>
      <Analytics /> {/* Add Vercel Analytics component */}
    </>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-cyber-blue/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-cyber-blue border-l-transparent border-r-transparent border-b-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-3 bg-cyber-black/80 rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
