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

const WhyPartner = () => {
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
  const handleLoad = () => {
    const heading = partnerHeading.current;
    const split = new SplitText(partnerDes.current, { type: "words" });
    const words = split.words;
    const cards = partnerCard.current?.querySelectorAll(".box");

    if (!heading || !cards) return;

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

    gsap.from(cards, {
      y: 100,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#whyPartner",
        start: "top 40%",
        end: "+=500",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();
  };

  if (document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }

  return () => {
    window.removeEventListener("load", handleLoad);
  };
}, []);




  return (
    <>
      <section id="whyPartner">
        <div className="partnerWrapper w-full h-full min-h-screen p-16 pt-20 flex flex-col justify-between">
          <div className="partnerHeading flex justify-between">
            <h3 ref={partnerHeading} className="text-3xl">Why Partner with Casewell?</h3>
            <p ref={partnerDes} className="w-64 text-right">
              We built the cabinet supply model that should've existed all
              along, one that supports your success without getting in your way.
            </p>
          </div>
          <div
            ref={partnerCard}
            className="partnerContentWrapper flex flex-wrap gap-6"
          >
            <div className="box w-80 py-5  flex flex-col gap-6 ">
              <div className="iconbox text-6xl">
                <FaRegMessage />
              </div>
              <div className="text flex flex-col gap-3">
                <h6>Complete Project Support</h6>
                <p>
                  Design help, showroom access, and fulfillment — all included.
                </p>
              </div>
              <div className="link flex items-center gap-3">
                <span>Read more</span>{" "}
                <span>
                  <RxArrowTopRight />
                </span>
              </div>
            </div>

            <div className="box w-80 py-5  flex flex-col gap-6  ">
              <div className="iconbox text-6xl">
                <LuArrowRight />
              </div>
              <div className="text flex flex-col gap-3">
                <h6>Complete Project Support</h6>
                <p>
                  Design help, showroom access, and fulfillment — all included.
                </p>
              </div>
              <div className="link flex items-center gap-3">
                <span>Read more</span>{" "}
                <span>
                  <RxArrowTopRight />
                </span>
              </div>
            </div>

            <div className="box w-80 py-5  flex flex-col gap-6 ">
              <div className="iconbox text-6xl">
                <BsLayoutWtf />
              </div>
              <div className="text flex flex-col gap-3">
                <h6>Complete Project Support</h6>
                <p>
                  Design help, showroom access, and fulfillment — all included.
                </p>
              </div>
              <div className="link flex items-center gap-3">
                <span>Read more</span>{" "}
                <span>
                  <RxArrowTopRight />
                </span>
              </div>
            </div>

            <div className="box w-80 py-5 flex flex-col gap-6  ">
              <div className="iconbox text-6xl">
                <TbShield />
              </div>
              <div className="text flex flex-col gap-3">
                <h6>Complete Project Support</h6>
                <p>
                  Design help, showroom access, and fulfillment — all included.
                </p>
              </div>
              <div className="link flex items-center gap-3">
                <span>Read more</span>{" "}
                <span>
                  <RxArrowTopRight />
                </span>
              </div>
            </div>

            <div className="box w-80 py-5 flex flex-col gap-6  ">
              <div className="iconbox text-6xl">
                <PiArrowCircleUpRightLight />
              </div>
              <div className="text flex flex-col gap-3">
                <h6>Complete Project Support</h6>
                <p>
                  Design help, showroom access, and fulfillment — all included.
                </p>
              </div>
              <div className="link flex items-center gap-3">
                <span>Read more</span>{" "}
                <span>
                  <RxArrowTopRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPartner;
