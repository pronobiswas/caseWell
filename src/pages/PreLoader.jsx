import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";
import DragableSlider from "../components/commonComponent/DragableSlider";

gsap.registerPlugin(MorphSVGPlugin, SplitText);

const TestPage = () => {
  const svgOne = useRef(null);
  const pathOne = useRef(null);
  const pathTwo = useRef(null);
  const pathThree = useRef(null);
  const pathfour = useRef(null);
  const zebranoRef = useRef(null);
  const studioRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const pathTwoD = pathOne.current.getAttribute("d");
    const splitName = new SplitText(zebranoRef.current, {
      type: "lines,words,chars",
      linesClass: "line overflow-hidden relative block",
      wordsClass: "words overflow-hidden block",
    });
    const splitStudio = new SplitText(studioRef.current, {
      type: "lines,words,chars",
      linesClass: "line overflow-hidden relative",
      wordsClass: "words overflow-hidden block",
    });

    gsap.from(splitName.chars, {
      opacity: 0,
      delay: 2,
      duration: 1,
      stagger: 0.3,
    });

    gsap.to(svgOne.current, {
      x: 380,
      duration: 2,
      delay: 2,
    });

    gsap.to(pathTwo.current, {
      duration: 2,
      morphSVG: { shape: pathTwoD },
      ease: "power1.inOut",
    });
    gsap.to(pathThree.current, {
      x: 10,
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.to(pathfour.current, {
      x: 10,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.from(splitStudio.chars, {
      opacity: 0,
      y: 50,
      delay: 2,
      duration: 1,
      stagger: 0.3,
    });

    return () => splitName.revert();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {


      // const subheadingSplitLine = new SplitText(subheadingRef.current, {
      //   type: 'lines',
      //   linesClass: 'line overflow-hidden block',
      // });
      // const subheadingSplitWord = new SplitText(subheadingRef.current, {
      //   type: 'words',
      //   wordsClass: 'line overflow-hidden block',
      // });
      // gsap.from(subheadingSplitWord.words, {
      //   y: 100,
      //   opacity: 0,
      //   duration: 2,
      //   ease: 'power4.out',
      //   stagger: 0.05,
      // });

    });


    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={loaderRef} className="w-full absolute top-0 left-0 z-50">
        <div className="wrapper w-full h-screen flex justify-center items-center bg-colorOne">
          <div className="wrapper w-full">
            <div className="flex justify-center items-center">
              <div className="w-full h-fit border flex gap-14">

                <svg
                  ref={svgOne}
                  width="61"
                  height="76"
                  viewBox="0 0 51 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={pathOne}
                    d="M18 10.534L45 7V59L18 54.4563V10.534Z"
                    fill="white"
                  />
                  <path ref={pathTwo} d="M8.5 8L45 7V59L8.5 58V8Z" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M50 1H1V65H50V1ZM44 7H7.5V59H44V7Z"
                    fill="white"
                    stroke="white"
                  />
                  <ellipse
                    ref={pathThree}
                    cx="10"
                    cy="33.5"
                    rx="1"
                    ry="1.5"
                    fill="#2F3A2A"
                  />
                  <path
                    ref={pathfour}
                    d="M10 34H12H13"
                    stroke="#2F3A2A"
                    stroke-linecap="round"
                  />
                </svg>

                <span
                  ref={zebranoRef}
                  className="text-center text-[74px] font-bold text-white"
                >
                  ZEBRAN
                </span>

                <span
                  ref={studioRef}
                  className="text-center text-[74px] font-semibold text-white"
                >
                  Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestPage;
