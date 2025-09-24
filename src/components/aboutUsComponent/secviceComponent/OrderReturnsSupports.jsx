import React from 'react'
import FAQSection from '../../commonComponent/FAQSection'
import { useTranslation } from 'react-i18next';

const OrderReturnsSupports = () => {
    const { t, i18n } = useTranslation();
    const faqsArray = t("Service.ServiceTab.FAQ.OrderReturnsSupports.faqs", { returnObjects: true });
    const title = t("Service.ServiceTab.FAQ.OrderReturnsSupports.title");
    const faqs = [
        {
            question: "Can I cancel or return my order?",
            answer: "Custom items are excluded from the standard right of withdrawal. After payment, orders are non-cancellable; any exception must be agreed in writing before production starts (incurred costs apply).",
        },
        {
            question: "Do you have a showroom?",
            answer: "By-appointment visits are planned. Until then, we provide digital consults and material samples (a deposit/fee may apply).",
        },
        {
            question: "Do you work with architects and interior designers?",
            answer: "Yes—trade/project collaborations are welcome. Contact us for specs, samples, and trade terms.",
        },
        {
            question: "Can I configure online and upload drawings/photos?",
            answer: "Yes—key options can be configured online; ultra-custom builds switch to Request a Quote. After purchase you can upload drawings/photos for verification and scheduling.",
        },
        {
            question: "s my payment and data secure?",
            answer: "Yes—payments via Mollie with SCA/3-D Secure where applicable. We store only the data needed to process your order and provide service, per our privacy policy.",
        },
        {
            question: "How do I contact support and how fast do you reply?",
            answer: "Email info@zebranostudio.com with your order number and details; include photos for technical issues. We typically respond within 1–3 business days.",
        },
    ]
    return (
        <div>
            <FAQSection title={title} faqs={faqsArray} />
        </div>
    )
}

export default OrderReturnsSupports