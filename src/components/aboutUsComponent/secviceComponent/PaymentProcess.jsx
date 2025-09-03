import React from 'react'
import FAQSectionTwo from '../../commonComponent/FAQSectionTwo';


const faqs = [
  {
    question: "Payment Terms",
    answers: [
      `At Zebrano Studio, every piece is crafted to order.`,
      `To keep things simple and transparent, we work with two payments <b>Deposit:</b> A downpayment of <b>35%</b> is required to confirm your order and secure materials and production. The remaining <b>65%</b> is payable before delivery and installation.`,
      `You are always free to pay the full amount upfront if you prefer.`,
      `For large or complex orders, payment terms will be agreed on a case-by-case basis.`,
    ],
  },
  {
    question: "Payment Methods",
    answers: [
      `All payments are processed securely through Mollie. We accept iDEAL, major credit and debit cards, Apple Pay, Bancontact, PayPal, Klarna, and Sofort.`,
    ],
  },
  {
    question: "Custom Orders & Service",
    answers: [
      `Because every Zebrano Studio product is made to measure, the right of withdrawal does not apply. Deposits are non-refundable once production has begun.`,
      `Our team is always available for service or support — we will do our best to help wherever we can.`,
    ],
  },
];

const PaymentProcess = () => {
  return (
    <>
      <div className='py-5 px-0 xl:px-32 font-Poppins'>

        <div>
          <h2 className='text-4xl mb-5'>Payment Terms</h2>
        </div>
        <FAQSectionTwo faqs={faqs} />
      </div>
    </>
  )
}

export default PaymentProcess