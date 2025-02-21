
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-black border-b border-[#333333]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between pr-8">
          <Link to="/" className="text-2xl font-semibold text-white hover:text-jedi-white/80 transition-colors">
            JEDI
          </Link>
          <div>
            <Link
              to="/about"
              className={`text-lg font-medium transition-colors hover:text-white ${
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
