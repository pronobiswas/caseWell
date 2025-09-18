import React, { useEffect, useRef } from "react";
import BtnComponent from "../homeComponents/utils/BtnComponent";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const ZebranoJourney = () => {
  const { t, i18n } = useTranslation();
  const headingOneRef = useRef(null);
  const zebranoJourneyRef = useRef(null);
  const headingTwoRef = useRef(null);
  const pragraphRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const paragraphSplit = new SplitText(pragraphRef.current, {
        type: "lines,words,chars",
        linesClass: "line overflow-hidden block",
        wordsClass: "words overflow-hidden block",
      });
      const headingOneSplit = new SplitText(headingOneRef.current, {
        type: "lines,words,chars",
        linesClass: "line  block",
        wordsClass: "words  block",
      });
      const headingTwoSplit = new SplitText(headingTwoRef.current, {
        type: "lines,chars",
        linesClass: "line block",
      });

      gsap.from(imgRef.current, {
        opacity: 0.6,
        scale: 1.3,
        scrollTrigger: {
          trigger: zebranoJourneyRef.current,
          start: "top 70%",
          end: "+=200",
          scrub: true,
        },
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: zebranoJourneyRef.current,
          start: "top 70%",
          end: "+=400",
          scrub: true,
        },
      });
      tl.from(headingOneSplit.chars, {
        rotateX: 360,
        duration: 5,
        stagger: 0.05,
      })
        .from(headingTwoSplit.chars, {
          rotateX: 360,
          duration: 10,
          stagger: 0.1,
        })
        .from(paragraphSplit.chars, {
          rotateX: 270,
          duration: 2,
          ease: "power4.out",
          stagger: 0.05,
        });
    });
    return () => ctx.revert();
  }, [i18n.language]);
  return (
    <>
      <section key={i18n.language} ref={zebranoJourneyRef} id="zebranoJourney">
        <div className="wrapper w-full p-5 flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-24 md:items-center ">
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden">
              <img
                ref={imgRef}
                src="/images/ais15.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <p ref={headingOneRef} className="text-xl">
                {t("Zebrano.ZebranoJourney.title")}
              </p>
              <h2
                ref={headingTwoRef}
                className="text-3xl lg:text-5xl mb-8 mt-6"
              >
                {t("Zebrano.ZebranoJourney.heading")}
              </h2>
              <p ref={pragraphRef} className="mb-8 ">
                {t("Zebrano.ZebranoJourney.desc")}
              </p>

              <BtnComponent text={t("Zebrano.ZebranoJourney.btnText")} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZebranoJourney;
