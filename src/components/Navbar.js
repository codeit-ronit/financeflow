import React, { useState, useEffect } from 'react';

import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll'; // Renamed 'Link' to 'ScrollLink'
import { Link as RouterLink } from 'react-router-dom'; 
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

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

  return (
    <nav className={`relative' sticky top-0 z-10 ${scrollNav ? 'bg-black' : 'bg-black'} transition-all duration-300  font-encode-sans-expanded`}>
      <div className="flex justify-between items-center h-20 px-6 max-w-screen-xl mx-auto">
        {/* Logo */}
        <RouterLink
          to='/'
          onClick={toggleHome}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          logo
        </RouterLink>

        {/* Mobile Menu Icon */}
        {/* <div className="text-black text-2xl cursor-pointer" onClick={toggle}>
          <FaBars />
        </div> */}

        {/* Menu Links */}
        <ul className="flex space-x-4">
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
        <div className="flex items-center">
        <SignedOut>
          <SignInButton mode='modal'>

          <button
            // to="/signin"
            className="bg-green-400 text-gray-900 py-2 px-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300"
          >
            Sign In
          </button>
        </SignInButton >
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;