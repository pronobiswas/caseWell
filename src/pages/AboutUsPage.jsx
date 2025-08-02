import React from 'react'
import AboutUsBanner from '../components/aboutUsComponent/AboutUsBanner'
import AboutUsTimeline from '../components/aboutUsComponent/AboutUsTimeline'

const AboutUsPage = () => {
  return (
    <>
    <section id="aboutUs">
        <AboutUsBanner/>
        <AboutUsTimeline/>
    </section>
    </>
  )
}

export default AboutUsPage