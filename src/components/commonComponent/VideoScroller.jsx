import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin, SplitText);


const VideoScroller = () => {
    const videoRef = useRef(null);
    const svgOne = useRef(null);
    const pathOne = useRef(null);
    const pathTwo = useRef(null);
    const pathThree = useRef(null);
    const pathfour = useRef(null);
    const zebranoRef = useRef(null);
    const studioRef = useRef(null);
    const loaderRef = useRef(null);
    const [videoTime, setVideoTime] = useState(0)
    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const onLoaded = () => {
            setVideoTime(video.duration)
            gsap.to(video, {
                currentTime: video.duration,
                ease: "none",
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top top",
                    end: "+=500",
                    pin: true,
                    scrub: true,
                    markers: true
                }
            });
        };

        video.addEventListener("loadedmetadata", onLoaded);


        return () => {
            video.removeEventListener("loadedmetadata", onLoaded);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

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
    
        tl.from(svgOne.current, { x: 350, duration: 1.3 });
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
        <>
            <section id='banner'>
                <div className="wrapper w-full h-screen">
                    <div className="rows w-full h-1/4 border-b"></div>
                    <div className="rows w-full h-1/4 border-b bg-myColorOne">
                        {/* ====zebrano loader==== */}
                        <div className="loader">
                            <div className="loader-inner w-full flex justify-center items-center text-black">
                                <h1 ref={zebranoRef} className='text-5xl font-bold'>ZEBRAN</h1>
                                <div>
                                    <svg ref={svgOne} width="61" height="76" viewBox="0 0 51 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path ref={pathOne} d="M18 10.534L45 7V59L18 54.4563V10.534Z" fill="white" />
                                        <path ref={pathTwo} d="M8.5 8L45 7V59L8.5 58V8Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50 1H1V65H50V1ZM44 7H7.5V59H44V7Z" fill="white" stroke="white" />
                                        <ellipse ref={pathThree} cx="10" cy="33.5" rx="1" ry="1.5" fill="#2F3A2A" />
                                        <path ref={pathfour} d="M10 34H12H13" stroke="#2F3A2A" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <h1 ref={studioRef} className='text-5xl font-normal'>Studio</h1>
                            </div>
                        </div>
                        {/* ====zebrano loader==== */}
                    </div>
                    <div className="rows w-full h-1/4 border-b"></div>
                    <div className="rows w-full h-1/4 border-b"></div>

                </div>
            </section>
            <section id="videoScroler">
                <div className="w-full h-"></div>
                <div className="wrapper w-full h-screen bg-colorOne flex justify-center items-center">
                    <div className='w-full h-full'>

                        <video
                            ref={videoRef}
                            preload="auto"
                            muted
                            playsInline
                            style={{ maxWidth: "100%", height: "auto", display: "block" }}
                        >
                            <source src="/video/video1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoScroller