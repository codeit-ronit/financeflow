import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ primary, big, dark, fontBig, children, to }) => {
  return (
    <Link
      to={to}
      className={`${
        primary ? 'bg-[#01BF71]' : 'bg-[#010606]'
      } ${big ? 'py-4 px-12' : 'py-3 px-8'} ${
        fontBig ? 'text-lg' : 'text-base'
      } ${dark ? 'text-[#010606]' : 'text-white'} 
      rounded-full whitespace-nowrap flex justify-center items-center 
      cursor-pointer transition duration-200 ease-in-out 
      hover:${primary ? 'bg-white' : 'bg-[#01BF71]'}`}
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
    >
      {children}
    </Link>
  );
};

export default Button;