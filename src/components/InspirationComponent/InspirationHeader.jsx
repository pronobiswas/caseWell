import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import "../../index.css";

gsap.registerPlugin(SplitText);

const InspirationHeader = () => {
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
        linesClass: "line overflow-hidden block",
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
          Explore our work
        </h1>

        <div className="inspirationContentWrapper flex flex-col lg:flex-row gap-8 md:gap-14 md:justify-between mt-20">
          <div className="subheading w-full md:w-2/3 lg:order-2">
            <h2
              ref={subheadingRef}
              className="text-LightText text-3xl md:text-4xl font-Poppins font-semibold w-full relative overflow-hidden "
            >
              " Our Zebrano Studio doors are designed to elevate your space,
              offering the bespoke luxury usually reserved for architectural
              masterpieces. See how <b>we make exclusivity accessible.</b>"
            </h2>
          </div>

          <div className="flex gap-5 w-full max-w-[400px] lg:order-1">
            <div>
              <span className="text-yellow-400 text-3xl">+</span>
              <p>More than 1000 configurations </p>
            </div>
            <div>
              <span className="text-yellow-400 text-3xl">+</span>
              <p>Recommended by interior designers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationHeader;
