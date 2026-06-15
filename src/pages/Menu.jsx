import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { menuItems, categories } from '../data/data';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const filteredItems = useMemo(() => {
    let items = menuItems;
    if (selectedCategory !== 'all') items = items.filter(item => item.category === selectedCategory);
    if (searchQuery) items = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    switch (sortBy) {
      case 'price-low': items.sort((a, b) => a.price - b.price); break;
      case 'price-high': items.sort((a, b) => b.price - a.price); break;
      case 'rating': items.sort((a, b) => b.rating - a.rating); break;
      default: items.sort((a, b) => a.name.localeCompare(b.name));
    }
    return items;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Menu" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Our Menu</h1>
            <p className="text-gray-300">Explore our delicious collection</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for dishes..." className="w-full bg-darkCard border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary" />
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-darkCard border border-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary">
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          <button onClick={() => setSelectedCategory('all')} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === 'all' ? 'bg-primary text-dark' : 'bg-darkCard text-gray-300'}`}>All Items</button>
          {categories.map((cat) => (
            <button key={cat.slug} onClick={() => setSelectedCategory(cat.slug)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1 ${selectedCategory === cat.slug ? 'bg-primary text-dark' : 'bg-darkCard text-gray-300'}`}>
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-4">Showing {filteredItems.length} items</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-dark group">
              <Link to={`/product/${item.id}`}>
                <div className="relative overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  {item.isPopular && <span className="absolute top-2 left-2 bg-primary text-dark text-xs font-bold px-2 py-1 rounded-full">Popular</span>}
                  {item.isDeal && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Deal</span>}
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <FaStar className="text-primary text-xs" /><span className="text-sm text-gray-300">{item.rating}</span>
                  <span className="text-xs text-gray-500">({item.reviews})</span>
                </div>
                <Link to={`/product/${item.id}`}><h3 className="font-semibold hover:text-primary transition-colors">{item.name}</h3></Link>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-lg">${item.price}</span>
                    {item.originalPrice > item.price && <span className="text-gray-500 line-through text-sm">${item.originalPrice}</span>}
                  </div>
                  <button onClick={() => addToCart(item)} className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark hover:bg-accent transition-colors"><FiPlus size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <h3 className="text-xl font-bold mb-2">No items found</h3>
            <p className="text-gray-400">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;