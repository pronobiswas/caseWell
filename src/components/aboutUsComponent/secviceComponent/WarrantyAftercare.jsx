import React from 'react'
import FAQSection from '../../commonComponent/FAQSection';

const WarrantyAftercare = () => {
    const title = "Warranty & Aftercare ";
    const faqs = [
        {
            question: "What warranty do you offer?",
            answer: "2-year warranty on doors/materials (manufacturing defects/structural integrity) and 6-month warranty on installation workmanship (when performed by Zebrano).",
        },
        {
            question: "What is covered and what isn’t?",
            answer: "Covered: mechanisms (hinge/pivot/slide), veneer bonding, and factory/installation defects under normal use. Not covered: wear/tear, misuse/impact, water ingress, abnormal climate (RH <40% or >60%), colour/vein variation, third-party installation/modifications, improper cleaning.",
        },
        {
            question: "How do I make a claim?",
            answer: "Email photos, description, and order/invoice number. We may inspect on site; remedy (at our discretion): repair, replace, or refund of the defective item. Consequential costs are excluded.",
        },
        {
            question: "How do I care for glass surfaces?",
            answer: "Use glass cleaner or mild soap; dry with a lint-free cloth. Avoid abrasives and blades on textured/fluted glass; confirm film/adhesive compatibility first.",
        },
        {
            question: "How do I maintain wood, veneer, stone, and ceramic?",
            answer: "Wood: dust weekly; slightly damp wipe; re-oil/wax 1×/year if specified; maintain 40–60% RH. Veneer: soft dry/lightly damp cloth; do not sand; oiled veneer light oil yearly; lacquered: pH-neutral cleaners only. Stone: pH-neutral cleaners; wipe spills immediately; seal natural stone annually (typical); ceramics generally don’t need sealing.",
        },
        {
            question: "What about hardware, hinges, and mechanisms?",
            answer: "Wipe dry/slightly damp; no solvents/abrasives. Light lubrication every 6–12 months with approved products; tighten visible screws if needed; don’t adjust concealed mechanisms without guidance. ",
        },
    ]
    return (
        <div>
            <h1 className='text-5xl mt-12 mb-8'> Warranty & Aftercare </h1>
            <FAQSection title={title} faqs={faqs} />
        </div>
    )
}

export default WarrantyAftercare