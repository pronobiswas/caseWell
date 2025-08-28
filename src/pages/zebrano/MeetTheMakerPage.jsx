import React from "react";
import MakerBanner from "../../components/aboutUsComponent/MakerBanner";
import DraggableSlider from "../../components/commonComponent/DragableSlider";
import SlideingBanner from "../../components/aboutUsComponent/SlideingBanner";
import AccessibleBeautiful from "../../components/aboutUsComponent/AccessibleBeautiful";

const MeetTheMakerPage = () => {
  return (
    <>
      <div className="w-full">
        <MakerBanner />
        <SlideingBanner />
        <DraggableSlider />
        <AccessibleBeautiful/>
      </div>
    </>
  );
};

export default MeetTheMakerPage;
