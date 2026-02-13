import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return true;
  });

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Expertise", href: "experience" },
    { label: "Education", href: "education" }, // This links to id="education"
    { label: "Contact", href: "contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "bg-white/90 dark:bg-[#171719]/80 backdrop-blur-lg border-b border-black/5 dark:border-[#F1F1F1]/10 py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* LOGO AREA - Scrolls to Hero */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-xl transition-transform duration-300 group-hover:rotate-6">
               <img 
                src={isDark ? "./src/assets/Logo_Mark-light.png" : "./src/assets/Logo_Mark-dark.png"} 
                alt="Ahmad Ayoub Logo"
                className="w-full h-full object-contain"
               />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#142229] dark:text-[#F1F1F1] tracking-tight leading-none text-lg transition-colors">
                AHMAD<span className="text-[#B1D5CD]">THEMATRIX</span>
              </span>
              <span className="text-[10px] text-[#142229]/50 dark:text-[#F1F1F1]/50 uppercase tracking-[0.2em] font-semibold transition-colors">
                Career Consultant
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-[#142229]/70 dark:text-[#F1F1F1]/70 hover:text-[#B1D5CD] transition-all duration-200 font-medium text-sm tracking-wide relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B1D5CD] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-black/10 dark:bg-[#F1F1F1]/10 mx-2" />
            
            {/* DESKTOP THEME TOGGLE */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-[#142229]/70 dark:text-[#F1F1F1]/70 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

           
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex lg:hidden items-center gap-3">
             <button
              onClick={() => setIsDark(!isDark)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#B1D5CD]/10 border border-[#B1D5CD]/20 text-[#B1D5CD]"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#142229] dark:text-[#F1F1F1]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[350px] bg-white dark:bg-[#142229] border-black/5 dark:border-[#F1F1F1]/10 p-0 flex flex-col">
                <div className="p-6 border-b border-black/5 dark:border-[#F1F1F1]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={isDark ? "./src/assets/Logo_Mark-light.png" : "./src/assets/Logo_Mark-dark.png"} 
                      alt="Logo" 
                      className="w-8 h-8 rounded-lg" 
                    />
                    <span className="text-[#142229] dark:text-[#F1F1F1] font-bold uppercase text-xs">Ahmad The Matrix</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex-1 py-8 px-6 space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-left text-2xl font-semibold text-[#142229]/80 dark:text-[#F1F1F1]/80 hover:text-[#B1D5CD] py-2 block"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-6">
                    <Button onClick={() => scrollToSection('book-appointment')} className="w-full bg-[#B1D5CD] text-[#142229] h-14 text-lg font-bold rounded-xl">
                      Book Consultation
                    </Button>
                  </div>
                </div>

                <div className="p-8 bg-black/5 dark:bg-[#171719]/50 border-t border-black/5 dark:border-[#F1F1F1]/10 flex justify-center gap-8">
                  <Linkedin className="w-6 h-6 text-[#142229]/40 dark:text-[#F1F1F1]/40 hover:text-[#B1D5CD]" />
                  <Mail className="w-6 h-6 text-[#142229]/40 dark:text-[#F1F1F1]/40 hover:text-[#B1D5CD]" />
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;