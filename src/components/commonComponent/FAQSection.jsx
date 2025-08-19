import React, { useState } from 'react';
import '../../index.css'

const FAQSection = ({
    title="Got questions? You'll find plenty of answers in our FAQ,including:",
    faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return any item within 30 days of purchase for a full refund.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship worldwide. Shipping costs depend on your location.",
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you’ll receive an email with a tracking link.",
        },
    ]
}) => {
    const [openIndex, setOpenIndex] = useState(null);


   


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <section className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl  mb-8 text-right">{title}</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="w-full border-b border-b-black py-2">
                        <button
                            className="gradient_text w-full text-left  flex justify-between items-center text-xl"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span>{openIndex === index ? "-" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="gradient_text pt-3 text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQSection