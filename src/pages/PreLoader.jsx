import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { TypeAnimation } from "react-type-animation";


gsap.registerPlugin(MorphSVGPlugin, SplitText);

const TestPage = () => {

  const loaderRef = useRef(null);
  const text2Ref = useRef(null);

  // useEffect(() => {
  //   const pathTwoD = pathOne.current.getAttribute("d");
  //   const splitName = new SplitText(zebranoRef.current, {
  //     type: "lines,words,chars",
  //     linesClass: "line overflow-hidden relative block",
  //     wordsClass: "words overflow-hidden block",
  //   });
  //   const splitStudio = new SplitText(studioRef.current, {
  //     type: "lines,words,chars",
  //     linesClass: "line overflow-hidden relative",
  //     wordsClass: "words overflow-hidden block",
  //   });

  //   gsap.from(splitName.chars, {
  //     opacity: 0,
  //     delay: 2,
  //     duration: 1,
  //     stagger: 0.3,
  //   });

  //   gsap.to(svgOne.current, {
  //     x: 380,
  //     duration: 2,
  //     delay: 2,
  //   });

  //   gsap.to(pathTwo.current, {
  //     duration: 2,
  //     morphSVG: { shape: pathTwoD },
  //     ease: "power1.inOut",
  //   });
  //   gsap.to(pathThree.current, {
  //     x: 10,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   });
  //   gsap.to(pathfour.current, {
  //     x: 10,
  //     duration: 2,
  //     ease: "power1.inOut",
  //   });

  //   gsap.from(splitStudio.chars, {
  //     opacity: 0,
  //     y: 50,
  //     delay: 2,
  //     duration: 1,
  //     stagger: 0.3,
  //   });

  //   return () => splitName.revert();
  // }, []);

  // ======animate text with gsap =======

  useEffect(() => {
    const texts = ["Hello, world!", "test text", "Demo text"];
    let current = 0;
    let ctx = gsap.context(() => {
      function animateText(index) {
        text2Ref.current.innerHTML = texts[index];
        const split = new SplitText(text2Ref.current, {
          type: "lines,words,chars",
          linesClass: "line overflow-hidden relative block",
          wordsClass: "words overflow-hidden block",
        });
        const tl = gsap.timeline();
        tl.from(split.chars, {
          opacity: 0,
          duration: 0.3,
          stagger: 0.3,
        })
        .to(split.chars, {
          opacity: 0,
          duration: 0.3,
          stagger: 0.3,
          onComplete: () => {
            split.revert();
            current = (index + 1) % texts.length;
            animateText(current);
          }
        });
      }
      animateText(current);
    });
    return () => ctx.revert();
  }, []);





  return (
    <>
      <section ref={loaderRef} className="w-full absolute top-0 left-0 z-50">
        <div className="wrapper w-full h-screen flex justify-center items-center bg-colorOne">
          <div className="wrapper w-full">
            <div className="flex justify-center items-center">
              <div className="w-full h-fit border gap-14 text-white text-5xl font-bold">
                {/* ----textanimation line one--- */}
                <div className="flex">
                  <h1>Created by our makers,</h1>
                  <TypeAnimation
                    cursor={false}
                    sequence={[
                      'Hello, world!',
                      1000,
                      'Welcome to ',
                      1000,
                      'Type-Animation!',
                      2000,
                      '',
                    ]}
                    wrapper="h1"

                    repeat={Infinity}
                  />
                </div>
                {/* ----text animation line two---- */}
                <div className="flex">
                  <h1>perfected in</h1>
                  <h1 ref={text2Ref} className="text-green-700">Hello, world!</h1>
                </div>
                {/* ---text animation line three------ */}
                <h1>production.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestPage;
