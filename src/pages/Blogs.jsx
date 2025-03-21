import React from 'react';

const Blogs = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Our Latest Blogs</h1>
      <p className="text-lg mb-6">
        Welcome to the DishCover blog! Here, we share cooking tips, recipe inspiration, kitchen hacks, and fun food stories to make your cooking experience more exciting.
      </p>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">5 Easy Weeknight Dinners</h2>
          <p>Discover quick and delicious meals you can whip up in under 30 minutes.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">10 Essential Kitchen Tools</h2>
          <p>A guide to must-have gadgets that every home cook needs in their kitchen.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
