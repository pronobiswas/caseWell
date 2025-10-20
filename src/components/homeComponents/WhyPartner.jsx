import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";
import { BsLayoutWtf } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { LuArrowRight } from "react-icons/lu";
import { PiArrowCircleUpRightLight } from "react-icons/pi";
import { RxArrowTopRight } from "react-icons/rx";
import { TbShield } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger, SplitText);
import { useTranslation } from "react-i18next";

const WhyPartner = () => {
  const { t } = useTranslation();
  const partnerCard = useRef(null);
  const partnerHeading = useRef(null);
  const partnerDes = useRef(null);
  // gsap.from(partnerHeading.current, {
  //     y: 100,
  //     opacity: 0,
  //     ease: "power2.out",
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: "#whyPartner",
  //       start: "top 70%",
  //       end: "+=100",
  //       scrub: true,
  //     },
  //   });
  //   const cards = partnerCard.current?.querySelectorAll(".box");
  //   gsap.from(cards, {
  //     y: 100,
  //     opacity: 0,

  //     ease: "power2.out",
  //     stagger: 0.2,
  //     scrollTrigger: {
  //       trigger: "#whyPartner",
  //       start: "top 20%",
  //       end: "+=500",
  //       scrub: true,
  //     },
  //   });

  useEffect(() => {
    if (!partnerHeading.current || !partnerDes.current || !partnerCard.current)
      return;

    const ctx = gsap.context(() => {
      const heading = partnerHeading.current;
      const split = new SplitText(partnerDes.current, { type: "words" });
      const words = split.words || [];
      const cards = partnerCard.current.querySelectorAll(".box");

      // Heading animation
      gsap.from(heading, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: "#whyPartner",
          start: "top 80%",
          end: "+=100",
          scrub: true,
        },
      });

      // Description words animation
      gsap.from(words, {
        x: 30,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#whyPartner",
          start: "top 60%",
          end: "+=200",
          scrub: true,
        },
      });

      // Cards animation
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#whyPartner",
          start: "top 40%",
          end: "+=200",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="whyPartner"
        className="w-full h-full bg-myColorTwo text-colorOne"
      >
        <div className="partnerWrapper w-full h-full p-5 md:p-16 pt-20 flex flex-col justify-between">
          <div className="partnerHeading flex flex-col md:flex-row justify-between gap-5">
            <h3
              ref={partnerHeading}
              className="text-3xl font-Montserrat text-myColorOne"
            >
              {t("homePage.WhyPartner.partnerHeading.title")}
            </h3>
            <p
              ref={partnerDes}
              className="w-full max-w-xl text-right text-myColorOne font-Poppins"
            >
              {t("homePage.WhyPartner.partnerHeading.description")}
            </p>
          </div>
          <div
            ref={partnerCard}
            className="partnerContentWrapper flex flex-wrap gap-0 md:gap-6 lg:flex-nowrap "
          >
            <div className="box w-80 py-5  flex flex-col gap-6 ">
              <div className="iconbox text-6xl text-myColorOne">
                <FaRegMessage />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne  ">{t("homePage.WhyPartner.cards1.title")}</h6>
                <p className="text-myColorOne ">
                  {t("homePage.WhyPartner.cards1.description")}
                </p>
              </div>
            </div>

            <div className="box w-80 py-5  flex flex-col gap-6  ">
              <div className="iconbox text-6xl text-myColorOne">
                <LuArrowRight />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">{t("homePage.WhyPartner.cards2.title")}</h6>
                <p className="text-myColorOne">
                  {t("homePage.WhyPartner.cards2.description")}
                </p>
              </div>
            </div>

            <div className="box w-80 py-5  flex flex-col gap-6 ">
              <div className="iconbox text-6xl text-myColorOne">
                <BsLayoutWtf />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">{t("homePage.WhyPartner.cards3.title")}</h6>
                <p className="text-myColorOne">
                  {t("homePage.WhyPartner.cards3.description")}
                </p>
              </div>
            </div>

            <div className="box w-80 py-5 flex flex-col gap-6  ">
              <div className="iconbox text-6xl text-myColorOne">
                <TbShield />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">{t("homePage.WhyPartner.cards4.title")}</h6>
                <p className="text-myColorOne">
                  {t("homePage.WhyPartner.cards4.description")}
                </p>
              </div>
            </div>

            <div className="box w-80 py-5 flex flex-col gap-6  ">
              <div className="iconbox text-6xl text-myColorOne">
                <PiArrowCircleUpRightLight />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">{t("homePage.WhyPartner.cards5.title")}</h6>
                <p className="text-myColorOne">
                  {t("homePage.WhyPartner.cards5.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPartner;
