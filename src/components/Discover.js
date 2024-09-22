import React from 'react';
import man from '../images/man3.png';
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <div id="discover" className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="flex w-full max-w-4xl h-auto bg-black shadow-2xl rounded-xl overflow-hidden transform ">
        
        {/* Left Side: Animated Image */}
        <div className="relative w-1/2 flex items-center justify-center  rounded-l-xl">
          <img
            src={man}
            alt="Man"
            className="w-1/2 h-auto shadow-lg"
          />
        </div>

        {/* Right Side: Button and Content */}
        <div className="w-1/2 p-8 flex flex-col justify-center place-items-start mb-20">
          <h2 className="text-3xl font-extrabold text-green-400 mb-4">Discover Financial Tips</h2>
          <p className="mb-6 text-white text-base leading-relaxed">
            Enhance your financial knowledge with our expert tips and advice tailored for your needs. 
            Whether you're saving for a big purchase or planning for the future, we have the insights you need.
          </p>
          <Link to={"/comingsoon"}>
          <button className="bg-green-400 text-black py-3 px-6 rounded-full shadow-lg hover:bg-green-800 transform hover:scale-110 transition duration-300 ease-in-out">
            Get Financial Tips
          </button>
          </Link>
          <p className="mt-6 text-white">
            Stay informed and make smarter financial decisions with our resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;