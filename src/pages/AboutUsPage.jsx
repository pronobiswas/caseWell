import React from 'react'
import AboutUsTimeline from '../components/aboutUsComponent/AboutUsTimeline'
import ZebranoBanner from '../components/aboutUsComponent/ZebranoBanner'
import ZebranoJourney from '../components/aboutUsComponent/ZebranoJourney'
import FaceSlider from '../components/aboutUsComponent/FaceSlider'

const AboutUsPage = () => {
  return (
    <>
    <section id="aboutUs">
        <ZebranoBanner/>
        <ZebranoJourney/>
        <FaceSlider/>
        <AboutUsTimeline/>
    </section>
    </>
  )
}

export default AboutUsPage