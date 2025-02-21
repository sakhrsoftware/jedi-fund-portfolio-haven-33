
import React from "react";
import { Moon, MoonStar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "darker" : "dark")}
      className="text-jedi-white/60 hover:text-jedi-white/90"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <MoonStar className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
