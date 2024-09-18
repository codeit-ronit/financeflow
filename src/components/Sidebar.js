import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside
      className={`fixed z-[999] w-full h-full bg-[#0d0d0d] grid items-center  font-encode-sans-expanded left-0 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-100%]'
      }`}
      onClick={toggle}
    >
      <div className="absolute top-[1.2rem] right-[1.5rem] bg-transparent text-2xl cursor-pointer">
        <FaTimes className="text-white" onClick={toggle} />
      </div>
      <div className="text-white">
        <ul className="grid grid-cols-1 grid-rows-[repeat(6, 80px)] text-center">
          <li>
            <LinkS
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="flex justify-center items-center text-[1.5rem] text-white cursor-pointer transition-all duration-200 ease-in-out hover:text-[#01bf71]"
              onClick={toggle}
            >
              About
            </LinkS>
          </li>
          <li>
            <LinkS
              to="discover"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="flex justify-center items-center text-[1.5rem] text-white cursor-pointer transition-all duration-200 ease-in-out hover:text-[#01bf71]"
              onClick={toggle}
            >
              Discover
            </LinkS>
          </li>
          <li>
            <LinkS
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="flex justify-center items-center text-[1.5rem] text-white cursor-pointer transition-all duration-200 ease-in-out hover:text-[#01bf71]"
              onClick={toggle}
            >
              Services
            </LinkS>
          </li>
          <li>
            <LinkS
              to="signup"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              className="flex justify-center items-center text-[1.5rem] text-white cursor-pointer transition-all duration-200 ease-in-out hover:text-[#01bf71]"
              onClick={toggle}
            >
              Sign Up
            </LinkS>
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <LinkR
            to="/signin"
            className="rounded-full bg-[#01bf71] whitespace-nowrap py-4 px-16 text-[#010606] text-[16px] border-none cursor-pointer transition-all duration-200 ease-in-out hover:bg-white hover:text-[#010606]"
          >
            Sign In
          </LinkR>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;