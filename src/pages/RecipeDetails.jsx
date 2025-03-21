import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); // For fetching recipe based on ID if needed

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Recipe Details</h1>
      <p className="text-lg text-gray-600 mb-4">
        Details for recipe ID: <span className="font-semibold">{id}</span>
      </p>

      <div className="max-w-3xl bg-white shadow-md rounded-lg p-6">
        {/* Replace with dynamic content */}
        <h2 className="text-2xl font-semibold mb-2">Recipe Title</h2>
        <img
          src="https://via.placeholder.com/400"
          alt="Recipe"
          className="rounded-lg mb-4"
        />
        <p className="mb-4">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aenean commodo ligula eget dolor.
        </p>
        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
        <p>
          Step 1: Do something. <br />
          Step 2: Do something else. <br />
          Step 3: Serve and enjoy!
        </p>
      </div>
    </div>
  );
};

export default RecipeDetails;
