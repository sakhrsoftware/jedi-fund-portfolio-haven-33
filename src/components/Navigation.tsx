
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-[#C8C8C9] text-xl font-bold tracking-wider pt-2">
            JEDI
          </Link>
          <div>
            <Link
              to="/about"
              className={`text-xl transition-all duration-300 pt-2 ${
                location.pathname === "/about"
                  ? "text-[#C8C8C9]"
                  : "text-jedi-white/60 hover:text-white/90"
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
