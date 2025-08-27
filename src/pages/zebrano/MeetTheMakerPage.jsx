import React from "react";
import ZebranoBanner from "../../components/aboutUsComponent/ZebranoBanner";
import MakerBanner from "../../components/aboutUsComponent/MakerBanner";
import FaceSlider from "../../components/aboutUsComponent/FaceSlider";
import ZebranoFace from "../../components/commonComponent/ZebranoFace";
import DraggableSlider from "../../components/commonComponent/DragableSlider";

const MeetTheMakerPage = () => {
  return (
    <>
      <div className="w-full pt-20">
        <MakerBanner />
        <FaceSlider />
        <ZebranoFace />
        <DraggableSlider />
      </div>
    </>
  );
};

export default MeetTheMakerPage;
