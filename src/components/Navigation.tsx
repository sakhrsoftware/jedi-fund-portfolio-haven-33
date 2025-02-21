
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-semibold text-white hover:text-jedi-white/80 transition-colors">
            JEDI
          </Link>
          <div>
            <Link
              to="/about"
              className={`text-lg font-medium transition-colors hover:text-jedi-white/80 ${
                location.pathname === "/about" ? "text-white" : "text-jedi-white/60"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
