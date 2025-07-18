import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { NAVIGATION_ITEMS } from "../utils/constants";

const Header = () => {
  const location = useLocation();
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrollDirection === "down" ? "transform -translate-y-full" : "transform translate-y-0"
        } ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-orange-primary"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/ideas" 
              className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105 z-10"
            >
              <div className="flex items-center">
                <img
                  src="/img/logo.png"
                  alt="Suitmedia Logo"
                  className={`h-8 sm:h-10 w-auto object-contain transition-all duration-300 ${
                    isScrolled ? "filter-none" : "filter brightness-0 invert"
                  }`}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md group ${
                    isActive(item.path)
                      ? isScrolled 
                        ? "text-orange-primary" 
                        : "text-white"
                      : isScrolled
                        ? "text-gray-700 hover:text-orange-primary hover:bg-orange-50"
                        : "text-white hover:text-orange-200 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  {isActive(item.path) && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200 ${
                      isScrolled ? "bg-orange-primary" : "bg-white"
                    }`} />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className={`mobile-menu-button md:hidden p-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-inset z-10 ${
                isScrolled 
                  ? "text-gray-700 hover:text-orange-primary hover:bg-orange-50 focus:ring-orange-primary" 
                  : "text-white hover:text-orange-200 hover:bg-white/10 focus:ring-white"
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-container fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className={`${
          isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200" : "bg-orange-primary"
        } shadow-lg`}>
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-1">
              {NAVIGATION_ITEMS.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform ${
                    isActive(item.path)
                      ? isScrolled 
                        ? "text-orange-primary bg-orange-50 border-l-4 border-orange-primary scale-105" 
                        : "text-white bg-white/20 border-l-4 border-white scale-105"
                      : isScrolled
                        ? "text-gray-700 hover:text-orange-primary hover:bg-orange-50 hover:translate-x-1 hover:scale-105"
                        : "text-white hover:text-orange-200 hover:bg-white/10 hover:translate-x-1 hover:scale-105"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;