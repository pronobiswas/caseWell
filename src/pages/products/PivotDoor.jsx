import React from "react";
import ButtomHeading from "../../components/commonComponent/ButtomHeading";
import BtnComponent from "../../components/homeComponents/utils/BtnComponent";
import DoorDescription from "../../components/cabinetryComponent/DoorDescription";
import MaterialAndDesign from "../../components/cabinetryComponent/MaterialAndDesign";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PivotDoor = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="wrapper w-full h-screen flex items-end bg-[url('/images/pivotDoor1.jpg')] bg-fill p-5 md:p-12">
          <div className="flex flex-col gap-5">
            <ButtomHeading
              heading={t("ProductsPage.Pivot.pageName")}
              paragraph1={t("ProductsPage.Pivot.banner.subHeading")}
              color="white"
            />
            <Link to="/configurator">
              <BtnComponent text={t("ProductsPage.Pivot.banner.btnText")}  />
            </Link>
          </div>
        </div>
      </section>
      <div>
        <DoorDescription />
        <MaterialAndDesign />
      </div>
    </>
  );
};

export default PivotDoor;
