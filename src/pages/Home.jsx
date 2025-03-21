import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  return (
    <div>
      
      <main className="max-w-6xl mx-auto px-4 mt-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to DishCover!</h1>
        <SearchBar />
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Example Recipe Cards */}
          <RecipeCard
            title="Spaghetti Carbonara"
            image="/images/spaghetti.jpg"
            description="A classic Italian pasta dish with creamy sauce."
          />
          <RecipeCard
            title="Chicken Curry"
            image="/images/chicken-curry.jpg"
            description="A flavorful chicken curry with rich spices."
          />
          <RecipeCard
            title="Vegetable Stir Fry"
            image="/images/stir-fry.jpg"
            description="Quick and easy stir fry with fresh vegetables."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
