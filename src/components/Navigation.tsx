
import { Link, useLocation } from "react-router-dom";
import { CSSProperties } from "react";

const Navigation = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const linkStyles = "text-xl transition-all duration-700 ease-in-out";
  const touchStyles: CSSProperties = {
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    touchAction: 'manipulation'
  };

  const preventDrag = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  const handleTouch = (e: React.TouchEvent) => {
    e.currentTarget.classList.add('hover:text-white');
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.currentTarget.classList.remove('hover:text-white');
  };

  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          {isAboutPage ? (
            <Link 
              to="/" 
              style={touchStyles}
              onDragStart={preventDrag}
              onTouchStart={handleTouch}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              draggable={false}
              className={`text-xl transition-all duration-700 ease-out text-[#8E9196] hover:text-white font-bold tracking-wider select-none`}
            >
              JEDI
            </Link>
          ) : (
            <Link
              to="/about" 
              style={touchStyles}
              onDragStart={preventDrag}
              onTouchStart={handleTouch}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              draggable={false}
              className="text-[#F1F1F1] text-xl font-bold tracking-wider select-none transition-all duration-700 ease-in-out"
            >
              JEDI
            </Link>
          )}
          <span className="mx-4 text-jedi-white/60">|</span>
          <div>
            <Link
              to="/about"
              style={touchStyles}
              onDragStart={preventDrag}
              onTouchStart={handleTouch}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              draggable={false}
              className={`${linkStyles} ${
                location.pathname === "/about"
                  ? "text-white"
                  : "text-jedi-white/60 hover:text-white"
              } select-none`}
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
