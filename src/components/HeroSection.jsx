import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Food" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-medium text-sm tracking-wider">GOOD FOOD, GREAT LIFE</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Delicious food,<br />
              <span className="text-primary">delivered</span> to you
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-md">
              We serve freshly cooked, hygienic and delicious meals right at your doorstep.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link to="/menu" className="btn-primary text-base">Order Now <FiArrowRight /></Link>
              <button className="flex items-center gap-3 text-white hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-white group-hover:border-primary flex items-center justify-center transition-colors">
                  <FiPlay size={18} />
                </div>
                <span className="font-medium">Watch Video</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`} alt="Customer" className="w-10 h-10 rounded-full border-2 border-dark" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">10K+ Happy Customers</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (<FaStar key={i} className="text-primary text-xs" />))}
                  <span className="text-xs text-gray-400 ml-1">4.8 (2.5k reviews)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600" alt="Food" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-darkCard rounded-2xl p-4 shadow-xl animate-bounce">
                <p className="text-primary font-bold text-lg">20% OFF</p>
                <p className="text-xs text-gray-400">First Order</p>
              </div>
              <div className="absolute top-4 -right-4 bg-darkCard rounded-2xl p-4 shadow-xl">
                <p className="text-white font-bold">⭐ 4.9</p>
                <p className="text-xs text-gray-400">Top Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;