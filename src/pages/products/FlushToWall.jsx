import React from 'react'

import ProductBanner from '../../components/commonComponent/ProductBanner'
import CommonDoorDescription from '../../components/commonComponent/CommonDoorDescription'
import CommonMetarialNDesign from '../../components/commonComponent/CommonMetarialNDesign'


const FlushToWall = () => {
  return (
    <>
      <div>
        <ProductBanner url='/images/img4.png' heading='FLUSH-TO-WALL DOORS (Seamless Series)' text='Flush-to-wall doors — also called hidden doors, concealed frame doors, or invisible doors — are the ultimate in minimalist architecture. At Zebrano Studio, we craft these doors to sit perfectly level with your wall, so the frame and hinges completely disappear. The result? A clean, uninterrupted surface that enhances the beauty of your interior without visual clutter. ' />
        <CommonDoorDescription
          titleOne="What is a Flush-to-Wall Door?"
          titleTwo=" Why Choose Flush-to-Wall?"
          headingOne="The Art of Disappearing"
          headingTwo="Minimalism. Elevated"
          descriptionOne="Flush-to-wall doors, also called hidden or invisible doors, sit perfectly level with your wall — no visible frame, hinges, or trim. They blend seamlessly into your architecture for a clean, uninterrupted surface"
          descriptionTwo="These doors are ideal for interiors where design continuity is key. Whether painted to match the wall or finished as a bold statement, flush-to-wall doors keep the focus on the space, not the hardware."
        />
        <CommonMetarialNDesign
          title1="Material Possibilities"
          heading1="Made for Your Space"
          desc1=" From premium veneers to smooth lacquer, textured glass, or stone inlays, every flush-to-wall door is custom-built to match your dimensions and design vision.."
          imageUrl1="/images/img1.png"
          title2="Hardware & Details"
          heading2=" Hidden Technology"
          desc2="Concealed hinges, magnetic locks, and precision frames are engineered for flawless function — all while staying out of sight."
          imageUrl2="/images/img4.png"
          title3="Integration Options"
          heading3="One Continuous Surface"
          desc3="Combine your flush-to-wall door with matching wall panels or integrated shelving for a seamless architectural feature that flows from one surface to the next."
          imageUrl3="/images/pivotdoors1.jpg"
        />
      </div>
    </>
  )
}

export default FlushToWall