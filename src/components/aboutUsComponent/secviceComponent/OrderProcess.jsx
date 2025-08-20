import React from 'react'
import FAQSection from '../../commonComponent/FAQSection'

const OrderProcess = () => {
  const title = "Got questions? You'll find plenty of answers in our FAQ,including:";
  const faqs = [
    {
      question: "Consultation & Proposal",
      answer: "We discuss scope, materials, finishes, and installation. You receive a written proposal with pricing and indicative lead time. Quotes are valid 30 days unless material volatility is noted.",
    },
    {
      question: "Measurement",
      answer: "You can provide measurements, or we perform a paid measurement service (recommended). If you supply measurements, you accept responsibility for dimensional accuracy.",
    },
    {
      question: "Technical Drawings & Sign-off",
      answer: "We prepare drawings/specs. Production only proceeds after written approval of all drawings, finishes, and hardware.",
    },
    {
      question: "Payment",
      answer: "We work with 100% upfront payment. See “Payment Process” for accepted methods (iDEAL, cards, Apple Pay, PayPal, SEPA) and invoicing details.",
    },
    {
      question: "Production & Quality Control",
      answer: "Upon payment + approval, we reserve your production slot. Lead time starts. Each item is checked for finish quality, fit, and function.",
    },
    {
      question: "Pre-Delivery Scheduling",
      answer: "Near completion we propose a delivery/installation window. You confirm access, parking, lift/stair details, and site readiness.",
    },
    {
      question: "Delivery / Installation & Handover",
      answer: "We deliver or deliver-and-install (NL only). After installation we perform functional checks and share care guidance.",
    },
  ]
  return (
    <>
      <section id="orderProcess">
        <div className="wrapper py-5">

          <div className='pt-10 pb-6'>
            <h2 className='text-4xl mb-5'>Everything About Our Order Process (Netherlands) </h2>
            <p>Our products are made to order. We follow a fixed sequence so timelines stay reliable. </p>
          </div>

          <FAQSection title={title} faqs={faqs} />
          <div className='py-5'>
            <h3 className='text-2xl mb-2'><b>Change Requests</b></h3>
            <p>Any change after approval (finish/size/hardware) may alter price and timeline. Work resumes after <b>full payment</b> of the change order.</p>
          </div>
          <div className='py-5'>
            <h3 className='text-2xl mb-2'>
              <b>Cancellations</b>
            </h3>
            <p className='w-full max-w-5xl'>
              Custom items are excluded from the standard right of withdrawal. Cancellations after payment are not possible unless agreed in writing before production starts (admin/design costs apply).
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default OrderProcess