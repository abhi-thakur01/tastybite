import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { dealCombos, menuItems } from '../data/data';
import { useCart } from '../context/CartContext';

const Deals = () => {
  const { addToCart } = useCart();
  const dealItems = menuItems.filter(item => item.isDeal);

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Deals" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">🔥 Hot <span className="text-primary">Deals</span></h1><p className="text-gray-300">Save big with our special offers</p></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-2">Get <span className="text-primary">20% OFF</span> on your first order!</h2>
          <p className="text-gray-400">Use code <span className="text-primary font-bold">TASTY20</span> at checkout</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">🍱 Combo Deals</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dealCombos.map((deal) => (
            <div key={deal.id} className="card-dark group">
              <div className="relative overflow-hidden">
                <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">SAVE ${(deal.originalPrice - deal.price).toFixed(2)}</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{deal.name}</h3>
                <ul className="text-gray-400 text-xs space-y-1 mb-3">{deal.items.map((item, i) => (<li key={i}>✓ {item}</li>))}</ul>
                <div className="flex items-center justify-between">
                  <div><span className="text-primary font-bold text-xl">${deal.price}</span><span className="text-gray-500 line-through text-sm ml-2">${deal.originalPrice}</span></div>
                  <button onClick={() => addToCart({ id: `deal-${deal.id}`, name: deal.name, price: deal.price, image: deal.image })} className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-dark"><FiPlus size={20} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">🏷️ Items on Sale</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealItems.map((item) => (
            <div key={item.id} className="card-dark group">
              <div className="relative overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">{Math.round((1 - item.price / item.originalPrice) * 100)}% OFF</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <div><span className="text-primary font-bold text-lg">${item.price}</span><span className="text-gray-500 line-through text-sm ml-2">${item.originalPrice}</span></div>
                  <button onClick={() => addToCart(item)} className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark"><FiPlus size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;