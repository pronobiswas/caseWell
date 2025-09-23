import React from 'react'
import FAQSection from '../../commonComponent/FAQSection'
import { useTranslation } from "react-i18next";

const OrderProcess = () => {
  const { t, i18n } = useTranslation();
  const faqsArray = t("Service.ServiceTab.OrderProcess.faqs", { returnObjects: true });
  
  const title = "";
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
    {
      question: "Change Requests",
      answer: "Any change after approval (finish/size/hardware) may alter price and timeline. Work resumes after full payment of the change order",
    },
    {
      question: "Cancellations",
      answer: "Custom items are excluded from the standard right of withdrawal. Cancellations after payment are not possible unless agreed in writing before production starts (admin/design costs apply).",
    },
  ]
  return (
    <>
      <section key={i18n.language} id="orderProcess">
        <div className="wrapper py-5 xl:px-32">

          <div className='pt-10 pb-6'>
            <h2 className='text-4xl mb-5'>{t("Service.ServiceTab.OrderProcess.title")} </h2>
            <p>{t("Service.ServiceTab.OrderProcess.desc")}  </p>
          </div>

          <FAQSection title={title} faqs={faqsArray} />

        </div>
      </section>
    </>
  )
}

export default OrderProcess