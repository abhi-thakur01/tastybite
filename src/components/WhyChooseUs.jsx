import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

const WhyChooseUs = () => {
  const reasons = ["High quality raw material", "On-time delivery", "Affordable prices", "24/7 Customer support"];

  return (
    <section className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm tracking-wider">WHY CHOOSE US?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">We're Different,<br />Just Like <span className="text-primary">You</span></h2>
            <p className="text-gray-300 mb-6">We focus on quality, taste and customer satisfaction. That's why our customers love us and keep coming back.</p>
            <ul className="space-y-3 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center"><FiCheck className="text-green-400 text-xs" /></div>
                  <span className="text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-outline">Learn More <FiArrowRight /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" alt="Food 1" className="rounded-2xl w-full h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" alt="Food 2" className="rounded-2xl w-full h-64 object-cover mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;