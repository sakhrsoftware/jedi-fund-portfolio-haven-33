
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
              className={`px-4 py-2 border border-[#333333] transition-colors ${
                location.pathname === "/about"
                  ? "bg-[#1A1F2C] text-[#C8C8C9] border-[#C8C8C9]"
                  : "text-jedi-white/40 hover:border-[#C8C8C9] hover:text-[#C8C8C9]"
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
