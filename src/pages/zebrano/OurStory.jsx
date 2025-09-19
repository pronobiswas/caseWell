import React from 'react'
import OurStoryBanner from '../../components/aboutUsComponent/OurStoryBanner'
import AboutUsTimeline from '../../components/aboutUsComponent/AboutUsTimeline'
import { useTranslation } from "react-i18next";

  // i18n.language

const OurStory = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <div id="ourStoryPage">
        <OurStoryBanner/>
        <AboutUsTimeline/>
    </div>
    </>
  )
}

export default OurStory