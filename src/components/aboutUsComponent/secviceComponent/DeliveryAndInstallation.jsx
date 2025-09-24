import React from 'react'
import FAQSection from '../../commonComponent/FAQSection';
import { useTranslation } from 'react-i18next';

const DeliveryAndInstallation = () => {
    const { t, i18n } = useTranslation();
    const faqsArray = t("Service.ServiceTab.FAQ.DeliveryAndInstallation.faqs", { returnObjects: true });
    const title = t("Service.ServiceTab.FAQ.DeliveryAndInstallation.title");
    const faqs = [
        {
            question: "Where do you deliver?",
            answer: "All provinces in the Netherlands.",
        },
        {
            question: "What delivery options are available?",
            answer: "Supply-Only (kerbside/first accessible point) or White-Glove (two-person to room of choice, if access permits). Packaging removal on request.",
        },
        {
            question: " Do you install as well?",
            answer: "Yes—optional installation in NL. Includes fitting Zebrano frames/leafs/hardware, alignment, clearances, and functional checks; excludes structural works, electricals, plastering/painting, and third-party materials.",
        },
        {
            question: "What is “site readiness”?",
            answer: "Openings within tolerance, walls plumb/level, interior climate 15–25 °C/40–60% RH, clean access, and 230 V power. Re-visits due to site not ready are chargeable.",
        },
        {
            question: "How do I report transport damage?",
            answer: "Visible damage: note on the delivery form immediately and photograph before unwrapping. Concealed damage: report within 24 hours with photos and order number (info@zebranostudio.com).",
        },
        {
            question: "What about difficult access (narrow stairs/upper floors)?",
            answer: "Tell us in advance. We can arrange extra manpower or a removal lift; additional costs are quoted before scheduling.",
        },
    ]
    return (
        <div>
            <FAQSection title={title} faqs={faqsArray} />
        </div>
    )
}

export default DeliveryAndInstallation