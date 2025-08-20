import React from 'react'

const Guarantee = () => {
  return (
    <>
      <section id="guarantee">
        <div className="wrapper py-5 2xl:pl-32">
          {/* heading */}
          <div className='pt-10 pb-10'>
            <h2 className='text-4xl mb-5'>Guarantee (Netherlands) </h2>
            <p className='mb-8'>We stand behind our craftsmanship.</p>

            
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Duration</h3>
            <p className='pl-5'><b>2 years</b> from delivery date.</p>

            <h3 className="text-2xl mb-4 mt-8 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">What We Cover</h3>
            <p className='pl-5'>Manufacturing defects, structural integrity, hardware function (under normal residential/commercial use), bonding/lamination of veneer, and factory finishes per specification.</p>
          </div>
          {/* ====What’s Not Covered ===== */}
          <div className='py-8'>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">What’s Not Covered</h3>
            <ul className='pl-10 list-disc flex flex-col gap-4'>
              <li><p>Wear and tear, scratches, dents, stains. </p></li>
              <li>
                <p>Damage from misuse, impact, water ingress, or abnormal climate (RH outside 40–60%). </p>
              </li>
              <li>
                <p>Colour/vein variations of natural materials (wood/stone). </p>
              </li>
              <li>
                <p>Movement/warping caused by humidity/temperature extremes or improper storage. </p>
              </li>
              <li>
                <p>Third-party installation or modifications, and non-Zebrano hardware. </p>
              </li>
            </ul>
          </div>
          {/* ========Tolerances======== */}
          <div>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Tolerances</h3>
            <p className='pl-5'>We build and install within industry-standard tolerances (typ. <b>±1–2</b> mm on components; functional gaps per system spec)..</p>
          </div>
          {/* ========Claims Process========= */}
          <div className='py-8 [&>p]:pl-5 '>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Claims Process</h3>
            <p>Email photos, description, order/invoice number. We may inspect on site. Remedy is at our discretion: repair, replacement, or refund of the defective item. Consequential costs are excluded.</p>
          </div>
          {/* ====Damage on Arrival===== */}
          
        </div>
      </section>
    </>
  )
}

export default Guarantee