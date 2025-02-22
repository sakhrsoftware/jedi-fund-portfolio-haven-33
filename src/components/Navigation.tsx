
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
    const target = e.currentTarget;
    target.classList.add('active');
    
    // Find the other link and dim it
    const nav = target.closest('nav');
    if (nav) {
      const links = nav.querySelectorAll('a');
      links.forEach(link => {
        if (link !== target) {
          link.classList.add('dimmed');
        }
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const target = e.currentTarget;
    target.classList.remove('active');
    
    // Reset the other link
    const nav = target.closest('nav');
    if (nav) {
      const links = nav.querySelectorAll('a');
      links.forEach(link => {
        link.classList.remove('dimmed');
      });
    }
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
              onTouchMove={handleTouch}
              draggable={false}
              className={`text-xl transition-colors duration-700 ease-in-out text-[#8E9196] font-bold tracking-wider select-none [&.active]:text-white [&.dimmed]:text-[#8E9196]`}
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
              onTouchMove={handleTouch}
              draggable={false}
              className="text-[#F1F1F1] text-xl font-bold tracking-wider select-none transition-colors duration-700 ease-in-out [&.active]:text-white [&.dimmed]:text-[#8E9196]"
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
              onTouchMove={handleTouch}
              draggable={false}
              className={`${linkStyles} ${
                location.pathname === "/about"
                  ? "text-white"
                  : "text-jedi-white/60 [&.active]:text-white [&.dimmed]:text-[#8E9196]"
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
