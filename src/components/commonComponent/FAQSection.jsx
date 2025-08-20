import React, { useEffect, useRef, useState } from 'react';
import '../../index.css';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

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
    const titleRef = useRef(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    useEffect(() => {
        const ctx = gsap.context(() => {
          
    
          const titleSplit = new SplitText(titleRef.current, {
            type: 'lines,words,chars',
            linesClass: 'line overflow-hidden block',
          });
          gsap.from(titleSplit.chars, {
            rotateY: 90,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.03,
          });
    
        });
    
    
        return () => ctx.revert();
      }, []);
    return (
        <section className="w-full p-6">
            <h2 ref={titleRef} className="text-3xl  mb-8 text-right">{title}</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="w-full border-b border-b-black py-2">
                        <button
                            className="gradient_text w-full text-left  flex justify-between items-center text-2xl"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span>{openIndex === index ? "-" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="gradient_text text-xl p-5 text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQSection