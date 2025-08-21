import React from 'react'
import FAQSection from '../../commonComponent/FAQSection';

const LeadTimesScheduling = () => {
    const title="Lead Times & Scheduling ";
    const faqs = [
    {
      question: " What are standard production lead times?",
      answer: "Doors (pivot/sliding/hinged) 6–8 weeks; Flush-to-Wall 8–10 weeks; Wall partitions 6–8 weeks; Boiserie 8–10 weeks.",
    },
    {
      question: " When does the lead time start?",
      answer: "After full payment and written approval of drawings/specs.",
    },
    {
      question: "Do you offer expedited production?",
      answer: "Typically ~2 weeks faster at additional cost, subject to capacity and material availability.",
    },
    {
      question: " Will I get updates during production?",
      answer: "Yes—status updates are shared, and we propose a delivery/installation window near completion.",
    },
    {
      question: "Can you hold a slot while I decide?",
      answer: "No—production slots aren’t reserved without payment and approval.",
    },
    {
      question: "Can I postpone delivery/installation?",
      answer: "Yes—inform us early. Storage or re-visit fees may apply depending on duration and scope.",
    },
  ]
  return (
    <div>
        <FAQSection title={title} faqs={faqs} />
    </div>
  )
}

export default LeadTimesScheduling