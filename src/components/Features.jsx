import React from 'react';

const Features = () => {
  const features = [
    { icon: "🍳", title: "Fresh Ingredients", description: "We use only fresh & premium ingredients." },
    { icon: "👨‍🍳", title: "Expert Chefs", description: "Our expert chefs craft every dish with love." },
    { icon: "🚀", title: "Fast Delivery", description: "Quick & reliable delivery at your doorstep." },
    { icon: "🛡️", title: "Safe & Hygienic", description: "We follow strict hygiene and safety standards." },
    { icon: "😊", title: "100% Satisfaction", description: "We ensure the best experience for you." },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="card-dark p-4 text-center hover:border-primary border border-transparent">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;