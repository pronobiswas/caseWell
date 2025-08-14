import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const VideoScroller = () => {
    const videoRef = useRef(null);
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
                    pin:true,
                    scrub: true,
                    markers:true
                }
            });
        };

        video.addEventListener("loadedmetadata", onLoaded);
        

        return () => {
            video.removeEventListener("loadedmetadata", onLoaded);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
        <section id='banner'>
            <div className="wrapper w-full h-screen">
                <div className="rows w-full h-1/4 border-b"></div>
                <div className="rows w-full h-1/4 border-b"></div>
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