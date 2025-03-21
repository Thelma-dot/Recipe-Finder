import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import logo from '../assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  // Apply/remove dark class to <html> tag
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="bg-black text-white flex justify-between items-center px-8 py-4">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="DishCover Logo" className="w-[35px] h-[35px] object-contain" />
        <span className="text-lg font-bold">
          <span className="text-red-500">Dish</span>
          <span className="text-blue-500">Cover</span>
        </span>
      </div>

      {/* Nav Links */}
      <nav className="flex space-x-6 font-semibold">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/categories" className="hover:text-red-500">Categories</Link>
        <Link 
          to="/recipes" 
          className={`hover:text-red-500 ${location.pathname === '/recipes' ? 'text-orange-500' : ''}`}
        >
          Recipes
        </Link>
        <Link to="/blogs" className="hover:text-red-500">Blogs</Link>
        <Link to="/about" className="hover:text-red-500">About Us</Link>
        <Link to="/pages" className="hover:text-red-500">Pages</Link>
        <Link to="/contact" className="hover:text-red-500">Contact Us</Link>
      </nav>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
<div
  onClick={toggleDarkMode}
  className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-white rounded-full p-1 cursor-pointer transition-colors duration-300`}
>
  <div
    className={`bg-black dark:bg-black w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
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
