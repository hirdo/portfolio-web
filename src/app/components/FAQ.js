// components/FAQ.js
import React from "react";

const FAQ = ({ faqs }) => {
  return (
    <div className="faq-section pb-8 px-4 lg:px-12">
      <h2 className="text-4xl font-bold mt-4 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <p className="text-base">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
