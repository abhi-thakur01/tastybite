import React from 'react';

const TermsConditions = () => {
  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: December 2024</p>
          <section><h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2><p>By using TastyBite's services, you agree to these terms and conditions.</p></section>
          <section><h2 className="text-xl font-bold text-white mb-3">2. Orders</h2><p>All orders are subject to availability. We reserve the right to refuse any order.</p></section>
          <section><h2 className="text-xl font-bold text-white mb-3">3. Pricing</h2><p>All prices are in USD. We reserve the right to change prices without notice.</p></section>
          <section><h2 className="text-xl font-bold text-white mb-3">4. Delivery</h2><p>Delivery times may vary based on weather, traffic, and order volume.</p></section>
          <section><h2 className="text-xl font-bold text-white mb-3">5. Cancellations</h2><p>Orders can be cancelled within 5 minutes of placement for a full refund.</p></section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;