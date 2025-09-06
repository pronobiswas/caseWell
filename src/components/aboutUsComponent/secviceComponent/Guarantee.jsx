import React from 'react'
import FAQSectionTwo from '../../commonComponent/FAQSectionTwo';




const title = "";
const faqs = [
  {
    question: "Duration",
    answers: [
      `<b>2 years</b> from delivery date.`,
    ],
  },
  {
    question: "What We Cover",
    answers: [
      `Manufacturing defects, structural integrity, hardware function (under normal residential/commercial use), bonding/lamination of veneer, and factory finishes per specification.`,
    ],
  },
  {
    question: "What’s Not Covered",
    answers: [
      `Wear and tear, scratches, dents, stains. `,
      `Damage from misuse, impact, water ingress, or abnormal climate (RH outside 40–60%). `,
      `Colour/vein variations of natural materials (wood/stone).`,
      `Movement/warping caused by humidity/temperature extremes or improper storage. `,
      `Third-party installation or modifications, and non-Zebrano hardware. `,
    ],
  },
  {
    question: "Claims Process",
    answers: [
      `Email photos, description, order/invoice number. We may inspect on site. Remedy is at our discretion: repair, replacement, or refund of the defective item. Consequential costs are excluded.`
    ],
  },
  
];

const Guarantee = () => {
  return (
    <>
      <section id="guarantee">
        <div className="wrapper py-5 2xl:pl-32">
          {/* heading */}
          <div className='pt-10 pb-6'>
            <h2 className='text-4xl mb-5'>Guarantee (Netherlands) </h2>
            <p className='mb-0'>We stand behind our craftsmanship.</p>
          </div>
          <FAQSectionTwo faqs={faqs} title={title} />
          
          
        </div>
      </section>
    </>
  )
}

export default Guarantee