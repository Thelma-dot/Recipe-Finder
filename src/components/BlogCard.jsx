import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs`} className="border rounded-lg overflow-hidden block">
      <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-500">{blog.date}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
