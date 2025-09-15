import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from "../homeComponents/utils/BtnComponent";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const CabinetaryOption = () => {
  const { t } = useTranslation();
  const cabinetaryOptionMain = useRef(null);
  const optionOneRef = useRef(null);
  const optionTwoRef = useRef(null);
  const optionThreeRef = useRef(null);
  const optionFourRef = useRef(null);
  // =====option one ref anim=========
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
  // =====animate images======
  useEffect(() => {
    if (!cabinetaryOptionMain.current) return;

    const ctx = gsap.context(() => {
      const cabinetaryImages =
        cabinetaryOptionMain.current.querySelectorAll(".cabinetaryImage");
      console.log(cabinetaryImages);
      cabinetaryImages.forEach((images) => {
        gsap.from(images, {
          scale: 1.3,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: images,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    }, cabinetaryOptionMain);

    return () => ctx.revert();
  }, []);
  // =====animate text======
  useEffect(() => {
    if (!cabinetaryOptionMain.current) return;

    const ctx = gsap.context(() => {
      const cabinetaryOptionContent =
        cabinetaryOptionMain.current.querySelectorAll(
          ".cabinetaryOptionContent"
        );
      console.log(cabinetaryOptionContent);
      cabinetaryOptionContent.forEach((textBox) => {
        gsap.from(textBox, {
          opacity: 0,
          y: 100,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: textBox,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        });
      });
    }, cabinetaryOptionMain);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={cabinetaryOptionMain}
        id="cabinetaryOpton"
        className="w-full h-full bg-myCollorThree text-myCollorOne font-Poppins bg-myColorTwo"
      >
        <div className="cabineteryOptionWrapper p-5 flex flex-col gap-5 text-myColorOne">
          {/* --------cabinetary option one-------- */}
          <div
            ref={optionOneRef}
            className="cabinetaryOptionOne w-full h-full flex flex-col md:flex-row gap-5"
          >
            <div className="optionOneCol w-full md:w-1/2 px-8 py-32 bg-myCollorThree text-myColorOne">
              <span>{t("ProductsPage.CabinetaryOption.option1.title")}</span>
              <div className="flex flex-col gap-14 mt-5">
                <h3 className="font-Montserrat font-semibold text-3xl">
                  {t("ProductsPage.CabinetaryOption.option1.heading")}
                </h3>

                <p>
                  {t("ProductsPage.CabinetaryOption.option1.desc")}
                </p>
                <Link to="/collection">
                  <BtnComponent text={t("ProductsPage.CabinetaryOption.option1.btnText")}/>
                </Link>
              </div>
            </div>
            <div className="optionOneCol w-full md:w-1/2 bg-myColorThree px-8 py-32">
              <span>{t("ProductsPage.CabinetaryOption.option2.title")}</span>
              <div className="flex flex-col gap-14 mt-5">
                <h3 className="font-Montserrat font-semibold text-3xl">
                  {t("ProductsPage.CabinetaryOption.option2.heading")}
                </h3>
                <p>
                  {t("ProductsPage.CabinetaryOption.option2.desc")}
                </p>
                <Link to="/configurator">
                  <BtnComponent text={t("ProductsPage.CabinetaryOption.option1.btnText")} />
                </Link>
              </div>
            </div>
          </div>
          {/* --------cabinetary option two-------- */}
          <div
            ref={optionTwoRef}
            className="cabinetaryOptionTwo w-full h-full flex flex-col gap-5 md:flex-row md:items-center"
          >
            <div className="w-full md:w-1/2">
              <div className="w-full h-[562px] overflow-hidden">
                <img
                  src="/images/cabinetary1.jpg"
                  alt="image"
                  className="cabinetaryImage w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2  p-8">
              <div className="cabinetaryOptionContent flex flex-col gap-5">
                <span className="font-Poppins">{t("ProductsPage.CabinetaryOption.row1.title")}</span>
                <h3 className="font-Montserrat text-3xl">{t("ProductsPage.CabinetaryOption.row1.heading")}</h3>
                <p>
                  {t("ProductsPage.CabinetaryOption.row1.desc")}
                </p>
                <Link to="/collection">
                  <BtnComponent text={t("ProductsPage.CabinetaryOption.row1.btnText")} />
                </Link>
              </div>
            </div>
          </div>
          {/* --------cabinetary option three-------- */}
          <div
            ref={optionThreeRef}
            className="cabinetaryOptionThree w-full h-full flex flex-col gap-5 md:flex-row md:items-center"
          >
            <div className="w-full md:w-1/2 p-8 order-2 md:order-1 ">
              <div className="cabinetaryOptionContent flex flex-col gap-5">
                <span className="font-Poppins">{t("ProductsPage.CabinetaryOption.row2.title")}</span>
                <h3 className="font-Montserrat text-3xl font-semibold">
                  {t("ProductsPage.CabinetaryOption.row2.heading")}
                </h3>
                <p>
                  {t("ProductsPage.CabinetaryOption.row2.desc")}
                </p>
                <Link to="/collection">
                  <BtnComponent text={t("ProductsPage.CabinetaryOption.row2.btnText")} />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="w-full h-[562px] overflow-hidden">
                <img
                  src="/images/cabinetary2.jpg"
                  alt="image"
                  className="cabinetaryImage w-full h-full object-fill"
                />
              </div>
            </div>
          </div>
          {/* --------cabinetary option four-------- */}
          <div
            ref={optionFourRef}
            className="cabinetaryOptionFour w-full h-full flex flex-col gap-5 md:flex-row md:items-center"
          >
            <div className="w-full md:w-1/2">
              <div className="w-full h-[562px] overflow-hidden">
                <img
                  src="/images/cabinetary3.jpg"
                  alt="image"
                  className="cabinetaryImage w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2  p-8">
              <div className="cabinetaryOptionContent flex flex-col gap-5">
                <span className="font-Poppins">{t("ProductsPage.CabinetaryOption.row3.title")}</span>
                <h3 className="font-Montserrat font-semibold text-3xl">
                  {t("ProductsPage.CabinetaryOption.row3.heading")}
                </h3>
                <p>
                  {t("ProductsPage.CabinetaryOption.row3.desc")}
                </p>
                <Link to="/collection">
                  <BtnComponent text={t("ProductsPage.CabinetaryOption.row3.btnText")} />
                </Link>
              </div>
            </div>
          </div>
          {/* --------cabinetary option five-------- */}
          <div className="cabinetaryOptionFour w-full h-full flex flex-col gap-5 md:flex-row md:items-center">
            <div className="w-full md:w-1/2  p-8 order-2 md:order-1 ">
              <div className="cabinetaryOptionContent flex flex-col gap-5 ">
                <span className="font-Poppins">{t("ProductsPage.CabinetaryOption.row4.title")}</span>
                <h3 className="font-Montserrat font-semibold text-3xl">
                  {t("ProductsPage.CabinetaryOption.row4.heading")}
                </h3>
                <p>
                  {t("ProductsPage.CabinetaryOption.row4.desc")}
                </p>
                <Link to="/collection">
                  <BtnComponent text={t("ProductsPage.CabinetaryOption.row4.btnText")} />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="w-full h-[562px] overflow-hidden">
                <img
                  src="/images/cabinetary4.jpg"
                  alt="image"
                  className="cabinetaryImage w-full h-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CabinetaryOption;
