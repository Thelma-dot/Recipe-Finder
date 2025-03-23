import React from 'react';

const categories = [
  { name: "Staple Foods", img: "/path-to-image1.jpg" },
  { name: "Soups", img: "/path-to-image2.jpg" },
  { name: "Stew", img: "/path-to-image3.jpg" },
  { name: "Rice Dishes", img: "/path-to-image4.jpg" },
  { name: "Street Food", img: "/path-to-image5.jpg" },
  { name: "Snacks", img: "/path-to-image6.jpg" },
  { name: "Protein Sources", img: "/path-to-image7.jpg" },
  { name: "Beverages", img: "/path-to-image8.jpg" }
];

const Categories = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="text-center">
            <img src={cat.img} alt={cat.name} className="w-full h-40 object-cover rounded-md" />
            <p className="mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
