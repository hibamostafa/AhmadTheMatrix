
import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Mail, Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return true;
  });

  // 2. Handle Theme application
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
       <button
              onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 p-2 rounded bg-white/10 hover:bg-white/20 transition"
              title="Toggle theme"
      aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                <div className={`absolute inset-0 transition-all duration-500 transform ${isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`}>
                  <Sun size={20} />
                </div>
                <div className={`absolute inset-0 transition-all duration-500 transform ${!isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}>
                  <Moon size={20} />
                </div>
              </div>
              
            </button>
  );
};

export default ThemeToggle;
