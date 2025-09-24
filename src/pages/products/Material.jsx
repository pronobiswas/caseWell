import React from 'react'
import ProductBanner from '../../components/commonComponent/ProductBanner';
import { useTranslation } from "react-i18next";
import CommonDoorDescription from '../../components/commonComponent/CommonDoorDescription';
import CommonMetarialNDesign from '../../components/commonComponent/CommonMetarialNDesign';
import MaterialAndDesignContent from '../../components/cabinetryComponent/MaterialAndDesignContent';

const Material = () => {
  const { t } = useTranslation();
  return (
    <>
    <div>
        <ProductBanner heading={t("ProductsPage.Materials.banner.heading")} text={t("ProductsPage.Materials.banner.subHeading")}/>
        <MaterialAndDesignContent/>
    </div>
    </>
  )
}

export default Material