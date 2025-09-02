import React, { useRef, useState } from 'react'



const FAQSectionTwo = ({
    title = "Testing Purpose",
    faqs = [
        {
            question: "Consultation & Proposal",
            answers: [
                `We discuss scope, materials, finishes, and installation. You receive a written proposal with pricing and indicative lead time. Quotes are  valid 30 days unless material volatility is noted.`,
                `We discuss scope, materials, finishes, and installation. You receive a written proposal with pricing  and indicative lead time. Quotes are  valid 30 days unless material volatility is noted.`,
                `We discuss scope, materials, finishes.`,
                `We discuss scope, materials, finishes, and installation. You receive a written proposal with pricing.`,
            ],
        },
        {
            question: "Measurement",
            answers: [
                `You can provide measurements, or we perform a paid measurement service (recommended). If you supply measurements, you accept responsibility for dimensional accuracy.`,
            ],
        },
    ]
}

) => {
    const [openIndex, setOpenIndex] = useState(null);
    const titleRef = useRef();
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <>
            <section className="w-full p-6">
                <h2 ref={titleRef} className="text-3xl mb-8 text-right">
                    {title}
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-full border-b border-b-black py-2">
                            <button
                                className="gradient_text w-full text-left flex justify-between items-center text-2xl font-Poppins"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{openIndex === index ? "-" : "+"}</span>
                            </button>

                            {openIndex === index && (
                                <div className="gradient_text text-xl p-5 text-gray-600 space-y-3">
                                    {faq.answers.map(
                                        (answer, i) =>
                                            answer && (
                                                <p
                                                    key={i}
                                                    dangerouslySetInnerHTML={{ __html: answer }}
                                                />
                                            )
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default FAQSectionTwo