
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 font-heading font-bold text-xl">
            <a href="#home" className="text-portfolio-dark hover:text-portfolio-purple transition-colors">
              Pallavi<span className="text-portfolio-purple">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">
                About
              </a>
              <a href="#education" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">
                Education
              </a>
              <a href="#skills" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-700 hover:text-portfolio-purple font-medium transition-colors">
                Projects
              </a>
              <a href="#contact" className="px-4 py-2 rounded-md bg-portfolio-purple text-white font-medium hover:bg-portfolio-darkpurple transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-portfolio-purple focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-purple">
            Home
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-purple">
            About
          </a>
          <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-purple">
            Education
          </a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-purple">
            Skills
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-portfolio-purple">
            Projects
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium bg-portfolio-purple text-white hover:bg-portfolio-darkpurple">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
