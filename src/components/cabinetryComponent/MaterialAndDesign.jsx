import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnComponent from '../homeComponents/utils/BtnComponent';

gsap.registerPlugin(ScrollTrigger);

const MaterialAndDesign = () => {
  const secRef = useRef(null);
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (!secRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        scale: 1.3,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
          markers: true,
        },
      });
    }, secRef); // pass the ref object, not .current

    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef}>
      <div className="wrapper w-full h-[560px] bg-bgOne flex gap-10 p-5">
        <div className="w-1/2 h-full">
          <div className="w-full lg:max-w-xl xl:max-w-2xl h-full pl-5 flex flex-col gap-5 justify-center">
            <h3 ref={headingRef} className="text-4xl font-myFont">Materials & design</h3>
            <p ref={descRef}>
              Our pivot doors are crafted from premium hardwoods such as solid oak, walnut,
              mahogany, and teak, known for their durability and stunning grain patterns.
              We offer a variety of finishes, from natural oils that enhance the wood's
              inherent beauty to custom stains and lacquers. Design options include integrated
              handles, flush panels, glass inserts, and bespoke carvings, ensuring your pivot
              door is a true work of art.
            </p>
            <BtnComponent text="Configure Now" />
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="w-full h-full relative overflow-hidden">
            {/* ✅ ref added here */}
            <img
              ref={imgRef}
              src="/images/pivotdoors1.jpg"
              alt="sample image"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialAndDesign;
