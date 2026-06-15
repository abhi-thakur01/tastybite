import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { categories } from '../data/data';

const PopularCategories = () => {
  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-medium text-sm tracking-wider">EXPLORE</span>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Popular Categories</h2>
          </div>
          <Link to="/categories" className="btn-outline text-sm py-2 px-4">View All <FiArrowRight /></Link>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/categories/${category.slug}`} className="group text-center">
              <div className="relative mb-3 overflow-hidden rounded-2xl aspect-square">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center text-lg">{category.icon}</div>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{category.name}</h3>
              <p className="text-gray-400 text-xs">{category.items} Items</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;