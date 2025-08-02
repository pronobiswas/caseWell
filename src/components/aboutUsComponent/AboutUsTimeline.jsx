import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutUsTimeline = () => {
    const timelineRef = useRef(null);
useEffect(() => {
  if (!timelineRef.current) return;

  const ctx = gsap.context(() => {
    ScrollTrigger.batch('.card', {
      start: 'top 80%',
      end: 'top 40%',
      onEnter: (batch) =>
        gsap.from(batch, {
          opacity: 0,
          y: 100,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
        }),
      // optional reverse animation
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.in',
        }),
      markers: true,
    });
  }, timelineRef);

  return () => ctx.revert();
}, []);



    return (
        <>
            <section id="aboutTimeline">
                <div className="timelineWrapper relative w-full h-full min-h-screen flex gap-8 px-5">
                    {/* ====timeline progress====== */}
                    <div className="timelineProgress w-[2px] h-full min-h-screen bg-black absolute top-0 left-7"></div>
                    {/* ======text coll======= */}
                    <div className="textCol w-1/2 h-full flex flex-col gap-5">
                        <div className="card w-full p-5 h-56 bg-slate-500"></div>
                        <div className="card w-full p-5 h-56 bg-slate-500"></div>
                        <div className="card w-full p-5 h-56 bg-slate-500"></div>
                        <div className="card w-full p-5 h-56 bg-slate-500"></div>
                    </div>
                    {/* ========image coll======== */}
                    <div className="imagecol w-1/2 h-full flex flex-col gap-5">
                        <div className="imgCard w-full h-56 bg-green-500"></div>
                        <div className="imgCard w-full h-56 bg-green-500"></div>
                        <div className="imgCard w-full h-56 bg-green-500"></div>
                        <div className="imgCard w-full h-56 bg-green-500"></div>
                        <div className="imgCard w-full h-56 bg-green-500"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsTimeline