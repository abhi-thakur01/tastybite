import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { reviews } from '../data/data';

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="text-primary font-medium text-sm tracking-wider">WHAT OUR CUSTOMERS SAY</span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <Link to="/reviews" className="text-primary hover:text-accent transition-colors text-sm font-medium flex items-center gap-1">View All Reviews <FiArrowRight /></Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="card-dark p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (<FaStar key={i} className="text-primary text-sm" />))}
              </div>
              <p className="text-gray-300 text-sm mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;