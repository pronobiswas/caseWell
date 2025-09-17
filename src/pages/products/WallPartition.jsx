import React from "react";
import ProductBanner from "../../components/commonComponent/ProductBanner";
import CommonDoorDescription from "../../components/commonComponent/CommonDoorDescription";
import CommonMetarialNDesign from "../../components/commonComponent/CommonMetarialNDesign";
import { useTranslation } from "react-i18next";

const WallPartition = () => {
  const { t } = useTranslation();
  return (
    <>
      <ProductBanner
        url="/images/img1.png"
        heading={t("ProductsPage.WallPartitions.banner.heading")}
        text={t("ProductsPage.WallPartitions.banner.subHeading")}
      />
      <CommonDoorDescription
        titleOne={t("ProductsPage.WallPartitions.DoorDescription.desc1.title")}
        titleTwo={t("ProductsPage.WallPartitions.DoorDescription.desc2.title")}
        headingOne={t("ProductsPage.WallPartitions.DoorDescription.desc1.title")}
        headingTwo={t("ProductsPage.WallPartitions.DoorDescription.desc2.title")}
        descriptionOne={t("ProductsPage.WallPartitions.DoorDescription.desc1.description")}
        descriptionTwo={t("ProductsPage.WallPartitions.DoorDescription.desc2.description")}
      />
      <CommonMetarialNDesign
        title1={t("ProductsPage.WallPartitions.MaterialAndDesign.row1.title")}
        heading1={t("ProductsPage.WallPartitions.MaterialAndDesign.row1.heading")}
        desc1={t("ProductsPage.WallPartitions.MaterialAndDesign.row1.desc")}
        imageUrl1="/images/img1.png"
        title2={t("ProductsPage.WallPartitions.MaterialAndDesign.row2.title")}
        heading2={t("ProductsPage.WallPartitions.MaterialAndDesign.row2.heading")}
        desc2={t("ProductsPage.WallPartitions.MaterialAndDesign.row2.desc")}
        imageUrl2="/images/img4.png"
        title3={t("ProductsPage.WallPartitions.MaterialAndDesign.row3.title")}
        heading3={t("ProductsPage.WallPartitions.MaterialAndDesign.row3.heading")}
        desc3={t("ProductsPage.WallPartitions.MaterialAndDesign.row3.desc")}
        imageUrl3="/images/pivotdoors1.jpg"
      />
    </>
  );
};

export default WallPartition;
