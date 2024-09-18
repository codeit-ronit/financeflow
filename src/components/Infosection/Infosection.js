import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
  return (
    <div id={id} className={`${lightBg ? 'bg-gray-100' : 'bg-gray-900'} text-white py-16  font-encode-sans-expanded`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Conditionally reverse column order */}
        <div className={`order-${imgStart ? '2' : '1'} px-6`}>
          <div className="mb-8 text-left">
            <p className="text-green-400 uppercase tracking-wider text-sm font-semibold">{topLine}</p>
            <h2 className={`${lightText ? 'text-white' : 'text-gray-900'} text-4xl font-bold mb-4`}>
              {headline}
            </h2>
            <p className={`${darkText ? 'text-gray-900' : 'text-white'} mb-8 text-lg`}>
              {description}
            </p>
            <div className="flex justify-start">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className={`${primary ? 'bg-green-400' : 'bg-blue-600'} text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-green-300 transition duration-300`}
              >
                {buttonLabel}
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className={`order-${imgStart ? '1' : '2'} flex justify-center`}>
          <img src={img} alt={alt} className="max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;