import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import social icons

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-6">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* About Us */}
      <div>
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p className="text-sm leading-relaxed">
          I create unique, twist-filled recipes daily and share engaging blog posts with fun kitchen ideas.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="https://facebook.com" className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition">
            <FaLinkedinIn />
          </a>
          <a href="https:/youtube.com" className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition">
            <FaYoutube />
          </a>
          <a href="https:/instagram" className="bg-red-500 p-3 rounded-full hover:bg-red-600 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Link</h3>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:underline">Term & Condition</a></li>
          <li><a href="#" className="hover:underline">Advanced Search</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
        <p className="flex items-center mb-2"><span className="text-red-500 mr-2">📍</span> Tema, Afienya</p>
        <p className="flex items-center mb-2"><span className="text-red-500 mr-2">📞</span> +233595634868</p>
      </div>

      {/* Subscribe */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
        <p className="text-sm mb-4">Subscribe to our mailing list and get updates to your email box</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 rounded-l focus:outline-none text-black"
          />
          <button className="bg-red-500 px-4 py-2 rounded-r hover:bg-red-600 transition">
            🚀
          </button>
        </div>
        <button className="bg-red-500 mt-4 px-6 py-2 rounded hover:bg-red-600 transition">
          Subscribe
        </button>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="text-center mt-10 text-sm border-t border-gray-700 pt-4">
      &copy; 2025 DishCover. All Rights Reserved | Designed by <span className="text-red-500">Thelma Buabeng</span>
    </div>
  </footer>
);

export default Footer;
