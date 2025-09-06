import React, { useEffect } from "react";
import WhyPartner from "../components/homeComponents/WhyPartner";
import Banner2 from "../components/homeComponents/Banner2";
import ContructorComponent2 from "../components/homeComponents/ContructorComponent2";
import Stalen from "../components/homeComponents/Stalen";
import InspirationInsight from "../components/homeComponents/InspirationInsight";
import ZebranoFace from "../components/commonComponent/ZebranoFace";
import FaceSlider from "../components/aboutUsComponent/FaceSlider";

const HomePage = () => {

  
  return (
    <div className="w-full h-full bg-bgOne font-geist">
      <Banner2/>
      <WhyPartner />
      <ContructorComponent2/>
      <Stalen/>
      <InspirationInsight/>
    </div>
  );
};

export default HomePage;
