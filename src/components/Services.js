import React from 'react';
import Icon1 from '../images/svg-4.svg'; // Assuming your images are in a folder outside 'components'
import Icon2 from '../images/svg-5.svg';
import Icon3 from '../images/svg-6.svg';

const Services = () => {
  return (
    <div id="services" className="flex flex-col justify-center items-center font-encode-sans-expanded bg-[#010606] py-8">
      <h1 className="text-white text-4xl mb-16 font-bold">Our Product</h1>
      <div className="max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        
        <div className="bg-white flex flex-col justify-start items-center rounded-lg max-h-[340px] p-8 shadow-lg transition-transform duration-200 hover:scale-105">
          <img src={Icon1} alt="Reduce expenses" className="h-[160px] w-[160px] mb-4" />
          <h2 className="text-xl mb-2">CUSTOMIZATION</h2>
          <p className="text-center text-sm">Personalize it according to your needs</p>
        </div>

        <div className="bg-white flex flex-col justify-start items-center rounded-lg max-h-[340px] p-8 shadow-lg transition-transform duration-200 hover:scale-105">
          <img src={Icon2} alt="Virtual Offices" className="h-[160px] w-[160px] mb-4" />
          <h2 className="text-xl mb-2">CONVENIENCE</h2>
          <p className="text-center text-sm">Your finance at a glance</p>
        </div>

        <div className="bg-white flex flex-col justify-start items-center rounded-lg max-h-[340px] p-8 shadow-lg transition-transform duration-200 hover:scale-105">
          <img src={Icon3} alt="Premium Benefits" className="h-[160px] w-[160px] mb-4" />
          <h2 className="text-xl mb-2">CONTROL</h2>
          <p className="text-center text-sm">Monitor your spending</p>
        </div>

      </div>
    </div>
  );
};

export default Services;