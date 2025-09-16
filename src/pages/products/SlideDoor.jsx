import React from "react";
import ButtomHeading from "../../components/commonComponent/ButtomHeading";
import BtnComponent from "../../components/homeComponents/utils/BtnComponent";
import SlideDoorDescription from "../../components/cabinetryComponent/SlideDoorDescription";
import SlideMeterialAndDesign from "../../components/cabinetryComponent/SlideMeterialAndDesign";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SlideDoor = () => {
    const { t } = useTranslation();
  return (
    <>
      <section>
        <div
          style={{
            background: "linear-gradient(rgba(47, 58, 42, 0), rgba(47, 58, 42, 0.5)), url('/images/slideDoor.jpg')",
            backgroundSize: "100% 100%",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
          className="wrapper w-full h-screen flex items-end bg-[] bg-cover p-5 md:p-12">
          <div className="flex flex-col gap-5">
            <ButtomHeading
              heading={t("ProductsPage.SlidingDoor.banner.heading")}
              paragraph1={t("ProductsPage.SlidingDoor.banner.subHeading")}
              color="#1544B2"
            />
            <Link to="/configurator">
              <BtnComponent text={t("ProductsPage.SlidingDoor.banner.btnText")} />
            </Link>
          </div>
        </div>
      </section>
      <SlideDoorDescription />
      <SlideMeterialAndDesign />
    </>
  );
};

export default SlideDoor;
