import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Stats from '../components/Stats';

const About = () => {
  const team = [
    { name: "Chef Marco", role: "Head Chef", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Sarah Williams", role: "Pastry Chef", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Chef Rashid", role: "Biryani Expert", image: "https://randomuser.me/api/portraits/men/36.jpg" },
    { name: "Emma Davis", role: "Nutritionist", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920" alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">About TastyBite</h1><p className="text-gray-300">Our story of passion for great food</p></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm">OUR STORY</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">From Kitchen to Your <span className="text-primary">Doorstep</span></h2>
            <p className="text-gray-300 mb-4">TastyBite was founded in 2020 with a simple mission: to deliver restaurant-quality food to your doorstep.</p>
            <p className="text-gray-300 mb-6">We believe everyone deserves access to delicious, freshly prepared meals.</p>
            <div className="grid grid-cols-2 gap-4">
              {["Premium Ingredients", "Expert Chefs", "Fast Delivery", "24/7 Support", "Hygiene Standards", "Affordable Prices"].map((item, i) => (
                <div key={i} className="flex items-center gap-2"><FiCheck className="text-green-400" /><span className="text-gray-300 text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400" alt="Kitchen" className="rounded-2xl h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400" alt="Food" className="rounded-2xl h-64 w-full object-cover mt-8" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12"><h2 className="text-3xl font-bold">Meet Our Expert Chefs</h2></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div key={i} className="card-dark text-center p-6 group">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-transparent group-hover:border-primary transition-colors" />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-primary text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default About;