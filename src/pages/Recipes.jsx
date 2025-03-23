import React from 'react';
import RecipeCard from '../components/RecipeCard';
import ghanaianDishes from '../data/ghanaianDishes';


const Recipes = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ghanaianDishes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            tags={recipe.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
