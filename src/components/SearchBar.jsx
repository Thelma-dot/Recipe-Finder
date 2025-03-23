import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 rounded-l-full bg-transparent focus:outline-none text-black dark:text-white"
      />
      <button
        type="submit"
        className="bg-red-500 p-2 rounded-r-full hover:bg-red-600 transition"
        aria-label="Search"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
