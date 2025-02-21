
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-end pr-8">
          <div>
            <Link
              to="/about"
              className={`px-6 py-[10px] border transition-all duration-300 rounded-lg ${
                location.pathname === "/about"
                  ? "bg-jedi-dark text-[#C8C8C9] border-[#C8C8C9]"
                  : "text-jedi-white/60 border-[#555555] hover:border-white/20 hover:text-white/90 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-black/20"
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
