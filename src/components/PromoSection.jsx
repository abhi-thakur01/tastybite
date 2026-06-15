import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCopy, FiCheck } from 'react-icons/fi';

const PromoSection = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText('TASTY20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Promo" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-red-500" />
            <span className="text-red-500 font-medium text-sm tracking-wider">LIMITED TIME OFFER</span>
            <div className="w-8 h-0.5 bg-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get <span className="text-primary">20% OFF</span></h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">On Your First Order!</h3>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-darkCard border border-dashed border-primary rounded-lg px-4 py-2 flex items-center gap-2">
              <span className="text-sm text-gray-400">Use Code:</span>
              <span className="text-primary font-bold text-lg">TASTY20</span>
            </div>
            <button onClick={copyCode} className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors">
              {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-primary" />}
            </button>
          </div>
          <Link to="/menu" className="btn-primary">Order Now <FiArrowRight /></Link>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center shadow-2xl shadow-primary/30">
            <span className="text-3xl font-bold text-dark">20%</span>
            <span className="text-dark font-bold text-sm">OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;