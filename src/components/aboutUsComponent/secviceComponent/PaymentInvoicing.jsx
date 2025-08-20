import React from 'react'
import FAQSection from '../../commonComponent/FAQSection'

const PaymentInvoicing = () => {
    const title="Payment & Invoicing ";
    const faqs = [
    {
      question: "When do I pay?",
      answer: "100% upfront on order confirmation (after final drawings/measurements are approved).",
    },
    {
      question: "Which payment methods are accepted?",
      answer: "iDEAL, credit cards (Visa/Mastercard/Amex), Apple Pay, PayPal, and SEPA bank transfer (1–2 business days). Payments are processed securely via Mollie.",
    },
    {
      question: "How are prices shown and how is VAT handled?",
      answer: "Prices are in EUR and excl. 21% BTW unless stated. VAT is calculated on the invoice/checkout.",
    },
    {
      question: "Do you offer payment in arrears or split invoices?",
      answer: "No arrears; we don’t split one order across multiple entities.",
    },
    {
      question: "What invoice details do you need for businesses?",
      answer: "Legal entity name, address, KvK and BTW-nummer. Ensure accuracy before payment.",
    },
    {
      question: "Are payments secure?",
      answer: "Yes—SCA/3-D Secure where applicable; we may verify payer identity on high-value orders.",
    },
  ]
  return (
    <div>
        <h1 className='text-5xl mt-12 mb-8'>Payment & Invoicing </h1>
        <FAQSection title={title} faqs={faqs} />
    </div>
  )
}

export default PaymentInvoicing