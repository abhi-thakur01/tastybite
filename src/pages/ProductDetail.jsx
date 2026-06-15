import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiPlus, FiArrowLeft } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { menuItems, categories } from '../data/data';
import { useCart } from '../context/CartContext';

const CategoryDetail = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const category = categories.find(c => c.slug === slug);
  const items = menuItems.filter(item => item.category === slug);

  if (!category) return (
    <div className="pt-20 min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center"><h2 className="text-2xl font-bold mb-4">Category not found</h2><Link to="/categories" className="btn-primary">Back to Categories</Link></div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><span className="text-5xl mb-4 block">{category.icon}</span><h1 className="text-3xl md:text-5xl font-bold mb-2">{category.name}</h1><p className="text-gray-300">{items.length} items available</p></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/categories" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8"><FiArrowLeft /> Back to Categories</Link>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="card-dark group">
              <Link to={`/product/${item.id}`}><div className="relative overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" /></div></Link>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2"><FaStar className="text-primary text-xs" /><span className="text-sm">{item.rating}</span></div>
                <Link to={`/product/${item.id}`}><h3 className="font-semibold hover:text-primary">{item.name}</h3></Link>
                <div className="flex items-center justify-between mt-3">
                  <div><span className="text-primary font-bold text-lg">${item.price}</span><span className="text-gray-500 line-through text-sm ml-2">${item.originalPrice}</span></div>
                  <button onClick={() => addToCart(item)} className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark"><FiPlus size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;