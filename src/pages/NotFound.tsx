
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-cyber-primary">404</h1>
        <p className="text-xl text-cyber-text mb-4">Oops! Page not found</p>
        <Link to="/" className="text-cyber-blue hover:text-cyber-blue/80 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
