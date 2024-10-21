import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

const FinancialTips = () => {
  const location = useLocation();
  const financialTips = location.state?.tips || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 font-encode-sans-expanded">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wider">
        <span className="bg-gradient-to-r from-green-400 via-teal-400 to-green-600 text-transparent bg-clip-text">
          Financial Tips & News
        </span>
        <span className="block w-16 h-1 bg-green-400 mx-auto mt-4 rounded-lg"></span>
      </h1>

      {/* Newspaper-style grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {financialTips.map((tip, index) => (
          <div 
            key={index} 
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            {/* Tip Title and Description */}
            <a 
              href={tip.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-green-400 text-2xl font-bold mb-4 hover:text-green-300 transition duration-200"
            >
              {tip.title}
              <FaExternalLinkAlt className="inline-block ml-2 text-green-300" />
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {tip.description || 'Click the link above to read more.'}
            </p>

            {/* Tip Metadata */}
            <p className="text-gray-500 text-xs mt-4">
              Published on: <span className="text-gray-400">{new Date(tip.publishedAt).toLocaleDateString()}</span>
            </p>

            {/* Image or Placeholder */}
            {tip.urlToImage ? (
              <img 
                src={tip.urlToImage} 
                alt={tip.title} 
                className="absolute bottom-4 right-4 w-12 h-12 object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            ) : (
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center opacity-80">
                <FaExternalLinkAlt className="text-black text-xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialTips;
