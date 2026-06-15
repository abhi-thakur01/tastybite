import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { faqData } from '../data/data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark/50 z-10" />
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920" alt="FAQ" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div><h1 className="text-3xl md:text-5xl font-bold mb-2">FAQ</h1><p className="text-gray-300">Frequently Asked Questions</p></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="card-dark overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? <FiChevronUp className="text-primary" /> : <FiChevronDown className="text-gray-400" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-6 text-gray-300 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;