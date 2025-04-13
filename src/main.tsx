
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
