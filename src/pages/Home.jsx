import React from "react";
import CategoryCard from "../components/CategoryCard.jsx";
import RecipeCard from "../components/RecipeCard.jsx";
import BlogCard from "../components/BlogCard.jsx";



// Dummy data placeholders (replace later with real images & data)
const categories = [
  { id: 1, title: "Staple Foods", image: "stapleFoodsImages" },
  { id: 2, title: "Soups", image: "soupsImages" },
  { id: 3, title: "Stew", image: "your-image-url-here" },
  { id: 4, title: "Rice Dishes", image: "your-image-url-here" },
  { id: 5, title: "Street Food", image: "your-image-url-here" },
  { id: 6, title: "Snacks", image: "your-image-url-here" },
  { id: 7, title: "Protein Sources", image: "your-image-url-here" },
  { id: 8, title: "Beverages", image: "your-image-url-here" },
];

const recipes = [
  { id: 1, title: "Jollof Rice", image: "your-image-url-here" },
  { id: 2, title: "Light Soup", image: "your-image-url-here" },
  { id: 3, title: "Waakye", image: "your-image-url-here" },
  { id: 4, title: "Groundnut Soup", image: "your-image-url-here" },
  { id: 5, title: "Kelewele", image: "your-image-url-here" },
];

const blogs = [
  { id: 1, title: "Why I Love Cooking", image: "your-image-url-here", date: "Mar 10, 2025" },
  { id: 2, title: "Amazing Ghanaian Cuisine", image: "your-image-url-here", date: "Mar 15, 2025" },
  { id: 3, title: "Easy Soup Recipes", image: "your-image-url-here", date: "Mar 18, 2025" },
];

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white flex flex-col items-center justify-center py-16 text-center">
  <img src="../assets/images/logo.png"  className="w-32 h-32 mb-4" />
  <h1 className="text-4xl font-bold mb-4">Cooking Made Easy</h1>
  <p className="mb-6">Discover delicious recipes and more!</p>
  <button className="bg-red-600 px-6 py-3 rounded-lg text-white">Explore Now</button>
</section>

      {/* Categories Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Recipes Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Recipe</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Fresh Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
