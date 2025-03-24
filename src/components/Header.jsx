import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // For smooth scrolling

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 w-full z-[100] transition-all duration-300 
        ${isScrolled ? "bg-nav-fixed shadow-md" : "bg-primary"}`}
      >
        <div className="text-white w-full font-poppins">
          <div className="container flex h-16 justify-between items-center mx-auto px-4 py-4">
            
            {/* Hamburger Menu (Left Side on Mobile) */}
            <button
              className="text-white md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle-menu"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>

            {/* Desktop Navbar */}
            <nav className="flex-1 justify-center text-lg cursor-pointer gap-5 hidden lg:gap-10 lg:text-xl md:flex">
              <HashLink smooth to="/#top" onClick={closeMenu} className="cursor-pointer">
                Home
              </HashLink>
              <HashLink smooth to="/#aboutus" onClick={closeMenu} className="cursor-pointer">
                About Us
              </HashLink>
              <HashLink smooth to="/#accommodation" onClick={closeMenu} className="cursor-pointer">
                Accommodation
              </HashLink>
              <Link to="/events" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                Events
              </Link>
              <HashLink smooth to="/#facilities" onClick={closeMenu} className="cursor-pointer">
                Facilities
              </HashLink>
              <HashLink smooth to="/#gallery" onClick={closeMenu} className="cursor-pointer">
                Gallery
              </HashLink>
              <HashLink smooth to="/#contact" onClick={closeMenu} className="cursor-pointer">
                Contact Us
              </HashLink>
            </nav>

            {/* "Book Now" Button (Right Side on Mobile) */}
            <div className="md:hidden">
              <Link to="/book" className="px-4 py-2 bg-white text-black rounded-lg text-sm">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary pt-16 z-[99]">
          <div className="flex flex-col items-center pt-10 space-y-10 text-xl">
            <HashLink smooth to="/#top" onClick={closeMenu} className="text-white">
              Home
            </HashLink>
            <HashLink smooth to="/#aboutus" onClick={closeMenu} className="text-white">
              About Us
            </HashLink>
            <HashLink smooth to="/#accommodation" onClick={closeMenu} className="text-white">
              Accommodation
            </HashLink>
            <Link to="/events" onClick={() => { window.scrollTo(0, 0); closeMenu(); }} className="text-white">
              Events
            </Link>
            <HashLink smooth to="/#facilities" onClick={closeMenu} className="text-white">
              Facilities
            </HashLink>
            <HashLink smooth to="/#gallery" onClick={closeMenu} className="text-white">
              Gallery
            </HashLink>
            <HashLink smooth to="/#contact" onClick={closeMenu} className="text-white">
              Contact Us
            </HashLink> 
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
