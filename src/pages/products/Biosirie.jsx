import React from 'react';
import ProductBanner from '../../components/commonComponent/ProductBanner';
import CommonMetarialNDesign from '../../components/commonComponent/CommonMetarialNDesign';
import { useTranslation } from "react-i18next";
import CommonDoorDescription from '../../components/commonComponent/CommonDoorDescription';

const Biosirie = () => {
  const { t } = useTranslation();
  return (
    <>
    <div>
      <ProductBanner heading={t("ProductsPage.Boiserie.banner.heading")}  text={t("ProductsPage.Boiserie.banner.subHeading")}/>
      <CommonDoorDescription
          titleOne={t("ProductsPage.Boiserie.DoorDescription.desc1.title")}
          titleTwo={t("ProductsPage.Boiserie.DoorDescription.desc2.title")}
          headingOne={t("ProductsPage.Boiserie.DoorDescription.desc1.title")}
          headingTwo={t("ProductsPage.Boiserie.DoorDescription.desc2.title")}
          descriptionOne={t("ProductsPage.Boiserie.DoorDescription.desc1.description")}
          descriptionTwo={t("ProductsPage.Boiserie.DoorDescription.desc2.description")}
        />
      <CommonMetarialNDesign
        title1={t("ProductsPage.Boiserie.MaterialAndDesign.row1.title")}
        heading1={t("ProductsPage.Boiserie.MaterialAndDesign.row1.heading")}
        desc1={t("ProductsPage.Boiserie.MaterialAndDesign.row1.desc")}
        imageUrl1="/images/Boiserie2.jpg"
        title2={t("ProductsPage.Boiserie.MaterialAndDesign.row2.title")}
        heading2={t("ProductsPage.Boiserie.MaterialAndDesign.row2.heading")}
        desc2={t("ProductsPage.Boiserie.MaterialAndDesign.row2.desc")}
        imageUrl2="/images/Boiserie1.jpg"
        title3={t("ProductsPage.Boiserie.MaterialAndDesign.row3.title")}
        heading3={t("ProductsPage.Boiserie.MaterialAndDesign.row3.heading")}
        desc3={t("ProductsPage.Boiserie.MaterialAndDesign.row3.desc")}
        imageUrl3="/images/Boiserie3.jpg"
      />
    </div>
    </>
  )
}

export default Biosirie