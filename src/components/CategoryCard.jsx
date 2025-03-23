import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories`} className="border rounded-lg overflow-hidden block">
      <img src={category.image} alt={category.title} className="w-full h-32 object-cover" />
      <p className="text-center py-2 font-medium">{category.title}</p>
    </Link>
  );
};

export default CategoryCard;
