import React, { useState } from 'react'

const FAQ = ({
  title="Got questions? You'll find plenty of answers in our FAQ,including:",
    faqs = [
        {
            question: "What products do you make?",
            answer: "Made-to-order doors (pivot, sliding, hinged, flush-to-wall/rasomuro), wall partitions (fixed/movable; glass/wood), and boiserie (decorative wall panelling).",
        },
        {
            question: "Which materials and finishes are available?",
            answer: "Solid wood and veneer, lacquer (RAL), glass (clear/low-iron/fluted/tinted), natural stone (e.g., marble), and high-grade ceramics/porcelain; hardware in black, stainless, bronze, or PVD. ",
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
    <section className="w-full mx-auto p-6">
            <h2 className="text-3xl  mb-8 text-right">{title}</h2>
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
                            <div className="gradient_text text-xl pt-3 text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
  )
}

export default FAQ