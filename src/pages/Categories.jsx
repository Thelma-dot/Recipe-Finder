import React from 'react';

const Categories = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Recipe Categories</h1>
      <p>Select from a variety of recipe categories!</p>

      {/* Sample categories grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="p-4 bg-gray-100 rounded shadow text-center">Breakfast</div>
        <div className="p-4 bg-gray-100 rounded shadow text-center">Lunch</div>
        <div className="p-4 bg-gray-100 rounded shadow text-center">Dinner</div>
        <div className="p-4 bg-gray-100 rounded shadow text-center">Desserts</div>
        <div className="p-4 bg-gray-100 rounded shadow text-center">Vegetarian</div>
        <div className="p-4 bg-gray-100 rounded shadow text-center">Seafood</div>
        <div className="p-4 bg-gray-100 rounded shadow text-center">Drinks</div>
        <div className="p-4 bg-gray-100 rounded shadow text-center">Snacks</div>
      </div>
    </div>
  );
};

export default Categories;
