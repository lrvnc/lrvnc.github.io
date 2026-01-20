import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "work-experience", label: "Work Experience" },
  { id: "publications", label: "Publications" },
  { id: "portfolio", label: "Portfolio" },
  // { id: 'certifications', label: 'Certifications' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const showSolidNav = isScrolled || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + 160;
      let currentSection = "";

      const sectionIds = [
        ...navItems.map((item) => item.id),
        "contact",
        "hobbies",
      ];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }

      const heroElement = document.querySelector("section");
      if (heroElement && window.scrollY < heroElement.offsetHeight / 2) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration w-full",
        showSolidNav ? "bg-white shadow-sm duration-100" : "bg-transparent duration-500"
      )}
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <div className="w-full px-6 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-lg font-bold">
              <span className={cn(showSolidNav ? "text-gray-800" : "text-white")}>
                Leandro Risso Venâncio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block md:hidden sm:hidden">
            <NavigationMenu>
              <NavigationMenuList className="gap-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        showSolidNav
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-200 hover:bg-white/10",
                        activeSection === item.id &&
                          (showSolidNav ? "bg-gray-200" : "bg-white/20")
                      )}
                    >
                      {item.label}
                    </button>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={cn(
                      "px-4 py-2 rounded-md transition-colors text-sm font-medium",
                      showSolidNav
                        ? "bg-gray-800 text-white hover:bg-gray-900"
                        : "bg-white text-black hover:bg-gray-200",
                      activeSection === "contact" &&
                        "!bg-primary !text-primary-foreground"
                    )}
                  >
                    Contact Me
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden md:block">
            <button
              onClick={toggleMenu}
              className={cn(
                "focus:outline-none",
                showSolidNav ? "text-gray-700" : "text-white"
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden w-full",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className={cn(
            "px-3 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white",
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
                showSolidNav
                  ? "text-gray-700 hover:bg-gray-50"
                  : "text-gray-200 hover:bg-white/10",
                activeSection === item.id &&
                  (showSolidNav ? "bg-gray-100 font-bold" : "")
              )}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className={cn(
              "block w-full text-left px-3 py-2 rounded-md text-base font-medium",
              showSolidNav
                ? "text-gray-700 bg-gray-100 hover:bg-gray-200"
                : "text-white bg-white/20 hover:bg-white/30",
              activeSection === "contact" &&
                (showSolidNav ? "bg-gray-200 font-bold" : "bg-white/30 font-bold")
            )}
          >
            Contact Me
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
