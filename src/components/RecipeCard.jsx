import React from 'react';

const RecipeCard = ({ title, image, description, tags = [] }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description.substring(0, 100)}...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
  };
  

export default RecipeCard;
