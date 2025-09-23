import React, { useEffect, useRef, useState } from 'react';
import '../../index.css';
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
// i18n.language

const FAQSection = ({
    title="",
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

    const { t, i18n } = useTranslation();

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
      }, [i18n.language]);
    return (
        <section key={i18n.language}  className="w-full p-6">
            <h2 ref={titleRef} className="text-3xl  mb-8 text-right">{title}</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="w-full border-b border-b-black py-2">
                        <button
                            className="gradient_text w-full text-left  flex justify-between items-center text-2xl font-Poppins"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span>{openIndex === index ? "-" : "+"}</span>
                        </button>
                        {openIndex === index && (
                            <div className="gradient_text text-xl p-5 text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQSection