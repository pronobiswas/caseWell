import React from 'react'
import ZebranoBanner from '../../components/aboutUsComponent/ZebranoBanner'
import MakerBanner from '../../components/aboutUsComponent/MakerBanner'
import FaceSlider from '../../components/aboutUsComponent/FaceSlider'
import ZebranoFace from '../../components/commonComponent/ZebranoFace'
import DraggableSlider from '../../components/commonComponent/DragableSlider'

const MeetTheMakerPage = () => {
  return (
    <>
    <div className='w-full pt-20'>
        <ZebranoBanner
        headingOne="Created by our makers,"
        headingTwo='perfected in'
        headingThree='production.'
        zebranoText="Real hands. Real sawdust.Unreal results. From first sketch to final fit, we design,prototype,and and build under one roof - so every milimeter up and every door feels effortlessly right"
        />
        <MakerBanner/>
        <FaceSlider/>
        <ZebranoFace/>
        <DraggableSlider/>
    </div>
    </>
  )
}

export default MeetTheMakerPage