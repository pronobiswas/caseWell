import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import BtnComponent from "../homeComponents/utils/BtnComponent";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const MaterialAndDesign = () => {
  const { t } = useTranslation();
  const secRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (!secRef.current) return;
    const headings = secRef.current.querySelectorAll(".pivotDescHeading");
    const pivotDesc = secRef.current.querySelectorAll(".pivotDesc");
    const titles = secRef.current.querySelectorAll(".title");
    const pivotImg = secRef.current.querySelectorAll(".pivotImg");

    const ctx = gsap.context(() => {
      headings.forEach((heading) => {
        const headingWord = new SplitText(heading, {
          type: "lines,words",
          linesClass: "line overflow-hidden block",
          wordsClass: "words overflow-hidden block",
        });
        gsap.from(headingWord.words, {
          y: 103,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        });
      });

      pivotDesc.forEach((heading) => {
        const headingWord = new SplitText(heading, {
          type: "lines,words",
          linesClass: "line overflow-hidden block",
          wordsClass: "words overflow-hidden block",
        });
        gsap.from(headingWord.words, {
          y: 103,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        });
      });
      titles.forEach((title) => {
        const titleSplit = new SplitText(title, {
          type: "lines,words",
          linesClass: "line overflow-hidden block",
          wordsClass: "words overflow-hidden block",
        });
        gsap.from(titleSplit.words, {
          y: 103,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title,
            start: "top 95%",
            end: "top 60%",
            scrub: true,
          },
        });
      });

      pivotImg.forEach((img) => {
        gsap.from(img, {
          scale: 1.3,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 40%",
            scrub: true,
          },
        });
      });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef}>
      <div className="wrapper w-full h-fit md:h-[560px] bg-myColorOne text-LightText flex flex-col md:flex-row gap-10 p-5 font-Poppins">
        <div className="w-full md:w-1/2 h-full order-2 md:order-1">
          <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
            <span className="title font-Poppins">{t("ProductsPage.Pivot.MaterialAndDesign.row1.title")}</span>
            <h3 className="pivotDescHeading text-4xl font-Montserrat">
              {t("ProductsPage.Pivot.MaterialAndDesign.row1.heading")}
            </h3>
            <p className="pivotDesc">
              {t("ProductsPage.Pivot.MaterialAndDesign.row1.desc")}
            </p>
            <Link to="/products/material"><BtnComponent text={t("ProductsPage.Pivot.MaterialAndDesign.row2.btnText")} /></Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full order-1 md:order-2">
          <div className="w-full h-full relative overflow-hidden">
            <img
              src="/images/pivotdoors1.jpg"
              alt="sample image"
              className="pivotImg w-full h-full object-fill"
            />
          </div>
        </div>
      </div>

      <div className="wrapper w-full h-fit md:h-[560px] bg-colorOne text-LightText flex flex-col md:flex-row gap-10 p-5">
        <div className="w-full md:w-1/2 h-full ">
          <div className="w-full h-full relative overflow-hidden">
            <img
              src="/images/pivotdoors1.jpg"
              alt="sample image"
              className="pivotImg w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full ">
          <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
            <span className="title font-Poppins ">{t("ProductsPage.Pivot.MaterialAndDesign.row2.title")}</span>
            <h3 className="pivotDescHeading text-4xl font-Montserrat">
              {t("ProductsPage.Pivot.MaterialAndDesign.row2.heading")}
            </h3>
            <p className="pivotDesc">
              {t("ProductsPage.Pivot.MaterialAndDesign.row2.desc")}
            </p>
            <Link to="/configurator"><BtnComponent text={t("ProductsPage.Pivot.MaterialAndDesign.row2.btnText")} /></Link>
          </div>
        </div>
      </div>

      <div className="wrapper w-full h-fit md:h-[560px] bg-colorOne text-LightText flex flex-col md:flex-row gap-10 p-5">
        <div className="w-full md:w-1/2 h-full order-1 md:order-2">
          <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
            <span className="title font-Poppins">{t("ProductsPage.Pivot.MaterialAndDesign.row3.title")}</span>
            <h3 className="pivotDescHeading text-4xl font-Montserrat">
              {t("ProductsPage.Pivot.MaterialAndDesign.row3.heading")}
            </h3>
            <p className="pivotDesc">
              {t("ProductsPage.Pivot.MaterialAndDesign.row3.desc")}
            </p>
            <Link to="/configurator">
              <BtnComponent text={t("ProductsPage.Pivot.MaterialAndDesign.row3.btnText")}/>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full order-1 md:order-2">
          <div className="w-full h-full relative overflow-hidden">
            {/* ✅ ref added here */}
            <img
              src="/images/pivotdoors1.jpg"
              alt="sample image"
              className="pivotImg w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialAndDesign;
