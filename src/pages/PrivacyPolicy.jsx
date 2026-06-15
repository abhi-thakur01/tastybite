import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-300">
          <p>Last updated: December 2024</p>
          <section><h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2><p>We collect your name, email, phone, delivery address, and payment info when you place an order.</p></section>
          <section><h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2><p>We use your info to process orders, deliver food, and improve our services.</p></section>
          <section><h2 className="text-xl font-bold text-white mb-3">3. Data Security</h2><p>We implement industry-standard security measures. Your payment data is encrypted using SSL.</p></section>
          <section><h2 className="text-xl font-bold text-white mb-3">4. Contact Us</h2><p>Email: support@tastybite.com | Phone: +1 (234) 567-8900</p></section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;