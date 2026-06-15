import React from 'react';

const ReturnsRefunds = () => {
  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Returns & Refunds</h1>
        <div className="space-y-6 text-gray-300">
          <section><h2 className="text-xl font-bold text-white mb-3">Refund Policy</h2><p>We want you to be completely satisfied with your order.</p></section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Eligible for Refund</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Wrong items delivered</li>
              <li>Missing items from your order</li>
              <li>Quality issues</li>
              <li>Order not delivered within 2 hours</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">How to Request</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Contact us within 24 hours</li>
              <li>Provide your order ID and photos</li>
              <li>Team reviews within 24-48 hours</li>
              <li>Refunds processed in 5-7 business days</li>
            </ol>
          </section>
          <section><h2 className="text-xl font-bold text-white mb-3">Contact</h2><p>Email: support@tastybite.com | Phone: +1 (234) 567-8900</p></section>
        </div>
      </div>
    </div>
  );
};

export default ReturnsRefunds;