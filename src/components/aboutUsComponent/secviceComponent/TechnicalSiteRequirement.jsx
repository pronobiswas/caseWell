import React from 'react'
import FAQSection from '../../commonComponent/FAQSection';

const TechnicalSiteRequirement = () => {
    const title="Technical & Site Requirement";
    const faqs = [
    {
      question: "What are the general site requirements?",
      answer: " Openings square, plumb, and level; substrates dry and fixable; interior climate 15–25 °C and 40–60% RH; clear access and 230 V power.",
    },
    {
      question: "What are the technical requirements for pivot doors?",
      answer: "Ceiling must be screwable (concrete/stone/wood). Plasterboard: add ≥2×18 mm plywood above; steel beams: clad 2×18 mm plywood; suspended/grid: bandraster with ≥4 cm wood behind. We must drill ≥4 cm into the ceiling (no pipes/cables). Walls/ceiling straight and finished; no fixtures in the swing/door plane.",
    },
    {
      question: "What are the floor requirements, incl. underfloor heating (UFH)?",
      answer: "Floor level and firm. We drill ≈10 mm for the pivot—UFH is usually fine. If UFH still to be milled/poured: keep a 25×25 cm pipe-free zone at the pivot.",
    },
    {
      question: "What if the pivot point must move later?",
      answer: "Provide a larger pipe-free zone; contact us to confirm the safe area and fixings before works proceed.",
    },
    {
      question: "Any rules for side panels?",
      answer: "Yes—also maintain a 25×25 cm pipe-free zone measured from the pivot point.",
    },
    {
      question: " How do you handle skirting boards and floor finishes?",
      answer: "A section may need to be sawn at the door position. To avoid this, choose no skirting or a flat plakplint; sawn edges must be finished by your painter.",
    },
    {
      question: "What tolerances do you work to?",
      answer: "Industry-standard build tolerances of ±1–2 mm on components; for handcrafted panels allow up to ±4 mm dimensional/straightness per panel.",
    },
  ]
  return (
    <div>
        <h1 className='text-5xl mt-12 mb-8'>Technical & Site Requirement</h1>
        <FAQSection title={title} faqs={faqs} />
    </div>
  )
}

export default TechnicalSiteRequirement