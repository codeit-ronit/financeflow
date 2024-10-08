import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Added icons for hamburger and close buttons
import logo from '../images/logo.png';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll'; // Renamed 'Link' to 'ScrollLink'
import { Link as RouterLink } from 'react-router-dom'; 
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <nav className={`sticky top-0 z-10 ${scrollNav ? 'bg-black' : 'bg-black'} transition-all duration-300 font-encode-sans-expanded`}>
      <div className="flex justify-between items-center h-20 px-6 max-w-screen-xl mx-auto">
        {/* Logo */}
        <RouterLink
          to='/'
          onClick={toggleHome}
          className="text-white text-2xl font-bold cursor-pointer w-10 h-10"
        >logo
          {/* <img src="logo" alt="logo" /> */}
        </RouterLink>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
        </div>

        {/* Menu Links for desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <ScrollLink
              to='aboutpage'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='discover'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
            >
              Discover
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to='footer'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Sign In Button */}
        <div className="hidden md:flex items-center">
          <SignedOut>
            <SignInButton mode='modal'>
              <button
                className="bg-green-400 text-gray-900 py-2 px-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300"
              >
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-black md:hidden">
          <li className="py-2">
            <ScrollLink
              to='aboutpage'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
              onClick={toggleMenu} // Close menu on click
            >
              About
            </ScrollLink>
          </li>
          <li className="py-2">
            <ScrollLink
              to='discover'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
              onClick={toggleMenu} // Close menu on click
            >
              Discover
            </ScrollLink>
          </li>
          <li className="py-2">
            <ScrollLink
              to='services'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
              onClick={toggleMenu} // Close menu on click
            >
              Services
            </ScrollLink>
          </li>
          <li className="py-2">
            <ScrollLink
              to='footer'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              className="text-white cursor-pointer hover:border-b-2 border-green-400"
              onClick={toggleMenu} // Close menu on click
            >
              Contact
            </ScrollLink>
          </li>
          <li className="py-2">
            <SignedOut>
              <SignInButton mode='modal'>
                <button
                  className="bg-green-400 text-gray-900 py-2 px-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300"
                  onClick={toggleMenu} // Close menu after sign-in click
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;