import React from 'react';

const blogs = [
  { title: "Waakye Recipe", img: "/blog1.jpg" },
  { title: "Street Food", img: "/blog2.jpg" },
  { title: "Party Jollof", img: "/blog3.jpg" }
];

const Blogs = () => {
  return (
    <section className="p-8">
      <h2 className="text-xl font-bold mb-4">Our Fresh Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
            <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{blog.title}</h3>
              <p className="text-sm mt-2">Read more...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
