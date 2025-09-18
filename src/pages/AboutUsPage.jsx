import React from "react";
import ZebranoBanner from "../components/aboutUsComponent/ZebranoBanner";
import ZebranoJourney from "../components/aboutUsComponent/ZebranoJourney";
import ZebranoSustainability from "../components/aboutUsComponent/ZebranoSustainability";
import ServicesThasFitYourNeed from "../components/aboutUsComponent/ServicesThasFitYourNeed";
import DraggableSlider from "../components/commonComponent/DragableSlider";
import { useTranslation } from "react-i18next";

  // i18n.language

const AboutUsPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section id="aboutUs" className="bg-myColorTwo">
        <ZebranoBanner
          headingOne={t("Zebrano.ZebranoBanner.headingOne")}
          headingTwo={t("Zebrano.ZebranoBanner.headingTwo")}
          headingThree={t("Zebrano.ZebranoBanner.headingThree")}
          zebranoText={t("Zebrano.ZebranoBanner.zebranoText")}
        />
        <ZebranoJourney />
        <DraggableSlider />
        <ZebranoSustainability />
        <ServicesThasFitYourNeed />
      </section>
    </>
  );
};

export default AboutUsPage;
