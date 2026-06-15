import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiPackage, FiTruck, FiHome } from 'react-icons/fi';

const OrderTracking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const orderId = `TB${Math.floor(Math.random() * 1000000)}`;

  useEffect(() => {
    const interval = setInterval(() => { setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev)); }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: <FiCheck />, label: "Order Confirmed", desc: "Your order has been placed" },
    { icon: <FiPackage />, label: "Preparing", desc: "Chef is preparing your food" },
    { icon: <FiTruck />, label: "On the Way", desc: "Delivery partner picked up order" },
    { icon: <FiHome />, label: "Delivered", desc: "Enjoy your meal!" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><FiCheck className="text-green-400 text-3xl" /></div>
          <h1 className="text-3xl font-bold mb-2">Order Placed! 🎉</h1>
          <p className="text-primary font-mono mt-2">Order ID: {orderId}</p>
        </div>

        <div className="bg-darkCard rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-8">Track Your Order</h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all ${i <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                    {i < currentStep ? <FiCheck /> : step.icon}
                  </div>
                  {i < steps.length - 1 && <div className={`w-0.5 h-12 mt-2 ${i < currentStep ? 'bg-green-500' : 'bg-gray-700'}`} />}
                </div>
                <div className={`pt-2 ${i <= currentStep ? 'opacity-100' : 'opacity-50'}`}>
                  <h3 className="font-semibold">{step.label}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mt-6 text-center">
          <p className="text-primary font-medium">Estimated Delivery: 30-45 minutes</p>
        </div>

        <div className="flex gap-4 mt-8">
          <Link to="/menu" className="btn-primary flex-1 justify-center">Order More</Link>
          <Link to="/" className="btn-outline flex-1 justify-center">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;