import React from 'react'
import FAQSection from '../../commonComponent/FAQSection'

const ProductsNmaterials = () => {
    const title="Products & Materials";
    const faqs = [
    {
      question: "What products do you make?",
      answer: " Made-to-order doors (pivot, sliding, hinged, flush-to-wall/rasomuro), wall partitions (fixed/movable; glass/wood), and boiserie (decorative wall panelling).",
    },
    {
      question: "Which materials and finishes are available?",
      answer: "Solid wood and veneer, lacquer (RAL), glass (clear/low-iron/fluted/tinted), natural stone (e.g., marble), and high-grade ceramics/porcelain; hardware in black, stainless, bronze, or PVD.",
    },
    {
      question: " Do you offer flush-to-wall (rasomuro) doors?",
      answer: "Yes—concealed frames and hardware create a seamless, coplanar look with the wall.",
    },
    {
      question: "How customisable are your doors?",
      answer: "Sizes, finishes, glass types, edge details, hardware sets, and options (e.g., soft-close, pivot closer, seals) are configurable. Ultra-custom builds move to a quote path.",
    },
    {
      question: "Are natural variations normal?",
      answer: "Yes. Grain/colour in wood and veining in stone vary naturally and are not defects.",
    },
    {
      question: " Can you match an existing finish?",
      answer: "We can approach a close match from a physical sample. Exact replication isn’t guaranteed due to natural variation and ageing.",
    },
    {
      question: "Do you supply hardware?",
      answer: "Yes—hinges, pivots, sliders, handles, and seals as specified; third-party hardware by agreement after compatibility checks.",
    },
  ]
  return (
    <div>
        <FAQSection title={title} faqs={faqs} />
    </div>
  )
}

export default ProductsNmaterials