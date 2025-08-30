import React from "react";
import ProductBanner from "../../components/commonComponent/ProductBanner";
import CommonDoorDescription from "../../components/commonComponent/CommonDoorDescription";
import CommonMetarialNDesign from "../../components/commonComponent/CommonMetarialNDesign";

const WallPartition = () => {
  return (
    <>
      <ProductBanner
        url="/images/img1.png"
        heading="“Room Dividers & Wall Partitions”"
        text="Our custom room dividers are designed to shape spaces without sacrificing light, flow, or style. Whether fixed, sliding, folding, or glass, each wall partition is crafted to match your doors and finishes for a unified, high-end look. Perfect for open-plan living, offices, or hospitality spaces, they add privacy, structure, and elegance — all tailor-made to your dimensions and interior vision.. "
      />
      <CommonDoorDescription
        titleOne='“What is a Room divider?”'
        titleTwo=" Why Choose Room dividers?"
        headingOne="Style in Every Division"
        headingTwo="Flexible, Functional, Beautiful"
        descriptionOne="Room dividers are custom-built, non-load-bearing panels that define spaces while maintaining your design vision. Whether solid, glass, or mixed-material, they add structure without closing off light or flow"
        descriptionTwo="Perfect for open-plan living, room dividers offer privacy, sound control, and style — all while integrating perfectly with your existing finishes."
      />
      <CommonMetarialNDesign
        title1="Material Possibilities"
        heading1="Designed Around You"
        desc1=" Choose from wood, veneer, lacquer, frosted glass, clear glass, or combinations to create a partition that matches your doors and interior style."
        imageUrl1="/images/img1.png"
        title2="Hardware & Details"
        heading2=" Movement Made Easy"
        desc2="For sliding or folding partitions, we use precision tracks and soft-closing systems to ensure smooth operation without compromising design."
        imageUrl2="/images/img4.png"
        title3="Integration Options"
        heading3="Unified Interiors"
        desc3="Coordinate your partitions with Zebrano doors, wall paneling, or flush-to-wall systems for a continuous, harmonious look throughout your space."
        imageUrl3="/images/pivotdoors1.jpg"
      />
    </>
  );
};

export default WallPartition;
