import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { reviews } from '../data/data';

const ReviewsPage = () => {
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setNewReview({ name: '', text: '', rating: 5 });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Reviews" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">Customer Reviews</h1></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 bg-darkCard rounded-2xl p-8">
          <h2 className="text-5xl font-bold text-primary mb-2">4.8</h2>
          <div className="flex items-center justify-center gap-1 mb-2">{[...Array(5)].map((_, i) => (<FaStar key={i} className="text-primary text-xl" />))}</div>
          <p className="text-gray-400">Based on 2,500+ reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="card-dark p-6">
              <div className="flex items-center gap-1 mb-4">{[...Array(review.rating)].map((_, i) => (<FaStar key={i} className="text-primary text-sm" />))}</div>
              <p className="text-gray-300 text-sm mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div><h4 className="font-semibold text-sm">{review.name}</h4><p className="text-gray-400 text-xs">{review.location}</p></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-darkCard rounded-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Write a Review</h2>
          {submitted ? (
            <div className="text-center text-green-400 py-8"><p className="text-2xl mb-2">✓</p><p className="font-semibold">Thank you for your review!</p></div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-sm font-medium mb-2">Your Name</label><input type="text" value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-2">{[1, 2, 3, 4, 5].map((star) => (<button key={star} type="button" onClick={() => setNewReview({ ...newReview, rating: star })}><FaStar className={`text-2xl ${star <= newReview.rating ? 'text-primary' : 'text-gray-600'}`} /></button>))}</div>
              </div>
              <div><label className="block text-sm font-medium mb-2">Your Review</label><textarea value={newReview.text} onChange={(e) => setNewReview({ ...newReview, text: e.target.value })} rows={4} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
              <button type="submit" className="btn-primary w-full justify-center">Submit Review</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;