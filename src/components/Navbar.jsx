import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="font-bold text-xl">DishCover</div>
      <ul className="flex gap-4">
        <li><a href="#" className="hover:text-orange-600">Home</a></li>
        <li><a href="#" className="hover:text-orange-600">Categories</a></li>
        <li><a href="#" className="hover:text-orange-600">Recipes</a></li>
        <li><a href="#" className="hover:text-orange-600">Blogs</a></li>
        <li><a href="#" className="hover:text-orange-600">About</a></li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="text-xl">🔍</button>
        <button className="text-xl">🌙</button>
      </div>
    </nav>
  );
};

export default Navbar;
