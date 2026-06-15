import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { categories, menuItems } from '../data/data';

const Categories = () => {
  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Categories" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">Food Categories</h1><p className="text-gray-300">Browse by your favorite category</p></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const itemCount = menuItems.filter(item => item.category === category.slug).length;
            return (
              <Link key={category.id} to={`/categories/${category.slug}`} className="card-dark group relative overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{itemCount} Items</p>
                  <div className="flex items-center gap-1 text-primary text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Explore <FiArrowRight /></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;