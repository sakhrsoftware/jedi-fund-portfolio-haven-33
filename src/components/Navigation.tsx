
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-end pr-8">
          <div>
            <Link
              to="/about"
              className={`text-lg font-medium transition-colors hover:text-[#C8C8C9] ${
                location.pathname === "/about" ? "text-[#C8C8C9]" : "text-jedi-white/40"
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
