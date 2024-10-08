import React from 'react';
import man from '../images/man3.png';
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <div id="discover" className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-3xl bg-gradient-to-r from-gray-800 to-black shadow-2xl rounded-xl overflow-hidden transform transition duration-300 ease-in-out hover:shadow-3xl">

        {/* Left Side: Animated Image */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center bg-gray-800 rounded-t-xl md:rounded-l-xl md:rounded-t-none">
          <img
            src={man}
            alt="Man"
            className="w-1/2 h-auto shadow-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Side: Button and Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-left font-encode-sans-expanded">
          <h2 className="text-4xl font-extrabold text-green-400 mb-6">
            Discover Financial Tips
          </h2>
          <p className="text-white text-lg mb-8 leading-relaxed">
            Enhance your financial knowledge with our expert tips and advice tailored for your needs. 
            Whether you're saving for a big purchase or planning for the future, we have the insights you need.
          </p>
          <Link to={"/comingsoon"}>
            <button className="bg-green-400 text-black py-3 px-6 rounded-full shadow-lg hover:bg-green-800 transform hover:scale-110 transition duration-300 ease-in-out">
              Get Financial Tips
            </button>
          </Link>
          <p className="mt-6 text-white text-base">
            Stay informed and make smarter financial decisions with our resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;