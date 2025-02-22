
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          {isAboutPage ? (
            <Link to="/" className="text-[#8E9196] text-xl font-bold tracking-wider transition-colors duration-300 hover:text-jedi-white/60">
              JEDI
            </Link>
          ) : (
            <span className="text-white text-xl font-bold tracking-wider">
              JEDI
            </span>
          )}
          <span className="mx-4 text-jedi-white/60">|</span>
          <div>
            <Link
              to="/about"
              className={`text-xl transition-all duration-300 ${
                location.pathname === "/about"
                  ? "text-[#C8C8C9]"
                  : "text-jedi-white/60 hover:text-white"
              }`}
            >
              about
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
