import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
  const [isScrolled,setIsScrolled]=useState(false);
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  
  useEffect(()=>{
    function handleScroll(){
      const shouldBeScrolled=window.scrollY>10;
      // console.log("Scrolled:",shoubldBeScrolled,"ScrollY:",window.scrollY);
      setIsScrolled(shouldBeScrolled);
    }
    window.addEventListener('scroll',handleScroll)

    if(isMenuOpen){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }


    return ()=> window.removeEventListener('scroll',handleScroll)  
  },[isMenuOpen])

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
    <header className={`fixed left-0 top-0 w-full z-[100] transition-all duration-300
      ${
        isScrolled ?"bg-nav-fixed shadow-md":"bg-primary"
      }`
    }>

    <div className="text-white w-full font-poppins">
      <div className="container flex h-16 justify-between items-center mx-auto px-4 py-4">
        {/* Logo */}
        <div className="flex flex-1 justify-center items-center md:justify-start">
            Logo
        </div>

        {/* Hamburger Menu Button */}
        <button className="text-white absolute focus:outline-none md:hidden right-4"
        onClick={toggleMenu}
        aria-label="Toggle-menu"
        >
          {isMenuOpen?(<FaTimes className="h-6 w-6"/>):(<FaBars className="h-6 w-6"/>)}
        </button>

        {/* Desktop View */}
        <div className="flex-1 justify-center text-lg cursor-pointer gap-5 hidden lg:gap-10 lg:text-xl md:flex pr-40">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/facilities">Facilities</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contactUs">Contact Us</Link>
        </div>
      </div>

      {/* Empty div for balance in the flex layout */}
      <div className="flex-1 hidden md:block">
      </div>
      </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
      <div className="md:hidden fixed inset-0 bg-primary pt-16 z-[99]">
        <div className="flex flex-col items-center py-4 space-y-4 text-xl">
          <Link to='/' onClick={toggleMenu} className="text-white hover:text-gray-300 transition">Home</Link>
          <Link to='/aboutus' onClick={toggleMenu} className="text-white hover:text-gray-300 transition">About Us</Link>
          <Link to='/facilities' onClick={toggleMenu} className="text-white hover:text-gray-300 transition">Facilities</Link>
          <Link to='/gallery' onClick={toggleMenu} className="text-white hover:text-gray-300 transition">Gallery</Link>
          <Link to='/contactUs' onClick={toggleMenu} className="text-white hover:text-gray-300 transition">Contact Us</Link>
        </div>
      </div>
      )}
      <div className="h-5"></div>
</>
  );
}
export default Header;
