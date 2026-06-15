import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
import { blogs } from '../data/data';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const blogCategories = ['all', ...new Set(blogs.map(b => b.category))];
  const filteredBlogs = selectedCategory === 'all' ? blogs : blogs.filter(b => b.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Blog" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">Our Blog</h1><p className="text-gray-300">Recipes, tips, and food stories</p></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {blogCategories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap capitalize transition-all ${selectedCategory === cat ? 'bg-primary text-dark' : 'bg-darkCard text-gray-300'}`}>{cat}</button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`} className="card-dark group">
              <div className="relative overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-3 left-3 bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full">{blog.category}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1"><FiUser /> {blog.author}</span>
                  <span className="flex items-center gap-1"><FiClock /> {blog.readTime}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center gap-1 text-primary text-sm mt-4 font-medium">Read More <FiArrowRight /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;