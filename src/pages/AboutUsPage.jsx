import React from "react";
import AboutUsTimeline from "../components/aboutUsComponent/AboutUsTimeline";
import ZebranoBanner from "../components/aboutUsComponent/ZebranoBanner";
import ZebranoJourney from "../components/aboutUsComponent/ZebranoJourney";
import FaceSlider from "../components/aboutUsComponent/FaceSlider";
import ZebranoSustainability from "../components/aboutUsComponent/ZebranoSustainability";
import ServicesThasFitYourNeed from "../components/aboutUsComponent/ServicesThasFitYourNeed";
import DraggableSlider from "../components/commonComponent/DragableSlider";

const AboutUsPage = () => {
  return (
    <>
      <section id="aboutUs">
        <ZebranoBanner />
        <ZebranoJourney />
        <DraggableSlider />
        <ZebranoSustainability />
        <ServicesThasFitYourNeed />
        <AboutUsTimeline />
      </section>
    </>
  );
};

export default AboutUsPage;
