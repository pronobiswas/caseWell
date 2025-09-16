import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from "../homeComponents/utils/BtnComponent";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const DoorDescription = () => {
  const { t } = useTranslation();
  const optionOneRef = useRef(null);
  useEffect(() => {
    if (!optionOneRef.current) return;

    const ctx = gsap.context(() => {
      const optionOneCols =
        optionOneRef.current.querySelectorAll(".optionOneCol");

      gsap.from(optionOneCols, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: optionOneRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: true,
        },
      });
    }, optionOneRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section>
        <div className="wrapper w-full bg-myColorOne text-white font-Poppins">
          <div
            ref={optionOneRef}
            className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5"
          >
            <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-myColorThree">
              <span>{t("ProductsPage.Pivot.DoorDescription.ddesc1.title")}</span>
              <div className="flex flex-col gap-14 mt-5">
                <h3 className="font-Montserrat text-3xl">
                  {t("ProductsPage.Pivot.DoorDescription.ddesc1.heading")}
                </h3>

                <p>
                  {t("ProductsPage.Pivot.DoorDescription.ddesc1.description")}
                </p>
                <Link to="/collection">
                  <BtnComponent text={t("ProductsPage.Pivot.DoorDescription.ddesc1.btnText")} />
                </Link>
              </div>
            </div>

            <div className="optionOneCol w-full md:w-1/2  px-8 py-32">
              <span>{t("ProductsPage.Pivot.DoorDescription.ddesc2.title")}</span>
              <div className="flex flex-col gap-14 mt-5">
                <h3 className="font-Montserrat text-3xl">
                  {t("ProductsPage.Pivot.DoorDescription.ddesc2.heading")}
                </h3>

                <p>
                  {t("ProductsPage.Pivot.DoorDescription.ddesc2.description")}
                </p>
                <Link to="/inspiration">
                  <BtnComponent text={t("ProductsPage.Pivot.DoorDescription.ddesc2.btnText")} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoorDescription;
