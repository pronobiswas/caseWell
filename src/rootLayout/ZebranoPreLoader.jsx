import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(MorphSVGPlugin, SplitText);

const ZebranoPreLoader = () => {
    const svgOne = useRef(null);
  const pathOne = useRef(null);
  const pathTwo = useRef(null);
  const pathThree = useRef(null);
  const pathfour = useRef(null);
  const zebranoRef = useRef(null);
  const studioRef = useRef(null);
  const loaderRef = useRef(null);

    // useEffect(() => {
  //   const pathTwoD = pathOne.current.getAttribute("d");
  //   const splitName = new SplitText(zebranoRef.current, {
  //     type: "lines,words,chars",
  //     linesClass: 'line overflow-hidden relative block',
  //     wordsClass: 'words overflow-hidden block',
  //   })
  //   const splitStudio = new SplitText(studioRef.current, {
  //     type: "lines,words,chars",
  //     linesClass: 'line overflow-hidden relative',
  //     wordsClass: 'words overflow-hidden block',
  //   })


  //   gsap.from(splitName.chars, {
  //     opacity: 0,
  //     delay: 2,
  //     duration: 1,
  //     stagger: 0.3
  //   })

  //   gsap.to(svgOne.current, {
  //     x: 380,
  //     duration: 2,
  //     delay: 2
  //   })

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
  //     stagger: 0.3
  //   })

  //   return () => splitName.revert();


  // }, []);


  useEffect(() => {
    const pathTwoD = pathOne.current.getAttribute("d");

    const splitName = new SplitText(zebranoRef.current, {
      type: "lines,chars",
      linesClass: "line overflow-hidden block",
    });
    const splitStudio = new SplitText(studioRef.current, {
      type: "lines,chars",
      linesClass: "line overflow-hidden block pl-8",
    });

    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.to(pathTwo.current, {
      duration: 1,
      morphSVG: { shape: pathTwoD }
    });

    tl.to(svgOne.current, { x: 350, duration: 1.3 });
    tl.to(pathThree.current, { x: 10, duration: 2 }, "-2");
    tl.to(pathfour.current, { x: 10, duration: 2 }, "-2");

    tl.from(splitName.chars, {
      opacity: 0,
      x: -10,
      delay: 0.1,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=1");
    tl.from(splitStudio.chars, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.02,
      ease: "power2.out"
    },"-=0.7");
    tl.to(loaderRef.current,{
      // opacity:0,
      yPercent:-110,
      duration:1,
      ease:"power3.out"
    });

    return () => splitName.revert(); 
  }, []);



  return (
          <section ref={loaderRef} className="w-full absolute top-0 left-0 z-50">
        <div className="wrapper w-full h-screen flex justify-center items-center bg-colorOne">
          <div className="wrapper w-full">


            <div className="flex justify-center items-center gap-5">
              
                <svg ref={svgOne} width="61" height="76" viewBox="0 0 51 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path ref={pathOne} d="M18 10.534L45 7V59L18 54.4563V10.534Z" fill="white" />
                  <path ref={pathTwo} d="M8.5 8L45 7V59L8.5 58V8Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M50 1H1V65H50V1ZM44 7H7.5V59H44V7Z" fill="white" stroke="white" />
                  <ellipse ref={pathThree} cx="10" cy="33.5" rx="1" ry="1.5" fill="#2F3A2A" />
                  <path ref={pathfour} d="M10 34H12H13" stroke="#2F3A2A" stroke-linecap="round" />
                </svg>
              
                <span ref={zebranoRef} className="text-center text-[74px] font-bold text-white">ZEBRAN</span>
              
              
                <span ref={studioRef} className="text-center text-[74px] font-semibold text-white">Studio</span>
              
            </div>




          </div>
        </div>
      </section>
  )
}

export default ZebranoPreLoader