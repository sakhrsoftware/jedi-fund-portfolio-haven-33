
import { Link } from "react-router-dom";
import useIsMobile from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

const Navigation = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="fixed w-full z-50 bg-black border-b border-[#333333]">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="text-[#C8C8C9] text-4xl font-bold tracking-wider">
            JEDI
          </Link>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-[#C8C8C9]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-black border-l border-[#333333] p-0">
                <div className="flex flex-col py-4">
                  <Link
                    to="/"
                    className="px-4 py-2 text-[#C8C8C9] hover:bg-[#333333]"
                  >
                    Companies
                  </Link>
                  <Link
                    to="/about"
                    className="px-4 py-2 text-[#C8C8C9] hover:bg-[#333333]"
                  >
                    About
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className="text-[#C8C8C9] hover:text-white transition-colors"
              >
                Companies
              </Link>
              <Link
                to="/about"
                className="text-[#C8C8C9] hover:text-white transition-colors"
              >
                About
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
