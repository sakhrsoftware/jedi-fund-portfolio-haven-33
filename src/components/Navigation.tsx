
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const isAboutPage = location.pathname === "/about";

  const linkStyles = "text-xl transition-all duration-700 ease-in-out";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-black dark:bg-black bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isAboutPage ? (
              <Link
                to="/"
                className={`text-xl transition-all duration-700 ease-out text-[#8E9196] hover:text-black dark:hover:text-white font-bold tracking-wider`}
              >
                JEDI
              </Link>
            ) : (
              <span className="text-black dark:text-[#F1F1F1] text-xl font-bold tracking-wider">
                JEDI
              </span>
            )}
            <span className="mx-4 text-black/60 dark:text-jedi-white/60">|</span>
            <Link
              to="/about"
              className={`${linkStyles} ${
                location.pathname === "/about"
                  ? "text-black dark:text-white"
                  : "text-black/60 dark:text-jedi-white/60 hover:text-black dark:hover:text-white"
              }`}
            >
              about
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-[2.3rem] w-[2.3rem] text-black dark:text-white hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
