import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
              C
            </div>
            <span className="text-xl font-bold text-foreground">CablePrep AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#documentation" className="text-muted-foreground hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="#api" className="text-muted-foreground hover:text-primary transition-colors">
              API
            </a>
            <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#github" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#documentation" className="block text-muted-foreground hover:text-primary transition-colors">
              Documentation
            </a>
            <a href="#api" className="block text-muted-foreground hover:text-primary transition-colors">
              API
            </a>
            <a href="#community" className="block text-muted-foreground hover:text-primary transition-colors">
              Community
            </a>
            <a href="#github" className="block text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;