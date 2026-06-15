import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍕</span>
              <div>
                <h3 className="text-xl font-bold"><span className="text-primary">Tasty</span><span>Bite</span></h3>
                <p className="text-[8px] text-gray-400 -mt-1">GOOD FOOD, GREAT MOOD</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">Fresh ingredients, expert chefs and fast delivery. Experience the best food like never before.</p>
            <div className="flex gap-3">
              {[<FaFacebookF />, <FaInstagram />, <FaTwitter />, <FaYoutube />].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-darkCard rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-dark transition-all text-sm">{icon}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-primary">QUICK LINKS</h4>
            <ul className="space-y-2">
              {[{ name: 'Home', path: '/' }, { name: 'Menu', path: '/menu' }, { name: 'Categories', path: '/categories' }, { name: 'Deals', path: '/deals' }, { name: 'About Us', path: '/about' }, { name: 'Contact', path: '/contact' }].map((link) => (
                <li key={link.name}><Link to={link.path} className="text-gray-400 hover:text-primary text-sm transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-primary">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              {[{ name: 'Help Center', path: '/help' }, { name: 'Track Order', path: '/track-order' }, { name: 'Returns & Refunds', path: '/returns' }, { name: 'Terms & Conditions', path: '/terms' }, { name: 'Privacy Policy', path: '/privacy' }, { name: 'FAQ', path: '/faq' }].map((link) => (
                <li key={link.name}><Link to={link.path} className="text-gray-400 hover:text-primary text-sm transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-primary">CONTACT US</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm"><FiPhone className="mt-1 text-primary" />+1 (234) 567-8900</li>
              <li className="flex items-start gap-2 text-gray-400 text-sm"><FiMail className="mt-1 text-primary" />support@tastybite.com</li>
              <li className="flex items-start gap-2 text-gray-400 text-sm"><FiMapPin className="mt-1 text-primary" />123 Foodie Street, NY</li>
              <li className="flex items-start gap-2 text-gray-400 text-sm"><FiClock className="mt-1 text-primary" />Mon-Sun: 8AM-11PM</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-sm mb-4 text-primary">DOWNLOAD APP</h4>
            <div className="space-y-2">
              <a href="#" className="block bg-darkCard border border-gray-700 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-primary transition-colors">
                <span className="text-2xl">🍎</span>
                <div><p className="text-[10px] text-gray-400">Download on the</p><p className="text-sm font-semibold">App Store</p></div>
              </a>
              <a href="#" className="block bg-darkCard border border-gray-700 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-primary transition-colors">
                <span className="text-2xl">▶️</span>
                <div><p className="text-[10px] text-gray-400">GET IT ON</p><p className="text-sm font-semibold">Google Play</p></div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 TastyBite. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-blue-500">VISA</span>
            <span className="text-sm font-bold text-red-500">MasterCard</span>
            <span className="text-sm font-bold text-blue-400">PayPal</span>
            <span className="text-sm font-bold text-green-500">AMEX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;