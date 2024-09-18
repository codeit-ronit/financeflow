import React, { useState } from 'react';
import Video from './videos/video.mp4'; // adjust path based on component location ;

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="relative flex  font-encode-sans-expanded justify-center items-center h-[800px] bg-[#0c0c0c] px-[30px] z-1">
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover bg-[#232a34]"
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] via-transparent to-[rgba(0,0,0,0.6)] z-2" />

      {/* Content */}
      <div className="relative z-3 max-w-[1200px] p-4 flex flex-col items-center">
        <h1 className="text-white text-6xl font-bold  text-center">Finance Flow</h1>
        <p className="mt-6 text-white text-xl text-center max-w-[600px]">
          Manage your personal Finance
        </p>
        <div className="mt-8 flex flex-col items-center">
          <button
            className="bg-green-400 text-gray-900 py-2 px-6 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 flex items-center"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started
            <span className="ml-2 text-2xl">
              {hover ? '→' : '→'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverSection;