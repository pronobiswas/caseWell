import React from 'react'

const CareNmaintaince = () => {
  return (
    <section id="care_N_maintaince">
      <div className="wrapper py-5 2xl:pl-32">
        {/* heading */}
        <div className='pt-10 pb-10'>
          <h2 className='text-4xl mb-5'>Care & Maintenance  </h2>
          <p>Regular care protects the finish and function. Always use soft cloths and <b>pH-neutral</b> cleaners unless noted. </p>
        </div>
        {/* ====Glass (clear, low-iron, fluted, tinted) ===== */}
        <div className='py-8'>
          <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Glass (clear, low-iron, fluted, tinted) </h3>
          <ul className='pl-10 list-disc flex flex-col gap-4'>
            <li><p>Clean with glass cleaner or mild soap solution; dry with lint-free cloth. </p></li>
            <li>
              <p>Avoid abrasives and blades on decorative/textured glass. </p>
            </li>
            <li><p>Do not attach adhesive hooks/films without verifying compatibility. </p></li>
          </ul>
        </div>
        {/* ========Solid Wood ======== */}
        <div className='py-0'>
          <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Solid Wood  </h3>
          <ul className='pl-10 list-disc flex flex-col gap-4'>
            <li><p>Weekly dusting; wipe with slightly damp cloth, dry immediately. </p></li>
            <li>
              <p>Avoid abrasives and blades on decorative/textured glass. </p>
            </li>
            <li><p>Do not attach adhesive hooks/films without verifying compatibility. </p></li>
          </ul>
        </div>
         {/* ========Wood Veneer  ======== */}
        <div className='py-8'>
          <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Wood Veneer </h3>
          <ul className='pl-10 list-disc flex flex-col gap-4'>
            <li><p>Treat like fine furniture: soft, dry cloth or lightly dampened; dry after. </p></li>
            <li>
              <p><b>Do not sand</b> veneer. </p>
            </li>
            <li><p>If oiled: light maintenance oil <b>annually</b>. If lacquered: only mild cleaners, no wax. </p></li>
            <li>
              <p>Expect natural grain/colour variation. </p>
            </li>
          </ul>
        </div>
        {/* ========Marble / Natural Stone & Ceramic======== */}
        <div className='py-0'>
          <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Marble / Natural Stone & Ceramic </h3>
          <ul className='pl-10 list-disc flex flex-col gap-4'>
            <li><p>Use <b>pH-neutral</b> stone cleaner; avoid acids/alkalis (vinegar, lemon, bleach). </p></li>
            <li>
              <p>Wipe spills (wine, coffee, citrus, oils) immediately to prevent etching/stains. </p>
            </li>
            <li><p><b>Seal natural stone</b> periodically (typically before <b>1× per year</b> ); ceramics generally don’t require sealing. </p></li>
            <li>
              <p>Use trivets/coasters; avoid dragging metal objects. </p>
            </li>
          </ul>
        </div>
        {/* ========Hardware, Hinges & Metal Finishes (incl. Pivot/Slide Mechanisms) ======== */}
        <div className='py-8'>
          <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">MHardware, Hinges & Metal Finishes (incl. Pivot/Slide Mechanisms)  </h3>
          <ul className='pl-10 list-disc flex flex-col gap-4'>
            <li><p>Wipe with dry or slightly damp soft cloth <b>no abrasives or solvents.</b> </p></li>
            <li>
              <p>Lightly lubricate moving parts every <b>6–12 months</b> (use manufacturer-approved lubricant).  </p>
            </li>
            <li><p>Tighten visible screws if they loosen with use; do not adjust concealed mechanisms unless instructed. </p></li>
            <li>
              <p>PVD/bronze/black finishes can patinate with time—this is normal. </p>
            </li>
          </ul>
        </div>
        {/* ========Hinged & Pivot Doors — Usage Tips======== */}
        <div className='py-0'>
          <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Hinged & Pivot Doors — Usage Tips </h3>
          <ul className='pl-10 list-disc flex flex-col gap-4'>
            <li><p>Do not force against stops; avoid hanging weight (bags/clothes) on handles. </p></li>
            <li>
              <p>Ensure floor/track areas stay clean to prevent premature wear. </p>
            </li>
          </ul>
        </div>
        {/* ========Maintenance Summary (Typical) ======== */}
        <div className='py-8'>
          <h3 className="text-2xl mb-4 w-fit relative before:content-[''] before:absolute before:top-8 before:left-0 before:w-full before:h-[2px] before:bg-colorOne ">Maintenance Summary (Typical) </h3>
          <ul className='pl-10 list-disc flex flex-col gap-4'>
            <li><p>Weekly: dust/wipe surfaces. </p></li>
            <li><p>Quarterly: check hardware, clean tracks/pivots. </p></li>
            <li>
              <p>Annually: oil/wax (if applicable), stone reseal (natural stone), general inspection. </p>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  )
}

export default CareNmaintaince