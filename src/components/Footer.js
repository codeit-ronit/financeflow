import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer id='footer' className="bg-gray-900  font-encode-sans-expanded text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-center mb-8">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center">
            <div className="mx-4 mb-8 w-40">
              <h1 className="text-lg font-bold mb-4">About Us</h1>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">How it works</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Testimonials</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Careers</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Investors</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Terms of Service</a>
            </div>
            <div className="mx-4 mb-8 w-40">
              <h1 className="text-lg font-bold mb-4">Contact Us</h1>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Contact</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Support</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Destinations</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Sponsorships</a>
            </div>
            <div className="mx-4 mb-8 w-40">
              <h1 className="text-lg font-bold mb-4">Videos</h1>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Submit Video</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Ambassadors</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Agency</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Influencer</a>
            </div>
            <div className="mx-4 mb-8 w-40">
              <h1 className="text-lg font-bold mb-4">Social Media</h1>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Instagram</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Facebook</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Youtube</a>
              <a href="/" className="text-sm hover:text-green-500 mb-2 block">Twitter</a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="w-full flex flex-col items-center">
          <h1
            onClick={toggleHome}
            className="text-2xl font-bold mb-4 cursor-pointer"
          >
            logo
          </h1>
          <p className="text-sm text-white mb-4">logo © {new Date().getFullYear()} All rights reserved.</p>

          <div className="flex justify-center space-x-6">
            <a href="/" target="_blank" aria-label="Facebook" className="text-white text-2xl hover:text-green-500">
              <FaFacebook />
            </a>
            <a href="/" target="_blank" aria-label="Instagram" className="text-white text-2xl hover:text-green-500">
              <FaInstagram />
            </a>
            <a href="/" target="_blank" aria-label="Youtube" className="text-white text-2xl hover:text-green-500">
              <FaYoutube />
            </a>
            <a href="/" target="_blank" aria-label="Twitter" className="text-white text-2xl hover:text-green-500">
              <FaTwitter />
            </a>
            <a href="/" target="_blank" aria-label="Linkedin" className="text-white text-2xl hover:text-green-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;