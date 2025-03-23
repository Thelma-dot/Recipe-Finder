import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';


const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="bg-black text-white flex justify-between items-center px-10 py-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-red-600 rounded-sm"></div>
        <span className="text-xl font-bold">Dish<span className="text-red-600">Cover</span></span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 font-medium">
        {[
          { name: 'Home', path: '/' },
          { name: 'Categories', path: '/categories' },
          { name: 'Recipes', path: '/recipes' },
          { name: 'Blogs', path: '/blogs' },
          { name: 'About Us', path: '/about' },
          { name: 'Pages', path: '/pages' },
          { name: 'Contact Us', path: '/contact' }
        ].map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`hover:text-red-500 transition-colors ${
              location.pathname === link.path ? 'text-orange-500' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <div
          onClick={toggleDarkMode}
          className="w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer transition-colors duration-300"
        >
          <div
            className={`bg-black w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </div>

        {/* Search Icon */}
        <FiSearch className="cursor-pointer w-5 h-5" />
      </div>
    </header>
  );
};

export default Header;
