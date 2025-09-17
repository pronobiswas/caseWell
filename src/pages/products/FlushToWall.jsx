import React from 'react'

import ProductBanner from '../../components/commonComponent/ProductBanner'
import CommonDoorDescription from '../../components/commonComponent/CommonDoorDescription'
import CommonMetarialNDesign from '../../components/commonComponent/CommonMetarialNDesign'
import { useTranslation } from "react-i18next";


const FlushToWall = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <ProductBanner url='/images/img4.png' heading={t("ProductsPage.FlushToWall.banner.heading")} text={t("ProductsPage.FlushToWall.banner.subHeading")} />
        <CommonDoorDescription
          titleOne={t("ProductsPage.FlushToWall.DoorDescription.desc1.title")}
          titleTwo={t("ProductsPage.FlushToWall.DoorDescription.desc2.title")}
          headingOne={t("ProductsPage.FlushToWall.DoorDescription.desc1.title")}
          headingTwo={t("ProductsPage.FlushToWall.DoorDescription.desc2.title")}
          descriptionOne={t("ProductsPage.FlushToWall.DoorDescription.desc1.description")}
          descriptionTwo={t("ProductsPage.FlushToWall.DoorDescription.desc2.description")}
        />
        <CommonMetarialNDesign
          title1={t("ProductsPage.FlushToWall.MaterialAndDesign.row1.title")}
          heading1={t("ProductsPage.FlushToWall.MaterialAndDesign.row1.heading")}
          desc1={t("ProductsPage.FlushToWall.MaterialAndDesign.row1.desc")}
          imageUrl1="/images/img1.png"
          title2={t("ProductsPage.FlushToWall.MaterialAndDesign.row2.title")}
          heading2={t("ProductsPage.FlushToWall.MaterialAndDesign.row2.heading")}
          desc2={t("ProductsPage.FlushToWall.MaterialAndDesign.row2.desc")}
          imageUrl2="/images/img4.png"
          title3={t("ProductsPage.FlushToWall.MaterialAndDesign.row3.title")}
          heading3={t("ProductsPage.FlushToWall.MaterialAndDesign.row3.heading")}
          desc3={t("ProductsPage.FlushToWall.MaterialAndDesign.row3.desc")}
          imageUrl3="/images/pivotdoors1.jpg"
        />
      </div>
    </>
  )
}

export default FlushToWall