import React from "react";
import ZebranoBanner from "../components/aboutUsComponent/ZebranoBanner";
import ZebranoJourney from "../components/aboutUsComponent/ZebranoJourney";
import ZebranoSustainability from "../components/aboutUsComponent/ZebranoSustainability";
import ServicesThasFitYourNeed from "../components/aboutUsComponent/ServicesThasFitYourNeed";
import DraggableSlider from "../components/commonComponent/DragableSlider";

const AboutUsPage = () => {
  return (
    <>
      <section id="aboutUs" className="bg-myColorTwo">
        <ZebranoBanner />
        <ZebranoJourney />
        <DraggableSlider />
        <ZebranoSustainability />
        <ServicesThasFitYourNeed />
      </section>
    </>
  );
};

export default AboutUsPage;
