import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Vision", id: "vision" },
    { label: "Achievements", id: "achievements" },
    { label: "Excellence", id: "excellence" },
    { label: "Initiatives", id: "initiatives" },
    { label: "Gallery", id: "gallery" },
    { label: "Message", id: "message" },
    { label: "Contact", id: "contact" },
  ];

  const isVisible = isScrolled || isMobileMenuOpen;

  return (
    <>
      <nav
  className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        } ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
        aria-hidden={!isVisible}
        data-testid="nav-header"
      >
        <div className="container max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-xl font-semibold text-foreground"
              data-testid="link-logo"
            >
              GLA University
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  data-testid={`link-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
