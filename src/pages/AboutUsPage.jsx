import React from 'react'
import AboutUsTimeline from '../components/aboutUsComponent/AboutUsTimeline'
import ZebranoBanner from '../components/aboutUsComponent/ZebranoBanner'
import ZebranoJourney from '../components/aboutUsComponent/ZebranoJourney'

const AboutUsPage = () => {
  return (
    <>
    <section id="aboutUs">
        <ZebranoBanner/>
        <ZebranoJourney/>
        <AboutUsTimeline/>
    </section>
    </>
  )
}

export default AboutUsPage