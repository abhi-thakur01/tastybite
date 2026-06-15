import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Categories', path: '/categories' },
    { name: 'Deals', path: '/deals' },
    { name: 'About Us', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-dark/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🍕</span>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-primary">Tasty</span>
                <span className="text-white">Bite</span>
              </h1>
              <p className="text-[8px] text-gray-400 -mt-1 hidden sm:block">GOOD FOOD, GREAT MOOD</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              {searchOpen && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search food..."
                  className="absolute right-10 top-1/2 -translate-y-1/2 w-48 md:w-64 bg-darkCard border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
                  autoFocus
                />
              )}
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-gray-300 hover:text-primary transition-colors">
                <FiSearch size={20} />
              </button>
            </div>

            <button onClick={toggleCart} className="relative p-2 text-gray-300 hover:text-primary transition-colors">
              <FiShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <Link to="/menu" className="hidden md:inline-flex btn-primary text-sm py-2 px-4">
              Order Now
            </Link>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-300 hover:text-primary">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-dark/95 backdrop-blur-md border-t border-gray-800 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path ? 'text-primary bg-primary/10' : 'text-gray-300 hover:text-primary hover:bg-primary/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/menu" className="btn-primary w-full justify-center mt-4 text-sm">Order Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;