import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 max-w-5xl mx-auto bg-transparent rounded-xl transition-all duration-300 ${
        scrolled
          ? "bg-white/10 dark:bg-gray-700/80 backdrop-blur-lg shadow-md"
          : "bg-transparent backdrop-blur-xl"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold shadow-md">
              C
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              CablePrep AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Documentation", "API", "Community", "GitHub"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-foreground hover:text-primary font-medium transition-colors"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark/Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center p-2 rounded-full bg-muted hover:bg-primary/20 transition-all"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-400 transition-transform rotate-180" />
              ) : (
                <Moon size={20} className="text-indigo-500 transition-transform" />
              )}
            </button>

            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-6 animate-fadeIn">
            {["Home", "Documentation", "API", "Community", "GitHub"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              )
            )}

            {/* Dark/Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted transition-colors w-full justify-center"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* CTA */}
            <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 shadow-md">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
