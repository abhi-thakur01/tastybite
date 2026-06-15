import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: "❤️", number: "10K+", label: "Happy Customers" },
    { icon: "🍽️", number: "500+", label: "Delicious Dishes" },
    { icon: "👨‍🍳", number: "50+", label: "Expert Chefs" },
    { icon: "🏙️", number: "25+", label: "Cities Covered" },
  ];

  return (
    <section ref={ref} className="py-12 bg-darkCard">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</h3>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;