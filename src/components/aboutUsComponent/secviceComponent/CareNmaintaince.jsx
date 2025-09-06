import React from 'react'
import FAQSectionTwo from '../../commonComponent/FAQSectionTwo';


const faqs = [
  {
    question: "Glass (clear, low-iron, fluted, tinted)",
    answers: [
      `Clean with glass cleaner or mild soap solution; dry with lint-free cloth.`,
      `Avoid abrasives and blades on decorative/textured glass.`,
      `Do not attach adhesive hooks/films without verifying compatibility.`,
    ],
  },
  {
    question: "Solid Wood ",
    answers: [
      `Weekly dusting; wipe with slightly damp cloth, dry immediately.`,
      `Avoid abrasives and blades on decorative/textured glass.`,
      `Do not attach adhesive hooks/films without verifying compatibility.`,
    ],
  },
  {
    question: "Wood Veneer",
    answers: [
      `Treat like fine furniture: soft, dry cloth or lightly dampened; dry after.`,
      `Do not sand</b> veneer.`,
      `If oiled: light maintenance oil <b>annually</b>. If lacquered: only mild cleaners, no wax.`,
      `Expect natural grain/colour variation.`,
    ],
  },
  {
    question: "Marble / Natural Stone & Ceramic",
    answers: [
      `Use <b>pH-neutral</b> stone cleaner; avoid acids/alkalis (vinegar, lemon, bleach).`,
      `Wipe spills (wine, coffee, citrus, oils) immediately to prevent etching/stains.`,
      `<b>Seal natural stone</b> periodically (typically before <b>1× per year</b> ); ceramics generally don’t require sealing.`,
      `Use trivets/coasters; avoid dragging metal objects.`,
    ],
  },
  {
    question: "MHardware, Hinges & Metal Finishes (incl. Pivot/Slide Mechanisms)",
    answers: [
      `Wipe with dry or slightly damp soft cloth <b>no abrasives or solvents.</b>`,
      `Lightly lubricate moving parts every <b>6–12 months</b> (use manufacturer-approved lubricant).`,
      `Tighten visible screws if they loosen with use; do not adjust concealed mechanisms unless instructed.`,
      `PVD/bronze/black finishes can patinate with time—this is normal.`,
    ],
  },
  {
    question: "Hinged & Pivot Doors — Usage Tips",
    answers: [
      `Do not force against stops; avoid hanging weight (bags/clothes) on handles.`,
      `Ensure floor/track areas stay clean to prevent premature wear.`,
    ],
  },
  {
    question: "Maintenance Summary (Typical)",
    answers: [
      `Weekly: dust/wipe surfaces.`,
      `Quarterly: check hardware, clean tracks/pivots.`,
      `Annually: oil/wax (if applicable), stone reseal (natural stone), general inspection.`,
    ],
  },
];

const CareNmaintaince = () => {
  return (
    <section id="care_N_maintaince">
      <div className="wrapper py-5 2xl:pl-32">
        {/* heading */}
        <div className='pt-10 pb-6'>
          <h2 className='text-4xl mb-5'>Care & Maintenance  </h2>
          <p>Regular care protects the finish and function. Always use soft cloths and <b>pH-neutral</b> cleaners unless noted. </p>
        </div>
        <FAQSectionTwo faqs={faqs} />
        
      </div>
    </section>
  )
}

export default CareNmaintaince