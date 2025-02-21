
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-[#C8C8C9] text-xl font-bold tracking-wider">
            JEDI
          </Link>
          <div className="pr-8">
            <Link
              to="/about"
              className={`text-lg transition-all duration-300 ${
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
