import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';

const HelpCenter = () => {
  const helpTopics = [
    { icon: "🛒", title: "Order Issues", link: "/contact" },
    { icon: "🚚", title: "Delivery Help", link: "/track-order" },
    { icon: "💳", title: "Payment & Refunds", link: "/returns" },
    { icon: "👤", title: "Account Help", link: "/contact" },
    { icon: "📋", title: "Menu & Allergies", link: "/menu" },
    { icon: "❓", title: "General FAQ", link: "/faq" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Help" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">Help Center</h1></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {helpTopics.map((topic, i) => (
            <Link key={i} to={topic.link} className="card-dark p-6 hover:border-primary border border-transparent group">
              <div className="text-3xl mb-4">{topic.icon}</div>
              <h3 className="font-bold group-hover:text-primary transition-colors">{topic.title}</h3>
            </Link>
          ))}
        </div>

        <div className="bg-darkCard rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+12345678900" className="btn-primary"><FiPhone /> Call Us</a>
            <a href="mailto:support@tastybite.com" className="btn-outline"><FiMail /> Email Us</a>
            <Link to="/contact" className="btn-outline"><FiMessageSquare /> Live Chat</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;