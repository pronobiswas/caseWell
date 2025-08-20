import React from 'react'
import FAQSection from '../../commonComponent/FAQSection';

const MeasurementDesignApprovals = () => {
    const title="Measurement, Design & Approvals";
    const faqs = [
    {
      question: "Who takes measurements?",
      answer: "You can supply sizes or book our paid measurement service (recommended). If you provide sizes, you are responsible for accuracy.",
    },
    {
      question: "What documents do I receive before production?",
      answer: "A proposal, technical drawings/specifications, and (if applicable) installation notes for supply-only projects.",
    },
    {
      question: "How do I approve the design?",
      answer: "You provide written approval of drawings/specs. Production starts only after approval and payment.",
    },
    {
      question: "Can you work from architect drawings?",
      answer: "Yes via a change order; price/lead time may change. Work resumes after full payment of the change order.",
    },
    {
      question: "Can I change the order after approval?",
      answer: "Yes—also maintain a 25×25 cm pipe-free zone measured from the pivot point.",
    },
    {
      question: "Do you offer 3D or visual previews?",
      answer: "We can provide visual previews/renders for selected lines; availability depends on scope and may incur a design fee.",
    },
  ]
  return (
    <div>
        <h1 className='text-5xl mt-12 mb-8'>Measurement, Design & Approvals</h1>
        <FAQSection title={title} faqs={faqs} />
    </div>
  )
}

export default MeasurementDesignApprovals