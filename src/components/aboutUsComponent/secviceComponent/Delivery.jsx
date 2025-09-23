import React, { useRef, useState } from 'react'
import FAQSection from '../../commonComponent/FAQSection'
import FAQSectionTwo from '../../commonComponent/FAQSectionTwo';
import { useTranslation } from "react-i18next";

const faqs = [
  {
    question: "Delivery Options",
    answers: [
      `<b>Supply-Only:</b>Kerbside/ground-floor delivery to the first accessible point.`,
      `Two-person delivery to room of choice (if access permits). Packaging removal on request.`
    ],
  },
  {
    question: "Scheduling & Access",
    answers: [
      `We agree a date + time window. You ensure safe access (door widths, lifts, staircases), parking permits if needed, and a clear path. If access is not possible, re-delivery and/or additional handling costs apply.`,
    ],
  },
  {
    question: "Packaging & Protection",
    answers: [
      `Doors and panels ship with full foam protection and edge guards. Accessories are packed in branded sleeves/boxes.`,
    ],
  },
  {
    question: "Damage on Arrival",
    answers: [
      `Visible damage:</b>note on the delivery form <b>immediately</b> and photograph before unwrapping.`,
      `Concealed damage:</b> report in writing within <b>24 hours</b> of delivery with photos and order number. `
    ],
  },
  {
    question: "Risk Transfer",
    answers: [
      `Risk transfers at delivery. For white-glove/installation, risk transfers after placement in the agreed room/area.`,
    ],
  },
  {
    question: "Installation (Optional, NL only)",
    answers: [
      `Risk transfers at delivery. For white-glove/installation, risk transfers after placement in the agreed room/area.`,
      `Fitting frames/leafs/hardware supplied by Zebrano.`,
      `Alignment, clearances, functional checks (swing/slide/pivot).`,
      `Basic sealing/finishing where specified.`,
      `Not included: structural changes, electrical works, plastering/painting, third-party materials, and works outside the agreed opening.`,
    ],
  },
  {
    question: "Site Readiness (Required)",
    answers: [
      `Finished openings within tolerance, walls plumb/level.`,
      `Interior climate: <b>15–25°C</b> and <b>40–60</b>% <b>RH</b>.`,
      `Substrates dry; area clean and accessible; 230V power available.
              Re-visits due to site not ready are chargeable and must be paid <b>before</b> re-scheduling. `,
    ],
  },
];


const Delivery = () => {
  const { t, i18n } = useTranslation();
    const faqsArray = t("Service.ServiceTab.Delivery.faqs", { returnObjects: true });

  return (
    <>
      <div className='py-5 2xl:pl-32'>

        <div className='pt-10 pb-6'>
          <h2 className='text-4xl mb-5'>{t("Service.ServiceTab.Delivery.title")}</h2>
          <p>{t("Service.ServiceTab.Delivery.desc")}</p>
        </div>
        <FAQSectionTwo faqs={faqsArray} />
      </div>


    </>
  )
}

export default Delivery
