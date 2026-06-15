import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200" alt="Newsletter" className="w-24 h-24 rounded-full object-cover hidden sm:block border-2 border-primary" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Stay Updated!</h2>
              <p className="text-gray-400 text-sm mt-1">Subscribe to get special offers, free giveaways and latest updates.</p>
            </div>
          </div>
          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="flex-1 md:w-72 bg-darkCard border border-gray-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary" required />
            <button type="submit" className="bg-primary hover:bg-accent text-dark font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
              {subscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;