
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const linkStyles = "text-xl transition-all duration-700 ease-in-out";
  const hoverSpotlight = "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:text-white";

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          {isAboutPage ? (
            <Link to="/" className={`text-xl transition-all duration-500 ease-in-out text-[#8E9196] ${hoverSpotlight} rounded-lg px-2 font-bold tracking-wider`}>
              JEDI
            </Link>
          ) : (
            <span className="text-[#F1F1F1] text-xl font-bold tracking-wider">
              JEDI
            </span>
          )}
          <span className="mx-4 text-jedi-white/60">|</span>
          <div>
            <Link
              to="/about"
              className={`${linkStyles} ${
                location.pathname === "/about"
                  ? "text-white"
                  : `text-jedi-white/60 ${hoverSpotlight} rounded-lg px-2`
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
