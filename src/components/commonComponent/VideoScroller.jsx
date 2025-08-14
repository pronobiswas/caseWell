import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const VideoScroller = () => {
    const videoRef = useRef(null);
    useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const onLoaded = () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top center",
          end: "bottom center",
          scrub: true
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
            <section id="videoScroler">
                <div className="wrapper w-full h-screen bg-colorOne flex justify-center items-center">
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
            </section>
        </>
    )
}

export default VideoScroller