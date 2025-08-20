import React from 'react'

const Delivery = () => {
  return (
    <>
      <section id="delivery">
        <div className="wrapper py-5 2xl:pl-32">
          {/* heading */}
          <div className='pt-10 pb-10'>
            <h2 className='text-4xl mb-5'>Delivery (Delivery & Installation in the Netherlands) </h2>
            <p>We deliver to <b>all Dutch provinces</b> using in-house teams or trusted partners. </p>
          </div>
          {/* ====delivery option===== */}
          <div className='py-8'>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Delivery Options </h3>
            <ul className='pl-10 list-disc flex flex-col gap-4'>
              <li><p><b>Supply-Only:</b>Kerbside/ground-floor delivery to the first accessible point.</p></li>
              <li>
                <p>Two-person delivery to room of choice (if access permits). Packaging removal on request. </p>
              </li>
            </ul>
          </div>
          {/* ========Scheduling & Access======== */}
          <div>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Scheduling & Access</h3>
            <p className='pl-5'>We agree a date + time window. You ensure safe access (door widths, lifts, staircases), parking permits if needed, and a clear path. If access is not possible, re-delivery and/or additional handling costs apply.</p>
          </div>
          {/* ========Packaging & Protection========= */}
          <div className='py-8 [&>p]:pl-5 '>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Packaging & Protection</h3>
            <p>Doors and panels ship with full foam protection and edge guards. Accessories are packed in branded sleeves/boxes.</p>
          </div>
          {/* ====Damage on Arrival===== */}
          <div className='py-0'>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Damage on Arrival </h3>
            <ul className='pl-10 list-disc flex flex-col gap-4'>
              <li><p><b>Visible damage:</b>note on the delivery form <b>immediately</b> and photograph before unwrapping. </p></li>
              <li>
                <p><b>Concealed damage:</b> report in writing within <b>24 hours</b> of delivery with photos and order number. </p>
              </li>
            </ul>
          </div>
          {/* ========Risk Transfer========= */}
          <div className='py-8 [&>p]:pl-5'>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Risk Transfer</h3>
            <p>Risk transfers at delivery. For white-glove/installation, risk transfers after placement in the agreed room/area.</p>
          </div>
          {/* ====Installation (Optional, NL only)===== */}
          <div className='py-0'>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Installation (Optional, NL only)</h3>
            <p className='pl-5 mb-7'>Included scope (unless otherwise stated):</p>
            <ul className='pl-10 list-disc flex flex-col gap-4'>
              <li><p>Fitting frames/leafs/hardware supplied by Zebrano. </p></li>
              <li>
                <p>Alignment, clearances, functional checks (swing/slide/pivot).</p>
              </li>
              <li>
                <p>Basic sealing/finishing where specified. </p>
              </li>
            </ul>
            <p className='pl-5 mt-7'>Not included: structural changes, electrical works, plastering/painting, third-party materials, and works outside the agreed opening. </p>
          </div>

          {/* ====Site Readiness (Required) ===== */}
          <div className='py-8'>
            <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Site Readiness (Required)</h3>
            <ul className='pl-10 list-disc flex flex-col gap-4'>
              <li><p>Finished openings within tolerance, walls plumb/level. </p></li>
              <li>
                <p>Interior climate: <b>15–25°C</b> and <b>40–60</b>% <b>RH</b>. </p>
              </li>
              <li>
                <p>Substrates dry; area clean and accessible; 230V power available.
                  Re-visits due to site not ready are chargeable and must be paid <b>before</b> re-scheduling. </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Delivery