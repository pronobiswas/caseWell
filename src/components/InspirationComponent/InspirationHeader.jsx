import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import "../../index.css";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(SplitText);

const InspirationHeader = () => {
  const { t } = useTranslation();
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split heading into lines
      const headingSplit = new SplitText(headingRef.current, {
        type: "lines",
        linesClass: "line overflow-hidden block",
      });

      gsap.from(headingSplit.lines, {
        yPercent: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.05,
      });

      // Split subheading into lines (match heading)
      const subheadingSplitLine = new SplitText(subheadingRef.current, {
        type: "lines",
        linesClass: "line overflow-hidden block pb-1",
      });
      const subheadingSplitWord = new SplitText(subheadingRef.current, {
        type: "words",
        wordsClass: "line overflow-hidden block",
      });

      gsap.from(subheadingSplitWord.words, {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.05,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="inspirationHeader">
      <div className="inspirationHeaderWrapper w-full h-full text-LightText overflow-hidden">
        <h1
          ref={headingRef}
          className="text-5xl md:text-[60px] lg:text-[132px] text-LightText font-Montserrat font-bold relative overflow-hidden"
        >
          {t("Inspiration.banner.heading")}
        </h1>

        <div className="inspirationContentWrapper flex flex-col lg:flex-row gap-8 md:gap-14 md:justify-between mt-20">
          <div className="subheading w-full md:w-2/3 lg:order-2">
            <h2
              ref={subheadingRef}
              className="text-LightText text-2xl md:text-3xl lg:text-4xl font-Poppins font-normal w-full relative overflow-hidden "
            >
              {t("Inspiration.banner.description")}
            </h2>
          </div>

          <div className="flex gap-5 w-full max-w-[400px] lg:order-1">
            <div>
              <span className="text-yellow-400 text-3xl">+</span>
              <p>{t("Inspiration.banner.titleOne")} </p>
            </div>
            <div>
              <span className="text-yellow-400 text-3xl">+</span>
              <p>{t("Inspiration.banner.titleTwo")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationHeader;
