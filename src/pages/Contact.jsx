import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setFormData({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setSubmitted(false), 5000); };

  const contactInfo = [
    { icon: <FiPhone />, title: "Phone", info: "+1 (234) 567-8900" },
    { icon: <FiMail />, title: "Email", info: "support@tastybite.com" },
    { icon: <FiMapPin />, title: "Address", info: "123 Foodie Street, NY" },
    { icon: <FiClock />, title: "Hours", info: "Mon-Sun 8AM-11PM" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">Contact Us</h1><p className="text-gray-300">We'd love to hear from you</p></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, i) => (
            <div key={i} className="card-dark p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl mx-auto mb-4">{item.icon}</div>
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-darkCard rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="text-center py-12"><div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><FiSend className="text-green-400 text-2xl" /></div><h3 className="text-xl font-bold text-green-400">Message Sent!</h3></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium mb-2">Name</label><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                  <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                </div>
                <div><label className="block text-sm font-medium mb-2">Subject</label><input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <div><label className="block text-sm font-medium mb-2">Message</label><textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full bg-dark border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary" required /></div>
                <button type="submit" className="btn-primary w-full justify-center"><FiSend /> Send Message</button>
              </form>
            )}
          </div>
          <div className="rounded-2xl overflow-hidden h-96 lg:h-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976253858133!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1636587385089!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0, minHeight: '400px' }} allowFullScreen="" loading="lazy" title="Map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;