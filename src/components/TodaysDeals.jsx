import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { dealCombos } from '../data/data';
import { useCart } from '../context/CartContext';

const TodaysDeals = () => {
  const { addToCart } = useCart();

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-0.5 bg-primary" />
          <span className="text-primary font-medium text-sm tracking-wider">TODAY'S BEST DEALS</span>
          <div className="w-8 h-0.5 bg-primary" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dealCombos.map((deal) => (
            <div key={deal.id} className="card-dark group">
              <div className="relative overflow-hidden">
                <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">DEAL</div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{deal.name}</h3>
                <ul className="text-gray-400 text-xs space-y-0.5 mb-3">
                  {deal.items.map((item, i) => (<li key={i}>{item}</li>))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-lg">${deal.price}</span>
                    <span className="text-gray-500 line-through text-sm">${deal.originalPrice}</span>
                  </div>
                  <button onClick={() => addToCart({ id: `deal-${deal.id}`, name: deal.name, price: deal.price, image: deal.image })} className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark hover:bg-accent transition-colors">
                    <FiPlus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/deals" className="btn-outline">View All Deals <FiArrowRight /></Link>
        </div>
      </div>
    </section>
  );
};

export default TodaysDeals;