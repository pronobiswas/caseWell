import React from "react";
import BtnComponent from "../homeComponents/utils/BtnComponent";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CabinetryBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="cabineteryBanner"
        className='w-full h-fit min-h-screen  md:h-screen bg-[url("/images/cabinetryBanner.jpg")]'
      >
        <div className="cabinetryBannerWarper w-full h-full min-h-screen flex items-end p-5 md:p-12 z-0">
          <div className="cabinetryBannerContent text-white ">
            <h1 className="text-5xl font-Montserrat text-LightText">
              {t("ProductsPage.banner.title")}
            </h1>
            <p className="w-full max-w-80 text-xl mt-8 mb-6 font-Poppins text-LightText">
              {t("ProductsPage.banner.desc")}
            </p>
            <Link to="/collection">
              <BtnComponent text={t("ProductsPage.banner.btnTxt")}/>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CabinetryBanner;
