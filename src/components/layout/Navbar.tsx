import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { name: "AI Solutions", href: "/services/ai-solutions" },
  { name: "Software Development", href: "/services/software-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Cloud Services", href: "/services/cloud-services" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "Branding & Design", href: "/services/branding-design" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold text-xl">L</span>
            </div>
            <span className={cn(
              "font-bold text-xl transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              Logic<span className="gradient-text">Works</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 font-medium transition-colors duration-300 hover:text-secondary",
                      isScrolled ? "text-foreground" : "text-primary-foreground",
                      location.pathname.includes("/services") && "text-secondary"
                    )}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "font-medium transition-colors duration-300 hover:text-secondary relative",
                      isScrolled ? "text-foreground" : "text-primary-foreground",
                      location.pathname === link.href && "text-secondary"
                    )}
                  >
                    {link.name}
                    {location.pathname === link.href && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                      />
                    )}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-lg border border-border overflow-hidden"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {services.map((service, index) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-3 text-foreground hover:bg-muted hover:text-secondary transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-4 py-3 text-secondary font-medium border-t border-border hover:bg-muted transition-colors duration-200"
                        >
                          View All Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/quote">
              <Button variant="gradient" size="default">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="space-y-2">
                      <Link
                        to="/services"
                        className="block font-medium text-foreground hover:text-secondary transition-colors"
                      >
                        {link.name}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-muted-foreground hover:text-secondary transition-colors text-sm"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="block font-medium text-foreground hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/quote" className="block">
                <Button variant="gradient" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
