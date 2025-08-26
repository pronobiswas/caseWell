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
    if (!partnerHeading.current || !partnerDes.current || !partnerCard.current) return;

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
      <section id="whyPartner" className="w-full h-full bg-myColorTwo text-colorOne">
        <div className="partnerWrapper w-full h-full  p-16 pt-20 flex flex-col justify-between">
          <div className="partnerHeading flex justify-between">
            <h3 ref={partnerHeading} className="text-3xl font-NoeDisplayBold text-myColorOne">Why Choose Zebrano Studio?</h3>
            <p ref={partnerDes} className="w-full max-w-xl text-right text-myColorOne">
              We believe luxury shouldn’t be out of reach. Our doors are crafted with the same precision and materials found in the world’s finest interiors — yet designed to be accessible for every home. From first sketch to final installation, we make it possible to bring high-end design into your everyday life, without compromise.
            </p>
          </div>
          <div
            ref={partnerCard}
            className="partnerContentWrapper flex flex-wrap gap-6"
          >
            <div className="box w-80 py-5  flex flex-col gap-6 ">
              <div className="iconbox text-6xl text-myColorOne">
                <FaRegMessage />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">Bespoke Design </h6>
                <p className="text-myColorOne">
                  Tailored shapes, finishes, and materials to match your vision and space.
                </p>
              </div>
              {/* <div className="link flex items-center gap-3">
                <span>Read more</span>{" "}
                <span>
                  <RxArrowTopRight />
                </span>
              </div> */}
            </div>

            <div className="box w-80 py-5  flex flex-col gap-6  ">
              <div className="iconbox text-6xl text-myColorOne">
                <LuArrowRight />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">Accessible Luxury</h6>
                <p className="text-myColorOne">
                  Premium craftsmanship and rare materials — made attainable for every project size.
                </p>
              </div>

            </div>

            <div className="box w-80 py-5  flex flex-col gap-6 ">
              <div className="iconbox text-6xl text-myColorOne">
                <BsLayoutWtf />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">Easy Configuration</h6>
                <p className="text-myColorOne">
                  A simple process with curated options for faster delivery and effortless decision-making.
                </p>
              </div>

            </div>

            <div className="box w-80 py-5 flex flex-col gap-6  ">
              <div className="iconbox text-6xl text-myColorOne">
                <TbShield />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">Precision Craftsmanship</h6>
                <p className="text-myColorOne">
                  Doors built to last a lifetime, with meticulous attention to detail.
                </p>
              </div>

            </div>

            <div className="box w-80 py-5 flex flex-col gap-6  ">
              <div className="iconbox text-6xl text-myColorOne">
                <PiArrowCircleUpRightLight />
              </div>
              <div className="text flex flex-col gap-3">
                <h6 className="text-myColorOne">Endless inspiration</h6>
                <p className="text-myColorOne">
                  Endless design possibilities to make your space truly unforgettable.
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
